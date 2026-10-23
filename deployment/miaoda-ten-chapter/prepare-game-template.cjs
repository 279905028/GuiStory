'use strict';
// 此脚本安装到妙搭仓库 scripts/prepare-game.cjs；只生成部署副本。
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const assert = require('node:assert/strict');
const vm = require('node:vm');
const root = path.resolve(__dirname, '..');
const source = path.join(root, 'game-source');
const manifest = JSON.parse(fs.readFileSync(path.join(source, 'runtime-manifest.json')));
const uploads = JSON.parse(fs.readFileSync(path.join(root, 'game-assets.json')));
const appId = 'app_17gm4z6t27j';
assert.equal(uploads.appId, appId);
assert.equal(manifest.release, 'ten-chapter');
assert.equal(uploads.assets.length, manifest.assets.length);
assert.equal(new Set(uploads.assets.map(row => row.source)).size, manifest.assets.length);
assert.equal(new Set(uploads.assets.map(row => row.url)).size, manifest.assets.length);
const map = Object.create(null);
for (const row of manifest.assets) {
  const stored = uploads.assets.find(item => item.source === row.path);
  assert(stored, '缺少已上传资源：' + row.path);
  assert.equal(stored.sha256, row.sha256);
  assert.equal(stored.bytes, row.bytes);
  assert(stored.url.startsWith('/spark/app/' + appId + '/runtime/api/v1/storage/object/'));
  assert(/^\/spark\/app\/app_17gm4z6t27j\/runtime\/api\/v1\/storage\/object\/[A-Za-z0-9_-]+\/[A-Za-z0-9_-]+\.webp$/.test(stored.url));
  map[row.path] = stored.url;
}
for (const row of [manifest.story, ...manifest.runtimeFiles]) {
  const data = fs.readFileSync(path.join(source, row.path));
  assert.equal(data.length, row.bytes);
  assert.equal(crypto.createHash('sha256').update(data).digest('hex'), row.sha256, '正式来源变化：' + row.path);
}
const adapter = `/* 妙搭资源适配；正式正文文件保持原样。 */\n(function () {\n'use strict';\nconst map = ${JSON.stringify(map, null, 2)};\nfunction rewrite(object) {\n  for (const key of Object.keys(object)) {\n    const value = object[key];\n    if (typeof value === 'string' && Object.prototype.hasOwnProperty.call(map, value)) object[key] = map[value];\n    else if (value && typeof value === 'object') rewrite(value);\n  }\n}\nif (!window.RAIN_STORY || window.RAIN_STORY.release !== 'ten-chapter') throw new Error('十章正文尚未加载');\nrewrite(window.RAIN_STORY);\n})();\n`;
// 反向还原后逐字比较数据，证明适配只修改完整图片 URL。
const context = { window: {} };
vm.runInNewContext(fs.readFileSync(path.join(source, 'story.js'), 'utf8'), context);
const original = JSON.stringify(context.window.RAIN_STORY);
vm.runInNewContext(adapter, context);
const reverse = Object.fromEntries(Object.entries(map).map(([key, value]) => [value, key]));
let replaced = 0;
const restored = JSON.stringify(context.window.RAIN_STORY, (key, value) => {
  if (typeof value === 'string' && reverse[value]) { replaced++; return reverse[value]; }
  assert(!(typeof value === 'string' && /^assets\/.*\.webp$/.test(value)), '未映射正文资源：' + value);
  return value;
});
assert.equal(restored, original);
assert(replaced > 100);
fs.mkdirSync(path.join(root, 'public'), { recursive: true });
for (const file of ['story.js', 'engine.js', 'save-compat.js', 'player-runtime.js', 'game.js']) {
  fs.copyFileSync(path.join(source, file), path.join(root, 'public', file));
}
fs.writeFileSync(path.join(root, 'public/asset-map.js'), adapter);
fs.copyFileSync(path.join(source, 'styles.css'), path.join(root, 'styles.css'));
let html = fs.readFileSync(path.join(source, 'index.html'), 'utf8');
html = html.replace(/src="(story|engine|save-compat|player-runtime|game)\.js"/g, 'src="/$1.js"');
html = html.replace('<script src="/story.js" defer></script>', '<script src="/story.js" defer></script>\n  <script src="/asset-map.js" defer></script>');
for (const [file, url] of Object.entries(map)) html = html.split(file).join(url);
assert(!/assets\/.*\.webp/.test(html), '首页仍含未上传资源');
fs.writeFileSync(path.join(root, 'index.html'), html);
console.log(JSON.stringify({ status: 'PASS', appId, contentRevision: manifest.contentRevision, assetCount: uploads.assets.length, mappedStoryReferences: replaced, storyRestoresExactly: true }));
