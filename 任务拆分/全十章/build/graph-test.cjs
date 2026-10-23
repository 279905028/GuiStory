'use strict';

// 只测试 graph.cjs 的隔离图与状态机制：不加载正式剧情、播放器或存档。
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const { validateGraph } = require('./graph.cjs');
const root = path.resolve(__dirname, '..');
const contractPath = path.join(root, 'contract.json');
const contract = JSON.parse(fs.readFileSync(contractPath, 'utf8'));
const outputPath = path.join(root, '校验/E02/graph-tests.json');
const clone = value => structuredClone(value);
const digest = file => crypto.createHash('sha256').update(fs.readFileSync(file)).digest('hex');

const ids = {
  start: 'tc_c01_common_entry', signal: 'tc_c01_common_rhythm_record_choice',
  reply: 'tc_c02_common_rhythm_reply_choice', signalGate: 'tc_c02_common_signal_gate',
  replyGate: 'tc_c02_common_reply_gate', met: 'tc_c02_common_qiu_met',
  route: 'tc_c03_common_route_choice', xiaoman: 'tc_c03_xiaoman_entry',
  qiu: 'tc_c03_huangqiuqiu_entry', stop: 'tc_c04_common_entry'
};
const sceneId = 'ts_c03_common_mechanism_sample';
const makeLine = (id, next, scene = sceneId, extra = {}) => ({
  id, type: 'line', scene, speaker: '', text: '隔离机制样本，不是正式剧情。', next, ...extra
});
function hiddenFixture() {
  const met = contract.automaticEvents.find(event => event.nodeId === ids.met);
  return {
    start: ids.start,
    initialFlags: clone(contract.interface.initialFlags),
    scenes: { [sceneId]: { chronology: { domain: 'story-day', mode: 'present', day: 15 } } },
    nodes: {
      [ids.start]: makeLine(ids.start, ids.signal),
      [ids.signal]: {
        id: ids.signal, type: 'choice', scene: sceneId, text: '', flag: 'qiuSignal',
        choices: ['record', 'ignore'].map(value => ({ label: value, value, next: ids.reply }))
      },
      [ids.reply]: {
        id: ids.reply, type: 'choice', scene: sceneId, text: '', flag: 'qiuReply',
        choices: ['reply', 'leave'].map(value => ({ label: value, value, next: ids.signalGate }))
      },
      [ids.signalGate]: {
        id: ids.signalGate, type: 'gate', scene: sceneId,
        cases: [{ flag: 'qiuSignal', value: 'record', next: ids.replyGate }], default: ids.route
      },
      [ids.replyGate]: {
        id: ids.replyGate, type: 'gate', scene: sceneId,
        cases: [{ flag: 'qiuReply', value: 'reply', next: ids.met }], default: ids.route
      },
      [ids.met]: makeLine(ids.met, ids.route, sceneId, {
        onEnter: { requires: clone(met.requires), setFlags: clone(met.setFlags) }
      }),
      [ids.route]: {
        id: ids.route, type: 'choice', scene: sceneId, text: '', flag: 'route',
        choices: [
          { label: '隔离小满分支', value: 'xiaoman', next: ids.xiaoman },
          { label: '隔离球球分支', value: 'huangqiuqiu', next: ids.qiu, requires: clone(contract.hidden.routeRequires) }
        ]
      },
      [ids.xiaoman]: makeLine(ids.xiaoman, ids.stop),
      [ids.qiu]: makeLine(ids.qiu, ids.stop),
      [ids.stop]: makeLine(ids.stop, null)
    }
  };
}
const sampleOptions = { mode: 'sample', stops: [ids.stop] };

function humanFixture() {
  const event = contract.automaticEvents.find(item => item.setFlags.qiuForm === 'human');
  const before = 'tc_c08_huangqiuqiu_entry';
  const after = 'tc_c08_huangqiuqiu_after_reveal';
  const ending = 'tc_c10_huangqiuqiu_end_friends';
  const scene8 = 'ts_c08_huangqiuqiu_mechanism_sample';
  const scene10 = 'ts_c10_huangqiuqiu_mechanism_sample';
  return {
    start: before,
    // 该初态刻意跳过正式前文，仅隔离测试变身和结局的图机制。
    initialFlags: {
      qiuMet: true, qiuForm: 'sphere', route: 'huangqiuqiu',
      qiuSignal: 'record', qiuReply: 'reply', huangqiuqiuRelationship: 'friends'
    },
    scenes: {
      [scene8]: { chronology: { domain: 'story-day', mode: 'present', day: 55 } },
      [scene10]: { chronology: { domain: 'two-years-later', mode: 'present' } }
    },
    nodes: {
      [before]: makeLine(before, event.nodeId, scene8),
      [event.nodeId]: makeLine(event.nodeId, after, scene8, {
        onEnter: { requires: clone(event.requires), setFlags: clone(event.setFlags) }
      }),
      [after]: makeLine(after, ending, scene8),
      [ending]: { id: ending, type: 'end', scene: scene10, endingId: ending, title: '隔离结局', text: '' }
    }
  };
}

