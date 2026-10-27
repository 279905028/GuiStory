/* 本轮只审校独立文稿，复用历史阅读器；不调用历史run，不覆盖历史报告。 */
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const assert = require('node:assert/strict');
const old = require('../rewrite-20261027/audit.cjs');
const root = path.resolve(__dirname, '../../..');
const folder = '项目文档/故事/v1.1润色稿';
const current = path.join(root, folder);
const before = path.join(__dirname, 'baseline', folder);
const original = path.join(__dirname, '../rewrite-20261027/baseline', folder);
const epilogueName = '后日谈-他们的日子.md';
const choiceRE = /^\*\*选择 ([A-Z0-9]+-\d{2})｜(.+)\*\*$/gm;
const read = (dir, name) => fs.readFileSync(path.join(dir, name), 'utf8');
const hash = value => crypto.createHash('sha256').update(value).digest('hex');
const ids = text => [...text.matchAll(choiceRE)].map(m => m[1]);
const assignments = names => Array.from({length: 2 ** names.length}, (_, n) =>
  Object.fromEntries(names.map((id, i) => [id, (n >> i) & 1 ? 'B' : 'A'])));
const endingMap = Object.fromEntries(old.routes.flatMap(([prefix]) => [1, 2].map(n => {
  const ending = `${prefix}-E${n}`;
  return [ending, ending === 'PI-E1' ? 'none' : ending === 'FR-E2' ? 'distant' : 'full'];
})));

function filterEpilogue(text, ending, flags = {}) {
  assert(Object.hasOwn(endingMap, ending), '未知结局：' + ending);
  assert.notEqual(ending, 'PI-E1', 'PI-E1不得读取婚姻后日谈');
  const context = {ENDING: ending, ...flags};
  const stack = [], lines = [];
  for (const raw of text.split('\n')) {
    const line = raw.trim();
    const condition = /^<!-- IF (.+) -->$/.exec(line);
    if (condition) {
      const active = stack.every(Boolean);
      const values = condition[1].split('|').map(group => group.split('&').map(term => {
        const m = /^\s*(ENDING|PI06-01|PI08-01)\s*(!=|=)\s*([A-Z0-9-]+)\s*$/.exec(term);
        assert(m, '未知后日谈条件：' + term);
        const [, field, operator, value] = m;
        assert(field === 'ENDING' ? Object.hasOwn(endingMap, value) : ['A', 'B'].includes(value), term);
        // 不读取未进入路线的选择；仅校验其语法。
        if (!active) return false;
        assert(Object.hasOwn(context, field), '缺少后日谈阅读上下文：' + field);
        return operator === '=' ? context[field] === value : context[field] !== value;
      }));
      stack.push(active && values.some(group => group.every(Boolean)));
      continue;
    }
    if (line === '<!-- ENDIF -->') {
      assert(stack.length, '后日谈多余ENDIF');
      stack.pop();
      continue;
    }
    assert(!line.startsWith('<!-- IF'), '后日谈条件格式错误');
    if (stack.every(Boolean)) lines.push(raw);
  }
  assert.equal(stack.length, 0, '后日谈条件未闭合');
  return old.render(lines.join('\n'), flags);
}

function routeReading(text, flags) {
  const marker = 'EPILOGUE_PM';
  const rendered = old.render(text.replaceAll('<!-- EPILOGUE PM -->', marker), flags);
  const connections = rendered.text.split(marker).length - 1;
  const body = rendered.text.replaceAll(marker, '').trim();
  return {...rendered, text: body, han: old.han(body), connections};
}

