'use strict';
// 从保留的十日序章与本目录章节源构建正式、可离线读取的 story.js。
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const root = path.resolve(__dirname, '../..');
const original = fs.readFileSync(path.join(root, 'qa/chapter3-20261020/before/story.js'), 'utf8');
const story = JSON.parse(original.slice(original.indexOf('{'), original.lastIndexOf('}') + 1));
const n = story.nodes;
story.release = '0.3';
story.routeChoice = 'ch3_route_choice';
story.chapters = {
  '1': { title: '第一章 · 回来的人', days: '第1—10天' },
  '2': { title: '第二章 · 镜头没有拍到的', days: '第11—14天' },
  '3': { title: '第三章 · 想见你，不必有事', days: '第15—21天' }
};
for (const scene of Object.values(story.scenes)) scene.chapter = 1;
function addSequence(prefix, scene, rows, next) {
  const ids = rows.map((_, i) => `${prefix}_${String(i + 1).padStart(2, '0')}`);
  rows.forEach(([speaker, text, character, expression], i) => {
    if (n[ids[i]]) throw new Error('重复节点 ' + ids[i]);
    n[ids[i]] = {
      id: ids[i], type: 'line', scene, speaker,
      character: character === undefined ? (story.characters[speaker] ? speaker : null) : character,
      text, next: ids[i + 1] || next,
      ...(expression ? { expression } : {})
    };
  });
  return ids[0];
}
function removeAndReconnect(id) {
  const next = n[id].next;
  for (const node of Object.values(n)) {
    if (node.next === id) node.next = next;
    if (node.default === id) node.default = next;
    for (const option of [...(node.cases || []), ...(node.choices || [])]) if (option.next === id) option.next = next;
  }
  delete n[id];
}

// 第一章：在筹备和竞争之间建立值得珍惜的伙伴日常。
n.s9_prepare_01.next = addSequence('s9_title', 's9', [
  ['maolang', '我想了个片名：《最后一夜，回声不灭》。怎么样，有没有大制作的感觉？', 'maolang', 'expression-smile'],
  ['zhouzhi', '像夜宵摊转让。再加一句“设备齐全，接手就赚”，就能贴门口了。', 'zhouzhi', 'expression-smile'],
  ['narrator', '小满在群里回了个剪刀：“我们店上个月周年庆，也差不多这个口气。”'],
  ['maolang', '行，文艺指导两位，刚才的意见我都记了。到时候字幕别嫌名字小。', 'maolang', 'expression-surprised'],
  ['mengyao', '先留着这段。不是片名，是你们说起这里时这个样子。正式拍的时候也别突然坐得像开会。', 'mengyao', 'expression-smile'],
  ['wenwen', '那先叫《回声，还开着》？', 'wenwen', 'expression-smile'],
  ['maolang', '像我手机停机前最后一条提醒。不过比我的短，省字幕钱。', 'maolang', 'expression-smile'],
  ['narrator', '周栀笑得差点把笔滚到桌下。毛狼弯腰捡起来，真在筹备纸上写了个暂定名。还没人按下录制，我们已经有点想把这一下午留下。']
], 's9_prepare_02');
n.s9_prepare_04.text = '旧监听还不能用，先别排进试音。';
n.s9_inventory_full_01.text = '整单款结了。昨天一起翻出的两张旧单都对上了，这回那台机器终于有个准地方。';
n.s9_inventory_full_03.text = '柜号记熟了，求职材料倒拖到晚上。还好没把自己的名字填进设备栏。';
n.s9_inventory_limited_01.text = '同事照你的柜号找完了。两小时的钱结好了——我还真没再跟去核一遍。';
n.s9_inventory_limited_02.text = '她把同事签过的页压在原单上。我翻到他补的那行，找到旧监听；昨天下午空出的时间，我用来整理了求职材料。';
n.s9_review_02.text = '师匠来取线材，指住我新抄的两个倒写数字。我照原单改好，他才签名，收起自己的报价草页。';
for (const id of ['s9_prepare_03', 's9_inventory_full_02', 's9_inventory_full_04',
  's9_inventory_limited_03', 's9_review_03', 's9_noodles_invite_03',
  's9_noodles_space_03', 's9_ready_02', 's9_ready_04']) removeAndReconnect(id);

