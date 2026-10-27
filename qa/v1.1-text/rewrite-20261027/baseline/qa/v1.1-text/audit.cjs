/* 仅检查独立文稿；不加载游戏、不访问浏览器存档。 */
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const assert = require('node:assert/strict');
const root = path.resolve(__dirname, '../..');
const folder = path.join(root, '项目文档/故事/v1.1润色稿');
const original = path.join(root, '项目文档/故事/新十章');
const configs = [
  ['第一章-回到毕节.md', 'C01', 5, 1],
  ['第二章-十四天.md', 'C02', 7, 1],
  ['第三章-选一条路.md', 'ROUTE', 1, 1],
  ['罗小满-练习本.md', 'XM', 8, 8],
  ['周栀-十一点四十七分.md', 'ZZ', 8, 8],
  ['孟遥-旧题.md', 'MY', 8, 8],
  ['叶岚-下线.md', 'YL', 8, 8],
  ['飘-空白页.md', 'PI', 8, 8],
  ['朋友与职业-夜班.md', 'FR', 8, 8],
  ['黄球球-门后.md', 'HQ', 8, 8]
];
const hash = value => crypto.createHash('sha256').update(value).digest('hex');
const han = value => (value.match(/\p{Script=Han}/gu) || []).length;
const choices = [], files = [], ids = new Set();
for (const [name, prefix, expectedChoices, expectedChapters] of configs) {
  const text = fs.readFileSync(path.join(folder, name), 'utf8');
  const before = fs.readFileSync(path.join(original, name), 'utf8');
  const intros = [...text.matchAll(/^#{2,3} 剧情简介$/gm)];
  const bodies = [...text.matchAll(/^#{2,3} 完整内容$/gm)];
  assert.equal(intros.length, expectedChapters, name + '简介数量');
  assert.equal(bodies.length, expectedChapters, name + '正文数量');
  if (expectedChapters === 8) {
    const headings = [...text.matchAll(/^## (第[三四五六七八九十]+章)｜(.+)$/gm)].map(m => m[1]);
    assert.deepEqual(headings, ['第三章','第四章','第五章','第六章','第七章','第八章','第九章','第十章'], name + '章节顺序');
  }
  const matches = [...text.matchAll(/^\*\*选择 ([A-Z0-9]+-\d{2})｜(.+)\*\*$/gm)];
  assert.equal(matches.length, expectedChoices, name + '选择数量');
  for (let i = 0; i < matches.length; i++) {
    const m = matches[i], id = m[1];
    assert(!ids.has(id), '重复ID：' + id); ids.add(id);
    assert(id.startsWith(prefix), '不匹配的路线ID：' + id);
    const section = text.slice(m.index, matches[i + 1]?.index ?? text.length);
    const chapter = prefix === 'C01' ? 1 : prefix === 'C02' ? 2 : prefix === 'ROUTE' ? 3 : Number(id.slice(2,4));
    if (expectedChapters === 8) assert.equal(chapter, i + 3, '选择不在预期章节：' + id);
    let options;
    if (prefix === 'ROUTE') {
      options = [...section.matchAll(/^### (.+)｜(.+)$/gm)].map(x => ({label: x[1], text: x[2]}));
      assert.equal(options.length, 7);
    } else {
      const a = /^#### A｜(.+)$/m.exec(section), b = /^#### B｜(.+)$/m.exec(section), join = /^#### 共同段$/m.exec(section);
      assert(a && b && join, '缺选项或共同段：' + id);
      assert(a.index < b.index && b.index < join.index, '分支顺序错误：' + id);
      assert(han(section.slice(a.index + a[0].length, b.index)) >= 15, 'A缺少即时回应：' + id);
      assert(han(section.slice(b.index + b[0].length, join.index)) >= 15, 'B缺少即时回应：' + id);
      options = [{label: 'A', text: a[1]}, {label: 'B', text: b[1]}];
    }
    const originalChoice = ['C01-02','C01-04','C02-01','C02-04','C02-05','ROUTE-01'].includes(id) || (expectedChapters === 8 && [4,6,8].includes(chapter));
    const type = prefix === 'ROUTE' ? '路线选择' : ['C01-02','C02-01'].includes(id) ? '入口条件' : originalChoice ? '情境选择' : '沉浸选择';
    choices.push({id, file: name, chapter, question: m[2], type, originalChoice, options, line: text.slice(0,m.index).split('\n').length});
  }
  for (const m of text.matchAll(/\[[^\]]*\]\(([^)]+)\)/g)) {
    if (!/^https?:/.test(m[1])) assert(fs.existsSync(path.resolve(folder, m[1].split('#')[0])), name + '缺失链接：' + m[1]);
  }
  files.push({file: name, beforeHan: han(before), afterHan: han(text), introCount: intros.length, choices: matches.length, sha256: hash(text)});
}
const first = fs.readFileSync(path.join(folder, configs[0][0]),'utf8');
const second = fs.readFileSync(path.join(folder, configs[1][0]),'utf8');
const route = fs.readFileSync(path.join(folder, configs[2][0]),'utf8');
assert(first.includes('记录三拍') && second.includes('C01-02选A') && second.includes('C02-01选A'));
assert(route.includes('C02-07的A／B都不影响开放'));
const protection = JSON.parse(fs.readFileSync(path.join(__dirname, 'protected-before.json'), 'utf8'));
const changedProtectedFiles = Object.entries(protection).filter(([file, digest]) => !fs.existsSync(path.join(root, file)) || hash(fs.readFileSync(path.join(root, file))) !== digest).map(([file]) => file);
assert.deepEqual(changedProtectedFiles, [], '原稿/游戏/美术/部署保护文件变化');
let checkedLinks = 0;
for (const name of fs.readdirSync(folder).filter(name => name.endsWith('.md'))) {
  const text = fs.readFileSync(path.join(folder, name), 'utf8');
  for (const m of text.matchAll(/\[[^\]]*\]\(([^)]+)\)/g)) {
    if (/^https?:/.test(m[1])) continue;
    assert(fs.existsSync(path.resolve(folder, m[1].split('#')[0])), name + '缺失链接：' + m[1]);
    checkedLinks++;
  }
}
const report = {
  scope: '文稿结构与原文件保护；不是游戏、浏览器或人工逐字质量验收',
  manuscriptUnits: files.reduce((n,f) => n + f.introCount,0),
  totalChoices: choices.length,
  totalOptions: choices.reduce((n,c) => n+c.options.length,0),
  originalChoices: choices.filter(c => c.originalChoice).length,
  addedChoices: choices.filter(c => !c.originalChoice).length,
  beforeHan: files.reduce((n,f) => n+f.beforeHan,0),
  afterHan: files.reduce((n,f) => n+f.afterHan,0),
  protectedFiles: Object.keys(protection).length,
  checkedLinks, changedProtectedFiles, files, choices
};
fs.writeFileSync(path.join(__dirname, 'report.json'), JSON.stringify(report,null,2)+'\n');
console.log(JSON.stringify({...report, files: files.map(f=>({file:f.file,beforeHan:f.beforeHan,afterHan:f.afterHan,choices:f.choices})), choices: undefined},null,2));
