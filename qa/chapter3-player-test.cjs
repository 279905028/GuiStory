'use strict';

// 独立微型剧情验证章节播放器，正式剧情由整体验收另行遍历。
const assert = require('node:assert/strict');
const { StoryEngine } = require('../engine.js');
const tests = [];
const test = (name, run) => tests.push({ name, run });
const routes = ['xiaoman', 'zhouzhi', 'mengyao', 'yelan', 'solo', 'huangqiuqiu'];
const copy = value => JSON.parse(JSON.stringify(value));

function fixture() {
  const nodes = {};
  const line = (id, next, scene = 'chapter1') => {
    nodes[id] = { id, type: 'line', scene, text: id + '。', speaker: 'narrator', character: null, next };
  };
  const choice = (id, flag, options, scene = 'chapter1') => {
    nodes[id] = { id, type: 'choice', scene, text: id + '？', flag,
      choices: options.map(([value, next, requires]) => ({ value, label: value + '。', next, ...(requires ? { requires } : {}) })) };
  };
  line('intro', 'signal');
  choice('signal', 'qiuSignal', [['record', 'reply'], ['work', 'reply']]);
  choice('reply', 'qiuReply', [['reply', 'preview'], ['finish', 'preview']]);
  choice('preview', 'preview', [['xiaoman', 'preview_xiaoman'], ['zhouzhi', 'preview_zhouzhi']]);
  for (const route of ['xiaoman', 'zhouzhi']) {
    line('preview_' + route, 'end1_' + route);
    nodes['end1_' + route] = { id: 'end1_' + route, type: 'end', scene: 'chapter1', next: 'ch2_intro' };
  }
  line('ch2_intro', 'film', 'chapter2');
  choice('film', 'film', [['people', 'ch2_people'], ['empty', 'ch2_empty']], 'chapter2');
  line('ch2_people', 'end2', 'chapter2');
  line('ch2_empty', 'end2', 'chapter2');
  nodes.end2 = { id: 'end2', type: 'end', scene: 'chapter2', next: 'ch3_intro' };
  line('ch3_intro', 'route', 'chapter3');
  choice('route', 'route', routes.map(route => [route, 'route_' + route, route === 'huangqiuqiu' ?
    [{ flag: 'qiuSignal', value: 'record' }, { flag: 'qiuReply', value: 'reply' }] : undefined]), 'chapter3');
  for (const route of routes) {
    line('route_' + route, 'end3_' + route, 'chapter3');
    nodes['end3_' + route] = { id: 'end3_' + route, type: 'end', scene: 'chapter3' };
  }
  // 存在于剧情中但当前路径永远不到达的选择，也不得通过重选入口跳入。
  choice('unvisited', 'unvisited', [['never', 'intro']], 'chapter3');
  return { version: 1, release: '0.3', start: 'intro', previewChoice: 'preview', routeChoice: 'route', nodes };
}

function reach(engine, target, selections = {}) {
  for (let step = 0; step < 100; step++) {
    const node = engine.current();
    if (node.id === target) return engine;
    if (node.type === 'choice') assert.equal(engine.choose(selections[node.id] ?? 0), true);
    else assert.equal(engine.advance(), true, `应能从 ${node.id} 继续前进至 ${target}`);
  }
  assert.fail('超过测试路径上限：' + target);
}

function unchanged(engine, action, error) {
  const snapshot = engine.snapshot();
  const state = engine.state;
  const flags = state.flags;
  const history = state.history;
  const choices = state.choices;
  if (error) assert.throws(action, error);
  else assert.equal(action(), false);
  assert.deepEqual(engine.snapshot(), snapshot);
  assert.strictEqual(engine.state, state);
  assert.strictEqual(engine.state.flags, flags);
  assert.strictEqual(engine.state.history, history);
  assert.strictEqual(engine.state.choices, choices);
}

