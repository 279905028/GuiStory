'use strict';
const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const {pathToFileURL}=require('node:url');
const {chromium}=require('playwright');
(async()=>{
 const browser=await chromium.launch({headless:true,executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'});
 try{
  const page=await browser.newPage({viewport:{width:1440,height:1000}}),errors=[];
  page.on('pageerror',e=>errors.push(e.message));
  await page.goto(pathToFileURL(path.resolve(__dirname,'../../assets/ten-chapter/cg/index.html')).href);
  await page.waitForFunction(()=>[...document.images].every(i=>i.complete&&i.naturalWidth>0));
  const total=await page.locator('article:visible').count();assert.equal(total,6);
  await page.click('[data-filter="cg"]');const cg=await page.locator('article:visible').count();assert.equal(cg,4);
  await page.click('[data-filter="ui"]');const ui=await page.locator('article:visible').count();assert.equal(ui,2);
  await page.click('[data-filter="all"]');await page.click('#theme');assert(await page.locator('body').evaluate(e=>e.classList.contains('light')));
  await page.screenshot({path:path.join(__dirname,'gallery-desktop.png'),fullPage:true});
  const mobile=await browser.newPage({viewport:{width:390,height:844}});mobile.on('pageerror',e=>errors.push(e.message));
  await mobile.goto(page.url());await mobile.waitForFunction(()=>[...document.images].every(i=>i.complete&&i.naturalWidth>0));
  const noOverflow=await mobile.evaluate(()=>document.documentElement.scrollWidth<=innerWidth);assert(noOverflow);
  const mobileImages=await mobile.locator('img').evaluateAll(images=>images.map(i=>({width:i.clientWidth,left:i.getBoundingClientRect().left,right:i.getBoundingClientRect().right,naturalWidth:i.naturalWidth,fit:getComputedStyle(i).objectFit})));assert(mobileImages.every(i=>i.left>=0&&i.right<=390&&i.fit==='contain'));
  await mobile.screenshot({path:path.join(__dirname,'gallery-mobile.png')});
  await mobile.locator('article').last().scrollIntoViewIfNeeded();await mobile.screenshot({path:path.join(__dirname,'gallery-mobile-last.png')});assert.equal(errors.length,0);
  fs.writeFileSync(path.join(__dirname,'gallery-check.json'),JSON.stringify({date:'2026-10-23',pass:true,total,cg,ui,theme:true,mobileNoOverflow:noOverflow,mobileImages,pageErrors:errors,browser:await browser.version(),screenshotNote:'窄屏使用独立上下文的首屏／末卡可视区域截图。首轮全页截图出现重复拼接，保留为rejected，不作为视觉验收证据。',scope:'独立画廊的隔离浏览器检查；非游戏或实体手机验收'},null,2));console.log('gallery pass: 6 images, filters, theme, 390px layout');
 }finally{await browser.close();}
})().catch(e=>{fs.writeFileSync(path.join(__dirname,'gallery-check.json'),JSON.stringify({pass:false,error:e.message,scope:'独立画廊，非游戏'},null,2));console.error(e.message);process.exitCode=1});
