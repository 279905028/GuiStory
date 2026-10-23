'use strict';
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const assert = require('node:assert/strict');
const root = path.resolve(__dirname, '../..');
const read = p => JSON.parse(fs.readFileSync(path.join(root, p), 'utf8'));
const hash = p => crypto.createHash('sha256').update(fs.readFileSync(path.join(root, p))).digest('hex');
const aPath = 'assets/ten-chapter/a06-adoption.json';
const mPath = 'assets/ten-chapter/a06-scene-node-map.json';
const a = read(aPath), m = read(mPath), checks = [];
function check(name, fn) { fn(); checks.push({ name, pass: true }); }
check('所有采用文件与来源存在且当前指纹一致', () => {
  const seen = new Set();
  for (const x of a.assets) {
    assert(!seen.has(x.file)); seen.add(x.file);
    const buffer = fs.readFileSync(path.join(root, x.file));
    assert.equal(buffer.toString('ascii', 0, 4), 'RIFF'); assert.equal(buffer.toString('ascii', 8, 12), 'WEBP');
    assert.equal(buffer.length, x.bytes); assert.equal(hash(x.file), x.sha256);
    assert.equal(x.adoptionStatus, 'adopted-static'); assert.equal(x.bindingStatus, 'awaiting-E09');
    assert(x.sources.some(s => s.path.endsWith('.png')), `缺少保留PNG ${x.id}`);
    for (const s of x.sources) assert.equal(hash(s.path), s.sha256);
    assert(fs.existsSync(path.join(root, x.verification.sourcePng)));
  }
  assert.equal(seen.size, 138);
});
check('采用与本轮逐图审计一一对应', () => {
  const reports = ['characters', 'backgrounds', 'cg'].map(k => read(`qa/a06-20261023/${k}/audit.json`));
  reports.forEach(r => assert.equal(r.pass, true));
  const records = reports.flatMap(r => r.records || r.items);
  assert.equal(records.length, a.assets.length);
  for (const x of a.assets) {
    const matches = records.filter(r => r.file === x.file);
    assert.equal(matches.length, 1); const r = matches[0];
    assert.equal(r.sha256, x.sha256); assert.equal(r.width, x.width); assert.equal(r.height, x.height); assert.equal(r.hasAlpha, x.hasAlpha);
    assert(Object.values(r.checks).every(v => v === true));
    if (r.pixels) { assert(r.pixels.alphaEqual); assert(r.pixels.visibleRgbEqual); }
  }
});
check('130项需求均有采用或明确替代且拒收图不混入', () => {
  const requirements = read('任务拆分/全十章/美术清单.json').assets;
  const adopted = new Set(a.assets.map(x => x.id));
  assert.equal(adopted.size, 138);
  const alternate = new Set(a.nonImageResolutions.map(x => x.id));
  assert.equal(alternate.size, 6);
  for (const x of requirements) assert(adopted.has(x.id) !== alternate.has(x.id));
  for (const x of a.nonImageResolutions) { assert.equal(x.image, null); assert.equal(x.registerAsCg, false); x.alternativeAssetIds.forEach(id => assert(adopted.has(id))); }
  for (const x of a.excluded) assert(!a.assets.some(i => i.file === x.file));
  assert.equal(a.excluded.length, 10);
});
check('当前来源版本与全部输入指纹锁定', () => {
  for (const x of a.inputFingerprints) assert.equal(hash(x.path), x.sha256, x.path);
  assert.equal(a.contractVersion, '1.0.0'); assert.equal(a.contentRevision, 'nightshift-20261022-r1');
});
const modulePaths = a.inputFingerprints.map(x => x.path).filter(p => /任务拆分\/全十章\/(common\/ch\d{2}|routes\/[^/]+)\.json$/.test(p));
const modules = modulePaths.map(read);
const nodes = Object.assign({}, ...modules.map(d => d.nodes));
const scenes = Object.assign({}, ...modules.map(d => d.scenes));
check('17模块节点及场景完整索引，逐节点来源可追溯', () => {
  assert.equal(modules.length, 17);
  assert.deepEqual(m.nodes.map(n => n.id).sort(), Object.keys(nodes).sort());
  assert.deepEqual(m.scenes.map(s => s.id).sort(), Object.keys(scenes).sort());
  for (const n of m.nodes) {
    assert(n.source.length); assert.equal(n.type, nodes[n.id].type); assert.equal(n.sceneId, nodes[n.id].scene || null);
    const source = modules.flatMap(d => d.sourceMap).filter(s => s.nodeIds.includes(n.id));
    for (const r of n.source) assert(source.some(s => s.file === r.file && s.startLine === r.startLine && s.endLine === r.endLine && s.kind === r.kind));
    if (!n.cueIds.length) assert(['choice', 'gate', 'end'].includes(n.type), `正文节点未落艺术场段 ${n.id}`);
  }
});
check('180个场段引用闭合且各路线不串入其他路线节点', () => {
  const source = read('任务拆分/全十章/美术清单.json').chapters.flatMap(c => c.sections.map(s => ({ ...s, chapter: c.chapter })));
  assert.deepEqual(m.sections.map(s => s.cueId).sort(), source.map(s => s.id).sort());
  for (const s of m.sections) {
    const expected = source.find(x => x.id === s.cueId); assert.equal(s.chapter, expected.chapter); assert.equal(s.route, expected.route);
    const prefix = `tc_c${String(s.chapter).padStart(2, '0')}_${s.route}_`;
    for (const id of s.nodeIds) { assert(nodes[id]); assert(id.startsWith(prefix)); }
    for (const id of [...s.adoptedAssetIds, ...s.storyboardAssetIds]) assert(a.assets.some(x => x.id === id));
    for (const id of s.alternativeIds) assert(a.nonImageResolutions.some(x => x.id === id));
  }
});
check('待定地点及章末没有虚假采用文件', () => {
  const held = m.scenes.filter(s => s.status === 'held-for-E09-content-confirmation');
  assert.equal(held.length, 4); assert(held.every(s => s.suggestedBgId === null && s.location === ''));
  const unspecified = m.scenes.filter(s => s.status === 'content-location-unspecified');
  assert.equal(unspecified.length, 14); assert(unspecified.every(s => s.suggestedBgId === null && s.location === ''));
  const neutral = m.scenes.filter(s => s.requestedBgId === 'tc-bg-chapter-end');
  assert.equal(neutral.length, 9); assert(neutral.every(s => s.suggestedBgId === null));
  assert(!a.assets.some(x => x.id === 'tc-bg-chapter-end'));
  for (const s of m.scenes) if(s.suggestedBgId) assert(a.assets.some(x => x.id === s.suggestedBgId && x.kind === 'background'));
});
check('精确时段修正保留饭局、回叙与下午差别', () => {
  const records = m.nodes.filter(n => n.backgroundOverride);
  assert.equal(records.length, 25);
  const changed = records.filter(n => n.backgroundOverride.decision === 'replace');
  assert.equal(changed.length, 5);
  const get = id => records.find(n => n.id === id)?.backgroundOverride;
  assert.equal(get('tc_c06_common_closed_echo_01').assetId, 'tc-bg-echo-closed-dawn');
  assert.equal(get('tc_c06_common_route_gate').application, 'scene-context-only-do-not-bind-gate-bg');
  assert.equal(get('tc_c06_zhouzhi_after_closing_005').assetId, 'tc-bg-echo-closed-day');
  assert.equal(get('tc_c10_mengyao_friends_018').assetId, 'tc-bg-bridge-dusk');
  assert(!get('tc_c10_mengyao_friends_001')); assert(!get('tc_c10_mengyao_friends_012'));
});
check('CG进入退出引用存在且条件规则未丢失', () => {
  const source = read('qa/a06-20261023/cg/integration-rules.json'); assert.deepEqual(m.cgRules, source);
  for (const c of source.items.filter(c => c.enterAt)) {
    assert(nodes[c.enterAt]); assert(nodes[c.exitBefore]);
    assert(c.allowedNodeIds.length); c.allowedNodeIds.forEach(id => assert(nodes[id]));
    assert(a.assets.some(x => x.id === c.id));
  }
  assert(source.global.clearCgOnBranchChange); assert(source.global.restoreVisibilityFromCurrentNodeAndStateOnLoad);
});
check('双形态所有图像与头像均已采用，衣装限制保留', () => {
  const adoptedFiles = new Set(a.assets.map(x => x.file));
  function walk(x) { if (typeof x === 'string' && x.endsWith('.webp')) assert(adoptedFiles.has(x)); else if (x && typeof x === 'object') Object.values(x).forEach(walk); }
  walk(m.qiuqiuForms);
  assert.equal(m.qiuqiuForms.sphere.presentation, 'orb'); assert.equal(m.qiuqiuForms.human.presentation, 'human');
  const looks = a.assets.filter(x => x.batch === 'A02' && x.kind === 'look'); assert.equal(looks.length, 9); assert(looks.every(x => x.restrictions.length));
});
check('独立画廊当前138图与筛选检查通过', () => {
  const r = read('qa/a06-20261023/gallery-check.json'); assert(r.pass); assert.equal(r.totalImages, a.assets.length); assert(r.mobile.noHorizontalOverflow); assert.equal(r.pageErrors.length, 0);
  const html = fs.readFileSync(path.join(root, 'assets/ten-chapter/index.html'), 'utf8');
  assert.equal((html.match(/<article /g) || []).length, a.assets.length);
  assert(!/localStorage|sessionStorage|indexedDB/.test(html));
  for (const match of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
    const target = match[1]; if (/^(https?:|#)/.test(target)) continue;
    assert(fs.existsSync(path.resolve(root, 'assets/ten-chapter', target)), `画廊断链 ${target}`);
  }
});
check('602个开工保护文件未变', () => {
  const before = read('qa/a06-20261023/protected-before.json');
  const changed = before.files.filter(x => !fs.existsSync(path.join(root, x.path)) || hash(x.path) !== x.sha256);
  assert.equal(changed.length, 0, changed.map(x => x.path).join('\n'));
  fs.writeFileSync(path.join(__dirname, 'protected-after.json'), JSON.stringify({ date: '2026-10-23', pass: true, checked: before.files.length, changed, scope: before.scope }, null, 2) + '\n');
});
fs.writeFileSync(path.join(__dirname, 'verification.json'), JSON.stringify({
  date: '2026-10-23', task: 'A06', pass: true, checks,
  counts: { images: a.assets.length, a01Requirements: 130, sections: m.sections.length, scenes: m.scenes.length, nodes: m.nodes.length },
  artifacts: [aPath, mPath, 'assets/ten-chapter/index.html', 'assets/ten-chapter/a06-integration-guide.md'].map(p => ({ path: p, sha256: hash(p) })),
  formalIntegration: false, gameTested: false, playerStorageAccessed: false,
  browserRecovery: '初次沙箱内Chrome启动失败；按授权在独立临时浏览器环境重试，画廊实测通过。'
}, null, 2) + '\n');
console.log(JSON.stringify({ pass: true, checks: checks.length, assets: a.assets.length, sourceNodes: m.nodes.length }));
