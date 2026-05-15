import asyncio
from playwright.async_api import async_playwright

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page(viewport={"width": 1200, "height": 1600})

        for i in range(9, 12):
            url = f'http://localhost:9005/pagina{i}'
            filename = f'pagina{i}.png'
            await page.goto(url)
            await page.wait_for_timeout(2000)
            await page.screenshot(path=filename, full_page=True)
            print(f"{filename} saved")

        await browser.close()

asyncio.run(main())
