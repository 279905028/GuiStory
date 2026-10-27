/* 前三章修订复核；复用文稿解析器，独立保存本轮结果，不覆盖旧审校报告。 */
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const assert = require('node:assert/strict');
const core = require('../rewrite-20261027/audit.cjs');
const root = path.resolve(__dirname, '../../..');
const folder = '项目文档/故事/v1.1润色稿';
const names = ['第一章-回到毕节.md', '第二章-十四天.md', '第三章-选一条路.md', ...core.routes.map(r => r[1])];
const read = p => fs.readFileSync(p, 'utf8');
const hash = p => crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex');
const ids = text => [...text.matchAll(/^\*\*选择 ([A-Z0-9]+-\d{2})｜/gm)].map(m => m[1]);
const texts = Object.fromEntries(names.map(n => [n, read(path.join(root, folder, n))]));
const originals = Object.fromEntries(names.map(n => [n, read(path.join(__dirname, 'before', folder, n))]));
const signature = text => text.split('\n').filter(l => /^\*\*选择 |^#### [AB]｜|^### .+｜/.test(l));
const allIds = names.flatMap(n => ids(texts[n]));
assert.equal(allIds.length, 69);
assert.equal(new Set(allIds).size, 69);
let options = 0, units = 0;
for (const name of names) {
  assert.deepEqual(signature(texts[name]), signature(originals[name]), name + '选择标题变化');
  options += [...texts[name].matchAll(/^#### [AB]｜/gm)].length;
  units += [...texts[name].matchAll(/^#{2,3} 完整内容$/gm)].length;
}
options += 7;
assert.equal(options, 143);
assert.equal(units, 59);
const outsideReviewedScopeChanges = core.routes.filter(([,name]) => {
  const marker = '## 第四章';
  return texts[name].slice(texts[name].indexOf(marker)) !== originals[name].slice(originals[name].indexOf(marker));
}).map(([,name]) => name);
// 另一聊天正在写毛狼与飘支线，第四章以后只记录变化，不作为本轮审校对象。
const commonIds = ids(texts[names[0]]).concat(ids(texts[names[1]]));
const legal = new Set();
let hidden = 0;
for (let mask = 0; mask < 2 ** commonIds.length; mask++) {
  const flags = Object.fromEntries(commonIds.map((id, i) => [id, (mask >> i) & 1 ? 'B' : 'A']));
  const one = core.render(texts[names[0]], flags);
  const two = core.render(core.commonGuard(texts[names[1]]), flags, one.visited);
  assert.equal(two.visited.includes('C02-01'), flags['C01-02'] === 'A');
  assert.equal(two.visited.includes('C02-07'), flags['C01-02'] === 'A' && flags['C02-01'] === 'A');
  // 回扣必须来自当前选项实际发生过的事件。
  assert.equal(two.text.includes('我拿筷子给你上课'), flags['C02-05'] === 'A');
  if (flags['C02-05'] === 'B') assert(!two.text.includes('拿筷子敲桌子'));
  assert(!two.text.includes('还约我吃这个饼'));
  const key = [...one.visited, ...two.visited].map(id => id + '=' + flags[id]).join(',');
  if (!legal.has(key) && two.visited.includes('C02-07')) hidden++;
  legal.add(key);
}
assert.equal(legal.size, 2048);
assert.equal(hidden, 1024);
let routeChapterVariants = 0;
const prefixes = Object.fromEntries(names.map(n => [n, texts[n].split('## 第四章')[0]]));
const chapterIds = names.flatMap(n => ids(prefixes[n]));
assert.equal(chapterIds.length, 20);
assert.equal(new Set(chapterIds).size, 20);
const prefixOptionCount = Object.values(prefixes).reduce((n,t) => n+[...t.matchAll(/^#### [AB]｜/gm)].length,0)+7;
assert.equal(prefixOptionCount,45);
for (const [prefix,name,label] of core.routes) {
  for (const option of ['A','B']) {
    const rendered = core.render(prefixes[name], {[prefix+'03-01']:option});
    assert.deepEqual(rendered.visited, [prefix+'03-01']);
    assert(rendered.text.length>0);
    assert(core.entry(prefixes[names[2]],label).includes(']('+name+')'));
    routeChapterVariants++;
  }
}
let checkedLinks = 0;
for (const name of fs.readdirSync(path.join(root, folder)).filter(n => n.endsWith('.md'))) {
  for (const match of read(path.join(root,folder,name)).matchAll(/\[[^\]]*\]\(([^)]+)\)/g)) {
    if (/^https?:/.test(match[1])) continue;
    assert(fs.existsSync(path.resolve(root,folder,match[1].split('#')[0])), name + '失效链接');
    checkedLinks++;
  }
}
const before = JSON.parse(read(path.join(__dirname,'before-manifest.json')));
for (const [file,digest] of Object.entries(before)) assert.equal(hash(path.join(__dirname,'before',file)),digest,'基线变化');
const protectedFiles = JSON.parse(read(path.join(__dirname,'protected-before.json')));
// 当前公共审校入口由并行支线任务更新，不属于本轮负责范围。
delete protectedFiles['qa/v1.1-text/audit.cjs'];
for (const [file,digest] of Object.entries(protectedFiles)) assert.equal(hash(path.join(root,file)),digest,'保护文件变化：'+file);
const snapshot = path.join(__dirname,'reviewed');
fs.mkdirSync(snapshot,{recursive:true});
for (const [name,text] of Object.entries(prefixes)) fs.writeFileSync(path.join(snapshot,name),text);
const digestText = text => crypto.createHash('sha256').update(text).digest('hex');
const report = {
  scope: 'v1.1前三章文稿修订；仅复核共通篇、选线入口和七线第三章，不覆盖并行支线和后日谈验收',
  reviewedPrefixHashes: Object.fromEntries(names.map(n => [n,digestText(prefixes[n])])),
  sourceFileHashes: Object.fromEntries(names.map(n => [n,digestText(texts[n])])),
  reviewedFiles: names.length, reviewedChoices: chapterIds.length, reviewedOptions: prefixOptionCount,
  fullManuscriptChoiceIds: allIds.length, fullManuscriptOptions: options,
  ordinaryCommonPaths: legal.size, hiddenCommonPaths: hidden, nominalCommonAssignments: 2**commonIds.length,
  routeChapterVariants, semanticBranchRegressionPassed: true,
  baselineFiles: Object.keys(before).length, protectedFiles: Object.keys(protectedFiles).length,
  outsideReviewedScopeChanges, checkedLinks,
  parallelWork: '毛狼与飘感情线与公共后日谈另有聊天并行实施；已保留其新增内容。本结果绑定reviewed快照，不代表新增整线验收。',
  growthAudit: '原40%—60%篇幅结果为历史；并行新增支线经用户允许超过60%，完整篇幅由该任务另行核算。'
};
fs.writeFileSync(path.join(__dirname,'report.json'),JSON.stringify(report,null,2)+'\n');
console.log(JSON.stringify({...report,reviewedPrefixHashes:undefined,sourceFileHashes:undefined},null,2));
