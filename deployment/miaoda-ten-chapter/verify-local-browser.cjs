'use strict';

// 妙搭构建产物本地 UI 回归；本地服务映射平台资源，不代表妙搭真实网络验收。
// 用法：node deployment/miaoda-ten-chapter/verify-local-browser.cjs
// 只通过正式 UI 产生进度。无 fixture、无存档注入、无玩家 profile。
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const http = require('node:http');
const crypto = require('node:crypto');
const playwrightRoot = '/Users/yipin/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright';
const { chromium } = require(playwrightRoot);
const projectRoot = path.resolve(__dirname, '../..');
const appRoot = path.join(__dirname, 'app');
const buildRoot = path.join(appRoot, 'dist/output');
const resourceRoot = path.join(appRoot, 'dist/output_resource');
const uploaded = JSON.parse(fs.readFileSync(path.join(__dirname, 'uploaded-assets.json'), 'utf8'));
const appBase = '/app/' + uploaded.appId + '/';
const resourceMap = new Map(uploaded.assets.map(asset => [asset.url, asset]));
let target;
const outputFile = path.join(__dirname, 'local-browser-verification.json');
const screenshotDir = path.join(__dirname, 'local-screenshots');
const substitutions = {
  appId: uploaded.appId,
  userId: 'local-verification-user', tenantId: 'local-verification-tenant', userName: '本地验证',
  csrfToken: '', environment: 'local-verification', basename: appBase.slice(0, -1),
  appName: '毕节，雨停之前 · 全十章', appAvatar: appBase + 'favicon.svg',
  appDescription: '本地构建产物验证；正式平台模板值未验证',
};
const platformScripts = new Set([
  'https://lf3-short.ibytedapm.com/slardar/fe/sdk-web/browser.cn.js?bid=apaas_miaoda&globalName=KSlardarWeb',
  'https://sf3-scmcdn-cn.feishucdn.com/obj/unpkg/byted/performance/0.2.3/dist/performance.iife.js',
  'https://lf3-cdn-tos.bytescm.com/obj/static/log-sdk/collect/5.1/collect.js',
]);
const mappedAssetsServed = new Map();
const sha256 = bytes => crypto.createHash('sha256').update(bytes).digest('hex');
const output = {
  evidenceLayer: '妙搭最终构建产物的本地浏览器回归（本地资源映射）', target: null,
  platformNetworkAccepted: false,
  localAdaptations: { resourceMapping: '按 uploaded-assets.json 将 /spark/app/.../storage/... 请求映射回源项目相同 SHA256 的正式原图；没有向妙搭存储网络发起请求', templateSubstitutions: substitutions, platformScriptsReplacedWithLocalEmptyJS: [...platformScripts], buildFilesModified: false },
  startedAt: new Date().toISOString(),
  scope: 'Chrome headless；1440×900、390×844 桌面模拟；每个视口使用全新临时 context，关闭即丢弃；只通过正式 UI 创建和读取本轮存档。',
  notTested: ['妙搭真实线上页面', '妙搭真实资源网络及存储权限', '妙搭真实模板身份值与监测 SDK', '全十章逐句阅读', '全部路线与结局', '全部资源遍历', 'Safari', '实体手机', '人耳试听'],
  environmentNote: '首次沙箱运行因 listen EPERM 无法监听 127.0.0.1；之后在获准的执行环境重跑。首次失败不计作游戏功能失败。',
  environment: { node: process.version, playwright: require(path.join(playwrightRoot, 'package.json')).version },
  checks: [], screenshots: [], pageErrors: [], httpErrors: [], requestFailures: [], ignoredRequests: [],
};
const isFavicon = url => { try { return new URL(url).pathname === '/favicon.ico'; } catch { return false; } };
let browser, server;

