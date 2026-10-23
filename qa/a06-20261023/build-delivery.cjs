'use strict';
// 仅生成 A06 清单与审阅页；不写工程源、批次原件或游戏。
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const assert = require('node:assert/strict');
const root = path.resolve(__dirname, '../..');
const abs = p => path.join(root, p);
const read = p => JSON.parse(fs.readFileSync(abs(p), 'utf8'));
const hash = p => crypto.createHash('sha256').update(fs.readFileSync(abs(p))).digest('hex');
const write = (p, data) => fs.writeFileSync(abs(p), JSON.stringify(data, null, 2) + '\n');
const unique = values => [...new Set(values)];
const base = '任务拆分/全十章';
const out = 'assets/ten-chapter';
const qa = 'qa/a06-20261023';
const batches = {
  A02: `${out}/characters/a02-delivery.json`,
  A03: `${out}/huangqiuqiu/manifest.json`,
  A04: `${out}/backgrounds/a04-manifest.json`,
  A05: `${out}/cg/a05-manifest.json`
};
const audits = ['characters', 'backgrounds', 'cg'].map(k => `${qa}/${k}/audit.json`);
for (const p of audits) assert.equal(read(p).pass, true, `本轮验收未通过：${p}`);
const auditByFile = Object.fromEntries(audits.flatMap(p => {
  const d = read(p); return (d.records || d.items).map(r => [r.file, { ...r, auditPath: p }]);
}));
const a01 = read(`${base}/美术清单.json`);
const labels = Object.fromEntries(a01.assets.map(a => [a.id, a.label]));
const a02 = read(batches.A02), a03 = read(batches.A03), a04 = read(batches.A04), a05 = read(batches.A05);
const forms = read(`${out}/huangqiuqiu/forms-index.json`);
const legacySources = Object.fromEntries(read('assets/webp-manifest.json').assets.map(a => [a.webp.path, a.source.path]));
const assets = [];
function add(id, batch, kind, file, meta, sourcePaths, extra = {}) {
  assert(fs.existsSync(abs(file)), `缺图 ${file}`);
  assert.equal(hash(file), meta.sha256, `成图指纹变化 ${file}`);
  const checked = auditByFile[file];
  assert(checked, `成图没有本轮逐图验收 ${file}`);
  assert.equal(checked.sha256, meta.sha256, `验收版本不一致 ${file}`);
  assert(Object.values(checked.checks).every(v => v === true), `逐图检查未通过 ${file}`);
  assets.push({
    id, label: labels[id] || extra.label || id, batch, kind, file,
    adoptionStatus: 'adopted-static', bindingStatus: 'awaiting-E09',
    width: meta.width, height: meta.height, format: 'webp', hasAlpha: meta.hasAlpha,
    bytes: fs.statSync(abs(file)).size, sha256: hash(file),
    sources: unique([...sourcePaths, legacySources[file]].filter(Boolean)).map(p => ({ path: p, sha256: hash(p) })),
    batchManifest: batches[batch],
    audit: `${qa}/${batch === 'A02' || batch === 'A03' ? 'characters' : batch === 'A04' ? 'backgrounds' : 'cg'}/audit.json`,
    verification: { formatDimensionsAlphaHash: true, losslessVisibleRgbAndAlpha: true, sourcePng: checked.sourcePngPath || checked.sourcePath || checked.source.path },
    ...extra
  });
}
for (const a of a02.assets) add(a.id, 'A02', a.kind, a.delivery.path, a.delivery, [a.source.path], {
  character: a.character, form: 'human', expression: a.expression, cueIds: a.cueIds,
  restrictions: a.kind === 'look' ? ['仅基础姿态；保持所选衣装，不回退日常衣装表情。'] :
    ['wenwen', 'mengyao', 'yelan'].includes(a.character) ? ['表情必须使用本批职业适配整组，禁止旧维修工具／相机／夹板回流。'] : []
});
for (const a of a03.entries) {
  add(a.assetId, 'A03', a.assetId.includes('-look-') ? 'look' : 'character', a.image.path, a.image,
    [a.source.path], {
      character: 'huangqiuqiu', form: a.form, expression: a.key, cueIds: a.cueIds,
      avatarAssetId: `tc-avatar-huangqiuqiu-${a.form}-${a.key}`,
      restrictions: ['按历史qiuForm选择立绘与头像；不能跨形态回退。', '完整画布等比显示，不补设计下装。']
    });
  add(`tc-avatar-huangqiuqiu-${a.form}-${a.key}`, 'A03', 'avatar', a.avatar.path, a.avatar, [a.avatar.original, a.image.path], {
    label: a.label + '头像', character: 'huangqiuqiu', form: a.form, expression: a.key,
    parentAssetId: a.assetId, cueIds: a.cueIds,
    crop: a.avatar.crop, resize: a.avatar.resize, restrictions: ['与立绘形态及表情同步。']
  });
}
for (const a of a04.items) add(a.id, 'A04', 'background', a.file, a, [a.sourcePath], {
  label: a.label, cueIds: a.cueIds, parentAssetId: a.parentAssetId,
  notes: a.notes, selectionRule: a.selectionRule, mobile: a.mobile,
  restrictions: [a.mobile.note, '按实际尺寸采用；窄屏先完整保留横图，不能宣称居中cover安全。']
});
for (const a of a05.items) add(a.id, 'A05', a.kind, a.file, a, [a.source.path], {
  label: a.label, cueIds: a.cueIds, suggestedNodeIds: a.suggestedNodeIds,
  restrictions: a.rules, display: a.display
});
const assetById = Object.fromEntries(assets.map(a => [a.id, a]));
assert.equal(Object.keys(assetById).length, assets.length, '资源ID重复');
assert.equal(unique(assets.map(a => a.file)).length, assets.length, '文件重复计数');
const pathToId = Object.fromEntries(assets.map(a => [a.file, a.id]));
const alternatives = a05.boardDecisions.filter(b => !assetById[b.assetId]).map(b => ({
  id: b.assetId, boardId: b.boardId, disposition: 'resolved-with-existing-art-and-text',
  decision: b.decision, reason: b.reason,
  alternativeAssetIds: b.fallbackPaths.map(p => {
    assert(pathToId[p], `替代图未采用 ${p}`); return pathToId[p];
  }),
  image: null, registerAsCg: false
}));
const alternativeById = Object.fromEntries(alternatives.map(a => [a.id, a]));
for (const a of a01.assets) assert(assetById[a.id] || alternativeById[a.id], `A01需求未处理 ${a.id}`);
const modulePaths = [
  ...Array.from({ length: 10 }, (_, i) => `${base}/common/ch${String(i + 1).padStart(2, '0')}.json`),
  ...['xiaoman', 'zhouzhi', 'mengyao', 'yelan', 'piao', 'friends', 'huangqiuqiu'].map(r => `${base}/routes/${r}.json`)
];
const modules = modulePaths.map(file => ({ file, ...read(file) }));
const nodes = {}, scenes = {}, nodeModule = {}, sceneModule = {};
for (const m of modules) {
  for (const [id, n] of Object.entries(m.nodes)) { assert(!nodes[id], `重复节点 ${id}`); nodes[id] = n; nodeModule[id] = m.file; }
  for (const [id, s] of Object.entries(m.scenes)) { assert(!scenes[id], `重复场景 ${id}`); scenes[id] = s; sceneModule[id] = m.file; }
}
const deliveryPaths = ['E04', 'E05', 'E06', 'E07'].map(e => `${base}/校验/${e}/delivery.json`);
const routeMaps = Object.fromEntries(deliveryPaths.flatMap(p => {
  const d = read(p); return (d.routes ? d.routes.flatMap(r => r.assetMappings) : d.assetMappings)
    .map(m => [m.a01SectionId, { ...m, evidence: p }]);
}));
const commonPath = `${base}/common/qa/source-index.json`;
const commonIndex = read(commonPath).chapters.flatMap(c => c.paragraphs);
const sections = a01.chapters.flatMap(c => c.sections.map(s => {
  const route = routeMaps[s.id];
  const commonParagraphs = commonIndex.filter(p => p.a01CueId === s.id);
  const m = modules.find(m => s.route === 'common' ? m.moduleId === `common/ch${String(c.chapter).padStart(2, '0')}` : m.moduleId === `routes/${s.route}`);
  const controls = s.route === 'common' ? m.sourceMap.filter(p =>
    p.file === c.source && p.startLine >= s.sourceLineStart && p.endLine <= s.sourceLineEnd &&
    ['choice', 'scene-title', 'control'].includes(p.kind)).flatMap(p => p.nodeIds).filter(id => nodes[id].type !== 'end') : [];
  const ids = route ? route.nodeIds : unique([...commonParagraphs.flatMap(p => p.nodeIds), ...controls]);
  assert(ids.length, `场段无真实映射 ${s.id}`);
  for (const id of ids) assert(nodes[id], `节点不存在 ${id}`);
  const requested = route ? route.assetIds : unique([...s.characterAssetIds, ...s.scenes.flatMap(sc => sc.assetIds)]);
  const boardIds = a01.storyboards.filter(b => b.cueIds.includes(s.id)).flatMap(b => b.assetIds);
  for (const id of [...requested, ...boardIds]) assert(assetById[id] || alternativeById[id], `场段资源未处理 ${s.id} ${id}`);
  return {
    cueId: s.id, chapter: c.chapter, route: s.route, heading: s.heading,
    source: { file: c.source, startLine: s.sourceLineStart, endLine: s.sourceLineEnd },
    evidence: route ? route.evidence : commonPath,
    nodeIds: ids, sceneIds: unique(ids.map(id => nodes[id].scene).filter(Boolean)),
    adoptedAssetIds: requested.filter(id => assetById[id]),
    storyboardAssetIds: boardIds.filter(id => assetById[id]),
    alternativeIds: unique([...requested, ...boardIds].filter(id => alternativeById[id])),
    conditions: route?.conditions || s.conditions,
    characterModes: s.characters.map(ch => ({ character: ch.id, form: ch.form, appearanceMode: ch.appearanceMode, requirements: ch.requirements })),
    presentationNotes: route?.presentationNotes || s.notes,
    status: 'source-mapped-awaiting-E09',
    warning: '场段资源是选用范围；不得把全部人物／衣装／CG同时铺满该段。节点条件与人物在场由E09逐拍绑定。'
  };
}));
assert.equal(sections.length, 180);
const backgroundRules = read(`${qa}/backgrounds/node-overrides.json`);
const cgRules = read(`${qa}/cg/integration-rules.json`);
const backgroundOverrideByNode = {};
for (const r of backgroundRules.overrides || []) {
  assert(assetById[r.assetId], `覆盖图未采用 ${r.assetId}`);
  for (const id of r.nodeIds) {
    assert(nodes[id], `覆盖节点不存在 ${id}`);
    assert(!backgroundOverrideByNode[id] || backgroundOverrideByNode[id].assetId === r.assetId, `覆盖冲突 ${id}`);
    backgroundOverrideByNode[id] = { assetId: r.assetId, reason: r.reason,
      application: nodes[id].type === 'gate' ? 'scene-context-only-do-not-bind-gate-bg' : 'display-node-or-exact-scene',
      decision: r.decision };
  }
}
const pendingTea = ['ts_c09_piao_booklet', 'ts_c09_piao_dating', 'ts_c09_piao_friends', 'ts_c10_piao_dating'];
const sceneIndex = Object.entries(scenes).map(([id, s]) => ({
  id, module: sceneModule[id], chapter: s.chapter, title: s.title, chronology: s.chronology,
  location: s.location, requestedBgId: s.bg,
  suggestedBgId: s.bg === 'tc-bg-chapter-end' || !s.location ? null : s.bg,
  candidateBgId: !s.location && s.bg !== 'tc-bg-chapter-end' ? s.bg : null,
  status: s.bg === 'tc-bg-chapter-end' ? 'non-image-presentation-required' : pendingTea.includes(id) ? 'held-for-E09-content-confirmation' : !s.location ? 'content-location-unspecified' : 'adopted-resource-awaiting-node-binding',
  note: s.bg === 'tc-bg-chapter-end' ? '章末采用不指向故事地点的中性程序底色；E09处理渲染和注册，不得虚构文件或沿用占位路径。' : pendingTea.includes(id) ? '用户2026-10-23明确选择保留映射待定，交E09确认；正文地点保持空。' : !s.location ? '未点名地点仅为布景请求；不据图片增添住宅／单位／地址。' : null,
  nodeIds: Object.values(nodes).filter(n => n.scene === id).map(n => n.id),
  nodeOverrides: Object.values(nodes).filter(n => n.scene === id && backgroundOverrideByNode[n.id]).map(n => ({ nodeId: n.id, ...backgroundOverrideByNode[n.id] }))
}));
for (const s of sceneIndex) if (s.suggestedBgId) assert.equal(assetById[s.suggestedBgId]?.kind, 'background', `未采用背景 ${s.id}`);
const nodeIndex = Object.entries(nodes).map(([id, n]) => ({
  id, module: nodeModule[id], type: n.type, sceneId: n.scene || null,
  cueIds: sections.filter(s => s.nodeIds.includes(id)).map(s => s.cueId),
  source: modules.find(m => m.file === nodeModule[id]).sourceMap.filter(m => m.nodeIds.includes(id)).map(({ file, startLine, endLine, kind }) => ({ file, startLine, endLine, kind })),
  ...(backgroundOverrideByNode[id] ? { backgroundOverride: backgroundOverrideByNode[id] } : {})
}));
for (const n of nodeIndex) assert(n.source.length, `节点缺少来源 ${n.id}`);
const exclusions = [
  ...read(`${out}/characters/generation-index.json`).entries.filter(e => !e.selected).map(e => ({ file: e.delivery || e.original, source: e.original, reason: e.rejectionReason })),
  ...read(`${qa}/characters/audit.json`).rejectedOrSuperseded.filter(e => e.owner === 'A03').map(e => ({ file: e.path, reason: e.reason })),
  ...a04.superseded.map(e => ({ file: e.file, reason: e.reason })),
  ...a05.superseded.map(e => ({ file: e.path, reason: e.reason }))
];
for (const e of exclusions) assert(!pathToId[e.file], `拒收图误采用 ${e.file}`);
const inputPaths = unique([
  `${base}/contract.json`, `${base}/美术清单.json`, 'assets/webp-manifest.json', ...Object.values(batches),
  `${out}/huangqiuqiu/forms-index.json`, ...modulePaths, ...a01.chapters.map(c => c.source),
  ...deliveryPaths, commonPath, ...audits, `${qa}/backgrounds/node-overrides.json`, `${qa}/cg/integration-rules.json`,
  `${base}/校验/E07/presentation.json`
]);
const inputFingerprints = inputPaths.map(p => ({ path: p, sha256: hash(p) }));
const meta = {
  schemaVersion: 1, task: 'A06', version: 'a06-20261023-v1', date: '2026-10-23',
  contractVersion: '1.0.0', contentRevision: 'nightshift-20261022-r1', a01Version: a01.version,
  pathsRelativeTo: 'project-root', formalIntegration: false,
  evidenceBoundary: '本轮静态资源采用、真实源映射和独立画廊；不代表E09正式绑定或E10游戏／设备验收。'
};
write(`${out}/a06-adoption.json`, {
  ...meta, status: 'static-art-acceptance-complete', inputFingerprints,
  counts: { adoptedFiles: assets.length, primaryAssets: assets.filter(a => a.kind !== 'avatar').length,
    avatars: 12, a01Requirements: a01.assets.length, imageRequirements: a01.assets.filter(a => assetById[a.id]).length,
    noSeparateCg: alternatives.length, extraTimeVariants: 2,
    byBatch: Object.fromEntries(Object.keys(batches).map(b => [b, assets.filter(a => a.batch === b).length])) },
  assets, nonImageResolutions: alternatives, excluded: exclusions,
  pending: [
    { id: 'piao-unspecified-tables', owner: 'E09', status: 'held-by-user', sceneIds: pendingTea, decision: '用户2026-10-23：保留映射待定，交E09确认。' },
    { id: 'other-unspecified-locations', owner: 'E09', status: 'candidate-only-content-confirmation-required', sceneIds: sceneIndex.filter(s => s.status === 'content-location-unspecified').map(s => s.id), decision: '未点名地点的原背景仅为候选；接入前核定画面，不据图增补地点事实。' },
    { id: 'chapter-end-neutral', owner: 'E09', status: 'non-image-presentation-required', assetKey: 'tc-bg-chapter-end', decision: '中性程序底色由E09接入；不是缺失成图或已采用文件。' }
  ]
});
write(`${out}/a06-scene-node-map.json`, {
  ...meta, counts: { sections: sections.length, scenes: sceneIndex.length, nodes: nodeIndex.length,
    nodesInArtSections: nodeIndex.filter(n => n.cueIds.length).length,
    controlOrTerminalNodesOutsideArtSections: nodeIndex.filter(n => !n.cueIds.length).length,
    backgroundOverrideNodes: Object.keys(backgroundOverrideByNode).length },
  sourceFingerprints: inputFingerprints.filter(p => p.path.startsWith(base) || p.path.startsWith('项目文档/故事')),
  sections, scenes: sceneIndex, nodes: nodeIndex,
  backgroundRules, cgRules,
  qiuqiuPresentationSource: `${base}/校验/E07/presentation.json`,
  qiuqiuForms: forms.characters.huangqiuqiu.forms,
  displayRules: ['人物完整画布等比显示；衣装仅有基础姿态。', 'CG完整等比显示，下沿手部／册子不得被对白遮挡。', '背景窄屏优先全景场景区；不把居中cover标为安全。', '消息／电话人物不摆实体立绘；第一人称文文不强制出场。', '来源文字中的票据／班表／书页由独立文字层表达，不将生成图伪字当正文。']
});
// 审阅页是静态文件，打开时不读取或写入玩家存储。
const esc = v => String(v ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const names = { character: '角色／差分', look: '衣装／姿态', avatar: '独立头像', background: '背景', cg: 'CG', ui: '封面' };
const cards = assets.map(a => `<article data-kind="${a.kind}" data-search="${esc(`${a.id} ${a.label} ${a.character || ''} ${a.batch}`)}"><a href="../../${esc(a.file)}" target="_blank"><div class="image"><img src="../../${esc(a.file)}" alt="${esc(a.label)}" width="${a.width}" height="${a.height}"></div></a><div class="card-copy"><small>${a.batch} · ${names[a.kind]} · ${a.width} × ${a.height}</small><h2>${esc(a.label)}</h2><p class="asset-id">${esc(a.id)}</p><p>${esc((a.restrictions || []).join(' '))}</p><a href="../../${esc(a.file)}">查看原尺寸 WebP ↗</a></div></article>`).join('\n');
fs.writeFileSync(abs(`${out}/index.html`), `<!doctype html><html lang="zh-CN"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>全十章 · A06 美术采用清单</title><style>
:root{font:16px/1.65 system-ui,-apple-system,sans-serif;color:#e8e7df;background:#121d21}*{box-sizing:border-box}body{margin:0;padding:32px;--panel:#1c2b30;--ink:#e8e7df;--muted:#b6c5c8}body.light{background:#e8e8df;color:#15262c;--panel:#fff;--ink:#15262c;--muted:#486068}header,main{max-width:1440px;margin:auto}h1{font-size:clamp(26px,4vw,44px);font-weight:600;line-height:1.25;margin:8px 0 20px}h2{font-size:17px;margin:8px 0}p{margin:8px 0}header>p{max-width:900px;color:var(--muted)}a{color:inherit;text-underline-offset:4px}nav{display:flex;gap:14px;flex-wrap:wrap;margin:22px 0}.controls{display:flex;gap:10px;flex-wrap:wrap;margin:24px 0 12px}button,input,select{font:inherit;min-height:44px;padding:8px 12px;border:1px solid #80989a66;background:var(--panel);color:inherit;border-radius:8px}input{flex:1;min-width:180px}button{cursor:pointer}#count{color:var(--muted);margin:12px 0 24px}main{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:18px}article{background:var(--panel);border:1px solid #80989a33;border-radius:12px;overflow:hidden}article[hidden]{display:none}.image{height:260px;background:repeating-conic-gradient(#d6d8d2 0% 25%,#edf0e9 0% 50%) 0/24px 24px;display:flex;align-items:center;justify-content:center}.dark .image{background:#18242b}.image img{width:100%;height:100%;object-fit:contain}.card-copy{padding:18px}.card-copy p{font-size:13px;color:var(--muted)}.asset-id{overflow-wrap:anywhere;font-family:ui-monospace,monospace}small{font-size:11px;letter-spacing:.03em;color:var(--muted)}.card-copy a{font-size:13px}footer{max-width:1440px;margin:32px auto;color:var(--muted)}@media(max-width:1100px){main{grid-template-columns:repeat(3,minmax(0,1fr))}}@media(max-width:760px){body{padding:20px}main{grid-template-columns:repeat(2,minmax(0,1fr))}}@media(max-width:480px){main{grid-template-columns:1fr}.image{height:310px}input{width:100%}}
</style><body><header><small>毕节，雨停之前 · 2026-10-23</small><h1>全十章美术采用清单</h1><p>本轮静态采用 ${assets.length} 张 WebP：常规角色 53、黄球球主图 12／头像 12、背景 55、CG 4、封面 2。点击图片查看原尺寸。</p><p>资源采用已完成，游戏绑定由 E09 执行。飘四处未点名桌边场景按用户决定保留映射待定；中性章末由 E09 处理。背景／CG须保留完整构图，窄屏游戏效果由 E10 验证。</p><nav><a href="a06-adoption.json">采用清单</a><a href="a06-scene-node-map.json">场景／节点映射</a><a href="a06-integration-guide.md">接入说明</a><a href="../../任务拆分/全十章/交接/A06.md">验收交接</a></nav><div class="controls"><input id="search" aria-label="搜索资源" placeholder="搜索名字、ID、批次"><select id="kind" aria-label="类型"><option value="all">全部类型</option>${Object.entries(names).map(([k,v]) => `<option value="${k}">${v}</option>`).join('')}</select><button id="theme">切换明暗</button><button id="background">透明图深底</button></div><p id="count"></p></header><main>${cards}</main><footer>保留全部来源原件及拒收记录；本页是独立美术审阅页，不读取玩家存档。</footer><script>
const cards=[...document.querySelectorAll('article')],search=document.querySelector('#search'),kind=document.querySelector('#kind');function filter(){const q=search.value.toLowerCase().trim();for(const c of cards)c.hidden=(kind.value!=='all'&&c.dataset.kind!==kind.value)||!c.dataset.search.toLowerCase().includes(q);document.querySelector('#count').textContent='当前显示 '+cards.filter(c=>!c.hidden).length+' / '+cards.length+' 张';}search.addEventListener('input',filter);kind.addEventListener('change',filter);document.querySelector('#theme').onclick=()=>document.body.classList.toggle('light');document.querySelector('#background').onclick=()=>document.body.classList.toggle('dark');filter();
</script></body></html>\n`);
console.log(JSON.stringify({ pass: true, assets: assets.length, sections: sections.length, scenes: sceneIndex.length, nodes: nodeIndex.length, alternativeCg: alternatives.length }));
