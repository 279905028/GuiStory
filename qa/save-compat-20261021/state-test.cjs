'use strict';

// 本轮独立状态验收：只读取正式文件与历史基线，不接触浏览器及玩家存储。
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const assert = require('node:assert/strict');
const { story, baseline: originalV04, StoryEngine, analyze, reach } = require('../heroine-background-20261020/story-test.cjs');
const { CONTENT_VERSION, restore } = require('../../save-compat.js');
const root = path.resolve(__dirname, '../..');
const parseStory = text => JSON.parse(text.slice(text.indexOf('{'), text.lastIndexOf('}') + 1));
const previous = parseStory(fs.readFileSync(path.join(__dirname, '../chapter3-followup-20261021/before/story.js'), 'utf8'));
const clone = value => structuredClone(value);
const changes = {
  preview_xiaoman_visit_01: {
    before: '图看完了。明天没东西要修，我还能来坐会儿吗？',
    after: '图看完了。哪天没东西要修，我还能来坐会儿吗？'
  },
  ch2_cut_join_04: {
    before: '散场时，孟遥把相机装回包里。我替她撑着门，她走过门槛，又转身叫了我一声。',
    after: '散场时，孟遥关好相机，让它垂在身前。我替她撑着门，她走过门槛，又转身叫了我一声。'
  }
};
const tracked = ['story.js', 'engine.js', 'save-compat.js'];
const fingerprints = () => Object.fromEntries(tracked.map(file => [file,
  crypto.createHash('sha256').update(fs.readFileSync(path.join(root, file))).digest('hex')]));
const report = {
  startedAt: new Date().toISOString(), pass: false, checks: [],
  initialFingerprints: fingerprints(), finalFingerprints: null,
  limitations: [
    '1265个自然生成见证存档覆盖全部可见节点，不代表全部玩家存档或逐条合法路径的迁移比例。',
    '本脚本只验收剧情状态兼容；浏览器存储保护、用户界面与版本封装由独立浏览器检查覆盖。',
    '旧v0.4拒绝验证使用已含背景版路径差异的自然样本；尚未经过变化节点且字面相同的状态无法据此识别来源。'
  ]
};
const incompatible = /存档不兼容或已损坏/;
function check(name, run) {
  const detail = run();
  report.checks.push({ name, pass: true, detail });
  console.log('PASS ' + name);
}
function freeze(value) {
  if (value && typeof value === 'object' && !Object.isFrozen(value)) {
    for (const member of Object.values(value)) freeze(member);
    Object.freeze(value);
  }
  return value;
}
function preservedRestore(source, input, version) {
  const before = clone(input);
  const result = restore(source, input, version);
  assert.deepEqual(input, before, '兼容处理不得改写传入快照');
  return result;
}
function expectRejected(name, input, source = story, version, strictTarget) {
  const before = clone(input);
  assert.throws(() => restore(source, input, version), incompatible, name);
  assert.deepEqual(input, before, name + '：拒绝后输入应不变');
  if (strictTarget) {
    const liveBefore = strictTarget.snapshot();
    assert.throws(() => strictTarget.restore(input), incompatible, name + '：严格引擎仍拒绝');
    assert.deepEqual(strictTarget.snapshot(), liveBefore, name + '：失败不改变当前进度');
  }
}
function rewindToEnd(engine) {
  for (let step = 0; step <= Object.keys(story.nodes).length; step++) {
    const node = engine.current();
    if (node.type === 'end' && !node.next) return engine;
    if (node.type === 'choice') assert(engine.choose(engine.availableChoices()[0].index));
    else assert(engine.advance());
  }
  throw new Error('后日谈未在节点总数内结束');
}

