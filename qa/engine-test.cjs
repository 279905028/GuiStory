'use strict';

// 本文件只测试独立的微型剧情，绝不读取、生成或替代正式 story.js。
// 直接运行：node qa/engine-test.cjs
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const { StoryEngine } = require('../engine.js');

const tests = [];
const test = (name, run) => tests.push({ name, run });
const copy = value => JSON.parse(JSON.stringify(value));
const own = (value, key) => Object.prototype.hasOwnProperty.call(value, key);
const branches = [
  ['h1', 'qiuSignal', ['record', 'work'], 's2'],
  ['c1', 'ride', ['walk', 'taxi', 'leave'], 's3'],
  ['c2', 'noodles', ['invite', 'space'], 's4'],
  ['c3', 'salon', ['portfolio', 'model'], 's5'],
  ['c4', 'reunion', ['apologize', 'appointment', 'joke'], 's7'],
  ['c5', 'inventory', ['full', 'limited'], 's8'],
  ['h2', 'qiuReply', ['reply', 'finish'], 's8'],
];
const routes = ['xiaoman', 'zhouzhi', 'mengyao', 'yelan', 'huangqiuqiu'];

function fixture() {
  const nodes = {
    intro: { id: 'intro', type: 'line', scene: 's1', speaker: 'narrator', character: null, text: '测试开场。', next: 'h1' },
    signal_gate: { id: 'signal_gate', type: 'gate', scene: 's10', cases: [{ flag: 'qiuSignal', value: 'record', next: 'reply_gate' }], default: 'ordinary_message' },
    reply_gate: { id: 'reply_gate', type: 'gate', scene: 's10', cases: [{ flag: 'qiuReply', value: 'reply', next: 'anonymous_message' }], default: 'ordinary_message' },
    ordinary_message: { id: 'ordinary_message', type: 'line', scene: 's10', speaker: 'narrator', character: null, text: '四条常规消息。', next: 'c6' },
    anonymous_message: { id: 'anonymous_message', type: 'line', scene: 's10', speaker: 'narrator', character: null, text: '四条常规消息与匿名黄色头像。', next: 'c6' },
    c6: {
      id: 'c6', type: 'choice', scene: 's10', character: null, text: '测试收束选择。', flag: 'preview',
      choices: routes.map((value, index) => ({
        label: index === 4 ? '回复那个黄色头像' : `测试收束${index + 1}`, value, next: `preview_${value}`,
        ...(index === 4 ? { requires: [{ flag: 'qiuSignal', value: 'record' }, { flag: 'qiuReply', value: 'reply' }] } : {}),
      })),
    },
  };
  branches.forEach(([id, flag, values, scene], branchIndex) => {
    const next = branches[branchIndex + 1]?.[0] || 'signal_gate';
    nodes[id] = {
      id, type: 'choice', scene, character: null, text: `测试 ${id}。`, flag,
      choices: values.map(value => ({ label: `${id}:${value}`, value, next: `${id}_${value}` })),
    };
    values.forEach(value => {
      const lineId = `${id}_${value}`;
      nodes[lineId] = { id: lineId, type: 'line', scene, speaker: '文文', character: 'wenwen', text: `已选择 ${id}:${value}。`, next };
    });
  });
  routes.forEach(value => {
    nodes[`preview_${value}`] = { id: `preview_${value}`, type: 'line', scene: 's10', speaker: 'narrator', character: value, text: `旧预告：${value}。`, next: `end_${value}` };
    nodes[`end_${value}`] = { id: `end_${value}`, type: 'end', scene: 's10', character: value, title: `测试 ${value}`, text: '测试收束。', nextChapter: '测试下一章。' };
  });
  return { version: 1, title: '引擎专用微型测试剧情', start: 'intro', previewChoice: 'c6', nodes };
}

