'use strict';

// 当前美术导航；只重建索引，不改图片、来源清单或历史验收。
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const assert = require('node:assert/strict');
const { root, readJSON, rewritePaths, resolvePath } = require('./art-paths.cjs');
const { loadArtRevision } = require('../任务拆分/全十章/build/art-revision.cjs');
const runtime = readJSON('assets/manifests/runtime-ten-chapter-manifest.json');
const adopted = loadArtRevision().adopt(readJSON('assets/ten-chapter/a06-adoption.json'));
const revision = rewritePaths(readJSON('assets/character-variants/wenwen-option-b-production-20261026/adoption.json'));
const registered = new Set(runtime.assets.map(row => row.path));
assert.equal(registered.size, 138, '运行清单必须包含138个唯一资源路径');
assert.deepEqual([...registered].sort(), adopted.assets.map(row => row.file).sort(), '当前采用与运行清单路径不一致');
const runtimeByPath = new Map(runtime.assets.map(row => [row.path, row]));
for (const row of adopted.assets) {
  assert.equal(runtimeByPath.get(row.file).sha256, row.sha256, '运行资源指纹不一致：' + row.file);
  assert.equal(runtimeByPath.get(row.file).bytes, row.bytes, '运行资源大小不一致：' + row.file);
}
const rows = new Map();
const category = kind => ({ character: 'characters', look: 'characters', avatar: 'characters', sprite: 'characters', background: 'backgrounds', cg: 'cg', ui: 'ui', poster: 'posters' })[kind];
for (const row of adopted.assets) rows.set(row.file, { id: row.id, label: row.label, category: category(row.kind), character: row.character || null, path: row.file, sha256: row.sha256, bytes: row.bytes, width: row.width, height: row.height, sources: row.sources || [], registered: registered.has(row.file) });
for (const row of revision.assets) if (!rows.has(row.delivery.path)) {
  rows.set(row.delivery.path, { id: 'wenwen-' + row.id, label: '文文 · ' + row.label, category: category(row.kind), character: row.kind === 'sprite' ? 'wenwen' : null, ...row.delivery, sources: [row.source], registered: registered.has(row.delivery.path) });
}
const assets = [...rows.values()];
assert.equal(assets.length, 162);
assert.equal(assets.filter(row => row.registered).length, 138);
for (const row of assets) {
  assert(row.category && row.path.startsWith('assets/current/'));
  const bytes = fs.readFileSync(resolvePath(row.path));
  assert.equal(bytes.length, row.bytes);
  assert.equal(crypto.createHash('sha256').update(bytes).digest('hex'), row.sha256);
  for (const source of row.sources) {
    const bytes = fs.readFileSync(resolvePath(source.path));
    assert.equal(crypto.createHash('sha256').update(bytes).digest('hex'), source.sha256, '来源指纹不一致：' + source.path);
    if (source.bytes != null) assert.equal(bytes.length, source.bytes, '来源大小不一致：' + source.path);
  }
}
const labels = { characters: '角色', backgrounds: '背景', cg: 'CG', ui: '封面', posters: '海报' };
const escape = value => String(value).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');
const url = file => path.posix.relative('assets', file);
const cards = assets.map(row => `<article data-category="${row.category}"><a href="${url(row.path)}"><img loading="lazy" src="${url(row.path)}" alt="${escape(row.label)}" width="${row.width}" height="${row.height}"></a><h2>${escape(row.label)}</h2><p>${row.registered ? '当前游戏采用' : '已采用 · 尚未接入当前游戏'}</p><small>${row.width} × ${row.height} · WebP</small><details><summary>来源与路径</summary><p>${escape(row.path)}</p>${row.sources.map(source => `<a href="${url(source.path)}">制作原件</a>`).join(' · ')}</details></article>`).join('\n');
const html = `<!doctype html><html lang="zh-CN"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>毕节，雨停之前 · 当前美术资源</title><style>*{box-sizing:border-box}body{margin:0;background:#eef0ec;color:#20302b;font:16px/1.6 system-ui,sans-serif}header,nav,main{max-width:1500px;margin:auto;padding:24px}h1{font-size:30px;margin:0}a{color:#246a5a}nav{display:flex;gap:12px;flex-wrap:wrap;position:sticky;top:0;background:#eef0ecf2;z-index:2}button,input{font:inherit;padding:10px 16px;border:1px solid #b8c6be;border-radius:8px;background:white;color:inherit}button{cursor:pointer}button[aria-pressed=true]{background:#234a3c;color:white}main{display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:20px}article{padding:16px;background:white;border-radius:12px;min-width:0}article[hidden]{display:none}img{display:block;width:100%;height:300px;object-fit:contain;background:#d9dfda}body.dark img{background:#273735}h2{font-size:18px}p{margin:8px 0}small{color:#596f66}details{font-size:13px;overflow-wrap:anywhere}summary{cursor:pointer}header p{max-width:900px}</style><header><h1>当前美术资源</h1><p>162张已采用图片 · 138张用于当前十章游戏 · 24张文文B已采用素材待后续接入</p><a href="README.md">资源说明</a> · <a href="manifests/current-art.json">采用清单</a> · <a href="../index.html">返回游戏</a></header><nav><button data-filter="all" aria-pressed="true">全部</button>${Object.entries(labels).map(([key,label]) => `<button data-filter="${key}" aria-pressed="false">${label}</button>`).join('')}<input id="search" type="search" placeholder="搜索角色、文件或场景" aria-label="搜索资源"><button id="background">切换预览底色</button><span id="count">162张</span></nav><main>${cards}</main><script>let category='all';const search=document.querySelector('#search');function filter(){let n=0;document.querySelectorAll('article').forEach(a=>{a.hidden=!((category==='all'||a.dataset.category===category)&&a.textContent.toLowerCase().includes(search.value.trim().toLowerCase()));if(!a.hidden)n++});document.querySelector('#count').textContent=n+'张'}document.querySelectorAll('[data-filter]').forEach(b=>b.onclick=()=>{category=b.dataset.filter;document.querySelectorAll('[data-filter]').forEach(x=>x.setAttribute('aria-pressed',String(x===b)));filter()});search.oninput=filter;document.querySelector('#background').onclick=()=>document.body.classList.toggle('dark');</script></html>`;
const outputs = {
  'assets/manifests/current-art.json': JSON.stringify({ schemaVersion: 1, registeredImages: 138, adoptedImages: 162, pendingIntegrationImages: 24, assets }, null, 2) + '\n',
  'assets/index.html': html
};
const args = process.argv.slice(2);
assert(args.length === 0 || (args.length === 1 && args[0] === '--check'), '仅支持 --check');
for (const [file, content] of Object.entries(outputs)) {
  if (args.includes('--check')) assert.equal(fs.readFileSync(resolvePath(file), 'utf8'), content, '美术索引需要重建：' + file);
  else fs.writeFileSync(resolvePath(file), content);
}
console.log(JSON.stringify({ status: 'passed', readOnly: args.includes('--check'), adoptedImages: assets.length, registeredImages: registered.size, outputs: Object.keys(outputs) }));
