'use strict';

// E11 解压包独立验收。只从传入包的 game/ 读取运行文件与素材；不导入工程 fixture，
// 不执行 E10，不接触玩家浏览器 profile。截图是桌面浏览器及 390px 视口模拟。
// 用法：node qa/ten-chapter-delivery/browser-test.cjs '/绝对路径/中文 空格/解压包' [原始ZIP绝对路径]
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const os = require('node:os');
const vm = require('node:vm');
const crypto = require('node:crypto');
const { spawn } = require('node:child_process');
const { pathToFileURL } = require('node:url');
const playwrightRoot = process.env.E11_PLAYWRIGHT_ROOT || '/Users/yipin/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright';
const { chromium, firefox } = require(playwrightRoot);
const packageRoot = path.resolve(process.argv[2] || '');
const archivePath = process.argv[3] ? path.resolve(process.argv[3]) : null;
assert(process.argv[2], '请传入独立解压包目录');
const gameRoot = path.join(packageRoot, 'game');
const manifest = JSON.parse(fs.readFileSync(path.join(gameRoot, 'assets/runtime-ten-chapter-manifest.json'), 'utf8'));
const { StoryEngine } = require(path.join(gameRoot, 'engine.js'));
const compat = require(path.join(gameRoot, 'save-compat.js'));
const scope = { window: {} };
vm.runInNewContext(fs.readFileSync(path.join(gameRoot, 'story.js'), 'utf8'), scope);
const story = scope.window.RAIN_STORY;
const prefix = compat.getProfile(story).namespace;
const settings = { textSpeed: 'instant', sound: false, volume: 0.35 };
const runtimeNames = ['index.html', 'styles.css', 'story.js', 'engine.js', 'save-compat.js', 'player-runtime.js', 'game.js'];
const sha256 = bytes => crypto.createHash('sha256').update(bytes).digest('hex');
const runtimeHashes = () => Object.fromEntries(runtimeNames.map(file => [file, sha256(fs.readFileSync(path.join(gameRoot, file)))]));
const output = {
  task: 'E11', evidenceLayer: '独立解压包真实浏览器验收', packageRoot, gameRoot,
  scope: '仅本地交付；独立临时 profile；file 完全离线和包自带 localhost 服务；390px 为桌面模拟，不是实体手机',
  environment: { node: process.version, platform: process.platform, arch: process.arch, playwright: require(path.join(playwrightRoot, 'package.json')).version },
  runtimeHashes: runtimeHashes(), manifestSha256: sha256(fs.readFileSync(path.join(gameRoot, 'assets/runtime-ten-chapter-manifest.json'))),
  packageManifestSha256: sha256(fs.readFileSync(path.join(packageRoot, 'package-manifest.json'))),
  archive: archivePath ? { path: archivePath, sha256: sha256(fs.readFileSync(archivePath)) } : null,
  checks: [], screenshots: [], pageErrors: [], unexpectedExternalRequests: [], resourceFailures: [], browsers: [],
  notTested: ['Safari', '实体手机', '公网发布和在线复验', '真人完整阅读和人耳试听'],
  extractionPath: { containsChinese: /[\u3400-\u9fff]/.test(packageRoot), containsSpaces: /\s/.test(packageRoot) }
};
assert.equal(manifest.assets.length, 138);
assert.equal(manifest.nodeCount, Object.keys(story.nodes).length);

