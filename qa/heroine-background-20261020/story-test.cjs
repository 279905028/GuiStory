'use strict';
// 本轮独立验收。历史测试、历史报告与正式故事均只读。
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const assert = require('node:assert/strict');
const root = path.resolve(__dirname, '../..'), out = __dirname;
const { StoryEngine } = require('../../engine.js');
const { StoryEngine: BaselineEngine } = require('./before/engine.js');
const parseStory = source => JSON.parse(source.slice(source.indexOf('{'), source.lastIndexOf('}') + 1));
const story = parseStory(fs.readFileSync(path.join(root, 'story.js'), 'utf8'));
const baseline = parseStory(fs.readFileSync(path.join(out, 'before/story.js'), 'utf8'));
const addedIds = Object.keys(story.nodes).filter(id => !baseline.nodes[id]);
const changedTextIds = Object.keys(baseline.nodes).filter(id =>
  story.nodes[id]?.text !== baseline.nodes[id].text);
const eligible = flags => flags.qiuSignal === 'record' && flags.qiuReply === 'reply';
const matches = (flags, condition) => Object.hasOwn(flags, condition.flag) && flags[condition.flag] === condition.value;
const allowed = (flags, option) => !option.requires || option.requires.every(condition => matches(flags, condition));
const links = node => node.type === 'choice' ? node.choices.map(option => option.next) :
  node.type === 'gate' ? node.cases.map(item => item.next).concat(node.default) : node.next ? [node.next] : [];
const hasHiddenIdentity = node => node.character === 'huangqiuqiu' || node.speaker === 'huangqiuqiu' ||
  /黄球球/.test([node.text, node.title, node.prompt, node.nextChapter].filter(Boolean).join('\n'));
const hash = buffer => crypto.createHash('sha256').update(buffer).digest('hex');
const coverFiles = ['index.html', 'styles.css', 'assets/cover-b-desktop.png', 'assets/cover-b-mobile.png'];
const runtimeFiles = ['story.js', 'engine.js', 'game.js', 'index.html', 'styles.css',
  'assets/runtime-v0.4-manifest.json', ...coverFiles.filter(file => file.startsWith('assets/'))];
const hashes = () => Object.fromEntries(runtimeFiles.map(file => [file,
  fs.existsSync(path.join(root, file)) ? hash(fs.readFileSync(path.join(root, file))) : null]));

function reach(target, decisions = {}, source = story, Engine = StoryEngine) {
  const engine = new Engine(source);
  for (let step = 0; step <= Object.keys(source.nodes).length; step++) {
    const node = engine.current();
    if (node.id === target) return engine;
    if (node.type === 'choice') {
      const desired = decisions[node.id];
      const choice = engine.availableChoices().find(item => item.option.value === desired) ||
        (desired === undefined ? engine.availableChoices()[0] : null);
      assert(choice, `${target}: ${node.id} 缺少可用选项 ${desired}`);
      assert(engine.choose(choice.index));
    } else assert(engine.advance(), `${target}: 无法从 ${node.id} 继续`);
  }
  throw new Error('自然回放超出节点总量：' + target);
}

