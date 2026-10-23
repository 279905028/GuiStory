'use strict';

// 仅使用独立的微型十章协议图；不读取、构建或覆盖正式 story.js，也不访问存储。
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const root = path.resolve(__dirname, '../../../..');
const core = require(path.join(root, 'engine.js'));
const contract = require('../../contract.json');
const { StoryEngine, assertStoryCapabilities, capabilities } = core;
const copy = value => JSON.parse(JSON.stringify(value));
const met = 'tc_c02_common_qiu_met';
const human = 'tc_c08_huangqiuqiu_human_reveal';
const route = 'tc_c03_common_route_choice';
const relationship = 'tc_c09_huangqiuqiu_relationship_choice';
const tests = [];
const test = (name, run) => tests.push({ name, run });
const line = (id, next) => ({ id, type: 'line', scene: 'test', speaker: 'narrator', text: id, next });
const choice = (id, flag, values, next) => ({ id, type: 'choice', scene: 'test', text: '', flag,
  choices: values.map(value => ({ label: value, value, next })) });
function fixture() {
  const nodes = {
    start: line('start', 'signal'), signal: choice('signal', 'qiuSignal', ['record', 'ignore'], 'reply'),
    reply: choice('reply', 'qiuReply', ['reply', 'leave'], 'signal_gate'),
    signal_gate: { id: 'signal_gate', type: 'gate', scene: 'test', cases: [{ flag: 'qiuSignal', value: 'record', next: 'reply_gate' }], default: route },
    reply_gate: { id: 'reply_gate', type: 'gate', scene: 'test', cases: [{ flag: 'qiuReply', value: 'reply', next: met }], default: route },
    [met]: line(met, route), [route]: choice(route, 'route', ['friends', 'huangqiuqiu'], 'route_gate'),
    route_gate: { id: 'route_gate', type: 'gate', scene: 'test', exhaustive: true, default: null,
      cases: [{ flag: 'route', value: 'friends', next: 'friends_end' }, { flag: 'route', value: 'huangqiuqiu', next: 'outing' }] },
    outing: choice('outing', 'huangqiuqiuOuting', ['portrait', 'story'], 'day42'),
    day42: line('day42', 'day55_before'), day55_before: line('day55_before', 'day55_transition'),
    day55_transition: line('day55_transition', human), [human]: line(human, relationship),
    [relationship]: choice(relationship, 'huangqiuqiuRelationship', ['dating', 'friends'], 'ending_gate'),
    ending_gate: { id: 'ending_gate', type: 'gate', scene: 'test', exhaustive: true, default: null,
      cases: [{ flag: 'huangqiuqiuRelationship', value: 'dating', next: 'dating_end' },
        { flag: 'huangqiuqiuRelationship', value: 'friends', next: 'qiu_friends_end' }] }
  };
  nodes[route].choices[1].requires = [{ flag: 'qiuMet', value: true }];
  for (const event of contract.automaticEvents) nodes[event.nodeId].onEnter = copy({ requires: event.requires, setFlags: event.setFlags });
  for (const id of ['friends_end', 'dating_end', 'qiu_friends_end']) nodes[id] = { id, type: 'end', scene: 'test', title: id, text: id };
  return { version: 1, release: 'ten-chapter-test', contractVersion: contract.contractVersion,
    contentRevision: contract.contentRevision, requiredCapabilities: copy(contract.interface.requiredCapabilities),
    initialFlags: copy(contract.interface.initialFlags), start: 'start', previewChoice: null, routeChoice: route, nodes };
}
function reach(target, selections = {}, story = fixture()) {
  const engine = new StoryEngine(story);
  for (let step = 0; step < 60; step++) {
    const node = engine.current();
    if (node.id === target) return engine;
    if (node.type === 'choice') assert.equal(engine.choose(selections[node.id] ?? (node.id === route ? 1 : 0)), true);
    else assert.equal(engine.advance(), true, '无法到达 ' + target);
  }
  assert.fail('超过微型图最大步数');
}
function unchanged(engine, action, pattern) {
  const before = engine.snapshot(), state = engine.state;
  const refs = { flags: state.flags, history: state.history, choices: state.choices, checkpoint: state.previewCheckpoint };
  if (pattern) assert.throws(action, pattern);
  else assert.equal(action(), false);
  assert.deepEqual(engine.snapshot(), before);
  assert.equal(engine.state, state);
  assert.equal(engine.state.flags, refs.flags);
  assert.equal(engine.state.history, refs.history);
  assert.equal(engine.state.choices, refs.choices);
  assert.equal(engine.state.previewCheckpoint, refs.checkpoint);
}

