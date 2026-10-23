'use strict';
// 仅使用新建非持久浏览器 context、随机本机端口和自然回放的测试存档。
const fs = require('node:fs');
const path = require('node:path');
const http = require('node:http');
const assert = require('node:assert/strict');
const { chromium } = require('playwright');
const { root, load, read, fingerprints, codeFiles, reach, StoryEngine } = require('./verify.cjs');
const { CONTENT_VERSION } = require('../../save-compat.js');
const { story, before, sources, referenced } = load();
const prefix = sources['game.js'].match(/const PREFIX = ['"]([^'"]+)['"]/)?.[1];
assert(prefix, '未发现存档空间');
const settings = { textSpeed: 'instant', sound: false, volume: .35 };
const snapshot = id => reach(id, {}, before).snapshot();
const encode = state => JSON.stringify({ format: 1, contentVersion: CONTENT_VERSION, savedAt: new Date().toISOString(), state, settings });
const frozen = Object.fromEntries(codeFiles.map(file => [file, read(file)]));
const report = { startedAt: new Date().toISOString(), pass: false, initialHashes: fingerprints(), cases: [], decodeResults: [], faults: [], screenshots: [], pageErrors: [], errors: [], requests: [], limitations: [
  '桌面 Chrome 的五种模拟视口；不等同实体手机、Safari 或 Firefox 验收。',
  '隔离存档由迁移前正式剧情自然回放构造；不访问玩家存储，也不代表公网发布验收。',
  '缺图用指定 WebP 请求故障注入验证，预期资源错误单列；正常运行要求无请求失败、HTTP 错误与控制台错误。'
] };
let browser, origin;
const mime = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8', '.webp': 'image/webp', '.png': 'image/png', '.json': 'application/json; charset=utf-8' };
const server = http.createServer((request, response) => {
  const pathname = decodeURIComponent(new URL(request.url, 'http://localhost').pathname);
  if (pathname === '/favicon.ico') { response.writeHead(204); response.end(); return; }
  const file = path.resolve(root, '.' + (pathname === '/' ? '/index.html' : pathname));
  if (!file.startsWith(root + path.sep)) { response.writeHead(403); response.end(); return; }
  const rel = path.relative(root, file);
  const done = (error, data) => {
    if (error) { response.writeHead(404); response.end('not found'); return; }
    response.writeHead(200, { 'Content-Type': mime[path.extname(file)] || 'application/octet-stream', 'Cache-Control': 'no-store' }); response.end(data);
  };
  if (frozen[rel]) done(null, frozen[rel]); else fs.readFile(file, done);
});
async function createPage(viewport, nodeId, blockedPath) {
  const context = await browser.newContext({ viewport, reducedMotion: 'reduce' });
  const traffic = { requests: [], failures: [], responses: [], consoleErrors: [], pageErrors: [], faultRequests: [] };
  await context.route('**/*', route => {
    const url = route.request().url();
    if (!url.startsWith(origin + '/')) { traffic.failures.push({ url, reason: '禁止外网请求' }); return route.abort(); }
    if (blockedPath && new URL(url).pathname === '/' + blockedPath) {
      traffic.faultRequests.push(blockedPath); return route.abort('failed');
    }
    return route.continue();
  });
  await context.addInitScript(({ prefix, settings, auto }) => {
    if (!sessionStorage.getItem('__webp_seeded')) {
      localStorage.setItem(prefix + 'settings', JSON.stringify(settings));
      if (auto) localStorage.setItem(prefix + 'auto', auto);
      sessionStorage.setItem('__webp_seeded', '1');
    }
  }, { prefix, settings, auto: nodeId ? encode(snapshot(nodeId)) : null });
  const page = await context.newPage();
  page.setDefaultTimeout(10000);
  page.on('request', request => traffic.requests.push(request.url()));
  page.on('requestfailed', request => {
    if (!blockedPath || new URL(request.url()).pathname !== '/' + blockedPath) traffic.failures.push({ url: request.url(), reason: request.failure()?.errorText });
  });
  page.on('response', response => { if (response.status() >= 400) traffic.responses.push({ url: response.url(), status: response.status() }); });
  page.on('pageerror', error => traffic.pageErrors.push(error.message));
  page.on('console', message => { if (message.type() === 'error') {
    const location = message.location().url;
    if (!blockedPath || !location.endsWith('/' + blockedPath)) traffic.consoleErrors.push({ text: message.text(), location });
  } });
  await page.goto(origin, { waitUntil: 'networkidle' });
  return { context, page, traffic };
}
function assertTraffic(traffic) {
  assert.deepEqual(traffic.failures, [], '非预期请求失败');
  assert.deepEqual(traffic.responses, [], 'HTTP 错误');
  assert.deepEqual(traffic.consoleErrors, [], '控制台错误');
  assert.deepEqual(traffic.pageErrors, [], '页面异常');
  assert.deepEqual(traffic.requests.filter(url => /\.(?:png|jpe?g)(?:[?#]|$)/i.test(url)), [], '运行时请求了旧位图');
  report.requests.push(...traffic.requests);
}
async function waitImage(page, id, expected) {
  await page.waitForFunction(({ id, expected }) => { const image = document.getElementById(id); return image?.complete && image.naturalWidth > 0 && (!expected || image.getAttribute('src') === expected); }, { id, expected });
  return page.locator('#' + id).evaluate(image => ({ src: image.currentSrc || image.src, width: image.naturalWidth, height: image.naturalHeight, visible: !image.hidden && getComputedStyle(image).display !== 'none' }));
}
async function assertNode(page, id) {
  await page.waitForFunction(text => document.getElementById('dialogue-text')?.textContent === text, story.nodes[id].text);
}
async function loadNode(page, id) {
  await page.evaluate(({ prefix, save }) => localStorage.setItem(prefix + 'slot3', save), { prefix, save: encode(snapshot(id)) });
  const button = page.locator('#game-screen [data-action="load"]');
  await button.click();
  await page.getByRole('button', { name: /手动存档 3/ }).click();
  await assertNode(page, id);
}
async function viewportCase(viewport) {
  const frame = await createPage(viewport, 's1_arrive_02');
  const { page, context, traffic } = frame;
  try {
    const cover = await waitImage(page, 'title-cover');
    const mobile = viewport.width <= 760 && viewport.height > viewport.width;
    assert(cover.src.endsWith(mobile ? '/assets/cover-b-mobile.webp' : '/assets/cover-b-desktop.webp'), '封面响应式选择错误');
    const capture = async label => {
      const file = label + '-' + viewport.width + 'x' + viewport.height + '.png';
      await page.locator('#toast').waitFor({ state: 'hidden' });
      await page.screenshot({ path: path.join(__dirname, file) }); report.screenshots.push({ file: 'qa/webp-20261021/' + file, viewport, label });
    };
    await capture('title');
    await page.locator('#continue-btn').click();
    await assertNode(page, 's1_arrive_02');
    await page.waitForFunction(() => document.getElementById('app').dataset.cgState === 'ready');
    const cg = await waitImage(page, 'cg-image', story.cgs.cg01.image);
    const cgLayout = await page.evaluate(() => {
      const image = document.getElementById('cg-image'), r = image.getBoundingClientRect(), text = document.getElementById('dialogue-box').getBoundingClientRect();
      return { fit: getComputedStyle(image).objectFit, image: { left: r.left, top: r.top, right: r.right, bottom: r.bottom, width: r.width, height: r.height }, dialogue: { left: text.left, top: text.top, right: text.right, bottom: text.bottom } };
    });
    await capture('cg');
    assert.equal(cgLayout.fit, 'contain');
    const r = cgLayout.image, t = cgLayout.dialogue;
    assert(r.bottom <= t.top + 1 || r.top >= t.bottom - 1 || r.right <= t.left + 1 || r.left >= t.right - 1, 'CG 与对白重叠');
    await loadNode(page, 's2_counter_14');
    const sprite = await waitImage(page, 'character', story.characters.shijiang.expressions['action-thinking']);
    assert(sprite.visible, '人物差分未显示');
    const alpha = await page.locator('#character').evaluate(image => {
      const canvas = document.createElement('canvas'); canvas.width = image.naturalWidth; canvas.height = image.naturalHeight;
      const ctx = canvas.getContext('2d', { willReadFrequently: true }); ctx.drawImage(image, 0, 0);
      const pixels = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
      let transparent = 0, visible = 0, maximumAlpha = 0;
      for (let i = 3; i < pixels.length; i += 4) { if (pixels[i] === 0) transparent++; if (pixels[i] > 0) visible++; maximumAlpha = Math.max(maximumAlpha, pixels[i]); }
      return { transparent, visible, maximumAlpha };
    });
    assert(alpha.transparent > 0 && alpha.visible > 0, '人物透明像素未保留');
    await loadNode(page, 's3_stall_01');
    const node = story.nodes.s3_stall_01, bgKey = node.bg ?? story.scenes[node.scene].bg;
    const background = await waitImage(page, 'scene-bg', story.backgrounds[bgKey]);
    assert(background.visible);
    const heroine = await waitImage(page, 'character', story.characters.xiaoman.expressions['expression-smile']);
    assert(heroine.visible);
    await capture('story');
    await page.locator('#game-screen [data-action="save"]').click();
    await page.getByRole('button', { name: /手动存档 1/ }).click();
    const stored = await page.evaluate(prefix => JSON.parse(localStorage.getItem(prefix + 'slot1')), prefix);
    assert.deepEqual(stored.state, snapshot('s3_stall_01'));
    await page.locator('#modal-close').click();
    await page.waitForTimeout(400); // 播放器弹窗关闭后的防误触窗口。
    await page.locator('#dialogue-box').click();
    await assertNode(page, node.next);
    const continued = new StoryEngine(story, snapshot('s3_stall_01')); continued.advance();
    await page.reload({ waitUntil: 'networkidle' });
    await page.locator('#continue-btn').click();
    await assertNode(page, continued.current().id);
    const saved = await page.evaluate(prefix => JSON.parse(localStorage.getItem(prefix + 'auto')), prefix);
    assert.deepEqual(saved.state, continued.snapshot(), '刷新后继续的状态不一致');
    await page.locator('#game-screen [data-action="load"]').click();
    await page.getByRole('button', { name: /手动存档 1/ }).click();
    await assertNode(page, 's3_stall_01');
    const geometry = await page.evaluate(() => ({ width: innerWidth, scrollWidth: document.documentElement.scrollWidth }));
    assert(geometry.scrollWidth <= geometry.width + 1, '页面横向溢出');
    assertTraffic(traffic);
    report.cases.push({ viewport, pass: true, cover, cg, cgLayout, sprite, alpha, background, heroine, saveContinueAndReload: true, requests: traffic.requests.length });
  } finally { await context.close(); }
}
async function decodeAll() {
  const { page, context, traffic } = await createPage({ width: 1440, height: 900 });
  try {
    for (let i = 0; i < referenced.length; i += 5) {
      const rows = await page.evaluate(async files => Promise.all(files.map(async file => {
        const image = new Image(); image.src = file; await image.decode();
        return { path: file, width: image.naturalWidth, height: image.naturalHeight };
      })), referenced.slice(i, i + 5));
      for (const row of rows) assert(row.width > 0 && row.height > 0, row.path);
      report.decodeResults.push(...rows);
    }
    assertTraffic(traffic);
  } finally { await context.close(); }
}
async function faultCase(type) {
  const cgFault = type === 'cg', nodeId = cgFault ? 's1_arrive_02' : 's2_counter_14';
  const blocked = cgFault ? story.cgs.cg01.image : story.characters.shijiang.expressions['action-thinking'];
  const { page, context, traffic } = await createPage({ width: 390, height: 844 }, nodeId, blocked);
  try {
    await page.locator('#continue-btn').click(); await assertNode(page, nodeId);
    if (cgFault) {
      await page.waitForFunction(() => document.getElementById('app').dataset.cgState === 'fallback');
      const scene = story.scenes[story.nodes[nodeId].scene];
      const bg = await waitImage(page, 'scene-bg', story.backgrounds[story.nodes[nodeId].bg ?? scene.bg]); assert(bg.visible);
    } else {
      const base = await waitImage(page, 'character', story.characters.shijiang.image); assert(base.visible);
    }
    assert(traffic.faultRequests.length > 0, '故障请求未命中');
    const current = new StoryEngine(story, snapshot(nodeId)); current.advance();
    await page.waitForTimeout(400); // 读档后的防误触窗口。
    await page.locator('#dialogue-box').click(); await assertNode(page, current.current().id);
    assertTraffic(traffic);
    report.faults.push({ type, blocked, pass: true, fallbackVisible: true, continuedTo: current.current().id, expectedFaultRequests: traffic.faultRequests.length });
  } finally { await context.close(); }
}
async function main() {
  try {
    await new Promise((resolve, reject) => { server.once('error', reject); server.listen(0, '127.0.0.1', resolve); }); origin = 'http://127.0.0.1:' + server.address().port;
    const executablePath = process.env.CHROME_PATH || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
    browser = await chromium.launch({ headless: true, executablePath });
    for (const viewport of [{ width: 1440, height: 900 }, { width: 1280, height: 720 }, { width: 390, height: 844 }, { width: 375, height: 667 }, { width: 844, height: 390 }]) {
      await viewportCase(viewport); console.log('PASS WebP 视口 ' + viewport.width + '×' + viewport.height);
    }
    await decodeAll(); await faultCase('sprite'); await faultCase('cg');
    report.finalHashes = fingerprints(); assert.deepEqual(report.finalHashes, report.initialHashes, '测试期间正式文件变化');
    report.requests = [...new Set(report.requests)]; report.pass = true;
    console.log(JSON.stringify({ pass: true, viewports: report.cases.length, decodedImages: report.decodeResults.length, faultCases: report.faults.length }));
  } catch (error) { report.errors.push(error.stack); throw error; }
  finally {
    if (browser) await browser.close(); server.close(); report.finishedAt = new Date().toISOString();
    fs.writeFileSync(path.join(__dirname, 'browser-results.json'), JSON.stringify(report, null, 2) + '\n');
  }
}
main().catch(error => { console.error(error); process.exitCode = 1; });
