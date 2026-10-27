'use strict';

// 当前形象覆盖层：保留历史采用清单、原始输出和验收指纹。
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const assert = require('node:assert/strict');
const artPaths = require('../../../scripts/art-paths.cjs');
const { root, relativePath, resolvePath, rewritePaths } = artPaths;
const manifestPath = relativePath('assets/character-variants/wenwen-option-b-production-20261026/adoption.json');
const hash = bytes => crypto.createHash('sha256').update(bytes).digest('hex');

function loadArtRevision() {
  const bytes = fs.readFileSync(resolvePath(manifestPath));
  const manifest = JSON.parse(bytes);
  assert.equal(manifest.schemaVersion, 1);
  assert.equal(manifest.status, 'adopted');
  const replacements = new Map();
  const verified = new Set();
  const verify = asset => {
    if (verified.has(asset)) return;
    const file = relativePath(asset.delivery.path);
    const full = resolvePath(file);
    assert(full.startsWith(root + path.sep));
    assert(fs.realpathSync(full).startsWith(fs.realpathSync(root) + path.sep));
    const content = fs.readFileSync(full);
    assert.equal(hash(content), asset.delivery.sha256, '新形象指纹不一致：' + file);
    assert.equal(content.length, asset.delivery.bytes);
    assert.equal(content.toString('ascii', 0, 4), 'RIFF');
    assert.equal(content.toString('ascii', 8, 12), 'WEBP');
    verified.add(asset);
  };
  for (const asset of manifest.assets) {
    const file = asset.delivery.path;
    assert(typeof file === 'string' && file.startsWith('assets/') && file.endsWith('.webp'));
    for (const old of asset.replaces) {
      const key = rewritePaths(old);
      assert(!replacements.has(key), '形象覆盖重复：' + old);
      replacements.set(key, asset);
    }
  }
  const replacePaths = value => {
    if (typeof value === 'string') {
      const mapped = rewritePaths(value);
      const asset = replacements.get(mapped);
      if (!asset) return mapped;
      verify(asset);
      return relativePath(asset.delivery.path);
    }
    if (Array.isArray(value)) return value.map(replacePaths);
    if (value && typeof value === 'object') return Object.fromEntries(Object.entries(value).map(([key, child]) => [key, replacePaths(child)]));
    return value;
  };
  // 只转换当前内存中的采用结果；历史采用、来源清单及其字节指纹保持原样。
  const adopt = original => rewritePaths({
    ...original,
    inputFingerprints: [...(original.inputFingerprints || []), {path:manifestPath, sha256:hash(bytes)}],
    assets: original.assets.map(asset => {
      const replacement = replacements.get(relativePath(asset.file));
      if (!replacement) return asset;
      verify(replacement);
      const d = replacement.delivery;
      return {...asset, file:d.path, width:d.width, height:d.height, bytes:d.bytes,
        sha256:d.sha256, format:'webp', hasAlpha:d.hasAlpha,
        sources:[replacement.source], batchManifest:manifestPath,
        verification:{formatDimensionsAlphaHash:true, losslessVisibleRgbAndAlpha:true, sourcePng:replacement.source.path}};
    })
  });
  return {manifest, manifestPath, replacements, replacePaths, adopt,
    fingerprint:{path:manifestPath, sha256:hash(bytes)}};
}

module.exports = {loadArtRevision};
