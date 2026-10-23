#!/usr/bin/env node
'use strict';
// Only uses Safari's isolated WebDriver automation session; never enables remote automation.
const fs=require('node:fs'),path=require('node:path'),net=require('node:net'),http=require('node:http'),crypto=require('node:crypto');
const {spawn,execFileSync}=require('node:child_process');
const root=path.resolve(__dirname,'../../..');
const hash=p=>crypto.createHash('sha256').update(fs.readFileSync(path.join(root,p))).digest('hex');
const files=['story.js','engine.js','game.js','player-runtime.js','save-compat.js','styles.css','index.html','assets/runtime-ten-chapter-manifest.json'];
const evidence={task:'E10',generatedAt:new Date().toISOString(),browser:'Safari',driverVersion:execFileSync('/usr/bin/safaridriver',['--version'],{encoding:'utf8'}).trim(),status:'probing',policy:{onlyIsolatedWebDriverWindow:true,globalSettingsChanged:false,enableFlagUsed:false,userBrowserStorageAccessed:false},fingerprints:Object.fromEntries(files.map(p=>[p,hash(p)])),requests:[],cleanup:{}};
let driver,server,sessionId,driverPort,serverPort,stdout='',stderr='';
function pause(ms){return new Promise(r=>setTimeout(r,ms));}
async function reservePort(){const s=net.createServer();await new Promise((r,j)=>s.listen(0,'127.0.0.1',r).once('error',j));const p=s.address().port;await new Promise(r=>s.close(r));return p;}
async function request(method,url,payload){const start=Date.now();const res=await fetch(url,{method,headers:{'content-type':'application/json'},body:payload===undefined?undefined:JSON.stringify(payload),signal:AbortSignal.timeout(20000)});const raw=await res.text();let data;try{data=JSON.parse(raw);}catch{data={raw};}evidence.requests.push({method,path:new URL(url).pathname,status:res.status,elapsedMs:Date.now()-start,response:data});return{status:res.status,data};}
(async()=>{try{
 driverPort=await reservePort();evidence.driverPort=driverPort;
 driver=spawn('/usr/bin/safaridriver',['--port',String(driverPort)],{stdio:['ignore','pipe','pipe']});driver.stdout.on('data',b=>stdout+=b);driver.stderr.on('data',b=>stderr+=b);
 let ready=false;for(let i=0;i<30;i++){try{await request('GET',`http://127.0.0.1:${driverPort}/status`);ready=true;break;}catch{if(driver.exitCode!==null)break;await pause(150);}}
 if(!ready)throw Error('safaridriver did not become reachable');
 const session=await request('POST',`http://127.0.0.1:${driverPort}/session`,{capabilities:{alwaysMatch:{browserName:'safari'}}});
 sessionId=session.data.value?.sessionId||session.data.sessionId;
 if(!sessionId){evidence.status='blocked';evidence.blocker={httpStatus:session.status,error:session.data.value?.error,message:session.data.value?.message,rawResponse:session.data};return;}
 evidence.capabilities=session.data.value?.capabilities;evidence.sessionCreated=true;
 server=http.createServer((req,res)=>{let p=decodeURIComponent(new URL(req.url,'http://local').pathname);if(p==='/')p='/index.html';const target=path.resolve(root,'.'+p);if(!target.startsWith(root+path.sep)){res.writeHead(403);res.end();return;}fs.readFile(target,(e,b)=>{if(e){res.writeHead(404);res.end();return;}const types={'.html':'text/html','.js':'text/javascript','.css':'text/css','.webp':'image/webp','.png':'image/png','.json':'application/json'};res.setHeader('content-type',types[path.extname(target)]||'application/octet-stream');res.end(b);});});await new Promise((r,j)=>server.listen(0,'127.0.0.1',r).once('error',j));serverPort=server.address().port;evidence.origin=`http://127.0.0.1:${serverPort}`;
 await request('POST',`http://127.0.0.1:${driverPort}/session/${sessionId}/url`,{url:evidence.origin});
 const page=await request('POST',`http://127.0.0.1:${driverPort}/session/${sessionId}/execute/sync`,{script:'return {title:document.title,userAgent:navigator.userAgent,ready:document.readyState,storageLength:localStorage.length};',args:[]});evidence.page=page.data.value;
 // A screenshot is saved locally, never printed in the tool result.
 const screenshot=await fetch(`http://127.0.0.1:${driverPort}/session/${sessionId}/screenshot`,{signal:AbortSignal.timeout(20000)}).then(r=>r.json());if(screenshot.value&&typeof screenshot.value==='string'){fs.writeFileSync(path.join(__dirname,'probe-cover.png'),Buffer.from(screenshot.value,'base64'));evidence.screenshot='qa/ten-chapter/safari/probe-cover.png';}
 evidence.status='session-available';
 }catch(error){evidence.status='blocked';evidence.exception={name:error.name,message:error.message};}
 finally{if(sessionId){try{await request('DELETE',`http://127.0.0.1:${driverPort}/session/${sessionId}`);evidence.cleanup.sessionDeleted=true;}catch(e){evidence.cleanup.sessionDeleteError=e.message;}}
 if(server)await new Promise(r=>server.close(r));evidence.cleanup.httpServerClosed=!!server;
 if(driver){driver.kill('SIGTERM');await Promise.race([new Promise(r=>driver.once('exit',r)),pause(2000)]);evidence.cleanup.driverExitCode=driver.exitCode;evidence.cleanup.driverSignalCode=driver.signalCode;}
 evidence.driverStdout=stdout;evidence.driverStderr=stderr;evidence.inputsUnchanged=files.every(p=>hash(p)===evidence.fingerprints[p]);
 fs.writeFileSync(path.join(__dirname,'probe-results.json'),JSON.stringify(evidence,null,2)+'\n');
 const report=['# E10 Safari 实际浏览器探测','','日期：2026-10-23','',`驱动：${evidence.driverVersion}`,`状态：${evidence.status}`,'','仅请求 Safari WebDriver 独立自动化窗口；未执行 --enable，未修改全局远程自动化设置，未访问玩家窗口或存储。','',evidence.blocker?'## 未能执行实际验收\n\n'+JSON.stringify(evidence.blocker,null,2):evidence.exception?'## 探测异常\n\n'+JSON.stringify(evidence.exception,null,2):'独立 WebDriver 会话可用，正式验收尚需继续。','','原始HTTP响应、输入指纹和清理结果见 [probe-results.json](probe-results.json)。',''];fs.writeFileSync(path.join(__dirname,'report.md'),report.join('\n'));
 console.log(JSON.stringify({status:evidence.status,driverVersion:evidence.driverVersion,blocker:evidence.blocker,exception:evidence.exception,cleanup:evidence.cleanup,inputsUnchanged:evidence.inputsUnchanged},null,2));}
})();