function startServer() {
  const mime = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8', '.json': 'application/json; charset=utf-8', '.svg': 'image/svg+xml', '.webp': 'image/webp', '.png': 'image/png', '.jpg': 'image/jpeg', '.mp3': 'audio/mpeg', '.wav': 'audio/wav', '.woff2': 'font/woff2' };
  server = http.createServer((request, response) => {
    try {
      const pathname = decodeURIComponent(new URL(request.url, 'http://127.0.0.1').pathname);
      let file, root, asset;
      if (resourceMap.has(pathname)) {
        asset = resourceMap.get(pathname); root = projectRoot; file = path.resolve(root, asset.source);
      } else if (pathname.startsWith(appBase + 'assets/')) {
        root = resourceRoot; file = path.resolve(root, pathname.slice(appBase.length));
      } else if (pathname.startsWith('/assets/')) {
        root = resourceRoot; file = path.resolve(root, pathname.slice(1));
      } else if (pathname.startsWith(appBase)) {
        root = buildRoot; file = path.resolve(root, pathname.slice(appBase.length) || 'index.html');
      } else { response.writeHead(404); response.end('Unknown local verification path'); return; }
      assert(file.startsWith(root + path.sep), '非法路径');
      let bytes = fs.readFileSync(file);
      if (asset) {
        assert.equal(bytes.length, asset.bytes, '本地原图大小与上传记录不符');
        assert.equal(sha256(bytes), asset.sha256, '本地原图 SHA256 与上传记录不符');
        const prior = mappedAssetsServed.get(pathname);
        mappedAssetsServed.set(pathname, { url: pathname, source: asset.source, sha256: asset.sha256, bytes: bytes.length, requests: (prior?.requests || 0) + 1 });
      }
      if (file === path.join(buildRoot, 'index.html')) {
        let html = bytes.toString('utf8');
        html = html.replace(/\{\{\{([A-Za-z]+)\}\}\}|\{\{([A-Za-z]+)\}\}/g, (match, triple, double) => {
          const key = triple || double;
          assert(Object.hasOwn(substitutions, key), '未知平台模板值：' + key);
          return substitutions[key];
        });
        bytes = Buffer.from(html);
      }
      response.writeHead(200, { 'content-type': mime[path.extname(file)] || 'application/octet-stream', 'cache-control': 'no-store', 'content-length': bytes.length });
      response.end(request.method === 'HEAD' ? undefined : bytes);
    } catch (error) {
      response.writeHead(error.code === 'ENOENT' ? 404 : 500);
      response.end(error.message);
    }
  });
  return new Promise((resolve, reject) => {
    server.once('error', reject);
    server.listen(0, '127.0.0.1', () => {
      target = new URL(appBase, 'http://127.0.0.1:' + server.address().port);
      output.target = target.href;
      resolve();
    });
  });
}

function snapshotBuild() {
  output.buildManifest = [];
  for (const root of [buildRoot, resourceRoot]) {
    const visit = directory => {
      for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
        const file = path.join(directory, entry.name);
        if (entry.isDirectory()) visit(file);
        else { const bytes = fs.readFileSync(file); output.buildManifest.push({ file: path.relative(appRoot, file), bytes: bytes.length, sha256: sha256(bytes) }); }
      }
    };
    visit(root);
  }
  output.resourceMapEntries = resourceMap.size;
  output.resourceMapSHA256 = sha256(fs.readFileSync(path.join(__dirname, 'uploaded-assets.json')));
}

async function runCheck(name, viewport, action) {
  const started = Date.now();
  try {
    const details = await action();
    output.checks.push({ name, viewport, passed: true, milliseconds: Date.now() - started, ...details });
    return details;
  } catch (error) {
    output.checks.push({ name, viewport, passed: false, milliseconds: Date.now() - started, error: error.stack });
    throw error;
  }
}

