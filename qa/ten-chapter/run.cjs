'use strict';
// 默认完整执行本机检查；设备待验与用户取消项分别记录。
const {spawnSync}=require('node:child_process');
const fs=require('node:fs'),path=require('node:path'),crypto=require('node:crypto');
const root=path.resolve(__dirname,'../..');
const onlyStatic=process.argv.includes('--static-only');
const runId=crypto.randomUUID();
const hash=p=>crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex');
const specs=[
 ['integrity/check.cjs',[],'integrity/results.json'],
 ['integrity/guards.cjs',[],'integrity/guards-results.json'],
 ['content/audit.cjs',[],'content/results.json'],
 ['engine/regression.cjs',[],'engine/results.json']
];
if(!onlyStatic)specs.push(
 ['browser/browser-test.cjs',[],'browser/browser-results.json'],
 ['browser/browser-test.cjs',['--browser=firefox'],'browser/firefox-results.json'],
 ['safari/probe.cjs',[],'safari/probe-results.json']
);
specs.push(['integrity/check.cjs',['verify-protection'],'integrity/protected-after.json']);
const runs=[];
for(const [file,args,report]of specs){
 const startedAt=Date.now(),env={...process.env};
 delete env.E10_CASE;delete env.E10_EXTENDED;
 if(args.includes('--browser=firefox')&&!env.PLAYWRIGHT_BROWSERS_PATH)env.PLAYWRIGHT_BROWSERS_PATH='/private/tmp/cjb-e10-browsers';
 const result=spawnSync(process.execPath,[path.join(__dirname,file),...args],{cwd:root,stdio:'inherit',env});
 const output=path.join(__dirname,report),fresh=fs.existsSync(output)&&fs.statSync(output).mtimeMs>=startedAt-2;
 runs.push({file,args,report,startedAt:new Date(startedAt).toISOString(),endedAt:new Date().toISOString(),exitCode:result.status,error:result.error?.message,fresh,sha256:fresh?hash(output):null});
}
const failed=runs.filter(r=>r.exitCode!==0||!r.fresh).length;
fs.writeFileSync(path.join(__dirname,'run-results.json'),JSON.stringify({runId,onlyStatic,runs,failed},null,2)+'\n');
let summaryStatus=0;
if(!onlyStatic&&!failed){const r=spawnSync(process.execPath,[path.join(__dirname,'summarize.cjs'),'--run-id',runId],{cwd:root,stdio:'inherit'});summaryStatus=r.status??1;}
console.log(JSON.stringify({task:'E10',runId,scope:onlyStatic?'static-only':'local-automated',failedSuites:failed,deviceAcceptance:'pending; see manual-acceptance.md'}));
process.exitCode=failed||summaryStatus?1:0;
