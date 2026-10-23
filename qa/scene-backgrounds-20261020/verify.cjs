'use strict';
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const crypto = require('node:crypto');
const assert = require('node:assert/strict');
const { createRequire } = require('node:module');
const { StoryEngine } = require('../../engine.js');
const root = path.resolve(__dirname, '../..');
const read = file => fs.readFileSync(path.join(root, file));
const parse = source => JSON.parse(source.slice(source.indexOf('{'), source.lastIndexOf('}') + 1));
const story = parse(read('story.js').toString());
const before = parse(fs.readFileSync(path.join(__dirname, 'before/story.js'), 'utf8'));
const bindings = require('../../assets/backgrounds/bijie-20261020/bindings.json');
const witnesses = require('../heroine-background-20261020/node-witnesses.json');
const sha = value => crypto.createHash('sha256').update(value).digest('hex');
const checks = [];
function check(name, detail) { checks.push({ name, pass: true, detail }); }

// 独立比较所有剧情字段，而非只检查新增绑定是否存在。
const narrative = value => {
  const copy = structuredClone(value);
  delete copy.backgrounds;
  for (const scene of Object.values(copy.scenes)) delete scene.bg;
  for (const node of Object.values(copy.nodes)) { delete node.bg; delete node.location; }
  return copy;
};
assert.deepEqual(narrative(story), narrative(before));
for (const [key, value] of Object.entries(before.backgrounds)) assert.equal(story.backgrounds[key], value);
for (const [id, node] of Object.entries(before.nodes)) {
  if (!bindings.nodeBindings[id]) {
    assert.equal(story.nodes[id].bg, node.bg);
    assert.equal(story.nodes[id].location, node.location);
  }
}
check('剧情、日期、选项、条件、CG与人物完全一致', {
  nodes: Object.keys(story.nodes).length, scenes: Object.keys(story.scenes).length
});

for (const [file, hash] of Object.entries(require('./protected-hashes.json'))) assert.equal(sha(read(file)), hash, file);
for (const file of ['game.js', 'engine.js', 'index.html']) {
  assert.equal(sha(read(file)), sha(fs.readFileSync(path.join(__dirname, 'before', file))), file);
}
check('参考原图、六张原背景及播放器引擎保持原样');

const imageResults = [];
for (const [key, item] of Object.entries(bindings.backgrounds)) {
  assert.equal(story.backgrounds[key], item.path);
  const buffer = read(item.path);
  assert.equal(buffer.subarray(1, 4).toString(), 'PNG');
  const width = buffer.readUInt32BE(16), height = buffer.readUInt32BE(20);
  assert(width >= 1600 && height >= 900);
  assert(Math.abs(width / height - 16 / 9) < 0.01);
  imageResults.push({ key, path: item.path, width, height, bytes: buffer.length, sha256: sha(buffer) });
}
const manifest = JSON.parse(read('assets/runtime-v0.4-manifest.json'));
for (const asset of manifest.assets) {
  const buffer = read(asset.path);
  assert.equal(buffer.length, asset.bytes, asset.path);
  assert.equal(sha(buffer), asset.sha256, asset.path);
}
for (const item of imageResults) assert(manifest.assets.some(asset => asset.path === item.path));
check('九张新图尺寸、完整运行资源与指纹有效', { newImages: imageResults, runtimeAssets: manifest.assets.length });

for (const [id, bg] of Object.entries(bindings.sceneBindings)) assert.equal(story.scenes[id].bg, bg);
for (const [id, value] of Object.entries(bindings.nodeBindings)) {
  assert.equal(story.nodes[id].bg, value.bg);
  assert.equal(story.nodes[id].location, value.location);
}
for (const node of Object.values(story.nodes)) {
  if (node.type === 'gate') continue;
  assert(story.backgrounds[node.bg ?? story.scenes[node.scene].bg], node.id);
}
check('全剧情显示节点都有有效背景', {
  defaultScenes: Object.keys(bindings.sceneBindings).length,
  explicitNodes: Object.keys(bindings.nodeBindings).length,
  backgroundKeys: Object.keys(story.backgrounds).length
});

function reach(source, target, decisions) {
  const engine = new StoryEngine(source);
  for (let count = 0; count <= Object.keys(source.nodes).length; count++) {
    const node = engine.current();
    if (node.id === target) return engine;
    if (node.type === 'choice') {
      const option = engine.availableChoices().find(item => item.option.value === decisions[node.id]);
      assert(option, target + ': ' + node.id);
      assert(engine.choose(option.index));
    } else assert(engine.advance(), target + ': ' + node.id);
  }
  throw new Error('未到达：' + target);
}
const targets = new Set(Object.keys(bindings.nodeBindings));
for (const sceneId of Object.keys(bindings.sceneBindings)) {
  targets.add(Object.values(story.nodes).find(node => node.scene === sceneId && node.type === 'line' && !node.bg).id);
}
for (const id of targets) {
  assert(witnesses[id], id);
  const saved = reach(before, id, witnesses[id]).snapshot();
  const loaded = new StoryEngine(story, saved);
  assert.deepEqual(loaded.snapshot(), saved, id + ' 存档兼容');
  assert.deepEqual(reach(story, id, witnesses[id]).snapshot(), saved, id + ' 自然回放一致');
}
check('更新前真实剧情存档可恢复且重放一致', { targets: targets.size });

// 不写盘的构建复现，确保以后重建不会丢失本轮素材绑定。
const builder = path.join(root, '任务拆分/三章扩展/build-story.cjs');
const native = createRequire(builder), writes = {};
vm.runInNewContext(fs.readFileSync(builder, 'utf8'), {
  require: id => id === 'node:fs' ? { ...fs, writeFileSync: (file, value) => { writes[file] = value; } } : native(id),
  __dirname: path.dirname(builder), console: { log() {} }
});
assert.deepEqual(parse(writes[path.join(root, 'story.js')]), story);
assert.equal(writes[path.join(root, 'assets/runtime-v0.4-manifest.json')], read('assets/runtime-v0.4-manifest.json').toString());
check('重新构建精确保留背景绑定和运行清单');
const result = { pass: true, date: '2026-10-20', checks, storySha256: sha(read('story.js')) };
fs.writeFileSync(path.join(__dirname, 'verification.json'), JSON.stringify(result, null, 2) + '\n');
console.log(JSON.stringify({ pass: true, checks: checks.length, saveTargets: targets.size, newBackgrounds: imageResults.length }));
