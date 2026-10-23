'use strict';

// 只读正式 story.js；不生成替代剧情，不安装依赖。
// 运行：node qa/story-test.cjs
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const crypto = require('node:crypto');

const root = path.resolve(__dirname, '..');
const storyFile = path.join(root, 'story.js');
const engineFile = path.join(root, 'engine.js');
const own = (object, key) => Object.prototype.hasOwnProperty.call(object, key);
const sorted = values => [...values].sort();
const copy = value => JSON.parse(JSON.stringify(value));
const han = text => (String(text).match(/\p{Script=Han}/gu) || []).length;
const range = values => [Math.min(...values), Math.max(...values)];
const sha256 = source => crypto.createHash('sha256').update(source).digest('hex');
const roles = ['wenwen', 'xiaoman', 'zhouzhi', 'mengyao', 'yelan', 'maolang', 'shijiang', 'huangqiuqiu'];
const backgrounds = ['street', 'repair', 'lobby', 'room', 'noodles', 'salon'];
const scenes = Array.from({ length: 10 }, (_, i) => 's' + (i + 1));
const order = ['h1', 'c1', 'c2', 'c3', 'c4', 'c5', 'h2', 'c6'];
const specs = {
  h1: { scene: 's2', flag: 'qiuSignal', values: ['record', 'work'] },
  c1: { scene: 's3', flag: 'ride', values: ['walk', 'taxi', 'leave'] },
  c2: { scene: 's4', flag: 'noodles', values: ['invite', 'space'] },
  c3: { scene: 's5', flag: 'salon', values: ['portfolio', 'model'] },
  c4: { scene: 's7', flag: 'reunion', values: ['apologize', 'appointment', 'joke'] },
  c5: { scene: 's8', flag: 'inventory', values: ['full', 'limited'] },
  h2: { scene: 's8', flag: 'qiuReply', values: ['reply', 'finish'] },
  c6: { scene: 's10', flag: 'preview', values: ['xiaoman', 'zhouzhi', 'mengyao', 'yelan', 'huangqiuqiu'] }
};
const endings = specs.c6.values.map(value => 'end_' + value);

function nonempty(value, label) {
  assert.equal(typeof value, 'string', label + ' 必须是字符串');
  assert.ok(value.trim().length, label + ' 不得为空');
}

function record(value, label) {
  assert.ok(value && typeof value === 'object' && !Array.isArray(value), label + ' 必须是对象');
}

function plainData(value, label = 'RAIN_STORY', seen = new Set()) {
  if (value === null || ['string', 'boolean'].includes(typeof value)) return;
  if (typeof value === 'number') return assert.ok(Number.isFinite(value), label + ' 非有限数字');
  assert.equal(typeof value, 'object', label + ' 必须是纯数据，不能包含函数或 undefined');
  assert.ok(!seen.has(value), label + ' 存在递归对象');
  seen.add(value);
  assert.ok(Array.isArray(value) || Object.prototype.toString.call(value) === '[object Object]', label + ' 非普通对象');
  for (const [key, item] of Object.entries(value)) plainData(item, label + '.' + key, seen);
  seen.delete(value);
}

function loadStory() {
  assert.ok(fs.existsSync(storyFile), '正式 story.js 尚不存在；不能把小型测试剧情通过当作正式剧情通过');
  const source = fs.readFileSync(storyFile, 'utf8');
  const context = { window: {} };
  new vm.Script(source, { filename: storyFile }).runInNewContext(context, { timeout: 2000 });
  assert.ok(context.window.RAIN_STORY, 'story.js 没有设置 window.RAIN_STORY');
  plainData(context.window.RAIN_STORY);
  const story = copy(context.window.RAIN_STORY);
  assert.ok(story.nodes?.h1 && story.nodes?.h2 && story.nodes?.c6?.choices?.length === 5,
    '正式 story.js 尚未达到 R2（H1/H2/第五收束）；本测试不通过，也不生成假的生产剧情');
  return { source, story };
}