// 同一次坦白带上玩家此前选择留下的痕迹，仍保留公开车票的成长事实。
n.s9_compete_07.next = 'g_s9_confession_voice';
n.g_s9_confession_voice = {
  id: 'g_s9_confession_voice', type: 'gate', scene: 's9',
  cases: [
    { flag: 'reunion', value: 'apologize', next: 's9_confession_apologize' },
    { flag: 'reunion', value: 'appointment', next: 's9_confession_appointment' }
  ], default: 's9_confession_joke'
};
for (const [value, text] of [
  ['apologize', '三天前，我才对孟遥承认过逃避。眼下毛狼就在面前，我不能又等别人把问题问到没处躲。'],
  ['appointment', '我替和孟遥的谈话留了整段时间，却一直没给这张车票留一句话。眼下不用再查日历。'],
  ['joke', '“胆子比存款大。”这句差点出口。屋檐下那个没人接住的笑话又响了一遍，我把后半句咽了回去。']
]) {
  const id = 's9_confession_' + value;
  n[id] = { id, type: 'line', scene: 's9', speaker: 'narrator', character: 'wenwen',
    expression: 'expression-hesitant', text, next: 's9_compete_08' };
}
n.s9_measure_04.next = addSequence('s9_ready_result', 's9', [
  ['narrator', '卷尺收起后，孟遥在纸上圈定第一段：明天下午，用已测好的话筒拍一次试音。员工各自确认出镜，旧监听继续留在待查栏。'],
  ['mengyao', '片尾我还想听听大家的想法。今天先把明天这段做成，别光把片名起好了。', 'mengyao', 'expression-serious'],
  ['maolang', '片名也算劳动。明天我提前来，给劳动成果摆椅子。', 'maolang', 'expression-smile']
], 's10_messages_01');

// 私人交流增加半步，仍不在第10天锁定恋爱线。
n.preview_xiaoman_05.next = addSequence('preview_xiaoman_visit', 's10', [
  ['wenwen', '图看完了。明天没东西要修，我还能来坐会儿吗？', null],
  ['xiaoman', '能。别一进门就问哪儿坏了。', null],
  ['narrator', '过了几秒，她补来一句：“椅子也不是只给模特坐的。”我把刚打好的充电座型号删掉，回了个“记住了”。']
], 'end_xiaoman');
n.preview_zhouzhi_06.text = '愿意。我也想见你。下次我来约时间，工具包先放家里。';
n.preview_yelan_11.next = addSequence('preview_yelan_private', 's10', [
  ['narrator', '她说完还站了一会儿，像在找一句与钥匙、工时都无关的话。我也没急着替她找。'],
  ['yelan', '这条路白天是什么样，我好久没仔细看过了。', null],
  ['wenwen', '哪天你想看，叫我。我也想走一遍不用赶着送件的。', 'wenwen', 'expression-smile']
], 'end_yelan');
n.preview_qiu_15.text = '听完了。维修本先合上，你接着说。';
n.preview_qiu_16.text = '这就顺眼多了。还有，你坐下以后没挡住那盏灯。';

// 让原有的沉默有可见反应。道具已收好的片段仍保留空景。
n.s7_camera_07.text = '她记下一笔，让相机垂在身前。我正想再说句柜台多乱，她抬起头。';
n.s9_prepare_01.text = '第十天下午，相机还没有打开。孟遥铺开筹备纸，毛狼用线箱压住纸角。';
n.s9_ready_01.text = '孟遥分开两张纸：已能做的，和等答复的。相机依然没有打开。';
const acting = {
  s3_stall_01: ['xiaoman', 'expression-smile'],
  s3_stall_12: ['xiaoman', 'expression-hesitant'],
  s4_shift_08: ['zhouzhi', 'expression-downcast'],
  s5_work_01: ['xiaoman', 'expression-hesitant'],
  s5_work_04: ['xiaoman', 'expression-smile'],
  s5_portfolio_04: ['xiaoman', 'expression-surprised'],
  s5_portfolio_06: ['xiaoman', 'expression-hesitant'],
  s6_plan_09: ['wenwen', 'expression-hesitant'],
  s7_camera_08: ['mengyao', 'expression-serious'],
  s7_camera_10: ['mengyao', 'expression-hesitant'],
  s7_apologize_02: ['mengyao', 'expression-downcast'],
  s7_apologize_04: ['mengyao', 'expression-hesitant'],
  s7_joke_02: ['mengyao', 'expression-displeased'],
  s8_count_09: ['yelan', 'expression-hesitant'],
  s8_limited_03: ['yelan', 'expression-surprised'],
  preview_qiu_20: ['huangqiuqiu', 'expression-hesitant'],
  preview_qiu_24: ['huangqiuqiu', 'expression-serious'],
  preview_qiu_27: ['huangqiuqiu', 'expression-hesitant']
};
for (const [id, [character, expression]] of Object.entries(acting)) Object.assign(n[id], { character, expression });

