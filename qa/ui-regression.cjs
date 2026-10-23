'use strict';

// E4 布局回归：真实文件 + 真实浏览器；不修改产品文件或用户现有浏览器存档。
// node qa/ui-regression.cjs [--viewport=375x667] [--case=choice-5] [--screenshots-only]
// 背景单独替换后：node qa/ui-regression.cjs --backgrounds=repair,lobby
// 筛选运行会写 qa/ui-results-partial.json，不能代替全量五视口验收。
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const http = require('node:http');
const crypto = require('node:crypto');
const { chromium } = require(process.env.UI_PLAYWRIGHT_PATH || '/Users/yipin/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const ROOT = path.resolve(__dirname, '..');
const CHROME = process.env.UI_CHROME_PATH || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const PREFIX = 'bijie-rain-demo:v1:';
const VIEWPORTS = [{ width: 1440, height: 900 }, { width: 1280, height: 720 }, { width: 390, height: 844 }, { width: 375, height: 667 }, { width: 844, height: 390 }];
const OPTIONS = Object.fromEntries(process.argv.slice(2).filter(v => v.startsWith('--')).map(v => v.slice(2).split('=')));
const screenshotsOnly = Object.hasOwn(OPTIONS, 'screenshots-only');
const affectedBackgrounds = (OPTIONS.backgrounds || '').split(',').filter(Boolean);
const partial = Boolean(OPTIONS.viewport || OPTIONS.case || screenshotsOnly || affectedBackgrounds.length);
const REPORT = path.join(__dirname, affectedBackgrounds.length ? 'ui-results-background-refresh.json' : partial ? 'ui-results-partial.json' : 'ui-results.json');
const copy = value => JSON.parse(JSON.stringify(value));
const digest = file => crypto.createHash('sha256').update(fs.readFileSync(path.join(ROOT, file))).digest('hex');
const readJSON = file => JSON.parse(fs.readFileSync(path.join(ROOT, file), 'utf8'));
const source = fs.readFileSync(path.join(ROOT, 'story.js'), 'utf8');
const sandbox = { window: {} };
new vm.Script(source, { filename: 'story.js' }).runInNewContext(sandbox, { timeout: 2000 });
const story = copy(sandbox.window.RAIN_STORY);
const { StoryEngine } = require(path.join(ROOT, 'engine.js'));
const backgrounds = readJSON('assets/backgrounds-manifest.json').backgrounds;
const regularManifest = readJSON('assets/characters-manifest.json').characters;
const newManifest = readJSON('assets/new-characters-manifest.json').characters;
const manifest = { ...regularManifest, ...newManifest };
const versionFiles = [...new Set(['index.html', 'styles.css', 'game.js', 'story.js', 'engine.js',
  'assets/characters-manifest.json', 'assets/new-characters-manifest.json', 'assets/backgrounds-manifest.json',
  ...Object.values(story.backgrounds), 'assets/background-variants/m2-daynight-20261020/bg-street-day.png', ...Object.values(story.characters).map(value => value.image)])];
const versions = () => Object.fromEntries(versionFiles.map(file => [file, { sha256: digest(file), bytes: fs.statSync(path.join(ROOT, file)).size, mtime: fs.statSync(path.join(ROOT, file)).mtime.toISOString() }]));

// 只为目标节点寻找一条合法路线，不运行全剧情1224路径验收，也不拼造flags/history。
const nextIds = node => node.type === 'line' ? [node.next] : node.type === 'choice' ? node.choices.map(c => c.next) : node.type === 'gate' ? [...node.cases.map(c => c.next), node.default] : [];
function canReach(from, target, seen = new Set()) {
  if (from === target) return true;
  if (!story.nodes[from] || seen.has(from)) return false;
  seen.add(from);
  return nextIds(story.nodes[from]).some(next => canReach(next, target, seen));
}
function snapshotFor(target, choiceCount) {
  const failed = new Set();
  function search(engine) {
    while (true) {
      const node = engine.current();
      if (node.id === target) return choiceCount === undefined || engine.availableChoices().length === choiceCount ? engine.snapshot() : null;
      const key = node.id + JSON.stringify(engine.snapshot().flags);
      if (failed.has(key) || !canReach(node.id, target)) return null;
      if (node.type === 'line') { engine.advance(); continue; }
      if (node.type !== 'choice') return null;
      for (const { index, option } of engine.availableChoices()) {
        if (!canReach(option.next, target)) continue;
        const fork = new StoryEngine(story, engine.snapshot());
        fork.choose(index);
        const found = search(fork);
        if (found) return found;
      }
      failed.add(key);
      return null;
    }
  }
  const state = search(new StoryEngine(story));
  if (!state) throw new Error(`无法合法回放目标 ${target} / choices=${choiceCount}`);
  // 正式引擎再次restore，确保浏览器将要读取的是当前正文合法存档。
  new StoryEngine(story, state);
  return state;
}
const allNodes = Object.values(story.nodes);
const lines = allNodes.filter(node => node.type === 'line');
const longest = [...lines].sort((a, b) => Array.from(b.text).length - Array.from(a.text).length)[0];
const choices = [2, 3, 4, 5].map(count => {
  const node = count >= 4 ? story.nodes[story.previewChoice] : allNodes.find(node => node.type === 'choice' && node.choices.length === count);
  return { id: `choice-${count}`, kind: 'choice', count, node, state: snapshotFor(node.id, count) };
});
const roleCases = Object.entries(story.characters).map(([key, person]) => {
  const node = lines.find(line => !line.cg && line.character === key && line.speaker === key) || lines.find(line => !line.cg && line.character === key);
  if (!node) throw new Error(`正式剧情缺少 ${key} 主立绘节点`);
  return { id: `role-${key}`, kind: 'role', role: key, person, node, state: snapshotFor(node.id) };
});
const endingCases = allNodes.filter(node => node.type === 'end').map(node => ({ id: node.id, kind: 'end', role: node.character, node, state: snapshotFor(node.id) }));
const dialogueCase = { id: 'longest-dialogue', kind: 'line', node: longest, state: snapshotFor(longest.id) };
const backgroundCases = backgrounds.map(background => {
  const node = lines.find(node => !node.cg && (node.bg ?? story.scenes[node.scene].bg) === background.key);
  if (!node) throw new Error(`正式剧情缺少背景 ${background.key}`);
  return { id: `background-${background.key}`, kind: 'background', background, node, state: snapshotFor(node.id) };
});
const pressureText = Array.from('这是一段只用于检查界面容量的文字，雨声落在窗边，人物仍在等待回应。'.repeat(5)).slice(0, 95).join('');
const cases = [{ id: 'title', kind: 'title' }, ...choices, ...roleCases, ...endingCases, dialogueCase,
  { ...dialogueCase, id: 'pressure-95', kind: 'pressure', fixture: '只替换浏览器DOM的95字压力夹具；未修改story.js及存档正文' },
  ...['menu', 'save', 'load', 'history', 'settings'].map(action => ({ id: `modal-${action}`, kind: 'modal', action, node: choices.at(-1).node, state: choices.at(-1).state })),
  ...backgroundCases, { ...dialogueCase, id: 'reduced-motion', kind: 'motion' }];

// 浏览器端度量函数保持自包含，以便page.evaluate序列化。
function measure() {
  const rect = element => {
    if (!element) return null;
    const r = element.getBoundingClientRect();
    return { x: r.x, y: r.y, width: r.width, height: r.height, right: r.right, bottom: r.bottom };
  };
  const visible = element => Boolean(element && !element.closest('[hidden],[inert],[aria-hidden="true"]') && element.getClientRects().length && getComputedStyle(element).visibility !== 'hidden');
  const describe = element => {
    if (!visible(element)) return null;
    const style = getComputedStyle(element);
    return { rect: rect(element), clientWidth: element.clientWidth, clientHeight: element.clientHeight,
      scrollWidth: element.scrollWidth, scrollHeight: element.scrollHeight, scrollLeft: element.scrollLeft, scrollTop: element.scrollTop,
      overflowX: style.overflowX, overflowY: style.overflowY, objectFit: style.objectFit, objectPosition: style.objectPosition,
      outlineStyle: style.outlineStyle, outlineWidth: style.outlineWidth, outlineColor: style.outlineColor,
      text: (element.textContent || '').trim(), src: element.getAttribute('src'), naturalWidth: element.naturalWidth || null,
      naturalHeight: element.naturalHeight || null, presentation: element.dataset.presentation || null };
  };
  const selectors = ['#app', '#title-screen', '#game-screen', '#end-screen', '.title-copy', '.title-menu', '.title-footer', '.title-footer > div', '.title-footer > p', '.title-footer > button',
    '#game-title', '.scene-header', '.dialogue-shell', '#dialogue-box', '#dialogue-text', '.speaker-portrait', '#speaker-avatar',
    '#character', '#choice-panel', '#choice-question', '#choice-list', '.game-toolbar', '.end-content', '#end-character',
    '#end-title', '#end-copy', '#end-next', '.end-actions', '.end-footnote', '#scene-bg', '#modal', '.modal-card', '.modal-header', '#modal-body', '#modal-close'];
  const elements = Object.fromEntries(selectors.map(selector => [selector, describe(document.querySelector(selector))]));
  const controls = Array.from(document.querySelectorAll('button:not(:disabled), input:not(:disabled), select:not(:disabled), [role="button"]'))
    .filter(visible).map(element => ({ selector: element.id ? '#' + element.id : element.className || element.tagName,
      action: element.dataset.action || null, choice: element.dataset.choiceIndex || null, ...describe(element) }));
  const hitTests = Array.from(document.querySelectorAll('button:not(:disabled), input:not(:disabled), select:not(:disabled)')).filter(visible).map(element => {
    const box = element.getBoundingClientRect();
    let fullyVisible = box.left >= 0 && box.top >= 0 && box.right <= innerWidth && box.bottom <= innerHeight;
    for (let parent = element.parentElement; parent && fullyVisible; parent = parent.parentElement) {
      const style = getComputedStyle(parent), clip = parent.getBoundingClientRect();
      if (['auto', 'scroll', 'hidden', 'clip'].includes(style.overflowY) && (box.top < clip.top - 1 || box.bottom > clip.bottom + 1)) fullyVisible = false;
      if (['auto', 'scroll', 'hidden', 'clip'].includes(style.overflowX) && (box.left < clip.left - 1 || box.right > clip.right + 1)) fullyVisible = false;
    }
    const points = fullyVisible ? [[box.left + 4, box.top + 4], [box.right - 4, box.top + 4], [box.left + 4, box.bottom - 4], [box.right - 4, box.bottom - 4]].map(([x, y]) => {
      const hit = document.elementFromPoint(x, y);
      return { x, y, pass: element === hit || element.contains(hit), hit: hit?.id || hit?.className || hit?.tagName };
    }) : [];
    return { action: element.dataset.action || null, label: element.textContent.trim(), fullyVisible, points };
  });
  const app = document.getElementById('app');
  return { viewport: { width: innerWidth, height: innerHeight }, screen: document.body.dataset.screen,
    page: { scrollX, scrollY, documentWidth: document.documentElement.scrollWidth, documentHeight: document.documentElement.scrollHeight,
      bodyWidth: document.body.scrollWidth, bodyHeight: document.body.scrollHeight, appScrollLeft: app.scrollLeft, appScrollTop: app.scrollTop },
    elements, controls, hitTests, choices: Array.from(document.querySelectorAll('.choice-button')).filter(visible).map(describe),
    active: describe(document.activeElement), activeTag: document.activeElement?.id || document.activeElement?.className || document.activeElement?.tagName,
    activeInModal: Boolean(document.activeElement?.closest('#modal')), reducedMotion: matchMedia('(prefers-reduced-motion: reduce)').matches,
    animations: Array.from(document.querySelectorAll('.rain, #title-hero, #advance-hint i, #choice-panel')).map(element => ({
      selector: element.id || element.className, name: getComputedStyle(element).animationName, duration: getComputedStyle(element).animationDuration,
      transition: getComputedStyle(element).transitionDuration })) };
}
function within(a, b, tolerance = 1.5) {
  return a && b && a.x >= b.x - tolerance && a.y >= b.y - tolerance && a.right <= b.right + tolerance && a.bottom <= b.bottom + tolerance;
}
function overlaps(a, b, tolerance = 1.5) {
  return a && b && Math.min(a.right, b.right) - Math.max(a.x, b.x) > tolerance && Math.min(a.bottom, b.bottom) - Math.max(a.y, b.y) > tolerance;
}
function audit(data, test) {
  const checks = [];
  const add = (name, pass, detail) => checks.push({ name, pass: Boolean(pass), ...(detail === undefined ? {} : { detail }) });
  const el = selector => data.elements[selector];
  const r = selector => el(selector)?.rect;
  const viewport = { x: 0, y: 0, right: data.viewport.width, bottom: data.viewport.height };
  add('舞台在视口内', within(r('#app'), viewport), r('#app'));
  add('页面无横向溢出', data.page.documentWidth <= data.viewport.width + 1 && data.page.bodyWidth <= data.viewport.width + 1, data.page);
  add('页面无纵向溢出', data.page.documentHeight <= data.viewport.height + 1 && data.page.bodyHeight <= data.viewport.height + 1, data.page);
  add('页面与舞台无滚动偏移', Object.values({ x: data.page.scrollX, y: data.page.scrollY, ax: data.page.appScrollLeft, ay: data.page.appScrollTop }).every(value => value === 0), data.page);
  const undersized = data.controls.filter(control => control.rect.width < 43.5 || control.rect.height < 43.5);
  add('可操作控件至少44像素', undersized.length === 0, undersized.map(control => ({ selector: control.selector, action: control.action, rect: control.rect })));
  const blocked = data.hitTests.filter(control => control.points.some(point => !point.pass));
  add('视口内控件四角未被其他图层拦截', blocked.length === 0, blocked);
  if (test.kind === 'title') {
    for (const selector of ['#game-title', '.title-menu', '.title-footer']) add(`${selector}在舞台内`, within(r(selector), r('#app')), r(selector));
    add('标题菜单不覆盖标题', !overlaps(r('.title-menu'), r('#game-title')));
    add('标题菜单不覆盖可见页脚内容', ['.title-footer > div', '.title-footer > p', '.title-footer > button'].every(selector => !overlaps(r('.title-menu'), r(selector))));
  } else if (test.kind === 'modal') {
    add('弹窗与关闭按钮在舞台内', within(r('.modal-card'), r('#app')) && within(r('#modal-close'), r('#app')));
    add('弹窗内部允许纵向滚动', ['auto', 'scroll'].includes(el('#modal-body')?.overflowY));
    add('弹窗无横向内容溢出', el('#modal-body')?.scrollWidth <= el('#modal-body')?.clientWidth + 1);
    add('打开弹窗后焦点在弹窗内', data.activeInModal, data.activeTag);
  } else if (test.kind === 'end') {
    for (const selector of ['.end-content', '.end-footnote']) add(`${selector}在舞台内`, within(r(selector), r('#app')), r(selector));
    for (const selector of ['#end-title', '#end-copy', '#end-next', '.end-actions']) add(`${selector}在界内或内容列可滚动`,
      within(r(selector), r('.end-content')) || ['auto', 'scroll'].includes(el('.end-content')?.overflowY), r(selector));
    add('结束页内容不覆盖底注', !overlaps(r('.end-content'), r('.end-footnote')));
    add('结束立绘成功加载且等比显示', el('#end-character')?.naturalWidth > 0 && el('#end-character')?.objectFit === 'contain');
    if (story.characters[test.role]?.presentation === 'orb') {
      add('球形结束立绘正方形图框', Math.abs(r('#end-character')?.width - r('#end-character')?.height) <= 1.5, r('#end-character'));
      add('球形结束立绘不覆盖正文', !overlaps(r('#end-character'), r('.end-content')), { portrait: r('#end-character'), content: r('.end-content') });
    }
  } else {
    for (const selector of ['.scene-header', '.dialogue-shell', '.game-toolbar']) add(`${selector}在舞台内`, within(r(selector), r('#app')), r(selector));
    add('场景标题与对白不重叠', !overlaps(r('.scene-header'), r('.dialogue-shell')));
    const text = el('#dialogue-text');
    add('对白无横向截断', !text || text.scrollWidth <= text.clientWidth + 1);
    add('对白在对白容器内或内部可滚动', !text || within(text.rect, r('#dialogue-box')) || ['auto', 'scroll'].includes(el('#dialogue-box')?.overflowY), { text: text?.rect, box: r('#dialogue-box') });
    if (test.kind === 'choice') {
      add('真实可用选项数量正确', data.choices.length === test.count, data.choices.length);
      add('选项面板不覆盖对白/标题', !overlaps(r('#choice-panel'), r('.dialogue-shell')) && !overlaps(r('#choice-panel'), r('.scene-header')));
      add('选项面板在舞台内', within(r('#choice-panel'), r('#app')));
      add('按钮之间不相互覆盖', data.choices.every((choice, index) => data.choices.slice(index + 1).every(other => !overlaps(choice.rect, other.rect))));
      add('选项文字无横向截断', data.choices.every(choice => choice.scrollWidth <= choice.clientWidth + 1));
    }
    if (test.kind === 'role') {
      add('主立绘成功加载且等比显示', el('#character')?.naturalWidth > 0 && el('#character')?.objectFit === 'contain');
      add('主立绘图框在舞台内', within(r('#character'), r('#app')), r('#character'));
      if (test.person.presentation === 'orb') {
        for (const selector of ['#character', '#speaker-avatar']) {
          add(`${selector}球形图框正方形`, Math.abs(r(selector)?.width - r(selector)?.height) <= 1.5, r(selector));
          add(`${selector}球形contain`, el(selector)?.objectFit === 'contain');
        }
        add('球形主体不被对白覆盖', !overlaps(r('#character'), r('.dialogue-shell')));
        add('球形头像完整落在头像框内', within(r('#speaker-avatar'), r('.speaker-portrait')));
      }
    }
    if (test.kind === 'background') {
      add('背景加载成功', el('#scene-bg')?.naturalWidth > 0);
      const expected = data.viewport.width <= 760 ? test.background.crop.mobile_portrait_object_position : test.background.crop.desktop_object_position;
      add('按对应视口的分背景安全区裁切', el('#scene-bg')?.objectPosition === expected,
        { actual: el('#scene-bg')?.objectPosition, expected });
    }
    if (test.kind === 'motion') {
      add('浏览器确实启用减少动态', data.reducedMotion);
      add('减少动态关闭动画与过渡', data.animations.every(item => item.name === 'none' && item.transition.split(',').every(value => parseFloat(value) === 0)), data.animations);
    }
  }
  return checks;
}
function screenshotNeeded(id, viewport) {
  const key = `${viewport.width}x${viewport.height}`;
  return id === 'choice-5' || (id === 'title' && ['1440x900', '375x667', '844x390'].includes(key)) ||
    (affectedBackgrounds.length && id.startsWith('background-') && ['1440x900', '375x667', '844x390'].includes(key)) ||
    (id.startsWith('role-') && key === '375x667') ||
    (['role-huangqiuqiu', 'end_huangqiuqiu'].includes(id) && ['375x667', '844x390'].includes(key)) ||
    (['longest-dialogue', 'pressure-95', 'modal-settings'].includes(id) && key === '375x667');
}

async function main() {
  const before = versions();
  const report = { created: new Date().toISOString(), timezone: 'Asia/Shanghai', type: partial ? 'partial-current-browser-layout' : 'five-viewport-current-browser-layout',
    method: '正式story.js + engine.js合法回放snapshot；独立Chrome context内注入auto并真实点击继续。压力夹具仅修改测试页DOM。',
    limitations: ['这是当前文件版本的桌面Chrome布局回归，不等同于手机真机触摸验收。', '未运行全剧情1224路径回归、声音体验或CG运行时接入验收。',
      '截图是否可作为正式素材终验，应由E4交接核对素材采用状态；本报告仅标识实际读取的文件版本。', '几何断言不代替人工检查表情、画面细节和关键物件。'],
    filesBefore: before, targetedBackgrounds: affectedBackgrounds, longestDialogue: { nodeId: longest.id, codePointLength: Array.from(longest.text).length, text: longest.text },
    pressureFixture: { length: Array.from(pressureText).length, text: pressureText }, cases: [] };
  const mime = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8', '.png': 'image/png', '.json': 'application/json' };
  const server = http.createServer((request, response) => {
    let relative;
    try { relative = decodeURIComponent(new URL(request.url, 'http://localhost').pathname); } catch (_) { response.writeHead(400).end(); return; }
    const file = path.resolve(ROOT, '.' + (relative === '/' ? '/index.html' : relative));
    if (!file.startsWith(ROOT + path.sep)) { response.writeHead(403).end(); return; }
    fs.readFile(file, (error, bytes) => {
      if (error) { response.writeHead(404).end(); return; }
      response.writeHead(200, { 'Content-Type': mime[path.extname(file)] || 'application/octet-stream', 'Cache-Control': 'no-store' });
      response.end(bytes);
    });
  });
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  const origin = `http://127.0.0.1:${server.address().port}`;
  let browser;
  try {
    browser = await chromium.launch({ executablePath: CHROME, headless: true });
    report.browser = browser.version();
    for (const viewport of VIEWPORTS) {
      const viewportKey = `${viewport.width}x${viewport.height}`;
      if (OPTIONS.viewport && OPTIONS.viewport !== viewportKey) continue;
      for (const test of cases) {
        if (OPTIONS.case && OPTIONS.case !== test.id) continue;
        const backgroundKey = test.node ? test.node.bg ?? story.scenes[test.node.scene].bg : 'street';
        const backgroundTime = test.node ? test.node.time ?? story.scenes[test.node.scene].time : null;
        const backgroundPath = backgroundKey === 'street' && backgroundTime === '下午' ?
          'assets/background-variants/m2-daynight-20261020/bg-street-day.png' : story.backgrounds[backgroundKey];
        if (affectedBackgrounds.length && !affectedBackgrounds.includes(backgroundKey)) continue;
        if (!affectedBackgrounds.length && test.kind === 'background' && !(viewport.width < viewport.height && viewport.width < 761)) continue;
        if (screenshotsOnly && !screenshotNeeded(test.id, viewport)) continue;
        const result = { id: test.id, kind: test.kind, viewport, nodeId: test.node?.id || null, started: new Date().toISOString(),
          background: { key: backgroundKey, path: backgroundPath, sha256: digest(backgroundPath) }, source: test.fixture ? 'DOM压力夹具' : '正式剧情及产品界面',
          fixture: test.fixture || null, checks: [], pageErrors: [], externalRequests: [], failedRequests: [] };
        const context = await browser.newContext({ viewport, deviceScaleFactor: 1, reducedMotion: test.kind === 'motion' ? 'reduce' : 'no-preference', locale: 'zh-CN' });
        const page = await context.newPage();
        page.setDefaultTimeout(8000);
        page.on('pageerror', error => result.pageErrors.push(error.message));
        page.on('requestfailed', request => result.failedRequests.push({ url: request.url(), error: request.failure()?.errorText }));
        await context.route('**/*', route => {
          const url = route.request().url();
          if (url.startsWith(origin + '/') || url.startsWith('data:')) return route.continue();
          result.externalRequests.push(url);
          return route.abort();
        });
        try {
          if (test.state) {
            await context.addInitScript(({ prefix, state }) => {
              const settings = { textSpeed: 'instant', sound: false, volume: 0.35 };
              localStorage.setItem(prefix + 'settings', JSON.stringify(settings));
              localStorage.setItem(prefix + 'auto', JSON.stringify({ format: 1, savedAt: new Date().toISOString(), state, settings }));
            }, { prefix: PREFIX, state: test.state });
          }
          await page.goto(origin + '/', { waitUntil: 'load' });
          if (test.state) {
            await page.locator('#continue-btn').click();
            await page.waitForFunction(expected => document.body.dataset.screen === expected, test.kind === 'end' ? 'end' : 'game');
            const savedNode = await page.evaluate(prefix => JSON.parse(localStorage.getItem(prefix + 'auto')).state.nodeId, PREFIX);
            result.checks.push({ name: '真实继续读取目标节点', pass: savedNode === test.node.id, detail: savedNode });
          }
          await page.evaluate(async () => {
            await Promise.all(Array.from(document.images).filter(image => image.getClientRects().length && image.src).map(image => image.decode().catch(() => {})));
            await document.fonts.ready;
          });
          // 等待有限入场动画结束；无限雨线由截图选项停在确定帧，不改产品CSS。
          await page.waitForTimeout(test.kind === 'title' ? 1550 : 360);
          if (test.kind === 'pressure') await page.locator('#dialogue-text').evaluate((element, text) => { element.textContent = text; }, pressureText);
          if (test.kind === 'modal') {
            const action = test.action === 'menu' ? '#game-screen [data-action="menu"]' : `#game-screen .game-toolbar [data-action="${test.action}"]`;
            await page.locator(action).click();
            await page.locator('#modal').waitFor({ state: 'visible' });
          }
          result.geometry = await page.evaluate(measure);
          result.checks.push(...audit(result.geometry, test));
          if (test.kind === 'role') result.artReference = { path: manifest[test.role]?.path, avatarSourceCropLTRB: manifest[test.role]?.displayRecommendation?.avatarSourceCropLTRB || null,
            note: '头像来源建议是头肩裁切而非精确脸框；此值仅留作人工复核，不伪装成脸部遮挡自动检测。' };
          if (test.kind === 'choice') {
            const endpoints = [];
            for (const index of [0, test.count - 1]) {
              const button = page.locator('.choice-button').nth(index);
              await button.focus();
              const current = await page.evaluate(measure);
              endpoints.push({ index, button: current.choices[index]?.rect, panel: current.elements['#choice-panel']?.rect, page: current.page });
              result.checks.push({ name: `选项${index + 1}可通过焦点访问且不推动舞台`,
                pass: within(current.choices[index]?.rect, current.elements['#choice-panel']?.rect) && current.page.scrollY === 0 && current.page.appScrollTop === 0,
                detail: endpoints.at(-1) });
            }
            result.choiceEndpoints = endpoints;
          }
          if (test.kind === 'end') {
            for (const selector of ['#end-title', '#end-copy', '#end-next', '.end-actions']) {
              await page.locator(selector).scrollIntoViewIfNeeded();
              const current = await page.evaluate(measure);
              result.checks.push({ name: `${selector}可在结束内容列中完整访问`,
                pass: within(current.elements[selector]?.rect, current.elements['.end-content']?.rect) && current.page.scrollY === 0 && current.page.appScrollTop === 0,
                detail: { content: current.elements['.end-content']?.rect, target: current.elements[selector]?.rect } });
            }
          }
          // 真正按Tab，允许局部choice-list/modal-body滚动，但stage/document不能滚动。
          const focusSamples = [];
          for (let step = 0; step < (test.kind === 'modal' || test.kind === 'choice' ? 14 : 9); step++) {
            await page.keyboard.press('Tab');
            const current = await page.evaluate(measure);
            focusSamples.push({ active: current.activeTag, inModal: current.activeInModal, page: current.page,
              app: current.elements['#app']?.rect, outline: current.active && { style: current.active.outlineStyle, width: current.active.outlineWidth } });
          }
          result.focusSamples = focusSamples;
          result.checks.push({ name: 'Tab前后舞台及页面始终不滚动', pass: focusSamples.every(sample => sample.page.scrollX === 0 && sample.page.scrollY === 0 && sample.page.appScrollLeft === 0 && sample.page.appScrollTop === 0 &&
            Math.abs(sample.app.y - result.geometry.elements['#app'].rect.y) < 1 && Math.abs(sample.app.x - result.geometry.elements['#app'].rect.x) < 1) });
          const focused = focusSamples.filter(sample => sample.outline && !['BODY', 'HTML'].includes(sample.active));
          result.checks.push({ name: '键盘焦点具有可见轮廓', pass: focused.every(sample => sample.outline.style !== 'none' && parseFloat(sample.outline.width) > 0), detail: focused.filter(sample => sample.outline.style === 'none' || parseFloat(sample.outline.width) === 0) });
          if (test.kind === 'modal') result.checks.push({ name: 'Tab焦点留在弹窗内', pass: focusSamples.every(sample => sample.inModal) });
          if (screenshotNeeded(test.id, viewport)) {
            // 自动档提示自然消失后再拍交接图；焦点回归与截图初始构图分开。
            if (await page.locator('#toast').isVisible()) await page.locator('#toast').waitFor({ state: 'hidden', timeout: 7000 });
            await page.evaluate(() => {
              document.activeElement?.blur();
              for (const selector of ['.end-content', '#dialogue-box', '#choice-panel']) {
                const element = document.querySelector(selector);
                if (element) element.scrollTop = 0;
              }
            });
            if (test.kind === 'choice') await page.locator('.choice-button').first().focus();
            if (test.kind === 'modal') await page.locator('#modal-body').evaluate(element => { element.scrollTop = 0; });
            result.screenshot = `qa/ui-${viewportKey}-${test.id}.png`;
            await page.screenshot({ path: path.join(ROOT, result.screenshot), fullPage: false, animations: 'disabled' });
            if (test.kind === 'end' && await page.locator('.end-content').evaluate(element => element.scrollHeight > element.clientHeight + 1)) {
              await page.locator('.end-actions').scrollIntoViewIfNeeded();
              result.screenshotActions = `qa/ui-${viewportKey}-${test.id}-actions.png`;
              await page.screenshot({ path: path.join(ROOT, result.screenshotActions), fullPage: false, animations: 'disabled' });
            }
          }
        } catch (error) {
          result.error = error.stack;
          result.checks.push({ name: '用例执行完成', pass: false, detail: error.message });
        } finally {
          result.checks.push({ name: '无浏览器页面异常', pass: result.pageErrors.length === 0, detail: result.pageErrors });
          result.checks.push({ name: '未请求外网', pass: result.externalRequests.length === 0, detail: result.externalRequests });
          result.checks.push({ name: '资源请求无失败', pass: result.failedRequests.length === 0, detail: result.failedRequests });
          result.pass = result.checks.every(check => check.pass);
          result.finished = new Date().toISOString();
          report.cases.push(result);
          await context.close();
        }
      }
      console.log(`${viewportKey}: ${report.cases.filter(item => item.viewport.width === viewport.width && item.viewport.height === viewport.height && item.pass).length}/${report.cases.filter(item => item.viewport.width === viewport.width && item.viewport.height === viewport.height).length} 用例通过`);
    }
  } finally {
    if (browser) await browser.close();
    await new Promise(resolve => server.close(resolve));
    report.filesAfter = versions();
    report.changedDuringRun = versionFiles.filter(file => before[file].sha256 !== report.filesAfter[file].sha256);
    report.finished = new Date().toISOString();
    report.summary = { total: report.cases.length, passed: report.cases.filter(test => test.pass).length, failed: report.cases.filter(test => !test.pass).length,
      assertions: report.cases.reduce((sum, test) => sum + test.checks.length, 0), failedAssertions: report.cases.reduce((sum, test) => sum + test.checks.filter(check => !check.pass).length, 0),
      screenshots: report.cases.filter(test => test.screenshot).length + report.cases.filter(test => test.screenshotActions).length, versionStable: report.changedDuringRun.length === 0 };
    report.pass = report.summary.total > 0 && report.summary.failed === 0 && report.summary.versionStable;
    fs.writeFileSync(REPORT, JSON.stringify(report, null, 2) + '\n');
    console.log(JSON.stringify({ report: path.relative(ROOT, REPORT), pass: report.pass, ...report.summary }, null, 2));
    if (!report.pass) process.exitCode = 1;
  }
}
main().catch(error => { console.error(error.stack); process.exitCode = 1; });
