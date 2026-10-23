'use strict';

// 只在内存组合十章候选与 Map 存储；不连接浏览器、不读写玩家存档。
const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const { root, contract, createStory, reach, finish, clone } = require('./fixture.cjs');
const { StoryEngine } = require(path.join(root, 'engine.js'));
const saves = require(path.join(root, 'save-compat.js'));
const checks = [];
const check = (name, run) => {
  const detail = run();
  checks.push({ name, pass: true, detail });
  console.log('PASS ' + name);
};
const freeze = value => {
  if (value && typeof value === 'object' && !Object.isFrozen(value)) {
    Object.values(value).forEach(freeze);
    Object.freeze(value);
  }
  return value;
};
const story = createStory();
const expected = {
  contentVersion: 1, engineStateVersion: 1,
  contractVersion: '1.0.0', contentRevision: 'nightshift-20261022-r1'
};
const namespace = 'bijie-rain-demo:ten-chapter:nightshift-20261022-r1:';
const selections = { qiuSignal: 'record', qiuReply: 'reply', route: 'huangqiuqiu' };
const envelope = state => ({ format: 1, ...saves.metadata(story), state: clone(state) });
const restore = save => saves.restore(story, save.state, save.contentVersion, save);
const damaged = /存档不兼容或已损坏/;
const snapshots = [];

check('十章与旧版存档空间及三种版本严格分开', () => {
  const profile = saves.getProfile(story);
  assert.deepEqual(profile, { namespace, tenChapter: true, metadata: expected });
  assert.equal(profile.namespace, contract.interface.save.namespace);
  for (const key of ['contentVersion', 'engineStateVersion', 'contractVersion']) {
    assert.equal(profile.metadata[key], contract.interface.save[key]);
  }
  profile.metadata.contentVersion = 999;
  assert.deepEqual(saves.metadata(story), expected, '调用方不能改写后续存档元信息');
  const source = fs.readFileSync(path.join(root, 'story.js'), 'utf8');
  const legacy = JSON.parse(source.slice(source.indexOf('{'), source.lastIndexOf('}') + 1));
  assert.deepEqual(saves.getProfile(legacy), {
    namespace: 'bijie-rain-demo:v0.4-background:', tenChapter: false, metadata: { contentVersion: 2 }
  });
  assert.equal(saves.CONTENT_VERSION, 2, '保留旧调用方的公开版本常量');
  const state = new StoryEngine(legacy).snapshot();
  for (const version of [undefined, 2]) {
    const result = saves.restore(legacy, state, version);
    assert.equal(result.migrated, false);
    assert.deepEqual(result.restored.snapshot(), state);
  }
  return { tenChapter: namespace, legacy: saves.getProfile(legacy).namespace, metadata: expected };
});

check('真实十章关键节点经 JSON 信封保存恢复，原始状态保持不变', () => {
  const engine = new StoryEngine(story);
  snapshots.push(engine.snapshot());
  for (const target of ['tc_c02_common_qiu_met', 'tc_c03_common_route_choice',
    'tc_c08_huangqiuqiu_entry', 'tc_c08_huangqiuqiu_human_reveal']) {
    reach(engine, target, selections);
    snapshots.push(engine.snapshot());
  }
  assert.equal(snapshots[1].flags.qiuMet, true);
  assert.equal(snapshots[3].flags.qiuForm, 'sphere');
  assert.equal(snapshots[4].flags.qiuForm, 'human');
  for (const relationship of ['dating', 'friends']) {
    const branch = new StoryEngine(story, snapshots[4]);
    finish(branch, { ...selections, huangqiuqiuRelationship: relationship });
    snapshots.push(branch.snapshot());
  }
  for (const state of snapshots) {
    const saved = freeze(JSON.parse(JSON.stringify(envelope(state))));
    const before = JSON.stringify(saved);
    const result = restore(saved);
    assert.equal(result.migrated, false);
    assert.deepEqual(result.restored.snapshot(), state);
    assert.equal(JSON.stringify(saved), before);
    assert.throws(() => saves.restore(story, saved.state, saved.contentVersion), damaged,
      '单独内容版本不能代替十章完整信封');
  }
  return { snapshots: snapshots.map(state => ({ nodeId: state.nodeId, qiuMet: state.flags.qiuMet, qiuForm: state.flags.qiuForm })) };
});

check('缺失、类型错误、继承或不匹配的版本信息全部拒绝', () => {
  const saved = envelope(snapshots.at(-1));
  let rejected = 0;
  for (const key of Object.keys(expected)) {
    for (const replacement of [undefined, null, typeof expected[key] === 'number' ? String(expected[key]) : 1,
      typeof expected[key] === 'number' ? expected[key] + 1 : expected[key] + '-changed']) {
      const input = clone(saved);
      if (replacement === undefined) delete input[key];
      else input[key] = replacement;
      const before = clone(input);
      assert.throws(() => restore(input), damaged, key + ':' + String(replacement));
      assert.deepEqual(input, before);
      rejected++;
    }
  }
  const inherited = Object.assign(Object.create(expected), { state: clone(saved.state) });
  assert.throws(() => saves.restore(story, inherited.state, 1, inherited), damaged);
  rejected++;
  for (const version of [undefined, null, 2, '1']) {
    assert.throws(() => saves.restore(story, saved.state, version, saved), damaged);
    rejected++;
  }
  for (const stateVersion of [undefined, '1', 2]) {
    const input = clone(saved);
    if (stateVersion === undefined) delete input.state.version;
    else input.state.version = stateVersion;
    assert.throws(() => restore(input), damaged);
    rejected++;
  }
  return { rejected };
});