async function attach(page, label) {
  const inflight = new Set();
  const cancelledByNavigation = new Set();
  let closing = false;
  page.on('pageerror', error => output.pageErrors.push({ viewport: label, error: error.message }));
  page.on('request', request => inflight.add(request));
  page.on('requestfinished', request => { inflight.delete(request); cancelledByNavigation.delete(request); });
  page.on('response', response => {
    if (response.status() < 400) return;
    const row = { viewport: label, status: response.status(), url: response.url() };
    if (response.status() === 404 && isFavicon(response.url())) output.ignoredRequests.push({ ...row, reason: '浏览器请求未配置的 favicon' });
    else output.httpErrors.push(row);
  });
  page.on('requestfailed', request => {
    const row = { viewport: label, url: request.url(), error: request.failure()?.errorText };
    const aborted = /ERR_ABORTED|NS_BINDING_ABORTED/.test(row.error || '');
    if (aborted && (closing || cancelledByNavigation.has(request))) {
      output.ignoredRequests.push({ ...row, reason: closing ? '测试结束主动关闭页面' : '测试主动刷新或导航取消在途请求' });
    } else output.requestFailures.push(row);
    inflight.delete(request); cancelledByNavigation.delete(request);
  });
  return {
    async navigate(reload = false) {
      for (const request of inflight) cancelledByNavigation.add(request);
      const response = reload ? await page.reload({ waitUntil: 'load' }) : await page.goto(target.href, { waitUntil: 'load' });
      assert(response && response.ok(), '入口文档请求失败');
      await page.locator('#title-screen [data-action="start"]').waitFor({ state: 'visible' });
      await page.waitForFunction(() => !!window.RAIN_STORY && !!window.RainSaveCompat);
      assert.equal(new URL(page.url()).origin, target.origin, '站点跳转到了不同来源');
    },
    close() { closing = true; },
  };
}

async function saved(page, slot = 'auto') {
  return page.evaluate(slot => {
    const prefix = window.RainSaveCompat.getProfile(window.RAIN_STORY).namespace;
    const value = localStorage.getItem(prefix + slot);
    return value ? JSON.parse(value) : null;
  }, slot);
}

async function current(page) {
  return page.evaluate(() => {
    const story = window.RAIN_STORY;
    const prefix = window.RainSaveCompat.getProfile(story).namespace;
    const value = JSON.parse(localStorage.getItem(prefix + 'auto'));
    if (!value?.state) throw new Error('正式 UI 尚未产生自动存档');
    const node = story.nodes[value.state.nodeId];
    return { id: value.state.nodeId, type: node.type, text: node.text, start: story.start };
  });
}

async function setInstant(page) {
  await page.locator('#title-screen [data-action="settings"]').click();
  await page.locator('#setting-speed').selectOption('instant');
  await page.locator('#modal-close').click();
}

async function advance(page) {
  // 等当前演出图片完成，避免自动化快速推进主动取消尚在加载的上一幕图片。
  await page.waitForLoadState('networkidle');
  const before = await current(page);
  assert.equal(before.type, 'line', '推进前必须为对白节点');
  await page.waitForTimeout(360); // 正式播放器有 320ms 防重复点击间隔。
  await page.locator('#dialogue-box').click();
  await page.waitForFunction(id => {
    const prefix = window.RainSaveCompat.getProfile(window.RAIN_STORY).namespace;
    return JSON.parse(localStorage.getItem(prefix + 'auto'))?.state.nodeId !== id;
  }, before.id);
}

async function continueGame(page) {
  await page.locator('#continue-btn').click();
  await page.waitForFunction(() => document.body.dataset.screen === 'game');
}

async function chooseFirst(page) {
  await page.waitForLoadState('networkidle');
  const before = await current(page);
  assert.equal(before.type, 'choice');
  await page.waitForTimeout(360);
  const option = page.locator('#choice-list [data-choice-index]').first();
  const index = await option.getAttribute('data-choice-index');
  const label = await option.innerText();
  await option.click();
  await page.waitForFunction(id => {
    const prefix = window.RainSaveCompat.getProfile(window.RAIN_STORY).namespace;
    return JSON.parse(localStorage.getItem(prefix + 'auto'))?.state.nodeId !== id;
  }, before.id);
  return { nodeId: before.id, index, label, reached: (await current(page)).id };
}