function reach(engine, target, selections = {}) {
  for (let steps = 0; steps < 100; steps++) {
    const node = engine.current();
    if (node.id === target) return engine;
    if (node.type === 'line') assert.equal(engine.advance(), true);
    else if (node.type === 'choice') {
      const index = own(selections, node.id) ? selections[node.id] : 0;
      assert.equal(engine.choose(index), true, `应能选择 ${node.id}[${index}]`);
    } else assert.fail(`到达 ${node.id}，未找到测试目标 ${target}`);
  }
  assert.fail(`未在步数上限内到达 ${target}`);
}

function preview(h1 = 0, h2 = 0, story = fixture()) {
  return reach(new StoryEngine(story), 'c6', { h1, h2 });
}

function finish(engine, route = 0) {
  assert.equal(engine.current().id, 'c6');
  assert.equal(engine.choose(route), true);
  assert.equal(engine.advance(), true);
  assert.equal(engine.current().type, 'end');
  return engine;
}

function references(value, result = [], seen = new Set(), location = []) {
  if (value && typeof value === 'object' && !seen.has(value)) {
    seen.add(value);
    result.push([location, value]);
    for (const key of Object.keys(value)) references(value[key], result, seen, [...location, key]);
  }
  return result;
}

function unchanged(engine, action, expected = false) {
  const before = engine.snapshot();
  const refs = references(engine.state);
  if (expected instanceof RegExp) {
    assert.throws(action, error => {
      assert.match(error.message, /[\u3400-\u9fff]/, '错误必须包含可理解的中文');
      assert.match(error.message, expected);
      return true;
    });
  } else assert.equal(action(), expected);
  assert.deepEqual(engine.snapshot(), before, '失败不得污染任何状态值');
  for (const [keys, ref] of refs) {
    const current = keys.reduce((value, key) => value[key], engine.state);
    assert.strictEqual(current, ref, `失败不得替换已有可变引用：state.${keys.join('.')}`);
  }
}

test('保留 CommonJS 与浏览器 window.RainCore.StoryEngine 导出', () => {
  assert.equal(typeof StoryEngine, 'function');
  const sandbox = { window: {} };
  vm.runInNewContext(fs.readFileSync(path.resolve(__dirname, '../engine.js'), 'utf8'), sandbox);
  assert.equal(typeof sandbox.window.RainCore.StoryEngine, 'function');
  const browserEngine = new sandbox.window.RainCore.StoryEngine(fixture());
  assert.equal(browserEngine.current().id, 'intro');
});

test('合法跨 vm realm 剧情、requires 与存档仍可正常使用', () => {
  const saved = finish(preview(), 4).snapshot();
  const foreignSaved = vm.runInNewContext('JSON.parse(serialized)', { serialized: JSON.stringify(saved) });
  const engine = new StoryEngine(fixture(), foreignSaved);
  assert.deepEqual(engine.snapshot(), saved);
  assert.equal(engine.replayPreview(), true);
  assert.equal(engine.availableChoices().length, 5);

  const sandbox = { window: {} };
  vm.runInNewContext(fs.readFileSync(path.resolve(__dirname, '../engine.js'), 'utf8'), sandbox);
  const browserEngine = new sandbox.window.RainCore.StoryEngine(fixture(), saved);
  assert.deepEqual(copy(browserEngine.snapshot()), saved);
  assert.equal(browserEngine.replayPreview(), true);
  assert.equal(browserEngine.choose(4), true);
  assert.equal(browserEngine.current().id, 'preview_huangqiuqiu');
});

test('初始状态与公开接口保持契约，首句只记录一次', () => {
  const engine = new StoryEngine(fixture());
  assert.deepEqual(Object.keys(engine.state).sort(), ['version', 'nodeId', 'flags', 'history', 'choices', 'previewCheckpoint'].sort());
  assert.equal(engine.state.version, 1);
  assert.equal(engine.state.history.length, 1);
  assert.equal(engine.state.history[0].nodeId, 'intro');
  for (const method of ['current', 'advance', 'choose', 'snapshot', 'restore', 'replayPreview', 'availableChoices']) assert.equal(typeof engine[method], 'function', method);
});

