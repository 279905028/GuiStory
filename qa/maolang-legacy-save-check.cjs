'use strict';
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict');
const {chromium}=require('/Users/yipin/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const {StoryEngine}=require('../engine.js');
const root=path.resolve(__dirname,'..'),out=path.join(__dirname,'maolang-optionD-20261020'),prefix='bijie-rain-demo:v1:';
const c={window:{}};vm.runInNewContext(fs.readFileSync(path.join(out,'before/story.js'),'utf8'),c);
const engine=new StoryEngine(c.window.RAIN_STORY),target='s9_compete_04';
while(engine.current().id!==target){if(engine.current().type==='line')engine.advance();else assert(engine.choose(engine.availableChoices()[0].index));}
const oldState=engine.snapshot(),settings={textSpeed:'instant',sound:false,volume:.35};
assert(oldState.history.some(n=>n.text.includes('细框眼镜')),'确实使用更新前的存档');
const value={format:1,savedAt:new Date().toISOString(),settings,state:oldState};
const results={target,cases:[]};
(async()=>{let browser;try{
  browser=await chromium.launch({executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',headless:true});
  for(const kind of ['auto','manual','corrupt']){
    const ctx=await browser.newContext({viewport:{width:390,height:844}}),page=await ctx.newPage();
    const save=structuredClone(value);if(kind==='corrupt')save.state.history[0].text+='伪造';
    const raw=JSON.stringify(save),key=prefix+(kind==='manual'?'slot3':'auto');
    await ctx.addInitScript(({key,raw,prefix,settings})=>{localStorage.setItem(key,raw);localStorage.setItem(prefix+'settings',JSON.stringify(settings));},{key,raw,prefix,settings});
    await page.goto('http://127.0.0.1:41735/');
    if(kind==='corrupt'){
      await page.waitForSelector('#continue-btn:disabled');
      assert.equal(await page.evaluate(key=>localStorage.getItem(key),key),raw,'坏档原字符串必须保留');
    }else{
      if(kind==='manual'){
        await page.locator('[data-action="load"]:visible').first().click();await page.locator('.save-slot').nth(3).click();
      }else await page.locator('[data-action="continue"]:visible').click();
      await page.waitForFunction(()=>{const i=document.querySelector('#character');return i.getAttribute('src')?.endsWith('char-maolang-expression-hesitant.png')&&i.complete&&i.naturalWidth>0&&!i.hidden;});
      const current=await page.evaluate(()=>JSON.parse(localStorage.getItem('bijie-rain-demo:v1:auto')));
      assert.equal(current.state.nodeId,target);assert.deepEqual(current.state.choices,oldState.choices);assert.deepEqual(current.state.flags,oldState.flags);
      assert(current.state.history.some(n=>n.text.includes('黑框眼镜')),'严格验证后按当前正文重放');
      if(kind==='manual')assert.equal(await page.evaluate(key=>localStorage.getItem(key),key),raw,'手动旧档原字符串不主动改写');
    }
    results.cases.push({kind,pass:true});await ctx.close();
  }
  results.pass=true;
}catch(e){results.pass=false;results.error=e.stack;process.exitCode=1;}finally{if(browser)await browser.close();fs.writeFileSync(path.join(out,'legacy-save-results.json'),JSON.stringify(results,null,2)+'\n');console.log(JSON.stringify(results));}})();