function graphChecks(story) {
  assert.equal(story.version, 1, '剧情版本');
  assert.equal(story.title, '毕节，雨停之前');
  assert.equal(story.previewChoice, 'c6');
  for (const name of ['characters', 'backgrounds', 'scenes', 'nodes']) record(story[name], name);
  assert.deepEqual(sorted(Object.keys(story.characters)), sorted(roles), '8 个固定角色键');
  assert.deepEqual(sorted(Object.keys(story.backgrounds)), sorted(backgrounds), '6 个固定背景键');
  assert.deepEqual(sorted(Object.keys(story.scenes)), sorted(scenes), '10 个固定场景');
  assert.deepEqual(scenes.map(id => story.scenes[id].day), [1, 1, 3, 4, 5, 6, 7, 8, 10, 10]);
  const names = ['文文', '罗小满', '周栀', '孟遥', '叶岚', '毛狼', '师匠', '黄球球'];
  const ages = [23, 22, 25, 23, 27, 24, 32, 24];
  roles.forEach((key, index) => {
    const role = story.characters[key];
    assert.equal(role.name, names[index]);
    assert.equal(role.age, ages[index]);
    assert.equal(role.image, 'assets/char-' + key + '.png');
    assert.equal(role.presentation || 'human', key === 'huangqiuqiu' ? 'orb' : 'human');
    nonempty(role.color, key + '.color');
  });
  backgrounds.forEach(key => assert.equal(story.backgrounds[key], 'assets/bg-' + key + '.png'));
  for (const [id, scene] of Object.entries(story.scenes)) {
    for (const field of ['title', 'time', 'location']) nonempty(scene[field], id + '.' + field);
    assert.ok(backgrounds.includes(scene.bg), id + ' 非法背景');
  }
  const nodes = story.nodes;
  assert.ok(own(nodes, story.start), 'start 必须指向真实节点');
  const types = { line: 0, choice: 0, gate: 0, end: 0 };
  const references = node => node.type === 'line' ? [node.next] : node.type === 'choice'
    ? node.choices.map(option => option.next) : node.type === 'gate'
      ? [...node.cases.map(item => item.next), node.default] : [];
  const validCondition = (condition, label) => {
    record(condition, label);
    assert.ok(Object.values(specs).some(spec => condition.flag === spec.flag && spec.values.includes(condition.value)),
      label + ' 使用未知 flag/value');
  };
  for (const [id, node] of Object.entries(nodes)) {
    record(node, id);
    assert.equal(node.id, id, '节点键与 id 不一致：' + id);
    assert.ok(scenes.includes(node.scene), id + ' 非法场景');
    assert.ok(own(types, node.type), id + ' 非法节点类型');
    types[node.type]++;
    if (own(node, 'bg')) assert.ok(backgrounds.includes(node.bg), id + ' 非法覆盖背景');
    for (const field of ['time', 'location']) if (own(node, field)) nonempty(node[field], id + '.' + field);
    if (node.type !== 'gate' || own(node, 'character'))
      assert.ok(node.character === null || roles.includes(node.character), id + ' 非法立绘角色');
    if (node.type !== 'gate') {
      nonempty(node.text, id + '.text');
      assert.ok(!node.text.includes('陈野'), id + ' 残留旧主角名');
    }
    if (node.type === 'line') {
      nonempty(node.speaker, id + '.speaker');
      const chineseTitle = /^[\p{Script=Han}\p{P}\p{Zs}\p{N}]+$/u.test(node.speaker) && /\p{Script=Han}/u.test(node.speaker);
      assert.ok(node.speaker === 'narrator' || roles.includes(node.speaker) || chineseTitle, id + ' 非法说话人');
      if (node.speaker === '陌生的声音') assert.equal(node.character, null, id + ' 陌生声音不得提前显示立绘');
    }
    if (node.type === 'choice') {
      const spec = specs[id];
      assert.ok(spec, id + ' 多出契约以外选择');
      assert.equal(node.scene, spec.scene);
      assert.equal(node.flag, spec.flag);
      assert.ok(Array.isArray(node.choices), id + '.choices 必须为数组');
      assert.deepEqual(node.choices.map(option => option.value), spec.values, id + ' 选项值或顺序错误');
      assert.equal(new Set(node.choices.map(option => option.next)).size, node.choices.length, id + ' 分支没有独立入口');
      for (const [index, option] of node.choices.entries()) {
        nonempty(option.label, id + '.choices[' + index + '].label');
        if (own(option, 'requires')) {
          assert.ok(Array.isArray(option.requires), id + ' requires 必须为数组');
          option.requires.forEach(condition => validCondition(condition, id + '.requires'));
        }
        if (id !== 'c6' || index < 4) assert.equal((option.requires || []).length, 0, id + ' 常规选项必须始终可用');
      }
    }
    if (node.type === 'gate') {
      assert.ok(Array.isArray(node.cases) && node.cases.length, id + ' cases 必须是非空数组');
      node.cases.forEach(condition => validCondition(condition, id + '.cases'));
    }
    if (node.type === 'end') {
      assert.equal(node.scene, 's10');
      assert.ok(!own(node, 'next'), id + ' end 不得有 next');
      nonempty(node.title, id + '.title');
      nonempty(node.nextChapter, id + '.nextChapter');
      assert.ok(han(node.text) <= 120, id + ' end 超过120汉字');
    }
    references(node).forEach(target => {
      nonempty(target, id + ' 的目标');
      assert.ok(own(nodes, target), '断链：' + id + ' → ' + target);
    });
  }
  assert.equal(types.choice, 8);
  assert.equal(types.end, 5);
  assert.deepEqual(sorted(Object.values(nodes).filter(node => node.type === 'choice').map(node => node.id)), sorted(order));
  assert.deepEqual(sorted(Object.values(nodes).filter(node => node.type === 'end').map(node => node.id)), sorted(endings));
  assert.equal(nodes.c6.choices[4].label, '回复那个黄色头像');
  assert.deepEqual(nodes.c6.choices[4].requires, [
    { flag: 'qiuSignal', value: 'record' }, { flag: 'qiuReply', value: 'reply' }
  ]);
  assert.deepEqual(nodes.g_s10_signal.cases, [{ flag: 'qiuSignal', value: 'record', next: 'g_s10_reply' }]);
  assert.equal(nodes.g_s10_signal.default, 'c6');
  assert.deepEqual(nodes.g_s10_reply.cases, [{ flag: 'qiuReply', value: 'reply', next: 's10_anonymous_01' }]);
  assert.equal(nodes.g_s10_reply.default, 'c6');
  assert.deepEqual(nodes.h1.choices.map(option => option.label), [
    '先听完，把三拍节奏记进维修本。', '先登记明确故障，把声音留待复查。'
  ]);
  assert.deepEqual(nodes.h2.choices.map(option => option.label), [
    '试着用三下轻敲回应。', '收好工具，按约完成交接。'
  ]);
  // 从每个节点检查，包含不满足条件的边和孤立图，不能只检查某条可玩路线。
  const colors = new Map();
  function visit(id, trail) {
    assert.notEqual(colors.get(id), 1, '剧情循环：' + [...trail, id].join(' → '));
    if (colors.get(id) === 2) return;
    colors.set(id, 1);
    references(nodes[id]).forEach(target => visit(target, [...trail, id]));
    colors.set(id, 2);
  }
  Object.keys(nodes).forEach(id => visit(id, []));
  return types;
}

