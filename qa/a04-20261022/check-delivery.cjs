const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const root = path.resolve(__dirname, '../..');
const read = p => JSON.parse(fs.readFileSync(path.join(root,p)));
const hash = p => crypto.createHash('sha256').update(fs.readFileSync(path.join(root,p))).digest('hex');
const files = ['assets/ten-chapter/backgrounds/README.md','任务拆分/全十章/交接/A04.md','qa/a04-20261022/report.md'];
const links=[];
for(const file of files){
 const text=fs.readFileSync(path.join(root,file),'utf8');
 for(const m of text.matchAll(/\]\(([^)]+)\)/g)){
  const target=m[1].split('#')[0];if(!target||/^[a-z]+:/i.test(target))continue;
  const resolved=path.resolve(root,path.dirname(file),target);
  links.push({from:file,target,exists:fs.existsSync(resolved)||resolved===path.join(__dirname,'delivery-check.json')});
 }
}
const manifest=read('assets/ten-chapter/backgrounds/a04-manifest.json');
const report=read('qa/a04-20261022/report.json');
const protectedFiles=read('qa/a04-20261022/protected-before.json');
const changed=protectedFiles.filter(f=>!fs.existsSync(path.join(root,f.path))||hash(f.path)!==f.sha256).map(f=>f.path);
const missing=links.filter(x=>!x.exists);
const expected=requirements=>manifest.items.filter(a=>a.scope===requirements);
const result={date:'2026-10-23',checks:{markdownLinks:links.length,missingMarkdownLinks:missing,htmlReferences:report.galleryStaticCheck.references,missingHtmlLinks:report.galleryStaticCheck.missing,inlineScriptSyntax:report.galleryStaticCheck.inlineScriptSyntax,requirements:expected('a01-requirement').length,timeVariants:expected('time-variant').length,allSelectedHashesMatch:manifest.items.every(a=>hash(a.file)===a.sha256),allVisualReviewHashesMatch:read('qa/a04-20261022/visual-review.json').items.every(a=>hash(manifest.items.find(i=>i.id===a.id).file)===a.sha256),allNewSourceReferencesExist:read('assets/ten-chapter/backgrounds/generation-record.json').items.every(a=>a.refs.every(p=>fs.existsSync(path.join(root,p)))),protectedFileCount:protectedFiles.length,changedProtectedFiles:changed},browserReview:report.browserReview,formalGameTest:'not-run',links};
result.passed=missing.length===0&&result.checks.missingHtmlLinks.length===0&&result.checks.allSelectedHashesMatch&&result.checks.allVisualReviewHashesMatch&&result.checks.allNewSourceReferencesExist&&changed.length===0&&result.checks.requirements===53&&result.checks.timeVariants===2;
fs.writeFileSync(path.join(__dirname,'delivery-check.json'),JSON.stringify(result,null,2)+'\n');
console.log(JSON.stringify({passed:result.passed,checks:result.checks,browserReview:result.browserReview},null,2));
if(!result.passed)process.exitCode=1;
