'use strict';
const fs=require('node:fs'),path=require('node:path'),crypto=require('node:crypto'),assert=require('node:assert/strict');
const root=path.resolve(__dirname,'../..'),read=f=>JSON.parse(fs.readFileSync(path.join(__dirname,f))),sha=f=>crypto.createHash('sha256').update(fs.readFileSync(path.join(root,f))).digest('hex');
const sourceHash=sha('story.js');
const files=['integrity/results.json','integrity/guards-results.json','content/results.json','engine/results.json','browser/browser-results.json','browser/firefox-results.json','safari/probe-results.json','integrity/protected-after.json'];
const reports=Object.fromEntries(files.map(f=>[f,read(f)]));
const content=reports['content/results.json'],engine=reports['engine/results.json'],chrome=reports['browser/browser-results.json'],firefox=reports['browser/firefox-results.json'],safari=reports['safari/probe-results.json'];
const fullBrowser=r=>r.failed===0&&r.passed===81&&r.checks.length===81&&new Set(r.checks.map(c=>c.name)).size===81&&r.checks.every(c=>c.passed===true)&&r.scopeFilter?.onlyExtended===false&&r.scopeFilter?.filteredCase==='';
const runIndex=process.argv.indexOf('--run-id');
if(runIndex>=0){const run=read('run-results.json');assert.equal(run.runId,process.argv[runIndex+1]);assert.equal(run.onlyStatic,false);assert.equal(run.failed,0);for(const item of run.runs){assert(item.fresh&&item.exitCode===0);assert.equal(sha('qa/ten-chapter/'+item.report),item.sha256,'报告不属于指定完整运行:'+item.report);}}
const checks=[
 ['构建复现',reports['integrity/results.json'].failed===0],['错误拒绝',reports['integrity/guards-results.json'].failed===0],
 ['正文与语义',content.status==='passed'],['图与全状态恢复',engine.status==='passed'&&engine.restoredStates===engine.graph.uniqueVisibleStates],
 ['Chrome',fullBrowser(chrome)],['Firefox',fullBrowser(firefox)],
 ['文件保护',reports['integrity/protected-after.json'].passed===true]
];
const fingerprints=[content.fingerprints['story.js'],engine.fingerprints.find(r=>r.file==='story.js').sha256,chrome.storySha256,firefox.storySha256,safari.fingerprints['story.js'],reports['integrity/results.json'].formalStorySha256,reports['integrity/guards-results.json'].storySha256];
checks.push(['两浏览器完整场景名称一致',JSON.stringify(chrome.checks.map(c=>c.name).sort())===JSON.stringify(firefox.checks.map(c=>c.name).sort())]);
checks.push(['各套结果均对应当前正式剧情',fingerprints.every(h=>h===sourceHash)]);
for(const r of [chrome,firefox])for(const [f,h]of Object.entries(r.runtimeHashes))assert.equal(sha(f),h,'浏览器检查后运行文件改变:'+f);
for(const [f,h]of Object.entries(content.fingerprints))assert.equal(sha(f),h,'正文检查后输入改变:'+f);
for(const row of engine.fingerprints)assert.equal(sha(row.file),row.sha256,'引擎检查后输入/脚本改变:'+row.file);
assert.equal(sha('qa/ten-chapter/content/audit.cjs'),content.suiteSha256,'正文检查器与结果不一致');
assert.equal(sha('qa/ten-chapter/integrity/guards.cjs'),reports['integrity/guards-results.json'].testSha256,'拒绝测试检查器与结果不一致');
const sourceNames=['run.cjs','summarize.cjs','integrity/check.cjs','integrity/guards.cjs','content/audit.cjs','engine/regression.cjs','browser/browser-test.cjs','safari/probe.cjs'];
const passed=checks.every(([,pass])=>pass);
const result={task:'E10',generatedAt:new Date().toISOString(),date:'2026-10-23',status:passed?'local-engineering-passed-device-acceptance-pending':'failed',finalAcceptance:false,storySha256:sourceHash,contractVersion:'1.0.0',contentRevision:'nightshift-20261022-r1',checks:checks.map(([name,passed])=>({name,passed})),summary:{sourceParagraphs:content.metrics.bodySourceParagraphs,sourceNonblankLines:content.metrics.nonblankLines,paths:engine.graph.paths,endings:Object.keys(engine.graph.endings).length,visibleRestoredStates:engine.restoredStates,chromeChecks:chrome.passed,firefoxChecks:firefox.passed,chromeScreenshots:chrome.screenshots.length,firefoxScreenshots:firefox.screenshots.length,protectedFiles:reports['integrity/protected-after.json'].checked},performance:{chrome:chrome.longHistoryPerformance,firefox:firefox.longHistoryPerformance},waivedByUser:['声音试听','真人完整阅读及阅读时长'],pending:[{id:'safari',reason:safari.blocker?.message||safari.status,evidence:'safari/probe-results.json'},{id:'physical-phone',reason:'未提供可操作的实体手机；桌面浏览器五视口模拟不等于实机验收',evidence:'manual-acceptance.md'}],evidenceFingerprints:files.map(f=>({file:'qa/ten-chapter/'+f,sha256:sha('qa/ten-chapter/'+f)})),scriptFingerprints:sourceNames.map(f=>({file:'qa/ten-chapter/'+f,sha256:sha('qa/ten-chapter/'+f)})),formalCodeModified:false,formalBuildWritten:false,playerStorageAccessed:false,deployed:false};
fs.writeFileSync(path.join(__dirname,'report.json'),JSON.stringify(result,null,2)+'\n');console.log(JSON.stringify({status:result.status,summary:result.summary,pending:result.pending,waivedByUser:result.waivedByUser},null,2));if(!passed)process.exitCode=1;
