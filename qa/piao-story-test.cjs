'use strict';
// 只对当前正式 story.js 做验收；历史三章测试与报告保持原样。
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const assert = require('node:assert/strict');
const { StoryEngine } = require('../engine.js');
const root = path.resolve(__dirname, '..');
const out = path.join(__dirname, 'piao-20261020');
const source = fs.readFileSync(path.join(root, 'story.js'), 'utf8');
const story = parseStory(source);
const nodes = story.nodes;
const routeIds = ['xiaoman', 'zhouzhi', 'mengyao', 'yelan', 'solo', 'huangqiuqiu', 'piao'];
const terminalIds = ['end_piao_maolang', 'end_piao_wenwen'];
const matches = (flags, c) => Object.hasOwn(flags, c.flag) && flags[c.flag] === c.value;
const allowed = (flags, option) => !option.requires || option.requires.every(c => matches(flags, c));
const eligible = flags => flags.qiuSignal === 'record' && flags.qiuReply === 'reply';
const links = node => node.type === 'choice' ? node.choices.map(option => option.next) :
  node.type === 'gate' ? node.cases.map(c => c.next).concat(node.default) : node.next ? [node.next] : [];
const sha256 = value => crypto.createHash('sha256').update(value).digest('hex');
const hasHiddenName = node => node.character === 'huangqiuqiu' || node.speaker === 'huangqiuqiu' ||
  /黄球球/.test([node.text, node.title, node.prompt, node.nextChapter].filter(Boolean).join('\n'));
function parseStory(text) {
  return JSON.parse(text.slice(text.indexOf('{'), text.lastIndexOf('}') + 1));
}
function choose(engine, value) {
  const option = engine.availableChoices().find(item => item.option.value === value);
  assert(option, `${engine.current().id} 缺少可用选项 ${value}`);
  assert(engine.choose(option.index));
}
function reach(target, decisions = {}) {
  const engine = new StoryEngine(story);
  for (let steps = 0; steps <= Object.keys(nodes).length; steps++) {
    const node = engine.current();
    if (node.id === target) return engine;
    if (node.type === 'choice') {
      const desired = decisions[node.id] ?? ({ h1: 'record', h2: 'reply', c6: 'xiaoman' }[node.id]);
      if (desired !== undefined) choose(engine, desired);
      else assert(engine.choose(engine.availableChoices()[0].index));
    } else assert(engine.advance(), `无法自然到达 ${target}，停在 ${node.id}`);
  }
  throw new Error('自然回放超出节点总量：' + target);
}
function finish(engine, decisions = {}) {
  for (let steps = 0; steps <= Object.keys(nodes).length; steps++) {
    const node = engine.current();
    if (node.type === 'end' && !node.next) return engine;
    if (node.type === 'choice') {
      if (Object.hasOwn(decisions, node.id)) choose(engine, decisions[node.id]);
      else assert(engine.choose(engine.availableChoices()[0].index));
    } else assert(engine.advance());
  }
  throw new Error('自然回放未到终止页');
}
function finishAll(engine, events = [], decisions = {}) {
  for (let steps = 0; steps <= Object.keys(nodes).length; steps++) {
    const node = engine.current();
    events.push(node.id);
    if (node.type === 'end' && !node.next) return [{ engine, events, decisions }];
    if (node.type === 'choice') {
      return engine.availableChoices().flatMap(({ index, option }) => {
        const branch = new StoryEngine(story, engine.snapshot());
        assert(branch.choose(index));
        return finishAll(branch, [...events], { ...decisions, [node.id]: option.value });
      });
    }
    assert(engine.advance());
  }
  throw new Error('分支回放未到终止页');
}
module.exports = { story, reach, finish, choose, eligible };
if (require.main === module) run();