test('availableChoices 在 line/end 返回空数组，advance 在 choice/end 不改状态', () => {
  const engine = new StoryEngine(fixture());
  assert.deepEqual(engine.availableChoices(), []);
  reach(engine, 'h1');
  unchanged(engine, () => engine.advance());
  finish(reach(engine, 'c6'));
  assert.deepEqual(engine.availableChoices(), []);
  unchanged(engine, () => engine.advance());
});

for (const position of ['intro', 'c6', 'end_xiaoman']) {
  test(`非法 choose 参数与非 choice 调用不改状态：${position}`, () => {
    const engine = reach(new StoryEngine(fixture()), position);
    const invalid = [-1, 99, 0.1, 1.5, '0', '4', null, undefined, NaN, Infinity, {}, [], true];
    if (position !== 'c6') invalid.push(0, 4);
    for (const index of invalid) unchanged(engine, () => engine.choose(index));
  });
}

for (const h1 of [0, 1]) for (const h2 of [0, 1]) {
  test(`H1/H2 组合 ${h1}/${h2} 只有 record+reply 显示第五项`, () => {
    const engine = preview(h1, h2);
    const unlocked = h1 === 0 && h2 === 0;
    const indices = unlocked ? [0, 1, 2, 3, 4] : [0, 1, 2, 3];
    assert.deepEqual(engine.availableChoices(), indices.map(index => ({ index, option: engine.current().choices[index] })));
    assert.equal(engine.state.history.some(item => item.nodeId === 'anonymous_message'), unlocked);
    if (!unlocked) unchanged(engine, () => engine.choose(4));
    else {
      assert.equal(engine.choose(4), true);
      assert.equal(engine.state.flags.preview, 'huangqiuqiu');
    }
  });
}

for (const flag of ['qiuSignal', 'qiuReply']) {
  test(`缺少 ${flag} 时隐藏项不可用且直接 choose(4) 不改状态`, () => {
    const engine = preview();
    delete engine.state.flags[flag];
    assert.deepEqual(engine.availableChoices().map(item => item.index), [0, 1, 2, 3]);
    unchanged(engine, () => engine.choose(4));
  });
}

test('requires 严格比较且全部条件满足，不把缺失 flag 当成 undefined 条件满足', () => {
  const engine = preview();
  const option = engine.current().choices[4];
  option.requires = [{ flag: 'testNumber', value: 1 }, { flag: 'testBoolean', value: true }];
  engine.state.flags.testNumber = '1';
  engine.state.flags.testBoolean = true;
  unchanged(engine, () => engine.choose(4));
  engine.state.flags.testNumber = 1;
  engine.state.flags.testBoolean = 'true';
  unchanged(engine, () => engine.choose(4));
  engine.state.flags.testBoolean = true;
  assert.equal(engine.availableChoices().length, 5);
  option.requires = [{ flag: 'notPresent', value: undefined }];
  assert.equal(engine.availableChoices().length, 4);
  unchanged(engine, () => engine.choose(4));
});

test('requires 缺少自有 value 时，即使 flag 为 undefined 也不能解锁', () => {
  const engine = preview();
  engine.current().choices[4].requires = [{ flag: 'missing' }];
  engine.state.flags.missing = undefined;
  assert.deepEqual(engine.availableChoices().map(item => item.index), [0, 1, 2, 3]);
  unchanged(engine, () => engine.choose(4));
  assert.equal(own(engine.state.flags, 'missing'), true);
  assert.equal(engine.state.flags.missing, undefined);
});

test('过滤后保留原始索引；无 requires 和空数组兼容', () => {
  const engine = preview(1, 1);
  engine.current().choices[1].requires = [{ flag: 'qiuSignal', value: 'record' }];
  engine.current().choices[2].requires = [];
  assert.deepEqual(engine.availableChoices().map(item => item.index), [0, 2, 3]);
  unchanged(engine, () => engine.choose(1));
  assert.equal(engine.choose(2), true);
  assert.equal(engine.state.flags.preview, 'mengyao');
  assert.equal(engine.state.choices.at(-1).value, 'mengyao');
});

