'use strict';

// E10 独立回归：仅读正式产物；输出限定本目录。无浏览器或玩家存储访问。
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const crypto = require('node:crypto');
const assert = require('node:assert/strict');
const { isDeepStrictEqual } = require('node:util');
const { Worker, isMainThread, parentPort, workerData } = require('node:worker_threads');
const root = path.resolve(__dirname, '../../..');
const load = file => JSON.parse(fs.readFileSync(path.join(root, file), 'utf8'));
const context = { window: {} };
vm.runInNewContext(fs.readFileSync(path.join(root, 'story.js'), 'utf8'), context);
const story = JSON.parse(JSON.stringify(context.window.RAIN_STORY));
const { StoryEngine } = require(path.join(root, 'engine.js'));
const display = require(path.join(root, 'player-runtime.js'));
const compat = require(path.join(root, 'save-compat.js'));
const contract = load('任务拆分/全十章/contract.json');
const sourceMap = load('任务拆分/全十章/校验/E09/source-map.json').sourceMap;
const clone = value => JSON.parse(JSON.stringify(value));
const hash = value => crypto.createHash('sha256').update(value).digest('hex');
const fingerprints = ['story.js', 'engine.js', 'player-runtime.js', 'save-compat.js', 'game.js', 'qa/ten-chapter/engine/regression.cjs',
  '任务拆分/全十章/contract.json', '任务拆分/全十章/校验/E09/source-map.json'].map(file => {
    const buffer = fs.readFileSync(path.join(root, file));
    return { file, sha256: hash(buffer), bytes: buffer.length };
  });
const write = (file, data) => fs.writeFileSync(path.join(__dirname, file), JSON.stringify(data, null, 2) + '\n');
const matches = (flags, condition) => Object.hasOwn(flags, condition.flag) && flags[condition.flag] === condition.value;
const flagsKeyCache = new WeakMap();
function stateKey(state) {
  let suffix = flagsKeyCache.get(state.flags);
  if (!suffix) {
    suffix = JSON.stringify(Object.fromEntries(Object.entries(state.flags).sort(([a], [b]) => a.localeCompare(b))));
    flagsKeyCache.set(state.flags, suffix);
  }
  return state.nodeId + '|' + suffix;
}

// 遍历只用真正 advance/choose。分叉保存真实引擎产生的不可变 state 引用用于回溯，
// 不伪造 history/flags，不借用构建器的路径计算或旧测试结果。
function traverse(onState, onStep = () => {}, onTerminal = () => {}) {
  const engine = new StoryEngine(story), seen = new Set();
  let ordinal = 0, revisits = 0;
  function walk() {
    for (;;) {
      const state = engine.state, key = stateKey(state), node = engine.current();
      if (seen.has(key)) { revisits++; return; }
      seen.add(key);
      onState(engine, ordinal++, key);
      if (node.type === 'choice') {
        const options = engine.availableChoices();
        assert(options.length, '可见选择没有合法选项：' + node.id);
        for (const row of options) {
          engine.state = state;
          assert.equal(engine.choose(row.index), true);
          onStep(state, row.option.next, engine.state, row.index);
          walk();
        }
        return;
      }
      if (node.type === 'end' && !node.next) { onTerminal(engine); return; }
      assert.equal(engine.advance(), true, '意外停止：' + node.id);
      onStep(state, node.next, engine.state, null);
    }
  }
  walk();
  return { uniqueVisibleStates: ordinal, mergedRevisits: revisits };
}

