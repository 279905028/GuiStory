const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');

const root = path.resolve(__dirname, '../..');
const output = path.join(__dirname, 'public');
const codeFiles = ['index.html', 'styles.css', 'story.js', 'engine.js', 'save-compat.js', 'game.js'];
const assets = new Set();
const hash = content => crypto.createHash('sha256').update(content).digest('hex');

for (const file of codeFiles) {
  const source = fs.readFileSync(path.join(root, file), 'utf8');
  for (const match of source.matchAll(/assets\/[A-Za-z0-9_./-]+\.(?:png|jpe?g|webp|avif|svg|gif|mp3|wav|ogg|woff2?)/g)) {
    assets.add(match[0]);
  }
}

const files = [...codeFiles, ...[...assets].sort()].map(file => {
  const sourcePath = fs.realpathSync(path.resolve(root, file));
  if (!sourcePath.startsWith(root + path.sep)) throw new Error(`非法路径：${file}`);
  const content = fs.readFileSync(sourcePath);
  if (content.length > 25 * 1024 * 1024) throw new Error(`文件超过 25 MiB：${file}`);
  return { path: file, bytes: content.length, sha256: hash(content) };
});

// 只重建此任务拥有的发布目录，不上传草稿、候选图、测试或部署记录。
fs.rmSync(output, { recursive: true, force: true });
for (const file of files) {
  const destination = path.join(output, file.path);
  fs.mkdirSync(path.dirname(destination), { recursive: true });
  fs.copyFileSync(path.join(root, file.path), destination);
  if (hash(fs.readFileSync(destination)) !== file.sha256) {
    throw new Error(`复制校验失败：${file.path}`);
  }
}

const manifest = {
  createdAt: new Date().toISOString(),
  fileCount: files.length,
  imageCount: assets.size,
  totalBytes: files.reduce((sum, file) => sum + file.bytes, 0),
  files,
};
fs.writeFileSync(path.join(__dirname, 'runtime-manifest.json'), JSON.stringify(manifest, null, 2) + '\n');
console.log(JSON.stringify({ output, fileCount: manifest.fileCount, imageCount: manifest.imageCount, totalBytes: manifest.totalBytes }));