// 独立数据判定，不调用引擎过滤，以免引擎与测试共享同一个条件错误。
function available(node, flags) {
  return node.choices.flatMap((option, index) => (option.requires || []).every(condition =>
    own(flags, condition.flag) && flags[condition.flag] === condition.value) ? [{ index, option }] : []);
}

function enumerate(story) {
  const paths = [];
  function visit(id, flags, ids, selected, body, read) {
    const node = story.nodes[id];
    const chain = [...ids, id];
    assert.ok(chain.length <= Object.keys(story.nodes).length, '路径超出无环图最大长度');
    if (node.type === 'gate') {
      const matched = node.cases.find(condition => own(flags, condition.flag) && flags[condition.flag] === condition.value);
      return visit(matched ? matched.next : node.default, flags, chain, selected, body, read);
    }
    if (node.type === 'line') return visit(node.next, flags, chain, selected, body + han(node.text), read + han(node.text));
    if (node.type === 'choice') {
      const options = available(node, flags);
      assert.ok(options.length, id + ' 无可用选项，路径无法结束');
      for (const { index, option } of options) visit(option.next, { ...flags, [node.flag]: option.value }, chain,
        [...selected, { id, index, value: option.value }], body, read + han(node.text) + han(option.label));
      return;
    }
    paths.push({ end: id, flags, ids: chain, selected, body: body + han(node.text), read: read + han(node.text) });
    assert.ok(paths.length <= 10000, '合法路径异常膨胀，终止枚举');
  }
  visit(story.start, {}, [], [], 0, 0);
  return paths;
}

const numbered = (prefix, count, first = 1) => Array.from({ length: count }, (_, index) =>
  prefix + '_' + String(first + index).padStart(2, '0'));
// 独立列明 v0.1 已采用的回调契约，不从待测 gate/next 反推出预期结果。
const previewCallbacks = {
  xiaoman: { choice: 'c3', flag: 'salon', values: ['portfolio', 'model'], branchLength: 6,
    before: numbered('preview_xiaoman', 1), after: numbered('preview_xiaoman', 4, 2), pathsPerValue: 144 },
  zhouzhi: { choice: 'c2', flag: 'noodles', values: ['invite', 'space'], branchLength: 2,
    before: numbered('preview_zhouzhi', 5), after: numbered('preview_zhouzhi', 3, 6), pathsPerValue: 144 },
  mengyao: { choice: 'c4', flag: 'reunion', values: ['apologize', 'appointment', 'joke'], branchLength: 6,
    before: numbered('preview_mengyao', 2), after: [], pathsPerValue: 96 },
  yelan: { choice: 'c5', flag: 'inventory', values: ['full', 'limited'], branchLength: 3,
    before: numbered('preview_yelan', 1), after: numbered('preview_yelan', 10, 2), pathsPerValue: 144 }
};