function restoreWorker() {
  const { index, count, benchmark } = workerData;
  const restorer = new StoryEngine(story), times = [], started = performance.now();
  let restored = 0, historyEntries = 0, longestHistory = 0;
  const digest = crypto.createHash('sha256');
  const summary = traverse((engine, ordinal, key) => {
    if (ordinal % count !== index || (benchmark && restored >= benchmark)) return;
    const saved = engine.snapshot(); // 真实公开序列化方法；每一可见 node＋完整 flags 均覆盖。
    const start = performance.now();
    restorer.restore(saved); // 原样真实 restore，内部从开头重放；没有替换验证器或缓存校验结果。
    times.push(performance.now() - start);
    assert(isDeepStrictEqual(restorer.state, saved), '状态恢复不等价：' + key);
    assert(isDeepStrictEqual(restorer.availableChoices(), engine.availableChoices()), '恢复后选项改变：' + key);
    digest.update(key + '\n');
    restored++; historyEntries += saved.history.length;
    longestHistory = Math.max(longestHistory, saved.history.length);
    if (restored % 2000 === 0) {
      write(`restore-progress-${index}.json`, { index, restored, visited: ordinal + 1, elapsedSeconds: (performance.now() - started) / 1000 });
      parentPort.postMessage({ progress: true, index, restored });
    }
  });
  times.sort((a, b) => a - b);
  return { index, count, ...summary, restored, historyEntries, longestHistory,
    coveredStateDigest: digest.digest('hex'), elapsedSeconds: (performance.now() - started) / 1000,
    restoreMilliseconds: { min: times[0], median: times[Math.floor(times.length / 2)], p95: times[Math.floor(times.length * .95)], max: times.at(-1) } };
}

function structuralAudit() {
  const nodes = Object.values(story.nodes), active = new Set(), done = new Set();
  const edges = node => node.type === 'choice' ? node.choices.map(row => row.next) :
    node.type === 'gate' ? [...node.cases.map(row => row.next), ...(node.default ? [node.default] : [])] : node.next ? [node.next] : [];
  let edgeCount = 0;
  for (const [id, node] of Object.entries(story.nodes)) {
    assert.equal(id, node.id); assert(story.scenes[node.scene]);
    for (const next of edges(node)) { edgeCount++; assert(story.nodes[next], `悬空跳转 ${id} → ${next}`); }
  }
  function dfs(id) {
    assert(!active.has(id), '结构循环：' + id);
    if (done.has(id)) return;
    active.add(id); for (const next of edges(story.nodes[id])) dfs(next); active.delete(id); done.add(id);
  }
  dfs(story.start);
  assert.equal(done.size, nodes.length, '结构存在不可达节点');
  assert.deepEqual([...new Set(Object.values(story.scenes).map(scene => scene.chapter))].sort((a, b) => a - b), [1,2,3,4,5,6,7,8,9,10]);
  return { nodes: nodes.length, visibleNodes: nodes.filter(node => node.type !== 'gate').length,
    gates: nodes.filter(node => node.type === 'gate').length, edges: edgeCount,
    choices: nodes.filter(node => node.type === 'choice').length,
    options: nodes.filter(node => node.type === 'choice').reduce((sum, node) => sum + node.choices.length, 0), cycles: 0, danglingEdges: 0 };
}