// 从正式起点逐步行走到目标。选项值仅用于选择实际可见选项，不修改任何 flags/history。
function walk(target, selections = {}) {
  const engine = new StoryEngine(story);
  for (let step = 0; step <= Object.keys(story.nodes).length; step++) {
    const node = engine.current();
    if (typeof target === 'function' ? target(node) : node.id === target) return engine.snapshot();
    if (node.type === 'choice') {
      const value = Object.hasOwn(selections, node.id) ? selections[node.id] : selections[node.flag];
      const option = value === undefined ? engine.availableChoices()[0] : engine.availableChoices().find(row => row.option.value === value);
      assert(option, '路径选择不可达：' + node.id + ' / ' + value);
      assert(engine.choose(option.index));
    } else assert(engine.advance(), '未到目标已结束：' + node.id);
  }
  assert.fail('超出正式节点数，疑似循环');
}
const qiuSelections = { qiuSignal: 'record', qiuReply: 'reply', route: 'huangqiuqiu' };
const revealId = 'tc_c08_huangqiuqiu_human_reveal';
const beforeRevealId = Object.values(story.nodes).find(node => node.next === revealId).id;
const beforeReveal = walk(beforeRevealId, qiuSelections);
const firstChoice = walk(node => node.type === 'choice');
const chapterStop = walk('tc_c01_common_exit');
const cgs = Object.entries(story.cgs).map(([id, cg]) => ({ id, cg, state: walk(cg.allowedNodeIds[0], id.includes('qiuqiu') ? qiuSelections : { route: id.includes('piao-choice') ? 'piao' : 'xiaoman' }) }));
const endings = [];
for (const option of story.nodes[story.routeChoice].choices) {
  const route = option.value;
  for (const relationship of route === 'friends' ? [null] : ['dating', 'friends']) {
    const selections = { ...qiuSelections, route, [route + 'Relationship']: relationship };
    const state = walk(node => node.type === 'end' && !node.next, selections);
    endings.push({ nodeId: state.nodeId, state, route, relationship, selections });
  }
}
assert.equal(new Set(endings.map(row => row.nodeId)).size, 13);
assert.deepEqual(endings.map(row => row.nodeId).sort(), Object.values(story.nodes).filter(node => node.type === 'end' && !node.next).map(node => node.id).sort());
output.witnessGeneration = { algorithm: '只用解压包 StoryEngine 从正式起点逐步 advance/choose，选择始终限于 availableChoices；未伪造 flags/history。', directedEndings: endings.map(({ state, ...row }) => ({ ...row, historyEntries: state.history.length })), cgWitnesses: cgs.map(row => ({ id: row.id, nodeId: row.state.nodeId, historyEntries: row.state.history.length })) };

const encoded = state => JSON.stringify({ format: 1, ...compat.metadata(story), savedAt: new Date().toISOString(), state, settings });
let server;
let serverOrigin;
const profiles = [];
const contexts = new Set();
const probeURL = 'https://e11-offline-probe.invalid/not-sent';
const fileURL = pathToFileURL(path.join(gameRoot, 'index.html')).href;