function choices(text) {
  return [...text.matchAll(choiceRE)].map(m => {
    const end = text.indexOf('**选择 ', m.index + m[0].length);
    const section = text.slice(m.index, end < 0 ? undefined : end);
    const options = m[1] === 'ROUTE-01'
      ? [...section.matchAll(/^### (.+)｜(.+)$/gm)].map(x => [x[1], x[2]])
      : [...section.matchAll(/^#### ([AB])｜(.+)$/gm)].slice(0, 2).map(x => [x[1], x[2]]);
    assert.equal(options.length, m[1] === 'ROUTE-01' ? 7 : 2);
    return {id: m[1], question: m[2], options};
  });
}

function commonPaths() {
  const names = ['第一章-回到毕节.md', '第二章-十四天.md'];
  const versions = [before, current, original].map(dir => names.map(name => read(dir, name)));
  const flagNames = versions[0].flatMap(ids), unique = new Map();
  for (const flags of assignments(flagNames)) {
    const rendered = versions.map(texts => {
      const a = old.render(texts[0], flags);
      const b = old.render(old.commonGuard(texts[1]), flags, a.visited);
      return {han: a.han + b.han, text: a.text + '\n\n' + b.text, visited: [...a.visited, ...b.visited]};
    });
    const [a, b, c] = rendered;
    assert.deepEqual(b.visited, a.visited, '共通选择访问变化');
    assert.deepEqual(b.visited, c.visited, '历史共通入口变化');
    assert.equal(b.visited.includes('C02-01'), flags['C01-02'] === 'A');
    const hidden = flags['C01-02'] === 'A' && flags['C02-01'] === 'A';
    assert.equal(b.visited.includes('C02-07'), hidden);
    if (flags['C02-05'] === 'B') {
      assert(!b.text.includes('拿筷子给你上课'), '叶岚B支读到A支的教学回扣');
      assert(!b.text.includes('和刚才拿筷子敲桌子的表情不一样'), '共同旁白泄漏A支事件');
    }
    assert(!b.text.includes('还约我吃这个饼干哪样'), '孟遥邀约来源回退');
    const key = b.visited.map(id => id + '=' + flags[id]).join(',');
    if (!unique.has(key)) unique.set(key, {flags, before: a, fresh: b, original: c, hidden});
  }
  return [...unique.values()];
}

function stats() {
  return {readingPaths: 0, currentHanMin: Infinity, currentHanMax: 0,
    mainAddedHanMin: Infinity, mainAddedHanMax: 0, epilogueHanMin: Infinity, epilogueHanMax: 0,
    totalAddedHanMin: Infinity, totalAddedHanMax: 0, growthFromOriginalMinPct: Infinity, growthFromOriginalMaxPct: 0};
}
function accumulate(s, main, added, epilogue, origin) {
  s.readingPaths++;
  const total = main + epilogue, growth = (total / origin - 1) * 100;
  for (const [field, value] of Object.entries({currentHan: total, mainAddedHan: added,
    epilogueHan: epilogue, totalAddedHan: added + epilogue, growthFromOriginal: growth})) {
    const suffix = field === 'growthFromOriginal' ? 'Pct' : '';
    s[field + 'Min' + suffix] = Math.min(s[field + 'Min' + suffix], value);
    s[field + 'Max' + suffix] = Math.max(s[field + 'Max' + suffix], value);
  }
}
function finish(s) {
  return Object.fromEntries(Object.entries(s).map(([key, value]) => [key, key.endsWith('Pct') ? +value.toFixed(2) : value]));
}

function run() {
  const common = commonPaths();
  const epilogue = read(current, epilogueName);
  assert.equal(choices(epilogue).length, 0, '后日谈不能增加选择');
  assert.equal([...epilogue.matchAll(/^#### 结局 /gm)].length, 0, '后日谈不能增加主结局');
  for (const ending of Object.keys(endingMap)) assert(epilogue.includes(ending), '入口表缺少 ' + ending);
  assert.throws(() => filterEpilogue(epilogue, 'PI-E1'), /不得读取/);
  assert.throws(() => filterEpilogue(epilogue, 'XX-E1'), /未知结局/);
  assert.throws(() => filterEpilogue(epilogue, 'PI-E2'), /缺少后日谈/);
  assert.throws(() => filterEpilogue('<!-- IF ENDING=FR-E1 -->', 'FR-E1'), /未闭合/);

  const allChoices = [], routeStats = [], samples = [], currentHashes = {};
  const mainNames = ['第一章-回到毕节.md', '第二章-十四天.md', '第三章-选一条路.md', ...old.routes.map(r => r[1])];
  let introductions = 0, bodies = 0;
  for (const name of mainNames) {
    const fresh = read(current, name), previous = read(before, name);
    assert.deepEqual(choices(fresh), choices(previous), name + '选择问题或选项变化');
    allChoices.push(...choices(fresh));
    introductions += [...fresh.matchAll(/^#{2,3} 剧情简介$/gm)].length;
    bodies += [...fresh.matchAll(/^#{2,3} 完整内容$/gm)].length;
    currentHashes[path.join(folder, name)] = hash(fresh);
  }
  assert.equal(introductions, 59); assert.equal(bodies, 59);
  assert.equal(allChoices.length, 69); assert.equal(new Set(allChoices.map(c => c.id)).size, 69);
  assert.equal(allChoices.reduce((sum, c) => sum + c.options.length, 0), 143);

  for (const [prefix, name, label, keys] of old.routes) {
    const fresh = read(current, name), previous = read(before, name), origin = read(original, name);
    const names = ids(fresh);
    assert.equal(names.length, 8);
    assert.deepEqual([...fresh.matchAll(/^## (第[三四五六七八九十]+章)｜/gm)].map(m => m[1]),
      ['第三章', '第四章', '第五章', '第六章', '第七章', '第八章', '第九章', '第十章']);
    const sourceEndings = [...fresh.matchAll(/^#### 结局 ([A-Z]+-E[12])｜(.+)$/gm)].map(m => [m[1], m[2]]);
    assert.deepEqual(sourceEndings, [...previous.matchAll(/^#### 结局 ([A-Z]+-E[12])｜(.+)$/gm)].map(m => [m[1], m[2]]));
    assert.deepEqual(sourceEndings.map(e => e[0]), [prefix + '-E1', prefix + '-E2']);
    const entries = [before, current, original].map(dir =>
      old.render(old.entry(read(dir, '第三章-选一条路.md'), label), {'ROUTE-01': label}));
    const pool = prefix === 'HQ' ? common.filter(c => c.hidden) : common;
    const combinations = Object.fromEntries(['AA', 'AB', 'BA', 'BB'].map(key => [key, stats()]));
    const endings = {}, reps = new Set();
    for (const flags of assignments(names)) {
      const a = old.render(previous, flags), b = routeReading(fresh, flags), c = old.render(origin, flags);
      assert.deepEqual(b.visited, names, name + '每路径必须保留8处选择');
      const combination = keys.map(k => flags[k]).join('');
      const ending = prefix + '-E' + (combination === 'AA' ? '1' : '2');
      assert.deepEqual(b.endings, [ending]);
      const connected = endingMap[ending] !== 'none';
      assert.equal(b.connections, connected ? 1 : 0, ending + '后日谈接续次数错误');
      const ep = connected ? filterEpilogue(epilogue, ending, flags) : {han: 0, text: ''};
      if (connected) {
        assert(ep.text.includes('结婚'), ending + '没有婚姻承接');
        assert(ep.text.includes('把她那格撤掉'), ending + '没有实际修复');
        if (ending === 'FR-E2') {
          assert(ep.text.includes('我没有赴一场让大家重新亲近的饭局'));
          assert(!ep.text.includes('毛狼把婚后的第一顿朋友饭约在小店'));
          assert(!ep.text.includes('后来碰面，毛狼说起那次取消'));
        } else assert(ep.text.includes('毛狼把婚后的第一顿朋友饭约在小店'));
        if (prefix === 'PI') {
          assert(ep.text.includes('约半年以后'));
          assert(ep.text.includes('毛狼那场临时取消了'), '飘线后日谈缺少“那次取消”的来源');
          assert(!ep.text.includes('飘去贵阳之后，群里的演出单换过几回'));
        } else assert(!ep.text.includes('我和飘分开后'));
      }
      endings[ending] ??= stats();
      for (const shared of pool) {
        const was = shared.before.han + entries[0].han + a.han;
        const main = shared.fresh.han + entries[1].han + b.han;
        const originalTotal = shared.original.han + entries[2].han + c.han;
        accumulate(combinations[combination], main, main - was, ep.han, originalTotal);
        accumulate(endings[ending], main, main - was, ep.han, originalTotal);
      }
      if (!reps.has(combination)) {
        const shared = pool.find(c => c.hidden) || pool[0];
        samples.push({prefix, combination, ending, flags, text: shared.fresh.text + '\n\n' + entries[1].text + '\n\n' + b.text + (ep.text ? '\n\n' + ep.text : '')});
        reps.add(combination);
      }
    }
    routeStats.push({prefix, file: name, keys, routeAssignments: 256, sourceEndings,
      combinations: Object.fromEntries(Object.entries(combinations).map(([k, v]) => [k, finish(v)])),
      endings: Object.fromEntries(Object.entries(endings).map(([k, v]) => [k, finish(v)]))});
  }
  assert.equal(samples.length, 28);
  const baselineManifest = JSON.parse(read(__dirname, 'baseline-manifest.json'));
  for (const [file, expected] of Object.entries(baselineManifest))
    assert.equal(hash(fs.readFileSync(path.join(__dirname, 'baseline', file))), expected, '本轮基线变化：' + file);
  const protectedBefore = JSON.parse(read(__dirname, 'protected-before.json'));
  const changed = Object.entries(protectedBefore).filter(([file, expected]) =>
    !fs.existsSync(path.join(root, file)) || hash(fs.readFileSync(path.join(root, file))) !== expected).map(([file]) => file);
  const observations = JSON.parse(read(__dirname, 'concurrent-changes.json'));
  const unexpected = changed.filter(file => !observations[file]
    || protectedBefore[file] !== observations[file].beforeSha256
    || hash(fs.readFileSync(path.join(root, file))) !== observations[file].observedSha256);
  assert.deepEqual(unexpected, [], '未登记的本轮范围外文件变化');
  const linkedFiles = [...mainNames, epilogueName, 'README.md', '选择设计.md', '审校记录.md'];
  const linkedPaths = [...new Set([...linkedFiles.map(name => path.join(folder, name)),
    ...Object.keys(baselineManifest).filter(file => file.endsWith('.md')),
    path.relative(root, path.join(__dirname, 'README.md'))])];
  let checkedLinks = 0;
  for (const file of linkedPaths) for (const m of fs.readFileSync(path.join(root, file), 'utf8').matchAll(/\[[^\]]*\]\(([^)]+)\)/g)) {
    if (/^(https?:|codex:|mailto:)/.test(m[1])) continue;
    const target = m[1].replace(/:\d+(?:-\d+)?$/, '').split('#')[0];
    assert(fs.existsSync(path.resolve(root, path.dirname(file), target)), file + '失效链接：' + target);
    checkedLinks++;
  }
  for (const name of [...linkedFiles.filter(n => !mainNames.includes(n))])
    currentHashes[path.join(folder, name)] = hash(read(current, name));
  const report = {scope: 'v1.1毛狼与飘支线：文稿结构、后日谈接续、逐路径实读篇幅与文件保护；不代表游戏或浏览器验收',
    baseline: 'piao-maolang-20261027/baseline', historicalGrowthPolicy: '历史40%—60%结论保留；用户允许本轮总增长超过60%；本轮分列十章增量与后日谈增量',
    mainManuscriptUnits: 59, epilogueUnits: 1, totalChoices: 69, totalOptions: 143, totalEndings: 14,
    majorCombinations: 28, ordinaryCommonPaths: common.length, hiddenCommonPaths: common.filter(c => c.hidden).length,
    routeAssignments: routeStats.length * 256,
    validatedReadingPaths: routeStats.reduce((sum, r) => sum + Object.values(r.endings).reduce((n, s) => n + s.readingPaths, 0), 0),
    epilogueEndingCount: Object.values(endingMap).filter(v => v !== 'none').length, excludedEnding: 'PI-E1',
    endingMap, baselineFiles: Object.keys(baselineManifest).length, protectedFiles: Object.keys(protectedBefore).length,
    unchangedProtectedFiles: Object.keys(protectedBefore).length - changed.length,
    observedConcurrentChanges: changed, unexpectedProtectedChanges: unexpected,
    checkedLinks, manuscriptHashes: currentHashes, routes: routeStats};
  const rendered = path.join(__dirname, 'rendered'); fs.mkdirSync(rendered, {recursive: true});
  for (const sample of samples) fs.writeFileSync(path.join(rendered, `${sample.prefix}-${sample.combination}.md`),
    `# ${sample.prefix} ${sample.combination} → ${sample.ending}\n\n> 本轮单路径审读样本，含符合条件的后日谈。${JSON.stringify(sample.flags)}\n\n${sample.text}\n`);
  fs.writeFileSync(path.join(__dirname, 'report.json'), JSON.stringify(report, null, 2) + '\n');
  fs.writeFileSync(path.join(__dirname, 'epilogue-map.json'), JSON.stringify(endingMap, null, 2) + '\n');
  console.log(JSON.stringify({scope: report.scope, choices: 69, options: 143, endings: 14, majorCombinations: 28,
    validatedReadingPaths: report.validatedReadingPaths, epilogueEndingCount: report.epilogueEndingCount,
    excludedEnding: 'PI-E1', protectedFiles: report.protectedFiles,
    unchangedProtectedFiles: report.unchangedProtectedFiles, observedConcurrentChanges: changed, checkedLinks,
    ranges: routeStats.map(r => ({prefix: r.prefix, endings: r.endings}))}, null, 2));
  return report;
}

module.exports = {...old, run, filterEpilogue, routeReading, endingMap};
if (require.main === module) run();