function v01Checks(story, paths) {
  const nodes = story.nodes;
  const coverage = {};
  assert.deepEqual(sorted(Object.keys(nodes).filter(id => id.startsWith('g_preview_'))),
    sorted(Object.keys(previewCallbacks).map(role => 'g_preview_' + role)), 'v0.1 预告 gate 集合');
  for (const [role, spec] of Object.entries(previewCallbacks)) {
    const id = 'g_preview_' + role, gate = nodes[id];
    assert.equal(gate.type, 'gate', id + ' 必须是 gate');
    assert.equal(gate.scene, 's10', id + ' 必须在 s10');
    assert.deepEqual(gate.cases, spec.values.slice(0, -1).map(value => ({
      flag: spec.flag, value, next: `preview_${role}_${value}_01`
    })), id + ' 条件映射错误');
    assert.equal(gate.default, `preview_${role}_${spec.values.at(-1)}_01`, id + ' 默认回调错误');
    coverage[role] = Object.fromEntries(spec.values.map(value => [value, 0]));
  }

  // 仅固定关键语义锚点；普通润色不作全文快照比较。
  // s9_review_01—04 是师匠复核段，_05 已转为周栀说明自己的时间边界。
  const anchors = [
    ['s8_hours_01', 'narrator', /自己的工时补上/],
    ['s8_handoff_02', 'shijiang', /旧监听继续待查/],
    ['s9_review_01', 'shijiang', /昨天复查过.*杂音还没定位/],
    ['s9_review_02', 'narrator', /刚抄的筹备表.*倒写的数字/],
    ['s9_review_03', 'narrator', /照原单改正.*才签名/],
    ['s9_review_04', 'shijiang', /固定维护报价.*工时另算/],
    ['s9_review_05', 'zhouzhi', /问摊位/],
    ['s9_adjust_01', 'mengyao', /旧监听的声音段先撤下.*只定路线和时间/],
    ['s9_compete_02', 'maolang', /我也投了/],
    ['s9_compete_06', 'wenwen', /票.*早买了.*还没录用/],
    ['s9_compete_09', 'wenwen', /没结果.*也可能走/],
    ['s9_compete_10', 'narrator', /打开筹备群/],
    ['s9_compete_11', 'wenwen', /票早买了.*工作还没结果/],
    ['s9_compete_13', 'narrator', /桌子另一侧.*压低了声音/]
  ];
  for (const [id, speaker, meaning] of anchors) {
    assert.ok(nodes[id], 'v0.1 语义锚点缺失：' + id);
    assert.equal(nodes[id].type, 'line', 'v0.1 语义锚点类型：' + id);
    assert.equal(nodes[id].speaker, speaker, 'v0.1 语义锚点说话人：' + id);
    assert.match(nodes[id].text, meaning, 'v0.1 语义锚点内容：' + id);
  }
  // 旧 s9_compete_09—11 已是文文坦白及群消息，不再承担师匠反馈。
  for (const id of numbered('s9_compete', 3, 9))
    assert.notEqual(nodes[id].character, 'shijiang', 'v0.1 旧师匠锚点立绘：' + id);

  const exits = { s8_echo_record_03: 0, s8_echo_work_02: 0, s8_finish_04: 0 };
  for (const item of paths) {
    const f = item.flags;
    const label = item.selected.map(choice => choice.id + '=' + choice.value).join('/');
    const h2Tail = f.qiuReply === 'finish' ? numbered('s8_finish', 4)
      : ['g_s8_signal', ...numbered('s8_echo_' + f.qiuSignal, f.qiuSignal === 'record' ? 3 : 2)];
    const expectedS8 = [
      'c5', ...numbered('s8_' + f.inventory, 4), 's8_hours_01',
      ...numbered('s8_handoff', 6), 'h2', ...h2Tail, 's9_prepare_01'
    ];
    assert.deepEqual(item.ids.slice(item.ids.indexOf('c5'), item.ids.indexOf('s9_prepare_01') + 1),
      expectedS8, 'v0.1 s8 补工时/师匠复核/H2/离场顺序：' + label);
    exits[h2Tail.at(-1)]++;

    const expectedS9 = [
      ...numbered('s9_prepare', 5), 'g_s9_inventory',
      ...numbered('s9_inventory_' + f.inventory, f.inventory === 'full' ? 4 : 3),
      ...numbered('s9_review', 5), ...numbered('s9_adjust', 2), 'g_s9_noodles',
      ...numbered('s9_noodles_' + f.noodles, 3), 'g_s9_ride', 's9_ride_' + f.ride + '_01',
      'g_s9_salon', 's9_salon_' + f.salon + '_01', ...numbered('s9_ready', 4),
      ...numbered('s9_compete', 13), 'g_s9_reunion', ...numbered('s9_reunion_' + f.reunion, 2),
      ...numbered('s9_measure', 4)
    ];
    assert.deepEqual(item.ids.filter(id => nodes[id].scene === 's9'), expectedS9,
      'v0.1 s9 回调/师匠复核/缩减安排/公开坦白/私下接话顺序：' + label);

    const tail = item.ids.slice(item.ids.indexOf('c6') + 1);
    const spec = previewCallbacks[f.preview];
    if (!spec) {
      assert.equal(f.preview, 'huangqiuqiu', 'v0.1 未知预告');
      assert.ok(tail.every(id => !id.startsWith('g_preview_') &&
        !/^preview_(xiaoman|zhouzhi|mengyao|yelan)_/.test(id)), 'v0.1 隐藏预告混入常规回调');
      continue;
    }
    const role = f.preview, value = f[spec.flag], gate = 'g_preview_' + role;
    assert.ok(spec.values.includes(value), gate + ' 缺少合法前置选择');
    assert.ok(item.ids.indexOf(spec.choice) < item.ids.indexOf('c6'), gate + ' 必须晚于其前置选择');
    // 比较整个 C6 后片段，涵盖分支中途串线、漏句、合流点与其他角色预告误入。
    assert.deepEqual(tail, [...spec.before, gate, ...numbered(`preview_${role}_${value}`, spec.branchLength),
      ...spec.after, 'end_' + role], gate + ' 完整回调路径错误：' + label);
    coverage[role][value]++;
  }
  for (const [role, spec] of Object.entries(previewCallbacks)) for (const value of spec.values)
    assert.equal(coverage[role][value], spec.pathsPerValue, 'v0.1 预告覆盖数：' + role + '/' + value);
  assert.deepEqual(exits, { s8_echo_record_03: 360, s8_echo_work_02: 288, s8_finish_04: 576 });
  return { previewCallbackPaths: coverage, s8SequencePaths: paths.length, s9SequencePaths: paths.length,
    h2ExitPaths: exits, semanticAnchorCount: anchors.length };
}