function analyze(source) {
  const nodes = source.nodes, live = new Map(), visiting = new Set(), memo = new Map();
  const reached = new Set(), witnesses = new Map(), terminalIds = new Set();
  function future(id) {
    assert(nodes[id], '缺失节点：' + id);
    if (live.has(id)) return live.get(id);
    assert(!visiting.has(id), '剧情图存在循环：' + id);
    visiting.add(id);
    const node = nodes[id], flags = new Set();
    for (const next of links(node)) for (const flag of future(next)) flags.add(flag);
    if (node.type === 'choice') {
      flags.delete(node.flag);
      for (const option of node.choices) for (const condition of option.requires || []) flags.add(condition.flag);
    }
    for (const condition of node.cases || []) flags.add(condition.flag);
    if (hasHiddenIdentity(node) || node.type === 'choice') {
      flags.add('qiuSignal'); flags.add('qiuReply');
    }
    if (node.type === 'end' && !node.next) {
      flags.add('route'); flags.add('piaoRelationship');
    }
    visiting.delete(id);
    live.set(id, [...flags].sort());
    return live.get(id);
  }
  function explore(id, flags, decisions) {
    const key = id + ':' + JSON.stringify(live.get(id).map(flag =>
      Object.hasOwn(flags, flag) ? [true, flags[flag]] : [false]));
    if (memo.has(key)) return memo.get(key);
    const node = nodes[id];
    reached.add(id);
    if (!witnesses.has(id)) witnesses.set(id, decisions);
    if (hasHiddenIdentity(node)) assert(eligible(flags), id + ' 提前显示隐藏身份');
    if (node.type === 'choice' && !eligible(flags)) for (const option of node.choices.filter(option => allowed(flags, option))) {
      assert(!/黄球球/.test(option.label), id + ' 可用选项提前显示隐藏身份');
    }
    if (node.type === 'end' && !node.next) {
      const expected = flags.route === 'piao' && flags.piaoRelationship === 'together' ? 'end_piao_wenwen' : 'end_piao_maolang';
      assert.equal(id, expected, '结局不符合既定关系规则');
      if (flags.route !== 'piao') assert.equal(flags.piaoRelationship, undefined);
      terminalIds.add(id);
      const result = { paths: 1, terminalCounts: { [id]: 1 }, minLines: 0, maxLines: 0, minChars: 0, maxChars: 0 };
      memo.set(key, result);
      return result;
    }
    let branches;
    if (node.type === 'choice') branches = node.choices.filter(option => allowed(flags, option)).map(option =>
      explore(option.next, { ...flags, [node.flag]: option.value }, { ...decisions, [id]: option.value }));
    else if (node.type === 'gate') branches = [explore(
      (node.cases.find(condition => matches(flags, condition)) || { next: node.default }).next, flags, decisions)];
    else branches = [explore(node.next, flags, decisions)];
    assert(branches.length, id + ' 没有合法后继');
    const isLine = Number(node.type === 'line'), chars = isLine ? node.text.length : 0;
    const result = {
      paths: branches.reduce((sum, branch) => sum + branch.paths, 0),
      terminalCounts: {},
      minLines: Math.min(...branches.map(branch => branch.minLines)) + isLine,
      maxLines: Math.max(...branches.map(branch => branch.maxLines)) + isLine,
      minChars: Math.min(...branches.map(branch => branch.minChars)) + chars,
      maxChars: Math.max(...branches.map(branch => branch.maxChars)) + chars
    };
    for (const branch of branches) for (const [terminal, count] of Object.entries(branch.terminalCounts)) {
      result.terminalCounts[terminal] = (result.terminalCounts[terminal] || 0) + count;
    }
    memo.set(key, result);
    return result;
  }
  for (const id of Object.keys(nodes)) future(id);
  const result = explore(source.start, {}, {});
  assert(Number.isSafeInteger(result.paths));
  assert.deepEqual(Object.keys(nodes).filter(id => !reached.has(id)), [], '存在不可达节点');
  return { ...result, reachableNodes: reached.size, equivalentStates: memo.size, terminals: [...terminalIds].sort(), witnesses };
}