test('第一、二章 end.next 可逐章继续，第三章终局不前进', () => {
  const engine = reach(new StoryEngine(fixture()), 'end1_xiaoman');
  assert.equal(engine.advance(), true);
  assert.equal(engine.current().id, 'ch2_intro');
  reach(engine, 'end2');
  assert.equal(engine.advance(), true);
  assert.equal(engine.current().id, 'ch3_intro');
  reach(engine, 'end3_solo', { route: 4 });
  unchanged(engine, () => engine.advance());
});

for (const target of ['end1_zhouzhi', 'ch2_intro', 'film', 'end2', 'ch3_intro', 'route', 'end3_yelan']) {
  test(`跨章存档严格恢复并保持完整轨迹：${target}`, () => {
    const story = fixture();
    const engine = reach(new StoryEngine(story), target, { preview: 1, film: 1, route: 3 });
    const saved = engine.snapshot();
    assert.deepEqual(new StoryEngine(story, saved).snapshot(), saved);
    assert.deepEqual(new StoryEngine(story, engine.snapshot(false)).snapshot(), saved);
    if (target.startsWith('end') && engine.current().next) {
      const restored = new StoryEngine(story, saved);
      assert.equal(restored.advance(), true);
      assert.equal(restored.current().id, engine.current().next);
    }
  });
}

test('跨章 end 不产生冗余历史、存档字段保持原契约', () => {
  const engine = reach(new StoryEngine(fixture()), 'end3_solo', { route: 4 });
  assert.deepEqual(Object.keys(engine.state).sort(),
    ['version', 'nodeId', 'flags', 'history', 'choices', 'previewCheckpoint'].sort());
  assert.equal(engine.state.history.some(entry => entry.nodeId.startsWith('end')), false);
  assert.equal(new Set(engine.state.history.map(entry => entry.nodeId)).size, engine.state.history.length);
});

test('end.next 可通过合法 gate 进入下一章', () => {
  const story = fixture();
  story.nodes.end1_xiaoman.next = 'chapter_gate';
  story.nodes.chapter_gate = { id: 'chapter_gate', type: 'gate', scene: 'chapter1',
    cases: [{ flag: 'qiuSignal', value: 'record', next: 'ch2_intro' }], default: 'ch3_intro' };
  const engine = reach(new StoryEngine(story), 'end1_xiaoman');
  assert.equal(engine.advance(), true);
  assert.equal(engine.current().id, 'ch2_intro');
  assert.deepEqual(new StoryEngine(story, engine.snapshot()).snapshot(), engine.snapshot());
});

for (const badNext of ['missing', 'broken_gate']) {
  test(`无效的章节续接不污染状态：${badNext}`, () => {
    const story = fixture();
    story.nodes.end1_xiaoman.next = badNext;
    story.nodes.broken_gate = { id: 'broken_gate', type: 'gate', scene: 'chapter1', cases: [], default: 'broken_gate' };
    const engine = reach(new StoryEngine(story), 'end1_xiaoman');
    unchanged(engine, () => engine.advance(), /剧情/);
  });
}

for (const routeIndex of [0, 1, 2, 3, 4, 5]) {
  test(`第三章路线 ${routes[routeIndex]} 可重选且清除本路线后续记录`, () => {
    const story = fixture();
    const engine = reach(new StoryEngine(story), 'route', { preview: 1, film: 1 });
    const before = engine.snapshot();
    assert.equal(engine.choose(routeIndex), true);
    assert.equal(engine.advance(), true);
    assert.equal(engine.current().id, 'end3_' + routes[routeIndex]);
    assert.equal(engine.replayChoice(story.routeChoice), true);
    assert.deepEqual(engine.snapshot(), before);
    assert.deepEqual(new StoryEngine(story, engine.snapshot()).snapshot(), before);
    assert.equal(engine.state.flags.preview, 'zhouzhi');
    assert.equal(engine.state.flags.film, 'empty');
    assert.equal(Object.hasOwn(engine.state.flags, 'route'), false);
  });
}