// 只改内存副本：证明新断言能拦截真实路由/顺序回归，不能仅因通用字数检查失败就算检出。
function v01MutationChecks(story) {
  const mutations = [];
  for (const role of Object.keys(previewCallbacks)) {
    const gate = 'g_preview_' + role;
    mutations.push([gate + ' 取值串支', nodes => {
      nodes[gate].cases[0].value = previewCallbacks[role].values.at(-1);
    }, gate + ' 条件映射错误']);
    mutations.push([gate + ' 默认项误接', nodes => {
      nodes[gate].default = nodes[gate].cases[0].next;
    }, gate + ' 默认回调错误']);
    mutations.push([gate + ' 正文中途串支', nodes => {
      const [first, second] = previewCallbacks[role].values;
      nodes[`preview_${role}_${first}_01`].next = `preview_${role}_${second}_02`;
    }, gate + ' 完整回调路径错误']);
  }
  mutations.push(
    ['跳过师匠复核', nodes => { nodes.s9_inventory_full_04.next = 's9_adjust_01'; }, 'v0.1 s9 回调/'],
    ['师匠复核叙述倒序', nodes => {
      nodes.s9_review_01.next = 's9_review_03';
      nodes.s9_review_03.next = 's9_review_02';
      nodes.s9_review_02.next = 's9_review_04';
    }, 'v0.1 s9 回调/'],
    ['师匠复核迟于竞争坦白', nodes => {
      nodes.s9_inventory_full_04.next = nodes.s9_inventory_limited_03.next = 's9_adjust_01';
      nodes.s9_compete_13.next = 's9_review_01';
      nodes.s9_review_05.next = 'g_s9_reunion';
    }, 'v0.1 s9 回调/'],
    ['孟遥私下接话早于群消息', nodes => {
      nodes.s9_compete_08.next = 's9_compete_13';
      for (const value of ['apologize', 'appointment', 'joke'])
        nodes['s9_reunion_' + value + '_02'].next = 's9_compete_09';
      nodes.s9_compete_12.next = 's9_measure_01';
    }, 'v0.1 s9 回调/'],
    ['整单回调混入两小时经历', nodes => {
      nodes.s9_inventory_full_04.next = 's9_inventory_limited_01';
    }, 'v0.1 s9 回调/'],
    ['补工时晚于师匠交接', nodes => {
      nodes.s8_full_04.next = nodes.s8_limited_04.next = 's8_handoff_01';
      nodes.s8_handoff_04.next = 's8_hours_01';
      nodes.s8_hours_01.next = 's8_handoff_05';
    }, 'v0.1 s8 补工时/'],
    ['旧锚点回退为师匠', nodes => {
      nodes.s9_compete_09.speaker = nodes.s9_compete_09.character = 'shijiang';
    }, 'v0.1 语义锚点说话人：s9_compete_09'],
    ['复核误写设备已修好', nodes => {
      nodes.s9_review_01.text = nodes.s9_review_01.text.replace('杂音还没定位', '杂音已经排除');
    }, 'v0.1 语义锚点内容：s9_review_01']
  );
  const unchanged = JSON.stringify(story);
  for (const [name, mutate, expected] of mutations) {
    const changed = copy(story);
    mutate(changed.nodes);
    const changedPaths = enumerate(changed);
    assert.throws(() => v01Checks(changed, changedPaths), error =>
      error.code === 'ERR_ASSERTION' && error.message.includes(expected), '未被指定专项断言检出：' + name);
  }
  assert.equal(JSON.stringify(story), unchanged, '突变验证污染了正式剧情内存');
  return { rejected: mutations.length, cases: mutations.map(([name]) => name), sourceUnchanged: true };
}

