'use strict';

// 全部真实正文＋真实 StoryEngine 的隔离运行测试；不读写浏览器存储。
// 演出是 fixture 占位，不构成 A06 采用、E09 正式接入或 E10 最终验收。
const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const crypto = require('node:crypto');
const { root, contract, createBundle, createStory, reach, finish, sourceNode, clone } = require('./fixture.cjs');
const { StoryEngine } = require(path.join(root, 'engine.js'));
const results = [];
const test = (name, run) => {
  try { results.push({ name, status: 'passed', detail: run() }); }
  catch (error) { results.push({ name, status: 'failed', error: error.stack }); }
};
const story = createStory();
const qiu = { qiuSignal: 'record', qiuReply: 'reply', route: 'huangqiuqiu' };
const at = (id, selections = qiu) => reach(new StoryEngine(story), id, selections);
const expectedEnding = (route, relation) => `tc_c10_${route}_end${route === 'friends' ? '' : '_' + relation}`;
const fingerprint = file => ({ file, sha256: crypto.createHash('sha256').update(fs.readFileSync(path.join(root, file))).digest('hex') });

test('全部 17 份真实源通过冻结构建接口，19 选择／43 选项／13 结局闭合', () => {
  const { report } = createBundle();
  assert.equal(report.moduleCount, 17);
  assert.equal(report.graph.statistics.choices, 19);
  assert.equal(report.graph.statistics.options, 43);
  assert.equal(report.graph.coverage.reachedEndings.length, 13);
  assert.deepEqual(report.graph.coverage.unreachableNodes, []);
  assert.deepEqual(new StoryEngine(story).state.flags, { qiuMet: false, qiuForm: 'sphere' });
  return { modules: 17, nodes: report.nodeCount, scenes: report.sceneCount, choices: 19, options: 43, endings: 13, formalIntegration: false };
});

test('四种节奏组合；第八天回应始终可选，第三章只向真实相识路径展示隐藏线', () => {
  const rows = [];
  for (const qiuSignal of ['record', 'ignore']) for (const qiuReply of ['reply', 'leave']) {
    const selections = { qiuSignal, qiuReply };
    const engine = at('tc_c02_common_rhythm_reply_choice', selections);
    assert.equal(engine.availableChoices().length, 2);
    reach(engine, story.routeChoice, selections);
    const eligible = qiuSignal === 'record' && qiuReply === 'reply';
    assert.equal(engine.state.flags.qiuMet, eligible);
    assert.equal(engine.state.flags.qiuForm, 'sphere');
    assert.equal(engine.availableChoices().some(row => row.option.value === 'huangqiuqiu'), eligible);
    if (!eligible) {
      assert(!engine.state.history.some(row => story.nodes[row.nodeId].speaker === 'huangqiuqiu'));
      const before = engine.snapshot();
      assert.equal(engine.choose(6), false);
      assert.deepEqual(engine.snapshot(), before);
    }
    rows.push({ qiuSignal, qiuReply, qiuMet: eligible, visibleRoutes: engine.availableChoices().length });
  }
  return rows;
});

test('第十四天精确末行才写入相识，不新增玩家选择，重入幂等', () => {
  const engine = at(sourceNode(2, 269).id);
  assert.equal(engine.state.flags.qiuMet, false);
  const choices = clone(engine.state.choices);
  engine.advance();
  assert.equal(engine.current().id, 'tc_c02_common_qiu_met');
  assert.equal(engine.state.flags.qiuMet, true);
  assert.deepEqual(engine.state.choices, choices);
  assert.equal(engine.current().text, contract.automaticEvents[0].source.raw);
  const after = engine.snapshot();
  engine.enter(engine.current().id);
  assert.deepEqual(engine.snapshot(), after);
  return { before: sourceNode(2, 269).id, event: engine.current().id, sourceLine: 271 };
});

