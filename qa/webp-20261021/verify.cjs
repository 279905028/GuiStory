'use strict';
// WebP 迁移的独立验收；历史快照、历史脚本和玩家存储只读。
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const assert = require('node:assert/strict');
const vm = require('node:vm');
const { createRequire } = require('node:module');
const root = path.resolve(__dirname, '../..');
const { StoryEngine } = require('../../engine.js');
const { analyze, reach } = require('../heroine-background-20261020/story-test.cjs');
const codeFiles = ['index.html', 'styles.css', 'story.js', 'engine.js', 'save-compat.js', 'game.js'];
const sha = value => crypto.createHash('sha256').update(value).digest('hex');
const read = file => fs.readFileSync(path.resolve(root, file));
const parseStory = text => JSON.parse(text.slice(text.indexOf('{'), text.lastIndexOf('}') + 1));
const relative = file => path.isAbsolute(file) ? path.relative(root, file) : file;
function load() {
  const story = parseStory(read('story.js').toString());
  const before = parseStory(read('qa/webp-20261021/before/story.js').toString());
  const manifest = JSON.parse(read('assets/webp-manifest.json'));
  const mappings = new Map(manifest.assets.map(item => [relative(item.source.path), relative(item.webp.path)]));
  const runtime = JSON.parse(read('assets/runtime-v0.4-manifest.json'));
  const sources = Object.fromEntries(codeFiles.map(file => [file, read(file).toString()]));
  const referenced = [...new Set(Object.values(sources).flatMap(source =>
    [...source.matchAll(/assets\/[A-Za-z0-9_./-]+\.(?:png|jpe?g|webp|avif|svg|gif)/g)].map(match => match[0])))].sort();
  return { story, before, manifest, mappings, runtime, sources, referenced };
}
function mapPaths(value, mappings) {
  if (typeof value === 'string') return mappings.get(value) || value;
  if (Array.isArray(value)) return value.map(item => mapPaths(item, mappings));
  if (value && typeof value === 'object') return Object.fromEntries(Object.entries(value).map(([key, item]) => [key, mapPaths(item, mappings)]));
  return value;
}
const fingerprints = () => Object.fromEntries([...codeFiles, 'assets/runtime-v0.4-manifest.json', 'assets/webp-manifest.json'].map(file => [file, sha(read(file))]));
async function main() {
  const sharp = require('sharp');
  const report = { startedAt: new Date().toISOString(), pass: false, checks: [], initialHashes: fingerprints(), limitations: [
    '剧情路径为等价状态图分析；各可见节点严格恢复使用自然回放样本，不代表逐路径浏览器点击。',
    '本轮 before 快照为迁移前当前正式版本，不读取或修改玩家存档；旧版本对白迁移仍由原 save-compat.js 负责。'
  ] };
  try {
    const { story, before, manifest, mappings, runtime, sources, referenced } = load();
    assert(manifest.assets.length > 0, '转换清单为空');
    assert.equal(mappings.size, manifest.assets.length, '源路径重复');
    assert.equal(new Set(mappings.values()).size, mappings.size, 'WebP 路径重复');
    assert.deepEqual(story, mapPaths(before, mappings), '除清单明确映射的美术路径外，剧情必须完全一致');
    for (const file of ['engine.js', 'save-compat.js']) assert.deepEqual(read(file), read('qa/webp-20261021/before/' + file), file + ' 不应修改');
    const prefix = source => source.match(/const PREFIX = ['"]([^'"]+)['"]/)?.[1];
    assert.equal(prefix(sources['game.js']), prefix(read('qa/webp-20261021/before/game.js').toString()), '存档空间保持');
    report.checks.push({ name: '仅替换明确登记的美术路径；剧情、引擎、存档兼容组件与存档空间保持', pass: true });

    const graph = analyze(story), priorGraph = analyze(before);
    assert.deepEqual({ ...graph, witnesses: undefined }, { ...priorGraph, witnesses: undefined });
    let restored = 0;
    for (const [id, decisions] of graph.witnesses) {
      if (story.nodes[id].type === 'gate') continue;
      const previous = reach(id, decisions, before).snapshot();
      const current = reach(id, decisions, story).snapshot();
      assert.deepEqual(current, previous, id + ' 自然回放状态改变');
      assert.deepEqual(new StoryEngine(story, previous).snapshot(), previous, id + ' 迁移前状态严格恢复失败');
      restored++;
    }
    report.graph = { ...graph, witnesses: undefined, strictRestoreWitnesses: restored };
    report.checks.push({ name: '正式全图合法路径、结局分布及全部可见节点严格恢复保持', pass: true, ...report.graph });

    const imageResults = [];
    for (const item of manifest.assets) {
      const sourcePath = relative(item.source.path), targetPath = relative(item.webp.path);
      assert(!sourcePath.startsWith('..') && !targetPath.startsWith('..'), '路径超出项目');
      const original = read(sourcePath), converted = read(targetPath);
      for (const [record, data, file] of [[item.source, original, sourcePath], [item.webp, converted, targetPath]]) {
        assert.equal(data.length, record.bytes, file + ' 字节数');
        assert.equal(sha(data), record.sha256, file + ' 指纹');
      }
      const [oldMeta, newMeta] = await Promise.all([sharp(original).metadata(), sharp(converted).metadata()]);
      assert.equal(newMeta.format, 'webp', targetPath + ' 非 WebP 实体');
      assert.equal(newMeta.width, oldMeta.width, targetPath + ' 宽度');
      assert.equal(newMeta.height, oldMeta.height, targetPath + ' 高度');
      assert.equal(newMeta.width, item.webp.width, targetPath + ' 清单宽度');
      assert.equal(newMeta.height, item.webp.height, targetPath + ' 清单高度');
      assert.equal(Boolean(newMeta.hasAlpha), Boolean(oldMeta.hasAlpha), targetPath + ' 透明通道');
      const [a, b] = await Promise.all([sharp(original).ensureAlpha().raw().toBuffer(), sharp(converted).ensureAlpha().raw().toBuffer()]);
      assert.equal(a.length, b.length, targetPath + ' 像素总量');
      let transparentRgbDifferences = 0;
      for (let offset = 0; offset < a.length; offset += 4) {
        if (a[offset + 3] !== b[offset + 3]) assert.fail(targetPath + ' alpha 像素 ' + offset / 4);
        for (let channel = 0; channel < 3; channel++) {
          if (a[offset + 3]) { if (a[offset + channel] !== b[offset + channel]) assert.fail(targetPath + ' 可见像素 ' + offset / 4); }
          else if (a[offset + channel] !== b[offset + channel]) transparentRgbDifferences++;
        }
      }
      imageResults.push({ path: targetPath, width: newMeta.width, height: newMeta.height, hasAlpha: Boolean(newMeta.hasAlpha), alphaEqual: true, visiblePixelsEqual: true, transparentRgbDifferences });
      if (imageResults.length % 25 === 0) console.log('已独立验证 ' + imageResults.length + ' 张 WebP 与原图');
    }
    report.images = imageResults;
    report.checks.push({ name: '全部原图与源指纹保留；WebP 尺寸、alpha 及全部可见像素无损', pass: true, convertedImages: imageResults.length });

    const byTarget = new Map(manifest.assets.map(item => [relative(item.webp.path), item.webp]));
    assert(runtime.assets.length > 0);
    for (const item of runtime.assets) {
      assert(item.path.endsWith('.webp'), item.path + ' 正式资源未迁移');
      assert(byTarget.has(item.path), item.path + ' 缺少转换映射');
      const bytes = read(item.path);
      assert.equal(bytes.length, item.bytes, item.path + ' 运行清单字节数');
      assert.equal(sha(bytes), item.sha256, item.path + ' 运行清单指纹');
    }
    for (const file of referenced) {
      assert(file.endsWith('.webp'), file + ' 运行文件仍引用非 WebP 位图');
      assert(byTarget.has(file), file + ' 缺少转换记录');
      assert.equal(sha(read(file)), byTarget.get(file).sha256, file + ' 入口额外资源指纹');
    }
    report.runtime = { registeredImages: runtime.assets.length, referencedImages: referenced.length, referenced };
    report.checks.push({ name: '运行清单及入口额外素材指纹有效，全部运行引用为 WebP', pass: true, ...report.runtime });

    const builder = path.join(root, '任务拆分/三章扩展/build-story.cjs'), native = createRequire(builder), writes = {};
    vm.runInNewContext(fs.readFileSync(builder, 'utf8'), {
      require: id => id === 'node:fs' ? { ...fs, writeFileSync: (file, value) => { writes[file] = value; } } : native(id),
      __dirname: path.dirname(builder), console: { log() {} }
    });
    assert.equal(writes[path.join(root, 'story.js')], sources['story.js'], '剧情源不能精确重建');
    assert.equal(writes[path.join(root, 'assets/runtime-v0.4-manifest.json')], read('assets/runtime-v0.4-manifest.json').toString(), '资源清单不能精确重建');
    report.checks.push({ name: '内存执行正式构建可精确重现 story.js 和运行清单，无历史基线修改', pass: true });
    report.finalHashes = fingerprints();
    assert.deepEqual(report.finalHashes, report.initialHashes, '验证期间正式文件发生变化');
    report.pass = true;
    console.log(JSON.stringify({ pass: true, images: imageResults.length, runtimeImages: referenced.length, paths: graph.paths, strictRestores: restored }));
  } catch (error) { report.error = error.stack; throw error; }
  finally { report.finishedAt = new Date().toISOString(); fs.writeFileSync(path.join(__dirname, 'verification.json'), JSON.stringify(report, null, 2) + '\n'); }
}
module.exports = { root, load, read, sha, fingerprints, codeFiles, analyze, reach, StoryEngine };
if (require.main === module) main().catch(error => { console.error(error); process.exitCode = 1; });
