'use strict';
const fs = require('node:fs'), path = require('node:path'), assert = require('node:assert/strict');
const { StoryEngine } = require('../engine.js');
const root = path.resolve(__dirname, '..');
const source = fs.readFileSync(path.join(root, 'story.js'), 'utf8');
const story = JSON.parse(source.slice(source.indexOf('{'), source.lastIndexOf('}') + 1));
const nodes = story.nodes;
const eligible = flags => flags.qiuSignal === 'record' && flags.qiuReply === 'reply';
const matches = (flags, c) => Object.hasOwn(flags, c.flag) && flags[c.flag] === c.value;
const allowed = (flags, o) => !o.requires || o.requires.every(c => matches(flags, c));
function reach(target, decisions = {}) {
  const engine = new StoryEngine(story);
  for (let steps = 0; steps < Object.keys(nodes).length + 1; steps++) {
    const n = engine.current();
    if (n.id === target) return engine;
    if (n.type === 'choice') {
      const options = engine.availableChoices();
      const desired = decisions[n.id] ?? ({ h1: 'record', h2: 'reply', c6: 'xiaoman' }[n.id]);
      const option = options.find(x => x.option.value === desired) || options[0];
      assert(engine.choose(option.index));
    } else assert(engine.advance(), `无法到达 ${target}，停在 ${n.id}`);
  }
  throw new Error('回放超过节点总量：' + target);
}
module.exports = { story, reach, eligible };
if (require.main === module) run();
function run() {
  const report = { date: new Date().toISOString(), release: story.release, checks: [], routes: [] };
  const check = (name, fn) => { const detail = fn(); report.checks.push({ name, pass: true, detail }); console.log('PASS ' + name); };
  const links = n => n.type === 'choice' ? n.choices.map(o => o.next) :
    n.type === 'gate' ? n.cases.map(c => c.next).concat(n.default) : n.next ? [n.next] : [];
  check('三章结构、日期、资源、十张CG与原绑定完整', () => {
    assert.equal(story.release, '0.3');
    assert.equal(Object.keys(story.chapters).length, 3);
    assert.equal(Object.keys(story.characters).length, 8);
    const oldText = fs.readFileSync(path.join(root, 'qa/chapter3-20261020/before/story.js'), 'utf8');
    const old = JSON.parse(oldText.slice(oldText.indexOf('{'), oldText.lastIndexOf('}') + 1));
    for (const [id, n] of Object.entries(nodes)) {
      assert.equal(n.id, id);
      assert(['line', 'choice', 'gate', 'end'].includes(n.type), id);
      const scene = story.scenes[n.scene]; assert(scene, id);
      assert(story.chapters[scene.chapter]);
      assert(story.backgrounds[n.bg ?? scene.bg], id);
      if (n.character) assert(story.characters[n.character], id);
      if (n.expression) assert(story.characters[n.character].expressions[n.expression], id);
      if (n.type === 'line') assert(n.text && n.text.length <= 110, id + ' 单条过长');
      if (n.type === 'choice') {
        assert(n.flag && n.choices.length >= 2, id);
        assert.equal(new Set(n.choices.map(c => c.value)).size, n.choices.length, id);
      }
      for (const to of links(n)) {
        assert(nodes[to], id + ' → ' + to);
        assert(story.scenes[nodes[to].scene].day >= scene.day, id + ' 日期倒退');
      }
    }
    const baseCG = Object.values(old.nodes).filter(n => n.cg).map(n => [n.id, n.cg]).sort();
    assert.deepEqual(Object.values(nodes).filter(n => n.cg).map(n => [n.id, n.cg]).sort(), baseCG);
    assert.equal(baseCG.length, 48);
    const manifest = JSON.parse(fs.readFileSync(path.join(root, 'assets/runtime-v0.3-manifest.json')));
    for (const a of manifest.assets) assert(fs.statSync(path.join(root, a.path)).size > 0, a.path);
    assert.equal(Object.keys(story.cgs).length, 10);
    return { scenes: Object.keys(story.scenes).length, nodes: Object.keys(nodes).length, assets: manifest.assets.length };
  });
  // 按未来仍会读取的标记合并等价状态；路径数仍对每个可选分支分别累计。
  const live = new Map(), visiting = new Set();
  function future(id) {
    if (live.has(id)) return live.get(id);
    assert(!visiting.has(id), '剧情图循环：' + id); visiting.add(id);
    const n = nodes[id], flags = new Set();
    for (const to of links(n)) for (const flag of future(to)) flags.add(flag);
    if (n.type === 'choice') {
      flags.delete(n.flag);
      for (const o of n.choices) for (const c of o.requires || []) flags.add(c.flag);
    }
    for (const c of n.cases || []) flags.add(c.flag);
    visiting.delete(id); live.set(id, [...flags].sort()); return live.get(id);
  }
  future(story.start);
  const memo = new Map(), reached = new Set(), witnesses = new Map(), terminals = new Set();
  function explore(id, flags, decisions) {
    const key = id + ':' + JSON.stringify(live.get(id).map(f => flags[f] ?? null));
    if (memo.has(key)) return memo.get(key);
    reached.add(id); if (!witnesses.has(id)) witnesses.set(id, decisions);
    const n = nodes[id];
    if (n.character === 'huangqiuqiu' || n.speaker === 'huangqiuqiu' || /黄球球/.test(n.text || '')) {
      assert(eligible(flags), id + ' 提前泄露隐藏身份');
    }
    if (n.type === 'end' && !n.next) {
      terminals.add(id);
      const result = { paths: 1, minLines: 0, maxLines: 0, minChars: 0, maxChars: 0 };
      memo.set(key, result); return result;
    }
    let branches;
    if (n.type === 'choice') branches = n.choices.filter(o => allowed(flags, o)).map(o =>
      explore(o.next, { ...flags, [n.flag]: o.value }, { ...decisions, [id]: o.value }));
    else if (n.type === 'gate') branches = [explore((n.cases.find(c => matches(flags, c)) || { next: n.default }).next, flags, decisions)];
    else branches = [explore(n.next, flags, decisions)];
    assert(branches.length);
    const size = n.type === 'line' ? n.text.length : 0;
    const result = {
      paths: branches.reduce((a, b) => a + b.paths, 0),
      minLines: Math.min(...branches.map(b => b.minLines)) + Number(n.type === 'line'),
      maxLines: Math.max(...branches.map(b => b.maxLines)) + Number(n.type === 'line'),
      minChars: Math.min(...branches.map(b => b.minChars)) + size,
      maxChars: Math.max(...branches.map(b => b.maxChars)) + size
    };
    memo.set(key, result); return result;
  }
  check('穷尽合法分支：全节点可达、无循环、隐藏身份受前置条件保护', () => {
    const result = explore(story.start, {}, {});
    assert.deepEqual([...new Set(Object.keys(nodes).filter(id => !reached.has(id)))], []);
    assert.equal(terminals.size, 6);
    return { ...result, reachableNodes: reached.size, equivalentStates: memo.size, terminals: [...terminals] };
  });
  check('每个可见节点均由自然回放到达并通过严格存档恢复', () => {
    let restored = 0;
    for (const [id, decisions] of witnesses) {
      if (nodes[id].type === 'gate') continue;
      const engine = reach(id, decisions);
      assert.deepEqual(new StoryEngine(story, engine.snapshot()).snapshot(), engine.snapshot(), id);
      restored++;
    }
    return { restored };
  });
  check('四种隐藏条件、第一章消息与第三章路线相互独立、两次章末可继续', () => {
    for (const qiuSignal of ['record', 'work']) for (const qiuReply of ['reply', 'finish']) {
      const ready = qiuSignal === 'record' && qiuReply === 'reply';
      for (const preview of ['xiaoman', 'zhouzhi', 'mengyao', 'yelan', ...(ready ? ['huangqiuqiu'] : [])]) {
        const decisions = { h1: qiuSignal, h2: qiuReply, c6: preview };
        const e = reach('ch3_route_choice', decisions);
        assert.equal(e.availableChoices().length, ready ? 6 : 5);
        assert.equal(e.state.flags.preview, preview);
        assert.equal(e.state.history.some(n => n.nodeId.startsWith('ch2_qiu_talk')), ready);
        for (const { index, option } of e.availableChoices()) {
          const branch = new StoryEngine(story, e.snapshot());
          assert(branch.choose(index));
          while (!(branch.current().type === 'end' && !branch.current().next)) {
            if (branch.current().type === 'choice') branch.choose(branch.availableChoices()[0].index);
            else assert(branch.advance());
          }
          assert.equal(branch.current().id, 'end_ch3_' + option.value);
          assert.equal(branch.advance(), false);
          const prior = Object.fromEntries(Object.entries(branch.state.flags).filter(([k]) => k !== 'route' && !k.startsWith('ch3')));
          assert(branch.replayChoice('ch3_route_choice'));
          assert.deepEqual(branch.state.flags, prior);
        }
      }
    }
    return { hiddenConditionCombinations: 4, previewCombinations: 17 };
  });
  check('六线两种内部选择均回收；损坏存档不可改变当前状态', () => {
    for (const route of ['xiaoman', 'zhouzhi', 'mengyao', 'yelan', 'solo', 'huangqiuqiu']) {
      for (let support = 0; support < 2; support++) {
        const e = reach('ch3_route_choice');
        e.choose(e.availableChoices().find(x => x.option.value === route).index);
        let choices = 0;
        while (!(e.current().type === 'end' && !e.current().next)) {
          if (e.current().type === 'choice') { choices++; e.choose(e.availableChoices()[support].index); }
          else e.advance();
        }
        assert.equal(choices, 1, route);
        assert.equal(e.current().id, 'end_ch3_' + route);
        const saved = e.snapshot(), bad = e.snapshot();
        bad.flags.qiuSignal = 'forged';
        assert.throws(() => e.restore(bad)); assert.deepEqual(e.snapshot(), saved);
        const chapter3 = saved.history.filter(h => story.scenes[h.scene].chapter === 3 && h.kind === 'line');
        report.routes.push({ route, support, lines: chapter3.length, chars: chapter3.reduce((sum, h) => sum + h.text.length, 0) });
      }
    }
    return { routeVariants: 12 };
  });
  fs.writeFileSync(path.join(__dirname, 'chapter3-20261020/story-results.json'), JSON.stringify(report, null, 2) + '\n');
  console.log(JSON.stringify(report.checks.map(c => ({ name: c.name, ...c.detail })), null, 2));
}
