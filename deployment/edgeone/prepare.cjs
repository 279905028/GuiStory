const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');

const root = path.resolve(__dirname, '../..');
const output = path.join(__dirname, 'site');
const codeFiles = ['index.html', 'styles.css', 'story.js', 'engine.js', 'save-compat.js', 'game.js'];
const assets = new Set();

for (const file of codeFiles) {
  const source = fs.readFileSync(path.join(root, file), 'utf8');
  for (const match of source.matchAll(/assets\/[A-Za-z0-9_./-]+\.(?:png|jpe?g|webp|avif|svg|gif|mp3|wav|ogg|woff2?)/g)) {
    assets.add(match[0]);
  }
}

const files = [...codeFiles, ...[...assets].sort()].map(file => {
  const fullPath = path.resolve(root, file);
  if (!fullPath.startsWith(root + path.sep)) throw new Error(`非法路径：${file}`);
  const content = fs.readFileSync(fullPath);
  return {
    path: file,
    bytes: content.length,
    sha256: crypto.createHash('sha256').update(content).digest('hex'),
  };
});

// 仅清理本脚本生成的发布目录，保留源码和项目中的其他资料。
fs.rmSync(output, { recursive: true, force: true });
for (const file of files) {
  const destination = path.join(output, file.path);
  fs.mkdirSync(path.dirname(destination), { recursive: true });
  fs.copyFileSync(path.join(root, file.path), destination);
  const copied = crypto.createHash('sha256').update(fs.readFileSync(destination)).digest('hex');
  if (copied !== file.sha256) throw new Error(`复制校验失败：${file.path}`);
}

const manifest = {
  createdAt: new Date().toISOString(),
  fileCount: files.length,
  imageCount: assets.size,
  totalBytes: files.reduce((sum, file) => sum + file.bytes, 0),
  files,
};
fs.writeFileSync(path.join(__dirname, 'runtime-manifest.json'), JSON.stringify(manifest, null, 2) + '\n');
console.log(JSON.stringify({
  output,
  fileCount: manifest.fileCount,
  imageCount: manifest.imageCount,
  totalBytes: manifest.totalBytes,
}));