test('choose 再次校验 requires，不沿用旧 availableChoices 结果', () => {
  const engine = preview();
  assert.equal(engine.availableChoices().at(-1).index, 4);
  engine.state.flags.qiuReply = 'finish';
  unchanged(engine, () => engine.choose(4));
});

test('读取解锁档后再读未解锁档不串 flags、检查点或隐藏资格', () => {
  const unlocked = finish(preview(), 4).snapshot();
  const locked = preview(1, 1).snapshot();
  const engine = new StoryEngine(fixture());
  engine.restore(unlocked);
  assert.equal(engine.replayPreview(), true);
  assert.equal(engine.availableChoices().length, 5);
  engine.restore(locked);
  assert.equal(engine.availableChoices().length, 4);
  assert.deepEqual(engine.state.flags, locked.flags);
  unchanged(engine, () => engine.choose(4));
  finish(engine, 1);
  assert.equal(engine.replayPreview(), true);
  assert.equal(engine.availableChoices().length, 4);
  assert.equal(engine.state.flags.qiuSignal, 'work');
  assert.equal(engine.state.flags.qiuReply, 'finish');
  assert.deepEqual(new StoryEngine(fixture()).state.flags, {});
});

for (const h1 of [0, 1]) for (const h2 of [0, 1]) {
  test(`反复重选 C6 保留七次前置选择和 H 标记，删除旧预告：${h1}/${h2}`, () => {
    const engine = preview(h1, h2);
    const before = engine.snapshot();
    assert.deepEqual(before.choices.map(item => item.nodeId), ['h1', 'c1', 'c2', 'c3', 'c4', 'c5', 'h2']);
    assert.equal(before.previewCheckpoint.nodeId, 'c6');
    assert.equal(before.previewCheckpoint.previewCheckpoint, null);
    const legalRoutes = engine.availableChoices().map(item => item.index);
    for (let iteration = 0; iteration < 3; iteration++) for (const index of legalRoutes) {
      finish(engine, index);
      assert.equal(engine.state.choices.length, 8);
      assert.equal(engine.replayPreview(), true);
      assert.deepEqual(engine.snapshot(), before);
      assert.equal(engine.state.history.some(item => item.nodeId.startsWith('preview_')), false);
      assert.equal(own(engine.state.flags, 'preview'), false);
      assert.equal(engine.state.previewCheckpoint.previewCheckpoint, null);
    }
  });
}

test('抵达 C6 前 replayPreview 返回 false 且不改变状态', () => {
  const engine = reach(new StoryEngine(fixture()), 'h2');
  unchanged(engine, () => engine.replayPreview());
});

for (const position of ['intro', 'h1', 'h1_record', 'c6', 'preview_huangqiuqiu', 'end_huangqiuqiu']) {
  test(`合法恢复与构造恢复保留轨迹，多次恢复不重复历史：${position}`, () => {
    const source = reach(new StoryEngine(fixture()), position, { c6: 4 });
    const saved = source.snapshot();
    const engine = new StoryEngine(source.story, saved);
    assert.deepEqual(engine.snapshot(), saved);
    for (let times = 0; times < 3; times++) {
      engine.restore(saved);
      assert.deepEqual(engine.snapshot(), saved);
    }
  });
}

for (const kind of ['snapshot(false)', '缺失 checkpoint', 'null checkpoint']) {
  test(`完整合法轨迹允许 ${kind}，并重建可用的 C6 检查点`, () => {
    const source = finish(preview(), 4);
    const saved = kind === 'snapshot(false)' ? source.snapshot(false) : source.snapshot();
    if (kind === '缺失 checkpoint') delete saved.previewCheckpoint;
    else saved.previewCheckpoint = null;
    const engine = new StoryEngine(source.story, saved);
    assert.equal(engine.current().id, 'end_huangqiuqiu');
    assert.equal(engine.replayPreview(), true);
    assert.equal(engine.current().id, 'c6');
    assert.equal(engine.state.choices.length, 7);
    assert.equal(engine.availableChoices().length, 5);
    assert.equal(engine.state.previewCheckpoint.previewCheckpoint, null);
  });
}

