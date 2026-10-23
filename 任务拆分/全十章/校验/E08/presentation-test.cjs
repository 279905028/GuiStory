'use strict';
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { root, createStory, clone } = require('./fixture.cjs');
const view = require(path.join(root, 'player-runtime.js'));
const forms = JSON.parse(fs.readFileSync(path.join(root, 'assets/ten-chapter/huangqiuqiu/forms-index.json'))).characters.huangqiuqiu.forms;
const story = createStory(); story.characters.huangqiuqiu.forms = forms;
const checks=[];const test=(name,run)=>{run();checks.push(name);};
test('完整双形态清单可解析',()=>assert(view.validate(story)));
for(const form of ['sphere','human']) {
 for(const avatar of [false,true]) {
  for(const expression of [null,...Object.keys(avatar?forms[form].avatarExpressions:forms[form].expressions)]) {
   test(`${form}/${avatar?'头像':'立绘'}/${expression||'base'}`,()=>{
    const node=expression?{[avatar?'avatarExpression':'expression']:expression}:{};
    const result=view.resolvePortrait(story,'huangqiuqiu',node,{qiuForm:form},avatar);
    assert.equal(result.source,expression?(avatar?forms[form].avatarExpressions:forms[form].expressions)[expression]:forms[form][avatar?'avatarImage':'image']);
    assert.equal(result.presentation,form==='sphere'?'orb':'human');
    assert.equal(result.dedicatedAvatar,avatar);assert(fs.existsSync(path.join(root,result.source)));
   });
  }
 }
 test(`不跨${form}形态回退缺失差分`,()=>assert.throws(()=>view.resolvePortrait(story,'huangqiuqiu',{expression:'missing'},{qiuForm:form}),/画面缺失/));
}
test('缺失人形不能回退球形',()=>{const bad=clone(story);delete bad.characters.huangqiuqiu.forms.human;assert.throws(()=>view.validate(bad));assert.throws(()=>view.resolvePortrait(bad,'huangqiuqiu',{}, {qiuForm:'human'}));});
test('空角色清理舞台',()=>assert.equal(view.resolvePortrait(story,null,{}, {qiuForm:'human'}),null));
test('无效形态拒绝显示',()=>assert.throws(()=>view.resolvePortrait(story,'huangqiuqiu',{}, {qiuForm:'other'})));
test('普通日期、两年后、章范围与相对日期不混淆',()=>{
 const cases=[['ts_c09_huangqiuqiu_friends_days_later','第76天后的数日']];
 for(const [id,expected]of cases)assert.equal(view.dayName(story.scenes[id]),expected);
 for(const s of Object.values(story.scenes))if(s.chronology.domain==='two-years-later')assert.equal(view.dayName(s),'两年后');
 assert.equal(view.dayName({day:30,dayLabel:'第30天',chronology:{mode:'flashback'}}),'第30天');
});
fs.writeFileSync(path.join(__dirname,'presentation-results.json'),JSON.stringify({scope:'E08纯显示解析；A03资源只读引用，不登记A06采用',passed:checks.length,failed:0,checks},null,2)+'\n');console.log(`Presentation ${checks.length}/${checks.length} passed`);