function contracts() {
  const added = new Set(addedIds);
  assert(addedIds.length > 0, '本轮尚未新增背景对白');
  assert.equal(story.release, '0.4');
  assert.equal(story.contentRevision, 'background-20261020');
  function collapse(id) {
    const visited = new Set();
    while (added.has(id)) {
      assert(!visited.has(id), '新增节点存在循环：' + id);
      visited.add(id);
      const node = story.nodes[id];
      assert.equal(node.type, 'line', id + ' 新增节点必须是普通对白');
      assert.equal(node.cg, undefined, id + ' 新增节点不应绑定 CG');
      id = node.next;
    }
    return id;
  }
  function normalized(node, current) {
    const copy = structuredClone(node);
    if (copy.type === 'line') delete copy.text;
    if (current) {
      if (copy.next) copy.next = collapse(copy.next);
      if (copy.default) copy.default = collapse(copy.default);
      for (const item of [...(copy.choices || []), ...(copy.cases || [])]) item.next = collapse(item.next);
    }
    return copy;
  }
  for (const [id, oldNode] of Object.entries(baseline.nodes)) {
    assert(story.nodes[id], id + ' 旧节点被删除');
    assert.deepEqual(normalized(story.nodes[id], true), normalized(oldNode, false), id + ' 旧节点契约变化');
  }
  for (const key of ['version', 'title', 'start', 'previewChoice', 'routeChoice', 'chapters', 'scenes', 'backgrounds', 'cgs']) {
    assert.deepEqual(story[key], baseline[key], key + ' 不应变化');
  }
  const oldChars = structuredClone(baseline.characters);
  oldChars.piao.age = 20;
  assert.deepEqual(story.characters, oldChars, '仅飘年龄应变为已确认的 20 岁');
  assert.equal(hash(fs.readFileSync(path.join(root, 'engine.js'))), hash(fs.readFileSync(path.join(out, 'before/engine.js'))), '正式引擎不应变化');
  return {
    originalNodes: Object.keys(baseline.nodes).length, addedLines: addedIds.length, changedTextCount: changedTextIds.length,
    addedIds, changedTextIds, choiceCount: Object.values(story.nodes).filter(node => node.type === 'choice').length,
    gateCount: Object.values(story.nodes).filter(node => node.type === 'gate').length,
    cgCount: Object.keys(story.cgs).length, cgBindings: Object.values(story.nodes).filter(node => node.cg).length
  };
}

function validateRuntimeDelta() {
  const before = fs.readFileSync(path.join(out, 'before/game.js'), 'utf8');
  const after = fs.readFileSync(path.join(root, 'game.js'), 'utf8');
  const quoted = /'(?:\\.|[^'\\])*'|"(?:\\.|[^"\\])*"/g;
  function split(source) {
    const strings = [];
    const skeleton = source.replace(quoted, value => {
      strings.push(value); return '"__STRING__"';
    });
    return { strings, skeleton };
  }
  const oldTokens = split(before), newTokens = split(after);
  assert.equal(newTokens.skeleton, oldTokens.skeleton, '运行层只允许存档前缀和说明文案变化');
  assert.equal(newTokens.strings.length, oldTokens.strings.length);
  const changes = [];
  for (let i = 0; i < oldTokens.strings.length; i++) {
    const original = oldTokens.strings[i], current = newTokens.strings[i];
    if (original === current) continue;
    if (original === "'bijie-rain-demo:v0.4:'") assert.equal(current, "'bijie-rain-demo:v0.4-background:'");
    else assert(/[\u3400-\u9fff]/.test(original) && /[\u3400-\u9fff]/.test(current),
      '不属于中文说明文案的代码字符串被改变：' + original);
    changes.push({ original, current });
  }
  assert.match(after, /const PREFIX = 'bijie-rain-demo:v0\.4-background:';/);
  assert(changes.length >= 2, '独立存档空间及说明应一并更新');
  assert.equal(hash(fs.readFileSync(path.join(root, 'engine.js'))), hash(fs.readFileSync(path.join(out, 'before/engine.js'))), 'engine.js 不应变化');
  const external = JSON.parse(fs.readFileSync(path.join(out, 'external-cover-frozen.json'), 'utf8'));
  const currentHashes = hashes();
  const oldStyles = fs.readFileSync(path.join(out, 'before/styles.css'), 'utf8');
  const newStyles = fs.readFileSync(path.join(root, 'styles.css'), 'utf8');
  assert(newStyles.startsWith(oldStyles.trimEnd()), '并行封面工作改写了既有阅读样式');
  for (const file of coverFiles) {
    assert.equal(currentHashes[file], external.hashes[file], file + ' 已离开共同冻结指纹');
  }
  return {
    allowedStringChanges: changes, unchanged: ['engine.js'],
    externalConcurrentCover: {
      attribution: '主任务确认由共享工作区另一项封面任务修改；保留并独立记录，不计入女主背景对白改动。',
      baseline: Object.fromEntries(['index.html', 'styles.css'].map(file => [file, hash(fs.readFileSync(path.join(out, 'before', file)))])),
      current: Object.fromEntries(coverFiles.map(file => [file, currentHashes[file]])),
      missingExternalAssets: coverFiles.filter(file => !currentHashes[file]),
      baselineReadingStylesIntact: true,
      appendedStyleLines: newStyles.slice(oldStyles.trimEnd().length).split('\n').filter(Boolean).length,
      stability: { startedAt: external.startedAt, endedAt: external.endedAt, stableMs: external.stableMs }
    }
  };
}

