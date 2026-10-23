'use strict';
const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const { pathToFileURL } = require('node:url');
const { chromium } = require('playwright');
const root = path.resolve(__dirname, '../..');
const manifest = JSON.parse(fs.readFileSync(path.join(root, 'assets/ten-chapter/a06-adoption.json')));
(async () => {
  const browser = await chromium.launch({ headless: true, executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome' });
  try {
    const context = await browser.newContext({ viewport: { width: 1440, height: 1000 } });
    const page = await context.newPage();
    const errors = [];
    page.on('pageerror', e => errors.push(e.message));
    await page.goto(pathToFileURL(path.join(root, 'assets/ten-chapter/index.html')).href);
    await page.waitForFunction(() => [...document.images].every(i => i.complete && i.naturalWidth > 0), { timeout: 60000 });
    const loaded = await page.locator('img').evaluateAll(images => images.map(i => ({ width: i.naturalWidth, height: i.naturalHeight, fit: getComputedStyle(i).objectFit })));
    assert.equal(loaded.length, manifest.assets.length);
    loaded.forEach((i, n) => { assert.equal(i.width, manifest.assets[n].width); assert.equal(i.height, manifest.assets[n].height); assert.equal(i.fit, 'contain'); });
    const filters = {};
    for (const kind of [...new Set(manifest.assets.map(a => a.kind))]) {
      await page.selectOption('#kind', kind);
      filters[kind] = await page.locator('article:visible').count();
      assert.equal(filters[kind], manifest.assets.filter(a => a.kind === kind).length);
    }
    await page.selectOption('#kind', 'all');
    await page.fill('#search', 'tc-char-huangqiuqiu-human-base');
    assert.equal(await page.locator('article:visible').count(), 1);
    await page.fill('#search', '不存在的资源');
    assert.equal(await page.locator('article:visible').count(), 0);
    await page.fill('#search', '');
    await page.click('#theme');
    assert(await page.locator('body').evaluate(b => b.classList.contains('light')));
    await page.click('#background');
    assert(await page.locator('body').evaluate(b => b.classList.contains('dark')));
    await page.screenshot({ path: path.join(__dirname, 'gallery-desktop.png') });
    await page.selectOption('#kind', 'background');
    await page.screenshot({ path: path.join(__dirname, 'gallery-backgrounds.png') });
    await page.selectOption('#kind', 'cg');
    await page.screenshot({ path: path.join(__dirname, 'gallery-cg.png') });
    const mobileContext = await browser.newContext({ viewport: { width: 390, height: 844 } });
    const mobile = await mobileContext.newPage();
    mobile.on('pageerror', e => errors.push(e.message));
    await mobile.goto(page.url());
    await mobile.waitForFunction(() => [...document.images].every(i => i.complete && i.naturalWidth > 0));
    assert(await mobile.evaluate(() => document.documentElement.scrollWidth <= innerWidth));
    const bounds = await mobile.locator('img').evaluateAll(images => images.map(i => ({ left: i.getBoundingClientRect().left, right: i.getBoundingClientRect().right, fit: getComputedStyle(i).objectFit })));
    assert(bounds.every(i => i.left >= 0 && i.right <= 390 && i.fit === 'contain'));
    await mobile.screenshot({ path: path.join(__dirname, 'gallery-mobile.png') });
    await mobile.selectOption('#kind', 'avatar');
    assert.equal(await mobile.locator('article:visible').count(), 12);
    await mobile.locator('article:visible').first().scrollIntoViewIfNeeded();
    await mobile.screenshot({ path: path.join(__dirname, 'gallery-mobile-avatar.png') });
    assert.equal(errors.length, 0);
    fs.writeFileSync(path.join(__dirname, 'gallery-check.json'), JSON.stringify({
      date: '2026-10-23', pass: true, browser: await browser.version(), totalImages: loaded.length,
      dimensionsMatch: true, allImagesContain: true, filters, search: true, theme: true, darkTransparencyBackground: true,
      mobile: { viewport: [390, 844], noHorizontalOverflow: true, imageBoundsPass: true, avatarFilterCount: 12 },
      pageErrors: errors, storage: '全新非持久浏览器上下文；仅独立画廊，不打开游戏或玩家存储。',
      scope: '当前A06静态画廊加载与交互，不等同E09/E10游戏、实体手机或其他浏览器验收。'
    }, null, 2) + '\n');
    console.log(JSON.stringify({ pass: true, loaded: loaded.length, filters, noPageErrors: true }));
  } finally { await browser.close(); }
})().catch(e => { console.error(e); process.exitCode = 1; });
