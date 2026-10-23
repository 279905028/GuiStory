/* CG-E4：真实页面 + 已采用正式图的 DOM 布局夹具。不是剧情触发或 E3 异步回归。 */
'use strict';

const fs = require('node:fs');
const path = require('node:path');
const http = require('node:http');
const crypto = require('node:crypto');
const { chromium } = require('/Users/yipin/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');

const root = path.resolve(__dirname, '..');
const viewports = [[1440, 900], [1280, 720], [390, 844], [375, 667], [844, 390]];
// 与 CG-A 的 39 个 line 白名单一致；CG03 从 s6_plan_04 开始。
const cases = [
  { id: 'cg01', record: 'assets/cg-variants/CG01/record.json', nodes: ['s1_arrive_02', 's1_arrive_03'] },
  { id: 'cg02', record: 'assets/cg-variants/CG02/record.json', nodes: ['s5_mirror_03', 's5_ride_walk_01', 's5_ride_walk_02', 's5_ride_taxi_01', 's5_ride_taxi_02', 's5_ride_leave_01', 's5_ride_leave_02'] },
  { id: 'cg03', record: 'assets/cg-variants/CG03/record.json', nodes: Array.from({ length: 5 }, (_, i) => 's6_plan_0' + (i + 4)) },
  { id: 'cg04', record: 'assets/cg-variants/CG04/record.json', nodes: Array.from({ length: 6 }, (_, i) => 's7_camera_0' + (i + 1)) },
  { id: 'cg05', record: 'assets/cg-variants/CG05/record.json', nodes: Array.from({ length: 8 }, (_, i) => 's8_count_0' + (i + 1)) },
  { id: 'cg06', record: 'assets/cg-variants/CG06/record.json', nodes: ['s9_compete_08', 's9_compete_09'] },
  { id: 'cg07', record: 'assets/cg-variants/CG07/record.json', nodes: ['preview_yelan_10'] },
  { id: 'cg08', record: 'assets/cg-variants/CG08/record.json', nodes: Array.from({ length: 8 }, (_, i) => 'preview_qiu_' + (i + 12)) }
];
const sha = value => crypto.createHash('sha256').update(value).digest('hex');
const versionFiles = [
  'index.html', 'styles.css', 'game.js', 'story.js', 'engine.js', 'qa/cg-ui-regression.cjs',
  'assets/backgrounds-manifest.json',
  ...['street', 'repair', 'lobby', 'room', 'noodles', 'salon'].map(key => `assets/bg-${key}.png`),
  ...['wenwen', 'xiaoman', 'zhouzhi', 'mengyao', 'yelan', 'maolang', 'shijiang', 'huangqiuqiu'].map(key => `assets/char-${key}.png`),
  ...cases.map(item => item.record)
];
function versions() {
  return Object.fromEntries(versionFiles.map(relative => {
    if (!fs.existsSync(path.join(root, relative))) return [relative, { missing: true }];
    const content = fs.readFileSync(path.join(root, relative));
    return [relative, { sha256: sha(content), bytes: content.length }];
  }));
}
function mark(result, name, pass, details) {
  result.checks.push({ name, pass: !!pass, ...(details === undefined ? {} : { details }) });
}

async function startServer() {
  const mime = { '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.png': 'image/png', '.json': 'application/json; charset=utf-8', '.ico': 'image/x-icon' };
  const server = http.createServer((request, response) => {
    let pathname;
    try { pathname = decodeURIComponent(new URL(request.url, 'http://localhost').pathname); }
    catch (_) { response.writeHead(400).end(); return; }
    if (pathname === '/favicon.ico') { response.writeHead(204).end(); return; }
    const target = path.resolve(root, '.' + (pathname === '/' ? '/index.html' : pathname));
    if (!target.startsWith(root + path.sep)) { response.writeHead(403).end(); return; }
    fs.readFile(target, (error, content) => {
      if (error) { response.writeHead(404).end('Not found'); return; }
      response.writeHead(200, { 'Content-Type': mime[path.extname(target)] || 'application/octet-stream', 'Cache-Control': 'no-store' });
      response.end(content);
    });
  });
  await new Promise((resolve, reject) => { server.once('error', reject); server.listen(0, '127.0.0.1', resolve); });
  return { server, origin: 'http://127.0.0.1:' + server.address().port };
}

