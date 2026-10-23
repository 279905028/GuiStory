'use strict';

// 十章公网运行包：只复制正式运行清单白名单，保留旧部署目录与来源材料。
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const assert = require('node:assert/strict');

const root = fs.realpathSync(path.resolve(__dirname, '../..'));
const output = path.join(__dirname, 'public');
const outputManifest = path.join(__dirname, 'runtime-manifest.json');
const sourceManifest = 'assets/runtime-ten-chapter-manifest.json';
const expectedCode = ['engine.js', 'game.js', 'index.html', 'player-runtime.js', 'save-compat.js', 'styles.css'];
const maxFileBytes = 25 * 1024 * 1024;
const hash = content => crypto.createHash('sha256').update(content).digest('hex');
const json = value => JSON.stringify(value, null, 2) + '\n';
const args = process.argv.slice(2);
assert(args.length === 0 || (args.length === 1 && args[0] === '--check'), '用法：node prepare.cjs [--check]');

function sourcePath(file) {
  assert(typeof file === 'string' && /^[A-Za-z0-9_./-]+$/.test(file), `非法运行路径：${String(file)}`);
  const parts = file.split('/');
  assert(parts.every(part => part && !part.startsWith('.')), `路径包含隐藏项或越界：${file}`);
  let full = root;
  for (const part of parts) {
    full = path.join(full, part);
    assert(!fs.lstatSync(full).isSymbolicLink(), `禁止打包软链接：${file}`);
  }
  assert(fs.realpathSync(full).startsWith(root + path.sep) && fs.statSync(full).isFile(), `来源不是工程内文件：${file}`);
  return full;
}

const manifestContent = fs.readFileSync(sourcePath(sourceManifest));
const runtime = JSON.parse(manifestContent);
assert.equal(runtime.release, 'ten-chapter', '必须使用正式十章运行清单');
assert.equal(runtime.formalIntegration, true, '运行清单尚未正式集成');
assert.equal(runtime.chapterCount, 10);
assert.equal(runtime.story?.path, 'story.js');
assert(Array.isArray(runtime.runtimeFiles) && Array.isArray(runtime.assets), '清单缺少运行文件或资源');
assert.deepEqual(runtime.runtimeFiles.map(row => row.path).sort(), expectedCode, '页面、脚本与样式白名单不完整');
assert.equal(runtime.assets.length, 138, '本次十章版本应包含138张采用资源');
assert.equal(runtime.registeredAssetCount, 138);
for (const asset of runtime.assets) {
  assert(/^assets\/.+\.webp$/.test(asset.path), `只允许已采用的WebP运行资源：${asset.path}`);
}

const rows = [runtime.story, ...runtime.runtimeFiles, ...runtime.assets,
  { path: sourceManifest, bytes: manifestContent.length, sha256: hash(manifestContent) }];
assert.equal(rows.length, 146);
const whitelist = new Set(rows.map(row => row.path));
assert.equal(whitelist.size, rows.length, '运行清单存在重复路径');
const files = rows.map(row => {
  assert(Number.isSafeInteger(row.bytes) && row.bytes >= 0 && row.bytes <= maxFileBytes, `文件大小无效或超过25MiB：${row.path}`);
  assert(typeof row.sha256 === 'string' && /^[a-f0-9]{64}$/.test(row.sha256), `指纹无效：${row.path}`);
  const content = fs.readFileSync(sourcePath(row.path));
  assert.equal(content.length, row.bytes, `来源大小已变化：${row.path}`);
  assert.equal(hash(content), row.sha256, `来源指纹已变化：${row.path}`);
  return { path: row.path, bytes: row.bytes, sha256: row.sha256 };
}).sort((a, b) => a.path.localeCompare(b.path, 'en'));