async function inspectAndCapture(page, label) {
  await page.waitForLoadState('networkidle');
  const gameScreen = await page.locator('body').getAttribute('data-screen') === 'game';
  if (gameScreen && await page.locator('#app').getAttribute('data-background-mode') !== 'neutral') {
    await page.locator('#scene-bg').waitFor({ state: 'visible' });
  }
  await page.waitForFunction(() => Array.from(document.querySelectorAll('img[src]')).filter(image => image.getClientRects().length && image.getAttribute('src')).every(image => image.complete && image.naturalWidth > 0));
  const details = await page.evaluate(async () => {
    const images = Array.from(document.querySelectorAll('img[src]')).filter(image => image.getClientRects().length && image.getAttribute('src'));
    for (const image of images) await image.decode();
    await new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)));
    const selectors = ['html', 'body', '#app', '#' + document.body.dataset.screen + '-screen', '#game-title', '.title-menu', '.title-footer', '.scene-header', '.dialogue-shell', '#dialogue-box', '.game-toolbar', '#choice-panel'];
    const layoutExclusions = [], widths = [], overflow = [];
    const visible = element => element.getClientRects().length && getComputedStyle(element).visibility !== 'hidden';
    const describe = element => element.id ? '#' + element.id : element.tagName.toLowerCase() + (element.className ? '.' + String(element.className).trim().replace(/\s+/g, '.') : '');
    for (const selector of selectors) for (const element of document.querySelectorAll(selector)) {
      if (!visible(element)) continue;
      const rect = element.getBoundingClientRect(), style = getComputedStyle(element);
      const row = { selector, clientWidth: element.clientWidth, scrollWidth: element.scrollWidth, left: rect.left, right: rect.right, overflowX: style.overflowX };
      widths.push(row);
      // styles.css 的标题保留无障碍语义；1px + inset(50%) 将它完全视觉隐藏。
      if (element.id === 'game-title' && rect.width <= 1 && rect.height <= 1 && style.position === 'absolute' && style.overflowX === 'hidden' && style.clipPath === 'inset(50%)') {
        layoutExclusions.push({ ...row, reason: '仅供无障碍读取的 1px 裁切标题，不是可见文字', sourceRule: 'styles.css: #title-screen #game-title', clipPath: style.clipPath, height: rect.height });
        continue;
      }
      let internalOverflowExcluded = false;
      // #app 裁切 .rain 的 inset:-20% 装饰层。仅当当前实际几何解释了
      // scrollWidth 扩张时排除内部数值；文档宽度、容器边界和全部控件仍须通过。
      if (element.id === 'app' && ['clip', 'hidden'].includes(style.overflowX) && row.scrollWidth > row.clientWidth + 1) {
        const rain = element.querySelector(':scope > .rain');
        if (rain) {
          const rainStyle = getComputedStyle(rain), rainRect = rain.getBoundingClientRect();
          const decorativeRight = Math.max(row.clientWidth, rainRect.right - rect.left);
          if (rainStyle.position === 'absolute' && rainStyle.pointerEvents === 'none' && !rain.textContent.trim() && !rain.querySelector('button,a,input,select,textarea,[tabindex]') && Math.abs(row.scrollWidth - decorativeRight) <= 1) {
            internalOverflowExcluded = true;
            layoutExclusions.push({ ...row, reason: '裁切容器内 .rain 装饰层的负 inset 扩张；未形成文档横向滚动', sourceRule: 'styles.css: #app overflow:clip; .rain position:absolute; inset:-20%; pointer-events:none', decorativeBounds: { left: rainRect.left, right: rainRect.right }, expectedScrollWidth: decorativeRight });
          }
        }
      }
      if ((!internalOverflowExcluded && row.scrollWidth > row.clientWidth + 1) || row.left < -1 || row.right > innerWidth + 1) overflow.push(row);
    }
    const documentWidth = { viewport: innerWidth, html: document.documentElement.scrollWidth, body: document.body.scrollWidth, scrollingElement: document.scrollingElement?.scrollWidth };
    if (Math.max(documentWidth.html, documentWidth.body, documentWidth.scrollingElement || 0) > innerWidth + 1) overflow.push({ reason: '文档可滚动宽度超出视口', ...documentWidth });
    const controls = Array.from(document.querySelectorAll('button,a[href],input,select,textarea,[role="button"]')).filter(visible).map(element => {
      const rect = element.getBoundingClientRect();
      const clippedBy = [];
      for (let parent = element.parentElement; parent; parent = parent.parentElement) {
        if (!['clip', 'hidden', 'auto', 'scroll'].includes(getComputedStyle(parent).overflowX)) continue;
        const bounds = parent.getBoundingClientRect();
        if (rect.left < bounds.left - 1 || rect.right > bounds.right + 1) clippedBy.push(describe(parent));
      }
      return { selector: describe(element), label: (element.getAttribute('aria-label') || element.textContent || '').trim().slice(0, 80), left: rect.left, right: rect.right, clippedBy };
    });
    overflow.push(...controls.filter(row => row.left < -1 || row.right > innerWidth + 1 || row.clippedBy.length));
    return { screen: document.body.dataset.screen, viewport: { width: innerWidth, height: innerHeight }, images: images.map(image => ({ id: image.id, src: image.currentSrc, width: image.naturalWidth, height: image.naturalHeight })), widths, documentWidth, controls, layoutExclusions, overflow };
  });
  assert(details.images.length > 0, '没有可见且成功解码的图片');
  assert.deepEqual(details.overflow, [], '出现横向溢出：' + JSON.stringify(details.overflow));
  if (details.screen === 'game') {
    assert((await page.locator('#dialogue-text').innerText()).trim(), '游戏对白为空');
    if (await page.locator('#app').getAttribute('data-background-mode') !== 'neutral') {
      await page.locator('#scene-bg').waitFor({ state: 'visible' });
      assert(details.images.some(row => row.id === 'scene-bg'), '场景背景未成功显示');
    }
  }
  const file = path.join(screenshotDir, label + '.png');
  await page.screenshot({ path: file, fullPage: true });
  output.screenshots.push(path.relative(__dirname, file));
  return details;
}