function plotChecks(story, paths) {
  const nodes = story.nodes;
  assert.equal(paths.length, 1224, '合法完整路径总数');
  const ordinary = paths.filter(item => item.flags.preview !== 'huangqiuqiu');
  const hidden = paths.filter(item => item.flags.preview === 'huangqiuqiu');
  assert.equal(ordinary.length, 1152, '常规路径');
  assert.equal(hidden.length, 72, '隐藏路径');
  assert.equal(new Set(paths.flatMap(item => item.ids)).size, Object.keys(nodes).length, '存在合法路径无法到达的节点');
  const roleCoverage = Object.fromEntries(roles.map(role => [role, 0]));
  const callbackCoverage = Object.fromEntries(['c1', 'c2', 'c3', 'c4', 'c5'].map(id => [id,
    Object.fromEntries(specs[id].values.map(value => [value, 0]))]));
  const requireAfter = (item, id, predecessor) => {
    const index = item.ids.indexOf(id), before = item.ids.indexOf(predecessor);
    assert.ok(index >= 0, item.end + ' 缺回调节点 ' + id);
    assert.ok(before >= 0 && index > before, id + ' 必须在 ' + predecessor + ' 之后');
  };
  for (const item of paths) {
    const f = item.flags;
    assert.deepEqual(item.selected.map(choice => choice.id), order, '每路径必须经历七次前置与一次 C6');
    assert.deepEqual([...new Set(item.ids.map(id => nodes[id].scene))], scenes, '场景顺序');
    const visibleRoles = new Set(item.ids.flatMap(id => [nodes[id].speaker, nodes[id].character]).filter(key => roles.includes(key)));
    assert.deepEqual(sorted(visibleRoles), sorted(f.preview === 'huangqiuqiu' ? roles : roles.slice(0, 7)));
    visibleRoles.forEach(role => roleCoverage[role]++);
    for (const choice of item.selected) {
      const target = nodes[choice.id].choices[choice.index].next;
      assert.equal(item.ids[item.ids.indexOf(choice.id) + 1], target, choice.id + ' 没有进入所选前文分支');
    }
    const recalls = [
      ['c1', 'g_s5_ride', 's5_ride_' + f.ride + '_01'],
      ['c1', 'g_s9_ride', 's9_ride_' + f.ride + '_01'],
      ['c2', 'g_s6_noodles', f.noodles === 'invite' ? 's6_second_01' : 's6_first_01'],
      ['c2', 'g_s9_noodles', 's9_noodles_' + f.noodles + '_01'],
      ['c3', 'g_s9_salon', 's9_salon_' + f.salon + '_01'],
      ['c3', 'g_s10_salon', 's10_salon_' + f.salon + '_01'],
      ['c4', 'g_s9_reunion', 's9_reunion_' + f.reunion + '_01'],
      ['c4', 'g_s10_reunion', 's10_reunion_' + f.reunion + '_01'],
      ['c5', 'g_s9_inventory', 's9_inventory_' + f.inventory + '_01']
    ];
    for (const [choice, gate, recalled] of recalls) {
      requireAfter(item, gate, choice);
      requireAfter(item, recalled, gate);
      assert.equal(item.ids[item.ids.indexOf(gate) + 1], recalled, gate + ' 选错回调');
    }
    for (const id of Object.keys(callbackCoverage)) callbackCoverage[id][f[specs[id].flag]]++;
    for (const id of ['s2_counter_04', 's2_counter_06']) requireAfter(item, 'h1', id);
    requireAfter(item, 's8_handoff_04', 'c5');
    requireAfter(item, 'h2', 's8_handoff_04');
    // 新版师匠复核与竞争/坦白段的精确先后关系统一由 v01Checks 检查。
    if (f.qiuReply === 'reply') {
      requireAfter(item, 'g_s8_signal', 'h2');
      requireAfter(item, f.qiuSignal === 'record' ? 's8_echo_record_01' : 's8_echo_work_01', 'g_s8_signal');
    } else requireAfter(item, 's8_finish_01', 'h2');
    const unlocked = f.qiuSignal === 'record' && f.qiuReply === 'reply';
    for (const id of ['s10_anonymous_01', 's10_anonymous_02']) {
      assert.equal(item.ids.includes(id), unlocked, id + ' 的 AND 条件错误');
      assert.ok(['narrator', '陌生的声音'].includes(nodes[id].speaker), id + ' 匿名消息提前具名');
      assert.equal(nodes[id].character, null);
    }
    assert.equal(nodes.s10_anonymous_02.speaker, '陌生的声音');
    assert.equal(available(nodes.c6, f).length, unlocked ? 5 : 4);
    const beforeC6 = item.ids.slice(0, item.ids.indexOf('c6') + 1);
    for (const id of beforeC6) {
      const node = nodes[id];
      assert.ok(!['huangqiuqiu', '黄球球'].includes(node.speaker), id + ' 提前暴露隐藏角色');
      assert.notEqual(node.character, 'huangqiuqiu', id + ' 提前暴露隐藏立绘');
      for (const text of [node.text || '', ...(node.choices || []).map(option => option.label)])
        assert.ok(!text.includes('黄球球'), id + ' 提前泄露隐藏姓名');
    }
    if (f.preview === 'huangqiuqiu') {
      assert.ok(unlocked, '锁定路径进入隐藏收束');
      requireAfter(item, 'preview_qiu_08', 'c6');
      assert.ok(nodes.preview_qiu_08.text.includes('黄球球'), '隐藏线缺具名揭示');
      const text = item.ids.slice(item.ids.indexOf('c6') + 1).map(id => nodes[id].text || '').join('');
      assert.match(text, /二十四岁/);
      assert.match(text, /女性/);
      assert.match(text, /成年/);
    } else for (const id of item.ids) {
      assert.ok(!['huangqiuqiu', '黄球球'].includes(nodes[id].speaker), id + ' 常规线出现隐藏具名角色');
      assert.notEqual(nodes[id].character, 'huangqiuqiu');
      assert.ok(!String(nodes[id].text || '').includes('黄球球'));
    }
    assert.equal(item.end, 'end_' + f.preview, 'C6 收束路由错误');
  }
  const originalKey = flags => ['ride', 'noodles', 'salon', 'reunion', 'inventory'].map(flag => flags[flag]).join('|');
  const beforeKey = flags => originalKey(flags) + '|' + flags.qiuSignal + '|' + flags.qiuReply;
  assert.equal(new Set(paths.map(item => originalKey(item.flags))).size, 72);
  assert.equal(new Set(paths.map(item => beforeKey(item.flags))).size, 288);
  const byBefore = new Map();
  for (const item of paths) {
    const key = beforeKey(item.flags);
    if (!byBefore.has(key)) byBefore.set(key, []);
    byBefore.get(key).push(item);
  }
  const bodyDelta = [], readDelta = [];
  for (const item of hidden) {
    const peers = byBefore.get(beforeKey(item.flags)).filter(peer => peer.flags.preview !== 'huangqiuqiu');
    assert.equal(peers.length, 4, '每条隐藏路径必须对照相同七次前置的四常规路径');
    for (const peer of peers) {
      bodyDelta.push(item.body - peer.body);
      readDelta.push(item.read - peer.read);
    }
  }
  assert.equal(bodyDelta.length, 288);
  for (const item of ordinary) {
    assert.ok(item.body >= 4500 && item.body <= 5500, item.end + ' 正文汉字超范围：' + item.body);
    assert.ok(item.read >= 4500 && item.read <= 5500, item.end + ' 含问题/所选标签汉字超范围：' + item.read);
  }
  for (const count of [...bodyDelta, ...readDelta]) assert.ok(count >= 500 && count <= 800, '隐藏相对同前置常规路径增量超范围：' + count);
  const hiddenCombinations = {};
  for (const qiuSignal of ['record', 'work']) for (const qiuReply of ['reply', 'finish']) {
    const subset = paths.filter(item => item.flags.qiuSignal === qiuSignal && item.flags.qiuReply === qiuReply);
    const unlocked = qiuSignal === 'record' && qiuReply === 'reply';
    assert.equal(subset.length, unlocked ? 360 : 288);
    hiddenCombinations[qiuSignal + '/' + qiuReply] = {
      paths: subset.length, availableIndices: available(nodes.c6, { qiuSignal, qiuReply }).map(item => item.index)
    };
  }
  for (const flags of [{}, { qiuSignal: 'record' }, { qiuReply: 'reply' }]) assert.equal(available(nodes.c6, flags).length, 4);
  const byEnd = Object.fromEntries(endings.map(id => {
    const subset = paths.filter(item => item.end === id);
    assert.equal(subset.length, id === 'end_huangqiuqiu' ? 72 : 288, id + ' 可达路径数');
    return [id, { paths: subset.length, body: range(subset.map(item => item.body)), read: range(subset.map(item => item.read)) }];
  }));
  return {
    legalPaths: paths.length, ordinaryPaths: ordinary.length, hiddenPaths: hidden.length,
    ordinaryBody: range(ordinary.map(item => item.body)), ordinaryRead: range(ordinary.map(item => item.read)),
    hiddenBody: range(hidden.map(item => item.body)), hiddenRead: range(hidden.map(item => item.read)),
    samePrechoicesComparisons: bodyDelta.length, hiddenExtraBody: range(bodyDelta), hiddenExtraRead: range(readDelta),
    byEnd, hiddenCombinations, callbackCoverage, roleCoverage
  };
}

