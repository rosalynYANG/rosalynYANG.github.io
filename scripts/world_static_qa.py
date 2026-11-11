from pathlib import Path
from playwright.sync_api import sync_playwright

root = Path(__file__).resolve().parents[1]
url = (root / "public" / "world-door" / "index.html").as_uri()
out = root / "qa-mobile" / "cover-final-390x844.png"
with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page(viewport={"width": 390, "height": 844})
    page.goto(url, wait_until="load")
    page.wait_for_timeout(250)
    assert page.locator(".hero-copy").is_visible()
    box = page.locator(".hero-copy").bounding_box()
    assert box and 0 <= box["x"] < 390 and box["x"] + box["width"] <= 391
    page.screenshot(path=str(out))
    browser.close()
print("static world QA passed")
