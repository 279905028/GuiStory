'use strict';
const fs = require('node:fs');
const path = require('node:path');
const { pathToFileURL } = require('node:url');
const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch({ headless: true, executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome' });
  try {
    const context = await browser.newContext({ viewport: { width: 1440, height: 1000 } });
    const page = await context.newPage(), errors = [];
    page.on('pageerror', e => errors.push(e.message));
    await page.goto(pathToFileURL(path.join(__dirname, 'index.html')).href);
    await page.waitForFunction(() => [...document.images].every(i => i.complete && i.naturalWidth === 1024));
    const images = await page.locator('img').count();
    await page.selectOption('#character', 'wenwen');
    const wenwen = await page.locator('.card:visible').count();
    await page.selectOption('#character', 'all');
    await page.selectOption('#scope', 'new');
    const newly = await page.locator('.card:visible').count();
    await page.selectOption('#scope', 'look');
    const looks = await page.locator('.card:visible').count();
    await page.click('#dark');
    const dark = await page.locator('body').evaluate(e => e.classList.contains('dark'));
    await page.screenshot({ path: path.join(__dirname, 'qa-gallery-desktop.png'), fullPage: true });
    await page.setViewportSize({ width: 390, height: 844 });
    const noOverflow = await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth);
    await page.screenshot({ path: path.join(__dirname, 'qa-gallery-mobile.png'), fullPage: true });
    const report = { date: '2026-10-22', scope: '独立本地画廊；新建隔离浏览器上下文，非游戏页面或玩家存档测试', browser: await browser.version(), images, wenwenFilter: wenwen, newFilter: newly, lookFilter: looks, darkToggle: dark, mobileNoOverflow: noOverflow, pageErrors: errors, pass: images === 53 && wenwen === 7 && newly === 30 && looks === 9 && dark && noOverflow && errors.length === 0 };
    fs.writeFileSync(path.join(__dirname, 'gallery-check.json'), JSON.stringify(report, null, 2) + '\n');
    console.log(report); if (!report.pass) process.exitCode = 1;
  } finally { await browser.close(); }
})().catch(e => { console.error(e); process.exitCode = 1; });
