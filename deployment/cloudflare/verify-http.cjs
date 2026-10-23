'use strict';

// 仅验证运行清单中的 HTTPS 文件；不跟随重定向，不读取或发送凭据。
// 用法：node verify-http.cjs https://example.workers.dev
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');

const CONCURRENCY = 3;
const TIMEOUT_MS = 30000;
const MAX_ATTEMPTS = 3;
const manifestPath = path.join(__dirname, 'runtime-manifest.json');
const reportPath = path.join(__dirname, 'http-verification.json');
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

function readInputs() {
  if (process.argv.length !== 3) {
    throw new Error('请提供唯一参数：HTTPS 站点根 URL。');
  }
  const rootUrl = process.argv[2];
  if (rootUrl.trim() !== rootUrl || !rootUrl.startsWith('https://')) {
    throw new Error('站点根 URL 必须以 https:// 开头，且不得含首尾空白。');
  }
  const root = new URL(rootUrl);
  if (root.protocol !== 'https:' || root.username || root.password || root.hash) {
    throw new Error('只接受不含账号、密码或片段标识的 HTTPS URL。');
  }
  const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
  if (!Array.isArray(manifest.files) || manifest.files.length === 0) {
    throw new Error('runtime-manifest.json 缺少非空 files 清单。');
  }
  const seen = new Set();
  const files = manifest.files.map(file => {
    const segments = typeof file.path === 'string' ? file.path.split('/') : [];
    if (!segments.length || segments.some(segment => !segment || segment === '.' || segment === '..') ||
        /[\\%?#\u0000-\u0020\u007f]/.test(file.path) || seen.has(file.path)) {
      throw new Error(`清单路径无效或重复：${String(file.path)}`);
    }
    if (!Number.isSafeInteger(file.bytes) || file.bytes < 0 ||
        typeof file.sha256 !== 'string' || !/^[a-f0-9]{64}$/i.test(file.sha256)) {
      throw new Error(`清单校验信息无效：${file.path}`);
    }
    seen.add(file.path);
    const url = new URL(root.href);
    // Cloudflare 将 index.html 规范化到目录首页；直接验证首页，避免跟随重定向。
    // 保留目标主机、端口、路径前缀和查询参数；其他文件只追加清单内路径。
    const rootPath = root.pathname.endsWith('/') ? root.pathname : root.pathname + '/';
    url.pathname = file.path === 'index.html' ? rootPath : `${rootPath}${segments.map(encodeURIComponent).join('/')}`;
    return { path: file.path, bytes: file.bytes, sha256: file.sha256.toLowerCase(), url: url.href };
  });
  return { rootUrl, files };
}

async function attempt(file, number) {
  const started = Date.now();
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);
  const result = { attempt: number, status: null, bytes: null, sha256: null, pass: false };
  try {
    const response = await fetch(file.url, {
      method: 'GET',
      redirect: 'manual',
      credentials: 'omit',
      headers: { 'Accept-Encoding': 'identity', 'Cache-Control': 'no-cache' },
      signal: controller.signal,
    });
    result.status = response.status;
    if (response.status !== 200) {
      await response.body?.cancel();
      throw new Error(`HTTP ${response.status}；要求 HTTP 200，且不跟随重定向。`);
    }
    const hash = crypto.createHash('sha256');
    let bytes = 0;
    if (response.body) {
      for await (const chunk of response.body) {
        bytes += chunk.byteLength;
        if (bytes > file.bytes) {
          result.bytes = bytes;
          throw new Error(`响应超过清单字节数 ${file.bytes}，已停止读取。`);
        }
        hash.update(chunk);
      }
    }
    result.bytes = bytes;
    result.sha256 = hash.digest('hex');
    if (bytes !== file.bytes) {
      throw new Error(`字节数不匹配：期望 ${file.bytes}，实际 ${bytes}。`);
    }
    if (result.sha256 !== file.sha256) {
      throw new Error(`SHA-256 不匹配：期望 ${file.sha256}，实际 ${result.sha256}。`);
    }
    result.pass = true;
  } catch (error) {
    result.error = controller.signal.aborted ? `请求超时（${TIMEOUT_MS} 毫秒）。` : error.message;
  } finally {
    clearTimeout(timer);
    result.elapsedMs = Date.now() - started;
  }
  return result;
}

async function verify(file) {
  const attempts = [];
  for (let number = 1; number <= MAX_ATTEMPTS; number++) {
    attempts.push(await attempt(file, number));
    if (attempts.at(-1).pass) break;
    if (number < MAX_ATTEMPTS) await sleep(number * 500);
  }
  const last = attempts.at(-1);
  return {
    path: file.path,
    url: file.url,
    expectedBytes: file.bytes,
    expectedSha256: file.sha256,
    pass: last.pass,
    attempts,
  };
}

async function main() {
  const { rootUrl, files } = readInputs();
  const startedAt = new Date().toISOString();
  const results = new Array(files.length);
  let next = 0;
  async function worker() {
    while (next < files.length) {
      const index = next++;
      results[index] = await verify(files[index]);
      console.log(`${results[index].pass ? 'PASS' : 'FAIL'} ${files[index].path}`);
    }
  }
  await Promise.all(Array.from({ length: Math.min(CONCURRENCY, files.length) }, () => worker()));
  const passed = results.filter(result => result.pass).length;
  const report = {
    status: passed === files.length ? 'PASS' : 'FAIL',
    rootUrl,
    startedAt,
    finishedAt: new Date().toISOString(),
    manifest: path.basename(manifestPath),
    concurrency: CONCURRENCY,
    timeoutMs: TIMEOUT_MS,
    maxAttempts: MAX_ATTEMPTS,
    redirectsFollowed: false,
    fileCount: files.length,
    passed,
    failed: files.length - passed,
    requestCount: results.reduce((sum, result) => sum + result.attempts.length, 0),
    results,
  };
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2) + '\n');
  console.log(JSON.stringify({ status: report.status, passed, failed: report.failed, report: reportPath }));
  if (report.failed) process.exitCode = 1;
}

main().catch(error => {
  console.error(`验证未完成：${error.message}`);
  process.exitCode = 1;
});