check('合法版本不能掩盖伪造形态、关系、历史或检查点', () => {
  const cases = [
    ['未相识伪造资格', snapshots[0], state => { state.flags.qiuMet = true; }],
    ['变身前伪造人形', snapshots[3], state => { state.flags.qiuForm = 'human'; }],
    ['变身后伪造球形', snapshots[4], state => { state.flags.qiuForm = 'sphere'; }],
    ['伪造恋人关系', snapshots[4], state => { state.flags.huangqiuqiuRelationship = 'dating'; }],
    ['篡改已读文本', snapshots[4], state => { state.history.at(-1).text += '伪造'; }],
    ['删除选择轨迹', snapshots[4], state => { state.choices.pop(); }],
    ['注入检查点', snapshots[4], state => { state.previewCheckpoint = clone(snapshots[0]); }]
  ];
  for (const [name, original, mutate] of cases) {
    const saved = envelope(original);
    mutate(saved.state);
    const before = clone(saved);
    assert.throws(() => restore(freeze(saved)), damaged, name);
    assert.deepEqual(saved, before, name + '失败不得改写原档');
  }
  return { rejected: cases.map(([name]) => name) };
});

check('不完整十章标识拒绝启动，不会回退旧存档空间', () => {
  let rejected = 0;
  for (const key of ['contractVersion', 'contentRevision', 'requiredCapabilities', 'initialFlags']) {
    const input = clone(story);
    delete input[key];
    assert.throws(() => saves.getProfile(input), /剧情|契约|能力|初始|版本/);
    rejected++;
  }
  for (const [key, value] of [['contractVersion', '2.0.0'], ['contentRevision', 'nightshift-next'],
    ['version', 2], ['requiredCapabilities', ['unsupported-future-capability']]]) {
    const input = clone(story);
    input[key] = value;
    assert.throws(() => saves.getProfile(input), /剧情|契约|能力|初始|版本/);
    rejected++;
  }
  // 全部元数据被去掉时，tc_ 入口仍须被识别为十章，不能读取旧空间。
  const stripped = clone(story);
  for (const key of ['contractVersion', 'contentRevision', 'requiredCapabilities', 'initialFlags', 'release']) delete stripped[key];
  assert.throws(() => saves.getProfile(stripped), /剧情|契约|版本/);
  return { rejected: rejected + 1 };
});

check('旧两句补丁保留，已标记版本与十章均不使用该迁移', () => {
  const changes = [
    { id: 'preview_xiaoman_visit_01', scene: 's10', speaker: 'wenwen',
      before: '图看完了。明天没东西要修，我还能来坐会儿吗？',
      after: '图看完了。哪天没东西要修，我还能来坐会儿吗？' },
    { id: 'ch2_cut_join_04', scene: 'ch2_edit', speaker: 'narrator',
      before: '散场时，孟遥把相机装回包里。我替她撑着门，她走过门槛，又转身叫了我一声。',
      after: '散场时，孟遥关好相机，让它垂在身前。我替她撑着门，她走过门槛，又转身叫了我一声。' }
  ];
  const legacy = {
    version: 1, contentRevision: 'background-20261020', start: changes[0].id, previewChoice: null,
    nodes: Object.fromEntries(changes.map((item, index) => [item.id, {
      id: item.id, type: 'line', scene: item.scene, speaker: item.speaker, text: item.after,
      next: changes[index + 1]?.id || 'legacy_end'
    }]))
  };
  legacy.nodes.legacy_end = { id: 'legacy_end', type: 'end' };
  const previous = clone(legacy);
  for (const item of changes) previous.nodes[item.id].text = item.before;
  const oldState = finish(new StoryEngine(previous)).snapshot();
  const expectedState = finish(new StoryEngine(legacy)).snapshot();
  const result = saves.restore(legacy, freeze(oldState));
  assert.equal(result.migrated, true);
  assert.deepEqual(result.restored.snapshot(), expectedState);
  assert.throws(() => saves.restore(legacy, oldState, 2), damaged);
  assert.throws(() => saves.restore(story, oldState, 1, { ...expected, state: oldState }), damaged);
  return { migratedLegacy: true, versionedLegacyRejected: true, tenChapterRejectsLegacy: true };
});

check('内存隔离存储只访问新空间，旧空间哨兵逐字节保持', () => {
  const oldKeys = ['bijie-rain-demo:v1:auto', 'bijie-rain-demo:v0.3:auto',
    'bijie-rain-demo:v0.4:auto', 'bijie-rain-demo:v0.4-background:auto'];
  const storage = new Map(oldKeys.map(key => [key, '{旧原始字符串:' + key]));
  const before = oldKeys.map(key => storage.get(key));
  const accessed = [];
  const newKey = saves.getProfile(story).namespace + 'auto';
  const write = (key, value) => { accessed.push(['write', key]); storage.set(key, value); };
  const read = key => { accessed.push(['read', key]); return storage.get(key); };
  write(newKey, JSON.stringify(envelope(snapshots[4])));
  const result = restore(JSON.parse(read(newKey)));
  assert.equal(result.restored.state.flags.qiuForm, 'human');
  assert(accessed.every(([, key]) => key.startsWith(namespace)));
  assert.deepEqual(oldKeys.map(key => storage.get(key)), before);
  return { accessed, preservedOldKeys: oldKeys, storage: 'fresh in-memory Map only; browser storage untouched' };
});

console.log(JSON.stringify({
  status: 'passed', scope: 'E08 save metadata and deterministic restore using isolated ten-chapter candidate',
  checks, formalIntegration: false,
  notValidated: ['正式十章接入', '真实浏览器玩家存档', 'E09演出与资源', '实体手机、声音与真人阅读', '发布']
}, null, 2));