test('第 55 天 17:00 场景前段与变化过程仍为球形，第 527 行进入时变身', () => {
  const engine = at(sourceNode(8, 487).id);
  assert.equal(engine.state.flags.qiuForm, 'sphere');
  reach(engine, sourceNode(8, 525).id, qiu, () => assert.equal(engine.state.flags.qiuForm, 'sphere'));
  const before = engine.snapshot();
  engine.advance();
  assert.equal(engine.current().id, 'tc_c08_huangqiuqiu_human_reveal');
  assert.equal(engine.state.flags.qiuForm, 'human');
  assert.deepEqual(engine.state.choices, before.choices);
  assert.equal(engine.current().text, contract.automaticEvents[1].source.raw);
  const after = engine.snapshot();
  engine.enter(engine.current().id);
  assert.deepEqual(engine.snapshot(), after);
  assert.deepEqual(new StoryEngine(story, before).snapshot(), before);
  assert.deepEqual(new StoryEngine(story, after).snapshot(), after);
  return { sceneFirst: sourceNode(8, 487).id, transition: sourceNode(8, 525).id, reveal: engine.current().id };
});

let routeCoverage;
test('真实引擎穷举全部 736 条完整选择路径，13 结局／19 选择／43 选项全部到达', () => {
  const nodes = new Set(), options = new Set(), endings = new Map(), epilogues = new Map();
  const routeCounts = {}, flashbacks = new Set(), chapterEnds = new Set();
  let paths = 0, displayedVisits = 0, restoredEndings = 0;
  const early = ['qiuSignal', 'reunion', 'qiuReply', 'missedGame', 'yelanFirst'];
  const choiceByFlag = Object.fromEntries(contract.choices.map(choice => [choice.flag, choice]));
  for (let mask = 0; mask < 32; mask++) {
    const prefix = Object.fromEntries(early.map((flag, bit) => [flag, choiceByFlag[flag].options[(mask >> bit) & 1].value]));
    for (const route of contract.routes.map(route => route.id)) {
      if (route === 'huangqiuqiu' && (prefix.qiuSignal !== 'record' || prefix.qiuReply !== 'reply')) continue;
      for (const outing of choiceByFlag[route + 'Outing'].options.map(option => option.value)) {
        for (const relationship of route === 'friends' ? [null] : ['dating', 'friends']) {
          const selections = { ...prefix, route, [route + 'Outing']: outing, ...(relationship ? { [route + 'Relationship']: relationship } : {}) };
          let lastPresentDay = 0, pathEpilogues = 0;
          const engine = finish(new StoryEngine(story), selections, (node, runtime) => {
            displayedVisits++; nodes.add(node.id);
            const scene = story.scenes[node.scene];
            const chronology = scene.chronology;
            if (chronology.domain === 'story-day') {
              assert.equal(scene.day, chronology.day);
              if (chronology.mode === 'present') {
                assert(scene.day >= lastPresentDay, `日序倒退 ${node.id}: ${scene.day} < ${lastPresentDay}`);
                lastPresentDay = scene.day;
              } else {
                assert.equal(scene.chapter, 6); assert.equal(scene.day, 30); flashbacks.add(node.scene);
              }
            } else if (chronology.domain === 'chapter-range') {
              assert.equal(node.type, 'end'); assert.equal(scene.day, null); assert.equal(scene.time, '章末');
              assert.equal(scene.location, ''); assert.equal(scene.dayLabel, contract.chapters[scene.chapter - 1].days); chapterEnds.add(node.id);
            } else {
              assert.equal(chronology.domain, 'two-years-later'); assert.equal(scene.day, null); assert.equal(scene.dayLabel, '两年后');
            }
            if (node.type === 'choice') {
              const value = selections[node.flag];
              assert(runtime.availableChoices().some(row => row.option.value === value));
              options.add(node.id + ':' + value);
            }
            if (contract.epilogues.some(row => row.id === node.id)) {
              pathEpilogues++; epilogues.set(node.id, (epilogues.get(node.id) || 0) + 1);
              assert.equal(node.id, route === 'piao' && relationship === 'dating' ? 'tc_c10_common_piao_dating' : 'tc_c10_common_piao_wedding');
            }
            if (node.id.startsWith('tc_c10_common_') && route === 'huangqiuqiu') assert.notEqual(node.character, 'huangqiuqiu');
            const seenReveal = runtime.state.history.some(row => row.nodeId === 'tc_c08_huangqiuqiu_human_reveal');
            assert.equal(runtime.state.flags.qiuForm, seenReveal ? 'human' : 'sphere');
          });
          assert.equal(engine.current().id, expectedEnding(route, relationship));
          assert.equal(pathEpilogues, 1);
          const ending = contract.endings.find(row => row.id === engine.current().id);
          for (const condition of ending.requires) assert.equal(engine.state.flags[condition.flag], condition.value);
          assert.equal(engine.state.flags.qiuForm, route === 'huangqiuqiu' ? 'human' : 'sphere');
          if (route === 'piao') assert.equal(engine.state.choices.filter(row => row.nodeId.includes('relationship_choice')).length, 1);
          if (route === 'friends') assert(!Object.keys(engine.state.flags).some(flag => flag.endsWith('Relationship')));
          const saved = engine.snapshot();
          assert.deepEqual(new StoryEngine(story, saved).snapshot(), saved); restoredEndings++;
          endings.set(engine.current().id, (endings.get(engine.current().id) || 0) + 1);
          routeCounts[route] = (routeCounts[route] || 0) + 1; paths++;
        }
      }
    }
  }
  assert.equal(paths, 736);
  assert.deepEqual([...endings.keys()].sort(), contract.endings.map(ending => ending.id).sort());
  assert.equal(options.size, 43);
  assert.deepEqual([...nodes].sort(), Object.values(story.nodes).filter(node => node.type !== 'gate').map(node => node.id).sort());
  assert.equal(chapterEnds.size, 9);
  assert.equal(flashbacks.size, 2);
  routeCoverage = { paths, displayedVisits, displayedNodes: nodes.size, choices: 19, options: options.size,
    endings: Object.fromEntries(endings), epilogues: Object.fromEntries(epilogues), routeCounts,
    restoreAtEveryEnding: restoredEndings, flashbacks: [...flashbacks], chapterEnds: chapterEnds.size };
  return routeCoverage;
});