function engineChecks(story, paths) {
  const { StoryEngine } = require(engineFile);
  assert.equal(typeof StoryEngine, 'function', 'CommonJS StoryEngine 导出');
  assert.equal(typeof StoryEngine.prototype.availableChoices, 'function',
    '正式剧情数据已检查；引擎 availableChoices 尚未就绪，不能宣称正式剧情引擎回放通过');
  const checkpoints = new Map();
  const saveNodes = new Set();
  let replays = 0;
  function checkSaveOnce(engine) {
    const id = engine.current().id;
    if (saveNodes.has(id)) return;
    saveNodes.add(id);
    const saved = engine.snapshot(), original = copy(saved);
    engine.restore(saved);
    assert.deepEqual(engine.snapshot(), original, id + ' 首次恢复改变快照');
    engine.restore(saved);
    assert.deepEqual(engine.snapshot(), original, id + ' 重复恢复追加历史');
    assert.deepEqual(new StoryEngine(story, saved).snapshot(), original, id + ' 构造器恢复与直接恢复不同');
    assert.deepEqual(new StoryEngine(story, engine.snapshot(false)).snapshot(), original,
      id + ' 不带检查点的快照未能重建同一状态');
    assert.deepEqual(saved, original, id + ' 恢复操作修改输入存档');
  }
  for (const item of paths) {
    const engine = new StoryEngine(story);
    const displayed = item.ids.filter(id => story.nodes[id].type !== 'gate');
    let cursor = 0, checkpoint;
    while (engine.current().type !== 'end') {
      checkSaveOnce(engine);
      const node = engine.current();
      assert.equal(node.id, displayed[cursor++], '真实引擎与独立图路径分歧');
      if (node.id === 'c6') {
        checkpoint = engine.snapshot();
        assert.equal(checkpoint.choices.length, 7);
        assert.deepEqual(checkpoint.choices.map(choice => choice.nodeId), order.slice(0, 7));
        assert.equal(checkpoint.previewCheckpoint.nodeId, 'c6');
        assert.equal(checkpoint.previewCheckpoint.previewCheckpoint, null, '检查点递归嵌套');
        checkpoints.set(item.flags.qiuSignal + '/' + item.flags.qiuReply, checkpoint);
      }
      if (node.type === 'line') {
        assert.deepEqual(engine.availableChoices(), []);
        assert.equal(engine.advance(), true);
      } else {
        const expected = available(node, engine.state.flags);
        const actual = engine.availableChoices();
        assert.deepEqual(actual.map(option => option.index), expected.map(option => option.index), node.id + ' 可用原索引错误');
        actual.forEach(option => assert.deepEqual(option.option, node.choices[option.index], node.id + ' option 内容错误'));
        const selected = item.selected.find(choice => choice.id === node.id);
        assert.ok(actual.some(option => option.index === selected.index), '合法路径选项被隐藏');
        assert.equal(engine.choose(selected.index), true);
      }
    }
    assert.equal(engine.current().id, item.end);
    checkSaveOnce(engine);
    assert.equal(cursor + 1, displayed.length);
    assert.deepEqual(engine.availableChoices(), []);
    assert.deepEqual(engine.state.flags, item.flags);
    assert.equal(engine.state.choices.length, 8);
    const expectedHistory = displayed.flatMap(id => {
      const node = story.nodes[id];
      if (node.type === 'line') return [{ nodeId: id, scene: node.scene, speaker: node.speaker || 'narrator', text: node.text, kind: 'line' }];
      if (node.type === 'choice') return [{ nodeId: id, scene: node.scene, speaker: '文文 · 选择',
        text: node.choices[item.selected.find(choice => choice.id === id).index].label, kind: 'choice' }];
      return [];
    });
    assert.deepEqual(engine.state.history, expectedHistory, '引擎历史缺失、重复或错误');
    assert.equal(engine.replayPreview(), true);
    replays++;
    assert.equal(engine.current().id, 'c6');
    for (const field of ['flags', 'history', 'choices']) assert.deepEqual(engine.state[field], checkpoint[field], '重选没有精确还原 ' + field);
    assert.equal(engine.state.choices.length, 7);
    assert.ok(!own(engine.state.flags, 'preview'), '重选残留旧 preview 标记');
    assert.equal(engine.state.flags.qiuSignal, item.flags.qiuSignal, '重选修改了 H1');
    assert.equal(engine.state.flags.qiuReply, item.flags.qiuReply, '重选修改了 H2');
    assert.equal(engine.state.previewCheckpoint.previewCheckpoint, null);
    assert.deepEqual(engine.availableChoices().map(option => option.index), available(story.nodes.c6, checkpoint.flags).map(option => option.index));
  }
  assert.equal(replays, 1224);
  assert.equal(saveNodes.size, Object.values(story.nodes).filter(node => node.type !== 'gate').length,
    '存档恢复未覆盖全部可显示节点');
  const enforcement = [];
  for (const [combination, saved] of checkpoints) {
    const engine = new StoryEngine(story, saved);
    const before = engine.snapshot();
    const indices = engine.availableChoices().map(option => option.index);
    const unlocked = combination === 'record/reply';
    assert.deepEqual(indices, unlocked ? [0, 1, 2, 3, 4] : [0, 1, 2, 3]);
    assert.equal(engine.choose(4), unlocked, combination + ' 第五项拦截错误');
    if (!unlocked) assert.deepEqual(engine.snapshot(), before, combination + ' 锁定 choose(4) 污染状态');
    else {
      while (engine.current().type === 'line') assert.equal(engine.advance(), true);
      assert.equal(engine.current().id, 'end_huangqiuqiu');
      assert.equal(engine.replayPreview(), true);
      assert.deepEqual(engine.state.flags, before.flags, '隐藏线重选更改前置标记');
      assert.deepEqual(engine.state.history, before.history, '隐藏线旧预告没有清除');
    }
    enforcement.push({ combination, indices, directHiddenAccepted: unlocked, lockedStateUnchanged: unlocked ? null : true });
  }
  // 用真实到达 C6 的引擎删去标记进行资格边界检查，不伪造可加载的生产存档。
  for (const missing of [['qiuSignal'], ['qiuReply'], ['qiuSignal', 'qiuReply']]) {
    const engine = new StoryEngine(story, checkpoints.get('record/reply'));
    missing.forEach(flag => delete engine.state.flags[flag]);
    const before = engine.snapshot();
    assert.deepEqual(engine.availableChoices().map(option => option.index), [0, 1, 2, 3], '缺标记仍解锁');
    assert.equal(engine.choose(4), false, '缺标记直接选第五项没有阻止');
    assert.deepEqual(engine.snapshot(), before, '缺标记的非法选择污染状态');
  }
  const switched = new StoryEngine(story);
  for (const combination of ['record/reply', 'record/finish', 'record/reply', 'work/reply', 'record/reply', 'work/finish']) {
    const saved = checkpoints.get(combination);
    const savedCopy = copy(saved);
    switched.restore(saved);
    assert.deepEqual(switched.state.flags, saved.flags, '读档串 flags');
    assert.deepEqual(switched.availableChoices().map(option => option.index), combination === 'record/reply' ? [0, 1, 2, 3, 4] : [0, 1, 2, 3]);
    const firstRestore = switched.snapshot();
    switched.restore(saved);
    assert.deepEqual(switched.snapshot(), firstRestore, '重复恢复 C6 产生重复历史');
    assert.deepEqual(saved, savedCopy, '读取操作修改了传入存档');
  }
  const fresh = new StoryEngine(story);
  assert.deepEqual(fresh.state.flags, {}, '新引擎串入旧 H 标记');
  return { engineLegalPathReplays: paths.length, engineC6Replays: replays, hiddenChoiceEnforcement: enforcement,
    saveRestoreNodes: saveNodes.size, missingFlagCases: 3, loadEligibilityTransitions: 6 };
}

