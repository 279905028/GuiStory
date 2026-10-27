'use strict';

const fs = require('node:fs'), path = require('node:path'), vm = require('node:vm');
const http = require('node:http'), assert = require('node:assert/strict');
const { chromium } = require('/Users/yipin/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const root = path.resolve(__dirname, '../..');
const scope = { window: {} };
vm.runInNewContext(fs.readFileSync(path.join(root, 'story.js'), 'utf8'), scope);
const story = JSON.parse(JSON.stringify(scope.window.RAIN_STORY));
const { StoryEngine } = require(path.join(root, 'engine.js'));
const { reach } = require(path.join(root, '任务拆分/全十章/校验/E08/fixture.cjs'));
const compat = require(path.join(root, 'save-compat.js'));
const art = JSON.parse(fs.readFileSync(path.join(root, 'assets/manifests/current-art.json')));
const report = { date: '2026-10-27', scope: '目录迁移后Chrome桌面与手机尺寸专项；实际正式story，独立临时浏览器存储', checks: [], screenshots: [], pageErrors: [], httpErrors: [], notTested: ['Safari', '实体手机', '公网发布', 'v1.1新剧情接入'] };
let browser, server;
async function main() {
  server = http.createServer((req, res) => {
    const name = decodeURIComponent(req.url.split('?')[0]).replace(/^\//, '') || 'index.html';
    if (name === 'favicon.ico') return res.writeHead(204).end();
    const file = path.resolve(root, name);
    if (!file.startsWith(root + path.sep)) return res.writeHead(403).end();
    try {
      const bytes = fs.readFileSync(file);
      res.setHeader('Content-Type', ({ '.js': 'text/javascript', '.css': 'text/css', '.webp': 'image/webp', '.png': 'image/png', '.jpg': 'image/jpeg', '.json': 'application/json' })[path.extname(file)] || 'text/html; charset=utf-8');
      res.end(bytes);
    } catch { report.httpErrors.push(name); res.writeHead(404).end(); }
  });
  await new Promise((resolve, reject) => { server.once('error', reject); server.listen(0, '127.0.0.1', resolve); });
  const origin = 'http://127.0.0.1:' + server.address().port;
  browser = await chromium.launch({ channel: 'chrome', headless: true });
  report.browser = await browser.version();
  const shots = path.join(__dirname, 'screenshots'); fs.mkdirSync(shots, { recursive: true });
  const shot = async (page, name) => { await page.screenshot({ path: path.join(shots, name + '.png') }); report.screenshots.push('screenshots/' + name + '.png'); };
  const scenarios = [
    { label: 'avatar', node: 'tc_c01_common_slope_03' },
    { label: 'sprite', node: 'tc_c01_common_salon_02' },
    { label: 'cg', node: 'tc_c03_piao_say_clearly_002', selections: { route: 'piao' } },
    { label: 'human', node: 'tc_c08_huangqiuqiu_her_decision_028', selections: { route: 'huangqiuqiu', qiuSignal: 'record', qiuReply: 'reply' } }
  ];
  for (const [name, viewport] of [['desktop', { width: 1440, height: 900 }], ['phone', { width: 390, height: 844 }]]) {
    const context = await browser.newContext({ viewport });
    await context.route('**/*', route => route.request().url().startsWith(origin + '/') ? route.continue() : route.abort());
    const page = await context.newPage(); page.on('pageerror', e => report.pageErrors.push(e.message));
    await page.goto(origin, { waitUntil: 'load' });
    const cover = await page.locator('#title-cover').evaluate(i => ({ src: i.currentSrc, width: i.naturalWidth, complete: i.complete }));
    assert(cover.complete && cover.width > 0);
    assert(cover.src.endsWith('/' + story.covers[name === 'desktop' ? 'desktop' : 'mobile']));
    await shot(page, 'cover-' + name); report.checks.push({ name: '响应式封面 ' + name, passed: true, source: cover.src.split(origin + '/')[1] });
    if (name === 'desktop') {
      const decoded = await page.evaluate(async assets => {
        const results = [];
        for (let i = 0; i < assets.length; i += 6) {
          results.push(...await Promise.all(assets.slice(i, i + 6).map(a => new Promise(resolve => {
            const image = new Image(); image.onload = () => resolve({ path: a.path, width: image.naturalWidth, height: image.naturalHeight, passed: image.naturalWidth === a.width && image.naturalHeight === a.height });
            image.onerror = () => resolve({ path: a.path, passed: false }); image.src = '/' + a.path;
          }))));
        }
        return results;
      }, art.assets);
      assert.equal(decoded.length, 162); assert(decoded.every(x => x.passed)); report.imageDecode = decoded;
      report.checks.push({ name: '162张采用图HTTP加载与浏览器解码', passed: true, count: decoded.length });
    }
    for (const item of scenarios) {
      // 先离开上一段演出，避免上一引擎的 pagehide 自动存档覆盖下一测试状态。
      await page.goto(origin, { waitUntil: 'load' });
      const state = reach(new StoryEngine(story), item.node, item.selections || {}).snapshot();
      const prefix = compat.getProfile(story).namespace, settings = { textSpeed: 'instant', sound: false, volume: 0.35 };
      await page.evaluate(({ prefix, save, settings }) => { localStorage.clear(); localStorage.setItem(prefix + 'auto', save); localStorage.setItem(prefix + 'settings', JSON.stringify(settings)); }, { prefix, save: JSON.stringify({ format: 1, ...compat.metadata(story), savedAt: '2026-10-27T00:00:00.000Z', state, settings }), settings });
      await page.goto(origin, { waitUntil: 'load' }); await page.locator('#continue-btn').click();
      await page.waitForFunction(() => document.body.dataset.screen === 'game');
      await page.waitForFunction(() => [...document.querySelectorAll('#scene-bg,#character,#speaker-avatar,#cg-image')].filter(i => !i.hidden && i.getAttribute('src')).every(i => i.complete && i.naturalWidth > 0));
      const images = await page.evaluate(() => [...document.querySelectorAll('img')].filter(i => !i.hidden && i.getAttribute('src') && i.getBoundingClientRect().width > 0).map(i => ({ id: i.id, src: i.getAttribute('src'), width: i.naturalWidth, height: i.naturalHeight })));
      assert(images.length > 0 && images.every(i => i.width > 0));
      assert(images.every(i => i.src.startsWith('assets/current/')));
      if (item.label === 'sprite') assert(images.some(i => i.id === 'character' && i.src.includes('xiaoman')));
      if (item.label === 'cg') assert(images.some(i => i.src === story.cgs['tc-cg-piao-choice'].image));
      if (item.label === 'human') assert(images.some(i => i.id === 'character' && i.src.includes('human')));
      await shot(page, item.label + '-' + name);
      report.checks.push({ name: item.label + ' ' + name, passed: true, node: item.node, images });
    }
    await page.goto(origin + '/assets/index.html', { waitUntil: 'load' });
    assert.equal(await page.locator('article').count(), 162);
    for (const category of ['characters', 'backgrounds', 'cg', 'ui', 'posters']) {
      await page.locator('[data-filter="' + category + '"]').click();
      assert.equal(await page.locator('article:visible').count(), art.assets.filter(a => a.category === category).length);
    }
    await page.locator('[data-filter="characters"]').click();
    await page.locator('#search').fill('wenwen'); assert(await page.locator('article:visible').count() > 0);
    await page.locator('#background').click(); assert(await page.locator('body').evaluate(b => b.classList.contains('dark')));
    assert(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth));
    await shot(page, 'gallery-' + name); report.checks.push({ name: '图库筛选、搜索、底色与无溢出 ' + name, passed: true });
    await context.close();
  }
  assert.deepEqual(report.pageErrors, []); assert.deepEqual(report.httpErrors, []); report.passed = true;
}
main().catch(e => { report.passed = false; report.error = e.stack; process.exitCode = 1; }).finally(async () => {
  if (browser) await browser.close();
  if (server?.listening) await new Promise(resolve => server.close(resolve));
  fs.writeFileSync(path.join(__dirname, 'browser-results.json'), JSON.stringify(report, null, 2) + '\n');
  console.log(JSON.stringify({ passed: report.passed, checks: report.checks.length, decodedImages: report.imageDecode?.length, screenshots: report.screenshots.length, error: report.error, httpErrors: report.httpErrors, pageErrors: report.pageErrors }, null, 2));
});