try {
  let graph;
  const examples = {};
  check('旧版基线恰好只差两句，剧情结构及严格引擎保持', () => {
    assert.equal(CONTENT_VERSION, 2);
    const expected = clone(previous);
    for (const [id, change] of Object.entries(changes)) {
      assert.equal(previous.nodes[id].text, change.before, id);
      assert.equal(story.nodes[id].text, change.after, id);
      expected.nodes[id].text = change.after;
    }
    assert.deepEqual(story, expected);
    assert.deepEqual(fs.readFileSync(path.join(root, 'engine.js')),
      fs.readFileSync(path.join(__dirname, '../chapter3-followup-20261021/before/engine.js')));
    graph = analyze(story);
    assert.equal(graph.paths, 246528);
    assert.equal(graph.reachableNodes, 1310);
    return { changedNodeIds: Object.keys(changes), reachableNodes: graph.reachableNodes, paths: graph.paths, strictEngineUnchanged: true };
  });

  check('1265个自然见证旧档迁移与当前版往返；输入保持不变', () => {
    const counts = { visible: 0, migrated: 0, unchanged: 0, currentUnmarked: 0, currentVersion2: 0, migratedVersion2: 0, version2RejectsLegacy: 0 };
    for (const [id, decisions] of graph.witnesses) {
      if (story.nodes[id].type === 'gate') continue;
      const current = freeze(reach(id, decisions).snapshot());
      const old = freeze(reach(id, decisions, previous).snapshot());
      const affectedIds = Object.keys(changes).filter(key => old.history.some(entry => entry.nodeId === key));
      const affected = affectedIds.length > 0;
      for (const version of [undefined, CONTENT_VERSION]) {
        const restored = preservedRestore(story, current, version);
        assert.equal(restored.migrated, false, id + ' 当前版不应迁移');
        assert.deepEqual(restored.restored.snapshot(), current, id + ' 当前版应精确往返');
        if (version === undefined) counts.currentUnmarked++;
        else counts.currentVersion2++;
      }
      const result = preservedRestore(story, old);
      assert.equal(result.migrated, affected, id + ' 迁移判定');
      assert.deepEqual(result.restored.snapshot(), current, id + ' 应恢复为当前正文下同一进度');
      assert.deepEqual(result.restored.state.choices, old.choices, id + ' 选择轨迹应保留');
      assert.deepEqual(result.restored.state.flags, old.flags, id + ' 标记应保留');
      assert.deepEqual(result.restored.availableChoices(), reach(id, decisions).availableChoices(), id + ' 可用选项应保留');
      if (affected) {
        assert.throws(() => new StoryEngine(story, old), incompatible, id + ' 严格引擎不接受旧文本');
        expectRejected(id + ' 已标记新版不得接受旧正文', old, story, CONTENT_VERSION);
        counts.version2RejectsLegacy++;
        const migrated = preservedRestore(story, result.restored.snapshot(), CONTENT_VERSION);
        assert.equal(migrated.migrated, false);
        assert.deepEqual(migrated.restored.snapshot(), current);
        counts.migratedVersion2++;
        counts.migrated++;
        const key = affectedIds.join(',');
        examples[key] ||= { old: clone(old), current: clone(current), decisions: clone(decisions) };
      } else {
        assert.deepEqual(preservedRestore(story, old, CONTENT_VERSION).restored.snapshot(), current);
        counts.unchanged++;
      }
      counts.visible++;
      if (counts.visible % 250 === 0) console.log('自然见证已校验 ' + counts.visible);
    }
    assert.deepEqual(counts, { visible: 1265, migrated: 864, unchanged: 401, currentUnmarked: 1265, currentVersion2: 1265, migratedVersion2: 864, version2RejectsLegacy: 864 });
    return counts;
  });

  const both = examples[Object.keys(changes).join(',')];
  assert(both, '应存在经过两处改写的自然旧档');
  const old = both.old;
  const current = both.current;

  check('白名单逐句精确匹配；两版拼接、未知对白及版本标记均拒绝', () => {
    const cases = [];
    for (const id of Object.keys(changes)) {
      const mixedOld = clone(old);
      mixedOld.history.find(entry => entry.nodeId === id).text = changes[id].after;
      cases.push(['旧轨迹只更新其中一句：' + id, mixedOld]);
      const mixedCurrent = clone(current);
      mixedCurrent.history.find(entry => entry.nodeId === id).text = changes[id].before;
      cases.push(['新轨迹只回退其中一句：' + id, mixedCurrent]);
      const unknown = clone(old);
      unknown.history.find(entry => entry.nodeId === id).text += '未知文本';
      cases.push(['白名单节点未知文本：' + id, unknown]);
    }
    const unrelated = clone(old);
    unrelated.history[0].text += '非白名单改写';
    cases.push(['非白名单对白改写', unrelated]);
    const wrongNode = clone(old);
    wrongNode.history[0].text = changes.preview_xiaoman_visit_01.before;
    cases.push(['旧句放到其他节点', wrongNode]);
    for (const [name, saved] of cases) expectRejected(name, saved);
    const versions = [null, 0, 1, 3, '2', false, {}, [], NaN];
    for (const version of versions) {
      expectRejected('未知内容版本：' + String(version), current, story, version);
      expectRejected('旧档未知内容版本：' + String(version), old, story, version);
    }
    return { rejectedTextCases: cases.map(([name]) => name), rejectedContentVersions: ['null', '0', '1', '3', 'string 2', 'false', 'object', 'array', 'NaN'] };
  });

  check('状态损坏、历史与选择伪造、检查点异常均拒绝且不改变进度', () => {
    const invalidStates = [undefined, null, [], '', 0, false, {}];
    for (const saved of invalidStates) {
      expectRejected('无效状态结构：' + String(saved), saved);
      expectRejected('新版无效状态结构：' + String(saved), saved, story, CONTENT_VERSION);
    }
    const mutations = [
      ['状态多字段', saved => { saved.extra = true; }],
      ['状态版本错误', saved => { saved.version = 2; }],
      ['当前节点不存在', saved => { saved.nodeId = 'missing'; }],
      ['当前节点改为其他路径', saved => { saved.nodeId = 'end_ch3_huangqiuqiu'; }],
      ['flags注入', saved => { saved.flags.injected = true; }],
      ['flags缺失', saved => { delete saved.flags[Object.keys(saved.flags)[0]]; }],
      ['history缺首句', saved => { saved.history.shift(); }],
      ['history重复', saved => { saved.history.splice(1, 0, clone(saved.history[0])); }],
      ['history顺序错误', saved => { [saved.history[0], saved.history[1]] = [saved.history[1], saved.history[0]]; }],
      ['history场景错误', saved => { saved.history[0].scene = 'missing'; }],
      ['history说话人错误', saved => { saved.history[0].speaker = '伪造'; }],
      ['history多字段', saved => { saved.history[0].extra = '伪造'; }],
      ['history kind错误', saved => { saved.history[0].kind = 'choice'; }],
      ['choices缺失', saved => { saved.choices.pop(); }],
      ['choices标签伪造', saved => { saved.choices[0].label += '伪造'; }],
      ['choices值伪造', saved => { saved.choices[0].value = 'missing'; }],
      ['choices重复', saved => { saved.choices.push(clone(saved.choices[0])); }],
      ['检查点非对象', saved => { saved.previewCheckpoint = 'c6'; }],
      ['检查点节点错误', saved => { saved.previewCheckpoint.nodeId = story.start; }],
      ['检查点history缺首句', saved => { saved.previewCheckpoint.history.shift(); }],
      ['检查点未知文本', saved => { saved.previewCheckpoint.history[0].text += '未知'; }],
      ['检查点flags注入', saved => { saved.previewCheckpoint.flags.preview = 'xiaoman'; }],
      ['检查点choices缺失', saved => { saved.previewCheckpoint.choices.pop(); }],
      ['检查点伪造旧句', saved => { saved.previewCheckpoint.history[0].text = changes.preview_xiaoman_visit_01.before; }],
      ['检查点递归嵌套', saved => { saved.previewCheckpoint.previewCheckpoint = clone(saved.previewCheckpoint); }],
      ['检查点循环引用', saved => { saved.previewCheckpoint.previewCheckpoint = saved.previewCheckpoint; }]
    ];
    const live = new StoryEngine(story, current);
    for (const [name, mutate] of mutations) {
      for (const [label, base] of [['旧版', old], ['新版', current]]) {
        const saved = clone(base);
        mutate(saved);
        expectRejected(label + ' ' + name, saved, story, undefined, live);
      }
    }
    return { rejectedCases: mutations.length * 2, invalidStateCases: invalidStates.length * 2,
      cases: mutations.map(([name]) => name), strictRestoreAtomic: true };
  });

  check('补丁只适用指定当前正文；原v0.4差异路径与未来版本拒绝', () => {
    const guarded = [];
    for (const [name, change] of [
      ['内容修订标记已变', source => { source.contentRevision = 'future'; }],
      ['目标现文已改', source => { source.nodes.preview_xiaoman_visit_01.text += '后续改写'; }],
      ['目标场景已改', source => { source.nodes.preview_xiaoman_visit_01.scene = 's1'; }],
      ['目标说话人已改', source => { source.nodes.preview_xiaoman_visit_01.speaker = 'narrator'; }],
      ['目标类型已改', source => { source.nodes.preview_xiaoman_visit_01.type = 'end'; }]
    ]) {
      const source = clone(story);
      change(source);
      expectRejected(name, old, source);
      guarded.push(name);
    }
    const target = 'end_ch3_xiaoman';
    const older = reach(target, graph.witnesses.get(target), originalV04).snapshot();
    assert.notDeepEqual(older.history, reach(target, graph.witnesses.get(target), previous).snapshot().history);
    expectRejected('原v0.4已经过不同背景路径', older);
    return { guarded, originalV04RejectedAt: target };
  });

  check('缺省检查点可重建；迁移输出无共享引用，回顾保持当前正文', () => {
    for (const kind of ['missing', 'null']) {
      const saved = clone(old);
      if (kind === 'missing') delete saved.previewCheckpoint;
      else saved.previewCheckpoint = null;
      const result = preservedRestore(story, saved);
      assert.equal(result.migrated, true);
      assert.deepEqual(result.restored.snapshot(), current);
    }
    const mutable = clone(old);
    const result = preservedRestore(story, mutable);
    mutable.flags.external = true;
    mutable.history[0].text = '调用方外部修改';
    mutable.choices[0].label = '调用方外部修改';
    mutable.previewCheckpoint.history.length = 0;
    assert.deepEqual(result.restored.snapshot(), current);
    for (const [id, change] of Object.entries(changes)) {
      assert.equal(result.restored.state.history.find(entry => entry.nodeId === id).text, change.after);
    }
    const returned = result.restored.snapshot();
    returned.history[0].text = '快照外部修改';
    assert.deepEqual(result.restored.snapshot(), current);
    return { reconstructedCheckpointForms: ['missing', 'null'], inputAndSnapshotReferencesIsolated: true, currentHistoryText: true };
  });

  check('隐藏资格、预告与路线重选、七条路线后日谈保持', () => {
    const hiddenCases = [];
    for (const [signal, reply, eligible] of [['record', 'reply', true], ['record', 'finish', false], ['work', 'reply', false], ['work', 'finish', false]]) {
      const decisions = { h1: signal, h2: reply, c6: 'xiaoman' };
      const target = 'preview_xiaoman_visit_01';
      const saved = reach(target, decisions, previous).snapshot();
      const migrated = preservedRestore(story, saved);
      assert.equal(migrated.migrated, true);
      assert(migrated.restored.replayPreview());
      assert.equal(migrated.restored.current().id, story.previewChoice);
      const available = migrated.restored.availableChoices();
      assert.equal(available.some(item => item.option.value === 'huangqiuqiu'), eligible);
      const hiddenIndex = story.nodes[story.previewChoice].choices.findIndex(option => option.value === 'huangqiuqiu');
      const before = migrated.restored.snapshot();
      assert.equal(migrated.restored.choose(hiddenIndex), eligible);
      if (!eligible) assert.deepEqual(migrated.restored.snapshot(), before);
      hiddenCases.push({ signal, reply, eligible, optionCount: available.length });
    }
    const routes = [];
    for (const option of story.nodes[story.routeChoice].choices) {
      const target = 'end_ch3_' + option.value;
      const decisions = graph.witnesses.get(target);
      const result = preservedRestore(story, reach(target, decisions, previous).snapshot());
      const reference = reach(target, decisions);
      assert.deepEqual(result.restored.snapshot(), reference.snapshot());
      const end = rewindToEnd(result.restored);
      const referenceEnd = rewindToEnd(reference);
      assert.deepEqual(end.snapshot(), referenceEnd.snapshot());
      assert(end.replayChoice(story.routeChoice));
      assert.equal(end.current().id, story.routeChoice);
      assert.equal(end.state.flags.route, undefined);
      assert.equal(end.state.flags.piaoRelationship, undefined);
      assert.deepEqual(preservedRestore(story, end.snapshot(), CONTENT_VERSION).restored.snapshot(), end.snapshot());
      assert(end.replayPreview());
      assert.equal(end.current().id, story.previewChoice);
      assert.equal(end.state.flags.preview, undefined);
      assert.equal(end.state.flags.route, undefined);
      assert.equal(end.state.flags.piaoRelationship, undefined);
      routes.push(option.value);
    }
    assert.equal(routes.length, 7);
    return { hiddenCases, routes, routeAndRelationshipFlagsClearedOnReplay: true };
  });

  assert.deepEqual(fingerprints(), report.initialFingerprints, '测试期间正式剧情、引擎或兼容模块变化，需要重新验收');
  report.pass = true;
} catch (error) {
  report.error = error.stack;
  process.exitCode = 1;
  console.error(error);
} finally {
  report.finishedAt = new Date().toISOString();
  report.finalFingerprints = fingerprints();
  fs.writeFileSync(path.join(__dirname, 'state-results.json'), JSON.stringify(report, null, 2) + '\n');
  console.log(JSON.stringify({ pass: report.pass, checks: report.checks.length, report: path.join(__dirname, 'state-results.json') }));
}