// 所有测量均来自当前浏览器 DOM；object-fit 内容矩形与 img 元素矩形分别记录。
async function measure(page) {
  return page.evaluate(() => {
    const rect = element => {
      if (!element) return null;
      const r = element.getBoundingClientRect();
      return { x: r.x, y: r.y, width: r.width, height: r.height, right: r.right, bottom: r.bottom };
    };
    const visible = element => {
      if (!element || !element.getClientRects().length) return false;
      for (let item = element; item; item = item.parentElement) {
        const style = getComputedStyle(item);
        if (item.hidden || style.display === 'none' || style.visibility === 'hidden' || Number(style.opacity) === 0) return false;
      }
      const r = element.getBoundingClientRect();
      return r.width > 0 && r.height > 0;
    };
    const image = document.getElementById('cg-image');
    const style = getComputedStyle(image);
    const box = rect(image);
    let fitted = null;
    if (visible(image) && image.naturalWidth && image.naturalHeight) {
      const n = value => Number.parseFloat(value) || 0;
      const left = n(style.borderLeftWidth) + n(style.paddingLeft);
      const top = n(style.borderTopWidth) + n(style.paddingTop);
      const w = box.width - left - n(style.borderRightWidth) - n(style.paddingRight);
      const h = box.height - top - n(style.borderBottomWidth) - n(style.paddingBottom);
      const scale = Math.min(w / image.naturalWidth, h / image.naturalHeight);
      const iw = image.naturalWidth * scale;
      const ih = image.naturalHeight * scale;
      const position = style.objectPosition.split(/\s+/);
      const offset = (value, remaining) => value.endsWith('%') ? remaining * n(value) / 100 : n(value);
      const x = box.x + left + offset(position[0] || '50%', w - iw);
      const y = box.y + top + offset(position[1] || '50%', h - ih);
      fitted = { x, y, width: iw, height: ih, right: x + iw, bottom: y + ih };
    }
    const ordinary = Object.fromEntries(['#scene-bg', '.scene-shade', '.rain', '.stage-grain', '#character', '.speaker-portrait'].map(selector => {
      const element = document.querySelector(selector);
      return [selector, { visible: visible(element), rect: rect(element), display: getComputedStyle(element).display, visibility: getComputedStyle(element).visibility }];
    }));
    const app = document.getElementById('app');
    return {
      state: app.dataset.cgState,
      viewport: { width: innerWidth, height: innerHeight },
      app: rect(app), header: rect(document.querySelector('.scene-header')),
      dialogue: rect(document.querySelector('.dialogue-shell')),
      layer: { rect: rect(document.getElementById('cg-layer')), hidden: document.getElementById('cg-layer').hidden, background: getComputedStyle(document.getElementById('cg-layer')).backgroundColor },
      image: { rect: box, fitted, visible: visible(image), hidden: image.hidden, src: image.getAttribute('src'), alt: image.alt, fit: style.objectFit, position: style.objectPosition, naturalWidth: image.naturalWidth, naturalHeight: image.naturalHeight },
      ordinary,
      scroll: { windowX: scrollX, windowY: scrollY, appX: app.scrollLeft, appY: app.scrollTop, documentWidth: document.documentElement.scrollWidth, documentHeight: document.documentElement.scrollHeight },
      toolbar: [...document.querySelectorAll('.toolbar-controls button')].map(element => ({ action: element.dataset.action, rect: rect(element), visible: visible(element) })),
      menuButton: { rect: rect(document.querySelector('.menu-button')), visible: visible(document.querySelector('.menu-button')) },
      dialogueText: { characters: document.getElementById('dialogue-text').textContent.length, clientHeight: document.getElementById('dialogue-box').clientHeight, scrollHeight: document.getElementById('dialogue-box').scrollHeight }
    };
  });
}
function overlap(a, b) {
  return !!a && !!b && Math.min(a.right, b.right) - Math.max(a.x, b.x) > 1 && Math.min(a.bottom, b.bottom) - Math.max(a.y, b.y) > 1;
}
function within(a, b, tolerance = 1) {
  return !!a && !!b && a.x >= b.x - tolerance && a.y >= b.y - tolerance && a.right <= b.right + tolerance && a.bottom <= b.bottom + tolerance;
}
function checkGeometry(result, sample, label) {
  const viewport = { x: 0, y: 0, right: sample.viewport.width, bottom: sample.viewport.height };
  mark(result, label + ': stage fits viewport', within(sample.app, viewport));
  mark(result, label + ': no stage/document scroll', sample.scroll.windowX === 0 && sample.scroll.windowY === 0 && sample.scroll.appX === 0 && sample.scroll.appY === 0 && sample.scroll.documentWidth <= sample.viewport.width + 1 && sample.scroll.documentHeight <= sample.viewport.height + 1, sample.scroll);
  mark(result, label + ': toolbar has six reachable 44px controls', sample.toolbar.length === 6 && sample.toolbar.every(item => item.visible && item.rect.width >= 43.9 && item.rect.height >= 43.9 && within(item.rect, viewport)), sample.toolbar);
  mark(result, label + ': menu button reachable', sample.menuButton.visible && within(sample.menuButton.rect, viewport) && sample.menuButton.rect.width >= 43.9 && sample.menuButton.rect.height >= 43.9, sample.menuButton);
}