for (const id of ['end_xiaoman', 'end_zhouzhi', 'end_mengyao', 'end_yelan', 'end_huangqiuqiu']) {
  n[id].next = 'ch2_open_01';
  n[id].nextChapter = '第二章 · 镜头没有拍到的：第11天开始拍摄，一段尚未审阅的样片将让大家重新讨论，谁有权讲述这里的生活。第15天再选择正式路线。';
}
n.end_xiaoman.text = '她把不满意的图留在作品夹里，也给一个不来修东西的人留了位置。我第一次发现，自己想去那家店，并不全是因为她需要帮忙。';

for (const filename of ['chapter2.json', 'chapter3.json']) {
  const chapter = JSON.parse(fs.readFileSync(path.join(__dirname, filename), 'utf8'));
  for (const [id, scene] of Object.entries(chapter.scenes)) {
    if (story.scenes[id]) throw new Error('重复场景 ' + id);
    story.scenes[id] = scene;
  }
  for (const [id, node] of Object.entries(chapter.nodes)) {
    if (n[id]) throw new Error('重复节点 ' + id);
    n[id] = node;
  }
}

// 统一使用与既有差分同源的女主基础图，旧图片保持原样归档。
for (const key of ['xiaoman', 'zhouzhi', 'mengyao', 'yelan']) {
  story.characters[key].image = `assets/character-variants/${key}-face-v2-candidate.png`;
}
const artRoots = Object.fromEntries(Object.keys(story.characters).map(key => [key,
  key === 'shijiang' ? 'assets/character-variants/shijiang-optionA-20261020/' :
  ['maolang', 'huangqiuqiu'].includes(key) ? `assets/new-character-variants/expressions-v01-20261019/${key}/` :
  `assets/character-variants/expressions-v01-20261019/${key}/`
]));
const used = Object.fromEntries(Object.keys(story.characters).map(key => [key, new Set()]));
for (const node of Object.values(n)) {
  if (node.expression) {
    if (!used[node.character]) throw new Error('差分缺少在场角色：' + node.id);
    used[node.character].add(node.expression);
  }
  if (node.avatarExpression) used[node.speaker === 'narrator' ? 'wenwen' : node.speaker].add(node.avatarExpression);
}
// 旧播放器映射在第一章仍有效，也列入显式资源表，便于打包核对。
for (const expression of ['action-wave', 'action-explaining', 'expression-surprised',
  'action-thinking', 'expression-serious', 'expression-hesitant', 'expression-smile']) used.maolang.add(expression);
for (const expression of ['action-explaining', 'expression-serious', 'expression-smile',
  'action-thinking', 'action-phone']) used.shijiang.add(expression);
for (const [key, values] of Object.entries(used)) {
  story.characters[key].expressions = Object.fromEntries([...values].sort().map(value => {
    const filename = `${artRoots[key]}char-${key}-${value}.png`;
    if (!fs.existsSync(path.join(root, filename))) throw new Error('素材不存在：' + filename);
    return [value, filename];
  }));
}
const source = '// v0.3 三章版：显式剧情节点；由 任务拆分/三章扩展/build-story.cjs 构建。\nwindow.RAIN_STORY = ' +
  JSON.stringify(story, null, 2) + ';\n';
fs.writeFileSync(path.join(root, 'story.js'), source);
const assets = new Set([
  ...Object.values(story.backgrounds), 'assets/background-variants/m2-daynight-20261020/bg-street-day.png',
  ...Object.values(story.cgs).map(cg => cg.image),
  ...Object.values(story.characters).flatMap(character => [character.image, ...Object.values(character.expressions)])
]);
const manifest = {
  release: story.release, scope: '三章剧情与实际注册资源，不包含未采用候选和飘',
  chapterCount: Object.keys(story.chapters).length, sceneCount: Object.keys(story.scenes).length,
  nodeCount: Object.keys(n).length, choiceCount: Object.values(n).filter(node => node.type === 'choice').length,
  terminalCount: Object.values(n).filter(node => node.type === 'end' && !node.next).length,
  chapterStopCount: Object.values(n).filter(node => node.type === 'end' && node.next).length,
  cgBindings: Object.values(n).filter(node => node.cg).length,
  expressionBindings: Object.values(n).filter(node => node.expression).length,
  assets: [...assets].sort().map(file => {
    const buffer = fs.readFileSync(path.join(root, file));
    return { path: file, bytes: buffer.length, sha256: crypto.createHash('sha256').update(buffer).digest('hex') };
  })
};
fs.writeFileSync(path.join(root, 'assets/runtime-v0.3-manifest.json'), JSON.stringify(manifest, null, 2) + '\n');
console.log(JSON.stringify({ ...manifest, assets: manifest.assets.length }, null, 2));