function run() {
  fs.mkdirSync(out, { recursive: true });
  const report = {
    date: new Date().toISOString(),
    release: story.release,
    scope: '当前正式剧情的结构、自然回放与严格存档；不代替浏览器视觉或线上验收',
    files: Object.fromEntries(['story.js', 'engine.js', 'assets/runtime-v0.4-manifest.json'].map(file =>
      [file, fs.existsSync(path.join(root, file)) ? sha256(fs.readFileSync(path.join(root, file))) : null])),
    checks: [],
    routes: []
  };
  const save = () => fs.writeFileSync(path.join(out, 'story-results.json'), JSON.stringify(report, null, 2) + '\n');
  const check = (name, action) => {
    try {
      const detail = action();
      report.checks.push({ name, pass: true, detail });
      console.log('PASS ' + name);
    } catch (error) {
      report.checks.push({ name, pass: false, error: error.stack });
      save();
      throw error;
    }
  };
  check('三章加后日谈、九人、七线、双终止页，日期与资源有效，原10CG/48绑定保留', () => {
    assert.equal(story.release, '0.4');
    assert.deepEqual(Object.keys(story.chapters).sort(), ['1', '2', '3', 'epilogue']);
    assert.equal(Object.keys(story.characters).length, 9);
    assert.equal(story.characters.piao.name, '飘');
    assert.equal(story.characters.piao.adult, true);
    assert(story.characters.piao.age === null || story.characters.piao.age >= 18);
    assert.equal(story.routeChoice, 'ch3_route_choice');
    assert.equal(story.previewChoice, 'c6');
    assert.deepEqual(nodes.ch3_route_choice.choices.map(option => option.value).sort(), [...routeIds].sort());
    assert.equal(nodes.ch3_piao_commit.flag, 'piaoRelationship');
    assert.deepEqual(nodes.ch3_piao_commit.choices.map(option => option.value).sort(), ['friends', 'together']);
    assert.equal(nodes.ch2_piao_invitation.flag, 'piaoInvitation');
    assert.deepEqual(nodes.ch2_piao_invitation.choices.map(option => option.value).sort(), ['friendly', 'interested']);
    const actualTerminals = Object.values(nodes).filter(node => node.type === 'end' && !node.next).map(node => node.id);
    assert.deepEqual(actualTerminals.sort(), terminalIds);
    for (const route of routeIds) {
      const node = nodes['end_ch3_' + route];
      assert.equal(node.type, 'end', route);
      assert(node.next, route + ' 第三章阶段页缺少后续');
      assert.equal(story.scenes[node.scene].chapter, 3);
    }
    const epilogueScenes = Object.values(story.scenes).filter(scene => scene.chapter === 'epilogue');
    assert(epilogueScenes.length >= 2);
    for (const scene of epilogueScenes) {
      assert.equal(scene.day, 751);
      assert.equal(scene.dayLabel, '两年后');
    }
    const assetPaths = new Set(Object.values(story.backgrounds));
    for (const character of Object.values(story.characters)) {
      assetPaths.add(character.image);
      for (const asset of Object.values(character.expressions || {})) assetPaths.add(asset);
    }
    for (const cg of Object.values(story.cgs)) assetPaths.add(cg.image);
    for (const [id, node] of Object.entries(nodes)) {
      assert.equal(node.id, id);
      assert(['line', 'choice', 'gate', 'end'].includes(node.type), id);
      const scene = story.scenes[node.scene];
      assert(scene, id + ' 场景缺失');
      assert(story.chapters[scene.chapter], id + ' 章节缺失');
      assert(Number.isFinite(scene.day), id + ' 日期缺失');
      assert(story.backgrounds[node.bg ?? scene.bg], id + ' 背景缺失');
      if (node.character) assert(story.characters[node.character], id + ' 角色缺失');
      if (node.expression) assert(story.characters[node.character]?.expressions[node.expression], id + ' 差分未注册');
      if (node.avatarExpression) {
        const speaker = node.speaker === 'narrator' ? 'wenwen' : node.speaker;
        assert(story.characters[speaker]?.expressions[node.avatarExpression], id + ' 头像差分未注册');
      }
      if (node.cg) assert(story.cgs[node.cg], id + ' CG 缺失');
      if (node.type === 'line') assert(node.text && node.text.length <= 110, id + ' 单条缺失或过长');
      if (node.type === 'choice') {
        assert(node.flag && node.choices.length >= 2, id);
        assert.equal(new Set(node.choices.map(option => option.value)).size, node.choices.length, id);
      }
      for (const next of links(node)) {
        assert(nodes[next], `${id} → ${next} 悬链`);
        assert(story.scenes[nodes[next].scene].day >= scene.day, `${id} → ${next} 日期倒退`);
      }
    }
    const baseline = parseStory(fs.readFileSync(path.join(out, 'before/story.js'), 'utf8'));
    const bindings = value => Object.values(value.nodes).filter(node => node.cg).map(node => [node.id, node.cg]).sort();
    assert.equal(Object.keys(story.cgs).length, 10);
    assert.equal(bindings(story).length, 48);
    assert.deepEqual(bindings(story), bindings(baseline));
    assert.deepEqual(nodes.c6.choices.map(option => option.value), baseline.nodes.c6.choices.map(option => option.value));
    for (const [id, oldNode] of Object.entries(baseline.nodes)) {
      assert(nodes[id], id + ' 原节点被移除');
      const original = JSON.parse(JSON.stringify(oldNode));
      const current = JSON.parse(JSON.stringify(nodes[id]));
      if (['ch2_record_09', 'ch2_result_06'].includes(id)) { delete original.next; delete current.next; }
      if (id.startsWith('end_ch3_')) {
        delete original.next; delete current.next;
        delete original.nextChapter; delete current.nextChapter;
      }
      if (id === story.routeChoice) {
        for (const oldOption of original.choices) {
          const currentOption = current.choices.find(option => option.value === oldOption.value);
          assert(currentOption, id + ' 原路线被移除');
          const oldDetails = { ...oldOption }, currentDetails = { ...currentOption };
          // 非飘选项可以经过新增的邀约答复，再进入原路线。
          delete oldDetails.next; delete currentDetails.next;
          assert.deepEqual(currentDetails, oldDetails);
        }
        delete original.choices; delete current.choices;
      }
      assert.deepEqual(current, original, id + ' 原剧情存在未约定的改动');
    }
    const manifest = JSON.parse(fs.readFileSync(path.join(root, 'assets/runtime-v0.4-manifest.json'), 'utf8'));
    assert.equal(manifest.release, '0.4');
    assert.equal(manifest.chapterCount, 3);
    assert.equal(manifest.epilogueCount, 1);
    assert.equal(manifest.characterCount, 9);
    assert.equal(manifest.nodeCount, Object.keys(nodes).length);
    const registered = new Set(manifest.assets.map(asset => asset.path));
    for (const asset of assetPaths) assert(registered.has(asset), asset + ' 未打包到清单');
    for (const asset of manifest.assets) {
      const buffer = fs.readFileSync(path.join(root, asset.path));
      assert(buffer.length > 0, asset.path);
      assert.equal(buffer.length, asset.bytes, asset.path);
      assert.equal(sha256(buffer), asset.sha256, asset.path);
    }
    return {
      chapters: 3, epilogues: 1, characters: 9, scenes: Object.keys(story.scenes).length,
      nodes: Object.keys(nodes).length, assets: manifest.assets.length, cgCount: 10, cgBindings: 48,
      chapter3Stops: routeIds.map(route => 'end_ch3_' + route), terminals: actualTerminals,
      preservedOriginalNodes: Object.keys(baseline.nodes).length
    };
  });

  // 仅合并对未来条件与结局断言等价的状态；每个可选分支仍独立计入路径总量。
  const live = new Map(), visiting = new Set(), reached = new Set(), witnesses = new Map();
  const memo = new Map(), terminals = new Set();
  function future(id) {
    if (live.has(id)) return live.get(id);
    assert(!visiting.has(id), '剧情图循环：' + id);
    visiting.add(id);
    const node = nodes[id], flags = new Set();
    for (const next of links(node)) for (const flag of future(next)) flags.add(flag);
    if (node.type === 'choice') {
      flags.delete(node.flag);
      for (const option of node.choices) for (const condition of option.requires || []) flags.add(condition.flag);
    }
    for (const condition of node.cases || []) flags.add(condition.flag);
    if (hasHiddenName(node)) { flags.add('qiuSignal'); flags.add('qiuReply'); }
    if (node.type === 'end' && !node.next) { flags.add('route'); flags.add('piaoRelationship'); }
    visiting.delete(id);
    live.set(id, [...flags].sort());
    return live.get(id);
  }
  function assertEnding(node, flags) {
    const withWenwen = flags.route === 'piao' && flags.piaoRelationship === 'together';
    assert.equal(node.id, withWenwen ? 'end_piao_wenwen' : 'end_piao_maolang',
      '结局必须由正式路线与飘的关系共同决定：' + JSON.stringify(flags));
    assert.equal(story.scenes[node.scene].chapter, 'epilogue');
    if (flags.route !== 'piao') assert.equal(flags.piaoRelationship, undefined, '非飘路线残留关系标记');
  }
  function explore(id, flags, decisions) {
    const key = id + ':' + JSON.stringify(live.get(id).map(flag => Object.hasOwn(flags, flag) ? flags[flag] : null));
    if (memo.has(key)) return memo.get(key);
    reached.add(id);
    if (!witnesses.has(id)) witnesses.set(id, decisions);
    const node = nodes[id];
    if (hasHiddenName(node)) assert(eligible(flags), id + ' 提前泄露隐藏身份');
    if (node.type === 'choice' && !eligible(flags)) {
      for (const option of node.choices.filter(option => allowed(flags, option))) {
        assert(!/黄球球/.test(option.label), id + ' 可用选项泄露隐藏身份');
      }
    }
    if (node.type === 'end' && !node.next) {
      assertEnding(node, flags);
      terminals.add(id);
      const result = { paths: 1, minLines: 0, maxLines: 0, minChars: 0, maxChars: 0 };
      memo.set(key, result);
      return result;
    }
    let branches;
    if (node.type === 'choice') branches = node.choices.filter(option => allowed(flags, option)).map(option =>
      explore(option.next, { ...flags, [node.flag]: option.value }, { ...decisions, [id]: option.value }));
    else if (node.type === 'gate') branches = [explore((node.cases.find(c => matches(flags, c)) || { next: node.default }).next, flags, decisions)];
    else branches = [explore(node.next, flags, decisions)];
    assert(branches.length, id + ' 无可用分支');
    const chars = node.type === 'line' ? node.text.length : 0;
    const result = {
      paths: branches.reduce((sum, branch) => sum + branch.paths, 0),
      minLines: Math.min(...branches.map(branch => branch.minLines)) + Number(node.type === 'line'),
      maxLines: Math.max(...branches.map(branch => branch.maxLines)) + Number(node.type === 'line'),
      minChars: Math.min(...branches.map(branch => branch.minChars)) + chars,
      maxChars: Math.max(...branches.map(branch => branch.maxChars)) + chars
    };
    memo.set(key, result);
    return result;
  }
  check('穷尽合法分支：全节点可达、无环、隐藏条件不泄漏，恋人与婚礼结局唯一正确', () => {
    for (const id of Object.keys(nodes)) future(id);
    const result = explore(story.start, {}, {});
    assert.deepEqual(Object.keys(nodes).filter(id => !reached.has(id)), []);
    assert.deepEqual([...terminals].sort(), terminalIds);
    assert(Number.isSafeInteger(result.paths));
    return { ...result, reachableNodes: reached.size, equivalentStates: memo.size, terminals: [...terminals].sort() };
  });
  check('全部可见节点均可自然到达，并经完整选择轨迹严格存档恢复', () => {
    let restored = 0;
    const byChapter = {};
    for (const [id, decisions] of witnesses) {
      if (nodes[id].type === 'gate') continue;
      const engine = reach(id, decisions);
      const saved = engine.snapshot();
      assert.deepEqual(new StoryEngine(story, saved).snapshot(), saved, id);
      const chapter = story.scenes[nodes[id].scene].chapter;
      byChapter[chapter] = (byChapter[chapter] || 0) + 1;
      restored++;
    }
    return { restored, byChapter };
  });
  check('隐藏前置×原预告×前期邀约×七条路线×全部线内选择的自然回放组合', () => {
    let previewCombinations = 0, terminalRuns = 0, hiddenRejected = 0;
    const routeVariants = new Set();
    for (const qiuSignal of ['record', 'work']) for (const qiuReply of ['reply', 'finish']) {
      const ready = qiuSignal === 'record' && qiuReply === 'reply';
      for (const preview of ['xiaoman', 'zhouzhi', 'mengyao', 'yelan', ...(ready ? ['huangqiuqiu'] : [])]) {
        previewCombinations++;
        for (const invitation of ['interested', 'friendly']) {
          const beforeRoute = reach('ch3_route_choice', {
            h1: qiuSignal, h2: qiuReply, c6: preview, ch2_piao_invitation: invitation
          });
          assert.equal(beforeRoute.availableChoices().length, ready ? 7 : 6);
          assert.equal(beforeRoute.state.flags.preview, preview);
          assert.equal(beforeRoute.state.flags.piaoInvitation, invitation);
          assert.equal(beforeRoute.state.history.some(entry => entry.nodeId.startsWith('ch2_qiu_talk')), ready);
          if (!ready) {
            const saved = beforeRoute.snapshot();
            const hiddenIndex = beforeRoute.current().choices.findIndex(option => option.value === 'huangqiuqiu');
            assert.equal(beforeRoute.choose(hiddenIndex), false);
            assert.deepEqual(beforeRoute.snapshot(), saved);
            hiddenRejected++;
          }
          for (const { index, option } of beforeRoute.availableChoices()) {
            const branch = new StoryEngine(story, beforeRoute.snapshot());
            assert(branch.choose(index));
            for (const result of finishAll(branch)) {
              const engine = result.engine, flags = engine.state.flags;
              assert.equal(flags.route, option.value);
              assert.equal(flags.preview, preview);
              assert.equal(flags.piaoInvitation, invitation);
              assertEnding(engine.current(), flags);
              assert.deepEqual(result.events.filter(id => id.startsWith('end_ch3_')), ['end_ch3_' + option.value]);
              const replyPrefix = 'ch3_piao_reply_' + option.value + '_' + (invitation === 'interested' ? 'i' : 'f');
              assert.deepEqual(result.events.filter(id => id.startsWith('ch3_piao_reply_')),
                option.value === 'piao' ? [] : [replyPrefix + '_01', replyPrefix + '_02'],
                option.value + ' 应回应飘的邀约后再进入原路线');
              assert.equal(engine.advance(), false);
              const saved = engine.snapshot();
              assert.deepEqual(new StoryEngine(story, saved).snapshot(), saved);
              const signature = option.value + ':' + JSON.stringify(result.decisions);
              routeVariants.add(signature);
              if (qiuSignal === 'record' && qiuReply === 'reply' && preview === 'xiaoman' && invitation === 'interested') {
                const chapter3 = saved.history.filter(entry => story.scenes[entry.scene].chapter === 3 && entry.kind === 'line');
                const epilogue = saved.history.filter(entry => story.scenes[entry.scene].chapter === 'epilogue' && entry.kind === 'line');
                report.routes.push({
                  route: option.value, decisions: result.decisions, terminal: engine.current().id,
                  chapter3Lines: chapter3.length, chapter3Chars: chapter3.reduce((sum, entry) => sum + entry.text.length, 0),
                  epilogueLines: epilogue.length, epilogueChars: epilogue.reduce((sum, entry) => sum + entry.text.length, 0)
                });
              }
              terminalRuns++;
            }
          }
        }
      }
    }
    return {
      hiddenConditionCombinations: 4, previewCombinations, invitationVariants: 2,
      routeVariants: routeVariants.size, terminalRuns, hiddenRejected,
      invitationReplyCoverage: '六条非飘路线、两种邀约均经过相应回执；飘路线直接赴约'
    };
  });
  check('飘与其余六线双向重选、承诺重选和预告重选均清理后续关系与历史', () => {
    let transitions = 0;
    const base = reach('ch3_route_choice');
    const baseSaved = base.snapshot();
    for (const route of routeIds.filter(route => route !== 'piao')) {
      const engine = new StoryEngine(story, baseSaved);
      choose(engine, 'piao');
      finish(engine, { ch3_piao_commit: 'together' });
      assert.equal(engine.current().id, 'end_piao_wenwen');
      assert(engine.replayChoice('ch3_route_choice'));
      assert.deepEqual(engine.snapshot(), baseSaved);
      choose(engine, route);
      finish(engine);
      assert.equal(engine.current().id, 'end_piao_maolang');
      assert.equal(engine.state.flags.piaoRelationship, undefined);
      assert(!engine.state.choices.some(entry => entry.nodeId === 'ch3_piao_commit'));
      assert(engine.replayChoice('ch3_route_choice'));
      assert.deepEqual(engine.snapshot(), baseSaved);
      choose(engine, 'piao');
      finish(engine, { ch3_piao_commit: 'friends' });
      assert.equal(engine.current().id, 'end_piao_maolang');
      assert(engine.replayChoice('ch3_piao_commit'));
      assert.equal(engine.state.flags.piaoRelationship, undefined);
      assert(!engine.state.history.some(entry => story.scenes[entry.scene].chapter === 'epilogue'));
      choose(engine, 'together');
      finish(engine);
      assert.equal(engine.current().id, 'end_piao_wenwen');
      const previewCheckpoint = engine.snapshot().previewCheckpoint;
      assert(engine.replayPreview());
      assert.equal(engine.current().id, story.previewChoice);
      assert.deepEqual(engine.snapshot(false), previewCheckpoint);
      assert.equal(engine.state.flags.route, undefined);
      assert.equal(engine.state.flags.piaoRelationship, undefined);
      transitions += 4;
    }
    return { otherRoutes: 6, replayTransitions: transitions, previewResets: 6 };
  });
  check('伪造关系、结局或选择轨迹的存档被拒绝，失败恢复不改变当前状态', () => {
    let rejected = 0;
    const samples = [
      { route: 'piao', relation: 'together' },
      { route: 'piao', relation: 'friends' },
      { route: 'xiaoman' },
      { route: 'solo' },
      { route: 'huangqiuqiu' }
    ];
    for (const sample of samples) {
      const engine = reach('ch3_route_choice');
      choose(engine, sample.route);
      finish(engine, sample.relation ? { ch3_piao_commit: sample.relation } : {});
      const saved = engine.snapshot();
      const forgeries = [
        bad => { bad.flags.piaoRelationship = sample.relation === 'together' ? 'friends' : 'together'; },
        bad => { bad.flags.piaoRelationship = 'forged'; },
        bad => { delete bad.flags.piaoRelationship; },
        bad => { bad.nodeId = saved.nodeId === 'end_piao_wenwen' ? 'end_piao_maolang' : 'end_piao_wenwen'; },
        bad => { bad.flags.route = sample.route === 'piao' ? 'solo' : 'piao'; },
        bad => { bad.flags.qiuSignal = 'forged'; },
        bad => {
          const choice = bad.choices.find(entry => entry.nodeId === 'ch3_piao_commit');
          if (choice) {
            const option = nodes.ch3_piao_commit.choices.find(option => option.value !== choice.value);
            choice.value = option.value; choice.label = option.label;
          } else {
            const option = nodes.ch3_piao_commit.choices[0];
            bad.choices.push({ nodeId: 'ch3_piao_commit', value: option.value, label: option.label });
          }
        }
      ];
      for (const forge of forgeries) {
        const bad = engine.snapshot();
        forge(bad);
        if (JSON.stringify(bad) === JSON.stringify(saved)) continue;
        assert.throws(() => engine.restore(bad), /存档不兼容或已损坏/);
        assert.deepEqual(engine.snapshot(), saved);
        rejected++;
      }
    }
    return { validSourceStates: samples.length, rejectedForgeries: rejected, transactionalFailures: rejected };
  });
  report.pass = report.checks.every(item => item.pass);
  save();
  console.log(JSON.stringify(report.checks.map(item => ({ name: item.name, ...item.detail })), null, 2));
}