async function exercise(page, item, adopted, viewport) {
  const result = { id: item.id, viewport, checks: [], states: {}, scope: '正式图 DOM 布局夹具；不改变正式 story/game 文件，不是合法剧情触发验收。' };
  const pageErrors = [];
  page.on('pageerror', error => pageErrors.push(error.message));
  await page.goto(item.origin, { waitUntil: 'networkidle' });
  await page.locator('[data-action="start"]').click();
  await page.waitForFunction(() => document.body.dataset.screen === 'game' && document.getElementById('dialogue-text').textContent.length > 0);
  result.fixture = await page.evaluate(({ nodes, cgId }) => {
    const story = window.RAIN_STORY;
    const available = nodes.map(id => story.nodes[id]).filter(Boolean);
    if (available.length !== nodes.length || available.some(node => node.type !== 'line')) throw new Error('record 映射包含缺失或非 line 节点');
    const node = available.sort((a, b) => b.text.length - a.text.length)[0];
    if (!node) throw new Error('CG 夹具对应的正式对白节点不存在');
    const scene = story.scenes[node.scene];
    const characterKey = node.character || null;
    const speakerKey = node.speaker === 'narrator' ? 'wenwen' : (story.characters[node.speaker] ? node.speaker : null);
    const character = story.characters[characterKey];
    const speaker = story.characters[speakerKey];
    const setNormal = (id, person) => {
      const image = document.getElementById(id);
      if (id === 'speaker-avatar') {
        image.parentElement.hidden = !person;
        for (const property of ['width', 'height', 'left', 'top', 'object-position']) image.style.removeProperty(property);
        image.parentElement.style.removeProperty('aspect-ratio');
        image.parentElement.style.removeProperty('height');
        if (person?.presentation === 'orb') {
          Object.assign(image.style, { width: '100%', height: '100%', left: '0', top: '0', objectPosition: 'center' });
          Object.assign(image.parentElement.style, { aspectRatio: '1 / 1', height: 'auto' });
        }
      }
      if (!person) { image.removeAttribute('src'); image.alt = ''; image.hidden = true; image.dataset.presentation = 'human'; return; }
      image.src = person.image;
      image.alt = person.name;
      image.hidden = false;
      image.dataset.presentation = person.presentation === 'orb' ? 'orb' : 'human';
    };
    // 保留真实页面组件，故意保留普通人物 src，以验证 ready CSS 兜底确实隐藏它们。
    setNormal('character', character);
    setNormal('speaker-avatar', speaker);
    document.getElementById('scene-bg').src = story.backgrounds[node.bg ?? scene.bg];
    document.getElementById('scene-day').textContent = 'DAY ' + String(scene.day).padStart(2, '0');
    document.getElementById('scene-title').textContent = scene.title;
    document.getElementById('scene-time').textContent = node.time ?? scene.time;
    document.getElementById('scene-location').textContent = node.location ?? scene.location;
    document.getElementById('speaker-name').textContent = node.speaker === 'narrator' ? '文文 · 心声' : (speaker?.name || node.speaker);
    document.getElementById('speaker-name').style.color = speaker?.color || '';
    document.getElementById('dialogue-text').textContent = node.text;
    document.getElementById('advance-hint').querySelector('span').textContent = '点击继续';
    document.getElementById('app').dataset.nodeType = 'line';
    document.getElementById('choice-panel').hidden = true;
    return { displayedNodeId: node.id, displayedText: node.text, textCharacters: node.text.length, candidateNodeIds: nodes, allCandidatesAreExistingLines: true, normalCharacter: characterKey, normalSpeaker: speakerKey, runtimeNodeUnchanged: true };
  }, { nodes: item.nodes, cgId: item.id });
  await page.evaluate(async () => {
    await Promise.all([...document.querySelectorAll('#scene-bg,#character,#speaker-avatar')].filter(image => image.hasAttribute('src')).map(image => image.decode()));
    await document.fonts.ready;
  });

  for (const state of ['off', 'loading', 'fallback']) {
    await page.evaluate(state => {
      const app = document.getElementById('app');
      const layer = document.getElementById('cg-layer');
      const image = document.getElementById('cg-image');
      if (!layer || !image) throw new Error('E4 CG DOM 尚未完成');
      app.dataset.cgState = state;
      layer.hidden = true;
      image.hidden = false;
      image.removeAttribute('src');
      image.alt = '';
    }, state);
    const sample = await measure(page);
    result.states[state] = sample;
    mark(result, state + ': CG hidden and cleared', !sample.image.visible && sample.layer.hidden && sample.image.src === null && sample.image.alt === '');
    mark(result, state + ': ordinary background/character/avatar match current line', sample.ordinary['#scene-bg'].visible && sample.ordinary['#character'].visible === !!result.fixture.normalCharacter && sample.ordinary['.speaker-portrait'].visible === !!result.fixture.normalSpeaker);
    checkGeometry(result, sample, state);
  }

  await page.evaluate(async ({ imagePath, alt }) => {
    const image = document.getElementById('cg-image');
    image.src = imagePath;
    image.alt = alt;
    await image.decode();
    image.hidden = false;
    document.getElementById('cg-layer').hidden = false;
    document.getElementById('app').dataset.cgState = 'ready';
  }, { imagePath: adopted.path, alt: item.id.toUpperCase() + ' 布局检查；关键区域：' + item.criticalRegions.items.map(region => region.label).join('、') + '。' });
  const ready = await measure(page);
  result.states.ready = ready;
  mark(result, 'ready: adopted intrinsic dimensions', ready.image.naturalWidth === adopted.width && ready.image.naturalHeight === adopted.height);
  mark(result, 'ready: full contain image visible', ready.image.visible && ready.image.fit === 'contain' && !!ready.image.fitted && within(ready.image.fitted, ready.layer.rect));
  mark(result, 'ready: fitted image within stage', within(ready.image.fitted, ready.app));
  mark(result, 'ready: image does not overlap header/dialogue', !overlap(ready.image.fitted, ready.header) && !overlap(ready.image.fitted, ready.dialogue), { fitted: ready.image.fitted, header: ready.header, dialogue: ready.dialogue });
  mark(result, 'ready: no ordinary background/effects/portrait displayed', Object.values(ready.ordinary).every(value => !value.visible), ready.ordinary);
  mark(result, 'ready: opaque CG base', /^rgb\(/.test(ready.layer.background) || /^rgba\([^)]*,\s*1\)$/.test(ready.layer.background), ready.layer.background);
  result.criticalRegions = {
    coordinateSystem: item.criticalRegions.coordinateSystem,
    method: item.criticalRegions.method,
    caution: '投影检验沿用美术人工估计矩形，证明记录范围无遮挡，不代替像素级分割或美术审阅。',
    items: item.criticalRegions.items.map(region => {
      const [x, y, width, height] = region.rect;
      const image = ready.image.fitted;
      const projected = image ? {
        x: image.x + image.width * x / 100, y: image.y + image.height * y / 100,
        width: image.width * width / 100, height: image.height * height / 100,
        right: image.x + image.width * (x + width) / 100,
        bottom: image.y + image.height * (y + height) / 100
      } : null;
      const overlaps = {
        header: overlap(projected, ready.header), dialogue: overlap(projected, ready.dialogue),
        menuButton: overlap(projected, ready.menuButton.rect),
        toolbar: ready.toolbar.some(control => overlap(projected, control.rect))
      };
      return { label: region.label, sourcePercent: region.rect, projected, insideFullImage: within(projected, image), overlaps };
    })
  };
  for (const region of result.criticalRegions.items) {
    mark(result, 'ready: critical region complete and without UI overlap: ' + region.label, region.insideFullImage && !Object.values(region.overlaps).some(Boolean), region);
  }
  checkGeometry(result, ready, 'ready');

  // 真实工具栏和菜单操作；不点击推进/自动，不冒充引擎已处于 CG 节点。
  await page.keyboard.press('Tab');
  for (const control of await page.locator('.toolbar-controls button').all()) await control.focus();
  const afterFocus = await measure(page);
  checkGeometry(result, afterFocus, 'after keyboard focus');
  await page.locator('.menu-button').click();
  await page.locator('#modal').waitFor({ state: 'visible' });
  const modal = await page.evaluate(() => {
    const card = document.querySelector('.modal-card').getBoundingClientRect();
    const body = document.getElementById('modal-body');
    const close = document.getElementById('modal-close').getBoundingClientRect();
    return { card: { x: card.x, y: card.y, right: card.right, bottom: card.bottom }, close: { x: close.x, y: close.y, right: close.right, bottom: close.bottom, width: close.width, height: close.height }, bodyOverflow: getComputedStyle(body).overflowY, focusInside: document.getElementById('modal').contains(document.activeElement) };
  });
  result.modal = modal;
  const viewportRect = { x: 0, y: 0, right: viewport.width, bottom: viewport.height };
  mark(result, 'menu: visible bounded modal with independent content scrolling', within(modal.card, viewportRect) && ['auto', 'scroll'].includes(modal.bodyOverflow) && modal.focusInside, modal);
  mark(result, 'menu: close control reachable and 44px', within(modal.close, viewportRect) && modal.close.width >= 43.9 && modal.close.height >= 43.9);
  await page.locator('#modal-close').click();
  await page.locator('#modal').waitFor({ state: 'hidden' });
  const afterMenu = await measure(page);
  mark(result, 'menu: fixture remains ready after closing', afterMenu.state === 'ready' && afterMenu.image.src === adopted.path);
  checkGeometry(result, afterMenu, 'after menu');
  mark(result, 'page: no uncaught browser errors', pageErrors.length === 0, pageErrors);
  result.screenshot = `qa/cg-ui-${item.id}-${viewport.width}x${viewport.height}.png`;
  await page.screenshot({ path: path.join(root, result.screenshot), fullPage: false });
  result.pass = result.checks.every(check => check.pass);
  return result;
}