test('能力导出逐项匹配冻结契约，并保留浏览器导出', () => {
  assert.deepEqual(capabilities, contract.interface.requiredCapabilities);
  assert.equal(Object.isFrozen(capabilities), true);
  const context = vm.createContext({ window: {} });
  vm.runInContext(fs.readFileSync(path.join(root, 'engine.js'), 'utf8'), context);
  assert.equal(typeof context.window.RainCore.StoryEngine, 'function');
  assert.equal(context.window.RainCore.assertStoryCapabilities(fixture()), true);
});
test('新开局只写两个初始标记并隔离对象引用', () => {
  const story = fixture(), a = new StoryEngine(story), b = new StoryEngine(story);
  assert.deepEqual(a.state.flags, { qiuMet: false, qiuForm: 'sphere' });
  assert.notEqual(a.state.flags, story.initialFlags);
  assert.notEqual(a.state.flags, b.state.flags);
  assert.equal(a.state.version, 1);
  assert.deepEqual(Object.keys(a.state), ['version', 'nodeId', 'flags', 'history', 'choices', 'previewCheckpoint']);
});
const invalidStories = [
  ['缺契约版本', s => delete s.contractVersion], ['旧契约版本', s => { s.contractVersion = '0.9.0'; }],
  ['缺正文修订', s => delete s.contentRevision], ['不匹配正文修订', s => { s.contentRevision = 'nightshift-other'; }],
  ['旧状态格式', s => { s.version = 2; }], ['缺能力', s => delete s.requiredCapabilities],
  ['未知能力', s => s.requiredCapabilities.push('unknown-v1')], ['重复能力', s => { s.requiredCapabilities[0] = s.requiredCapabilities[1]; }],
  ['少一项能力', s => s.requiredCapabilities.pop()], ['缺初始状态', s => delete s.initialFlags],
  ['预置相识', s => { s.initialFlags.qiuMet = true; }], ['预置人形', s => { s.initialFlags.qiuForm = 'human'; }],
  ['预置路线', s => { s.initialFlags.route = 'huangqiuqiu'; }], ['错误初始类型', s => { s.initialFlags.qiuMet = 'false'; }],
  ['初始值继承属性', s => { s.initialFlags = Object.create({ qiuMet: false, qiuForm: 'sphere' }); }],
  ['剥离元信息但保留新节点事件', s => { delete s.contractVersion; delete s.contentRevision; delete s.requiredCapabilities; delete s.initialFlags; delete s.release; }],
  ['事件写入其他节点', s => { s.nodes.start.onEnter = copy(s.nodes[met].onEnter); }],
  ['事件写入choice', s => { s.nodes.signal.onEnter = copy(s.nodes[met].onEnter); }],
  ['事件写入gate', s => { s.nodes.signal_gate.onEnter = copy(s.nodes[met].onEnter); }],
  ['相识锚点缺事件', s => delete s.nodes[met].onEnter], ['变身锚点缺事件', s => delete s.nodes[human].onEnter],
  ['事件额外字段', s => { s.nodes[met].onEnter.random = true; }],
  ['行顶层requires', s => { s.nodes[met].requires = s.nodes[met].onEnter.requires; }],
  ['选择伪装相识', s => { s.nodes.signal.flag = 'qiuMet'; }], ['选择伪装变身', s => { s.nodes.signal.flag = 'qiuForm'; }]
];
for (const [name, mutate] of invalidStories) test('启动拒绝：' + name, () => {
  const story = fixture(); mutate(story); assert.throws(() => assertStoryCapabilities(story), /剧情|玩家选择|自动事件/);
  assert.throws(() => new StoryEngine(story), /剧情|玩家选择|自动事件/);
});
test('局部样例可不包含尚未到达的锚点', () => {
  const story = fixture(); delete story.nodes[met]; delete story.nodes[human];
  assert.equal(assertStoryCapabilities(story), true);
});
for (const signal of [0, 1]) for (const reply of [0, 1]) test(`隐藏资格四组合 ${signal}/${reply}`, () => {
  const engine = reach(route, { signal, reply }), unlocked = signal === 0 && reply === 0;
  assert.equal(engine.state.flags.qiuMet, unlocked);
  assert.equal(engine.state.history.some(entry => entry.nodeId === met), unlocked);
  assert.deepEqual(engine.availableChoices().map(item => item.index), unlocked ? [0, 1] : [0]);
  assert.equal(engine.state.flags.qiuForm, 'sphere');
  assert.equal(engine.state.choices.length, 2);
  if (!unlocked) unchanged(engine, () => engine.choose(1));
});
for (const id of ['day42', 'day55_before', 'day55_transition', human, relationship]) test('精确形态锚点：' + id, () => {
  const engine = reach(id);
  assert.equal(engine.state.flags.qiuForm, [human, relationship].includes(id) ? 'human' : 'sphere');
  assert.equal(engine.state.choices.length, 4);
});
for (const id of [met, human]) test('自动事件幂等、不增加玩家选择或重复行：' + id, () => {
  const engine = reach(id), before = engine.snapshot();
  engine.enter(id); engine.enter(id);
  assert.deepEqual(engine.snapshot(), before);
});
const eventMutations = [
  ['缺requires', e => delete e.requires], ['缺setFlags', e => delete e.setFlags],
  ['空前置条件', e => { e.requires = []; }], ['条件少一项', e => e.requires.pop()],
  ['条件篡改', e => { e.requires[0].value = 'ignore'; }], ['继承条件', e => { e.requires[0] = Object.create(e.requires[0]); }],
  ['非数组条件', e => { e.requires = {}; }], ['赋值数组', e => { e.setFlags = []; }],
  ['错误赋值类型', e => { e.setFlags.qiuMet = 'true'; }], ['额外关系赋值', e => { e.setFlags.piaoRelationship = 'dating'; }],
  ['额外未知赋值', e => { e.setFlags.unknown = true; }], ['回退球形', e => { e.setFlags.qiuForm = 'sphere'; }],
  ['原型键赋值', e => { Object.defineProperty(e.setFlags, '__proto__', { value: 'bad', enumerable: true }); }]
];
for (const [name, mutate] of eventMutations) test('事件整批拒绝且状态引用不变：' + name, () => {
  const engine = reach('reply'); mutate(engine.story.nodes[met].onEnter);
  unchanged(engine, () => engine.choose(0), /自动事件/);
});
for (const [flag, value] of [['qiuSignal', 'ignore'], ['qiuReply', 'leave'], ['route', 'friends'], ['qiuMet', false], ['qiuMet', 'true']]) {
  test('变身前置复核拒绝：' + flag + '=' + value, () => {
    const engine = reach('day55_transition'); engine.state.flags[flag] = value;
    unchanged(engine, () => engine.advance(), /前置条件/);
  });
}
test('缺自有前置值不能通过事件', () => {
  const engine = reach('day55_transition'); delete engine.state.flags.qiuMet;
  unchanged(engine, () => engine.advance(), /前置条件/);
});
test('choose后经gate再执行事件使用候选flags且一次提交', () => {
  const engine = reach('reply'); assert.equal(engine.choose(0), true);
  assert.equal(engine.current().id, met); assert.equal(engine.state.flags.qiuReply, 'reply');
  assert.equal(engine.state.flags.qiuMet, true); assert.equal(engine.state.choices.length, 2);
});
test('choose后缺失事件前置不得保留该次选择', () => {
  const engine = reach('reply', { signal: 1 }); engine.current().choices[0].next = met;
  unchanged(engine, () => engine.choose(0), /前置条件/);
});
test('运行中choice被篡改写形态时拒绝且不变', () => {
  const engine = reach('outing'); engine.current().flag = 'qiuForm';
  unchanged(engine, () => engine.choose(0), /玩家选择/);
});
for (const value of [undefined, null, 'invalid', true]) test('穷尽gate拒绝非法路线：' + value, () => {
  const engine = reach(route);
  if (value === undefined) delete engine.state.flags.route; else engine.state.flags.route = value;
  unchanged(engine, () => engine.enter('route_gate'), /穷尽门禁/);
});
for (const value of ['friends_end', undefined, false]) test('穷尽gate拒绝非null默认：' + value, () => {
  const engine = reach(route); engine.story.nodes.route_gate.default = value;
  unchanged(engine, () => engine.choose(0), /穷尽门禁/);
});
test('选择非法枚举后穷尽gate不提交候选flag和历史', () => {
  const engine = reach(route); engine.current().choices[0].value = 'illegal';
  unchanged(engine, () => engine.choose(0), /穷尽门禁/);
});
test('gate后目标断链不提交选择', () => {
  const engine = reach(route); engine.story.nodes.route_gate.cases[0].next = 'missing';
  unchanged(engine, () => engine.choose(0), /节点不存在/);
});
test('gate循环不提交选择', () => {
  const engine = reach(route); engine.story.nodes.route_gate.cases[0].next = 'route_gate';
  unchanged(engine, () => engine.choose(0), /循环/);
});
for (const target of ['start', 'signal', 'reply', met, route, 'outing', 'day42', 'day55_before', 'day55_transition', human, relationship, 'dating_end', 'qiu_friends_end', 'friends_end']) {
  test('确定性恢复前缀：' + target, () => {
    const source = reach(target, { [relationship]: target === 'qiu_friends_end' ? 1 : 0, [route]: target === 'friends_end' ? 0 : 1 });
    const saved = source.snapshot(), restored = new StoryEngine(source.story, saved);
    assert.deepEqual(restored.snapshot(), saved);
    restored.restore(saved); assert.deepEqual(restored.snapshot(), saved);
    assert.notEqual(restored.state.flags, saved.flags); assert.notEqual(restored.state.history, saved.history);
  });
}
for (const [name, mutate] of [
  ['伪造变身', s => { s.flags.qiuForm = 'human'; }], ['伪造相识', s => { s.flags.qiuMet = false; }],
  ['注入关系', s => { s.flags.huangqiuqiuRelationship = 'dating'; }], ['篡改路线', s => { s.flags.route = 'friends'; }],
  ['漏初始标记', s => delete s.flags.qiuForm], ['漏历史', s => s.history.pop()], ['漏选择', s => s.choices.pop()],
  ['注入checkpoint', s => { s.previewCheckpoint = copy(s); }], ['越过变身节点', s => { s.nodeId = relationship; }]
]) test('恢复拒绝伪造且保留当前状态：' + name, () => {
  const source = reach('day55_transition'), saved = source.snapshot(), engine = reach(route);
  mutate(saved); unchanged(engine, () => engine.restore(saved), /存档不兼容或已损坏/);
});
test('恢复早期快照不串后续人形与关系', () => {
  const early = reach('day55_before').snapshot(), engine = reach('dating_end');
  engine.restore(early); assert.deepEqual(engine.snapshot(), early);
  assert.equal(engine.state.flags.qiuForm, 'sphere'); assert.equal(Object.hasOwn(engine.state.flags, 'huangqiuqiuRelationship'), false);
});
for (const target of [route, 'outing', relationship]) test('重选只保留正确前缀：' + target, () => {
  const engine = reach('dating_end'), expected = reach(target).snapshot();
  assert.equal(engine.replayChoice(target), true); assert.deepEqual(engine.snapshot(), expected);
  assert.equal(engine.state.flags.qiuMet, true);
  assert.equal(engine.state.flags.qiuForm, target === relationship ? 'human' : 'sphere');
  assert.equal(Object.hasOwn(engine.state.flags, 'huangqiuqiuRelationship'), false);
  if (target === route) assert.equal(Object.hasOwn(engine.state.flags, 'huangqiuqiuOuting'), false);
});
test('重选第三章转朋友线不会保留人形', () => {
  const engine = reach('dating_end'); assert.equal(engine.replayChoice(route), true); assert.equal(engine.choose(0), true);
  assert.equal(engine.current().id, 'friends_end'); assert.equal(engine.state.flags.qiuMet, true); assert.equal(engine.state.flags.qiuForm, 'sphere');
  assert.equal(engine.state.history.some(entry => entry.nodeId === human), false);
  assert.deepEqual(new StoryEngine(engine.story, engine.snapshot()).snapshot(), engine.snapshot());
});
test('第九章重选恋人/朋友均延续人形', () => {
  const engine = reach('dating_end'); assert.equal(engine.replayChoice(relationship), true); assert.equal(engine.choose(1), true);
  assert.equal(engine.current().id, 'qiu_friends_end'); assert.equal(engine.state.flags.qiuForm, 'human');
  assert.deepEqual(new StoryEngine(engine.story, engine.snapshot()).snapshot(), engine.snapshot());
});
test('重选未到达选择或伪造当前flags不改变状态', () => {
  const engine = reach(route); unchanged(engine, () => engine.replayChoice(relationship));
  engine.state.flags.qiuForm = 'human'; unchanged(engine, () => engine.replayChoice(route));
});
test('自动事件历史中只保留普通line结构', () => {
  const engine = reach('dating_end');
  for (const id of [met, human]) {
    const entries = engine.state.history.filter(entry => entry.nodeId === id);
    assert.equal(entries.length, 1); assert.equal(entries[0].kind, 'line');
    assert.deepEqual(Object.keys(entries[0]), contract.interface.save.historyFields);
    assert.equal(engine.state.choices.some(entry => entry.nodeId === id), false);
  }
});

const results = tests.map(({ name, run }) => {
  try { run(); return { name, pass: true }; }
  catch (error) { console.error(name + '\n' + error.stack); return { name, pass: false, error: error.message }; }
});
const report = { task: 'E08', scope: 'isolated miniature ten-chapter engine protocol; not formal story or browser acceptance',
  pass: results.every(result => result.pass), tests: results.length, passed: results.filter(result => result.pass).length,
  engineStateVersion: 1, accessesPlayerStorage: false, formalStoryRead: false, results };
fs.writeFileSync(path.join(__dirname, 'engine-report.json'), JSON.stringify(report, null, 2) + '\n');
console.log(`E08 引擎专项：${report.passed}/${report.tests} 通过；未访问正式剧情或玩家存储。`);
if (!report.pass) process.exitCode = 1;
