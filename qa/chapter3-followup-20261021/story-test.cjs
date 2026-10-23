'use strict';
const fs = require('node:fs'), path = require('node:path'), assert = require('node:assert/strict');
const crypto = require('node:crypto');
const { story, reach, analyze, StoryEngine } = require('../heroine-background-20261020/story-test.cjs');
const root = path.resolve(__dirname, '../..');
const raw = fs.readFileSync(path.join(__dirname, 'before/story.js'), 'utf8');
const before = JSON.parse(raw.slice(raw.indexOf('{'), raw.lastIndexOf('}') + 1));
const changes = {
  preview_xiaoman_visit_01: '图看完了。哪天没东西要修，我还能来坐会儿吗？',
  ch2_cut_join_04: '散场时，孟遥关好相机，让它垂在身前。我替她撑着门，她走过门槛，又转身叫了我一声。'
};
const report = { date: new Date().toISOString(), checks: [], limitations: ['路径为等价状态图分析，不是逐路径浏览器点击。', '旧存档只做自然生成样本验证，不代表所有玩家存档的兼容率。'] };
function check(name, detail) { report.checks.push({ name, pass: true, detail }); console.log('PASS ' + name); }
const expected = structuredClone(before);
for (const [id, text] of Object.entries(changes)) expected.nodes[id].text = text;
assert.deepEqual(story, expected, '本轮只允许两条指定对白变化，保留其他最新内容');
assert.equal(Object.keys(story.nodes).length, 1310);
assert.equal(Object.keys(story.scenes).length, 43);
check('只修正两句衔接，全部既有剧情、人物、选项、背景与CG保持', { ids: Object.keys(changes) });

const graph = analyze(story), baselineGraph = analyze(before);
assert.equal(graph.paths, 246528);
assert.equal(graph.paths, baselineGraph.paths);
assert.deepEqual(graph.terminalCounts, baselineGraph.terminalCounts);
check('正式剧情全图可达、无环、隐藏条件及关系后日谈保持', { ...graph, witnesses: undefined });

let restored = 0, oldAccepted = 0, oldRejected = 0;
for (const [id, decisions] of graph.witnesses) {
  if (story.nodes[id].type === 'gate') continue;
  const current = reach(id, decisions), snapshot = current.snapshot();
  assert.deepEqual(new StoryEngine(story, snapshot).snapshot(), snapshot, id);
  restored++;
  const old = reach(id, decisions, before).snapshot();
  const affected = old.history.some(h => Object.hasOwn(changes, h.nodeId));
  if (affected) {
    assert.throws(() => current.restore(old), /存档不兼容或已损坏/);
    assert.deepEqual(current.snapshot(), snapshot, id + ' 失败恢复应原子回退');
    oldRejected++;
  } else {
    assert.deepEqual(new StoryEngine(story, old).snapshot(), old, id);
    oldAccepted++;
  }
}
assert.equal(restored, 1265);
check('全部可见节点自然回放恢复；受影响旧档被严格拒绝且不改变当前状态', { restored, oldAccepted, oldRejected });

const routeChoice = story.nodes[story.routeChoice];
for (const route of routeChoice.choices) {
  const endId = 'end_ch3_' + route.value;
  const e = reach(endId, graph.witnesses.get(endId));
  const chapter = new StoryEngine(story, e.snapshot());
  assert(chapter.advance());
  while (chapter.current().next || chapter.current().type === 'choice') {
    if (chapter.current().type === 'choice') chapter.choose(chapter.availableChoices()[0].index);
    else assert(chapter.advance());
  }
  assert(chapter.current().id.startsWith('end_piao_'));
  assert(chapter.replayChoice(story.routeChoice));
  assert.equal(chapter.state.flags.route, undefined);
  assert.equal(chapter.state.flags.piaoRelationship, undefined);
  assert(chapter.replayPreview());
  assert.equal(chapter.current().id, story.previewChoice);
}
check('七条第三章路线都能继续后日谈并重选，清除后续关系状态', { routes: routeChoice.choices.map(c => c.value) });

const manifest = JSON.parse(fs.readFileSync(path.join(root, 'assets/runtime-v0.4-manifest.json')));
const sha = buffer => crypto.createHash('sha256').update(buffer).digest('hex');
for (const item of manifest.assets) {
  const buffer = fs.readFileSync(path.join(root, item.path));
  assert.equal(buffer.length, item.bytes); assert.equal(sha(buffer), item.sha256);
}
assert.equal(manifest.assets.length, 93);
for (const file of ['game.js', 'engine.js', 'index.html']) {
  assert.deepEqual(fs.readFileSync(path.join(root, file)), fs.readFileSync(path.join(__dirname, 'before', file)), file);
}
const chapter2 = JSON.parse(fs.readFileSync(path.join(root, '任务拆分/三章扩展/chapter2.json')));
assert.equal(chapter2.nodes.ch2_cut_join_04.text, changes.ch2_cut_join_04);
assert(fs.readFileSync(path.join(root, '任务拆分/三章扩展/ch2_build.py'), 'utf8').includes(changes.ch2_cut_join_04));
assert(fs.readFileSync(path.join(root, '任务拆分/三章扩展/build-story.cjs'), 'utf8').includes(changes.preview_xiaoman_visit_01));
check('93张运行素材完整，章节源与正式版一致，播放器和引擎未改', { assets: manifest.assets.length });
report.fingerprints = Object.fromEntries(['story.js', 'engine.js', 'game.js', 'index.html', 'assets/runtime-v0.4-manifest.json'].map(f => [f, sha(fs.readFileSync(path.join(root, f)))]));
fs.writeFileSync(path.join(__dirname, 'story-results.json'), JSON.stringify(report, null, 2) + '\n');
console.log(JSON.stringify({ paths: graph.paths, restored, oldAccepted, oldRejected }));