(async () => {
  const report = {
    schemaVersion: 2, startedAt: new Date().toISOString(),
    mode: 'adopted-art-dom-layout-fixture',
    scope: '真实 index.html/styles.css/game.js 页面，隔离存储的新浏览器 context。以 DOM 夹具设置当前图、四态和正式对白，不向产品写测试剧情。',
    exclusions: ['不是 CG-D 正式剧情触发验收', '不是 E3 加载、竞态、隐藏解锁、缺图或存档测试', '不是实体手机或所有浏览器验收', '采用状态按最新 record 原文记录，不将美术自审采用写成用户逐图终审', 'criticalRegions 为美术人工估计范围，几何通过不等于所有细节可读性终审'],
    expectedCases: cases.length * viewports.length,
    sourceVersionsBefore: versions(), art: [], pending: [], cases: [], globalChecks: []
  };
  let browser;
  const { server, origin } = await startServer();
  try {
    for (const item of cases) {
      try {
        const record = JSON.parse(fs.readFileSync(path.join(root, item.record), 'utf8'));
        const adopted = record.adopted;
        const reasons = [];
        if (record.id?.toLowerCase() !== item.id) reasons.push('record.id 与 CG 编号不符');
        if (!record.status?.includes('采用') || !adopted?.version || !adopted?.path || !/^[a-f0-9]{64}$/i.test(adopted?.sha256 || '') || !(adopted?.width > 0 && adopted?.height > 0 && adopted?.bytes > 0)) reasons.push('缺完整 adopted 记录或采用状态未明确');
        if (adopted?.path && (!adopted.path.startsWith('assets/cg/') || !path.resolve(root, adopted.path).startsWith(path.join(root, 'assets/cg') + path.sep) || !adopted.path.endsWith('.png'))) reasons.push('adopted 路径不属于项目正式 CG PNG');
        const regions = record.criticalRegions;
        if (!regions?.coordinateSystem?.includes('百分比') || !Array.isArray(regions?.items) || !regions.items.length || regions.items.some(region => !region.label || !Array.isArray(region.rect) || region.rect.length !== 4 || region.rect.some(value => !Number.isFinite(value)) || region.rect[0] < 0 || region.rect[1] < 0 || region.rect[2] <= 0 || region.rect[3] <= 0 || region.rect[0] + region.rect[2] > 100 || region.rect[1] + region.rect[3] > 100)) reasons.push('缺有效百分比 criticalRegions 矩形');
        const mapping = record.integration;
        if (mapping?.cgKey !== item.id || !Array.isArray(mapping?.nodeIds) || JSON.stringify([...mapping.nodeIds].sort()) !== JSON.stringify([...item.nodes].sort())) reasons.push('integration 与 CG-A 持有节点白名单不一致');
        if (record.display?.fit !== 'contain' || record.display?.approvedCrop !== null) reasons.push('完整 contain 或无裁切约定不明确');
        if (reasons.length) {
          report.pending.push({ id: item.id, record: item.record, reasons, recordStatus: record.status || null });
          continue;
        }
        const bytes = fs.readFileSync(path.join(root, adopted.path));
        const isPng = bytes.length > 24 && bytes.subarray(0, 8).equals(Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]));
        const dimensions = isPng ? { width: bytes.readUInt32BE(16), height: bytes.readUInt32BE(20) } : null;
        item.adopted = adopted;
        item.criticalRegions = regions;
        item.origin = origin;
        const art = { id: item.id, record: item.record, recordStatus: record.status, recordGameAcceptance: record.gameAcceptance, adopted, criticalRegions: regions, display: { fit: record.display.fit, approvedCrop: record.display.approvedCrop }, integration: mapping, actualBytes: bytes.length, actualSha256: sha(bytes), actualDimensions: dimensions };
        report.art.push(art);
        const matches = art.actualSha256 === adopted.sha256 && art.actualBytes === adopted.bytes && dimensions?.width === adopted.width && dimensions?.height === adopted.height;
        report.globalChecks.push({ name: item.id + ': adopted hash, byte count and PNG dimensions match current record', pass: matches });
        if (!matches) {
          report.pending.push({ id: item.id, record: item.record, reasons: ['实际文件与 adopted 的哈希/字节/尺寸不一致，需美术确认'] });
          delete item.adopted;
        }
      } catch (error) {
        report.pending.push({ id: item.id, record: item.record, reasons: [error.code === 'ENOENT' ? '缺 record 或其 adopted 文件' : error.message] });
        delete item.adopted;
      }
    }
    browser = await chromium.launch({ headless: true, executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome' });
    report.browser = { name: 'Google Chrome', version: browser.version(), deviceScaleFactor: 1 };
    for (const item of cases) for (const [width, height] of viewports) {
      const viewport = { width, height };
      if (!item.adopted) {
        report.cases.push({ id: item.id, viewport, pass: null, status: 'pending', reasons: report.pending.find(pending => pending.id === item.id)?.reasons || ['前置记录待确认'], checks: [] });
        continue;
      }
      const context = await browser.newContext({ viewport, deviceScaleFactor: 1, reducedMotion: 'reduce' });
      try {
        // 新 context 无用户存档；只将正常设置设为即时文字，避免真实逐字计时覆盖布局夹具。
        await context.addInitScript(() => localStorage.setItem('bijie-rain-demo:v1:settings', JSON.stringify({ textSpeed: 'instant', sound: false, volume: 0.35 })));
        const page = await context.newPage();
        page.setDefaultTimeout(10000);
        const result = await exercise(page, item, item.adopted, viewport);
        report.cases.push(result);
        console.log(`${item.id} ${width}x${height}: ${result.pass ? 'PASS' : 'FAIL'} (${result.checks.filter(check => check.pass).length}/${result.checks.length})`);
      } catch (error) {
        report.cases.push({ id: item.id, viewport, pass: false, error: error.stack || error.message, checks: [] });
        console.error(`${item.id} ${width}x${height}: ${error.message}`);
      } finally { await context.close(); }
    }
  } finally {
    if (browser) await browser.close();
    await new Promise(resolve => server.close(resolve));
    report.finishedAt = new Date().toISOString();
    report.sourceVersionsAfter = versions();
    report.globalChecks.push({ name: 'source/records unchanged during run', pass: JSON.stringify(report.sourceVersionsBefore) === JSON.stringify(report.sourceVersionsAfter) });
    for (const art of report.art) {
      try {
        art.sha256After = sha(fs.readFileSync(path.join(root, art.adopted.path)));
        report.globalChecks.push({ name: art.id + ': image unchanged during run', pass: art.sha256After === art.actualSha256 });
      } catch (error) {
        report.globalChecks.push({ name: art.id + ': image unchanged during run', pass: false, error: error.message });
      }
    }
    report.pass = report.cases.length === report.expectedCases && report.pending.length === 0 && report.cases.every(item => item.pass) && report.globalChecks.every(item => item.pass);
    report.summary = { passedCases: report.cases.filter(item => item.pass).length, totalCases: report.cases.length, pendingCases: report.cases.filter(item => item.status === 'pending').length, totalChecks: report.cases.reduce((sum, item) => sum + item.checks.length, 0), projectedCriticalRegions: report.cases.reduce((sum, item) => sum + (item.criticalRegions?.items.length || 0), 0), failedChecks: report.cases.flatMap(item => item.checks.filter(check => !check.pass).map(check => ({ id: item.id, viewport: item.viewport, name: check.name }))) };
    fs.writeFileSync(path.join(root, 'qa/cg-ui-results.json'), JSON.stringify(report, null, 2) + '\n');
    console.log(`CG DOM layout fixture: ${report.summary.passedCases}/${report.summary.totalCases}, pending ${report.summary.pendingCases}; report qa/cg-ui-results.json`);
    if (!report.pass) process.exitCode = 1;
  }
})().catch(error => { console.error(error); process.exitCode = 1; });