test('第三章重选保留真实相识、恢复球形，并删除路线／后续选择／人形历史', () => {
  const engine = finish(new StoryEngine(story), { ...qiu, huangqiuqiuRelationship: 'dating' });
  assert.equal(engine.state.flags.qiuForm, 'human');
  assert.equal(engine.replayChoice(story.routeChoice), true);
  assert.deepEqual(engine.snapshot(), at(story.routeChoice).snapshot());
  assert.equal(engine.state.flags.qiuMet, true);
  assert.equal(engine.state.flags.qiuForm, 'sphere');
  assert(!Object.hasOwn(engine.state.flags, 'route'));
  assert(!engine.state.history.some(row => row.nodeId === 'tc_c08_huangqiuqiu_human_reveal'));
  finish(engine, { route: 'xiaoman', xiaomanRelationship: 'friends' });
  assert.equal(engine.current().id, 'tc_c10_xiaoman_end_friends');
  assert.equal(engine.state.flags.qiuForm, 'sphere');
  assert.equal(engine.state.flags.qiuMet, true);
  return { target: story.routeChoice, subsequentEnding: engine.current().id };
});

test('第九章重选保留人形与此前经历，恋人／朋友两种结局均延续人形', () => {
  const id = 'tc_c09_huangqiuqiu_relationship_choice';
  const engine = finish(new StoryEngine(story), { ...qiu, huangqiuqiuRelationship: 'dating' });
  assert.equal(engine.replayChoice(id), true);
  assert.deepEqual(engine.snapshot(), at(id).snapshot());
  assert.equal(engine.state.flags.qiuForm, 'human');
  assert(!Object.hasOwn(engine.state.flags, 'huangqiuqiuRelationship'));
  finish(engine, { huangqiuqiuRelationship: 'friends' });
  assert.equal(engine.current().id, 'tc_c10_huangqiuqiu_end_friends');
  assert.equal(engine.state.flags.qiuForm, 'human');
  return { target: id, subsequentEnding: engine.current().id };
});