test('snapshot 及 snapshot(false) 不向调用方暴露内部可变引用', () => {
  const engine = finish(preview(), 4);
  const baseline = engine.snapshot();
  const saved = engine.snapshot();
  const withoutCheckpoint = engine.snapshot(false);
  assert.equal(withoutCheckpoint.previewCheckpoint, null);
  saved.nodeId = 'intro';
  saved.flags.qiuSignal = 'work';
  saved.history[0].text = '外部修改';
  saved.choices[0].label = '外部修改';
  saved.previewCheckpoint.flags.qiuReply = 'finish';
  saved.previewCheckpoint.history[0].text = '外部检查点修改';
  saved.previewCheckpoint.choices[0].label = '外部检查点修改';
  withoutCheckpoint.flags.qiuReply = 'finish';
  withoutCheckpoint.history.length = 0;
  assert.deepEqual(engine.snapshot(), baseline);
});

test('restore 不与传入存档共享 flags/history/choices/checkpoint 引用', () => {
  const saved = finish(preview(), 4).snapshot();
  const baseline = copy(saved);
  const engine = new StoryEngine(fixture());
  engine.restore(saved);
  for (const [keys, ref] of references(saved)) {
    const current = keys.reduce((value, key) => value[key], engine.state);
    assert.notStrictEqual(current, ref, `恢复后不得共享：state.${keys.join('.')}`);
  }
  saved.flags.qiuSignal = 'work';
  saved.history[0].text = '修改调用方存档';
  saved.choices[0].value = 'work';
  saved.previewCheckpoint.flags.qiuReply = 'finish';
  saved.previewCheckpoint.history.length = 0;
  assert.deepEqual(engine.snapshot(), baseline);
});