function graphAudit() {
  display.validate(story);
  const visible = new Set(), allStates = new Set(), options = new Map(), gateBranches = new Map();
  const nodeForms = new Set(), resourceMap = new Map(), cgNodes = new Map(), callbackCounts = new Map();
  const paths = [], terminals = new Map(), chapterEnds = new Set(), events = new Map(), hidden = new Map();
  const witnesses = new Map(), count = (map, key, detail) => {
    if (!map.has(key)) map.set(key, { count: 0, witness: detail });
    map.get(key).count++;
  };
  const callbackByNode = new Map();
  for (const rule of contract.callbackRules) {
    const entries = sourceMap.filter(row => row.file === rule.source.file && row.startLine <= rule.source.line && row.endLine >= rule.source.line && row.kind !== 'control');
    assert(entries.length, '回收映射缺失：' + rule.flag + '/' + rule.value);
    const ids = [...new Set(entries.flatMap(row => row.nodeIds))];
    for (const id of ids) {
      assert.notEqual(story.nodes[id].type, 'gate');
      assert(!callbackByNode.has(id)); callbackByNode.set(id, rule);
    }
    callbackCounts.set(rule.flag + '=' + rule.value, { count: 0, nodes: ids, source: rule.source });
  }
  let longestState = null, visits = 0, boundCGStates = 0, portraitResolutions = 0, avatarResolutions = 0;
  const witness = state => ({ nodeId: state.nodeId, flags: state.flags, choices: state.choices });
  const useResource = (source, kind, node, state) => {
    assert(fs.existsSync(path.join(root, source)), '资源不存在：' + source);
    let entry = resourceMap.get(source);
    if (!entry) resourceMap.set(source, entry = { source, kinds: new Set(), nodes: new Set(), visits: 0, witness: witness(state) });
    entry.kinds.add(kind); entry.nodes.add(node.id); entry.visits++;
  };
  const summary = traverse((engine, ordinal, key) => {
    visits++; const state = engine.state, node = engine.current(), scene = story.scenes[node.scene];
    visible.add(node.id); allStates.add(key); nodeForms.add(node.id + ':' + state.flags.qiuForm);
    for (const [flag, value] of Object.entries(state.flags)) {
      assert(contract.states[flag], '未声明状态：' + flag); assert(contract.states[flag].values.includes(value), '非法枚举：' + flag);
    }
    const route = /^(?:tc_c\d\d)_([^_]+)_/.exec(node.id)?.[1];
    if (route && route !== 'common') assert.equal(state.flags.route, route, '路线串线：' + node.id);
    const revealSeen = state.history.some(entry => entry.nodeId === 'tc_c08_huangqiuqiu_human_reveal');
    const metSeen = state.history.some(entry => entry.nodeId === 'tc_c02_common_qiu_met');
    assert.equal(state.flags.qiuForm, revealSeen ? 'human' : 'sphere');
    assert.equal(state.flags.qiuMet, metSeen);
    if (node.onEnter) {
      const expected = contract.automaticEvents.find(event => event.nodeId === node.id);
      assert(expected); assert(expected.requires.every(condition => matches(state.flags, condition)));
      assert.equal(scene.day, expected.day); assert.equal(scene.time, expected.time);
      count(events, node.id, witness(state));
    }
    if (node.id === story.routeChoice) {
      const eligible = state.flags.qiuSignal === 'record' && state.flags.qiuReply === 'reply';
      assert.equal(state.flags.qiuMet, eligible);
      assert.equal(engine.availableChoices().some(row => row.option.value === 'huangqiuqiu'), eligible);
      if (!eligible) {
        assert(!state.history.some(row => story.nodes[row.nodeId].speaker === 'huangqiuqiu' || story.nodes[row.nodeId].character === 'huangqiuqiu'));
        const before = engine.state;
        assert.equal(engine.choose(node.choices.findIndex(option => option.value === 'huangqiuqiu')), false);
        assert.strictEqual(engine.state, before);
      }
      count(hidden, state.flags.qiuSignal + '+' + state.flags.qiuReply, { eligible, nodeId: node.id, flags: state.flags });
    }
    if (node.type === 'choice') {
      const expected = node.choices.map((option, index) => ({ option, index })).filter(row => !row.option.requires || row.option.requires.every(condition => matches(state.flags, condition)));
      assert.deepEqual(engine.availableChoices(), expected);
      for (const row of expected) count(options, node.id + ':' + row.index, witness(state));
    }
    if (node.type === 'end' && node.next) {
      assert.equal(scene.chronology.domain, 'chapter-range'); assert.equal(scene.day, null);
      assert.equal(scene.location, ''); chapterEnds.add(node.id);
    }
    const callback = callbackByNode.get(node.id);
    if (callback) { assert.equal(state.flags[callback.flag], callback.value, '错误回收：' + node.id); callbackCounts.get(callback.flag + '=' + callback.value).count++; }
    if (!witnesses.has(node.id)) witnesses.set(node.id, witness(state));
    if (node.character != null) {
      const resolved = display.resolvePortrait(story, node.character, node, state.flags, false);
      useResource(resolved.source, 'portrait', node, state); portraitResolutions++;
      if (node.character === 'huangqiuqiu') assert.equal(resolved.form, state.flags.qiuForm);
    }
    // 与真实 game.js 相同：章末／结局不显示对白头像；旁白／选择使用文文基础头像。
    if (node.type !== 'end') {
      const speaker = node.type === 'choice' || node.speaker === 'narrator' ? 'wenwen' : node.speaker;
      if (speaker != null) {
        const selectedNode = node.speaker === speaker ? node : null;
        const resolved = display.resolvePortrait(story, speaker, selectedNode, state.flags, true);
        useResource(resolved.source, 'avatar', node, state); avatarResolutions++;
        if (speaker === 'huangqiuqiu') assert.equal(resolved.form, state.flags.qiuForm);
      }
    }
    const backgroundKey = node.bg ?? scene.bg;
    const background = story.backgrounds[backgroundKey];
    if (background !== 'none') {
      assert.equal(typeof background, 'string', '正式背景未注册：' + node.id);
      useResource(background, 'background', node, state);
    }
    if (node.cg) {
      assert.equal(display.canShowCG(story, node, state), true, '合法正文 CG 被拒绝：' + node.id);
      useResource(story.cgs[node.cg].image, 'cg', node, state); boundCGStates++;
      count(cgNodes, node.id, { cg: node.cg, ...witness(state) });
    } else assert.equal(display.canShowCG(story, node, state), false);
  }, (before, target, after, optionIndex) => {
    const source = story.nodes[before.nodeId];
    const flags = optionIndex == null ? before.flags : { ...before.flags, [source.flag]: source.choices[optionIndex].value };
    const local = new Set(); let id = target;
    while (story.nodes[id].type === 'gate') {
      assert(!local.has(id), '运行门禁循环：' + id); local.add(id);
      allStates.add(stateKey({ nodeId: id, flags }));
      const gate = story.nodes[id], index = gate.cases.findIndex(condition => matches(flags, condition));
      if (gate.exhaustive) assert(index >= 0);
      const branch = index < 0 ? 'default' : String(index);
      count(gateBranches, id + ':' + branch, { from: before.nodeId, flags, choices: before.choices });
      id = index < 0 ? gate.default : gate.cases[index].next;
      assert(id && story.nodes[id], '门禁无出口');
    }
    assert.equal(after.nodeId, id, '实际引擎与独立门禁解析不一致');
    const event = story.nodes[id].onEnter;
    assert.deepEqual(after.flags, event ? { ...flags, ...event.setFlags } : flags);
  }, engine => {
    const state = engine.state, ending = contract.endings.find(row => row.id === state.nodeId);
    assert(ending); assert(ending.requires.every(condition => matches(state.flags, condition)));
    if (ending.requiredForm) assert.equal(state.flags.qiuForm, ending.requiredForm);
    const epilogues = state.history.filter(entry => contract.epilogues.some(row => row.id === entry.nodeId));
    assert.equal(epilogues.length, 1, '每条路径必须恰有一段公共后日谈');
    const expectedEpilogue = state.flags.route === 'piao' && state.flags.piaoRelationship === 'dating' ? contract.epilogues[0].id : contract.epilogues[1].id;
    assert.equal(epilogues[0].nodeId, expectedEpilogue);
    const seen = new Set(state.history.map(row => row.nodeId));
    for (const [key, row] of callbackCounts) {
      const [flag, value] = key.split('=');
      if (flag === 'reunion' && state.flags.route !== 'mengyao' || flag === 'yelanFirst' && state.flags.route !== 'yelan') continue;
      assert.equal(row.nodes.some(id => seen.has(id)), state.flags[flag] === value, '跨章回收遗漏或误入：' + key);
    }
    if (state.flags.route === 'piao') assert.equal(state.choices.filter(row => row.nodeId.includes('relationship_choice')).length, 1);
    if (state.flags.route === 'friends') assert(!Object.keys(state.flags).some(flag => flag.endsWith('Relationship')));
    const chapterSet = new Set(state.history.map(row => story.scenes[story.nodes[row.nodeId].scene].chapter));
    assert.equal(chapterSet.size, 10);
    let priorDay = 0;
    for (const row of state.history) {
      const scene = story.scenes[story.nodes[row.nodeId].scene];
      if (scene.chronology.domain === 'story-day' && scene.chronology.mode === 'present') {
        assert(scene.day >= priorDay, '正叙日序倒退：' + row.nodeId); priorDay = scene.day;
      }
    }
    count(terminals, state.nodeId, witness(state));
    paths.push({ ending: state.nodeId, flags: state.flags, choices: state.choices, historyLength: state.history.length, epilogue: expectedEpilogue });
    if (!longestState || state.history.length > longestState.history.length) longestState = engine.snapshot();
  });
  assert.equal(visible.size, Object.values(story.nodes).filter(node => node.type !== 'gate').length);
  assert.equal(options.size, contract.choices.reduce((sum, row) => sum + row.options.length, 0));
  assert.equal(terminals.size, contract.endings.length); assert.equal(hidden.size, 4); assert.equal(events.size, 2);
  assert.equal(chapterEnds.size, 9);
  for (const [key, row] of callbackCounts) assert(row.count > 0, '回收未执行：' + key);
  const expectedBranches = Object.values(story.nodes).filter(node => node.type === 'gate').flatMap(node => node.cases.map((_, i) => node.id + ':' + i).concat(node.default ? [node.id + ':default'] : []));
  const unreachableBranches = expectedBranches.filter(key => !gateBranches.has(key));
  assert.deepEqual(unreachableBranches, [], '门禁分支无可达见证');
  const expectedCGNodes = Object.values(story.cgs).flatMap(cg => cg.allowedNodeIds);
  assert.deepEqual([...cgNodes.keys()].sort(), expectedCGNodes.sort());
  const resources = [...resourceMap.values()].map(row => ({ ...row, kinds: [...row.kinds], nodes: [...row.nodes] }));
  write('longest-state.json', longestState);
  write('paths.json', paths); write('node-witnesses.json', Object.fromEntries(witnesses));
  write('resources.json', resources);
  write('branch-witnesses.json', { options: Object.fromEntries(options), gates: Object.fromEntries(gateBranches), hidden: Object.fromEntries(hidden), events: Object.fromEntries(events), callbacks: Object.fromEntries(callbackCounts), cgs: Object.fromEntries(cgNodes) });
  return { ...summary, totalNodeFlagStates: allStates.size, visibleNodes: visible.size, nodeFormCombinations: nodeForms.size,
    paths: paths.length, endings: Object.fromEntries(terminals), options: options.size, gateBranches: gateBranches.size,
    unreachableBranches, chapterEnds: chapterEnds.size, callbacks: Object.fromEntries(callbackCounts), hiddenCombinations: Object.fromEntries(hidden),
    resources: { uniqueFiles: resources.length, portraitResolutions, avatarResolutions, boundCGStates, cgNodes: cgNodes.size,
      byKind: Object.fromEntries(['background','portrait','avatar','cg'].map(kind => [kind, resources.filter(row => row.kinds.includes(kind)).length])) },
    longestHistory: longestState.history.length, longestSaveBytes: Buffer.byteLength(JSON.stringify(longestState)), longestEnding: longestState.nodeId };
}