test('当前选择可重选，不需要伪造一次已选记录', () => {
  const engine = reach(new StoryEngine(fixture()), 'route');
  const before = engine.snapshot();
  assert.equal(engine.replayChoice('route'), true);
  assert.deepEqual(engine.snapshot(), before);
  assert.equal(engine.state.choices.some(choice => choice.nodeId === 'route'), false);
});

test('跨章后仍保留原 replayPreview，可回到第一章消息并清除之后的选择', () => {
  const engine = reach(new StoryEngine(fixture()), 'preview');
  const before = engine.snapshot();
  reach(engine, 'end3_solo', { preview: 1, film: 1, route: 4 });
  assert.equal(engine.replayPreview(), true);
  assert.deepEqual(engine.snapshot(), before);
  assert.deepEqual(engine.state.choices.map(entry => entry.nodeId), ['signal', 'reply']);
});

test('通用重选可回到实际访问过的早期选择，并重建后续隐藏资格', () => {
  const engine = reach(new StoryEngine(fixture()), 'end3_huangqiuqiu', { route: 5 });
  assert.equal(engine.replayChoice('signal'), true);
  assert.deepEqual(engine.state.flags, {});
  assert.equal(engine.state.previewCheckpoint, null);
  reach(engine, 'route', { signal: 1 });
  assert.deepEqual(engine.availableChoices().map(entry => entry.index), [0, 1, 2, 3, 4]);
  unchanged(engine, () => engine.choose(5));
});

for (const [signal, reply] of [[0, 0], [0, 1], [1, 0], [1, 1]]) {
  test(`第三章隐藏项重选仍保留双条件：${signal}/${reply}`, () => {
    const engine = reach(new StoryEngine(fixture()), 'route', { signal, reply });
    const expected = signal === 0 && reply === 0 ? [0, 1, 2, 3, 4, 5] : [0, 1, 2, 3, 4];
    assert.deepEqual(engine.availableChoices().map(entry => entry.index), expected);
    reach(engine, 'end3_solo', { route: 4 });
    assert.equal(engine.replayChoice('route'), true);
    assert.deepEqual(engine.availableChoices().map(entry => entry.index), expected);
    if (expected.length === 5) unchanged(engine, () => engine.choose(5));
  });
}

test('未知、非选择、未访问、未来选择以及非字符串重选均无副作用', () => {
  const engine = reach(new StoryEngine(fixture()), 'end2');
  for (const id of ['missing', 'intro', 'end2', 'route', 'unvisited', '__proto__', 'constructor', null, undefined, {}, []]) {
    unchanged(engine, () => engine.replayChoice(id));
  }
});

test('第三章存档不能省略章间选择或伪造隐藏分支', () => {
  const story = fixture();
  const source = reach(new StoryEngine(story), 'end3_solo', { signal: 1, route: 4 });
  const saved = source.snapshot();
  const removedChoice = copy(saved);
  removedChoice.choices = removedChoice.choices.filter(entry => entry.nodeId !== 'film');
  assert.throws(() => new StoryEngine(story, removedChoice), /存档不兼容或已损坏/);
  const hidden = copy(saved);
  hidden.nodeId = 'end3_huangqiuqiu';
  hidden.flags.route = 'huangqiuqiu';
  hidden.choices.at(-1).value = 'huangqiuqiu';
  hidden.choices.at(-1).label = 'huangqiuqiu。';
  assert.throws(() => new StoryEngine(story, hidden), /存档不兼容或已损坏/);
});

test('被污染的当前轨迹不能通过 replayChoice 洗成合法状态', () => {
  const engine = reach(new StoryEngine(fixture()), 'end3_solo', { route: 4 });
  engine.state.flags.injected = true;
  unchanged(engine, () => engine.replayChoice('route'));
});

let failures = 0;
for (const { name, run } of tests) {
  try { run(); console.log('✓ ' + name); }
  catch (error) { failures++; console.error('✗ ' + name); console.error(error); }
}
console.log(`\n${tests.length - failures}/${tests.length} 三章播放器测试通过。`);
if (failures) process.exitCode = 1;
