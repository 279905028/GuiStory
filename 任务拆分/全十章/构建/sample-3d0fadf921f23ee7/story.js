// E02 隔离构建：仅用于数据接口验证，不能替换现行游戏。
window.RAIN_STORY = {
  "version": 1,
  "title": "毕节，雨停之前",
  "release": "ten-chapter-isolated",
  "contractVersion": "1.0.0",
  "contentRevision": "nightshift-20261022-r1",
  "requiredCapabilities": [
    "initial-flags-v1",
    "line-on-enter-set-flags-v1",
    "character-forms-v1",
    "exhaustive-gates-v1",
    "isolated-content-saves-v1"
  ],
  "initialFlags": {
    "qiuMet": false,
    "qiuForm": "sphere"
  },
  "start": "tc_c01_common_entry",
  "routeChoice": "tc_c03_common_route_choice",
  "previewChoice": null,
  "chapters": {
    "1": {
      "title": "第一章 · 凌晨六点的早餐",
      "days": "第1—7天"
    },
    "2": {
      "title": "第二章 · 语音里的那个人",
      "days": "第8—14天"
    },
    "3": {
      "title": "第三章 · 想见你不必有事",
      "days": "第15—21天"
    },
    "4": {
      "title": "第四章 · 约好的那一天",
      "days": "第22—24天"
    }
  },
  "characters": {},
  "backgrounds": {
    "sample-bg": "sample://background"
  },
  "cgs": {},
  "scenes": {
    "ts_c01_common_rhythm": {
      "chapter": 1,
      "title": "三下轻响",
      "bg": "sample-bg",
      "time": "21:40",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 1,
        "clock": "21:40"
      },
      "location": "网吧后院侧门",
      "day": 1,
      "dayLabel": "第1天"
    },
    "ts_c01_common_end": {
      "chapter": 1,
      "title": "第一章 · 凌晨六点的早餐",
      "bg": "sample-bg",
      "time": "章末",
      "chronology": {
        "domain": "chapter-range",
        "mode": "present",
        "label": "第1—7天"
      },
      "location": "",
      "day": null,
      "dayLabel": "第1—7天"
    },
    "ts_c02_common_rhythm": {
      "chapter": 2,
      "title": "还记得的三拍",
      "bg": "sample-bg",
      "time": "19:40",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 8,
        "clock": "19:40"
      },
      "location": "网吧后院侧门",
      "day": 8,
      "dayLabel": "第8天"
    },
    "ts_c02_common_meeting": {
      "chapter": 2,
      "title": "门后有人回答",
      "bg": "sample-bg",
      "time": "20:30",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 14,
        "clock": "20:30"
      },
      "location": "网吧后院",
      "day": 14,
      "dayLabel": "第14天"
    },
    "ts_c02_common_return": {
      "chapter": 2,
      "title": "门后有人回答",
      "bg": "sample-bg",
      "time": "20:30",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 14,
        "clock": "20:30"
      },
      "location": "住处",
      "day": 14,
      "dayLabel": "第14天"
    },
    "ts_c02_common_end": {
      "chapter": 2,
      "title": "第二章 · 语音里的那个人",
      "bg": "sample-bg",
      "time": "章末",
      "chronology": {
        "domain": "chapter-range",
        "mode": "present",
        "label": "第8—14天"
      },
      "location": "",
      "day": null,
      "dayLabel": "第8—14天"
    },
    "ts_c03_common_choice": {
      "chapter": 3,
      "title": "这回自己开口",
      "bg": "sample-bg",
      "time": "下午",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 15
      },
      "location": "住处",
      "day": 15,
      "dayLabel": "第15天"
    },
    "ts_c03_common_end": {
      "chapter": 3,
      "title": "第三章 · 想见你不必有事",
      "bg": "sample-bg",
      "time": "章末",
      "chronology": {
        "domain": "chapter-range",
        "mode": "present",
        "label": "第15—21天"
      },
      "location": "",
      "day": null,
      "dayLabel": "第15—21天"
    },
    "ts_c04_common_sample_stop": {
      "chapter": 4,
      "title": "发薪以后",
      "bg": "sample-bg",
      "time": "15:40",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 22,
        "clock": "15:40"
      },
      "location": "住处",
      "day": 22,
      "dayLabel": "第22天"
    },
    "ts_c03_xiaoman_sample": {
      "chapter": 3,
      "title": "你是来剪头发的吗",
      "bg": "sample-bg",
      "time": "16:10",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 15,
        "clock": "16:10"
      },
      "location": "理发店门口",
      "day": 15,
      "dayLabel": "第15天"
    },
    "ts_c03_zhouzhi_sample": {
      "chapter": 3,
      "title": "还没到上班时间",
      "bg": "sample-bg",
      "time": "17:20",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 15,
        "clock": "17:20"
      },
      "location": "回声KTV前的街边",
      "day": 15,
      "dayLabel": "第15天"
    },
    "ts_c03_mengyao_sample": {
      "chapter": 3,
      "title": "这次不算顺路",
      "bg": "sample-bg",
      "time": "17:20",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 15,
        "clock": "17:20"
      },
      "location": "桥头烧饼店门边",
      "day": 15,
      "dayLabel": "第15天"
    },
    "ts_c03_yelan_sample": {
      "chapter": 3,
      "title": "面已经吃过了",
      "bg": "sample-bg",
      "time": "18:20",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 15,
        "clock": "18:20"
      },
      "location": "路口",
      "day": 15,
      "dayLabel": "第15天"
    },
    "ts_c03_piao_sample": {
      "chapter": 3,
      "title": "没有采访提纲",
      "bg": "sample-bg",
      "time": "16:30",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 15,
        "clock": "16:30"
      },
      "location": "巷口",
      "day": 15,
      "dayLabel": "第15天"
    },
    "ts_c03_friends_sample": {
      "chapter": 3,
      "title": "不用找个正事",
      "bg": "sample-bg",
      "time": "16:00",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 15,
        "clock": "16:00"
      },
      "location": "修改裤脚的店",
      "day": 15,
      "dayLabel": "第15天"
    },
    "ts_c03_huangqiuqiu_sample": {
      "chapter": 3,
      "title": "第二次也要打招呼",
      "bg": "sample-bg",
      "time": "17:00",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 15,
        "clock": "17:00"
      },
      "location": "网吧后院侧门",
      "day": 15,
      "dayLabel": "第15天"
    }
  },
  "nodes": {
    "tc_c01_common_entry": {
      "id": "tc_c01_common_entry",
      "type": "line",
      "scene": "ts_c01_common_rhythm",
      "speaker": "narrator",
      "character": null,
      "text": "正式上班还差二十分钟。我把晚饭盒丢进外面的垃圾桶，顺着网吧侧边的小路走回来。\n\n后院门虚掩着。里面响了三下：轻、轻，隔了一点，再重一些。\n\n我以为有人叫，停住。隔着门缝，只有一截潮湿的墙，和塑料凳露出来的蓝腿。\n\n“……后面还有。”\n\n声音很轻，像有人正把一句被打断的话接回来。\n\n我没有推门。柜台里传来找零钱的声音，时间也还够我站一会儿。",
      "next": "tc_c01_common_rhythm_record_choice",
      "bg": "sample-bg"
    },
    "tc_c01_common_rhythm_record_choice": {
      "id": "tc_c01_common_rhythm_record_choice",
      "type": "choice",
      "scene": "ts_c01_common_rhythm",
      "flag": "qiuSignal",
      "choices": [
        {
          "label": "再听一遍，把三拍记下来",
          "value": "record",
          "next": "tc_c01_common_rhythm_record",
          "requires": []
        },
        {
          "label": "先回柜台，暂时不记",
          "value": "ignore",
          "next": "tc_c01_common_rhythm_ignore",
          "requires": []
        }
      ],
      "text": "我怎样对待刚才听到的声音？"
    },
    "tc_c01_common_rhythm_record": {
      "id": "tc_c01_common_rhythm_record",
      "type": "line",
      "scene": "ts_c01_common_rhythm",
      "speaker": "narrator",
      "character": null,
      "text": "我拿出手机，在备忘录里打了三个点，又把第二个和第三个之间拉开一点。\n\n“是这样吗？”我压低声音问。\n\n门内没有回答。我又站了一小会儿，记下“网吧后院，三下轻响”，把手机收好。\n\n那不是一个答案，但至少下次再听见，我不会把它当成另一件事。",
      "next": "tc_c01_common_exit"
    },
    "tc_c01_common_rhythm_ignore": {
      "id": "tc_c01_common_rhythm_ignore",
      "type": "line",
      "scene": "ts_c01_common_rhythm",
      "speaker": "narrator",
      "character": null,
      "text": "我朝门里问了一句有没有人。没有回应，便退回亮着灯的门厅。\n\n师匠正把零钱数给客人。我接过空饮料箱，放回柜台下面。三下响声被别的声音盖住，没再响起。",
      "next": "tc_c01_common_exit"
    },
    "tc_c01_common_exit": {
      "id": "tc_c01_common_exit",
      "type": "end",
      "scene": "ts_c01_common_end",
      "title": "第一章 · 凌晨六点的早餐",
      "text": "",
      "next": "tc_c02_common_entry",
      "nextChapter": "第二章 · 语音里的那个人"
    },
    "tc_c02_common_entry": {
      "id": "tc_c02_common_entry",
      "type": "line",
      "scene": "ts_c02_common_rhythm",
      "speaker": "narrator",
      "character": null,
      "text": "休班日，我睡醒去网吧拿落下的充电线。师匠在柜台和客人说话，我取完东西，从侧门出去。\n\n后院里又响了三下。\n\n轻、轻，停一停，重。",
      "next": "tc_c02_common_rhythm_reply_choice"
    },
    "tc_c02_common_rhythm_reply_choice": {
      "id": "tc_c02_common_rhythm_reply_choice",
      "type": "choice",
      "scene": "ts_c02_common_rhythm",
      "flag": "qiuReply",
      "choices": [
        {
          "label": "敲回刚才的节奏",
          "value": "reply",
          "next": "tc_c02_common_reply_record_gate",
          "requires": []
        },
        {
          "label": "不敲门，先离开",
          "value": "leave",
          "next": "tc_c02_common_rhythm_leave",
          "requires": []
        }
      ],
      "text": "我是否回应？"
    },
    "tc_c02_common_reply_record_gate": {
      "id": "tc_c02_common_reply_record_gate",
      "type": "gate",
      "scene": "ts_c02_common_rhythm",
      "cases": [
        {
          "flag": "qiuSignal",
          "value": "record",
          "next": "tc_c02_common_rhythm_reply_recorded"
        }
      ],
      "default": "tc_c02_common_rhythm_reply_unrecorded"
    },
    "tc_c02_common_rhythm_reply_recorded": {
      "id": "tc_c02_common_rhythm_reply_recorded",
      "type": "line",
      "scene": "ts_c02_common_rhythm",
      "speaker": "narrator",
      "character": null,
      "text": "我先翻出那一行点，再在木门上照着敲了一遍。里面安静片刻，传来一句：“记得还挺清楚。”\n\n我伸手要开门，她却说：“今天先这样。”\n\n“那我什么时候再来？”\n\n“你有空的时候。别在有人叫你的时候。”\n\n我说第十四天晚上休息，可以过来。门后传来轻轻一下，像是答应。",
      "next": "tc_c02_common_hidden_signal_gate"
    },
    "tc_c02_common_rhythm_reply_unrecorded": {
      "id": "tc_c02_common_rhythm_reply_unrecorded",
      "type": "line",
      "scene": "ts_c02_common_rhythm",
      "speaker": "narrator",
      "character": null,
      "text": "我按刚才的印象敲了两下，又停住，不确定中间该隔多久。门里没有回应。我没有擅自推门，只在外面站了一会儿，便回到街上。",
      "next": "tc_c02_common_hidden_signal_gate"
    },
    "tc_c02_common_rhythm_leave": {
      "id": "tc_c02_common_rhythm_leave",
      "type": "line",
      "scene": "ts_c02_common_rhythm",
      "speaker": "narrator",
      "character": null,
      "text": "我把充电线收进袋里，朝门内说了句借过，没有再追问。街上有人搬货，手推车的声音经过，院里又安静下来。",
      "next": "tc_c02_common_hidden_signal_gate"
    },
    "tc_c02_common_hidden_signal_gate": {
      "id": "tc_c02_common_hidden_signal_gate",
      "type": "gate",
      "scene": "ts_c02_common_meeting",
      "cases": [
        {
          "flag": "qiuSignal",
          "value": "record",
          "next": "tc_c02_common_hidden_reply_gate"
        }
      ],
      "default": "tc_c02_common_exit"
    },
    "tc_c02_common_hidden_reply_gate": {
      "id": "tc_c02_common_hidden_reply_gate",
      "type": "gate",
      "scene": "ts_c02_common_meeting",
      "cases": [
        {
          "flag": "qiuReply",
          "value": "reply",
          "next": "tc_c02_common_qiu_meeting_arrival"
        }
      ],
      "default": "tc_c02_common_exit"
    },
    "tc_c02_common_qiu_meeting_arrival": {
      "id": "tc_c02_common_qiu_meeting_arrival",
      "type": "line",
      "scene": "ts_c02_common_meeting",
      "speaker": "narrator",
      "character": null,
      "text": "今晚我休班。路过网吧时，柜台里是当值同事，我打过招呼，绕到后院门边。\n\n我先敲三下，没有马上推。\n\n“文文。”我说，“是上回那个。”\n\n“记得。你不用每次都介绍自己值什么班。”\n\n我笑了一下，问她叫什么。",
      "next": "tc_c02_common_qiu_meeting_identity"
    },
    "tc_c02_common_qiu_meeting_identity": {
      "id": "tc_c02_common_qiu_meeting_identity",
      "type": "line",
      "scene": "ts_c02_common_meeting",
      "speaker": "narrator",
      "character": null,
      "text": "“黄球球。”\n\n“我能进去吗？”\n\n“能。但先说一件事。我是成年女性，自称二十四岁。你可以先听完，别替我改成别的称呼。”\n\n我说好，才缓缓把门推开。\n\n塑料凳上坐着一个黄色圆球。深色的眉毛、大眼睛，短短的红嘴，一只小手托着脸。后院灯照着她，影子落在凳面，确实不是我熬夜以后眼前闪过去的东西。",
      "next": "tc_c02_common_qiu_meeting_surprise"
    },
    "tc_c02_common_qiu_meeting_surprise": {
      "id": "tc_c02_common_qiu_meeting_surprise",
      "type": "line",
      "scene": "ts_c02_common_meeting",
      "speaker": "narrator",
      "character": null,
      "text": "我扶着门，没说出话。\n\n“现在可以意外了。”她说。\n\n“……你刚才提前说那个，是怕我喊什么？”\n\n“怕你把我拿去找失主。”\n\n我笑出来，又赶紧收住。她看着我，眉毛没有松下去：“笑也行。别只会笑。”",
      "next": "tc_c02_common_qiu_meeting_conversation"
    },
    "tc_c02_common_qiu_meeting_conversation": {
      "id": "tc_c02_common_qiu_meeting_conversation",
      "type": "line",
      "scene": "ts_c02_common_meeting",
      "speaker": "narrator",
      "character": null,
      "text": "我把另一张空凳子挪远一点，问这里能不能坐。她说可以。\n\n我们聊了很普通的事情。我说今天吃了什么，又讲了飘记下的那句“明天白菜便宜”，她问白菜最后便宜了没有；我问她是否常听见外面的声音，她说听见过许多“回头再说”，后半句总难等到。\n\n“所以你那晚说，后面还有？”\n\n“嗯。有的话可以讲完。没有也告诉我一声。”\n\n我没有追问她从哪来，也没有打开手机拍照。那疑问当然还在，但她正认真听我讲一个面馆里的笑话，我不想把她又变回一个问题。",
      "next": "tc_c02_common_qiu_meeting_promise"
    },
    "tc_c02_common_qiu_meeting_promise": {
      "id": "tc_c02_common_qiu_meeting_promise",
      "type": "line",
      "scene": "ts_c02_common_meeting",
      "speaker": "narrator",
      "character": null,
      "text": "离开前，我问她想不想再见面。\n\n“想。你先选自己真有空的时候。”\n\n门外有人经过，我等脚步声远了才出去。师匠在另一头和人说话，没有看见后院里坐着谁。我也没有把这场相识发到群里。",
      "next": "tc_c02_common_qiu_met"
    },
    "tc_c02_common_qiu_met": {
      "id": "tc_c02_common_qiu_met",
      "type": "line",
      "scene": "ts_c02_common_return",
      "speaker": "narrator",
      "character": null,
      "text": "回到屋里，我把明天的闹钟调好。备忘录上那三个点还在，下面多了一行名字。",
      "next": "tc_c02_common_exit",
      "onEnter": {
        "requires": [
          {
            "flag": "qiuSignal",
            "value": "record"
          },
          {
            "flag": "qiuReply",
            "value": "reply"
          }
        ],
        "setFlags": {
          "qiuMet": true
        }
      }
    },
    "tc_c02_common_exit": {
      "id": "tc_c02_common_exit",
      "type": "end",
      "scene": "ts_c02_common_end",
      "title": "第二章 · 语音里的那个人",
      "text": "",
      "next": "tc_c03_common_entry",
      "nextChapter": "第三章 · 想见你不必有事"
    },
    "tc_c03_common_entry": {
      "id": "tc_c03_common_entry",
      "type": "line",
      "scene": "ts_c03_common_choice",
      "speaker": "narrator",
      "character": null,
      "text": "睡醒时，雨已经下过一阵。我把窗户推开，屋檐上的水滴在防盗网上，滴得不太均匀。\n\n手机里有约好的游戏，也有没接完的话。以前我总爱等别人喊。这样有人喊，就显得我有事可做；没人喊，也不算我被拒绝。\n\n我把下一周的班看了一遍。接下来有班要上，也有能留出来的休息。我没有把所有人都写进同一张满满的日程里。\n\n先约一个真正想见的人，或者先陪朋友把普通日子过好。",
      "next": "tc_c03_common_route_choice"
    },
    "tc_c03_common_route_choice": {
      "id": "tc_c03_common_route_choice",
      "type": "choice",
      "scene": "ts_c03_common_choice",
      "flag": "route",
      "choices": [
        {
          "label": "去找小满，听她讲最近的事，也让她看看如今的我。",
          "value": "xiaoman",
          "next": "tc_c03_xiaoman_entry",
          "requires": []
        },
        {
          "label": "约周栀吃一顿不赶着上班的饭，继续认识彼此的日常。",
          "value": "zhouzhi",
          "next": "tc_c03_zhouzhi_entry",
          "requires": []
        },
        {
          "label": "把和孟遥没说完的话接下去，看看我们现在还能怎样相处。",
          "value": "mengyao",
          "next": "tc_c03_mengyao_entry",
          "requires": []
        },
        {
          "label": "再约叶岚一次，让见面不只是游戏队的线下活动。",
          "value": "yelan",
          "next": "tc_c03_yelan_entry",
          "requires": []
        },
        {
          "label": "认真回应飘的邀约，也说清自己的心意。",
          "value": "piao",
          "next": "tc_c03_piao_entry",
          "requires": []
        },
        {
          "label": "先安排自己的生活，和毛狼、师匠继续做会见面的朋友。",
          "value": "friends",
          "next": "tc_c03_friends_entry",
          "requires": []
        },
        {
          "label": "兑现与黄球球的约定。",
          "value": "huangqiuqiu",
          "next": "tc_c03_huangqiuqiu_entry",
          "requires": [
            {
              "flag": "qiuSignal",
              "value": "record"
            },
            {
              "flag": "qiuReply",
              "value": "reply"
            },
            {
              "flag": "qiuMet",
              "value": true
            }
          ]
        }
      ],
      "text": "接下来的时间，我想怎样度过？"
    },
    "tc_c03_common_exit": {
      "id": "tc_c03_common_exit",
      "type": "end",
      "scene": "ts_c03_common_end",
      "title": "第三章 · 想见你不必有事",
      "text": "",
      "next": "tc_c04_common_entry",
      "nextChapter": "第四章 · 约好的那一天"
    },
    "tc_c04_common_entry": {
      "id": "tc_c04_common_entry",
      "type": "line",
      "scene": "ts_c04_common_sample_stop",
      "speaker": "narrator",
      "character": null,
      "text": "这天下午，我醒来看到到账消息，在床上坐了一会儿。",
      "next": null
    },
    "tc_c03_xiaoman_entry": {
      "id": "tc_c03_xiaoman_entry",
      "type": "line",
      "scene": "ts_c03_xiaoman_sample",
      "speaker": "narrator",
      "character": null,
      "text": "我在理发店门口站了半分钟，玻璃上的营业时间看了两遍。",
      "next": "tc_c03_common_exit"
    },
    "tc_c03_zhouzhi_entry": {
      "id": "tc_c03_zhouzhi_entry",
      "type": "line",
      "scene": "ts_c03_zhouzhi_sample",
      "speaker": "narrator",
      "character": null,
      "text": "我回了有空，出门才发现雨已经停了。她站在街边，把一把折断一根伞骨的伞举给我看，像举着某种失败的战利品。",
      "next": "tc_c03_common_exit"
    },
    "tc_c03_mengyao_entry": {
      "id": "tc_c03_mengyao_entry",
      "type": "line",
      "scene": "ts_c03_mengyao_sample",
      "speaker": "narrator",
      "character": null,
      "text": "孟遥站在店门边，提着一个装资料的布袋。她正在听电话，声音比跟我说话时慢：“我知道您着急。不过今天先把这两处弄明白，下次我们再看新的。”她听了一会儿，说好，挂掉电话，转身就问我：“要几个？”",
      "next": "tc_c03_common_exit"
    },
    "tc_c03_yelan_entry": {
      "id": "tc_c03_yelan_entry",
      "type": "line",
      "scene": "ts_c03_yelan_sample",
      "speaker": "narrator",
      "character": null,
      "text": "见面时，她站在路口，身上还穿着上班的衣服。低髻被风吹松一点，她伸手重新拢好，看见我过来，先说了一声你好。",
      "next": "tc_c03_common_exit"
    },
    "tc_c03_piao_entry": {
      "id": "tc_c03_piao_entry",
      "type": "line",
      "scene": "ts_c03_piao_sample",
      "speaker": "narrator",
      "character": null,
      "text": "飘站在巷口，低头看手机上的时间。我举起手，还没开口，她先说：“没迟到。你不用一来就解释。”",
      "next": "tc_c03_common_exit"
    },
    "tc_c03_friends_entry": {
      "id": "tc_c03_friends_entry",
      "type": "line",
      "scene": "ts_c03_friends_sample",
      "speaker": "narrator",
      "character": null,
      "text": "店里摆着一面很长的镜子。毛狼站在镜子前，裤脚被折上去一截，两条腿显得不太一样长。",
      "next": "tc_c03_common_exit"
    },
    "tc_c03_huangqiuqiu_entry": {
      "id": "tc_c03_huangqiuqiu_entry",
      "type": "line",
      "scene": "ts_c03_huangqiuqiu_sample",
      "speaker": "narrator",
      "character": null,
      "text": "我到网吧时还没上班，只借前门穿过去。后院侧门附近没有别人，我在门外敲了三下，等到里面说进来，才推开门。",
      "next": "tc_c03_common_exit"
    }
  }
};
