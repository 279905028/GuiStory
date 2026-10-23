'use strict';

// 飘的共通相识、第三章个人路线和两年后后日谈。
// 在 chapter2/chapter3 合并完成后、正式资源注册前调用。
module.exports = function addPiaoRoute(story) {
  const n = story.nodes;
  const required = ['ch2_record_09', 'ch2_result_06', 'ch3_route_choice',
    'end_ch3_xiaoman', 'end_ch3_zhouzhi', 'end_ch3_mengyao',
    'end_ch3_yelan', 'end_ch3_solo', 'end_ch3_huangqiuqiu'];
  for (const id of required) {
    if (!n[id]) throw new Error('飘路线缺少接入节点：' + id);
  }
  if (story.characters.piao) throw new Error('飘角色重复注册');
  if (story.chapters.epilogue) throw new Error('后日谈章节重复注册');

  story.characters.piao = {
    name: '飘', age: 20, adult: true, image: 'assets/char-piao.webp',
    color: '#c69c91', presentation: 'human'
  };
  story.chapters.epilogue = { title: '后日谈 · 雨后的约定', days: '两年后' };

  function node(value) {
    if (n[value.id]) throw new Error('飘路线节点重复：' + value.id);
    n[value.id] = value;
    return value.id;
  }
  function scene(id, value) {
    if (story.scenes[id]) throw new Error('飘路线场景重复：' + id);
    story.scenes[id] = value;
  }
  function lines(prefix, sceneId, rows, next) {
    const ids = rows.map((_, i) => `${prefix}_${String(i + 1).padStart(2, '0')}`);
    rows.forEach(([speaker, text, expression, character], index) => {
      node({
        id: ids[index], type: 'line', scene: sceneId, speaker, text,
        character: character === undefined ? (speaker === 'narrator' ? null : speaker) : character,
        next: ids[index + 1] || next,
        ...(expression ? { expression } : {})
      });
    });
    return ids[0];
  }

  scene('ch3_piao15', {
    title: '名字不必挤在一起', chapter: 3, day: 15, time: '下午',
    location: '老街屋檐下', bg: 'street'
  });
  scene('ch3_piao18', {
    title: '各自赴的约', chapter: 3, day: 18, time: '傍晚',
    location: '坡口面馆', bg: 'noodles'
  });
  scene('ch3_piao21', {
    title: '留白由谁来写', chapter: 3, day: 21, time: '下午',
    location: '老街屋檐下', bg: 'street'
  });
  scene('epilogue_piao_wenwen', {
    title: '第二版的封底', chapter: 'epilogue', day: 751, dayLabel: '两年后',
    time: '下午', location: '老街屋檐下', bg: 'street'
  });
  scene('epilogue_piao_maolang', {
    title: '这次写上两个人的名字', chapter: 'epilogue', day: 751, dayLabel: '两年后',
    time: '下午', location: '坡口面馆 · 婚礼后的家常席', bg: 'noodles'
  });

  const afterFirstMeeting = n.ch2_record_09.next;
  n.ch2_record_09.next = lines('ch2_piao_meet', 'ch2_take', [
    ['narrator', '收线时，一个抱着纸袋的姑娘停在门边。毛狼先把挡路的椅子挪开，她才抬手招呼。'],
    ['piao', '找孟遥。片尾字样打了两张，哪张看着不费眼，就照哪张来。', 'action-wave'],
    ['mengyao', '这是飘。片尾字样我请她帮忙看，人名等大家确认完再定。', 'expression-smile'],
    ['piao', '认字这事我熟。猜别人叫什么，暂时还没学会。', 'expression-smile'],
    ['maolang', '那好办。我叫毛狼，毛狼的毛，毛狼的狼。', 'expression-smile'],
    ['piao', '记下了。你再说一遍，我就得给你另开一行。', 'expression-smile'],
    ['wenwen', '文文。两个一样的文，不用另起一行。', 'expression-smile'],
    ['narrator', '她低头在纸角写下名字，笑时露出很浅的酒窝。纸袋里还装着一本薄薄的空白样册。'],
    ['wenwen', '这本也是给片子用的？'],
    ['piao', '自己的。我想做一本街巷小册子，收店主愿意留下的几句话。片尾还没定的时候，就翻翻这个。', 'action-explaining'],
    ['maolang', '坡口那家面馆我熟，改天陪你去问。顺便请你吃碗面？', 'expression-smile'],
    ['piao', '问店主我自己来。吃面可以，这两天得先把片尾核对完，时间再发你。', 'expression-serious'],
    ['narrator', '毛狼把她的联系方式存好，难得没接一句笑话。我看着她收起样册，也记住了那一页还没有标题的纸。'],
    ['piao', '片尾确认了发我，别让三个人同时改同一张。我去把自己的饭吃了。', 'expression-smile']
  ], afterFirstMeeting);
  // 保留初见原节点编号，让她自己交代返乡与待业状态。
  n.ch2_piao_meet_10.next = lines('ch2_piao_bg_return', 'ch2_take', [
    ['piao', '我前阵子才回毕节，现在还没上班。想趁这阵子，把这条街重新走一遍。', 'expression-smile'],
    ['wenwen', '回来以后，跟记得的一样吗？'],
    ['piao', '有些一样，有些得重新问。所以想收几句现在的话，别只凭我记得的写。', 'action-explaining']
  ], 'ch2_piao_meet_11');

  const afterInvitation = n.ch2_result_06.next;
  n.ch2_result_06.next = lines('ch2_piao_invite', 'ch2_show', [
    ['narrator', '飘把打好的片尾确认稿收进袋里。她的名字安静地留在最后几行，毛狼却盯着它看了一会儿。'],
    ['piao', '你的名字我没缩小，放心。', 'expression-smile'],
    ['maolang', '我看的不是我的。', 'expression-hesitant'],
    ['narrator', '她手上的动作停了一下，耳边的碎发被她拢回去。我假装继续叠椅子，椅脚却碰出很响的一声。'],
    ['maolang', '昨天那碗面太赶了。周末我想再约你一次，吃完还能走走。', 'expression-serious'],
    ['piao', '周末我有半天留给小册子。吃饭的时间能留，走多久得看我那天累不累。', 'expression-smile'],
    ['maolang', '那就先吃饭。我发时间给你，你看行不行。', 'expression-smile'],
    ['narrator', '飘点了头，把样册从纸袋里抽出来。里面多了一页面馆老板自己写的话，角上留着汤碗压过的浅印。'],
    ['piao', '明天下午我想走这条街，看空白页还缺什么。文文，你有空吗？', 'expression-hesitant'],
    ['narrator', '她问得很轻。我却发现，自己不只想替她看看哪一页印歪了。']
  ], 'ch2_piao_invitation');
  node({
    id: 'ch2_piao_invitation', type: 'choice', scene: 'ch2_show', character: 'piao',
    text: '我怎样回应飘的邀请？', flag: 'piaoInvitation',
    choices: [
      { label: '告诉她我也想多认识她，明天再确认见面的时间。', value: 'interested', next: 'ch2_piao_interest_01' },
      { label: '先当朋友聊聊小册子，安排好时间再回复。', value: 'friendly', next: 'ch2_piao_friendly_01' }
    ]
  });
  lines('ch2_piao_interest', 'ch2_show', [
    ['wenwen', '我想去，也想多认识你一点。明早把时间确认好，再正式约你。', 'expression-smile'],
    ['piao', '好。那我明天等一句具体的，不等一句“哪天”。', 'expression-smile']
  ], 'ch2_piao_invite_close_01');
  lines('ch2_piao_friendly', 'ch2_show', [
    ['wenwen', '小册子我想看。明早理好安排再回复你，先别为我空一下午。', 'expression-smile'],
    ['piao', '行。你要来就说一声，我不会把空白页全留着等你。', 'expression-smile']
  ], 'ch2_piao_invite_close_01');
  lines('ch2_piao_invite_close', 'ch2_show', [
    ['narrator', '毛狼把最后一把椅子推进桌下，抬眼看了看我，又转向她。'],
    ['maolang', '我的约也别弄丢。刚才那句，真不是替面馆拉生意。', 'expression-hesitant'],
    ['piao', '没丢。我看得懂两个不同的人发来的消息。', 'expression-smile']
  ], afterInvitation);

  const route = n.ch3_route_choice;
  if (route.type !== 'choice' || route.flag !== 'route') throw new Error('飘路线入口结构已变化');
  if (route.choices.some(choice => choice.value === 'piao')) throw new Error('飘路线入口重复');
  const soloIndex = route.choices.findIndex(choice => choice.value === 'solo');
  if (soloIndex < 0) throw new Error('飘路线找不到独立路线锚点');
  route.choices.splice(soloIndex + 1, 0, {
    label: '约飘一起走老街，认真回应这段正在靠近的关系。',
    value: 'piao', next: 'ch3_piao_a_01'
  });
  // 第十四天承诺了给出回复；选择其他路线时也把这次邀请交代清楚。
  // 保留各选项原有 requires 和目标，不让隐藏路线因共享回跳而开放。
  for (const choice of route.choices.filter(option => option.value !== 'piao')) {
    const target = choice.next;
    const prefix = `ch3_piao_reply_${choice.value}`;
    choice.next = node({
      id: prefix, type: 'gate', scene: 'ch3_open',
      cases: [{ flag: 'piaoInvitation', value: 'interested', next: `${prefix}_i_01` }],
      default: `${prefix}_f_01`
    });
    lines(`${prefix}_i`, 'ch3_open', [
      ['wenwen', '飘，这几天我有自己的安排。昨天说想多认识你，是认真的；但想清楚以后，我现在只想按朋友相处。别替我留着时间。', undefined, null],
      ['piao', '知道了。那就先做朋友，我照自己的计划走。册子做好了再发你看。', undefined, null]
    ], target);
    lines(`${prefix}_f`, 'ch3_open', [
      ['wenwen', '飘，我把这几天的安排理好了，先不约这次散步。昨天说过要回复你，就先和你说一声。', undefined, null],
      ['piao', '好。那我照自己的计划走，小册子做好了发你看。', undefined, null]
    ], target);
  }

  lines('ch3_piao_a', 'ch3_piao15', [
    ['narrator', '那天上午，我先发消息确认见面的时间。飘把见面改到四点，说想先把样册里漏掉的几句话再核对一遍。'],
    ['narrator', '四点，她抱着样册出现在檐下。我手里只拿了伞，维修包留在了家里。'],
    ['piao', '今天没带工具？', 'expression-surprised'],
    ['wenwen', '带了嘴。可以聊天，不能保修。', 'expression-smile'],
    ['piao', '先试用一会儿。', 'expression-smile']
  ], 'ch3_piao_invitation_memory');
  node({
    id: 'ch3_piao_invitation_memory', type: 'gate', scene: 'ch3_piao15',
    cases: [{ flag: 'piaoInvitation', value: 'interested', next: 'ch3_piao_memory_i_01' }],
    default: 'ch3_piao_memory_f_01'
  });
  lines('ch3_piao_memory_i', 'ch3_piao15', [
    ['piao', '昨天说想多认识我，今天真来了。我刚才还在想，第一句话该不该只谈排版。', 'expression-hesitant'],
    ['wenwen', '不用只谈那个。比如，你为什么想给这本册子留那么多空白？', 'expression-smile']
  ], 'ch3_piao_b_01');
  lines('ch3_piao_memory_f', 'ch3_piao15', [
    ['wenwen', '昨天只敢说想看册子。今天想补一句，我也想认识做册子的人。', 'expression-hesitant'],
    ['piao', '嗯。补在今天也来得及。', 'expression-smile']
  ], 'ch3_piao_b_01');
  lines('ch3_piao_b', 'ch3_piao15', [
    ['piao', '你看这一页就知道了。先别嫌它空。', 'expression-serious'],
    ['narrator', '她翻开样册，一页只放着半句话，下面留了很宽的一块白。我问是不是漏印了。'],
    ['piao', '是店主没想好后半句。我喜欢这半句，就先放着，等她愿意再补。', 'action-explaining'],
    ['wenwen', '留这么多空，你不怕别人说不够热闹？'],
    ['piao', '这是我的册子。第一次，我想自己决定哪儿可以空。', 'expression-serious'],
    ['narrator', '走到坡口，她停下来重新看那页纸。我没急着说好，只问将来翻开它的人，她最想让谁看见。'],
    ['piao', '住在这儿的人。寄一份给搬走的人也好。不是把街道写成“从前”，这儿明天还有人开门。', 'expression-smile'],
    ['wenwen', '那封底可以留个地方，下次有人回来时，再写一行。'],
    ['piao', '这句我记。只记这个意思，不把你整段话印上去，太占纸了。', 'expression-smile'],
    ['narrator', '她笑起来，我也笑了。雨点从伞边滑下去，这次没有人急着找一件需要修的东西。'],
    ['piao', '还有件事。毛狼约我的饭，我答应了。他的意思，我听明白了。', 'expression-hesitant'],
    ['wenwen', '我听见的时候，有一点不自在。不是你的问题，我还在学怎么把这点话说出来。', 'expression-serious'],
    ['piao', '你可以说。我现在还没和谁在一起，也想自己慢慢看清楚。', 'expression-serious'],
    ['wenwen', '那我也说明白。我想继续约你，看看我们能不能不只做朋友。', 'expression-hesitant'],
    ['piao', '好。我也想再见你。第十八天六点，面馆有空桌，我把改好的那几页带来。', 'expression-smile'],
    ['narrator', '她在样册边角写下时间，没加感叹号。我一路走到街口，还能想起那行很小、很确定的字。']
  ], 'ch3_piao_c_01');
  n.ch3_piao_b_03.next = lines('ch3_piao_bg_past', 'ch3_piao15', [
    ['wenwen', '你为什么会想到等人把话补完整？'],
    ['piao', '我以前在大城市的 KTV 做过陪酒。听人说话的时候多，可一换歌、一碰杯，刚起的话头就断了。', 'expression-serious'],
    ['piao', '有些话我后来还记得，却不知道后面是什么。这次能慢慢问，就想让人把想说的说完。', 'action-thinking'],
    ['wenwen', '那店主不想补呢？'],
    ['piao', '就留着。不肯说的，也不能替人编。', 'expression-serious']
  ], 'ch3_piao_b_04');

  lines('ch3_piao_c', 'ch3_piao18', [
    ['narrator', '第十八天傍晚，我提前到了面馆。毛狼正在门口扣伞，看到我手里那份样册，脚步顿了一下。'],
    ['maolang', '你也约了今天？', 'expression-surprised'],
    ['wenwen', '六点。你呢？'],
    ['maolang', '我来拿饭。和她吃饭是昨天，不是你这场的加座。', 'expression-hesitant'],
    ['narrator', '他往店里看了一眼，没立即进去。油烟从门边飘出来，我们忽然都不知道该把手放哪儿。'],
    ['maolang', '我喜欢她。这回先说清，省得咱俩像抢最后一只话筒。', 'expression-serious'],
    ['wenwen', '我也喜欢。可我现在连她会不会嫌我聊天闷，都还没弄明白。', 'expression-hesitant'],
    ['maolang', '我讲了三个笑话，她只笑一个。我已经把另两个撤回了，虽然人没法撤回。', 'expression-smile'],
    ['narrator', '我没忍住笑，胸口那点紧却还在。毛狼也没装得毫不在意，只伸手拍了拍我的伞柄。'],
    ['maolang', '她跟谁走近，得听她自己说。你别替我问她，我也不去打听你们聊了什么。', 'expression-serious'],
    ['wenwen', '好。朋友的饭照吃，难受了也别拿她开玩笑。', 'expression-serious'],
    ['narrator', '飘到时，毛狼提着打包的面出来。他对她说昨天很高兴，下回想见她会再问，然后把桌子留给我们。'],
    ['piao', '你们刚才站门口，像在等谁来发号。', 'expression-smile'],
    ['wenwen', '聊了会儿。主要发现，我们都没自己想的那么从容。'],
    ['piao', '那坐下吃。面馆只按桌点单，不按谁先来的排。', 'expression-smile'],
    ['narrator', '吃过面，她摊开新版样册。封底多了一条细线，刚好能写下一行字。边上却留着她反复擦过的痕迹。'],
    ['piao', '我删了两页。排得漂亮，放在一起不像我想讲的街。白干了两个晚上，有点气。', 'expression-downcast'],
    ['wenwen', '要不要先收起来？今晚剩下这段时间，不看它也行。', 'expression-serious'],
    ['piao', '你真肯？我说带新稿来，结果一直皱着脸。', 'expression-hesitant'],
    ['wenwen', '我约的是你。新稿明天也不会跑。', 'expression-smile'],
    ['narrator', '她把样册合上，问我第二十八天去贵阳会待多久。我把还没确定的部分照实说了，没有为了今晚好听就答应留下。'],
    ['piao', '我想继续做这本册子，暂时也没打算搬走。你真去了，我们再看怎么见面，别今天就把谁的日子擦掉。', 'expression-serious'],
    ['wenwen', '那第二十一天下午先见一次。没稿子也能来。'],
    ['piao', '这次我来约地点。你带那张只会聊天的嘴。', 'expression-smile']
  ], 'ch3_piao_d_01');
  n.ch3_piao_c_22.next = lines('ch3_piao_bg_next', 'ch3_piao18', [
    ['wenwen', '册子做完以后呢？'],
    ['piao', '还得找工作。不过这几份印完，不等于它就成了我的工作。', 'expression-serious'],
    ['piao', '先把册子交给愿意留下话的人，再问问有什么合适的活。现在还没定，不先说一个好听的。', 'action-thinking'],
    ['wenwen', '好。有新安排，你想讲的时候，我再听。', 'expression-smile']
  ], 'ch3_piao_c_23');

  lines('ch3_piao_d', 'ch3_piao21', [
    ['narrator', '第二十一天下午，飘约我在老街碰面。样册只印了几份，她正把第一份装进面馆老板的纸袋。'],
    ['piao', '先给说过话的人看。我还不知道会不会有人愿意买，不过总算做成一本了。', 'expression-smile'],
    ['wenwen', '我想要一本。还有，恭喜你，封底的空地方也保住了。', 'expression-smile'],
    ['narrator', '她抽出另一份给我，封底没有题字。我翻回第一页，看见她把自己的名字放在了编排那一栏。'],
    ['piao', '差点又漏写自己。名字校了这么多遍，轮到这个反倒不知道放哪儿。', 'expression-hesitant'],
    ['wenwen', '现在这个位置就好。'],
    ['piao', '文文，这几次见面，我都很高兴。昨天装订时闹了个笑话，我第一个想到的是讲给你听。', 'expression-hesitant'],
    ['narrator', '我把册子轻轻合上。她没看纸上的名字，抬头看着我。'],
    ['piao', '我想和你试着交往。贵阳的事还没定，我知道；我也不是等你把所有事办好才喜欢你。', 'expression-serious'],
    ['piao', '如果你现在更想做朋友，也直接告诉我。我会难过一会儿，但不用替我答应。', 'expression-hesitant']
  ], 'ch3_piao_commit');
  node({
    id: 'ch3_piao_commit', type: 'choice', scene: 'ch3_piao21', character: 'piao',
    text: '飘认真地等着我的回答。我想怎样继续这段关系？', flag: 'piaoRelationship',
    choices: [
      { label: '我也喜欢你。我们正式交往，接下来的安排一起商量。', value: 'together', next: 'ch3_piao_together_01' },
      { label: '谢谢你认真告诉我。我想和你做朋友，不开始恋爱。', value: 'friends', next: 'ch3_piao_friends_01' }
    ]
  });
  lines('ch3_piao_together', 'ch3_piao21', [
    ['wenwen', '我也喜欢你。我想和你在一起，下一次见面，不再假装只为了看稿。', 'expression-smile'],
    ['piao', '那也要看稿。我会故意带一页来，看看你有没有偷偷走神。', 'expression-smile'],
    ['narrator', '她朝我伸出手，等我握住才笑了。酒窝比第一次见面时深一点，手心却和我一样有点紧。'],
    ['piao', '毛狼那边，我会自己说明白。他认真约过我，我也该认真回他。', 'expression-serious'],
    ['narrator', '那晚她告诉毛狼，我们决定交往。他隔了一阵回了祝福，也说自己想缓几天，再来吃大家的饭。'],
    ['narrator', '我没有催他马上照常。飘和我先把下一次见面的时间定下，她在封底写了日期，笔尖停在我名字旁边。']
  ], 'end_ch3_piao');
  lines('ch3_piao_friends', 'ch3_piao21', [
    ['wenwen', '谢谢你告诉我。我珍惜和你相处的这些天，但我现在想做朋友，不想用试试看让你一直等。', 'expression-serious'],
    ['narrator', '她握着纸袋，安静了片刻。我没拿毛狼的名字填这段沉默，也没替她想下一步。'],
    ['piao', '好。我听明白了。那今天我想自己走回去，册子你拿着。', 'expression-downcast'],
    ['wenwen', '好。等你想聊天的时候再聊，不急着把今天说成没什么。'],
    ['narrator', '我们在街口分开。后来再收到她的消息，是她改好的一页目录；普通的话重新说起来，也花了一点时间。'],
    ['narrator', '毛狼继续认真约她，她有时答应，有时忙自己的事。那段渐渐亲近的日子，由他们两个人往下过。']
  ], 'end_ch3_piao');
  node({
    id: 'end_ch3_piao', type: 'end', scene: 'ch3_piao21', character: 'piao',
    title: '名字旁的一行空白',
    text: '飘把自己的小册子做成了，也把心意说清了。我认真回答了她。第二十八天的行程、第三十天的停业仍会到来；这一页之后，每个人都要继续过自己的日子。',
    nextChapter: '后日谈 · 雨后的约定：两年后，再看这次回答带来的相处与选择。',
    next: 'epilogue_piao_entry'
  });

  // 先检查当次正式路线，避免从旧存档留下的恋爱标记改变其他路线结果。
  node({
    id: 'epilogue_piao_entry', type: 'gate', scene: 'epilogue_piao_maolang',
    cases: [{ flag: 'route', value: 'piao', next: 'epilogue_piao_relationship' }],
    default: 'epilogue_piao_m_01'
  });
  node({
    id: 'epilogue_piao_relationship', type: 'gate', scene: 'epilogue_piao_maolang',
    cases: [{ flag: 'piaoRelationship', value: 'together', next: 'epilogue_piao_w_01' }],
    default: 'epilogue_piao_m_01'
  });
  for (const id of required.filter(id => id.startsWith('end_ch3_'))) {
    if (n[id].next) throw new Error('飘后日谈接入点已有后续：' + id);
    n[id].next = 'epilogue_piao_entry';
    n[id].nextChapter = '后日谈 · 雨后的约定：两年后，再与飘和毛狼相聚。此前的个人道路仍会继续。';
  }

  lines('epilogue_piao_w', 'epilogue_piao_wenwen', [
    ['narrator', '两年后，又一个雨刚停的下午，飘在老街屋檐下等我。她怀里是小册子的第二版，折角换了位置。'],
    ['narrator', '回声已按原定的时间停业。后来我们换过见面的地点，也有过只能隔着手机吃饭的夜晚，那次牵手并没让日子自动变容易。'],
    ['piao', '这回准点。奖励你先看封底。', 'expression-smile'],
    ['wenwen', '上回晚了十二分钟，你记了多久？'],
    ['piao', '记到你提前说一声为止。现在翻吧。', 'expression-smile'],
    ['narrator', '封底仍有一条细线。第一版写着初次交往的日期，这一版，她在下面添了一行：再一起走一次。'],
    ['piao', '前几天我想把那条线去掉。后来觉得挺好，新日子总得有地方写。', 'action-thinking'],
    ['wenwen', '那今天写哪儿？'],
    ['piao', '先走，回来再写。别没出门就替今天起标题。', 'expression-smile'],
    ['narrator', '毛狼发来消息，说聚餐往后挪半小时。他早已能自然地和我们一起吃饭，偶尔照样嫌我回消息慢。'],
    ['maolang', '你俩别走到下一条街就失联。面我先点，笑话也先给你们留着。', undefined, null],
    ['piao', '跟他说，面可以留，笑话让他再删两个。', 'expression-smile'],
    ['narrator', '我回完消息，接过她装样册的袋子。她把空出来的手递给我，我们仍然会为去哪儿走争一小会儿，然后一起下坡。']
  ], 'end_piao_wenwen');
  node({
    id: 'end_piao_wenwen', type: 'end', scene: 'epilogue_piao_wenwen', character: 'piao',
    title: '飘与文文 · 再一起走一次',
    text: '我们把喜欢说出口，也在后来的日子里继续选择彼此。飘仍在做她的小册子，我仍有自己的路要走；今天，我们牵着手，把下一行留给共同经过的生活。',
    nextChapter: '飘路线完成 · 文文与飘保持恋人关系。'
  });
  lines('epilogue_piao_m', 'epilogue_piao_maolang', [
    ['narrator', '两年后，飘和毛狼结婚了。婚礼后的家常席摆在坡口面馆，我带着他们寄来的喜帖，推开那扇熟悉的门。'],
    ['narrator', '回声早已按原定的时间停业，大家后来各有去处。今天只是两个朋友邀请我们回来，好好吃一顿饭。'],
    ['narrator', '飘和毛狼没有从一次邀约就走到这里。他们认真交往，错开过见面的时间，也吵过该不该把每个周末排满。后来才一起定下婚期。'],
    ['maolang', '到了？看看喜帖，我名字这回没被缩小。', 'expression-smile'],
    ['piao', '他想把两行字全加粗。差一点印成面馆重新开业。', 'expression-smile'],
    ['wenwen', '最后是谁说服谁的？', 'expression-smile'],
    ['piao', '我问他想让人先看见什么。他说，先看见我们两个。那就并排放。', 'expression-smile'],
    ['narrator', '桌角放着她的小册子第二版，署名还是她自己的。毛狼把快碰到书角的水杯挪远，顺手给她留了把椅子。'],
    ['maolang', '坐会儿。你从早上站到现在，我数过了，没人因为你坐下就找不到新娘。', 'expression-serious'],
    ['piao', '那你也坐。两个人结婚，别只让我一个人歇。', 'expression-smile'],
    ['narrator', '她把椅子往旁边拉了一点，毛狼坐过去。热汤端上来，他们还在商量明天几点起，不必用一句大话证明今后的全部。'],
    ['wenwen', '恭喜。以后约饭，也给我留个能赶到的时间。', 'expression-smile'],
    ['maolang', '留。你自己那边的约也好好赴，别每次都等我们催。', 'expression-smile'],
    ['narrator', '飘举起杯子，先碰了毛狼那一只，再碰我们的。喜帖上的两个名字靠在一起，桌上的每个人，也都带着自己的日子来到这里。']
  ], 'end_piao_maolang');
  node({
    id: 'end_piao_maolang', type: 'end', scene: 'epilogue_piao_maolang', character: 'piao',
    title: '飘与毛狼 · 两个人的落款',
    text: '飘和毛狼在相处中选择了彼此，正式结为夫妻。我把喜帖收好，为他们高兴，也接着走向自己的约定。我们曾在同一场雨里认识，后来各自写下了新的生活。',
    nextChapter: '飘的后日谈完成 · 飘与毛狼结婚；文文此前选择的个人道路继续。'
  });
};