async function runViewport(viewport, label, saveCheck) {
  const context = await browser.newContext({ viewport, deviceScaleFactor: 1, reducedMotion: 'reduce', serviceWorkers: 'block' });
  await context.route('**/*', async route => {
    const url = route.request().url();
    if (new URL(url).origin === target.origin) return route.continue();
    if (platformScripts.has(url)) {
      output.ignoredRequests.push({ viewport: label, url, reason: '明确列出的平台监测脚本由本地空 JS 替代；未进行平台 SDK 网络验收' });
      return route.fulfill({ status: 200, contentType: 'text/javascript', body: '/* local verification: platform telemetry omitted */' });
    }
    output.requestFailures.push({ viewport: label, url, error: '非预期外部请求；本地回归拒绝访问' });
    return route.abort('blockedbyclient');
  });
  const page = await context.newPage();
  page.setDefaultTimeout(20000);
  page.setDefaultNavigationTimeout(60000);
  const navigation = await attach(page, label);
  try {
    await runCheck('全十章首页与可见图片、横向布局', label, async () => {
      await navigation.navigate();
      assert.equal(await page.title(), substitutions.appName, '本地模板占位标题不符');
      assert.equal(await page.locator('#content-edition').innerText(), '全十章');
      const story = await page.evaluate(() => ({ release: window.RAIN_STORY.release, contentRevision: window.RAIN_STORY.contentRevision, chapters: Object.keys(window.RAIN_STORY.chapters), profile: window.RainSaveCompat.getProfile(window.RAIN_STORY) }));
      assert.equal(story.release, 'ten-chapter');
      assert(story.profile.tenChapter);
      assert.deepEqual(story.chapters.map(Number).sort((a, b) => a - b), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
      assert.equal(await saved(page), null, '全新 context 不应含自动存档');
      assert(await page.locator('#continue-btn').isDisabled());
      return { story, ...await inspectAndCapture(page, label + '-title') };
    });
    await runCheck('真实开始并逐句推进至首个选择', label, async () => {
      await setInstant(page);
      await page.locator('#title-screen [data-action="start"]').click();
      await page.waitForFunction(() => document.body.dataset.screen === 'game');
      const first = await current(page);
      assert.equal(first.id, first.start);
      const opening = await inspectAndCapture(page, label + '-game-start');
      const visited = [first.id];
      for (let step = 0; step < 250; step++) {
        const node = await current(page);
        if (node.type === 'choice') break;
        await advance(page); visited.push((await current(page)).id);
      }
      const choice = await current(page);
      assert.equal(choice.type, 'choice', '250 次自然推进内未出现首个选择');
      assert.equal(visited.length - 1, 28, '本轮正式正文首次选择应经 28 次真实 UI 推进到达');
      assert(await page.locator('#choice-panel').isVisible());
      assert(await page.locator('#choice-list [data-choice-index]').count() > 0);
      const choiceView = await inspectAndCapture(page, label + '-first-choice');
      return { start: first.id, firstChoice: choice.id, advances: visited.length - 1, visited, opening, choiceView };
    });
    if (saveCheck) {
      await runCheck('手动 slot3 保存、刷新后读取及自动继续', label, async () => {
        const baseline = (await saved(page)).state;
        await page.locator('#game-screen [data-action="save"]').click();
        await page.getByRole('button', { name: /手动存档 3/ }).click();
        assert.deepEqual((await saved(page, 'slot3')).state, baseline);
        await page.locator('#modal-close').click();
        const selection = await chooseFirst(page);
        assert.notEqual((await saved(page)).state.nodeId, baseline.nodeId);
        await navigation.navigate(true);
        await page.locator('#title-screen [data-action="load"]').click();
        await page.getByRole('button', { name: /手动存档 3/ }).click();
        await page.waitForFunction(() => document.body.dataset.screen === 'game');
        assert.deepEqual((await saved(page)).state, baseline, '刷新后手动存档未恢复全部剧情状态');
        await inspectAndCapture(page, label + '-manual-load-after-refresh');
        await chooseFirst(page);
        const automatic = (await saved(page)).state;
        await navigation.navigate(true);
        assert(await page.locator('#continue-btn').isEnabled());
        await continueGame(page);
        assert.deepEqual((await saved(page)).state, automatic, '自动继续未恢复全部剧情状态');
        await inspectAndCapture(page, label + '-auto-continue-after-refresh');
        return { manualSlot: 'slot3', manualNode: baseline.nodeId, selection, automaticNode: automatic.nodeId, historyEntries: automatic.history.length, directStorageWrites: false };
      });
    }
  } catch (error) {
    console.error(label + ': ' + error.message);
    const file = path.join(screenshotDir, label + '-FAILED.png');
    try { await page.screenshot({ path: file, fullPage: true }); output.screenshots.push(path.relative(__dirname, file)); } catch {}
  } finally {
    navigation.close();
    await context.close();
  }
}

(async () => {
  fs.mkdirSync(screenshotDir, { recursive: true });
  try {
    snapshotBuild();
    await startServer();
    browser = await chromium.launch({ channel: 'chrome', headless: true });
    output.environment.browser = browser.version();
    await runViewport({ width: 1440, height: 900 }, 'desktop-1440x900', true);
    await runViewport({ width: 390, height: 844 }, 'mobile-390x844', false);
  } catch (error) {
    output.fatalError = error.stack;
  } finally {
    if (browser) await browser.close();
    if (server?.listening) await new Promise(resolve => server.close(resolve));
    output.mappedAssetsServed = [...mappedAssetsServed.values()];
    output.checks.push({ name: '无页面脚本错误或异常 HTTP／网络失败', passed: output.pageErrors.length === 0 && output.httpErrors.length === 0 && output.requestFailures.length === 0, pageErrors: output.pageErrors.length, httpErrors: output.httpErrors.length, requestFailures: output.requestFailures.length });
    output.completedAt = new Date().toISOString();
    output.pass = !output.fatalError && output.checks.length === 6 && output.checks.every(row => row.passed);
    fs.writeFileSync(outputFile, JSON.stringify(output, null, 2) + '\n');
    console.log(JSON.stringify({ pass: output.pass, checks: output.checks.length, failed: output.checks.filter(row => !row.passed).map(row => row.name), outputFile, screenshots: output.screenshots.length }, null, 2));
    process.exitCode = output.pass ? 0 : 1;
  }
})();