const corruptions = [
  ['不兼容版本', saved => { saved.version = 2; }],
  ['字符串版本', saved => { saved.version = '1'; }],
  ['缺失版本', saved => { delete saved.version; }],
  ['不存在 nodeId', saved => { saved.nodeId = 'missing_node'; }],
  ['原型 nodeId toString', saved => { saved.nodeId = 'toString'; }],
  ['原型 nodeId constructor', saved => { saved.nodeId = 'constructor'; }],
  ['原型 nodeId __proto__', saved => { saved.nodeId = '__proto__'; }],
  ['gate 不能成为存档当前节点', saved => { saved.nodeId = 'signal_gate'; }],
  ['有效但不符合轨迹的 nodeId', saved => { saved.nodeId = 'c1'; }],
  ['flags 为 null', saved => { saved.flags = null; }],
  ['flags 为数组', saved => { saved.flags = []; }],
  ['flags 为字符串', saved => { saved.flags = 'record'; }],
  ['flags 对象值', saved => { saved.flags.qiuSignal = {}; }],
  ['flags 数组值', saved => { saved.flags.qiuSignal = []; }],
  ['flags 数值与选项不符', saved => { saved.flags.qiuSignal = 1; }],
  ['flags 非有限数字', saved => { saved.flags.qiuSignal = NaN; }],
  ['flags undefined 值', saved => { saved.flags.qiuSignal = undefined; }],
  ['flags 缺少已选标记', saved => { delete saved.flags.qiuSignal; }],
  ['flags 与选择记录不符', saved => { saved.flags.qiuReply = 'finish'; }],
  ['flags 注入未知标记', saved => { saved.flags.unknown = 'record'; }],
  ['history 不是数组', saved => { saved.history = {}; }],
  ['history null 条目', saved => { saved.history[0] = null; }],
  ['history 字符串条目', saved => { saved.history[0] = 'intro'; }],
  ['history 数组条目', saved => { saved.history[0] = []; }],
  ['history 缺失 nodeId', saved => { delete saved.history[0].nodeId; }],
  ['history 不存在 nodeId', saved => { saved.history[0].nodeId = 'missing'; }],
  ['history 原型 nodeId', saved => { saved.history[0].nodeId = '__proto__'; }],
  ['history scene 不符', saved => { saved.history[0].scene = 's10'; }],
  ['history speaker 不符', saved => { saved.history[0].speaker = '伪造说话人'; }],
  ['history text 不符', saved => { saved.history[0].text = '伪造台词'; }],
  ['history kind 非法', saved => { saved.history[0].kind = 'gate'; }],
  ['history line 伪装 choice', saved => { saved.history[0].kind = 'choice'; }],
  ['history 漏掉首句', saved => { saved.history.shift(); }],
  ['history 重复条目', saved => { saved.history.splice(1, 0, copy(saved.history[0])); }],
  ['history 顺序颠倒', saved => { [saved.history[0], saved.history[1]] = [saved.history[1], saved.history[0]]; }],
  ['choices 不是数组', saved => { saved.choices = {}; }],
  ['choices null 条目', saved => { saved.choices[0] = null; }],
  ['choices 字符串条目', saved => { saved.choices[0] = 'h1'; }],
  ['choices 数组条目', saved => { saved.choices[0] = []; }],
  ['choices nodeId 不是 choice', saved => { saved.choices[0].nodeId = 'intro'; }],
  ['choices nodeId 不存在', saved => { saved.choices[0].nodeId = 'missing'; }],
  ['choices 缺失 value', saved => { delete saved.choices[0].value; }],
  ['choices value 不存在', saved => { saved.choices[0].value = 'invalid'; }],
  ['choices 缺失 label', saved => { delete saved.choices[0].label; }],
  ['choices label 不符', saved => { saved.choices[0].label = '伪造选项'; }],
  ['choices 漏掉前置选择', saved => { saved.choices.splice(1, 1); }],
  ['choices 重复前置选择', saved => { saved.choices.splice(1, 0, copy(saved.choices[0])); }],
  ['choices 顺序颠倒', saved => { [saved.choices[0], saved.choices[1]] = [saved.choices[1], saved.choices[0]]; }],
  ['checkpoint 为非对象', saved => { saved.previewCheckpoint = 'c6'; }],
  ['checkpoint 版本不兼容', saved => { saved.previewCheckpoint.version = 2; }],
  ['checkpoint 缺失 nodeId', saved => { delete saved.previewCheckpoint.nodeId; }],
  ['checkpoint 不存在 nodeId', saved => { saved.previewCheckpoint.nodeId = 'missing'; }],
  ['checkpoint 节点不是 C6', saved => { saved.previewCheckpoint.nodeId = 'intro'; }],
  ['checkpoint history 无效条目', saved => { saved.previewCheckpoint.history[0] = null; }],
  ['checkpoint history 缺行', saved => { saved.previewCheckpoint.history.pop(); }],
  ['checkpoint choices 缺少前置', saved => { saved.previewCheckpoint.choices.pop(); }],
  ['checkpoint H 标记不符', saved => { saved.previewCheckpoint.flags.qiuSignal = 'work'; }],
  ['checkpoint 注入旧 preview 标记', saved => { saved.previewCheckpoint.flags.preview = 'xiaoman'; }],
  ['checkpoint 嵌套完整快照', saved => { saved.previewCheckpoint.previewCheckpoint = copy(saved.previewCheckpoint); }],
  ['checkpoint 循环引用', saved => { saved.previewCheckpoint.previewCheckpoint = saved.previewCheckpoint; }],
];

for (const [name, corrupt] of corruptions) {
  test(`拒绝坏档且状态值与引用保持原样：${name}`, () => {
    const engine = preview(1, 1);
    const saved = finish(preview(), 4).snapshot();
    corrupt(saved);
    unchanged(engine, () => engine.restore(saved), /存档|损坏|不兼容|检查点/);
  });
}