function validateAssetsAndNodes() {
  const manifest = JSON.parse(fs.readFileSync(path.join(root, 'assets/runtime-v0.4-manifest.json'), 'utf8'));
  assert.equal(manifest.nodeCount, Object.keys(story.nodes).length);
  const registered = new Set(manifest.assets.map(asset => asset.path));
  for (const asset of manifest.assets) {
    const buffer = fs.readFileSync(path.join(root, asset.path));
    assert.equal(buffer.length, asset.bytes, asset.path);
    assert.equal(hash(buffer), asset.sha256, asset.path);
  }
  for (const [id, node] of Object.entries(story.nodes)) {
    assert.equal(id, node.id);
    const scene = story.scenes[node.scene];
    assert(scene && story.chapters[scene.chapter], id + ' 场景或章节缺失');
    assert(story.backgrounds[node.bg ?? scene.bg], id + ' 背景缺失');
    if (node.character) assert(story.characters[node.character], id);
    if (node.expression) assert(story.characters[node.character]?.expressions[node.expression], id + ' 差分缺失');
    if (node.avatarExpression) assert(story.characters[node.speaker === 'narrator' ? 'wenwen' : node.speaker]?.expressions[node.avatarExpression], id + ' 头像差分缺失');
    if (node.type === 'line') assert(node.text && node.text.length <= 110, id + ' 单条对白过长');
    for (const next of links(node)) {
      assert(story.nodes[next], `${id} → ${next} 悬链`);
      assert(story.scenes[story.nodes[next].scene].day >= scene.day, `${id} → ${next} 日期倒退`);
    }
  }
  const assets = [
    ...Object.values(story.backgrounds), ...Object.values(story.cgs).map(cg => cg.image),
    ...Object.values(story.characters).flatMap(character => [character.image, ...Object.values(character.expressions || {})])
  ];
  for (const asset of assets) assert(registered.has(asset), asset + ' 缺少资源清单登记');
  return { assets: manifest.assets.length, nodeCount: manifest.nodeCount, maxLineLength: Math.max(...Object.values(story.nodes).filter(n => n.type === 'line').map(n => n.text.length)) };
}