async function startServer(port = 0) {
  assert(!server, '服务必须先关闭');
  const child = spawn(process.execPath, [path.join(packageRoot, 'tools/serve.cjs'), '--port', String(port)], { cwd: packageRoot, stdio: ['ignore', 'pipe', 'pipe'] });
  let stdout = '', stderr = '';
  server = child;
  await new Promise((resolve, reject) => {
    const timeout = setTimeout(() => reject(new Error('包内服务启动超时：' + stdout + stderr)), 15000);
    child.once('error', error => { clearTimeout(timeout); reject(error); });
    child.once('exit', code => { clearTimeout(timeout); reject(new Error('包内服务提前退出：' + code + ' ' + stderr)); });
    child.stderr.on('data', bytes => { stderr += bytes; });
    child.stdout.on('data', bytes => {
      stdout += bytes;
      const match = stdout.match(/http:\/\/127\.0\.0\.1:(\d+)\//);
      if (match) { serverOrigin = 'http://127.0.0.1:' + match[1]; clearTimeout(timeout); resolve(); }
    });
  });
  return serverOrigin;
}
async function stopServer() {
  if (!server) return;
  const child = server;
  server = null;
  if (child.exitCode !== null || child.signalCode !== null) return;
  await new Promise(resolve => { child.once('exit', resolve); child.kill('SIGTERM'); });
}
async function launch(name, profile, viewport) {
  const common = { headless: true, viewport, serviceWorkers: 'block' };
  const context = name === 'chrome'
    ? await chromium.launchPersistentContext(profile, { ...common, channel: 'chrome' })
    : await firefox.launchPersistentContext(profile, { ...common, executablePath: process.env.E11_FIREFOX_EXECUTABLE || '/private/tmp/cjb-e10-browsers/firefox-1538/firefox/Nightly.app/Contents/MacOS/firefox', firefoxUserPrefs: { 'network.proxy.type': 0 } });
  contexts.add(context);
  return context;
}
async function close(context) { contexts.delete(context); await context.close(); }
async function configure(context, browserName, transport) {
  await context.route('**/*', async route => {
    const url = route.request().url();
    const local = transport === 'file' ? url.startsWith(pathToFileURL(gameRoot + path.sep).href) : url.startsWith(serverOrigin + '/');
    if (local || url.startsWith('data:')) return route.continue();
    if (url !== probeURL) output.unexpectedExternalRequests.push({ browserName, transport, url });
    return route.abort('blockedbyclient');
  });
  if (transport === 'file') await context.setOffline(true);
  for (const page of context.pages()) await page.close();
  const page = await context.newPage();
  page.setDefaultTimeout(15000);
  page.on('pageerror', error => output.pageErrors.push({ browserName, transport, error: error.message }));
  page.on('response', response => { if (response.status() >= 400) output.resourceFailures.push({ browserName, transport, status: response.status(), url: response.url() }); });
  return page;
}
async function seed(page, url, state = null) {
  await page.goto(url, { waitUntil: 'load' });
  await page.evaluate(({ prefix, settings, auto }) => {
    for (const key of Object.keys(localStorage)) if (key.startsWith(prefix)) localStorage.removeItem(key);
    localStorage.setItem(prefix + 'settings', JSON.stringify(settings));
    if (auto) localStorage.setItem(prefix + 'auto', auto);
  }, { prefix, settings, auto: state ? encoded(state) : null });
  await page.reload({ waitUntil: 'load' });
}
async function continueGame(page) { await page.locator('#continue-btn').click(); await page.waitForFunction(() => document.body.dataset.screen !== 'title'); }
const saved = page => page.evaluate(prefix => JSON.parse(localStorage.getItem(prefix + 'auto')).state, prefix);
async function next(page) { await page.waitForTimeout(350); await page.locator('#dialogue-box').click(); }
async function screenshot(page, name) {
  const file = path.join(__dirname, 'screenshots', name + '.png');
  fs.mkdirSync(path.dirname(file), { recursive: true });
  // 新开局可能先绘制文本再收到背景解码回调，截图必须等待实际可见资源。
  await page.locator('img[src]').evaluateAll(async images => {
    for (const image of images.filter(image => image.getClientRects().length && image.getAttribute('src'))) {
      await image.decode();
      if (!image.naturalWidth || !image.naturalHeight) throw new Error('截图资源未解码：' + image.src);
    }
    await new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)));
  });
  await page.screenshot({ path: file, fullPage: true });
  output.screenshots.push(path.relative(__dirname, file));
}
async function check(name, browserName, transport, page, action) {
  const started = Date.now();
  try {
    const details = await action();
    output.checks.push({ name, browserName, transport, passed: true, milliseconds: Date.now() - started, ...(details || {}) });
  } catch (error) {
    output.checks.push({ name, browserName, transport, passed: false, milliseconds: Date.now() - started, error: error.stack });
    console.error(browserName + '/' + transport + '/' + name + ': ' + error.message);
    try { await screenshot(page, 'FAILED-' + output.checks.length); } catch {}
  }
}
async function decodeAll(page) {
  const actual = await page.evaluate(async rows => {
    const decoded = [];
    for (const row of rows) {
      const image = new Image(); image.src = row.path; await image.decode();
      decoded.push({ path: row.path, width: image.naturalWidth, height: image.naturalHeight });
    }
    return decoded;
  }, manifest.assets);
  assert.deepEqual(actual, manifest.assets.map(({ path, width, height }) => ({ path, width, height })));
  return actual.length;
}
async function manualSaveRestore(page) {
  const baseline = await saved(page);
  await page.locator('#game-screen [data-action="save"]').click();
  await page.getByRole('button', { name: /手动存档 1/ }).click();
  await page.locator('#modal-close').click();
  await next(page);
  assert.notEqual((await saved(page)).nodeId, baseline.nodeId);
  await page.locator('#game-screen [data-action="load"]').click();
  await page.getByRole('button', { name: /手动存档 1/ }).click();
  assert.deepEqual(await saved(page), baseline);
  await page.reload({ waitUntil: 'load' });
  await continueGame(page);
  assert.deepEqual(await saved(page), baseline);
  return baseline;
}
async function runTransport(browserName, transport) {
  const profile = fs.mkdtempSync(path.join(os.tmpdir(), 'cjb-e11-' + browserName + '-' + transport + '-'));
  profiles.push(profile);
  let context = await launch(browserName, profile, { width: 1440, height: 900 });
  let page = await configure(context, browserName, transport);
  const url = transport === 'file' ? fileURL : serverOrigin + '/';
  const label = browserName + '-' + transport;
  output.browsers.push({ browserName, transport, version: context.browser().version(), profile, profilePolicy: '全新临时 profile；只在固定地址重启检查中复用本脚本的 profile；完成后删除', url, offline: transport === 'file' });

  await check('封面、完整138图解码及外部访问拒绝', browserName, transport, page, async () => {
    await seed(page, url);
    assert.match(await page.title(), /全十章/);
    await page.locator('#title-cover').evaluate(image => image.decode());
    assert.match(await page.locator('#title-cover').evaluate(image => image.currentSrc), /cover-desktop\.webp$/);
    await screenshot(page, label + '-cover-desktop');
    const decodedAssets = await decodeAll(page);
    const externalProbeBlocked = await page.evaluate(async url => { try { await fetch(url); return false; } catch { return true; } }, probeURL);
    assert(externalProbeBlocked);
    await page.setViewportSize({ width: 390, height: 844 });
    await page.waitForFunction(() => document.getElementById('title-cover').currentSrc.endsWith('cover-mobile.webp'));
    await page.locator('#title-cover').evaluate(image => image.decode());
    assert.match(await page.locator('#title-cover').evaluate(image => image.currentSrc), /cover-mobile\.webp$/);
    await screenshot(page, label + '-cover-390');
    return { decodedAssets, externalProbeBlocked, coverSizes: ['1440x900', '390x844'], mode: transport === 'file' ? 'Playwright context offline=true 且外部请求拦截' : '只允许包内 localhost，同源以外全拒绝' };
  });
  await check('真实新开局和首个选择', browserName, transport, page, async () => {
    await seed(page, url);
    await page.locator('[data-action="start"]').click();
    assert.equal((await saved(page)).nodeId, story.start);
    await screenshot(page, label + '-start-390');
    await seed(page, url, firstChoice);
    await continueGame(page);
    const engine = new StoryEngine(story, firstChoice);
    const option = engine.availableChoices()[0];
    assert(engine.choose(option.index));
    await page.waitForTimeout(350);
    await page.locator('[data-choice-index="' + option.index + '"]').click();
    assert.deepEqual(await saved(page), engine.snapshot());
    return { start: story.start, choice: firstChoice.nodeId, chosenIndex: option.index, reached: engine.current().id };
  });
  await check('中性章末继续', browserName, transport, page, async () => {
    await seed(page, url, chapterStop); await continueGame(page);
    assert.equal(await page.locator('#app').getAttribute('data-background-mode'), 'neutral');
    assert(await page.locator('#end-character').isHidden());
    await screenshot(page, label + '-chapter-end-390');
    await page.locator('#end-continue').click();
    assert.equal((await saved(page)).nodeId, story.nodes[chapterStop.nodeId].next);
  });
  await check('真实球形到人形及手动存读档刷新', browserName, transport, page, async () => {
    await seed(page, url, beforeReveal); await continueGame(page);
    assert.equal(await page.locator('#character').getAttribute('data-form'), 'sphere');
    await next(page);
    assert.equal((await saved(page)).nodeId, revealId);
    assert.equal((await saved(page)).flags.qiuForm, 'human');
    assert.equal(await page.locator('#character').getAttribute('data-form'), 'human');
    await manualSaveRestore(page);
    assert.equal(await page.locator('#character').getAttribute('data-form'), 'human');
    await screenshot(page, label + '-human-390');
    return { before: beforeRevealId, reveal: revealId, sourceHistoryEntries: beforeReveal.history.length };
  });
  await check('四种CG在包内进入和退出', browserName, transport, page, async () => {
    const verified = [];
    await page.setViewportSize({ width: 1440, height: 900 });
    for (const { id, cg, state } of cgs) {
      await seed(page, url, state); await continueGame(page);
      await page.waitForFunction(() => document.getElementById('app').dataset.cgState === 'ready');
      assert.equal(await page.locator('#cg-image').getAttribute('src'), cg.image);
      await page.locator('#cg-image').evaluate(image => image.decode());
      await screenshot(page, label + '-' + id);
      const engine = new StoryEngine(story, state);
      let steps = 0;
      while (engine.current().cg === id) { assert(engine.advance()); steps++; await next(page); }
      assert.equal((await saved(page)).nodeId, engine.current().id);
      assert(await page.locator('#cg-layer').isHidden());
      verified.push({ id, entry: state.nodeId, exit: engine.current().id, steps });
    }
    return { verified };
  });
  if (transport === 'http') {
    await check('13种真实结局包内恢复', browserName, transport, page, async () => {
      for (const ending of endings) {
        await seed(page, url, ending.state); await continueGame(page);
        assert(await page.locator('#end-screen').isVisible());
        assert(await page.locator('#end-continue').isHidden());
        assert.match(await page.locator('#end-kicker').innerText(), /全篇读完/);
        assert.deepEqual(await saved(page), ending.state);
        if (ending.route === 'huangqiuqiu') assert.equal(await page.locator('#end-character').getAttribute('data-form'), 'human');
      }
      await screenshot(page, label + '-ending-desktop');
      return { count: endings.length, nodes: endings.map(row => row.nodeId) };
    });
    await check('固定本地地址服务和浏览器重启后恢复', browserName, transport, page, async () => {
      await seed(page, url, beforeReveal); await continueGame(page);
      const baseline = await manualSaveRestore(page);
      const manualBytes = await page.evaluate(prefix => localStorage.getItem(prefix + 'slot1'), prefix);
      const port = Number(new URL(serverOrigin).port);
      await close(context);
      await stopServer();
      assert.equal(await startServer(port), new URL(url).origin);
      context = await launch(browserName, profile, { width: 1440, height: 900 });
      page = await configure(context, browserName, transport);
      await page.goto(url, { waitUntil: 'load' }); await continueGame(page);
      assert.deepEqual(await saved(page), baseline);
      assert.equal(await page.evaluate(prefix => localStorage.getItem(prefix + 'slot1'), prefix), manualBytes);
      await screenshot(page, label + '-restart-restored');
      return { addressBefore: url, addressAfter: serverOrigin + '/', restoredNode: baseline.nodeId, manualSlotBytesPreserved: true, browserAndServerRestarted: true };
    });
  }
  await close(context);
}