test('十章真实存档拒绝标记、路径、文本、场景、选择、检查点和日序字段篡改；失败不改当前进度', () => {
  const early = at(story.routeChoice, { qiuSignal: 'ignore', qiuReply: 'reply' }).snapshot();
  const human = at('tc_c09_huangqiuqiu_relationship_choice').snapshot();
  const negative = [
    ['注入相识', early, saved => { saved.flags.qiuMet = true; }],
    ['提前人形', early, saved => { saved.flags.qiuForm = 'human'; }],
    ['删除已发生变身', human, saved => { saved.flags.qiuForm = 'sphere'; }],
    ['变更所属路线', human, saved => { saved.flags.route = 'xiaoman'; }],
    ['注入未发生关系', human, saved => { saved.flags.huangqiuqiuRelationship = 'dating'; }],
    ['跳过关系选择到结局', human, saved => { saved.nodeId = 'tc_c10_huangqiuqiu_end_dating'; }],
    ['删除自动事件历史', human, saved => { saved.history = saved.history.filter(row => row.nodeId !== 'tc_c08_huangqiuqiu_human_reveal'); }],
    ['改写历史文本', human, saved => { saved.history[0].text += '伪造'; }],
    ['改写历史场景日序', human, saved => { saved.history[0].scene = story.nodes.tc_c08_huangqiuqiu_human_reveal.scene; }],
    ['调换历史顺序', human, saved => { [saved.history[0], saved.history[1]] = [saved.history[1], saved.history[0]]; }],
    ['删去前置选择', human, saved => { saved.choices.shift(); }],
    ['改写选择值', human, saved => { saved.choices[0].value = 'ignore'; }],
    ['伪造检查点', human, saved => { saved.previewCheckpoint = clone(early); }],
    ['添加未约定日序字段', human, saved => { saved.day = 55; }]
  ];
  const engine = at(sourceNode(8, 525).id), current = engine.snapshot();
  for (const [name, seed, mutate] of negative) {
    const saved = clone(seed); mutate(saved);
    assert.throws(() => engine.restore(saved), /存档不兼容或已损坏/, name);
    assert.deepEqual(engine.snapshot(), current, name + '不得污染当前进度');
  }
  return { rejected: negative.map(row => row[0]), total: negative.length };
});

test('真实自动事件前置检查和非法穷尽路由均原子拒绝', () => {
  const engine = new StoryEngine(story), before = engine.snapshot();
  assert.throws(() => engine.enter('tc_c02_common_qiu_met'));
  assert.deepEqual(engine.snapshot(), before);
  assert.throws(() => engine.enter('tc_c08_huangqiuqiu_human_reveal'));
  assert.deepEqual(engine.snapshot(), before);
  assert.throws(() => engine.enter('tc_c04_common_route_gate'));
  assert.deepEqual(engine.snapshot(), before);
  return { rejectedTransitions: 3 };
});

test('第九章数日后、分线日序、第六章回叙和中性章末保留源语义', () => {
  const relative = sourceNode(9, 610), scene = story.scenes[relative.scene];
  assert.equal(scene.chronology.label, '第76天后的数日（具体日序未注明）');
  assert.equal(relative.time, '第76天后的数日·具体时刻未注明');
  const friendDays = { xiaoman: 82, zhouzhi: 88, mengyao: 81, yelan: 86 };
  for (const [route, day] of Object.entries(friendDays)) {
    const engine = finish(new StoryEngine(story), { route, [route + 'Relationship']: 'friends' });
    assert(engine.state.history.some(row => row.nodeId.startsWith('tc_c09_' + route + '_') && story.scenes[row.scene].day === day));
  }
  return { relativeDate: scene.chronology.label, friendDays, scope: '源场景与真实运行路径；可见 UI 由浏览器测试另验' };
});

const report = {
  scope: 'E08 真实十章正文与 StoryEngine 的隔离运行验收',
  date: '2026-10-23', contractVersion: contract.contractVersion, contentRevision: contract.contentRevision,
  formalIntegration: false, artAdoption: false,
  binding: 'sample://e08-runtime-logic；无正文桩；不写正式 story.js 或运行清单，不接触玩家存储',
  inputFiles: createBundle().report.inputFiles,
  testedRuntime: [fingerprint('engine.js'), fingerprint('任务拆分/全十章/校验/E08/fixture.cjs'), fingerprint('任务拆分/全十章/校验/E08/integration-test.cjs')],
  summary: { total: results.length, passed: results.filter(row => row.status === 'passed').length, failed: results.filter(row => row.status === 'failed').length },
  results,
  notValidated: ['A06 正式美术采用与真实演出', 'E09 正式 story.js／运行清单接入', 'E10 完整逐句阅读、实体手机、声音与最终验收', '发布']
};
fs.writeFileSync(path.join(__dirname, 'integration-results.json'), JSON.stringify(report, null, 2) + '\n');
console.log(JSON.stringify({ ...report.summary, paths: routeCoverage?.paths, report: '任务拆分/全十章/校验/E08/integration-results.json' }));
for (const result of results.filter(row => row.status === 'failed')) console.error(result.name + '\n' + result.error);
if (report.summary.failed) process.exitCode = 1;