function main() {
  const testSource = fs.readFileSync(__filename, 'utf8');
  const { source, story } = loadStory();
  const engineSource = fs.readFileSync(engineFile, 'utf8');
  console.log('正式剧情只读测试：' + storyFile);
  console.log('story.js SHA-256：' + sha256(source));
  const types = graphChecks(story);
  const paths = enumerate(story);
  const v01 = v01Checks(story, paths);
  const v01MutationDetection = v01MutationChecks(story);
  const plot = plotChecks(story, paths);
  console.log('正式剧情图与文字验收通过：' + paths.length + ' 条合法路径（常规1152，隐藏72）；开始真实引擎回放。');
  const engine = engineChecks(story, paths);
  assert.equal(fs.readFileSync(storyFile, 'utf8'), source, '测试期间 story.js 被并行修改，本次结果作废，请重跑');
  assert.equal(fs.readFileSync(engineFile, 'utf8'), engineSource, '测试期间 engine.js 被并行修改，本次结果作废，请重跑');
  assert.equal(fs.readFileSync(__filename, 'utf8'), testSource, '测试期间 story-test.cjs 被并行修改，本次结果作废，请重跑');
  console.log(JSON.stringify({
    status: 'PASS', scope: '真实 story.js v0.1（沿用 R2 接口）+ 当前 StoryEngine；不含浏览器/UI/美术/CG 专项验收',
    storySha256: sha256(source), engineSha256: sha256(engineSource), testSha256: sha256(testSource),
    scenes: Object.keys(story.scenes).length, nodes: Object.keys(story.nodes).length, types,
    wholeGraphAcyclic: true, allReferencesExist: true, allNodesLegallyReachable: true,
    longestLineHan: Math.max(...Object.values(story.nodes).filter(node => node.type === 'line').map(node => han(node.text))),
    longestEndHan: Math.max(...Object.values(story.nodes).filter(node => node.type === 'end').map(node => han(node.text))),
    hanDefinition: 'Unicode Script=Han；body=line.text+end.text；read=body+choice.text+所选label；不计说话人/标题/nextChapter/未选选项',
    ...plot, ...engine, v01, v01MutationDetection
  }, null, 2));
}

try { main(); }
catch (error) {
  console.error('FAIL：正式剧情验收未通过。' + (error.stack || error));
  process.exitCode = 1;
}
