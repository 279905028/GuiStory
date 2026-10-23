// v0.4 背景补全版：由 任务拆分/三章扩展/build-story.cjs 构建。
window.RAIN_STORY = {
  "version": 1,
  "title": "毕节，雨停之前",
  "start": "s1_arrive_01",
  "previewChoice": "c6",
  "characters": {
    "wenwen": {
      "name": "文文",
      "age": 23,
      "image": "assets/char-wenwen.png",
      "color": "#99b7cb",
      "presentation": "human",
      "expressions": {
        "expression-determined": "assets/character-variants/expressions-v01-20261019/wenwen/char-wenwen-expression-determined.png",
        "expression-embarrassed": "assets/character-variants/expressions-v01-20261019/wenwen/char-wenwen-expression-embarrassed.png",
        "expression-guilty": "assets/character-variants/expressions-v01-20261019/wenwen/char-wenwen-expression-guilty.png",
        "expression-hesitant": "assets/character-variants/expressions-v01-20261019/wenwen/char-wenwen-expression-hesitant.png",
        "expression-serious": "assets/character-variants/expressions-v01-20261019/wenwen/char-wenwen-expression-serious.png",
        "expression-smile": "assets/character-variants/expressions-v01-20261019/wenwen/char-wenwen-expression-smile.png",
        "expression-surprised": "assets/character-variants/expressions-v01-20261019/wenwen/char-wenwen-expression-surprised.png",
        "expression-tired": "assets/character-variants/expressions-v01-20261019/wenwen/char-wenwen-expression-tired.png",
        "expression-wry": "assets/character-variants/expressions-v01-20261019/wenwen/char-wenwen-expression-wry.png"
      }
    },
    "xiaoman": {
      "name": "罗小满",
      "age": 22,
      "image": "assets/character-variants/xiaoman-face-v2-candidate.png",
      "color": "#d48768",
      "presentation": "human",
      "expressions": {
        "expression-downcast": "assets/character-variants/expressions-v01-20261019/xiaoman/char-xiaoman-expression-downcast.png",
        "expression-hesitant": "assets/character-variants/expressions-v01-20261019/xiaoman/char-xiaoman-expression-hesitant.png",
        "expression-serious": "assets/character-variants/expressions-v01-20261019/xiaoman/char-xiaoman-expression-serious.png",
        "expression-smile": "assets/character-variants/expressions-v01-20261019/xiaoman/char-xiaoman-expression-smile.png",
        "expression-surprised": "assets/character-variants/expressions-v01-20261019/xiaoman/char-xiaoman-expression-surprised.png"
      }
    },
    "zhouzhi": {
      "name": "周栀",
      "age": 25,
      "image": "assets/character-variants/zhouzhi-face-v2-candidate.png",
      "color": "#69b9b1",
      "presentation": "human",
      "expressions": {
        "action-explaining": "assets/character-variants/expressions-v01-20261019/zhouzhi/char-zhouzhi-action-explaining.png",
        "expression-downcast": "assets/character-variants/expressions-v01-20261019/zhouzhi/char-zhouzhi-expression-downcast.png",
        "expression-hesitant": "assets/character-variants/expressions-v01-20261019/zhouzhi/char-zhouzhi-expression-hesitant.png",
        "expression-serious": "assets/character-variants/expressions-v01-20261019/zhouzhi/char-zhouzhi-expression-serious.png",
        "expression-smile": "assets/character-variants/expressions-v01-20261019/zhouzhi/char-zhouzhi-expression-smile.png"
      }
    },
    "mengyao": {
      "name": "孟遥",
      "age": 23,
      "image": "assets/character-variants/mengyao-face-v2-candidate.png",
      "color": "#d2b693",
      "presentation": "human",
      "expressions": {
        "action-explaining": "assets/character-variants/expressions-v01-20261019/mengyao/char-mengyao-action-explaining.png",
        "expression-displeased": "assets/character-variants/expressions-v01-20261019/mengyao/char-mengyao-expression-displeased.png",
        "expression-downcast": "assets/character-variants/expressions-v01-20261019/mengyao/char-mengyao-expression-downcast.png",
        "expression-hesitant": "assets/character-variants/expressions-v01-20261019/mengyao/char-mengyao-expression-hesitant.png",
        "expression-serious": "assets/character-variants/expressions-v01-20261019/mengyao/char-mengyao-expression-serious.png",
        "expression-smile": "assets/character-variants/expressions-v01-20261019/mengyao/char-mengyao-expression-smile.png",
        "expression-surprised": "assets/character-variants/expressions-v01-20261019/mengyao/char-mengyao-expression-surprised.png"
      }
    },
    "yelan": {
      "name": "叶岚",
      "age": 27,
      "image": "assets/character-variants/yelan-face-v2-candidate.png",
      "color": "#9ba7bc",
      "presentation": "human",
      "expressions": {
        "expression-hesitant": "assets/character-variants/expressions-v01-20261019/yelan/char-yelan-expression-hesitant.png",
        "expression-serious": "assets/character-variants/expressions-v01-20261019/yelan/char-yelan-expression-serious.png",
        "expression-smile": "assets/character-variants/expressions-v01-20261019/yelan/char-yelan-expression-smile.png",
        "expression-surprised": "assets/character-variants/expressions-v01-20261019/yelan/char-yelan-expression-surprised.png"
      }
    },
    "maolang": {
      "name": "毛狼",
      "age": 24,
      "image": "assets/char-maolang.png",
      "color": "#9ba471",
      "presentation": "human",
      "expressions": {
        "action-explaining": "assets/new-character-variants/expressions-v01-20261019/maolang/char-maolang-action-explaining.png",
        "action-thinking": "assets/new-character-variants/expressions-v01-20261019/maolang/char-maolang-action-thinking.png",
        "action-wave": "assets/new-character-variants/expressions-v01-20261019/maolang/char-maolang-action-wave.png",
        "expression-displeased": "assets/new-character-variants/expressions-v01-20261019/maolang/char-maolang-expression-displeased.png",
        "expression-downcast": "assets/new-character-variants/expressions-v01-20261019/maolang/char-maolang-expression-downcast.png",
        "expression-hesitant": "assets/new-character-variants/expressions-v01-20261019/maolang/char-maolang-expression-hesitant.png",
        "expression-serious": "assets/new-character-variants/expressions-v01-20261019/maolang/char-maolang-expression-serious.png",
        "expression-smile": "assets/new-character-variants/expressions-v01-20261019/maolang/char-maolang-expression-smile.png",
        "expression-surprised": "assets/new-character-variants/expressions-v01-20261019/maolang/char-maolang-expression-surprised.png"
      }
    },
    "shijiang": {
      "name": "师匠",
      "age": 32,
      "image": "assets/char-shijiang.png",
      "color": "#7391b4",
      "presentation": "human",
      "expressions": {
        "action-explaining": "assets/character-variants/shijiang-optionA-20261020/char-shijiang-action-explaining.png",
        "action-phone": "assets/character-variants/shijiang-optionA-20261020/char-shijiang-action-phone.png",
        "action-thinking": "assets/character-variants/shijiang-optionA-20261020/char-shijiang-action-thinking.png",
        "expression-serious": "assets/character-variants/shijiang-optionA-20261020/char-shijiang-expression-serious.png",
        "expression-smile": "assets/character-variants/shijiang-optionA-20261020/char-shijiang-expression-smile.png"
      }
    },
    "huangqiuqiu": {
      "name": "黄球球",
      "age": 24,
      "image": "assets/char-huangqiuqiu.png",
      "color": "#e5bf45",
      "presentation": "orb",
      "expressions": {
        "expression-displeased": "assets/new-character-variants/expressions-v01-20261019/huangqiuqiu/char-huangqiuqiu-expression-displeased.png",
        "expression-downcast": "assets/new-character-variants/expressions-v01-20261019/huangqiuqiu/char-huangqiuqiu-expression-downcast.png",
        "expression-hesitant": "assets/new-character-variants/expressions-v01-20261019/huangqiuqiu/char-huangqiuqiu-expression-hesitant.png",
        "expression-serious": "assets/new-character-variants/expressions-v01-20261019/huangqiuqiu/char-huangqiuqiu-expression-serious.png",
        "expression-smile": "assets/new-character-variants/expressions-v01-20261019/huangqiuqiu/char-huangqiuqiu-expression-smile.png"
      }
    },
    "piao": {
      "name": "飘",
      "age": 20,
      "adult": true,
      "image": "assets/char-piao.png",
      "color": "#c69c91",
      "presentation": "human",
      "expressions": {
        "action-explaining": "assets/character-variants/piao-optionB-20261020/char-piao-action-explaining.png",
        "action-thinking": "assets/character-variants/piao-optionB-20261020/char-piao-action-thinking.png",
        "action-wave": "assets/character-variants/piao-optionB-20261020/char-piao-action-wave.png",
        "expression-displeased": "assets/character-variants/piao-optionB-20261020/char-piao-expression-displeased.png",
        "expression-downcast": "assets/character-variants/piao-optionB-20261020/char-piao-expression-downcast.png",
        "expression-hesitant": "assets/character-variants/piao-optionB-20261020/char-piao-expression-hesitant.png",
        "expression-serious": "assets/character-variants/piao-optionB-20261020/char-piao-expression-serious.png",
        "expression-smile": "assets/character-variants/piao-optionB-20261020/char-piao-expression-smile.png",
        "expression-surprised": "assets/character-variants/piao-optionB-20261020/char-piao-expression-surprised.png"
      }
    }
  },
  "backgrounds": {
    "street": "assets/bg-street.png",
    "repair": "assets/bg-repair.png",
    "lobby": "assets/bg-lobby.png",
    "room": "assets/bg-room.png",
    "noodles": "assets/bg-noodles.png",
    "salon": "assets/bg-salon.png",
    "busstop_day": "assets/backgrounds/bijie-20261020/bg-busstop-day.png",
    "market_stall_night": "assets/backgrounds/bijie-20261020/bg-market-stall-night.png",
    "echo_entrance_night": "assets/backgrounds/bijie-20261020/bg-echo-entrance-night.png",
    "old_eaves_day": "assets/backgrounds/bijie-20261020/bg-old-eaves-day.png",
    "slope_junction_night": "assets/backgrounds/bijie-20261020/bg-slope-junction-night.png",
    "residential_slope_day": "assets/backgrounds/bijie-20261020/bg-residential-slope-day.png",
    "noodle_front_dusk": "assets/backgrounds/bijie-20261020/bg-noodle-front-dusk.png",
    "noodles_dusk": "assets/backgrounds/bijie-20261020/bg-noodles-dusk.png",
    "noodle_banquet_day": "assets/backgrounds/bijie-20261020/bg-noodle-banquet-day.png"
  },
  "scenes": {
    "s1": {
      "title": "雨把归期写湿了",
      "day": 1,
      "time": "下午",
      "location": "毕节 · 老街坡口",
      "bg": "busstop_day",
      "chapter": 1
    },
    "s2": {
      "title": "先查问题，再给承诺",
      "day": 1,
      "time": "晚上",
      "location": "师匠的维修柜台",
      "bg": "repair",
      "chapter": 1
    },
    "s3": {
      "title": "夜宵摊的末班车",
      "day": 3,
      "time": "夜间",
      "location": "老街夜宵摊",
      "bg": "market_stall_night",
      "chapter": 1
    },
    "s4": {
      "title": "下班以后，名字归自己",
      "day": 4,
      "time": "凌晨",
      "location": "回声门外",
      "bg": "echo_entrance_night",
      "chapter": 1
    },
    "s5": {
      "title": "镜子前也有正经事",
      "day": 5,
      "time": "下午",
      "location": "罗小满工作的理发店",
      "bg": "salon",
      "chapter": 1
    },
    "s6": {
      "title": "汤面可以分开调味",
      "day": 6,
      "time": "夜间",
      "location": "坡口面馆",
      "bg": "noodles",
      "chapter": 1
    },
    "s7": {
      "title": "镜头没有替人道歉的功能",
      "day": 7,
      "time": "下午",
      "location": "老街屋檐下",
      "bg": "old_eaves_day",
      "chapter": 1
    },
    "s8": {
      "title": "清单最后一格",
      "day": 8,
      "time": "晚上",
      "location": "回声 · 空包厢",
      "bg": "room",
      "chapter": 1
    },
    "s9": {
      "title": "开拍以前",
      "day": 10,
      "time": "下午",
      "location": "回声大厅",
      "bg": "lobby",
      "chapter": 1
    },
    "s10": {
      "title": "还没说完的晚安",
      "day": 10,
      "time": "夜间",
      "location": "回声门外的屋檐",
      "bg": "echo_entrance_night",
      "chapter": 1
    },
    "ch2_take": {
      "title": "先拍一段会笑的",
      "chapter": 2,
      "day": 11,
      "time": "下午",
      "location": "回声大厅",
      "bg": "lobby"
    },
    "ch2_sample": {
      "title": "十二秒以外",
      "chapter": 2,
      "day": 11,
      "time": "晚上",
      "location": "师匠的维修柜台",
      "bg": "repair"
    },
    "ch2_alarm": {
      "title": "已经发出去的画面",
      "chapter": 2,
      "day": 12,
      "time": "下午",
      "location": "回声大厅",
      "bg": "lobby"
    },
    "ch2_account": {
      "title": "把整句话发出去",
      "chapter": 2,
      "day": 12,
      "time": "夜间",
      "location": "回声门外的屋檐",
      "bg": "echo_entrance_night"
    },
    "ch2_after": {
      "title": "今晚先吃饭",
      "chapter": 2,
      "day": 12,
      "time": "夜间",
      "location": "坡口面馆",
      "bg": "noodles"
    },
    "ch2_edit": {
      "title": "谁留在片尾",
      "chapter": 2,
      "day": 13,
      "time": "晚上",
      "location": "回声 · 暂未安排接待的包厢",
      "bg": "room"
    },
    "ch2_show": {
      "title": "这一次，从头看完",
      "chapter": 2,
      "day": 14,
      "time": "下午",
      "location": "回声大厅",
      "bg": "lobby"
    },
    "ch2_night": {
      "title": "给明天留一点空",
      "chapter": 2,
      "day": 14,
      "time": "夜间",
      "location": "回声门外的屋檐",
      "bg": "echo_entrance_night"
    },
    "ch2_qiu": {
      "title": "先跟我打招呼",
      "chapter": 2,
      "day": 14,
      "time": "夜间",
      "location": "回声 · 已结束接待的空包厢",
      "bg": "room"
    },
    "ch3_open": {
      "title": "一段片子以后的日子",
      "chapter": 3,
      "day": 15,
      "time": "下午",
      "location": "回声大厅",
      "bg": "lobby"
    },
    "ch3_xiaoman15": {
      "title": "镜子前的两种准备",
      "chapter": 3,
      "day": 15,
      "time": "下午",
      "location": "罗小满工作的理发店",
      "bg": "salon"
    },
    "ch3_xiaoman18": {
      "title": "还没剪顺的那一道",
      "chapter": 3,
      "day": 18,
      "time": "下午",
      "location": "罗小满工作的理发店",
      "bg": "salon"
    },
    "ch3_xiaoman21": {
      "title": "今天不剪头发",
      "chapter": 3,
      "day": 21,
      "time": "下午",
      "location": "罗小满工作的理发店",
      "bg": "salon"
    },
    "ch3_zhouzhi15": {
      "title": "开门前借一张桌",
      "chapter": 3,
      "day": 15,
      "time": "夜间",
      "location": "坡口面馆",
      "bg": "noodles"
    },
    "ch3_zhouzhi18": {
      "title": "没有全票通过的味道",
      "chapter": 3,
      "day": 18,
      "time": "傍晚",
      "location": "坡口面馆 · 营业前",
      "bg": "noodles_dusk"
    },
    "ch3_zhouzhi21": {
      "title": "今天由我来约",
      "chapter": 3,
      "day": 21,
      "time": "夜间",
      "location": "坡口面馆",
      "bg": "noodles"
    },
    "ch3_mengyao15": {
      "title": "镜头先放在包里",
      "chapter": 3,
      "day": 15,
      "time": "下午",
      "location": "老街屋檐下",
      "bg": "old_eaves_day"
    },
    "ch3_mengyao18": {
      "title": "两个人都留下的意见",
      "chapter": 3,
      "day": 18,
      "time": "下午",
      "location": "回声大厅",
      "bg": "lobby"
    },
    "ch3_mengyao21": {
      "title": "没有结果也发出去",
      "chapter": 3,
      "day": 21,
      "time": "下午",
      "location": "老街坡口",
      "bg": "old_eaves_day"
    },
    "ch3_yelan15": {
      "title": "把试单先搭出来",
      "chapter": 3,
      "day": 15,
      "time": "下午",
      "location": "回声大厅",
      "bg": "lobby"
    },
    "ch3_yelan18": {
      "title": "钥匙也能交到别人手里",
      "chapter": 3,
      "day": 18,
      "time": "下午",
      "location": "回声大厅",
      "bg": "lobby"
    },
    "ch3_yelan21": {
      "title": "下班以后没有流程表",
      "chapter": 3,
      "day": 21,
      "time": "下午",
      "location": "回声门外的老街",
      "bg": "residential_slope_day"
    },
    "ch3_solo15": {
      "title": "先把自己的名字写清",
      "chapter": 3,
      "day": 15,
      "time": "晚上",
      "location": "师匠的维修柜台",
      "bg": "repair"
    },
    "ch3_solo18": {
      "title": "这次真的交到别人手里",
      "chapter": 3,
      "day": 18,
      "time": "晚上",
      "location": "师匠的维修柜台",
      "bg": "repair"
    },
    "ch3_solo21": {
      "title": "各凭本事，也一起吃饭",
      "chapter": 3,
      "day": 21,
      "time": "夜间",
      "location": "坡口面馆",
      "bg": "noodles"
    },
    "ch3_qiu15": {
      "title": "今天先叫我的名字",
      "chapter": 3,
      "day": 15,
      "time": "夜间",
      "location": "回声 · 已结束接待的空包厢",
      "bg": "room"
    },
    "ch3_qiu18": {
      "title": "带来一件普通的小事",
      "chapter": 3,
      "day": 18,
      "time": "夜间",
      "location": "回声 · 已结束接待的空包厢",
      "bg": "room"
    },
    "ch3_qiu21": {
      "title": "这次由她先问",
      "chapter": 3,
      "day": 21,
      "time": "夜间",
      "location": "回声 · 已结束接待的空包厢",
      "bg": "room"
    },
    "ch3_piao15": {
      "title": "名字不必挤在一起",
      "chapter": 3,
      "day": 15,
      "time": "下午",
      "location": "老街屋檐下",
      "bg": "old_eaves_day"
    },
    "ch3_piao18": {
      "title": "各自赴的约",
      "chapter": 3,
      "day": 18,
      "time": "傍晚",
      "location": "坡口面馆",
      "bg": "noodles_dusk"
    },
    "ch3_piao21": {
      "title": "留白由谁来写",
      "chapter": 3,
      "day": 21,
      "time": "下午",
      "location": "老街屋檐下",
      "bg": "old_eaves_day"
    },
    "epilogue_piao_wenwen": {
      "title": "第二版的封底",
      "chapter": "epilogue",
      "day": 751,
      "dayLabel": "两年后",
      "time": "下午",
      "location": "老街屋檐下",
      "bg": "old_eaves_day"
    },
    "epilogue_piao_maolang": {
      "title": "这次写上两个人的名字",
      "chapter": "epilogue",
      "day": 751,
      "dayLabel": "两年后",
      "time": "下午",
      "location": "坡口面馆 · 婚礼后的家常席",
      "bg": "noodle_banquet_day"
    }
  },
  "nodes": {
    "s1_arrive_01": {
      "id": "s1_arrive_01",
      "type": "line",
      "scene": "s1",
      "speaker": "narrator",
      "character": null,
      "text": "大巴驶走时，水溅上我的鞋面。三年没回毕节，雨倒没生分，先替我检查了一遍鞋底。",
      "next": "s1_arrive_02"
    },
    "s1_arrive_02": {
      "id": "s1_arrive_02",
      "type": "line",
      "scene": "s1",
      "speaker": "narrator",
      "character": null,
      "text": "站牌玻璃里，短寸被压平，圆脸陷在旧夹克里。二十三岁的文文，带回来一个箱子和一包怕湿的工具。",
      "next": "s1_arrive_03",
      "cg": "cg01"
    },
    "s1_arrive_03": {
      "id": "s1_arrive_03",
      "type": "line",
      "scene": "s1",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "回来了。接风也不用连盆端吧。",
      "next": "s1_arrive_04",
      "cg": "cg01"
    },
    "s1_arrive_04": {
      "id": "s1_arrive_04",
      "type": "line",
      "scene": "s1",
      "speaker": "narrator",
      "character": null,
      "text": "上一份工作的尾款刚到账。我划走提醒，下面露出贵阳的车票。日期是返乡后的第二十八天。",
      "next": "s1_arrive_05"
    },
    "s1_arrive_05": {
      "id": "s1_arrive_05",
      "type": "line",
      "scene": "s1",
      "speaker": "narrator",
      "character": null,
      "text": "演出队还没回简历，票先买了。退票钱我算过，不多。算完，就像已经替自己想清了去处。",
      "next": "s1_arrive_06"
    },
    "s1_arrive_06": {
      "id": "s1_arrive_06",
      "type": "line",
      "scene": "s1",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "妈，我到老街了。先去看看活，晚饭留一碗。",
      "next": "s1_arrive_07"
    },
    "s1_arrive_07": {
      "id": "s1_arrive_07",
      "type": "line",
      "scene": "s1",
      "speaker": "narrator",
      "character": null,
      "text": "母亲问工具包里的本子湿没湿。我摸了摸，说没有。她没问我怎么提前回来了，备好的解释反而没处放。",
      "next": "s1_arrive_08"
    },
    "s1_arrive_08": {
      "id": "s1_arrive_08",
      "type": "line",
      "scene": "s1",
      "speaker": "narrator",
      "character": null,
      "text": "坡上的“回声”少亮一笔。停业通知被雨打卷，寄存物品领取期限下面，是返乡后第三十天的日期。",
      "next": "s1_arrive_09"
    },
    "s1_arrive_09": {
      "id": "s1_arrive_09",
      "type": "line",
      "scene": "s1",
      "speaker": "narrator",
      "character": null,
      "text": "我又看一眼车票。这次离开会比这里关门早两天——如果我真照那张票走。",
      "next": "s1_arrive_10"
    },
    "s1_arrive_10": {
      "id": "s1_arrive_10",
      "type": "line",
      "scene": "s1",
      "speaker": "narrator",
      "character": null,
      "text": "毛狼发来柜台定位：“有活，带手，别只带嘴。”我打了“第二十八天要去贵阳”，又删掉。",
      "next": "s1_arrive_11"
    },
    "s1_arrive_11": {
      "id": "s1_arrive_11",
      "type": "line",
      "scene": "s1",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "回来了，先接点活。嘴留给你。",
      "next": "s1_arrive_12"
    },
    "s1_arrive_12": {
      "id": "s1_arrive_12",
      "type": "line",
      "scene": "s1",
      "speaker": "narrator",
      "character": null,
      "text": "我锁上屏幕，把箱子寄在小卖部。等有回信再说吧，没定的事，总不能让大家跟着猜。",
      "next": "s2_counter_01"
    },
    "s2_counter_01": {
      "id": "s2_counter_01",
      "type": "line",
      "scene": "s2",
      "speaker": "narrator",
      "character": null,
      "text": "毛狼贴完话筒序号，抬头看我。微卷的头发被雨压塌，嘴倒还精神。",
      "next": "s2_counter_02"
    },
    "s2_counter_02": {
      "id": "s2_counter_02",
      "type": "line",
      "scene": "s2",
      "speaker": "maolang",
      "character": "maolang",
      "text": "文师傅，归乡限量版。带工具了？",
      "next": "s2_counter_03"
    },
    "s2_counter_03": {
      "id": "s2_counter_03",
      "type": "line",
      "scene": "s2",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "带了。没带给你修嘴的。",
      "next": "s2_counter_04"
    },
    "s2_counter_04": {
      "id": "s2_counter_04",
      "type": "line",
      "scene": "s2",
      "speaker": "maolang",
      "character": "maolang",
      "text": "回声缺临时维护。叶岚等你试机，按班结。人我给你介绍，价你自己谈。",
      "next": "s2_counter_05"
    },
    "s2_counter_05": {
      "id": "s2_counter_05",
      "type": "line",
      "scene": "s2",
      "speaker": "narrator",
      "character": null,
      "text": "他把话筒按单号摆齐，拿手机拍照。屏幕上刚才还是贵阳演出队的招聘页。",
      "next": "s2_recruit_01"
    },
    "s2_counter_06": {
      "id": "s2_counter_06",
      "type": "line",
      "scene": "s2",
      "speaker": "narrator",
      "character": null,
      "text": "师匠用笔压住故障单。黑框眼镜后，他先看机器，再看我。",
      "next": "s2_counter_07",
      "cg": "cg09"
    },
    "s2_counter_07": {
      "id": "s2_counter_07",
      "type": "line",
      "scene": "s2",
      "speaker": "shijiang",
      "character": "shijiang",
      "text": "查过再填。回声你自己交接，我按约复核。",
      "next": "s2_counter_08",
      "cg": "cg09"
    },
    "s2_counter_08": {
      "id": "s2_counter_08",
      "type": "line",
      "scene": "s2",
      "speaker": "narrator",
      "character": null,
      "text": "柜台另一头摊着固定维护的报价草页。他划掉“临时上门”，重新算路程。",
      "next": "s2_counter_09",
      "cg": "cg09"
    },
    "s2_counter_09": {
      "id": "s2_counter_09",
      "type": "line",
      "scene": "s2",
      "speaker": "shijiang",
      "character": "shijiang",
      "text": "我想接固定维护，不能每晚等人叫。有不明白的现在问，别等关门。",
      "next": "s2_notes_01",
      "cg": "cg09"
    },
    "s2_counter_10": {
      "id": "s2_counter_10",
      "type": "line",
      "scene": "s2",
      "speaker": "shijiang",
      "character": "shijiang",
      "text": "行，空着那格先别勾。",
      "next": "s2_counter_11",
      "cg": "cg09"
    },
    "s2_counter_11": {
      "id": "s2_counter_11",
      "type": "line",
      "scene": "s2",
      "speaker": "narrator",
      "character": null,
      "text": "柜台旁是回声送修的旧监听设备。测试灯亮着，旋钮没动，扬声口忽然响了三下。毛狼挪椅子的声音压过来，我刚抬头，又听见半句女声。",
      "next": "s2_counter_12"
    },
    "s2_counter_12": {
      "id": "s2_counter_12",
      "type": "line",
      "scene": "s2",
      "speaker": "陌生的声音",
      "character": null,
      "text": "能不能……先让我说……",
      "next": "s2_counter_13"
    },
    "s2_counter_13": {
      "id": "s2_counter_13",
      "type": "line",
      "scene": "s2",
      "speaker": "maolang",
      "character": "maolang",
      "text": "旧录音吧。这断句，比我的提词器还会吊胃口。",
      "next": "s2_counter_14"
    },
    "s2_counter_14": {
      "id": "s2_counter_14",
      "type": "line",
      "scene": "s2",
      "speaker": "shijiang",
      "character": "shijiang",
      "text": "先别替它定原因。测试还剩两分钟，已确认的也要登记完。",
      "next": "h1"
    },
    "h1": {
      "id": "h1",
      "type": "choice",
      "scene": "s2",
      "character": null,
      "text": "测试结束前，我怎样处理这段声音？",
      "flag": "qiuSignal",
      "choices": [
        {
          "label": "先听完，把三拍节奏记进维修本。",
          "value": "record",
          "next": "s2_record_01"
        },
        {
          "label": "先登记明确故障，把声音留待复查。",
          "value": "work",
          "next": "s2_work_01"
        }
      ]
    },
    "s2_record_01": {
      "id": "s2_record_01",
      "type": "line",
      "scene": "s2",
      "speaker": "narrator",
      "character": null,
      "text": "我先没合本子。扬声口又响了一遍：轻、轻——停半拍——重。我在纸上画了三个点，把第二、第三个点之间的空隙特意留宽。",
      "next": "s2_record_02"
    },
    "s2_record_02": {
      "id": "s2_record_02",
      "type": "line",
      "scene": "s2",
      "speaker": "narrator",
      "character": null,
      "text": "那半句话没有再接下去。我在记号旁照抄听见的几个字，注明时间和“来源未明”，再把接头松动的位置补进故障栏。",
      "next": "s2_record_03"
    },
    "s2_record_03": {
      "id": "s2_record_03",
      "type": "line",
      "scene": "s2",
      "speaker": "shijiang",
      "character": "shijiang",
      "text": "这回留下的是现象。原因等复查，走吧，回声那边还等着试机。",
      "next": "s2_trial_01"
    },
    "s2_work_01": {
      "id": "s2_work_01",
      "type": "line",
      "scene": "s2",
      "speaker": "narrator",
      "character": null,
      "text": "我先核接头型号，把松动的位置写清。那句话没再响，我只在另一行记下“三下轻响、半句人声”，圈出待复查。",
      "next": "s2_work_02"
    },
    "s2_work_02": {
      "id": "s2_work_02",
      "type": "line",
      "scene": "s2",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "接头这项能确认。声音还没查清，我先不写原因。",
      "next": "s2_work_03"
    },
    "s2_work_03": {
      "id": "s2_work_03",
      "type": "line",
      "scene": "s2",
      "speaker": "shijiang",
      "character": "shijiang",
      "text": "行，先交清这些。待查的留着，下回接着看。",
      "next": "s2_trial_01"
    },
    "s2_trial_01": {
      "id": "s2_trial_01",
      "type": "line",
      "scene": "s2",
      "speaker": "narrator",
      "character": null,
      "text": "到回声时，叶岚用夹板挡着滴水的伞尖。西装袖口沾着搬箱子的灰，她指了间空包厢。",
      "next": "s2_trial_02",
      "bg": "room",
      "location": "回声 · 试音包厢"
    },
    "s2_trial_02": {
      "id": "s2_trial_02",
      "type": "line",
      "scene": "s2",
      "speaker": "yelan",
      "character": "yelan",
      "text": "叶岚，领班。先试两小时，照算工时。毛狼说你能查接线？",
      "next": "s2_trial_03",
      "bg": "room",
      "location": "回声 · 试音包厢"
    },
    "s2_trial_03": {
      "id": "s2_trial_03",
      "type": "line",
      "scene": "s2",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "接线和基础排查。要换板子的，我先停下跟你说。",
      "next": "s2_trial_04",
      "bg": "room",
      "location": "回声 · 试音包厢"
    },
    "s2_trial_04": {
      "id": "s2_trial_04",
      "type": "line",
      "scene": "s2",
      "speaker": "yelan",
      "character": "yelan",
      "text": "客人在用的机器别动。",
      "next": "s2_trial_05",
      "bg": "room",
      "location": "回声 · 试音包厢"
    },
    "s2_trial_05": {
      "id": "s2_trial_05",
      "type": "line",
      "scene": "s2",
      "speaker": "narrator",
      "character": null,
      "text": "周栀拿来两只话筒，把红点那只放远。青色袖口卷了两道。",
      "next": "s2_trial_06",
      "bg": "room",
      "location": "回声 · 试音包厢"
    },
    "s2_trial_06": {
      "id": "s2_trial_06",
      "type": "line",
      "scene": "s2",
      "speaker": "zhouzhi",
      "character": "zhouzhi",
      "text": "我叫周栀。红点这只会刺，另一只没事。我唱歌吃饭，不兼练躲啸叫。",
      "next": "s2_trial_07",
      "bg": "room",
      "location": "回声 · 试音包厢"
    },
    "s2_trial_07": {
      "id": "s2_trial_07",
      "type": "line",
      "scene": "s2",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "知道了，今晚不加运动项目。",
      "next": "s2_trial_08",
      "bg": "room",
      "location": "回声 · 试音包厢"
    },
    "s2_trial_08": {
      "id": "s2_trial_08",
      "type": "line",
      "scene": "s2",
      "speaker": "narrator",
      "character": null,
      "text": "她试半句，我换线再测。“好了”出口前，我又听了一遍，叶岚才落笔。",
      "next": "s2_trial_09",
      "bg": "room",
      "location": "回声 · 试音包厢"
    },
    "s2_recruit_01": {
      "id": "s2_recruit_01",
      "type": "line",
      "scene": "s2",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "那边还没回我。先把眼前的活接住。",
      "next": "s2_recruit_02"
    },
    "s2_recruit_02": {
      "id": "s2_recruit_02",
      "type": "line",
      "scene": "s2",
      "speaker": "maolang",
      "character": "maolang",
      "text": "设备要求往下翻，还有场务那页。别只看第一屏。",
      "next": "s2_recruit_03"
    },
    "s2_recruit_03": {
      "id": "s2_recruit_03",
      "type": "line",
      "scene": "s2",
      "speaker": "narrator",
      "character": null,
      "text": "他说得太顺。没等我问，手机已经扣住。我以为他替我看得仔细，喊了声谢。",
      "next": "s2_counter_06"
    },
    "s2_notes_01": {
      "id": "s2_notes_01",
      "type": "line",
      "scene": "s2",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "这项只写偶发杂音，没写什么时候。我先补问。",
      "next": "s2_counter_10"
    },
    "s2_trial_09": {
      "id": "s2_trial_09",
      "type": "line",
      "scene": "s2",
      "speaker": "yelan",
      "character": "yelan",
      "text": "停业前，我想给回声留段记录，拍它还开着的时候。先帮我看看哪些设备能用。",
      "next": "s2_trial_10",
      "bg": "room",
      "location": "回声 · 试音包厢"
    },
    "s2_trial_10": {
      "id": "s2_trial_10",
      "type": "line",
      "scene": "s2",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "先列能用和待查的。那套旧监听不算。片子什么时候做？",
      "next": "s2_trial_11",
      "bg": "room",
      "location": "回声 · 试音包厢"
    },
    "s2_trial_11": {
      "id": "s2_trial_11",
      "type": "line",
      "scene": "s2",
      "speaker": "yelan",
      "character": "yelan",
      "text": "先问人，再凑时间。今天不赶这个。",
      "next": "s2_trial_12",
      "bg": "room",
      "location": "回声 · 试音包厢"
    },
    "s2_trial_12": {
      "id": "s2_trial_12",
      "type": "line",
      "scene": "s2",
      "speaker": "narrator",
      "character": null,
      "text": "我在本子背面写下“短片”，手机里的车票仍没拿出来。",
      "next": "s3_stall_01",
      "bg": "room",
      "location": "回声 · 试音包厢"
    },
    "s3_stall_01": {
      "id": "s3_stall_01",
      "type": "line",
      "scene": "s3",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "第三天夜里，塑料帘扑进来，我伸手救蘸水。对面的罗小满先笑出了声。",
      "next": "s3_stall_02",
      "expression": "expression-smile"
    },
    "s3_stall_02": {
      "id": "s3_stall_02",
      "type": "line",
      "scene": "s3",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "你小时候抢最后一块洋芋，也是这个姿势。",
      "next": "s3_stall_03"
    },
    "s3_stall_03": {
      "id": "s3_stall_03",
      "type": "line",
      "scene": "s3",
      "speaker": "narrator",
      "character": null,
      "text": "她把砖红外套往椅背一搭，分区练习图压在碗边。手背有一点没擦掉的染膏。",
      "next": "s3_stall_04"
    },
    "s3_stall_04": {
      "id": "s3_stall_04",
      "type": "line",
      "scene": "s3",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "成年了，能不能更新一下证据？",
      "next": "s3_stall_05"
    },
    "s3_stall_05": {
      "id": "s3_stall_05",
      "type": "line",
      "scene": "s3",
      "speaker": "narrator",
      "character": null,
      "text": "盘子刚端上来，小满就把练习图挪开，免得蘸水溅到纸上。图里的头画得很圆，耳朵一高一低。",
      "next": "s3_stall_06",
      "cg": "cg13"
    },
    "s3_stall_06": {
      "id": "s3_stall_06",
      "type": "line",
      "scene": "s3",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "店里这次考核，我想自己剪完一颗头，不用师傅半路接剪刀。",
      "next": "s3_stall_07",
      "cg": "cg13"
    },
    "s3_stall_07": {
      "id": "s3_stall_07",
      "type": "line",
      "scene": "s3",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "一颗？你们还兼卖白菜？",
      "next": "s3_stall_08",
      "cg": "cg13"
    },
    "s3_stall_08": {
      "id": "s3_stall_08",
      "type": "line",
      "scene": "s3",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "一位，尊贵的顾客。",
      "next": "s3_stall_09",
      "cg": "cg13"
    },
    "s3_stall_09": {
      "id": "s3_stall_09",
      "type": "line",
      "scene": "s3",
      "speaker": "narrator",
      "character": null,
      "text": "我提起回声想留记录短片。她把图扣住，说等练像样了再谈。我还没接话，她先看过来。",
      "next": "s3_stall_10"
    },
    "s3_stall_10": {
      "id": "s3_stall_10",
      "type": "line",
      "scene": "s3",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "你这回待多久？能不能等到我考完？",
      "next": "s3_stall_11"
    },
    "s3_stall_11": {
      "id": "s3_stall_11",
      "type": "line",
      "scene": "s3",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "回声那边还有一堆设备，我先把眼前的活做完。",
      "next": "s3_stall_12"
    },
    "c1": {
      "id": "c1",
      "type": "choice",
      "scene": "s3",
      "character": "xiaoman",
      "text": "饭后，我怎么安排这一段路？",
      "flag": "ride",
      "choices": [
        {
          "label": "和小满走到岔路口，再去核接头型号。",
          "value": "walk",
          "next": "s3_walk_01"
        },
        {
          "label": "一起确认车牌，叫车送她回去。",
          "value": "taxi",
          "next": "s3_taxi_01"
        },
        {
          "label": "说明取件时间，先去办事。",
          "value": "leave",
          "next": "s3_leave_01"
        }
      ]
    },
    "s3_walk_01": {
      "id": "s3_walk_01",
      "type": "line",
      "scene": "s3",
      "speaker": "narrator",
      "character": null,
      "text": "问过老板还能等多久，我才陪她上坡。她把练习图撑在伞下，一直折着的那一角终于展开了。",
      "next": "s3_walk_02",
      "bg": "slope_junction_night",
      "location": "老街岔路口"
    },
    "s3_walk_02": {
      "id": "s3_walk_02",
      "type": "line",
      "scene": "s3",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "练习头不会突然问我“这边是不是歪了”。真人会。我一紧张，就老想再修一点。",
      "next": "s3_walk_03",
      "bg": "slope_junction_night",
      "location": "老街岔路口"
    },
    "s3_walk_03": {
      "id": "s3_walk_03",
      "type": "line",
      "scene": "s3",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "那你先别给我剪。我问题可多。",
      "next": "s3_walk_04",
      "bg": "slope_junction_night",
      "location": "老街岔路口"
    },
    "s3_walk_04": {
      "id": "s3_walk_04",
      "type": "line",
      "scene": "s3",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "知道，所以先拿你练习怎么让顾客闭嘴。",
      "next": "s3_walk_05",
      "bg": "slope_junction_night",
      "location": "老街岔路口"
    },
    "s3_taxi_01": {
      "id": "s3_taxi_01",
      "type": "line",
      "scene": "s3",
      "speaker": "narrator",
      "character": null,
      "text": "小满自己填好目的地。我陪她核对车牌，她刚把练习图翻到背面，车就到了。",
      "next": "s3_taxi_02",
      "bg": "slope_junction_night",
      "location": "老街岔路口 · 上车处"
    },
    "s3_taxi_02": {
      "id": "s3_taxi_02",
      "type": "line",
      "scene": "s3",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "车费我付。你负责看车牌，别顺便给自己加一张好人证。",
      "next": "s3_taxi_03",
      "bg": "slope_junction_night",
      "location": "老街岔路口 · 上车处"
    },
    "s3_taxi_03": {
      "id": "s3_taxi_03",
      "type": "line",
      "scene": "s3",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "五星评价总能有吧？",
      "next": "s3_taxi_04",
      "bg": "slope_junction_night",
      "location": "老街岔路口 · 上车处"
    },
    "s3_taxi_04": {
      "id": "s3_taxi_04",
      "type": "line",
      "scene": "s3",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "四星。剩下一星，等你不催着收再说。",
      "next": "s3_taxi_05",
      "bg": "slope_junction_night",
      "location": "老街岔路口 · 上车处"
    },
    "s3_leave_01": {
      "id": "s3_leave_01",
      "type": "line",
      "scene": "s3",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "老板等我核接头，收摊前得去。我先过去，你准备怎么回？",
      "next": "s3_leave_02"
    },
    "s3_leave_02": {
      "id": "s3_leave_02",
      "type": "line",
      "scene": "s3",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "同事刚下班，我跟她拼车。你早说啊，我还以为你嫌我吃得慢。",
      "next": "s3_leave_03"
    },
    "s3_leave_03": {
      "id": "s3_leave_03",
      "type": "line",
      "scene": "s3",
      "speaker": "narrator",
      "character": null,
      "text": "她当着我的面确认了上车处，把练习图夹回袋里。我到配件铺时，时间还够把两种型号各核一遍。",
      "next": "s3_leave_04"
    },
    "s3_leave_04": {
      "id": "s3_leave_04",
      "type": "line",
      "scene": "s3",
      "speaker": "narrator",
      "character": null,
      "text": "取完件，她发来同事撑歪伞的照片：“到家了。还有，是你吃得慢。”那张没看完的练习图，我记着下次问。",
      "next": "s4_shift_01"
    },
    "s3_stall_12": {
      "id": "s3_stall_12",
      "type": "line",
      "scene": "s3",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "她看了我一下，把纸角压平。我按灭手机，没接她问的那个“多久”。",
      "next": "s3_stall_13",
      "expression": "expression-hesitant"
    },
    "s3_stall_13": {
      "id": "s3_stall_13",
      "type": "line",
      "scene": "s3",
      "speaker": "narrator",
      "character": null,
      "text": "末班车已经过了。配件铺老板发来消息，等我收摊前去核接头型号；我算了算路，还留着一点余量。",
      "next": "s3_stall_14"
    },
    "s3_stall_14": {
      "id": "s3_stall_14",
      "type": "line",
      "scene": "s3",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "你有事就说。我又不会连回家的办法都没有。先吃，洋芋都凉了。",
      "next": "c1"
    },
    "s3_walk_05": {
      "id": "s3_walk_05",
      "type": "line",
      "scene": "s3",
      "speaker": "narrator",
      "character": null,
      "text": "到岔路口，我把预留的缓冲用得差不多了。配件铺还没收摊，型号照常核完；小满也发来到家消息：“顾客练习结束。”",
      "next": "s4_shift_01",
      "bg": "slope_junction_night",
      "location": "老街岔路口"
    },
    "s3_taxi_05": {
      "id": "s3_taxi_05",
      "type": "line",
      "scene": "s3",
      "speaker": "narrator",
      "character": null,
      "text": "她收起图坐进车里，没来得及讲背面画了什么。我赶去核型号，后来收到她的消息：“到了，四星没变。”",
      "next": "s4_shift_01",
      "bg": "slope_junction_night",
      "location": "老街岔路口 · 上车处"
    },
    "s4_shift_01": {
      "id": "s4_shift_01",
      "type": "line",
      "scene": "s4",
      "speaker": "narrator",
      "character": null,
      "text": "接头送到回声，已经是第四天凌晨。周栀蹲在侧门系鞋带，细跟鞋装进布袋，像替自己卸下一小班人。",
      "next": "s4_shift_02"
    },
    "s4_shift_02": {
      "id": "s4_shift_02",
      "type": "line",
      "scene": "s4",
      "speaker": "zhouzhi",
      "character": "zhouzhi",
      "text": "别看。人下班了，脚也得下班。",
      "next": "s4_shift_03"
    },
    "s4_shift_03": {
      "id": "s4_shift_03",
      "type": "line",
      "scene": "s4",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "我还没开口，夸奖名额就没了。",
      "next": "s4_shift_04"
    },
    "s4_shift_04": {
      "id": "s4_shift_04",
      "type": "line",
      "scene": "s4",
      "speaker": "narrator",
      "character": null,
      "text": "她笑过以后就不说话了。手机上是一张还没填完的夜宵摊成本表。",
      "next": "s4_shift_05"
    },
    "s4_shift_05": {
      "id": "s4_shift_05",
      "type": "line",
      "scene": "s4",
      "speaker": "zhouzhi",
      "character": "zhouzhi",
      "text": "回声一关，我跟朋友那句“改天试试”，就真得找个日子了。她出摊车，我管备料和收摊。",
      "next": "s4_shift_06"
    },
    "s4_shift_06": {
      "id": "s4_shift_06",
      "type": "line",
      "scene": "s4",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "位置找好了？",
      "next": "s4_shift_07"
    },
    "s4_shift_07": {
      "id": "s4_shift_07",
      "type": "line",
      "scene": "s4",
      "speaker": "zhouzhi",
      "character": "zhouzhi",
      "text": "还在问。总不能锅先热了，才发现没地方摆。",
      "next": "s4_shift_08"
    },
    "s4_shift_08": {
      "id": "s4_shift_08",
      "type": "line",
      "scene": "s4",
      "speaker": "narrator",
      "character": "zhouzhi",
      "text": "她熄了屏幕，揉揉眉心。街对面的面馆还开着，我没把她的沉默急着填满。",
      "next": "c2",
      "expression": "expression-downcast"
    },
    "c2": {
      "id": "c2",
      "type": "choice",
      "scene": "s4",
      "character": "zhouzhi",
      "text": "临分别前，我对她说：",
      "flag": "noodles",
      "choices": [
        {
          "label": "要不要吃碗面？困了就改天。",
          "value": "invite",
          "next": "s4_invite_01"
        },
        {
          "label": "今晚先各自歇着，有空再聊。",
          "value": "space",
          "next": "s4_space_01"
        }
      ]
    },
    "s4_invite_01": {
      "id": "s4_invite_01",
      "type": "line",
      "scene": "s4",
      "speaker": "zhouzhi",
      "character": "zhouzhi",
      "text": "行，清汤小份。先说好，面能吃，话不一定接得上。",
      "next": "s4_invite_02",
      "bg": "noodles",
      "location": "坡口面馆"
    },
    "s4_invite_02": {
      "id": "s4_invite_02",
      "type": "line",
      "scene": "s4",
      "speaker": "narrator",
      "character": null,
      "text": "我们各自付了钱。她挑掉葱花，问我的夹克多久洗一次。我说修不好东西的时候，就抽空洗。",
      "next": "s4_invite_03",
      "bg": "noodles",
      "location": "坡口面馆"
    },
    "s4_invite_03": {
      "id": "s4_invite_03",
      "type": "line",
      "scene": "s4",
      "speaker": "zhouzhi",
      "character": "zhouzhi",
      "text": "难怪看着旧，原来你手艺还行。",
      "next": "s4_invite_04",
      "bg": "noodles",
      "location": "坡口面馆"
    },
    "s4_invite_04": {
      "id": "s4_invite_04",
      "type": "line",
      "scene": "s4",
      "speaker": "narrator",
      "character": null,
      "text": "我加了两勺辣椒，喝掉半壶水。她捧着碗歇了一会儿，我也没急着找话。两个人安静喝完热汤，各自回去睡觉。",
      "next": "s5_mirror_01",
      "bg": "noodles",
      "location": "坡口面馆"
    },
    "s4_space_01": {
      "id": "s4_space_01",
      "type": "line",
      "scene": "s4",
      "speaker": "zhouzhi",
      "character": "zhouzhi",
      "text": "好。我今晚连“再见”都快说成上班的调子了。",
      "next": "s4_space_02"
    },
    "s4_space_02": {
      "id": "s4_space_02",
      "type": "line",
      "scene": "s4",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "那这句省着，回去歇吧。",
      "next": "s4_space_03"
    },
    "s4_space_03": {
      "id": "s4_space_03",
      "type": "line",
      "scene": "s4",
      "speaker": "narrator",
      "character": null,
      "text": "她把鞋袋换到另一只手，往等车的地方走。我也去等自己的车，没有再把她叫住。",
      "next": "s4_space_04"
    },
    "s4_space_04": {
      "id": "s4_space_04",
      "type": "line",
      "scene": "s4",
      "speaker": "narrator",
      "character": null,
      "text": "到家后，她发来一条：“表明天再填，先睡了。”我回了关灯的表情，把手机放远。",
      "next": "s5_mirror_01"
    },
    "s5_mirror_01": {
      "id": "s5_mirror_01",
      "type": "line",
      "scene": "s5",
      "speaker": "narrator",
      "character": null,
      "text": "第五天下午，我送回推剪充电座。镜子照出三个我，三个都像没睡够。",
      "next": "s5_mirror_02"
    },
    "s5_mirror_02": {
      "id": "s5_mirror_02",
      "type": "line",
      "scene": "s5",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "别靠，消毒还没干。这把椅子比你会休息。",
      "next": "s5_mirror_03"
    },
    "s5_mirror_03": {
      "id": "s5_mirror_03",
      "type": "line",
      "scene": "s5",
      "speaker": "narrator",
      "character": null,
      "text": "她接上推剪试了试，才把底座收进去。作品夹放在镜边，压住一个空着的练习时段。",
      "next": "s5_bg_xiaoman_01",
      "cg": "cg02"
    },
    "g_s5_ride": {
      "id": "g_s5_ride",
      "type": "gate",
      "scene": "s5",
      "cases": [
        {
          "flag": "ride",
          "value": "walk",
          "next": "s5_ride_walk_01"
        },
        {
          "flag": "ride",
          "value": "taxi",
          "next": "s5_ride_taxi_01"
        }
      ],
      "default": "s5_ride_leave_01"
    },
    "s5_ride_walk_01": {
      "id": "s5_ride_walk_01",
      "type": "line",
      "scene": "s5",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "你上次说问题多，我想好了。顾客问，我就停一下给他看，不一着急又多剪一刀。",
      "next": "s5_ride_walk_02",
      "cg": "cg02"
    },
    "s5_ride_walk_02": {
      "id": "s5_ride_walk_02",
      "type": "line",
      "scene": "s5",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "那我今天连闭嘴都算配合练习。",
      "next": "s5_work_01",
      "cg": "cg02"
    },
    "s5_ride_taxi_01": {
      "id": "s5_ride_taxi_01",
      "type": "line",
      "scene": "s5",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "四星顾客，底座放这儿。上回等车没讲完的图，还想看吗？",
      "next": "s5_ride_taxi_02",
      "cg": "cg02"
    },
    "s5_ride_taxi_02": {
      "id": "s5_ride_taxi_02",
      "type": "line",
      "scene": "s5",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "想。先让我看看那一星到底扣在哪儿。",
      "next": "s5_work_01",
      "cg": "cg02"
    },
    "s5_ride_leave_01": {
      "id": "s5_ride_leave_01",
      "type": "line",
      "scene": "s5",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "接头装好了。上回顾着取件，你那个考核还没讲完，现在能给我看看吗？",
      "next": "s5_ride_leave_02",
      "cg": "cg02"
    },
    "s5_ride_leave_02": {
      "id": "s5_ride_leave_02",
      "type": "line",
      "scene": "s5",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "能啊。我还以为你只记得那晚吃了几块洋芋。图在这儿，别压着。",
      "next": "s5_work_01",
      "cg": "cg02"
    },
    "s5_work_01": {
      "id": "s5_work_01",
      "type": "line",
      "scene": "s5",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "小满把作品夹推过来，手又在剪刀旁停了一下。临时少了个练习模特，她没有直接把我按进椅子。",
      "next": "s5_work_02",
      "expression": "expression-hesitant"
    },
    "s5_work_02": {
      "id": "s5_work_02",
      "type": "line",
      "scene": "s5",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "有完整时间就坐。赶着走，就帮我看这几页。先说好，不收“都挺好”。",
      "next": "s5_work_03"
    },
    "s5_work_03": {
      "id": "s5_work_03",
      "type": "line",
      "scene": "s5",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "这家店现在连客套都收费？",
      "next": "s5_work_04"
    },
    "s5_work_04": {
      "id": "s5_work_04",
      "type": "line",
      "scene": "s5",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "不收费，退回去。",
      "next": "c3",
      "expression": "expression-smile"
    },
    "c3": {
      "id": "c3",
      "type": "choice",
      "scene": "s5",
      "character": "xiaoman",
      "text": "我空出了这一段时间，选哪件事？",
      "flag": "salon",
      "choices": [
        {
          "label": "一起整理作品页，讨论她想留下的风格。",
          "value": "portfolio",
          "next": "s5_portfolio_01"
        },
        {
          "label": "确认时长和方案，当一次剪发模特。",
          "value": "model",
          "next": "s5_model_01"
        }
      ]
    },
    "s5_portfolio_01": {
      "id": "s5_portfolio_01",
      "type": "line",
      "scene": "s5",
      "speaker": "narrator",
      "character": null,
      "text": "她把两页照片推过来。最亮的一张放在前面，后面那张没加滤镜，处理过的地方反倒更清楚。",
      "next": "s5_portfolio_02"
    },
    "s5_portfolio_02": {
      "id": "s5_portfolio_02",
      "type": "line",
      "scene": "s5",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "封面用前面这张？看着比较像那么回事。",
      "next": "s5_portfolio_03"
    },
    "s5_portfolio_03": {
      "id": "s5_portfolio_03",
      "type": "line",
      "scene": "s5",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "我第一眼先看见灯，找了半天才找到头发。后面这张，我能看明白你改了哪儿。",
      "next": "s5_portfolio_04"
    },
    "s5_portfolio_04": {
      "id": "s5_portfolio_04",
      "type": "line",
      "scene": "s5",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "让你看作品，你还真敢挑。",
      "next": "s5_portfolio_05",
      "expression": "expression-surprised"
    },
    "s5_model_01": {
      "id": "s5_model_01",
      "type": "line",
      "scene": "s5",
      "speaker": "narrator",
      "character": null,
      "text": "说好四十分钟、只修两侧。她问过头皮情况，给师傅看了分区，才把围布扣好。",
      "next": "s5_model_02"
    },
    "s5_model_02": {
      "id": "s5_model_02",
      "type": "line",
      "scene": "s5",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "头摆正。你现在一转，我就得把左右重新找一遍。",
      "next": "s5_model_03"
    },
    "s5_model_03": {
      "id": "s5_model_03",
      "type": "line",
      "scene": "s5",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "我尽量保持一个合格杯子的形状。",
      "next": "s5_model_04"
    },
    "s5_model_04": {
      "id": "s5_model_04",
      "type": "line",
      "scene": "s5",
      "speaker": "narrator",
      "character": null,
      "text": "她笑了一声，落剪前又停住，把梳子换到另一只手里。我没再逗她。",
      "next": "s5_model_05"
    },
    "s5_portfolio_05": {
      "id": "s5_portfolio_05",
      "type": "line",
      "scene": "s5",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "那我改成“挺好”？",
      "next": "s5_portfolio_06"
    },
    "s5_portfolio_06": {
      "id": "s5_portfolio_06",
      "type": "line",
      "scene": "s5",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "别。刚才那句留着。",
      "next": "s5_portfolio_07",
      "expression": "expression-hesitant"
    },
    "s5_portfolio_07": {
      "id": "s5_portfolio_07",
      "type": "line",
      "scene": "s5",
      "speaker": "narrator",
      "character": null,
      "text": "她抽走主要由师傅完成的那页，把自己的处理过程放到前面。我去送下一单时，她还在比对两张原图。",
      "next": "s6_table_01"
    },
    "s5_model_05": {
      "id": "s5_model_05",
      "type": "line",
      "scene": "s5",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "手有点出汗。等我擦一下，不赶这几秒。",
      "next": "s5_model_06"
    },
    "s5_model_06": {
      "id": "s5_model_06",
      "type": "line",
      "scene": "s5",
      "speaker": "narrator",
      "character": null,
      "text": "那处过渡由师傅复核后，她才让我看后面。四十分钟用得满满当当，下一单仍来得及。",
      "next": "s5_model_07"
    },
    "s5_model_07": {
      "id": "s5_model_07",
      "type": "line",
      "scene": "s5",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "这儿我还想再练。能留张后脑勺的照片作对照吗？",
      "next": "s5_model_08"
    },
    "s5_model_08": {
      "id": "s5_model_08",
      "type": "line",
      "scene": "s5",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "拍吧。杯子有把手了，值得纪念。",
      "next": "s6_table_01"
    },
    "s6_table_01": {
      "id": "s6_table_01",
      "type": "line",
      "scene": "s6",
      "speaker": "narrator",
      "character": null,
      "text": "第六天夜里，周栀把布袋挂到膝边，给对面腾出位置。窗上有一层水汽，桌子中间那块倒是干的。",
      "next": "g_s6_noodles"
    },
    "g_s6_noodles": {
      "id": "g_s6_noodles",
      "type": "gate",
      "scene": "s6",
      "cases": [
        {
          "flag": "noodles",
          "value": "invite",
          "next": "s6_second_01"
        }
      ],
      "default": "s6_first_01"
    },
    "s6_second_01": {
      "id": "s6_second_01",
      "type": "line",
      "scene": "s6",
      "speaker": "zhouzhi",
      "character": "zhouzhi",
      "text": "第二顿了，今天还加两勺辣椒？上回你喝了半壶水。",
      "next": "s6_second_02"
    },
    "s6_second_02": {
      "id": "s6_second_02",
      "type": "line",
      "scene": "s6",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "那是为了让老板少洗一只水壶。",
      "next": "s6_second_03"
    },
    "s6_second_03": {
      "id": "s6_second_03",
      "type": "line",
      "scene": "s6",
      "speaker": "narrator",
      "character": null,
      "text": "她把辣椒罐往中间推。我问她今天还去不去葱，她点点头，先喝了一口热汤。",
      "next": "s6_plan_01"
    },
    "s6_first_01": {
      "id": "s6_first_01",
      "type": "line",
      "scene": "s6",
      "speaker": "zhouzhi",
      "character": "zhouzhi",
      "text": "今天是我约的。睡够了，能聊；要是突然没声，就是面太烫。",
      "next": "s6_first_02"
    },
    "s6_first_02": {
      "id": "s6_first_02",
      "type": "line",
      "scene": "s6",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "第一次吃面，注意事项还挺齐。",
      "next": "s6_first_03"
    },
    "s6_first_03": {
      "id": "s6_first_03",
      "type": "line",
      "scene": "s6",
      "speaker": "narrator",
      "character": null,
      "text": "她点清汤不加葱，我要红汤。坐下来以后，谁也没拿那晚没吃成的面当一笔欠账。",
      "next": "s6_plan_01"
    },
    "s6_plan_01": {
      "id": "s6_plan_01",
      "type": "line",
      "scene": "s6",
      "speaker": "zhouzhi",
      "character": "zhouzhi",
      "text": "朋友想一次租几个月，我想先短租。吵了半天，决定明天各问两处。",
      "next": "s6_plan_02"
    },
    "s6_plan_02": {
      "id": "s6_plan_02",
      "type": "line",
      "scene": "s6",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "你们吵架还分工？",
      "next": "s6_plan_03"
    },
    "s6_plan_03": {
      "id": "s6_plan_03",
      "type": "line",
      "scene": "s6",
      "speaker": "zhouzhi",
      "character": "zhouzhi",
      "text": "不然呢，吵完摊位就自己长出来？",
      "next": "s6_bg_zhouzhi_01"
    },
    "s6_plan_04": {
      "id": "s6_plan_04",
      "type": "line",
      "scene": "s6",
      "speaker": "narrator",
      "character": null,
      "text": "她用碗压住报价单，只指给我看照明那一栏。我把要核的地方圈出，余下的纸仍在她手边。",
      "next": "s6_plan_05",
      "cg": "cg03"
    },
    "s6_plan_05": {
      "id": "s6_plan_05",
      "type": "line",
      "scene": "s6",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "现场得另找时间看。我把要查的东西和收费发你，你们先商量。",
      "next": "s6_plan_06",
      "cg": "cg03"
    },
    "s6_plan_06": {
      "id": "s6_plan_06",
      "type": "line",
      "scene": "s6",
      "speaker": "zhouzhi",
      "character": "zhouzhi",
      "text": "行。你最近柜台是不是也忙？",
      "next": "s6_plan_07",
      "cg": "cg03"
    },
    "s6_plan_07": {
      "id": "s6_plan_07",
      "type": "line",
      "scene": "s6",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "还有几单。我也投了贵阳那支演出队，没回音。",
      "next": "s6_plan_08",
      "cg": "cg03"
    },
    "s6_plan_08": {
      "id": "s6_plan_08",
      "type": "line",
      "scene": "s6",
      "speaker": "zhouzhi",
      "character": "zhouzhi",
      "text": "有动静告诉我。别发六十秒语音，锅一开，我听不清。",
      "next": "s6_plan_09",
      "cg": "cg03"
    },
    "s6_plan_09": {
      "id": "s6_plan_09",
      "type": "line",
      "scene": "s6",
      "speaker": "narrator",
      "character": "wenwen",
      "text": "我点头，夹克口袋抵着桌沿。买票的事到了嘴边，又被我借着喝汤咽回去。",
      "next": "s6_plan_10",
      "expression": "expression-hesitant"
    },
    "s6_plan_10": {
      "id": "s6_plan_10",
      "type": "line",
      "scene": "s6",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "等你们试营业，给我留张正常高度的凳子吧。",
      "next": "s6_plan_11"
    },
    "s6_plan_11": {
      "id": "s6_plan_11",
      "type": "line",
      "scene": "s6",
      "speaker": "zhouzhi",
      "character": "zhouzhi",
      "text": "有。你别再拿维修箱冒充贵宾席。",
      "next": "s7_camera_01"
    },
    "s7_camera_01": {
      "id": "s7_camera_01",
      "type": "line",
      "scene": "s7",
      "speaker": "narrator",
      "character": null,
      "text": "第七天下午，孟遥看清我以后，把相机放低。镜头盖还是塞左口袋，栗色头发在肩边湿了一小块。",
      "next": "s7_camera_02",
      "cg": "cg04"
    },
    "s7_camera_02": {
      "id": "s7_camera_02",
      "type": "line",
      "scene": "s7",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "文文？你回来了，还是我对焦坏了？",
      "next": "s7_camera_03",
      "cg": "cg04"
    },
    "s7_camera_03": {
      "id": "s7_camera_03",
      "type": "line",
      "scene": "s7",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "这项不归我修。",
      "next": "s7_camera_04",
      "cg": "cg04"
    },
    "s7_camera_04": {
      "id": "s7_camera_04",
      "type": "line",
      "scene": "s7",
      "speaker": "narrator",
      "character": null,
      "text": "她和我同岁。分手后，我看过不少她做的短片，赞却一个没点，好像这样就没人知道我停留过。",
      "next": "s7_bg_mengyao_01",
      "cg": "cg04"
    },
    "s7_camera_05": {
      "id": "s7_camera_05",
      "type": "line",
      "scene": "s7",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "叶岚跟我说了留记录的事。第十天下午先碰筹备，核设备、场地和人能来的时间。今天不开拍。",
      "next": "s7_camera_06",
      "cg": "cg04"
    },
    "s7_camera_06": {
      "id": "s7_camera_06",
      "type": "line",
      "scene": "s7",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "设备表我整理。那套旧监听还不能用，先别算它。",
      "next": "s7_camera_07",
      "cg": "cg04"
    },
    "s7_camera_07": {
      "id": "s7_camera_07",
      "type": "line",
      "scene": "s7",
      "speaker": "narrator",
      "character": null,
      "text": "她记下一笔，让相机垂在身前。我正想再说句柜台多乱，她抬起头。",
      "next": "s7_camera_08"
    },
    "s7_camera_08": {
      "id": "s7_camera_08",
      "type": "line",
      "scene": "s7",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "上次我问你什么时候走，你回了“再说”。后来还是在别人的照片里看见你走了。",
      "next": "s7_camera_09",
      "expression": "expression-serious"
    },
    "s7_camera_09": {
      "id": "s7_camera_09",
      "type": "line",
      "scene": "s7",
      "speaker": "narrator",
      "character": null,
      "text": "衣袋里的手机抵着腿。我这回连票都买好了，小满问的时候，却只听见我说眼前的活。",
      "next": "s7_camera_10"
    },
    "s7_camera_10": {
      "id": "s7_camera_10",
      "type": "line",
      "scene": "s7",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "我看向那块不滴雨的地方。她没有让开，也没有继续问别的。",
      "next": "c4",
      "expression": "expression-hesitant"
    },
    "c4": {
      "id": "c4",
      "type": "choice",
      "scene": "s7",
      "character": "mengyao",
      "text": "我怎样接住这句迟到的问题？",
      "flag": "reunion",
      "choices": [
        {
          "label": "承认那时在逃避，先把这句歉意说清。",
          "value": "apologize",
          "next": "s7_apologize_01"
        },
        {
          "label": "约一段完整时间，把当时的事认真谈完。",
          "value": "appointment",
          "next": "s7_appointment_01"
        },
        {
          "label": "顺着老同学的口吻开个玩笑，再接回正题。",
          "value": "joke",
          "next": "s7_joke_01"
        }
      ]
    },
    "s7_apologize_01": {
      "id": "s7_apologize_01",
      "type": "line",
      "scene": "s7",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "那时我怕你问下一步，我答不上，就干脆不回。是我在逃避，对不起。",
      "next": "s7_apologize_02"
    },
    "s7_apologize_02": {
      "id": "s7_apologize_02",
      "type": "line",
      "scene": "s7",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "我听见了。可我现在说不出“没关系”。",
      "next": "s7_apologize_03",
      "expression": "expression-downcast"
    },
    "s7_apologize_03": {
      "id": "s7_apologize_03",
      "type": "line",
      "scene": "s7",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "不用勉强说。",
      "next": "s7_apologize_04"
    },
    "s7_apologize_04": {
      "id": "s7_apologize_04",
      "type": "line",
      "scene": "s7",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "她翻过被雨打潮的背带。我站在旁边，没有拿另一句解释去催她接话。",
      "next": "s7_terms_01",
      "expression": "expression-hesitant"
    },
    "s7_appointment_01": {
      "id": "s7_appointment_01",
      "type": "line",
      "scene": "s7",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "我半小时后要交机。能不能找一段不用说到一半就走的时间？我现在把空档发你。",
      "next": "s7_appointment_02"
    },
    "s7_appointment_02": {
      "id": "s7_appointment_02",
      "type": "line",
      "scene": "s7",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "可以。我看排期，你先别只写“有空再说”。",
      "next": "s7_appointment_03"
    },
    "s7_appointment_03": {
      "id": "s7_appointment_03",
      "type": "line",
      "scene": "s7",
      "speaker": "narrator",
      "character": null,
      "text": "我发去第十天之后的两段完整空档。她核过排期，选了第二段。我回了“确定”，把那段留了出来。",
      "next": "s7_appointment_04"
    },
    "s7_joke_01": {
      "id": "s7_joke_01",
      "type": "line",
      "scene": "s7",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "老同学见面，第一题就查出勤啊？",
      "next": "s7_joke_02"
    },
    "s7_joke_02": {
      "id": "s7_joke_02",
      "type": "line",
      "scene": "s7",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "我没查出勤。我问过你什么时候走，一直没等到回答。",
      "next": "s7_joke_03",
      "expression": "expression-displeased"
    },
    "s7_joke_03": {
      "id": "s7_joke_03",
      "type": "line",
      "scene": "s7",
      "speaker": "narrator",
      "character": null,
      "text": "笑话落下去，没人接。我捏住工具包带子，没再补第二句。",
      "next": "s7_joke_04"
    },
    "s7_joke_04": {
      "id": "s7_joke_04",
      "type": "line",
      "scene": "s7",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "刚才又想躲过去。这个问题我记着，可我现在还没说清。",
      "next": "s7_joke_05"
    },
    "s7_terms_01": {
      "id": "s7_terms_01",
      "type": "line",
      "scene": "s7",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "先看场地吧。我们的事，不放进片子里。",
      "next": "s7_terms_02"
    },
    "s7_terms_02": {
      "id": "s7_terms_02",
      "type": "line",
      "scene": "s7",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "好。设备有什么问题，我能先给你说清。",
      "next": "s7_terms_03"
    },
    "s7_terms_03": {
      "id": "s7_terms_03",
      "type": "line",
      "scene": "s7",
      "speaker": "narrator",
      "character": null,
      "text": "她摊开勘景表，我把工具包挪走，给纸留出一块干地方。",
      "next": "s8_count_01"
    },
    "s7_appointment_04": {
      "id": "s7_appointment_04",
      "type": "line",
      "scene": "s7",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "时间定了。刚才那个问题，还是等你答。",
      "next": "s7_appointment_05"
    },
    "s7_appointment_05": {
      "id": "s7_appointment_05",
      "type": "line",
      "scene": "s7",
      "speaker": "narrator",
      "character": null,
      "text": "我点头。日历上多了一格，屋檐下的那句话并没有因此少掉。",
      "next": "s7_terms_01"
    },
    "s7_joke_05": {
      "id": "s7_joke_05",
      "type": "line",
      "scene": "s7",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "那就先留着。别当成已经谈过。",
      "next": "s7_terms_01"
    },
    "s8_count_01": {
      "id": "s8_count_01",
      "type": "line",
      "scene": "s8",
      "speaker": "narrator",
      "character": null,
      "text": "第八天晚上，叶岚把空纸箱倒扣，铺开清单。柜里正常机和故障机已经分开摆好。",
      "next": "s8_count_02",
      "cg": "cg05"
    },
    "s8_count_02": {
      "id": "s8_count_02",
      "type": "line",
      "scene": "s8",
      "speaker": "yelan",
      "character": "yelan",
      "text": "先看编号，别让同型号的混了。",
      "next": "s8_count_03",
      "cg": "cg05"
    },
    "s8_count_03": {
      "id": "s8_count_03",
      "type": "line",
      "scene": "s8",
      "speaker": "narrator",
      "character": null,
      "text": "我认出柜台那套旧监听，已经随维修单送回，待复查标签还在。",
      "next": "s8_count_04",
      "cg": "cg05"
    },
    "s8_count_04": {
      "id": "s8_count_04",
      "type": "line",
      "scene": "s8",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "这张表的“待处理”，是设备没好，还是没人签收？",
      "next": "s8_count_05",
      "cg": "cg05"
    },
    "s8_count_05": {
      "id": "s8_count_05",
      "type": "line",
      "scene": "s8",
      "speaker": "yelan",
      "character": "yelan",
      "text": "设备没好、东西找不到、没人签收，别都写“待处理”。停业后我想接活动执行，这账得理清。",
      "next": "s8_bg_yelan_01",
      "cg": "cg05"
    },
    "s8_count_06": {
      "id": "s8_count_06",
      "type": "line",
      "scene": "s8",
      "speaker": "narrator",
      "character": null,
      "text": "她拆开几项，笔停在自己名字边。同事的名字就在下一行。",
      "next": "s8_count_07",
      "cg": "cg05"
    },
    "s8_count_07": {
      "id": "s8_count_07",
      "type": "line",
      "scene": "s8",
      "speaker": "yelan",
      "character": "yelan",
      "text": "这些可以接整单，也可以只做今晚两小时。你说能做多少，我把后面的排好。",
      "next": "s8_count_08",
      "cg": "cg05"
    },
    "s8_count_08": {
      "id": "s8_count_08",
      "type": "line",
      "scene": "s8",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "你自己的工时呢？",
      "next": "s8_count_09",
      "cg": "cg05"
    },
    "s8_count_09": {
      "id": "s8_count_09",
      "type": "line",
      "scene": "s8",
      "speaker": "narrator",
      "character": "yelan",
      "text": "她收回表：“看到了，待会儿补。”笔却先去找柜号。",
      "next": "c5",
      "expression": "expression-hesitant"
    },
    "c5": {
      "id": "c5",
      "type": "choice",
      "scene": "s8",
      "character": "yelan",
      "text": "我怎么接下这份清点工作？",
      "flag": "inventory",
      "choices": [
        {
          "label": "承接完整清单，约好明天交付并安排工时。",
          "value": "full",
          "next": "s8_full_01"
        },
        {
          "label": "今晚只帮两小时，把余项清楚交接。",
          "value": "limited",
          "next": "s8_limited_01"
        }
      ]
    },
    "s8_full_01": {
      "id": "s8_full_01",
      "type": "line",
      "scene": "s8",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "我接整单。明早的柜台急修照做，余项明天下午两点前交。归属不清的，你跟我一起找旧单。",
      "next": "s8_full_02"
    },
    "s8_full_02": {
      "id": "s8_full_02",
      "type": "line",
      "scene": "s8",
      "speaker": "narrator",
      "character": null,
      "text": "她坐到纸箱另一边，和我翻出同型号设备的旧编号。我把原留给求职材料的那段下午挪了挪，这份收入也正用得上。",
      "next": "s8_full_03"
    },
    "s8_full_03": {
      "id": "s8_full_03",
      "type": "line",
      "scene": "s8",
      "speaker": "yelan",
      "character": "yelan",
      "text": "这台对上了。剩下两项，我明午前补给你。整单就按整单结。",
      "next": "s8_full_04"
    },
    "s8_full_04": {
      "id": "s8_full_04",
      "type": "line",
      "scene": "s8",
      "speaker": "narrator",
      "character": null,
      "text": "两小时快到，我把当晚已核的页码圈好，余项另放。我们等师匠按约来电复核，明天交全表的安排仍在单上。",
      "next": "s8_hours_01"
    },
    "s8_limited_01": {
      "id": "s8_limited_01",
      "type": "line",
      "scene": "s8",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "我今晚两小时。先核编号和状态，余项交给明天接班的人，柜号和联系人都写齐。",
      "next": "s8_limited_02"
    },
    "s8_limited_02": {
      "id": "s8_limited_02",
      "type": "line",
      "scene": "s8",
      "speaker": "narrator",
      "character": null,
      "text": "接班同事确认能接，照着那几行找到了空架位。叶岚刚想起身跟过去，他已经把对应柜号报了回来。",
      "next": "s8_limited_03"
    },
    "s8_limited_03": {
      "id": "s8_limited_03",
      "type": "line",
      "scene": "s8",
      "speaker": "yelan",
      "character": "yelan",
      "text": "对，就是那边。剩下的按这个找，有不清楚的再问。",
      "next": "s8_limited_04",
      "expression": "expression-surprised"
    },
    "s8_limited_04": {
      "id": "s8_limited_04",
      "type": "line",
      "scene": "s8",
      "speaker": "narrator",
      "character": null,
      "text": "她坐回去，把那几页交到同事手里。两小时快到，留出的收尾时间还够师匠电话复核，再做最后的离场确认。",
      "next": "s8_hours_01"
    },
    "s8_handoff_01": {
      "id": "s8_handoff_01",
      "type": "line",
      "scene": "s8",
      "speaker": "narrator",
      "character": null,
      "text": "师匠按约打来电话。我念过已核设备的单号，他又问了一遍，哪套仍不能签“正常”。",
      "next": "s8_handoff_02"
    },
    "s8_handoff_02": {
      "id": "s8_handoff_02",
      "type": "line",
      "scene": "s8",
      "speaker": "shijiang",
      "character": "shijiang",
      "text": "旧监听继续待查，别和能用的混在一起。我明天照这个记录接着看。",
      "next": "s8_handoff_03"
    },
    "s8_handoff_03": {
      "id": "s8_handoff_03",
      "type": "line",
      "scene": "s8",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "分开了。工具也点清了，等叶岚核完钥匙，再做最后确认。",
      "next": "s8_handoff_04"
    },
    "s8_handoff_04": {
      "id": "s8_handoff_04",
      "type": "line",
      "scene": "s8",
      "speaker": "shijiang",
      "character": "shijiang",
      "text": "行，电话先到这里。我也该锁柜台了。",
      "next": "s8_handoff_05"
    },
    "s8_handoff_05": {
      "id": "s8_handoff_05",
      "type": "line",
      "scene": "s8",
      "speaker": "narrator",
      "character": null,
      "text": "叶岚去门口核钥匙，工具包还摊在桌边。柜里忽然响了三下，清洁车从外面经过，盖住了尾音。我没能听清它们之间的间隔。",
      "next": "s8_handoff_06"
    },
    "s8_handoff_06": {
      "id": "s8_handoff_06",
      "type": "line",
      "scene": "s8",
      "speaker": "陌生的声音",
      "character": null,
      "text": "这次……还在吗？",
      "next": "h2"
    },
    "h2": {
      "id": "h2",
      "type": "choice",
      "scene": "s8",
      "character": null,
      "text": "工具已经点清，离场确认前还有片刻。柜里又响了三下，我选择：",
      "flag": "qiuReply",
      "choices": [
        {
          "label": "试着用三下轻敲回应。",
          "value": "reply",
          "next": "g_s8_signal"
        },
        {
          "label": "收好工具，按约完成交接。",
          "value": "finish",
          "next": "s8_finish_01"
        }
      ]
    },
    "g_s8_signal": {
      "id": "g_s8_signal",
      "type": "gate",
      "scene": "s8",
      "cases": [
        {
          "flag": "qiuSignal",
          "value": "record",
          "next": "s8_echo_record_01"
        }
      ],
      "default": "s8_echo_work_01"
    },
    "s8_echo_record_01": {
      "id": "s8_echo_record_01",
      "type": "line",
      "scene": "s8",
      "speaker": "narrator",
      "character": null,
      "text": "我翻开维修本，照那三个点在柜侧轻敲：轻、轻——停半拍——重。最后一下落定，柜里接上了一句很低的声音。",
      "next": "s8_echo_record_02"
    },
    "s8_echo_record_02": {
      "id": "s8_echo_record_02",
      "type": "line",
      "scene": "s8",
      "speaker": "陌生的声音",
      "character": null,
      "text": "好。这回，没被盖过去。",
      "next": "s8_echo_record_03"
    },
    "s8_echo_record_03": {
      "id": "s8_echo_record_03",
      "type": "line",
      "scene": "s8",
      "speaker": "narrator",
      "character": null,
      "text": "我把时间添在记号旁，没有拆柜子。叶岚核完钥匙回来，我拉好工具包，递过签收单。她签好名字，我们确认门锁，按约离开。",
      "next": "s9_prepare_01"
    },
    "s8_echo_work_01": {
      "id": "s8_echo_work_01",
      "type": "line",
      "scene": "s8",
      "speaker": "narrator",
      "character": null,
      "text": "我试着敲了三下。维修本上只有“三下轻响”，没有间隔；我拿不准该在哪里停。屋里留下普通的回声，没有别的话。",
      "next": "s8_echo_work_02"
    },
    "s8_echo_work_02": {
      "id": "s8_echo_work_02",
      "type": "line",
      "scene": "s8",
      "speaker": "narrator",
      "character": null,
      "text": "我记下“轻敲后未复现人声”，把本子合上。叶岚回来，我拉好工具包，递过签收单。她签好名字，我和她确认门锁后离开。",
      "next": "s9_prepare_01"
    },
    "s8_finish_01": {
      "id": "s8_finish_01",
      "type": "line",
      "scene": "s8",
      "speaker": "narrator",
      "character": null,
      "text": "我看了眼待查标签，补上声音出现的时间，把最后一件工具放回包里。",
      "next": "s8_finish_02"
    },
    "s8_finish_02": {
      "id": "s8_finish_02",
      "type": "line",
      "scene": "s8",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "异常记在这行了。复查时再看，今晚的先交给你。",
      "next": "s8_finish_03"
    },
    "s8_finish_03": {
      "id": "s8_finish_03",
      "type": "line",
      "scene": "s8",
      "speaker": "narrator",
      "character": null,
      "text": "叶岚接过签收单，核对工具数量，落笔签名。钥匙在她另一只手里轻轻碰了一下。",
      "next": "s8_finish_04"
    },
    "s8_finish_04": {
      "id": "s8_finish_04",
      "type": "line",
      "scene": "s8",
      "speaker": "narrator",
      "character": null,
      "text": "我拉好包，和她核过门锁。雨还没停，我们各自撑伞离开。",
      "next": "s9_prepare_01"
    },
    "s8_hours_01": {
      "id": "s8_hours_01",
      "type": "line",
      "scene": "s8",
      "speaker": "narrator",
      "character": null,
      "text": "叶岚终于把自己的工时补上，才把清单推给我。",
      "next": "s8_handoff_01"
    },
    "s9_prepare_01": {
      "id": "s9_prepare_01",
      "type": "line",
      "scene": "s9",
      "speaker": "narrator",
      "character": null,
      "text": "第十天下午，相机还没有打开。孟遥铺开筹备纸，毛狼用线箱压住纸角。",
      "next": "s9_title_01"
    },
    "s9_prepare_02": {
      "id": "s9_prepare_02",
      "type": "line",
      "scene": "s9",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "先碰试音这段。设备能用吗，人什么时候能来？",
      "next": "s9_prepare_04"
    },
    "s9_prepare_04": {
      "id": "s9_prepare_04",
      "type": "line",
      "scene": "s9",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "旧监听还不能用，先别排进试音。",
      "next": "s9_prepare_05"
    },
    "s9_prepare_05": {
      "id": "s9_prepare_05",
      "type": "line",
      "scene": "s9",
      "speaker": "narrator",
      "character": null,
      "text": "小满还在店里，往群里发来一句：“参考马上发。”",
      "next": "g_s9_inventory"
    },
    "g_s9_ride": {
      "id": "g_s9_ride",
      "type": "gate",
      "scene": "s9",
      "cases": [
        {
          "flag": "ride",
          "value": "walk",
          "next": "s9_ride_walk_01"
        },
        {
          "flag": "ride",
          "value": "taxi",
          "next": "s9_ride_taxi_01"
        }
      ],
      "default": "s9_ride_leave_01"
    },
    "s9_ride_walk_01": {
      "id": "s9_ride_walk_01",
      "type": "line",
      "scene": "s9",
      "speaker": "narrator",
      "character": null,
      "text": "小满圈出我们那晚走过的坡口：“别抬器材走台阶，拐旁边。”我把搬运路线往外挪了一格，那晚绕的路用上了。",
      "next": "g_s9_salon"
    },
    "s9_ride_taxi_01": {
      "id": "s9_ride_taxi_01",
      "type": "line",
      "scene": "s9",
      "speaker": "narrator",
      "character": null,
      "text": "小满发来那晚的上车点：“车能停这儿，别堵店门。四星先生，没忘吧？”我把临停位置补上。",
      "next": "g_s9_salon"
    },
    "s9_ride_leave_01": {
      "id": "s9_ride_leave_01",
      "type": "line",
      "scene": "s9",
      "speaker": "narrator",
      "character": null,
      "text": "小满问过那晚拼车的同事，把下班车多的时段发进群。我把器材搬运那一栏错开，没拿临收摊取件的办法赌这一次。",
      "next": "g_s9_salon"
    },
    "g_s9_noodles": {
      "id": "g_s9_noodles",
      "type": "gate",
      "scene": "s9",
      "cases": [
        {
          "flag": "noodles",
          "value": "invite",
          "next": "s9_noodles_invite_01"
        }
      ],
      "default": "s9_noodles_space_01"
    },
    "s9_noodles_invite_01": {
      "id": "s9_noodles_invite_01",
      "type": "line",
      "scene": "s9",
      "speaker": "narrator",
      "character": null,
      "text": "周栀拎着包等在桌边。我把设备表推近，停下正要念给她听的话，让她自己看。",
      "next": "s9_noodles_invite_02"
    },
    "s9_noodles_invite_02": {
      "id": "s9_noodles_invite_02",
      "type": "line",
      "scene": "s9",
      "speaker": "zhouzhi",
      "character": "zhouzhi",
      "text": "跟吃面一样，先让我安静看完。确认完这段，我还得去问摊位。",
      "next": "g_s9_ride"
    },
    "s9_noodles_space_01": {
      "id": "s9_noodles_space_01",
      "type": "line",
      "scene": "s9",
      "speaker": "narrator",
      "character": null,
      "text": "周栀拉过空椅，按住差点被风卷走的纸，笔先拿到了自己手里。",
      "next": "s9_noodles_space_02"
    },
    "s9_noodles_space_02": {
      "id": "s9_noodles_space_02",
      "type": "line",
      "scene": "s9",
      "speaker": "zhouzhi",
      "character": "zhouzhi",
      "text": "这次也我先来。能来的时段圈这儿，晚班后面不添。",
      "next": "g_s9_ride"
    },
    "g_s9_salon": {
      "id": "g_s9_salon",
      "type": "gate",
      "scene": "s9",
      "cases": [
        {
          "flag": "salon",
          "value": "portfolio",
          "next": "s9_salon_portfolio_01"
        }
      ],
      "default": "s9_salon_model_01"
    },
    "s9_salon_portfolio_01": {
      "id": "s9_salon_portfolio_01",
      "type": "line",
      "scene": "s9",
      "speaker": "narrator",
      "character": null,
      "text": "小满发来重排过的一页作品：“先看处理过程，灯在后面。”孟遥把它夹进参考资料，原先笼统的“拍手艺”有了可讨论的步骤。",
      "next": "s9_ready_01"
    },
    "s9_salon_model_01": {
      "id": "s9_salon_model_01",
      "type": "line",
      "scene": "s9",
      "speaker": "narrator",
      "character": null,
      "text": "小满发来我的剪发前后对照，附着当时的步骤和用时。我确认这次先作筹备参考，孟遥照着标出需要等动作完成的地方。",
      "next": "s9_ready_01"
    },
    "g_s9_reunion": {
      "id": "g_s9_reunion",
      "type": "gate",
      "scene": "s9",
      "cases": [
        {
          "flag": "reunion",
          "value": "apologize",
          "next": "s9_reunion_apologize_01"
        },
        {
          "flag": "reunion",
          "value": "appointment",
          "next": "s9_reunion_appointment_01"
        }
      ],
      "default": "s9_reunion_joke_01"
    },
    "s9_reunion_apologize_01": {
      "id": "s9_reunion_apologize_01",
      "type": "line",
      "scene": "s9",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "票的事听到了。上次你说怕答不上下一步，我还有一句想问。先不用急着再道歉。",
      "next": "s9_reunion_apologize_02"
    },
    "s9_reunion_apologize_02": {
      "id": "s9_reunion_apologize_02",
      "type": "line",
      "scene": "s9",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "好。我等你问。",
      "next": "s9_measure_01"
    },
    "s9_reunion_appointment_01": {
      "id": "s9_reunion_appointment_01",
      "type": "line",
      "scene": "s9",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "第二十八天的票，我听见了。我们留的那段时间还算数？",
      "next": "s9_reunion_appointment_02"
    },
    "s9_reunion_appointment_02": {
      "id": "s9_reunion_appointment_02",
      "type": "line",
      "scene": "s9",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "算数。没挪，也不拿今天这几句话抵掉。",
      "next": "s9_measure_01"
    },
    "s9_reunion_joke_01": {
      "id": "s9_reunion_joke_01",
      "type": "line",
      "scene": "s9",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "这次是你自己说要走的可能。那天的问题，还没答。",
      "next": "s9_reunion_joke_02"
    },
    "s9_reunion_joke_02": {
      "id": "s9_reunion_joke_02",
      "type": "line",
      "scene": "s9",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "我记得。这次不用“再说”挡过去。",
      "next": "s9_measure_01"
    },
    "g_s9_inventory": {
      "id": "g_s9_inventory",
      "type": "gate",
      "scene": "s9",
      "cases": [
        {
          "flag": "inventory",
          "value": "full",
          "next": "s9_inventory_full_01"
        }
      ],
      "default": "s9_inventory_limited_01"
    },
    "s9_inventory_full_01": {
      "id": "s9_inventory_full_01",
      "type": "line",
      "scene": "s9",
      "speaker": "yelan",
      "character": "yelan",
      "text": "整单款结了。昨天一起翻出的两张旧单都对上了，这回那台机器终于有个准地方。",
      "next": "s9_inventory_full_03"
    },
    "s9_inventory_limited_01": {
      "id": "s9_inventory_limited_01",
      "type": "line",
      "scene": "s9",
      "speaker": "yelan",
      "character": "yelan",
      "text": "同事照你的柜号找完了。两小时的钱结好了——我还真没再跟去核一遍。",
      "next": "s9_inventory_limited_02"
    },
    "s9_inventory_limited_02": {
      "id": "s9_inventory_limited_02",
      "type": "line",
      "scene": "s9",
      "speaker": "narrator",
      "character": null,
      "text": "她把同事签过的页压在原单上。我翻到他补的那行，找到旧监听；昨天下午空出的时间，我用来整理了求职材料。",
      "next": "s9_review_01"
    },
    "s9_compete_01": {
      "id": "s9_compete_01",
      "type": "line",
      "scene": "s9",
      "speaker": "narrator",
      "character": null,
      "text": "毛狼的尺寸还剩两处没核。他放下笔，朝我抬抬下巴。",
      "next": "s9_compete_02"
    },
    "s9_compete_02": {
      "id": "s9_compete_02",
      "type": "line",
      "scene": "s9",
      "speaker": "maolang",
      "character": "maolang",
      "text": "贵阳那队，我也投了。主持、场务都报了，可能跟你争。",
      "next": "s9_compete_03"
    },
    "s9_compete_03": {
      "id": "s9_compete_03",
      "type": "line",
      "scene": "s9",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "介绍我来接活的时候，就投了？",
      "next": "s9_compete_04"
    },
    "s9_compete_04": {
      "id": "s9_compete_04",
      "type": "line",
      "scene": "s9",
      "speaker": "maolang",
      "character": "maolang",
      "text": "那天还没。后来看完要求，想试。一直没找着时候说。",
      "next": "s9_compete_05"
    },
    "s9_compete_05": {
      "id": "s9_compete_05",
      "type": "line",
      "scene": "s9",
      "speaker": "narrator",
      "character": null,
      "text": "第一晚那张招聘页闪过脑海。我差点质问他，手却碰到装着车票的手机。",
      "next": "s9_compete_06"
    },
    "s9_compete_06": {
      "id": "s9_compete_06",
      "type": "line",
      "scene": "s9",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "贵阳的票，我早买了。第二十八天。还没录用，一直没告诉你。",
      "next": "s9_compete_07"
    },
    "s9_compete_07": {
      "id": "s9_compete_07",
      "type": "line",
      "scene": "s9",
      "speaker": "maolang",
      "character": "maolang",
      "text": "你倒比我敢花钱。",
      "next": "g_s9_confession_voice"
    },
    "s9_compete_08": {
      "id": "s9_compete_08",
      "type": "line",
      "scene": "s9",
      "speaker": "narrator",
      "character": null,
      "text": "我没笑，他也停住。大厅那头翻纸声很清楚。",
      "next": "s9_compete_09",
      "cg": "cg06"
    },
    "s9_compete_09": {
      "id": "s9_compete_09",
      "type": "line",
      "scene": "s9",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "我想等有结果再说。可没结果，也可能走。这个我应该先讲。",
      "next": "s9_compete_10",
      "cg": "cg06"
    },
    "s9_compete_10": {
      "id": "s9_compete_10",
      "type": "line",
      "scene": "s9",
      "speaker": "narrator",
      "character": null,
      "text": "我打开筹备群。小满在店里，周栀刚走，不能让她们只听到半截。",
      "next": "s9_compete_11"
    },
    "s9_compete_11": {
      "id": "s9_compete_11",
      "type": "line",
      "scene": "s9",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "第二十八天去贵阳，票早买了，工作还没结果。眼前的活照做，之后有变化，我自己告诉大家。",
      "next": "s9_compete_12"
    },
    "s9_inventory_full_03": {
      "id": "s9_inventory_full_03",
      "type": "line",
      "scene": "s9",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "柜号记熟了，求职材料倒拖到晚上。还好没把自己的名字填进设备栏。",
      "next": "s9_review_01"
    },
    "s9_review_01": {
      "id": "s9_review_01",
      "type": "line",
      "scene": "s9",
      "speaker": "shijiang",
      "character": "shijiang",
      "text": "昨天复查过，杂音还没定位。这段先别押它，我后面还有维护要做。",
      "next": "s9_review_02"
    },
    "s9_review_02": {
      "id": "s9_review_02",
      "type": "line",
      "scene": "s9",
      "speaker": "narrator",
      "character": null,
      "text": "师匠来取线材，指住我新抄的两个倒写数字。我照原单改好，他才签名，收起自己的报价草页。",
      "next": "s9_review_04"
    },
    "s9_review_04": {
      "id": "s9_review_04",
      "type": "line",
      "scene": "s9",
      "speaker": "shijiang",
      "character": "shijiang",
      "text": "记录格式我留着，下一份固定维护报价用得上。工时另算。",
      "next": "s9_review_05"
    },
    "s9_review_05": {
      "id": "s9_review_05",
      "type": "line",
      "scene": "s9",
      "speaker": "zhouzhi",
      "character": "zhouzhi",
      "text": "我过会儿还得问摊位。试音另凑空，不能一直等到大家满意。",
      "next": "s9_adjust_01"
    },
    "s9_adjust_01": {
      "id": "s9_adjust_01",
      "type": "line",
      "scene": "s9",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "依赖旧监听的声音段先撤下，复查后再约。今天只定路线和时间。",
      "next": "s9_adjust_02"
    },
    "s9_adjust_02": {
      "id": "s9_adjust_02",
      "type": "line",
      "scene": "s9",
      "speaker": "narrator",
      "character": null,
      "text": "叶岚划开连成一片的时段，让大家各填能来的空档。",
      "next": "g_s9_noodles"
    },
    "s9_ready_01": {
      "id": "s9_ready_01",
      "type": "line",
      "scene": "s9",
      "speaker": "narrator",
      "character": null,
      "text": "孟遥分开两张纸：已能做的，和等答复的。相机依然没有打开。",
      "next": "s9_ready_03"
    },
    "s9_ready_03": {
      "id": "s9_ready_03",
      "type": "line",
      "scene": "s9",
      "speaker": "narrator",
      "character": null,
      "text": "周栀圈好时间就拎包走了。剩下的在群里说。",
      "next": "s9_compete_01"
    },
    "s9_compete_12": {
      "id": "s9_compete_12",
      "type": "line",
      "scene": "s9",
      "speaker": "narrator",
      "character": null,
      "text": "我没有撤回。叶岚看完，在后续联系人旁留了一条备注。",
      "next": "s9_compete_13"
    },
    "s9_compete_13": {
      "id": "s9_compete_13",
      "type": "line",
      "scene": "s9",
      "speaker": "narrator",
      "character": null,
      "text": "孟遥和我站到桌子另一侧。毛狼去拿卷尺，她压低了声音。",
      "next": "g_s9_reunion"
    },
    "s9_measure_01": {
      "id": "s9_measure_01",
      "type": "line",
      "scene": "s9",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "公开的设备要求，我转你。场务的，你发我。",
      "next": "s9_measure_02"
    },
    "s9_measure_02": {
      "id": "s9_measure_02",
      "type": "line",
      "scene": "s9",
      "speaker": "maolang",
      "character": "maolang",
      "text": "行。各凭本事。",
      "next": "s9_measure_03"
    },
    "s9_measure_03": {
      "id": "s9_measure_03",
      "type": "line",
      "scene": "s9",
      "speaker": "narrator",
      "character": null,
      "text": "两份文件传过来，谁都没拿自己的申请给对方看。毛狼转了半圈笔，报出尺寸。",
      "next": "s9_measure_04"
    },
    "s9_measure_04": {
      "id": "s9_measure_04",
      "type": "line",
      "scene": "s9",
      "speaker": "narrator",
      "character": null,
      "text": "我扶着卷尺后退，他按住另一端。我们继续量，没再谈求职，也没拍肩说这就算了。",
      "next": "s9_ready_result_01"
    },
    "s10_messages_01": {
      "id": "s10_messages_01",
      "type": "line",
      "scene": "s10",
      "speaker": "narrator",
      "character": null,
      "text": "第十天夜里，我在回声门外拉好工具包。大厅留着两张筹备纸，待答复的还在那里。",
      "next": "s10_messages_02"
    },
    "s10_messages_02": {
      "id": "s10_messages_02",
      "type": "line",
      "scene": "s10",
      "speaker": "narrator",
      "character": null,
      "text": "车票没有变成录用通知，也不再只归我一个人知道。",
      "next": "s10_messages_03"
    },
    "g_s10_salon": {
      "id": "g_s10_salon",
      "type": "gate",
      "scene": "s10",
      "cases": [
        {
          "flag": "salon",
          "value": "portfolio",
          "next": "s10_salon_portfolio_01"
        }
      ],
      "default": "s10_salon_model_01"
    },
    "s10_salon_portfolio_01": {
      "id": "s10_salon_portfolio_01",
      "type": "line",
      "scene": "s10",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "今天那页师傅看了，让补侧面。我还有一页拿不准，没发群里。你有空帮我看吗？这次不收“挺好”。",
      "next": "s10_zhouzhi_01"
    },
    "s10_salon_model_01": {
      "id": "s10_salon_model_01",
      "type": "line",
      "scene": "s10",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "你那次的照片我又看了，有一处还是不顺眼。不是说你的头。方便的话，帮我看看我圈的地方？",
      "next": "s10_zhouzhi_01"
    },
    "s10_zhouzhi_01": {
      "id": "s10_zhouzhi_01",
      "type": "line",
      "scene": "s10",
      "speaker": "zhouzhi",
      "character": "zhouzhi",
      "text": "今天能来的时段记好了，晚班后留着歇。摊位还在比价，旧冰柜的照片拍清楚了。你有空，我发来问两句，问完不加题。",
      "next": "s10_zhouzhi_02"
    },
    "s10_zhouzhi_02": {
      "id": "s10_zhouzhi_02",
      "type": "line",
      "scene": "s10",
      "speaker": "narrator",
      "character": null,
      "text": "孟遥的消息没有表情，她好像总能把光标停在必须回答的位置。",
      "next": "g_s10_reunion"
    },
    "g_s10_reunion": {
      "id": "g_s10_reunion",
      "type": "gate",
      "scene": "s10",
      "cases": [
        {
          "flag": "reunion",
          "value": "apologize",
          "next": "s10_reunion_apologize_01"
        },
        {
          "flag": "reunion",
          "value": "appointment",
          "next": "s10_reunion_appointment_01"
        }
      ],
      "default": "s10_reunion_joke_01"
    },
    "s10_reunion_apologize_01": {
      "id": "s10_reunion_apologize_01",
      "type": "line",
      "scene": "s10",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "今天没问的那一句，我想再问问。三天前的道歉我听到了，这次不用从头说。",
      "next": "s10_yelan_01"
    },
    "s10_reunion_appointment_01": {
      "id": "s10_reunion_appointment_01",
      "type": "line",
      "scene": "s10",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "我们定好的空档不变。如果今晚方便，我想先问清一件事，剩下的当面说。",
      "next": "s10_yelan_01"
    },
    "s10_reunion_joke_01": {
      "id": "s10_reunion_joke_01",
      "type": "line",
      "scene": "s10",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "今天说车票的时候，你没有开玩笑。我想把那天的问题再问一次，方便就回我。",
      "next": "s10_yelan_01"
    },
    "s10_yelan_01": {
      "id": "s10_yelan_01",
      "type": "line",
      "scene": "s10",
      "speaker": "yelan",
      "character": "yelan",
      "text": "清单回执发你了，我的工时也补上了。你如果还在门口，等我出来走一段？今天不聊预算。",
      "next": "s10_yelan_02"
    },
    "s10_yelan_02": {
      "id": "s10_yelan_02",
      "type": "line",
      "scene": "s10",
      "speaker": "narrator",
      "character": null,
      "text": "我往檐里挪了一步，把屏幕擦干。今晚先认真回一条，其他人的事，不会因此从我的生活里消失。",
      "next": "g_s10_signal"
    },
    "g_s10_signal": {
      "id": "g_s10_signal",
      "type": "gate",
      "scene": "s10",
      "cases": [
        {
          "flag": "qiuSignal",
          "value": "record",
          "next": "g_s10_reply"
        }
      ],
      "default": "c6"
    },
    "g_s10_reply": {
      "id": "g_s10_reply",
      "type": "gate",
      "scene": "s10",
      "cases": [
        {
          "flag": "qiuReply",
          "value": "reply",
          "next": "s10_anonymous_01"
        }
      ],
      "default": "c6"
    },
    "s10_anonymous_01": {
      "id": "s10_anonymous_01",
      "type": "line",
      "scene": "s10",
      "speaker": "narrator",
      "character": null,
      "text": "列表底端又亮起一个没有昵称的黄色头像。我想起维修本上被特意留宽的那处空隙，把屏幕凑近了些。",
      "next": "s10_anonymous_02"
    },
    "s10_anonymous_02": {
      "id": "s10_anonymous_02",
      "type": "line",
      "scene": "s10",
      "speaker": "陌生的声音",
      "character": null,
      "text": "那句没说完的话，我想接着说。接待结束以后，你愿意回来听吗？",
      "next": "c6"
    },
    "c6": {
      "id": "c6",
      "type": "choice",
      "scene": "s10",
      "character": null,
      "text": "今晚先回复谁，把这段话接下去？",
      "flag": "preview",
      "choices": [
        {
          "label": "回复小满，认真看她拿不准的作品。",
          "value": "xiaoman",
          "next": "preview_xiaoman_01"
        },
        {
          "label": "回复周栀，听听她今晚想说什么。",
          "value": "zhouzhi",
          "next": "preview_zhouzhi_01"
        },
        {
          "label": "回复孟遥，先回答那个没说清的问题。",
          "value": "mengyao",
          "next": "preview_mengyao_01"
        },
        {
          "label": "回复叶岚，陪她走一段不谈工作的路。",
          "value": "yelan",
          "next": "preview_yelan_01"
        },
        {
          "label": "回复那个黄色头像",
          "value": "huangqiuqiu",
          "next": "preview_qiu_01",
          "requires": [
            {
              "flag": "qiuSignal",
              "value": "record"
            },
            {
              "flag": "qiuReply",
              "value": "reply"
            }
          ]
        }
      ]
    },
    "preview_xiaoman_01": {
      "id": "preview_xiaoman_01",
      "type": "line",
      "scene": "s10",
      "speaker": "narrator",
      "character": null,
      "text": "我回了“发来”，把屏幕放大。",
      "next": "g_preview_xiaoman"
    },
    "preview_xiaoman_02": {
      "id": "preview_xiaoman_02",
      "type": "line",
      "scene": "s10",
      "speaker": "narrator",
      "character": null,
      "text": "过了一会儿，她发来一张作品夹的照片。那张不满意的图还在，旁边多了一行要补看的地方。",
      "next": "preview_xiaoman_03"
    },
    "preview_xiaoman_03": {
      "id": "preview_xiaoman_03",
      "type": "line",
      "scene": "s10",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "这页先留着。还有，你刚才挑的，不许明天装没说过。",
      "next": "preview_xiaoman_04"
    },
    "preview_xiaoman_04": {
      "id": "preview_xiaoman_04",
      "type": "line",
      "scene": "s10",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "记着呢。",
      "next": "preview_xiaoman_05"
    },
    "end_xiaoman": {
      "id": "end_xiaoman",
      "type": "end",
      "scene": "s10",
      "character": "xiaoman",
      "title": "镜子留了一个位置",
      "text": "她把不满意的图留在作品夹里，也给一个不来修东西的人留了位置。我第一次发现，自己想去那家店，并不全是因为她需要帮忙。",
      "nextChapter": "第二章 · 镜头没有拍到的：第11天开始拍摄，一段尚未审阅的样片将让大家重新讨论，谁有权讲述这里的生活。第15天再选择正式路线。",
      "next": "ch2_open_01"
    },
    "preview_zhouzhi_01": {
      "id": "preview_zhouzhi_01",
      "type": "line",
      "scene": "s10",
      "speaker": "narrator",
      "character": null,
      "text": "周栀发来冰柜铭牌。我看完照片，把看不出来、需要现场核的几项圈给她。",
      "next": "preview_zhouzhi_02"
    },
    "preview_zhouzhi_02": {
      "id": "preview_zhouzhi_02",
      "type": "line",
      "scene": "s10",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "现在只能先认型号，机器好不好还得看实物。你们决定要看了，再定时间。",
      "next": "preview_zhouzhi_03"
    },
    "preview_zhouzhi_03": {
      "id": "preview_zhouzhi_03",
      "type": "line",
      "scene": "s10",
      "speaker": "zhouzhi",
      "character": "zhouzhi",
      "text": "明白，我拿去跟她商量。工作先到这儿。",
      "next": "preview_zhouzhi_04"
    },
    "preview_zhouzhi_04": {
      "id": "preview_zhouzhi_04",
      "type": "line",
      "scene": "s10",
      "speaker": "narrator",
      "character": null,
      "text": "我以为她要说晚安，新的消息却比熄屏快了一步。",
      "next": "preview_zhouzhi_05"
    },
    "end_zhouzhi": {
      "id": "end_zhouzhi",
      "type": "end",
      "scene": "s10",
      "character": "zhouzhi",
      "title": "下一碗面，汤还热着",
      "text": "摊位还在比价，冰柜还没定。她把这些事放在一边，说想和我吃面。我也把“有事再找我”换成了“愿意”。下一碗汤还没端上来，这次邀约已经说清了。",
      "nextChapter": "第二章 · 镜头没有拍到的：第11天开始拍摄，一段尚未审阅的样片将让大家重新讨论，谁有权讲述这里的生活。第15天再选择正式路线。",
      "next": "ch2_open_01"
    },
    "preview_mengyao_01": {
      "id": "preview_mengyao_01",
      "type": "line",
      "scene": "s10",
      "speaker": "narrator",
      "character": null,
      "text": "我回她：“现在方便。”她没有发工作表，也没有打来需要立刻接起的电话。",
      "next": "preview_mengyao_02"
    },
    "preview_mengyao_02": {
      "id": "preview_mengyao_02",
      "type": "line",
      "scene": "s10",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "你那天不回消息，是没有答案，还是不想让我知道答案？",
      "next": "g_preview_mengyao"
    },
    "end_mengyao": {
      "id": "end_mengyao",
      "type": "end",
      "scene": "s10",
      "character": "mengyao",
      "title": "镜头之外的约定",
      "text": "那句回答留在对话框里，我没有撤回。她没说“没关系”，我也没有把她的回复当成原谅。雨水落到檐外，手机暗下去；这次，说出口的话还在。",
      "nextChapter": "第二章 · 镜头没有拍到的：第11天开始拍摄，一段尚未审阅的样片将让大家重新讨论，谁有权讲述这里的生活。第15天再选择正式路线。",
      "next": "ch2_open_01"
    },
    "preview_yelan_01": {
      "id": "preview_yelan_01",
      "type": "line",
      "scene": "s10",
      "speaker": "narrator",
      "character": null,
      "text": "我回了“还在”。叶岚从门里出来，把补过工时的那张表压进夹板。最下面一行，她的名字和别人的写在一起。",
      "next": "g_preview_yelan"
    },
    "preview_yelan_02": {
      "id": "preview_yelan_02",
      "type": "line",
      "scene": "s10",
      "speaker": "narrator",
      "character": null,
      "text": "钥匙在她指间碰了两声。我刚想问设备租赁表，她抬起手。",
      "next": "preview_yelan_03"
    },
    "preview_yelan_03": {
      "id": "preview_yelan_03",
      "type": "line",
      "scene": "s10",
      "speaker": "yelan",
      "character": "yelan",
      "text": "那张明天再说。今天看够数字了。",
      "next": "preview_yelan_04"
    },
    "preview_yelan_04": {
      "id": "preview_yelan_04",
      "type": "line",
      "scene": "s10",
      "speaker": "narrator",
      "character": null,
      "text": "她走到檐边，又回头看了一眼大厅。",
      "next": "preview_yelan_05"
    },
    "end_yelan": {
      "id": "end_yelan",
      "type": "end",
      "scene": "s10",
      "character": "yelan",
      "title": "把自己的名字也写上",
      "text": "路口到了，租赁表还在包里。她把伞转向另一边，我没有追着把工作说完。今晚有一小段路，不用等谁叫她的名字，她也可以自己选着走。",
      "nextChapter": "第二章 · 镜头没有拍到的：第11天开始拍摄，一段尚未审阅的样片将让大家重新讨论，谁有权讲述这里的生活。第15天再选择正式路线。",
      "next": "ch2_open_01",
      "bg": "slope_junction_night",
      "location": "老街岔路口"
    },
    "preview_qiu_01": {
      "id": "preview_qiu_01",
      "type": "line",
      "scene": "s10",
      "speaker": "narrator",
      "character": null,
      "text": "我回了句“你还在吗”。黄色头像发来一个包厢号码，后面跟着“别带观众”。",
      "next": "preview_qiu_02",
      "bg": "room",
      "location": "回声 · 已结束接待的空包厢"
    },
    "preview_qiu_02": {
      "id": "preview_qiu_02",
      "type": "line",
      "scene": "s10",
      "speaker": "narrator",
      "character": null,
      "text": "我问叶岚，能不能在收钥匙前回空包厢待几分钟。她确认接待已经结束，给我留了五分钟。我把湿伞靠在门外，推开门。",
      "next": "preview_qiu_03",
      "bg": "room",
      "location": "回声 · 已结束接待的空包厢"
    },
    "preview_qiu_03": {
      "id": "preview_qiu_03",
      "type": "line",
      "scene": "s10",
      "speaker": "narrator",
      "character": null,
      "text": "调音台旁，一个黄色圆球缓缓转过来。深色眉毛向下垂着，大圆眼看着我，短红嘴抿成一小道，两只小手托着腮。我的手下意识摸向口袋里的螺丝刀。",
      "next": "preview_qiu_04",
      "bg": "room",
      "location": "回声 · 已结束接待的空包厢"
    },
    "preview_qiu_04": {
      "id": "preview_qiu_04",
      "type": "line",
      "scene": "s10",
      "speaker": "陌生的声音",
      "character": null,
      "text": "眉毛没坏，放回去。你们第一次见谁，都先找能拧的地方吗？",
      "next": "preview_qiu_05",
      "bg": "room",
      "location": "回声 · 已结束接待的空包厢"
    },
    "preview_qiu_05": {
      "id": "preview_qiu_05",
      "type": "line",
      "scene": "s10",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "抱歉。我是来听那句话的。就是没想到，说话的会坐在这里。",
      "next": "preview_qiu_06",
      "bg": "room",
      "location": "回声 · 已结束接待的空包厢"
    },
    "preview_qiu_06": {
      "id": "preview_qiu_06",
      "type": "line",
      "scene": "s10",
      "speaker": "narrator",
      "character": null,
      "text": "我把手摊开，螺丝刀留在口袋里。她盯了两秒，才挪开一只托腮的小手，指指旁边的椅子。",
      "next": "preview_qiu_07",
      "bg": "room",
      "location": "回声 · 已结束接待的空包厢"
    },
    "preview_qiu_07": {
      "id": "preview_qiu_07",
      "type": "line",
      "scene": "s10",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "我先问一句。你需要我帮什么？",
      "next": "preview_qiu_08",
      "bg": "room",
      "location": "回声 · 已结束接待的空包厢"
    },
    "preview_qiu_08": {
      "id": "preview_qiu_08",
      "type": "line",
      "scene": "s10",
      "speaker": "陌生的声音",
      "character": null,
      "text": "先别修。我叫黄球球，女性，自称二十四岁。成年这件事不用猜，也不用翻底下找出厂日期。",
      "next": "preview_qiu_09",
      "bg": "room",
      "location": "回声 · 已结束接待的空包厢"
    },
    "preview_qiu_09": {
      "id": "preview_qiu_09",
      "type": "line",
      "scene": "s10",
      "speaker": "huangqiuqiu",
      "character": "huangqiuqiu",
      "text": "至于要你帮什么，先别把我填进设备表。我想说的话，和那台机器的毛病不是一回事。",
      "next": "preview_qiu_10",
      "bg": "room",
      "location": "回声 · 已结束接待的空包厢"
    },
    "preview_qiu_10": {
      "id": "preview_qiu_10",
      "type": "line",
      "scene": "s10",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "我叫文文。表收起来了，你接着说。",
      "next": "preview_qiu_11",
      "bg": "room",
      "location": "回声 · 已结束接待的空包厢"
    },
    "preview_qiu_11": {
      "id": "preview_qiu_11",
      "type": "line",
      "scene": "s10",
      "speaker": "huangqiuqiu",
      "character": "huangqiuqiu",
      "text": "文文。行，名字比“维修那个”好记。椅子给你留着，不收费，坐下的时候别把布也披上。",
      "next": "preview_qiu_12",
      "bg": "room",
      "location": "回声 · 已结束接待的空包厢"
    },
    "preview_qiu_12": {
      "id": "preview_qiu_12",
      "type": "line",
      "scene": "s10",
      "speaker": "narrator",
      "character": null,
      "text": "我把布叠到椅背上，拉开椅子坐下。她仍托着腮，圆球轻轻偏过来，看我坐稳。",
      "next": "preview_qiu_13",
      "bg": "room",
      "location": "回声 · 已结束接待的空包厢",
      "cg": "cg08"
    },
    "preview_qiu_13": {
      "id": "preview_qiu_13",
      "type": "line",
      "scene": "s10",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "柜台那天，你说“能不能，先让我说”。我记到这里。后半句是什么？",
      "next": "preview_qiu_14",
      "bg": "room",
      "location": "回声 · 已结束接待的空包厢",
      "cg": "cg08"
    },
    "preview_qiu_14": {
      "id": "preview_qiu_14",
      "type": "line",
      "scene": "s10",
      "speaker": "huangqiuqiu",
      "character": "huangqiuqiu",
      "text": "能不能先让我说完，再决定要不要修。就这一句。听起来不长，我却老在“说”字后面被盖过去。",
      "next": "preview_qiu_15",
      "bg": "room",
      "location": "回声 · 已结束接待的空包厢",
      "cg": "cg08"
    },
    "preview_qiu_15": {
      "id": "preview_qiu_15",
      "type": "line",
      "scene": "s10",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "听完了。维修本先合上，你接着说。",
      "next": "preview_qiu_16",
      "bg": "room",
      "location": "回声 · 已结束接待的空包厢",
      "cg": "cg08"
    },
    "preview_qiu_16": {
      "id": "preview_qiu_16",
      "type": "line",
      "scene": "s10",
      "speaker": "huangqiuqiu",
      "character": "huangqiuqiu",
      "text": "这就顺眼多了。还有，你坐下以后没挡住那盏灯。",
      "next": "preview_qiu_17",
      "bg": "room",
      "location": "回声 · 已结束接待的空包厢",
      "cg": "cg08"
    },
    "preview_qiu_17": {
      "id": "preview_qiu_17",
      "type": "line",
      "scene": "s10",
      "speaker": "narrator",
      "character": null,
      "text": "我没有抢着接话。门外有人收走水桶，她等那阵响动过去，才重新看向我。",
      "next": "preview_qiu_18",
      "bg": "room",
      "location": "回声 · 已结束接待的空包厢",
      "cg": "cg08"
    },
    "preview_qiu_18": {
      "id": "preview_qiu_18",
      "type": "line",
      "scene": "s10",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "我刚才还以为，你想让我……",
      "next": "preview_qiu_19",
      "bg": "room",
      "location": "回声 · 已结束接待的空包厢",
      "cg": "cg08"
    },
    "preview_qiu_19": {
      "id": "preview_qiu_19",
      "type": "line",
      "scene": "s10",
      "speaker": "huangqiuqiu",
      "character": "huangqiuqiu",
      "text": "让我什么？后面没说，我听不见。别看着我，好像答案贴在我眉毛上。",
      "next": "preview_qiu_20",
      "bg": "room",
      "location": "回声 · 已结束接待的空包厢",
      "cg": "cg08"
    },
    "preview_qiu_20": {
      "id": "preview_qiu_20",
      "type": "line",
      "scene": "s10",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "我把那半句话想了一遍。她没催，只用小手换了一边托腮。椅子被我坐得吱了一声。",
      "next": "preview_qiu_21",
      "bg": "room",
      "location": "回声 · 已结束接待的空包厢",
      "expression": "expression-hesitant"
    },
    "preview_qiu_21": {
      "id": "preview_qiu_21",
      "type": "line",
      "scene": "s10",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "你是不是能听见我在想什么？刚才那三拍，又像是早知道我会敲。",
      "next": "preview_qiu_22",
      "bg": "room",
      "location": "回声 · 已结束接待的空包厢"
    },
    "preview_qiu_22": {
      "id": "preview_qiu_22",
      "type": "line",
      "scene": "s10",
      "speaker": "huangqiuqiu",
      "character": "huangqiuqiu",
      "text": "不能。你敲了，我才接；你说出口、还没讲完的话，我能听见。没说出来的，我不知道。你现在又皱眉，是嫌椅子硬还是别的，我也只能猜。",
      "next": "preview_qiu_23",
      "bg": "room",
      "location": "回声 · 已结束接待的空包厢"
    },
    "preview_qiu_23": {
      "id": "preview_qiu_23",
      "type": "line",
      "scene": "s10",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "那我补上。我以为你要我拆开机器，找出一个能解释你的零件。现在想问的是，你为什么留在这里？",
      "next": "preview_qiu_24",
      "bg": "room",
      "location": "回声 · 已结束接待的空包厢"
    },
    "preview_qiu_24": {
      "id": "preview_qiu_24",
      "type": "line",
      "scene": "s10",
      "speaker": "huangqiuqiu",
      "character": "huangqiuqiu",
      "text": "这个问题，我今天还不想答。你可以先记住我的名字，别忙着替我写来历。我也没问你为什么一副刚淋完雨的插头的样子。",
      "next": "preview_qiu_25",
      "bg": "room",
      "location": "回声 · 已结束接待的空包厢",
      "expression": "expression-serious"
    },
    "preview_qiu_25": {
      "id": "preview_qiu_25",
      "type": "line",
      "scene": "s10",
      "speaker": "narrator",
      "character": null,
      "text": "我点头。她把我的名字低低念了一次，像确认自己听清了。我也跟着念了一遍她的，直到她抬起眼。",
      "next": "preview_qiu_26",
      "bg": "room",
      "location": "回声 · 已结束接待的空包厢"
    },
    "preview_qiu_26": {
      "id": "preview_qiu_26",
      "type": "line",
      "scene": "s10",
      "speaker": "narrator",
      "character": null,
      "text": "门外传来收钥匙的声音，我起身把椅子扶正。“下次来，我先问你还想不想聊。”她松开一只托腮的小手，没有跟着往门口挪。",
      "next": "preview_qiu_27",
      "bg": "room",
      "location": "回声 · 已结束接待的空包厢"
    },
    "preview_qiu_27": {
      "id": "preview_qiu_27",
      "type": "line",
      "scene": "s10",
      "speaker": "huangqiuqiu",
      "character": "huangqiuqiu",
      "text": "想。文文，如果有一天雨停了，你还会听见我吗？",
      "next": "end_huangqiuqiu",
      "bg": "room",
      "location": "回声 · 已结束接待的空包厢",
      "expression": "expression-hesitant"
    },
    "end_huangqiuqiu": {
      "id": "end_huangqiuqiu",
      "type": "end",
      "scene": "s10",
      "character": "huangqiuqiu",
      "title": "你终于听我说完",
      "text": "我起身时，她仍托着腮。那句断在杂音里的话，今晚有了完整的后半句。门外的雨还在下。我记住了一个名字，也留下了一个还答不了的问题。",
      "nextChapter": "第二章 · 镜头没有拍到的：第11天开始拍摄，一段尚未审阅的样片将让大家重新讨论，谁有权讲述这里的生活。第15天再选择正式路线。",
      "bg": "room",
      "location": "回声 · 已结束接待的空包厢",
      "next": "ch2_open_01"
    },
    "s10_messages_03": {
      "id": "s10_messages_03",
      "type": "line",
      "scene": "s10",
      "speaker": "narrator",
      "character": null,
      "text": "手机接连亮起。小满先发来消息，头像旁挂着一个剪刀表情。",
      "next": "g_s10_salon"
    },
    "preview_xiaoman_05": {
      "id": "preview_xiaoman_05",
      "type": "line",
      "scene": "s10",
      "speaker": "narrator",
      "character": null,
      "text": "照片边缘照到半面镜子和一把空椅子。她没再用贴纸把没做好的地方盖起来。",
      "next": "preview_xiaoman_visit_01"
    },
    "g_preview_xiaoman": {
      "id": "g_preview_xiaoman",
      "type": "gate",
      "scene": "s10",
      "cases": [
        {
          "flag": "salon",
          "value": "portfolio",
          "next": "preview_xiaoman_portfolio_01"
        }
      ],
      "default": "preview_xiaoman_model_01"
    },
    "preview_xiaoman_portfolio_01": {
      "id": "preview_xiaoman_portfolio_01",
      "type": "line",
      "scene": "s10",
      "speaker": "narrator",
      "character": null,
      "text": "她传来的不是群里那页。最下方一张照片被揭下又贴回去，边缘留着一小圈胶印。",
      "next": "preview_xiaoman_portfolio_02"
    },
    "preview_xiaoman_portfolio_02": {
      "id": "preview_xiaoman_portfolio_02",
      "type": "line",
      "scene": "s10",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "这张后面不够整齐，但确实是我做的。放进去怕丢人，删掉又像我只会挑灯光。",
      "next": "preview_xiaoman_portfolio_03"
    },
    "preview_xiaoman_portfolio_03": {
      "id": "preview_xiaoman_portfolio_03",
      "type": "line",
      "scene": "s10",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "先别删。我能看出前后变了哪里，可第三张侧面太暗，我看不清。要补拍的应该是这张。",
      "next": "preview_xiaoman_portfolio_04"
    },
    "preview_xiaoman_portfolio_04": {
      "id": "preview_xiaoman_portfolio_04",
      "type": "line",
      "scene": "s10",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "原来真能比“挺好”多说几个字。",
      "next": "preview_xiaoman_portfolio_05"
    },
    "preview_xiaoman_portfolio_05": {
      "id": "preview_xiaoman_portfolio_05",
      "type": "line",
      "scene": "s10",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "你还要我挑吗？",
      "next": "preview_xiaoman_portfolio_06"
    },
    "preview_xiaoman_portfolio_06": {
      "id": "preview_xiaoman_portfolio_06",
      "type": "line",
      "scene": "s10",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "要。等会儿，我把原图发你。",
      "next": "preview_xiaoman_02"
    },
    "preview_xiaoman_model_01": {
      "id": "preview_xiaoman_model_01",
      "type": "line",
      "scene": "s10",
      "speaker": "narrator",
      "character": null,
      "text": "她把我的后脑勺发过来，在一处过渡上画了圈。那是她剪完后请师傅复核的地方。",
      "next": "preview_xiaoman_model_02"
    },
    "preview_xiaoman_model_02": {
      "id": "preview_xiaoman_model_02",
      "type": "line",
      "scene": "s10",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "后来照镜子，这里是不是还显得硬？你别怕我不高兴，先说看见什么。",
      "next": "preview_xiaoman_model_03"
    },
    "preview_xiaoman_model_03": {
      "id": "preview_xiaoman_model_03",
      "type": "line",
      "scene": "s10",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "正面看不出来。这张侧后面有一道，但另一张没有。光太不一样，我不能硬说是你没剪好。",
      "next": "preview_xiaoman_model_04"
    },
    "preview_xiaoman_model_04": {
      "id": "preview_xiaoman_model_04",
      "type": "line",
      "scene": "s10",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "我就卡在这里。想再练，又怕把能看的地方越修越短。",
      "next": "preview_xiaoman_model_05"
    },
    "preview_xiaoman_model_05": {
      "id": "preview_xiaoman_model_05",
      "type": "line",
      "scene": "s10",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "这次先把光拍一样，再比？至少别让我的头一张圆、一张方。",
      "next": "preview_xiaoman_model_06"
    },
    "preview_xiaoman_model_06": {
      "id": "preview_xiaoman_model_06",
      "type": "line",
      "scene": "s10",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "行。下次只比图，你先不用英勇就座。",
      "next": "preview_xiaoman_02"
    },
    "preview_zhouzhi_05": {
      "id": "preview_zhouzhi_05",
      "type": "line",
      "scene": "s10",
      "speaker": "zhouzhi",
      "character": "zhouzhi",
      "text": "刚才说的是工作。吃面那件事，是我想约你。",
      "next": "g_preview_zhouzhi"
    },
    "preview_zhouzhi_06": {
      "id": "preview_zhouzhi_06",
      "type": "line",
      "scene": "s10",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "愿意。我也想见你。下次我来约时间，工具包先放家里。",
      "next": "preview_zhouzhi_07"
    },
    "preview_zhouzhi_07": {
      "id": "preview_zhouzhi_07",
      "type": "line",
      "scene": "s10",
      "speaker": "zhouzhi",
      "character": "zhouzhi",
      "text": "对，凳子给人坐。",
      "next": "preview_zhouzhi_08"
    },
    "preview_zhouzhi_08": {
      "id": "preview_zhouzhi_08",
      "type": "line",
      "scene": "s10",
      "speaker": "narrator",
      "character": null,
      "text": "她发来一个面碗的表情。下面没有再跟设备照片，我也没接着往上翻那张铭牌。",
      "next": "end_zhouzhi"
    },
    "g_preview_zhouzhi": {
      "id": "g_preview_zhouzhi",
      "type": "gate",
      "scene": "s10",
      "cases": [
        {
          "flag": "noodles",
          "value": "invite",
          "next": "preview_zhouzhi_invite_01"
        }
      ],
      "default": "preview_zhouzhi_space_01"
    },
    "preview_zhouzhi_invite_01": {
      "id": "preview_zhouzhi_invite_01",
      "type": "line",
      "scene": "s10",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "这回也能吃到一半不说话？",
      "next": "preview_zhouzhi_invite_02"
    },
    "preview_zhouzhi_invite_02": {
      "id": "preview_zhouzhi_invite_02",
      "type": "line",
      "scene": "s10",
      "speaker": "zhouzhi",
      "character": "zhouzhi",
      "text": "能。不过辣了就喝水，别再说替老板省洗壶。",
      "next": "preview_zhouzhi_06"
    },
    "preview_zhouzhi_space_01": {
      "id": "preview_zhouzhi_space_01",
      "type": "line",
      "scene": "s10",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "第六天是你约，这次又让你先开口了。",
      "next": "preview_zhouzhi_space_02"
    },
    "preview_zhouzhi_space_02": {
      "id": "preview_zhouzhi_space_02",
      "type": "line",
      "scene": "s10",
      "speaker": "zhouzhi",
      "character": "zhouzhi",
      "text": "我想约就约了。你愿不愿意，还是得你说。",
      "next": "preview_zhouzhi_06"
    },
    "g_preview_mengyao": {
      "id": "g_preview_mengyao",
      "type": "gate",
      "scene": "s10",
      "cases": [
        {
          "flag": "reunion",
          "value": "apologize",
          "next": "preview_mengyao_apologize_01"
        },
        {
          "flag": "reunion",
          "value": "appointment",
          "next": "preview_mengyao_appointment_01"
        }
      ],
      "default": "preview_mengyao_joke_01"
    },
    "preview_mengyao_apologize_01": {
      "id": "preview_mengyao_apologize_01",
      "type": "line",
      "scene": "s10",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "上次说怕答不上，是真的。但我看到了消息，也知道你在等。我只是更想躲过那场谈话。",
      "next": "preview_mengyao_apologize_02"
    },
    "preview_mengyao_apologize_02": {
      "id": "preview_mengyao_apologize_02",
      "type": "line",
      "scene": "s10",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "这次的票也早买了。又是在等事情确定了，才觉得可以告诉别人？",
      "next": "preview_mengyao_apologize_03"
    },
    "preview_mengyao_apologize_03": {
      "id": "preview_mengyao_apologize_03",
      "type": "line",
      "scene": "s10",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "是。工作没结果，就想假装还用不着说。今天才把这件事讲出来，不能算我以前没有瞒着。",
      "next": "preview_mengyao_apologize_04"
    },
    "preview_mengyao_apologize_04": {
      "id": "preview_mengyao_apologize_04",
      "type": "line",
      "scene": "s10",
      "speaker": "narrator",
      "character": null,
      "text": "她隔了好一会儿才回。那几秒，我没补一个笑脸，也没问她是不是生气了。",
      "next": "preview_mengyao_apologize_05"
    },
    "preview_mengyao_apologize_05": {
      "id": "preview_mengyao_apologize_05",
      "type": "line",
      "scene": "s10",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "这句我需要想想。你说清了，我也不会马上就不难受。",
      "next": "preview_mengyao_apologize_06"
    },
    "preview_mengyao_apologize_06": {
      "id": "preview_mengyao_apologize_06",
      "type": "line",
      "scene": "s10",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "好。",
      "next": "end_mengyao"
    },
    "preview_mengyao_appointment_01": {
      "id": "preview_mengyao_appointment_01",
      "type": "line",
      "scene": "s10",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "是不想让你知道。我没有一个让自己满意的答案，就连“我可能会走”也不肯告诉你，让你一直等。",
      "next": "preview_mengyao_appointment_02"
    },
    "preview_mengyao_appointment_02": {
      "id": "preview_mengyao_appointment_02",
      "type": "line",
      "scene": "s10",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "这句你当时也可以说。",
      "next": "preview_mengyao_appointment_03"
    },
    "preview_mengyao_appointment_03": {
      "id": "preview_mengyao_appointment_03",
      "type": "line",
      "scene": "s10",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "是。所以现在不该再把它拖到见面那天。对不起。",
      "next": "preview_mengyao_appointment_04"
    },
    "preview_mengyao_appointment_04": {
      "id": "preview_mengyao_appointment_04",
      "type": "line",
      "scene": "s10",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "这句先留着。我们定好的那段时间照旧，剩下的当面说。",
      "next": "preview_mengyao_appointment_05"
    },
    "preview_mengyao_appointment_05": {
      "id": "preview_mengyao_appointment_05",
      "type": "line",
      "scene": "s10",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "照旧。",
      "next": "preview_mengyao_appointment_06"
    },
    "preview_mengyao_appointment_06": {
      "id": "preview_mengyao_appointment_06",
      "type": "line",
      "scene": "s10",
      "speaker": "narrator",
      "character": null,
      "text": "我看了一眼已经留出的空档，没有又发一遍截图。时间早就确认了，今晚终于多了一句回答。",
      "next": "end_mengyao"
    },
    "preview_mengyao_joke_01": {
      "id": "preview_mengyao_joke_01",
      "type": "line",
      "scene": "s10",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "是不想让你知道。我以为不回答，就暂时不用承认自己可能会走。那天拿老同学开玩笑，也是在躲。对不起。",
      "next": "preview_mengyao_joke_02"
    },
    "preview_mengyao_joke_02": {
      "id": "preview_mengyao_joke_02",
      "type": "line",
      "scene": "s10",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "这是你第一次答这个问题。",
      "next": "preview_mengyao_joke_03"
    },
    "preview_mengyao_joke_03": {
      "id": "preview_mengyao_joke_03",
      "type": "line",
      "scene": "s10",
      "speaker": "narrator",
      "character": null,
      "text": "我差点接一句“迟到总比缺席好”，打出两个字，又全删掉。",
      "next": "preview_mengyao_joke_04"
    },
    "preview_mengyao_joke_04": {
      "id": "preview_mengyao_joke_04",
      "type": "line",
      "scene": "s10",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "嗯。你那时等了很久。",
      "next": "preview_mengyao_joke_05"
    },
    "preview_mengyao_joke_05": {
      "id": "preview_mengyao_joke_05",
      "type": "line",
      "scene": "s10",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "我看到了。今晚先到这里吧。",
      "next": "preview_mengyao_joke_06"
    },
    "preview_mengyao_joke_06": {
      "id": "preview_mengyao_joke_06",
      "type": "line",
      "scene": "s10",
      "speaker": "narrator",
      "character": null,
      "text": "我回了“好”，没有趁她还在线，把下一次见面也追问出来。",
      "next": "end_mengyao"
    },
    "preview_yelan_05": {
      "id": "preview_yelan_05",
      "type": "line",
      "scene": "s10",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "忘东西了？",
      "next": "preview_yelan_06"
    },
    "preview_yelan_06": {
      "id": "preview_yelan_06",
      "type": "line",
      "scene": "s10",
      "speaker": "yelan",
      "character": "yelan",
      "text": "没有。就是总觉得，还该有个人叫我。",
      "next": "preview_yelan_07"
    },
    "preview_yelan_07": {
      "id": "preview_yelan_07",
      "type": "line",
      "scene": "s10",
      "speaker": "narrator",
      "character": null,
      "text": "门里安静着。她把钥匙放进包底，拉上拉链，手终于空下来。",
      "next": "preview_yelan_08"
    },
    "preview_yelan_08": {
      "id": "preview_yelan_08",
      "type": "line",
      "scene": "s10",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "我陪你走到坡口？",
      "next": "preview_yelan_09"
    },
    "preview_yelan_09": {
      "id": "preview_yelan_09",
      "type": "line",
      "scene": "s10",
      "speaker": "yelan",
      "character": "yelan",
      "text": "到路口吧。后面那段，我想自己慢慢走。",
      "next": "preview_yelan_10"
    },
    "preview_yelan_10": {
      "id": "preview_yelan_10",
      "type": "line",
      "scene": "s10",
      "speaker": "narrator",
      "character": null,
      "text": "她撑开伞，走了两步，又回头等我收好工具包。到了路口，她看看两边，没有先去摸手机。",
      "next": "preview_yelan_11",
      "cg": "cg07",
      "bg": "slope_junction_night",
      "location": "老街岔路口"
    },
    "preview_yelan_11": {
      "id": "preview_yelan_11",
      "type": "line",
      "scene": "s10",
      "speaker": "yelan",
      "character": "yelan",
      "text": "我再走一会儿。你到家也早点歇。",
      "next": "preview_yelan_private_01",
      "bg": "slope_junction_night",
      "location": "老街岔路口"
    },
    "g_preview_yelan": {
      "id": "g_preview_yelan",
      "type": "gate",
      "scene": "s10",
      "cases": [
        {
          "flag": "inventory",
          "value": "full",
          "next": "preview_yelan_full_01"
        }
      ],
      "default": "preview_yelan_limited_01"
    },
    "preview_yelan_full_01": {
      "id": "preview_yelan_full_01",
      "type": "line",
      "scene": "s10",
      "speaker": "yelan",
      "character": "yelan",
      "text": "你求职材料后来弄完了？",
      "next": "preview_yelan_full_02"
    },
    "preview_yelan_full_02": {
      "id": "preview_yelan_full_02",
      "type": "line",
      "scene": "s10",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "昨晚弄完的。翻了半天旧单，再看自己的名字都差点想找柜号。",
      "next": "preview_yelan_full_03"
    },
    "preview_yelan_full_03": {
      "id": "preview_yelan_full_03",
      "type": "line",
      "scene": "s10",
      "speaker": "narrator",
      "character": null,
      "text": "她笑了一下，把我们一起翻过的那叠纸压平，连夹板一起收进包里。",
      "next": "preview_yelan_02"
    },
    "preview_yelan_limited_01": {
      "id": "preview_yelan_limited_01",
      "type": "line",
      "scene": "s10",
      "speaker": "narrator",
      "character": null,
      "text": "同事从里面示意，最后那页已经放回柜里。叶岚抬了抬手，像还要接过来，最后只点了一下头。",
      "next": "preview_yelan_limited_02"
    },
    "preview_yelan_limited_02": {
      "id": "preview_yelan_limited_02",
      "type": "line",
      "scene": "s10",
      "speaker": "yelan",
      "character": "yelan",
      "text": "好，明天再看。",
      "next": "preview_yelan_limited_03"
    },
    "preview_yelan_limited_03": {
      "id": "preview_yelan_limited_03",
      "type": "line",
      "scene": "s10",
      "speaker": "narrator",
      "character": null,
      "text": "她把夹板收进包。这次没有站在门口再核一次。",
      "next": "preview_yelan_02"
    },
    "s5_bg_xiaoman_01": {
      "id": "s5_bg_xiaoman_01",
      "type": "line",
      "scene": "s5",
      "speaker": "narrator",
      "character": null,
      "text": "作品夹摊开在最前面。那几页没有好看的发型，记的全是洗护顺序和歪歪扭扭的分区图。",
      "next": "s5_bg_xiaoman_02"
    },
    "s5_bg_xiaoman_02": {
      "id": "s5_bg_xiaoman_02",
      "type": "line",
      "scene": "s5",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "这几页也是作品？",
      "next": "s5_bg_xiaoman_03"
    },
    "s5_bg_xiaoman_03": {
      "id": "s5_bg_xiaoman_03",
      "type": "line",
      "scene": "s5",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "刚进店只会洗头、递毛巾，就先记这些。收工看师傅剪过的头，回去再画，第二天问哪里看错了。",
      "next": "s5_bg_xiaoman_04",
      "expression": "expression-smile"
    },
    "s5_bg_xiaoman_04": {
      "id": "s5_bg_xiaoman_04",
      "type": "line",
      "scene": "s5",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "难怪你说想自己剪完。",
      "next": "s5_bg_xiaoman_05"
    },
    "s5_bg_xiaoman_05": {
      "id": "s5_bg_xiaoman_05",
      "type": "line",
      "scene": "s5",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "嗯。后面得有一页，从第一刀到最后整理，都是我做的。现在还不够，先别替我鼓掌。",
      "next": "g_s5_ride",
      "expression": "expression-hesitant"
    },
    "s6_bg_zhouzhi_01": {
      "id": "s6_bg_zhouzhi_01",
      "type": "line",
      "scene": "s6",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "背面怎么还写着两个人的饭量？",
      "next": "s6_bg_zhouzhi_02"
    },
    "s6_bg_zhouzhi_02": {
      "id": "s6_bg_zhouzhi_02",
      "type": "line",
      "scene": "s6",
      "speaker": "zhouzhi",
      "character": "zhouzhi",
      "text": "这张原来记给自己。以前下夜班，朋友有时等我一起吃。她开火，我切菜，饿得听洋芋下锅都觉得好听。",
      "next": "s6_bg_zhouzhi_03",
      "expression": "expression-smile"
    },
    "s6_bg_zhouzhi_03": {
      "id": "s6_bg_zhouzhi_03",
      "type": "line",
      "scene": "s6",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "夜宵摊是那时候想的？",
      "next": "s6_bg_zhouzhi_04"
    },
    "s6_bg_zhouzhi_04": {
      "id": "s6_bg_zhouzhi_04",
      "type": "line",
      "scene": "s6",
      "speaker": "zhouzhi",
      "character": "zhouzhi",
      "text": "嗯。想给晚收工的人做口热的，也给自己找份想试的活。两个人吃着好，不代表能开摊，所以才得试。",
      "next": "s6_bg_zhouzhi_05"
    },
    "s6_bg_zhouzhi_05": {
      "id": "s6_bg_zhouzhi_05",
      "type": "line",
      "scene": "s6",
      "speaker": "narrator",
      "character": null,
      "text": "纸背写着划掉又添上的分量，翻到正面才是租金。她抹平折痕，把两面一起留在桌上。",
      "next": "s6_plan_04"
    },
    "s7_bg_mengyao_01": {
      "id": "s7_bg_mengyao_01",
      "type": "line",
      "scene": "s7",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "你还拍这条街？以前替你举灯那回，胳膊酸了两天。",
      "next": "s7_bg_mengyao_02"
    },
    "s7_bg_mengyao_02": {
      "id": "s7_bg_mengyao_02",
      "type": "line",
      "scene": "s7",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "还拍。那会儿自己找店主问能不能拍，现在也接短视频的活。那盏灯我还留着，夹子换过了。",
      "next": "s7_bg_mengyao_03",
      "expression": "expression-smile"
    },
    "s7_bg_mengyao_03": {
      "id": "s7_bg_mengyao_03",
      "type": "line",
      "scene": "s7",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "你最早那几段，我还存着。",
      "next": "s7_bg_mengyao_04"
    },
    "s7_bg_mengyao_04": {
      "id": "s7_bg_mengyao_04",
      "type": "line",
      "scene": "s7",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "别删。我自己看会挑出一堆毛病，可也有后来赶着交片时，没耐心再等的东西。",
      "next": "s7_camera_05",
      "expression": "expression-hesitant"
    },
    "s8_bg_yelan_01": {
      "id": "s8_bg_yelan_01",
      "type": "line",
      "scene": "s8",
      "speaker": "narrator",
      "character": null,
      "text": "夹板底下露出一张起毛的旧纸，写着开门、接待和换班的顺序。字挤在一起，与新表上利落的几笔不太像。",
      "next": "s8_bg_yelan_02"
    },
    "s8_bg_yelan_02": {
      "id": "s8_bg_yelan_02",
      "type": "line",
      "scene": "s8",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "这张也跟设备一起清？",
      "next": "s8_bg_yelan_03"
    },
    "s8_bg_yelan_03": {
      "id": "s8_bg_yelan_03",
      "type": "line",
      "scene": "s8",
      "speaker": "yelan",
      "character": "yelan",
      "text": "留着。刚接领班那阵写的，先开哪扇门、接班问谁，怕漏掉。后来记住了，也没扔。",
      "next": "s8_bg_yelan_04",
      "expression": "expression-smile"
    },
    "s8_bg_yelan_04": {
      "id": "s8_bg_yelan_04",
      "type": "line",
      "scene": "s8",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "难怪现在钥匙都往你这儿放。",
      "next": "s8_bg_yelan_05"
    },
    "s8_bg_yelan_05": {
      "id": "s8_bg_yelan_05",
      "type": "line",
      "scene": "s8",
      "speaker": "yelan",
      "character": "yelan",
      "text": "一开始我接得快。后来人一喊“叶岚”，我还没听清什么事，手就伸出去了。",
      "next": "s8_count_06",
      "expression": "expression-hesitant"
    },
    "s9_title_01": {
      "id": "s9_title_01",
      "type": "line",
      "scene": "s9",
      "speaker": "maolang",
      "character": "maolang",
      "text": "我想了个片名：《最后一夜，回声不灭》。怎么样，有没有大制作的感觉？",
      "next": "s9_title_02",
      "expression": "expression-smile"
    },
    "s9_title_02": {
      "id": "s9_title_02",
      "type": "line",
      "scene": "s9",
      "speaker": "zhouzhi",
      "character": "zhouzhi",
      "text": "像夜宵摊转让。再加一句“设备齐全，接手就赚”，就能贴门口了。",
      "next": "s9_title_03",
      "expression": "expression-smile"
    },
    "s9_title_03": {
      "id": "s9_title_03",
      "type": "line",
      "scene": "s9",
      "speaker": "narrator",
      "character": null,
      "text": "小满在群里回了个剪刀：“我们店上个月周年庆，也差不多这个口气。”",
      "next": "s9_title_04"
    },
    "s9_title_04": {
      "id": "s9_title_04",
      "type": "line",
      "scene": "s9",
      "speaker": "maolang",
      "character": "maolang",
      "text": "行，文艺指导两位，刚才的意见我都记了。到时候字幕别嫌名字小。",
      "next": "s9_title_05",
      "expression": "expression-surprised"
    },
    "s9_title_05": {
      "id": "s9_title_05",
      "type": "line",
      "scene": "s9",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "先留着这段。不是片名，是你们说起这里时这个样子。正式拍的时候也别突然坐得像开会。",
      "next": "s9_title_06",
      "expression": "expression-smile"
    },
    "s9_title_06": {
      "id": "s9_title_06",
      "type": "line",
      "scene": "s9",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "那先叫《回声，还开着》？",
      "next": "s9_title_07",
      "expression": "expression-smile"
    },
    "s9_title_07": {
      "id": "s9_title_07",
      "type": "line",
      "scene": "s9",
      "speaker": "maolang",
      "character": "maolang",
      "text": "像我手机停机前最后一条提醒。不过比我的短，省字幕钱。",
      "next": "s9_title_08",
      "expression": "expression-smile"
    },
    "s9_title_08": {
      "id": "s9_title_08",
      "type": "line",
      "scene": "s9",
      "speaker": "narrator",
      "character": null,
      "text": "周栀笑得差点把笔滚到桌下。毛狼弯腰捡起来，真在筹备纸上写了个暂定名。还没人按下录制，我们已经有点想把这一下午留下。",
      "next": "s9_prepare_02"
    },
    "g_s9_confession_voice": {
      "id": "g_s9_confession_voice",
      "type": "gate",
      "scene": "s9",
      "cases": [
        {
          "flag": "reunion",
          "value": "apologize",
          "next": "s9_confession_apologize"
        },
        {
          "flag": "reunion",
          "value": "appointment",
          "next": "s9_confession_appointment"
        }
      ],
      "default": "s9_confession_joke"
    },
    "s9_confession_apologize": {
      "id": "s9_confession_apologize",
      "type": "line",
      "scene": "s9",
      "speaker": "narrator",
      "character": "wenwen",
      "expression": "expression-hesitant",
      "text": "三天前，我才对孟遥承认过逃避。眼下毛狼就在面前，我不能又等别人把问题问到没处躲。",
      "next": "s9_compete_08"
    },
    "s9_confession_appointment": {
      "id": "s9_confession_appointment",
      "type": "line",
      "scene": "s9",
      "speaker": "narrator",
      "character": "wenwen",
      "expression": "expression-hesitant",
      "text": "我替和孟遥的谈话留了整段时间，却一直没给这张车票留一句话。眼下不用再查日历。",
      "next": "s9_compete_08"
    },
    "s9_confession_joke": {
      "id": "s9_confession_joke",
      "type": "line",
      "scene": "s9",
      "speaker": "narrator",
      "character": "wenwen",
      "expression": "expression-hesitant",
      "text": "“胆子比存款大。”这句差点出口。屋檐下那个没人接住的笑话又响了一遍，我把后半句咽了回去。",
      "next": "s9_compete_08"
    },
    "s9_ready_result_01": {
      "id": "s9_ready_result_01",
      "type": "line",
      "scene": "s9",
      "speaker": "narrator",
      "character": null,
      "text": "卷尺收起后，孟遥在纸上圈定第一段：明天下午，用已测好的话筒拍一次试音。员工各自确认出镜，旧监听继续留在待查栏。",
      "next": "s9_ready_result_02"
    },
    "s9_ready_result_02": {
      "id": "s9_ready_result_02",
      "type": "line",
      "scene": "s9",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "片尾我还想听听大家的想法。今天先把明天这段做成，别光把片名起好了。",
      "next": "s9_ready_result_03",
      "expression": "expression-serious"
    },
    "s9_ready_result_03": {
      "id": "s9_ready_result_03",
      "type": "line",
      "scene": "s9",
      "speaker": "maolang",
      "character": "maolang",
      "text": "片名也算劳动。明天我提前来，给劳动成果摆椅子。",
      "next": "s10_messages_01",
      "expression": "expression-smile"
    },
    "preview_xiaoman_visit_01": {
      "id": "preview_xiaoman_visit_01",
      "type": "line",
      "scene": "s10",
      "speaker": "wenwen",
      "character": null,
      "text": "图看完了。哪天没东西要修，我还能来坐会儿吗？",
      "next": "preview_xiaoman_visit_02"
    },
    "preview_xiaoman_visit_02": {
      "id": "preview_xiaoman_visit_02",
      "type": "line",
      "scene": "s10",
      "speaker": "xiaoman",
      "character": null,
      "text": "能。别一进门就问哪儿坏了。",
      "next": "preview_xiaoman_visit_03"
    },
    "preview_xiaoman_visit_03": {
      "id": "preview_xiaoman_visit_03",
      "type": "line",
      "scene": "s10",
      "speaker": "narrator",
      "character": null,
      "text": "过了几秒，她补来一句：“椅子也不是只给模特坐的。”我把刚打好的充电座型号删掉，回了个“记住了”。",
      "next": "end_xiaoman"
    },
    "preview_yelan_private_01": {
      "id": "preview_yelan_private_01",
      "type": "line",
      "scene": "s10",
      "speaker": "narrator",
      "character": null,
      "text": "她说完还站了一会儿，像在找一句与钥匙、工时都无关的话。我也没急着替她找。",
      "next": "preview_yelan_private_02",
      "bg": "slope_junction_night",
      "location": "老街岔路口"
    },
    "preview_yelan_private_02": {
      "id": "preview_yelan_private_02",
      "type": "line",
      "scene": "s10",
      "speaker": "yelan",
      "character": null,
      "text": "这条路白天是什么样，我好久没仔细看过了。",
      "next": "preview_yelan_private_03",
      "bg": "slope_junction_night",
      "location": "老街岔路口"
    },
    "preview_yelan_private_03": {
      "id": "preview_yelan_private_03",
      "type": "line",
      "scene": "s10",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "哪天你想看，叫我。我也想走一遍不用赶着送件的。",
      "next": "end_yelan",
      "expression": "expression-smile",
      "bg": "slope_junction_night",
      "location": "老街岔路口"
    },
    "ch2_open_01": {
      "id": "ch2_open_01",
      "type": "line",
      "scene": "ch2_take",
      "speaker": "narrator",
      "character": null,
      "text": "第十一天下午，毛狼的胳膊伸进镜头三次。第一次递线，第二次捡线，第三次专程进来问前两次拍着没有。",
      "next": "ch2_open_02"
    },
    "ch2_open_02": {
      "id": "ch2_open_02",
      "type": "line",
      "scene": "ch2_take",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "拍着了。素材里你出现得比店名多。",
      "next": "ch2_open_03",
      "expression": "expression-serious"
    },
    "ch2_open_03": {
      "id": "ch2_open_03",
      "type": "line",
      "scene": "ch2_take",
      "speaker": "maolang",
      "character": "maolang",
      "text": "昨天片名被否决了，今天我申请一行字幕：现场指导，毛狼。",
      "next": "ch2_open_04",
      "expression": "expression-smile"
    },
    "ch2_open_04": {
      "id": "ch2_open_04",
      "type": "line",
      "scene": "ch2_take",
      "speaker": "zhouzhi",
      "character": "zhouzhi",
      "text": "你刚才问我线要绕哪边。可以，现场需要指导，毛狼。",
      "next": "ch2_open_05",
      "expression": "expression-smile"
    },
    "ch2_open_05": {
      "id": "ch2_open_05",
      "type": "line",
      "scene": "ch2_take",
      "speaker": "narrator",
      "character": null,
      "text": "《回声，还开着》先留作临时片名。筹备群里，小满发来语音，推剪声在背景里响，她午休只能看我们聊天。",
      "next": "ch2_open_06"
    },
    "ch2_open_06": {
      "id": "ch2_open_06",
      "type": "line",
      "scene": "ch2_take",
      "speaker": "xiaoman",
      "character": null,
      "text": "那我也申请一个，远程围观，罗小满。只拿字幕，不收拾你们的线。",
      "next": "ch2_open_07"
    },
    "ch2_open_07": {
      "id": "ch2_open_07",
      "type": "line",
      "scene": "ch2_take",
      "speaker": "maolang",
      "character": "maolang",
      "text": "这就不公平了，我至少带着手——",
      "next": "ch2_open_08",
      "expression": "action-explaining"
    },
    "ch2_open_08": {
      "id": "ch2_open_08",
      "type": "line",
      "scene": "ch2_take",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "这段别删。我刚才录着声音，比你想的片名好。",
      "next": "ch2_open_09",
      "expression": "expression-smile"
    },
    "ch2_open_09": {
      "id": "ch2_open_09",
      "type": "line",
      "scene": "ch2_take",
      "speaker": "narrator",
      "character": "maolang",
      "text": "毛狼把线盘摆端正，装作没有笑。两秒以后，他又问自己的声音有没有破。",
      "next": "ch2_open_10",
      "expression": "expression-hesitant"
    },
    "ch2_open_10": {
      "id": "ch2_open_10",
      "type": "line",
      "scene": "ch2_take",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "嘴没破，收音正常。可惜是两回事。",
      "next": "ch2_open_11",
      "expression": "expression-wry"
    },
    "ch2_open_11": {
      "id": "ch2_open_11",
      "type": "line",
      "scene": "ch2_take",
      "speaker": "narrator",
      "character": null,
      "text": "叶岚拿来当天的拍摄名单，只排愿意出镜的人。有人不想露脸，她把座位挪到画面外，还给他留下通道。",
      "next": "ch2_open_12"
    },
    "ch2_open_12": {
      "id": "ch2_open_12",
      "type": "line",
      "scene": "ch2_take",
      "speaker": "yelan",
      "character": "yelan",
      "text": "营业照常。三点半前收线，员工先休息，不能为了拍上班，把休息拍没了。",
      "next": "ch2_g_inventory",
      "expression": "expression-serious"
    },
    "ch2_open_13": {
      "id": "ch2_open_13",
      "type": "line",
      "scene": "ch2_take",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "我不想拍一排人站着说舍不得。柜子怎么关、话筒怎么收，这些有人天天做，我想让它们留在片子里。",
      "next": "ch2_open_14",
      "expression": "action-explaining"
    },
    "ch2_open_14": {
      "id": "ch2_open_14",
      "type": "line",
      "scene": "ch2_take",
      "speaker": "zhouzhi",
      "character": "zhouzhi",
      "text": "收话筒可以。擦桌子别让我重来八遍，桌子比我都要累。",
      "next": "ch2_open_15",
      "expression": "expression-smile"
    },
    "ch2_open_15": {
      "id": "ch2_open_15",
      "type": "line",
      "scene": "ch2_take",
      "speaker": "narrator",
      "character": null,
      "text": "我试着举起收音杆。毛狼在后面比了个再高一点的手势，这回没趁机替自己抢镜。",
      "next": "ch2_open_16"
    },
    "ch2_open_16": {
      "id": "ch2_open_16",
      "type": "line",
      "scene": "ch2_take",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "周栀接班前那段访问已经约好。余下的时间只够认真拍一组，先拍动作，还是让其他人说两句？",
      "next": "ch2_c7",
      "expression": "expression-serious"
    },
    "ch2_c7": {
      "id": "ch2_c7",
      "type": "choice",
      "scene": "ch2_take",
      "character": null,
      "text": "第一组镜头，把时间留给哪一种真实？",
      "flag": "shootFocus",
      "choices": [
        {
          "label": "先拍工作中的手，等大家习惯镜头再采访。",
          "value": "hands",
          "next": "ch2_hands_01"
        },
        {
          "label": "先录每个人想留下的话，动作镜头随后补。",
          "value": "voices",
          "next": "ch2_voices_01"
        }
      ]
    },
    "ch2_hands_01": {
      "id": "ch2_hands_01",
      "type": "line",
      "scene": "ch2_take",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "先拍手。我把机器放远点，你们照常做，漏了哪一步就下次再补。",
      "next": "ch2_hands_02",
      "expression": "expression-serious"
    },
    "ch2_hands_02": {
      "id": "ch2_hands_02",
      "type": "line",
      "scene": "ch2_take",
      "speaker": "narrator",
      "character": null,
      "text": "周栀拢好话筒线，毛狼却把最后一圈绕反了。她没有叫停，等他自己发现，又把那一圈松开给他看。",
      "next": "ch2_hands_03"
    },
    "ch2_hands_03": {
      "id": "ch2_hands_03",
      "type": "line",
      "scene": "ch2_take",
      "speaker": "zhouzhi",
      "character": "zhouzhi",
      "text": "别剪成我拯救同事。他明天能自己绕好，我也有绕错的时候。",
      "next": "ch2_hands_04",
      "expression": "expression-smile"
    },
    "ch2_hands_04": {
      "id": "ch2_hands_04",
      "type": "line",
      "scene": "ch2_take",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "保留你等他的那几秒。这个比一个漂亮动作有意思。",
      "next": "ch2_record_01",
      "expression": "expression-smile"
    },
    "ch2_voices_01": {
      "id": "ch2_voices_01",
      "type": "line",
      "scene": "ch2_take",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "先录想说的话。谁还没想好就先听，不需要每个人都凑一句。",
      "next": "ch2_voices_02",
      "expression": "expression-serious"
    },
    "ch2_voices_02": {
      "id": "ch2_voices_02",
      "type": "line",
      "scene": "ch2_take",
      "speaker": "narrator",
      "character": null,
      "text": "毛狼准备了一句“青春永不散场”。周栀看着他，直到他自己笑出声，把稿子揉在手里。",
      "next": "ch2_voices_03"
    },
    "ch2_voices_03": {
      "id": "ch2_voices_03",
      "type": "line",
      "scene": "ch2_take",
      "speaker": "maolang",
      "character": "maolang",
      "text": "那我就说，别总把坏话筒塞回好话筒那格。我下次找起来，真的很想骂人。",
      "next": "ch2_voices_04",
      "expression": "expression-hesitant"
    },
    "ch2_voices_04": {
      "id": "ch2_voices_04",
      "type": "line",
      "scene": "ch2_take",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "这句留下。你说“下次”的时候，听起来才像平时会来上班的人。",
      "next": "ch2_record_01",
      "expression": "expression-smile"
    },
    "ch2_record_01": {
      "id": "ch2_record_01",
      "type": "line",
      "scene": "ch2_take",
      "speaker": "narrator",
      "character": null,
      "text": "轮到周栀，她先问我领夹麦有没有歪。我指了方向，等她自己调整好，才重新戴上耳机。",
      "next": "ch2_record_02"
    },
    "ch2_record_02": {
      "id": "ch2_record_02",
      "type": "line",
      "scene": "ch2_take",
      "speaker": "zhouzhi",
      "character": "zhouzhi",
      "text": "我想把摊支起来，先试两晚，看自己接不接得住。这里的班我会照常唱完，第三十天才停业。",
      "next": "ch2_record_03",
      "expression": "expression-serious"
    },
    "ch2_record_03": {
      "id": "ch2_record_03",
      "type": "line",
      "scene": "ch2_take",
      "speaker": "zhouzhi",
      "character": "zhouzhi",
      "text": "菜还在试，也没定开摊时间。以后哪天真摆了，想唱歌还是会唱，嗓子又不用交回店里。",
      "next": "ch2_record_04",
      "expression": "action-explaining"
    },
    "ch2_record_04": {
      "id": "ch2_record_04",
      "type": "line",
      "scene": "ch2_take",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "孟遥按住停止键，没有立刻说好。她把前一句倒回去，又听了一遍。",
      "next": "ch2_record_05",
      "expression": "expression-hesitant"
    },
    "ch2_record_05": {
      "id": "ch2_record_05",
      "type": "line",
      "scene": "ch2_take",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "想拍你在两件事之间怎么过日子。可我刚才差点只留下“把摊支起来”，那句更像一个漂亮的结尾。",
      "next": "ch2_record_06",
      "expression": "expression-serious"
    },
    "ch2_record_06": {
      "id": "ch2_record_06",
      "type": "line",
      "scene": "ch2_take",
      "speaker": "zhouzhi",
      "character": "zhouzhi",
      "text": "结尾挺好听，我后面的班还得上。都留给我看一遍，我挑自己的话。",
      "next": "ch2_record_07",
      "expression": "expression-serious"
    },
    "ch2_record_07": {
      "id": "ch2_record_07",
      "type": "line",
      "scene": "ch2_take",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "可以把试菜也记下来吗？不一定用，等你觉得合适再拿出来。",
      "next": "ch2_record_08",
      "expression": "expression-smile"
    },
    "ch2_record_08": {
      "id": "ch2_record_08",
      "type": "line",
      "scene": "ch2_take",
      "speaker": "zhouzhi",
      "character": "zhouzhi",
      "text": "先吃过再提拍摄。你要是只会说“挺好”，试菜席不留给你。",
      "next": "ch2_record_09",
      "expression": "expression-smile"
    },
    "ch2_record_09": {
      "id": "ch2_record_09",
      "type": "line",
      "scene": "ch2_take",
      "speaker": "narrator",
      "character": null,
      "text": "她离开镜头去接班。毛狼把记事纸摊平，在临时片名下面写下“先吃过再说”。我们留下的第一段，竟然已经约到下一顿饭。",
      "next": "ch2_piao_meet_01"
    },
    "ch2_sample_01": {
      "id": "ch2_sample_01",
      "type": "line",
      "scene": "ch2_sample",
      "speaker": "narrator",
      "character": null,
      "text": "晚上，我回维修柜台交接设备。孟遥发来一段十二秒的工作样片，只想让我们听压缩后的人声有没有失真。",
      "next": "ch2_sample_02"
    },
    "ch2_sample_02": {
      "id": "ch2_sample_02",
      "type": "line",
      "scene": "ch2_sample",
      "speaker": "narrator",
      "character": null,
      "text": "画面是无人使用的包厢，接周栀那句“把摊支起来”。文件名写了“样片”，小屏幕只露出前半截。",
      "next": "ch2_sample_03"
    },
    "ch2_sample_03": {
      "id": "ch2_sample_03",
      "type": "line",
      "scene": "ch2_sample",
      "speaker": "mengyao",
      "character": null,
      "text": "只是试听，还没给出镜的人审。画面和句子不完整，先留在筹备群里。",
      "next": "ch2_sample_04"
    },
    "ch2_sample_04": {
      "id": "ch2_sample_04",
      "type": "line",
      "scene": "ch2_sample",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "人声清楚，尾音没糊。内容我明天带耳机再从头看。",
      "next": "ch2_sample_05",
      "expression": "expression-serious"
    },
    "ch2_sample_05": {
      "id": "ch2_sample_05",
      "type": "line",
      "scene": "ch2_sample",
      "speaker": "narrator",
      "character": null,
      "text": "我回完才发现，“清楚”很容易被扫成“可以”。于是又补了一句“我只听了声音”，消息落在毛狼发来的尺寸表下面。",
      "next": "ch2_sample_06"
    },
    "ch2_sample_06": {
      "id": "ch2_sample_06",
      "type": "line",
      "scene": "ch2_sample",
      "speaker": "shijiang",
      "character": "shijiang",
      "text": "这只接头收进合格那栏。你手机里的事，忙完再看，别拿着两边都只看半截。",
      "next": "ch2_sample_07",
      "expression": "expression-serious"
    },
    "ch2_sample_07": {
      "id": "ch2_sample_07",
      "type": "line",
      "scene": "ch2_sample",
      "speaker": "narrator",
      "character": null,
      "text": "我把手机扣下，核完最后一个编号。师匠采用了我补的排查记录，没有再誊一份自己的。",
      "next": "ch2_sample_08"
    },
    "ch2_sample_08": {
      "id": "ch2_sample_08",
      "type": "line",
      "scene": "ch2_sample",
      "speaker": "narrator",
      "character": null,
      "text": "毛狼在群里回了个“收到”。后来我才知道，他收到的是试听结果，并没把上面的用途看完整。",
      "next": "ch2_alarm_01"
    },
    "ch2_alarm_01": {
      "id": "ch2_alarm_01",
      "type": "line",
      "scene": "ch2_alarm",
      "speaker": "narrator",
      "character": null,
      "text": "第十二天下午，我刚到回声，周栀就把手机递过来。一位熟客问，今晚是不是不用来了，寄存的东西现在能不能取。",
      "next": "ch2_alarm_02"
    },
    "ch2_alarm_02": {
      "id": "ch2_alarm_02",
      "type": "line",
      "scene": "ch2_alarm",
      "speaker": "zhouzhi",
      "character": "zhouzhi",
      "text": "还有人要先订我摊上的十份晚饭。我连下周试哪道菜都没定。",
      "next": "ch2_alarm_03",
      "expression": "expression-serious"
    },
    "ch2_alarm_03": {
      "id": "ch2_alarm_03",
      "type": "line",
      "scene": "ch2_alarm",
      "speaker": "narrator",
      "character": null,
      "text": "聊天里转着昨天那十二秒。包厢空着，周栀说要摆摊。停业日期和“还没定时间”，都在视频外面。",
      "next": "ch2_alarm_04"
    },
    "ch2_alarm_04": {
      "id": "ch2_alarm_04",
      "type": "line",
      "scene": "ch2_alarm",
      "speaker": "yelan",
      "character": "yelan",
      "text": "今天能正常接待，寄存也按原来的日期。前台已经回了几位，不能让后面的人一直猜。",
      "next": "ch2_alarm_05",
      "expression": "expression-serious"
    },
    "ch2_alarm_05": {
      "id": "ch2_alarm_05",
      "type": "line",
      "scene": "ch2_alarm",
      "speaker": "maolang",
      "character": "maolang",
      "text": "我发的。老客群有人问片子进度，我把那个当预告转了。不是谁偷走的。",
      "next": "ch2_alarm_06",
      "expression": "expression-downcast"
    },
    "ch2_alarm_06": {
      "id": "ch2_alarm_06",
      "type": "line",
      "scene": "ch2_alarm",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "你看到孟遥前面说——",
      "next": "ch2_alarm_07",
      "expression": "expression-surprised"
    },
    "ch2_alarm_07": {
      "id": "ch2_alarm_07",
      "type": "line",
      "scene": "ch2_alarm",
      "speaker": "narrator",
      "character": "maolang",
      "text": "毛狼点头又摇头。他往上翻，看到“只是试听”那句，手指停住。大厅的音乐还在放，比平时显得响。",
      "next": "ch2_alarm_08",
      "expression": "expression-downcast"
    },
    "ch2_alarm_08": {
      "id": "ch2_alarm_08",
      "type": "line",
      "scene": "ch2_alarm",
      "speaker": "maolang",
      "character": "maolang",
      "text": "现在看到了。昨晚我只看见你说人声清楚，以为后面就在对尺寸。我没问就发，算我的。",
      "next": "ch2_alarm_09",
      "expression": "expression-serious"
    },
    "ch2_alarm_09": {
      "id": "ch2_alarm_09",
      "type": "line",
      "scene": "ch2_alarm",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "我把一个没上下文的片段做得像预告，还用了普通文件名。用途发在前一条，很容易跟文件分开。",
      "next": "ch2_alarm_10",
      "expression": "expression-downcast"
    },
    "ch2_alarm_10": {
      "id": "ch2_alarm_10",
      "type": "line",
      "scene": "ch2_alarm",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "我回复也没把“只验声音”放在第一句。后来补的那条，你没看到。我当时该直接回在文件下面。",
      "next": "ch2_alarm_11",
      "expression": "expression-guilty"
    },
    "ch2_alarm_11": {
      "id": "ch2_alarm_11",
      "type": "line",
      "scene": "ch2_alarm",
      "speaker": "zhouzhi",
      "character": "zhouzhi",
      "text": "先别一人替一人分。毛狼，你发出去这件事要说清楚；我的话，我自己补，不用谁替我宣布新生活。",
      "next": "ch2_alarm_12",
      "expression": "expression-serious"
    },
    "ch2_alarm_12": {
      "id": "ch2_alarm_12",
      "type": "line",
      "scene": "ch2_alarm",
      "speaker": "narrator",
      "character": "maolang",
      "text": "毛狼把手机放到桌上，没再解锁又锁上。他抬头看周栀，等她把话说完。",
      "next": "ch2_alarm_13",
      "expression": "expression-serious"
    },
    "ch2_alarm_13": {
      "id": "ch2_alarm_13",
      "type": "line",
      "scene": "ch2_alarm",
      "speaker": "zhouzhi",
      "character": "zhouzhi",
      "text": "唱歌是我的工作，摆摊也是我想试的事。都没什么需要遮住。问题是那十二秒替我答应了一个还没定的日期。",
      "next": "ch2_alarm_14",
      "expression": "action-explaining"
    },
    "ch2_alarm_14": {
      "id": "ch2_alarm_14",
      "type": "line",
      "scene": "ch2_alarm",
      "speaker": "maolang",
      "character": "maolang",
      "text": "我跟群里说明是我误发。已经有两个人转出去，我一个个问到哪里了，能联系到的我来联系。",
      "next": "ch2_alarm_15",
      "expression": "expression-serious"
    },
    "ch2_alarm_15": {
      "id": "ch2_alarm_15",
      "type": "line",
      "scene": "ch2_alarm",
      "speaker": "yelan",
      "character": "yelan",
      "text": "我发店里的准确安排，周栀确认她那段。原视频超过撤回时间了，我们能请人删除，不能保证副本全没了。",
      "next": "ch2_alarm_16",
      "expression": "expression-serious"
    },
    "ch2_alarm_16": {
      "id": "ch2_alarm_16",
      "type": "line",
      "scene": "ch2_alarm",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "先暂停继续发样片。我保存原始版本和修改记录，今天剪好的先给周栀看，她说不合适就不用。",
      "next": "ch2_alarm_17",
      "expression": "expression-serious"
    },
    "ch2_alarm_17": {
      "id": "ch2_alarm_17",
      "type": "line",
      "scene": "ch2_alarm",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "现在可以先发简短的事实说明，再去逐个找人；也可以先找已知转发者补正，整理好同一段说明再公开。",
      "next": "ch2_alarm_18",
      "expression": "expression-serious"
    },
    "ch2_alarm_18": {
      "id": "ch2_alarm_18",
      "type": "line",
      "scene": "ch2_alarm",
      "speaker": "zhouzhi",
      "character": "zhouzhi",
      "text": "两种都行。先发就先别带我的长回答；先找人也别拖到明天。今晚我要把自己的话写完。",
      "next": "ch2_c8",
      "expression": "expression-serious"
    },
    "ch2_c8": {
      "id": "ch2_c8",
      "type": "choice",
      "scene": "ch2_alarm",
      "character": null,
      "text": "周栀确认两种顺序都可以，先做哪一步？",
      "flag": "spreadResponse",
      "choices": [
        {
          "label": "先发已确认的事实说明，再逐个联系转发者。",
          "value": "notice",
          "next": "ch2_notice_01"
        },
        {
          "label": "先联系已知转发者补正，今晚统一公开说明。",
          "value": "contact",
          "next": "ch2_contact_01"
        }
      ]
    },
    "ch2_notice_01": {
      "id": "ch2_notice_01",
      "type": "line",
      "scene": "ch2_alarm",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "先让正在问的人看到日期。我陪毛狼整理联系人，说明由叶岚确认后发。",
      "next": "ch2_notice_02",
      "expression": "expression-serious"
    },
    "ch2_notice_02": {
      "id": "ch2_notice_02",
      "type": "line",
      "scene": "ch2_alarm",
      "speaker": "narrator",
      "character": null,
      "text": "叶岚发出“今日照常营业、第三十天停业”。周栀加上“摊位仍在筹备，没有开放预订”，没有被催着解释更多。",
      "next": "ch2_notice_03"
    },
    "ch2_notice_03": {
      "id": "ch2_notice_03",
      "type": "line",
      "scene": "ch2_alarm",
      "speaker": "maolang",
      "character": "maolang",
      "text": "我在原群说清楚了：我把工作样片误当预告转发，内容没审过。请别继续转，已经转出的帮我补上这条。",
      "next": "ch2_notice_04",
      "expression": "expression-serious"
    },
    "ch2_notice_04": {
      "id": "ch2_notice_04",
      "type": "line",
      "scene": "ch2_alarm",
      "speaker": "narrator",
      "character": null,
      "text": "回复很快安静下来，却又冒出一句“到底出了什么事”。短说明止住了眼前的误会，也留下更多人等着看完整解释。",
      "next": "ch2_notice_05"
    },
    "ch2_notice_05": {
      "id": "ch2_notice_05",
      "type": "line",
      "scene": "ch2_alarm",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "这些问题我记下来，今晚一起回应。现在去找那两位，不能发完就当送到了。",
      "next": "ch2_account_01",
      "expression": "expression-serious"
    },
    "ch2_contact_01": {
      "id": "ch2_contact_01",
      "type": "line",
      "scene": "ch2_alarm",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "先找已经转出去的两位。店里照常回复询问，晚上把同一段说明发全，别让几版说法互相打架。",
      "next": "ch2_contact_02",
      "expression": "expression-serious"
    },
    "ch2_contact_02": {
      "id": "ch2_contact_02",
      "type": "line",
      "scene": "ch2_alarm",
      "speaker": "narrator",
      "character": null,
      "text": "毛狼当着我们拨通电话，一遍遍说明是自己误发。有人愿意补转，也有人只记得发给了几个朋友。",
      "next": "ch2_contact_03"
    },
    "ch2_contact_03": {
      "id": "ch2_contact_03",
      "type": "line",
      "scene": "ch2_alarm",
      "speaker": "maolang",
      "character": "maolang",
      "text": "不用替我说是剪辑的问题。我没确认就发，这句请留着。周栀还没开摊，回声今天也照常营业。",
      "next": "ch2_contact_04",
      "expression": "expression-serious"
    },
    "ch2_contact_04": {
      "id": "ch2_contact_04",
      "type": "line",
      "scene": "ch2_alarm",
      "speaker": "narrator",
      "character": null,
      "text": "我们知道了几份副本的去向，也花掉整个午休。前台仍要逐个答复新来的询问，叶岚把水喝到一半，又接起电话。",
      "next": "ch2_contact_05"
    },
    "ch2_contact_05": {
      "id": "ch2_contact_05",
      "type": "line",
      "scene": "ch2_alarm",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "够晚了，余下的记下继续找。现在合并说明给周栀看，不能让她一直等着。",
      "next": "ch2_account_01",
      "expression": "expression-serious"
    },
    "ch2_account_01": {
      "id": "ch2_account_01",
      "type": "line",
      "scene": "ch2_account",
      "speaker": "narrator",
      "character": null,
      "text": "当晚，我在回声门外读到周栀自己发出的补充。她保留唱完最后一班、继续试菜的打算，也明确现在不收预订。",
      "next": "ch2_account_02"
    },
    "ch2_account_02": {
      "id": "ch2_account_02",
      "type": "line",
      "scene": "ch2_account",
      "speaker": "zhouzhi",
      "character": null,
      "text": "想来唱歌照常来，想尝菜等我通知。那段视频没说完的就是这些。谢谢惦记，也别先替我把锅烧起来。",
      "next": "ch2_account_03"
    },
    "ch2_account_03": {
      "id": "ch2_account_03",
      "type": "line",
      "scene": "ch2_account",
      "speaker": "narrator",
      "character": null,
      "text": "毛狼在原群补齐说明和出错经过，请看过旧版的人带上更正。一位熟客回了句“那我周末还是照常来”。",
      "next": "ch2_account_04"
    },
    "ch2_account_04": {
      "id": "ch2_account_04",
      "type": "line",
      "scene": "ch2_account",
      "speaker": "maolang",
      "character": null,
      "text": "明天我自己再问一遍补转的情况。你们不用替我盯着，也不用替我说算了。",
      "next": "ch2_account_05"
    },
    "ch2_account_05": {
      "id": "ch2_account_05",
      "type": "line",
      "scene": "ch2_account",
      "speaker": "zhouzhi",
      "character": null,
      "text": "好。片子继续拍，但下一次发出去以前，先给我看见。",
      "next": "ch2_after_01"
    },
    "ch2_after_01": {
      "id": "ch2_after_01",
      "type": "line",
      "scene": "ch2_after",
      "speaker": "narrator",
      "character": null,
      "text": "夜里下过一阵雨。我在面馆看见毛狼，他面前那碗面没怎么动，手机倒摆在最方便接电话的位置。",
      "next": "ch2_after_02"
    },
    "ch2_after_02": {
      "id": "ch2_after_02",
      "type": "line",
      "scene": "ch2_after",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "先吃一口。再看，面能直接给你织围巾。",
      "next": "ch2_after_03",
      "expression": "expression-tired"
    },
    "ch2_after_03": {
      "id": "ch2_after_03",
      "type": "line",
      "scene": "ch2_after",
      "speaker": "maolang",
      "character": "maolang",
      "text": "你骂两句也行，今天你那句“你看到前面说”，我听着就知道后面是什么。",
      "next": "ch2_after_04",
      "expression": "expression-hesitant"
    },
    "ch2_after_04": {
      "id": "ch2_after_04",
      "type": "line",
      "scene": "ch2_after",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "后面是我也发过没看全的东西。但这回是你发的，我不会拿自己以前的事把它抵掉。",
      "next": "ch2_after_05",
      "expression": "expression-serious"
    },
    "ch2_after_05": {
      "id": "ch2_after_05",
      "type": "line",
      "scene": "ch2_after",
      "speaker": "narrator",
      "character": "maolang",
      "text": "他低头把黏在一起的面挑开，没有笑。我把自己那碗往旁边挪了挪，给他手机留出一块不会溅汤的位置。",
      "next": "ch2_after_06",
      "expression": "expression-downcast"
    },
    "ch2_after_06": {
      "id": "ch2_after_06",
      "type": "line",
      "scene": "ch2_after",
      "speaker": "maolang",
      "character": "maolang",
      "text": "我不是想抢谁的功劳。老客问起，我就想让他们知道，这次我也真在做点事。然后觉得问一句显得很外行。",
      "next": "ch2_after_07",
      "expression": "expression-serious"
    },
    "ch2_after_07": {
      "id": "ch2_after_07",
      "type": "line",
      "scene": "ch2_after",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "我知道你在做。昨天收线没拍到的那半小时，也不是就不算了。",
      "next": "ch2_after_08",
      "expression": "expression-serious"
    },
    "ch2_after_08": {
      "id": "ch2_after_08",
      "type": "line",
      "scene": "ch2_after",
      "speaker": "narrator",
      "character": null,
      "text": "毛狼抬头看我。我等他自己拿起筷子，才把昨天抢镜的那段给他看。他伸着胳膊申请字幕，周栀在画外笑，后面还有我的声音。",
      "next": "ch2_after_09"
    },
    "ch2_after_09": {
      "id": "ch2_after_09",
      "type": "line",
      "scene": "ch2_after",
      "speaker": "maolang",
      "character": "maolang",
      "text": "这段留着吧。以后我说自己从没想过出名，你拿这个堵我。",
      "next": "ch2_after_10",
      "expression": "expression-smile"
    },
    "ch2_after_10": {
      "id": "ch2_after_10",
      "type": "line",
      "scene": "ch2_after",
      "speaker": "narrator",
      "character": null,
      "text": "他笑了一下，又低头回复联系人。竞争的那点别扭还在，今天的错也没被笑过去，但这碗面终于有人认真吃了。",
      "next": "ch2_edit_01"
    },
    "ch2_edit_01": {
      "id": "ch2_edit_01",
      "type": "line",
      "scene": "ch2_edit",
      "speaker": "narrator",
      "character": null,
      "text": "第十三天晚上，孟遥在空包厢里剪片。屏幕的光照着她的手，她把周栀的两句原话调到一起，来回听了三遍。",
      "next": "ch2_edit_02"
    },
    "ch2_edit_02": {
      "id": "ch2_edit_02",
      "type": "line",
      "scene": "ch2_edit",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "这一版先留给出镜的人审。昨天的公开说明已经有了，片子不用假装是一封更长的道歉信。",
      "next": "ch2_edit_03",
      "expression": "expression-serious"
    },
    "ch2_edit_03": {
      "id": "ch2_edit_03",
      "type": "line",
      "scene": "ch2_edit",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "那你现在最想留下什么？",
      "next": "ch2_edit_04",
      "expression": "expression-serious"
    },
    "ch2_edit_04": {
      "id": "ch2_edit_04",
      "type": "line",
      "scene": "ch2_edit",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "人还在做事。可我一想到停业，手就总想往空房间上拖。那种画面太容易替我说“结束”了。",
      "next": "ch2_edit_05",
      "expression": "expression-hesitant"
    },
    "ch2_edit_05": {
      "id": "ch2_edit_05",
      "type": "line",
      "scene": "ch2_edit",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "她第一次把鼠标推到一边，没有用进度条填满停顿。我也没伸手替她决定。",
      "next": "ch2_edit_06",
      "expression": "expression-hesitant"
    },
    "ch2_edit_06": {
      "id": "ch2_edit_06",
      "type": "line",
      "scene": "ch2_edit",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "我怕拍得普通。怕花这么久，最后只有几个人上班、下班，什么漂亮的句子都没有。",
      "next": "ch2_edit_07",
      "expression": "expression-serious"
    },
    "ch2_edit_07": {
      "id": "ch2_edit_07",
      "type": "line",
      "scene": "ch2_edit",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "昨天毛狼说面能织围巾，你拍了没有？",
      "next": "ch2_edit_08",
      "expression": "expression-smile"
    },
    "ch2_edit_08": {
      "id": "ch2_edit_08",
      "type": "line",
      "scene": "ch2_edit",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "那不是你说的吗？",
      "next": "ch2_edit_09",
      "expression": "expression-surprised"
    },
    "ch2_edit_09": {
      "id": "ch2_edit_09",
      "type": "line",
      "scene": "ch2_edit",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "那先不用。太漂亮，影响你的真实。",
      "next": "ch2_edit_10",
      "expression": "expression-wry"
    },
    "ch2_edit_10": {
      "id": "ch2_edit_10",
      "type": "line",
      "scene": "ch2_edit",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "她终于笑出来，又在笑到一半时看了我一眼。我忽然很想让她多笑一会儿，已经不是为了片子能顺利剪完。",
      "next": "ch2_edit_11",
      "expression": "expression-smile"
    },
    "ch2_edit_11": {
      "id": "ch2_edit_11",
      "type": "line",
      "scene": "ch2_edit",
      "speaker": "yelan",
      "character": "yelan",
      "text": "我只能再留二十分钟。片尾的事今天定吧，后面营业需要这间。",
      "next": "ch2_g_focus",
      "expression": "expression-serious"
    },
    "ch2_g_focus": {
      "id": "ch2_g_focus",
      "type": "gate",
      "scene": "ch2_edit",
      "cases": [
        {
          "flag": "shootFocus",
          "value": "hands",
          "next": "ch2_focus_hands_01"
        }
      ],
      "default": "ch2_focus_voices_01"
    },
    "ch2_focus_hands_01": {
      "id": "ch2_focus_hands_01",
      "type": "line",
      "scene": "ch2_edit",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "第一天先拍的那组手很有用。周栀等毛狼重新绕线那几秒，我想留完整，不用音乐催它。",
      "next": "ch2_ending_01",
      "expression": "expression-serious"
    },
    "ch2_focus_voices_01": {
      "id": "ch2_focus_voices_01",
      "type": "line",
      "scene": "ch2_edit",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "第一天先录的那几句话，我想留毛狼说“下次”。它很普通，但听得出大家并没有把今天当最后一天。",
      "next": "ch2_ending_01",
      "expression": "expression-serious"
    },
    "ch2_ending_01": {
      "id": "ch2_ending_01",
      "type": "line",
      "scene": "ch2_edit",
      "speaker": "yelan",
      "character": "yelan",
      "text": "片尾能不能等人收完这一个班？别让他们从镜头里消失得比店还快。",
      "next": "ch2_ending_02",
      "expression": "expression-hesitant"
    },
    "ch2_ending_02": {
      "id": "ch2_ending_02",
      "type": "line",
      "scene": "ch2_edit",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "可以。也可以保留空房间，让他们已经同意使用的话留在声音里。一个拍今天还在继续，一个留这个地方本来的样子。",
      "next": "ch2_ending_03",
      "expression": "expression-serious"
    },
    "ch2_ending_03": {
      "id": "ch2_ending_03",
      "type": "line",
      "scene": "ch2_edit",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "拍收工，就得再约一次愿意出镜的人；留空房，这版能更早完成，但不把它剪成今天就已停业。",
      "next": "ch2_c9",
      "expression": "expression-serious"
    },
    "ch2_c9": {
      "id": "ch2_c9",
      "type": "choice",
      "scene": "ch2_edit",
      "character": null,
      "text": "片尾怎样记住回声，也不替谁提前结束？",
      "flag": "filmEnding",
      "choices": [
        {
          "label": "保留空房与获准使用的声音，明确拍摄和停业日期。",
          "value": "room",
          "next": "ch2_ending_room_01"
        },
        {
          "label": "补拍愿意出镜的人收工，为这一个普通班次结尾。",
          "value": "people",
          "next": "ch2_ending_people_01"
        }
      ]
    },
    "ch2_ending_room_01": {
      "id": "ch2_ending_room_01",
      "type": "line",
      "scene": "ch2_edit",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "留空房吧。结尾写清那是营业间隙拍的，让人知道空着一会儿，和已经结束不是一回事。",
      "next": "ch2_ending_room_02",
      "expression": "expression-serious"
    },
    "ch2_ending_room_02": {
      "id": "ch2_ending_room_02",
      "type": "line",
      "scene": "ch2_edit",
      "speaker": "yelan",
      "character": "yelan",
      "text": "那把日期留够久一点。别一闪过去，别人只记得那扇门关了。",
      "next": "ch2_ending_room_03",
      "expression": "expression-hesitant"
    },
    "ch2_ending_room_03": {
      "id": "ch2_ending_room_03",
      "type": "line",
      "scene": "ch2_edit",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "门不关。镜头停在房间里，最后听见人叫下一位，声音用已经得到同意的那条。",
      "next": "ch2_ending_room_04",
      "expression": "expression-serious"
    },
    "ch2_ending_room_04": {
      "id": "ch2_ending_room_04",
      "type": "line",
      "scene": "ch2_edit",
      "speaker": "narrator",
      "character": null,
      "text": "她把一段悲伤的临时配乐拖走。房间忽然没有那么空，画外有人笑着问，谁又把笔拿跑了。",
      "next": "ch2_cut_join_01"
    },
    "ch2_ending_people_01": {
      "id": "ch2_ending_people_01",
      "type": "line",
      "scene": "ch2_edit",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "再拍一次收工吧。愿意留下的人先确认时间，不要求谁为了结尾重新上班。",
      "next": "ch2_ending_people_02",
      "expression": "expression-serious"
    },
    "ch2_ending_people_02": {
      "id": "ch2_ending_people_02",
      "type": "line",
      "scene": "ch2_edit",
      "speaker": "yelan",
      "character": "yelan",
      "text": "明天下午有一组换班。只拍愿意出镜的人，提前休息的照常走，别在门口把谁等住。",
      "next": "ch2_ending_people_03",
      "expression": "expression-serious"
    },
    "ch2_ending_people_03": {
      "id": "ch2_ending_people_03",
      "type": "line",
      "scene": "ch2_edit",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "那初版推迟到换班后一起看。我只要一段他们走出画面的过程，不喊“再有感情一点”。",
      "next": "ch2_ending_people_04",
      "expression": "expression-serious"
    },
    "ch2_ending_people_04": {
      "id": "ch2_ending_people_04",
      "type": "line",
      "scene": "ch2_edit",
      "speaker": "narrator",
      "character": null,
      "text": "叶岚发出邀请，又给自己标了离开的时间。她也愿意出镜，这一回，却没把自己写成最后一个必须留下的人。",
      "next": "ch2_cut_join_01"
    },
    "ch2_cut_join_01": {
      "id": "ch2_cut_join_01",
      "type": "line",
      "scene": "ch2_edit",
      "speaker": "narrator",
      "character": null,
      "text": "大家各自确认自己的画面和声音。有人要求剪掉一句，我把原文件留好，只在审阅版上做修改，没有劝他再想想。",
      "next": "ch2_cut_join_02"
    },
    "ch2_cut_join_02": {
      "id": "ch2_cut_join_02",
      "type": "line",
      "scene": "ch2_edit",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "十二秒样片我们留在内部，正式这一版换新编号。以后别人拿旧的来问，至少能说明白是哪一段。",
      "next": "ch2_cut_join_03",
      "expression": "expression-serious"
    },
    "ch2_cut_join_03": {
      "id": "ch2_cut_join_03",
      "type": "line",
      "scene": "ch2_edit",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "我明天来放片和验收音。要是有人临时不能来，先发给本人看，没回就不算同意。",
      "next": "ch2_cut_join_04",
      "expression": "expression-serious"
    },
    "ch2_cut_join_04": {
      "id": "ch2_cut_join_04",
      "type": "line",
      "scene": "ch2_edit",
      "speaker": "narrator",
      "character": null,
      "text": "散场时，孟遥关好相机，让它垂在身前。我替她撑着门，她走过门槛，又转身叫了我一声。",
      "next": "ch2_cut_join_05"
    },
    "ch2_cut_join_05": {
      "id": "ch2_cut_join_05",
      "type": "line",
      "scene": "ch2_edit",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "刚才我说怕拍得普通，你没有马上告诉我，我一定能拍得很好。谢谢，那个保证我也知道你给不了。",
      "next": "ch2_show_01",
      "expression": "expression-hesitant"
    },
    "ch2_show_01": {
      "id": "ch2_show_01",
      "type": "line",
      "scene": "ch2_show",
      "speaker": "narrator",
      "character": null,
      "text": "第十四天下午，回声大厅摆了几把朝向屏幕的椅子。没有红布，也没有人用麦克风宣布开始。",
      "next": "ch2_g_ending_shoot"
    },
    "ch2_g_ending_shoot": {
      "id": "ch2_g_ending_shoot",
      "type": "gate",
      "scene": "ch2_show",
      "cases": [
        {
          "flag": "filmEnding",
          "value": "people",
          "next": "ch2_shoot_people_01"
        }
      ],
      "default": "ch2_shoot_room_01"
    },
    "ch2_shoot_people_01": {
      "id": "ch2_shoot_people_01",
      "type": "line",
      "scene": "ch2_show",
      "speaker": "narrator",
      "character": null,
      "text": "愿意出镜的同事换完班，一起走过大厅。周栀停下来等叶岚拉好包，毛狼想摆手，被两人同时笑着赶开。镜头只拍了一次。",
      "next": "ch2_watch_01"
    },
    "ch2_shoot_room_01": {
      "id": "ch2_shoot_room_01",
      "type": "line",
      "scene": "ch2_show",
      "speaker": "narrator",
      "character": null,
      "text": "孟遥补全了日期，空包厢后接上下一段接待的声音。我们确认画面里没有客人的物品，才把它放进今天的审阅版。",
      "next": "ch2_watch_01"
    },
    "ch2_watch_01": {
      "id": "ch2_watch_01",
      "type": "line",
      "scene": "ch2_show",
      "speaker": "narrator",
      "character": null,
      "text": "片子从毛狼伸进来的胳膊开始。旁边的人认出声音，笑起来；毛狼没替自己解释，抬手让我们接着看。",
      "next": "ch2_watch_02"
    },
    "ch2_watch_02": {
      "id": "ch2_watch_02",
      "type": "line",
      "scene": "ch2_show",
      "speaker": "zhouzhi",
      "character": "zhouzhi",
      "text": "这次我终于把后半句说完了。还有，第三十天最后一班结束以后别都围着我问试菜，先让我睡觉。",
      "next": "ch2_watch_03",
      "expression": "expression-smile"
    },
    "ch2_watch_03": {
      "id": "ch2_watch_03",
      "type": "line",
      "scene": "ch2_show",
      "speaker": "yelan",
      "character": "yelan",
      "text": "记住了。短片完成，不增加临时工作内容。",
      "next": "ch2_watch_04",
      "expression": "expression-smile"
    },
    "ch2_watch_04": {
      "id": "ch2_watch_04",
      "type": "line",
      "scene": "ch2_show",
      "speaker": "narrator",
      "character": null,
      "text": "孟遥等大家看完才开口。她没有问感不感动，只问有没有谁被剪成了自己不愿意成为的样子。",
      "next": "ch2_watch_05"
    },
    "ch2_watch_05": {
      "id": "ch2_watch_05",
      "type": "line",
      "scene": "ch2_show",
      "speaker": "maolang",
      "character": "maolang",
      "text": "这版我认。给我发发布用的那份就好，内部样片我不再往别的群里搬。",
      "next": "ch2_watch_06",
      "expression": "expression-serious"
    },
    "ch2_watch_06": {
      "id": "ch2_watch_06",
      "type": "line",
      "scene": "ch2_show",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "这份是两分钟的初版，今天确认的内容可以公开。后面还有拍摄，更新时照样先给本人看。",
      "next": "ch2_watch_07",
      "expression": "expression-serious"
    },
    "ch2_watch_07": {
      "id": "ch2_watch_07",
      "type": "line",
      "scene": "ch2_show",
      "speaker": "narrator",
      "character": null,
      "text": "叶岚按大家确认的范围发布短片初版，附上停业日期、寄存安排和旧样片更正。周栀的补充原文也得到她再次确认。",
      "next": "ch2_g_response"
    },
    "ch2_g_response": {
      "id": "ch2_g_response",
      "type": "gate",
      "scene": "ch2_show",
      "cases": [
        {
          "flag": "spreadResponse",
          "value": "notice",
          "next": "ch2_result_notice_01"
        }
      ],
      "default": "ch2_result_contact_01"
    },
    "ch2_result_notice_01": {
      "id": "ch2_result_notice_01",
      "type": "line",
      "scene": "ch2_show",
      "speaker": "narrator",
      "character": null,
      "text": "前天先发的短说明下面，终于补上这段完整内容。还有人追问为什么突然澄清，叶岚把同一份经过回复过去，没有再剪一版刺激的标题。",
      "next": "ch2_result_01"
    },
    "ch2_result_contact_01": {
      "id": "ch2_result_contact_01",
      "type": "line",
      "scene": "ch2_show",
      "speaker": "narrator",
      "character": null,
      "text": "前天逐个联系过的人里，有人主动补转了新版；也有人一直没回。毛狼在名单上保留“未确认”，没有为了好看把那一格打勾。",
      "next": "ch2_result_01"
    },
    "ch2_result_01": {
      "id": "ch2_result_01",
      "type": "line",
      "scene": "ch2_show",
      "speaker": "narrator",
      "character": null,
      "text": "一份旧副本仍在我们看不到的聊天里。能确认补正的，我们逐一记下；看不到的，没有人保证已经消失。",
      "next": "ch2_result_02"
    },
    "ch2_result_02": {
      "id": "ch2_result_02",
      "type": "line",
      "scene": "ch2_show",
      "speaker": "zhouzhi",
      "character": "zhouzhi",
      "text": "反正下一位再问我摊开没开，我就发这份。再问菜好不好吃，我也得先知道。",
      "next": "ch2_result_03",
      "expression": "expression-smile"
    },
    "ch2_result_03": {
      "id": "ch2_result_03",
      "type": "line",
      "scene": "ch2_show",
      "speaker": "narrator",
      "character": null,
      "text": "屏幕暗了。小满在群里发来一张举着推剪的贴纸，说片子收到了，自己今天的练习也终于没被师傅中途接过去。",
      "next": "ch2_g_salon"
    },
    "ch2_result_05": {
      "id": "ch2_result_05",
      "type": "line",
      "scene": "ch2_show",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "收到。我想当面看，等手里的安排理清，再问你哪天方便。先别替我空着椅子。",
      "next": "ch2_result_06",
      "expression": "expression-smile"
    },
    "ch2_result_06": {
      "id": "ch2_result_06",
      "type": "line",
      "scene": "ch2_show",
      "speaker": "narrator",
      "character": null,
      "text": "她回了个“行，有空再约”。我收起手机。这次没拿“明天一定”把话说满，具体见哪一天，要等两个人都确认。",
      "next": "ch2_piao_invite_01"
    },
    "ch2_night_01": {
      "id": "ch2_night_01",
      "type": "line",
      "scene": "ch2_night",
      "speaker": "narrator",
      "character": null,
      "text": "夜里，贵阳演出队发来资料补充通知：我的申请仍在筛选，符合条件的候选人可以选择到场测评。录用栏依然空着。",
      "next": "ch2_night_02"
    },
    "ch2_night_02": {
      "id": "ch2_night_02",
      "type": "line",
      "scene": "ch2_night",
      "speaker": "narrator",
      "character": null,
      "text": "我把需要补交的材料列在自己的本子上，没拿这封信给今天的短片添一个大团圆。第二十八天的行程，还得逐项安排。",
      "next": "ch2_night_03"
    },
    "ch2_night_03": {
      "id": "ch2_night_03",
      "type": "line",
      "scene": "ch2_night",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "明天先把答应的事做完，再留时间准备测评。两件事都不能只写“尽量”。",
      "next": "ch2_night_04",
      "expression": "expression-determined"
    },
    "ch2_night_04": {
      "id": "ch2_night_04",
      "type": "line",
      "scene": "ch2_night",
      "speaker": "narrator",
      "character": null,
      "text": "手机里有试菜的时间，有小满留下的午后，也有孟遥尚未说完的话。叶岚发完今天的回执，第一次在群里说自己已经下班。",
      "next": "ch2_night_05"
    },
    "ch2_night_05": {
      "id": "ch2_night_05",
      "type": "line",
      "scene": "ch2_night",
      "speaker": "narrator",
      "character": null,
      "text": "我站在檐下，发现自己在意的不只是有没有被需要。我开始想知道，工作结束以后，还能和谁多待一会儿。",
      "next": "ch2_g_signal"
    },
    "ch2_g_signal": {
      "id": "ch2_g_signal",
      "type": "gate",
      "scene": "ch2_night",
      "cases": [
        {
          "flag": "qiuSignal",
          "value": "record",
          "next": "ch2_g_reply"
        }
      ],
      "default": "ch2_leave_01"
    },
    "ch2_g_reply": {
      "id": "ch2_g_reply",
      "type": "gate",
      "scene": "ch2_night",
      "cases": [
        {
          "flag": "qiuReply",
          "value": "reply",
          "next": "ch2_qiu_invite_01"
        }
      ],
      "default": "ch2_leave_01"
    },
    "ch2_qiu_invite_01": {
      "id": "ch2_qiu_invite_01",
      "type": "line",
      "scene": "ch2_night",
      "speaker": "narrator",
      "character": null,
      "text": "那个黄色头像又亮了，问我走了没有。我回了“还在”，它发来空包厢的号码。我先问过叶岚，得到收钥匙前十分钟的空档。",
      "next": "ch2_g_qiu_known"
    },
    "ch2_g_qiu_known": {
      "id": "ch2_g_qiu_known",
      "type": "gate",
      "scene": "ch2_qiu",
      "cases": [
        {
          "flag": "preview",
          "value": "huangqiuqiu",
          "next": "ch2_qiu_known_01"
        }
      ],
      "default": "ch2_qiu_first_01"
    },
    "ch2_qiu_known_01": {
      "id": "ch2_qiu_known_01",
      "type": "line",
      "scene": "ch2_qiu",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "黄球球还是那个托着腮的圆球。看见我先望向调音台，她的小手敲了敲椅背。",
      "next": "ch2_qiu_known_02",
      "expression": "expression-hesitant"
    },
    "ch2_qiu_known_02": {
      "id": "ch2_qiu_known_02",
      "type": "line",
      "scene": "ch2_qiu",
      "speaker": "huangqiuqiu",
      "character": "huangqiuqiu",
      "text": "认识过了也不算吗？今天能先跟我打招呼，再看那台机器吗？",
      "next": "ch2_qiu_known_03",
      "expression": "expression-displeased"
    },
    "ch2_qiu_known_03": {
      "id": "ch2_qiu_known_03",
      "type": "line",
      "scene": "ch2_qiu",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "晚上好，黄球球。今天还想聊吗？",
      "next": "ch2_qiu_known_04",
      "expression": "expression-embarrassed"
    },
    "ch2_qiu_known_04": {
      "id": "ch2_qiu_known_04",
      "type": "line",
      "scene": "ch2_qiu",
      "speaker": "huangqiuqiu",
      "character": "huangqiuqiu",
      "text": "想。这次轮到我问一句。",
      "next": "ch2_bg_qiu_01",
      "expression": "expression-smile"
    },
    "ch2_qiu_first_01": {
      "id": "ch2_qiu_first_01",
      "type": "line",
      "scene": "ch2_qiu",
      "speaker": "narrator",
      "character": null,
      "text": "我推门进去。调音台旁有个黄色圆球，深色眉毛下的大眼睛望着我，两只小手托住腮。它先指了指空椅子。",
      "next": "ch2_qiu_first_02"
    },
    "ch2_qiu_first_02": {
      "id": "ch2_qiu_first_02",
      "type": "line",
      "scene": "ch2_qiu",
      "speaker": "陌生的声音",
      "character": null,
      "text": "先别找螺丝。我叫黄球球，成年女性，二十四岁。你可以坐下问，但今晚不开放拆机参观。",
      "next": "ch2_qiu_first_03"
    },
    "ch2_qiu_first_03": {
      "id": "ch2_qiu_first_03",
      "type": "line",
      "scene": "ch2_qiu",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "我是文文。那天我敲过三下，听见你接上了。后半句话，你还想说吗？",
      "next": "ch2_qiu_first_04",
      "expression": "expression-surprised"
    },
    "ch2_qiu_first_04": {
      "id": "ch2_qiu_first_04",
      "type": "line",
      "scene": "ch2_qiu",
      "speaker": "huangqiuqiu",
      "character": "huangqiuqiu",
      "text": "想。我想说“先让我说完，再决定要不要修”。你没说出来的，我听不见，也猜不到；我自己的来历，今天不想讲。",
      "next": "ch2_qiu_first_05",
      "expression": "expression-serious"
    },
    "ch2_qiu_first_05": {
      "id": "ch2_qiu_first_05",
      "type": "line",
      "scene": "ch2_qiu",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "好，黄球球。椅子我坐这把，可以吗？",
      "next": "ch2_qiu_first_06",
      "expression": "expression-serious"
    },
    "ch2_qiu_first_06": {
      "id": "ch2_qiu_first_06",
      "type": "line",
      "scene": "ch2_qiu",
      "speaker": "huangqiuqiu",
      "character": "huangqiuqiu",
      "text": "可以。下次来，先跟我打招呼，别让那台机器每次都排我前面。今天轮到我问一句。",
      "next": "ch2_bg_qiu_01",
      "expression": "expression-smile"
    },
    "ch2_qiu_talk_01": {
      "id": "ch2_qiu_talk_01",
      "type": "line",
      "scene": "ch2_qiu",
      "speaker": "huangqiuqiu",
      "character": "huangqiuqiu",
      "text": "你没有东西要修的时候，会干什么？别答“等着修下一样”，这不算休息。",
      "next": "ch2_qiu_talk_02",
      "expression": "expression-hesitant"
    },
    "ch2_qiu_talk_02": {
      "id": "ch2_qiu_talk_02",
      "type": "line",
      "scene": "ch2_qiu",
      "speaker": "narrator",
      "character": null,
      "text": "我原本想讲今天的短片，话到嘴边又停住。她问的很具体，却不是我已经准备好的一份工作汇报。",
      "next": "ch2_qiu_talk_03"
    },
    "ch2_qiu_talk_03": {
      "id": "ch2_qiu_talk_03",
      "type": "line",
      "scene": "ch2_qiu",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "小时候会在雨停后踩水。挑看着最深的，结果鞋漏了，回家挨说。现在会站旁边先判断鞋能不能扛住。",
      "next": "ch2_qiu_talk_04",
      "expression": "expression-smile"
    },
    "ch2_qiu_talk_04": {
      "id": "ch2_qiu_talk_04",
      "type": "line",
      "scene": "ch2_qiu",
      "speaker": "huangqiuqiu",
      "character": "huangqiuqiu",
      "text": "原来你从小就在做泡水测试。那你现在，还想踩吗？",
      "next": "ch2_qiu_talk_05",
      "expression": "expression-smile"
    },
    "ch2_qiu_talk_05": {
      "id": "ch2_qiu_talk_05",
      "type": "line",
      "scene": "ch2_qiu",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "有时候想。也会想跟人再坐一会儿，不用等她有什么事交给我。",
      "next": "ch2_qiu_talk_06",
      "expression": "expression-hesitant"
    },
    "ch2_qiu_talk_06": {
      "id": "ch2_qiu_talk_06",
      "type": "line",
      "scene": "ch2_qiu",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "她没追问那个人是谁，圆球往椅子这边偏了些。我第一次看见她想接话，又自己等了一下。",
      "next": "ch2_qiu_talk_07",
      "expression": "expression-hesitant"
    },
    "ch2_qiu_talk_07": {
      "id": "ch2_qiu_talk_07",
      "type": "line",
      "scene": "ch2_qiu",
      "speaker": "huangqiuqiu",
      "character": "huangqiuqiu",
      "text": "那坐完这十分钟。你不拆我，我也不替你修今天。",
      "next": "ch2_qiu_talk_08",
      "expression": "expression-smile"
    },
    "ch2_qiu_talk_08": {
      "id": "ch2_qiu_talk_08",
      "type": "line",
      "scene": "ch2_qiu",
      "speaker": "narrator",
      "character": null,
      "text": "门外有人轻轻敲门提醒时间。我起身前说了“下次见，黄球球”，这次她先松开手，向我摆了一下。",
      "next": "ch2_leave_01"
    },
    "ch2_leave_01": {
      "id": "ch2_leave_01",
      "type": "line",
      "scene": "ch2_night",
      "speaker": "narrator",
      "character": null,
      "text": "回家的路上，雨短暂地小了。路灯下还有积水，我绕开最深的那一处，把明天的一段空闲认真留了下来。",
      "next": "end_ch2",
      "bg": "slope_junction_night",
      "location": "回家的坡路"
    },
    "end_ch2": {
      "id": "end_ch2",
      "type": "end",
      "scene": "ch2_night",
      "character": null,
      "title": "第二章 · 镜头没有拍到的",
      "text": "工作样片已经无法全部收回，完整的话却终于由当事人说了出来。短片有了能公开的初版，回声还在营业，大家各自的生活也还在继续。明天，我想亲自赴一个约。",
      "nextChapter": "第三章 · 想见你，不必有事：第十五天起，为一段关系留出具体的时间。",
      "next": "ch3_open_01",
      "bg": "slope_junction_night",
      "location": "回家的坡路"
    },
    "ch2_g_inventory": {
      "id": "ch2_g_inventory",
      "type": "gate",
      "scene": "ch2_take",
      "cases": [
        {
          "flag": "inventory",
          "value": "full",
          "next": "ch2_inventory_full_01"
        }
      ],
      "default": "ch2_inventory_limited_01"
    },
    "ch2_inventory_full_01": {
      "id": "ch2_inventory_full_01",
      "type": "line",
      "scene": "ch2_take",
      "speaker": "narrator",
      "character": null,
      "text": "叶岚翻到我交的整张清单，指着我们一起找出的旧编号。我照表取出线材，这回不用再猜哪一套能上。",
      "next": "ch2_open_13"
    },
    "ch2_inventory_limited_01": {
      "id": "ch2_inventory_limited_01",
      "type": "line",
      "scene": "ch2_take",
      "speaker": "narrator",
      "character": null,
      "text": "接班同事照我留下的柜号找出线材，把他补完签名的那页交给叶岚。清单已经走到另一个人手里，照样能用。",
      "next": "ch2_open_13"
    },
    "ch2_g_salon": {
      "id": "ch2_g_salon",
      "type": "gate",
      "scene": "ch2_show",
      "cases": [
        {
          "flag": "salon",
          "value": "portfolio",
          "next": "ch2_salon_portfolio_01"
        }
      ],
      "default": "ch2_salon_model_01"
    },
    "ch2_salon_portfolio_01": {
      "id": "ch2_salon_portfolio_01",
      "type": "line",
      "scene": "ch2_show",
      "speaker": "xiaoman",
      "character": null,
      "text": "上次作品页缺的侧面补上了，还有一张不满意。明天午后有空再说，今天别加班看我的头发。",
      "next": "ch2_result_05"
    },
    "ch2_salon_model_01": {
      "id": "ch2_salon_model_01",
      "type": "line",
      "scene": "ch2_show",
      "speaker": "xiaoman",
      "character": null,
      "text": "你上次当模特的照片我留着了，今天拍的想放旁边比比。明天午后有空再说，今天别加班看头发。",
      "next": "ch2_result_05"
    },
    "ch2_bg_qiu_01": {
      "id": "ch2_bg_qiu_01",
      "type": "line",
      "scene": "ch2_qiu",
      "speaker": "huangqiuqiu",
      "character": "huangqiuqiu",
      "text": "以前散场的人常在门外说“改天再来”。我听见了，可有时等到的只是下一批脚步声。",
      "next": "ch2_bg_qiu_02",
      "expression": "expression-hesitant"
    },
    "ch2_bg_qiu_02": {
      "id": "ch2_bg_qiu_02",
      "type": "line",
      "scene": "ch2_qiu",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "你会一直等那一句？",
      "next": "ch2_bg_qiu_03"
    },
    "ch2_bg_qiu_03": {
      "id": "ch2_bg_qiu_03",
      "type": "line",
      "scene": "ch2_qiu",
      "speaker": "huangqiuqiu",
      "character": "huangqiuqiu",
      "text": "也不知道哪一句算约定。你今天肯坐下，我就想先问问你，不想又只听一句“下回再说”。",
      "next": "ch2_bg_qiu_04"
    },
    "ch2_bg_qiu_04": {
      "id": "ch2_bg_qiu_04",
      "type": "line",
      "scene": "ch2_qiu",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "那今天先坐完说好的十分钟。你问，我听着。",
      "next": "ch2_qiu_talk_01"
    },
    "ch3_open_01": {
      "id": "ch3_open_01",
      "type": "line",
      "scene": "ch3_open",
      "speaker": "narrator",
      "character": null,
      "text": "第十五天下午，我到回声时，大厅的灯只开了一半。窗外雨歇了十分钟，地砖上却还留着来往的湿鞋印。",
      "next": "ch3_open_02"
    },
    "ch3_open_02": {
      "id": "ch3_open_02",
      "type": "line",
      "scene": "ch3_open",
      "speaker": "narrator",
      "character": null,
      "text": "昨日确认的短片初版已经发出。开始有人把那十二秒之外的话看完，旧转发仍在，却不再是我们唯一能说的版本。",
      "next": "ch3_open_03"
    },
    "ch3_open_03": {
      "id": "ch3_open_03",
      "type": "line",
      "scene": "ch3_open",
      "speaker": "maolang",
      "character": "maolang",
      "text": "有人说片名土。你们看，我最开始那个至少洋气。",
      "next": "ch3_open_04",
      "expression": "expression-displeased"
    },
    "ch3_open_04": {
      "id": "ch3_open_04",
      "type": "line",
      "scene": "ch3_open",
      "speaker": "zhouzhi",
      "character": "zhouzhi",
      "text": "《最后一夜，回声不灭》？听起来像音箱坏了。",
      "next": "ch3_open_05",
      "expression": "expression-smile"
    },
    "ch3_open_05": {
      "id": "ch3_open_05",
      "type": "line",
      "scene": "ch3_open",
      "speaker": "maolang",
      "character": "maolang",
      "text": "你怎么还背得下来。",
      "next": "ch3_open_06"
    },
    "ch3_open_06": {
      "id": "ch3_open_06",
      "type": "line",
      "scene": "ch3_open",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "受过伤的耳朵记得牢。",
      "next": "ch3_open_07"
    },
    "ch3_open_07": {
      "id": "ch3_open_07",
      "type": "line",
      "scene": "ch3_open",
      "speaker": "narrator",
      "character": "maolang",
      "text": "毛狼把我手里的纸杯拿走，换成一只没有漏底的。他的回击晚了一步，我们却都笑出来了。",
      "next": "ch3_open_08",
      "expression": "expression-smile"
    },
    "ch3_open_08": {
      "id": "ch3_open_08",
      "type": "line",
      "scene": "ch3_open",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "初版别继续加东西了。后面有补拍，另存一版。",
      "next": "ch3_open_09",
      "expression": "expression-serious"
    },
    "ch3_open_09": {
      "id": "ch3_open_09",
      "type": "line",
      "scene": "ch3_open",
      "speaker": "yelan",
      "character": "yelan",
      "text": "月底还没到，收尾也还要做。今天先各自过日子，别全堵在这儿。",
      "next": "ch3_open_10",
      "expression": "expression-smile"
    },
    "ch3_open_10": {
      "id": "ch3_open_10",
      "type": "line",
      "scene": "ch3_open",
      "speaker": "narrator",
      "character": null,
      "text": "她说完，自己还在看群里的排班，周栀伸手在她眼前晃了一下，提醒“各自”也包括她。",
      "next": "ch3_open_11"
    },
    "ch3_open_11": {
      "id": "ch3_open_11",
      "type": "line",
      "scene": "ch3_open",
      "speaker": "narrator",
      "character": null,
      "text": "小满发来一张第十八天考核的通知，附了一句“看到的请假装没看到”。毛狼回她：“已转发至我的大脑。”",
      "next": "ch3_open_12"
    },
    "ch3_open_12": {
      "id": "ch3_open_12",
      "type": "line",
      "scene": "ch3_open",
      "speaker": "narrator",
      "character": null,
      "text": "贵阳发来的补充材料要求，我已经记进日历。第二十八天的行程仍在，尚无录用结果；第三十天回声停业，也不会因片子完成就往后挪。",
      "next": "ch3_open_13"
    },
    "ch3_open_13": {
      "id": "ch3_open_13",
      "type": "line",
      "scene": "ch3_open",
      "speaker": "narrator",
      "character": null,
      "text": "旧监听还在待查清单上。我和师匠约好按空档复测，不能因为它安静几晚就划掉。",
      "next": "ch3_open_14"
    },
    "ch3_open_14": {
      "id": "ch3_open_14",
      "type": "line",
      "scene": "ch3_open",
      "speaker": "narrator",
      "character": null,
      "text": "这半个月，我很擅长问“还有哪儿要帮忙”。问题问多了，想见谁也像一张等着接的工单。",
      "next": "ch3_open_15"
    },
    "ch3_open_15": {
      "id": "ch3_open_15",
      "type": "line",
      "scene": "ch3_open",
      "speaker": "narrator",
      "character": null,
      "text": "今天下午却没有急修。接下来几天，我能把一段时间提前留出来，去见一个人，或者先把自己的事和朋友的约定做好。",
      "next": "ch3_open_16"
    },
    "ch3_open_16": {
      "id": "ch3_open_16",
      "type": "line",
      "scene": "ch3_open",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "我先走一趟。到时候有变动，我提前说。",
      "next": "ch3_open_17"
    },
    "ch3_open_17": {
      "id": "ch3_open_17",
      "type": "line",
      "scene": "ch3_open",
      "speaker": "maolang",
      "character": "maolang",
      "text": "行。别又把“走一趟”走成失踪人口。还有，你杯子在我这儿。",
      "next": "ch3_open_18"
    },
    "ch3_open_18": {
      "id": "ch3_open_18",
      "type": "line",
      "scene": "ch3_open",
      "speaker": "narrator",
      "character": null,
      "text": "我拿回纸杯，把刚想说的“有事找我”咽下去。手机握在手里，这次先由我开口。",
      "next": "ch3_route_choice"
    },
    "ch3_route_choice": {
      "id": "ch3_route_choice",
      "type": "choice",
      "scene": "ch3_open",
      "character": null,
      "text": "接下来的几天空档，我想怎样安排？",
      "flag": "route",
      "choices": [
        {
          "label": "约小满见面，陪她走过考核前后。",
          "value": "xiaoman",
          "next": "ch3_piao_reply_xiaoman"
        },
        {
          "label": "赴周栀的试菜之约，也留一点两个人的时间。",
          "value": "zhouzhi",
          "next": "ch3_piao_reply_zhouzhi"
        },
        {
          "label": "把与孟遥约好的话谈完，再一起完成一段新作品。",
          "value": "mengyao",
          "next": "ch3_piao_reply_mengyao"
        },
        {
          "label": "去看叶岚的新工作准备，下班以后再一起走走。",
          "value": "yelan",
          "next": "ch3_piao_reply_yelan"
        },
        {
          "label": "先和毛狼、师匠把职业准备做完，认真过朋友的日常。",
          "value": "solo",
          "next": "ch3_piao_reply_solo"
        },
        {
          "label": "约飘一起走老街，认真回应这段正在靠近的关系。",
          "value": "piao",
          "next": "ch3_piao_a_01"
        },
        {
          "label": "回应黄球球的邀约，去听她今天想聊的小事。",
          "value": "huangqiuqiu",
          "next": "ch3_piao_reply_huangqiuqiu",
          "requires": [
            {
              "flag": "qiuSignal",
              "value": "record"
            },
            {
              "flag": "qiuReply",
              "value": "reply"
            }
          ]
        }
      ]
    },
    "ch3_xiaoman_a_01": {
      "id": "ch3_xiaoman_a_01",
      "type": "line",
      "scene": "ch3_xiaoman15",
      "speaker": "narrator",
      "character": null,
      "text": "我问小满下午能不能去坐一会儿。她回“可以”，又补“别穿白领子”，过两秒才说今天不会拿我练手。",
      "next": "ch3_xiaoman_a_02"
    },
    "ch3_xiaoman_a_02": {
      "id": "ch3_xiaoman_a_02",
      "type": "line",
      "scene": "ch3_xiaoman15",
      "speaker": "narrator",
      "character": null,
      "text": "到店时，她正在收练习用的围布，发梢粘在袖口上。我指了指，她却先拍自己的另一只手。",
      "next": "ch3_xiaoman_a_03"
    },
    "ch3_xiaoman_a_03": {
      "id": "ch3_xiaoman_a_03",
      "type": "line",
      "scene": "ch3_xiaoman15",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "哪儿？你说左边，是你的左边还是我的左边？",
      "next": "ch3_xiaoman_a_04",
      "expression": "expression-surprised"
    },
    "ch3_xiaoman_a_04": {
      "id": "ch3_xiaoman_a_04",
      "type": "line",
      "scene": "ch3_xiaoman15",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "以后我随身带个箭头。",
      "next": "ch3_xiaoman_a_05"
    },
    "ch3_xiaoman_a_05": {
      "id": "ch3_xiaoman_a_05",
      "type": "line",
      "scene": "ch3_xiaoman15",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "她终于掸掉那撮头发，笑了一下，随即把第十八天的安排推给我看。限时修剪、整理，再说明自己的处理思路。",
      "next": "ch3_xiaoman_a_06",
      "expression": "expression-hesitant"
    },
    "ch3_xiaoman_a_06": {
      "id": "ch3_xiaoman_a_06",
      "type": "line",
      "scene": "ch3_xiaoman15",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "前两项我能练。讲怎么做的，我一着急就说“反正就这样”。",
      "next": "ch3_xiaoman_a_07"
    },
    "ch3_xiaoman_a_07": {
      "id": "ch3_xiaoman_a_07",
      "type": "line",
      "scene": "ch3_xiaoman15",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "评的人会不会回答“反正不行”？",
      "next": "ch3_xiaoman_a_08"
    },
    "ch3_xiaoman_a_08": {
      "id": "ch3_xiaoman_a_08",
      "type": "line",
      "scene": "ch3_xiaoman15",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "所以才找你。你负责坐对面，脸尽量欠一点。",
      "next": "ch3_xiaoman_a_09"
    },
    "ch3_xiaoman_a_09": {
      "id": "ch3_xiaoman_a_09",
      "type": "line",
      "scene": "ch3_xiaoman15",
      "speaker": "narrator",
      "character": null,
      "text": "我拉开椅子。镜子里她扶正作品夹，手指在封皮上来回划，最后还是翻开了最早那一页。",
      "next": "ch3_bg_xiaoman_15_01"
    },
    "ch3_xiaoman_memory": {
      "id": "ch3_xiaoman_memory",
      "type": "gate",
      "scene": "ch3_xiaoman15",
      "cases": [
        {
          "flag": "salon",
          "value": "portfolio",
          "next": "ch3_xiaoman_memory_p_01"
        }
      ],
      "default": "ch3_xiaoman_memory_m_01"
    },
    "ch3_xiaoman_memory_p_01": {
      "id": "ch3_xiaoman_memory_p_01",
      "type": "line",
      "scene": "ch3_xiaoman15",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "上回挑照片，你说光太亮就看不清过渡。我后来换了灯拍，确实差好多。",
      "next": "ch3_xiaoman_memory_p_02"
    },
    "ch3_xiaoman_memory_p_02": {
      "id": "ch3_xiaoman_memory_p_02",
      "type": "line",
      "scene": "ch3_xiaoman15",
      "speaker": "narrator",
      "character": null,
      "text": "她翻到那张没加滤镜的图。旁边的修改记录又多了几行，已经不是我们那天一起写下的那一点。",
      "next": "ch3_xiaoman_b_01"
    },
    "ch3_xiaoman_memory_m_01": {
      "id": "ch3_xiaoman_memory_m_01",
      "type": "line",
      "scene": "ch3_xiaoman15",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "你上回剪完那张侧后面，我留着了。这几天又找人练，不能逮着一个脑袋薅。",
      "next": "ch3_xiaoman_memory_m_02"
    },
    "ch3_xiaoman_memory_m_02": {
      "id": "ch3_xiaoman_memory_m_02",
      "type": "line",
      "scene": "ch3_xiaoman15",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "谢谢，我的头终于有了休息日。",
      "next": "ch3_xiaoman_b_01"
    },
    "ch3_xiaoman_b_01": {
      "id": "ch3_xiaoman_b_01",
      "type": "line",
      "scene": "ch3_xiaoman15",
      "speaker": "narrator",
      "character": null,
      "text": "她终于摊开两张记录，问我先陪她做哪一项。我看见另一页已经写着今后几天的练习时间。",
      "next": "ch3_xiaoman_b_02"
    },
    "ch3_xiaoman_b_02": {
      "id": "ch3_xiaoman_b_02",
      "type": "line",
      "scene": "ch3_xiaoman15",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "别劝我今天歇了。我不是累得拿不动剪刀，是越拖越不敢做。",
      "next": "ch3_xiaoman_b_03",
      "expression": "expression-serious"
    },
    "ch3_xiaoman_b_03": {
      "id": "ch3_xiaoman_b_03",
      "type": "line",
      "scene": "ch3_xiaoman15",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "那我今天当个管用的观众。",
      "next": "ch3_xiaoman_b_04"
    },
    "ch3_xiaoman_b_04": {
      "id": "ch3_xiaoman_b_04",
      "type": "line",
      "scene": "ch3_xiaoman15",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "观众可以，别鼓掌。店里人会以为我考上驾照了。",
      "next": "ch3_xiaoman_choice"
    },
    "ch3_xiaoman_choice": {
      "id": "ch3_xiaoman_choice",
      "type": "choice",
      "scene": "ch3_xiaoman15",
      "character": "xiaoman",
      "text": "她想先练一件真正卡住她的事，我陪她怎样准备？",
      "flag": "ch3XiaomanSupport",
      "choices": [
        {
          "label": "做一次限时讲解演练，记下我确实没听懂的地方。",
          "value": "rehearse",
          "next": "ch3_xiaoman_pick_r_01"
        },
        {
          "label": "陪她逐张比较作品，让她自己选出要解释的变化。",
          "value": "compare",
          "next": "ch3_xiaoman_pick_c_01"
        }
      ]
    },
    "ch3_xiaoman_pick_r_01": {
      "id": "ch3_xiaoman_pick_r_01",
      "type": "line",
      "scene": "ch3_xiaoman15",
      "speaker": "narrator",
      "character": null,
      "text": "我把手机计时放到镜子旁。第一遍她讲得比剪刀还快，到了处理耳后那一步，自己也停住了。",
      "next": "ch3_xiaoman_pick_r_02"
    },
    "ch3_xiaoman_pick_r_02": {
      "id": "ch3_xiaoman_pick_r_02",
      "type": "line",
      "scene": "ch3_xiaoman15",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "等会儿。前面说留长，这里为什么又剪掉？",
      "next": "ch3_xiaoman_pick_r_03"
    },
    "ch3_xiaoman_pick_r_03": {
      "id": "ch3_xiaoman_pick_r_03",
      "type": "line",
      "scene": "ch3_xiaoman15",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "不是同一层。我得先说这个……行，重来，别替我接。",
      "next": "ch3_xiaoman_pick_r_04",
      "expression": "expression-serious"
    },
    "ch3_xiaoman_pick_r_04": {
      "id": "ch3_xiaoman_pick_r_04",
      "type": "line",
      "scene": "ch3_xiaoman15",
      "speaker": "narrator",
      "character": null,
      "text": "第三遍，她仍会看时间，但能把那处说明白。我在纸角写“听懂了”，她拿过去看了两次才收好。",
      "next": "ch3_xiaoman_c_01"
    },
    "ch3_xiaoman_pick_c_01": {
      "id": "ch3_xiaoman_pick_c_01",
      "type": "line",
      "scene": "ch3_xiaoman15",
      "speaker": "narrator",
      "character": null,
      "text": "我把照片按拍摄次序摆开，先遮住她写的评价。小满指着一张说进步最大，又把手挪回来。",
      "next": "ch3_xiaoman_pick_c_02"
    },
    "ch3_xiaoman_pick_c_02": {
      "id": "ch3_xiaoman_pick_c_02",
      "type": "line",
      "scene": "ch3_xiaoman15",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "等一下，这张只是吹得好看。湿的时候，右边还是厚。",
      "next": "ch3_xiaoman_pick_c_03"
    },
    "ch3_xiaoman_pick_c_03": {
      "id": "ch3_xiaoman_pick_c_03",
      "type": "line",
      "scene": "ch3_xiaoman15",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "那要不要换一张？",
      "next": "ch3_xiaoman_pick_c_04"
    },
    "ch3_xiaoman_pick_c_04": {
      "id": "ch3_xiaoman_pick_c_04",
      "type": "line",
      "scene": "ch3_xiaoman15",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "不换。我得会说它哪儿不好，不能每次都把最好看的摆在最前面。",
      "next": "ch3_xiaoman_c_01",
      "expression": "expression-serious"
    },
    "ch3_xiaoman_c_01": {
      "id": "ch3_xiaoman_c_01",
      "type": "line",
      "scene": "ch3_xiaoman15",
      "speaker": "narrator",
      "character": null,
      "text": "练完已经超过半小时。客人推门进来，小满立刻把椅子让出去；我替她收起照片，没再占着她上班的地方。",
      "next": "ch3_xiaoman_c_02"
    },
    "ch3_xiaoman_c_02": {
      "id": "ch3_xiaoman_c_02",
      "type": "line",
      "scene": "ch3_xiaoman15",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "第十八天考完我告诉你。要是没过，你不许隔着手机“哈哈哈”。",
      "next": "ch3_xiaoman_c_03"
    },
    "ch3_xiaoman_c_03": {
      "id": "ch3_xiaoman_c_03",
      "type": "line",
      "scene": "ch3_xiaoman15",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "我见面笑。",
      "next": "ch3_xiaoman_c_04"
    },
    "ch3_xiaoman_c_04": {
      "id": "ch3_xiaoman_c_04",
      "type": "line",
      "scene": "ch3_xiaoman15",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "你试试。",
      "next": "ch3_xiaoman_d_01",
      "expression": "expression-smile"
    },
    "ch3_xiaoman_d_01": {
      "id": "ch3_xiaoman_d_01",
      "type": "line",
      "scene": "ch3_xiaoman18",
      "speaker": "narrator",
      "character": null,
      "text": "第十八天下午，小满发来一句“出来了”。我走到店里时，考核用的围布已经叠好，她坐在镜子最边上。",
      "next": "ch3_xiaoman_d_02"
    },
    "ch3_xiaoman_d_02": {
      "id": "ch3_xiaoman_d_02",
      "type": "line",
      "scene": "ch3_xiaoman18",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "没过。左后区过渡有道坎，时间也超了。不是考官眼神不好。",
      "next": "ch3_xiaoman_d_03",
      "expression": "expression-downcast"
    },
    "ch3_xiaoman_d_03": {
      "id": "ch3_xiaoman_d_03",
      "type": "line",
      "scene": "ch3_xiaoman18",
      "speaker": "narrator",
      "character": null,
      "text": "她把记录递给我。纸上圈了两个地方，合格栏空着；我没伸手去翻她收在下面的照片。",
      "next": "ch3_xiaoman_d_04"
    },
    "ch3_xiaoman_d_04": {
      "id": "ch3_xiaoman_d_04",
      "type": "line",
      "scene": "ch3_xiaoman18",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "我能看看你觉得最可惜的地方吗？",
      "next": "ch3_xiaoman_d_05"
    },
    "ch3_xiaoman_d_05": {
      "id": "ch3_xiaoman_d_05",
      "type": "line",
      "scene": "ch3_xiaoman18",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "现在不想看。脑袋里已经放了八百遍。",
      "next": "ch3_xiaoman_d_06"
    },
    "ch3_xiaoman_d_06": {
      "id": "ch3_xiaoman_d_06",
      "type": "line",
      "scene": "ch3_xiaoman18",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "我在旁边坐下来。店里的吹风机响着，她盯住镜子，先把扎头发的皮筋扯松，又重新扎了一遍。",
      "next": "ch3_bg_xiaoman_18_01",
      "expression": "expression-downcast"
    },
    "ch3_xiaoman_d_07": {
      "id": "ch3_xiaoman_d_07",
      "type": "line",
      "scene": "ch3_xiaoman18",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "我还以为这次能顺便把那句“助理”拿掉。挺好笑的，连改名片都想过了。",
      "next": "ch3_xiaoman_d_08"
    },
    "ch3_xiaoman_d_08": {
      "id": "ch3_xiaoman_d_08",
      "type": "line",
      "scene": "ch3_xiaoman18",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "不好笑。你准备那么久，会想很正常。",
      "next": "ch3_xiaoman_d_09"
    },
    "ch3_xiaoman_d_09": {
      "id": "ch3_xiaoman_d_09",
      "type": "line",
      "scene": "ch3_xiaoman18",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "我知道你要说什么。“下次一定”是吧？",
      "next": "ch3_xiaoman_d_10"
    },
    "ch3_xiaoman_d_10": {
      "id": "ch3_xiaoman_d_10",
      "type": "line",
      "scene": "ch3_xiaoman18",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "我不知道。想问你等会儿吃什么，又怕显得我只会惦记饭。",
      "next": "ch3_xiaoman_d_11"
    },
    "ch3_xiaoman_d_11": {
      "id": "ch3_xiaoman_d_11",
      "type": "line",
      "scene": "ch3_xiaoman18",
      "speaker": "narrator",
      "character": null,
      "text": "她鼻子里轻轻笑了一声，没抬头。过了一阵，她自己把记录翻回来，用笔圈出左后区。",
      "next": "ch3_xiaoman_d_12"
    },
    "ch3_xiaoman_d_12": {
      "id": "ch3_xiaoman_d_12",
      "type": "line",
      "scene": "ch3_xiaoman18",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "这部分得重新练。只是今天不剪了，我怕带着气把谁剪成土豆。",
      "next": "ch3_xiaoman_d_13",
      "expression": "expression-serious"
    },
    "ch3_xiaoman_d_13": {
      "id": "ch3_xiaoman_d_13",
      "type": "line",
      "scene": "ch3_xiaoman18",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "我的圆脸承受不起第二次加工。",
      "next": "ch3_xiaoman_d_14"
    },
    "ch3_xiaoman_d_14": {
      "id": "ch3_xiaoman_d_14",
      "type": "line",
      "scene": "ch3_xiaoman18",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "你本来就是成品。",
      "next": "ch3_xiaoman_d_15"
    },
    "ch3_xiaoman_d_15": {
      "id": "ch3_xiaoman_d_15",
      "type": "line",
      "scene": "ch3_xiaoman18",
      "speaker": "narrator",
      "character": null,
      "text": "她给店里的师傅发了一条请教消息，问第二十天能否帮看一次专项练习。发完，她把笔盖按上，声音终于不那么绷。",
      "next": "ch3_xiaoman_d_16"
    },
    "ch3_xiaoman_d_16": {
      "id": "ch3_xiaoman_d_16",
      "type": "line",
      "scene": "ch3_xiaoman18",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "我自己报名复练。下次考期还没出，不用你帮我催。",
      "next": "ch3_xiaoman_d_17"
    },
    "ch3_xiaoman_d_17": {
      "id": "ch3_xiaoman_d_17",
      "type": "line",
      "scene": "ch3_xiaoman18",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "那我再待一会儿。走的时候叫我。",
      "next": "ch3_xiaoman_d_18"
    },
    "ch3_xiaoman_d_18": {
      "id": "ch3_xiaoman_d_18",
      "type": "line",
      "scene": "ch3_xiaoman18",
      "speaker": "narrator",
      "character": null,
      "text": "她用鞋尖把我椅子旁的碎发拢到一处，像终于找到一个不必立刻做好的小动作。",
      "next": "ch3_xiaoman_d_19"
    },
    "ch3_xiaoman_d_19": {
      "id": "ch3_xiaoman_d_19",
      "type": "line",
      "scene": "ch3_xiaoman18",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "那先坐五分钟。等会儿再去吃，你现在起身我就以为你真饿坏了。",
      "next": "ch3_xiaoman_d_20"
    },
    "ch3_xiaoman_d_20": {
      "id": "ch3_xiaoman_d_20",
      "type": "line",
      "scene": "ch3_xiaoman18",
      "speaker": "narrator",
      "character": null,
      "text": "我把外套重新搭回椅背。镜子里两个人都没看成绩单，那五分钟比刚才安静，也没有那么难熬。",
      "next": "ch3_xiaoman_e_01"
    },
    "ch3_xiaoman_e_01": {
      "id": "ch3_xiaoman_e_01",
      "type": "line",
      "scene": "ch3_xiaoman21",
      "speaker": "narrator",
      "character": null,
      "text": "第二十一天下午，我在坡口买了两个热饼，到店时小满刚把练习记录发给师傅，手指上还压着一道皮筋印。",
      "next": "ch3_xiaoman_e_02"
    },
    "ch3_xiaoman_e_02": {
      "id": "ch3_xiaoman_e_02",
      "type": "line",
      "scene": "ch3_xiaoman21",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "右边这回稳了，左边慢。你看，我已经从到处不行进化成指定区域不行。",
      "next": "ch3_xiaoman_e_03",
      "expression": "expression-smile"
    },
    "ch3_xiaoman_e_03": {
      "id": "ch3_xiaoman_e_03",
      "type": "line",
      "scene": "ch3_xiaoman21",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "业务范围缩小了，可喜可贺。",
      "next": "ch3_xiaoman_e_04"
    },
    "ch3_xiaoman_e_04": {
      "id": "ch3_xiaoman_e_04",
      "type": "line",
      "scene": "ch3_xiaoman21",
      "speaker": "narrator",
      "character": null,
      "text": "她接过纸袋，先问我是不是没吃饭。听说我只是想送来，她捏着袋口，声音忽然小了一点。",
      "next": "ch3_xiaoman_e_05"
    },
    "ch3_xiaoman_e_05": {
      "id": "ch3_xiaoman_e_05",
      "type": "line",
      "scene": "ch3_xiaoman21",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "那你坐会儿。今天真不剪，你别习惯性低头。",
      "next": "ch3_xiaoman_e_06"
    },
    "ch3_xiaoman_e_06": {
      "id": "ch3_xiaoman_e_06",
      "type": "line",
      "scene": "ch3_xiaoman21",
      "speaker": "narrator",
      "character": null,
      "text": "我坐在那把已经熟悉的椅子上。她把一张旧纸放到镜前，是第十五天我们用过的那张。",
      "next": "ch3_bg_xiaoman_21_01"
    },
    "ch3_xiaoman_payoff": {
      "id": "ch3_xiaoman_payoff",
      "type": "gate",
      "scene": "ch3_xiaoman21",
      "cases": [
        {
          "flag": "ch3XiaomanSupport",
          "value": "rehearse",
          "next": "ch3_xiaoman_pay_r_01"
        }
      ],
      "default": "ch3_xiaoman_pay_c_01"
    },
    "ch3_xiaoman_pay_r_01": {
      "id": "ch3_xiaoman_pay_r_01",
      "type": "line",
      "scene": "ch3_xiaoman21",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "考核讲解那项过了。你问的那一句，后来师傅也问了，我居然没卡住。",
      "next": "ch3_xiaoman_pay_r_02",
      "expression": "expression-smile"
    },
    "ch3_xiaoman_pay_r_02": {
      "id": "ch3_xiaoman_pay_r_02",
      "type": "line",
      "scene": "ch3_xiaoman21",
      "speaker": "narrator",
      "character": null,
      "text": "她点了点我写的“听懂了”。那三个字旁边多了一条提醒：先分清层次，再说处理。",
      "next": "ch3_xiaoman_pay_r_03"
    },
    "ch3_xiaoman_pay_r_03": {
      "id": "ch3_xiaoman_pay_r_03",
      "type": "line",
      "scene": "ch3_xiaoman21",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "下次还需要一个欠揍的考官吗？",
      "next": "ch3_xiaoman_pay_r_04"
    },
    "ch3_xiaoman_pay_r_04": {
      "id": "ch3_xiaoman_pay_r_04",
      "type": "line",
      "scene": "ch3_xiaoman21",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "需要。但今天不考，你的脸可以恢复正常。",
      "next": "ch3_xiaoman_f_01"
    },
    "ch3_xiaoman_pay_c_01": {
      "id": "ch3_xiaoman_pay_c_01",
      "type": "line",
      "scene": "ch3_xiaoman21",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "我把那张右边厚的也给师傅看了。他一下就找到我总爱漏掉哪一层。",
      "next": "ch3_xiaoman_pay_c_02",
      "expression": "expression-smile"
    },
    "ch3_xiaoman_pay_c_02": {
      "id": "ch3_xiaoman_pay_c_02",
      "type": "line",
      "scene": "ch3_xiaoman21",
      "speaker": "narrator",
      "character": null,
      "text": "她没有把旧图撤掉，新图贴在旁边。我这次不用她指，也看得出两张之间有了区别。",
      "next": "ch3_xiaoman_pay_c_03"
    },
    "ch3_xiaoman_pay_c_03": {
      "id": "ch3_xiaoman_pay_c_03",
      "type": "line",
      "scene": "ch3_xiaoman21",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "你以后作品夹会不会厚得能垫桌子？",
      "next": "ch3_xiaoman_pay_c_04"
    },
    "ch3_xiaoman_pay_c_04": {
      "id": "ch3_xiaoman_pay_c_04",
      "type": "line",
      "scene": "ch3_xiaoman21",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "那你来帮我搬。只准搬，不准挑最好看的替我藏丑。",
      "next": "ch3_xiaoman_f_01"
    },
    "ch3_xiaoman_f_01": {
      "id": "ch3_xiaoman_f_01",
      "type": "line",
      "scene": "ch3_xiaoman21",
      "speaker": "narrator",
      "character": null,
      "text": "热饼吃到一半，工作已经谈完了。我看着她把纸屑折进袋里，忽然舍不得现在站起来。",
      "next": "ch3_xiaoman_f_02"
    },
    "ch3_xiaoman_f_02": {
      "id": "ch3_xiaoman_f_02",
      "type": "line",
      "scene": "ch3_xiaoman21",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "我第二十八天还得去贵阳，结果没定。我想走之前再见你一次，不是来问考核。",
      "next": "ch3_xiaoman_f_03"
    },
    "ch3_xiaoman_f_03": {
      "id": "ch3_xiaoman_f_03",
      "type": "line",
      "scene": "ch3_xiaoman21",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "你这句话，前面听着像要借钱。",
      "next": "ch3_xiaoman_f_04",
      "expression": "expression-hesitant"
    },
    "ch3_xiaoman_f_04": {
      "id": "ch3_xiaoman_f_04",
      "type": "line",
      "scene": "ch3_xiaoman21",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "后面呢？",
      "next": "ch3_xiaoman_f_05"
    },
    "ch3_xiaoman_f_05": {
      "id": "ch3_xiaoman_f_05",
      "type": "line",
      "scene": "ch3_xiaoman21",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "她把纸袋折了两遍才放下，随后伸手在日历上点了一下。耳边的碎发落下来，她没有马上别回去。",
      "next": "ch3_xiaoman_f_06",
      "expression": "expression-hesitant"
    },
    "ch3_xiaoman_f_06": {
      "id": "ch3_xiaoman_f_06",
      "type": "line",
      "scene": "ch3_xiaoman21",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "第二十四天我早班。你五点来，我不拿剪刀。",
      "next": "ch3_xiaoman_f_07"
    },
    "ch3_xiaoman_f_07": {
      "id": "ch3_xiaoman_f_07",
      "type": "line",
      "scene": "ch3_xiaoman21",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "行。你没东西要修，我也来。",
      "next": "ch3_xiaoman_f_08"
    },
    "ch3_xiaoman_f_08": {
      "id": "ch3_xiaoman_f_08",
      "type": "line",
      "scene": "ch3_xiaoman21",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "我也没坏到每天都得修。……五点，别太早，我会分心。",
      "next": "ch3_xiaoman_f_09",
      "expression": "expression-smile"
    },
    "ch3_xiaoman_f_09": {
      "id": "ch3_xiaoman_f_09",
      "type": "line",
      "scene": "ch3_xiaoman21",
      "speaker": "narrator",
      "character": null,
      "text": "我把时间记进手机。这一次，那把空椅子没有被算进练习时长里，我仍然有了下次坐下的理由。",
      "next": "end_ch3_xiaoman"
    },
    "end_ch3_xiaoman": {
      "id": "end_ch3_xiaoman",
      "type": "end",
      "scene": "ch3_xiaoman21",
      "character": "xiaoman",
      "title": "不剪头发也能见面",
      "text": "考核没有因为我的陪伴就变成合格。她已经选好要复练的地方，也给我留出一段不拿剪刀的时间。我喜欢看她认真，也想知道她不必证明自己时会说些什么。第二十四天五点，这次是我们两个人的约。",
      "nextChapter": "后日谈 · 雨后的约定：两年后，再与飘和毛狼相聚。此前的个人道路仍会继续。",
      "next": "epilogue_piao_entry"
    },
    "ch3_zhouzhi_a_01": {
      "id": "ch3_zhouzhi_a_01",
      "type": "line",
      "scene": "ch3_zhouzhi15",
      "speaker": "narrator",
      "character": null,
      "text": "周栀约我到面馆时，我先把工具包寄在柜台后面。她看见我两手空空，朝对面的椅子抬了一下下巴。",
      "next": "ch3_zhouzhi_a_02"
    },
    "ch3_zhouzhi_a_02": {
      "id": "ch3_zhouzhi_a_02",
      "type": "line",
      "scene": "ch3_zhouzhi15",
      "speaker": "zhouzhi",
      "character": "zhouzhi",
      "text": "今天不用看型号。先吃，不然等会儿试味，你会觉得什么都香。",
      "next": "ch3_zhouzhi_a_03",
      "expression": "expression-smile"
    },
    "ch3_zhouzhi_a_03": {
      "id": "ch3_zhouzhi_a_03",
      "type": "line",
      "scene": "ch3_zhouzhi15",
      "speaker": "narrator",
      "character": null,
      "text": "她朋友已经和老板商量好，第十八天开门前借一张桌做小份试菜。只请几位认识的人，东西由她们提前备好。",
      "next": "ch3_zhouzhi_a_04"
    },
    "ch3_zhouzhi_a_04": {
      "id": "ch3_zhouzhi_a_04",
      "type": "line",
      "scene": "ch3_zhouzhi15",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "不直接摆摊了？",
      "next": "ch3_zhouzhi_a_05"
    },
    "ch3_zhouzhi_a_05": {
      "id": "ch3_zhouzhi_a_05",
      "type": "line",
      "scene": "ch3_zhouzhi15",
      "speaker": "zhouzhi",
      "character": "zhouzhi",
      "text": "先知道自己做得出几份、谁真想再吃。摊位没签，冰柜也先不买，钱又不会捂坏。",
      "next": "ch3_zhouzhi_a_06"
    },
    "ch3_zhouzhi_a_06": {
      "id": "ch3_zhouzhi_a_06",
      "type": "line",
      "scene": "ch3_zhouzhi15",
      "speaker": "narrator",
      "character": null,
      "text": "她把纸摊开，上面不是大计划，只有两种调味、分量和准备时间。一个数字被划了三遍。",
      "next": "ch3_bg_zhouzhi_15_01"
    },
    "ch3_zhouzhi_a_07": {
      "id": "ch3_zhouzhi_a_07",
      "type": "line",
      "scene": "ch3_zhouzhi15",
      "speaker": "zhouzhi",
      "character": "zhouzhi",
      "text": "我原来写十二份。她说我们两个不是长了十二只手，改成六份。",
      "next": "ch3_zhouzhi_a_08"
    },
    "ch3_zhouzhi_a_08": {
      "id": "ch3_zhouzhi_a_08",
      "type": "line",
      "scene": "ch3_zhouzhi15",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "六份，两个人，听起来还是每人三只手。",
      "next": "ch3_zhouzhi_a_09"
    },
    "ch3_zhouzhi_a_09": {
      "id": "ch3_zhouzhi_a_09",
      "type": "line",
      "scene": "ch3_zhouzhi15",
      "speaker": "zhouzhi",
      "character": "zhouzhi",
      "text": "所以请你来当嘴。手先不用借，嘴倒有现成的。",
      "next": "ch3_zhouzhi_a_10",
      "expression": "expression-smile"
    },
    "ch3_zhouzhi_a_10": {
      "id": "ch3_zhouzhi_a_10",
      "type": "line",
      "scene": "ch3_zhouzhi15",
      "speaker": "narrator",
      "character": null,
      "text": "老板把面端来，她先挑出一截不喜欢的葱。做这件事时，她没有问我会不会介意。",
      "next": "ch3_zhouzhi_a_11"
    },
    "ch3_zhouzhi_a_11": {
      "id": "ch3_zhouzhi_a_11",
      "type": "line",
      "scene": "ch3_zhouzhi15",
      "speaker": "zhouzhi",
      "character": "zhouzhi",
      "text": "我其实有点烦。上完班再准备，连“换个活法”都像给自己加班。",
      "next": "ch3_zhouzhi_a_12"
    },
    "ch3_zhouzhi_a_12": {
      "id": "ch3_zhouzhi_a_12",
      "type": "line",
      "scene": "ch3_zhouzhi15",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "你还想做吗？",
      "next": "ch3_zhouzhi_a_13"
    },
    "ch3_zhouzhi_a_13": {
      "id": "ch3_zhouzhi_a_13",
      "type": "line",
      "scene": "ch3_zhouzhi15",
      "speaker": "zhouzhi",
      "character": "zhouzhi",
      "text": "想。烦也想。只是你到时别问我怎么不笑，我可能忙得想把人和碗一起摞起来。",
      "next": "ch3_zhouzhi_a_14",
      "expression": "expression-serious"
    },
    "ch3_zhouzhi_a_14": {
      "id": "ch3_zhouzhi_a_14",
      "type": "line",
      "scene": "ch3_zhouzhi15",
      "speaker": "narrator",
      "character": null,
      "text": "我笑着答应。她低头吃了几口，才把还没填完的反馈页推给我，让我选一种她们比较缺的反馈。",
      "next": "ch3_zhouzhi_choice"
    },
    "ch3_zhouzhi_choice": {
      "id": "ch3_zhouzhi_choice",
      "type": "choice",
      "scene": "ch3_zhouzhi15",
      "character": "zhouzhi",
      "text": "第十八天的试菜，我怎样参与？",
      "flag": "ch3ZhouzhiSupport",
      "choices": [
        {
          "label": "当一名普通食客，仔细描述自己想不想再吃。",
          "value": "taste",
          "next": "ch3_zhouzhi_pick_t_01"
        },
        {
          "label": "帮记等餐和份量，让她们集中照顾出品。",
          "value": "observe",
          "next": "ch3_zhouzhi_pick_o_01"
        }
      ]
    },
    "ch3_zhouzhi_pick_t_01": {
      "id": "ch3_zhouzhi_pick_t_01",
      "type": "line",
      "scene": "ch3_zhouzhi15",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "我只负责我的舌头。要是好吃，我说哪儿好；不合口，也不假装替所有人投票。",
      "next": "ch3_zhouzhi_pick_t_02"
    },
    "ch3_zhouzhi_pick_t_02": {
      "id": "ch3_zhouzhi_pick_t_02",
      "type": "line",
      "scene": "ch3_zhouzhi15",
      "speaker": "zhouzhi",
      "character": "zhouzhi",
      "text": "行。你要是只写“不错”，我就回你“收到”。",
      "next": "ch3_zhouzhi_pick_t_03"
    },
    "ch3_zhouzhi_pick_t_03": {
      "id": "ch3_zhouzhi_pick_t_03",
      "type": "line",
      "scene": "ch3_zhouzhi15",
      "speaker": "narrator",
      "character": null,
      "text": "她在名单上给我留了两个空格，提醒我两份先别混着吃，喝口水再尝下一份。",
      "next": "ch3_zhouzhi_pick_t_04"
    },
    "ch3_zhouzhi_pick_t_04": {
      "id": "ch3_zhouzhi_pick_t_04",
      "type": "line",
      "scene": "ch3_zhouzhi15",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "这么正式，我突然担心自己没资格有舌头。",
      "next": "ch3_zhouzhi_b_01"
    },
    "ch3_zhouzhi_pick_o_01": {
      "id": "ch3_zhouzhi_pick_o_01",
      "type": "line",
      "scene": "ch3_zhouzhi15",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "我记什么时候出第一份、最后一份。你们忙起来，我不挤在旁边问好没好。",
      "next": "ch3_zhouzhi_pick_o_02"
    },
    "ch3_zhouzhi_pick_o_02": {
      "id": "ch3_zhouzhi_pick_o_02",
      "type": "line",
      "scene": "ch3_zhouzhi15",
      "speaker": "zhouzhi",
      "character": "zhouzhi",
      "text": "也帮看碗底剩什么。有时候人说好吃，筷子比嘴诚实。",
      "next": "ch3_zhouzhi_pick_o_03"
    },
    "ch3_zhouzhi_pick_o_03": {
      "id": "ch3_zhouzhi_pick_o_03",
      "type": "line",
      "scene": "ch3_zhouzhi15",
      "speaker": "narrator",
      "character": null,
      "text": "她给我画了个很歪的碗。我问是不是要另收插画费，她说这是标明我的工作对象。",
      "next": "ch3_zhouzhi_pick_o_04"
    },
    "ch3_zhouzhi_pick_o_04": {
      "id": "ch3_zhouzhi_pick_o_04",
      "type": "line",
      "scene": "ch3_zhouzhi15",
      "speaker": "zhouzhi",
      "character": "zhouzhi",
      "text": "别把自己也写进表里。你晚上还得正常吃饭。",
      "next": "ch3_zhouzhi_b_01"
    },
    "ch3_zhouzhi_b_01": {
      "id": "ch3_zhouzhi_b_01",
      "type": "line",
      "scene": "ch3_zhouzhi15",
      "speaker": "narrator",
      "character": null,
      "text": "谈完，她把那页纸收起来，问我最近最想吃什么。我想了一会儿，才发现自己答不出“随便”以外的话。",
      "next": "ch3_zhouzhi_b_02"
    },
    "ch3_zhouzhi_b_02": {
      "id": "ch3_zhouzhi_b_02",
      "type": "line",
      "scene": "ch3_zhouzhi15",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "热的，吃完不用马上搬东西的。",
      "next": "ch3_zhouzhi_b_03"
    },
    "ch3_zhouzhi_b_03": {
      "id": "ch3_zhouzhi_b_03",
      "type": "line",
      "scene": "ch3_zhouzhi15",
      "speaker": "zhouzhi",
      "character": "zhouzhi",
      "text": "要求真低。今晚满足你，但吃完自己擦嘴。",
      "next": "ch3_zhouzhi_b_04"
    },
    "ch3_zhouzhi_b_04": {
      "id": "ch3_zhouzhi_b_04",
      "type": "line",
      "scene": "ch3_zhouzhi15",
      "speaker": "narrator",
      "character": null,
      "text": "我看她在自己的汤里添了辣椒，忽然觉得她这会儿比在上班时更像我想认识的人。",
      "next": "ch3_zhouzhi_c_01"
    },
    "ch3_zhouzhi_c_01": {
      "id": "ch3_zhouzhi_c_01",
      "type": "line",
      "scene": "ch3_zhouzhi18",
      "speaker": "narrator",
      "character": null,
      "text": "第十八天，我按约提前到面馆。门口仍挂着稍后营业的小牌，试菜就摆在平时那张桌上，没弄出开业的架势。",
      "next": "ch3_zhouzhi_c_02"
    },
    "ch3_zhouzhi_c_02": {
      "id": "ch3_zhouzhi_c_02",
      "type": "line",
      "scene": "ch3_zhouzhi18",
      "speaker": "narrator",
      "character": null,
      "text": "周栀和朋友轮流分装，六个小碗排开。朋友去后面取最后一份配料，她让我先把桌边让出来。",
      "next": "ch3_zhouzhi_c_03"
    },
    "ch3_zhouzhi_c_03": {
      "id": "ch3_zhouzhi_c_03",
      "type": "line",
      "scene": "ch3_zhouzhi18",
      "speaker": "zhouzhi",
      "character": "zhouzhi",
      "text": "借过。今天走路带风，碰着你就算工伤。",
      "next": "ch3_zhouzhi_c_04",
      "expression": "expression-serious"
    },
    "ch3_zhouzhi_c_04": {
      "id": "ch3_zhouzhi_c_04",
      "type": "line",
      "scene": "ch3_zhouzhi18",
      "speaker": "narrator",
      "character": null,
      "text": "第一轮比预计慢，第二种调味又添得太满。有人说香，也有人刚尝两口就去找水，桌上没有期待中的一片夸声。",
      "next": "ch3_zhouzhi_c_05"
    },
    "ch3_zhouzhi_c_05": {
      "id": "ch3_zhouzhi_c_05",
      "type": "line",
      "scene": "ch3_zhouzhi18",
      "speaker": "narrator",
      "character": "zhouzhi",
      "text": "周栀听到“还是淡一点好卖”时停了半拍。她看向自己留的那一小份，没有立刻把意见抄下来。",
      "next": "ch3_zhouzhi_c_06",
      "expression": "expression-hesitant"
    },
    "ch3_zhouzhi_c_06": {
      "id": "ch3_zhouzhi_c_06",
      "type": "line",
      "scene": "ch3_zhouzhi18",
      "speaker": "zhouzhi",
      "character": "zhouzhi",
      "text": "我自己就喜欢重一点。要是全改淡，最后怎么知道来吃的是不是喜欢我们的味道？",
      "next": "ch3_zhouzhi_c_07"
    },
    "ch3_zhouzhi_c_07": {
      "id": "ch3_zhouzhi_c_07",
      "type": "line",
      "scene": "ch3_zhouzhi18",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "那就先记下来。六个人也替不了整条街。",
      "next": "ch3_zhouzhi_c_08"
    },
    "ch3_zhouzhi_c_08": {
      "id": "ch3_zhouzhi_c_08",
      "type": "line",
      "scene": "ch3_zhouzhi18",
      "speaker": "narrator",
      "character": null,
      "text": "她朋友从后面出来，和她站在桌边小声商量。我端起水杯等着，没有挤过去替她们定一种口味。",
      "next": "ch3_zhouzhi_c_09"
    },
    "ch3_zhouzhi_c_09": {
      "id": "ch3_zhouzhi_c_09",
      "type": "line",
      "scene": "ch3_zhouzhi18",
      "speaker": "zhouzhi",
      "character": "zhouzhi",
      "text": "我们想先保留两种，底味不再加，辣的单放。下次再看备料来不来得及。",
      "next": "ch3_zhouzhi_c_10",
      "expression": "expression-serious"
    },
    "ch3_zhouzhi_c_10": {
      "id": "ch3_zhouzhi_c_10",
      "type": "line",
      "scene": "ch3_zhouzhi18",
      "speaker": "narrator",
      "character": null,
      "text": "她朝我解释完，又转回去补一句“是我们想的，不算正式菜单”。朋友听着笑了，拿走她差点洗第二遍的空碗。",
      "next": "ch3_zhouzhi_c_11"
    },
    "ch3_zhouzhi_c_11": {
      "id": "ch3_zhouzhi_c_11",
      "type": "line",
      "scene": "ch3_zhouzhi18",
      "speaker": "narrator",
      "character": null,
      "text": "最后一位试吃的人走后，周栀靠着椅背坐下。她的手机又亮起来，是回声的排班提醒。",
      "next": "ch3_zhouzhi_c_12"
    },
    "ch3_zhouzhi_c_12": {
      "id": "ch3_zhouzhi_c_12",
      "type": "line",
      "scene": "ch3_zhouzhi18",
      "speaker": "zhouzhi",
      "character": "zhouzhi",
      "text": "我现在谁的消息都不想回。连恭喜我都有点吵。",
      "next": "ch3_zhouzhi_c_13",
      "expression": "expression-downcast"
    },
    "ch3_zhouzhi_c_13": {
      "id": "ch3_zhouzhi_c_13",
      "type": "line",
      "scene": "ch3_zhouzhi18",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "那我也先不恭喜。",
      "next": "ch3_zhouzhi_c_14"
    },
    "ch3_zhouzhi_c_14": {
      "id": "ch3_zhouzhi_c_14",
      "type": "line",
      "scene": "ch3_zhouzhi18",
      "speaker": "zhouzhi",
      "character": "zhouzhi",
      "text": "你倒可以说。说短点。",
      "next": "ch3_zhouzhi_c_15"
    },
    "ch3_zhouzhi_c_15": {
      "id": "ch3_zhouzhi_c_15",
      "type": "line",
      "scene": "ch3_zhouzhi18",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "辛苦了。",
      "next": "ch3_zhouzhi_c_16"
    },
    "ch3_zhouzhi_c_16": {
      "id": "ch3_zhouzhi_c_16",
      "type": "line",
      "scene": "ch3_zhouzhi18",
      "speaker": "narrator",
      "character": null,
      "text": "她闭了两秒眼睛，再睁开时伸手拿水。朋友已经约好先把借用的桌面清干净，我们把剩下的碗一一摞回去。",
      "next": "ch3_zhouzhi_c_17"
    },
    "ch3_zhouzhi_c_17": {
      "id": "ch3_zhouzhi_c_17",
      "type": "line",
      "scene": "ch3_zhouzhi18",
      "speaker": "zhouzhi",
      "character": "zhouzhi",
      "text": "今天没挣钱，还多洗了碗。第一步大概就长这样吧。",
      "next": "ch3_zhouzhi_c_18"
    },
    "ch3_zhouzhi_c_18": {
      "id": "ch3_zhouzhi_c_18",
      "type": "line",
      "scene": "ch3_zhouzhi18",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "至少现在知道六份不是随手就出。",
      "next": "ch3_bg_zhouzhi_18_01"
    },
    "ch3_zhouzhi_c_19": {
      "id": "ch3_zhouzhi_c_19",
      "type": "line",
      "scene": "ch3_zhouzhi18",
      "speaker": "zhouzhi",
      "character": "zhouzhi",
      "text": "嗯。也知道累的时候，我不太温柔。你要记录这个，记准确点。",
      "next": "ch3_zhouzhi_c_20"
    },
    "ch3_zhouzhi_c_20": {
      "id": "ch3_zhouzhi_c_20",
      "type": "line",
      "scene": "ch3_zhouzhi18",
      "speaker": "narrator",
      "character": null,
      "text": "我把她递来的空杯接住。她没有勉强笑，我也没有试着把这次疲倦讲成什么特别漂亮的开始。",
      "next": "ch3_zhouzhi_d_01"
    },
    "ch3_zhouzhi_d_01": {
      "id": "ch3_zhouzhi_d_01",
      "type": "line",
      "scene": "ch3_zhouzhi21",
      "speaker": "narrator",
      "character": null,
      "text": "第二十一天，我先给周栀发消息，说想请她吃一碗不用给意见的面。她回得很快：“七点半。我今天想吃酸一点。”",
      "next": "ch3_zhouzhi_d_02"
    },
    "ch3_zhouzhi_d_02": {
      "id": "ch3_zhouzhi_d_02",
      "type": "line",
      "scene": "ch3_zhouzhi21",
      "speaker": "narrator",
      "character": null,
      "text": "她来时头发刚重新扎过，拉开椅子就问我是不是已经点了。我把菜单推过去，说只点了自己的。",
      "next": "ch3_zhouzhi_d_03"
    },
    "ch3_zhouzhi_d_03": {
      "id": "ch3_zhouzhi_d_03",
      "type": "line",
      "scene": "ch3_zhouzhi21",
      "speaker": "zhouzhi",
      "character": "zhouzhi",
      "text": "好。我不想因为别人替我想好了，就配合着喜欢。",
      "next": "ch3_zhouzhi_d_04",
      "expression": "expression-smile"
    },
    "ch3_zhouzhi_d_04": {
      "id": "ch3_zhouzhi_d_04",
      "type": "line",
      "scene": "ch3_zhouzhi21",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "酸的在这页。你想不想我陪你去下次试菜，再另外说。",
      "next": "ch3_bg_zhouzhi_21_01"
    },
    "ch3_zhouzhi_d_05": {
      "id": "ch3_zhouzhi_d_05",
      "type": "line",
      "scene": "ch3_zhouzhi21",
      "speaker": "narrator",
      "character": null,
      "text": "她笑着在菜单上点了两下。等面的时候，她拿出第十八天的记录，其中一页是我交给她的。",
      "next": "ch3_zhouzhi_payoff"
    },
    "ch3_zhouzhi_payoff": {
      "id": "ch3_zhouzhi_payoff",
      "type": "gate",
      "scene": "ch3_zhouzhi21",
      "cases": [
        {
          "flag": "ch3ZhouzhiSupport",
          "value": "taste",
          "next": "ch3_zhouzhi_pay_t_01"
        }
      ],
      "default": "ch3_zhouzhi_pay_o_01"
    },
    "ch3_zhouzhi_pay_t_01": {
      "id": "ch3_zhouzhi_pay_t_01",
      "type": "line",
      "scene": "ch3_zhouzhi21",
      "speaker": "zhouzhi",
      "character": "zhouzhi",
      "text": "你写第二种前几口香，后面有点抢味。我们照这个又试了，香料减一点，辣椒还留着。",
      "next": "ch3_zhouzhi_pay_t_02",
      "expression": "expression-smile"
    },
    "ch3_zhouzhi_pay_t_02": {
      "id": "ch3_zhouzhi_pay_t_02",
      "type": "line",
      "scene": "ch3_zhouzhi21",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "所以我下次可以吃完整版了？",
      "next": "ch3_zhouzhi_pay_t_03"
    },
    "ch3_zhouzhi_pay_t_03": {
      "id": "ch3_zhouzhi_pay_t_03",
      "type": "line",
      "scene": "ch3_zhouzhi21",
      "speaker": "zhouzhi",
      "character": "zhouzhi",
      "text": "可以。但我记住你不爱那个味了，给你盛自己的那份，省得你又很认真地喝三杯水。",
      "next": "ch3_zhouzhi_pay_t_04"
    },
    "ch3_zhouzhi_pay_t_04": {
      "id": "ch3_zhouzhi_pay_t_04",
      "type": "line",
      "scene": "ch3_zhouzhi21",
      "speaker": "narrator",
      "character": null,
      "text": "她说得随意。我看着那张纸，才发现她把我吃到一半去找水的事也记住了。",
      "next": "ch3_zhouzhi_e_01"
    },
    "ch3_zhouzhi_pay_o_01": {
      "id": "ch3_zhouzhi_pay_o_01",
      "type": "line",
      "scene": "ch3_zhouzhi21",
      "speaker": "zhouzhi",
      "character": "zhouzhi",
      "text": "你记的时间帮上忙了。我们最慢那段不是做菜，是一边装一边找盖子，后来先摆好就快了。",
      "next": "ch3_zhouzhi_pay_o_02",
      "expression": "expression-smile"
    },
    "ch3_zhouzhi_pay_o_02": {
      "id": "ch3_zhouzhi_pay_o_02",
      "type": "line",
      "scene": "ch3_zhouzhi21",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "我的职业生涯第一次败给盒盖。",
      "next": "ch3_zhouzhi_pay_o_03"
    },
    "ch3_zhouzhi_pay_o_03": {
      "id": "ch3_zhouzhi_pay_o_03",
      "type": "line",
      "scene": "ch3_zhouzhi21",
      "speaker": "zhouzhi",
      "character": "zhouzhi",
      "text": "还有，你最后才顾上尝，吃的是凉的。下次给你留热的一份，不让你抱着表当饭吃。",
      "next": "ch3_zhouzhi_pay_o_04"
    },
    "ch3_zhouzhi_pay_o_04": {
      "id": "ch3_zhouzhi_pay_o_04",
      "type": "line",
      "scene": "ch3_zhouzhi21",
      "speaker": "narrator",
      "character": null,
      "text": "她说这句时把记录折起来，不再继续核对时间。我也把自己那句“没事，我习惯了”咽回去。",
      "next": "ch3_zhouzhi_e_01"
    },
    "ch3_zhouzhi_e_01": {
      "id": "ch3_zhouzhi_e_01",
      "type": "line",
      "scene": "ch3_zhouzhi21",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "下次我想来。不过今天约你，主要是我想见你。",
      "next": "ch3_zhouzhi_e_02"
    },
    "ch3_zhouzhi_e_02": {
      "id": "ch3_zhouzhi_e_02",
      "type": "line",
      "scene": "ch3_zhouzhi21",
      "speaker": "narrator",
      "character": "zhouzhi",
      "text": "周栀抬眼看我。蒸汽从刚端来的面碗上升起，她等老板走开，才把水杯往旁边挪了一点。",
      "next": "ch3_zhouzhi_e_03",
      "expression": "expression-hesitant"
    },
    "ch3_zhouzhi_e_03": {
      "id": "ch3_zhouzhi_e_03",
      "type": "line",
      "scene": "ch3_zhouzhi21",
      "speaker": "zhouzhi",
      "character": "zhouzhi",
      "text": "我看出来一点了。你今天连“顺路”都没说。",
      "next": "ch3_zhouzhi_e_04"
    },
    "ch3_zhouzhi_e_04": {
      "id": "ch3_zhouzhi_e_04",
      "type": "line",
      "scene": "ch3_zhouzhi21",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "第二十八天的车还在。我有结果就告诉你，没结果也说，不把这顿饭当告别饭。",
      "next": "ch3_zhouzhi_e_05"
    },
    "ch3_zhouzhi_e_05": {
      "id": "ch3_zhouzhi_e_05",
      "type": "line",
      "scene": "ch3_zhouzhi21",
      "speaker": "zhouzhi",
      "character": "zhouzhi",
      "text": "那就好好吃。告别饭应该更贵，至少多加个蛋。",
      "next": "ch3_zhouzhi_e_06",
      "expression": "expression-smile"
    },
    "ch3_zhouzhi_e_06": {
      "id": "ch3_zhouzhi_e_06",
      "type": "line",
      "scene": "ch3_zhouzhi21",
      "speaker": "narrator",
      "character": null,
      "text": "我笑着问现在能不能加，她摇头，说今天这碗刚好。后来她又主动提起第二十三天的休息空档。",
      "next": "ch3_zhouzhi_e_07"
    },
    "ch3_zhouzhi_e_07": {
      "id": "ch3_zhouzhi_e_07",
      "type": "line",
      "scene": "ch3_zhouzhi21",
      "speaker": "zhouzhi",
      "character": "zhouzhi",
      "text": "到时候我可能不想说摊子的事。也可能什么都没做好，纯出来透口气。",
      "next": "ch3_zhouzhi_e_08"
    },
    "ch3_zhouzhi_e_08": {
      "id": "ch3_zhouzhi_e_08",
      "type": "line",
      "scene": "ch3_zhouzhi21",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "那我照样来。",
      "next": "ch3_zhouzhi_e_09"
    },
    "ch3_zhouzhi_e_09": {
      "id": "ch3_zhouzhi_e_09",
      "type": "line",
      "scene": "ch3_zhouzhi21",
      "speaker": "zhouzhi",
      "character": "zhouzhi",
      "text": "行。我也想。今晚这句回得够短吧？",
      "next": "ch3_zhouzhi_e_10"
    },
    "ch3_zhouzhi_e_10": {
      "id": "ch3_zhouzhi_e_10",
      "type": "line",
      "scene": "ch3_zhouzhi21",
      "speaker": "narrator",
      "character": null,
      "text": "她低头吃面，没有替我调汤。我也没有伸手替她拿辣椒。两只碗贴得不远，我们各自吃着喜欢的味道，约好了下一次。",
      "next": "end_ch3_zhouzhi"
    },
    "end_ch3_zhouzhi": {
      "id": "end_ch3_zhouzhi",
      "type": "end",
      "scene": "ch3_zhouzhi21",
      "character": "zhouzhi",
      "title": "两个人，各自的口味",
      "text": "试菜有了能调整的记录，也留下没做完的计划。她会累，会不想回复，会坚持自己喜欢的味道。我开始期待这些具体的她；她也记住了我的那一份，并答应下一次见面不必带着工作。",
      "nextChapter": "后日谈 · 雨后的约定：两年后，再与飘和毛狼相聚。此前的个人道路仍会继续。",
      "next": "epilogue_piao_entry"
    },
    "ch3_mengyao_a_01": {
      "id": "ch3_mengyao_a_01",
      "type": "line",
      "scene": "ch3_mengyao15",
      "speaker": "narrator",
      "character": null,
      "text": "我和孟遥把见面定在下午四点，地点还是老街屋檐下。她比我早到，手里拿着一瓶拧过盖却没喝的水。",
      "next": "ch3_mengyao_a_02"
    },
    "ch3_mengyao_a_02": {
      "id": "ch3_mengyao_a_02",
      "type": "line",
      "scene": "ch3_mengyao15",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "等久了？",
      "next": "ch3_mengyao_a_03"
    },
    "ch3_mengyao_a_03": {
      "id": "ch3_mengyao_a_03",
      "type": "line",
      "scene": "ch3_mengyao15",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "七分钟。我也早来了，不算你迟到。",
      "next": "ch3_mengyao_a_04",
      "expression": "expression-hesitant"
    },
    "ch3_mengyao_a_04": {
      "id": "ch3_mengyao_a_04",
      "type": "line",
      "scene": "ch3_mengyao15",
      "speaker": "narrator",
      "character": null,
      "text": "她说完自己笑了一下，像也觉得第一句话太像核对时间。相机留在包里，她没有先拿工作来填空。",
      "next": "ch3_mengyao_preview"
    },
    "ch3_mengyao_preview": {
      "id": "ch3_mengyao_preview",
      "type": "gate",
      "scene": "ch3_mengyao15",
      "cases": [
        {
          "flag": "preview",
          "value": "mengyao",
          "next": "ch3_mengyao_mem_yes_01"
        }
      ],
      "default": "ch3_mengyao_mem_no_01"
    },
    "ch3_mengyao_mem_yes_01": {
      "id": "ch3_mengyao_mem_yes_01",
      "type": "line",
      "scene": "ch3_mengyao15",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "第十天那条回答我没忘。你说怕我知道没有结果，所以不回。可你有没有想过，我那时到底在等什么？",
      "next": "ch3_mengyao_mem_yes_02"
    },
    "ch3_mengyao_mem_yes_02": {
      "id": "ch3_mengyao_mem_yes_02",
      "type": "line",
      "scene": "ch3_mengyao15",
      "speaker": "narrator",
      "character": null,
      "text": "我记得那段对话停在哪里。今天她站在面前，我不能把说过一句对不起当成已经谈完。",
      "next": "ch3_mengyao_b_01"
    },
    "ch3_mengyao_mem_no_01": {
      "id": "ch3_mengyao_mem_no_01",
      "type": "line",
      "scene": "ch3_mengyao15",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "你后来把车票告诉大家了。我们之间那件事，我还是想单独谈完。",
      "next": "ch3_mengyao_mem_no_02"
    },
    "ch3_mengyao_mem_no_02": {
      "id": "ch3_mengyao_mem_no_02",
      "type": "line",
      "scene": "ch3_mengyao15",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "当时我不回，是不想让你知道工作还没结果，连会不会走都答不上。我怕你失望，就让你一直等。",
      "next": "ch3_mengyao_b_01"
    },
    "ch3_mengyao_b_01": {
      "id": "ch3_mengyao_b_01",
      "type": "line",
      "scene": "ch3_mengyao15",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "我以前一直以为，你等的是一个安排好了的答案。",
      "next": "ch3_mengyao_b_02"
    },
    "ch3_mengyao_b_02": {
      "id": "ch3_mengyao_b_02",
      "type": "line",
      "scene": "ch3_mengyao15",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "我也想知道你会不会想见我。哪怕你要走。",
      "next": "ch3_mengyao_b_03",
      "expression": "expression-downcast"
    },
    "ch3_mengyao_b_03": {
      "id": "ch3_mengyao_b_03",
      "type": "line",
      "scene": "ch3_mengyao15",
      "speaker": "narrator",
      "character": null,
      "text": "雨顺着屋檐落到两步之外。我张了张嘴，第一次意识到自己准备好的解释，没有回答她刚才这一句。",
      "next": "ch3_mengyao_b_04"
    },
    "ch3_mengyao_b_04": {
      "id": "ch3_mengyao_b_04",
      "type": "line",
      "scene": "ch3_mengyao15",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "想过。我当时想等自己像样一点再见你，后来连这句话都不好意思说。",
      "next": "ch3_mengyao_b_05"
    },
    "ch3_mengyao_b_05": {
      "id": "ch3_mengyao_b_05",
      "type": "line",
      "scene": "ch3_mengyao15",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "你上次回来，我路过这个地方还想好了怎么开口。真见到你，第一句却变成问设备。",
      "next": "ch3_mengyao_b_06",
      "expression": "expression-hesitant"
    },
    "ch3_mengyao_b_06": {
      "id": "ch3_mengyao_b_06",
      "type": "line",
      "scene": "ch3_mengyao15",
      "speaker": "narrator",
      "character": null,
      "text": "她低头旋了一下瓶盖。我本来以为只有我会做这种准备，忽然很想接住她停下来的那一点声音。",
      "next": "ch3_mengyao_b_07"
    },
    "ch3_mengyao_b_07": {
      "id": "ch3_mengyao_b_07",
      "type": "line",
      "scene": "ch3_mengyao15",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "那今天我先说。我想见你，不只是想把以前解释清楚。",
      "next": "ch3_mengyao_b_08"
    },
    "ch3_mengyao_b_08": {
      "id": "ch3_mengyao_b_08",
      "type": "line",
      "scene": "ch3_mengyao15",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "我听见了。但我还没办法直接回到以前那种亲近。",
      "next": "ch3_mengyao_b_09"
    },
    "ch3_mengyao_b_09": {
      "id": "ch3_mengyao_b_09",
      "type": "line",
      "scene": "ch3_mengyao15",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "不用今天做到。今天这些话，我会记得。",
      "next": "ch3_mengyao_b_10"
    },
    "ch3_mengyao_b_10": {
      "id": "ch3_mengyao_b_10",
      "type": "line",
      "scene": "ch3_mengyao15",
      "speaker": "narrator",
      "character": null,
      "text": "我们安静站了一阵。她终于喝了口水，嫌水被握得太温，问我是不是也觉得这场见面需要一点不那么严肃的结尾。",
      "next": "ch3_mengyao_b_11"
    },
    "ch3_mengyao_b_11": {
      "id": "ch3_mengyao_b_11",
      "type": "line",
      "scene": "ch3_mengyao15",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "我可以表演从台阶上正常走下去，不摔。",
      "next": "ch3_mengyao_b_12"
    },
    "ch3_mengyao_b_12": {
      "id": "ch3_mengyao_b_12",
      "type": "line",
      "scene": "ch3_mengyao15",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "先别。那会成为我今天最难剪掉的画面。",
      "next": "ch3_bg_mengyao_15_01",
      "expression": "expression-smile"
    },
    "ch3_mengyao_b_13": {
      "id": "ch3_mengyao_b_13",
      "type": "line",
      "scene": "ch3_mengyao15",
      "speaker": "narrator",
      "character": null,
      "text": "她说最近想做一个六十秒的小练习，只拍自己有权使用的街景与声音，不放进回声的片子，也不急着发布。",
      "next": "ch3_mengyao_b_14"
    },
    "ch3_mengyao_b_14": {
      "id": "ch3_mengyao_b_14",
      "type": "line",
      "scene": "ch3_mengyao15",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "我想试试不用“舍不得”就能讲离开。有一段节奏总不对，你愿不愿意跟我做一次？",
      "next": "ch3_mengyao_choice"
    },
    "ch3_mengyao_choice": {
      "id": "ch3_mengyao_choice",
      "type": "choice",
      "scene": "ch3_mengyao15",
      "character": "mengyao",
      "text": "这次共同创作，我想从哪里加入？",
      "flag": "ch3MengyaoWork",
      "choices": [
        {
          "label": "一起看片段排序，直说我看见的故事。",
          "value": "image",
          "next": "ch3_mengyao_pick_i_01"
        },
        {
          "label": "一起录坡口的声音，从听见的节奏开始。",
          "value": "sound",
          "next": "ch3_mengyao_pick_s_01"
        }
      ]
    },
    "ch3_mengyao_pick_i_01": {
      "id": "ch3_mengyao_pick_i_01",
      "type": "line",
      "scene": "ch3_mengyao15",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "我不懂怎么剪，但能告诉你哪一段让我想继续看。",
      "next": "ch3_mengyao_pick_i_02"
    },
    "ch3_mengyao_pick_i_02": {
      "id": "ch3_mengyao_pick_i_02",
      "type": "line",
      "scene": "ch3_mengyao15",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "够了。你别一见我皱眉就把意见收回去，我还没说服你呢。",
      "next": "ch3_mengyao_pick_i_03"
    },
    "ch3_mengyao_pick_i_03": {
      "id": "ch3_mengyao_pick_i_03",
      "type": "line",
      "scene": "ch3_mengyao15",
      "speaker": "narrator",
      "character": null,
      "text": "她给我看两段没有行人的街景，一段水向台阶下流，一段门被风吹得轻轻碰上。我选了后者开头。",
      "next": "ch3_mengyao_pick_i_04"
    },
    "ch3_mengyao_pick_i_04": {
      "id": "ch3_mengyao_pick_i_04",
      "type": "line",
      "scene": "ch3_mengyao15",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "我想反过来。先留着，第十八天我们各排一版，看完整再争。",
      "next": "ch3_mengyao_c_01"
    },
    "ch3_mengyao_pick_s_01": {
      "id": "ch3_mengyao_pick_s_01",
      "type": "line",
      "scene": "ch3_mengyao15",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "我想录那边卷帘门落下去的声音。每次听见，就知道这条街又有一家准备歇了。",
      "next": "ch3_mengyao_pick_s_02"
    },
    "ch3_mengyao_pick_s_02": {
      "id": "ch3_mengyao_pick_s_02",
      "type": "line",
      "scene": "ch3_mengyao15",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "我想要开门声。你听，后面那一下抖动，像人犹豫了一下才出去。",
      "next": "ch3_mengyao_pick_s_03"
    },
    "ch3_mengyao_pick_s_03": {
      "id": "ch3_mengyao_pick_s_03",
      "type": "line",
      "scene": "ch3_mengyao15",
      "speaker": "narrator",
      "character": null,
      "text": "我们约好第十八天各带一段，录的时候不收清楚的路人谈话。她把手机录音点开，先让我听此刻屋檐落水的间隔。",
      "next": "ch3_mengyao_pick_s_04"
    },
    "ch3_mengyao_pick_s_04": {
      "id": "ch3_mengyao_pick_s_04",
      "type": "line",
      "scene": "ch3_mengyao15",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "光在这儿站着，我还真没认真听过。",
      "next": "ch3_mengyao_c_01"
    },
    "ch3_mengyao_c_01": {
      "id": "ch3_mengyao_c_01",
      "type": "line",
      "scene": "ch3_mengyao15",
      "speaker": "narrator",
      "character": null,
      "text": "分开时，她提起一直放在脚边的相机包。我也没问今天谈得算不算好，只确认第十八天下午我能准时到。",
      "next": "ch3_mengyao_c_02"
    },
    "ch3_mengyao_c_02": {
      "id": "ch3_mengyao_c_02",
      "type": "line",
      "scene": "ch3_mengyao15",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "行。那天可以说我剪得不好，但要说哪儿。",
      "next": "ch3_mengyao_c_03"
    },
    "ch3_mengyao_c_03": {
      "id": "ch3_mengyao_c_03",
      "type": "line",
      "scene": "ch3_mengyao15",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "我尽量比“反正不好”多说几个字。",
      "next": "ch3_mengyao_d_01"
    },
    "ch3_mengyao_d_01": {
      "id": "ch3_mengyao_d_01",
      "type": "line",
      "scene": "ch3_mengyao18",
      "speaker": "narrator",
      "character": null,
      "text": "第十八天下午，孟遥借回声大厅一角摆电脑。我到时，她正在反复拖动同一段，进度条像被一根橡皮筋拉回来。",
      "next": "ch3_mengyao_d_02"
    },
    "ch3_mengyao_d_02": {
      "id": "ch3_mengyao_d_02",
      "type": "line",
      "scene": "ch3_mengyao18",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "你先看，别看我。我现在脸上写的不是答案，是没睡够。",
      "next": "ch3_mengyao_d_03",
      "expression": "expression-serious"
    },
    "ch3_mengyao_d_03": {
      "id": "ch3_mengyao_d_03",
      "type": "line",
      "scene": "ch3_mengyao18",
      "speaker": "narrator",
      "character": null,
      "text": "六十秒放完，我说中间停得太久。她立刻摇头，说那段停顿就是她最想留下的东西。",
      "next": "ch3_mengyao_d_04"
    },
    "ch3_mengyao_d_04": {
      "id": "ch3_mengyao_d_04",
      "type": "line",
      "scene": "ch3_mengyao18",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "我以为已经放完了。不是不喜欢静，是不知道还要等什么。",
      "next": "ch3_mengyao_d_05"
    },
    "ch3_mengyao_d_05": {
      "id": "ch3_mengyao_d_05",
      "type": "line",
      "scene": "ch3_mengyao18",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "可我不想每次都先提醒观众“马上有重点”。那样一点都不意外。",
      "next": "ch3_mengyao_d_06"
    },
    "ch3_mengyao_d_06": {
      "id": "ch3_mengyao_d_06",
      "type": "line",
      "scene": "ch3_mengyao18",
      "speaker": "narrator",
      "character": null,
      "text": "我把耳机放回桌上。两个人谁也没笑，空气里突然有了我们都熟悉的硬。",
      "next": "ch3_mengyao_d_07"
    },
    "ch3_mengyao_d_07": {
      "id": "ch3_mengyao_d_07",
      "type": "line",
      "scene": "ch3_mengyao18",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "我刚才差点说，你是专业的，就按你的来。",
      "next": "ch3_mengyao_d_08"
    },
    "ch3_mengyao_d_08": {
      "id": "ch3_mengyao_d_08",
      "type": "line",
      "scene": "ch3_mengyao18",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "我刚才差点说，那下次不用你看了。",
      "next": "ch3_mengyao_d_09",
      "expression": "expression-hesitant"
    },
    "ch3_mengyao_d_09": {
      "id": "ch3_mengyao_d_09",
      "type": "line",
      "scene": "ch3_mengyao18",
      "speaker": "narrator",
      "character": null,
      "text": "她轻轻呼了一口气，把进度条往前挪。我们从头又看一次，这回谁都没有在中间打断。",
      "next": "ch3_bg_mengyao_18_01"
    },
    "ch3_mengyao_d_10": {
      "id": "ch3_mengyao_d_10",
      "type": "line",
      "scene": "ch3_mengyao18",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "这里。如果让前面的声音拖进来，观众可能知道它还没完。但画面我还是想留长一点。",
      "next": "ch3_mengyao_d_11"
    },
    "ch3_mengyao_d_11": {
      "id": "ch3_mengyao_d_11",
      "type": "line",
      "scene": "ch3_mengyao18",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "可以试。我的意见也不用全留下，我想知道改完是什么样。",
      "next": "ch3_mengyao_d_12"
    },
    "ch3_mengyao_d_12": {
      "id": "ch3_mengyao_d_12",
      "type": "line",
      "scene": "ch3_mengyao18",
      "speaker": "narrator",
      "character": null,
      "text": "她照这个试了一次，又撤销一次。我看着她在两种节奏之间切换，慢慢分出哪些停顿是我不懂，哪些是真让人丢了方向。",
      "next": "ch3_mengyao_d_13"
    },
    "ch3_mengyao_d_13": {
      "id": "ch3_mengyao_d_13",
      "type": "line",
      "scene": "ch3_mengyao18",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "刚才你说等不下去，我第一反应是把前面都删了。删完又不甘心，好像只是为了快点让你点头。",
      "next": "ch3_mengyao_d_14"
    },
    "ch3_mengyao_d_14": {
      "id": "ch3_mengyao_d_14",
      "type": "line",
      "scene": "ch3_mengyao18",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "她把光标移到那句解释字幕上，按了删除。回放到争执的空镜时，她的手还搭在撤销键旁，最后没有按。",
      "next": "ch3_mengyao_d_15",
      "expression": "expression-serious"
    },
    "ch3_mengyao_d_15": {
      "id": "ch3_mengyao_d_15",
      "type": "line",
      "scene": "ch3_mengyao18",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "少了那句，我反而想再看一次。",
      "next": "ch3_mengyao_d_16"
    },
    "ch3_mengyao_d_16": {
      "id": "ch3_mengyao_d_16",
      "type": "line",
      "scene": "ch3_mengyao18",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "这句我信。你已经盯着它六遍了，应该不是客气。",
      "next": "ch3_mengyao_d_17"
    },
    "ch3_mengyao_d_17": {
      "id": "ch3_mengyao_d_17",
      "type": "line",
      "scene": "ch3_mengyao18",
      "speaker": "narrator",
      "character": null,
      "text": "天色亮着，大厅的桌子还要让给下一班人。我们导出一个能完整播放的版本，文件名里谁也没写“最终最终”。",
      "next": "ch3_mengyao_d_18"
    },
    "ch3_mengyao_d_18": {
      "id": "ch3_mengyao_d_18",
      "type": "line",
      "scene": "ch3_mengyao18",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "第二十一天再看。三天以后还能喜欢，才知道不是今天剪晕了。",
      "next": "ch3_mengyao_d_19"
    },
    "ch3_mengyao_d_19": {
      "id": "ch3_mengyao_d_19",
      "type": "line",
      "scene": "ch3_mengyao18",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "好。那之前有消息，我也照样告诉你。",
      "next": "ch3_mengyao_d_20"
    },
    "ch3_mengyao_d_20": {
      "id": "ch3_mengyao_d_20",
      "type": "line",
      "scene": "ch3_mengyao18",
      "speaker": "narrator",
      "character": null,
      "text": "她抬眼看了我一下，没有追问是哪一种消息。我把椅子推回原位，出门时第一次不急着猜她有没有原谅我。",
      "next": "ch3_mengyao_e_01"
    },
    "ch3_mengyao_e_01": {
      "id": "ch3_mengyao_e_01",
      "type": "line",
      "scene": "ch3_mengyao21",
      "speaker": "narrator",
      "character": null,
      "text": "第二十一天下午，去见孟遥的路上，我又看了遍早晨的消息：贵阳那边收到了补交材料，录用尚未确认。",
      "next": "ch3_mengyao_e_02"
    },
    "ch3_mengyao_e_02": {
      "id": "ch3_mengyao_e_02",
      "type": "line",
      "scene": "ch3_mengyao21",
      "speaker": "narrator",
      "character": null,
      "text": "过去这种没有答案的消息，我会等它长成好消息再给人看。早晨拇指停在转发上时，我改为写了自己的话，告诉孟遥目前就是这样。",
      "next": "ch3_mengyao_e_03"
    },
    "ch3_mengyao_e_03": {
      "id": "ch3_mengyao_e_03",
      "type": "line",
      "scene": "ch3_mengyao21",
      "speaker": "narrator",
      "character": null,
      "text": "她中午才回：“看到了。下午的六十秒还看吗？”我回“看”，把手机放下，没有拿她回复的速度猜别的。",
      "next": "ch3_mengyao_e_04"
    },
    "ch3_mengyao_e_04": {
      "id": "ch3_mengyao_e_04",
      "type": "line",
      "scene": "ch3_mengyao21",
      "speaker": "narrator",
      "character": null,
      "text": "见面时，她拿来两只耳机。我提到早上的消息，她说当时在忙着交另一个活，看到后先记住了。",
      "next": "ch3_mengyao_e_05"
    },
    "ch3_mengyao_e_05": {
      "id": "ch3_mengyao_e_05",
      "type": "line",
      "scene": "ch3_mengyao21",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "我没法替你决定去不去。但知道你现在卡在哪儿，跟什么都不知道，是两回事。",
      "next": "ch3_mengyao_e_06",
      "expression": "expression-serious"
    },
    "ch3_mengyao_e_06": {
      "id": "ch3_mengyao_e_06",
      "type": "line",
      "scene": "ch3_mengyao21",
      "speaker": "narrator",
      "character": null,
      "text": "我们靠在屋檐内侧，把那段小片子又看了一遍。三天前争过的地方还在，这一次我没有急着等它过去。",
      "next": "ch3_mengyao_payoff"
    },
    "ch3_mengyao_payoff": {
      "id": "ch3_mengyao_payoff",
      "type": "gate",
      "scene": "ch3_mengyao21",
      "cases": [
        {
          "flag": "ch3MengyaoWork",
          "value": "image",
          "next": "ch3_mengyao_pay_i_01"
        }
      ],
      "default": "ch3_mengyao_pay_s_01"
    },
    "ch3_mengyao_pay_i_01": {
      "id": "ch3_mengyao_pay_i_01",
      "type": "line",
      "scene": "ch3_mengyao21",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "门的画面还是用了你的顺序。你说像有人刚刚出去，我后来越看越喜欢。",
      "next": "ch3_mengyao_pay_i_02",
      "expression": "expression-smile"
    },
    "ch3_mengyao_pay_i_02": {
      "id": "ch3_mengyao_pay_i_02",
      "type": "line",
      "scene": "ch3_mengyao21",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "中间那段水声呢？",
      "next": "ch3_mengyao_pay_i_03"
    },
    "ch3_mengyao_pay_i_03": {
      "id": "ch3_mengyao_pay_i_03",
      "type": "line",
      "scene": "ch3_mengyao21",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "我的。别想把整个导演位置都占了。",
      "next": "ch3_mengyao_pay_i_04"
    },
    "ch3_mengyao_pay_i_04": {
      "id": "ch3_mengyao_pay_i_04",
      "type": "line",
      "scene": "ch3_mengyao21",
      "speaker": "narrator",
      "character": null,
      "text": "片尾出现两个人的名字，我负责的只是片段讨论。可那一点点也被写清了，我看完又把进度条拉回去。",
      "next": "ch3_mengyao_f_01"
    },
    "ch3_mengyao_pay_s_01": {
      "id": "ch3_mengyao_pay_s_01",
      "type": "line",
      "scene": "ch3_mengyao21",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "结尾留了你录的关门声。开头是我那一下，两个人听见的同一条街，还真不一样。",
      "next": "ch3_mengyao_pay_s_02",
      "expression": "expression-smile"
    },
    "ch3_mengyao_pay_s_02": {
      "id": "ch3_mengyao_pay_s_02",
      "type": "line",
      "scene": "ch3_mengyao21",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "我那段最后夹着一声打喷嚏，你剪掉了吧？",
      "next": "ch3_mengyao_pay_s_03"
    },
    "ch3_mengyao_pay_s_03": {
      "id": "ch3_mengyao_pay_s_03",
      "type": "line",
      "scene": "ch3_mengyao21",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "剪了。本来有意保留，后来想到署名会很难写。",
      "next": "ch3_mengyao_pay_s_04"
    },
    "ch3_mengyao_pay_s_04": {
      "id": "ch3_mengyao_pay_s_04",
      "type": "line",
      "scene": "ch3_mengyao21",
      "speaker": "narrator",
      "character": null,
      "text": "她指给我看“现场声音”后面的两个名字。我知道自己留下的不多，却第一次希望这一分钟慢一点过去。",
      "next": "ch3_mengyao_f_01"
    },
    "ch3_mengyao_f_01": {
      "id": "ch3_mengyao_f_01",
      "type": "line",
      "scene": "ch3_mengyao21",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "我想把它存着。也想再和你做下一段。",
      "next": "ch3_mengyao_f_02"
    },
    "ch3_mengyao_f_02": {
      "id": "ch3_mengyao_f_02",
      "type": "line",
      "scene": "ch3_mengyao21",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "可以。不过下一段别从怎么离开开始，我最近拍够门了。",
      "next": "ch3_bg_mengyao_21_01"
    },
    "ch3_mengyao_f_03": {
      "id": "ch3_mengyao_f_03",
      "type": "line",
      "scene": "ch3_mengyao21",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "我看向她。她没躲开，过了一会儿才把耳机线绕好，重新开口。",
      "next": "ch3_mengyao_f_04",
      "expression": "expression-hesitant"
    },
    "ch3_mengyao_f_04": {
      "id": "ch3_mengyao_f_04",
      "type": "line",
      "scene": "ch3_mengyao21",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "我还是会怕你又不说话。今天见到你，也确实高兴。两个都是真的。",
      "next": "ch3_mengyao_f_05"
    },
    "ch3_mengyao_f_05": {
      "id": "ch3_mengyao_f_05",
      "type": "line",
      "scene": "ch3_mengyao21",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "我也高兴。下次没消息，我不会把自己一起藏起来。",
      "next": "ch3_mengyao_f_06"
    },
    "ch3_mengyao_f_06": {
      "id": "ch3_mengyao_f_06",
      "type": "line",
      "scene": "ch3_mengyao21",
      "speaker": "narrator",
      "character": null,
      "text": "她点头，把自己的那只耳机收进包里，另一只还在我手上。我递回去，她却让我先别动。",
      "next": "ch3_mengyao_f_07"
    },
    "ch3_mengyao_f_07": {
      "id": "ch3_mengyao_f_07",
      "type": "line",
      "scene": "ch3_mengyao21",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "再听一次吧。刚才你一直在讲话，最后几秒都没听全。",
      "next": "ch3_mengyao_f_08",
      "expression": "expression-smile"
    },
    "ch3_mengyao_f_08": {
      "id": "ch3_mengyao_f_08",
      "type": "line",
      "scene": "ch3_mengyao21",
      "speaker": "narrator",
      "character": null,
      "text": "我戴好耳机，和她并排看向坡口。街上的人照常赶路，那一分钟终于从第一秒完整走到了最后一秒。",
      "next": "end_ch3_mengyao"
    },
    "end_ch3_mengyao": {
      "id": "end_ch3_mengyao",
      "type": "end",
      "scene": "ch3_mengyao21",
      "character": "mengyao",
      "title": "没有答案的消息也抵达了",
      "text": "旧话谈完一段，并没有让旧伤立刻消失。我们争过一处剪辑，也共同留下了一分钟的新作品。我把尚未录用的消息告诉她，她说仍会害怕，也说今天见我很高兴。关系往前走了一步，靠的是接下来还会说话。",
      "nextChapter": "后日谈 · 雨后的约定：两年后，再与飘和毛狼相聚。此前的个人道路仍会继续。",
      "next": "epilogue_piao_entry"
    },
    "ch3_yelan_a_01": {
      "id": "ch3_yelan_a_01",
      "type": "line",
      "scene": "ch3_yelan15",
      "speaker": "narrator",
      "character": null,
      "text": "叶岚约我第十五天下午看一份布置方案。回声大厅那片空地已经获准借用，只做设备和流程演练，不接待外面的活动。",
      "next": "ch3_yelan_a_02"
    },
    "ch3_yelan_a_02": {
      "id": "ch3_yelan_a_02",
      "type": "line",
      "scene": "ch3_yelan15",
      "speaker": "yelan",
      "character": "yelan",
      "text": "有人问我能不能接月底以后的执行小单。我没先说能，约了第十八天把方案给他们看。",
      "next": "ch3_yelan_a_03",
      "expression": "expression-serious"
    },
    "ch3_yelan_a_03": {
      "id": "ch3_yelan_a_03",
      "type": "line",
      "scene": "ch3_yelan15",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "我负责看设备这块？",
      "next": "ch3_yelan_a_04"
    },
    "ch3_yelan_a_04": {
      "id": "ch3_yelan_a_04",
      "type": "line",
      "scene": "ch3_yelan15",
      "speaker": "yelan",
      "character": "yelan",
      "text": "嗯，按我们之前说好的工时。我自己把流程说清，你不用替我接客户的话。",
      "next": "ch3_yelan_a_05"
    },
    "ch3_yelan_a_05": {
      "id": "ch3_yelan_a_05",
      "type": "line",
      "scene": "ch3_yelan15",
      "speaker": "narrator",
      "character": null,
      "text": "她在椅子上放了两张纸，分别写来宾位置和设备区。纸角还没压好，毛狼路过顺手扶住，被她叫住借了两分钟。",
      "next": "ch3_yelan_a_06"
    },
    "ch3_yelan_a_06": {
      "id": "ch3_yelan_a_06",
      "type": "line",
      "scene": "ch3_yelan15",
      "speaker": "maolang",
      "character": "maolang",
      "text": "叶老师，我已经站成观众席了，后面是不是得收门票？",
      "next": "ch3_yelan_a_07",
      "expression": "expression-smile"
    },
    "ch3_yelan_a_07": {
      "id": "ch3_yelan_a_07",
      "type": "line",
      "scene": "ch3_yelan15",
      "speaker": "yelan",
      "character": "yelan",
      "text": "先别表演。你把那边的通道留出来，就能走了。",
      "next": "ch3_yelan_a_08"
    },
    "ch3_yelan_a_08": {
      "id": "ch3_yelan_a_08",
      "type": "line",
      "scene": "ch3_yelan15",
      "speaker": "narrator",
      "character": null,
      "text": "毛狼把椅子挪好，真的走了。叶岚看着他的背影，像刚想再交代一句，最后只在纸上划掉完成项。",
      "next": "ch3_yelan_memory"
    },
    "ch3_yelan_memory": {
      "id": "ch3_yelan_memory",
      "type": "gate",
      "scene": "ch3_yelan15",
      "cases": [
        {
          "flag": "inventory",
          "value": "full",
          "next": "ch3_yelan_mem_f_01"
        }
      ],
      "default": "ch3_yelan_mem_l_01"
    },
    "ch3_yelan_mem_f_01": {
      "id": "ch3_yelan_mem_f_01",
      "type": "line",
      "scene": "ch3_yelan15",
      "speaker": "yelan",
      "character": "yelan",
      "text": "上次清单整单让你接了，你后来才赶自己的材料。这回你给我一个能到场的时间，不用把空档全填上。",
      "next": "ch3_yelan_mem_f_02"
    },
    "ch3_yelan_mem_f_02": {
      "id": "ch3_yelan_mem_f_02",
      "type": "line",
      "scene": "ch3_yelan15",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "今天到五点，第十八天下午另留两小时。够我负责的那部分。",
      "next": "ch3_yelan_b_01"
    },
    "ch3_yelan_mem_l_01": {
      "id": "ch3_yelan_mem_l_01",
      "type": "line",
      "scene": "ch3_yelan15",
      "speaker": "yelan",
      "character": "yelan",
      "text": "上回你只做两小时，余项交得清楚，同事接上也没乱。这次我想按那种办法排。",
      "next": "ch3_yelan_mem_l_02"
    },
    "ch3_yelan_mem_l_02": {
      "id": "ch3_yelan_mem_l_02",
      "type": "line",
      "scene": "ch3_yelan15",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "那我先写我能到场的时间。今天五点得走，第十八天下午另留两小时。",
      "next": "ch3_yelan_b_01"
    },
    "ch3_yelan_b_01": {
      "id": "ch3_yelan_b_01",
      "type": "line",
      "scene": "ch3_yelan15",
      "speaker": "narrator",
      "character": null,
      "text": "她点头，把我的时间写上，接着给自己填了一整段。我看着那条几乎不留空的线，她已经先把笔停住。",
      "next": "ch3_yelan_b_02"
    },
    "ch3_yelan_b_02": {
      "id": "ch3_yelan_b_02",
      "type": "line",
      "scene": "ch3_yelan15",
      "speaker": "yelan",
      "character": "yelan",
      "text": "我知道。总觉得写上自己的名字，就不用再解释。",
      "next": "ch3_bg_yelan_15_01"
    },
    "ch3_yelan_b_03": {
      "id": "ch3_yelan_b_03",
      "type": "line",
      "scene": "ch3_yelan15",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "你第十八天要做讲解，不能同时守在每条线边上。",
      "next": "ch3_yelan_b_04"
    },
    "ch3_yelan_b_04": {
      "id": "ch3_yelan_b_04",
      "type": "line",
      "scene": "ch3_yelan15",
      "speaker": "yelan",
      "character": "yelan",
      "text": "所以我得练这个。我人离开两分钟，事情还照样往下走。",
      "next": "ch3_yelan_b_05",
      "expression": "expression-hesitant"
    },
    "ch3_yelan_b_05": {
      "id": "ch3_yelan_b_05",
      "type": "line",
      "scene": "ch3_yelan15",
      "speaker": "narrator",
      "character": null,
      "text": "她把交接页摊开，又看了看桌上的流程。我能帮她把一处做扎实，但没有时间两件都重新过一遍。",
      "next": "ch3_yelan_choice"
    },
    "ch3_yelan_choice": {
      "id": "ch3_yelan_choice",
      "type": "choice",
      "scene": "ch3_yelan15",
      "character": "yelan",
      "text": "我用这段时间帮她做好哪一种准备？",
      "flag": "ch3YelanSupport",
      "choices": [
        {
          "label": "做一次缺席演练，让接手的人按交接页找齐东西。",
          "value": "handoff",
          "next": "ch3_yelan_pick_h_01"
        },
        {
          "label": "听她完整讲一遍方案，再问客户可能会问的问题。",
          "value": "pitch",
          "next": "ch3_yelan_pick_p_01"
        }
      ]
    },
    "ch3_yelan_pick_h_01": {
      "id": "ch3_yelan_pick_h_01",
      "type": "line",
      "scene": "ch3_yelan15",
      "speaker": "narrator",
      "character": null,
      "text": "她请同事照交接页找设备，自己退到桌子另一侧。第一个柜号就有两种理解，她的手立刻伸向那把钥匙。",
      "next": "ch3_yelan_pick_h_02"
    },
    "ch3_yelan_pick_h_02": {
      "id": "ch3_yelan_pick_h_02",
      "type": "line",
      "scene": "ch3_yelan15",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "先让他找完，我们才知道哪句没写清。",
      "next": "ch3_yelan_pick_h_03"
    },
    "ch3_yelan_pick_h_03": {
      "id": "ch3_yelan_pick_h_03",
      "type": "line",
      "scene": "ch3_yelan15",
      "speaker": "narrator",
      "character": null,
      "text": "她把钥匙放回桌上，等同事问出口，才在页边画了位置。第二次找，柜门很快就打开了。",
      "next": "ch3_yelan_pick_h_04"
    },
    "ch3_yelan_pick_h_04": {
      "id": "ch3_yelan_pick_h_04",
      "type": "line",
      "scene": "ch3_yelan15",
      "speaker": "yelan",
      "character": "yelan",
      "text": "原来不是每回都得我带着走。早知道刚才少紧张两分钟。",
      "next": "ch3_yelan_c_01",
      "expression": "expression-smile"
    },
    "ch3_yelan_pick_p_01": {
      "id": "ch3_yelan_pick_p_01",
      "type": "line",
      "scene": "ch3_yelan15",
      "speaker": "narrator",
      "character": null,
      "text": "我坐在观众位置，先问如果客户临时添一个节目怎么办。她下意识说可以协调，说完又自己停住。",
      "next": "ch3_yelan_pick_p_02"
    },
    "ch3_yelan_pick_p_02": {
      "id": "ch3_yelan_pick_p_02",
      "type": "line",
      "scene": "ch3_yelan15",
      "speaker": "yelan",
      "character": "yelan",
      "text": "不对。我得先问添多长、用什么，再看人和时间。你再问一遍。",
      "next": "ch3_yelan_pick_p_03"
    },
    "ch3_yelan_pick_p_03": {
      "id": "ch3_yelan_pick_p_03",
      "type": "line",
      "scene": "ch3_yelan15",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "那能不能顺便多加三个？",
      "next": "ch3_yelan_pick_p_04"
    },
    "ch3_yelan_pick_p_04": {
      "id": "ch3_yelan_pick_p_04",
      "type": "line",
      "scene": "ch3_yelan15",
      "speaker": "yelan",
      "character": "yelan",
      "text": "现在不能。先把原来那一个说清。……这句说出来也没那么难。",
      "next": "ch3_yelan_c_01",
      "expression": "expression-smile"
    },
    "ch3_yelan_c_01": {
      "id": "ch3_yelan_c_01",
      "type": "line",
      "scene": "ch3_yelan15",
      "speaker": "narrator",
      "character": null,
      "text": "到五点我收工具，她也没有临时再添一项。送我到大厅门口时，她忽然问我下班以后一般做什么。",
      "next": "ch3_yelan_c_02"
    },
    "ch3_yelan_c_02": {
      "id": "ch3_yelan_c_02",
      "type": "line",
      "scene": "ch3_yelan15",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "最近？找地方吃饭，走慢一点。",
      "next": "ch3_yelan_c_03"
    },
    "ch3_yelan_c_03": {
      "id": "ch3_yelan_c_03",
      "type": "line",
      "scene": "ch3_yelan15",
      "speaker": "yelan",
      "character": "yelan",
      "text": "听起来简单。我先把第十八天过完，再学走慢一点。",
      "next": "ch3_yelan_c_04"
    },
    "ch3_yelan_c_04": {
      "id": "ch3_yelan_c_04",
      "type": "line",
      "scene": "ch3_yelan15",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "到时候我可以陪你。",
      "next": "ch3_yelan_c_05"
    },
    "ch3_yelan_c_05": {
      "id": "ch3_yelan_c_05",
      "type": "line",
      "scene": "ch3_yelan15",
      "speaker": "narrator",
      "character": null,
      "text": "她说了声好，比确认工时轻很多。我出门以后，还在想她那一瞬间没看流程表的眼神。",
      "next": "ch3_yelan_d_01"
    },
    "ch3_yelan_d_01": {
      "id": "ch3_yelan_d_01",
      "type": "line",
      "scene": "ch3_yelan18",
      "speaker": "narrator",
      "character": null,
      "text": "第十八天下午，我提前十分钟到大厅。叶岚已经换过流程顺序，借用的设备各有标签，旧监听仍留在待查那一栏，没有混进去。",
      "next": "ch3_yelan_d_02"
    },
    "ch3_yelan_d_02": {
      "id": "ch3_yelan_d_02",
      "type": "line",
      "scene": "ch3_yelan18",
      "speaker": "narrator",
      "character": null,
      "text": "对方按约在线上看演示。叶岚把手机架稳，先说明这里只是布置演练，正式场地仍须确认。",
      "next": "ch3_yelan_d_03"
    },
    "ch3_yelan_d_03": {
      "id": "ch3_yelan_d_03",
      "type": "line",
      "scene": "ch3_yelan18",
      "speaker": "yelan",
      "character": "yelan",
      "text": "现在给您看通道和设备位置。人手与时长按这版，临时变更另核。",
      "next": "ch3_yelan_d_04",
      "expression": "expression-serious"
    },
    "ch3_yelan_d_04": {
      "id": "ch3_yelan_d_04",
      "type": "line",
      "scene": "ch3_yelan18",
      "speaker": "narrator",
      "character": null,
      "text": "她讲得不慢，也没有不停回头看我。演示到一半，回声同事拿来一张需要核对的收尾单，站在门边等她。",
      "next": "ch3_yelan_d_05"
    },
    "ch3_yelan_d_05": {
      "id": "ch3_yelan_d_05",
      "type": "line",
      "scene": "ch3_yelan18",
      "speaker": "narrator",
      "character": "yelan",
      "text": "她差一点伸手去接，目光在那张纸上停住。接着，她指了指桌上留出的交接页，让同事先按编号查。",
      "next": "ch3_yelan_d_06",
      "expression": "expression-hesitant"
    },
    "ch3_yelan_d_06": {
      "id": "ch3_yelan_d_06",
      "type": "line",
      "scene": "ch3_yelan18",
      "speaker": "yelan",
      "character": "yelan",
      "text": "这一段你先核。找不到的圈出来，我演示结束再一起看。",
      "next": "ch3_yelan_d_07"
    },
    "ch3_yelan_d_07": {
      "id": "ch3_yelan_d_07",
      "type": "line",
      "scene": "ch3_yelan18",
      "speaker": "narrator",
      "character": null,
      "text": "同事点头走开，讲解继续。没有人因为她没亲自去开柜子就停在原地，我也终于能专心看自己的设备项。",
      "next": "ch3_yelan_d_08"
    },
    "ch3_yelan_d_08": {
      "id": "ch3_yelan_d_08",
      "type": "line",
      "scene": "ch3_yelan18",
      "speaker": "narrator",
      "character": null,
      "text": "对方提出多加一段互动。叶岚没说“尽量”，问完时长后，把需要多一人的部分明确写进待确认。",
      "next": "ch3_yelan_d_09"
    },
    "ch3_yelan_d_09": {
      "id": "ch3_yelan_d_09",
      "type": "line",
      "scene": "ch3_yelan18",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "设备这部分我核过，现有这套能支持原方案。新增那项要再看，今天不能一起算进去。",
      "next": "ch3_yelan_d_10"
    },
    "ch3_yelan_d_10": {
      "id": "ch3_yelan_d_10",
      "type": "line",
      "scene": "ch3_yelan18",
      "speaker": "narrator",
      "character": null,
      "text": "叶岚接过我的话，把报价和变更分开说明。那几分钟她像仍在熟悉一个新姿势，但没有又把所有事揽回自己名下。",
      "next": "ch3_yelan_d_11"
    },
    "ch3_yelan_d_11": {
      "id": "ch3_yelan_d_11",
      "type": "line",
      "scene": "ch3_yelan18",
      "speaker": "narrator",
      "character": null,
      "text": "通话结束，对方确认愿意继续对接，请她第二十一天发修改后的方案，尚未定正式订单。她盯着屏幕笑了一下，又坐回椅子。",
      "next": "ch3_yelan_d_12"
    },
    "ch3_yelan_d_12": {
      "id": "ch3_yelan_d_12",
      "type": "line",
      "scene": "ch3_yelan18",
      "speaker": "yelan",
      "character": "yelan",
      "text": "我刚才有两句说得乱。他问到费用那儿，差点开始解释我自己为什么紧张。",
      "next": "ch3_yelan_d_13",
      "expression": "expression-hesitant"
    },
    "ch3_yelan_d_13": {
      "id": "ch3_yelan_d_13",
      "type": "line",
      "scene": "ch3_yelan18",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "我没听出来后半段。",
      "next": "ch3_yelan_d_14"
    },
    "ch3_yelan_d_14": {
      "id": "ch3_yelan_d_14",
      "type": "line",
      "scene": "ch3_yelan18",
      "speaker": "yelan",
      "character": "yelan",
      "text": "因为忍住了。你还以为我天生就会？",
      "next": "ch3_yelan_d_15"
    },
    "ch3_yelan_d_15": {
      "id": "ch3_yelan_d_15",
      "type": "line",
      "scene": "ch3_yelan18",
      "speaker": "narrator",
      "character": null,
      "text": "我摇头。她把杯里的水喝完，伸手去拿门边那张单，又看见同事已经圈出两处疑问，其他地方都核好了。",
      "next": "ch3_yelan_d_16"
    },
    "ch3_yelan_d_16": {
      "id": "ch3_yelan_d_16",
      "type": "line",
      "scene": "ch3_yelan18",
      "speaker": "yelan",
      "character": "yelan",
      "text": "比我自己来回跑还快。就是心里总有一点不踏实。",
      "next": "ch3_bg_yelan_18_01"
    },
    "ch3_yelan_d_17": {
      "id": "ch3_yelan_d_17",
      "type": "line",
      "scene": "ch3_yelan18",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "剩下这两处我陪你核。已经做完的，让他自己签。",
      "next": "ch3_yelan_d_18"
    },
    "ch3_yelan_d_18": {
      "id": "ch3_yelan_d_18",
      "type": "line",
      "scene": "ch3_yelan18",
      "speaker": "narrator",
      "character": null,
      "text": "她没回答，先把两处问题问清，然后让同事把钥匙按交接放回去。完成页上有三个名字，不再只是一条她自己的长线。",
      "next": "ch3_yelan_d_19"
    },
    "ch3_yelan_d_19": {
      "id": "ch3_yelan_d_19",
      "type": "line",
      "scene": "ch3_yelan18",
      "speaker": "yelan",
      "character": "yelan",
      "text": "第二十一天方案交出去以后，留一小段时间吧。我想请你走走，不是帮我跑下一家。",
      "next": "ch3_yelan_d_20"
    },
    "ch3_yelan_d_20": {
      "id": "ch3_yelan_d_20",
      "type": "line",
      "scene": "ch3_yelan18",
      "speaker": "narrator",
      "character": null,
      "text": "我答应下来。她看着我，似乎还想给这次散步排一个起止时间，最后笑着把笔放下了。",
      "next": "ch3_yelan_e_01"
    },
    "ch3_yelan_e_01": {
      "id": "ch3_yelan_e_01",
      "type": "line",
      "scene": "ch3_yelan21",
      "speaker": "narrator",
      "character": null,
      "text": "第二十一天下午，叶岚把修改方案发完，回声的当班同事也接走了收尾工作。我在门外等，她抱着一本薄薄的文件夹出来，没有再回头交代。",
      "next": "ch3_yelan_e_02"
    },
    "ch3_yelan_e_02": {
      "id": "ch3_yelan_e_02",
      "type": "line",
      "scene": "ch3_yelan21",
      "speaker": "yelan",
      "character": "yelan",
      "text": "东西都带齐了。别问钥匙，我再摸一遍就又想回去了。",
      "next": "ch3_yelan_e_03",
      "expression": "expression-hesitant"
    },
    "ch3_yelan_e_03": {
      "id": "ch3_yelan_e_03",
      "type": "line",
      "scene": "ch3_yelan21",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "那问今天想往哪边走？",
      "next": "ch3_yelan_e_04"
    },
    "ch3_yelan_e_04": {
      "id": "ch3_yelan_e_04",
      "type": "line",
      "scene": "ch3_yelan21",
      "speaker": "narrator",
      "character": null,
      "text": "她看了看左右，竟然比刚才确认报价还迟疑。站了几秒，她指向坡上，说那边路灯亮得慢，想看看天。",
      "next": "ch3_yelan_payoff"
    },
    "ch3_yelan_payoff": {
      "id": "ch3_yelan_payoff",
      "type": "gate",
      "scene": "ch3_yelan21",
      "cases": [
        {
          "flag": "ch3YelanSupport",
          "value": "handoff",
          "next": "ch3_yelan_pay_h_01"
        }
      ],
      "default": "ch3_yelan_pay_p_01"
    },
    "ch3_yelan_pay_h_01": {
      "id": "ch3_yelan_pay_h_01",
      "type": "line",
      "scene": "ch3_yelan21",
      "speaker": "yelan",
      "character": "yelan",
      "text": "今天他照那张交接页自己找到了。上午还给我改了一个更好认的写法。",
      "next": "ch3_yelan_pay_h_02"
    },
    "ch3_yelan_pay_h_02": {
      "id": "ch3_yelan_pay_h_02",
      "type": "line",
      "scene": "ch3_yelan21",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "那页可以退休了？",
      "next": "ch3_yelan_pay_h_03"
    },
    "ch3_yelan_pay_h_03": {
      "id": "ch3_yelan_pay_h_03",
      "type": "line",
      "scene": "ch3_yelan21",
      "speaker": "yelan",
      "character": "yelan",
      "text": "是我可以离开柜子远一点了。刚才他让我下班，语气跟我以前催别人一模一样。",
      "next": "ch3_yelan_pay_h_04",
      "expression": "expression-smile"
    },
    "ch3_yelan_pay_h_04": {
      "id": "ch3_yelan_pay_h_04",
      "type": "line",
      "scene": "ch3_yelan21",
      "speaker": "narrator",
      "character": null,
      "text": "她往回声门口瞥了一眼，却没有停脚。我看见她把想掏手机的手收了回来。",
      "next": "ch3_yelan_f_01"
    },
    "ch3_yelan_pay_p_01": {
      "id": "ch3_yelan_pay_p_01",
      "type": "line",
      "scene": "ch3_yelan21",
      "speaker": "yelan",
      "character": "yelan",
      "text": "客户今天又问能不能“顺便”加一点。我照我们练的问完，他自己说那就下次。",
      "next": "ch3_yelan_pay_p_02"
    },
    "ch3_yelan_pay_p_02": {
      "id": "ch3_yelan_pay_p_02",
      "type": "line",
      "scene": "ch3_yelan21",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "你听起来有点得意。",
      "next": "ch3_yelan_pay_p_03"
    },
    "ch3_yelan_pay_p_03": {
      "id": "ch3_yelan_pay_p_03",
      "type": "line",
      "scene": "ch3_yelan21",
      "speaker": "yelan",
      "character": "yelan",
      "text": "有一点。我以前总怕这一句说不好，人家就不找我了。今天发现，可以先把话讲完。",
      "next": "ch3_yelan_pay_p_04",
      "expression": "expression-smile"
    },
    "ch3_yelan_pay_p_04": {
      "id": "ch3_yelan_pay_p_04",
      "type": "line",
      "scene": "ch3_yelan21",
      "speaker": "narrator",
      "character": null,
      "text": "她把收到的确认消息给我看了一眼，随即锁屏。那一点得意没变成新的工作汇报，留在了她脸上。",
      "next": "ch3_yelan_f_01"
    },
    "ch3_yelan_f_01": {
      "id": "ch3_yelan_f_01",
      "type": "line",
      "scene": "ch3_yelan21",
      "speaker": "narrator",
      "character": null,
      "text": "走过第一个路口，她问我饿不饿，又说附近哪家开到几点。我笑着提醒她，今晚不用负责照顾同行者。",
      "next": "ch3_yelan_f_02"
    },
    "ch3_yelan_f_02": {
      "id": "ch3_yelan_f_02",
      "type": "line",
      "scene": "ch3_yelan21",
      "speaker": "yelan",
      "character": "yelan",
      "text": "我不是负责。我就是……想再走一段，又怕你饿。",
      "next": "ch3_yelan_f_03",
      "expression": "expression-hesitant"
    },
    "ch3_yelan_f_03": {
      "id": "ch3_yelan_f_03",
      "type": "line",
      "scene": "ch3_yelan21",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "那我想和你再走一段。饿了我自己说。",
      "next": "ch3_yelan_f_04"
    },
    "ch3_yelan_f_04": {
      "id": "ch3_yelan_f_04",
      "type": "line",
      "scene": "ch3_yelan21",
      "speaker": "narrator",
      "character": null,
      "text": "她点头，脚步慢下来。路边的水从砖缝往下流，我们都得绕过同一块松动的砖，肩膀短暂靠近，又各自站稳。",
      "next": "ch3_yelan_f_05"
    },
    "ch3_yelan_f_05": {
      "id": "ch3_yelan_f_05",
      "type": "line",
      "scene": "ch3_yelan21",
      "speaker": "yelan",
      "character": "yelan",
      "text": "我以前下班常想去坡口坐十分钟。真有空了又觉得坐着干什么，不如回去睡。",
      "next": "ch3_yelan_f_06"
    },
    "ch3_yelan_f_06": {
      "id": "ch3_yelan_f_06",
      "type": "line",
      "scene": "ch3_yelan21",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "今天可以先试十分钟。不好坐再走。",
      "next": "ch3_yelan_f_07"
    },
    "ch3_yelan_f_07": {
      "id": "ch3_yelan_f_07",
      "type": "line",
      "scene": "ch3_yelan21",
      "speaker": "yelan",
      "character": "yelan",
      "text": "你怎么连闲逛都能说得像试机。",
      "next": "ch3_yelan_f_08"
    },
    "ch3_yelan_f_08": {
      "id": "ch3_yelan_f_08",
      "type": "line",
      "scene": "ch3_yelan21",
      "speaker": "narrator",
      "character": "yelan",
      "text": "我自己也笑了。她这次没等我再问，主动指了指前面的屋檐，说就在那里停一会儿。",
      "next": "ch3_bg_yelan_21_01",
      "expression": "expression-smile",
      "bg": "old_eaves_day",
      "location": "老街屋檐下"
    },
    "ch3_yelan_f_09": {
      "id": "ch3_yelan_f_09",
      "type": "line",
      "scene": "ch3_yelan21",
      "speaker": "yelan",
      "character": "yelan",
      "text": "你第二十八天走之前，我还想这样见你一次。等我把班换好，自己来约。",
      "next": "ch3_yelan_f_10",
      "bg": "old_eaves_day",
      "location": "老街屋檐下"
    },
    "ch3_yelan_f_10": {
      "id": "ch3_yelan_f_10",
      "type": "line",
      "scene": "ch3_yelan21",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "好。我等你约，也会把我的安排说清楚。",
      "next": "ch3_yelan_f_11",
      "bg": "old_eaves_day",
      "location": "老街屋檐下"
    },
    "ch3_yelan_f_11": {
      "id": "ch3_yelan_f_11",
      "type": "line",
      "scene": "ch3_yelan21",
      "speaker": "narrator",
      "character": null,
      "text": "手机在她包里震了一次，她没有立即拿出来。我们并排站着，先把眼前那十分钟慢慢过完。",
      "next": "end_ch3_yelan",
      "bg": "old_eaves_day",
      "location": "老街屋檐下"
    },
    "end_ch3_yelan": {
      "id": "end_ch3_yelan",
      "type": "end",
      "scene": "ch3_yelan21",
      "character": "yelan",
      "title": "不用等人叫她的名字",
      "text": "试单方案进入下一步，正式订单还没有落定。她让同事接走了工作，也主动留下与我散步的时间。谈起自己的愿望，她比安排一屋子人更笨拙一点；我想继续认识这样的叶岚，等她下一次主动来约。",
      "nextChapter": "后日谈 · 雨后的约定：两年后，再与飘和毛狼相聚。此前的个人道路仍会继续。",
      "next": "epilogue_piao_entry",
      "bg": "old_eaves_day",
      "location": "老街屋檐下"
    },
    "ch3_solo_a_01": {
      "id": "ch3_solo_a_01",
      "type": "line",
      "scene": "ch3_solo15",
      "speaker": "narrator",
      "character": null,
      "text": "这几天的空档，我先留给自己的补充材料，也约毛狼把公开岗位要求一起过一遍。第十五天晚上，我们在师匠柜台边各占了一角。",
      "next": "ch3_solo_a_02"
    },
    "ch3_solo_a_02": {
      "id": "ch3_solo_a_02",
      "type": "line",
      "scene": "ch3_solo15",
      "speaker": "maolang",
      "character": "maolang",
      "text": "你这份自我介绍，“能吃苦、肯学习”，是人就能往上贴。",
      "next": "ch3_solo_a_03",
      "expression": "expression-displeased"
    },
    "ch3_solo_a_03": {
      "id": "ch3_solo_a_03",
      "type": "line",
      "scene": "ch3_solo15",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "你那份“具有丰富舞台经验”，下面列了三场，其中两场你搬音箱。",
      "next": "ch3_solo_a_04"
    },
    "ch3_solo_a_04": {
      "id": "ch3_solo_a_04",
      "type": "line",
      "scene": "ch3_solo15",
      "speaker": "maolang",
      "character": "maolang",
      "text": "搬音箱也是站在舞台上。空间上没有问题。",
      "next": "ch3_solo_a_05"
    },
    "ch3_solo_a_05": {
      "id": "ch3_solo_a_05",
      "type": "line",
      "scene": "ch3_solo15",
      "speaker": "narrator",
      "character": null,
      "text": "他说完先笑，随后把那行划掉了。我也删掉两句套话，把这半个月自己具体做过的事情往里填。",
      "next": "ch3_solo_a_06"
    },
    "ch3_solo_a_06": {
      "id": "ch3_solo_a_06",
      "type": "line",
      "scene": "ch3_solo15",
      "speaker": "narrator",
      "character": null,
      "text": "两份申请各放在自己面前，我们只聊愿意拿出来的那部分，没有把竞争当成一种应该假装不存在的误会。",
      "next": "ch3_solo_a_07"
    },
    "ch3_solo_a_07": {
      "id": "ch3_solo_a_07",
      "type": "line",
      "scene": "ch3_solo15",
      "speaker": "maolang",
      "character": "maolang",
      "text": "我还是想去。要是真撞上同一个位置，我不会因为这顿夜宵就让。",
      "next": "ch3_solo_a_08"
    },
    "ch3_solo_a_08": {
      "id": "ch3_solo_a_08",
      "type": "line",
      "scene": "ch3_solo15",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "还没吃呢，你先把我的饭钱扣了。",
      "next": "ch3_solo_a_09"
    },
    "ch3_solo_a_09": {
      "id": "ch3_solo_a_09",
      "type": "line",
      "scene": "ch3_solo15",
      "speaker": "maolang",
      "character": "maolang",
      "text": "提前声明，便于你决定加不加蛋。",
      "next": "ch3_solo_a_10",
      "expression": "expression-smile"
    },
    "ch3_solo_a_10": {
      "id": "ch3_solo_a_10",
      "type": "line",
      "scene": "ch3_solo15",
      "speaker": "narrator",
      "character": null,
      "text": "师匠把一套备用话筒和旧工作单放上桌。不是回声那套待查的监听；那一项依旧要按已约时间继续复查。",
      "next": "ch3_solo_a_11"
    },
    "ch3_solo_a_11": {
      "id": "ch3_solo_a_11",
      "type": "line",
      "scene": "ch3_solo15",
      "speaker": "shijiang",
      "character": "shijiang",
      "text": "我这边下一份固定维护报价，得把交付写得让人看懂。你俩拿这套正常机练，别只把材料写漂亮。",
      "next": "ch3_solo_a_12",
      "expression": "expression-serious"
    },
    "ch3_solo_a_12": {
      "id": "ch3_solo_a_12",
      "type": "line",
      "scene": "ch3_solo15",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "做一次从检查到交接的完整演练？",
      "next": "ch3_solo_a_13"
    },
    "ch3_solo_a_13": {
      "id": "ch3_solo_a_13",
      "type": "line",
      "scene": "ch3_solo15",
      "speaker": "shijiang",
      "character": "shijiang",
      "text": "第十八天给我看。做了哪一段，就写哪一段，没做过的别替自己补履历。",
      "next": "ch3_solo_film_memory"
    },
    "ch3_solo_film_memory": {
      "id": "ch3_solo_film_memory",
      "type": "gate",
      "scene": "ch3_solo15",
      "cases": [
        {
          "flag": "filmEnding",
          "value": "people",
          "next": "ch3_solo_film_p_01"
        }
      ],
      "default": "ch3_solo_film_r_01"
    },
    "ch3_solo_film_p_01": {
      "id": "ch3_solo_film_p_01",
      "type": "line",
      "scene": "ch3_solo15",
      "speaker": "narrator",
      "character": null,
      "text": "毛狼提起短片最后留下的收工身影，说自己头一次发现搬完最后一把椅子，也能算一个值得被看见的动作。",
      "next": "ch3_solo_film_p_02"
    },
    "ch3_solo_film_p_02": {
      "id": "ch3_solo_film_p_02",
      "type": "line",
      "scene": "ch3_solo15",
      "speaker": "maolang",
      "character": "maolang",
      "text": "下次拍帅点。我那天蹲下去，好像在跟椅子求婚。",
      "next": "ch3_solo_b_01"
    },
    "ch3_solo_film_r_01": {
      "id": "ch3_solo_film_r_01",
      "type": "line",
      "scene": "ch3_solo15",
      "speaker": "narrator",
      "character": null,
      "text": "毛狼提起短片结尾的空房间，说拍之前他还在地上找漏掉的纸，生怕一颗瓜子壳抢走所有人的注意。",
      "next": "ch3_solo_film_r_02"
    },
    "ch3_solo_film_r_02": {
      "id": "ch3_solo_film_r_02",
      "type": "line",
      "scene": "ch3_solo15",
      "speaker": "maolang",
      "character": "maolang",
      "text": "结果最后谁也看不出我多忙。伟大的幕后英雄通常没有镜头。",
      "next": "ch3_solo_b_01"
    },
    "ch3_solo_b_01": {
      "id": "ch3_solo_b_01",
      "type": "line",
      "scene": "ch3_solo15",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "那这回我给你记上，搬运与收场。英雄名字写本名。",
      "next": "ch3_solo_b_02"
    },
    "ch3_solo_b_02": {
      "id": "ch3_solo_b_02",
      "type": "line",
      "scene": "ch3_solo15",
      "speaker": "narrator",
      "character": null,
      "text": "他推了一下我的肩，力道很轻。师匠把桌子中间清出来，让我们选一个最想补上的短处，别又把整晚填满。",
      "next": "ch3_solo_choice"
    },
    "ch3_solo_choice": {
      "id": "ch3_solo_choice",
      "type": "choice",
      "scene": "ch3_solo15",
      "character": "maolang",
      "text": "这次演练，我先把哪一件事做扎实？",
      "flag": "ch3SoloPractice",
      "choices": [
        {
          "label": "练习向不懂设备的人说明检查结果。",
          "value": "explain",
          "next": "ch3_solo_pick_e_01"
        },
        {
          "label": "整理一份别人能独立接手的交付记录。",
          "value": "delivery",
          "next": "ch3_solo_pick_d_01"
        }
      ]
    },
    "ch3_solo_pick_e_01": {
      "id": "ch3_solo_pick_e_01",
      "type": "line",
      "scene": "ch3_solo15",
      "speaker": "narrator",
      "character": null,
      "text": "毛狼扮演着急走的客户，刚听我讲完第一个术语就举手问：“所以我今晚到底能不能用？”",
      "next": "ch3_solo_pick_e_02"
    },
    "ch3_solo_pick_e_02": {
      "id": "ch3_solo_pick_e_02",
      "type": "line",
      "scene": "ch3_solo15",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "原方案能用。新加那一路还没测，要另留时间。",
      "next": "ch3_solo_pick_e_03"
    },
    "ch3_solo_pick_e_03": {
      "id": "ch3_solo_pick_e_03",
      "type": "line",
      "scene": "ch3_solo15",
      "speaker": "maolang",
      "character": "maolang",
      "text": "这不就听懂了？你前面像要把我培养成你同事。",
      "next": "ch3_solo_pick_e_04"
    },
    "ch3_solo_pick_e_04": {
      "id": "ch3_solo_pick_e_04",
      "type": "line",
      "scene": "ch3_solo15",
      "speaker": "narrator",
      "character": null,
      "text": "我把绕远的解释划掉，先说结论，再说条件。师匠没有点头夸我，只让我下一次也照这样讲。",
      "next": "ch3_solo_c_01"
    },
    "ch3_solo_pick_d_01": {
      "id": "ch3_solo_pick_d_01",
      "type": "line",
      "scene": "ch3_solo15",
      "speaker": "narrator",
      "character": null,
      "text": "我把记录推给毛狼，让他只照纸上内容找配件。他一上手就拿错一个袋子，抬头瞪我。",
      "next": "ch3_solo_pick_d_02"
    },
    "ch3_solo_pick_d_02": {
      "id": "ch3_solo_pick_d_02",
      "type": "line",
      "scene": "ch3_solo15",
      "speaker": "maolang",
      "character": "maolang",
      "text": "你写“左边那袋”。你家左边会跟着人转啊？",
      "next": "ch3_solo_pick_d_03"
    },
    "ch3_solo_pick_d_03": {
      "id": "ch3_solo_pick_d_03",
      "type": "line",
      "scene": "ch3_solo15",
      "speaker": "narrator",
      "character": null,
      "text": "我把位置换成编号，再把已测与未测分开。他第二次取对了，拿笔在漏写的数量后面画了一只特别丑的眼睛。",
      "next": "ch3_solo_pick_d_04"
    },
    "ch3_solo_pick_d_04": {
      "id": "ch3_solo_pick_d_04",
      "type": "line",
      "scene": "ch3_solo15",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "知道了，检查员。下次请使用汉字。",
      "next": "ch3_solo_c_01"
    },
    "ch3_solo_c_01": {
      "id": "ch3_solo_c_01",
      "type": "line",
      "scene": "ch3_solo15",
      "speaker": "narrator",
      "character": null,
      "text": "快收工时，毛狼问我第二十八天住处看了没有。我说还在比较，他把公开能查到的交通页发过来，没追问我的面试材料。",
      "next": "ch3_solo_c_02"
    },
    "ch3_solo_c_02": {
      "id": "ch3_solo_c_02",
      "type": "line",
      "scene": "ch3_solo15",
      "speaker": "maolang",
      "character": "maolang",
      "text": "我行程还没定，定了再说。别指望我给你拖箱子。",
      "next": "ch3_solo_c_03"
    },
    "ch3_solo_c_03": {
      "id": "ch3_solo_c_03",
      "type": "line",
      "scene": "ch3_solo15",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "我也不预支你的肩膀。",
      "next": "ch3_solo_c_04"
    },
    "ch3_solo_c_04": {
      "id": "ch3_solo_c_04",
      "type": "line",
      "scene": "ch3_solo15",
      "speaker": "narrator",
      "character": null,
      "text": "我们各自保存文件，约好第十八天再来。没有谁退出，那一点能继续并肩做事的地方却比前几天宽了。",
      "next": "ch3_solo_d_01"
    },
    "ch3_solo_d_01": {
      "id": "ch3_solo_d_01",
      "type": "line",
      "scene": "ch3_solo18",
      "speaker": "narrator",
      "character": null,
      "text": "第十八天晚上，师匠空出柜台给我们演练。我一进门先把自己的东西摆齐，毛狼看了看，说这阵势像准备接受搜查。",
      "next": "ch3_solo_d_02"
    },
    "ch3_solo_d_02": {
      "id": "ch3_solo_d_02",
      "type": "line",
      "scene": "ch3_solo18",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "不许临时加题。",
      "next": "ch3_solo_d_03"
    },
    "ch3_solo_d_03": {
      "id": "ch3_solo_d_03",
      "type": "line",
      "scene": "ch3_solo18",
      "speaker": "maolang",
      "character": "maolang",
      "text": "那还有什么意思。",
      "next": "ch3_solo_d_04"
    },
    "ch3_solo_d_04": {
      "id": "ch3_solo_d_04",
      "type": "line",
      "scene": "ch3_solo18",
      "speaker": "narrator",
      "character": null,
      "text": "我们从收件信息开始走一遍。正常机的检查结果清楚，真正卡住的却是最后交接：他问不在柜台时找谁，我写了自己的名字。",
      "next": "ch3_solo_d_05"
    },
    "ch3_solo_d_05": {
      "id": "ch3_solo_d_05",
      "type": "line",
      "scene": "ch3_solo18",
      "speaker": "shijiang",
      "character": "shijiang",
      "text": "第二十八天以后呢？你人在贵阳，东西不会跟着你过去。",
      "next": "ch3_solo_d_06",
      "expression": "expression-serious"
    },
    "ch3_solo_d_06": {
      "id": "ch3_solo_d_06",
      "type": "line",
      "scene": "ch3_solo18",
      "speaker": "narrator",
      "character": null,
      "text": "我停住。这不是一道要猜的题；我已经跟大家说了行程，却仍习惯把每个后续都留给自己处理。",
      "next": "ch3_solo_d_07"
    },
    "ch3_solo_d_07": {
      "id": "ch3_solo_d_07",
      "type": "line",
      "scene": "ch3_solo18",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "我得把需要接的人和时间写上，先问对方能不能接，不能自己填完算数。",
      "next": "ch3_solo_d_08"
    },
    "ch3_solo_d_08": {
      "id": "ch3_solo_d_08",
      "type": "line",
      "scene": "ch3_solo18",
      "speaker": "maolang",
      "character": "maolang",
      "text": "那你现在问。我月底这几天能来，但我定了行程，你也得再换人。",
      "next": "ch3_solo_d_09"
    },
    "ch3_solo_d_09": {
      "id": "ch3_solo_d_09",
      "type": "line",
      "scene": "ch3_solo18",
      "speaker": "narrator",
      "character": null,
      "text": "我们把可接时段列清，交给师匠确认。师匠接下剩下的维护安排，让我把报价草页重做一处，终于愿意往下看。",
      "next": "ch3_solo_d_10"
    },
    "ch3_solo_d_10": {
      "id": "ch3_solo_d_10",
      "type": "line",
      "scene": "ch3_solo18",
      "speaker": "narrator",
      "character": null,
      "text": "到毛狼介绍现场工作时，他把“出现情况及时处理”说了三遍。我问具体是哪一种，他脸上的笑慢慢收起来。",
      "next": "ch3_solo_d_11"
    },
    "ch3_solo_d_11": {
      "id": "ch3_solo_d_11",
      "type": "line",
      "scene": "ch3_solo18",
      "speaker": "maolang",
      "character": "maolang",
      "text": "我知道听着空。但真写搬椅子、带人走流程，感觉又不像什么本事。",
      "next": "ch3_solo_d_12",
      "expression": "expression-downcast"
    },
    "ch3_solo_d_12": {
      "id": "ch3_solo_d_12",
      "type": "line",
      "scene": "ch3_solo18",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "第十二天你挨个联系了已知的转发者，没回复的也记着。写清你怎么处理、还差什么，比“及时处理”有用。",
      "next": "ch3_solo_d_13"
    },
    "ch3_solo_d_13": {
      "id": "ch3_solo_d_13",
      "type": "line",
      "scene": "ch3_solo18",
      "speaker": "maolang",
      "character": "maolang",
      "text": "发错片那段也写？",
      "next": "ch3_solo_d_14"
    },
    "ch3_solo_d_14": {
      "id": "ch3_solo_d_14",
      "type": "line",
      "scene": "ch3_solo18",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "你愿意写，就把改了什么一起写。不想写进申请，也别装自己以后不会出错。",
      "next": "ch3_solo_d_15"
    },
    "ch3_solo_d_15": {
      "id": "ch3_solo_d_15",
      "type": "line",
      "scene": "ch3_solo18",
      "speaker": "narrator",
      "character": null,
      "text": "他盯着屏幕一会儿，开始改那段经历。我没有替他组织措辞，只把自己听不明白的地方问出来。",
      "next": "ch3_solo_d_16"
    },
    "ch3_solo_d_16": {
      "id": "ch3_solo_d_16",
      "type": "line",
      "scene": "ch3_solo18",
      "speaker": "narrator",
      "character": null,
      "text": "最后师匠把我们确认过的交接表留了下来，说明会放进固定维护报价的附件，具体工时按已经做完的记。",
      "next": "ch3_solo_d_17"
    },
    "ch3_solo_d_17": {
      "id": "ch3_solo_d_17",
      "type": "line",
      "scene": "ch3_solo18",
      "speaker": "shijiang",
      "character": "shijiang",
      "text": "这张能用。下次设备不一样，别直接照抄。",
      "next": "ch3_solo_d_18",
      "expression": "expression-serious"
    },
    "ch3_solo_d_18": {
      "id": "ch3_solo_d_18",
      "type": "line",
      "scene": "ch3_solo18",
      "speaker": "maolang",
      "character": "maolang",
      "text": "听见没，最高评价：能用。",
      "next": "ch3_solo_d_19"
    },
    "ch3_solo_d_19": {
      "id": "ch3_solo_d_19",
      "type": "line",
      "scene": "ch3_solo18",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "比我原来那份“积极上进”高得多。",
      "next": "ch3_solo_d_20"
    },
    "ch3_solo_d_20": {
      "id": "ch3_solo_d_20",
      "type": "line",
      "scene": "ch3_solo18",
      "speaker": "narrator",
      "character": null,
      "text": "我把自己的最终材料存好。第十八天夜里，没有录用通知突然掉下来，桌上却确实多了别人接得住的东西。",
      "next": "ch3_solo_e_01"
    },
    "ch3_solo_e_01": {
      "id": "ch3_solo_e_01",
      "type": "line",
      "scene": "ch3_solo21",
      "speaker": "narrator",
      "character": null,
      "text": "第二十一天晚上，我们到面馆吃饭。师匠迟了几分钟，坐下前先确认两人的材料都各自提交妥当，才把手机放在桌角。",
      "next": "ch3_solo_e_02"
    },
    "ch3_solo_e_02": {
      "id": "ch3_solo_e_02",
      "type": "line",
      "scene": "ch3_solo21",
      "speaker": "maolang",
      "character": "maolang",
      "text": "我提交完又发现一个标点，盯了十分钟。后来想明白了，他们不是招逗号。",
      "next": "ch3_solo_e_03"
    },
    "ch3_solo_e_03": {
      "id": "ch3_solo_e_03",
      "type": "line",
      "scene": "ch3_solo21",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "我刷新了三次邮箱。第三次连广告都没有。",
      "next": "ch3_solo_e_04"
    },
    "ch3_solo_e_04": {
      "id": "ch3_solo_e_04",
      "type": "line",
      "scene": "ch3_solo21",
      "speaker": "shijiang",
      "character": "shijiang",
      "text": "面来了。先别把录用等在碗里。",
      "next": "ch3_solo_e_05",
      "expression": "expression-smile"
    },
    "ch3_solo_e_05": {
      "id": "ch3_solo_e_05",
      "type": "line",
      "scene": "ch3_solo21",
      "speaker": "narrator",
      "character": null,
      "text": "我把手机翻过去，毛狼照着做了。老板问加不加蛋，他指向我，说今天这位的工作记录终于能见人了。",
      "next": "ch3_solo_payoff"
    },
    "ch3_solo_payoff": {
      "id": "ch3_solo_payoff",
      "type": "gate",
      "scene": "ch3_solo21",
      "cases": [
        {
          "flag": "ch3SoloPractice",
          "value": "explain",
          "next": "ch3_solo_pay_e_01"
        }
      ],
      "default": "ch3_solo_pay_d_01"
    },
    "ch3_solo_pay_e_01": {
      "id": "ch3_solo_pay_e_01",
      "type": "line",
      "scene": "ch3_solo21",
      "speaker": "shijiang",
      "character": "shijiang",
      "text": "昨天客户问维护内容，我按你那种先说能做什么的顺序讲，少来回问一轮。",
      "next": "ch3_solo_pay_e_02"
    },
    "ch3_solo_pay_e_02": {
      "id": "ch3_solo_pay_e_02",
      "type": "line",
      "scene": "ch3_solo21",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "那是不是可以写进我的经历？",
      "next": "ch3_solo_pay_e_03"
    },
    "ch3_solo_pay_e_03": {
      "id": "ch3_solo_pay_e_03",
      "type": "line",
      "scene": "ch3_solo21",
      "speaker": "shijiang",
      "character": "shijiang",
      "text": "写你实际做的说明演练和那页摘要。客户是我接的，别顺手抢走。",
      "next": "ch3_solo_pay_e_04"
    },
    "ch3_solo_pay_e_04": {
      "id": "ch3_solo_pay_e_04",
      "type": "line",
      "scene": "ch3_solo21",
      "speaker": "maolang",
      "character": "maolang",
      "text": "完了，我刚准备帮你写“独立拿下大客户”。",
      "next": "ch3_solo_f_01"
    },
    "ch3_solo_pay_d_01": {
      "id": "ch3_solo_pay_d_01",
      "type": "line",
      "scene": "ch3_solo21",
      "speaker": "shijiang",
      "character": "shijiang",
      "text": "你那页编号表，今天别人照着把配件找齐了。没有打电话问我左边是哪边。",
      "next": "ch3_solo_pay_d_02"
    },
    "ch3_solo_pay_d_02": {
      "id": "ch3_solo_pay_d_02",
      "type": "line",
      "scene": "ch3_solo21",
      "speaker": "maolang",
      "character": "maolang",
      "text": "丑话说前面，我画的眼睛也有功劳。",
      "next": "ch3_solo_pay_d_03"
    },
    "ch3_solo_pay_d_03": {
      "id": "ch3_solo_pay_d_03",
      "type": "line",
      "scene": "ch3_solo21",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "已经删了，正式文件上不能留恐吓标记。",
      "next": "ch3_solo_pay_d_04"
    },
    "ch3_solo_pay_d_04": {
      "id": "ch3_solo_pay_d_04",
      "type": "line",
      "scene": "ch3_solo21",
      "speaker": "narrator",
      "character": null,
      "text": "毛狼说我过河拆桥，师匠喝着水笑了一下。我知道那份记录真被别人用过，心里比看到一句空夸还踏实。",
      "next": "ch3_solo_f_01"
    },
    "ch3_solo_f_01": {
      "id": "ch3_solo_f_01",
      "type": "line",
      "scene": "ch3_solo21",
      "speaker": "narrator",
      "character": null,
      "text": "吃到一半，毛狼忽然问，如果最后只录用一个，我们还吃不吃这顿。他看着碗，没再拿笑话把问题盖住。",
      "next": "ch3_solo_f_02"
    },
    "ch3_solo_f_02": {
      "id": "ch3_solo_f_02",
      "type": "line",
      "scene": "ch3_solo21",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "吃。落下那个可以先骂两句，但别失联。",
      "next": "ch3_solo_f_03",
      "expression": "expression-serious"
    },
    "ch3_solo_f_03": {
      "id": "ch3_solo_f_03",
      "type": "line",
      "scene": "ch3_solo21",
      "speaker": "maolang",
      "character": "maolang",
      "text": "你是说你自己吧。",
      "next": "ch3_solo_f_04"
    },
    "ch3_solo_f_04": {
      "id": "ch3_solo_f_04",
      "type": "line",
      "scene": "ch3_solo21",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "先给自己报备。真没成，我肯定不太高兴。",
      "next": "ch3_solo_f_05"
    },
    "ch3_solo_f_05": {
      "id": "ch3_solo_f_05",
      "type": "line",
      "scene": "ch3_solo21",
      "speaker": "narrator",
      "character": null,
      "text": "他点点头，说自己也是。我们没有提前把所有难受都讲成没关系，只约好结果来了各自说。",
      "next": "ch3_solo_f_06"
    },
    "ch3_solo_f_06": {
      "id": "ch3_solo_f_06",
      "type": "line",
      "scene": "ch3_solo21",
      "speaker": "narrator",
      "character": null,
      "text": "师匠吃完先走，临走前把月底的维护安排发给我们。清单里有我的交付，也有毛狼能接的那几段，没写成谁替谁兜底。",
      "next": "ch3_solo_f_07"
    },
    "ch3_solo_f_07": {
      "id": "ch3_solo_f_07",
      "type": "line",
      "scene": "ch3_solo21",
      "speaker": "maolang",
      "character": "maolang",
      "text": "第二十四天再吃？不聊岗位。我想找人听我那个新笑话，免费内测。",
      "next": "ch3_solo_f_08"
    },
    "ch3_solo_f_08": {
      "id": "ch3_solo_f_08",
      "type": "line",
      "scene": "ch3_solo21",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "你至少先保证能退场。",
      "next": "ch3_solo_f_09"
    },
    "ch3_solo_f_09": {
      "id": "ch3_solo_f_09",
      "type": "line",
      "scene": "ch3_solo21",
      "speaker": "maolang",
      "character": "maolang",
      "text": "做不到。友情就是这点缺点。",
      "next": "ch3_solo_f_10"
    },
    "ch3_solo_f_10": {
      "id": "ch3_solo_f_10",
      "type": "line",
      "scene": "ch3_solo21",
      "speaker": "narrator",
      "character": null,
      "text": "我答应了。回去的坡路还湿着，车票还在手机里；这一周我没有急着开始恋爱，也没有因此少过一种值得期待的日子。",
      "next": "end_ch3_solo",
      "bg": "slope_junction_night",
      "location": "回家的坡路"
    },
    "end_ch3_solo": {
      "id": "end_ch3_solo",
      "type": "end",
      "scene": "ch3_solo21",
      "character": "wenwen",
      "title": "各凭本事，也一起吃饭",
      "text": "申请材料已经提交，交付记录也被真正用上。毛狼仍想争同一个机会，我仍会怕输；我们约好结果来了照说，没结果时照样吃饭。这段时间没有被写成等待恋爱的空白，我开始能带着自己的名字往前走。",
      "nextChapter": "后日谈 · 雨后的约定：两年后，再与飘和毛狼相聚。此前的个人道路仍会继续。",
      "next": "epilogue_piao_entry",
      "bg": "slope_junction_night",
      "location": "回家的坡路"
    },
    "ch3_qiu_a_01": {
      "id": "ch3_qiu_a_01",
      "type": "line",
      "scene": "ch3_qiu15",
      "speaker": "narrator",
      "character": null,
      "text": "第十五天夜里，我按先前约好的空档回到包厢。接待已经结束，叶岚确认过使用时间，我也记好了离开的点。",
      "next": "ch3_qiu_a_02"
    },
    "ch3_qiu_a_02": {
      "id": "ch3_qiu_a_02",
      "type": "line",
      "scene": "ch3_qiu15",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "我推门时惯性地瞥向设备，又先把目光收回来。调音台旁的黄球球缓缓转向我，抬起一只小手。",
      "next": "ch3_qiu_a_03",
      "expression": "expression-smile"
    },
    "ch3_qiu_a_03": {
      "id": "ch3_qiu_a_03",
      "type": "line",
      "scene": "ch3_qiu15",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "晚上好，黄球球。",
      "next": "ch3_qiu_a_04"
    },
    "ch3_qiu_a_04": {
      "id": "ch3_qiu_a_04",
      "type": "line",
      "scene": "ch3_qiu15",
      "speaker": "huangqiuqiu",
      "character": "huangqiuqiu",
      "text": "晚上好。今天我排在那张标签前面了，进步很快。",
      "next": "ch3_qiu_a_05",
      "expression": "expression-smile"
    },
    "ch3_qiu_a_05": {
      "id": "ch3_qiu_a_05",
      "type": "line",
      "scene": "ch3_qiu15",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "我记得。那张纸也没请我坐下来聊十分钟。",
      "next": "ch3_qiu_a_06"
    },
    "ch3_qiu_a_06": {
      "id": "ch3_qiu_a_06",
      "type": "line",
      "scene": "ch3_qiu15",
      "speaker": "narrator",
      "character": null,
      "text": "我笑了一下，把工具包放到门边。她没有往标签那边看，只问我今天是从哪条路走过来的。",
      "next": "ch3_qiu_a_07"
    },
    "ch3_qiu_a_07": {
      "id": "ch3_qiu_a_07",
      "type": "line",
      "scene": "ch3_qiu15",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "坡口，面馆那边。",
      "next": "ch3_qiu_a_08"
    },
    "ch3_qiu_a_08": {
      "id": "ch3_qiu_a_08",
      "type": "line",
      "scene": "ch3_qiu15",
      "speaker": "huangqiuqiu",
      "character": "huangqiuqiu",
      "text": "那边今天有没有吵架？",
      "next": "ch3_qiu_a_09"
    },
    "ch3_qiu_a_09": {
      "id": "ch3_qiu_a_09",
      "type": "line",
      "scene": "ch3_qiu15",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "我没听见。倒有人很认真地讨论面该不该加醋。",
      "next": "ch3_qiu_a_10"
    },
    "ch3_qiu_a_10": {
      "id": "ch3_qiu_a_10",
      "type": "line",
      "scene": "ch3_qiu15",
      "speaker": "huangqiuqiu",
      "character": "huangqiuqiu",
      "text": "这不就是吵架的准备阶段。",
      "next": "ch3_bg_qiu_15_01"
    },
    "ch3_qiu_a_11": {
      "id": "ch3_qiu_a_11",
      "type": "line",
      "scene": "ch3_qiu15",
      "speaker": "narrator",
      "character": null,
      "text": "我拉过椅子坐下，才发现她今晚一句来历也没提。她想知道的都是具体小事，连我鞋底为什么多了一块泥都问了。",
      "next": "ch3_qiu_a_12"
    },
    "ch3_qiu_a_12": {
      "id": "ch3_qiu_a_12",
      "type": "line",
      "scene": "ch3_qiu15",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "绕水坑的时候踩的。躲开大的，没看见小的。",
      "next": "ch3_qiu_a_13"
    },
    "ch3_qiu_a_13": {
      "id": "ch3_qiu_a_13",
      "type": "line",
      "scene": "ch3_qiu15",
      "speaker": "huangqiuqiu",
      "character": "huangqiuqiu",
      "text": "聪明。解决了一个湿脚的问题，增加了一个刷鞋的问题。",
      "next": "ch3_qiu_a_14",
      "expression": "expression-smile"
    },
    "ch3_qiu_a_14": {
      "id": "ch3_qiu_a_14",
      "type": "line",
      "scene": "ch3_qiu15",
      "speaker": "narrator",
      "character": null,
      "text": "她说完盯着我看。我以为自己脸上也沾了泥，抬手擦了一下，她却让我的手先停住。",
      "next": "ch3_qiu_a_15"
    },
    "ch3_qiu_a_15": {
      "id": "ch3_qiu_a_15",
      "type": "line",
      "scene": "ch3_qiu15",
      "speaker": "huangqiuqiu",
      "character": "huangqiuqiu",
      "text": "你今天有点累。这个不用猜，你坐下以后肩膀都掉了一截。",
      "next": "ch3_qiu_a_16"
    },
    "ch3_qiu_a_16": {
      "id": "ch3_qiu_a_16",
      "type": "line",
      "scene": "ch3_qiu15",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "是有一点。白天大家都在准备下一步。我第二十八天要去贵阳，工作还没结果，也一直在想这件事。",
      "next": "ch3_qiu_a_17"
    },
    "ch3_qiu_a_17": {
      "id": "ch3_qiu_a_17",
      "type": "line",
      "scene": "ch3_qiu15",
      "speaker": "narrator",
      "character": null,
      "text": "她轻轻点头，没有说她早就知道。她听到了我说出口的安排，没说出来的部分，仍然等我自己讲。",
      "next": "ch3_qiu_a_18"
    },
    "ch3_qiu_a_18": {
      "id": "ch3_qiu_a_18",
      "type": "line",
      "scene": "ch3_qiu15",
      "speaker": "huangqiuqiu",
      "character": "huangqiuqiu",
      "text": "第十八天你还来吗？别带答案。带一件你自己愿意讲的小事。",
      "next": "ch3_qiu_choice"
    },
    "ch3_qiu_choice": {
      "id": "ch3_qiu_choice",
      "type": "choice",
      "scene": "ch3_qiu15",
      "character": "huangqiuqiu",
      "text": "下一次见面，我想带什么给她？",
      "flag": "ch3QiuShare",
      "choices": [
        {
          "label": "带一小段我在街上听见的声音，让她挑喜欢的。",
          "value": "sound",
          "next": "ch3_qiu_pick_s_01"
        },
        {
          "label": "讲一件我自己也觉得丢脸的日常小事。",
          "value": "story",
          "next": "ch3_qiu_pick_t_01"
        }
      ]
    },
    "ch3_qiu_pick_s_01": {
      "id": "ch3_qiu_pick_s_01",
      "type": "line",
      "scene": "ch3_qiu15",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "我录一段屋檐落雨，或者卷帘门的声音。只录环境，不把别人说话带进来。",
      "next": "ch3_qiu_pick_s_02"
    },
    "ch3_qiu_pick_s_02": {
      "id": "ch3_qiu_pick_s_02",
      "type": "line",
      "scene": "ch3_qiu15",
      "speaker": "huangqiuqiu",
      "character": "huangqiuqiu",
      "text": "别故意找最动听的。你自己会停下来听的就行。",
      "next": "ch3_qiu_pick_s_03"
    },
    "ch3_qiu_pick_s_03": {
      "id": "ch3_qiu_pick_s_03",
      "type": "line",
      "scene": "ch3_qiu15",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "那我得先学会停下来。",
      "next": "ch3_qiu_pick_s_04"
    },
    "ch3_qiu_pick_s_04": {
      "id": "ch3_qiu_pick_s_04",
      "type": "line",
      "scene": "ch3_qiu15",
      "speaker": "huangqiuqiu",
      "character": "huangqiuqiu",
      "text": "已经会了。你刚才在门口看设备看得可久。",
      "next": "ch3_qiu_b_01"
    },
    "ch3_qiu_pick_t_01": {
      "id": "ch3_qiu_pick_t_01",
      "type": "line",
      "scene": "ch3_qiu15",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "我讲今天差点坐错车的事。还没想好从哪儿讲比较不丢脸。",
      "next": "ch3_qiu_pick_t_02"
    },
    "ch3_qiu_pick_t_02": {
      "id": "ch3_qiu_pick_t_02",
      "type": "line",
      "scene": "ch3_qiu15",
      "speaker": "huangqiuqiu",
      "character": "huangqiuqiu",
      "text": "就从最丢脸的地方讲，节省铺垫。",
      "next": "ch3_qiu_pick_t_03"
    },
    "ch3_qiu_pick_t_03": {
      "id": "ch3_qiu_pick_t_03",
      "type": "line",
      "scene": "ch3_qiu15",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "你还没听就开始喜欢了？",
      "next": "ch3_qiu_pick_t_04"
    },
    "ch3_qiu_pick_t_04": {
      "id": "ch3_qiu_pick_t_04",
      "type": "line",
      "scene": "ch3_qiu15",
      "speaker": "huangqiuqiu",
      "character": "huangqiuqiu",
      "text": "我喜欢的是你终于也有故事。主角不必每次都是一个黄色的圆。",
      "next": "ch3_qiu_b_01"
    },
    "ch3_qiu_b_01": {
      "id": "ch3_qiu_b_01",
      "type": "line",
      "scene": "ch3_qiu15",
      "speaker": "narrator",
      "character": null,
      "text": "走廊有人推车经过，她等轮子的响动远了，才告诉我今晚想先聊到这里。那句结束说得很平常。",
      "next": "ch3_qiu_b_02"
    },
    "ch3_qiu_b_02": {
      "id": "ch3_qiu_b_02",
      "type": "line",
      "scene": "ch3_qiu15",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "好。第十八天还是我先问能不能进来。",
      "next": "ch3_qiu_b_03"
    },
    "ch3_qiu_b_03": {
      "id": "ch3_qiu_b_03",
      "type": "line",
      "scene": "ch3_qiu15",
      "speaker": "huangqiuqiu",
      "character": "huangqiuqiu",
      "text": "嗯。那天你讲，我听。别让我只知道你还有什么没修好。",
      "next": "ch3_qiu_b_04"
    },
    "ch3_qiu_b_04": {
      "id": "ch3_qiu_b_04",
      "type": "line",
      "scene": "ch3_qiu15",
      "speaker": "narrator",
      "character": null,
      "text": "我把椅子推回原位。门合上以前，她抬起一只小手。我也挥了一下，没有把最后几秒都花在盯着设备上。",
      "next": "ch3_qiu_c_01"
    },
    "ch3_qiu_c_01": {
      "id": "ch3_qiu_c_01",
      "type": "line",
      "scene": "ch3_qiu18",
      "speaker": "narrator",
      "character": null,
      "text": "第十八天夜里，我再次确认包厢的空闲时间才进去。黄球球仍在调音台旁，我这次先叫了她的名字。",
      "next": "ch3_qiu_c_02"
    },
    "ch3_qiu_c_02": {
      "id": "ch3_qiu_c_02",
      "type": "line",
      "scene": "ch3_qiu18",
      "speaker": "huangqiuqiu",
      "character": "huangqiuqiu",
      "text": "通过。现在开始检查来宾有没有带敷衍的礼物。",
      "next": "ch3_qiu_c_03",
      "expression": "expression-smile"
    },
    "ch3_qiu_c_03": {
      "id": "ch3_qiu_c_03",
      "type": "line",
      "scene": "ch3_qiu18",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "没有礼物，只有一件普通小事。",
      "next": "ch3_qiu_c_04"
    },
    "ch3_qiu_c_04": {
      "id": "ch3_qiu_c_04",
      "type": "line",
      "scene": "ch3_qiu18",
      "speaker": "huangqiuqiu",
      "character": "huangqiuqiu",
      "text": "普通也可以很难得。你坐。",
      "next": "ch3_qiu_c_05"
    },
    "ch3_qiu_c_05": {
      "id": "ch3_qiu_c_05",
      "type": "line",
      "scene": "ch3_qiu18",
      "speaker": "narrator",
      "character": null,
      "text": "我坐在前次那把椅子上，打开手机。她抬起头，一副准备挑错的神情，反而让我没那么紧张。",
      "next": "ch3_qiu_mid"
    },
    "ch3_qiu_mid": {
      "id": "ch3_qiu_mid",
      "type": "gate",
      "scene": "ch3_qiu18",
      "cases": [
        {
          "flag": "ch3QiuShare",
          "value": "sound",
          "next": "ch3_qiu_mid_s_01"
        }
      ],
      "default": "ch3_qiu_mid_t_01"
    },
    "ch3_qiu_mid_s_01": {
      "id": "ch3_qiu_mid_s_01",
      "type": "line",
      "scene": "ch3_qiu18",
      "speaker": "narrator",
      "character": null,
      "text": "我放了一段屋檐雨声。前面很匀，后面突然快了两下，是积水终于从伞沿冲下去，我没来得及停录。",
      "next": "ch3_qiu_mid_s_02"
    },
    "ch3_qiu_mid_s_02": {
      "id": "ch3_qiu_mid_s_02",
      "type": "line",
      "scene": "ch3_qiu18",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "这里录坏了。我本来想重来。",
      "next": "ch3_qiu_mid_s_03"
    },
    "ch3_qiu_mid_s_03": {
      "id": "ch3_qiu_mid_s_03",
      "type": "line",
      "scene": "ch3_qiu18",
      "speaker": "huangqiuqiu",
      "character": "huangqiuqiu",
      "text": "我喜欢这两下。前面像在数数，这里像终于数烦了。",
      "next": "ch3_qiu_mid_s_04",
      "expression": "expression-smile"
    },
    "ch3_qiu_mid_s_04": {
      "id": "ch3_qiu_mid_s_04",
      "type": "line",
      "scene": "ch3_qiu18",
      "speaker": "narrator",
      "character": null,
      "text": "我又放一次，这回没有提前解释哪里坏了。她用小手在脸边轻点，跟上那两下以后，低低笑了一声。",
      "next": "ch3_qiu_mid_s_05"
    },
    "ch3_qiu_mid_s_05": {
      "id": "ch3_qiu_mid_s_05",
      "type": "line",
      "scene": "ch3_qiu18",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "我还以为你会想听更远一点的地方。",
      "next": "ch3_qiu_mid_s_06"
    },
    "ch3_qiu_mid_s_06": {
      "id": "ch3_qiu_mid_s_06",
      "type": "line",
      "scene": "ch3_qiu18",
      "speaker": "huangqiuqiu",
      "character": "huangqiuqiu",
      "text": "现在这段就很好。你今天站在这里听过，我现在也听见了。",
      "next": "ch3_qiu_d_01"
    },
    "ch3_qiu_mid_t_01": {
      "id": "ch3_qiu_mid_t_01",
      "type": "line",
      "scene": "ch3_qiu18",
      "speaker": "narrator",
      "character": null,
      "text": "我告诉她，我在站牌下看了半天线路，最后问旁边的人车往哪边走。对方指了指我的背后：你想去的店就在那儿。",
      "next": "ch3_qiu_mid_t_02"
    },
    "ch3_qiu_mid_t_02": {
      "id": "ch3_qiu_mid_t_02",
      "type": "line",
      "scene": "ch3_qiu18",
      "speaker": "huangqiuqiu",
      "character": "huangqiuqiu",
      "text": "所以你还排了队？",
      "next": "ch3_qiu_mid_t_03"
    },
    "ch3_qiu_mid_t_03": {
      "id": "ch3_qiu_mid_t_03",
      "type": "line",
      "scene": "ch3_qiu18",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "排了。为了显得自己只是顺便问路，我又在原地站了两分钟。",
      "next": "ch3_qiu_mid_t_04"
    },
    "ch3_qiu_mid_t_04": {
      "id": "ch3_qiu_mid_t_04",
      "type": "line",
      "scene": "ch3_qiu18",
      "speaker": "narrator",
      "character": null,
      "text": "她盯着我，先是很轻地哼了一声，后来终于笑起来。我也没继续给自己找理由，等她笑完。",
      "next": "ch3_qiu_mid_t_05"
    },
    "ch3_qiu_mid_t_05": {
      "id": "ch3_qiu_mid_t_05",
      "type": "line",
      "scene": "ch3_qiu18",
      "speaker": "huangqiuqiu",
      "character": "huangqiuqiu",
      "text": "下回可以直接转身。你离开队伍以后，大家的人生还能继续。",
      "next": "ch3_qiu_mid_t_06",
      "expression": "expression-smile"
    },
    "ch3_qiu_mid_t_06": {
      "id": "ch3_qiu_mid_t_06",
      "type": "line",
      "scene": "ch3_qiu18",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "谢谢，受教。我当时最希望有人替我宣布这句。",
      "next": "ch3_qiu_d_01"
    },
    "ch3_qiu_d_01": {
      "id": "ch3_qiu_d_01",
      "type": "line",
      "scene": "ch3_qiu18",
      "speaker": "narrator",
      "character": null,
      "text": "聊到一半，设备里有一下很轻的杂响。我下意识转头，右手已经碰到门边的工具包带子。",
      "next": "ch3_qiu_d_02"
    },
    "ch3_qiu_d_02": {
      "id": "ch3_qiu_d_02",
      "type": "line",
      "scene": "ch3_qiu18",
      "speaker": "huangqiuqiu",
      "character": "huangqiuqiu",
      "text": "你今天要继续查那个，也可以说。我不想聊一半，忽然只剩我自己等。",
      "next": "ch3_qiu_d_03",
      "expression": "expression-downcast"
    },
    "ch3_qiu_d_03": {
      "id": "ch3_qiu_d_03",
      "type": "line",
      "scene": "ch3_qiu18",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "对不起。我刚才听见声音就走神了。今晚复查不是这个时间，现在先把你的话听完。",
      "next": "ch3_qiu_d_04"
    },
    "ch3_qiu_d_04": {
      "id": "ch3_qiu_d_04",
      "type": "line",
      "scene": "ch3_qiu18",
      "speaker": "narrator",
      "character": null,
      "text": "她没马上接下去，脸上的笑也没立刻回来。我把手机扣在膝上，等她决定还想不想继续。",
      "next": "ch3_bg_qiu_18_01"
    },
    "ch3_qiu_d_05": {
      "id": "ch3_qiu_d_05",
      "type": "line",
      "scene": "ch3_qiu18",
      "speaker": "huangqiuqiu",
      "character": "huangqiuqiu",
      "text": "我想问，你真要去贵阳的话，会不会有时候也只是心情不好，不想回消息？",
      "next": "ch3_qiu_d_06"
    },
    "ch3_qiu_d_06": {
      "id": "ch3_qiu_d_06",
      "type": "line",
      "scene": "ch3_qiu18",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "会。我以前还觉得，没好消息就没有必要说话。",
      "next": "ch3_qiu_d_07"
    },
    "ch3_qiu_d_07": {
      "id": "ch3_qiu_d_07",
      "type": "line",
      "scene": "ch3_qiu18",
      "speaker": "huangqiuqiu",
      "character": "huangqiuqiu",
      "text": "那你可以说“今天不想讲”。我听得懂这句，比一个一直不响的头像好猜。",
      "next": "ch3_qiu_d_08",
      "expression": "expression-serious"
    },
    "ch3_qiu_d_08": {
      "id": "ch3_qiu_d_08",
      "type": "line",
      "scene": "ch3_qiu18",
      "speaker": "narrator",
      "character": null,
      "text": "她把话说完，又看了一眼我。那一刻我没有找到能让一切都稳妥的回答，只能承认自己还在学。",
      "next": "ch3_qiu_d_09"
    },
    "ch3_qiu_d_09": {
      "id": "ch3_qiu_d_09",
      "type": "line",
      "scene": "ch3_qiu18",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "我会先把第二十一天这次约定做好。后面的安排，变化了再直接告诉你。",
      "next": "ch3_qiu_d_10"
    },
    "ch3_qiu_d_10": {
      "id": "ch3_qiu_d_10",
      "type": "line",
      "scene": "ch3_qiu18",
      "speaker": "huangqiuqiu",
      "character": "huangqiuqiu",
      "text": "好。那天我也有一件要问你的事。不是考试，别提前写满三页。",
      "next": "ch3_qiu_d_11"
    },
    "ch3_qiu_d_11": {
      "id": "ch3_qiu_d_11",
      "type": "line",
      "scene": "ch3_qiu18",
      "speaker": "narrator",
      "character": null,
      "text": "我想追问，她却把两只小手重新托回腮边，说今晚的好奇心额度用完了。我只好把问题留到下次。",
      "next": "ch3_qiu_d_12"
    },
    "ch3_qiu_d_12": {
      "id": "ch3_qiu_d_12",
      "type": "line",
      "scene": "ch3_qiu18",
      "speaker": "narrator",
      "character": null,
      "text": "离开时我看了一眼时钟，没有超出约好的时间。旧设备的原因仍未查明，但这次见面已经不是等一个谜底的空档。",
      "next": "ch3_qiu_e_01"
    },
    "ch3_qiu_e_01": {
      "id": "ch3_qiu_e_01",
      "type": "line",
      "scene": "ch3_qiu21",
      "speaker": "narrator",
      "character": null,
      "text": "第二十一天夜里，我到门外先发了一句“现在方便吗”。黄色头像很快回“方便，记得把那把椅子转正”。",
      "next": "ch3_qiu_e_02"
    },
    "ch3_qiu_e_02": {
      "id": "ch3_qiu_e_02",
      "type": "line",
      "scene": "ch3_qiu21",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "我进门叫她的名字，低头才发现椅子果然偏着。黄球球看着我挪好它，露出一点像是早有准备的笑。",
      "next": "ch3_qiu_e_03",
      "expression": "expression-smile"
    },
    "ch3_qiu_e_03": {
      "id": "ch3_qiu_e_03",
      "type": "line",
      "scene": "ch3_qiu21",
      "speaker": "huangqiuqiu",
      "character": "huangqiuqiu",
      "text": "今天轮到我先问。你最近有没有一件做得不错，却一直没提的小事？",
      "next": "ch3_qiu_e_04"
    },
    "ch3_qiu_e_04": {
      "id": "ch3_qiu_e_04",
      "type": "line",
      "scene": "ch3_qiu21",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "这题比上次难。我差点又想答“没有”。",
      "next": "ch3_qiu_e_05"
    },
    "ch3_qiu_e_05": {
      "id": "ch3_qiu_e_05",
      "type": "line",
      "scene": "ch3_qiu21",
      "speaker": "huangqiuqiu",
      "character": "huangqiuqiu",
      "text": "那就想一会儿。我没装倒计时。",
      "next": "ch3_qiu_e_06"
    },
    "ch3_qiu_e_06": {
      "id": "ch3_qiu_e_06",
      "type": "line",
      "scene": "ch3_qiu21",
      "speaker": "narrator",
      "character": null,
      "text": "我想起师匠留下的那份记录，也想起自己这些天发出的几条没有结果的消息。它们太小，小到我从没当成值得讲的事。",
      "next": "ch3_qiu_e_07"
    },
    "ch3_qiu_e_07": {
      "id": "ch3_qiu_e_07",
      "type": "line",
      "scene": "ch3_qiu21",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "有人照我的编号找到了东西，没再打电话来问。还有，我这次没有等好消息才告诉人自己的安排。",
      "next": "ch3_qiu_e_08"
    },
    "ch3_qiu_e_08": {
      "id": "ch3_qiu_e_08",
      "type": "line",
      "scene": "ch3_qiu21",
      "speaker": "huangqiuqiu",
      "character": "huangqiuqiu",
      "text": "听起来都挺好。你看，也不一定非得带一件丢脸的来。",
      "next": "ch3_qiu_e_09"
    },
    "ch3_qiu_e_09": {
      "id": "ch3_qiu_e_09",
      "type": "line",
      "scene": "ch3_qiu21",
      "speaker": "narrator",
      "character": null,
      "text": "她说完，主动提起第十八天我带来的小事。这次不是我提醒她，连我停顿过的地方她都记住了。",
      "next": "ch3_qiu_payoff"
    },
    "ch3_qiu_payoff": {
      "id": "ch3_qiu_payoff",
      "type": "gate",
      "scene": "ch3_qiu21",
      "cases": [
        {
          "flag": "ch3QiuShare",
          "value": "sound",
          "next": "ch3_qiu_pay_s_01"
        }
      ],
      "default": "ch3_qiu_pay_t_01"
    },
    "ch3_qiu_pay_s_01": {
      "id": "ch3_qiu_pay_s_01",
      "type": "line",
      "scene": "ch3_qiu21",
      "speaker": "huangqiuqiu",
      "character": "huangqiuqiu",
      "text": "那段雨声，你还留着吗？我想再听最后两下，今天不用从头解释。",
      "next": "ch3_qiu_pay_s_02"
    },
    "ch3_qiu_pay_s_02": {
      "id": "ch3_qiu_pay_s_02",
      "type": "line",
      "scene": "ch3_qiu21",
      "speaker": "narrator",
      "character": null,
      "text": "我找到原文件，放在我们之间。她听到快起来的地方就轻轻点了两下，这回我的指尖也跟着落在椅沿。",
      "next": "ch3_qiu_pay_s_03"
    },
    "ch3_qiu_pay_s_03": {
      "id": "ch3_qiu_pay_s_03",
      "type": "line",
      "scene": "ch3_qiu21",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "你下次想听什么？",
      "next": "ch3_qiu_pay_s_04"
    },
    "ch3_qiu_pay_s_04": {
      "id": "ch3_qiu_pay_s_04",
      "type": "line",
      "scene": "ch3_qiu21",
      "speaker": "huangqiuqiu",
      "character": "huangqiuqiu",
      "text": "你选。然后你也挑一段最喜欢的告诉我，别每次只问我的答案。",
      "next": "ch3_qiu_f_01"
    },
    "ch3_qiu_pay_t_01": {
      "id": "ch3_qiu_pay_t_01",
      "type": "line",
      "scene": "ch3_qiu21",
      "speaker": "huangqiuqiu",
      "character": "huangqiuqiu",
      "text": "你后来再经过那个站牌，转身了吗？",
      "next": "ch3_qiu_pay_t_02"
    },
    "ch3_qiu_pay_t_02": {
      "id": "ch3_qiu_pay_t_02",
      "type": "line",
      "scene": "ch3_qiu21",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "转了。没排队，少丢两分钟的人。",
      "next": "ch3_qiu_pay_t_03"
    },
    "ch3_qiu_pay_t_03": {
      "id": "ch3_qiu_pay_t_03",
      "type": "line",
      "scene": "ch3_qiu21",
      "speaker": "narrator",
      "character": null,
      "text": "她轻轻笑了一声，然后说自己今天的问题其实想了很久，怕问出来像要审我的一整天。",
      "next": "ch3_qiu_pay_t_04"
    },
    "ch3_qiu_pay_t_04": {
      "id": "ch3_qiu_pay_t_04",
      "type": "line",
      "scene": "ch3_qiu21",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "我喜欢你问。不知道怎么答的时候，我就想一会儿。",
      "next": "ch3_qiu_f_01"
    },
    "ch3_qiu_f_01": {
      "id": "ch3_qiu_f_01",
      "type": "line",
      "scene": "ch3_qiu21",
      "speaker": "narrator",
      "character": null,
      "text": "那一点笑慢慢停下来。离第三十天越来越近，我仍不知道她与旧设备到底有什么联系，也不知道之后的空间会怎样安排。",
      "next": "ch3_qiu_f_02"
    },
    "ch3_qiu_f_02": {
      "id": "ch3_qiu_f_02",
      "type": "line",
      "scene": "ch3_qiu21",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "月底停业的事，我没有忘。知道能确定的安排，我会告诉你。现在还不知道的，我不想装成知道。",
      "next": "ch3_qiu_f_03"
    },
    "ch3_qiu_f_03": {
      "id": "ch3_qiu_f_03",
      "type": "line",
      "scene": "ch3_qiu21",
      "speaker": "huangqiuqiu",
      "character": "huangqiuqiu",
      "text": "我也是。有能说清的，我会说。今天还有几分钟，我想先听你自己最喜欢刚才哪一件事。",
      "next": "ch3_qiu_f_04",
      "expression": "expression-serious"
    },
    "ch3_qiu_f_04": {
      "id": "ch3_qiu_f_04",
      "type": "line",
      "scene": "ch3_qiu21",
      "speaker": "narrator",
      "character": null,
      "text": "我认真选了一个，她听完说自己会选另一个。我们为这种没有标准答案的小事争了半分钟，谁都没把对方说服。",
      "next": "ch3_bg_qiu_21_01"
    },
    "ch3_qiu_f_05": {
      "id": "ch3_qiu_f_05",
      "type": "line",
      "scene": "ch3_qiu21",
      "speaker": "huangqiuqiu",
      "character": "huangqiuqiu",
      "text": "第二十四天，还来吗？我想继续认识你，不只听你查出什么问题。",
      "next": "ch3_qiu_f_06",
      "expression": "expression-hesitant"
    },
    "ch3_qiu_f_06": {
      "id": "ch3_qiu_f_06",
      "type": "line",
      "scene": "ch3_qiu21",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "来。时间照旧先确认，到时候从你想讲的开始。",
      "next": "ch3_qiu_f_07"
    },
    "ch3_qiu_f_07": {
      "id": "ch3_qiu_f_07",
      "type": "line",
      "scene": "ch3_qiu21",
      "speaker": "huangqiuqiu",
      "character": "huangqiuqiu",
      "text": "也可以从你想讲的开始。文文，你这个人比你的工具包难打开一点。",
      "next": "ch3_qiu_f_08"
    },
    "ch3_qiu_f_08": {
      "id": "ch3_qiu_f_08",
      "type": "line",
      "scene": "ch3_qiu21",
      "speaker": "narrator",
      "character": null,
      "text": "我笑起来，向她道了晚安。她先叫了一次我的名字，再回我一句晚安。走出房门以后，那句话一直比设备的杂音清楚。",
      "next": "end_ch3_huangqiuqiu"
    },
    "end_ch3_huangqiuqiu": {
      "id": "end_ch3_huangqiuqiu",
      "type": "end",
      "scene": "ch3_qiu21",
      "character": "huangqiuqiu",
      "title": "这次由她先问",
      "text": "她仍是调音台旁那个托腮的黄色圆球，来历与设备的联系仍未解开。我们却已经有了一件会共同想起的小事，也有了她主动提出的下一次见面。我不再只问她是什么，她也开始认真问我是怎样的人。",
      "nextChapter": "后日谈 · 雨后的约定：两年后，再与飘和毛狼相聚。此前的个人道路仍会继续。",
      "next": "epilogue_piao_entry"
    },
    "ch3_bg_xiaoman_15_01": {
      "id": "ch3_bg_xiaoman_15_01",
      "type": "line",
      "scene": "ch3_xiaoman15",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "夹页边上那几个圆是发旋，不是煎蛋。刚进店洗头递毛巾，收工练假头，我分个区能画半张纸。",
      "next": "ch3_bg_xiaoman_15_02"
    },
    "ch3_bg_xiaoman_15_02": {
      "id": "ch3_bg_xiaoman_15_02",
      "type": "line",
      "scene": "ch3_xiaoman15",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "就这页，一直没舍得扔？",
      "next": "ch3_bg_xiaoman_15_03"
    },
    "ch3_bg_xiaoman_15_03": {
      "id": "ch3_bg_xiaoman_15_03",
      "type": "line",
      "scene": "ch3_xiaoman15",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "嗯。后来第一次自己分区没被纠正，我还在这儿画了个勾。太小了，怕别人看不见。",
      "next": "ch3_xiaoman_memory"
    },
    "ch3_bg_xiaoman_18_01": {
      "id": "ch3_bg_xiaoman_18_01",
      "type": "line",
      "scene": "ch3_xiaoman18",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "刚来店里，有人喊“助理”，我跑得比谁都快。那时候觉得，总算有人知道该叫我干什么。",
      "next": "ch3_bg_xiaoman_18_02"
    },
    "ch3_bg_xiaoman_18_02": {
      "id": "ch3_bg_xiaoman_18_02",
      "type": "line",
      "scene": "ch3_xiaoman18",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "后来就想让人直接叫你来剪？",
      "next": "ch3_bg_xiaoman_18_03"
    },
    "ch3_bg_xiaoman_18_03": {
      "id": "ch3_bg_xiaoman_18_03",
      "type": "line",
      "scene": "ch3_xiaoman18",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "是啊。想亲口问他留多长，剪完也由我把镜子递过去。今天一拿起剪刀，满脑子都是这个。",
      "next": "ch3_xiaoman_d_07"
    },
    "ch3_bg_xiaoman_21_01": {
      "id": "ch3_bg_xiaoman_21_01",
      "type": "line",
      "scene": "ch3_xiaoman21",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "最早那页发旋我也没抽掉。现在已经看得出哪几个画歪了。",
      "next": "ch3_bg_xiaoman_21_02"
    },
    "ch3_bg_xiaoman_21_02": {
      "id": "ch3_bg_xiaoman_21_02",
      "type": "line",
      "scene": "ch3_xiaoman21",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "以后整本都剪得好了，这页还留？",
      "next": "ch3_bg_xiaoman_21_03"
    },
    "ch3_bg_xiaoman_21_03": {
      "id": "ch3_bg_xiaoman_21_03",
      "type": "line",
      "scene": "ch3_xiaoman21",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "留。新练习往后加，不能每次进步一点，就假装前面那些不是我画的。",
      "next": "ch3_xiaoman_payoff"
    },
    "ch3_bg_zhouzhi_15_01": {
      "id": "ch3_bg_zhouzhi_15_01",
      "type": "line",
      "scene": "ch3_zhouzhi15",
      "speaker": "zhouzhi",
      "character": "zhouzhi",
      "text": "顺序是照她以前教我的写的。那时夜里只做我们俩吃的，我总把最后下锅的先切好，搁一边放蔫了。",
      "next": "ch3_bg_zhouzhi_15_02"
    },
    "ch3_bg_zhouzhi_15_02": {
      "id": "ch3_bg_zhouzhi_15_02",
      "type": "line",
      "scene": "ch3_zhouzhi15",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "所以现在每样后面都写了时间？",
      "next": "ch3_bg_zhouzhi_15_03"
    },
    "ch3_bg_zhouzhi_15_03": {
      "id": "ch3_bg_zhouzhi_15_03",
      "type": "line",
      "scene": "ch3_zhouzhi15",
      "speaker": "zhouzhi",
      "character": "zhouzhi",
      "text": "嗯。味道我记得，什么时候该动哪只手，还得学。",
      "next": "ch3_zhouzhi_a_07"
    },
    "ch3_bg_zhouzhi_18_01": {
      "id": "ch3_bg_zhouzhi_18_01",
      "type": "line",
      "scene": "ch3_zhouzhi18",
      "speaker": "zhouzhi",
      "character": "zhouzhi",
      "text": "以前她炒，我在旁边切，慢了就两个人饿着等。今天有人端着空碗看我，我手就开始乱。",
      "next": "ch3_bg_zhouzhi_18_02"
    },
    "ch3_bg_zhouzhi_18_02": {
      "id": "ch3_bg_zhouzhi_18_02",
      "type": "line",
      "scene": "ch3_zhouzhi18",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "刚才第二轮，你已经先把碗摆好了。",
      "next": "ch3_bg_zhouzhi_18_03"
    },
    "ch3_bg_zhouzhi_18_03": {
      "id": "ch3_bg_zhouzhi_18_03",
      "type": "line",
      "scene": "ch3_zhouzhi18",
      "speaker": "zhouzhi",
      "character": "zhouzhi",
      "text": "嗯，下次我提前把料分好。不能一着急，又往她那口锅边挤。",
      "next": "ch3_zhouzhi_c_19"
    },
    "ch3_bg_zhouzhi_21_01": {
      "id": "ch3_bg_zhouzhi_21_01",
      "type": "line",
      "scene": "ch3_zhouzhi21",
      "speaker": "zhouzhi",
      "character": "zhouzhi",
      "text": "以前跟她分饭，辣椒也不是一起拌的。她口味轻，我老从自己这半边偷加。",
      "next": "ch3_bg_zhouzhi_21_02"
    },
    "ch3_bg_zhouzhi_21_02": {
      "id": "ch3_bg_zhouzhi_21_02",
      "type": "line",
      "scene": "ch3_zhouzhi21",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "所以两个人也没非要吃成一个味。",
      "next": "ch3_bg_zhouzhi_21_03"
    },
    "ch3_bg_zhouzhi_21_03": {
      "id": "ch3_bg_zhouzhi_21_03",
      "type": "line",
      "scene": "ch3_zhouzhi21",
      "speaker": "zhouzhi",
      "character": "zhouzhi",
      "text": "不然早吵散了。你等会儿想加醋也自己加，别征求全桌同意。",
      "next": "ch3_zhouzhi_d_05"
    },
    "ch3_bg_mengyao_15_01": {
      "id": "ch3_bg_mengyao_15_01",
      "type": "line",
      "scene": "ch3_mengyao15",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "以前给你举灯，我手酸了就晃。你还以为我在催你收工。",
      "next": "ch3_bg_mengyao_15_02"
    },
    "ch3_bg_mengyao_15_02": {
      "id": "ch3_bg_mengyao_15_02",
      "type": "line",
      "scene": "ch3_mengyao15",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "我记得。那天最后只拍清了半块招牌，你说补一遍，我倒先说算了。",
      "next": "ch3_bg_mengyao_15_03"
    },
    "ch3_bg_mengyao_15_03": {
      "id": "ch3_bg_mengyao_15_03",
      "type": "line",
      "scene": "ch3_mengyao15",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "当时你怕我等烦？",
      "next": "ch3_bg_mengyao_15_04"
    },
    "ch3_bg_mengyao_15_04": {
      "id": "ch3_bg_mengyao_15_04",
      "type": "line",
      "scene": "ch3_mengyao15",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "也怕自己拍半天还拿不出像样的。后来接活赶时间，我更容易把“再试一次”咽回去。",
      "next": "ch3_mengyao_b_13"
    },
    "ch3_bg_mengyao_18_01": {
      "id": "ch3_bg_mengyao_18_01",
      "type": "line",
      "scene": "ch3_mengyao18",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "有回拍店主，我怕片子闷，把他想词的几秒全剪了。回看像在背广告，反倒不像那天的人。",
      "next": "ch3_bg_mengyao_18_02"
    },
    "ch3_bg_mengyao_18_02": {
      "id": "ch3_bg_mengyao_18_02",
      "type": "line",
      "scene": "ch3_mengyao18",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "所以今天这段停顿，你想留住。",
      "next": "ch3_bg_mengyao_18_03"
    },
    "ch3_bg_mengyao_18_03": {
      "id": "ch3_bg_mengyao_18_03",
      "type": "line",
      "scene": "ch3_mengyao18",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "对。但不能光靠我记得现场，别人看不明白也是真的。",
      "next": "ch3_mengyao_d_10"
    },
    "ch3_bg_mengyao_21_01": {
      "id": "ch3_bg_mengyao_21_01",
      "type": "line",
      "scene": "ch3_mengyao21",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "下一次灯也还是我举？",
      "next": "ch3_bg_mengyao_21_02"
    },
    "ch3_bg_mengyao_21_02": {
      "id": "ch3_bg_mengyao_21_02",
      "type": "line",
      "scene": "ch3_mengyao21",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "可以。手酸就说，别晃得我以为天要黑了。",
      "next": "ch3_bg_mengyao_21_03"
    },
    "ch3_bg_mengyao_21_03": {
      "id": "ch3_bg_mengyao_21_03",
      "type": "line",
      "scene": "ch3_mengyao21",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "你想补拍也直接叫我，别先替我说算了。",
      "next": "ch3_mengyao_f_03"
    },
    "ch3_bg_yelan_15_01": {
      "id": "ch3_bg_yelan_15_01",
      "type": "line",
      "scene": "ch3_yelan15",
      "speaker": "yelan",
      "character": "yelan",
      "text": "刚接领班那阵，我把钥匙柜号背下来，觉得能直接拿出来，总比叫别人等强。",
      "next": "ch3_bg_yelan_15_02"
    },
    "ch3_bg_yelan_15_02": {
      "id": "ch3_bg_yelan_15_02",
      "type": "line",
      "scene": "ch3_yelan15",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "那张旧接待顺序，也是那时候写的？",
      "next": "ch3_bg_yelan_15_03"
    },
    "ch3_bg_yelan_15_03": {
      "id": "ch3_bg_yelan_15_03",
      "type": "line",
      "scene": "ch3_yelan15",
      "speaker": "yelan",
      "character": "yelan",
      "text": "嗯。起初写给自己看。后来谁问都来找我，纸上还是只有我看得懂的缩写。",
      "next": "ch3_yelan_b_03"
    },
    "ch3_bg_yelan_18_01": {
      "id": "ch3_bg_yelan_18_01",
      "type": "line",
      "scene": "ch3_yelan18",
      "speaker": "yelan",
      "character": "yelan",
      "text": "以前有次临时加致辞，我答应得快，转身自己找话筒、挪椅子。跑回来，另一边的人全在等我点头。",
      "next": "ch3_bg_yelan_18_02"
    },
    "ch3_bg_yelan_18_02": {
      "id": "ch3_bg_yelan_18_02",
      "type": "line",
      "scene": "ch3_yelan18",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "明明有人能帮，你也没来得及说他们该接哪一块。",
      "next": "ch3_bg_yelan_18_03"
    },
    "ch3_bg_yelan_18_03": {
      "id": "ch3_bg_yelan_18_03",
      "type": "line",
      "scene": "ch3_yelan18",
      "speaker": "yelan",
      "character": "yelan",
      "text": "我还觉得自己挺能救场。收工看别人站得腿酸，才知道那一晚没必要全等我。",
      "next": "ch3_yelan_d_17"
    },
    "ch3_bg_yelan_21_01": {
      "id": "ch3_bg_yelan_21_01",
      "type": "line",
      "scene": "ch3_yelan21",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "这回地方是你挑的，待多久也听你的。",
      "next": "ch3_bg_yelan_21_02",
      "bg": "old_eaves_day",
      "location": "老街屋檐下"
    },
    "ch3_bg_yelan_21_02": {
      "id": "ch3_bg_yelan_21_02",
      "type": "line",
      "scene": "ch3_yelan21",
      "speaker": "yelan",
      "character": "yelan",
      "text": "我在想那张旧清单。下次把“谁来接”写清，下面就能真的留一行休息。",
      "next": "ch3_bg_yelan_21_03",
      "bg": "old_eaves_day",
      "location": "老街屋檐下"
    },
    "ch3_bg_yelan_21_03": {
      "id": "ch3_bg_yelan_21_03",
      "type": "line",
      "scene": "ch3_yelan21",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "眼前这十分钟先不用记，待完再算。",
      "next": "ch3_yelan_f_09",
      "bg": "old_eaves_day",
      "location": "老街屋檐下"
    },
    "ch3_bg_qiu_15_01": {
      "id": "ch3_bg_qiu_15_01",
      "type": "line",
      "scene": "ch3_qiu15",
      "speaker": "huangqiuqiu",
      "character": "huangqiuqiu",
      "text": "以前听过这里收工的人问“吃了没有”，对面只说“等会儿”。过了好一阵，又问一遍。",
      "next": "ch3_bg_qiu_15_02"
    },
    "ch3_bg_qiu_15_02": {
      "id": "ch3_bg_qiu_15_02",
      "type": "line",
      "scene": "ch3_qiu15",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "后来吃上了吗？",
      "next": "ch3_bg_qiu_15_03"
    },
    "ch3_bg_qiu_15_03": {
      "id": "ch3_bg_qiu_15_03",
      "type": "line",
      "scene": "ch3_qiu15",
      "speaker": "huangqiuqiu",
      "character": "huangqiuqiu",
      "text": "我想知道那个人后来有没有真去吃。可门一关，后半句就听不见了。",
      "next": "ch3_qiu_a_11"
    },
    "ch3_bg_qiu_18_01": {
      "id": "ch3_bg_qiu_18_01",
      "type": "line",
      "scene": "ch3_qiu18",
      "speaker": "huangqiuqiu",
      "character": "huangqiuqiu",
      "text": "以前别人说完就走，我也跟着说过“晚安”。可那声晚安不是回我的，我知道。",
      "next": "ch3_bg_qiu_18_02"
    },
    "ch3_bg_qiu_18_02": {
      "id": "ch3_bg_qiu_18_02",
      "type": "line",
      "scene": "ch3_qiu18",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "那今晚走以前，我也叫着你的名字说。",
      "next": "ch3_bg_qiu_18_03"
    },
    "ch3_bg_qiu_18_03": {
      "id": "ch3_bg_qiu_18_03",
      "type": "line",
      "scene": "ch3_qiu18",
      "speaker": "huangqiuqiu",
      "character": "huangqiuqiu",
      "text": "嗯。我想知道有一句真是在跟我说，不是恰好让我听见。",
      "next": "ch3_qiu_d_05"
    },
    "ch3_bg_qiu_21_01": {
      "id": "ch3_bg_qiu_21_01",
      "type": "line",
      "scene": "ch3_qiu21",
      "speaker": "huangqiuqiu",
      "character": "huangqiuqiu",
      "text": "以前听到“改天再来”，我不知道要等哪一晚。",
      "next": "ch3_bg_qiu_21_02"
    },
    "ch3_bg_qiu_21_02": {
      "id": "ch3_bg_qiu_21_02",
      "type": "line",
      "scene": "ch3_qiu21",
      "speaker": "wenwen",
      "character": "wenwen",
      "text": "这次你想定哪一天，我先看看安排。",
      "next": "ch3_qiu_f_05"
    },
    "ch2_piao_meet_01": {
      "id": "ch2_piao_meet_01",
      "type": "line",
      "scene": "ch2_take",
      "speaker": "narrator",
      "text": "收线时，一个抱着纸袋的姑娘停在门边。毛狼先把挡路的椅子挪开，她才抬手招呼。",
      "character": null,
      "next": "ch2_piao_meet_02"
    },
    "ch2_piao_meet_02": {
      "id": "ch2_piao_meet_02",
      "type": "line",
      "scene": "ch2_take",
      "speaker": "piao",
      "text": "找孟遥。片尾字样打了两张，哪张看着不费眼，就照哪张来。",
      "character": "piao",
      "next": "ch2_piao_meet_03",
      "expression": "action-wave"
    },
    "ch2_piao_meet_03": {
      "id": "ch2_piao_meet_03",
      "type": "line",
      "scene": "ch2_take",
      "speaker": "mengyao",
      "text": "这是飘。片尾字样我请她帮忙看，人名等大家确认完再定。",
      "character": "mengyao",
      "next": "ch2_piao_meet_04",
      "expression": "expression-smile"
    },
    "ch2_piao_meet_04": {
      "id": "ch2_piao_meet_04",
      "type": "line",
      "scene": "ch2_take",
      "speaker": "piao",
      "text": "认字这事我熟。猜别人叫什么，暂时还没学会。",
      "character": "piao",
      "next": "ch2_piao_meet_05",
      "expression": "expression-smile"
    },
    "ch2_piao_meet_05": {
      "id": "ch2_piao_meet_05",
      "type": "line",
      "scene": "ch2_take",
      "speaker": "maolang",
      "text": "那好办。我叫毛狼，毛狼的毛，毛狼的狼。",
      "character": "maolang",
      "next": "ch2_piao_meet_06",
      "expression": "expression-smile"
    },
    "ch2_piao_meet_06": {
      "id": "ch2_piao_meet_06",
      "type": "line",
      "scene": "ch2_take",
      "speaker": "piao",
      "text": "记下了。你再说一遍，我就得给你另开一行。",
      "character": "piao",
      "next": "ch2_piao_meet_07",
      "expression": "expression-smile"
    },
    "ch2_piao_meet_07": {
      "id": "ch2_piao_meet_07",
      "type": "line",
      "scene": "ch2_take",
      "speaker": "wenwen",
      "text": "文文。两个一样的文，不用另起一行。",
      "character": "wenwen",
      "next": "ch2_piao_meet_08",
      "expression": "expression-smile"
    },
    "ch2_piao_meet_08": {
      "id": "ch2_piao_meet_08",
      "type": "line",
      "scene": "ch2_take",
      "speaker": "narrator",
      "text": "她低头在纸角写下名字，笑时露出很浅的酒窝。纸袋里还装着一本薄薄的空白样册。",
      "character": null,
      "next": "ch2_piao_meet_09"
    },
    "ch2_piao_meet_09": {
      "id": "ch2_piao_meet_09",
      "type": "line",
      "scene": "ch2_take",
      "speaker": "wenwen",
      "text": "这本也是给片子用的？",
      "character": "wenwen",
      "next": "ch2_piao_meet_10"
    },
    "ch2_piao_meet_10": {
      "id": "ch2_piao_meet_10",
      "type": "line",
      "scene": "ch2_take",
      "speaker": "piao",
      "text": "自己的。我想做一本街巷小册子，收店主愿意留下的几句话。片尾还没定的时候，就翻翻这个。",
      "character": "piao",
      "next": "ch2_piao_bg_return_01",
      "expression": "action-explaining"
    },
    "ch2_piao_meet_11": {
      "id": "ch2_piao_meet_11",
      "type": "line",
      "scene": "ch2_take",
      "speaker": "maolang",
      "text": "坡口那家面馆我熟，改天陪你去问。顺便请你吃碗面？",
      "character": "maolang",
      "next": "ch2_piao_meet_12",
      "expression": "expression-smile"
    },
    "ch2_piao_meet_12": {
      "id": "ch2_piao_meet_12",
      "type": "line",
      "scene": "ch2_take",
      "speaker": "piao",
      "text": "问店主我自己来。吃面可以，这两天得先把片尾核对完，时间再发你。",
      "character": "piao",
      "next": "ch2_piao_meet_13",
      "expression": "expression-serious"
    },
    "ch2_piao_meet_13": {
      "id": "ch2_piao_meet_13",
      "type": "line",
      "scene": "ch2_take",
      "speaker": "narrator",
      "text": "毛狼把她的联系方式存好，难得没接一句笑话。我看着她收起样册，也记住了那一页还没有标题的纸。",
      "character": null,
      "next": "ch2_piao_meet_14"
    },
    "ch2_piao_meet_14": {
      "id": "ch2_piao_meet_14",
      "type": "line",
      "scene": "ch2_take",
      "speaker": "piao",
      "text": "片尾确认了发我，别让三个人同时改同一张。我去把自己的饭吃了。",
      "character": "piao",
      "next": "ch2_sample_01",
      "expression": "expression-smile"
    },
    "ch2_piao_bg_return_01": {
      "id": "ch2_piao_bg_return_01",
      "type": "line",
      "scene": "ch2_take",
      "speaker": "piao",
      "text": "我前阵子才回毕节，现在还没上班。想趁这阵子，把这条街重新走一遍。",
      "character": "piao",
      "next": "ch2_piao_bg_return_02",
      "expression": "expression-smile"
    },
    "ch2_piao_bg_return_02": {
      "id": "ch2_piao_bg_return_02",
      "type": "line",
      "scene": "ch2_take",
      "speaker": "wenwen",
      "text": "回来以后，跟记得的一样吗？",
      "character": "wenwen",
      "next": "ch2_piao_bg_return_03"
    },
    "ch2_piao_bg_return_03": {
      "id": "ch2_piao_bg_return_03",
      "type": "line",
      "scene": "ch2_take",
      "speaker": "piao",
      "text": "有些一样，有些得重新问。所以想收几句现在的话，别只凭我记得的写。",
      "character": "piao",
      "next": "ch2_piao_meet_11",
      "expression": "action-explaining"
    },
    "ch2_piao_invite_01": {
      "id": "ch2_piao_invite_01",
      "type": "line",
      "scene": "ch2_show",
      "speaker": "narrator",
      "text": "飘把打好的片尾确认稿收进袋里。她的名字安静地留在最后几行，毛狼却盯着它看了一会儿。",
      "character": null,
      "next": "ch2_piao_invite_02"
    },
    "ch2_piao_invite_02": {
      "id": "ch2_piao_invite_02",
      "type": "line",
      "scene": "ch2_show",
      "speaker": "piao",
      "text": "你的名字我没缩小，放心。",
      "character": "piao",
      "next": "ch2_piao_invite_03",
      "expression": "expression-smile"
    },
    "ch2_piao_invite_03": {
      "id": "ch2_piao_invite_03",
      "type": "line",
      "scene": "ch2_show",
      "speaker": "maolang",
      "text": "我看的不是我的。",
      "character": "maolang",
      "next": "ch2_piao_invite_04",
      "expression": "expression-hesitant"
    },
    "ch2_piao_invite_04": {
      "id": "ch2_piao_invite_04",
      "type": "line",
      "scene": "ch2_show",
      "speaker": "narrator",
      "text": "她手上的动作停了一下，耳边的碎发被她拢回去。我假装继续叠椅子，椅脚却碰出很响的一声。",
      "character": null,
      "next": "ch2_piao_invite_05"
    },
    "ch2_piao_invite_05": {
      "id": "ch2_piao_invite_05",
      "type": "line",
      "scene": "ch2_show",
      "speaker": "maolang",
      "text": "昨天那碗面太赶了。周末我想再约你一次，吃完还能走走。",
      "character": "maolang",
      "next": "ch2_piao_invite_06",
      "expression": "expression-serious"
    },
    "ch2_piao_invite_06": {
      "id": "ch2_piao_invite_06",
      "type": "line",
      "scene": "ch2_show",
      "speaker": "piao",
      "text": "周末我有半天留给小册子。吃饭的时间能留，走多久得看我那天累不累。",
      "character": "piao",
      "next": "ch2_piao_invite_07",
      "expression": "expression-smile"
    },
    "ch2_piao_invite_07": {
      "id": "ch2_piao_invite_07",
      "type": "line",
      "scene": "ch2_show",
      "speaker": "maolang",
      "text": "那就先吃饭。我发时间给你，你看行不行。",
      "character": "maolang",
      "next": "ch2_piao_invite_08",
      "expression": "expression-smile"
    },
    "ch2_piao_invite_08": {
      "id": "ch2_piao_invite_08",
      "type": "line",
      "scene": "ch2_show",
      "speaker": "narrator",
      "text": "飘点了头，把样册从纸袋里抽出来。里面多了一页面馆老板自己写的话，角上留着汤碗压过的浅印。",
      "character": null,
      "next": "ch2_piao_invite_09"
    },
    "ch2_piao_invite_09": {
      "id": "ch2_piao_invite_09",
      "type": "line",
      "scene": "ch2_show",
      "speaker": "piao",
      "text": "明天下午我想走这条街，看空白页还缺什么。文文，你有空吗？",
      "character": "piao",
      "next": "ch2_piao_invite_10",
      "expression": "expression-hesitant"
    },
    "ch2_piao_invite_10": {
      "id": "ch2_piao_invite_10",
      "type": "line",
      "scene": "ch2_show",
      "speaker": "narrator",
      "text": "她问得很轻。我却发现，自己不只想替她看看哪一页印歪了。",
      "character": null,
      "next": "ch2_piao_invitation"
    },
    "ch2_piao_invitation": {
      "id": "ch2_piao_invitation",
      "type": "choice",
      "scene": "ch2_show",
      "character": "piao",
      "text": "我怎样回应飘的邀请？",
      "flag": "piaoInvitation",
      "choices": [
        {
          "label": "告诉她我也想多认识她，明天再确认见面的时间。",
          "value": "interested",
          "next": "ch2_piao_interest_01"
        },
        {
          "label": "先当朋友聊聊小册子，安排好时间再回复。",
          "value": "friendly",
          "next": "ch2_piao_friendly_01"
        }
      ]
    },
    "ch2_piao_interest_01": {
      "id": "ch2_piao_interest_01",
      "type": "line",
      "scene": "ch2_show",
      "speaker": "wenwen",
      "text": "我想去，也想多认识你一点。明早把时间确认好，再正式约你。",
      "character": "wenwen",
      "next": "ch2_piao_interest_02",
      "expression": "expression-smile"
    },
    "ch2_piao_interest_02": {
      "id": "ch2_piao_interest_02",
      "type": "line",
      "scene": "ch2_show",
      "speaker": "piao",
      "text": "好。那我明天等一句具体的，不等一句“哪天”。",
      "character": "piao",
      "next": "ch2_piao_invite_close_01",
      "expression": "expression-smile"
    },
    "ch2_piao_friendly_01": {
      "id": "ch2_piao_friendly_01",
      "type": "line",
      "scene": "ch2_show",
      "speaker": "wenwen",
      "text": "小册子我想看。明早理好安排再回复你，先别为我空一下午。",
      "character": "wenwen",
      "next": "ch2_piao_friendly_02",
      "expression": "expression-smile"
    },
    "ch2_piao_friendly_02": {
      "id": "ch2_piao_friendly_02",
      "type": "line",
      "scene": "ch2_show",
      "speaker": "piao",
      "text": "行。你要来就说一声，我不会把空白页全留着等你。",
      "character": "piao",
      "next": "ch2_piao_invite_close_01",
      "expression": "expression-smile"
    },
    "ch2_piao_invite_close_01": {
      "id": "ch2_piao_invite_close_01",
      "type": "line",
      "scene": "ch2_show",
      "speaker": "narrator",
      "text": "毛狼把最后一把椅子推进桌下，抬眼看了看我，又转向她。",
      "character": null,
      "next": "ch2_piao_invite_close_02"
    },
    "ch2_piao_invite_close_02": {
      "id": "ch2_piao_invite_close_02",
      "type": "line",
      "scene": "ch2_show",
      "speaker": "maolang",
      "text": "我的约也别弄丢。刚才那句，真不是替面馆拉生意。",
      "character": "maolang",
      "next": "ch2_piao_invite_close_03",
      "expression": "expression-hesitant"
    },
    "ch2_piao_invite_close_03": {
      "id": "ch2_piao_invite_close_03",
      "type": "line",
      "scene": "ch2_show",
      "speaker": "piao",
      "text": "没丢。我看得懂两个不同的人发来的消息。",
      "character": "piao",
      "next": "ch2_night_01",
      "expression": "expression-smile"
    },
    "ch3_piao_reply_xiaoman": {
      "id": "ch3_piao_reply_xiaoman",
      "type": "gate",
      "scene": "ch3_open",
      "cases": [
        {
          "flag": "piaoInvitation",
          "value": "interested",
          "next": "ch3_piao_reply_xiaoman_i_01"
        }
      ],
      "default": "ch3_piao_reply_xiaoman_f_01"
    },
    "ch3_piao_reply_xiaoman_i_01": {
      "id": "ch3_piao_reply_xiaoman_i_01",
      "type": "line",
      "scene": "ch3_open",
      "speaker": "wenwen",
      "text": "飘，这几天我有自己的安排。昨天说想多认识你，是认真的；但想清楚以后，我现在只想按朋友相处。别替我留着时间。",
      "character": null,
      "next": "ch3_piao_reply_xiaoman_i_02"
    },
    "ch3_piao_reply_xiaoman_i_02": {
      "id": "ch3_piao_reply_xiaoman_i_02",
      "type": "line",
      "scene": "ch3_open",
      "speaker": "piao",
      "text": "知道了。那就先做朋友，我照自己的计划走。册子做好了再发你看。",
      "character": null,
      "next": "ch3_xiaoman_a_01"
    },
    "ch3_piao_reply_xiaoman_f_01": {
      "id": "ch3_piao_reply_xiaoman_f_01",
      "type": "line",
      "scene": "ch3_open",
      "speaker": "wenwen",
      "text": "飘，我把这几天的安排理好了，先不约这次散步。昨天说过要回复你，就先和你说一声。",
      "character": null,
      "next": "ch3_piao_reply_xiaoman_f_02"
    },
    "ch3_piao_reply_xiaoman_f_02": {
      "id": "ch3_piao_reply_xiaoman_f_02",
      "type": "line",
      "scene": "ch3_open",
      "speaker": "piao",
      "text": "好。那我照自己的计划走，小册子做好了发你看。",
      "character": null,
      "next": "ch3_xiaoman_a_01"
    },
    "ch3_piao_reply_zhouzhi": {
      "id": "ch3_piao_reply_zhouzhi",
      "type": "gate",
      "scene": "ch3_open",
      "cases": [
        {
          "flag": "piaoInvitation",
          "value": "interested",
          "next": "ch3_piao_reply_zhouzhi_i_01"
        }
      ],
      "default": "ch3_piao_reply_zhouzhi_f_01"
    },
    "ch3_piao_reply_zhouzhi_i_01": {
      "id": "ch3_piao_reply_zhouzhi_i_01",
      "type": "line",
      "scene": "ch3_open",
      "speaker": "wenwen",
      "text": "飘，这几天我有自己的安排。昨天说想多认识你，是认真的；但想清楚以后，我现在只想按朋友相处。别替我留着时间。",
      "character": null,
      "next": "ch3_piao_reply_zhouzhi_i_02"
    },
    "ch3_piao_reply_zhouzhi_i_02": {
      "id": "ch3_piao_reply_zhouzhi_i_02",
      "type": "line",
      "scene": "ch3_open",
      "speaker": "piao",
      "text": "知道了。那就先做朋友，我照自己的计划走。册子做好了再发你看。",
      "character": null,
      "next": "ch3_zhouzhi_a_01"
    },
    "ch3_piao_reply_zhouzhi_f_01": {
      "id": "ch3_piao_reply_zhouzhi_f_01",
      "type": "line",
      "scene": "ch3_open",
      "speaker": "wenwen",
      "text": "飘，我把这几天的安排理好了，先不约这次散步。昨天说过要回复你，就先和你说一声。",
      "character": null,
      "next": "ch3_piao_reply_zhouzhi_f_02"
    },
    "ch3_piao_reply_zhouzhi_f_02": {
      "id": "ch3_piao_reply_zhouzhi_f_02",
      "type": "line",
      "scene": "ch3_open",
      "speaker": "piao",
      "text": "好。那我照自己的计划走，小册子做好了发你看。",
      "character": null,
      "next": "ch3_zhouzhi_a_01"
    },
    "ch3_piao_reply_mengyao": {
      "id": "ch3_piao_reply_mengyao",
      "type": "gate",
      "scene": "ch3_open",
      "cases": [
        {
          "flag": "piaoInvitation",
          "value": "interested",
          "next": "ch3_piao_reply_mengyao_i_01"
        }
      ],
      "default": "ch3_piao_reply_mengyao_f_01"
    },
    "ch3_piao_reply_mengyao_i_01": {
      "id": "ch3_piao_reply_mengyao_i_01",
      "type": "line",
      "scene": "ch3_open",
      "speaker": "wenwen",
      "text": "飘，这几天我有自己的安排。昨天说想多认识你，是认真的；但想清楚以后，我现在只想按朋友相处。别替我留着时间。",
      "character": null,
      "next": "ch3_piao_reply_mengyao_i_02"
    },
    "ch3_piao_reply_mengyao_i_02": {
      "id": "ch3_piao_reply_mengyao_i_02",
      "type": "line",
      "scene": "ch3_open",
      "speaker": "piao",
      "text": "知道了。那就先做朋友，我照自己的计划走。册子做好了再发你看。",
      "character": null,
      "next": "ch3_mengyao_a_01"
    },
    "ch3_piao_reply_mengyao_f_01": {
      "id": "ch3_piao_reply_mengyao_f_01",
      "type": "line",
      "scene": "ch3_open",
      "speaker": "wenwen",
      "text": "飘，我把这几天的安排理好了，先不约这次散步。昨天说过要回复你，就先和你说一声。",
      "character": null,
      "next": "ch3_piao_reply_mengyao_f_02"
    },
    "ch3_piao_reply_mengyao_f_02": {
      "id": "ch3_piao_reply_mengyao_f_02",
      "type": "line",
      "scene": "ch3_open",
      "speaker": "piao",
      "text": "好。那我照自己的计划走，小册子做好了发你看。",
      "character": null,
      "next": "ch3_mengyao_a_01"
    },
    "ch3_piao_reply_yelan": {
      "id": "ch3_piao_reply_yelan",
      "type": "gate",
      "scene": "ch3_open",
      "cases": [
        {
          "flag": "piaoInvitation",
          "value": "interested",
          "next": "ch3_piao_reply_yelan_i_01"
        }
      ],
      "default": "ch3_piao_reply_yelan_f_01"
    },
    "ch3_piao_reply_yelan_i_01": {
      "id": "ch3_piao_reply_yelan_i_01",
      "type": "line",
      "scene": "ch3_open",
      "speaker": "wenwen",
      "text": "飘，这几天我有自己的安排。昨天说想多认识你，是认真的；但想清楚以后，我现在只想按朋友相处。别替我留着时间。",
      "character": null,
      "next": "ch3_piao_reply_yelan_i_02"
    },
    "ch3_piao_reply_yelan_i_02": {
      "id": "ch3_piao_reply_yelan_i_02",
      "type": "line",
      "scene": "ch3_open",
      "speaker": "piao",
      "text": "知道了。那就先做朋友，我照自己的计划走。册子做好了再发你看。",
      "character": null,
      "next": "ch3_yelan_a_01"
    },
    "ch3_piao_reply_yelan_f_01": {
      "id": "ch3_piao_reply_yelan_f_01",
      "type": "line",
      "scene": "ch3_open",
      "speaker": "wenwen",
      "text": "飘，我把这几天的安排理好了，先不约这次散步。昨天说过要回复你，就先和你说一声。",
      "character": null,
      "next": "ch3_piao_reply_yelan_f_02"
    },
    "ch3_piao_reply_yelan_f_02": {
      "id": "ch3_piao_reply_yelan_f_02",
      "type": "line",
      "scene": "ch3_open",
      "speaker": "piao",
      "text": "好。那我照自己的计划走，小册子做好了发你看。",
      "character": null,
      "next": "ch3_yelan_a_01"
    },
    "ch3_piao_reply_solo": {
      "id": "ch3_piao_reply_solo",
      "type": "gate",
      "scene": "ch3_open",
      "cases": [
        {
          "flag": "piaoInvitation",
          "value": "interested",
          "next": "ch3_piao_reply_solo_i_01"
        }
      ],
      "default": "ch3_piao_reply_solo_f_01"
    },
    "ch3_piao_reply_solo_i_01": {
      "id": "ch3_piao_reply_solo_i_01",
      "type": "line",
      "scene": "ch3_open",
      "speaker": "wenwen",
      "text": "飘，这几天我有自己的安排。昨天说想多认识你，是认真的；但想清楚以后，我现在只想按朋友相处。别替我留着时间。",
      "character": null,
      "next": "ch3_piao_reply_solo_i_02"
    },
    "ch3_piao_reply_solo_i_02": {
      "id": "ch3_piao_reply_solo_i_02",
      "type": "line",
      "scene": "ch3_open",
      "speaker": "piao",
      "text": "知道了。那就先做朋友，我照自己的计划走。册子做好了再发你看。",
      "character": null,
      "next": "ch3_solo_a_01"
    },
    "ch3_piao_reply_solo_f_01": {
      "id": "ch3_piao_reply_solo_f_01",
      "type": "line",
      "scene": "ch3_open",
      "speaker": "wenwen",
      "text": "飘，我把这几天的安排理好了，先不约这次散步。昨天说过要回复你，就先和你说一声。",
      "character": null,
      "next": "ch3_piao_reply_solo_f_02"
    },
    "ch3_piao_reply_solo_f_02": {
      "id": "ch3_piao_reply_solo_f_02",
      "type": "line",
      "scene": "ch3_open",
      "speaker": "piao",
      "text": "好。那我照自己的计划走，小册子做好了发你看。",
      "character": null,
      "next": "ch3_solo_a_01"
    },
    "ch3_piao_reply_huangqiuqiu": {
      "id": "ch3_piao_reply_huangqiuqiu",
      "type": "gate",
      "scene": "ch3_open",
      "cases": [
        {
          "flag": "piaoInvitation",
          "value": "interested",
          "next": "ch3_piao_reply_huangqiuqiu_i_01"
        }
      ],
      "default": "ch3_piao_reply_huangqiuqiu_f_01"
    },
    "ch3_piao_reply_huangqiuqiu_i_01": {
      "id": "ch3_piao_reply_huangqiuqiu_i_01",
      "type": "line",
      "scene": "ch3_open",
      "speaker": "wenwen",
      "text": "飘，这几天我有自己的安排。昨天说想多认识你，是认真的；但想清楚以后，我现在只想按朋友相处。别替我留着时间。",
      "character": null,
      "next": "ch3_piao_reply_huangqiuqiu_i_02"
    },
    "ch3_piao_reply_huangqiuqiu_i_02": {
      "id": "ch3_piao_reply_huangqiuqiu_i_02",
      "type": "line",
      "scene": "ch3_open",
      "speaker": "piao",
      "text": "知道了。那就先做朋友，我照自己的计划走。册子做好了再发你看。",
      "character": null,
      "next": "ch3_qiu_a_01"
    },
    "ch3_piao_reply_huangqiuqiu_f_01": {
      "id": "ch3_piao_reply_huangqiuqiu_f_01",
      "type": "line",
      "scene": "ch3_open",
      "speaker": "wenwen",
      "text": "飘，我把这几天的安排理好了，先不约这次散步。昨天说过要回复你，就先和你说一声。",
      "character": null,
      "next": "ch3_piao_reply_huangqiuqiu_f_02"
    },
    "ch3_piao_reply_huangqiuqiu_f_02": {
      "id": "ch3_piao_reply_huangqiuqiu_f_02",
      "type": "line",
      "scene": "ch3_open",
      "speaker": "piao",
      "text": "好。那我照自己的计划走，小册子做好了发你看。",
      "character": null,
      "next": "ch3_qiu_a_01"
    },
    "ch3_piao_a_01": {
      "id": "ch3_piao_a_01",
      "type": "line",
      "scene": "ch3_piao15",
      "speaker": "narrator",
      "text": "那天上午，我先发消息确认见面的时间。飘把见面改到四点，说想先把样册里漏掉的几句话再核对一遍。",
      "character": null,
      "next": "ch3_piao_a_02"
    },
    "ch3_piao_a_02": {
      "id": "ch3_piao_a_02",
      "type": "line",
      "scene": "ch3_piao15",
      "speaker": "narrator",
      "text": "四点，她抱着样册出现在檐下。我手里只拿了伞，维修包留在了家里。",
      "character": null,
      "next": "ch3_piao_a_03"
    },
    "ch3_piao_a_03": {
      "id": "ch3_piao_a_03",
      "type": "line",
      "scene": "ch3_piao15",
      "speaker": "piao",
      "text": "今天没带工具？",
      "character": "piao",
      "next": "ch3_piao_a_04",
      "expression": "expression-surprised"
    },
    "ch3_piao_a_04": {
      "id": "ch3_piao_a_04",
      "type": "line",
      "scene": "ch3_piao15",
      "speaker": "wenwen",
      "text": "带了嘴。可以聊天，不能保修。",
      "character": "wenwen",
      "next": "ch3_piao_a_05",
      "expression": "expression-smile"
    },
    "ch3_piao_a_05": {
      "id": "ch3_piao_a_05",
      "type": "line",
      "scene": "ch3_piao15",
      "speaker": "piao",
      "text": "先试用一会儿。",
      "character": "piao",
      "next": "ch3_piao_invitation_memory",
      "expression": "expression-smile"
    },
    "ch3_piao_invitation_memory": {
      "id": "ch3_piao_invitation_memory",
      "type": "gate",
      "scene": "ch3_piao15",
      "cases": [
        {
          "flag": "piaoInvitation",
          "value": "interested",
          "next": "ch3_piao_memory_i_01"
        }
      ],
      "default": "ch3_piao_memory_f_01"
    },
    "ch3_piao_memory_i_01": {
      "id": "ch3_piao_memory_i_01",
      "type": "line",
      "scene": "ch3_piao15",
      "speaker": "piao",
      "text": "昨天说想多认识我，今天真来了。我刚才还在想，第一句话该不该只谈排版。",
      "character": "piao",
      "next": "ch3_piao_memory_i_02",
      "expression": "expression-hesitant"
    },
    "ch3_piao_memory_i_02": {
      "id": "ch3_piao_memory_i_02",
      "type": "line",
      "scene": "ch3_piao15",
      "speaker": "wenwen",
      "text": "不用只谈那个。比如，你为什么想给这本册子留那么多空白？",
      "character": "wenwen",
      "next": "ch3_piao_b_01",
      "expression": "expression-smile"
    },
    "ch3_piao_memory_f_01": {
      "id": "ch3_piao_memory_f_01",
      "type": "line",
      "scene": "ch3_piao15",
      "speaker": "wenwen",
      "text": "昨天只敢说想看册子。今天想补一句，我也想认识做册子的人。",
      "character": "wenwen",
      "next": "ch3_piao_memory_f_02",
      "expression": "expression-hesitant"
    },
    "ch3_piao_memory_f_02": {
      "id": "ch3_piao_memory_f_02",
      "type": "line",
      "scene": "ch3_piao15",
      "speaker": "piao",
      "text": "嗯。补在今天也来得及。",
      "character": "piao",
      "next": "ch3_piao_b_01",
      "expression": "expression-smile"
    },
    "ch3_piao_b_01": {
      "id": "ch3_piao_b_01",
      "type": "line",
      "scene": "ch3_piao15",
      "speaker": "piao",
      "text": "你看这一页就知道了。先别嫌它空。",
      "character": "piao",
      "next": "ch3_piao_b_02",
      "expression": "expression-serious"
    },
    "ch3_piao_b_02": {
      "id": "ch3_piao_b_02",
      "type": "line",
      "scene": "ch3_piao15",
      "speaker": "narrator",
      "text": "她翻开样册，一页只放着半句话，下面留了很宽的一块白。我问是不是漏印了。",
      "character": null,
      "next": "ch3_piao_b_03"
    },
    "ch3_piao_b_03": {
      "id": "ch3_piao_b_03",
      "type": "line",
      "scene": "ch3_piao15",
      "speaker": "piao",
      "text": "是店主没想好后半句。我喜欢这半句，就先放着，等她愿意再补。",
      "character": "piao",
      "next": "ch3_piao_bg_past_01",
      "expression": "action-explaining"
    },
    "ch3_piao_b_04": {
      "id": "ch3_piao_b_04",
      "type": "line",
      "scene": "ch3_piao15",
      "speaker": "wenwen",
      "text": "留这么多空，你不怕别人说不够热闹？",
      "character": "wenwen",
      "next": "ch3_piao_b_05"
    },
    "ch3_piao_b_05": {
      "id": "ch3_piao_b_05",
      "type": "line",
      "scene": "ch3_piao15",
      "speaker": "piao",
      "text": "这是我的册子。第一次，我想自己决定哪儿可以空。",
      "character": "piao",
      "next": "ch3_piao_b_06",
      "expression": "expression-serious"
    },
    "ch3_piao_b_06": {
      "id": "ch3_piao_b_06",
      "type": "line",
      "scene": "ch3_piao15",
      "speaker": "narrator",
      "text": "走到坡口，她停下来重新看那页纸。我没急着说好，只问将来翻开它的人，她最想让谁看见。",
      "character": null,
      "next": "ch3_piao_b_07",
      "bg": "residential_slope_day",
      "location": "老街坡巷"
    },
    "ch3_piao_b_07": {
      "id": "ch3_piao_b_07",
      "type": "line",
      "scene": "ch3_piao15",
      "speaker": "piao",
      "text": "住在这儿的人。寄一份给搬走的人也好。不是把街道写成“从前”，这儿明天还有人开门。",
      "character": "piao",
      "next": "ch3_piao_b_08",
      "expression": "expression-smile",
      "bg": "residential_slope_day",
      "location": "老街坡巷"
    },
    "ch3_piao_b_08": {
      "id": "ch3_piao_b_08",
      "type": "line",
      "scene": "ch3_piao15",
      "speaker": "wenwen",
      "text": "那封底可以留个地方，下次有人回来时，再写一行。",
      "character": "wenwen",
      "next": "ch3_piao_b_09",
      "bg": "residential_slope_day",
      "location": "老街坡巷"
    },
    "ch3_piao_b_09": {
      "id": "ch3_piao_b_09",
      "type": "line",
      "scene": "ch3_piao15",
      "speaker": "piao",
      "text": "这句我记。只记这个意思，不把你整段话印上去，太占纸了。",
      "character": "piao",
      "next": "ch3_piao_b_10",
      "expression": "expression-smile",
      "bg": "residential_slope_day",
      "location": "老街坡巷"
    },
    "ch3_piao_b_10": {
      "id": "ch3_piao_b_10",
      "type": "line",
      "scene": "ch3_piao15",
      "speaker": "narrator",
      "text": "她笑起来，我也笑了。雨点从伞边滑下去，这次没有人急着找一件需要修的东西。",
      "character": null,
      "next": "ch3_piao_b_11",
      "bg": "residential_slope_day",
      "location": "老街坡巷"
    },
    "ch3_piao_b_11": {
      "id": "ch3_piao_b_11",
      "type": "line",
      "scene": "ch3_piao15",
      "speaker": "piao",
      "text": "还有件事。毛狼约我的饭，我答应了。他的意思，我听明白了。",
      "character": "piao",
      "next": "ch3_piao_b_12",
      "expression": "expression-hesitant",
      "bg": "residential_slope_day",
      "location": "老街坡巷"
    },
    "ch3_piao_b_12": {
      "id": "ch3_piao_b_12",
      "type": "line",
      "scene": "ch3_piao15",
      "speaker": "wenwen",
      "text": "我听见的时候，有一点不自在。不是你的问题，我还在学怎么把这点话说出来。",
      "character": "wenwen",
      "next": "ch3_piao_b_13",
      "expression": "expression-serious",
      "bg": "residential_slope_day",
      "location": "老街坡巷"
    },
    "ch3_piao_b_13": {
      "id": "ch3_piao_b_13",
      "type": "line",
      "scene": "ch3_piao15",
      "speaker": "piao",
      "text": "你可以说。我现在还没和谁在一起，也想自己慢慢看清楚。",
      "character": "piao",
      "next": "ch3_piao_b_14",
      "expression": "expression-serious",
      "bg": "residential_slope_day",
      "location": "老街坡巷"
    },
    "ch3_piao_b_14": {
      "id": "ch3_piao_b_14",
      "type": "line",
      "scene": "ch3_piao15",
      "speaker": "wenwen",
      "text": "那我也说明白。我想继续约你，看看我们能不能不只做朋友。",
      "character": "wenwen",
      "next": "ch3_piao_b_15",
      "expression": "expression-hesitant",
      "bg": "residential_slope_day",
      "location": "老街坡巷"
    },
    "ch3_piao_b_15": {
      "id": "ch3_piao_b_15",
      "type": "line",
      "scene": "ch3_piao15",
      "speaker": "piao",
      "text": "好。我也想再见你。第十八天六点，面馆有空桌，我把改好的那几页带来。",
      "character": "piao",
      "next": "ch3_piao_b_16",
      "expression": "expression-smile",
      "bg": "residential_slope_day",
      "location": "老街坡巷"
    },
    "ch3_piao_b_16": {
      "id": "ch3_piao_b_16",
      "type": "line",
      "scene": "ch3_piao15",
      "speaker": "narrator",
      "text": "她在样册边角写下时间，没加感叹号。我一路走到街口，还能想起那行很小、很确定的字。",
      "character": null,
      "next": "ch3_piao_c_01",
      "bg": "residential_slope_day",
      "location": "老街坡巷"
    },
    "ch3_piao_bg_past_01": {
      "id": "ch3_piao_bg_past_01",
      "type": "line",
      "scene": "ch3_piao15",
      "speaker": "wenwen",
      "text": "你为什么会想到等人把话补完整？",
      "character": "wenwen",
      "next": "ch3_piao_bg_past_02"
    },
    "ch3_piao_bg_past_02": {
      "id": "ch3_piao_bg_past_02",
      "type": "line",
      "scene": "ch3_piao15",
      "speaker": "piao",
      "text": "我以前在大城市的 KTV 做过陪酒。听人说话的时候多，可一换歌、一碰杯，刚起的话头就断了。",
      "character": "piao",
      "next": "ch3_piao_bg_past_03",
      "expression": "expression-serious"
    },
    "ch3_piao_bg_past_03": {
      "id": "ch3_piao_bg_past_03",
      "type": "line",
      "scene": "ch3_piao15",
      "speaker": "piao",
      "text": "有些话我后来还记得，却不知道后面是什么。这次能慢慢问，就想让人把想说的说完。",
      "character": "piao",
      "next": "ch3_piao_bg_past_04",
      "expression": "action-thinking"
    },
    "ch3_piao_bg_past_04": {
      "id": "ch3_piao_bg_past_04",
      "type": "line",
      "scene": "ch3_piao15",
      "speaker": "wenwen",
      "text": "那店主不想补呢？",
      "character": "wenwen",
      "next": "ch3_piao_bg_past_05"
    },
    "ch3_piao_bg_past_05": {
      "id": "ch3_piao_bg_past_05",
      "type": "line",
      "scene": "ch3_piao15",
      "speaker": "piao",
      "text": "就留着。不肯说的，也不能替人编。",
      "character": "piao",
      "next": "ch3_piao_b_04",
      "expression": "expression-serious"
    },
    "ch3_piao_c_01": {
      "id": "ch3_piao_c_01",
      "type": "line",
      "scene": "ch3_piao18",
      "speaker": "narrator",
      "text": "第十八天傍晚，我提前到了面馆。毛狼正在门口扣伞，看到我手里那份样册，脚步顿了一下。",
      "character": null,
      "next": "ch3_piao_c_02",
      "bg": "noodle_front_dusk",
      "location": "坡口面馆门口"
    },
    "ch3_piao_c_02": {
      "id": "ch3_piao_c_02",
      "type": "line",
      "scene": "ch3_piao18",
      "speaker": "maolang",
      "text": "你也约了今天？",
      "character": "maolang",
      "next": "ch3_piao_c_03",
      "expression": "expression-surprised",
      "bg": "noodle_front_dusk",
      "location": "坡口面馆门口"
    },
    "ch3_piao_c_03": {
      "id": "ch3_piao_c_03",
      "type": "line",
      "scene": "ch3_piao18",
      "speaker": "wenwen",
      "text": "六点。你呢？",
      "character": "wenwen",
      "next": "ch3_piao_c_04",
      "bg": "noodle_front_dusk",
      "location": "坡口面馆门口"
    },
    "ch3_piao_c_04": {
      "id": "ch3_piao_c_04",
      "type": "line",
      "scene": "ch3_piao18",
      "speaker": "maolang",
      "text": "我来拿饭。和她吃饭是昨天，不是你这场的加座。",
      "character": "maolang",
      "next": "ch3_piao_c_05",
      "expression": "expression-hesitant",
      "bg": "noodle_front_dusk",
      "location": "坡口面馆门口"
    },
    "ch3_piao_c_05": {
      "id": "ch3_piao_c_05",
      "type": "line",
      "scene": "ch3_piao18",
      "speaker": "narrator",
      "text": "他往店里看了一眼，没立即进去。油烟从门边飘出来，我们忽然都不知道该把手放哪儿。",
      "character": null,
      "next": "ch3_piao_c_06",
      "bg": "noodle_front_dusk",
      "location": "坡口面馆门口"
    },
    "ch3_piao_c_06": {
      "id": "ch3_piao_c_06",
      "type": "line",
      "scene": "ch3_piao18",
      "speaker": "maolang",
      "text": "我喜欢她。这回先说清，省得咱俩像抢最后一只话筒。",
      "character": "maolang",
      "next": "ch3_piao_c_07",
      "expression": "expression-serious",
      "bg": "noodle_front_dusk",
      "location": "坡口面馆门口"
    },
    "ch3_piao_c_07": {
      "id": "ch3_piao_c_07",
      "type": "line",
      "scene": "ch3_piao18",
      "speaker": "wenwen",
      "text": "我也喜欢。可我现在连她会不会嫌我聊天闷，都还没弄明白。",
      "character": "wenwen",
      "next": "ch3_piao_c_08",
      "expression": "expression-hesitant",
      "bg": "noodle_front_dusk",
      "location": "坡口面馆门口"
    },
    "ch3_piao_c_08": {
      "id": "ch3_piao_c_08",
      "type": "line",
      "scene": "ch3_piao18",
      "speaker": "maolang",
      "text": "我讲了三个笑话，她只笑一个。我已经把另两个撤回了，虽然人没法撤回。",
      "character": "maolang",
      "next": "ch3_piao_c_09",
      "expression": "expression-smile",
      "bg": "noodle_front_dusk",
      "location": "坡口面馆门口"
    },
    "ch3_piao_c_09": {
      "id": "ch3_piao_c_09",
      "type": "line",
      "scene": "ch3_piao18",
      "speaker": "narrator",
      "text": "我没忍住笑，胸口那点紧却还在。毛狼也没装得毫不在意，只伸手拍了拍我的伞柄。",
      "character": null,
      "next": "ch3_piao_c_10",
      "bg": "noodle_front_dusk",
      "location": "坡口面馆门口"
    },
    "ch3_piao_c_10": {
      "id": "ch3_piao_c_10",
      "type": "line",
      "scene": "ch3_piao18",
      "speaker": "maolang",
      "text": "她跟谁走近，得听她自己说。你别替我问她，我也不去打听你们聊了什么。",
      "character": "maolang",
      "next": "ch3_piao_c_11",
      "expression": "expression-serious",
      "bg": "noodle_front_dusk",
      "location": "坡口面馆门口"
    },
    "ch3_piao_c_11": {
      "id": "ch3_piao_c_11",
      "type": "line",
      "scene": "ch3_piao18",
      "speaker": "wenwen",
      "text": "好。朋友的饭照吃，难受了也别拿她开玩笑。",
      "character": "wenwen",
      "next": "ch3_piao_c_12",
      "expression": "expression-serious",
      "bg": "noodle_front_dusk",
      "location": "坡口面馆门口"
    },
    "ch3_piao_c_12": {
      "id": "ch3_piao_c_12",
      "type": "line",
      "scene": "ch3_piao18",
      "speaker": "narrator",
      "text": "飘到时，毛狼提着打包的面出来。他对她说昨天很高兴，下回想见她会再问，然后把桌子留给我们。",
      "character": null,
      "next": "ch3_piao_c_13",
      "bg": "noodle_front_dusk",
      "location": "坡口面馆门口"
    },
    "ch3_piao_c_13": {
      "id": "ch3_piao_c_13",
      "type": "line",
      "scene": "ch3_piao18",
      "speaker": "piao",
      "text": "你们刚才站门口，像在等谁来发号。",
      "character": "piao",
      "next": "ch3_piao_c_14",
      "expression": "expression-smile",
      "bg": "noodle_front_dusk",
      "location": "坡口面馆门口"
    },
    "ch3_piao_c_14": {
      "id": "ch3_piao_c_14",
      "type": "line",
      "scene": "ch3_piao18",
      "speaker": "wenwen",
      "text": "聊了会儿。主要发现，我们都没自己想的那么从容。",
      "character": "wenwen",
      "next": "ch3_piao_c_15",
      "bg": "noodle_front_dusk",
      "location": "坡口面馆门口"
    },
    "ch3_piao_c_15": {
      "id": "ch3_piao_c_15",
      "type": "line",
      "scene": "ch3_piao18",
      "speaker": "piao",
      "text": "那坐下吃。面馆只按桌点单，不按谁先来的排。",
      "character": "piao",
      "next": "ch3_piao_c_16",
      "expression": "expression-smile",
      "bg": "noodle_front_dusk",
      "location": "坡口面馆门口"
    },
    "ch3_piao_c_16": {
      "id": "ch3_piao_c_16",
      "type": "line",
      "scene": "ch3_piao18",
      "speaker": "narrator",
      "text": "吃过面，她摊开新版样册。封底多了一条细线，刚好能写下一行字。边上却留着她反复擦过的痕迹。",
      "character": null,
      "next": "ch3_piao_c_17"
    },
    "ch3_piao_c_17": {
      "id": "ch3_piao_c_17",
      "type": "line",
      "scene": "ch3_piao18",
      "speaker": "piao",
      "text": "我删了两页。排得漂亮，放在一起不像我想讲的街。白干了两个晚上，有点气。",
      "character": "piao",
      "next": "ch3_piao_c_18",
      "expression": "expression-downcast"
    },
    "ch3_piao_c_18": {
      "id": "ch3_piao_c_18",
      "type": "line",
      "scene": "ch3_piao18",
      "speaker": "wenwen",
      "text": "要不要先收起来？今晚剩下这段时间，不看它也行。",
      "character": "wenwen",
      "next": "ch3_piao_c_19",
      "expression": "expression-serious"
    },
    "ch3_piao_c_19": {
      "id": "ch3_piao_c_19",
      "type": "line",
      "scene": "ch3_piao18",
      "speaker": "piao",
      "text": "你真肯？我说带新稿来，结果一直皱着脸。",
      "character": "piao",
      "next": "ch3_piao_c_20",
      "expression": "expression-hesitant"
    },
    "ch3_piao_c_20": {
      "id": "ch3_piao_c_20",
      "type": "line",
      "scene": "ch3_piao18",
      "speaker": "wenwen",
      "text": "我约的是你。新稿明天也不会跑。",
      "character": "wenwen",
      "next": "ch3_piao_c_21",
      "expression": "expression-smile"
    },
    "ch3_piao_c_21": {
      "id": "ch3_piao_c_21",
      "type": "line",
      "scene": "ch3_piao18",
      "speaker": "narrator",
      "text": "她把样册合上，问我第二十八天去贵阳会待多久。我把还没确定的部分照实说了，没有为了今晚好听就答应留下。",
      "character": null,
      "next": "ch3_piao_c_22"
    },
    "ch3_piao_c_22": {
      "id": "ch3_piao_c_22",
      "type": "line",
      "scene": "ch3_piao18",
      "speaker": "piao",
      "text": "我想继续做这本册子，暂时也没打算搬走。你真去了，我们再看怎么见面，别今天就把谁的日子擦掉。",
      "character": "piao",
      "next": "ch3_piao_bg_next_01",
      "expression": "expression-serious"
    },
    "ch3_piao_c_23": {
      "id": "ch3_piao_c_23",
      "type": "line",
      "scene": "ch3_piao18",
      "speaker": "wenwen",
      "text": "那第二十一天下午先见一次。没稿子也能来。",
      "character": "wenwen",
      "next": "ch3_piao_c_24"
    },
    "ch3_piao_c_24": {
      "id": "ch3_piao_c_24",
      "type": "line",
      "scene": "ch3_piao18",
      "speaker": "piao",
      "text": "这次我来约地点。你带那张只会聊天的嘴。",
      "character": "piao",
      "next": "ch3_piao_d_01",
      "expression": "expression-smile"
    },
    "ch3_piao_bg_next_01": {
      "id": "ch3_piao_bg_next_01",
      "type": "line",
      "scene": "ch3_piao18",
      "speaker": "wenwen",
      "text": "册子做完以后呢？",
      "character": "wenwen",
      "next": "ch3_piao_bg_next_02"
    },
    "ch3_piao_bg_next_02": {
      "id": "ch3_piao_bg_next_02",
      "type": "line",
      "scene": "ch3_piao18",
      "speaker": "piao",
      "text": "还得找工作。不过这几份印完，不等于它就成了我的工作。",
      "character": "piao",
      "next": "ch3_piao_bg_next_03",
      "expression": "expression-serious"
    },
    "ch3_piao_bg_next_03": {
      "id": "ch3_piao_bg_next_03",
      "type": "line",
      "scene": "ch3_piao18",
      "speaker": "piao",
      "text": "先把册子交给愿意留下话的人，再问问有什么合适的活。现在还没定，不先说一个好听的。",
      "character": "piao",
      "next": "ch3_piao_bg_next_04",
      "expression": "action-thinking"
    },
    "ch3_piao_bg_next_04": {
      "id": "ch3_piao_bg_next_04",
      "type": "line",
      "scene": "ch3_piao18",
      "speaker": "wenwen",
      "text": "好。有新安排，你想讲的时候，我再听。",
      "character": "wenwen",
      "next": "ch3_piao_c_23",
      "expression": "expression-smile"
    },
    "ch3_piao_d_01": {
      "id": "ch3_piao_d_01",
      "type": "line",
      "scene": "ch3_piao21",
      "speaker": "narrator",
      "text": "第二十一天下午，飘约我在老街碰面。样册只印了几份，她正把第一份装进面馆老板的纸袋。",
      "character": null,
      "next": "ch3_piao_d_02"
    },
    "ch3_piao_d_02": {
      "id": "ch3_piao_d_02",
      "type": "line",
      "scene": "ch3_piao21",
      "speaker": "piao",
      "text": "先给说过话的人看。我还不知道会不会有人愿意买，不过总算做成一本了。",
      "character": "piao",
      "next": "ch3_piao_d_03",
      "expression": "expression-smile"
    },
    "ch3_piao_d_03": {
      "id": "ch3_piao_d_03",
      "type": "line",
      "scene": "ch3_piao21",
      "speaker": "wenwen",
      "text": "我想要一本。还有，恭喜你，封底的空地方也保住了。",
      "character": "wenwen",
      "next": "ch3_piao_d_04",
      "expression": "expression-smile"
    },
    "ch3_piao_d_04": {
      "id": "ch3_piao_d_04",
      "type": "line",
      "scene": "ch3_piao21",
      "speaker": "narrator",
      "text": "她抽出另一份给我，封底没有题字。我翻回第一页，看见她把自己的名字放在了编排那一栏。",
      "character": null,
      "next": "ch3_piao_d_05"
    },
    "ch3_piao_d_05": {
      "id": "ch3_piao_d_05",
      "type": "line",
      "scene": "ch3_piao21",
      "speaker": "piao",
      "text": "差点又漏写自己。名字校了这么多遍，轮到这个反倒不知道放哪儿。",
      "character": "piao",
      "next": "ch3_piao_d_06",
      "expression": "expression-hesitant"
    },
    "ch3_piao_d_06": {
      "id": "ch3_piao_d_06",
      "type": "line",
      "scene": "ch3_piao21",
      "speaker": "wenwen",
      "text": "现在这个位置就好。",
      "character": "wenwen",
      "next": "ch3_piao_d_07"
    },
    "ch3_piao_d_07": {
      "id": "ch3_piao_d_07",
      "type": "line",
      "scene": "ch3_piao21",
      "speaker": "piao",
      "text": "文文，这几次见面，我都很高兴。昨天装订时闹了个笑话，我第一个想到的是讲给你听。",
      "character": "piao",
      "next": "ch3_piao_d_08",
      "expression": "expression-hesitant"
    },
    "ch3_piao_d_08": {
      "id": "ch3_piao_d_08",
      "type": "line",
      "scene": "ch3_piao21",
      "speaker": "narrator",
      "text": "我把册子轻轻合上。她没看纸上的名字，抬头看着我。",
      "character": null,
      "next": "ch3_piao_d_09"
    },
    "ch3_piao_d_09": {
      "id": "ch3_piao_d_09",
      "type": "line",
      "scene": "ch3_piao21",
      "speaker": "piao",
      "text": "我想和你试着交往。贵阳的事还没定，我知道；我也不是等你把所有事办好才喜欢你。",
      "character": "piao",
      "next": "ch3_piao_d_10",
      "expression": "expression-serious"
    },
    "ch3_piao_d_10": {
      "id": "ch3_piao_d_10",
      "type": "line",
      "scene": "ch3_piao21",
      "speaker": "piao",
      "text": "如果你现在更想做朋友，也直接告诉我。我会难过一会儿，但不用替我答应。",
      "character": "piao",
      "next": "ch3_piao_commit",
      "expression": "expression-hesitant"
    },
    "ch3_piao_commit": {
      "id": "ch3_piao_commit",
      "type": "choice",
      "scene": "ch3_piao21",
      "character": "piao",
      "text": "飘认真地等着我的回答。我想怎样继续这段关系？",
      "flag": "piaoRelationship",
      "choices": [
        {
          "label": "我也喜欢你。我们正式交往，接下来的安排一起商量。",
          "value": "together",
          "next": "ch3_piao_together_01"
        },
        {
          "label": "谢谢你认真告诉我。我想和你做朋友，不开始恋爱。",
          "value": "friends",
          "next": "ch3_piao_friends_01"
        }
      ]
    },
    "ch3_piao_together_01": {
      "id": "ch3_piao_together_01",
      "type": "line",
      "scene": "ch3_piao21",
      "speaker": "wenwen",
      "text": "我也喜欢你。我想和你在一起，下一次见面，不再假装只为了看稿。",
      "character": "wenwen",
      "next": "ch3_piao_together_02",
      "expression": "expression-smile"
    },
    "ch3_piao_together_02": {
      "id": "ch3_piao_together_02",
      "type": "line",
      "scene": "ch3_piao21",
      "speaker": "piao",
      "text": "那也要看稿。我会故意带一页来，看看你有没有偷偷走神。",
      "character": "piao",
      "next": "ch3_piao_together_03",
      "expression": "expression-smile"
    },
    "ch3_piao_together_03": {
      "id": "ch3_piao_together_03",
      "type": "line",
      "scene": "ch3_piao21",
      "speaker": "narrator",
      "text": "她朝我伸出手，等我握住才笑了。酒窝比第一次见面时深一点，手心却和我一样有点紧。",
      "character": null,
      "next": "ch3_piao_together_04"
    },
    "ch3_piao_together_04": {
      "id": "ch3_piao_together_04",
      "type": "line",
      "scene": "ch3_piao21",
      "speaker": "piao",
      "text": "毛狼那边，我会自己说明白。他认真约过我，我也该认真回他。",
      "character": "piao",
      "next": "ch3_piao_together_05",
      "expression": "expression-serious"
    },
    "ch3_piao_together_05": {
      "id": "ch3_piao_together_05",
      "type": "line",
      "scene": "ch3_piao21",
      "speaker": "narrator",
      "text": "那晚她告诉毛狼，我们决定交往。他隔了一阵回了祝福，也说自己想缓几天，再来吃大家的饭。",
      "character": null,
      "next": "ch3_piao_together_06"
    },
    "ch3_piao_together_06": {
      "id": "ch3_piao_together_06",
      "type": "line",
      "scene": "ch3_piao21",
      "speaker": "narrator",
      "text": "我没有催他马上照常。飘和我先把下一次见面的时间定下，她在封底写了日期，笔尖停在我名字旁边。",
      "character": null,
      "next": "end_ch3_piao"
    },
    "ch3_piao_friends_01": {
      "id": "ch3_piao_friends_01",
      "type": "line",
      "scene": "ch3_piao21",
      "speaker": "wenwen",
      "text": "谢谢你告诉我。我珍惜和你相处的这些天，但我现在想做朋友，不想用试试看让你一直等。",
      "character": "wenwen",
      "next": "ch3_piao_friends_02",
      "expression": "expression-serious"
    },
    "ch3_piao_friends_02": {
      "id": "ch3_piao_friends_02",
      "type": "line",
      "scene": "ch3_piao21",
      "speaker": "narrator",
      "text": "她握着纸袋，安静了片刻。我没拿毛狼的名字填这段沉默，也没替她想下一步。",
      "character": null,
      "next": "ch3_piao_friends_03"
    },
    "ch3_piao_friends_03": {
      "id": "ch3_piao_friends_03",
      "type": "line",
      "scene": "ch3_piao21",
      "speaker": "piao",
      "text": "好。我听明白了。那今天我想自己走回去，册子你拿着。",
      "character": "piao",
      "next": "ch3_piao_friends_04",
      "expression": "expression-downcast"
    },
    "ch3_piao_friends_04": {
      "id": "ch3_piao_friends_04",
      "type": "line",
      "scene": "ch3_piao21",
      "speaker": "wenwen",
      "text": "好。等你想聊天的时候再聊，不急着把今天说成没什么。",
      "character": "wenwen",
      "next": "ch3_piao_friends_05"
    },
    "ch3_piao_friends_05": {
      "id": "ch3_piao_friends_05",
      "type": "line",
      "scene": "ch3_piao21",
      "speaker": "narrator",
      "text": "我们在街口分开。后来再收到她的消息，是她改好的一页目录；普通的话重新说起来，也花了一点时间。",
      "character": null,
      "next": "ch3_piao_friends_06"
    },
    "ch3_piao_friends_06": {
      "id": "ch3_piao_friends_06",
      "type": "line",
      "scene": "ch3_piao21",
      "speaker": "narrator",
      "text": "毛狼继续认真约她，她有时答应，有时忙自己的事。那段渐渐亲近的日子，由他们两个人往下过。",
      "character": null,
      "next": "end_ch3_piao"
    },
    "end_ch3_piao": {
      "id": "end_ch3_piao",
      "type": "end",
      "scene": "ch3_piao21",
      "character": "piao",
      "title": "名字旁的一行空白",
      "text": "飘把自己的小册子做成了，也把心意说清了。我认真回答了她。第二十八天的行程、第三十天的停业仍会到来；这一页之后，每个人都要继续过自己的日子。",
      "nextChapter": "后日谈 · 雨后的约定：两年后，再看这次回答带来的相处与选择。",
      "next": "epilogue_piao_entry"
    },
    "epilogue_piao_entry": {
      "id": "epilogue_piao_entry",
      "type": "gate",
      "scene": "epilogue_piao_maolang",
      "cases": [
        {
          "flag": "route",
          "value": "piao",
          "next": "epilogue_piao_relationship"
        }
      ],
      "default": "epilogue_piao_m_01"
    },
    "epilogue_piao_relationship": {
      "id": "epilogue_piao_relationship",
      "type": "gate",
      "scene": "epilogue_piao_maolang",
      "cases": [
        {
          "flag": "piaoRelationship",
          "value": "together",
          "next": "epilogue_piao_w_01"
        }
      ],
      "default": "epilogue_piao_m_01"
    },
    "epilogue_piao_w_01": {
      "id": "epilogue_piao_w_01",
      "type": "line",
      "scene": "epilogue_piao_wenwen",
      "speaker": "narrator",
      "text": "两年后，又一个雨刚停的下午，飘在老街屋檐下等我。她怀里是小册子的第二版，折角换了位置。",
      "character": null,
      "next": "epilogue_piao_w_02"
    },
    "epilogue_piao_w_02": {
      "id": "epilogue_piao_w_02",
      "type": "line",
      "scene": "epilogue_piao_wenwen",
      "speaker": "narrator",
      "text": "回声已按原定的时间停业。后来我们换过见面的地点，也有过只能隔着手机吃饭的夜晚，那次牵手并没让日子自动变容易。",
      "character": null,
      "next": "epilogue_piao_w_03"
    },
    "epilogue_piao_w_03": {
      "id": "epilogue_piao_w_03",
      "type": "line",
      "scene": "epilogue_piao_wenwen",
      "speaker": "piao",
      "text": "这回准点。奖励你先看封底。",
      "character": "piao",
      "next": "epilogue_piao_w_04",
      "expression": "expression-smile"
    },
    "epilogue_piao_w_04": {
      "id": "epilogue_piao_w_04",
      "type": "line",
      "scene": "epilogue_piao_wenwen",
      "speaker": "wenwen",
      "text": "上回晚了十二分钟，你记了多久？",
      "character": "wenwen",
      "next": "epilogue_piao_w_05"
    },
    "epilogue_piao_w_05": {
      "id": "epilogue_piao_w_05",
      "type": "line",
      "scene": "epilogue_piao_wenwen",
      "speaker": "piao",
      "text": "记到你提前说一声为止。现在翻吧。",
      "character": "piao",
      "next": "epilogue_piao_w_06",
      "expression": "expression-smile"
    },
    "epilogue_piao_w_06": {
      "id": "epilogue_piao_w_06",
      "type": "line",
      "scene": "epilogue_piao_wenwen",
      "speaker": "narrator",
      "text": "封底仍有一条细线。第一版写着初次交往的日期，这一版，她在下面添了一行：再一起走一次。",
      "character": null,
      "next": "epilogue_piao_w_07"
    },
    "epilogue_piao_w_07": {
      "id": "epilogue_piao_w_07",
      "type": "line",
      "scene": "epilogue_piao_wenwen",
      "speaker": "piao",
      "text": "前几天我想把那条线去掉。后来觉得挺好，新日子总得有地方写。",
      "character": "piao",
      "next": "epilogue_piao_w_08",
      "expression": "action-thinking"
    },
    "epilogue_piao_w_08": {
      "id": "epilogue_piao_w_08",
      "type": "line",
      "scene": "epilogue_piao_wenwen",
      "speaker": "wenwen",
      "text": "那今天写哪儿？",
      "character": "wenwen",
      "next": "epilogue_piao_w_09"
    },
    "epilogue_piao_w_09": {
      "id": "epilogue_piao_w_09",
      "type": "line",
      "scene": "epilogue_piao_wenwen",
      "speaker": "piao",
      "text": "先走，回来再写。别没出门就替今天起标题。",
      "character": "piao",
      "next": "epilogue_piao_w_10",
      "expression": "expression-smile"
    },
    "epilogue_piao_w_10": {
      "id": "epilogue_piao_w_10",
      "type": "line",
      "scene": "epilogue_piao_wenwen",
      "speaker": "narrator",
      "text": "毛狼发来消息，说聚餐往后挪半小时。他早已能自然地和我们一起吃饭，偶尔照样嫌我回消息慢。",
      "character": null,
      "next": "epilogue_piao_w_11"
    },
    "epilogue_piao_w_11": {
      "id": "epilogue_piao_w_11",
      "type": "line",
      "scene": "epilogue_piao_wenwen",
      "speaker": "maolang",
      "text": "你俩别走到下一条街就失联。面我先点，笑话也先给你们留着。",
      "character": null,
      "next": "epilogue_piao_w_12"
    },
    "epilogue_piao_w_12": {
      "id": "epilogue_piao_w_12",
      "type": "line",
      "scene": "epilogue_piao_wenwen",
      "speaker": "piao",
      "text": "跟他说，面可以留，笑话让他再删两个。",
      "character": "piao",
      "next": "epilogue_piao_w_13",
      "expression": "expression-smile"
    },
    "epilogue_piao_w_13": {
      "id": "epilogue_piao_w_13",
      "type": "line",
      "scene": "epilogue_piao_wenwen",
      "speaker": "narrator",
      "text": "我回完消息，接过她装样册的袋子。她把空出来的手递给我，我们仍然会为去哪儿走争一小会儿，然后一起下坡。",
      "character": null,
      "next": "end_piao_wenwen",
      "bg": "residential_slope_day",
      "location": "老街坡巷"
    },
    "end_piao_wenwen": {
      "id": "end_piao_wenwen",
      "type": "end",
      "scene": "epilogue_piao_wenwen",
      "character": "piao",
      "title": "飘与文文 · 再一起走一次",
      "text": "我们把喜欢说出口，也在后来的日子里继续选择彼此。飘仍在做她的小册子，我仍有自己的路要走；今天，我们牵着手，把下一行留给共同经过的生活。",
      "nextChapter": "飘路线完成 · 文文与飘保持恋人关系。",
      "bg": "residential_slope_day",
      "location": "老街坡巷"
    },
    "epilogue_piao_m_01": {
      "id": "epilogue_piao_m_01",
      "type": "line",
      "scene": "epilogue_piao_maolang",
      "speaker": "narrator",
      "text": "两年后，飘和毛狼结婚了。婚礼后的家常席摆在坡口面馆，我带着他们寄来的喜帖，推开那扇熟悉的门。",
      "character": null,
      "next": "epilogue_piao_m_02"
    },
    "epilogue_piao_m_02": {
      "id": "epilogue_piao_m_02",
      "type": "line",
      "scene": "epilogue_piao_maolang",
      "speaker": "narrator",
      "text": "回声早已按原定的时间停业，大家后来各有去处。今天只是两个朋友邀请我们回来，好好吃一顿饭。",
      "character": null,
      "next": "epilogue_piao_m_03"
    },
    "epilogue_piao_m_03": {
      "id": "epilogue_piao_m_03",
      "type": "line",
      "scene": "epilogue_piao_maolang",
      "speaker": "narrator",
      "text": "飘和毛狼没有从一次邀约就走到这里。他们认真交往，错开过见面的时间，也吵过该不该把每个周末排满。后来才一起定下婚期。",
      "character": null,
      "next": "epilogue_piao_m_04"
    },
    "epilogue_piao_m_04": {
      "id": "epilogue_piao_m_04",
      "type": "line",
      "scene": "epilogue_piao_maolang",
      "speaker": "maolang",
      "text": "到了？看看喜帖，我名字这回没被缩小。",
      "character": "maolang",
      "next": "epilogue_piao_m_05",
      "expression": "expression-smile"
    },
    "epilogue_piao_m_05": {
      "id": "epilogue_piao_m_05",
      "type": "line",
      "scene": "epilogue_piao_maolang",
      "speaker": "piao",
      "text": "他想把两行字全加粗。差一点印成面馆重新开业。",
      "character": "piao",
      "next": "epilogue_piao_m_06",
      "expression": "expression-smile"
    },
    "epilogue_piao_m_06": {
      "id": "epilogue_piao_m_06",
      "type": "line",
      "scene": "epilogue_piao_maolang",
      "speaker": "wenwen",
      "text": "最后是谁说服谁的？",
      "character": "wenwen",
      "next": "epilogue_piao_m_07",
      "expression": "expression-smile"
    },
    "epilogue_piao_m_07": {
      "id": "epilogue_piao_m_07",
      "type": "line",
      "scene": "epilogue_piao_maolang",
      "speaker": "piao",
      "text": "我问他想让人先看见什么。他说，先看见我们两个。那就并排放。",
      "character": "piao",
      "next": "epilogue_piao_m_08",
      "expression": "expression-smile"
    },
    "epilogue_piao_m_08": {
      "id": "epilogue_piao_m_08",
      "type": "line",
      "scene": "epilogue_piao_maolang",
      "speaker": "narrator",
      "text": "桌角放着她的小册子第二版，署名还是她自己的。毛狼把快碰到书角的水杯挪远，顺手给她留了把椅子。",
      "character": null,
      "next": "epilogue_piao_m_09"
    },
    "epilogue_piao_m_09": {
      "id": "epilogue_piao_m_09",
      "type": "line",
      "scene": "epilogue_piao_maolang",
      "speaker": "maolang",
      "text": "坐会儿。你从早上站到现在，我数过了，没人因为你坐下就找不到新娘。",
      "character": "maolang",
      "next": "epilogue_piao_m_10",
      "expression": "expression-serious"
    },
    "epilogue_piao_m_10": {
      "id": "epilogue_piao_m_10",
      "type": "line",
      "scene": "epilogue_piao_maolang",
      "speaker": "piao",
      "text": "那你也坐。两个人结婚，别只让我一个人歇。",
      "character": "piao",
      "next": "epilogue_piao_m_11",
      "expression": "expression-smile"
    },
    "epilogue_piao_m_11": {
      "id": "epilogue_piao_m_11",
      "type": "line",
      "scene": "epilogue_piao_maolang",
      "speaker": "narrator",
      "text": "她把椅子往旁边拉了一点，毛狼坐过去。热汤端上来，他们还在商量明天几点起，不必用一句大话证明今后的全部。",
      "character": null,
      "next": "epilogue_piao_m_12"
    },
    "epilogue_piao_m_12": {
      "id": "epilogue_piao_m_12",
      "type": "line",
      "scene": "epilogue_piao_maolang",
      "speaker": "wenwen",
      "text": "恭喜。以后约饭，也给我留个能赶到的时间。",
      "character": "wenwen",
      "next": "epilogue_piao_m_13",
      "expression": "expression-smile"
    },
    "epilogue_piao_m_13": {
      "id": "epilogue_piao_m_13",
      "type": "line",
      "scene": "epilogue_piao_maolang",
      "speaker": "maolang",
      "text": "留。你自己那边的约也好好赴，别每次都等我们催。",
      "character": "maolang",
      "next": "epilogue_piao_m_14",
      "expression": "expression-smile"
    },
    "epilogue_piao_m_14": {
      "id": "epilogue_piao_m_14",
      "type": "line",
      "scene": "epilogue_piao_maolang",
      "speaker": "narrator",
      "text": "飘举起杯子，先碰了毛狼那一只，再碰我们的。喜帖上的两个名字靠在一起，桌上的每个人，也都带着自己的日子来到这里。",
      "character": null,
      "next": "end_piao_maolang"
    },
    "end_piao_maolang": {
      "id": "end_piao_maolang",
      "type": "end",
      "scene": "epilogue_piao_maolang",
      "character": "piao",
      "title": "飘与毛狼 · 两个人的落款",
      "text": "飘和毛狼在相处中选择了彼此，正式结为夫妻。我把喜帖收好，为他们高兴，也接着走向自己的约定。我们曾在同一场雨里认识，后来各自写下了新的生活。",
      "nextChapter": "飘的后日谈完成 · 飘与毛狼结婚；文文此前选择的个人道路继续。"
    }
  },
  "cgs": {
    "cg01": {
      "image": "assets/cg/cg-01-rain-return.png",
      "alt": "阴雨下午，文文的倒影映在站牌玻璃上，箱子和工具包在旁。"
    },
    "cg02": {
      "image": "assets/cg/cg-02-xiaoman-mirror.png",
      "alt": "理发镜旁，小满站在作品夹和空练习椅边。"
    },
    "cg03": {
      "image": "assets/cg/cg-03-zhouzhi-noodles.png",
      "alt": "雨夜桌边，周栀用汤碗压住报价单，指向照明一栏。"
    },
    "cg04": {
      "image": "assets/cg/cg-04-mengyao-camera.png",
      "alt": "阴雨下午，屋檐下的孟遥放低相机，看向文文。"
    },
    "cg05": {
      "image": "assets/cg/cg-05-yelan-inventory.png",
      "alt": "夜间包厢里，叶岚在倒扣纸箱上铺开清单，设备分开摆放。"
    },
    "cg06": {
      "image": "assets/cg/cg-06-maolang-confession.png",
      "alt": "下午的大厅，文文与毛狼在尺寸纸、笔和线箱旁停住。"
    },
    "cg07": {
      "image": "assets/cg/cg-07-yelan-off-duty.png",
      "alt": "雨夜，叶岚撑伞回头，等文文收好工具包。"
    },
    "cg08": {
      "image": "assets/cg/cg-08-huangqiuqiu-listening.png",
      "alt": "空包厢调音台旁，黄球球托腮，文文坐下倾听。"
    },
    "cg09": {
      "image": "assets/cg/cg-09-repair-handoff.png",
      "alt": "雨夜维修柜台前，师匠用笔压住故障单，毛狼与文文一起听交接要求。"
    },
    "cg13": {
      "image": "assets/cg/cg-13-xiaoman-night-stall.png",
      "alt": "雨夜摊桌边，小满将练习图从洋芋盘与蘸水旁挪开，砖红外套搭在椅背上。"
    }
  },
  "release": "0.4",
  "contentRevision": "background-20261020",
  "routeChoice": "ch3_route_choice",
  "chapters": {
    "1": {
      "title": "第一章 · 回来的人",
      "days": "第1—10天"
    },
    "2": {
      "title": "第二章 · 镜头没有拍到的",
      "days": "第11—14天"
    },
    "3": {
      "title": "第三章 · 想见你，不必有事",
      "days": "第15—21天"
    },
    "epilogue": {
      "title": "后日谈 · 雨后的约定",
      "days": "两年后"
    }
  }
};
