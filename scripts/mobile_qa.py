from pathlib import Path
from playwright.sync_api import sync_playwright

BASE = "http://127.0.0.1:3000"
OUT = Path("qa-mobile")
OUT.mkdir(exist_ok=True)

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    for width, height in ((390, 844), (430, 932), (768, 1024)):
        page = browser.new_page(viewport={"width": width, "height": height}, device_scale_factor=1)
        errors = []
        page.on("console", lambda msg: errors.append(msg.text) if msg.type == "error" else None)
        page.goto(f"{BASE}/world-door/index.html", wait_until="domcontentloaded", timeout=120000)
        page.wait_for_selector("#world-strip", timeout=120000)
        before = page.locator("#world-strip").evaluate("el => getComputedStyle(el).transform")
        page.mouse.move(width * .55, height * .7)
        page.mouse.down()
        page.mouse.move(width * .2, height * .7, steps=8)
        page.mouse.up()
        after = page.locator("#world-strip").evaluate("el => getComputedStyle(el).transform")
        metrics = page.evaluate("""() => ({
          world: document.querySelector('.experience').dataset.world,
          innerHeight,
          bodyHeight: document.body.scrollHeight,
          sceneHeight: document.querySelector('.home-panel > .scene-art').getBoundingClientRect().height,
          homeHeight: document.querySelector('.home-panel').getBoundingClientRect().height,
          hallHeight: document.querySelector('.hall-panorama').getBoundingClientRect().height
        })""")
        print(width, height, metrics, flush=True)
        assert before == after, f"closed cover moved at {width}x{height}"
        assert metrics["world"] == "closed"
        assert abs(metrics["bodyHeight"] - metrics["innerHeight"]) <= 2
        assert abs(metrics["sceneHeight"] - metrics["innerHeight"]) <= 2
        page.screenshot(path=str(OUT / f"cover-{width}x{height}.png"))

        page.locator('[data-action="expand"]').click(force=True)
        page.wait_for_timeout(1150)
        opened = page.evaluate("""() => ({
          world: document.querySelector('.experience').dataset.world,
          region: document.querySelector('.experience').dataset.region,
          innerHeight,
          hallHeight: document.querySelector('.hall-panorama').getBoundingClientRect().height,
          camera: getComputedStyle(document.querySelector('#world-strip')).transform
        })""")
        assert opened["world"] == "open"
        assert opened["region"] == "world"
        assert abs(opened["hallHeight"] - opened["innerHeight"]) <= 2
        drag_before = opened["camera"]
        page.mouse.move(width * .75, height * .65)
        page.mouse.down()
        page.mouse.move(width * .25, height * .65, steps=10)
        page.mouse.up()
        page.wait_for_timeout(250)
        drag_after = page.locator("#world-strip").evaluate("el => getComputedStyle(el).transform")
        assert drag_before != drag_after, f"opened world did not pan at {width}x{height}"
        page.screenshot(path=str(OUT / f"world-{width}x{height}.png"))
        assert not errors, f"console errors at {width}x{height}: {errors}"
        page.close()

    for path in ("flower-curation", "ai-cultural-guide", "financial-ai-service"):
        page = browser.new_page(viewport={"width": 390, "height": 844}, device_scale_factor=1)
        page.goto(f"{BASE}/projects/{path}", wait_until="domcontentloaded", timeout=120000)
        page.wait_for_selector(".project-toc-trigger", timeout=120000)
        trigger = page.locator(".project-toc-trigger")
        assert trigger.is_visible(), f"TOC trigger hidden on {path}"
        trigger.click()
        sheet = page.locator(".project-toc-sheet")
        assert sheet.get_attribute("aria-hidden") == "false"
        sheet.locator("nav button").nth(1).click()
        page.wait_for_timeout(650)
        assert sheet.get_attribute("aria-hidden") == "true"
        page.screenshot(path=str(OUT / f"toc-{path}.png"))
        page.close()
    browser.close()

print("mobile QA passed")