function run() {
  const report = {
    startedAt: new Date().toISOString(), pass: false, initialHashes: hashes(), checks: [],
    scope: '本轮正式剧情与任务开始前基线的结构、选择契约、全合法路径、自然回放及存档；浏览器结果另行记录。'
  };
  let currentGraph, oldGraph;
  function check(name, action) {
    const details = action();
    report.checks.push({ name, pass: true, details });
    console.log('PASS ' + name);
  }
  try {
    check('折叠新增普通对白后，原选择、旗标、条件、结局、CG 和节点连接契约保持一致', contracts);
    check('运行层仅改变独立存档前缀及中文说明；严格引擎不变，并行封面按独立冻结指纹验证', validateRuntimeDelta);
    check('正式资源清单、对白长度、场景日期和节点引用有效', validateAssetsAndNodes);
    check('全图可达无环，全部合法路径数量与结局分布等于基线，隐藏身份没有提前泄露', () => {
      currentGraph = analyze(story); oldGraph = analyze(baseline);
      assert.equal(currentGraph.paths, oldGraph.paths);
      assert.deepEqual(currentGraph.terminalCounts, oldGraph.terminalCounts);
      assert.deepEqual(currentGraph.terminals, oldGraph.terminals);
      const plain = graph => Object.fromEntries(Object.entries(graph).filter(([key]) => key !== 'witnesses'));
      return { baseline: plain(oldGraph), current: plain(currentGraph) };
    });
    check('所有可见节点从入口自然重放并严格恢复，新增对白与改写对白均已覆盖', () => {
      let restored = 0;
      const covered = [], byChapter = {};
      for (const [id, decisions] of currentGraph.witnesses) {
        if (story.nodes[id].type === 'gate') continue;
        const engine = reach(id, decisions), saved = engine.snapshot();
        assert.deepEqual(new StoryEngine(story, saved).snapshot(), saved, id);
        byChapter[story.scenes[story.nodes[id].scene].chapter] = (byChapter[story.scenes[story.nodes[id].scene].chapter] || 0) + 1;
        if (addedIds.includes(id) || changedTextIds.includes(id)) covered.push(id);
        restored++;
      }
      assert.equal(covered.length, addedIds.length + changedTextIds.length);
      fs.writeFileSync(path.join(out, 'node-witnesses.json'), JSON.stringify(Object.fromEntries(currentGraph.witnesses), null, 2) + '\n');
      return { restored, byChapter, changedAndAddedCovered: covered.length };
    });
    check('按基线生成的旧存档兼容性逐节点实测，拒绝恢复时原状态不变', () => {
      let accepted = 0, rejected = 0;
      const rejectedExamples = [];
      const unchanged = new StoryEngine(story), untouched = unchanged.snapshot();
      for (const [id, decisions] of oldGraph.witnesses) {
        if (baseline.nodes[id].type === 'gate') continue;
        const oldSave = reach(id, decisions, baseline, BaselineEngine).snapshot();
        try { new StoryEngine(story, oldSave); accepted++; }
        catch (error) {
          rejected++;
          assert.match(error.message, /^存档不兼容或已损坏：/);
          assert.throws(() => unchanged.restore(oldSave), /存档不兼容或已损坏：/);
          assert.deepEqual(unchanged.snapshot(), untouched);
          if (rejectedExamples.length < 8) rejectedExamples.push({ nodeId: id, reason: error.message });
        }
      }
      assert(rejected > 0, '对白与路径已修改，应明确发现旧档不兼容');
      return { accepted, rejected, rejectedExamples, note: 'accepted 仅指此基线见证路径上的旧档；不能推论任意旧档均兼容。拒绝不是档案损坏证据。' };
    });
    check('七线末端可回溯预告与正式路线，新历史与关系标记可清理', () => {
      const routeIds = baseline.nodes[baseline.routeChoice].choices.map(option => option.value);
      for (const route of routeIds) {
        const end = reach('end_ch3_' + route, { h1: 'record', h2: 'reply', c6: 'xiaoman', ch3_route_choice: route });
        assert(end.replayChoice(story.routeChoice));
        assert.equal(end.current().id, story.routeChoice);
        assert.equal(end.state.flags.route, undefined);
        assert.equal(end.state.flags.piaoRelationship, undefined);
        assert(end.replayPreview());
        assert.equal(end.current().id, story.previewChoice);
        assert.equal(end.state.flags.route, undefined);
        assert.deepEqual(new StoryEngine(story, end.snapshot()).snapshot(), end.snapshot());
      }
      return { routeResets: routeIds.length, previewResets: routeIds.length };
    });
    assert.deepEqual(hashes(), report.initialHashes, '验收期间正式文件有变化');
    report.pass = true;
  } catch (error) {
    report.error = error.stack; process.exitCode = 1; console.error(error);
  } finally {
    report.finishedAt = new Date().toISOString(); report.finalHashes = hashes();
    fs.writeFileSync(path.join(out, 'story-results.json'), JSON.stringify(report, null, 2) + '\n');
    console.log(JSON.stringify({ pass: report.pass, checks: report.checks.length, report: path.join(out, 'story-results.json') }));
  }
}
module.exports = { story, baseline, StoryEngine, BaselineEngine, analyze, reach, addedIds, changedTextIds, root, out, hashes };
if (require.main === module) run();