// 首页中的脚本、样式、图片及响应式封面必须全部包含，避免只上线正文而缺播放器。
const html = fs.readFileSync(sourcePath('index.html'), 'utf8');
const entryReferences = new Set();
for (const match of html.matchAll(/\b(src|href|srcset)\s*=\s*(["'])(.*?)\2/gi)) {
  const values = match[1].toLowerCase() === 'srcset' ? match[3].split(',').map(value => value.trim().split(/\s+/)[0]) : [match[3]];
  for (const value of values) {
    if (!value || value.startsWith('#')) continue;
    assert(!/^(?:[a-z]+:|\/\/)/i.test(value), `首页含非本地运行依赖，请先确认：${value}`);
    const file = value.split(/[?#]/)[0].replace(/^\.\//, '');
    assert(whitelist.has(file), `首页依赖未进入发布白名单：${file}`);
    entryReferences.add(file);
  }
}

const manifest = {
  createdAt: new Date().toISOString(),
  release: runtime.release,
  contentRevision: runtime.contentRevision,
  sourceManifest,
  sourceManifestSha256: hash(manifestContent),
  fileCount: files.length,
  imageCount: runtime.assets.length,
  totalBytes: files.reduce((sum, file) => sum + file.bytes, 0),
  entryReferences: [...entryReferences].sort(),
  files,
};
if (args.includes('--check')) {
  console.log(json({ status: 'PASS', readOnly: true, fileCount: manifest.fileCount, imageCount: manifest.imageCount, totalBytes: manifest.totalBytes, entryReferences: manifest.entryReferences }));
  process.exit(0);
}

// 先完整验证并暂存，再更换本目录的发布包；任何失败都恢复旧包与清单。
const lock = path.join(__dirname, '.prepare.lock');
const lockFd = fs.openSync(lock, 'wx');
let stage;
let oldPublic = false, oldManifest = false, newPublic = false, newManifest = false;
let completed = false;
try {
  for (const target of [output, outputManifest]) {
    if (fs.existsSync(target)) assert(!fs.lstatSync(target).isSymbolicLink(), `发布目标禁止使用软链接：${target}`);
  }
  stage = fs.mkdtempSync(path.join(__dirname, '.prepare-'));
  const stagedPublic = path.join(stage, 'public');
  fs.mkdirSync(stagedPublic);
  for (const file of files) {
    const content = fs.readFileSync(sourcePath(file.path));
    assert.equal(content.length, file.bytes, `暂存时来源大小已变化：${file.path}`);
    assert.equal(hash(content), file.sha256, `暂存时来源指纹已变化：${file.path}`);
    const destination = path.join(stagedPublic, file.path);
    fs.mkdirSync(path.dirname(destination), { recursive: true });
    fs.writeFileSync(destination, content, { flag: 'wx' });
    assert.equal(hash(fs.readFileSync(destination)), file.sha256, `暂存复制失败：${file.path}`);
  }
  const stagedManifest = path.join(stage, 'runtime-manifest.json');
  fs.writeFileSync(stagedManifest, json(manifest), { flag: 'wx' });
  if (fs.existsSync(output)) { fs.renameSync(output, path.join(stage, 'previous-public')); oldPublic = true; }
  if (fs.existsSync(outputManifest)) { fs.renameSync(outputManifest, path.join(stage, 'previous-manifest.json')); oldManifest = true; }
  fs.renameSync(stagedPublic, output); newPublic = true;
  fs.renameSync(stagedManifest, outputManifest); newManifest = true;
  completed = true;
} catch (error) {
  if (newPublic) fs.rmSync(output, { recursive: true, force: true });
  if (newManifest) fs.rmSync(outputManifest, { force: true });
  if (oldPublic) fs.renameSync(path.join(stage, 'previous-public'), output);
  if (oldManifest) fs.renameSync(path.join(stage, 'previous-manifest.json'), outputManifest);
  throw error;
} finally {
  fs.closeSync(lockFd);
  fs.rmSync(lock, { force: true });
  // 回滚异常时保留暂存目录，避免删除唯一恢复副本。
  if (stage && (completed || (!fs.existsSync(path.join(stage, 'previous-public')) && !fs.existsSync(path.join(stage, 'previous-manifest.json'))))) {
    fs.rmSync(stage, { recursive: true, force: true });
  }
}
console.log(json({ status: 'PASS', output, fileCount: manifest.fileCount, imageCount: manifest.imageCount, totalBytes: manifest.totalBytes, manifest: outputManifest }));
