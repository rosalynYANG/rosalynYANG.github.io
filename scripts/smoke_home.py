from pathlib import Path
from playwright.sync_api import sync_playwright

out = Path(__file__).resolve().parents[1] / "test-artifacts"
out.mkdir(exist_ok=True)

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page(viewport={"width": 1440, "height": 1000}, device_scale_factor=1)
    errors = []
    page.on("console", lambda message: errors.append(f"console:{message.type}:{message.text}") if message.type == "error" else None)
    page.on("pageerror", lambda error: errors.append(f"pageerror:{error}"))
    page.goto("http://127.0.0.1:3100", wait_until="networkidle")
    assert "小样儿" in page.title()
    assert page.locator("h1").is_visible()
    feeder = page.get_by_role("button", name="投喂一个灵感")
    before = page.locator(".feed-result strong").inner_text()
    feeder.click()
    after = page.locator(".feed-result strong").inner_text()
    assert before != after
    page.screenshot(path=str(out / "home-desktop.png"), full_page=True)

    mobile = browser.new_page(viewport={"width": 390, "height": 844}, device_scale_factor=1)
    mobile.goto("http://127.0.0.1:3100", wait_until="networkidle")
    assert mobile.get_by_role("button", name="投喂一个灵感").is_visible()
    mobile.screenshot(path=str(out / "home-mobile.png"), full_page=True)
    overflow = mobile.evaluate("""Array.from(document.querySelectorAll('*')).map(el => ({tag: el.tagName, cls: el.className, right: el.getBoundingClientRect().right, width: el.getBoundingClientRect().width})).filter(x => x.right > document.documentElement.clientWidth + 1).slice(0, 10)""")
    assert mobile.evaluate("document.documentElement.scrollWidth <= document.documentElement.clientWidth"), overflow
    browser.close()

if errors:
    raise AssertionError("\n".join(errors))

print("home smoke test passed; desktop and mobile screenshots saved")
