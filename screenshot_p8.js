const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 794, height: 1123 }); // A4 size
  await page.goto('http://localhost:3000/pagina8');
  await page.waitForLoadState('networkidle');
  await page.screenshot({ path: '/home/jules/verification/pagina8_screenshot_v3.png' });
  await browser.close();
})();