(async () => {
  await startServer();
  for (const name of ['chrome', 'firefox']) for (const transport of ['file', 'http']) await runTransport(name, transport);
  assert.deepEqual(runtimeHashes(), output.runtimeHashes, '测试过程中包内运行文件发生变化');
  assert.equal(output.pageErrors.length, 0, '浏览器未捕获错误');
  assert.equal(output.unexpectedExternalRequests.length, 0, '游戏尝试访问外部网络');
  assert.equal(output.resourceFailures.length, 0, '包内资源请求失败');
})().catch(error => { output.fatalError = error.stack; process.exitCode = 1; console.error(error.stack); }).finally(async () => {
  for (const context of contexts) try { await context.close(); } catch {}
  try { await stopServer(); } catch {}
  for (const profile of profiles) fs.rmSync(profile, { recursive: true, force: true });
  output.temporaryProfilesRemoved = profiles.every(profile => !fs.existsSync(profile));
  output.passed = output.checks.filter(row => row.passed).length;
  output.failed = output.checks.filter(row => !row.passed).length + Number(Boolean(output.fatalError));
  output.executedAt = new Date().toISOString();
  fs.writeFileSync(path.join(__dirname, 'browser-results.json'), JSON.stringify(output, null, 2) + '\n');
  if (output.failed) process.exitCode = 1;
  console.log(JSON.stringify({ task: 'E11', passed: output.passed, failed: output.failed, screenshots: output.screenshots.length, result: path.join(__dirname, 'browser-results.json') }));
});