for (const [name, invalid] of [['null', null], ['undefined', undefined], ['false', false], ['数字', 0], ['字符串', 'bad'], ['数组', []]]) {
  test(`拒绝无效存档根值：${name}`, () => {
    const engine = preview();
    unchanged(engine, () => engine.restore(invalid), /存档|损坏|不兼容/);
  });
}

test('拒绝根字段全部继承自异常原型、没有自有字段的存档', () => {
  const engine = preview(1, 1);
  const goodSnapshot = finish(preview(), 4).snapshot();
  const inherited = Object.create(Object.assign(Object.create(null), goodSnapshot));
  assert.deepEqual(Object.keys(inherited), []);
  unchanged(engine, () => engine.restore(inherited), /存档|损坏|不兼容/);
});

test('拒绝初始 flags 通过异常原型继承 H 标记的存档', () => {
  const engine = preview(1, 1);
  const saved = new StoryEngine(fixture()).snapshot();
  saved.flags = Object.create(Object.assign(Object.create(null), { qiuSignal: 'record', qiuReply: 'reply' }));
  assert.deepEqual(Object.keys(saved.flags), []);
  unchanged(engine, () => engine.restore(saved), /存档|损坏|不兼容/);
});

test('拒绝其他合法分支的检查点，不能替换当前七次前置选择', () => {
  const engine = preview(1, 1);
  const saved = finish(preview(), 4).snapshot();
  saved.previewCheckpoint = preview(1, 1).snapshot(false);
  unchanged(engine, () => engine.restore(saved), /存档|损坏|不兼容|检查点/);
});

test('尚未到 C6 的合法轨迹不得携带将来的 C6 检查点', () => {
  const engine = preview();
  const saved = reach(new StoryEngine(fixture()), 'c1').snapshot();
  saved.previewCheckpoint = preview().snapshot(false);
  unchanged(engine, () => engine.restore(saved), /存档|损坏|不兼容|检查点/);
});

test('伪造未解锁路径的第五选项记录不能通过 restore 绕过 requires', () => {
  const story = fixture();
  // 先在测试图中临时移除 requires 取得自洽轨迹，再用原本有锁的图恢复。
  delete story.nodes.c6.choices[4].requires;
  const forged = finish(preview(1, 1, story), 4).snapshot();
  const engine = preview(1, 1);
  unchanged(engine, () => engine.restore(forged), /存档|损坏|不兼容|条件/);
});

test('构造器携带损坏的非空存档时抛中文错误', () => {
  assert.throws(() => new StoryEngine(fixture(), { version: 999 }), /存档|损坏|不兼容/);
});

const brokenTransitions = [
  ['直接断链', (story, setNext) => setNext('missing_target'), /missing_target/],
  ['原型键断链', (story, setNext) => setNext('toString'), /toString/],
  ['gate 默认分支断链', (story, setNext) => {
    story.nodes.broken_gate = { id: 'broken_gate', type: 'gate', scene: 's3', cases: [], default: 'missing_default' };
    setNext('broken_gate');
  }, /missing_default/],
  ['gate 匹配分支断链', (story, setNext) => {
    story.nodes.broken_gate = { id: 'broken_gate', type: 'gate', scene: 's3', cases: [{ flag: 'qiuSignal', value: 'record', next: 'missing_match' }], default: 'c2' };
    setNext('broken_gate');
  }, /missing_match/],
  ['gate 自循环', (story, setNext) => {
    story.nodes.broken_gate = { id: 'broken_gate', type: 'gate', scene: 's3', cases: [], default: 'broken_gate' };
    setNext('broken_gate');
  }, /循环/],
  ['两个 gate 循环', (story, setNext) => {
    story.nodes.broken_gate = { id: 'broken_gate', type: 'gate', scene: 's3', cases: [], default: 'second_gate' };
    story.nodes.second_gate = { id: 'second_gate', type: 'gate', scene: 's3', cases: [], default: 'broken_gate' };
    setNext('broken_gate');
  }, /循环/],
];