function runGraphTests() {
  const results = [];
  function test(id, description, body) {
    try {
      const evidence = body();
      results.push({ id, description, passed: true, ...(evidence ? { evidence } : {}) });
    } catch (error) {
      results.push({ id, description, passed: false, error: error.message });
    }
  }
  function rejects(story, pattern, options = sampleOptions) {
    let error;
    try { validateGraph(story, contract, options); } catch (caught) { error = caught; }
    assert.ok(error instanceof Error, '应该拒绝反例，但校验成功了');
    assert.match(error.message, pattern);
    return { rejectedWith: error.message, ...(error.details ? { details: error.details } : {}) };
  }
  function mutateHidden(id, description, mutate, pattern, options = sampleOptions) {
    test(id, description, () => {
      const fixture = hiddenFixture();
      mutate(fixture);
      return rejects(fixture, pattern, options);
    });
  }

  test('hidden-positive', '四种记录／回应组合；只有记录＋回应相识并显示隐藏选项', () => {
    const report = validateGraph(hiddenFixture(), contract, sampleOptions);
    assert.equal(report.coverage.reachableNodes, 10);
    assert.equal(report.coverage.reachableOptions, 6);
    assert.equal(Object.keys(report.witnesses.hiddenQualification).length, 4);
    for (const [combination, witness] of Object.entries(report.witnesses.hiddenQualification)) {
      assert.equal(witness.flagsAfter.qiuMet, combination === 'record/reply');
    }
    const met = report.witnesses.events[ids.met];
    assert.equal(met.flagsBefore.qiuMet, false);
    assert.equal(met.flagsAfter.qiuMet, true);
    assert.deepEqual(met.choices.map(choice => choice.value), ['record', 'reply']);
    return { statistics: report.statistics, events: report.witnesses.events, qualification: report.witnesses.hiddenQualification };
  });
  mutateHidden('candidate-stops', '候选构建不得使用样例截点', () => {}, /candidate 不允许/, { mode: 'candidate', stops: [ids.stop] });
  mutateHidden('unknown-stop', '截点必须存在', () => {}, /必须为已存在/, { mode: 'sample', stops: ['tc_c04_common_missing'] });
  mutateHidden('duplicate-stops', '截点不得重复', () => {}, /stops 不得重复/, { mode: 'sample', stops: [ids.stop, ids.stop] });
  mutateHidden('choice-stop', '选项节点不能作为样例截点', () => {}, /必须为已存在/, { mode: 'sample', stops: [ids.route] });
  mutateHidden('nonterminal-line-stop', '有后继的正文行不能作为截点', () => {}, /必须为已存在/, { mode: 'sample', stops: [ids.start] });
  mutateHidden('unregistered-stop', '未登记的 null 正文后继必须拒绝', () => {}, /未登记为样例截点/, { mode: 'sample', stops: [] });
  mutateHidden('missing-line-reference', '正文后继不得悬空', s => { s.nodes[ids.xiaoman].next = 'missing'; }, /next 引用了不存在/);
  mutateHidden('missing-option-reference', '选项后继不得悬空', s => { s.nodes[ids.route].choices[0].next = 'missing'; }, /choices\[0\]\.next 引用了不存在/);
  mutateHidden('missing-case-reference', '门禁 case 后继不得悬空', s => { s.nodes[ids.signalGate].cases[0].next = 'missing'; }, /cases\[0\]\.next 引用了不存在/);
  mutateHidden('missing-default-reference', '门禁 default 后继不得悬空', s => { s.nodes[ids.signalGate].default = 'missing'; }, /default 引用了不存在/);
  mutateHidden('unreachable-static-cycle', '即使从入口不可达，独立环也必须拒绝', s => {
    const loop = 'tc_c01_common_unreachable_loop'; s.nodes[loop] = makeLine(loop, loop);
  }, /静态图存在环/);
  mutateHidden('reachable-static-cycle', '正常路径中的环必须拒绝', s => { s.nodes[ids.xiaoman].next = ids.route; }, /静态图存在环/);
  mutateHidden('unreachable-node', '没有环的孤立正文节点也必须拒绝', s => {
    const dead = 'tc_c01_common_unreachable_line'; s.nodes[dead] = makeLine(dead, ids.stop);
  }, /不可达节点或选项/);
  mutateHidden('unreachable-option', '目标节点可达仍不能掩盖永不开放的选项', s => {
    s.nodes[ids.route].choices.push({ label: '不可达隔离选项', value: 'xiaoman', next: ids.xiaoman, requires: [{ flag: 'reunion', value: 'nervous' }] });
  }, /节点 0，选项 1/);
  mutateHidden('first-match-case', '门禁只执行第一个匹配 case', s => {
    const dead = 'tc_c02_common_shadowed_case'; s.nodes[dead] = makeLine(dead, ids.route);
    s.nodes[ids.signalGate].cases.push({ flag: 'qiuSignal', value: 'record', next: dead });
  }, /不可达节点或选项/);
  mutateHidden('hidden-option-unguarded', '缺少隐藏资格不能进入球球路线', s => { s.nodes[ids.route].choices[1].requires = []; }, /路线资格/);
  mutateHidden('event-requires', '到达不满足条件的事件必须报错，不可跳过', s => { s.nodes[ids.signalGate].default = ids.met; }, /onEnter.requires 不成立/);
  mutateHidden('event-requires-before-write', '自动事件必须先检查条件再执行赋值', s => {
    s.nodes[ids.met].onEnter.requires.push({ flag: 'qiuMet', value: true });
  }, /onEnter.requires 不成立/);
  mutateHidden('missing-meeting-effect', '已记录且已回应的路径必须实际完成相识', s => { s.nodes[ids.met].onEnter.setFlags = {}; }, /相识状态.*不一致/);
  mutateHidden('route-mismatch', '非 common 节点必须与已选路线一致', s => { s.nodes[ids.route].choices[0].next = ids.qiu; }, /路线串线/);
  mutateHidden('exhaustive-unmatched', '穷尽门禁遇到合法可达状态未命中时必须拒绝', s => {
    s.nodes[ids.signalGate].exhaustive = true; s.nodes[ids.signalGate].default = null;
  }, /穷尽门禁.*未命中/);
  mutateHidden('nonexhaustive-null-default', '非穷尽门禁不得使用 null default', s => { s.nodes[ids.signalGate].default = null; }, /只有 exhaustive:true/);
  mutateHidden('no-available-options', '可达选择节点不能没有可选项', s => {
    for (const option of s.nodes[ids.signal].choices) option.requires = [{ flag: 'qiuMet', value: true }];
  }, /没有可用选项/);
  mutateHidden('strict-condition-equality', '条件不能把字符串 true 当作布尔 true', s => {
    s.nodes[ids.route].choices[1].requires = [{ flag: 'qiuMet', value: 'true' }];
  }, /不可达节点或选项/);
  mutateHidden('inherited-flags-ignored', '初始状态不能通过继承字段伪造隐藏资格', s => {
    const inherited = Object.create({ qiuSignal: 'record', qiuReply: 'reply' });
    Object.assign(inherited, { qiuMet: true, qiuForm: 'sphere' }); s.initialFlags = inherited;
  }, /缺少记录与回应资格/);

  test('node-state-merge', '同节点和相同 flags 合并，同时保留两条选项的可达覆盖', () => {
    // 同值选项专用于验证合并机制，不声称符合正式 choices 目录。
    const start = 'tc_c01_common_merge_choice'; const stop = 'tc_c01_common_merge_stop';
    const fixture = {
      start, initialFlags: {}, scenes: {}, nodes: {
        [start]: { id: start, type: 'choice', flag: 'qiuSignal', choices: [
          { label: '样例 A', value: 'record', next: stop }, { label: '样例 B', value: 'record', next: stop }
        ] }, [stop]: makeLine(stop, null)
      }
    };
    const report = validateGraph(fixture, contract, { mode: 'sample', stops: [stop] });
    assert.equal(report.statistics.mergedNodeStates, 1);
    assert.equal(report.statistics.exploredNodeStates, 2);
    assert.equal(report.coverage.reachableOptions, 2);
    return report.statistics;
  });

  test('human-and-ending-positive', '人形自动事件先 sphere 后 human，并进入朋友关系对应结局', () => {
    const report = validateGraph(humanFixture(), contract, { mode: 'candidate' });
    const event = report.witnesses.events.tc_c08_huangqiuqiu_human_reveal;
    assert.equal(event.flagsBefore.qiuForm, 'sphere'); assert.equal(event.flagsAfter.qiuForm, 'human');
    assert.deepEqual(report.coverage.reachedEndings, ['tc_c10_huangqiuqiu_end_friends']);
    return { statistics: report.statistics, events: report.witnesses.events, endings: report.witnesses.endings };
  });
  test('bypass-human-reveal', '绕过显露人形事件不能进入其后的正文', () => {
    const s = humanFixture(); s.nodes[s.start].next = 'tc_c08_huangqiuqiu_after_reveal';
    return rejects(s, /形态应为 human/, { mode: 'candidate' });
  });
  test('premature-human', '显露之前不能提前显示人形', () => {
    const s = humanFixture(); s.initialFlags.qiuForm = 'human';
    return rejects(s, /形态应为 sphere/, { mode: 'candidate' });
  });
  test('human-before-day55', '第55天之前的场景不能借助改跳转提前变成人形', () => {
    const s = humanFixture(); s.scenes.ts_c08_huangqiuqiu_mechanism_sample.chronology.day = 54;
    return rejects(s, /第55天变身之前提前进入人形/, { mode: 'candidate' });
  });
  test('wrong-ending-relationship', '朋友结局不能接收 dating 状态', () => {
    const s = humanFixture(); s.initialFlags.huangqiuqiuRelationship = 'dating';
    return rejects(s, /结局条件不成立/, { mode: 'candidate' });
  });
  test('unknown-ending', '未登记的终结节点必须拒绝', () => {
    const s = humanFixture(); s.nodes.tc_c10_huangqiuqiu_end_friends.endingId = 'missing';
    return rejects(s, /不是契约登记的终结节点/, { mode: 'candidate' });
  });

  for (const epilogue of contract.epilogues) {
    const correctFlags = epilogue.otherwise ? { route: 'friends' } : { route: 'piao', piaoRelationship: 'dating' };
    const incorrectFlags = epilogue.otherwise ? { route: 'piao', piaoRelationship: 'dating' } : { route: 'friends' };
    const fixture = flags => ({
      start: epilogue.id, initialFlags: { ...contract.interface.initialFlags, ...flags }, scenes: {},
      nodes: { [epilogue.id]: makeLine(epilogue.id, ids.stop), [ids.stop]: makeLine(ids.stop, null) }
    });
    test(`epilogue-${epilogue.otherwise ? 'wedding' : 'dating'}-positive`, '公共后日谈仅接受适用状态（正例）', () => {
      const report = validateGraph(fixture(correctFlags), contract, sampleOptions);
      assert.equal(report.coverage.reachableNodes, 2); return report.statistics;
    });
    test(`epilogue-${epilogue.otherwise ? 'wedding' : 'dating'}-negative`, '公共后日谈拒绝不适用状态（反例）', () => rejects(fixture(incorrectFlags), /不适用的公共后日谈/));
  }

  test('long-chain-30000', '30,000节点长链：静态检查与状态遍历不依赖递归调用栈', () => {
    const count = 30000;
    const nodeId = index => `tc_c01_common_chain_${String(index).padStart(5, '0')}`;
    const nodes = {};
    for (let index = 0; index < count; index++) nodes[nodeId(index)] = makeLine(nodeId(index), index + 1 < count ? nodeId(index + 1) : null);
    const report = validateGraph({ start: nodeId(0), nodes, scenes: {}, initialFlags: {} }, contract, { mode: 'sample', stops: [nodeId(count - 1)] });
    assert.equal(report.statistics.exploredNodeStates, count);
    assert.equal(report.statistics.nodes, count);
    assert.equal(report.statistics.edges, count - 1);
    return report.statistics;
  });

  return {
    schemaVersion: 1,
    generatedAt: new Date().toISOString(),
    evidenceLayer: 'isolated-graph-mechanism-tests',
    evidenceBoundary: '合成的隔离图与状态样本；未经过完整模块/来源编译，不代表十章正式文本覆盖、引擎执行、存读档、播放器、浏览器或发布验收。candidate 仅是图验证模式，不代表完整候选故事。',
    contractVersion: contract.contractVersion,
    contentRevision: contract.contentRevision,
    sourceHashes: { contract: digest(contractPath), graph: digest(path.join(__dirname, 'graph.cjs')), test: digest(__filename) },
    command: 'node 任务拆分/全十章/build/graph-test.cjs',
    total: results.length, passed: results.filter(result => result.passed).length,
    failed: results.filter(result => !result.passed).length,
    results
  };
}

if (require.main === module) {
  const report = runGraphTests();
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, JSON.stringify(report, null, 2) + '\n');
  process.stdout.write(JSON.stringify({ total: report.total, passed: report.passed, failed: report.failed, output: outputPath }) + '\n');
  for (const result of report.results.filter(result => !result.passed)) process.stderr.write(`${result.id}: ${result.error}\n`);
  if (report.failed) process.exitCode = 1;
}

module.exports = { runGraphTests };