function reach(id, selections = {}) {
  const engine = new StoryEngine(story), seen = new Set();
  while (engine.current().id !== id) {
    const node = engine.current(); assert(!seen.has(node.id)); seen.add(node.id);
    if (node.type === 'choice') {
      const rows = engine.availableChoices(), selected = rows.find(row => row.option.value === selections[node.flag]) || rows[0];
      assert(engine.choose(selected.index));
    } else assert(engine.advance(), '目标不在路径上：' + id);
  }
  return engine;
}

function focusedAudit() {
  const checks = [], test = (name, fn) => { const detail = fn(); checks.push({ name, status: 'passed', detail }); };
  const qiu = { qiuSignal: 'record', qiuReply: 'reply', route: 'huangqiuqiu' };
  test('四种隐藏条件；第八天回应始终可选', () => {
    for (const qiuSignal of ['record', 'ignore']) for (const qiuReply of ['reply', 'leave']) {
      const engine = reach('tc_c02_common_rhythm_reply_choice', { qiuSignal, qiuReply });
      assert.equal(engine.availableChoices().length, 2);
    }
    return { combinations: 4 };
  });
  test('两处自动事件精确时刻、重入幂等与非法进入原子拒绝', () => {
    const rows = [];
    for (const event of contract.automaticEvents) {
      const predecessor = Object.values(story.nodes).find(node => node.type === 'line' && node.next === event.nodeId);
      assert(predecessor);
      const engine = reach(predecessor.id, qiu), before = engine.snapshot();
      for (const [key, value] of Object.entries(event.setFlags)) assert.notEqual(before.flags[key], value);
      engine.advance(); assert.equal(engine.current().id, event.nodeId);
      const after = engine.snapshot(); engine.enter(event.nodeId); assert.deepEqual(engine.snapshot(), after);
      assert.equal(after.choices.length, before.choices.length);
      const illegal = new StoryEngine(story), clean = illegal.snapshot();
      assert.throws(() => illegal.enter(event.nodeId)); assert.deepEqual(illegal.snapshot(), clean);
      rows.push({ before: predecessor.id, event: event.nodeId, beforeFlags: before.flags, afterFlags: after.flags });
    }
    return rows;
  });
  test('13种结局逐个回到每个已选选择，正确前情保留／后续状态清除', () => {
    const paths = load('qa/ten-chapter/engine/paths.json'), endings = new Map(); let resets = 0;
    for (const row of paths) if (!endings.has(row.ending)) endings.set(row.ending, row);
    for (const row of endings.values()) {
      const engine = reach(row.ending, row.flags), end = engine.snapshot();
      for (const choice of end.choices) {
        const reset = new StoryEngine(story, end), expected = reach(choice.nodeId, row.flags);
        assert.equal(reset.replayChoice(choice.nodeId), true);
        assert.deepEqual(reset.snapshot(), expected.snapshot()); resets++;
        if (choice.nodeId === story.routeChoice) {
          assert.equal(reset.state.flags.qiuForm, 'sphere'); assert.equal(Object.hasOwn(reset.state.flags, 'route'), false);
          assert(!Object.keys(reset.state.flags).some(key => key.endsWith('Outing') || key.endsWith('Relationship')));
        }
        if (choice.nodeId === 'tc_c09_huangqiuqiu_relationship_choice') assert.equal(reset.state.flags.qiuForm, 'human');
      }
    }
    return { endings: endings.size, resets };
  });
  test('异常快照、隐藏资格与历史篡改拒绝，当前状态与输入均保留', () => {
    const reference = reach('tc_c10_huangqiuqiu_end_dating', qiu).snapshot();
    const mutations = [
      ['state-version', s => s.version = 999], ['missing-node', s => s.nodeId = 'not-a-node'],
      ['flags-injection', s => s.flags.illegal = true], ['forged-form', s => s.flags.qiuForm = 'sphere'],
      ['forged-met', s => s.flags.qiuMet = false], ['history-text', s => s.history[0].text += '篡改'],
      ['history-drop', s => s.history.splice(0, 1)], ['choice-drop', s => s.choices.splice(0, 1)],
      ['choice-label', s => s.choices[0].label += '篡改'], ['extra-field', s => s.unsafe = true],
      ['history-object', s => s.history = {}], ['flags-nested', s => s.flags.route = {}],
      ['checkpoint-forgery', s => s.previewCheckpoint = { ...clone(s), previewCheckpoint: null }],
      ['event-history-drop', s => s.history = s.history.filter(row => row.nodeId !== 'tc_c08_huangqiuqiu_human_reveal')]
    ];
    const rejected = [];
    for (const [name, mutate] of mutations) {
      const saved = clone(reference); mutate(saved); const input = clone(saved);
      const engine = new StoryEngine(story), before = engine.snapshot();
      assert.throws(() => engine.restore(saved)); assert.deepEqual(engine.snapshot(), before); assert.deepEqual(saved, input); rejected.push(name);
    }
    return { rejected };
  });
  test('十章版本空间隔离、元数据逐项拒绝与原始输入不变', () => {
    const profile = compat.getProfile(story), state = new StoryEngine(story).snapshot();
    assert.equal(profile.namespace, 'bijie-rain-demo:ten-chapter:nightshift-20261022-r1:');
    const restored = compat.restore(story, state, profile.metadata.contentVersion, profile.metadata);
    assert.equal(restored.migrated, false); assert.deepEqual(restored.restored.snapshot(), state);
    let rejected = 0;
    for (const key of Object.keys(profile.metadata)) for (const value of [undefined, null, 'wrong', 999]) {
      const metadata = { ...profile.metadata }; if (value === undefined) delete metadata[key]; else metadata[key] = value;
      const before = clone(state); assert.throws(() => compat.restore(story, state, metadata.contentVersion, metadata)); assert.deepEqual(state, before); rejected++;
    }
    return { namespace: profile.namespace, rejected, storageAccess: 'none; no localStorage supplied or touched' };
  });
  test('CG节点白名单、提前人形、缺变身历史、飘交往婚宴均拒绝', () => {
    let rejected = 0;
    for (const [id, cg] of Object.entries(story.cgs)) {
      const node = story.nodes[cg.allowedNodeIds[0]], selections = id.includes('qiuqiu') ? qiu : id.includes('piao-choice') ? { route: 'piao' } : {};
      const engine = reach(node.id, selections);
      assert(display.canShowCG(story, node, engine.state));
      assert.equal(display.canShowCG(story, { ...node, id: story.start }, engine.state), false); rejected++;
      if (id.includes('qiuqiu')) {
        assert.equal(display.canShowCG(story, node, { ...engine.state, flags: { ...engine.state.flags, qiuForm: 'sphere' } }), false); rejected++;
        assert.equal(display.canShowCG(story, node, { ...engine.state, history: engine.state.history.filter(row => row.nodeId !== 'tc_c08_huangqiuqiu_human_reveal') }), false); rejected++;
      }
      if (id.includes('wedding')) { assert.equal(display.canShowCG(story, node, { ...engine.state, flags: { ...engine.state.flags, route: 'piao', piaoRelationship: 'dating' } }), false); rejected++; }
    }
    return { rejected };
  });
  return checks;
}