for (const action of ['choose', 'advance']) for (const [name, breakGraph, expected] of brokenTransitions) {
  test(`${action} 遇到${name}报明确错误且完全不改状态`, () => {
    const story = fixture();
    const engine = reach(new StoryEngine(story), action === 'choose' ? 'c1' : 'c1_walk');
    const setNext = target => {
      if (action === 'choose') story.nodes.c1.choices[0].next = target;
      else story.nodes.c1_walk.next = target;
    };
    breakGraph(story, setNext);
    unchanged(engine, () => action === 'choose' ? engine.choose(0) : engine.advance(), expected);
  });
}

test('choose 经 gate 使用本次选择的候选 flag，成功后一次性提交', () => {
  const story = fixture();
  const engine = reach(new StoryEngine(story), 'c1');
  story.nodes.after_ride = { id: 'after_ride', type: 'gate', scene: 's3', cases: [{ flag: 'ride', value: 'taxi', next: 'c1_taxi' }], default: 'c1_walk' };
  story.nodes.c1.choices[1].next = 'after_ride';
  assert.equal(engine.choose(1), true);
  assert.equal(engine.current().id, 'c1_taxi');
  assert.equal(engine.state.flags.ride, 'taxi');
  assert.equal(engine.state.choices.length, 2);
  assert.equal(engine.state.history.filter(item => item.nodeId === 'c1' && item.kind === 'choice').length, 1);
});

test('微型测试图的所有合法完整路径：常规 1152 + 隐藏 72 = 1224', () => {
  const story = fixture();
  assert.equal(Object.values(story.nodes).filter(node => node.type === 'choice').length, 8);
  assert.equal(Object.values(story.nodes).filter(node => node.type === 'end').length, 5);
  const counts = { ordinary: 0, hidden: 0, total: 0 };
  const ends = new Set();
  function visit(engine) {
    while (engine.current().type === 'line') assert.equal(engine.advance(), true);
    if (engine.current().type === 'end') {
      counts.total++;
      const hidden = engine.current().id === 'end_huangqiuqiu';
      counts[hidden ? 'hidden' : 'ordinary']++;
      assert.equal(engine.state.choices.length, 8);
      assert.equal(engine.state.previewCheckpoint.choices.length, 7);
      assert.equal(engine.state.previewCheckpoint.previewCheckpoint, null);
      if (hidden) {
        assert.equal(engine.state.flags.qiuSignal, 'record');
        assert.equal(engine.state.flags.qiuReply, 'reply');
      }
      ends.add(engine.current().id);
      return;
    }
    assert.equal(engine.current().type, 'choice');
    const saved = engine.snapshot();
    for (const { index } of engine.availableChoices()) {
      const branch = new StoryEngine(story, saved);
      assert.equal(branch.choose(index), true);
      visit(branch);
    }
  }
  visit(new StoryEngine(story));
  assert.deepEqual(counts, { ordinary: 1152, hidden: 72, total: 1224 });
  assert.deepEqual([...ends].sort(), routes.map(value => `end_${value}`).sort());
});

let failures = 0;
for (const { name, run } of tests) {
  try {
    run();
  } catch (error) {
    failures++;
    console.error(`失败：${name}\n${error.stack}\n`);
  }
}
if (failures) {
  console.error(`引擎微型剧情测试：${tests.length - failures}/${tests.length} 通过，${failures} 失败。`);
  process.exitCode = 1;
} else {
  console.log(`引擎微型剧情测试：${tests.length}/${tests.length} 通过。`);
  console.log('微型图合法路径：常规 1152，隐藏 72，总计 1224；五收束均可达。');
}
console.log('范围声明：本命令不读取正式 story.js；微型剧情通过不代表正式剧情验收通过。');