async function main() {
  const started = performance.now();
  const results = { runAt: new Date().toISOString(), scope: 'E09 formal root story; independent graph, real engine every-visible-state restoration and display resolver', fingerprints,
    algorithm: { key: 'nodeId plus every flag, sorted by name; no reduced relevant-flag projection',
      traversal: 'one real-engine depth-first traversal, branch references only from genuine engine results; memoized states; independent first-match gate oracle',
      restoration: 'every unique visible state calls unmodified snapshot() then restore(); restore internally fully replays; parallel workers use ordinal modulo partition',
      complexity: 'graph O(S+E); restoration necessarily sum of full history replay/validation costs, not asserted O(S); avoids replaying whole game once per full-path prefix',
      excluded: 'browser storage failure handling is separate browser suite; real devices, hearing and human reading are not proved here' } };
  try {
    results.structure = structuralAudit();
    results.graph = graphAudit(); write('graph-results.json', results);
    console.log(`Graph completed: ${results.graph.uniqueVisibleStates} visible states; ${results.graph.paths} paths; longest ${results.graph.longestHistory}`);
    results.focused = focusedAudit(); write('graph-results.json', results);
    const workers = Number(process.env.E10_RESTORE_WORKERS || 4);
    results.restoration = await Promise.all(Array.from({ length: workers }, (_, index) => new Promise((resolve, reject) => {
      const worker = new Worker(__filename, { workerData: { index, count: workers } });
      worker.on('message', message => { if (message.progress) console.log(`Restore worker ${index}: ${message.restored}`); else resolve(message); });
      worker.on('error', reject); worker.on('exit', code => { if (code) reject(new Error('Restore worker exit ' + code)); });
    })));
    results.restoredStates = results.restoration.reduce((sum, row) => sum + row.restored, 0);
    assert.equal(results.restoredStates, results.graph.uniqueVisibleStates);
    for (const row of results.restoration) assert.equal(row.uniqueVisibleStates, results.graph.uniqueVisibleStates);
    for (const row of fingerprints) assert.equal(hash(fs.readFileSync(path.join(root, row.file))), row.sha256, '检查期间文件改变：' + row.file);
    results.status = 'passed';
  } catch (error) { results.status = 'failed'; results.error = error.stack; process.exitCode = 1; }
  results.elapsedSeconds = (performance.now() - started) / 1000;
  write('results.json', results);
  const g = results.graph;
  fs.writeFileSync(path.join(__dirname, 'report.md'), `# E10 正式图、引擎与全可见状态恢复\n\n执行：${results.runAt}。结果：**${results.status}**。正式剧情 SHA-256：\`${fingerprints[0].sha256}\`。\n\n` +
    (g ? `- 实际独立遍历 ${g.totalNodeFlagStates} 个完整节点状态，其中 ${g.uniqueVisibleStates} 个可见状态；${g.visibleNodes} 个可见节点、${g.options} 个选项、${g.gateBranches} 个门禁分支均有见证。\n- 实际终点路径 ${g.paths} 条、${Object.keys(g.endings).length} 种结局；每条恰有一个适用公共后日谈，20 条跨章回收规则逐路径核对。\n- 实际 restore 验证 ${results.restoredStates ?? '未完成'} 个可见状态，比较全部 flags/history/choices/检查点及可选选项；最长历史 ${g.longestHistory} 条、快照 ${g.longestSaveBytes} 字节。\n- 真实显示解析 ${g.nodeFormCombinations} 个节点/形态组合，${g.resources.uniqueFiles} 个剧情资源文件、${g.resources.cgNodes} 个 CG 合法节点；主图及头像单独解析。见 [resources.json](resources.json)。\n` : '') +
    `\n## 算法与证据\n\n以节点 ID 和完整 flags 排序序列化作为合并键，真实 advance/choose 深度优先遍历；分叉回溯只复用真实引擎已产生的状态引用。门禁另写严格相等的独立解析器，与实际引擎出口比较。没有使用构建器报告的路径总数或旧测试结果作为本次证据。\n\n每个唯一可见状态均调用原样引擎 snapshot 和 restore，由 ${results.restoration?.length ?? 4} 个工作线程按遍历序号取模分区。没有跳过恢复内部校验、替换构造器或只检测终点。遍历为 O(S+E)，真实恢复内部需要全历史重放，因此总恢复成本仍是各状态历史成本之和；状态合并消除了对 736 条路径的共享前缀反复恢复。\n\n[完整结果](results.json)、[逐路径结局](paths.json)、[节点见证](node-witnesses.json)、[门禁/选项/回收/CG见证](branch-witnesses.json)、[最长真实快照](longest-state.json)。\n\n复跑：\`node qa/ten-chapter/engine/regression.cjs\`。可用 E10_RESTORE_WORKERS 调整并行数。\n\n## 边界\n\n全部运行发生在 Node 内存，未连接玩家浏览器或访问玩家存储。异常快照及版本拒绝在本报告内；真实 game.js 存储失败保护、浏览器视觉和长历史界面性能见浏览器分册。资源解析可证明正式状态实际请求的资源，不替代逐段构图审美、音频听感、真人完整阅读或实体设备验收。\n` + (results.error ? `\n失败：\n\n\`\`\`\n${results.error}\n\`\`\`\n` : ''));
  console.log(JSON.stringify({ status: results.status, elapsedSeconds: results.elapsedSeconds, restoredStates: results.restoredStates, error: results.error }));
}

if (isMainThread) main();
else { try { parentPort.postMessage(restoreWorker()); } catch (error) { throw error; } }
