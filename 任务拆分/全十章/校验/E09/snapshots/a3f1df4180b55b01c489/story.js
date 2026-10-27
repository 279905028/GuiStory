// E09 正式十章构建；请修改章节源或演出绑定后重新构建，勿手改。
window.RAIN_STORY = {
  "version": 1,
  "title": "毕节，雨停之前",
  "release": "ten-chapter",
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
    },
    "5": {
      "title": "第五章 · 没说出口的困意",
      "days": "第25—29天"
    },
    "6": {
      "title": "第六章 · 空出来的一个晚上",
      "days": "第30—34天"
    },
    "7": {
      "title": "第七章 · 各自要过的日子",
      "days": "第35—45天"
    },
    "8": {
      "title": "第八章 · 不用每次都逞强",
      "days": "第46—60天"
    },
    "9": {
      "title": "第九章 · 把明天说具体",
      "days": "第61—90天"
    },
    "10": {
      "title": "第十章 · 雨停之前也往前走",
      "days": "两年后"
    }
  },
  "characters": {
    "wenwen": {
      "name": "文文",
      "age": 23,
      "color": "#99b7cb",
      "image": "assets/ten-chapter/characters/wenwen/char-wenwen-human-base.webp",
      "presentation": "human",
      "expressions": {
        "expression-hesitant": "assets/ten-chapter/characters/wenwen/char-wenwen-human-expression-hesitant.webp",
        "expression-smile": "assets/ten-chapter/characters/wenwen/char-wenwen-human-expression-smile.webp",
        "expression-tired": "assets/ten-chapter/characters/wenwen/char-wenwen-human-expression-tired.webp",
        "expression-downcast": "assets/ten-chapter/characters/wenwen/char-wenwen-human-expression-downcast.webp",
        "expression-surprised": "assets/ten-chapter/characters/wenwen/char-wenwen-human-expression-surprised.webp",
        "expression-serious": "assets/ten-chapter/characters/wenwen/char-wenwen-human-expression-serious.webp"
      }
    },
    "xiaoman": {
      "name": "罗小满",
      "age": 22,
      "color": "#d48768",
      "image": "assets/character-variants/xiaoman-face-v2-candidate.webp",
      "presentation": "human",
      "expressions": {
        "expression-smile": "assets/character-variants/expressions-v01-20261019/xiaoman/char-xiaoman-expression-smile.webp",
        "expression-hesitant": "assets/character-variants/expressions-v01-20261019/xiaoman/char-xiaoman-expression-hesitant.webp",
        "expression-serious": "assets/character-variants/expressions-v01-20261019/xiaoman/char-xiaoman-expression-serious.webp",
        "expression-downcast": "assets/character-variants/expressions-v01-20261019/xiaoman/char-xiaoman-expression-downcast.webp",
        "expression-tired": "assets/ten-chapter/characters/xiaoman/char-xiaoman-human-expression-tired.webp",
        "outfit-work-apron": "assets/ten-chapter/characters/xiaoman/char-xiaoman-work-apron-base.webp",
        "outfit-new-coat": "assets/ten-chapter/characters/xiaoman/char-xiaoman-new-coat-base-v2.webp"
      }
    },
    "zhouzhi": {
      "name": "周栀",
      "age": 25,
      "color": "#69b9b1",
      "image": "assets/character-variants/zhouzhi-face-v2-candidate.webp",
      "presentation": "human",
      "expressions": {
        "expression-smile": "assets/character-variants/expressions-v01-20261019/zhouzhi/char-zhouzhi-expression-smile.webp",
        "expression-serious": "assets/character-variants/expressions-v01-20261019/zhouzhi/char-zhouzhi-expression-serious.webp",
        "expression-tired": "assets/ten-chapter/characters/zhouzhi/char-zhouzhi-human-expression-tired.webp",
        "expression-hesitant": "assets/character-variants/expressions-v01-20261019/zhouzhi/char-zhouzhi-expression-hesitant.webp",
        "expression-downcast": "assets/character-variants/expressions-v01-20261019/zhouzhi/char-zhouzhi-expression-downcast.webp",
        "outfit-light-blue-shirt": "assets/ten-chapter/characters/zhouzhi/char-zhouzhi-light-blue-shirt-base.webp",
        "outfit-tied-hair": "assets/ten-chapter/characters/zhouzhi/char-zhouzhi-tied-hair-base.webp"
      }
    },
    "mengyao": {
      "name": "孟遥",
      "age": 23,
      "color": "#d2b693",
      "image": "assets/ten-chapter/characters/mengyao/char-mengyao-human-base.webp",
      "presentation": "human",
      "expressions": {
        "expression-hesitant": "assets/ten-chapter/characters/mengyao/char-mengyao-human-expression-hesitant.webp",
        "expression-smile": "assets/ten-chapter/characters/mengyao/char-mengyao-human-expression-smile.webp",
        "expression-serious": "assets/ten-chapter/characters/mengyao/char-mengyao-human-expression-serious.webp",
        "expression-downcast": "assets/ten-chapter/characters/mengyao/char-mengyao-human-expression-downcast.webp",
        "expression-tired": "assets/ten-chapter/characters/mengyao/char-mengyao-human-expression-tired.webp",
        "outfit-teacher-bag": "assets/ten-chapter/characters/mengyao/char-mengyao-teacher-bag-base.webp",
        "outfit-casual-jacket": "assets/ten-chapter/characters/mengyao/char-mengyao-casual-jacket-base.webp"
      }
    },
    "yelan": {
      "name": "叶岚",
      "age": 27,
      "color": "#9ba7bc",
      "image": "assets/ten-chapter/characters/yelan/char-yelan-human-base.webp",
      "presentation": "human",
      "expressions": {
        "expression-hesitant": "assets/ten-chapter/characters/yelan/char-yelan-human-expression-hesitant.webp",
        "expression-smile": "assets/ten-chapter/characters/yelan/char-yelan-human-expression-smile.webp",
        "expression-serious": "assets/ten-chapter/characters/yelan/char-yelan-human-expression-serious.webp",
        "expression-tired": "assets/ten-chapter/characters/yelan/char-yelan-human-expression-tired.webp",
        "expression-downcast": "assets/ten-chapter/characters/yelan/char-yelan-human-expression-downcast.webp",
        "outfit-casual": "assets/ten-chapter/characters/yelan/char-yelan-casual-base.webp"
      }
    },
    "maolang": {
      "name": "毛狼",
      "age": 24,
      "color": "#9ba471",
      "image": "assets/char-maolang.webp",
      "presentation": "human",
      "expressions": {
        "expression-smile": "assets/new-character-variants/expressions-v01-20261019/maolang/char-maolang-expression-smile.webp",
        "expression-hesitant": "assets/new-character-variants/expressions-v01-20261019/maolang/char-maolang-expression-hesitant.webp",
        "expression-serious": "assets/new-character-variants/expressions-v01-20261019/maolang/char-maolang-expression-serious.webp",
        "outfit-wedding": "assets/ten-chapter/characters/maolang/char-maolang-wedding-base.webp"
      }
    },
    "shijiang": {
      "name": "师匠",
      "age": 32,
      "color": "#7391b4",
      "image": "assets/char-shijiang.webp",
      "presentation": "human",
      "expressions": {
        "expression-serious": "assets/character-variants/shijiang-optionA-20261020/char-shijiang-expression-serious.webp",
        "expression-smile": "assets/character-variants/shijiang-optionA-20261020/char-shijiang-expression-smile.webp",
        "expression-hesitant": "assets/character-variants/shijiang-optionA-20261020/char-shijiang-expression-hesitant.webp"
      }
    },
    "piao": {
      "name": "飘",
      "age": 20,
      "color": "#c69c91",
      "image": "assets/char-piao.webp",
      "presentation": "human",
      "expressions": {
        "expression-smile": "assets/character-variants/piao-optionB-20261020/char-piao-expression-smile.webp",
        "expression-serious": "assets/character-variants/piao-optionB-20261020/char-piao-expression-serious.webp",
        "expression-hesitant": "assets/character-variants/piao-optionB-20261020/char-piao-expression-hesitant.webp",
        "expression-downcast": "assets/character-variants/piao-optionB-20261020/char-piao-expression-downcast.webp",
        "outfit-wedding": "assets/ten-chapter/characters/piao/char-piao-wedding-base.webp"
      }
    },
    "huangqiuqiu": {
      "name": "黄球球",
      "age": 24,
      "color": "#e5bf45",
      "forms": {
        "sphere": {
          "image": "assets/char-huangqiuqiu.webp",
          "expressions": {
            "expression-serious": "assets/new-character-variants/expressions-v01-20261019/huangqiuqiu/char-huangqiuqiu-expression-serious.webp",
            "expression-smile": "assets/new-character-variants/expressions-v01-20261019/huangqiuqiu/char-huangqiuqiu-expression-smile.webp",
            "expression-hesitant": "assets/new-character-variants/expressions-v01-20261019/huangqiuqiu/char-huangqiuqiu-expression-hesitant.webp",
            "action-hand": "assets/ten-chapter/huangqiuqiu/char-huangqiuqiu-orb-hand-base.webp"
          },
          "avatarImage": "assets/ten-chapter/huangqiuqiu/avatars/avatar-sphere-base.webp",
          "avatarExpressions": {
            "expression-serious": "assets/ten-chapter/huangqiuqiu/avatars/avatar-sphere-expression-serious.webp",
            "expression-smile": "assets/ten-chapter/huangqiuqiu/avatars/avatar-sphere-expression-smile.webp",
            "expression-hesitant": "assets/ten-chapter/huangqiuqiu/avatars/avatar-sphere-expression-hesitant.webp",
            "action-hand": "assets/ten-chapter/huangqiuqiu/avatars/avatar-sphere-action-hand.webp"
          },
          "presentation": "orb"
        },
        "human": {
          "image": "assets/ten-chapter/huangqiuqiu/char-huangqiuqiu-human-base.webp",
          "expressions": {
            "expression-smile": "assets/ten-chapter/huangqiuqiu/char-huangqiuqiu-human-expression-smile.webp",
            "expression-hesitant": "assets/ten-chapter/huangqiuqiu/char-huangqiuqiu-human-expression-hesitant.webp",
            "expression-serious": "assets/ten-chapter/huangqiuqiu/char-huangqiuqiu-human-expression-serious.webp",
            "expression-downcast": "assets/ten-chapter/huangqiuqiu/char-huangqiuqiu-human-expression-downcast.webp",
            "action-wave": "assets/ten-chapter/huangqiuqiu/char-huangqiuqiu-human-action-wave.webp",
            "action-thinking": "assets/ten-chapter/huangqiuqiu/char-huangqiuqiu-human-chin-base.webp"
          },
          "avatarImage": "assets/ten-chapter/huangqiuqiu/avatars/avatar-human-base.webp",
          "avatarExpressions": {
            "expression-smile": "assets/ten-chapter/huangqiuqiu/avatars/avatar-human-expression-smile.webp",
            "expression-hesitant": "assets/ten-chapter/huangqiuqiu/avatars/avatar-human-expression-hesitant.webp",
            "expression-serious": "assets/ten-chapter/huangqiuqiu/avatars/avatar-human-expression-serious.webp",
            "expression-downcast": "assets/ten-chapter/huangqiuqiu/avatars/avatar-human-expression-downcast.webp",
            "action-wave": "assets/ten-chapter/huangqiuqiu/avatars/avatar-human-action-wave.webp",
            "action-thinking": "assets/ten-chapter/huangqiuqiu/avatars/avatar-human-action-thinking.webp"
          },
          "presentation": "human"
        }
      }
    }
  },
  "backgrounds": {
    "tc-bg-street-day": "assets/background-variants/m2-daynight-20261020/bg-street-day.webp",
    "tc-bg-street-dusk": "assets/ten-chapter/backgrounds/bg-street-dusk.webp",
    "tc-bg-slope-day": "assets/backgrounds/bijie-20261020/bg-residential-slope-day.webp",
    "tc-bg-busstop-day": "assets/backgrounds/bijie-20261020/bg-busstop-day.webp",
    "tc-bg-busstop-dusk": "assets/ten-chapter/backgrounds/bg-busstop-dusk.webp",
    "tc-bg-netcafe-counter-day": "assets/ten-chapter/backgrounds/bg-netcafe-counter-day.webp",
    "tc-bg-netcafe-pc-day": "assets/ten-chapter/backgrounds/bg-netcafe-pc-day-v2.webp",
    "tc-bg-courtyard-day": "assets/ten-chapter/backgrounds/bg-courtyard-day.webp",
    "tc-bg-rental-day": "assets/ten-chapter/backgrounds/bg-rental-day.webp",
    "tc-bg-netcafe-counter-night": "assets/ten-chapter/backgrounds/bg-netcafe-counter-night.webp",
    "tc-bg-netcafe-pc-night": "assets/ten-chapter/backgrounds/bg-netcafe-pc-night.webp",
    "tc-bg-backdoor-night": "assets/ten-chapter/backgrounds/bg-backdoor-night.webp",
    "tc-bg-courtyard-night": "assets/ten-chapter/backgrounds/bg-courtyard-night.webp",
    "tc-bg-rental-night": "assets/ten-chapter/backgrounds/bg-rental-night.webp",
    "tc-bg-breakfast-dawn": "assets/ten-chapter/backgrounds/bg-breakfast-dawn.webp",
    "tc-bg-salon-day": "assets/bg-salon.webp",
    "tc-bg-convenience-day": "assets/ten-chapter/backgrounds/bg-convenience-day.webp",
    "tc-bg-food-day": "assets/ten-chapter/backgrounds/bg-food-day.webp",
    "tc-bg-food-dusk": "assets/backgrounds/bijie-20261020/bg-noodles-dusk.webp",
    "tc-bg-food-night": "assets/bg-noodles.webp",
    "tc-bg-food-front-dusk": "assets/backgrounds/bijie-20261020/bg-noodle-front-dusk.webp",
    "tc-bg-stall-day": "assets/ten-chapter/backgrounds/bg-stall-day.webp",
    "tc-bg-stall-night": "assets/backgrounds/bijie-20261020/bg-market-stall-night.webp",
    "tc-bg-eaves-day": "assets/backgrounds/bijie-20261020/bg-old-eaves-day.webp",
    "tc-bg-echo-day": "assets/ten-chapter/backgrounds/bg-echo-day.webp",
    "tc-bg-echo-closed-day": "assets/ten-chapter/backgrounds/bg-echo-closed-day.webp",
    "tc-bg-bookstore-day": "assets/ten-chapter/backgrounds/bg-bookstore-day-v2.webp",
    "tc-bg-mall-day": "assets/ten-chapter/backgrounds/bg-mall-day.webp",
    "tc-bg-bridge-day": "assets/ten-chapter/backgrounds/bg-bridge-day.webp",
    "tc-bg-park-day": "assets/ten-chapter/backgrounds/bg-park-day.webp",
    "tc-bg-river-day": "assets/ten-chapter/backgrounds/bg-river-day.webp",
    "tc-bg-riverside-lawn-day": "assets/ten-chapter/backgrounds/bg-riverside-lawn-day.webp",
    "tc-bg-alteration-day": "assets/ten-chapter/backgrounds/bg-alteration-day.webp",
    "tc-bg-arcade-basketball": "assets/ten-chapter/backgrounds/bg-arcade-basketball.webp",
    "tc-bg-arcade-airhockey": "assets/ten-chapter/backgrounds/bg-arcade-airhockey.webp",
    "tc-bg-arcade-rowing": "assets/ten-chapter/backgrounds/bg-arcade-rowing.webp",
    "tc-bg-used-books-day": "assets/ten-chapter/backgrounds/bg-used-books-day.webp",
    "tc-bg-used-books-closed-dusk": "assets/ten-chapter/backgrounds/bg-used-books-closed-dusk.webp",
    "tc-bg-cinema-interior": "assets/ten-chapter/backgrounds/bg-cinema-interior.webp",
    "tc-bg-tea-day": "assets/ten-chapter/backgrounds/bg-tea-day.webp",
    "tc-bg-secondhand-day": "assets/ten-chapter/backgrounds/bg-secondhand-day.webp",
    "tc-bg-kiosk-eaves-day": "assets/ten-chapter/backgrounds/bg-kiosk-eaves-day.webp",
    "tc-bg-performance-shop-day": "assets/ten-chapter/backgrounds/bg-performance-shop-day.webp",
    "tc-bg-game-store-day": "assets/ten-chapter/backgrounds/bg-game-store-day.webp",
    "tc-bg-parcel-day": "assets/ten-chapter/backgrounds/bg-parcel-day.webp",
    "tc-bg-supermarket-day": "assets/ten-chapter/backgrounds/bg-supermarket-day.webp",
    "tc-bg-clothing-day": "assets/ten-chapter/backgrounds/bg-clothing-day.webp",
    "tc-bg-practice-room": "assets/ten-chapter/backgrounds/bg-practice-room-blue.webp",
    "tc-bg-tabletennis-day": "assets/ten-chapter/backgrounds/bg-tabletennis-day.webp",
    "tc-bg-badminton-day": "assets/ten-chapter/backgrounds/bg-badminton-day.webp",
    "tc-bg-xiaoman-home-day": "assets/ten-chapter/backgrounds/bg-xiaoman-home-day-v2.webp",
    "tc-bg-maolang-home-day": "assets/ten-chapter/backgrounds/bg-maolang-home-day.webp",
    "tc-bg-banquet-day": "assets/backgrounds/bijie-20261020/bg-noodle-banquet-day.webp",
    "tc-bg-echo-closed-dawn": "assets/ten-chapter/backgrounds/bg-echo-closed-dawn.webp",
    "tc-bg-bridge-dusk": "assets/ten-chapter/backgrounds/bg-bridge-dusk.webp",
    "tc-bg-chapter-end": "none"
  },
  "cgs": {
    "tc-cg-piao-choice": {
      "image": "assets/ten-chapter/cg/cg-piao-choice.webp",
      "name": "这一次讲明白",
      "alt": "这一次讲明白",
      "allowedNodeIds": [
        "tc_c03_piao_say_clearly_002",
        "tc_c03_piao_say_clearly_003",
        "tc_c03_piao_say_clearly_004",
        "tc_c03_piao_say_clearly_005",
        "tc_c03_piao_say_clearly_006",
        "tc_c03_piao_say_clearly_007",
        "tc_c03_piao_say_clearly_008",
        "tc_c03_piao_say_clearly_009",
        "tc_c03_piao_say_clearly_010"
      ],
      "conditions": [
        {
          "flag": "route",
          "value": "piao"
        }
      ],
      "fit": "contain",
      "hideRegularSprites": true
    },
    "tc-cg-last-echo-dinner": {
      "image": "assets/ten-chapter/cg/cg-last-echo-dinner.webp",
      "name": "吃完还要上班",
      "alt": "吃完还要上班",
      "allowedNodeIds": [
        "tc_c06_common_last_night_meal_07",
        "tc_c06_common_last_night_meal_08",
        "tc_c06_common_last_night_meal_09",
        "tc_c06_common_last_night_meal_10"
      ],
      "conditions": [],
      "fit": "contain",
      "hideRegularSprites": true
    },
    "tc-cg-qiuqiu-transform": {
      "image": "assets/ten-chapter/cg/cg-qiuqiu-transform.webp",
      "name": "她自己决定换个模样",
      "alt": "她自己决定换个模样",
      "allowedNodeIds": [
        "tc_c08_huangqiuqiu_her_decision_025",
        "tc_c08_huangqiuqiu_her_decision_026",
        "tc_c08_huangqiuqiu_her_decision_027"
      ],
      "conditions": [
        {
          "flag": "route",
          "value": "huangqiuqiu"
        },
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
        },
        {
          "flag": "qiuForm",
          "value": "human"
        }
      ],
      "requiresEventPreviouslyExecuted": "tc_c08_huangqiuqiu_human_reveal",
      "fit": "contain",
      "hideRegularSprites": true
    },
    "tc-cg-piao-wedding": {
      "image": "assets/ten-chapter/cg/cg-piao-wedding.webp",
      "name": "领子没有歪",
      "alt": "领子没有歪",
      "allowedNodeIds": [
        "tc_c10_common_piao_wedding_04"
      ],
      "conditions": {
        "any": [
          {
            "flag": "route",
            "in": [
              "xiaoman",
              "zhouzhi",
              "mengyao",
              "yelan",
              "friends",
              "huangqiuqiu"
            ]
          },
          {
            "all": [
              {
                "flag": "route",
                "value": "piao"
              },
              {
                "flag": "piaoRelationship",
                "value": "friends"
              }
            ]
          }
        ]
      },
      "fit": "contain",
      "hideRegularSprites": true
    }
  },
  "scenes": {
    "ts_c01_common_arrival_bus": {
      "chapter": 1,
      "title": "第1天·下午｜箱子轮子响得太大",
      "bg": "tc-bg-busstop-day",
      "time": "下午",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "clock": "下午",
        "day": 1
      },
      "location": "公交站牌",
      "day": 1,
      "dayLabel": "第1天"
    },
    "ts_c01_common_arrival_slope": {
      "chapter": 1,
      "title": "箱子轮子响得太大",
      "bg": "tc-bg-slope-day",
      "time": "下午",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "clock": "下午",
        "day": 1
      },
      "location": "坡路",
      "day": 1,
      "dayLabel": "第1天"
    },
    "ts_c01_common_first_shift_talk": {
      "chapter": 1,
      "title": "先把休息讲明白",
      "bg": "tc-bg-netcafe-counter-day",
      "time": "下午",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "clock": "下午",
        "day": 1
      },
      "location": "网吧柜台",
      "day": 1,
      "dayLabel": "第1天"
    },
    "ts_c01_common_three_taps": {
      "chapter": 1,
      "title": "第1天·21:40｜三下轻响",
      "bg": "tc-bg-backdoor-night",
      "time": "21:40",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "clock": "21:40",
        "day": 1
      },
      "location": "网吧后院侧门外",
      "day": 1,
      "dayLabel": "第1天"
    },
    "ts_c01_common_back_to_counter": {
      "chapter": 1,
      "title": "先回柜台",
      "bg": "tc-bg-netcafe-counter-night",
      "time": "21:40",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "clock": "21:40",
        "day": 1
      },
      "location": "网吧门厅与柜台",
      "day": 1,
      "dayLabel": "第1天"
    },
    "ts_c01_common_first_shift": {
      "chapter": 1,
      "title": "第一班",
      "bg": "tc-bg-netcafe-counter-night",
      "time": "22:00",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "clock": "22:00",
        "day": 1
      },
      "location": "网吧柜台",
      "day": 1,
      "dayLabel": "第1天"
    },
    "ts_c01_common_night_greeting": {
      "chapter": 1,
      "title": "预支早上好",
      "bg": "tc-bg-netcafe-counter-night",
      "time": "02:00",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "clock": "02:00",
        "day": 2
      },
      "location": "网吧柜台",
      "day": 2,
      "dayLabel": "第2天"
    },
    "ts_c01_common_dawn_handover": {
      "chapter": 1,
      "title": "六点交班",
      "bg": "tc-bg-netcafe-counter-day",
      "time": "06:00",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "clock": "06:00",
        "day": 2
      },
      "location": "网吧门口",
      "day": 2,
      "dayLabel": "第2天"
    },
    "ts_c01_common_breakfast": {
      "chapter": 1,
      "title": "第2天·06:20｜算不上接风",
      "bg": "tc-bg-breakfast-dawn",
      "time": "06:20",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "clock": "06:20",
        "day": 2
      },
      "location": "早餐店",
      "day": 2,
      "dayLabel": "第2天"
    },
    "ts_c01_common_morning_messages": {
      "chapter": 1,
      "title": "回去睡觉",
      "bg": "tc-bg-rental-day",
      "time": "清晨",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "clock": "清晨",
        "day": 2
      },
      "location": "文文出租屋",
      "day": 2,
      "dayLabel": "第2天"
    },
    "ts_c01_common_salon": {
      "chapter": 1,
      "title": "第3天·16:10｜没有预约的老熟人",
      "bg": "tc-bg-salon-day",
      "time": "16:10",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "clock": "16:10",
        "day": 3
      },
      "location": "理发店",
      "day": 3,
      "dayLabel": "第3天"
    },
    "ts_c01_common_reunion": {
      "chapter": 1,
      "title": "第4天·17:20｜老师也会不耐烦",
      "bg": "tc-bg-convenience-day",
      "time": "17:20",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "clock": "17:20",
        "day": 4
      },
      "location": "便利店",
      "day": 4,
      "dayLabel": "第4天"
    },
    "ts_c01_common_reunion_fork": {
      "chapter": 1,
      "title": "分开前",
      "bg": "tc-bg-slope-day",
      "time": "17:20",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "clock": "17:20",
        "day": 4
      },
      "location": "街道岔路口与坡口",
      "day": 4,
      "dayLabel": "第4天"
    },
    "ts_c01_common_home_game": {
      "chapter": 1,
      "title": "第5天·20:30｜今晚没有班",
      "bg": "tc-bg-rental-night",
      "time": "20:30",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "clock": "20:30",
        "day": 5
      },
      "location": "文文出租屋",
      "day": 5,
      "dayLabel": "第5天"
    },
    "ts_c01_common_noodles": {
      "chapter": 1,
      "title": "第6天·17:30｜辣椒自己放",
      "bg": "tc-bg-food-dusk",
      "time": "17:30",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "clock": "17:30",
        "day": 6
      },
      "location": "街口面馆",
      "day": 6,
      "dayLabel": "第6天"
    },
    "ts_c01_common_piao_meal": {
      "chapter": 1,
      "title": "第7天·17:30｜名字不用介绍第二遍",
      "bg": "tc-bg-food-dusk",
      "time": "17:30",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "clock": "17:30",
        "day": 7
      },
      "location": "约饭小店",
      "day": 7,
      "dayLabel": "第7天"
    },
    "ts_c01_common_two_umbrellas": {
      "chapter": 1,
      "title": "三个人两把伞",
      "bg": "tc-bg-eaves-day",
      "time": "饭后",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "clock": "饭后",
        "day": 7
      },
      "location": "雨中街道及路口",
      "day": 7,
      "dayLabel": "第7天"
    },
    "ts_c01_common_chapter_end": {
      "chapter": 1,
      "title": "第一章 · 凌晨六点的早餐",
      "bg": "tc-bg-chapter-end",
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
    "ts_c02_common_charger": {
      "chapter": 2,
      "title": "第8天·19:40｜还记得的三拍",
      "bg": "tc-bg-netcafe-counter-night",
      "time": "19:40",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "clock": "19:40",
        "day": 8
      },
      "location": "网吧柜台",
      "day": 8,
      "dayLabel": "第8天"
    },
    "ts_c02_common_reply_at_door": {
      "chapter": 2,
      "title": "还记得的三拍",
      "bg": "tc-bg-backdoor-night",
      "time": "19:40",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "clock": "19:40",
        "day": 8
      },
      "location": "网吧后院侧门外",
      "day": 8,
      "dayLabel": "第8天"
    },
    "ts_c02_common_same_sign": {
      "chapter": 2,
      "title": "同一块招牌",
      "bg": "tc-bg-food-front-dusk",
      "time": "19:40",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "clock": "19:40",
        "day": 8
      },
      "location": "坡口面馆外街道",
      "day": 8,
      "dayLabel": "第8天"
    },
    "ts_c02_common_missed_game": {
      "chapter": 2,
      "title": "第10天·20:50｜没赶上开局",
      "bg": "tc-bg-rental-night",
      "time": "20:50",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "clock": "20:50",
        "day": 10
      },
      "location": "文文出租屋",
      "day": 10,
      "dayLabel": "第10天"
    },
    "ts_c02_common_next_meeting": {
      "chapter": 2,
      "title": "下次见面的时间",
      "bg": "tc-bg-rental-night",
      "time": "21:00后",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "clock": "21:00后",
        "day": 10
      },
      "location": "文文出租屋",
      "day": 10,
      "dayLabel": "第10天"
    },
    "ts_c02_common_yelan_first": {
      "chapter": 2,
      "title": "第12天·16:30｜你在语音里不是这样",
      "bg": "tc-bg-food-day",
      "time": "16:30",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "clock": "16:30",
        "day": 12
      },
      "location": "坡口面馆",
      "day": 12,
      "dayLabel": "第12天"
    },
    "ts_c02_common_yelan_walk": {
      "chapter": 2,
      "title": "下回不用等毛狼",
      "bg": "tc-bg-food-day",
      "time": "饭后",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "clock": "饭后",
        "day": 12
      },
      "location": "面馆外沿街和岔路口",
      "day": 12,
      "dayLabel": "第12天"
    },
    "ts_c02_common_friends_meal": {
      "chapter": 2,
      "title": "第14天·18:00｜来的人就先吃",
      "bg": "tc-bg-food-dusk",
      "time": "18:00",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "clock": "18:00",
        "day": 14
      },
      "location": "朋友约饭小店",
      "day": 14,
      "dayLabel": "第14天"
    },
    "ts_c02_common_qiu_arrival": {
      "chapter": 2,
      "title": "门后有人回答",
      "bg": "tc-bg-netcafe-counter-night",
      "time": "20:30",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "clock": "20:30",
        "day": 14
      },
      "location": "网吧柜台过道",
      "day": 14,
      "dayLabel": "第14天"
    },
    "ts_c02_common_qiu_door": {
      "chapter": 2,
      "title": "门后有人回答",
      "bg": "tc-bg-backdoor-night",
      "time": "20:30",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "clock": "20:30",
        "day": 14
      },
      "location": "网吧后院侧门外",
      "day": 14,
      "dayLabel": "第14天"
    },
    "ts_c02_common_qiu_meeting": {
      "chapter": 2,
      "title": "门后有人回答",
      "bg": "tc-bg-courtyard-night",
      "time": "20:30",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "clock": "20:30",
        "day": 14
      },
      "location": "网吧后院",
      "day": 14,
      "dayLabel": "第14天"
    },
    "ts_c02_common_qiu_name_note": {
      "chapter": 2,
      "title": "备忘录上的名字",
      "bg": "tc-bg-rental-night",
      "time": "20:30",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "clock": "20:30",
        "day": 14
      },
      "location": "文文出租屋",
      "day": 14,
      "dayLabel": "第14天"
    },
    "ts_c02_common_chapter_end": {
      "chapter": 2,
      "title": "第二章 · 语音里的那个人",
      "bg": "tc-bg-chapter-end",
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
    "ts_c03_common_invitation": {
      "chapter": 3,
      "title": "第15天·下午｜这回自己开口",
      "bg": "tc-bg-rental-day",
      "time": "下午",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "clock": "下午",
        "day": 15
      },
      "location": "文文出租屋",
      "day": 15,
      "dayLabel": "第15天"
    },
    "ts_c03_common_chapter_end": {
      "chapter": 3,
      "title": "第三章 · 想见你不必有事",
      "bg": "tc-bg-chapter-end",
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
    "ts_c04_common_payday": {
      "chapter": 4,
      "title": "第22天·15:40｜发薪以后",
      "bg": "tc-bg-rental-day",
      "time": "15:40",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "clock": "15:40",
        "day": 22
      },
      "location": "文文出租屋",
      "day": 22,
      "dayLabel": "第22天"
    },
    "ts_c04_common_chapter_end": {
      "chapter": 4,
      "title": "第四章 · 约好的那一天",
      "bg": "tc-bg-chapter-end",
      "time": "章末",
      "chronology": {
        "domain": "chapter-range",
        "mode": "present",
        "label": "第22—24天"
      },
      "location": "",
      "day": null,
      "dayLabel": "第22—24天"
    },
    "ts_c05_common_echo_message": {
      "chapter": 5,
      "title": "第25天·18:10｜回声那条消息",
      "bg": "tc-bg-rental-night",
      "time": "18:10",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "clock": "18:10",
        "day": 25
      },
      "location": "文文出租屋",
      "day": 25,
      "dayLabel": "第25天"
    },
    "ts_c05_common_chapter_end": {
      "chapter": 5,
      "title": "第五章 · 没说出口的困意",
      "bg": "tc-bg-chapter-end",
      "time": "章末",
      "chronology": {
        "domain": "chapter-range",
        "mode": "present",
        "label": "第25—29天"
      },
      "location": "",
      "day": null,
      "dayLabel": "第25—29天"
    },
    "ts_c05_common_missed_game_callback": {
      "chapter": 5,
      "title": "提前把约局说清",
      "bg": "tc-bg-rental-night",
      "time": "晚些时候",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "clock": "晚些时候",
        "day": 25
      },
      "location": "文文出租屋",
      "day": 25,
      "dayLabel": "第25天"
    },
    "ts_c06_common_last_night_meal": {
      "chapter": 6,
      "title": "第30天·18:00｜吃完还要上班",
      "bg": "tc-bg-food-dusk",
      "time": "18:00",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "clock": "18:00",
        "day": 30
      },
      "location": "回声旁小店",
      "day": 30,
      "dayLabel": "第30天"
    },
    "ts_c06_common_chapter_end": {
      "chapter": 6,
      "title": "第六章 · 空出来的一个晚上",
      "bg": "tc-bg-chapter-end",
      "time": "章末",
      "chronology": {
        "domain": "chapter-range",
        "mode": "present",
        "label": "第30—34天"
      },
      "location": "",
      "day": null,
      "dayLabel": "第30—34天"
    },
    "ts_c06_common_meal_goodbye": {
      "chapter": 6,
      "title": "吃完还要上班",
      "bg": "tc-bg-food-dusk",
      "time": "七点多",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "clock": "七点多",
        "day": 30
      },
      "location": "回声旁小店",
      "day": 30,
      "dayLabel": "第30天"
    },
    "ts_c06_common_night_shift": {
      "chapter": 6,
      "title": "按时到岗",
      "bg": "tc-bg-netcafe-counter-night",
      "time": "22:00",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "clock": "22:00",
        "day": 30
      },
      "location": "网吧柜台",
      "day": 30,
      "dayLabel": "第30天"
    },
    "ts_c06_common_after_midnight": {
      "chapter": 6,
      "title": "收工了，回去睡",
      "bg": "tc-bg-netcafe-counter-night",
      "time": "凌晨",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "clock": "凌晨",
        "day": 31
      },
      "location": "网吧柜台",
      "day": 31,
      "dayLabel": "第31天"
    },
    "ts_c06_common_closed_echo": {
      "chapter": 6,
      "title": "招牌还在那里",
      "bg": "tc-bg-echo-closed-day",
      "time": "06:00",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "clock": "06:00",
        "day": 31
      },
      "location": "回声门外与早餐摊",
      "day": 31,
      "dayLabel": "第31天"
    },
    "ts_c07_common_short_game": {
      "chapter": 7,
      "title": "第35天·下午｜群里空下来的一会儿",
      "bg": "tc-bg-rental-day",
      "time": "下午",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "clock": "下午",
        "day": 35
      },
      "location": "文文出租屋",
      "day": 35,
      "dayLabel": "第35天"
    },
    "ts_c07_common_chapter_end": {
      "chapter": 7,
      "title": "第七章 · 各自要过的日子",
      "bg": "tc-bg-chapter-end",
      "time": "章末",
      "chronology": {
        "domain": "chapter-range",
        "mode": "present",
        "label": "第35—45天"
      },
      "location": "",
      "day": null,
      "dayLabel": "第35—45天"
    },
    "ts_c08_common_trial_roster": {
      "chapter": 8,
      "title": "第52天·17:00｜一张椅子坐得下两个人的意见",
      "bg": "tc-bg-netcafe-counter-day",
      "time": "17:00",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "clock": "17:00",
        "day": 52
      },
      "location": "网吧柜台",
      "day": 52,
      "dayLabel": "第52天"
    },
    "ts_c08_common_chapter_end": {
      "chapter": 8,
      "title": "第八章 · 不用每次都逞强",
      "bg": "tc-bg-chapter-end",
      "time": "章末",
      "chronology": {
        "domain": "chapter-range",
        "mode": "present",
        "label": "第46—60天"
      },
      "location": "",
      "day": null,
      "dayLabel": "第46—60天"
    },
    "ts_c09_common_confirmed_roster": {
      "chapter": 9,
      "title": "第61天·下午｜留下来的空格",
      "bg": "tc-bg-netcafe-counter-day",
      "time": "下午",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "clock": "下午",
        "day": 61
      },
      "location": "网吧柜台",
      "day": 61,
      "dayLabel": "第61天"
    },
    "ts_c09_common_chapter_end": {
      "chapter": 9,
      "title": "第九章 · 把明天说具体",
      "bg": "tc-bg-chapter-end",
      "time": "章末",
      "chronology": {
        "domain": "chapter-range",
        "mode": "present",
        "label": "第61—90天"
      },
      "location": "",
      "day": null,
      "dayLabel": "第61—90天"
    },
    "ts_c10_common_daily_life": {
      "chapter": 10,
      "title": "两年后｜仍然要去上班的人",
      "bg": "tc-bg-netcafe-counter-day",
      "time": "两年后",
      "chronology": {
        "domain": "two-years-later",
        "mode": "present",
        "clock": "两年后"
      },
      "location": "网吧柜台",
      "day": null,
      "dayLabel": "两年后"
    },
    "ts_c10_common_piao_dating_meal": {
      "chapter": 10,
      "title": "朋友饭局",
      "bg": "tc-bg-food-day",
      "time": "休班日",
      "chronology": {
        "domain": "two-years-later",
        "mode": "present",
        "clock": "休班日"
      },
      "location": "朋友约饭小店",
      "day": null,
      "dayLabel": "两年后"
    },
    "ts_c10_common_piao_wedding": {
      "chapter": 10,
      "title": "飘与毛狼的婚宴",
      "bg": "tc-bg-banquet-day",
      "time": "婚宴当天",
      "chronology": {
        "domain": "two-years-later",
        "mode": "present",
        "clock": "婚宴当天"
      },
      "location": "普通小店婚宴",
      "day": null,
      "dayLabel": "两年后"
    },
    "ts_c03_xiaoman_salon_visit": {
      "chapter": 3,
      "title": "你是来剪头发的吗",
      "bg": "tc-bg-salon-day",
      "time": "16:10",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 15,
        "clock": "16:10"
      },
      "location": "理发店门口及等候椅",
      "day": 15,
      "dayLabel": "第15天"
    },
    "ts_c03_xiaoman_present_day": {
      "chapter": 3,
      "title": "别只认得小时候的我",
      "bg": "tc-bg-busstop-day",
      "time": "17:20",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 18,
        "clock": "17:20"
      },
      "location": "理发店后公交站",
      "day": 18,
      "dayLabel": "第18天"
    },
    "ts_c03_xiaoman_present_day_street": {
      "chapter": 3,
      "title": "别只认得小时候的我",
      "bg": "tc-bg-street-day",
      "time": "17:20",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 18,
        "clock": "17:20"
      },
      "location": "街道与服装店橱窗",
      "day": 18,
      "dayLabel": "第18天"
    },
    "ts_c03_xiaoman_present_day_busstop": {
      "chapter": 3,
      "title": "别只认得小时候的我",
      "bg": "tc-bg-busstop-dusk",
      "time": "傍晚前",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 18,
        "clock": "傍晚前"
      },
      "location": "拐角公交站",
      "day": 18,
      "dayLabel": "第18天"
    },
    "ts_c03_xiaoman_old_sketch": {
      "chapter": 3,
      "title": "那张画歪的纸",
      "bg": "tc-bg-salon-day",
      "time": "16:40",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 21,
        "clock": "16:40"
      },
      "location": "理发店外",
      "day": 21,
      "dayLabel": "第21天"
    },
    "ts_c03_xiaoman_old_sketch_convenience": {
      "chapter": 3,
      "title": "那张画歪的纸",
      "bg": "tc-bg-convenience-day",
      "time": "16:40",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 21,
        "clock": "16:40"
      },
      "location": "便利店外座椅",
      "day": 21,
      "dayLabel": "第21天"
    },
    "ts_c04_xiaoman_outing": {
      "chapter": 4,
      "title": "今天不谈发型",
      "bg": "tc-bg-rental-day",
      "time": "16:00",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 24,
        "clock": "16:00"
      },
      "location": "文文出租屋至约定路口",
      "day": 24,
      "dayLabel": "第24天"
    },
    "ts_c04_xiaoman_outing_crossroad": {
      "chapter": 4,
      "title": "今天不谈发型",
      "bg": "tc-bg-street-day",
      "time": "16:00",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 24,
        "clock": "16:00"
      },
      "location": "两条街的岔路口",
      "day": 24,
      "dayLabel": "第24天"
    },
    "ts_c04_xiaoman_basketball": {
      "chapter": 4,
      "title": "去投篮机，输的人买水",
      "bg": "tc-bg-arcade-basketball",
      "time": "16:00",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 24,
        "clock": "16:00"
      },
      "location": "游戏厅投篮机区",
      "day": 24,
      "dayLabel": "第24天"
    },
    "ts_c04_xiaoman_basketball_arcade_exit": {
      "chapter": 4,
      "title": "去投篮机，输的人买水",
      "bg": "tc-bg-street-day",
      "time": "16:00",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 24,
        "clock": "16:00"
      },
      "location": "游戏厅外路口",
      "day": 24,
      "dayLabel": "第24天"
    },
    "ts_c04_xiaoman_books": {
      "chapter": 4,
      "title": "去旧书摊，给对方挑一本怪书",
      "bg": "tc-bg-used-books-day",
      "time": "16:00",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 24,
        "clock": "16:00"
      },
      "location": "旧书摊棚下",
      "day": 24,
      "dayLabel": "第24天"
    },
    "ts_c04_xiaoman_before_bus": {
      "chapter": 4,
      "title": "回去之前",
      "bg": "tc-bg-stall-day",
      "time": "17:30",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 24,
        "clock": "17:30"
      },
      "location": "路边烤土豆摊与步行街",
      "day": 24,
      "dayLabel": "第24天"
    },
    "ts_c04_xiaoman_before_bus_busstop": {
      "chapter": 4,
      "title": "回去之前",
      "bg": "tc-bg-busstop-dusk",
      "time": "傍晚前",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 24,
        "clock": "傍晚前"
      },
      "location": "公交站",
      "day": 24,
      "dayLabel": "第24天"
    },
    "ts_c05_xiaoman_parcel": {
      "chapter": 5,
      "title": "那句顺嘴的话",
      "bg": "tc-bg-parcel-day",
      "time": "17:10",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 27,
        "clock": "17:10"
      },
      "location": "快递点门口与货架",
      "day": 27,
      "dayLabel": "第27天"
    },
    "ts_c05_xiaoman_new_coat": {
      "chapter": 5,
      "title": "新外套",
      "bg": "tc-bg-convenience-day",
      "time": "16:30",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 29,
        "clock": "16:30"
      },
      "location": "便利店座椅区",
      "day": 29,
      "dayLabel": "第29天"
    },
    "ts_c06_xiaoman_rest_day": {
      "chapter": 6,
      "title": "没有事也可以坐着",
      "bg": "tc-bg-street-day",
      "time": "15:50",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 32,
        "clock": "15:50"
      },
      "location": "毕节街道/坡口·日间",
      "day": 32,
      "dayLabel": "第32天"
    },
    "ts_c06_xiaoman_rest_day_river": {
      "chapter": 6,
      "title": "没有事也可以坐着",
      "bg": "tc-bg-river-day",
      "time": "15:50",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 32,
        "clock": "15:50"
      },
      "location": "河边避雨台阶",
      "day": 32,
      "dayLabel": "第32天"
    },
    "ts_c06_xiaoman_rest_day_dinner": {
      "chapter": 6,
      "title": "没有事也可以坐着",
      "bg": "tc-bg-food-dusk",
      "time": "傍晚",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 32,
        "clock": "傍晚"
      },
      "location": "小面馆",
      "day": 32,
      "dayLabel": "第32天"
    },
    "ts_c07_xiaoman_her_weekend": {
      "chapter": 7,
      "title": "她的周末",
      "bg": "tc-bg-rental-day",
      "time": "17:00",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 39,
        "clock": "17:00"
      },
      "location": "文文出租屋床/桌/生活角·日",
      "day": 39,
      "dayLabel": "第39天"
    },
    "ts_c07_xiaoman_her_weekend_street": {
      "chapter": 7,
      "title": "她的周末",
      "bg": "tc-bg-street-dusk",
      "time": "傍晚",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 39,
        "clock": "傍晚"
      },
      "location": "街口",
      "day": 39,
      "dayLabel": "第39天"
    },
    "ts_c07_xiaoman_her_weekend_meeting": {
      "chapter": 7,
      "title": "她的周末",
      "bg": "tc-bg-street-dusk",
      "time": "傍晚",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 39,
        "clock": "傍晚"
      },
      "location": "街口",
      "day": 39,
      "dayLabel": "第39天"
    },
    "ts_c07_xiaoman_basketball_return": {
      "chapter": 7,
      "title": "不欠的第三局",
      "bg": "tc-bg-arcade-basketball",
      "time": "傍晚",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 39,
        "clock": "傍晚"
      },
      "location": "游戏厅投篮机·室内",
      "day": 39,
      "dayLabel": "第39天"
    },
    "ts_c07_xiaoman_books_return": {
      "chapter": 7,
      "title": "第二只纸鹤",
      "bg": "tc-bg-used-books-closed-dusk",
      "time": "傍晚",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 39,
        "clock": "傍晚"
      },
      "location": "旧书摊收摊石阶·傍晚",
      "day": 39,
      "dayLabel": "第39天"
    },
    "ts_c07_xiaoman_crossroad": {
      "chapter": 7,
      "title": "七点半的路口",
      "bg": "tc-bg-street-dusk",
      "time": "19:30",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 39,
        "clock": "19:30"
      },
      "location": "毕节街道/坡口·尚亮傍晚",
      "day": 39,
      "dayLabel": "第39天"
    },
    "ts_c08_xiaoman_voice_call": {
      "chapter": 8,
      "title": "今天换我不太行",
      "bg": "tc-bg-rental-day",
      "time": "16:20",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 55,
        "clock": "16:20"
      },
      "location": "文文出租屋床/桌/生活角·日",
      "day": 55,
      "dayLabel": "第55天"
    },
    "ts_c08_xiaoman_badminton": {
      "chapter": 8,
      "title": "错过一球",
      "bg": "tc-bg-badminton-day",
      "time": "17:40",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 59,
        "clock": "17:40"
      },
      "location": "羽毛球馆/场边座椅·日",
      "day": 59,
      "dayLabel": "第59天"
    },
    "ts_c09_xiaoman_relationship": {
      "chapter": 9,
      "title": "先把话说好",
      "bg": "tc-bg-slope-day",
      "time": "16:30",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 68,
        "clock": "16:30"
      },
      "location": "居民坡道与矮墙·日",
      "day": 68,
      "dayLabel": "第68天"
    },
    "ts_c09_xiaoman_dating": {
      "chapter": 9,
      "title": "我想和你交往，不只是约着出去玩",
      "bg": "tc-bg-slope-day",
      "time": "16:30",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 68,
        "clock": "16:30"
      },
      "location": "居民坡道与矮墙·日",
      "day": 68,
      "dayLabel": "第68天"
    },
    "ts_c09_xiaoman_friends": {
      "chapter": 9,
      "title": "我很珍惜你，但现在想把我们放在朋友的位置",
      "bg": "tc-bg-slope-day",
      "time": "16:30",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 68,
        "clock": "16:30"
      },
      "location": "居民坡道与矮墙·日",
      "day": 68,
      "dayLabel": "第68天"
    },
    "ts_c09_xiaoman_friends_busstop": {
      "chapter": 9,
      "title": "我很珍惜你，但现在想把我们放在朋友的位置",
      "bg": "tc-bg-busstop-day",
      "time": "16:30",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 68,
        "clock": "16:30"
      },
      "location": "公交站",
      "day": 68,
      "dayLabel": "第68天"
    },
    "ts_c09_xiaoman_friends_day82": {
      "chapter": 9,
      "title": "我很珍惜你，但现在想把我们放在朋友的位置",
      "bg": "tc-bg-badminton-day",
      "time": "未注明",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 82,
        "clock": "未注明"
      },
      "location": "球馆",
      "day": 82,
      "dayLabel": "第82天"
    },
    "ts_c09_xiaoman_friends_day82_crossroad": {
      "chapter": 9,
      "title": "我很珍惜你，但现在想把我们放在朋友的位置",
      "bg": "tc-bg-street-day",
      "time": "散场后",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 82,
        "clock": "散场后"
      },
      "location": "球馆外路口",
      "day": 82,
      "dayLabel": "第82天"
    },
    "ts_c10_xiaoman_dating": {
      "chapter": 10,
      "title": "恋人结局：先问你有没有空",
      "bg": "tc-bg-xiaoman-home-day",
      "time": "下午",
      "chronology": {
        "domain": "two-years-later",
        "mode": "present",
        "clock": "下午"
      },
      "location": "小满租住房间·两年后日",
      "day": null,
      "dayLabel": "两年后"
    },
    "ts_c10_xiaoman_friends": {
      "chapter": 10,
      "title": "朋友结局：叫我名字就行",
      "bg": "tc-bg-street-day",
      "time": "下午",
      "chronology": {
        "domain": "two-years-later",
        "mode": "present",
        "clock": "下午"
      },
      "location": "毕节街道/坡口·日间",
      "day": null,
      "dayLabel": "两年后"
    },
    "ts_c10_xiaoman_friends_noodles": {
      "chapter": 10,
      "title": "朋友结局：叫我名字就行",
      "bg": "tc-bg-food-day",
      "time": "下午",
      "chronology": {
        "domain": "two-years-later",
        "mode": "present",
        "clock": "下午"
      },
      "location": "面馆",
      "day": null,
      "dayLabel": "两年后"
    },
    "ts_c10_xiaoman_friends_street": {
      "chapter": 10,
      "title": "朋友结局：叫我名字就行",
      "bg": "tc-bg-street-day",
      "time": "下午",
      "chronology": {
        "domain": "two-years-later",
        "mode": "present",
        "clock": "下午"
      },
      "location": "面馆外街道",
      "day": null,
      "dayLabel": "两年后"
    },
    "ts_c10_xiaoman_friends_homeward": {
      "chapter": 10,
      "title": "朋友结局：叫我名字就行",
      "bg": "tc-bg-street-day",
      "time": "下午",
      "chronology": {
        "domain": "two-years-later",
        "mode": "present",
        "clock": "下午"
      },
      "location": "回家路上",
      "day": null,
      "dayLabel": "两年后"
    },
    "ts_c03_zhouzhi_umbrella": {
      "chapter": 3,
      "title": "还没到上班时间",
      "bg": "tc-bg-rental-day",
      "time": "17:20",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 15,
        "clock": "17:20"
      },
      "location": "文文出租屋",
      "day": 15,
      "dayLabel": "第15天"
    },
    "ts_c03_zhouzhi_umbrella_meeting": {
      "chapter": 3,
      "title": "还没到上班时间",
      "bg": "tc-bg-echo-day",
      "time": "17:20",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 15,
        "clock": "17:20"
      },
      "location": "回声门外街边",
      "day": 15,
      "dayLabel": "第15天"
    },
    "ts_c03_zhouzhi_umbrella_umbrella_shop": {
      "chapter": 3,
      "title": "还没到上班时间",
      "bg": "tc-bg-convenience-day",
      "time": "17:20",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 15,
        "clock": "17:20"
      },
      "location": "卖伞小店门口",
      "day": 15,
      "dayLabel": "第15天"
    },
    "ts_c03_zhouzhi_umbrella_potstickers": {
      "chapter": 3,
      "title": "还没到上班时间",
      "bg": "tc-bg-stall-day",
      "time": "17:20",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 15,
        "clock": "17:20"
      },
      "location": "锅贴摊外",
      "day": 15,
      "dayLabel": "第15天"
    },
    "ts_c03_zhouzhi_umbrella_street": {
      "chapter": 3,
      "title": "还没到上班时间",
      "bg": "tc-bg-street-dusk",
      "time": "傍晚前",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 15,
        "clock": "傍晚前"
      },
      "location": "街口",
      "day": 15,
      "dayLabel": "第15天"
    },
    "ts_c03_zhouzhi_bookstore": {
      "chapter": 3,
      "title": "不好笑就不笑",
      "bg": "tc-bg-bookstore-day",
      "time": "16:30",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 18,
        "clock": "16:30"
      },
      "location": "商场书店靠窗阅读座",
      "day": 18,
      "dayLabel": "第18天"
    },
    "ts_c03_zhouzhi_bookstore_drinks": {
      "chapter": 3,
      "title": "不好笑就不笑",
      "bg": "tc-bg-mall-day",
      "time": "傍晚",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 18,
        "clock": "傍晚"
      },
      "location": "商场热饮座位",
      "day": 18,
      "dayLabel": "第18天"
    },
    "ts_c03_zhouzhi_invitation": {
      "chapter": 3,
      "title": "是我想约你",
      "bg": "tc-bg-food-day",
      "time": "17:00",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 21,
        "clock": "17:00"
      },
      "location": "街口小面馆",
      "day": 21,
      "dayLabel": "第21天"
    },
    "ts_c04_zhouzhi_outing": {
      "chapter": 4,
      "title": "轮到你选",
      "bg": "tc-bg-food-day",
      "time": "16:10",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 23,
        "clock": "16:10"
      },
      "location": "约定小店门口",
      "day": 23,
      "dayLabel": "第23天"
    },
    "ts_c04_zhouzhi_river": {
      "chapter": 4,
      "title": "沿河走走，轮流放一首想听的歌",
      "bg": "tc-bg-river-day",
      "time": "16:10",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 23,
        "clock": "16:10"
      },
      "location": "河边步道与空长椅",
      "day": 23,
      "dayLabel": "第23天"
    },
    "ts_c04_zhouzhi_cinema": {
      "chapter": 4,
      "title": "去影院，允许我们喜欢不同的东西",
      "bg": "tc-bg-cinema-interior",
      "time": "16:10",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 23,
        "clock": "16:10"
      },
      "location": "电影院观众席靠过道",
      "day": 23,
      "dayLabel": "第23天"
    },
    "ts_c04_zhouzhi_cinema_mall": {
      "chapter": 4,
      "title": "去影院，允许我们喜欢不同的东西",
      "bg": "tc-bg-mall-day",
      "time": "散场后",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 23,
        "clock": "散场后"
      },
      "location": "商场电梯与一楼",
      "day": 23,
      "dayLabel": "第23天"
    },
    "ts_c04_zhouzhi_before_work": {
      "chapter": 4,
      "title": "不必把一天用满",
      "bg": "tc-bg-food-dusk",
      "time": "傍晚",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 23,
        "clock": "傍晚"
      },
      "location": "街角馄饨小店",
      "day": 23,
      "dayLabel": "第23天"
    },
    "ts_c04_zhouzhi_before_work_crossroad": {
      "chapter": 4,
      "title": "不必把一天用满",
      "bg": "tc-bg-street-dusk",
      "time": "傍晚",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 23,
        "clock": "傍晚"
      },
      "location": "人行路口",
      "day": 23,
      "dayLabel": "第23天"
    },
    "ts_c05_zhouzhi_unexpected_company": {
      "chapter": 5,
      "title": "你今天也在上班吗",
      "bg": "tc-bg-food-day",
      "time": "17:30",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 26,
        "clock": "17:30"
      },
      "location": "约饭门口与附近饭店",
      "day": 26,
      "dayLabel": "第26天"
    },
    "ts_c05_zhouzhi_unexpected_company_busstop": {
      "chapter": 5,
      "title": "你今天也在上班吗",
      "bg": "tc-bg-busstop-dusk",
      "time": "傍晚",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 26,
        "clock": "傍晚"
      },
      "location": "车站",
      "day": 26,
      "dayLabel": "第26天"
    },
    "ts_c05_zhouzhi_two_seats": {
      "chapter": 5,
      "title": "先留两个人的位置",
      "bg": "tc-bg-food-day",
      "time": "16:50",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 29,
        "clock": "16:50"
      },
      "location": "普通面馆双人桌",
      "day": 29,
      "dayLabel": "第29天"
    },
    "ts_c06_zhouzhi_after_closing": {
      "chapter": 6,
      "title": "绕过那个门口",
      "bg": "tc-bg-street-day",
      "time": "17:10",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 32,
        "clock": "17:10"
      },
      "location": "毕节街道/坡口·日间",
      "day": 32,
      "dayLabel": "第32天"
    },
    "ts_c06_zhouzhi_after_closing_closed_echo": {
      "chapter": 6,
      "title": "绕过那个门口",
      "bg": "tc-bg-echo-closed-day",
      "time": "17:10",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 32,
        "clock": "17:10"
      },
      "location": "通向回声的路口",
      "day": 32,
      "dayLabel": "第32天"
    },
    "ts_c06_zhouzhi_after_closing_supermarket": {
      "chapter": 6,
      "title": "绕过那个门口",
      "bg": "tc-bg-supermarket-day",
      "time": "17:10",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 32,
        "clock": "17:10"
      },
      "location": "超市日用品区",
      "day": 32,
      "dayLabel": "第32天"
    },
    "ts_c06_zhouzhi_after_closing_soymilk": {
      "chapter": 6,
      "title": "绕过那个门口",
      "bg": "tc-bg-street-day",
      "time": "17:10",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 32,
        "clock": "17:10"
      },
      "location": "超市外座位",
      "day": 32,
      "dayLabel": "第32天"
    },
    "ts_c06_zhouzhi_after_closing_accessories": {
      "chapter": 6,
      "title": "绕过那个门口",
      "bg": "tc-bg-clothing-day",
      "time": "17:10",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 32,
        "clock": "17:10"
      },
      "location": "饰品店门口",
      "day": 32,
      "dayLabel": "第32天"
    },
    "ts_c07_zhouzhi_her_plans": {
      "chapter": 7,
      "title": "她也有别的约",
      "bg": "tc-bg-street-day",
      "time": "16:40",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 43,
        "clock": "16:40"
      },
      "location": "毕节街道/坡口·日间",
      "day": 43,
      "dayLabel": "第43天"
    },
    "ts_c07_zhouzhi_river_return": {
      "chapter": 7,
      "title": "今天的歌很吵",
      "bg": "tc-bg-river-day",
      "time": "16:40",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 43,
        "clock": "16:40"
      },
      "location": "河边步道/长椅/避雨台阶·日",
      "day": 43,
      "dayLabel": "第43天"
    },
    "ts_c07_zhouzhi_cinema_return": {
      "chapter": 7,
      "title": "这回我挑片",
      "bg": "tc-bg-cinema-interior",
      "time": "16:40",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 43,
        "clock": "16:40"
      },
      "location": "电影院观众席过道/散场",
      "day": 43,
      "dayLabel": "第43天"
    },
    "ts_c07_zhouzhi_crossroad": {
      "chapter": 7,
      "title": "不是接送任务",
      "bg": "tc-bg-street-dusk",
      "time": "傍晚",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 43,
        "clock": "傍晚"
      },
      "location": "毕节街道/坡口·尚亮傍晚",
      "day": 43,
      "dayLabel": "第43天"
    },
    "ts_c08_zhouzhi_dinner_budget": {
      "chapter": 8,
      "title": "够不够，不用藏着算",
      "bg": "tc-bg-food-day",
      "time": "17:20",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 57,
        "clock": "17:20"
      },
      "location": "漂亮饭店门口",
      "day": 57,
      "dayLabel": "第57天"
    },
    "ts_c08_zhouzhi_dinner_budget_simple_dinner": {
      "chapter": 8,
      "title": "够不够，不用藏着算",
      "bg": "tc-bg-food-dusk",
      "time": "傍晚",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 57,
        "clock": "傍晚"
      },
      "location": "小锅饭店",
      "day": 57,
      "dayLabel": "第57天"
    },
    "ts_c08_zhouzhi_dinner_budget_soymilk": {
      "chapter": 8,
      "title": "够不够，不用藏着算",
      "bg": "tc-bg-street-dusk",
      "time": "傍晚",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 57,
        "clock": "傍晚"
      },
      "location": "小锅饭店外街边",
      "day": 57,
      "dayLabel": "第57天"
    },
    "ts_c09_zhouzhi_relationship": {
      "chapter": 9,
      "title": "吃完饭，话还没说完",
      "bg": "tc-bg-food-dusk",
      "time": "18:10",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 75,
        "clock": "18:10"
      },
      "location": "普通小食店/面馆·暮色",
      "day": 75,
      "dayLabel": "第75天"
    },
    "ts_c09_zhouzhi_dating": {
      "chapter": 9,
      "title": "愿意。我也想把你放进以后的安排里",
      "bg": "tc-bg-food-dusk",
      "time": "18:10",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 75,
        "clock": "18:10"
      },
      "location": "普通小食店/面馆·暮色",
      "day": 75,
      "dayLabel": "第75天"
    },
    "ts_c09_zhouzhi_dating_eaves": {
      "chapter": 9,
      "title": "愿意。我也想把你放进以后的安排里",
      "bg": "tc-bg-eaves-day",
      "time": "饭后",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 75,
        "clock": "饭后"
      },
      "location": "河边小馆外屋檐",
      "day": 75,
      "dayLabel": "第75天"
    },
    "ts_c09_zhouzhi_friends": {
      "chapter": 9,
      "title": "谢谢你告诉我，但我想继续做朋友",
      "bg": "tc-bg-food-dusk",
      "time": "18:10",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 75,
        "clock": "18:10"
      },
      "location": "普通小食店/面馆·暮色",
      "day": 75,
      "dayLabel": "第75天"
    },
    "ts_c09_zhouzhi_friends_day88": {
      "chapter": 9,
      "title": "谢谢你告诉我，但我想继续做朋友",
      "bg": "tc-bg-food-dusk",
      "time": "未注明",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 88,
        "clock": "未注明"
      },
      "location": "朋友聚餐的小店",
      "day": 88,
      "dayLabel": "第88天"
    },
    "ts_c09_zhouzhi_friends_day88_crossroad": {
      "chapter": 9,
      "title": "谢谢你告诉我，但我想继续做朋友",
      "bg": "tc-bg-street-dusk",
      "time": "散场后",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 88,
        "clock": "散场后"
      },
      "location": "聚餐后的路口",
      "day": 88,
      "dayLabel": "第88天"
    },
    "ts_c10_zhouzhi_dating": {
      "chapter": 10,
      "title": "恋人结局：你先吃，我一会儿到",
      "bg": "tc-bg-food-dusk",
      "time": "傍晚",
      "chronology": {
        "domain": "two-years-later",
        "mode": "present",
        "clock": "傍晚"
      },
      "location": "普通小食店/面馆·暮色",
      "day": null,
      "dayLabel": "两年后"
    },
    "ts_c10_zhouzhi_dating_homeward": {
      "chapter": 10,
      "title": "恋人结局：你先吃，我一会儿到",
      "bg": "tc-bg-street-dusk",
      "time": "饭后",
      "chronology": {
        "domain": "two-years-later",
        "mode": "present",
        "clock": "饭后"
      },
      "location": "去周栀住处的路上",
      "day": null,
      "dayLabel": "两年后"
    },
    "ts_c10_zhouzhi_dating_eaves": {
      "chapter": 10,
      "title": "恋人结局：你先吃，我一会儿到",
      "bg": "tc-bg-eaves-day",
      "time": "饭后",
      "chronology": {
        "domain": "two-years-later",
        "mode": "present",
        "clock": "饭后"
      },
      "location": "周栀住处外屋檐",
      "day": null,
      "dayLabel": "两年后"
    },
    "ts_c10_zhouzhi_friends": {
      "chapter": 10,
      "title": "朋友结局：还有一张椅子",
      "bg": "tc-bg-stall-night",
      "time": "夜间",
      "chronology": {
        "domain": "two-years-later",
        "mode": "present",
        "clock": "夜间"
      },
      "location": "夜宵摊·夜",
      "day": null,
      "dayLabel": "两年后"
    },
    "ts_c10_zhouzhi_friends_street": {
      "chapter": 10,
      "title": "朋友结局：还有一张椅子",
      "bg": "tc-bg-street-dusk",
      "time": "夜间",
      "chronology": {
        "domain": "two-years-later",
        "mode": "present",
        "clock": "夜间"
      },
      "location": "夜宵摊外街口",
      "day": null,
      "dayLabel": "两年后"
    },
    "ts_c10_zhouzhi_friends_back_to_stall": {
      "chapter": 10,
      "title": "朋友结局：还有一张椅子",
      "bg": "tc-bg-stall-night",
      "time": "夜间",
      "chronology": {
        "domain": "two-years-later",
        "mode": "present",
        "clock": "夜间"
      },
      "location": "夜宵摊",
      "day": null,
      "dayLabel": "两年后"
    },
    "ts_c03_mengyao_flatbread": {
      "chapter": 3,
      "title": "这次不算顺路",
      "bg": "tc-bg-rental-day",
      "time": "17:20",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 15,
        "clock": "17:20"
      },
      "location": "文文出租屋",
      "day": 15,
      "dayLabel": "第15天"
    },
    "ts_c03_mengyao_flatbread_bakery": {
      "chapter": 3,
      "title": "这次不算顺路",
      "bg": "tc-bg-bridge-day",
      "time": "17:20",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 15,
        "clock": "17:20"
      },
      "location": "桥头烧饼店门口",
      "day": 15,
      "dayLabel": "第15天"
    },
    "ts_c03_mengyao_flatbread_steps": {
      "chapter": 3,
      "title": "这次不算顺路",
      "bg": "tc-bg-bridge-day",
      "time": "17:20",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 15,
        "clock": "17:20"
      },
      "location": "桥边干燥台阶",
      "day": 15,
      "dayLabel": "第15天"
    },
    "ts_c03_mengyao_coop_game": {
      "chapter": 3,
      "title": "并不熟练的双人游戏",
      "bg": "tc-bg-netcafe-counter-day",
      "time": "18:10",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 18,
        "clock": "18:10"
      },
      "location": "网吧柜台",
      "day": 18,
      "dayLabel": "第18天"
    },
    "ts_c03_mengyao_coop_game_computers": {
      "chapter": 3,
      "title": "并不熟练的双人游戏",
      "bg": "tc-bg-netcafe-pc-day",
      "time": "18:10",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 18,
        "clock": "18:10"
      },
      "location": "网吧相邻机位",
      "day": 18,
      "dayLabel": "第18天"
    },
    "ts_c03_mengyao_coop_game_checkout": {
      "chapter": 3,
      "title": "并不熟练的双人游戏",
      "bg": "tc-bg-netcafe-counter-night",
      "time": "19:30",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 18,
        "clock": "19:30"
      },
      "location": "网吧柜台",
      "day": 18,
      "dayLabel": "第18天"
    },
    "ts_c03_mengyao_coop_game_outside": {
      "chapter": 3,
      "title": "并不熟练的双人游戏",
      "bg": "tc-bg-street-dusk",
      "time": "19:30后",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 18,
        "clock": "19:30后"
      },
      "location": "网吧门外",
      "day": 18,
      "dayLabel": "第18天"
    },
    "ts_c03_mengyao_new_meeting": {
      "chapter": 3,
      "title": "不能直接续上的那一句",
      "bg": "tc-bg-food-day",
      "time": "16:40",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 21,
        "clock": "16:40"
      },
      "location": "书店旁小面馆",
      "day": 21,
      "dayLabel": "第21天"
    },
    "ts_c03_mengyao_new_meeting_crossroad": {
      "chapter": 3,
      "title": "不能直接续上的那一句",
      "bg": "tc-bg-street-day",
      "time": "16:40",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 21,
        "clock": "16:40"
      },
      "location": "面馆楼梯至分路口",
      "day": 21,
      "dayLabel": "第21天"
    },
    "ts_c04_mengyao_outing": {
      "chapter": 4,
      "title": "重新挑一件喜欢的事",
      "bg": "tc-bg-street-day",
      "time": "15:30",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 24,
        "clock": "15:30"
      },
      "location": "旧书摊与商场街机厅方向的岔路",
      "day": 24,
      "dayLabel": "第24天"
    },
    "ts_c04_mengyao_books": {
      "chapter": 4,
      "title": "去旧书摊，各挑一本没看过的书",
      "bg": "tc-bg-used-books-day",
      "time": "15:30",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 24,
        "clock": "15:30"
      },
      "location": "旧书摊",
      "day": 24,
      "dayLabel": "第24天"
    },
    "ts_c04_mengyao_books_tea": {
      "chapter": 4,
      "title": "去旧书摊，各挑一本没看过的书",
      "bg": "tc-bg-tea-day",
      "time": "15:30",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 24,
        "clock": "15:30"
      },
      "location": "旧书摊旁茶店",
      "day": 24,
      "dayLabel": "第24天"
    },
    "ts_c04_mengyao_books_return": {
      "chapter": 4,
      "title": "去旧书摊，各挑一本没看过的书",
      "bg": "tc-bg-street-day",
      "time": "15:30",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 24,
        "clock": "15:30"
      },
      "location": "回程街道",
      "day": 24,
      "dayLabel": "第24天"
    },
    "ts_c04_mengyao_arcade": {
      "chapter": 4,
      "title": "去街机厅，试一个谁都不擅长的项目",
      "bg": "tc-bg-arcade-airhockey",
      "time": "15:30",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 24,
        "clock": "15:30"
      },
      "location": "商场街机厅气垫球桌",
      "day": 24,
      "dayLabel": "第24天"
    },
    "ts_c04_mengyao_arcade_arcade_exit": {
      "chapter": 4,
      "title": "去街机厅，试一个谁都不擅长的项目",
      "bg": "tc-bg-street-day",
      "time": "15:30",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 24,
        "clock": "15:30"
      },
      "location": "街机厅门口",
      "day": 24,
      "dayLabel": "第24天"
    },
    "ts_c04_mengyao_busstop": {
      "chapter": 4,
      "title": "本章汇合",
      "bg": "tc-bg-busstop-day",
      "time": "天还亮着",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 24,
        "clock": "天还亮着"
      },
      "location": "公交站",
      "day": 24,
      "dayLabel": "第24天"
    },
    "ts_c04_mengyao_busstop_leaving": {
      "chapter": 4,
      "title": "本章汇合",
      "bg": "tc-bg-busstop-day",
      "time": "天还亮着",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 24,
        "clock": "天还亮着"
      },
      "location": "公交站",
      "day": 24,
      "dayLabel": "第24天"
    },
    "ts_c05_mengyao_hurt_joke": {
      "chapter": 5,
      "title": "一句玩笑碰到旧地方",
      "bg": "tc-bg-food-day",
      "time": "17:50",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 27,
        "clock": "17:50"
      },
      "location": "卖粥小店",
      "day": 27,
      "dayLabel": "第27天"
    },
    "ts_c05_mengyao_hurt_joke_porridge": {
      "chapter": 5,
      "title": "一句玩笑碰到旧地方",
      "bg": "tc-bg-food-day",
      "time": "17:50",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 27,
        "clock": "17:50"
      },
      "location": "卖粥小店",
      "day": 27,
      "dayLabel": "第27天"
    },
    "ts_c05_mengyao_hurt_joke_crossroad": {
      "chapter": 5,
      "title": "一句玩笑碰到旧地方",
      "bg": "tc-bg-street-dusk",
      "time": "饭后",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 27,
        "clock": "饭后"
      },
      "location": "饭后街口",
      "day": 27,
      "dayLabel": "第27天"
    },
    "ts_c05_mengyao_listen_again": {
      "chapter": 5,
      "title": "你也可以听错",
      "bg": "tc-bg-rental-day",
      "time": "16:30",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 29,
        "clock": "16:30"
      },
      "location": "文文出租屋／手机消息",
      "day": 29,
      "dayLabel": "第29天"
    },
    "ts_c05_mengyao_listen_again_tofu": {
      "chapter": 5,
      "title": "你也可以听错",
      "bg": "tc-bg-food-day",
      "time": "16:30",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 29,
        "clock": "16:30"
      },
      "location": "豆花店门口及遮阳棚座",
      "day": 29,
      "dayLabel": "第29天"
    },
    "ts_c06_mengyao_after_dinner": {
      "chapter": 6,
      "title": "饭后各有一段路（第30天饭后补叙）",
      "bg": "tc-bg-busstop-dusk",
      "time": "19:20",
      "chronology": {
        "domain": "story-day",
        "mode": "flashback",
        "day": 30,
        "clock": "19:20"
      },
      "location": "公交站·傍晚",
      "day": 30,
      "dayLabel": "第30天"
    },
    "ts_c06_mengyao_after_dinner_dawn_photo": {
      "chapter": 6,
      "title": "饭后各有一段路",
      "bg": "tc-bg-netcafe-counter-night",
      "time": "临近天亮",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 31,
        "clock": "临近天亮",
        "label": "夜班概述后转入第31天手机照片；不再演出饭局"
      },
      "location": "网吧柜台",
      "day": 31,
      "dayLabel": "第31天"
    },
    "ts_c06_mengyao_singing": {
      "chapter": 6,
      "title": "她也不是每首都会唱",
      "bg": "tc-bg-practice-room",
      "time": "16:10",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 32,
        "clock": "16:10"
      },
      "location": "按时计费小练歌房·室内",
      "day": 32,
      "dayLabel": "第32天"
    },
    "ts_c06_mengyao_singing_rain_walk": {
      "chapter": 6,
      "title": "她也不是每首都会唱",
      "bg": "tc-bg-street-day",
      "time": "离开练歌房后",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 32,
        "clock": "离开练歌房后"
      },
      "location": "练歌房外雨中街道",
      "day": 32,
      "dayLabel": "第32天"
    },
    "ts_c07_mengyao_her_friends": {
      "chapter": 7,
      "title": "没有我的那一桌",
      "bg": "tc-bg-food-day",
      "time": "17:10",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 39,
        "clock": "17:10"
      },
      "location": "饭店门口",
      "day": 39,
      "dayLabel": "第39天"
    },
    "ts_c07_mengyao_books_return": {
      "chapter": 7,
      "title": "旧书摊",
      "bg": "tc-bg-tea-day",
      "time": "16:30",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 43,
        "clock": "16:30"
      },
      "location": "茶店桌游/看书桌位·日",
      "day": 43,
      "dayLabel": "第43天"
    },
    "ts_c07_mengyao_arcade_return": {
      "chapter": 7,
      "title": "街机厅",
      "bg": "tc-bg-arcade-rowing",
      "time": "16:30",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 43,
        "clock": "16:30"
      },
      "location": "游戏厅双人划船·室内",
      "day": 43,
      "dayLabel": "第43天"
    },
    "ts_c07_mengyao_crossroad": {
      "chapter": 7,
      "title": "本章汇合",
      "bg": "tc-bg-street-day",
      "time": "16:30",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 43,
        "clock": "16:30"
      },
      "location": "毕节街道/坡口·日间",
      "day": 43,
      "dayLabel": "第43天"
    },
    "ts_c08_mengyao_rest_together": {
      "chapter": 8,
      "title": "今天不当能干的人",
      "bg": "tc-bg-tea-day",
      "time": "16:00",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 54,
        "clock": "16:00"
      },
      "location": "茶店桌游/看书桌位·日",
      "day": 54,
      "dayLabel": "第54天"
    },
    "ts_c08_mengyao_rest_together_tea": {
      "chapter": 8,
      "title": "今天不当能干的人",
      "bg": "tc-bg-tea-day",
      "time": "16:00",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 54,
        "clock": "16:00"
      },
      "location": "可以借桌游的茶店",
      "day": 54,
      "dayLabel": "第54天"
    },
    "ts_c08_mengyao_rest_together_checkout": {
      "chapter": 8,
      "title": "今天不当能干的人",
      "bg": "tc-bg-tea-day",
      "time": "结账后",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 54,
        "clock": "结账后"
      },
      "location": "茶店结账处与门口",
      "day": 54,
      "dayLabel": "第54天"
    },
    "ts_c09_mengyao_relationship": {
      "chapter": 9,
      "title": "从现在开始答",
      "bg": "tc-bg-bridge-day",
      "time": "17:30",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 68,
        "clock": "17:30"
      },
      "location": "桥头烧饼店/桥边台阶·日",
      "day": 68,
      "dayLabel": "第68天"
    },
    "ts_c09_mengyao_relationship_bakery": {
      "chapter": 9,
      "title": "从现在开始答",
      "bg": "tc-bg-bridge-day",
      "time": "17:30",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 68,
        "clock": "17:30"
      },
      "location": "桥头烧饼店",
      "day": 68,
      "dayLabel": "第68天"
    },
    "ts_c09_mengyao_relationship_steps": {
      "chapter": 9,
      "title": "从现在开始答",
      "bg": "tc-bg-bridge-day",
      "time": "17:30",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 68,
        "clock": "17:30"
      },
      "location": "桥边台阶",
      "day": 68,
      "dayLabel": "第68天"
    },
    "ts_c09_mengyao_dating": {
      "chapter": 9,
      "title": "这一次，也请认识我",
      "bg": "tc-bg-bridge-day",
      "time": "17:30",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 68,
        "clock": "17:30"
      },
      "location": "桥边台阶",
      "day": 68,
      "dayLabel": "第68天"
    },
    "ts_c09_mengyao_dating_walk": {
      "chapter": 9,
      "title": "这一次，也请认识我",
      "bg": "tc-bg-bridge-day",
      "time": "17:30",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 68,
        "clock": "17:30"
      },
      "location": "桥下步道",
      "day": 68,
      "dayLabel": "第68天"
    },
    "ts_c09_mengyao_friends": {
      "chapter": 9,
      "title": "把熟悉放到别处",
      "bg": "tc-bg-bridge-day",
      "time": "17:30",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 68,
        "clock": "17:30"
      },
      "location": "桥边台阶",
      "day": 68,
      "dayLabel": "第68天"
    },
    "ts_c09_mengyao_friends_day81": {
      "chapter": 9,
      "title": "把熟悉放到别处",
      "bg": "tc-bg-rental-day",
      "time": "未注明",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 81,
        "clock": "未注明",
        "label": "第81天群聊；随后约饭的日期与地点未注明，不新增精确日期"
      },
      "location": "群聊／私信；后续朋友约饭以旁白概述",
      "day": 81,
      "dayLabel": "第81天"
    },
    "ts_c10_mengyao_dating": {
      "chapter": 10,
      "title": "一份新的错误记录",
      "bg": "tc-bg-tea-day",
      "time": "16:20",
      "chronology": {
        "domain": "two-years-later",
        "mode": "present",
        "clock": "16:20"
      },
      "location": "约定茶店门口",
      "day": null,
      "dayLabel": "两年后"
    },
    "ts_c10_mengyao_dating_new_shop": {
      "chapter": 10,
      "title": "一份新的错误记录",
      "bg": "tc-bg-tea-day",
      "time": "16:20",
      "chronology": {
        "domain": "two-years-later",
        "mode": "present",
        "clock": "16:20"
      },
      "location": "另一家可借双人桌游的小店",
      "day": null,
      "dayLabel": "两年后"
    },
    "ts_c10_mengyao_friends": {
      "chapter": 10,
      "title": "不用重考的一门课",
      "bg": "tc-bg-food-dusk",
      "time": "17:40",
      "chronology": {
        "domain": "two-years-later",
        "mode": "present",
        "clock": "17:40"
      },
      "location": "普通小食店/面馆·暮色",
      "day": null,
      "dayLabel": "两年后"
    },
    "ts_c10_mengyao_friends_outside": {
      "chapter": 10,
      "title": "不用重考的一门课",
      "bg": "tc-bg-street-dusk",
      "time": "散场后",
      "chronology": {
        "domain": "two-years-later",
        "mode": "present",
        "clock": "散场后"
      },
      "location": "聚餐后街口",
      "day": null,
      "dayLabel": "两年后"
    },
    "ts_c10_mengyao_friends_parting": {
      "chapter": 10,
      "title": "不用重考的一门课",
      "bg": "tc-bg-street-dusk",
      "time": "散场后",
      "chronology": {
        "domain": "two-years-later",
        "mode": "present",
        "clock": "散场后"
      },
      "location": "分路后的街道",
      "day": null,
      "dayLabel": "两年后"
    },
    "ts_c10_mengyao_friends_bakery": {
      "chapter": 10,
      "title": "不用重考的一门课",
      "bg": "tc-bg-bridge-day",
      "time": "散场后",
      "chronology": {
        "domain": "two-years-later",
        "mode": "present",
        "clock": "散场后"
      },
      "location": "烧饼店",
      "day": null,
      "dayLabel": "两年后"
    },
    "ts_c03_yelan_second_meeting": {
      "chapter": 3,
      "title": "面已经吃过了",
      "bg": "tc-bg-rental-day",
      "time": "18:20",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 15,
        "clock": "18:20"
      },
      "location": "文文出租屋／手机消息",
      "day": 15,
      "dayLabel": "第15天"
    },
    "ts_c03_yelan_second_meeting_meeting": {
      "chapter": 3,
      "title": "面已经吃过了",
      "bg": "tc-bg-street-dusk",
      "time": "18:20",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 15,
        "clock": "18:20"
      },
      "location": "街道路口",
      "day": 15,
      "dayLabel": "第15天"
    },
    "ts_c03_yelan_second_meeting_fruit": {
      "chapter": 3,
      "title": "面已经吃过了",
      "bg": "tc-bg-stall-day",
      "time": "18:20",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 15,
        "clock": "18:20"
      },
      "location": "街边水果摊及长椅",
      "day": 15,
      "dayLabel": "第15天"
    },
    "ts_c03_yelan_second_meeting_crossroad": {
      "chapter": 3,
      "title": "面已经吃过了",
      "bg": "tc-bg-street-dusk",
      "time": "18:20",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 15,
        "clock": "18:20"
      },
      "location": "街道岔路",
      "day": 15,
      "dayLabel": "第15天"
    },
    "ts_c03_yelan_voice_game": {
      "chapter": 3,
      "title": "她也会把门走反",
      "bg": "tc-bg-netcafe-pc-night",
      "time": "19:10",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 18,
        "clock": "19:10"
      },
      "location": "网吧单机位",
      "day": 18,
      "dayLabel": "第18天"
    },
    "ts_c03_yelan_voice_game_logoff": {
      "chapter": 3,
      "title": "她也会把门走反",
      "bg": "tc-bg-netcafe-pc-night",
      "time": "21:00前",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 18,
        "clock": "21:00前"
      },
      "location": "网吧机位",
      "day": 18,
      "dayLabel": "第18天"
    },
    "ts_c03_yelan_quiet_park": {
      "chapter": 3,
      "title": "不用一直有声音",
      "bg": "tc-bg-park-day",
      "time": "17:50",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 21,
        "clock": "17:50"
      },
      "location": "公园入口及树荫小路",
      "day": 21,
      "dayLabel": "第21天"
    },
    "ts_c03_yelan_quiet_park_bench": {
      "chapter": 3,
      "title": "不用一直有声音",
      "bg": "tc-bg-park-day",
      "time": "17:50",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 21,
        "clock": "17:50"
      },
      "location": "公园长椅",
      "day": 21,
      "dayLabel": "第21天"
    },
    "ts_c03_yelan_quiet_park_park_exit": {
      "chapter": 3,
      "title": "不用一直有声音",
      "bg": "tc-bg-park-day",
      "time": "17:50",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 21,
        "clock": "17:50"
      },
      "location": "公园积水路段至门口",
      "day": 21,
      "dayLabel": "第21天"
    },
    "ts_c04_yelan_outing": {
      "chapter": 4,
      "title": "屏幕外的操作方式",
      "bg": "tc-bg-park-day",
      "time": "15:40",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 24,
        "clock": "15:40"
      },
      "location": "公园外入口",
      "day": 24,
      "dayLabel": "第24天"
    },
    "ts_c04_yelan_kite": {
      "chapter": 4,
      "title": "去河边空地放风筝",
      "bg": "tc-bg-riverside-lawn-day",
      "time": "15:40",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 24,
        "clock": "15:40"
      },
      "location": "河边空地草坪",
      "day": 24,
      "dayLabel": "第24天"
    },
    "ts_c04_yelan_market": {
      "chapter": 4,
      "title": "去旧货市场找一样无用的小东西",
      "bg": "tc-bg-secondhand-day",
      "time": "15:40",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 24,
        "clock": "15:40"
      },
      "location": "旧货市场玩具摊及通道",
      "day": 24,
      "dayLabel": "第24天"
    },
    "ts_c04_yelan_outing_end": {
      "chapter": 4,
      "title": "本章汇合",
      "bg": "tc-bg-street-day",
      "time": "下午结束时",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 24,
        "clock": "下午结束时"
      },
      "location": "所选出行地点出口",
      "day": 24,
      "dayLabel": "第24天"
    },
    "ts_c05_yelan_hurt_comparison": {
      "chapter": 5,
      "title": "我没有说请你介绍",
      "bg": "tc-bg-netcafe-pc-night",
      "time": "20:10",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 27,
        "clock": "20:10"
      },
      "location": "网吧机位",
      "day": 27,
      "dayLabel": "第27天"
    },
    "ts_c05_yelan_both_real": {
      "chapter": 5,
      "title": "她不是另一个账号",
      "bg": "tc-bg-food-dusk",
      "time": "18:00",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 29,
        "clock": "18:00"
      },
      "location": "饺子店",
      "day": 29,
      "dayLabel": "第29天"
    },
    "ts_c05_yelan_both_real_icecream": {
      "chapter": 5,
      "title": "她不是另一个账号",
      "bg": "tc-bg-convenience-day",
      "time": "饭后",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 29,
        "clock": "饭后"
      },
      "location": "相邻冰棒冰柜与店门口",
      "day": 29,
      "dayLabel": "第29天"
    },
    "ts_c05_yelan_both_real_street": {
      "chapter": 5,
      "title": "她不是另一个账号",
      "bg": "tc-bg-street-dusk",
      "time": "饭后",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 29,
        "clock": "饭后"
      },
      "location": "街道路口",
      "day": 29,
      "dayLabel": "第29天"
    },
    "ts_c06_yelan_after_dinner": {
      "chapter": 6,
      "title": "散席以后（第30天饭后补叙）",
      "bg": "tc-bg-street-dusk",
      "time": "19:15",
      "chronology": {
        "domain": "story-day",
        "mode": "flashback",
        "day": 30,
        "clock": "19:15"
      },
      "location": "同顿饭散席后的街口",
      "day": 30,
      "dayLabel": "第30天"
    },
    "ts_c06_yelan_tabletennis": {
      "chapter": 6,
      "title": "她打飞的那一球",
      "bg": "tc-bg-tabletennis-day",
      "time": "16:30",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 32,
        "clock": "16:30"
      },
      "location": "乒乓球馆/场边座椅·日",
      "day": 32,
      "dayLabel": "第32天"
    },
    "ts_c06_yelan_tabletennis_water": {
      "chapter": 6,
      "title": "她打飞的那一球",
      "bg": "tc-bg-convenience-day",
      "time": "离馆后",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 32,
        "clock": "离馆后"
      },
      "location": "球馆外买水柜台",
      "day": 32,
      "dayLabel": "第32天"
    },
    "ts_c06_yelan_tabletennis_busstop": {
      "chapter": 6,
      "title": "她打飞的那一球",
      "bg": "tc-bg-busstop-day",
      "time": "离馆后",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 32,
        "clock": "离馆后"
      },
      "location": "公交站",
      "day": 32,
      "dayLabel": "第32天"
    },
    "ts_c07_yelan_her_friends": {
      "chapter": 7,
      "title": "她并不只在那个队伍里",
      "bg": "tc-bg-rental-day",
      "time": "18:10",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 39,
        "clock": "18:10"
      },
      "location": "文文出租屋床/桌/生活角·日",
      "day": 39,
      "dayLabel": "第39天"
    },
    "ts_c07_yelan_her_friends_day40": {
      "chapter": 7,
      "title": "她并不只在那个队伍里",
      "bg": "tc-bg-rental-day",
      "time": "睡醒后的下午",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 40,
        "clock": "睡醒后的下午"
      },
      "location": "文文出租屋",
      "day": 40,
      "dayLabel": "第40天"
    },
    "ts_c07_yelan_kite_return": {
      "chapter": 7,
      "title": "河边风筝",
      "bg": "tc-bg-riverside-lawn-day",
      "time": "17:00",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 43,
        "clock": "17:00"
      },
      "location": "河边放风筝空地·日",
      "day": 43,
      "dayLabel": "第43天"
    },
    "ts_c07_yelan_market_return": {
      "chapter": 7,
      "title": "旧货市场",
      "bg": "tc-bg-secondhand-day",
      "time": "17:00",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 43,
        "clock": "17:00"
      },
      "location": "旧货市场玩具摊·日",
      "day": 43,
      "dayLabel": "第43天"
    },
    "ts_c07_yelan_market_return_market_meeting": {
      "chapter": 7,
      "title": "旧货市场",
      "bg": "tc-bg-secondhand-day",
      "time": "17:00",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 43,
        "clock": "17:00"
      },
      "location": "旧货市场碰面处",
      "day": 43,
      "dayLabel": "第43天"
    },
    "ts_c07_yelan_market_return_market_walk": {
      "chapter": 7,
      "title": "旧货市场",
      "bg": "tc-bg-secondhand-day",
      "time": "17:00",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 43,
        "clock": "17:00"
      },
      "location": "旧杯子摊",
      "day": 43,
      "dayLabel": "第43天"
    },
    "ts_c07_yelan_dinner": {
      "chapter": 7,
      "title": "本章汇合",
      "bg": "tc-bg-food-dusk",
      "time": "晚饭时",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 43,
        "clock": "晚饭时"
      },
      "location": "普通小食店/面馆·暮色",
      "day": 43,
      "dayLabel": "第43天"
    },
    "ts_c08_yelan_meet_without_game": {
      "chapter": 8,
      "title": "不想赢的时候，也想见你",
      "bg": "tc-bg-food-day",
      "time": "17:20",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 54,
        "clock": "17:20"
      },
      "location": "普通小食店/面馆中性桌位·日",
      "day": 54,
      "dayLabel": "第54天"
    },
    "ts_c08_yelan_meet_without_game_dinner": {
      "chapter": 8,
      "title": "不想赢的时候，也想见你",
      "bg": "tc-bg-food-day",
      "time": "17:20",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 54,
        "clock": "17:20"
      },
      "location": "小饭店",
      "day": 54,
      "dayLabel": "第54天"
    },
    "ts_c08_yelan_meet_without_game_supermarket": {
      "chapter": 8,
      "title": "不想赢的时候，也想见你",
      "bg": "tc-bg-supermarket-day",
      "time": "饭后",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 54,
        "clock": "饭后"
      },
      "location": "附近小超市",
      "day": 54,
      "dayLabel": "第54天"
    },
    "ts_c08_yelan_meet_without_game_outside": {
      "chapter": 8,
      "title": "不想赢的时候，也想见你",
      "bg": "tc-bg-street-day",
      "time": "饭后",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 54,
        "clock": "饭后"
      },
      "location": "小超市门口",
      "day": 54,
      "dayLabel": "第54天"
    },
    "ts_c08_yelan_meet_without_game_bench": {
      "chapter": 8,
      "title": "不想赢的时候，也想见你",
      "bg": "tc-bg-street-day",
      "time": "饭后",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 54,
        "clock": "饭后"
      },
      "location": "街边长椅",
      "day": 54,
      "dayLabel": "第54天"
    },
    "ts_c08_yelan_meet_without_game_parting": {
      "chapter": 8,
      "title": "不想赢的时候，也想见你",
      "bg": "tc-bg-street-dusk",
      "time": "天还没黑",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 54,
        "clock": "天还没黑"
      },
      "location": "各自回去的路口",
      "day": 54,
      "dayLabel": "第54天"
    },
    "ts_c09_yelan_relationship": {
      "chapter": 9,
      "title": "这次没有自动匹配",
      "bg": "tc-bg-street-day",
      "time": "17:40",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 72,
        "clock": "17:40"
      },
      "location": "约定街道",
      "day": 72,
      "dayLabel": "第72天"
    },
    "ts_c09_yelan_relationship_meeting": {
      "chapter": 9,
      "title": "这次没有自动匹配",
      "bg": "tc-bg-street-day",
      "time": "17:40",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 72,
        "clock": "17:40"
      },
      "location": "约定街道",
      "day": 72,
      "dayLabel": "第72天"
    },
    "ts_c09_yelan_relationship_eaves": {
      "chapter": 9,
      "title": "这次没有自动匹配",
      "bg": "tc-bg-eaves-day",
      "time": "17:40",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 72,
        "clock": "17:40"
      },
      "location": "新开小店外屋檐",
      "day": 72,
      "dayLabel": "第72天"
    },
    "ts_c09_yelan_dating": {
      "chapter": 9,
      "title": "一起走出语音房间",
      "bg": "tc-bg-eaves-day",
      "time": "17:40",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 72,
        "clock": "17:40"
      },
      "location": "连续旧街屋檐·日",
      "day": 72,
      "dayLabel": "第72天"
    },
    "ts_c09_yelan_dating_street": {
      "chapter": 9,
      "title": "一起走出语音房间",
      "bg": "tc-bg-street-day",
      "time": "雨小后",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 72,
        "clock": "雨小后"
      },
      "location": "雨小后的街道",
      "day": 72,
      "dayLabel": "第72天"
    },
    "ts_c09_yelan_dating_busstop": {
      "chapter": 9,
      "title": "一起走出语音房间",
      "bg": "tc-bg-busstop-day",
      "time": "雨小后",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 72,
        "clock": "雨小后"
      },
      "location": "公交站",
      "day": 72,
      "dayLabel": "第72天"
    },
    "ts_c09_yelan_dating_leaving": {
      "chapter": 9,
      "title": "一起走出语音房间",
      "bg": "tc-bg-busstop-day",
      "time": "上车后",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 72,
        "clock": "上车后"
      },
      "location": "公交站",
      "day": 72,
      "dayLabel": "第72天"
    },
    "ts_c09_yelan_friends": {
      "chapter": 9,
      "title": "留在队伍里的人",
      "bg": "tc-bg-eaves-day",
      "time": "17:40",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 72,
        "clock": "17:40"
      },
      "location": "连续旧街屋檐·日",
      "day": 72,
      "dayLabel": "第72天"
    },
    "ts_c09_yelan_friends_parting": {
      "chapter": 9,
      "title": "留在队伍里的人",
      "bg": "tc-bg-eaves-day",
      "time": "分别时",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 72,
        "clock": "分别时"
      },
      "location": "小店外屋檐",
      "day": 72,
      "dayLabel": "第72天"
    },
    "ts_c09_yelan_friends_day86": {
      "chapter": 9,
      "title": "留在队伍里的人",
      "bg": "tc-bg-rental-night",
      "time": "未注明",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 86,
        "clock": "未注明"
      },
      "location": "文文休息处的游戏与消息",
      "day": 86,
      "dayLabel": "第86天"
    },
    "ts_c10_yelan_dating": {
      "chapter": 10,
      "title": "一起买完这袋米",
      "bg": "tc-bg-supermarket-day",
      "time": "15:30",
      "chronology": {
        "domain": "two-years-later",
        "mode": "present",
        "clock": "15:30"
      },
      "location": "赴约前的手机消息",
      "day": null,
      "dayLabel": "两年后"
    },
    "ts_c10_yelan_dating_meeting": {
      "chapter": 10,
      "title": "一起买完这袋米",
      "bg": "tc-bg-supermarket-day",
      "time": "15:30",
      "chronology": {
        "domain": "two-years-later",
        "mode": "present",
        "clock": "15:30"
      },
      "location": "超市门口",
      "day": null,
      "dayLabel": "两年后"
    },
    "ts_c10_yelan_dating_shopping": {
      "chapter": 10,
      "title": "一起买完这袋米",
      "bg": "tc-bg-supermarket-day",
      "time": "15:30",
      "chronology": {
        "domain": "two-years-later",
        "mode": "present",
        "clock": "15:30"
      },
      "location": "超市货架与米袋区",
      "day": null,
      "dayLabel": "两年后"
    },
    "ts_c10_yelan_dating_bench": {
      "chapter": 10,
      "title": "一起买完这袋米",
      "bg": "tc-bg-street-day",
      "time": "购物后",
      "chronology": {
        "domain": "two-years-later",
        "mode": "present",
        "clock": "购物后"
      },
      "location": "购物后的长椅",
      "day": null,
      "dayLabel": "两年后"
    },
    "ts_c10_yelan_dating_lights": {
      "chapter": 10,
      "title": "一起买完这袋米",
      "bg": "tc-bg-street-dusk",
      "time": "路灯刚亮",
      "chronology": {
        "domain": "two-years-later",
        "mode": "present",
        "clock": "路灯刚亮"
      },
      "location": "长椅与回程路",
      "day": null,
      "dayLabel": "两年后"
    },
    "ts_c10_yelan_friends": {
      "chapter": 10,
      "title": "今晚少一个位置",
      "bg": "tc-bg-netcafe-counter-night",
      "time": "19:20",
      "chronology": {
        "domain": "two-years-later",
        "mode": "present",
        "clock": "19:20"
      },
      "location": "网吧入口/柜台·夜",
      "day": null,
      "dayLabel": "两年后"
    },
    "ts_c10_yelan_friends_rest_day": {
      "chapter": 10,
      "title": "今晚少一个位置",
      "bg": "tc-bg-tabletennis-day",
      "time": "首个休息日的下午",
      "chronology": {
        "domain": "two-years-later",
        "mode": "present",
        "clock": "首个休息日的下午",
        "label": "两年后另一天的休息日下午；不沿用当班19:20"
      },
      "location": "乒乓球馆与场边座椅",
      "day": null,
      "dayLabel": "两年后"
    },
    "ts_c03_piao_sweet_jelly": {
      "chapter": 3,
      "title": "没有采访提纲",
      "bg": "tc-bg-rental-day",
      "time": "16:30",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 15,
        "clock": "16:30"
      },
      "location": "文文出租屋",
      "day": 15,
      "dayLabel": "第15天"
    },
    "ts_c03_piao_sweet_jelly_meeting": {
      "chapter": 3,
      "title": "没有采访提纲",
      "bg": "tc-bg-street-day",
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
    "ts_c03_piao_sweet_jelly_jelly_shop": {
      "chapter": 3,
      "title": "没有采访提纲",
      "bg": "tc-bg-food-day",
      "time": "16:30",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 15,
        "clock": "16:30"
      },
      "location": "凉糕店靠门小桌",
      "day": 15,
      "dayLabel": "第15天"
    },
    "ts_c03_piao_sweet_jelly_puddles": {
      "chapter": 3,
      "title": "没有采访提纲",
      "bg": "tc-bg-street-day",
      "time": "16:30",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 15,
        "clock": "16:30"
      },
      "location": "积水旁小路",
      "day": 15,
      "dayLabel": "第15天"
    },
    "ts_c03_piao_leave_blank": {
      "chapter": 3,
      "title": "说到这里就够了",
      "bg": "tc-bg-food-day",
      "time": "17:00",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 18,
        "clock": "17:00"
      },
      "location": "小店门槛外",
      "day": 18,
      "dayLabel": "第18天"
    },
    "ts_c03_piao_leave_blank_bench": {
      "chapter": 3,
      "title": "说到这里就够了",
      "bg": "tc-bg-street-day",
      "time": "17:00",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 18,
        "clock": "17:00"
      },
      "location": "街角长凳",
      "day": 18,
      "dayLabel": "第18天"
    },
    "ts_c03_piao_say_clearly": {
      "chapter": 3,
      "title": "这一次讲明白",
      "bg": "tc-bg-rental-day",
      "time": "16:00",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 21,
        "clock": "16:00"
      },
      "location": "文文出租屋",
      "day": 21,
      "dayLabel": "第21天"
    },
    "ts_c03_piao_say_clearly_river": {
      "chapter": 3,
      "title": "这一次讲明白",
      "bg": "tc-bg-river-day",
      "time": "16:00",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 21,
        "clock": "16:00"
      },
      "location": "河边小路",
      "day": 21,
      "dayLabel": "第21天"
    },
    "ts_c03_piao_dating": {
      "chapter": 3,
      "title": "这一次讲明白",
      "bg": "tc-bg-river-day",
      "time": "16:00",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 21,
        "clock": "16:00"
      },
      "location": "河边休息处",
      "day": 21,
      "dayLabel": "第21天"
    },
    "ts_c03_piao_friends": {
      "chapter": 3,
      "title": "这一次讲明白",
      "bg": "tc-bg-river-day",
      "time": "16:00",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 21,
        "clock": "16:00"
      },
      "location": "河边休息处",
      "day": 21,
      "dayLabel": "第21天"
    },
    "ts_c03_piao_friends_crossroad": {
      "chapter": 3,
      "title": "这一次讲明白",
      "bg": "tc-bg-street-day",
      "time": "16:00",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 21,
        "clock": "16:00"
      },
      "location": "回程路口",
      "day": 21,
      "dayLabel": "第21天"
    },
    "ts_c03_piao_friends_busstop": {
      "chapter": 3,
      "title": "这一次讲明白",
      "bg": "tc-bg-busstop-day",
      "time": "16:00",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 21,
        "clock": "16:00"
      },
      "location": "路口候车处",
      "day": 21,
      "dayLabel": "第21天"
    },
    "ts_c03_piao_friends_message": {
      "chapter": 3,
      "title": "这一次讲明白",
      "bg": "tc-bg-rental-night",
      "time": "晚上",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 21,
        "clock": "晚上"
      },
      "location": "文文出租屋",
      "day": 21,
      "dayLabel": "第21天"
    },
    "ts_c04_piao_two_plans": {
      "chapter": 4,
      "title": "雨棚下的两个主意",
      "bg": "tc-bg-kiosk-eaves-day",
      "time": "16:30",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 24,
        "clock": "16:30"
      },
      "location": "小卖部门口雨棚",
      "day": 24,
      "dayLabel": "第24天"
    },
    "ts_c04_piao_paperboat": {
      "chapter": 4,
      "title": "雨棚下的两个主意",
      "bg": "tc-bg-kiosk-eaves-day",
      "time": "16:30",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 24,
        "clock": "16:30"
      },
      "location": "小卖部雨棚及柜台边",
      "day": 24,
      "dayLabel": "第24天"
    },
    "ts_c04_piao_signs": {
      "chapter": 4,
      "title": "雨棚下的两个主意",
      "bg": "tc-bg-eaves-day",
      "time": "16:30",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 24,
        "clock": "16:30"
      },
      "location": "旧街连续屋檐",
      "day": 24,
      "dayLabel": "第24天"
    },
    "ts_c04_piao_dating": {
      "chapter": 4,
      "title": "今天的散步到这里",
      "bg": "tc-bg-street-dusk",
      "time": "18:00",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 24,
        "clock": "18:00"
      },
      "location": "岔路至回网吧的路口",
      "day": 24,
      "dayLabel": "第24天"
    },
    "ts_c04_piao_dating_workward": {
      "chapter": 4,
      "title": "今天的散步到这里",
      "bg": "tc-bg-street-dusk",
      "time": "18:00",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 24,
        "clock": "18:00"
      },
      "location": "回网吧的路口",
      "day": 24,
      "dayLabel": "第24天"
    },
    "ts_c04_piao_friends": {
      "chapter": 4,
      "title": "今天的散步到这里",
      "bg": "tc-bg-stall-day",
      "time": "18:00",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 24,
        "clock": "18:00"
      },
      "location": "炸土豆摊",
      "day": 24,
      "dayLabel": "第24天"
    },
    "ts_c04_piao_friends_parting": {
      "chapter": 4,
      "title": "今天的散步到这里",
      "bg": "tc-bg-street-dusk",
      "time": "18:00",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 24,
        "clock": "18:00"
      },
      "location": "分别路口",
      "day": 24,
      "dayLabel": "第24天"
    },
    "ts_c05_piao_cover": {
      "chapter": 5,
      "title": "一张不太满意的封面",
      "bg": "tc-bg-food-day",
      "time": "16:00",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 27,
        "clock": "16:00"
      },
      "location": "安静小店",
      "day": 27,
      "dayLabel": "第27天"
    },
    "ts_c05_piao_cover_soymilk": {
      "chapter": 5,
      "title": "一张不太满意的封面",
      "bg": "tc-bg-food-dusk",
      "time": "傍晚",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 27,
        "clock": "傍晚"
      },
      "location": "包子豆浆店门外",
      "day": 27,
      "dayLabel": "第27天"
    },
    "ts_c05_piao_dating": {
      "chapter": 5,
      "title": "别替我挑好答案",
      "bg": "tc-bg-food-day",
      "time": "17:30",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 29,
        "clock": "17:30"
      },
      "location": "小店桌边",
      "day": 29,
      "dayLabel": "第29天"
    },
    "ts_c05_piao_friends": {
      "chapter": 5,
      "title": "别替我挑好答案",
      "bg": "tc-bg-food-day",
      "time": "17:30",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 29,
        "clock": "17:30"
      },
      "location": "小店桌边",
      "day": 29,
      "dayLabel": "第29天"
    },
    "ts_c05_piao_friends_parting": {
      "chapter": 5,
      "title": "别替我挑好答案",
      "bg": "tc-bg-street-dusk",
      "time": "傍晚",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 29,
        "clock": "傍晚"
      },
      "location": "小店门外",
      "day": 29,
      "dayLabel": "第29天"
    },
    "ts_c06_piao_closed_echo": {
      "chapter": 6,
      "title": "少了一个顺路的地方",
      "bg": "tc-bg-street-day",
      "time": "15:30",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 32,
        "clock": "15:30"
      },
      "location": "约定路口",
      "day": 32,
      "dayLabel": "第32天"
    },
    "ts_c06_piao_closed_echo_closed_door": {
      "chapter": 6,
      "title": "少了一个顺路的地方",
      "bg": "tc-bg-echo-closed-day",
      "time": "15:30",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 32,
        "clock": "15:30"
      },
      "location": "回声方向路口",
      "day": 32,
      "dayLabel": "第32天"
    },
    "ts_c06_piao_closed_echo_street": {
      "chapter": 6,
      "title": "少了一个顺路的地方",
      "bg": "tc-bg-street-day",
      "time": "15:30",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 32,
        "clock": "15:30"
      },
      "location": "另一条街",
      "day": 32,
      "dayLabel": "第32天"
    },
    "ts_c06_piao_closed_echo_bench": {
      "chapter": 6,
      "title": "少了一个顺路的地方",
      "bg": "tc-bg-park-day",
      "time": "15:30",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 32,
        "clock": "15:30"
      },
      "location": "树影长凳",
      "day": 32,
      "dayLabel": "第32天"
    },
    "ts_c06_piao_dating": {
      "chapter": 6,
      "title": "把一个下午用掉",
      "bg": "tc-bg-park-day",
      "time": "16:00",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 32,
        "clock": "16:00"
      },
      "location": "树影长凳",
      "day": 32,
      "dayLabel": "第32天"
    },
    "ts_c06_piao_dating_dinner": {
      "chapter": 6,
      "title": "把一个下午用掉",
      "bg": "tc-bg-food-dusk",
      "time": "饭时（钟点未注明）",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 32,
        "clock": "饭时（钟点未注明）"
      },
      "location": "小饭店",
      "day": 32,
      "dayLabel": "第32天"
    },
    "ts_c06_piao_friends": {
      "chapter": 6,
      "title": "把一个下午用掉",
      "bg": "tc-bg-park-day",
      "time": "16:00",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 32,
        "clock": "16:00"
      },
      "location": "树影长凳",
      "day": 32,
      "dayLabel": "第32天"
    },
    "ts_c06_piao_friends_home": {
      "chapter": 6,
      "title": "把一个下午用掉",
      "bg": "tc-bg-rental-day",
      "time": "回家后",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 32,
        "clock": "回家后"
      },
      "location": "文文住处",
      "day": 32,
      "dayLabel": "第32天"
    },
    "ts_c07_piao_half_hour": {
      "chapter": 7,
      "title": "她今天不围着我转",
      "bg": "tc-bg-street-day",
      "time": "16:30",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 39,
        "clock": "16:30"
      },
      "location": "路口",
      "day": 39,
      "dayLabel": "第39天"
    },
    "ts_c07_piao_paperboat_return": {
      "chapter": 7,
      "title": "她今天不围着我转",
      "bg": "tc-bg-street-day",
      "time": "16:30",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 39,
        "clock": "16:30"
      },
      "location": "路口",
      "day": 39,
      "dayLabel": "第39天"
    },
    "ts_c07_piao_signs_return": {
      "chapter": 7,
      "title": "她今天不围着我转",
      "bg": "tc-bg-street-day",
      "time": "16:30",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 39,
        "clock": "16:30"
      },
      "location": "路口",
      "day": 39,
      "dayLabel": "第39天"
    },
    "ts_c07_piao_bag_ready": {
      "chapter": 7,
      "title": "她今天不围着我转",
      "bg": "tc-bg-street-day",
      "time": "16:30",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 39,
        "clock": "16:30"
      },
      "location": "路口",
      "day": 39,
      "dayLabel": "第39天"
    },
    "ts_c07_piao_dating": {
      "chapter": 7,
      "title": "散场不是冷落",
      "bg": "tc-bg-street-day",
      "time": "17:00",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 39,
        "clock": "17:00"
      },
      "location": "路口",
      "day": 39,
      "dayLabel": "第39天"
    },
    "ts_c07_piao_dating_laundry": {
      "chapter": 7,
      "title": "散场不是冷落",
      "bg": "tc-bg-rental-day",
      "time": "傍晚",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 39,
        "clock": "傍晚"
      },
      "location": "文文住处",
      "day": 39,
      "dayLabel": "第39天"
    },
    "ts_c07_piao_dating_message": {
      "chapter": 7,
      "title": "散场不是冷落",
      "bg": "tc-bg-rental-night",
      "time": "晚上到店前",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 39,
        "clock": "晚上到店前"
      },
      "location": "",
      "day": 39,
      "dayLabel": "第39天"
    },
    "ts_c07_piao_dating_day41": {
      "chapter": 7,
      "title": "约好的下一次饭局",
      "bg": "tc-bg-food-day",
      "time": "睡醒后（钟点未注明）",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 41,
        "clock": "睡醒后（钟点未注明）"
      },
      "location": "",
      "day": 41,
      "dayLabel": "第41天"
    },
    "ts_c07_piao_friends": {
      "chapter": 7,
      "title": "散场不是冷落",
      "bg": "tc-bg-street-day",
      "time": "17:00",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 39,
        "clock": "17:00"
      },
      "location": "路口",
      "day": 39,
      "dayLabel": "第39天"
    },
    "ts_c07_piao_friends_later_summary": {
      "chapter": 7,
      "title": "散场不是冷落",
      "bg": "tc-bg-street-day",
      "time": "后续概述（饭局日序未注明）",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 39,
        "clock": "后续概述（饭局日序未注明）",
        "label": "日序锚定第39天章段；几天后的饭局仅作叙述，不推定具体哪一天"
      },
      "location": "",
      "day": 39,
      "dayLabel": "第39天"
    },
    "ts_c08_piao_shared_time": {
      "chapter": 8,
      "title": "不是空出所有时间",
      "bg": "tc-bg-food-day",
      "time": "16:00",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 54,
        "clock": "16:00"
      },
      "location": "小店",
      "day": 54,
      "dayLabel": "第54天"
    },
    "ts_c08_piao_dating": {
      "chapter": 8,
      "title": "能说不，也能再靠近一点",
      "bg": "tc-bg-clothing-day",
      "time": "17:00",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 54,
        "clock": "17:00"
      },
      "location": "服装店",
      "day": 54,
      "dayLabel": "第54天"
    },
    "ts_c08_piao_dating_street": {
      "chapter": 8,
      "title": "能说不，也能再靠近一点",
      "bg": "tc-bg-street-day",
      "time": "17:00",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 54,
        "clock": "17:00"
      },
      "location": "街角",
      "day": 54,
      "dayLabel": "第54天"
    },
    "ts_c08_piao_friends": {
      "chapter": 8,
      "title": "能说不，也能再靠近一点",
      "bg": "tc-bg-food-day",
      "time": "17:00",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 54,
        "clock": "17:00"
      },
      "location": "小店",
      "day": 54,
      "dayLabel": "第54天"
    },
    "ts_c09_piao_booklet": {
      "chapter": 9,
      "title": "说的是下一次",
      "bg": "tc-bg-tea-day",
      "time": "15:30",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 74,
        "clock": "15:30"
      },
      "location": "",
      "day": 74,
      "dayLabel": "第74天"
    },
    "ts_c09_piao_dating": {
      "chapter": 9,
      "title": "已经选过的关系，接着往下走",
      "bg": "tc-bg-tea-day",
      "time": "16:30",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 74,
        "clock": "16:30"
      },
      "location": "",
      "day": 74,
      "dayLabel": "第74天"
    },
    "ts_c09_piao_friends": {
      "chapter": 9,
      "title": "已经选过的关系，接着往下走",
      "bg": "tc-bg-tea-day",
      "time": "16:30",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 74,
        "clock": "16:30"
      },
      "location": "",
      "day": 74,
      "dayLabel": "第74天"
    },
    "ts_c09_piao_friends_parting": {
      "chapter": 9,
      "title": "已经选过的关系，接着往下走",
      "bg": "tc-bg-street-day",
      "time": "分别时",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 74,
        "clock": "分别时"
      },
      "location": "路边",
      "day": 74,
      "dayLabel": "第74天"
    },
    "ts_c10_piao_dating": {
      "chapter": 10,
      "title": "第二版放在哪一层",
      "bg": "tc-bg-tea-day",
      "time": "一个休息日的下午",
      "chronology": {
        "domain": "two-years-later",
        "mode": "present",
        "clock": "一个休息日的下午"
      },
      "location": "",
      "day": null,
      "dayLabel": "两年后"
    },
    "ts_c10_piao_dating_dinner_walk": {
      "chapter": 10,
      "title": "第二版放在哪一层",
      "bg": "tc-bg-street-day",
      "time": "买晚饭时",
      "chronology": {
        "domain": "two-years-later",
        "mode": "present",
        "clock": "买晚饭时"
      },
      "location": "买晚饭的路口",
      "day": null,
      "dayLabel": "两年后"
    },
    "ts_c10_piao_friends": {
      "chapter": 10,
      "title": "第二版放在哪一层",
      "bg": "tc-bg-food-day",
      "time": "婚礼后的一个下午",
      "chronology": {
        "domain": "two-years-later",
        "mode": "present",
        "clock": "婚礼后的一个下午"
      },
      "location": "熟悉的小店",
      "day": null,
      "dayLabel": "两年后"
    },
    "ts_c10_piao_friends_parting": {
      "chapter": 10,
      "title": "第二版放在哪一层",
      "bg": "tc-bg-street-day",
      "time": "婚礼后的一个下午",
      "chronology": {
        "domain": "two-years-later",
        "mode": "present",
        "clock": "婚礼后的一个下午"
      },
      "location": "小店外街道",
      "day": null,
      "dayLabel": "两年后"
    },
    "ts_c03_friends_tailoring": {
      "chapter": 3,
      "title": "不用找个正事",
      "bg": "tc-bg-rental-day",
      "time": "16:00",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 15,
        "clock": "16:00"
      },
      "location": "",
      "day": 15,
      "dayLabel": "第15天"
    },
    "ts_c03_friends_tailoring_shop": {
      "chapter": 3,
      "title": "不用找个正事",
      "bg": "tc-bg-alteration-day",
      "time": "16:00",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 15,
        "clock": "16:00"
      },
      "location": "改衣店",
      "day": 15,
      "dayLabel": "第15天"
    },
    "ts_c03_friends_online_game": {
      "chapter": 3,
      "title": "老板也会掉下去",
      "bg": "tc-bg-rental-night",
      "time": "20:00",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 18,
        "clock": "20:00"
      },
      "location": "文文住处",
      "day": 18,
      "dayLabel": "第18天"
    },
    "ts_c03_friends_settling_in": {
      "chapter": 3,
      "title": "可以过一阵子的地方",
      "bg": "tc-bg-rental-day",
      "time": "15:30",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 21,
        "clock": "15:30"
      },
      "location": "文文出租屋",
      "day": 21,
      "dayLabel": "第21天"
    },
    "ts_c04_friends_own_plan": {
      "chapter": 4,
      "title": "谁都不用当陪客",
      "bg": "tc-bg-rental-day",
      "time": "下午",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 24,
        "clock": "下午"
      },
      "location": "",
      "day": 24,
      "dayLabel": "第24天"
    },
    "ts_c04_friends_show": {
      "chapter": 4,
      "title": "谁都不用当陪客",
      "bg": "tc-bg-performance-shop-day",
      "time": "下午",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 24,
        "clock": "下午"
      },
      "location": "街边有小台子的店",
      "day": 24,
      "dayLabel": "第24天"
    },
    "ts_c04_friends_walk": {
      "chapter": 4,
      "title": "谁都不用当陪客",
      "bg": "tc-bg-street-day",
      "time": "下午",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 24,
        "clock": "下午"
      },
      "location": "老街",
      "day": 24,
      "dayLabel": "第24天"
    },
    "ts_c04_friends_walk_game_store": {
      "chapter": 4,
      "title": "谁都不用当陪客",
      "bg": "tc-bg-game-store-day",
      "time": "下午",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 24,
        "clock": "下午"
      },
      "location": "旧游戏小店",
      "day": 24,
      "dayLabel": "第24天"
    },
    "ts_c04_friends_walk_stool": {
      "chapter": 4,
      "title": "谁都不用当陪客",
      "bg": "tc-bg-game-store-day",
      "time": "下午",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 24,
        "clock": "下午"
      },
      "location": "旧游戏店门外矮凳",
      "day": 24,
      "dayLabel": "第24天"
    },
    "ts_c04_friends_walk_wall": {
      "chapter": 4,
      "title": "谁都不用当陪客",
      "bg": "tc-bg-slope-day",
      "time": "下午",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 24,
        "clock": "下午"
      },
      "location": "街道亮墙旁",
      "day": 24,
      "dayLabel": "第24天"
    },
    "ts_c04_friends_crossroad": {
      "chapter": 4,
      "title": "谁都不用当陪客",
      "bg": "tc-bg-food-front-dusk",
      "time": "傍晚",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 24,
        "clock": "傍晚"
      },
      "location": "路口面馆门外",
      "day": 24,
      "dayLabel": "第24天"
    },
    "ts_c04_friends_crossroad_home": {
      "chapter": 4,
      "title": "谁都不用当陪客",
      "bg": "tc-bg-rental-day",
      "time": "回家后",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 24,
        "clock": "回家后"
      },
      "location": "文文住处",
      "day": 24,
      "dayLabel": "第24天"
    },
    "ts_c05_friends_job_name": {
      "chapter": 5,
      "title": "那个没说清的工作",
      "bg": "tc-bg-supermarket-day",
      "time": "17:10",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 27,
        "clock": "17:10"
      },
      "location": "日用品商店",
      "day": 27,
      "dayLabel": "第27天"
    },
    "ts_c05_friends_job_name_door": {
      "chapter": 5,
      "title": "那个没说清的工作",
      "bg": "tc-bg-supermarket-day",
      "time": "17:10",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 27,
        "clock": "17:10"
      },
      "location": "日用品商店门外",
      "day": 27,
      "dayLabel": "第27天"
    },
    "ts_c05_friends_job_name_home": {
      "chapter": 5,
      "title": "那个没说清的工作",
      "bg": "tc-bg-rental-day",
      "time": "17:10",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 27,
        "clock": "17:10"
      },
      "location": "文文住处",
      "day": 27,
      "dayLabel": "第27天"
    },
    "ts_c05_friends_job_name_call": {
      "chapter": 5,
      "title": "那个没说清的工作",
      "bg": "tc-bg-rental-day",
      "time": "晚些时候",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 27,
        "clock": "晚些时候"
      },
      "location": "文文住处",
      "day": 27,
      "dayLabel": "第27天"
    },
    "ts_c05_friends_say_it": {
      "chapter": 5,
      "title": "照样讲出来",
      "bg": "tc-bg-food-day",
      "time": "17:30",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 29,
        "clock": "17:30"
      },
      "location": "面馆",
      "day": 29,
      "dayLabel": "第29天"
    },
    "ts_c05_friends_say_it_counter": {
      "chapter": 5,
      "title": "照样讲出来",
      "bg": "tc-bg-netcafe-counter-day",
      "time": "吃完饭后",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 29,
        "clock": "吃完饭后"
      },
      "location": "网吧柜台",
      "day": 29,
      "dayLabel": "第29天"
    },
    "ts_c06_friends_quiet_company": {
      "chapter": 6,
      "title": "不开麦也能坐着",
      "bg": "tc-bg-netcafe-counter-day",
      "time": "16:30",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 32,
        "clock": "16:30"
      },
      "location": "网吧外",
      "day": 32,
      "dayLabel": "第32天"
    },
    "ts_c06_friends_quiet_company_eaves": {
      "chapter": 6,
      "title": "不开麦也能坐着",
      "bg": "tc-bg-eaves-day",
      "time": "16:30",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 32,
        "clock": "16:30"
      },
      "location": "路边屋檐",
      "day": 32,
      "dayLabel": "第32天"
    },
    "ts_c06_friends_own_invitation": {
      "chapter": 6,
      "title": "不替别人做主",
      "bg": "tc-bg-rental-day",
      "time": "18:20",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 33,
        "clock": "18:20"
      },
      "location": "",
      "day": 33,
      "dayLabel": "第33天"
    },
    "ts_c06_friends_sleep": {
      "chapter": 6,
      "title": "不赶着醒",
      "bg": "tc-bg-rental-day",
      "time": "上午",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 34,
        "clock": "上午"
      },
      "location": "文文住处",
      "day": 34,
      "dayLabel": "第34天"
    },
    "ts_c06_friends_sleep_awake": {
      "chapter": 6,
      "title": "不赶着醒",
      "bg": "tc-bg-rental-day",
      "time": "下午",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 34,
        "clock": "下午"
      },
      "location": "文文住处",
      "day": 34,
      "dayLabel": "第34天"
    },
    "ts_c07_friends_show_return": {
      "chapter": 7,
      "title": "再来一次，不必一模一样",
      "bg": "tc-bg-performance-shop-day",
      "time": "休班下午",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 40,
        "clock": "休班下午"
      },
      "location": "有小舞台的店",
      "day": 40,
      "dayLabel": "第40天"
    },
    "ts_c07_friends_show_return_after_show": {
      "chapter": 7,
      "title": "再来一次，不必一模一样",
      "bg": "tc-bg-street-day",
      "time": "散场后",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 40,
        "clock": "散场后"
      },
      "location": "店外",
      "day": 40,
      "dayLabel": "第40天"
    },
    "ts_c07_friends_walk_return": {
      "chapter": 7,
      "title": "再来一次，不必一模一样",
      "bg": "tc-bg-game-store-day",
      "time": "休班下午",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 40,
        "clock": "休班下午"
      },
      "location": "旧游戏店",
      "day": 40,
      "dayLabel": "第40天"
    },
    "ts_c07_friends_walk_return_message": {
      "chapter": 7,
      "title": "再来一次，不必一模一样",
      "bg": "tc-bg-street-day",
      "time": "休班下午",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 40,
        "clock": "休班下午"
      },
      "location": "街角",
      "day": 40,
      "dayLabel": "第40天"
    },
    "ts_c07_friends_online_game": {
      "chapter": 7,
      "title": "再来一次，不必一模一样",
      "bg": "tc-bg-rental-night",
      "time": "20:00",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 40,
        "clock": "20:00"
      },
      "location": "",
      "day": 40,
      "dayLabel": "第40天"
    },
    "ts_c07_friends_own_dinner": {
      "chapter": 7,
      "title": "他也有自己的事",
      "bg": "tc-bg-rental-day",
      "time": "16:00",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 43,
        "clock": "16:00"
      },
      "location": "",
      "day": 43,
      "dayLabel": "第43天"
    },
    "ts_c07_friends_own_dinner_dinner": {
      "chapter": 7,
      "title": "他也有自己的事",
      "bg": "tc-bg-food-dusk",
      "time": "晚饭时",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 43,
        "clock": "晚饭时"
      },
      "location": "",
      "day": 43,
      "dayLabel": "第43天"
    },
    "ts_c08_friends_boundaries": {
      "chapter": 8,
      "title": "别把空出来的时间又填满",
      "bg": "tc-bg-rental-day",
      "time": "17:30",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 54,
        "clock": "17:30"
      },
      "location": "",
      "day": 54,
      "dayLabel": "第54天"
    },
    "ts_c08_friends_boundaries_glasses": {
      "chapter": 8,
      "title": "别把空出来的时间又填满",
      "bg": "tc-bg-netcafe-counter-night",
      "time": "晚上",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 54,
        "clock": "晚上"
      },
      "location": "",
      "day": 54,
      "dayLabel": "第54天"
    },
    "ts_c08_friends_online_game": {
      "chapter": 8,
      "title": "一次不太成功的组局",
      "bg": "tc-bg-rental-night",
      "time": "20:00",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 56,
        "clock": "20:00"
      },
      "location": "文文住处",
      "day": 56,
      "dayLabel": "第56天"
    },
    "ts_c08_friends_free_afternoon": {
      "chapter": 8,
      "title": "剩下的半天",
      "bg": "tc-bg-rental-day",
      "time": "下午",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 59,
        "clock": "下午"
      },
      "location": "文文住处",
      "day": 59,
      "dayLabel": "第59天"
    },
    "ts_c08_friends_free_afternoon_home": {
      "chapter": 8,
      "title": "剩下的半天",
      "bg": "tc-bg-rental-day",
      "time": "下午",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 59,
        "clock": "下午"
      },
      "location": "文文住处",
      "day": 59,
      "dayLabel": "第59天"
    },
    "ts_c09_friends_birthday": {
      "chapter": 9,
      "title": "谁都不是替补",
      "bg": "tc-bg-food-night",
      "time": "休班晚上",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 72,
        "clock": "休班晚上"
      },
      "location": "",
      "day": 72,
      "dayLabel": "第72天"
    },
    "ts_c09_friends_own_book": {
      "chapter": 9,
      "title": "我自己的下一步",
      "bg": "tc-bg-bookstore-day",
      "time": "15:30",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 80,
        "clock": "15:30"
      },
      "location": "书店",
      "day": 80,
      "dayLabel": "第80天"
    },
    "ts_c09_friends_own_book_evening": {
      "chapter": 9,
      "title": "我自己的下一步",
      "bg": "tc-bg-rental-night",
      "time": "晚上",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 80,
        "clock": "晚上"
      },
      "location": "",
      "day": 80,
      "dayLabel": "第80天"
    },
    "ts_c09_friends_call_home": {
      "chapter": 9,
      "title": "回消息的人",
      "bg": "tc-bg-rental-day",
      "time": "傍晚",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 90,
        "clock": "傍晚"
      },
      "location": "",
      "day": 90,
      "dayLabel": "第90天"
    },
    "ts_c10_friends_late_host": {
      "chapter": 10,
      "title": "迟到十分钟的人",
      "bg": "tc-bg-maolang-home-day",
      "time": "休班下午",
      "chronology": {
        "domain": "two-years-later",
        "mode": "present",
        "clock": "休班下午"
      },
      "location": "毛狼与飘家中",
      "day": null,
      "dayLabel": "两年后"
    },
    "ts_c10_friends_friends_table": {
      "chapter": 10,
      "title": "迟到十分钟的人",
      "bg": "tc-bg-maolang-home-day",
      "time": "休班下午",
      "chronology": {
        "domain": "two-years-later",
        "mode": "present",
        "clock": "休班下午"
      },
      "location": "毛狼与飘家中",
      "day": null,
      "dayLabel": "两年后"
    },
    "ts_c10_friends_rain_walk": {
      "chapter": 10,
      "title": "迟到十分钟的人",
      "bg": "tc-bg-street-day",
      "time": "休班下午",
      "chronology": {
        "domain": "two-years-later",
        "mode": "present",
        "clock": "休班下午"
      },
      "location": "回家路上",
      "day": null,
      "dayLabel": "两年后"
    },
    "ts_c10_friends_rain_walk_netcafe": {
      "chapter": 10,
      "title": "迟到十分钟的人",
      "bg": "tc-bg-netcafe-counter-day",
      "time": "休班下午",
      "chronology": {
        "domain": "two-years-later",
        "mode": "present",
        "clock": "休班下午"
      },
      "location": "网吧门口",
      "day": null,
      "dayLabel": "两年后"
    },
    "ts_c10_friends_rain_walk_homeward": {
      "chapter": 10,
      "title": "迟到十分钟的人",
      "bg": "tc-bg-street-day",
      "time": "休班下午",
      "chronology": {
        "domain": "two-years-later",
        "mode": "present",
        "clock": "休班下午"
      },
      "location": "回家路上",
      "day": null,
      "dayLabel": "两年后"
    },
    "ts_c03_huangqiuqiu_second_meeting": {
      "chapter": 3,
      "title": "第二次也要打招呼",
      "bg": "tc-bg-rental-day",
      "time": "17:00",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 15,
        "clock": "17:00"
      },
      "location": "文文出租屋",
      "day": 15,
      "dayLabel": "第15天"
    },
    "ts_c03_huangqiuqiu_second_meeting_side_door": {
      "chapter": 3,
      "title": "第二次也要打招呼",
      "bg": "tc-bg-courtyard-day",
      "time": "17:00",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 15,
        "clock": "17:00"
      },
      "location": "网吧后院侧门外",
      "day": 15,
      "dayLabel": "第15天"
    },
    "ts_c03_huangqiuqiu_second_meeting_inside": {
      "chapter": 3,
      "title": "第二次也要打招呼",
      "bg": "tc-bg-courtyard-day",
      "time": "17:00",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 15,
        "clock": "17:00"
      },
      "location": "网吧后院门内干处",
      "day": 15,
      "dayLabel": "第15天"
    },
    "ts_c03_huangqiuqiu_not_all_knowing": {
      "chapter": 3,
      "title": "不是什么都知道",
      "bg": "tc-bg-courtyard-day",
      "time": "17:30",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 18,
        "clock": "17:30"
      },
      "location": "网吧后院门内干处",
      "day": 18,
      "dayLabel": "第18天"
    },
    "ts_c03_huangqiuqiu_ordinary_visit": {
      "chapter": 3,
      "title": "来这里没有正事",
      "bg": "tc-bg-courtyard-day",
      "time": "16:30",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 21,
        "clock": "16:30"
      },
      "location": "网吧后院侧门外",
      "day": 21,
      "dayLabel": "第21天"
    },
    "ts_c03_huangqiuqiu_ordinary_visit_inside": {
      "chapter": 3,
      "title": "来这里没有正事",
      "bg": "tc-bg-courtyard-day",
      "time": "16:30",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 21,
        "clock": "16:30"
      },
      "location": "网吧后院门内干处",
      "day": 21,
      "dayLabel": "第21天"
    },
    "ts_c04_huangqiuqiu_outing": {
      "chapter": 4,
      "title": "你可以选一个难题",
      "bg": "tc-bg-courtyard-day",
      "time": "16:30",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 24,
        "clock": "16:30"
      },
      "location": "网吧后院门内干处",
      "day": 24,
      "dayLabel": "第24天"
    },
    "ts_c04_huangqiuqiu_portrait": {
      "chapter": 4,
      "title": "画上那个人挺精神",
      "bg": "tc-bg-courtyard-day",
      "time": "16:30",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 24,
        "clock": "16:30"
      },
      "location": "网吧后院门内干处",
      "day": 24,
      "dayLabel": "第24天"
    },
    "ts_c04_huangqiuqiu_story": {
      "chapter": 4,
      "title": "没有赶到结尾的鸭子",
      "bg": "tc-bg-courtyard-day",
      "time": "16:30",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 24,
        "clock": "16:30"
      },
      "location": "网吧后院门内干处",
      "day": 24,
      "dayLabel": "第24天"
    },
    "ts_c04_huangqiuqiu_higher_seat": {
      "chapter": 4,
      "title": "想坐高一点",
      "bg": "tc-bg-courtyard-day",
      "time": "17:30",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 24,
        "clock": "17:30"
      },
      "location": "网吧后院门内干处",
      "day": 24,
      "dayLabel": "第24天"
    },
    "ts_c05_huangqiuqiu_no_compensation": {
      "chapter": 5,
      "title": "别猜我正在生气",
      "bg": "tc-bg-courtyard-day",
      "time": "17:00",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 27,
        "clock": "17:00"
      },
      "location": "网吧后院门内干处",
      "day": 27,
      "dayLabel": "第27天"
    },
    "ts_c05_huangqiuqiu_unfinished_yawn": {
      "chapter": 5,
      "title": "一个没说完的哈欠",
      "bg": "tc-bg-courtyard-day",
      "time": "16:30",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 29,
        "clock": "16:30"
      },
      "location": "网吧后院门内干处",
      "day": 29,
      "dayLabel": "第29天"
    },
    "ts_c06_huangqiuqiu_after_dinner": {
      "chapter": 6,
      "title": "门外换过一阵雨",
      "bg": "tc-bg-courtyard-day",
      "time": "16:00",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 32,
        "clock": "16:00"
      },
      "location": "网吧后院门内干处",
      "day": 32,
      "dayLabel": "第32天"
    },
    "ts_c06_huangqiuqiu_slow_joke": {
      "chapter": 6,
      "title": "她也会讲一个很糟的笑话",
      "bg": "tc-bg-courtyard-day",
      "time": "17:00",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 32,
        "clock": "17:00"
      },
      "location": "网吧后院门内干处",
      "day": 32,
      "dayLabel": "第32天"
    },
    "ts_c07_huangqiuqiu_quiet_company": {
      "chapter": 7,
      "title": "她今天想少说一点",
      "bg": "tc-bg-courtyard-day",
      "time": "17:00",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 40,
        "clock": "17:00"
      },
      "location": "网吧后院门内干处",
      "day": 40,
      "dayLabel": "第40天"
    },
    "ts_c07_huangqiuqiu_outing_return": {
      "chapter": 7,
      "title": "回收第24天的小选择",
      "bg": "tc-bg-courtyard-day",
      "time": "17:00",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 40,
        "clock": "17:00"
      },
      "location": "网吧后院门内干处",
      "day": 40,
      "dayLabel": "第40天"
    },
    "ts_c07_huangqiuqiu_another_form": {
      "chapter": 7,
      "title": "一个不能随便代替的名字",
      "bg": "tc-bg-courtyard-day",
      "time": "16:30",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 42,
        "clock": "16:30"
      },
      "location": "网吧后院门内干处",
      "day": 42,
      "dayLabel": "第42天"
    },
    "ts_c08_huangqiuqiu_trial_roster": {
      "chapter": 8,
      "title": "一张还会改的班表",
      "bg": "tc-bg-courtyard-day",
      "time": "16:00",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 55,
        "clock": "16:00"
      },
      "location": "网吧后院门内干处",
      "day": 55,
      "dayLabel": "第55天"
    },
    "ts_c08_huangqiuqiu_her_decision": {
      "chapter": 8,
      "title": "她想把手放一会儿",
      "bg": "tc-bg-courtyard-day",
      "time": "17:00",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 55,
        "clock": "17:00"
      },
      "location": "网吧后院门内干处",
      "day": 55,
      "dayLabel": "第55天"
    },
    "ts_c09_huangqiuqiu_relationship": {
      "chapter": 9,
      "title": "不是替故事选结尾",
      "bg": "tc-bg-courtyard-day",
      "time": "16:30",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 76,
        "clock": "16:30"
      },
      "location": "网吧后院侧门外",
      "day": 76,
      "dayLabel": "第76天"
    },
    "ts_c09_huangqiuqiu_relationship_inside": {
      "chapter": 9,
      "title": "不是替故事选结尾",
      "bg": "tc-bg-courtyard-day",
      "time": "16:30",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 76,
        "clock": "16:30"
      },
      "location": "网吧后院门内干处",
      "day": 76,
      "dayLabel": "第76天"
    },
    "ts_c09_huangqiuqiu_dating": {
      "chapter": 9,
      "title": "我可以再近一点吗",
      "bg": "tc-bg-courtyard-day",
      "time": "16:30",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 76,
        "clock": "16:30"
      },
      "location": "网吧后院门内干处",
      "day": 76,
      "dayLabel": "第76天"
    },
    "ts_c09_huangqiuqiu_dating_outside": {
      "chapter": 9,
      "title": "我可以再近一点吗",
      "bg": "tc-bg-courtyard-day",
      "time": "16:30",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 76,
        "clock": "16:30"
      },
      "location": "网吧后院侧门外",
      "day": 76,
      "dayLabel": "第76天"
    },
    "ts_c09_huangqiuqiu_friends": {
      "chapter": 9,
      "title": "这句话也会留下来",
      "bg": "tc-bg-courtyard-day",
      "time": "16:30",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 76,
        "clock": "16:30"
      },
      "location": "网吧后院门内干处",
      "day": 76,
      "dayLabel": "第76天"
    },
    "ts_c09_huangqiuqiu_friends_days_later": {
      "chapter": 9,
      "title": "这句话也会留下来",
      "bg": "tc-bg-courtyard-day",
      "time": "数日后·时间未注明",
      "chronology": {
        "domain": "story-day",
        "mode": "present",
        "day": 76,
        "clock": "数日后·时间未注明",
        "label": "第76天后的数日（具体日序未注明）"
      },
      "location": "网吧后院门内干处",
      "day": 76,
      "dayLabel": "第76天"
    },
    "ts_c10_huangqiuqiu_dating": {
      "chapter": 10,
      "title": "还是她，还是这一声回答",
      "bg": "tc-bg-courtyard-day",
      "time": "休息日的下午",
      "chronology": {
        "domain": "two-years-later",
        "mode": "present",
        "clock": "休息日的下午"
      },
      "location": "网吧后院侧门外",
      "day": null,
      "dayLabel": "两年后"
    },
    "ts_c10_huangqiuqiu_dating_inside": {
      "chapter": 10,
      "title": "还是她，还是这一声回答",
      "bg": "tc-bg-courtyard-day",
      "time": "休息日的下午",
      "chronology": {
        "domain": "two-years-later",
        "mode": "present",
        "clock": "休息日的下午"
      },
      "location": "网吧后院门内干处",
      "day": null,
      "dayLabel": "两年后"
    },
    "ts_c10_huangqiuqiu_dating_outside": {
      "chapter": 10,
      "title": "还是她，还是这一声回答",
      "bg": "tc-bg-courtyard-day",
      "time": "休息日的下午",
      "chronology": {
        "domain": "two-years-later",
        "mode": "present",
        "clock": "休息日的下午"
      },
      "location": "网吧后院侧门外",
      "day": null,
      "dayLabel": "两年后"
    },
    "ts_c10_huangqiuqiu_friends": {
      "chapter": 10,
      "title": "留给朋友的位置",
      "bg": "tc-bg-courtyard-day",
      "time": "休息日的下午",
      "chronology": {
        "domain": "two-years-later",
        "mode": "present",
        "clock": "休息日的下午"
      },
      "location": "网吧后院侧门外",
      "day": null,
      "dayLabel": "两年后"
    },
    "ts_c10_huangqiuqiu_friends_inside": {
      "chapter": 10,
      "title": "留给朋友的位置",
      "bg": "tc-bg-courtyard-day",
      "time": "休息日的下午",
      "chronology": {
        "domain": "two-years-later",
        "mode": "present",
        "clock": "休息日的下午"
      },
      "location": "网吧后院门内干处",
      "day": null,
      "dayLabel": "两年后"
    },
    "ts_c10_huangqiuqiu_friends_doorway": {
      "chapter": 10,
      "title": "留给朋友的位置",
      "bg": "tc-bg-courtyard-day",
      "time": "休息日的下午",
      "chronology": {
        "domain": "two-years-later",
        "mode": "present",
        "clock": "休息日的下午"
      },
      "location": "网吧后院门内门边",
      "day": null,
      "dayLabel": "两年后"
    },
    "ts_c10_huangqiuqiu_friends_inside_again": {
      "chapter": 10,
      "title": "留给朋友的位置",
      "bg": "tc-bg-courtyard-day",
      "time": "休息日的下午",
      "chronology": {
        "domain": "two-years-later",
        "mode": "present",
        "clock": "休息日的下午"
      },
      "location": "网吧后院门内干处",
      "day": null,
      "dayLabel": "两年后"
    },
    "ts_c10_huangqiuqiu_friends_outside": {
      "chapter": 10,
      "title": "留给朋友的位置",
      "bg": "tc-bg-courtyard-day",
      "time": "休息日的下午",
      "chronology": {
        "domain": "two-years-later",
        "mode": "present",
        "clock": "休息日的下午"
      },
      "location": "网吧后院侧门外",
      "day": null,
      "dayLabel": "两年后"
    }
  },
  "nodes": {
    "tc_c01_common_entry": {
      "id": "tc_c01_common_entry",
      "type": "line",
      "scene": "ts_c01_common_arrival_bus",
      "speaker": "narrator",
      "text": "大巴走了以后，站牌底下就剩我和一只不好拉的箱子。",
      "character": null,
      "next": "tc_c01_common_arrival_02"
    },
    "tc_c01_common_arrival_02": {
      "id": "tc_c01_common_arrival_02",
      "type": "line",
      "scene": "ts_c01_common_arrival_bus",
      "speaker": "narrator",
      "text": "箱子右边的轮子有点歪，过地砖缝时哒哒作响。三年没回毕节，我本来想走得像个刚好路过的人，结果一路都有人回头看。",
      "character": null,
      "next": "tc_c01_common_arrival_03"
    },
    "tc_c01_common_arrival_03": {
      "id": "tc_c01_common_arrival_03",
      "type": "line",
      "scene": "ts_c01_common_arrival_bus",
      "speaker": "narrator",
      "text": "手机亮起来。母亲问我到了没有，又问包里的本子湿没湿。",
      "character": null,
      "next": "tc_c01_common_arrival_04"
    },
    "tc_c01_common_arrival_04": {
      "id": "tc_c01_common_arrival_04",
      "type": "line",
      "scene": "ts_c01_common_arrival_bus",
      "speaker": "narrator",
      "text": "“到了。没湿。”我用手背擦一下额头，“晚饭不一定回去吃，毛狼说帮我问了份工作。”",
      "character": null,
      "next": "tc_c01_common_arrival_05"
    },
    "tc_c01_common_arrival_05": {
      "id": "tc_c01_common_arrival_05",
      "type": "line",
      "scene": "ts_c01_common_arrival_bus",
      "speaker": "narrator",
      "text": "母亲说家里留着饭。我等了一会儿，她没问工资，也没问为什么上一份不做了。那些在车上排练过的说法，暂时用不上。",
      "character": null,
      "next": "tc_c01_common_slope_01"
    },
    "tc_c01_common_slope_01": {
      "id": "tc_c01_common_slope_01",
      "type": "line",
      "scene": "ts_c01_common_arrival_slope",
      "speaker": "narrator",
      "text": "毛狼站在坡上，黑T恤的花纹隔着雨也很显眼。他先接箱子，拉出去两步，又把手柄塞回来。",
      "character": "maolang",
      "next": "tc_c01_common_slope_02"
    },
    "tc_c01_common_slope_02": {
      "id": "tc_c01_common_slope_02",
      "type": "line",
      "scene": "ts_c01_common_arrival_slope",
      "speaker": "maolang",
      "text": "“你带了个拖拉机？”",
      "character": "maolang",
      "next": "tc_c01_common_slope_03"
    },
    "tc_c01_common_slope_03": {
      "id": "tc_c01_common_slope_03",
      "type": "line",
      "scene": "ts_c01_common_arrival_slope",
      "speaker": "wenwen",
      "text": "“它上过班，比你稳定。”",
      "character": "maolang",
      "next": "tc_c01_common_slope_04"
    },
    "tc_c01_common_slope_04": {
      "id": "tc_c01_common_slope_04",
      "type": "line",
      "scene": "ts_c01_common_arrival_slope",
      "speaker": "maolang",
      "text": "“那让它去值夜班。你负责在旁边响。”",
      "character": "maolang",
      "next": "tc_c01_common_job_talk_01"
    },
    "tc_c01_common_job_talk_01": {
      "id": "tc_c01_common_job_talk_01",
      "type": "line",
      "scene": "ts_c01_common_first_shift_talk",
      "speaker": "narrator",
      "text": "网吧在一楼，玻璃门上贴着褪色的饮料价目表。里面不黑，靠窗那排开着顶灯，有人戴耳机看电影，也有人只是伏在桌边吃面。风扇和键盘声混在一起，比我想的普通。",
      "character": null,
      "next": "tc_c01_common_job_talk_02"
    },
    "tc_c01_common_job_talk_02": {
      "id": "tc_c01_common_job_talk_02",
      "type": "line",
      "scene": "ts_c01_common_first_shift_talk",
      "speaker": "narrator",
      "text": "师匠从柜台下面拿出一包纸，先扔给毛狼。",
      "character": "shijiang",
      "next": "tc_c01_common_job_talk_03"
    },
    "tc_c01_common_job_talk_03": {
      "id": "tc_c01_common_job_talk_03",
      "type": "line",
      "scene": "ts_c01_common_first_shift_talk",
      "speaker": "shijiang",
      "text": "“鞋擦干。上回你进来，把地踩得像刚插完秧。”",
      "character": "shijiang",
      "next": "tc_c01_common_job_talk_04"
    },
    "tc_c01_common_job_talk_04": {
      "id": "tc_c01_common_job_talk_04",
      "type": "line",
      "scene": "ts_c01_common_first_shift_talk",
      "speaker": "narrator",
      "text": "毛狼说这回带了劳动人口，可以将功补过。师匠看我一眼，问夜班能不能做。",
      "character": "maolang",
      "next": "tc_c01_common_job_talk_05"
    },
    "tc_c01_common_job_talk_05": {
      "id": "tc_c01_common_job_talk_05",
      "type": "line",
      "scene": "ts_c01_common_first_shift_talk",
      "speaker": "shijiang",
      "text": "“晚上十点到早上六点。按谈好的班次算，有休班。先把钱怎么发、休息怎么排讲明白，别干了半个月才觉得我骗你。”",
      "character": "shijiang",
      "next": "tc_c01_common_job_talk_06"
    },
    "tc_c01_common_job_talk_06": {
      "id": "tc_c01_common_job_talk_06",
      "type": "line",
      "scene": "ts_c01_common_first_shift_talk",
      "speaker": "narrator",
      "text": "我们坐在柜台旁，把待遇和试做的几天谈清楚。我问了两次休息安排，第二次声音小了一点。",
      "character": "shijiang",
      "next": "tc_c01_common_job_talk_07"
    },
    "tc_c01_common_job_talk_07": {
      "id": "tc_c01_common_job_talk_07",
      "type": "line",
      "scene": "ts_c01_common_first_shift_talk",
      "speaker": "narrator",
      "text": "师匠倒没嫌烦：“要睡觉就问，别装自己不用睡。”",
      "character": "shijiang",
      "next": "tc_c01_common_job_talk_08"
    },
    "tc_c01_common_job_talk_08": {
      "id": "tc_c01_common_job_talk_08",
      "type": "line",
      "scene": "ts_c01_common_first_shift_talk",
      "speaker": "narrator",
      "text": "收银、开机、饮料补货、有人喊的时候过去看看。这些我会学，太复杂的故障另找负责的人。我原先准备好的“我什么都能弄一点”没派上用场。",
      "character": "shijiang",
      "next": "tc_c01_common_job_talk_09"
    },
    "tc_c01_common_job_talk_09": {
      "id": "tc_c01_common_job_talk_09",
      "type": "line",
      "scene": "ts_c01_common_first_shift_talk",
      "speaker": "narrator",
      "text": "毛狼探过来：“以后叫你文管？”",
      "character": "maolang",
      "next": "tc_c01_common_job_talk_10"
    },
    "tc_c01_common_job_talk_10": {
      "id": "tc_c01_common_job_talk_10",
      "type": "line",
      "scene": "ts_c01_common_first_shift_talk",
      "speaker": "wenwen",
      "text": "“叫我名字。”",
      "character": "shijiang",
      "next": "tc_c01_common_job_talk_11"
    },
    "tc_c01_common_job_talk_11": {
      "id": "tc_c01_common_job_talk_11",
      "type": "line",
      "scene": "ts_c01_common_first_shift_talk",
      "speaker": "maolang",
      "text": "“文老板？”",
      "character": "maolang",
      "next": "tc_c01_common_job_talk_12"
    },
    "tc_c01_common_job_talk_12": {
      "id": "tc_c01_common_job_talk_12",
      "type": "line",
      "scene": "ts_c01_common_first_shift_talk",
      "speaker": "narrator",
      "text": "师匠抬头：“你叫他老板，工资找他拿？”",
      "character": "shijiang",
      "next": "tc_c01_common_job_talk_13"
    },
    "tc_c01_common_job_talk_13": {
      "id": "tc_c01_common_job_talk_13",
      "type": "line",
      "scene": "ts_c01_common_first_shift_talk",
      "speaker": "narrator",
      "text": "毛狼把嘴闭上了。他可能觉得为了逞一句嘴冒这个险，不太值得。",
      "character": "maolang",
      "next": "tc_c01_common_three_taps_01"
    },
    "tc_c01_common_three_taps_01": {
      "id": "tc_c01_common_three_taps_01",
      "type": "line",
      "scene": "ts_c01_common_three_taps",
      "speaker": "narrator",
      "text": "正式上班还差二十分钟。我把晚饭盒丢进外面的垃圾桶，顺着网吧侧边的小路走回来。",
      "character": null,
      "next": "tc_c01_common_three_taps_02"
    },
    "tc_c01_common_three_taps_02": {
      "id": "tc_c01_common_three_taps_02",
      "type": "line",
      "scene": "ts_c01_common_three_taps",
      "speaker": "narrator",
      "text": "后院门虚掩着。里面响了三下：轻、轻，隔了一点，再重一些。",
      "character": null,
      "next": "tc_c01_common_three_taps_03"
    },
    "tc_c01_common_three_taps_03": {
      "id": "tc_c01_common_three_taps_03",
      "type": "line",
      "scene": "ts_c01_common_three_taps",
      "speaker": "narrator",
      "text": "我以为有人叫，停住。隔着门缝，只有一截潮湿的墙，和塑料凳露出来的蓝腿。",
      "character": null,
      "next": "tc_c01_common_three_taps_04"
    },
    "tc_c01_common_three_taps_04": {
      "id": "tc_c01_common_three_taps_04",
      "type": "line",
      "scene": "ts_c01_common_three_taps",
      "speaker": "narrator",
      "text": "“……后面还有。”",
      "character": null,
      "next": "tc_c01_common_three_taps_05"
    },
    "tc_c01_common_three_taps_05": {
      "id": "tc_c01_common_three_taps_05",
      "type": "line",
      "scene": "ts_c01_common_three_taps",
      "speaker": "narrator",
      "text": "声音很轻，像有人正把一句被打断的话接回来。",
      "character": null,
      "next": "tc_c01_common_three_taps_06"
    },
    "tc_c01_common_three_taps_06": {
      "id": "tc_c01_common_three_taps_06",
      "type": "line",
      "scene": "ts_c01_common_three_taps",
      "speaker": "narrator",
      "text": "我没有推门。柜台里传来找零钱的声音，时间也还够我站一会儿。",
      "character": null,
      "next": "tc_c01_common_rhythm_record_choice"
    },
    "tc_c01_common_rhythm_record_01": {
      "id": "tc_c01_common_rhythm_record_01",
      "type": "line",
      "scene": "ts_c01_common_three_taps",
      "speaker": "narrator",
      "text": "我拿出手机，在备忘录里打了三个点，又把第二个和第三个之间拉开一点。",
      "character": null,
      "next": "tc_c01_common_rhythm_record_02"
    },
    "tc_c01_common_rhythm_record_02": {
      "id": "tc_c01_common_rhythm_record_02",
      "type": "line",
      "scene": "ts_c01_common_three_taps",
      "speaker": "wenwen",
      "text": "“是这样吗？”我压低声音问。",
      "character": null,
      "next": "tc_c01_common_rhythm_record_03"
    },
    "tc_c01_common_rhythm_record_03": {
      "id": "tc_c01_common_rhythm_record_03",
      "type": "line",
      "scene": "ts_c01_common_three_taps",
      "speaker": "narrator",
      "text": "门内没有回答。我又站了一小会儿，记下“网吧后院，三下轻响”，把手机收好。",
      "character": null,
      "next": "tc_c01_common_rhythm_record_04"
    },
    "tc_c01_common_rhythm_record_04": {
      "id": "tc_c01_common_rhythm_record_04",
      "type": "line",
      "scene": "ts_c01_common_three_taps",
      "speaker": "narrator",
      "text": "那不是一个答案，但至少下次再听见，我不会把它当成另一件事。",
      "character": null,
      "next": "tc_c01_common_first_shift_01"
    },
    "tc_c01_common_rhythm_ignore_01": {
      "id": "tc_c01_common_rhythm_ignore_01",
      "type": "line",
      "scene": "ts_c01_common_back_to_counter",
      "speaker": "narrator",
      "text": "我朝门里问了一句有没有人。没有回应，便退回亮着灯的门厅。",
      "character": null,
      "next": "tc_c01_common_rhythm_ignore_02"
    },
    "tc_c01_common_rhythm_ignore_02": {
      "id": "tc_c01_common_rhythm_ignore_02",
      "type": "line",
      "scene": "ts_c01_common_back_to_counter",
      "speaker": "narrator",
      "text": "师匠正把零钱数给客人。我接过空饮料箱，放回柜台下面。三下响声被别的声音盖住，没再响起。",
      "character": "shijiang",
      "next": "tc_c01_common_first_shift_01"
    },
    "tc_c01_common_first_shift_01": {
      "id": "tc_c01_common_first_shift_01",
      "type": "line",
      "scene": "ts_c01_common_first_shift",
      "speaker": "narrator",
      "text": "师匠把最常用的几个操作演给我看。轮到我试时，我把可乐输成了雪碧。",
      "character": "shijiang",
      "next": "tc_c01_common_first_shift_02"
    },
    "tc_c01_common_first_shift_02": {
      "id": "tc_c01_common_first_shift_02",
      "type": "line",
      "scene": "ts_c01_common_first_shift",
      "speaker": "shijiang",
      "text": "“第一笔就有创造力。”他说。",
      "character": "shijiang",
      "next": "tc_c01_common_first_shift_03"
    },
    "tc_c01_common_first_shift_03": {
      "id": "tc_c01_common_first_shift_03",
      "type": "line",
      "scene": "ts_c01_common_first_shift",
      "speaker": "narrator",
      "text": "我撤掉重来，把客人要的可乐递过去。对方只关心冰不冰，没关心我的职业起点。",
      "character": "shijiang",
      "next": "tc_c01_common_night_greeting_01"
    },
    "tc_c01_common_night_greeting_01": {
      "id": "tc_c01_common_night_greeting_01",
      "type": "line",
      "scene": "ts_c01_common_night_greeting",
      "speaker": "narrator",
      "text": "夜里两点，有人过来要热水。我以为自己很精神，开口却说了句“早上好”。那人看我，我也看他。",
      "character": null,
      "next": "tc_c01_common_night_greeting_02"
    },
    "tc_c01_common_night_greeting_02": {
      "id": "tc_c01_common_night_greeting_02",
      "type": "line",
      "scene": "ts_c01_common_night_greeting",
      "speaker": "wenwen",
      "text": "“预支。”我说。",
      "character": null,
      "next": "tc_c01_common_night_greeting_03"
    },
    "tc_c01_common_night_greeting_03": {
      "id": "tc_c01_common_night_greeting_03",
      "type": "line",
      "scene": "ts_c01_common_night_greeting",
      "speaker": "narrator",
      "text": "他点点头：“那也预支一包纸。”",
      "character": null,
      "next": "tc_c01_common_night_greeting_04"
    },
    "tc_c01_common_night_greeting_04": {
      "id": "tc_c01_common_night_greeting_04",
      "type": "line",
      "scene": "ts_c01_common_night_greeting",
      "speaker": "narrator",
      "text": "我把纸递过去，忍不住笑了一下。第一晚既没有谁专程来捣乱，也没有等着我拯救的故障。最多的是找零、擦桌子，以及确认刚才那位到底点了两碗面还是一碗。",
      "character": null,
      "next": "tc_c01_common_handover_01"
    },
    "tc_c01_common_handover_01": {
      "id": "tc_c01_common_handover_01",
      "type": "line",
      "scene": "ts_c01_common_dawn_handover",
      "speaker": "narrator",
      "text": "六点有人接班。我把最后一笔账说清，出了门才发现天已经白了。",
      "character": null,
      "next": "tc_c01_common_breakfast_01"
    },
    "tc_c01_common_breakfast_01": {
      "id": "tc_c01_common_breakfast_01",
      "type": "line",
      "scene": "ts_c01_common_breakfast",
      "speaker": "narrator",
      "text": "毛狼蹲在早餐店门口，手里捏着一张演出贴纸。他昨晚去做临时主持，刚把借来的衣服还掉。",
      "character": "maolang",
      "next": "tc_c01_common_breakfast_02"
    },
    "tc_c01_common_breakfast_02": {
      "id": "tc_c01_common_breakfast_02",
      "type": "line",
      "scene": "ts_c01_common_breakfast",
      "speaker": "maolang",
      "text": "“接风。”他抬起下巴，“你请。”",
      "character": "maolang",
      "next": "tc_c01_common_breakfast_03"
    },
    "tc_c01_common_breakfast_03": {
      "id": "tc_c01_common_breakfast_03",
      "type": "line",
      "scene": "ts_c01_common_breakfast",
      "speaker": "wenwen",
      "text": "“接的是谁的风？”",
      "character": "maolang",
      "next": "tc_c01_common_breakfast_04"
    },
    "tc_c01_common_breakfast_04": {
      "id": "tc_c01_common_breakfast_04",
      "type": "line",
      "scene": "ts_c01_common_breakfast",
      "speaker": "maolang",
      "text": "“毕节的。昨晚挺大。”",
      "character": "maolang",
      "next": "tc_c01_common_breakfast_05"
    },
    "tc_c01_common_breakfast_05": {
      "id": "tc_c01_common_breakfast_05",
      "type": "line",
      "scene": "ts_c01_common_breakfast",
      "speaker": "narrator",
      "text": "我买了两碗面，坐到他对面。店里的椅子很矮，膝盖不知道往哪儿放。他说昨晚把抽奖嘉宾的名字念错一个字，对方上台以后很给面子，先纠正，再自己笑。",
      "character": "maolang",
      "next": "tc_c01_common_breakfast_06"
    },
    "tc_c01_common_breakfast_06": {
      "id": "tc_c01_common_breakfast_06",
      "type": "line",
      "scene": "ts_c01_common_breakfast",
      "speaker": "wenwen",
      "text": "“你后来怎么补的？”",
      "character": "maolang",
      "next": "tc_c01_common_breakfast_07"
    },
    "tc_c01_common_breakfast_07": {
      "id": "tc_c01_common_breakfast_07",
      "type": "line",
      "scene": "ts_c01_common_breakfast",
      "speaker": "maolang",
      "text": "“老实认。再往回圆容易把人家姓都改了。”",
      "character": "maolang",
      "next": "tc_c01_common_breakfast_08"
    },
    "tc_c01_common_breakfast_08": {
      "id": "tc_c01_common_breakfast_08",
      "type": "line",
      "scene": "ts_c01_common_breakfast",
      "speaker": "narrator",
      "text": "他说完问我第一班怎么样。我把“预支早上好”讲给他听，他笑得差点把辣椒呛进鼻子。",
      "character": "maolang",
      "next": "tc_c01_common_breakfast_09"
    },
    "tc_c01_common_breakfast_09": {
      "id": "tc_c01_common_breakfast_09",
      "type": "line",
      "scene": "ts_c01_common_breakfast",
      "speaker": "narrator",
      "text": "群里有人问晚上组不组。他打字飞快，转过屏幕给我看：“有个位置，休班的时候来。里面人都上班，没人陪你全天耗。”",
      "character": "maolang",
      "next": "tc_c01_common_breakfast_10"
    },
    "tc_c01_common_breakfast_10": {
      "id": "tc_c01_common_breakfast_10",
      "type": "line",
      "scene": "ts_c01_common_breakfast",
      "speaker": "wenwen",
      "text": "“以前那个队？”",
      "character": "maolang",
      "next": "tc_c01_common_breakfast_11"
    },
    "tc_c01_common_breakfast_11": {
      "id": "tc_c01_common_breakfast_11",
      "type": "line",
      "scene": "ts_c01_common_breakfast",
      "speaker": "maolang",
      "text": "“换过人，现在这几个合得来。你先进去，别一上来就装大神。”",
      "character": "maolang",
      "next": "tc_c01_common_breakfast_12"
    },
    "tc_c01_common_breakfast_12": {
      "id": "tc_c01_common_breakfast_12",
      "type": "line",
      "scene": "ts_c01_common_breakfast",
      "speaker": "narrator",
      "text": "我还想反驳，打了个很长的哈欠。",
      "character": "maolang",
      "next": "tc_c01_common_breakfast_13"
    },
    "tc_c01_common_breakfast_13": {
      "id": "tc_c01_common_breakfast_13",
      "type": "line",
      "scene": "ts_c01_common_breakfast",
      "speaker": "narrator",
      "text": "毛狼把我那碗没碰的面往前推：“吃完回去睡。接风活动到这里，主宾掉线了。”",
      "character": "maolang",
      "next": "tc_c01_common_morning_messages_01"
    },
    "tc_c01_common_morning_messages_01": {
      "id": "tc_c01_common_morning_messages_01",
      "type": "line",
      "scene": "ts_c01_common_morning_messages",
      "speaker": "narrator",
      "text": "我租的住处离网吧不远。回去以后，我把箱子放墙边，才看见手机里刚加入的群。一个灰蓝色头像发来消息。",
      "character": null,
      "next": "tc_c01_common_morning_messages_02"
    },
    "tc_c01_common_morning_messages_02": {
      "id": "tc_c01_common_morning_messages_02",
      "type": "line",
      "scene": "ts_c01_common_morning_messages",
      "speaker": "narrator",
      "text": "“新来的报名字，别让毛狼随便给你起。”",
      "character": null,
      "next": "tc_c01_common_morning_messages_03"
    },
    "tc_c01_common_morning_messages_03": {
      "id": "tc_c01_common_morning_messages_03",
      "type": "line",
      "scene": "ts_c01_common_morning_messages",
      "speaker": "narrator",
      "text": "我回：“文文。”",
      "character": null,
      "next": "tc_c01_common_morning_messages_04"
    },
    "tc_c01_common_morning_messages_04": {
      "id": "tc_c01_common_morning_messages_04",
      "type": "line",
      "scene": "ts_c01_common_morning_messages",
      "speaker": "narrator",
      "text": "她回：“行。我叫叶岚。今天别回了，他说你刚下夜班。”",
      "character": null,
      "next": "tc_c01_common_morning_messages_05"
    },
    "tc_c01_common_morning_messages_05": {
      "id": "tc_c01_common_morning_messages_05",
      "type": "line",
      "scene": "ts_c01_common_morning_messages",
      "speaker": "narrator",
      "text": "我本来还想打一段客气话，屏幕已经蹭到鼻子。醒来时，窗外到了下午。",
      "character": null,
      "next": "tc_c01_common_salon_01"
    },
    "tc_c01_common_salon_01": {
      "id": "tc_c01_common_salon_01",
      "type": "line",
      "scene": "ts_c01_common_salon",
      "speaker": "narrator",
      "text": "理发店的玻璃门上映出我睡乱的头发。小满拿着扫帚走过来，先看头，再看脸。",
      "character": "xiaoman",
      "next": "tc_c01_common_salon_02",
      "expression": "outfit-work-apron"
    },
    "tc_c01_common_salon_02": {
      "id": "tc_c01_common_salon_02",
      "type": "line",
      "scene": "ts_c01_common_salon",
      "speaker": "xiaoman",
      "text": "“你这个发型，自己熬出来的？”",
      "character": "xiaoman",
      "next": "tc_c01_common_salon_03",
      "expression": "outfit-work-apron",
      "avatarExpression": "outfit-work-apron"
    },
    "tc_c01_common_salon_03": {
      "id": "tc_c01_common_salon_03",
      "type": "line",
      "scene": "ts_c01_common_salon",
      "speaker": "wenwen",
      "text": "“睡出来的。”",
      "character": "xiaoman",
      "next": "tc_c01_common_salon_04",
      "expression": "outfit-work-apron"
    },
    "tc_c01_common_salon_04": {
      "id": "tc_c01_common_salon_04",
      "type": "line",
      "scene": "ts_c01_common_salon",
      "speaker": "xiaoman",
      "text": "“那睡眠质量不行。发型质量也不行。”",
      "character": "xiaoman",
      "next": "tc_c01_common_salon_05",
      "expression": "outfit-work-apron",
      "avatarExpression": "outfit-work-apron"
    },
    "tc_c01_common_salon_05": {
      "id": "tc_c01_common_salon_05",
      "type": "line",
      "scene": "ts_c01_common_salon",
      "speaker": "narrator",
      "text": "她比记忆里瘦一点，浅金短发翘在耳边。店里有人叫她，她应一声，先把地上的碎发扫完，才指了指靠窗椅子。",
      "character": "xiaoman",
      "next": "tc_c01_common_salon_06",
      "expression": "outfit-work-apron"
    },
    "tc_c01_common_salon_06": {
      "id": "tc_c01_common_salon_06",
      "type": "line",
      "scene": "ts_c01_common_salon",
      "speaker": "xiaoman",
      "text": "“今天不能给你剪。等下有人来，师傅排满了。”",
      "character": "xiaoman",
      "next": "tc_c01_common_salon_07",
      "expression": "outfit-work-apron",
      "avatarExpression": "outfit-work-apron"
    },
    "tc_c01_common_salon_07": {
      "id": "tc_c01_common_salon_07",
      "type": "line",
      "scene": "ts_c01_common_salon",
      "speaker": "wenwen",
      "text": "“我又没说要剪。”",
      "character": "xiaoman",
      "next": "tc_c01_common_salon_08",
      "expression": "outfit-work-apron"
    },
    "tc_c01_common_salon_08": {
      "id": "tc_c01_common_salon_08",
      "type": "line",
      "scene": "ts_c01_common_salon",
      "speaker": "xiaoman",
      "text": "“你站在理发店里一直摸头，我只能往正常方向猜。”",
      "character": "xiaoman",
      "next": "tc_c01_common_salon_09",
      "expression": "outfit-work-apron",
      "avatarExpression": "outfit-work-apron"
    },
    "tc_c01_common_salon_09": {
      "id": "tc_c01_common_salon_09",
      "type": "line",
      "scene": "ts_c01_common_salon",
      "speaker": "narrator",
      "text": "我说只是路过。她把一瓶常温水推过来，说路过的人也可以喝，别站着装很忙。",
      "character": "xiaoman",
      "next": "tc_c01_common_salon_10",
      "expression": "outfit-work-apron"
    },
    "tc_c01_common_salon_10": {
      "id": "tc_c01_common_salon_10",
      "type": "line",
      "scene": "ts_c01_common_salon",
      "speaker": "narrator",
      "text": "我在椅子上坐了十分钟。她练习本摊在小桌边，发旋画得像煎蛋，旁边有个歪歪的小勾。我刚要指，她先把本子抽走。",
      "character": "xiaoman",
      "next": "tc_c01_common_salon_11",
      "expression": "outfit-work-apron"
    },
    "tc_c01_common_salon_11": {
      "id": "tc_c01_common_salon_11",
      "type": "line",
      "scene": "ts_c01_common_salon",
      "speaker": "xiaoman",
      "text": "“老的。”",
      "character": "xiaoman",
      "next": "tc_c01_common_salon_12",
      "expression": "outfit-work-apron",
      "avatarExpression": "outfit-work-apron"
    },
    "tc_c01_common_salon_12": {
      "id": "tc_c01_common_salon_12",
      "type": "line",
      "scene": "ts_c01_common_salon",
      "speaker": "wenwen",
      "text": "“我没说不好。”",
      "character": "xiaoman",
      "next": "tc_c01_common_salon_13",
      "expression": "outfit-work-apron"
    },
    "tc_c01_common_salon_13": {
      "id": "tc_c01_common_salon_13",
      "type": "line",
      "scene": "ts_c01_common_salon",
      "speaker": "xiaoman",
      "text": "“你那个表情已经说了。”",
      "character": "xiaoman",
      "next": "tc_c01_common_salon_14",
      "expression": "outfit-work-apron",
      "avatarExpression": "outfit-work-apron"
    },
    "tc_c01_common_salon_14": {
      "id": "tc_c01_common_salon_14",
      "type": "line",
      "scene": "ts_c01_common_salon",
      "speaker": "narrator",
      "text": "小时候她拿粉笔在台阶上画东西，也是这样，先把她不满意的擦掉，才肯让人看。如今擦不掉的东西多了，纸上有修改，有压得发亮的折痕。",
      "character": "xiaoman",
      "next": "tc_c01_common_salon_15",
      "expression": "outfit-work-apron"
    },
    "tc_c01_common_salon_15": {
      "id": "tc_c01_common_salon_15",
      "type": "line",
      "scene": "ts_c01_common_salon",
      "speaker": "wenwen",
      "text": "“现在挺忙？”我问。",
      "character": "xiaoman",
      "next": "tc_c01_common_salon_16",
      "expression": "outfit-work-apron"
    },
    "tc_c01_common_salon_16": {
      "id": "tc_c01_common_salon_16",
      "type": "line",
      "scene": "ts_c01_common_salon",
      "speaker": "xiaoman",
      "text": "“忙。也不是都忙正经的。昨天找一个发夹找了半小时，最后在自己头上。”",
      "character": "xiaoman",
      "next": "tc_c01_common_salon_17",
      "expression": "outfit-work-apron",
      "avatarExpression": "outfit-work-apron"
    },
    "tc_c01_common_salon_17": {
      "id": "tc_c01_common_salon_17",
      "type": "line",
      "scene": "ts_c01_common_salon",
      "speaker": "wenwen",
      "text": "“这经验可以收费。”",
      "character": "xiaoman",
      "next": "tc_c01_common_salon_18",
      "expression": "outfit-work-apron"
    },
    "tc_c01_common_salon_18": {
      "id": "tc_c01_common_salon_18",
      "type": "line",
      "scene": "ts_c01_common_salon",
      "speaker": "narrator",
      "text": "她笑了，眼睛朝门口一偏，提醒我别挡客人进来。",
      "character": "xiaoman",
      "next": "tc_c01_common_salon_19",
      "expression": "outfit-work-apron"
    },
    "tc_c01_common_salon_19": {
      "id": "tc_c01_common_salon_19",
      "type": "line",
      "scene": "ts_c01_common_salon",
      "speaker": "narrator",
      "text": "我走时，她没说下次免费剪，只说：“下回想聊天就说聊天。我好给你留椅子。”",
      "character": "xiaoman",
      "next": "tc_c01_common_reunion_01",
      "expression": "outfit-work-apron"
    },
    "tc_c01_common_reunion_01": {
      "id": "tc_c01_common_reunion_01",
      "type": "line",
      "scene": "ts_c01_common_reunion",
      "speaker": "narrator",
      "text": "我在便利店挑晚饭，听见身后有人用很耐心的声音说：“这部分我会再和他练。您先别急着把整页都撕掉，错题还能再看。”",
      "character": null,
      "next": "tc_c01_common_reunion_02"
    },
    "tc_c01_common_reunion_02": {
      "id": "tc_c01_common_reunion_02",
      "type": "line",
      "scene": "ts_c01_common_reunion",
      "speaker": "narrator",
      "text": "孟遥挂了电话，拿着一盒酸奶，抬头见到我。",
      "character": "mengyao",
      "next": "tc_c01_common_reunion_03"
    },
    "tc_c01_common_reunion_03": {
      "id": "tc_c01_common_reunion_03",
      "type": "line",
      "scene": "ts_c01_common_reunion",
      "speaker": "narrator",
      "text": "我们同时停了一下。",
      "character": "mengyao",
      "next": "tc_c01_common_reunion_04"
    },
    "tc_c01_common_reunion_04": {
      "id": "tc_c01_common_reunion_04",
      "type": "line",
      "scene": "ts_c01_common_reunion",
      "speaker": "mengyao",
      "text": "“回来了？”她问。",
      "character": "mengyao",
      "next": "tc_c01_common_reunion_05"
    },
    "tc_c01_common_reunion_05": {
      "id": "tc_c01_common_reunion_05",
      "type": "line",
      "scene": "ts_c01_common_reunion",
      "speaker": "wenwen",
      "text": "“嗯。”",
      "character": "mengyao",
      "next": "tc_c01_common_reunion_06"
    },
    "tc_c01_common_reunion_06": {
      "id": "tc_c01_common_reunion_06",
      "type": "line",
      "scene": "ts_c01_common_reunion",
      "speaker": "mengyao",
      "text": "“听毛狼说了。夜班？”",
      "character": "mengyao",
      "next": "tc_c01_common_reunion_07"
    },
    "tc_c01_common_reunion_07": {
      "id": "tc_c01_common_reunion_07",
      "type": "line",
      "scene": "ts_c01_common_reunion",
      "speaker": "wenwen",
      "text": "“先在网吧做着。”",
      "character": "mengyao",
      "next": "tc_c01_common_reunion_08"
    },
    "tc_c01_common_reunion_08": {
      "id": "tc_c01_common_reunion_08",
      "type": "line",
      "scene": "ts_c01_common_reunion",
      "speaker": "narrator",
      "text": "她点点头，把手机收进包。外面有个孩子经过，叫了一声老师。她笑着应了，等人走远，才低头看酸奶的吸管。",
      "character": "mengyao",
      "next": "tc_c01_common_reunion_09"
    },
    "tc_c01_common_reunion_09": {
      "id": "tc_c01_common_reunion_09",
      "type": "line",
      "scene": "ts_c01_common_reunion",
      "speaker": "mengyao",
      "text": "“断了。”",
      "character": "mengyao",
      "next": "tc_c01_common_reunion_10"
    },
    "tc_c01_common_reunion_10": {
      "id": "tc_c01_common_reunion_10",
      "type": "line",
      "scene": "ts_c01_common_reunion",
      "speaker": "narrator",
      "text": "我从柜台纸盒里取一根递过去。她接过来，戳了两次才成功。",
      "character": "mengyao",
      "next": "tc_c01_common_reunion_11"
    },
    "tc_c01_common_reunion_11": {
      "id": "tc_c01_common_reunion_11",
      "type": "line",
      "scene": "ts_c01_common_reunion",
      "speaker": "wenwen",
      "text": "“你以前玩游戏，输了也这样戳键盘。”我说。",
      "character": "mengyao",
      "next": "tc_c01_common_reunion_12"
    },
    "tc_c01_common_reunion_12": {
      "id": "tc_c01_common_reunion_12",
      "type": "line",
      "scene": "ts_c01_common_reunion",
      "speaker": "mengyao",
      "text": "“你以前输了就说网卡。”她看我，“现在管网吧了，还打算怪谁？”",
      "character": "mengyao",
      "next": "tc_c01_common_reunion_13"
    },
    "tc_c01_common_reunion_13": {
      "id": "tc_c01_common_reunion_13",
      "type": "line",
      "scene": "ts_c01_common_reunion",
      "speaker": "narrator",
      "text": "我笑出了声。那一瞬很像以前，笑完又不是。我们站得不远，却没人自然接过对方的袋子。",
      "character": "mengyao",
      "next": "tc_c01_common_reunion_14"
    },
    "tc_c01_common_reunion_14": {
      "id": "tc_c01_common_reunion_14",
      "type": "line",
      "scene": "ts_c01_common_reunion",
      "speaker": "narrator",
      "text": "她现在在培训机构教英语，刚下完课，还得回去备明天的。她说到一半，我问是不是总有家长找。",
      "character": "mengyao",
      "next": "tc_c01_common_reunion_15"
    },
    "tc_c01_common_reunion_15": {
      "id": "tc_c01_common_reunion_15",
      "type": "line",
      "scene": "ts_c01_common_reunion",
      "speaker": "mengyao",
      "text": "“也不是总有。只是有电话的时候你刚好听见。”",
      "character": "mengyao",
      "next": "tc_c01_common_reunion_16"
    },
    "tc_c01_common_reunion_16": {
      "id": "tc_c01_common_reunion_16",
      "type": "line",
      "scene": "ts_c01_common_reunion",
      "speaker": "narrator",
      "text": "她说得很平常，我却有点尴尬。我差点又把她的一小段生活，当成我已经了解的全部。",
      "character": "mengyao",
      "next": "tc_c01_common_reunion_fork_01"
    },
    "tc_c01_common_reunion_fork_01": {
      "id": "tc_c01_common_reunion_fork_01",
      "type": "line",
      "scene": "ts_c01_common_reunion_fork",
      "speaker": "narrator",
      "text": "两个人走到岔路口。她朝上，我朝下。",
      "character": "mengyao",
      "next": "tc_c01_common_reunion_choice"
    },
    "tc_c01_common_rhythm_record_choice": {
      "id": "tc_c01_common_rhythm_record_choice",
      "type": "choice",
      "scene": "ts_c01_common_three_taps",
      "flag": "qiuSignal",
      "text": "我怎样对待刚才听到的声音？",
      "choices": [
        {
          "label": "再听一遍，把三拍记下来",
          "value": "record",
          "next": "tc_c01_common_rhythm_record_01"
        },
        {
          "label": "先回柜台，暂时不记",
          "value": "ignore",
          "next": "tc_c01_common_rhythm_ignore_01"
        }
      ],
      "character": null
    },
    "tc_c01_common_reunion_nervous_01": {
      "id": "tc_c01_common_reunion_nervous_01",
      "type": "line",
      "scene": "ts_c01_common_reunion_fork",
      "speaker": "wenwen",
      "text": "“刚才见你，我有点不知道说什么。”",
      "character": "mengyao",
      "next": "tc_c01_common_reunion_nervous_02"
    },
    "tc_c01_common_reunion_nervous_02": {
      "id": "tc_c01_common_reunion_nervous_02",
      "type": "line",
      "scene": "ts_c01_common_reunion_fork",
      "speaker": "narrator",
      "text": "她手里的袋子晃了一下。",
      "character": "mengyao",
      "next": "tc_c01_common_reunion_nervous_03"
    },
    "tc_c01_common_reunion_nervous_03": {
      "id": "tc_c01_common_reunion_nervous_03",
      "type": "line",
      "scene": "ts_c01_common_reunion_fork",
      "speaker": "mengyao",
      "text": "“看得出来。你把饭盒翻了三面。”",
      "character": "mengyao",
      "next": "tc_c01_common_reunion_nervous_04"
    },
    "tc_c01_common_reunion_nervous_04": {
      "id": "tc_c01_common_reunion_nervous_04",
      "type": "line",
      "scene": "ts_c01_common_reunion_fork",
      "speaker": "wenwen",
      "text": "“我在看配料。”",
      "character": "mengyao",
      "next": "tc_c01_common_reunion_nervous_05"
    },
    "tc_c01_common_reunion_nervous_05": {
      "id": "tc_c01_common_reunion_nervous_05",
      "type": "line",
      "scene": "ts_c01_common_reunion_fork",
      "speaker": "mengyao",
      "text": "“文文。”她笑得很轻，“可以就紧张，不用每句都补一句。”",
      "character": "mengyao",
      "next": "tc_c01_common_reunion_message_01"
    },
    "tc_c01_common_reunion_availability_01": {
      "id": "tc_c01_common_reunion_availability_01",
      "type": "line",
      "scene": "ts_c01_common_reunion_fork",
      "speaker": "wenwen",
      "text": "“你哪天没那么赶？可以一起吃顿饭。”",
      "character": "mengyao",
      "next": "tc_c01_common_reunion_availability_02"
    },
    "tc_c01_common_reunion_availability_02": {
      "id": "tc_c01_common_reunion_availability_02",
      "type": "line",
      "scene": "ts_c01_common_reunion_fork",
      "speaker": "mengyao",
      "text": "“我得看课表。”她停了停，“你也看一下自己的班。别像以前，先说哪天都行。”",
      "character": "mengyao",
      "next": "tc_c01_common_reunion_availability_03"
    },
    "tc_c01_common_reunion_availability_03": {
      "id": "tc_c01_common_reunion_availability_03",
      "type": "line",
      "scene": "ts_c01_common_reunion_fork",
      "speaker": "wenwen",
      "text": "“行。我先看。”",
      "character": "mengyao",
      "next": "tc_c01_common_reunion_availability_04"
    },
    "tc_c01_common_reunion_availability_04": {
      "id": "tc_c01_common_reunion_availability_04",
      "type": "line",
      "scene": "ts_c01_common_reunion_fork",
      "speaker": "mengyao",
      "text": "“这次这个‘行’，听着还可以。”",
      "character": "mengyao",
      "next": "tc_c01_common_reunion_message_01"
    },
    "tc_c01_common_reunion_choice": {
      "id": "tc_c01_common_reunion_choice",
      "type": "choice",
      "scene": "ts_c01_common_reunion_fork",
      "flag": "reunion",
      "text": "分开前，我说什么？",
      "choices": [
        {
          "label": "直接承认自己紧张",
          "value": "nervous",
          "next": "tc_c01_common_reunion_nervous_01"
        },
        {
          "label": "先问她哪天有空",
          "value": "availability",
          "next": "tc_c01_common_reunion_availability_01"
        }
      ],
      "character": "mengyao"
    },
    "tc_c01_common_reunion_message_01": {
      "id": "tc_c01_common_reunion_message_01",
      "type": "line",
      "scene": "ts_c01_common_reunion_fork",
      "speaker": "narrator",
      "text": "到坡口，我收到她的消息：“酸奶还没过期，你那个表情不用那么凝重。”",
      "character": null,
      "next": "tc_c01_common_reunion_message_02"
    },
    "tc_c01_common_reunion_message_02": {
      "id": "tc_c01_common_reunion_message_02",
      "type": "line",
      "scene": "ts_c01_common_reunion_fork",
      "speaker": "narrator",
      "text": "我回她一个翻白眼的表情。过了一会儿，又补了一句：“见到你挺高兴。”",
      "character": null,
      "next": "tc_c01_common_reunion_message_03"
    },
    "tc_c01_common_reunion_message_03": {
      "id": "tc_c01_common_reunion_message_03",
      "type": "line",
      "scene": "ts_c01_common_reunion_fork",
      "speaker": "narrator",
      "text": "这次我没有删。她也没有立刻把过去的事情全放下，只回：“嗯。饭记得吃。”",
      "character": null,
      "next": "tc_c01_common_home_game_01"
    },
    "tc_c01_common_home_game_01": {
      "id": "tc_c01_common_home_game_01",
      "type": "line",
      "scene": "ts_c01_common_home_game",
      "speaker": "narrator",
      "text": "休班的晚上，我在自己的住处戴上耳机。白天睡够了，桌上放着吃了一半的炒饭，没有需要随时跑回去接待的客人。",
      "character": null,
      "next": "tc_c01_common_home_game_02"
    },
    "tc_c01_common_home_game_02": {
      "id": "tc_c01_common_home_game_02",
      "type": "line",
      "scene": "ts_c01_common_home_game",
      "speaker": "narrator",
      "text": "毛狼把我拉进队伍，宣布今晚最大的优势是我不收费。",
      "character": null,
      "next": "tc_c01_common_home_game_03"
    },
    "tc_c01_common_home_game_03": {
      "id": "tc_c01_common_home_game_03",
      "type": "line",
      "scene": "ts_c01_common_home_game",
      "speaker": "narrator",
      "text": "叶岚在语音里说：“那技术也不能按赠品标准来。”",
      "character": null,
      "next": "tc_c01_common_home_game_04"
    },
    "tc_c01_common_home_game_04": {
      "id": "tc_c01_common_home_game_04",
      "type": "line",
      "scene": "ts_c01_common_home_game",
      "speaker": "narrator",
      "text": "她声音比文字活泼得多。第一局我绕错路，还没来得及解释，她已经说：“这位选手在替我们考察地图边界。”",
      "character": null,
      "next": "tc_c01_common_home_game_05"
    },
    "tc_c01_common_home_game_05": {
      "id": "tc_c01_common_home_game_05",
      "type": "line",
      "scene": "ts_c01_common_home_game",
      "speaker": "wenwen",
      "text": "“战略。”我说。",
      "character": null,
      "next": "tc_c01_common_home_game_06"
    },
    "tc_c01_common_home_game_06": {
      "id": "tc_c01_common_home_game_06",
      "type": "line",
      "scene": "ts_c01_common_home_game",
      "speaker": "yelan",
      "text": "“战略回头，队友在身后。”",
      "character": null,
      "next": "tc_c01_common_home_game_07"
    },
    "tc_c01_common_home_game_07": {
      "id": "tc_c01_common_home_game_07",
      "type": "line",
      "scene": "ts_c01_common_home_game",
      "speaker": "narrator",
      "text": "毛狼笑得最响，下一秒自己先出了局。叶岚停了半拍：“刚才那个笑声，算遗言吗？”",
      "character": null,
      "next": "tc_c01_common_home_game_08"
    },
    "tc_c01_common_home_game_08": {
      "id": "tc_c01_common_home_game_08",
      "type": "line",
      "scene": "ts_c01_common_home_game",
      "speaker": "narrator",
      "text": "我们没有赢。第二局也没有。第三局终于打回来时，三个人同时说话，我一个字都没听清，倒先笑了起来。",
      "character": null,
      "next": "tc_c01_common_home_game_09"
    },
    "tc_c01_common_home_game_09": {
      "id": "tc_c01_common_home_game_09",
      "type": "line",
      "scene": "ts_c01_common_home_game",
      "speaker": "narrator",
      "text": "一局结束，师匠上线，只玩一会儿。他说店里有人值班，自己回家了。毛狼特意提醒我，不要因为欠着老板工资就给他让位置。",
      "character": null,
      "next": "tc_c01_common_home_game_10"
    },
    "tc_c01_common_home_game_10": {
      "id": "tc_c01_common_home_game_10",
      "type": "line",
      "scene": "ts_c01_common_home_game",
      "speaker": "narrator",
      "text": "“谁欠谁工资？”师匠问。",
      "character": null,
      "next": "tc_c01_common_home_game_11"
    },
    "tc_c01_common_home_game_11": {
      "id": "tc_c01_common_home_game_11",
      "type": "line",
      "scene": "ts_c01_common_home_game",
      "speaker": "maolang",
      "text": "“提前关心发薪进度。”",
      "character": null,
      "next": "tc_c01_common_home_game_12"
    },
    "tc_c01_common_home_game_12": {
      "id": "tc_c01_common_home_game_12",
      "type": "line",
      "scene": "ts_c01_common_home_game",
      "speaker": "narrator",
      "text": "师匠玩得不熟，乱按了一下，把自己送到最危险的地方。叶岚忍着笑指路。我没忍住。他说下次换个不需要反应那么快的游戏。",
      "character": null,
      "next": "tc_c01_common_home_game_13"
    },
    "tc_c01_common_home_game_13": {
      "id": "tc_c01_common_home_game_13",
      "type": "line",
      "scene": "ts_c01_common_home_game",
      "speaker": "narrator",
      "text": "“这个决定很有经营智慧。”毛狼说。",
      "character": null,
      "next": "tc_c01_common_home_game_14"
    },
    "tc_c01_common_home_game_14": {
      "id": "tc_c01_common_home_game_14",
      "type": "line",
      "scene": "ts_c01_common_home_game",
      "speaker": "narrator",
      "text": "快十点，叶岚说要下了，明天还得上班。她在保险公司做内勤，一天下来不见得跑多少路，脑子却累得很。没人劝她再来最后一把。",
      "character": null,
      "next": "tc_c01_common_home_game_15"
    },
    "tc_c01_common_home_game_15": {
      "id": "tc_c01_common_home_game_15",
      "type": "line",
      "scene": "ts_c01_common_home_game",
      "speaker": "narrator",
      "text": "耳机摘下来，屋里一下安静。我把凉掉的炒饭吃完，发现今晚过得很快。不是因为我做成了什么，只是有人接得住我那些没用的话。",
      "character": null,
      "next": "tc_c01_common_noodles_01"
    },
    "tc_c01_common_noodles_01": {
      "id": "tc_c01_common_noodles_01",
      "type": "line",
      "scene": "ts_c01_common_noodles",
      "speaker": "narrator",
      "text": "毛狼约我吃一碗面，说朋友也在。周栀坐在里面，正在给自己的碗拌辣椒。",
      "character": "maolang",
      "next": "tc_c01_common_noodles_02"
    },
    "tc_c01_common_noodles_02": {
      "id": "tc_c01_common_noodles_02",
      "type": "line",
      "scene": "ts_c01_common_noodles",
      "speaker": "zhouzhi",
      "text": "“他是不是说就他一个？”她问我。",
      "character": "zhouzhi",
      "next": "tc_c01_common_noodles_03"
    },
    "tc_c01_common_noodles_03": {
      "id": "tc_c01_common_noodles_03",
      "type": "line",
      "scene": "ts_c01_common_noodles",
      "speaker": "wenwen",
      "text": "“他说朋友在。”",
      "character": "zhouzhi",
      "next": "tc_c01_common_noodles_04"
    },
    "tc_c01_common_noodles_04": {
      "id": "tc_c01_common_noodles_04",
      "type": "line",
      "scene": "ts_c01_common_noodles",
      "speaker": "zhouzhi",
      "text": "“进步了。上回他说顺便吃饭，带来四个人。”",
      "character": "zhouzhi",
      "next": "tc_c01_common_noodles_05"
    },
    "tc_c01_common_noodles_05": {
      "id": "tc_c01_common_noodles_05",
      "type": "line",
      "scene": "ts_c01_common_noodles",
      "speaker": "narrator",
      "text": "毛狼把椅子拖开：“人多热闹。”",
      "character": "maolang",
      "next": "tc_c01_common_noodles_06"
    },
    "tc_c01_common_noodles_06": {
      "id": "tc_c01_common_noodles_06",
      "type": "line",
      "scene": "ts_c01_common_noodles",
      "speaker": "zhouzhi",
      "text": "“付账的时候也要这么想。”",
      "character": "zhouzhi",
      "next": "tc_c01_common_noodles_07"
    },
    "tc_c01_common_noodles_07": {
      "id": "tc_c01_common_noodles_07",
      "type": "line",
      "scene": "ts_c01_common_noodles",
      "speaker": "narrator",
      "text": "周栀在回声做陪唱。她晚上才去上班，吃东西很专心，说话也不耽误。她听说我是夜班网管，先问的是下班能不能睡着。",
      "character": "zhouzhi",
      "next": "tc_c01_common_noodles_08"
    },
    "tc_c01_common_noodles_08": {
      "id": "tc_c01_common_noodles_08",
      "type": "line",
      "scene": "ts_c01_common_noodles",
      "speaker": "wenwen",
      "text": "“前几天睡得像断电。”",
      "character": "zhouzhi",
      "next": "tc_c01_common_noodles_09"
    },
    "tc_c01_common_noodles_09": {
      "id": "tc_c01_common_noodles_09",
      "type": "line",
      "scene": "ts_c01_common_noodles",
      "speaker": "zhouzhi",
      "text": "“那挺好。别为了晚上有人喊你玩，白天也不肯睡。”",
      "character": "zhouzhi",
      "next": "tc_c01_common_noodles_10"
    },
    "tc_c01_common_noodles_10": {
      "id": "tc_c01_common_noodles_10",
      "type": "line",
      "scene": "ts_c01_common_noodles",
      "speaker": "narrator",
      "text": "毛狼举手表示自己不是随叫随到的睡眠破坏者。她给他一张纸，让他先擦掉嘴角的油。",
      "character": "maolang",
      "next": "tc_c01_common_noodles_11"
    },
    "tc_c01_common_noodles_11": {
      "id": "tc_c01_common_noodles_11",
      "type": "line",
      "scene": "ts_c01_common_noodles",
      "speaker": "narrator",
      "text": "我看到她的面还没拌匀，问要不要再加点汤。她说不用，自己就爱吃干一点的，又把汤碗朝我推开一点，留出放手的位置。",
      "character": "zhouzhi",
      "next": "tc_c01_common_noodles_12"
    },
    "tc_c01_common_noodles_12": {
      "id": "tc_c01_common_noodles_12",
      "type": "line",
      "scene": "ts_c01_common_noodles",
      "speaker": "zhouzhi",
      "text": "“你爱怎么吃就怎么吃。别看我放辣椒，你也跟着加。”",
      "character": "zhouzhi",
      "next": "tc_c01_common_noodles_13"
    },
    "tc_c01_common_noodles_13": {
      "id": "tc_c01_common_noodles_13",
      "type": "line",
      "scene": "ts_c01_common_noodles",
      "speaker": "narrator",
      "text": "我收回刚拿起的勺子。她笑出声，没给我找台阶，毛狼也没有。我只好自己认了：“我还以为你们这里吃面都得这样。”",
      "character": "zhouzhi",
      "next": "tc_c01_common_noodles_14"
    },
    "tc_c01_common_noodles_14": {
      "id": "tc_c01_common_noodles_14",
      "type": "line",
      "scene": "ts_c01_common_noodles",
      "speaker": "zhouzhi",
      "text": "“这里的人也有胃口差的时候。”她说。",
      "character": "zhouzhi",
      "next": "tc_c01_common_noodles_15"
    },
    "tc_c01_common_noodles_15": {
      "id": "tc_c01_common_noodles_15",
      "type": "line",
      "scene": "ts_c01_common_noodles",
      "speaker": "narrator",
      "text": "她和朋友想试着做夜宵，讲起一回备菜顺序弄反，青菜先切出来放蔫，自己都笑。不是邀请我投资，更没要我替她想好以后，只是在一顿饭里告诉我，她最近喜欢琢磨什么。",
      "character": "zhouzhi",
      "next": "tc_c01_common_noodles_16"
    },
    "tc_c01_common_noodles_16": {
      "id": "tc_c01_common_noodles_16",
      "type": "line",
      "scene": "ts_c01_common_noodles",
      "speaker": "narrator",
      "text": "快六点，她先走。我回去歇一阵，十点再上班。日子开始有一点形状：别人的晚饭，我的上班前；别人的清早，我的一天结束。",
      "character": null,
      "next": "tc_c01_common_piao_meal_01"
    },
    "tc_c01_common_piao_meal_01": {
      "id": "tc_c01_common_piao_meal_01",
      "type": "line",
      "scene": "ts_c01_common_piao_meal",
      "speaker": "narrator",
      "text": "今天约饭的是毛狼，先到的是飘。",
      "character": "piao",
      "next": "tc_c01_common_piao_meal_02"
    },
    "tc_c01_common_piao_meal_02": {
      "id": "tc_c01_common_piao_meal_02",
      "type": "line",
      "scene": "ts_c01_common_piao_meal",
      "speaker": "narrator",
      "text": "她把一本薄本子放在桌边，见我过来，先把椅子往里推。毛狼昨天已在三个人的小群里互相介绍过，我不用假装第一次知道她的名字。",
      "character": "piao",
      "next": "tc_c01_common_piao_meal_03"
    },
    "tc_c01_common_piao_meal_03": {
      "id": "tc_c01_common_piao_meal_03",
      "type": "line",
      "scene": "ts_c01_common_piao_meal",
      "speaker": "piao",
      "text": "“文文？”",
      "character": "piao",
      "next": "tc_c01_common_piao_meal_04"
    },
    "tc_c01_common_piao_meal_04": {
      "id": "tc_c01_common_piao_meal_04",
      "type": "line",
      "scene": "ts_c01_common_piao_meal",
      "speaker": "wenwen",
      "text": "“嗯。飘？”",
      "character": "piao",
      "next": "tc_c01_common_piao_meal_05"
    },
    "tc_c01_common_piao_meal_05": {
      "id": "tc_c01_common_piao_meal_05",
      "type": "line",
      "scene": "ts_c01_common_piao_meal",
      "speaker": "piao",
      "text": "“这段介绍效率挺高。”她说。",
      "character": "piao",
      "next": "tc_c01_common_piao_meal_06"
    },
    "tc_c01_common_piao_meal_06": {
      "id": "tc_c01_common_piao_meal_06",
      "type": "line",
      "scene": "ts_c01_common_piao_meal",
      "speaker": "narrator",
      "text": "我坐下。她回毕节没多久，现在没上班。她说这句话时没有压低声音，也没顺势问我是不是觉得待业不好。我于是也不用急着安慰。",
      "character": "piao",
      "next": "tc_c01_common_piao_meal_07"
    },
    "tc_c01_common_piao_meal_07": {
      "id": "tc_c01_common_piao_meal_07",
      "type": "line",
      "scene": "ts_c01_common_piao_meal",
      "speaker": "narrator",
      "text": "本子里夹着老街店门的手绘轮廓，还有几句不同笔迹的话。她想做一本小册子，记些店里的人愿意留下的事，名字先不急着定。她又说起巷里那家凉糕店，打算改天去尝尝，问我吃过没有。我摇头，她说那以后可以一起试。",
      "character": "piao",
      "next": "tc_c01_common_piao_meal_08"
    },
    "tc_c01_common_piao_meal_08": {
      "id": "tc_c01_common_piao_meal_08",
      "type": "line",
      "scene": "ts_c01_common_piao_meal",
      "speaker": "wenwen",
      "text": "“这句为什么没写完？”我指着半行字问。",
      "character": "piao",
      "next": "tc_c01_common_piao_meal_09"
    },
    "tc_c01_common_piao_meal_09": {
      "id": "tc_c01_common_piao_meal_09",
      "type": "line",
      "scene": "ts_c01_common_piao_meal",
      "speaker": "piao",
      "text": "“人家讲到这里就不想讲了。”",
      "character": "piao",
      "next": "tc_c01_common_piao_meal_10"
    },
    "tc_c01_common_piao_meal_10": {
      "id": "tc_c01_common_piao_meal_10",
      "type": "line",
      "scene": "ts_c01_common_piao_meal",
      "speaker": "wenwen",
      "text": "“空着？”",
      "character": "piao",
      "next": "tc_c01_common_piao_meal_11"
    },
    "tc_c01_common_piao_meal_11": {
      "id": "tc_c01_common_piao_meal_11",
      "type": "line",
      "scene": "ts_c01_common_piao_meal",
      "speaker": "piao",
      "text": "“嗯。等他哪天想补。也可能一直不补。”",
      "character": "piao",
      "next": "tc_c01_common_piao_meal_12"
    },
    "tc_c01_common_piao_meal_12": {
      "id": "tc_c01_common_piao_meal_12",
      "type": "line",
      "scene": "ts_c01_common_piao_meal",
      "speaker": "narrator",
      "text": "毛狼推门进来，气还没喘匀，先说自己差点被演出临时加活留住。飘把菜单递给他：“先点。你的迟到感言等菜来。”",
      "character": "maolang",
      "next": "tc_c01_common_piao_meal_13"
    },
    "tc_c01_common_piao_meal_13": {
      "id": "tc_c01_common_piao_meal_13",
      "type": "line",
      "scene": "ts_c01_common_piao_meal",
      "speaker": "narrator",
      "text": "他果然等菜来才开始讲。讲到自己被一位阿姨夸台风稳，飘问是不是风真的大，他愣住，我笑得停不下来。",
      "character": "piao",
      "next": "tc_c01_common_piao_meal_14"
    },
    "tc_c01_common_piao_meal_14": {
      "id": "tc_c01_common_piao_meal_14",
      "type": "line",
      "scene": "ts_c01_common_piao_meal",
      "speaker": "narrator",
      "text": "后来他问她下回去不去走走，她说可以先看自己安排。那句话里有认真考虑，也没有当场许诺。我看了她一眼，她正把菜单底下垫歪的纸抽出来。",
      "character": "piao",
      "next": "tc_c01_common_two_umbrellas_01"
    },
    "tc_c01_common_two_umbrellas_01": {
      "id": "tc_c01_common_two_umbrellas_01",
      "type": "line",
      "scene": "ts_c01_common_two_umbrellas",
      "speaker": "narrator",
      "text": "吃完，雨还没停。飘打开伞，毛狼也有，我的伞落在网吧。",
      "character": "piao",
      "next": "tc_c01_common_two_umbrellas_02"
    },
    "tc_c01_common_two_umbrellas_02": {
      "id": "tc_c01_common_two_umbrellas_02",
      "type": "line",
      "scene": "ts_c01_common_two_umbrellas",
      "speaker": "piao",
      "text": "“你先跟我们走到路口。”她说，“那边有屋檐。”",
      "character": "piao",
      "next": "tc_c01_common_two_umbrellas_03"
    },
    "tc_c01_common_two_umbrellas_03": {
      "id": "tc_c01_common_two_umbrellas_03",
      "type": "line",
      "scene": "ts_c01_common_two_umbrellas",
      "speaker": "narrator",
      "text": "三个人两把伞，谁都没挨得特别近。毛狼为了不踩水，走得像临时编了一段舞。",
      "character": "piao",
      "next": "tc_c01_common_two_umbrellas_04"
    },
    "tc_c01_common_two_umbrellas_04": {
      "id": "tc_c01_common_two_umbrellas_04",
      "type": "line",
      "scene": "ts_c01_common_two_umbrellas",
      "speaker": "narrator",
      "text": "我在路口停下，看他们往另一边走。手机里多了几个人的消息，屋里还有没收拾完的箱子，今晚照样要上班。",
      "character": null,
      "next": "tc_c01_common_two_umbrellas_05"
    },
    "tc_c01_common_two_umbrellas_05": {
      "id": "tc_c01_common_two_umbrellas_05",
      "type": "line",
      "scene": "ts_c01_common_two_umbrellas",
      "speaker": "narrator",
      "text": "但我已经不像刚下大巴时那样，觉得整个城市只听得见箱子轮子的响声了。",
      "character": null,
      "next": "tc_c01_common_exit"
    },
    "tc_c01_common_exit": {
      "id": "tc_c01_common_exit",
      "type": "end",
      "scene": "ts_c01_common_chapter_end",
      "title": "第一章 · 凌晨六点的早餐",
      "text": "",
      "character": null,
      "next": "tc_c02_common_entry",
      "nextChapter": "第二章 · 语音里的那个人"
    },
    "tc_c02_common_entry": {
      "id": "tc_c02_common_entry",
      "type": "line",
      "scene": "ts_c02_common_charger",
      "speaker": "narrator",
      "text": "休班日，我睡醒去网吧拿落下的充电线。师匠在柜台和客人说话，我取完东西，从侧门出去。",
      "character": null,
      "next": "tc_c02_common_rhythm_heard_01"
    },
    "tc_c02_common_rhythm_heard_01": {
      "id": "tc_c02_common_rhythm_heard_01",
      "type": "line",
      "scene": "ts_c02_common_reply_at_door",
      "speaker": "narrator",
      "text": "后院里又响了三下。",
      "character": null,
      "next": "tc_c02_common_rhythm_heard_02"
    },
    "tc_c02_common_rhythm_heard_02": {
      "id": "tc_c02_common_rhythm_heard_02",
      "type": "line",
      "scene": "ts_c02_common_reply_at_door",
      "speaker": "narrator",
      "text": "轻、轻，停一停，重。",
      "character": null,
      "next": "tc_c02_common_rhythm_reply_choice"
    },
    "tc_c02_common_rhythm_remembered_01": {
      "id": "tc_c02_common_rhythm_remembered_01",
      "type": "line",
      "scene": "ts_c02_common_reply_at_door",
      "speaker": "narrator",
      "text": "我先翻出那一行点，再在木门上照着敲了一遍。里面安静片刻，传来一句：“记得还挺清楚。”",
      "character": null,
      "next": "tc_c02_common_rhythm_remembered_02"
    },
    "tc_c02_common_rhythm_remembered_02": {
      "id": "tc_c02_common_rhythm_remembered_02",
      "type": "line",
      "scene": "ts_c02_common_reply_at_door",
      "speaker": "narrator",
      "text": "我伸手要开门，她却说：“今天先这样。”",
      "character": null,
      "next": "tc_c02_common_rhythm_remembered_03"
    },
    "tc_c02_common_rhythm_remembered_03": {
      "id": "tc_c02_common_rhythm_remembered_03",
      "type": "line",
      "scene": "ts_c02_common_reply_at_door",
      "speaker": "wenwen",
      "text": "“那我什么时候再来？”",
      "character": null,
      "next": "tc_c02_common_rhythm_remembered_04"
    },
    "tc_c02_common_rhythm_remembered_04": {
      "id": "tc_c02_common_rhythm_remembered_04",
      "type": "line",
      "scene": "ts_c02_common_reply_at_door",
      "speaker": "narrator",
      "text": "“你有空的时候。别在有人叫你的时候。”",
      "character": null,
      "next": "tc_c02_common_rhythm_remembered_05"
    },
    "tc_c02_common_rhythm_remembered_05": {
      "id": "tc_c02_common_rhythm_remembered_05",
      "type": "line",
      "scene": "ts_c02_common_reply_at_door",
      "speaker": "narrator",
      "text": "我说第十四天晚上休息，可以过来。门后传来轻轻一下，像是答应。",
      "character": null,
      "next": "tc_c02_common_same_sign_01"
    },
    "tc_c02_common_rhythm_unremembered_01": {
      "id": "tc_c02_common_rhythm_unremembered_01",
      "type": "line",
      "scene": "ts_c02_common_reply_at_door",
      "speaker": "narrator",
      "text": "我按刚才的印象敲了两下，又停住，不确定中间该隔多久。门里没有回应。我没有擅自推门，只在外面站了一会儿，便回到街上。",
      "character": null,
      "next": "tc_c02_common_same_sign_01"
    },
    "tc_c02_common_rhythm_leave_01": {
      "id": "tc_c02_common_rhythm_leave_01",
      "type": "line",
      "scene": "ts_c02_common_reply_at_door",
      "speaker": "narrator",
      "text": "我把充电线收进袋里，朝门内说了句借过，没有再追问。街上有人搬货，手推车的声音经过，院里又安静下来。",
      "character": null,
      "next": "tc_c02_common_same_sign_01"
    },
    "tc_c02_common_rhythm_reply_gate": {
      "id": "tc_c02_common_rhythm_reply_gate",
      "type": "gate",
      "scene": "ts_c02_common_reply_at_door",
      "cases": [
        {
          "flag": "qiuSignal",
          "value": "record",
          "next": "tc_c02_common_rhythm_remembered_01"
        },
        {
          "flag": "qiuSignal",
          "value": "ignore",
          "next": "tc_c02_common_rhythm_unremembered_01"
        }
      ],
      "default": null,
      "exhaustive": true
    },
    "tc_c02_common_rhythm_reply_choice": {
      "id": "tc_c02_common_rhythm_reply_choice",
      "type": "choice",
      "scene": "ts_c02_common_reply_at_door",
      "flag": "qiuReply",
      "text": "我是否回应？",
      "choices": [
        {
          "label": "敲回刚才的节奏",
          "value": "reply",
          "next": "tc_c02_common_rhythm_reply_gate"
        },
        {
          "label": "不敲门，先离开",
          "value": "leave",
          "next": "tc_c02_common_rhythm_leave_01"
        }
      ],
      "character": null
    },
    "tc_c02_common_same_sign_01": {
      "id": "tc_c02_common_same_sign_01",
      "type": "line",
      "scene": "ts_c02_common_same_sign",
      "speaker": "narrator",
      "text": "毛狼在群里发来一张拍糊的晚饭照，叶岚问他是不是在拍案发现场。他说因为太饿，手抖。",
      "character": null,
      "next": "tc_c02_common_same_sign_02"
    },
    "tc_c02_common_same_sign_02": {
      "id": "tc_c02_common_same_sign_02",
      "type": "line",
      "scene": "ts_c02_common_same_sign",
      "speaker": "narrator",
      "text": "我发了路边刚开灯的面馆，说这家还有饭。叶岚停了好一会儿，问是不是坡口那家。",
      "character": null,
      "next": "tc_c02_common_same_sign_03"
    },
    "tc_c02_common_same_sign_03": {
      "id": "tc_c02_common_same_sign_03",
      "type": "line",
      "scene": "ts_c02_common_same_sign",
      "speaker": "wenwen",
      "text": "我回她：“你也来过？”",
      "character": null,
      "next": "tc_c02_common_same_sign_04"
    },
    "tc_c02_common_same_sign_04": {
      "id": "tc_c02_common_same_sign_04",
      "type": "line",
      "scene": "ts_c02_common_same_sign",
      "speaker": "yelan",
      "text": "“我午饭有时就在那边吃。你人到底在哪儿？”",
      "character": null,
      "next": "tc_c02_common_same_sign_05"
    },
    "tc_c02_common_same_sign_05": {
      "id": "tc_c02_common_same_sign_05",
      "type": "line",
      "scene": "ts_c02_common_same_sign",
      "speaker": "wenwen",
      "text": "“毕节。”",
      "character": null,
      "next": "tc_c02_common_same_sign_06"
    },
    "tc_c02_common_same_sign_06": {
      "id": "tc_c02_common_same_sign_06",
      "type": "line",
      "scene": "ts_c02_common_same_sign",
      "speaker": "narrator",
      "text": "她发来一个句号，然后说：“毛狼，这么重要的信息，你讲了没有？”",
      "character": null,
      "next": "tc_c02_common_same_sign_07"
    },
    "tc_c02_common_same_sign_07": {
      "id": "tc_c02_common_same_sign_07",
      "type": "line",
      "scene": "ts_c02_common_same_sign",
      "speaker": "narrator",
      "text": "毛狼回复：“我以为你俩知道。”",
      "character": null,
      "next": "tc_c02_common_same_sign_08"
    },
    "tc_c02_common_same_sign_08": {
      "id": "tc_c02_common_same_sign_08",
      "type": "line",
      "scene": "ts_c02_common_same_sign",
      "speaker": "yelan",
      "text": "“你以为的事情，可以单独建一个群。”",
      "character": null,
      "next": "tc_c02_common_same_sign_09"
    },
    "tc_c02_common_same_sign_09": {
      "id": "tc_c02_common_same_sign_09",
      "type": "line",
      "scene": "ts_c02_common_same_sign",
      "speaker": "narrator",
      "text": "我走到面馆门口，拍了一张招牌。叶岚回的也是同一块招牌，只不过她那张是白天，旁边还摆着摊。",
      "character": null,
      "next": "tc_c02_common_same_sign_10"
    },
    "tc_c02_common_same_sign_10": {
      "id": "tc_c02_common_same_sign_10",
      "type": "line",
      "scene": "ts_c02_common_same_sign",
      "speaker": "narrator",
      "text": "隔着耳机认识的人，忽然在一条我走得过去的路上。",
      "character": null,
      "next": "tc_c02_common_missed_game_01"
    },
    "tc_c02_common_missed_game_01": {
      "id": "tc_c02_common_missed_game_01",
      "type": "line",
      "scene": "ts_c02_common_missed_game",
      "speaker": "narrator",
      "text": "我把今天排得过于漂亮。",
      "character": null,
      "next": "tc_c02_common_missed_game_02"
    },
    "tc_c02_common_missed_game_02": {
      "id": "tc_c02_common_missed_game_02",
      "type": "line",
      "scene": "ts_c02_common_missed_game",
      "speaker": "narrator",
      "text": "早上六点下班，回去睡到下午；下午答应毛狼出去坐一会儿，傍晚回屋吃饭，晚上八点休班组队。纸上每段都刚刚好，没算入买饭、洗衣服，也没算我上一班其实睡得不够。",
      "character": null,
      "next": "tc_c02_common_missed_game_03"
    },
    "tc_c02_common_missed_game_03": {
      "id": "tc_c02_common_missed_game_03",
      "type": "line",
      "scene": "ts_c02_common_missed_game",
      "speaker": "narrator",
      "text": "我下午醒得晚，还想把原来那段聚会塞进去。毛狼说不急，下次也行，我偏说都出门了。我们坐着说话时，我以为自己很清醒。",
      "character": null,
      "next": "tc_c02_common_missed_game_04"
    },
    "tc_c02_common_missed_game_04": {
      "id": "tc_c02_common_missed_game_04",
      "type": "line",
      "scene": "ts_c02_common_missed_game",
      "speaker": "narrator",
      "text": "回来把衣服扔进洗衣机，我只打算在床沿坐五分钟。",
      "character": null,
      "next": "tc_c02_common_missed_game_05"
    },
    "tc_c02_common_missed_game_05": {
      "id": "tc_c02_common_missed_game_05",
      "type": "line",
      "scene": "ts_c02_common_missed_game",
      "speaker": "narrator",
      "text": "再醒来，手机显示八点五十。",
      "character": null,
      "next": "tc_c02_common_missed_game_06"
    },
    "tc_c02_common_missed_game_06": {
      "id": "tc_c02_common_missed_game_06",
      "type": "line",
      "scene": "ts_c02_common_missed_game",
      "speaker": "narrator",
      "text": "群里前面有人问我到了没有，后来变成“先开”，最后是一张结算画面。没有人骂我，反倒让我更不知道怎么接。",
      "character": null,
      "next": "tc_c02_common_missed_game_07"
    },
    "tc_c02_common_missed_game_07": {
      "id": "tc_c02_common_missed_game_07",
      "type": "line",
      "scene": "ts_c02_common_missed_game",
      "speaker": "narrator",
      "text": "我打出“有点事”，停住。那四个字好像能遮住任何东西，也恰好什么都没说。",
      "character": null,
      "next": "tc_c02_common_missed_game_choice"
    },
    "tc_c02_common_missed_voice_01": {
      "id": "tc_c02_common_missed_voice_01",
      "type": "line",
      "scene": "ts_c02_common_missed_game",
      "speaker": "wenwen",
      "text": "“我睡过了。白天排太满，明明困还觉得自己能撑住。下次如果来不了，我提前说。今天你们等那一会儿，是我的问题。”",
      "character": null,
      "next": "tc_c02_common_missed_voice_02"
    },
    "tc_c02_common_missed_voice_02": {
      "id": "tc_c02_common_missed_voice_02",
      "type": "line",
      "scene": "ts_c02_common_missed_game",
      "speaker": "narrator",
      "text": "发完以后，我没拿起耳机等人夸坦诚。洗衣机里的衣服还没晾，饭也没吃。",
      "character": null,
      "next": "tc_c02_common_missed_voice_03"
    },
    "tc_c02_common_missed_voice_03": {
      "id": "tc_c02_common_missed_voice_03",
      "type": "line",
      "scene": "ts_c02_common_missed_game",
      "speaker": "narrator",
      "text": "叶岚回：“知道了。我们已经打完，今晚不等你补一场。去吃饭。”",
      "character": null,
      "next": "tc_c02_common_laundry_01"
    },
    "tc_c02_common_missed_reschedule_01": {
      "id": "tc_c02_common_missed_reschedule_01",
      "type": "line",
      "scene": "ts_c02_common_missed_game",
      "speaker": "narrator",
      "text": "我把“有点事”删掉，写清睡过头的经过，另问下一回能不能九点前结束。我需要提前留出吃饭和休息的时间，不能把所有空档都算成能玩。",
      "character": null,
      "next": "tc_c02_common_missed_reschedule_02"
    },
    "tc_c02_common_missed_reschedule_02": {
      "id": "tc_c02_common_missed_reschedule_02",
      "type": "line",
      "scene": "ts_c02_common_missed_game",
      "speaker": "narrator",
      "text": "毛狼说可以约短一点。叶岚回：“我也只空那一段。到时候谁没来，就先开，不互相耗着。”",
      "character": null,
      "next": "tc_c02_common_laundry_01"
    },
    "tc_c02_common_missed_game_choice": {
      "id": "tc_c02_common_missed_game_choice",
      "type": "choice",
      "scene": "ts_c02_common_missed_game",
      "flag": "missedGame",
      "text": "我怎样解释这次没到？",
      "choices": [
        {
          "label": "发一条语音说明",
          "value": "voice",
          "next": "tc_c02_common_missed_voice_01"
        },
        {
          "label": "发文字，并把下次时间改具体",
          "value": "reschedule",
          "next": "tc_c02_common_missed_reschedule_01"
        }
      ],
      "character": null
    },
    "tc_c02_common_laundry_01": {
      "id": "tc_c02_common_laundry_01",
      "type": "line",
      "scene": "ts_c02_common_missed_game",
      "speaker": "narrator",
      "text": "我回了“好”，去把衣服晾完。",
      "character": null,
      "next": "tc_c02_common_next_meeting_01"
    },
    "tc_c02_common_next_meeting_01": {
      "id": "tc_c02_common_next_meeting_01",
      "type": "line",
      "scene": "ts_c02_common_next_meeting",
      "speaker": "narrator",
      "text": "九点多，孟遥给我发来她这周可吃饭的时间。我看着那几个空档，没有说哪天都行，只回了一个自己确实能空出来的下午。",
      "character": null,
      "next": "tc_c02_common_next_meeting_02"
    },
    "tc_c02_common_next_meeting_02": {
      "id": "tc_c02_common_next_meeting_02",
      "type": "line",
      "scene": "ts_c02_common_next_meeting",
      "speaker": "narrator",
      "text": "过了一会儿，叶岚私聊问我第十二天下午有没有空。她调好了休息，想去那家面馆，毛狼也说要来。",
      "character": null,
      "next": "tc_c02_common_next_meeting_03"
    },
    "tc_c02_common_next_meeting_03": {
      "id": "tc_c02_common_next_meeting_03",
      "type": "line",
      "scene": "ts_c02_common_next_meeting",
      "speaker": "narrator",
      "text": "我翻出排班，又看一次闹钟。",
      "character": null,
      "next": "tc_c02_common_next_meeting_04"
    },
    "tc_c02_common_next_meeting_04": {
      "id": "tc_c02_common_next_meeting_04",
      "type": "line",
      "scene": "ts_c02_common_next_meeting",
      "speaker": "wenwen",
      "text": "“有。下午四点半。我会先睡够。”",
      "character": null,
      "next": "tc_c02_common_next_meeting_05"
    },
    "tc_c02_common_next_meeting_05": {
      "id": "tc_c02_common_next_meeting_05",
      "type": "line",
      "scene": "ts_c02_common_next_meeting",
      "speaker": "yelan",
      "text": "“最后那句不用当见面口号。”",
      "character": null,
      "next": "tc_c02_common_next_meeting_06"
    },
    "tc_c02_common_next_meeting_06": {
      "id": "tc_c02_common_next_meeting_06",
      "type": "line",
      "scene": "ts_c02_common_next_meeting",
      "speaker": "wenwen",
      "text": "“也是给自己说的。”",
      "character": null,
      "next": "tc_c02_common_next_meeting_07"
    },
    "tc_c02_common_next_meeting_07": {
      "id": "tc_c02_common_next_meeting_07",
      "type": "line",
      "scene": "ts_c02_common_next_meeting",
      "speaker": "narrator",
      "text": "她发了一个笑的表情。那条消息没让我欠下一次证明自己的翻盘，只给了下次见面的时间。",
      "character": null,
      "next": "tc_c02_common_yelan_first_01"
    },
    "tc_c02_common_yelan_first_01": {
      "id": "tc_c02_common_yelan_first_01",
      "type": "line",
      "scene": "ts_c02_common_yelan_first",
      "speaker": "narrator",
      "text": "面馆比照片里小。四点半还没到饭点，里面只坐了两桌人。",
      "character": "yelan",
      "next": "tc_c02_common_yelan_first_02"
    },
    "tc_c02_common_yelan_first_02": {
      "id": "tc_c02_common_yelan_first_02",
      "type": "line",
      "scene": "ts_c02_common_yelan_first",
      "speaker": "narrator",
      "text": "我一眼没有认出叶岚。靠窗的女人低着头，深灰外套搭在椅背上，手机放在手边，没有戴耳机。",
      "character": "yelan",
      "next": "tc_c02_common_yelan_first_03"
    },
    "tc_c02_common_yelan_first_03": {
      "id": "tc_c02_common_yelan_first_03",
      "type": "line",
      "scene": "ts_c02_common_yelan_first",
      "speaker": "narrator",
      "text": "她先抬头：“文文？”",
      "character": "yelan",
      "next": "tc_c02_common_yelan_first_04"
    },
    "tc_c02_common_yelan_first_04": {
      "id": "tc_c02_common_yelan_first_04",
      "type": "line",
      "scene": "ts_c02_common_yelan_first",
      "speaker": "narrator",
      "text": "声音一出来，我才笑了。",
      "character": "yelan",
      "next": "tc_c02_common_yelan_first_05"
    },
    "tc_c02_common_yelan_first_05": {
      "id": "tc_c02_common_yelan_first_05",
      "type": "line",
      "scene": "ts_c02_common_yelan_first",
      "speaker": "wenwen",
      "text": "“叶岚。”",
      "character": "yelan",
      "next": "tc_c02_common_yelan_first_06"
    },
    "tc_c02_common_yelan_first_06": {
      "id": "tc_c02_common_yelan_first_06",
      "type": "line",
      "scene": "ts_c02_common_yelan_first",
      "speaker": "narrator",
      "text": "她点点头。我拉椅子的时候碰到桌腿，水杯晃了一下，我们同时去扶，又同时把手收回去。",
      "character": "yelan",
      "next": "tc_c02_common_yelan_first_07"
    },
    "tc_c02_common_yelan_first_07": {
      "id": "tc_c02_common_yelan_first_07",
      "type": "line",
      "scene": "ts_c02_common_yelan_first",
      "speaker": "narrator",
      "text": "毛狼发来语音：演出那边临时喊他提前过去，今天到不了。他确实不是故意的，背景里还有人在催搬东西。",
      "character": "yelan",
      "next": "tc_c02_common_yelan_first_08"
    },
    "tc_c02_common_yelan_first_08": {
      "id": "tc_c02_common_yelan_first_08",
      "type": "line",
      "scene": "ts_c02_common_yelan_first",
      "speaker": "narrator",
      "text": "我问叶岚要不要改天人齐了再吃。她看了一眼桌上的两杯水。",
      "character": "yelan",
      "next": "tc_c02_common_yelan_first_09"
    },
    "tc_c02_common_yelan_first_09": {
      "id": "tc_c02_common_yelan_first_09",
      "type": "line",
      "scene": "ts_c02_common_yelan_first",
      "speaker": "yelan",
      "text": "“都到了。你不着急的话，可以先吃。”",
      "character": "yelan",
      "next": "tc_c02_common_yelan_first_10"
    },
    "tc_c02_common_yelan_first_10": {
      "id": "tc_c02_common_yelan_first_10",
      "type": "line",
      "scene": "ts_c02_common_yelan_first",
      "speaker": "wenwen",
      "text": "“我不着急。”",
      "character": "yelan",
      "next": "tc_c02_common_yelan_first_11"
    },
    "tc_c02_common_yelan_first_11": {
      "id": "tc_c02_common_yelan_first_11",
      "type": "line",
      "scene": "ts_c02_common_yelan_first",
      "speaker": "narrator",
      "text": "接下来安静得能听见厨房切菜。",
      "character": "yelan",
      "next": "tc_c02_common_yelan_first_12"
    },
    "tc_c02_common_yelan_first_12": {
      "id": "tc_c02_common_yelan_first_12",
      "type": "line",
      "scene": "ts_c02_common_yelan_first",
      "speaker": "yelan",
      "text": "“你在语音里不是挺能讲的吗？”她先笑了。",
      "character": "yelan",
      "next": "tc_c02_common_yelan_first_13"
    },
    "tc_c02_common_yelan_first_13": {
      "id": "tc_c02_common_yelan_first_13",
      "type": "line",
      "scene": "ts_c02_common_yelan_first",
      "speaker": "wenwen",
      "text": "“你也没有开局就给我报坐标。”",
      "character": "yelan",
      "next": "tc_c02_common_yelan_first_14"
    },
    "tc_c02_common_yelan_first_14": {
      "id": "tc_c02_common_yelan_first_14",
      "type": "line",
      "scene": "ts_c02_common_yelan_first",
      "speaker": "yelan",
      "text": "“右前方，菜单。”",
      "character": "yelan",
      "next": "tc_c02_common_yelan_first_15"
    },
    "tc_c02_common_yelan_first_15": {
      "id": "tc_c02_common_yelan_first_15",
      "type": "line",
      "scene": "ts_c02_common_yelan_first",
      "speaker": "narrator",
      "text": "我伸手拿过来，气氛终于松了一点。她也会笑，只是没有耳机里那么快，每次像要先看看这个玩笑落在现实里会不会太重。",
      "character": "yelan",
      "next": "tc_c02_common_yelan_first_choice"
    },
    "tc_c02_common_yelan_game_01": {
      "id": "tc_c02_common_yelan_game_01",
      "type": "line",
      "scene": "ts_c02_common_yelan_first",
      "speaker": "narrator",
      "text": "我提起毛狼笑完就出局的那次。叶岚立刻补上他后来是怎样假装耳机坏了。",
      "character": "yelan",
      "next": "tc_c02_common_yelan_game_02"
    },
    "tc_c02_common_yelan_game_02": {
      "id": "tc_c02_common_yelan_game_02",
      "type": "line",
      "scene": "ts_c02_common_yelan_first",
      "speaker": "wenwen",
      "text": "“那天你说了三次‘听不见’，我还真信了。”我说。",
      "character": "yelan",
      "next": "tc_c02_common_yelan_game_03"
    },
    "tc_c02_common_yelan_game_03": {
      "id": "tc_c02_common_yelan_game_03",
      "type": "line",
      "scene": "ts_c02_common_yelan_first",
      "speaker": "yelan",
      "text": "“我？是他。”",
      "character": "yelan",
      "next": "tc_c02_common_yelan_game_04"
    },
    "tc_c02_common_yelan_game_04": {
      "id": "tc_c02_common_yelan_game_04",
      "type": "line",
      "scene": "ts_c02_common_yelan_first",
      "speaker": "wenwen",
      "text": "“哦。语音一热闹，我就分不清。”",
      "character": "yelan",
      "next": "tc_c02_common_yelan_game_05"
    },
    "tc_c02_common_yelan_game_05": {
      "id": "tc_c02_common_yelan_game_05",
      "type": "line",
      "scene": "ts_c02_common_yelan_first",
      "speaker": "narrator",
      "text": "她挑起眉：“看来声音熟悉程度还得打折。”",
      "character": "yelan",
      "next": "tc_c02_common_yelan_game_06"
    },
    "tc_c02_common_yelan_game_06": {
      "id": "tc_c02_common_yelan_game_06",
      "type": "line",
      "scene": "ts_c02_common_yelan_first",
      "speaker": "narrator",
      "text": "我也笑，说这回可以慢慢认清。",
      "character": "yelan",
      "next": "tc_c02_common_yelan_meal_01"
    },
    "tc_c02_common_yelan_food_01": {
      "id": "tc_c02_common_yelan_food_01",
      "type": "line",
      "scene": "ts_c02_common_yelan_first",
      "speaker": "wenwen",
      "text": "“你那张照片里是哪一种面？”",
      "character": "yelan",
      "next": "tc_c02_common_yelan_food_02"
    },
    "tc_c02_common_yelan_food_02": {
      "id": "tc_c02_common_yelan_food_02",
      "type": "line",
      "scene": "ts_c02_common_yelan_first",
      "speaker": "yelan",
      "text": "“牛肉的。那天特别饿，照得像有三碗。”",
      "character": "yelan",
      "next": "tc_c02_common_yelan_food_03"
    },
    "tc_c02_common_yelan_food_03": {
      "id": "tc_c02_common_yelan_food_03",
      "type": "line",
      "scene": "ts_c02_common_yelan_first",
      "speaker": "narrator",
      "text": "我问辣不辣，她说自己加，又问我吃不吃葱。我们在菜单上找了半天，服务员过来提醒，有一半是晚上才做。",
      "character": "yelan",
      "next": "tc_c02_common_yelan_food_04"
    },
    "tc_c02_common_yelan_food_04": {
      "id": "tc_c02_common_yelan_food_04",
      "type": "line",
      "scene": "ts_c02_common_yelan_first",
      "speaker": "narrator",
      "text": "两个人对着被浪费的认真，一起笑了。没有精彩话题，也没有谁负责把沉默全部填满。",
      "character": "yelan",
      "next": "tc_c02_common_yelan_meal_01"
    },
    "tc_c02_common_yelan_first_choice": {
      "id": "tc_c02_common_yelan_first_choice",
      "type": "choice",
      "scene": "ts_c02_common_yelan_first",
      "flag": "yelanFirst",
      "text": "我怎样开始这顿饭？",
      "choices": [
        {
          "label": "先聊一局两个人都记得的游戏",
          "value": "game",
          "next": "tc_c02_common_yelan_game_01"
        },
        {
          "label": "先问她想吃什么",
          "value": "food",
          "next": "tc_c02_common_yelan_food_01"
        }
      ],
      "character": "yelan"
    },
    "tc_c02_common_yelan_meal_01": {
      "id": "tc_c02_common_yelan_meal_01",
      "type": "line",
      "scene": "ts_c02_common_yelan_first",
      "speaker": "narrator",
      "text": "她讲起工作里把两份名称只差一个字的表放错文件夹，找了很久才发现。我刚要说我也犯过，她已经摆摆手：“不用安慰，后来找到了。就是想说那个名字起得很气人。”",
      "character": "yelan",
      "next": "tc_c02_common_yelan_meal_02"
    },
    "tc_c02_common_yelan_meal_02": {
      "id": "tc_c02_common_yelan_meal_02",
      "type": "line",
      "scene": "ts_c02_common_yelan_first",
      "speaker": "wenwen",
      "text": "“那你今天骂过它了吗？”",
      "character": "yelan",
      "next": "tc_c02_common_yelan_meal_03"
    },
    "tc_c02_common_yelan_meal_03": {
      "id": "tc_c02_common_yelan_meal_03",
      "type": "line",
      "scene": "ts_c02_common_yelan_first",
      "speaker": "yelan",
      "text": "“心里骂过。”",
      "character": "yelan",
      "next": "tc_c02_common_yelan_meal_04"
    },
    "tc_c02_common_yelan_meal_04": {
      "id": "tc_c02_common_yelan_meal_04",
      "type": "line",
      "scene": "ts_c02_common_yelan_first",
      "speaker": "wenwen",
      "text": "“这还挺克制。”",
      "character": "yelan",
      "next": "tc_c02_common_yelan_meal_05"
    },
    "tc_c02_common_yelan_meal_05": {
      "id": "tc_c02_common_yelan_meal_05",
      "type": "line",
      "scene": "ts_c02_common_yelan_first",
      "speaker": "yelan",
      "text": "“公司电脑没有开语音。”",
      "character": "yelan",
      "next": "tc_c02_common_yelan_meal_06"
    },
    "tc_c02_common_yelan_meal_06": {
      "id": "tc_c02_common_yelan_meal_06",
      "type": "line",
      "scene": "ts_c02_common_yelan_first",
      "speaker": "narrator",
      "text": "这回我笑得差点呛到。她递纸的时候也笑了，脸没耳机里那么模糊，喜欢不喜欢什么，开始能从她抬眼的样子看出来。",
      "character": "yelan",
      "next": "tc_c02_common_yelan_walk_01"
    },
    "tc_c02_common_yelan_walk_01": {
      "id": "tc_c02_common_yelan_walk_01",
      "type": "line",
      "scene": "ts_c02_common_yelan_walk",
      "speaker": "narrator",
      "text": "饭后我们各自付款，沿街走了一小段。她没有把见面变成审查，也没问我为什么做网管。我主动说现在还在摸索，她听完，只问夜里最难挨的是几点。",
      "character": "yelan",
      "next": "tc_c02_common_yelan_walk_02"
    },
    "tc_c02_common_yelan_walk_02": {
      "id": "tc_c02_common_yelan_walk_02",
      "type": "line",
      "scene": "ts_c02_common_yelan_walk",
      "speaker": "wenwen",
      "text": "“四点多。亮又没亮，困又快下班了。”",
      "character": "yelan",
      "next": "tc_c02_common_yelan_walk_03"
    },
    "tc_c02_common_yelan_walk_03": {
      "id": "tc_c02_common_yelan_walk_03",
      "type": "line",
      "scene": "ts_c02_common_yelan_walk",
      "speaker": "narrator",
      "text": "她想了想：“我三点开会的时候也有点像。只是窗外很亮。”",
      "character": "yelan",
      "next": "tc_c02_common_yelan_walk_04"
    },
    "tc_c02_common_yelan_walk_04": {
      "id": "tc_c02_common_yelan_walk_04",
      "type": "line",
      "scene": "ts_c02_common_yelan_walk",
      "speaker": "narrator",
      "text": "岔路口，她把头发别到耳后：“下回可以不用等毛狼。”",
      "character": "yelan",
      "next": "tc_c02_common_yelan_walk_05"
    },
    "tc_c02_common_yelan_walk_05": {
      "id": "tc_c02_common_yelan_walk_05",
      "type": "line",
      "scene": "ts_c02_common_yelan_walk",
      "speaker": "narrator",
      "text": "我说好。她走了两步，又回头补充：“我指吃饭。组队缺人还是得叫他。”",
      "character": "yelan",
      "next": "tc_c02_common_friends_meal_01"
    },
    "tc_c02_common_friends_meal_01": {
      "id": "tc_c02_common_friends_meal_01",
      "type": "line",
      "scene": "ts_c02_common_friends_meal",
      "speaker": "narrator",
      "text": "这次吃饭没等所有人都齐。",
      "character": null,
      "next": "tc_c02_common_friends_meal_02"
    },
    "tc_c02_common_friends_meal_02": {
      "id": "tc_c02_common_friends_meal_02",
      "type": "line",
      "scene": "ts_c02_common_friends_meal",
      "speaker": "narrator",
      "text": "毛狼、小满、飘先到，我把自己那杯倒上水。周栀说上班前可以坐二十分钟，孟遥还在上课，叶岚有自己的安排，都提前说明了。",
      "character": "maolang",
      "next": "tc_c02_common_friends_meal_03"
    },
    "tc_c02_common_friends_meal_03": {
      "id": "tc_c02_common_friends_meal_03",
      "type": "line",
      "scene": "ts_c02_common_friends_meal",
      "speaker": "narrator",
      "text": "小满盯着桌上的碟子：“现在点菜，还是还要搞一个开饭投票？”",
      "character": "xiaoman",
      "next": "tc_c02_common_friends_meal_04"
    },
    "tc_c02_common_friends_meal_04": {
      "id": "tc_c02_common_friends_meal_04",
      "type": "line",
      "scene": "ts_c02_common_friends_meal",
      "speaker": "narrator",
      "text": "毛狼立刻把菜单推过去。她点了自己想吃的，又问飘有没有不吃的。飘说先别点那么多，四个人的胃不能按群人数算。",
      "character": "maolang",
      "next": "tc_c02_common_friends_meal_05"
    },
    "tc_c02_common_friends_meal_05": {
      "id": "tc_c02_common_friends_meal_05",
      "type": "line",
      "scene": "ts_c02_common_friends_meal",
      "speaker": "narrator",
      "text": "菜来以后，毛狼差点又讲自己上台的见闻，被小满打断：“昨天那个你语音讲过了。”",
      "character": "maolang",
      "next": "tc_c02_common_friends_meal_06"
    },
    "tc_c02_common_friends_meal_06": {
      "id": "tc_c02_common_friends_meal_06",
      "type": "line",
      "scene": "ts_c02_common_friends_meal",
      "speaker": "maolang",
      "text": "“她没听过。”他指飘。",
      "character": "maolang",
      "next": "tc_c02_common_friends_meal_07"
    },
    "tc_c02_common_friends_meal_07": {
      "id": "tc_c02_common_friends_meal_07",
      "type": "line",
      "scene": "ts_c02_common_friends_meal",
      "speaker": "narrator",
      "text": "飘笑着说：“那我听简短版。”",
      "character": "piao",
      "next": "tc_c02_common_friends_meal_08",
      "expression": "expression-smile"
    },
    "tc_c02_common_friends_meal_08": {
      "id": "tc_c02_common_friends_meal_08",
      "type": "line",
      "scene": "ts_c02_common_friends_meal",
      "speaker": "narrator",
      "text": "我看他认真删减废话，忽然觉得挺有意思。他不是每一次都只想把桌子弄热闹，有时候也会留意一个人有没有听下去。",
      "character": "maolang",
      "next": "tc_c02_common_friends_meal_09"
    },
    "tc_c02_common_friends_meal_09": {
      "id": "tc_c02_common_friends_meal_09",
      "type": "line",
      "scene": "ts_c02_common_friends_meal",
      "speaker": "narrator",
      "text": "周栀到得晚一点，只吃了小半碗。走前把自己那份钱转了，叫我们别为了凑热闹也立刻散。",
      "character": "zhouzhi",
      "next": "tc_c02_common_friends_meal_10"
    },
    "tc_c02_common_friends_meal_10": {
      "id": "tc_c02_common_friends_meal_10",
      "type": "line",
      "scene": "ts_c02_common_friends_meal",
      "speaker": "narrator",
      "text": "我们确实没散。小满让我看一个剪坏的刘海笑话，不是她剪的；飘讲她问店主能不能收一句话，对方认真想了很久，最后说“明天白菜便宜”。大家笑完，她说那句话也留下了。",
      "character": "maolang",
      "next": "tc_c02_common_friends_meal_11"
    },
    "tc_c02_common_friends_meal_11": {
      "id": "tc_c02_common_friends_meal_11",
      "type": "line",
      "scene": "ts_c02_common_friends_meal",
      "speaker": "maolang",
      "text": "“有用。”毛狼说。",
      "character": "maolang",
      "next": "tc_c02_common_friends_meal_12"
    },
    "tc_c02_common_friends_meal_12": {
      "id": "tc_c02_common_friends_meal_12",
      "type": "line",
      "scene": "ts_c02_common_friends_meal",
      "speaker": "narrator",
      "text": "“不是有用才留。”飘说，“是他想留这句。”",
      "character": "maolang",
      "next": "tc_c02_common_friends_meal_13"
    },
    "tc_c02_common_friends_meal_13": {
      "id": "tc_c02_common_friends_meal_13",
      "type": "line",
      "scene": "ts_c02_common_friends_meal",
      "speaker": "narrator",
      "text": "饭后我收到两条消息。一条来自孟遥，说今天课上得很顺，终于不用把备课带到深夜；另一条是叶岚拍的一小盒点心，说现实里吃东西不用等复活。",
      "character": null,
      "next": "tc_c02_common_friends_meal_14"
    },
    "tc_c02_common_friends_meal_14": {
      "id": "tc_c02_common_friends_meal_14",
      "type": "line",
      "scene": "ts_c02_common_friends_meal",
      "speaker": "narrator",
      "text": "我一条条回，没有把这顿饭拍成“返乡生活已完全安排好”的证明。明天有人上班，有人休息；想见谁，还是要自己去约。",
      "character": null,
      "next": "tc_c02_common_qiu_signal_gate"
    },
    "tc_c02_common_qiu_arrival_01": {
      "id": "tc_c02_common_qiu_arrival_01",
      "type": "line",
      "scene": "ts_c02_common_qiu_arrival",
      "speaker": "narrator",
      "text": "今晚我休班。路过网吧时，柜台里是当值同事，我打过招呼，绕到后院门边。",
      "character": null,
      "next": "tc_c02_common_qiu_door_01"
    },
    "tc_c02_common_qiu_door_01": {
      "id": "tc_c02_common_qiu_door_01",
      "type": "line",
      "scene": "ts_c02_common_qiu_door",
      "speaker": "narrator",
      "text": "我先敲三下，没有马上推。",
      "character": null,
      "next": "tc_c02_common_qiu_door_02"
    },
    "tc_c02_common_qiu_door_02": {
      "id": "tc_c02_common_qiu_door_02",
      "type": "line",
      "scene": "ts_c02_common_qiu_door",
      "speaker": "wenwen",
      "text": "“文文。”我说，“是上回那个。”",
      "character": null,
      "next": "tc_c02_common_qiu_door_03"
    },
    "tc_c02_common_qiu_door_03": {
      "id": "tc_c02_common_qiu_door_03",
      "type": "line",
      "scene": "ts_c02_common_qiu_door",
      "speaker": "narrator",
      "text": "“记得。你不用每次都介绍自己值什么班。”",
      "character": null,
      "next": "tc_c02_common_qiu_door_04"
    },
    "tc_c02_common_qiu_door_04": {
      "id": "tc_c02_common_qiu_door_04",
      "type": "line",
      "scene": "ts_c02_common_qiu_door",
      "speaker": "narrator",
      "text": "我笑了一下，问她叫什么。",
      "character": null,
      "next": "tc_c02_common_qiu_door_05"
    },
    "tc_c02_common_qiu_door_05": {
      "id": "tc_c02_common_qiu_door_05",
      "type": "line",
      "scene": "ts_c02_common_qiu_door",
      "speaker": "narrator",
      "text": "“黄球球。”",
      "character": null,
      "next": "tc_c02_common_qiu_door_06"
    },
    "tc_c02_common_qiu_door_06": {
      "id": "tc_c02_common_qiu_door_06",
      "type": "line",
      "scene": "ts_c02_common_qiu_door",
      "speaker": "wenwen",
      "text": "“我能进去吗？”",
      "character": null,
      "next": "tc_c02_common_qiu_door_07"
    },
    "tc_c02_common_qiu_door_07": {
      "id": "tc_c02_common_qiu_door_07",
      "type": "line",
      "scene": "ts_c02_common_qiu_door",
      "speaker": "narrator",
      "text": "“能。但先说一件事。我是成年女性，自称二十四岁。你可以先听完，别替我改成别的称呼。”",
      "character": null,
      "next": "tc_c02_common_qiu_door_08"
    },
    "tc_c02_common_qiu_door_08": {
      "id": "tc_c02_common_qiu_door_08",
      "type": "line",
      "scene": "ts_c02_common_qiu_door",
      "speaker": "narrator",
      "text": "我说好，才缓缓把门推开。",
      "character": null,
      "next": "tc_c02_common_qiu_meeting_01"
    },
    "tc_c02_common_qiu_meeting_01": {
      "id": "tc_c02_common_qiu_meeting_01",
      "type": "line",
      "scene": "ts_c02_common_qiu_meeting",
      "speaker": "narrator",
      "text": "塑料凳上坐着一个黄色圆球。深色的眉毛、大眼睛，短短的红嘴，一只小手托着脸。后院灯照着她，影子落在凳面，确实不是我熬夜以后眼前闪过去的东西。",
      "character": "huangqiuqiu",
      "next": "tc_c02_common_qiu_meeting_02"
    },
    "tc_c02_common_qiu_meeting_02": {
      "id": "tc_c02_common_qiu_meeting_02",
      "type": "line",
      "scene": "ts_c02_common_qiu_meeting",
      "speaker": "narrator",
      "text": "我扶着门，没说出话。",
      "character": "huangqiuqiu",
      "next": "tc_c02_common_qiu_meeting_03"
    },
    "tc_c02_common_qiu_meeting_03": {
      "id": "tc_c02_common_qiu_meeting_03",
      "type": "line",
      "scene": "ts_c02_common_qiu_meeting",
      "speaker": "huangqiuqiu",
      "text": "“现在可以意外了。”她说。",
      "character": "huangqiuqiu",
      "next": "tc_c02_common_qiu_meeting_04"
    },
    "tc_c02_common_qiu_meeting_04": {
      "id": "tc_c02_common_qiu_meeting_04",
      "type": "line",
      "scene": "ts_c02_common_qiu_meeting",
      "speaker": "wenwen",
      "text": "“……你刚才提前说那个，是怕我喊什么？”",
      "character": "huangqiuqiu",
      "next": "tc_c02_common_qiu_meeting_05"
    },
    "tc_c02_common_qiu_meeting_05": {
      "id": "tc_c02_common_qiu_meeting_05",
      "type": "line",
      "scene": "ts_c02_common_qiu_meeting",
      "speaker": "huangqiuqiu",
      "text": "“怕你把我拿去找失主。”",
      "character": "huangqiuqiu",
      "next": "tc_c02_common_qiu_meeting_06"
    },
    "tc_c02_common_qiu_meeting_06": {
      "id": "tc_c02_common_qiu_meeting_06",
      "type": "line",
      "scene": "ts_c02_common_qiu_meeting",
      "speaker": "narrator",
      "text": "我笑出来，又赶紧收住。她看着我，眉毛没有松下去：“笑也行。别只会笑。”",
      "character": "huangqiuqiu",
      "next": "tc_c02_common_qiu_meeting_07"
    },
    "tc_c02_common_qiu_meeting_07": {
      "id": "tc_c02_common_qiu_meeting_07",
      "type": "line",
      "scene": "ts_c02_common_qiu_meeting",
      "speaker": "narrator",
      "text": "我把另一张空凳子挪远一点，问这里能不能坐。她说可以。",
      "character": "huangqiuqiu",
      "next": "tc_c02_common_qiu_meeting_08"
    },
    "tc_c02_common_qiu_meeting_08": {
      "id": "tc_c02_common_qiu_meeting_08",
      "type": "line",
      "scene": "ts_c02_common_qiu_meeting",
      "speaker": "narrator",
      "text": "我们聊了很普通的事情。我说今天吃了什么，又讲了飘记下的那句“明天白菜便宜”，她问白菜最后便宜了没有；我问她是否常听见外面的声音，她说听见过许多“回头再说”，后半句总难等到。",
      "character": "huangqiuqiu",
      "next": "tc_c02_common_qiu_meeting_09"
    },
    "tc_c02_common_qiu_meeting_09": {
      "id": "tc_c02_common_qiu_meeting_09",
      "type": "line",
      "scene": "ts_c02_common_qiu_meeting",
      "speaker": "wenwen",
      "text": "“所以你那晚说，后面还有？”",
      "character": "huangqiuqiu",
      "next": "tc_c02_common_qiu_meeting_10"
    },
    "tc_c02_common_qiu_meeting_10": {
      "id": "tc_c02_common_qiu_meeting_10",
      "type": "line",
      "scene": "ts_c02_common_qiu_meeting",
      "speaker": "huangqiuqiu",
      "text": "“嗯。有的话可以讲完。没有也告诉我一声。”",
      "character": "huangqiuqiu",
      "next": "tc_c02_common_qiu_meeting_11"
    },
    "tc_c02_common_qiu_meeting_11": {
      "id": "tc_c02_common_qiu_meeting_11",
      "type": "line",
      "scene": "ts_c02_common_qiu_meeting",
      "speaker": "narrator",
      "text": "我没有追问她从哪来，也没有打开手机拍照。那疑问当然还在，但她正认真听我讲一个面馆里的笑话，我不想把她又变回一个问题。",
      "character": "huangqiuqiu",
      "next": "tc_c02_common_qiu_meeting_12"
    },
    "tc_c02_common_qiu_meeting_12": {
      "id": "tc_c02_common_qiu_meeting_12",
      "type": "line",
      "scene": "ts_c02_common_qiu_meeting",
      "speaker": "narrator",
      "text": "离开前，我问她想不想再见面。",
      "character": "huangqiuqiu",
      "next": "tc_c02_common_qiu_meeting_13"
    },
    "tc_c02_common_qiu_meeting_13": {
      "id": "tc_c02_common_qiu_meeting_13",
      "type": "line",
      "scene": "ts_c02_common_qiu_meeting",
      "speaker": "huangqiuqiu",
      "text": "“想。你先选自己真有空的时候。”",
      "character": "huangqiuqiu",
      "next": "tc_c02_common_qiu_leave_01"
    },
    "tc_c02_common_qiu_leave_01": {
      "id": "tc_c02_common_qiu_leave_01",
      "type": "line",
      "scene": "ts_c02_common_qiu_door",
      "speaker": "narrator",
      "text": "门外有人经过，我等脚步声远了才出去。师匠在另一头和人说话，没有看见后院里坐着谁。我也没有把这场相识发到群里。",
      "character": null,
      "next": "tc_c02_common_qiu_met"
    },
    "tc_c02_common_qiu_met": {
      "id": "tc_c02_common_qiu_met",
      "type": "line",
      "scene": "ts_c02_common_qiu_name_note",
      "speaker": "narrator",
      "text": "回到屋里，我把明天的闹钟调好。备忘录上那三个点还在，下面多了一行名字。",
      "character": null,
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
      "scene": "ts_c02_common_chapter_end",
      "title": "第二章 · 语音里的那个人",
      "text": "",
      "character": null,
      "next": "tc_c03_common_entry",
      "nextChapter": "第三章 · 想见你不必有事"
    },
    "tc_c02_common_qiu_reply_gate": {
      "id": "tc_c02_common_qiu_reply_gate",
      "type": "gate",
      "scene": "ts_c02_common_friends_meal",
      "cases": [
        {
          "flag": "qiuReply",
          "value": "reply",
          "next": "tc_c02_common_qiu_arrival_01"
        },
        {
          "flag": "qiuReply",
          "value": "leave",
          "next": "tc_c02_common_exit"
        }
      ],
      "default": null,
      "exhaustive": true
    },
    "tc_c02_common_qiu_signal_gate": {
      "id": "tc_c02_common_qiu_signal_gate",
      "type": "gate",
      "scene": "ts_c02_common_friends_meal",
      "cases": [
        {
          "flag": "qiuSignal",
          "value": "record",
          "next": "tc_c02_common_qiu_reply_gate"
        },
        {
          "flag": "qiuSignal",
          "value": "ignore",
          "next": "tc_c02_common_exit"
        }
      ],
      "default": null,
      "exhaustive": true
    },
    "tc_c03_common_entry": {
      "id": "tc_c03_common_entry",
      "type": "line",
      "scene": "ts_c03_common_invitation",
      "speaker": "narrator",
      "text": "睡醒时，雨已经下过一阵。我把窗户推开，屋檐上的水滴在防盗网上，滴得不太均匀。",
      "character": null,
      "next": "tc_c03_common_invitation_02"
    },
    "tc_c03_common_invitation_02": {
      "id": "tc_c03_common_invitation_02",
      "type": "line",
      "scene": "ts_c03_common_invitation",
      "speaker": "narrator",
      "text": "手机里有约好的游戏，也有没接完的话。以前我总爱等别人喊。这样有人喊，就显得我有事可做；没人喊，也不算我被拒绝。",
      "character": null,
      "next": "tc_c03_common_invitation_03"
    },
    "tc_c03_common_invitation_03": {
      "id": "tc_c03_common_invitation_03",
      "type": "line",
      "scene": "ts_c03_common_invitation",
      "speaker": "narrator",
      "text": "我把下一周的班看了一遍。接下来有班要上，也有能留出来的休息。我没有把所有人都写进同一张满满的日程里。",
      "character": null,
      "next": "tc_c03_common_invitation_04"
    },
    "tc_c03_common_invitation_04": {
      "id": "tc_c03_common_invitation_04",
      "type": "line",
      "scene": "ts_c03_common_invitation",
      "speaker": "narrator",
      "text": "先约一个真正想见的人，或者先陪朋友把普通日子过好。",
      "character": null,
      "next": "tc_c03_common_route_choice"
    },
    "tc_c03_common_exit": {
      "id": "tc_c03_common_exit",
      "type": "end",
      "scene": "ts_c03_common_chapter_end",
      "title": "第三章 · 想见你不必有事",
      "text": "",
      "character": null,
      "next": "tc_c04_common_entry",
      "nextChapter": "第四章 · 约好的那一天"
    },
    "tc_c03_common_route_choice": {
      "id": "tc_c03_common_route_choice",
      "type": "choice",
      "scene": "ts_c03_common_invitation",
      "flag": "route",
      "text": "接下来的时间，我想怎样度过？",
      "choices": [
        {
          "label": "去找小满，听她讲最近的事，也让她看看如今的我。",
          "value": "xiaoman",
          "next": "tc_c03_xiaoman_entry"
        },
        {
          "label": "约周栀吃一顿不赶着上班的饭，继续认识彼此的日常。",
          "value": "zhouzhi",
          "next": "tc_c03_zhouzhi_entry"
        },
        {
          "label": "把和孟遥没说完的话接下去，看看我们现在还能怎样相处。",
          "value": "mengyao",
          "next": "tc_c03_mengyao_entry"
        },
        {
          "label": "再约叶岚一次，让见面不只是游戏队的线下活动。",
          "value": "yelan",
          "next": "tc_c03_yelan_entry"
        },
        {
          "label": "认真回应飘的邀约，也说清自己的心意。",
          "value": "piao",
          "next": "tc_c03_piao_entry"
        },
        {
          "label": "先安排自己的生活，和毛狼、师匠继续做会见面的朋友。",
          "value": "friends",
          "next": "tc_c03_friends_entry"
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
      "character": null
    },
    "tc_c04_common_entry": {
      "id": "tc_c04_common_entry",
      "type": "line",
      "scene": "ts_c04_common_payday",
      "speaker": "narrator",
      "text": "这天下午，我醒来看到到账消息，在床上坐了一会儿。",
      "character": null,
      "next": "tc_c04_common_payday_02"
    },
    "tc_c04_common_payday_02": {
      "id": "tc_c04_common_payday_02",
      "type": "line",
      "scene": "ts_c04_common_payday",
      "speaker": "narrator",
      "text": "没有特别多，也不是突然发现自己前途无量。先交房租，再把前几天欠毛狼的早餐钱转回去，剩下的确实是我这几班挣来的钱。",
      "character": null,
      "next": "tc_c04_common_payday_03"
    },
    "tc_c04_common_payday_03": {
      "id": "tc_c04_common_payday_03",
      "type": "line",
      "scene": "ts_c04_common_payday",
      "speaker": "narrator",
      "text": "毛狼发来语音：“你是不是多转两块？”",
      "character": null,
      "next": "tc_c04_common_payday_04"
    },
    "tc_c04_common_payday_04": {
      "id": "tc_c04_common_payday_04",
      "type": "line",
      "scene": "ts_c04_common_payday",
      "speaker": "wenwen",
      "text": "“上次你加的蛋。”",
      "character": null,
      "next": "tc_c04_common_payday_05"
    },
    "tc_c04_common_payday_05": {
      "id": "tc_c04_common_payday_05",
      "type": "line",
      "scene": "ts_c04_common_payday",
      "speaker": "maolang",
      "text": "“那个蛋是我请你。”",
      "character": null,
      "next": "tc_c04_common_payday_06"
    },
    "tc_c04_common_payday_06": {
      "id": "tc_c04_common_payday_06",
      "type": "line",
      "scene": "ts_c04_common_payday",
      "speaker": "wenwen",
      "text": "“那下次再请。”",
      "character": null,
      "next": "tc_c04_common_payday_07"
    },
    "tc_c04_common_payday_07": {
      "id": "tc_c04_common_payday_07",
      "type": "line",
      "scene": "ts_c04_common_payday",
      "speaker": "narrator",
      "text": "他退回来两块，坚持不能把人情搞成一个账目错误。我收了，给自己买了个新的衣架。原来那只断了一边，衣服老往下滑，我一直想着还能将就。",
      "character": null,
      "next": "tc_c04_common_payday_08"
    },
    "tc_c04_common_payday_08": {
      "id": "tc_c04_common_payday_08",
      "type": "line",
      "scene": "ts_c04_common_payday",
      "speaker": "narrator",
      "text": "出门前，我把洗好的衣服重新挂好。今天约好的事情就在今天，不需要拿到一份更体面的工作才能开始。",
      "character": null,
      "next": "tc_c04_common_route_gate"
    },
    "tc_c04_common_exit": {
      "id": "tc_c04_common_exit",
      "type": "end",
      "scene": "ts_c04_common_chapter_end",
      "title": "第四章 · 约好的那一天",
      "text": "",
      "character": null,
      "next": "tc_c05_common_entry",
      "nextChapter": "第五章 · 没说出口的困意"
    },
    "tc_c04_common_route_gate": {
      "id": "tc_c04_common_route_gate",
      "type": "gate",
      "scene": "ts_c04_common_payday",
      "cases": [
        {
          "flag": "route",
          "value": "xiaoman",
          "next": "tc_c04_xiaoman_entry"
        },
        {
          "flag": "route",
          "value": "zhouzhi",
          "next": "tc_c04_zhouzhi_entry"
        },
        {
          "flag": "route",
          "value": "mengyao",
          "next": "tc_c04_mengyao_entry"
        },
        {
          "flag": "route",
          "value": "yelan",
          "next": "tc_c04_yelan_entry"
        },
        {
          "flag": "route",
          "value": "piao",
          "next": "tc_c04_piao_entry"
        },
        {
          "flag": "route",
          "value": "friends",
          "next": "tc_c04_friends_entry"
        },
        {
          "flag": "route",
          "value": "huangqiuqiu",
          "next": "tc_c04_huangqiuqiu_entry"
        }
      ],
      "default": null,
      "exhaustive": true
    },
    "tc_c05_common_entry": {
      "id": "tc_c05_common_entry",
      "type": "line",
      "scene": "ts_c05_common_echo_message",
      "speaker": "narrator",
      "text": "周栀在约饭群里说，回声最后营业到第三十天。",
      "character": null,
      "next": "tc_c05_common_echo_message_02"
    },
    "tc_c05_common_echo_message_02": {
      "id": "tc_c05_common_echo_message_02",
      "type": "line",
      "scene": "ts_c05_common_echo_message",
      "speaker": "narrator",
      "text": "消息没有配长篇告别。她说这几天照常上班，最后那天下午可以在附近吃一顿，她晚上还得回店里。没空的人不用硬挤，之后也不是失联。",
      "character": null,
      "next": "tc_c05_common_echo_message_03"
    },
    "tc_c05_common_echo_message_03": {
      "id": "tc_c05_common_echo_message_03",
      "type": "line",
      "scene": "ts_c05_common_echo_message",
      "speaker": "narrator",
      "text": "我问她最近怎么样。她回：“有点烦，也有点想偷懒。后一个愿望暂时实现不了。”",
      "character": null,
      "next": "tc_c05_common_echo_message_04"
    },
    "tc_c05_common_echo_message_04": {
      "id": "tc_c05_common_echo_message_04",
      "type": "line",
      "scene": "ts_c05_common_echo_message",
      "speaker": "narrator",
      "text": "毛狼说他要是去，能不能不用表演感言。周栀说正好，店里听的歌已经够多，不需要加主持节目。",
      "character": null,
      "next": "tc_c05_common_echo_message_05"
    },
    "tc_c05_common_echo_message_05": {
      "id": "tc_c05_common_echo_message_05",
      "type": "line",
      "scene": "ts_c05_common_echo_message",
      "speaker": "narrator",
      "text": "我看了眼自己的班。第三十天晚上十点上班，傍晚去吃饭来得及，收尾却不能在场。我把这件事直接说了。",
      "character": null,
      "next": "tc_c05_common_echo_message_06"
    },
    "tc_c05_common_echo_message_06": {
      "id": "tc_c05_common_echo_message_06",
      "type": "line",
      "scene": "ts_c05_common_echo_message",
      "speaker": "zhouzhi",
      "text": "“吃完你该去就去。”她回，“剩下是店里的事。”",
      "character": null,
      "next": "tc_c05_common_echo_message_07"
    },
    "tc_c05_common_echo_message_07": {
      "id": "tc_c05_common_echo_message_07",
      "type": "line",
      "scene": "ts_c05_common_echo_message",
      "speaker": "narrator",
      "text": "一会儿，小满问菜能不能先少点，飘说人到再加。群里又回到普通的吃饭话题。",
      "character": null,
      "next": "tc_c05_common_echo_message_08"
    },
    "tc_c05_common_echo_message_08": {
      "id": "tc_c05_common_echo_message_08",
      "type": "line",
      "scene": "ts_c05_common_echo_message",
      "speaker": "narrator",
      "text": "我把手机放下，去热自己的饭。过去我总觉得这种时候非得做点特别的事，才配得上“朋友”两个字。可这一次，没有人叫我带工具，也没有人等我拿出让店继续开下去的办法。",
      "character": null,
      "next": "tc_c05_common_echo_message_09"
    },
    "tc_c05_common_echo_message_09": {
      "id": "tc_c05_common_echo_message_09",
      "type": "line",
      "scene": "ts_c05_common_echo_message",
      "speaker": "narrator",
      "text": "我能做的是到场，吃饭，听她愿意讲的话，然后按时去上自己的班。",
      "character": null,
      "next": "tc_c05_common_missed_game_gate"
    },
    "tc_c05_common_exit": {
      "id": "tc_c05_common_exit",
      "type": "end",
      "scene": "ts_c05_common_chapter_end",
      "title": "第五章 · 没说出口的困意",
      "text": "",
      "character": null,
      "next": "tc_c06_common_entry",
      "nextChapter": "第六章 · 空出来的一个晚上"
    },
    "tc_c05_common_missed_voice_callback_01": {
      "id": "tc_c05_common_missed_voice_callback_01",
      "type": "line",
      "scene": "ts_c05_common_missed_game_callback",
      "speaker": "narrator",
      "text": "晚些时候，毛狼问第30日吃完饭能不能顺便玩。我这次直接发语音，说那晚要值班，玩不了。他回了声知道，没有再把我列进去。我想起上次那段迟了五十分钟的解释，庆幸这回可以在事情发生前说清。",
      "character": null,
      "next": "tc_c05_common_route_gate"
    },
    "tc_c05_common_missed_reschedule_callback_01": {
      "id": "tc_c05_common_missed_reschedule_callback_01",
      "type": "line",
      "scene": "ts_c05_common_missed_game_callback",
      "speaker": "narrator",
      "text": "晚些时候，毛狼把新约局时间发出来，仍按上次说好的，只留一个大家都能参加的短时段。我把第30日值班那格划掉，另回一个能参加的休班晚上。叶岚说她到时也只空一会儿，我们没有把谁的短暂出现当成扫兴。",
      "character": null,
      "next": "tc_c05_common_route_gate"
    },
    "tc_c05_common_route_gate": {
      "id": "tc_c05_common_route_gate",
      "type": "gate",
      "scene": "ts_c05_common_missed_game_callback",
      "cases": [
        {
          "flag": "route",
          "value": "xiaoman",
          "next": "tc_c05_xiaoman_entry"
        },
        {
          "flag": "route",
          "value": "zhouzhi",
          "next": "tc_c05_zhouzhi_entry"
        },
        {
          "flag": "route",
          "value": "mengyao",
          "next": "tc_c05_mengyao_entry"
        },
        {
          "flag": "route",
          "value": "yelan",
          "next": "tc_c05_yelan_entry"
        },
        {
          "flag": "route",
          "value": "piao",
          "next": "tc_c05_piao_entry"
        },
        {
          "flag": "route",
          "value": "friends",
          "next": "tc_c05_friends_entry"
        },
        {
          "flag": "route",
          "value": "huangqiuqiu",
          "next": "tc_c05_huangqiuqiu_entry"
        }
      ],
      "default": null,
      "exhaustive": true
    },
    "tc_c05_common_missed_game_gate": {
      "id": "tc_c05_common_missed_game_gate",
      "type": "gate",
      "scene": "ts_c05_common_missed_game_callback",
      "cases": [
        {
          "flag": "missedGame",
          "value": "voice",
          "next": "tc_c05_common_missed_voice_callback_01"
        },
        {
          "flag": "missedGame",
          "value": "reschedule",
          "next": "tc_c05_common_missed_reschedule_callback_01"
        }
      ],
      "default": null,
      "exhaustive": true
    },
    "tc_c06_common_entry": {
      "id": "tc_c06_common_entry",
      "type": "line",
      "scene": "ts_c06_common_last_night_meal",
      "speaker": "narrator",
      "text": "饭桌在回声旁边的小店，没有包间。周栀把外套搭好，第一句话是：“别点那道，上回咸得我喝了两壶水。”",
      "character": "zhouzhi",
      "next": "tc_c06_common_last_night_meal_02"
    },
    "tc_c06_common_last_night_meal_02": {
      "id": "tc_c06_common_last_night_meal_02",
      "type": "line",
      "scene": "ts_c06_common_last_night_meal",
      "speaker": "narrator",
      "text": "毛狼收回手，改点别的。小满晚一点到，飘让老板多添一副碗筷。孟遥下课后也赶来坐了一会儿，叶岚下班后坐到了她旁边。我坐在靠过道的位置，给端菜的人让路。",
      "character": "maolang",
      "next": "tc_c06_common_last_night_meal_03"
    },
    "tc_c06_common_last_night_meal_03": {
      "id": "tc_c06_common_last_night_meal_03",
      "type": "line",
      "scene": "ts_c06_common_last_night_meal",
      "speaker": "narrator",
      "text": "谁都没急着把这顿饭变成某种仪式。周栀讲以前有客人坚持说自己没跑调，是伴奏不肯跟他，毛狼听得深有同感，被大家一起看了一眼。",
      "character": "zhouzhi",
      "next": "tc_c06_common_last_night_meal_04"
    },
    "tc_c06_common_last_night_meal_04": {
      "id": "tc_c06_common_last_night_meal_04",
      "type": "line",
      "scene": "ts_c06_common_last_night_meal",
      "speaker": "maolang",
      "text": "“我是主持，又不负责唱。”",
      "character": "maolang",
      "next": "tc_c06_common_last_night_meal_05"
    },
    "tc_c06_common_last_night_meal_05": {
      "id": "tc_c06_common_last_night_meal_05",
      "type": "line",
      "scene": "ts_c06_common_last_night_meal",
      "speaker": "xiaoman",
      "text": "“你每次都唱。”小满说。",
      "character": "xiaoman",
      "next": "tc_c06_common_last_night_meal_06"
    },
    "tc_c06_common_last_night_meal_06": {
      "id": "tc_c06_common_last_night_meal_06",
      "type": "line",
      "scene": "ts_c06_common_last_night_meal",
      "speaker": "maolang",
      "text": "“那是节目诚意。”",
      "character": "maolang",
      "next": "tc_c06_common_last_night_meal_07"
    },
    "tc_c06_common_last_night_meal_07": {
      "id": "tc_c06_common_last_night_meal_07",
      "type": "line",
      "scene": "ts_c06_common_last_night_meal",
      "speaker": "narrator",
      "text": "菜端上来，大家的话断断续续。周栀说以后先歇几天，再和朋友试做夜宵，看自己到底适不适合。具体能做成什么，她现在也不知道。",
      "character": "zhouzhi",
      "next": "tc_c06_common_last_night_meal_08",
      "cg": "tc-cg-last-echo-dinner"
    },
    "tc_c06_common_last_night_meal_08": {
      "id": "tc_c06_common_last_night_meal_08",
      "type": "line",
      "scene": "ts_c06_common_last_night_meal",
      "speaker": "wenwen",
      "text": "“那你这几天是不是终于能按饭点吃饭？”我问。",
      "character": "zhouzhi",
      "next": "tc_c06_common_last_night_meal_09",
      "cg": "tc-cg-last-echo-dinner"
    },
    "tc_c06_common_last_night_meal_09": {
      "id": "tc_c06_common_last_night_meal_09",
      "type": "line",
      "scene": "ts_c06_common_last_night_meal",
      "speaker": "zhouzhi",
      "text": "“也可能睡到饭点以后。”",
      "character": "zhouzhi",
      "next": "tc_c06_common_last_night_meal_10",
      "cg": "tc-cg-last-echo-dinner"
    },
    "tc_c06_common_last_night_meal_10": {
      "id": "tc_c06_common_last_night_meal_10",
      "type": "line",
      "scene": "ts_c06_common_last_night_meal",
      "speaker": "narrator",
      "text": "她笑了。我第一次觉得，她不需要在店关门之前就变成一个目标清晰的人。",
      "character": "zhouzhi",
      "next": "tc_c06_common_meal_goodbye_01",
      "expression": "expression-smile",
      "cg": "tc-cg-last-echo-dinner"
    },
    "tc_c06_common_exit": {
      "id": "tc_c06_common_exit",
      "type": "end",
      "scene": "ts_c06_common_chapter_end",
      "title": "第六章 · 空出来的一个晚上",
      "text": "",
      "character": null,
      "next": "tc_c07_common_entry",
      "nextChapter": "第七章 · 各自要过的日子"
    },
    "tc_c06_common_meal_goodbye_01": {
      "id": "tc_c06_common_meal_goodbye_01",
      "type": "line",
      "scene": "ts_c06_common_meal_goodbye",
      "speaker": "narrator",
      "text": "七点多，她先走。出门时又回来拿外套，说差点把后面几个月唯一能确定的财产落下。大家笑她，她自己也笑。",
      "character": "zhouzhi",
      "next": "tc_c06_common_night_shift_01"
    },
    "tc_c06_common_night_shift_01": {
      "id": "tc_c06_common_night_shift_01",
      "type": "line",
      "scene": "ts_c06_common_night_shift",
      "speaker": "narrator",
      "text": "我没有跟去回声。十点到了网吧，照常给客人开机，替一位刚走的人收掉桌上的纸杯。过了零点，街上越来越静。",
      "character": null,
      "next": "tc_c06_common_after_midnight_01"
    },
    "tc_c06_common_after_midnight_01": {
      "id": "tc_c06_common_after_midnight_01",
      "type": "line",
      "scene": "ts_c06_common_after_midnight",
      "speaker": "narrator",
      "text": "第三十一天凌晨，我休息的几分钟里看到周栀发来一句：“收工了，回去睡。”我回她晚安，没追问关门时有没有哭。",
      "character": null,
      "next": "tc_c06_common_closed_echo_01"
    },
    "tc_c06_common_closed_echo_01": {
      "id": "tc_c06_common_closed_echo_01",
      "type": "line",
      "scene": "ts_c06_common_closed_echo",
      "speaker": "narrator",
      "text": "六点有人接班。我沿着昨天吃饭的那条路回去，回声的门已经关着。招牌还在那里，街上的早餐摊也已经摆出来。",
      "character": null,
      "next": "tc_c06_common_closed_echo_02",
      "bg": "tc-bg-echo-closed-dawn"
    },
    "tc_c06_common_closed_echo_02": {
      "id": "tc_c06_common_closed_echo_02",
      "type": "line",
      "scene": "ts_c06_common_closed_echo",
      "speaker": "narrator",
      "text": "我买了一份带走。热气把塑料袋熏得发白，手指能感觉到里面的温度。",
      "character": null,
      "next": "tc_c06_common_route_gate",
      "bg": "tc-bg-echo-closed-dawn"
    },
    "tc_c06_common_route_gate": {
      "id": "tc_c06_common_route_gate",
      "type": "gate",
      "scene": "ts_c06_common_closed_echo",
      "cases": [
        {
          "flag": "route",
          "value": "xiaoman",
          "next": "tc_c06_xiaoman_entry"
        },
        {
          "flag": "route",
          "value": "zhouzhi",
          "next": "tc_c06_zhouzhi_entry"
        },
        {
          "flag": "route",
          "value": "mengyao",
          "next": "tc_c06_mengyao_entry"
        },
        {
          "flag": "route",
          "value": "yelan",
          "next": "tc_c06_yelan_entry"
        },
        {
          "flag": "route",
          "value": "piao",
          "next": "tc_c06_piao_entry"
        },
        {
          "flag": "route",
          "value": "friends",
          "next": "tc_c06_friends_entry"
        },
        {
          "flag": "route",
          "value": "huangqiuqiu",
          "next": "tc_c06_huangqiuqiu_entry"
        }
      ],
      "default": null,
      "exhaustive": true
    },
    "tc_c07_common_entry": {
      "id": "tc_c07_common_entry",
      "type": "line",
      "scene": "ts_c07_common_short_game",
      "speaker": "narrator",
      "text": "毛狼在群里问下个休息日有没有人玩。",
      "character": null,
      "next": "tc_c07_common_short_game_02"
    },
    "tc_c07_common_short_game_02": {
      "id": "tc_c07_common_short_game_02",
      "type": "line",
      "scene": "ts_c07_common_short_game",
      "speaker": "narrator",
      "text": "这回答得很不齐。有的人忙，有的人想出门，有的人就想一个人待着。我说先看看时间，半小时后把自己能玩的那一段发出去，没有让他替我猜。",
      "character": null,
      "next": "tc_c07_common_short_game_03"
    },
    "tc_c07_common_short_game_03": {
      "id": "tc_c07_common_short_game_03",
      "type": "line",
      "scene": "ts_c07_common_short_game",
      "speaker": "narrator",
      "text": "他干脆把原来想约的长局改成一小局。有人问这样玩得过瘾吗，他说：“先玩上。下一次再说下一次。”",
      "character": null,
      "next": "tc_c07_common_short_game_04"
    },
    "tc_c07_common_short_game_04": {
      "id": "tc_c07_common_short_game_04",
      "type": "line",
      "scene": "ts_c07_common_short_game",
      "speaker": "narrator",
      "text": "我看着那句话，想起刚回来时，自己总盼着谁给这段生活起一个好听的名字。暂时休整也好，重新开始也好，仿佛叫法妥当，别人就不会再问。",
      "character": null,
      "next": "tc_c07_common_short_game_05"
    },
    "tc_c07_common_short_game_05": {
      "id": "tc_c07_common_short_game_05",
      "type": "line",
      "scene": "ts_c07_common_short_game",
      "speaker": "narrator",
      "text": "窗台上的衣服还没干，房租下个月照交，网吧今晚也照常开。我打了一局，输了，按约好的时间下线。没有为了证明这天没白过，再加一局。",
      "character": null,
      "next": "tc_c07_common_short_game_06"
    },
    "tc_c07_common_short_game_06": {
      "id": "tc_c07_common_short_game_06",
      "type": "line",
      "scene": "ts_c07_common_short_game",
      "speaker": "narrator",
      "text": "关电脑以前，我想起下一次约好的见面。刚才游戏里那个笑话，可以留着当面再讲。",
      "character": null,
      "next": "tc_c07_common_route_gate"
    },
    "tc_c07_common_exit": {
      "id": "tc_c07_common_exit",
      "type": "end",
      "scene": "ts_c07_common_chapter_end",
      "title": "第七章 · 各自要过的日子",
      "text": "",
      "character": null,
      "next": "tc_c08_common_entry",
      "nextChapter": "第八章 · 不用每次都逞强"
    },
    "tc_c07_common_route_gate": {
      "id": "tc_c07_common_route_gate",
      "type": "gate",
      "scene": "ts_c07_common_short_game",
      "cases": [
        {
          "flag": "route",
          "value": "xiaoman",
          "next": "tc_c07_xiaoman_entry"
        },
        {
          "flag": "route",
          "value": "zhouzhi",
          "next": "tc_c07_zhouzhi_entry"
        },
        {
          "flag": "route",
          "value": "mengyao",
          "next": "tc_c07_mengyao_entry"
        },
        {
          "flag": "route",
          "value": "yelan",
          "next": "tc_c07_yelan_entry"
        },
        {
          "flag": "route",
          "value": "piao",
          "next": "tc_c07_piao_entry"
        },
        {
          "flag": "route",
          "value": "friends",
          "next": "tc_c07_friends_entry"
        },
        {
          "flag": "route",
          "value": "huangqiuqiu",
          "next": "tc_c07_huangqiuqiu_entry"
        }
      ],
      "default": null,
      "exhaustive": true
    },
    "tc_c08_common_entry": {
      "id": "tc_c08_common_entry",
      "type": "line",
      "scene": "ts_c08_common_trial_roster",
      "speaker": "narrator",
      "text": "师匠在店里吃饭，我坐在柜台外面的椅子上，等他把嘴里的东西咽下去。",
      "character": "shijiang",
      "next": "tc_c08_common_trial_roster_02"
    },
    "tc_c08_common_trial_roster_02": {
      "id": "tc_c08_common_trial_roster_02",
      "type": "line",
      "scene": "ts_c08_common_trial_roster",
      "speaker": "wenwen",
      "text": "“想商量一下以后能不能轮班。”我说。",
      "character": "shijiang",
      "next": "tc_c08_common_trial_roster_03"
    },
    "tc_c08_common_trial_roster_03": {
      "id": "tc_c08_common_trial_roster_03",
      "type": "line",
      "scene": "ts_c08_common_trial_roster",
      "speaker": "narrator",
      "text": "他抬头：“今天哪一班不想上？”",
      "character": "shijiang",
      "next": "tc_c08_common_trial_roster_04"
    },
    "tc_c08_common_trial_roster_04": {
      "id": "tc_c08_common_trial_roster_04",
      "type": "line",
      "scene": "ts_c08_common_trial_roster",
      "speaker": "wenwen",
      "text": "“不是今天。以后。”",
      "character": "shijiang",
      "next": "tc_c08_common_trial_roster_05"
    },
    "tc_c08_common_trial_roster_05": {
      "id": "tc_c08_common_trial_roster_05",
      "type": "line",
      "scene": "ts_c08_common_trial_roster",
      "speaker": "narrator",
      "text": "我把自己的情况讲了：夜班能做，钱也需要，但一直和所有人的时间错开，休息日又容易什么都往里塞。我想试着跟现有同事轮换，保留能预先安排的空档。",
      "character": "shijiang",
      "next": "tc_c08_common_trial_roster_06"
    },
    "tc_c08_common_trial_roster_06": {
      "id": "tc_c08_common_trial_roster_06",
      "type": "line",
      "scene": "ts_c08_common_trial_roster",
      "speaker": "narrator",
      "text": "师匠没有马上答应。他说白班也不是凭空多出来的，得问其他人，不会把我的难处直接丢给别人。我说知道，所以想先谈，而不是改天临时请假。",
      "character": "shijiang",
      "next": "tc_c08_common_trial_roster_07"
    },
    "tc_c08_common_trial_roster_07": {
      "id": "tc_c08_common_trial_roster_07",
      "type": "line",
      "scene": "ts_c08_common_trial_roster",
      "speaker": "shijiang",
      "text": "“你确定想换？”",
      "character": "shijiang",
      "next": "tc_c08_common_trial_roster_08"
    },
    "tc_c08_common_trial_roster_08": {
      "id": "tc_c08_common_trial_roster_08",
      "type": "line",
      "scene": "ts_c08_common_trial_roster",
      "speaker": "wenwen",
      "text": "“想试。试完如果不合适，再说。我不是这班干腻了，随口讲讲。”",
      "character": "shijiang",
      "next": "tc_c08_common_trial_roster_09"
    },
    "tc_c08_common_trial_roster_09": {
      "id": "tc_c08_common_trial_roster_09",
      "type": "line",
      "scene": "ts_c08_common_trial_roster",
      "speaker": "narrator",
      "text": "他把饭盒盖上，拿手机去问其他同事。等了几分钟，有人愿意试换一部分，具体还得各自看安排。",
      "character": "shijiang",
      "next": "tc_c08_common_trial_roster_10"
    },
    "tc_c08_common_trial_roster_10": {
      "id": "tc_c08_common_trial_roster_10",
      "type": "line",
      "scene": "ts_c08_common_trial_roster",
      "speaker": "narrator",
      "text": "师匠回来，说先试排，不保证每次都能如愿；谁临时不行要提前说。我也没把这句话听成暗示自己不够努力。",
      "character": "shijiang",
      "next": "tc_c08_common_trial_roster_11"
    },
    "tc_c08_common_trial_roster_11": {
      "id": "tc_c08_common_trial_roster_11",
      "type": "line",
      "scene": "ts_c08_common_trial_roster",
      "speaker": "narrator",
      "text": "出门时，他叫住我：“以后商量这种事，别一直盯着我饭盒。我总觉得你还没吃。”",
      "character": "shijiang",
      "next": "tc_c08_common_trial_roster_12"
    },
    "tc_c08_common_trial_roster_12": {
      "id": "tc_c08_common_trial_roster_12",
      "type": "line",
      "scene": "ts_c08_common_trial_roster",
      "speaker": "wenwen",
      "text": "“确实还没吃。”",
      "character": "shijiang",
      "next": "tc_c08_common_trial_roster_13"
    },
    "tc_c08_common_trial_roster_13": {
      "id": "tc_c08_common_trial_roster_13",
      "type": "line",
      "scene": "ts_c08_common_trial_roster",
      "speaker": "shijiang",
      "text": "“那先去吃。钱的事照原来约定，该多少是多少。”",
      "character": "shijiang",
      "next": "tc_c08_common_trial_roster_14"
    },
    "tc_c08_common_trial_roster_14": {
      "id": "tc_c08_common_trial_roster_14",
      "type": "line",
      "scene": "ts_c08_common_trial_roster",
      "speaker": "narrator",
      "text": "我站在门外，心里松了一点。没有人宣布我从此过上理想生活。我只是第一次把想怎样生活，讲成了一个可以和别人商量的具体请求。",
      "character": null,
      "next": "tc_c08_common_route_gate"
    },
    "tc_c08_common_exit": {
      "id": "tc_c08_common_exit",
      "type": "end",
      "scene": "ts_c08_common_chapter_end",
      "title": "第八章 · 不用每次都逞强",
      "text": "",
      "character": null,
      "next": "tc_c09_common_entry",
      "nextChapter": "第九章 · 把明天说具体"
    },
    "tc_c08_common_route_gate": {
      "id": "tc_c08_common_route_gate",
      "type": "gate",
      "scene": "ts_c08_common_trial_roster",
      "cases": [
        {
          "flag": "route",
          "value": "xiaoman",
          "next": "tc_c08_xiaoman_entry"
        },
        {
          "flag": "route",
          "value": "zhouzhi",
          "next": "tc_c08_zhouzhi_entry"
        },
        {
          "flag": "route",
          "value": "mengyao",
          "next": "tc_c08_mengyao_entry"
        },
        {
          "flag": "route",
          "value": "yelan",
          "next": "tc_c08_yelan_entry"
        },
        {
          "flag": "route",
          "value": "piao",
          "next": "tc_c08_piao_entry"
        },
        {
          "flag": "route",
          "value": "friends",
          "next": "tc_c08_friends_entry"
        },
        {
          "flag": "route",
          "value": "huangqiuqiu",
          "next": "tc_c08_huangqiuqiu_entry"
        }
      ],
      "default": null,
      "exhaustive": true
    },
    "tc_c09_common_entry": {
      "id": "tc_c09_common_entry",
      "type": "line",
      "scene": "ts_c09_common_confirmed_roster",
      "speaker": "narrator",
      "text": "试排结束，师匠和我们坐下来，把能继续的部分定了。",
      "character": "shijiang",
      "next": "tc_c09_common_confirmed_roster_02"
    },
    "tc_c09_common_confirmed_roster_02": {
      "id": "tc_c09_common_confirmed_roster_02",
      "type": "line",
      "scene": "ts_c09_common_confirmed_roster",
      "speaker": "narrator",
      "text": "我以后轮班，仍有夜班，也能提前知道哪几天完整休息。收入没有突然翻一倍，店里的事也不会因为排得整齐就再不出错。但大家把能做和不能做的说清楚，日子比我刚回来时更可预计一点。",
      "character": "shijiang",
      "next": "tc_c09_common_confirmed_roster_03"
    },
    "tc_c09_common_confirmed_roster_03": {
      "id": "tc_c09_common_confirmed_roster_03",
      "type": "line",
      "scene": "ts_c09_common_confirmed_roster",
      "speaker": "narrator",
      "text": "我把自己的那几天记进手机。空白留着，没有一口气全部填上。",
      "character": "shijiang",
      "next": "tc_c09_common_confirmed_roster_04"
    },
    "tc_c09_common_confirmed_roster_04": {
      "id": "tc_c09_common_confirmed_roster_04",
      "type": "line",
      "scene": "ts_c09_common_confirmed_roster",
      "speaker": "narrator",
      "text": "毛狼问我空下来做什么，我说有些要见人，有些还不知道。",
      "character": "maolang",
      "next": "tc_c09_common_confirmed_roster_05"
    },
    "tc_c09_common_confirmed_roster_05": {
      "id": "tc_c09_common_confirmed_roster_05",
      "type": "line",
      "scene": "ts_c09_common_confirmed_roster",
      "speaker": "maolang",
      "text": "“终于允许不知道了？”",
      "character": "maolang",
      "next": "tc_c09_common_confirmed_roster_06"
    },
    "tc_c09_common_confirmed_roster_06": {
      "id": "tc_c09_common_confirmed_roster_06",
      "type": "line",
      "scene": "ts_c09_common_confirmed_roster",
      "speaker": "wenwen",
      "text": "“我一直允许。”",
      "character": "shijiang",
      "next": "tc_c09_common_confirmed_roster_07"
    },
    "tc_c09_common_confirmed_roster_07": {
      "id": "tc_c09_common_confirmed_roster_07",
      "type": "line",
      "scene": "ts_c09_common_confirmed_roster",
      "speaker": "maolang",
      "text": "“允许自己不知道，还是允许别人知道你不知道？”",
      "character": "maolang",
      "next": "tc_c09_common_confirmed_roster_08"
    },
    "tc_c09_common_confirmed_roster_08": {
      "id": "tc_c09_common_confirmed_roster_08",
      "type": "line",
      "scene": "ts_c09_common_confirmed_roster",
      "speaker": "narrator",
      "text": "我抬脚轻轻踢了一下他的椅腿。他笑着往后躲，没有乘胜给我上第二课。",
      "character": "maolang",
      "next": "tc_c09_common_confirmed_roster_09"
    },
    "tc_c09_common_confirmed_roster_09": {
      "id": "tc_c09_common_confirmed_roster_09",
      "type": "line",
      "scene": "ts_c09_common_confirmed_roster",
      "speaker": "narrator",
      "text": "窗外又落雨。路边卖伞的人把伞撑起来，遮住自己卖的伞，我看了很久，觉得这画面有点好笑，拍下来留在手机里，想下次见面时给约好的人看。",
      "character": null,
      "next": "tc_c09_common_confirmed_roster_10"
    },
    "tc_c09_common_confirmed_roster_10": {
      "id": "tc_c09_common_confirmed_roster_10",
      "type": "line",
      "scene": "ts_c09_common_confirmed_roster",
      "speaker": "narrator",
      "text": "这次没有工作结果可以汇报，也没有需要对方帮忙解决的事。我只是想让那个人看见。",
      "character": null,
      "next": "tc_c09_common_route_gate"
    },
    "tc_c09_common_exit": {
      "id": "tc_c09_common_exit",
      "type": "end",
      "scene": "ts_c09_common_chapter_end",
      "title": "第九章 · 把明天说具体",
      "text": "",
      "character": null,
      "next": "tc_c10_common_entry",
      "nextChapter": "第十章 · 雨停之前也往前走"
    },
    "tc_c09_common_route_gate": {
      "id": "tc_c09_common_route_gate",
      "type": "gate",
      "scene": "ts_c09_common_confirmed_roster",
      "cases": [
        {
          "flag": "route",
          "value": "xiaoman",
          "next": "tc_c09_xiaoman_entry"
        },
        {
          "flag": "route",
          "value": "zhouzhi",
          "next": "tc_c09_zhouzhi_entry"
        },
        {
          "flag": "route",
          "value": "mengyao",
          "next": "tc_c09_mengyao_entry"
        },
        {
          "flag": "route",
          "value": "yelan",
          "next": "tc_c09_yelan_entry"
        },
        {
          "flag": "route",
          "value": "piao",
          "next": "tc_c09_piao_entry"
        },
        {
          "flag": "route",
          "value": "friends",
          "next": "tc_c09_friends_entry"
        },
        {
          "flag": "route",
          "value": "huangqiuqiu",
          "next": "tc_c09_huangqiuqiu_entry"
        }
      ],
      "default": null,
      "exhaustive": true
    },
    "tc_c10_common_entry": {
      "id": "tc_c10_common_entry",
      "type": "line",
      "scene": "ts_c10_common_daily_life",
      "speaker": "narrator",
      "text": "两年后，我还在那家网吧工作，已经习惯轮班。",
      "character": null,
      "next": "tc_c10_common_daily_life_02"
    },
    "tc_c10_common_daily_life_02": {
      "id": "tc_c10_common_daily_life_02",
      "type": "line",
      "scene": "ts_c10_common_daily_life",
      "speaker": "narrator",
      "text": "柜台边的纸巾换过几次位置，师匠的眼镜盒却还是经常找不到。他会先问我，再摸自己口袋，大多数时候问题到这里结束。",
      "character": null,
      "next": "tc_c10_common_daily_life_03"
    },
    "tc_c10_common_daily_life_03": {
      "id": "tc_c10_common_daily_life_03",
      "type": "line",
      "scene": "ts_c10_common_daily_life",
      "speaker": "narrator",
      "text": "毛狼的临时演出有忙有闲，不是什么突然出名的大主持。他说自己如今至少知道，名字不认识要先问，不能临上台赌运气。",
      "character": null,
      "next": "tc_c10_common_daily_life_04"
    },
    "tc_c10_common_daily_life_04": {
      "id": "tc_c10_common_daily_life_04",
      "type": "line",
      "scene": "ts_c10_common_daily_life",
      "speaker": "narrator",
      "text": "我攒了一点钱，花掉过一些，也还没把所有未来想通。换班以后腾出来的日子，没有全拿去做大事。有时只是睡够、买菜，和约好的人坐一会儿。",
      "character": null,
      "next": "tc_c10_common_epilogue_route_gate"
    },
    "tc_c10_common_piao_dating": {
      "id": "tc_c10_common_piao_dating",
      "type": "line",
      "scene": "ts_c10_common_piao_dating_meal",
      "speaker": "narrator",
      "text": "休班那天，毛狼约我们吃饭，到了才说店里换菜单了，他怕一个人点踩雷。",
      "character": "maolang",
      "next": "tc_c10_common_piao_dating_02"
    },
    "tc_c10_common_piao_dating_02": {
      "id": "tc_c10_common_piao_dating_02",
      "type": "line",
      "scene": "ts_c10_common_piao_dating_meal",
      "speaker": "narrator",
      "text": "飘把刚印好的第二版小册子给他看。他翻到最后，先问有没有把他写进去。",
      "character": "piao",
      "next": "tc_c10_common_piao_dating_03"
    },
    "tc_c10_common_piao_dating_03": {
      "id": "tc_c10_common_piao_dating_03",
      "type": "line",
      "scene": "ts_c10_common_piao_dating_meal",
      "speaker": "piao",
      "text": "“有。”她说。",
      "character": "piao",
      "next": "tc_c10_common_piao_dating_04"
    },
    "tc_c10_common_piao_dating_04": {
      "id": "tc_c10_common_piao_dating_04",
      "type": "line",
      "scene": "ts_c10_common_piao_dating_meal",
      "speaker": "maolang",
      "text": "“正面形象？”",
      "character": "maolang",
      "next": "tc_c10_common_piao_dating_05"
    },
    "tc_c10_common_piao_dating_05": {
      "id": "tc_c10_common_piao_dating_05",
      "type": "line",
      "scene": "ts_c10_common_piao_dating_meal",
      "speaker": "piao",
      "text": "“你迟到那次。”",
      "character": "piao",
      "next": "tc_c10_common_piao_dating_06"
    },
    "tc_c10_common_piao_dating_06": {
      "id": "tc_c10_common_piao_dating_06",
      "type": "line",
      "scene": "ts_c10_common_piao_dating_meal",
      "speaker": "narrator",
      "text": "他合上本子：“文学需要审慎。”",
      "character": "piao",
      "next": "tc_c10_common_piao_dating_07"
    },
    "tc_c10_common_piao_dating_07": {
      "id": "tc_c10_common_piao_dating_07",
      "type": "line",
      "scene": "ts_c10_common_piao_dating_meal",
      "speaker": "narrator",
      "text": "我伸手去拿，被飘先抽回去：“先吃饭，别都拿来当挡嘴的。”",
      "character": "piao",
      "next": "tc_c10_common_piao_dating_08"
    },
    "tc_c10_common_piao_dating_08": {
      "id": "tc_c10_common_piao_dating_08",
      "type": "line",
      "scene": "ts_c10_common_piao_dating_meal",
      "speaker": "narrator",
      "text": "我们仍然是恋人，毛狼仍然是会和我们吃饭的朋友。桌上没有谁必须让出的座位，也没人用一个人的选择解释另一个人的整段人生。",
      "character": "piao",
      "next": "tc_c10_common_route_gate"
    },
    "tc_c10_common_piao_wedding": {
      "id": "tc_c10_common_piao_wedding",
      "type": "line",
      "scene": "ts_c10_common_piao_wedding",
      "speaker": "narrator",
      "text": "婚宴那天，我休班。毛狼在门口站得挺直，直到看见我，才低声问领子是不是歪了。",
      "character": "maolang",
      "next": "tc_c10_common_piao_wedding_02",
      "expression": "outfit-wedding"
    },
    "tc_c10_common_piao_wedding_02": {
      "id": "tc_c10_common_piao_wedding_02",
      "type": "line",
      "scene": "ts_c10_common_piao_wedding",
      "speaker": "wenwen",
      "text": "“你主持那么多场，今天怕了？”",
      "character": "maolang",
      "next": "tc_c10_common_piao_wedding_03",
      "expression": "outfit-wedding"
    },
    "tc_c10_common_piao_wedding_03": {
      "id": "tc_c10_common_piao_wedding_03",
      "type": "line",
      "scene": "ts_c10_common_piao_wedding",
      "speaker": "maolang",
      "text": "“别人的话筒坏了能换。今天这个不能换人。”",
      "character": "maolang",
      "next": "tc_c10_common_piao_wedding_04",
      "expression": "outfit-wedding",
      "avatarExpression": "outfit-wedding"
    },
    "tc_c10_common_piao_wedding_04": {
      "id": "tc_c10_common_piao_wedding_04",
      "type": "line",
      "scene": "ts_c10_common_piao_wedding",
      "speaker": "narrator",
      "text": "飘走过来，替他看了一眼：“没歪。你手别一直扯。”",
      "character": "piao",
      "next": "tc_c10_common_piao_wedding_05",
      "expression": "outfit-wedding",
      "cg": "tc-cg-piao-wedding"
    },
    "tc_c10_common_piao_wedding_05": {
      "id": "tc_c10_common_piao_wedding_05",
      "type": "line",
      "scene": "ts_c10_common_piao_wedding",
      "speaker": "narrator",
      "text": "两年里，他们慢慢把约饭、走路和各自要忙的事放进同一段生活，也吵过谁总把时间估得太宽。毛狼拿不准的时候会问她，飘不愿意的时候也直说。喜帖送到我手里时，两个人还在争桌上的菜该多一道辣的还是清淡的。",
      "character": "maolang",
      "next": "tc_c10_common_piao_wedding_06",
      "expression": "outfit-wedding"
    },
    "tc_c10_common_piao_wedding_06": {
      "id": "tc_c10_common_piao_wedding_06",
      "type": "line",
      "scene": "ts_c10_common_piao_wedding",
      "speaker": "narrator",
      "text": "桌上放着飘的小册子，第二版，印得不多。她看到我翻页，说有一处还是空的，那位店主后来依旧不想补。",
      "character": "maolang",
      "next": "tc_c10_common_piao_wedding_07",
      "expression": "outfit-wedding"
    },
    "tc_c10_common_piao_wedding_07": {
      "id": "tc_c10_common_piao_wedding_07",
      "type": "line",
      "scene": "ts_c10_common_piao_wedding",
      "speaker": "narrator",
      "text": "毛狼凑过来：“空着就空着。总不能婚礼当天催人交稿。”",
      "character": "maolang",
      "next": "tc_c10_common_piao_wedding_08",
      "expression": "outfit-wedding"
    },
    "tc_c10_common_piao_wedding_08": {
      "id": "tc_c10_common_piao_wedding_08",
      "type": "line",
      "scene": "ts_c10_common_piao_wedding",
      "speaker": "narrator",
      "text": "飘笑着拍了一下他的手，让他先去招呼刚到的人。",
      "character": "piao",
      "next": "tc_c10_common_piao_wedding_09",
      "expression": "outfit-wedding"
    },
    "tc_c10_common_piao_wedding_09": {
      "id": "tc_c10_common_piao_wedding_09",
      "type": "line",
      "scene": "ts_c10_common_piao_wedding",
      "speaker": "narrator",
      "text": "我坐下来，给自己的杯子倒水。有人喊毛狼，他这回没有先练一句漂亮的开场，直接应了声来了。",
      "character": null,
      "next": "tc_c10_common_route_gate"
    },
    "tc_c10_common_route_gate": {
      "id": "tc_c10_common_route_gate",
      "type": "gate",
      "scene": "ts_c10_common_daily_life",
      "cases": [
        {
          "flag": "route",
          "value": "xiaoman",
          "next": "tc_c10_xiaoman_entry"
        },
        {
          "flag": "route",
          "value": "zhouzhi",
          "next": "tc_c10_zhouzhi_entry"
        },
        {
          "flag": "route",
          "value": "mengyao",
          "next": "tc_c10_mengyao_entry"
        },
        {
          "flag": "route",
          "value": "yelan",
          "next": "tc_c10_yelan_entry"
        },
        {
          "flag": "route",
          "value": "piao",
          "next": "tc_c10_piao_entry"
        },
        {
          "flag": "route",
          "value": "friends",
          "next": "tc_c10_friends_entry"
        },
        {
          "flag": "route",
          "value": "huangqiuqiu",
          "next": "tc_c10_huangqiuqiu_entry"
        }
      ],
      "default": null,
      "exhaustive": true
    },
    "tc_c10_common_piao_relationship_gate": {
      "id": "tc_c10_common_piao_relationship_gate",
      "type": "gate",
      "scene": "ts_c10_common_daily_life",
      "cases": [
        {
          "flag": "piaoRelationship",
          "value": "dating",
          "next": "tc_c10_common_piao_dating"
        },
        {
          "flag": "piaoRelationship",
          "value": "friends",
          "next": "tc_c10_common_piao_wedding"
        }
      ],
      "default": null,
      "exhaustive": true
    },
    "tc_c10_common_epilogue_route_gate": {
      "id": "tc_c10_common_epilogue_route_gate",
      "type": "gate",
      "scene": "ts_c10_common_daily_life",
      "cases": [
        {
          "flag": "route",
          "value": "xiaoman",
          "next": "tc_c10_common_piao_wedding"
        },
        {
          "flag": "route",
          "value": "zhouzhi",
          "next": "tc_c10_common_piao_wedding"
        },
        {
          "flag": "route",
          "value": "mengyao",
          "next": "tc_c10_common_piao_wedding"
        },
        {
          "flag": "route",
          "value": "yelan",
          "next": "tc_c10_common_piao_wedding"
        },
        {
          "flag": "route",
          "value": "piao",
          "next": "tc_c10_common_piao_relationship_gate"
        },
        {
          "flag": "route",
          "value": "friends",
          "next": "tc_c10_common_piao_wedding"
        },
        {
          "flag": "route",
          "value": "huangqiuqiu",
          "next": "tc_c10_common_piao_wedding"
        }
      ],
      "default": null,
      "exhaustive": true
    },
    "tc_c03_xiaoman_entry": {
      "id": "tc_c03_xiaoman_entry",
      "type": "line",
      "scene": "ts_c03_xiaoman_salon_visit",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "我在理发店门口站了半分钟，玻璃上的营业时间看了两遍。",
      "next": "tc_c03_xiaoman_salon_visit_002",
      "expression": "outfit-work-apron"
    },
    "tc_c03_xiaoman_salon_visit_002": {
      "id": "tc_c03_xiaoman_salon_visit_002",
      "type": "line",
      "scene": "ts_c03_xiaoman_salon_visit",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "小满正替客人扫掉领口的碎发。镜子里，她先看见了我，没有像从前那样隔着半条街喊名字，只用下巴点了点墙边的椅子。",
      "next": "tc_c03_xiaoman_salon_visit_003",
      "expression": "outfit-work-apron"
    },
    "tc_c03_xiaoman_salon_visit_003": {
      "id": "tc_c03_xiaoman_salon_visit_003",
      "type": "line",
      "scene": "ts_c03_xiaoman_salon_visit",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "我坐下，把本来想发的“在吗”删掉。",
      "next": "tc_c03_xiaoman_salon_visit_004",
      "expression": "outfit-work-apron"
    },
    "tc_c03_xiaoman_salon_visit_004": {
      "id": "tc_c03_xiaoman_salon_visit_004",
      "type": "line",
      "scene": "ts_c03_xiaoman_salon_visit",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "那位客人走后，她摘下一只手套，伸手往我头顶比了一下。",
      "next": "tc_c03_xiaoman_salon_visit_005",
      "expression": "outfit-work-apron"
    },
    "tc_c03_xiaoman_salon_visit_005": {
      "id": "tc_c03_xiaoman_salon_visit_005",
      "type": "line",
      "scene": "ts_c03_xiaoman_salon_visit",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "“没长啊。”",
      "next": "tc_c03_xiaoman_salon_visit_006",
      "expression": "outfit-work-apron",
      "avatarExpression": "outfit-work-apron"
    },
    "tc_c03_xiaoman_salon_visit_006": {
      "id": "tc_c03_xiaoman_salon_visit_006",
      "type": "line",
      "scene": "ts_c03_xiaoman_salon_visit",
      "speaker": "wenwen",
      "character": "xiaoman",
      "text": "“什么没长？”",
      "next": "tc_c03_xiaoman_salon_visit_007",
      "expression": "outfit-work-apron"
    },
    "tc_c03_xiaoman_salon_visit_007": {
      "id": "tc_c03_xiaoman_salon_visit_007",
      "type": "line",
      "scene": "ts_c03_xiaoman_salon_visit",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "“头发。第3天见你就这么长，今天还是这样。怎么，拿我这儿当草坪养护？”",
      "next": "tc_c03_xiaoman_salon_visit_008",
      "expression": "outfit-work-apron",
      "avatarExpression": "outfit-work-apron"
    },
    "tc_c03_xiaoman_salon_visit_008": {
      "id": "tc_c03_xiaoman_salon_visit_008",
      "type": "line",
      "scene": "ts_c03_xiaoman_salon_visit",
      "speaker": "wenwen",
      "character": "xiaoman",
      "text": "“我就路过。”",
      "next": "tc_c03_xiaoman_salon_visit_009",
      "expression": "outfit-work-apron"
    },
    "tc_c03_xiaoman_salon_visit_009": {
      "id": "tc_c03_xiaoman_salon_visit_009",
      "type": "line",
      "scene": "ts_c03_xiaoman_salon_visit",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "她看了眼玻璃外面，又看我手里装着两个肉松包的纸袋。",
      "next": "tc_c03_xiaoman_salon_visit_010",
      "expression": "outfit-work-apron"
    },
    "tc_c03_xiaoman_salon_visit_010": {
      "id": "tc_c03_xiaoman_salon_visit_010",
      "type": "line",
      "scene": "ts_c03_xiaoman_salon_visit",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "“路过还知道我没吃下午饭。你这条路挺聪明。”",
      "next": "tc_c03_xiaoman_salon_visit_011",
      "expression": "outfit-work-apron",
      "avatarExpression": "outfit-work-apron"
    },
    "tc_c03_xiaoman_salon_visit_011": {
      "id": "tc_c03_xiaoman_salon_visit_011",
      "type": "line",
      "scene": "ts_c03_xiaoman_salon_visit",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "我把袋子递过去，她没立刻接，先去洗了手。回来后，她把一个包推给我，掰开自己的那个，里面的沙拉酱挤到指尖。",
      "next": "tc_c03_xiaoman_salon_visit_012",
      "expression": "outfit-work-apron"
    },
    "tc_c03_xiaoman_salon_visit_012": {
      "id": "tc_c03_xiaoman_salon_visit_012",
      "type": "line",
      "scene": "ts_c03_xiaoman_salon_visit",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "“晚上十点上班？”",
      "next": "tc_c03_xiaoman_salon_visit_013",
      "expression": "outfit-work-apron",
      "avatarExpression": "outfit-work-apron"
    },
    "tc_c03_xiaoman_salon_visit_013": {
      "id": "tc_c03_xiaoman_salon_visit_013",
      "type": "line",
      "scene": "ts_c03_xiaoman_salon_visit",
      "speaker": "wenwen",
      "character": "xiaoman",
      "text": "“嗯。刚睡醒。”",
      "next": "tc_c03_xiaoman_salon_visit_014",
      "expression": "outfit-work-apron"
    },
    "tc_c03_xiaoman_salon_visit_014": {
      "id": "tc_c03_xiaoman_salon_visit_014",
      "type": "line",
      "scene": "ts_c03_xiaoman_salon_visit",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "“那你现在算吃早餐，还是下午茶？”",
      "next": "tc_c03_xiaoman_salon_visit_015",
      "expression": "outfit-work-apron",
      "avatarExpression": "outfit-work-apron"
    },
    "tc_c03_xiaoman_salon_visit_015": {
      "id": "tc_c03_xiaoman_salon_visit_015",
      "type": "line",
      "scene": "ts_c03_xiaoman_salon_visit",
      "speaker": "wenwen",
      "character": "xiaoman",
      "text": "“早餐按人走，不按太阳走。”",
      "next": "tc_c03_xiaoman_salon_visit_016",
      "expression": "outfit-work-apron"
    },
    "tc_c03_xiaoman_salon_visit_016": {
      "id": "tc_c03_xiaoman_salon_visit_016",
      "type": "line",
      "scene": "ts_c03_xiaoman_salon_visit",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "她咬着面包笑了一下。我原以为她会把那句话接成“那你倒挺自由”，她却问：“睡够没有？”",
      "next": "tc_c03_xiaoman_salon_visit_017",
      "expression": "outfit-work-apron"
    },
    "tc_c03_xiaoman_salon_visit_017": {
      "id": "tc_c03_xiaoman_salon_visit_017",
      "type": "line",
      "scene": "ts_c03_xiaoman_salon_visit",
      "speaker": "wenwen",
      "character": "xiaoman",
      "text": "“够。中间醒过一次，又睡了。”",
      "next": "tc_c03_xiaoman_salon_visit_018",
      "expression": "outfit-work-apron"
    },
    "tc_c03_xiaoman_salon_visit_018": {
      "id": "tc_c03_xiaoman_salon_visit_018",
      "type": "line",
      "scene": "ts_c03_xiaoman_salon_visit",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "“好，我今天不听你讲‘睡不睡都一样’。”",
      "next": "tc_c03_xiaoman_salon_visit_019",
      "expression": "outfit-work-apron",
      "avatarExpression": "outfit-work-apron"
    },
    "tc_c03_xiaoman_salon_visit_019": {
      "id": "tc_c03_xiaoman_salon_visit_019",
      "type": "line",
      "scene": "ts_c03_xiaoman_salon_visit",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "店里吹风机响起来，最后几个字被盖住。她往我这边挪了半步，我也凑过去，结果两个人的额头险些撞上。",
      "next": "tc_c03_xiaoman_salon_visit_020",
      "expression": "outfit-work-apron"
    },
    "tc_c03_xiaoman_salon_visit_020": {
      "id": "tc_c03_xiaoman_salon_visit_020",
      "type": "line",
      "scene": "ts_c03_xiaoman_salon_visit",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "小满先退开，指着椅子：“坐好，跟偷听答案似的。”",
      "next": "tc_c03_xiaoman_salon_visit_021",
      "expression": "outfit-work-apron"
    },
    "tc_c03_xiaoman_salon_visit_021": {
      "id": "tc_c03_xiaoman_salon_visit_021",
      "type": "line",
      "scene": "ts_c03_xiaoman_salon_visit",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "等她吃完，我终于说：“我不是来剪头发的。”",
      "next": "tc_c03_xiaoman_salon_visit_022",
      "expression": "outfit-work-apron"
    },
    "tc_c03_xiaoman_salon_visit_022": {
      "id": "tc_c03_xiaoman_salon_visit_022",
      "type": "line",
      "scene": "ts_c03_xiaoman_salon_visit",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "“看出来了。也不像来办卡。”",
      "next": "tc_c03_xiaoman_salon_visit_023",
      "expression": "outfit-work-apron",
      "avatarExpression": "outfit-work-apron"
    },
    "tc_c03_xiaoman_salon_visit_023": {
      "id": "tc_c03_xiaoman_salon_visit_023",
      "type": "line",
      "scene": "ts_c03_xiaoman_salon_visit",
      "speaker": "wenwen",
      "character": "xiaoman",
      "text": "“想问你哪天有空，出去转转。”",
      "next": "tc_c03_xiaoman_salon_visit_024",
      "expression": "outfit-work-apron"
    },
    "tc_c03_xiaoman_salon_visit_024": {
      "id": "tc_c03_xiaoman_salon_visit_024",
      "type": "line",
      "scene": "ts_c03_xiaoman_salon_visit",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "她拿纸巾擦手的动作慢了一点。墙上的钟走过一格，她把纸巾团起来，没扔准，纸团碰到垃圾桶边，落在鞋旁。",
      "next": "tc_c03_xiaoman_salon_visit_025",
      "expression": "outfit-work-apron"
    },
    "tc_c03_xiaoman_salon_visit_025": {
      "id": "tc_c03_xiaoman_salon_visit_025",
      "type": "line",
      "scene": "ts_c03_xiaoman_salon_visit",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "“去哪儿？”",
      "next": "tc_c03_xiaoman_salon_visit_026",
      "expression": "outfit-work-apron",
      "avatarExpression": "outfit-work-apron"
    },
    "tc_c03_xiaoman_salon_visit_026": {
      "id": "tc_c03_xiaoman_salon_visit_026",
      "type": "line",
      "scene": "ts_c03_xiaoman_salon_visit",
      "speaker": "wenwen",
      "character": "xiaoman",
      "text": "“还没想。”",
      "next": "tc_c03_xiaoman_salon_visit_027",
      "expression": "outfit-work-apron"
    },
    "tc_c03_xiaoman_salon_visit_027": {
      "id": "tc_c03_xiaoman_salon_visit_027",
      "type": "line",
      "scene": "ts_c03_xiaoman_salon_visit",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "“那你想了什么？”",
      "next": "tc_c03_xiaoman_salon_visit_028",
      "expression": "outfit-work-apron",
      "avatarExpression": "outfit-work-apron"
    },
    "tc_c03_xiaoman_salon_visit_028": {
      "id": "tc_c03_xiaoman_salon_visit_028",
      "type": "line",
      "scene": "ts_c03_xiaoman_salon_visit",
      "speaker": "wenwen",
      "character": "xiaoman",
      "text": "“先问你愿不愿意。”",
      "next": "tc_c03_xiaoman_salon_visit_029",
      "expression": "outfit-work-apron"
    },
    "tc_c03_xiaoman_salon_visit_029": {
      "id": "tc_c03_xiaoman_salon_visit_029",
      "type": "line",
      "scene": "ts_c03_xiaoman_salon_visit",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "她弯腰捡纸团，起来时把脸侧向门口。“愿意。不过地方你也得想，不能我下了班，你说走哪儿算哪儿。”",
      "next": "tc_c03_xiaoman_salon_visit_030",
      "expression": "outfit-work-apron"
    },
    "tc_c03_xiaoman_salon_visit_030": {
      "id": "tc_c03_xiaoman_salon_visit_030",
      "type": "line",
      "scene": "ts_c03_xiaoman_salon_visit",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "我拿出手机，她却按住我的手背。",
      "next": "tc_c03_xiaoman_salon_visit_031",
      "expression": "outfit-work-apron"
    },
    "tc_c03_xiaoman_salon_visit_031": {
      "id": "tc_c03_xiaoman_salon_visit_031",
      "type": "line",
      "scene": "ts_c03_xiaoman_salon_visit",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "“不是现在搜。你回去慢慢想，我也想。还有——”",
      "next": "tc_c03_xiaoman_salon_visit_032",
      "expression": "outfit-work-apron",
      "avatarExpression": "outfit-work-apron"
    },
    "tc_c03_xiaoman_salon_visit_032": {
      "id": "tc_c03_xiaoman_salon_visit_032",
      "type": "line",
      "scene": "ts_c03_xiaoman_salon_visit",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "她指了指自己的工作围裙。",
      "next": "tc_c03_xiaoman_salon_visit_033",
      "expression": "outfit-work-apron"
    },
    "tc_c03_xiaoman_salon_visit_033": {
      "id": "tc_c03_xiaoman_salon_visit_033",
      "type": "line",
      "scene": "ts_c03_xiaoman_salon_visit",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "“出去的时候，不穿这个。”",
      "next": "tc_c03_xiaoman_present_day_001",
      "expression": "outfit-work-apron",
      "avatarExpression": "outfit-work-apron"
    },
    "tc_c03_xiaoman_present_day_001": {
      "id": "tc_c03_xiaoman_present_day_001",
      "type": "line",
      "scene": "ts_c03_xiaoman_present_day",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "这天下午，我补过觉，和小满约在店后面的公交站。她晚出来七分钟，站定后先呼了一口气，再把手里的酸奶塞给我。",
      "next": "tc_c03_xiaoman_present_day_002"
    },
    "tc_c03_xiaoman_present_day_002": {
      "id": "tc_c03_xiaoman_present_day_002",
      "type": "line",
      "scene": "ts_c03_xiaoman_present_day",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "“买二送一，我喝不了三瓶。”",
      "next": "tc_c03_xiaoman_present_day_003"
    },
    "tc_c03_xiaoman_present_day_003": {
      "id": "tc_c03_xiaoman_present_day_003",
      "type": "line",
      "scene": "ts_c03_xiaoman_present_day",
      "speaker": "wenwen",
      "character": "xiaoman",
      "text": "“还有一瓶呢？”",
      "next": "tc_c03_xiaoman_present_day_004"
    },
    "tc_c03_xiaoman_present_day_004": {
      "id": "tc_c03_xiaoman_present_day_004",
      "type": "line",
      "scene": "ts_c03_xiaoman_present_day",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "“同事喝了。”",
      "next": "tc_c03_xiaoman_present_day_005"
    },
    "tc_c03_xiaoman_present_day_005": {
      "id": "tc_c03_xiaoman_present_day_005",
      "type": "line",
      "scene": "ts_c03_xiaoman_present_day_street",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "她答得太快，像我问的是证件号码。我没拆穿，跟她沿着街走。太阳从云层底下漏出一小块，照着路边水洼，小满抬脚跨过去，我顺口说：“还是这套，小时候你就——”",
      "next": "tc_c03_xiaoman_present_day_006"
    },
    "tc_c03_xiaoman_present_day_006": {
      "id": "tc_c03_xiaoman_present_day_006",
      "type": "line",
      "scene": "ts_c03_xiaoman_present_day_street",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "“就什么？”",
      "next": "tc_c03_xiaoman_present_day_007"
    },
    "tc_c03_xiaoman_present_day_007": {
      "id": "tc_c03_xiaoman_present_day_007",
      "type": "line",
      "scene": "ts_c03_xiaoman_present_day_street",
      "speaker": "wenwen",
      "character": "xiaoman",
      "text": "“喜欢跳水坑。”",
      "next": "tc_c03_xiaoman_present_day_008"
    },
    "tc_c03_xiaoman_present_day_008": {
      "id": "tc_c03_xiaoman_present_day_008",
      "type": "line",
      "scene": "ts_c03_xiaoman_present_day_street",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "“我这是不想踩湿鞋。”",
      "next": "tc_c03_xiaoman_present_day_009"
    },
    "tc_c03_xiaoman_present_day_009": {
      "id": "tc_c03_xiaoman_present_day_009",
      "type": "line",
      "scene": "ts_c03_xiaoman_present_day_street",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "她说完自己也笑了，但下一次我刚开口说“你以前”，她便停在一家关门的服装店前，借着橱窗看自己的头发。",
      "next": "tc_c03_xiaoman_present_day_010"
    },
    "tc_c03_xiaoman_present_day_010": {
      "id": "tc_c03_xiaoman_present_day_010",
      "type": "line",
      "scene": "ts_c03_xiaoman_present_day_street",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "“文文，你是不是回来以后，觉得谁都还停在原地等你？”",
      "next": "tc_c03_xiaoman_present_day_011"
    },
    "tc_c03_xiaoman_present_day_011": {
      "id": "tc_c03_xiaoman_present_day_011",
      "type": "line",
      "scene": "ts_c03_xiaoman_present_day_street",
      "speaker": "wenwen",
      "character": "xiaoman",
      "text": "“没有吧。”",
      "next": "tc_c03_xiaoman_present_day_012"
    },
    "tc_c03_xiaoman_present_day_012": {
      "id": "tc_c03_xiaoman_present_day_012",
      "type": "line",
      "scene": "ts_c03_xiaoman_present_day_street",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "“那你说一件。我现在喜欢什么，不许用以前的。”",
      "next": "tc_c03_xiaoman_present_day_013"
    },
    "tc_c03_xiaoman_present_day_013": {
      "id": "tc_c03_xiaoman_present_day_013",
      "type": "line",
      "scene": "ts_c03_xiaoman_present_day_street",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "我看着她。浅金色的短发比记忆里清爽，夹克袖口卷起来一点，她今天没戴工作时那个弹力发圈。我差点说剪头发，临到嘴边又觉得那是职业，不算答案。",
      "next": "tc_c03_xiaoman_present_day_014"
    },
    "tc_c03_xiaoman_present_day_014": {
      "id": "tc_c03_xiaoman_present_day_014",
      "type": "line",
      "scene": "ts_c03_xiaoman_present_day_street",
      "speaker": "wenwen",
      "character": "xiaoman",
      "text": "“酸奶？”",
      "next": "tc_c03_xiaoman_present_day_015"
    },
    "tc_c03_xiaoman_present_day_015": {
      "id": "tc_c03_xiaoman_present_day_015",
      "type": "line",
      "scene": "ts_c03_xiaoman_present_day_street",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "“这是你唯一能看见的东西。”",
      "next": "tc_c03_xiaoman_present_day_016"
    },
    "tc_c03_xiaoman_present_day_016": {
      "id": "tc_c03_xiaoman_present_day_016",
      "type": "line",
      "scene": "ts_c03_xiaoman_present_day_street",
      "speaker": "wenwen",
      "character": "xiaoman",
      "text": "“肉松包。”",
      "next": "tc_c03_xiaoman_present_day_017"
    },
    "tc_c03_xiaoman_present_day_017": {
      "id": "tc_c03_xiaoman_present_day_017",
      "type": "line",
      "scene": "ts_c03_xiaoman_present_day_street",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "“那是你买的。”",
      "next": "tc_c03_xiaoman_present_day_018"
    },
    "tc_c03_xiaoman_present_day_018": {
      "id": "tc_c03_xiaoman_present_day_018",
      "type": "line",
      "scene": "ts_c03_xiaoman_present_day_street",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "我叹口气：“答不上来。”",
      "next": "tc_c03_xiaoman_present_day_019"
    },
    "tc_c03_xiaoman_present_day_019": {
      "id": "tc_c03_xiaoman_present_day_019",
      "type": "line",
      "scene": "ts_c03_xiaoman_present_day_street",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "她没乘胜追击，只把吸管从嘴里拿出来，说：“我最近喜欢看人打羽毛球，但自己接不到。喜欢旧杂志里奇怪的广告。还有，逛街看见喜欢的衣服，我会先进去试，再看价钱。”",
      "next": "tc_c03_xiaoman_present_day_020"
    },
    "tc_c03_xiaoman_present_day_020": {
      "id": "tc_c03_xiaoman_present_day_020",
      "type": "line",
      "scene": "ts_c03_xiaoman_present_day_street",
      "speaker": "wenwen",
      "character": "xiaoman",
      "text": "“最后买吗？”",
      "next": "tc_c03_xiaoman_present_day_021"
    },
    "tc_c03_xiaoman_present_day_021": {
      "id": "tc_c03_xiaoman_present_day_021",
      "type": "line",
      "scene": "ts_c03_xiaoman_present_day_street",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "“有钱再买啊。不然呢，借钱维护我的时尚态度？”",
      "next": "tc_c03_xiaoman_present_day_022"
    },
    "tc_c03_xiaoman_present_day_022": {
      "id": "tc_c03_xiaoman_present_day_022",
      "type": "line",
      "scene": "ts_c03_xiaoman_present_day_street",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "我笑得差点把酸奶呛出来。她抬手拍了我一下，拍在肩上，没用力。",
      "next": "tc_c03_xiaoman_present_day_023"
    },
    "tc_c03_xiaoman_present_day_023": {
      "id": "tc_c03_xiaoman_present_day_023",
      "type": "line",
      "scene": "ts_c03_xiaoman_present_day_street",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "“轮到你。”",
      "next": "tc_c03_xiaoman_present_day_024"
    },
    "tc_c03_xiaoman_present_day_024": {
      "id": "tc_c03_xiaoman_present_day_024",
      "type": "line",
      "scene": "ts_c03_xiaoman_present_day_street",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "我告诉她，我现在洗完衣服会先看天气，玩游戏更喜欢能中途停下来的；早班早餐摊的小菜不喜欢太咸，但总不好意思让老板少放。说到后来，我发现这些话既不体面，也不丢人，只是从来没人专门问过。",
      "next": "tc_c03_xiaoman_present_day_025"
    },
    "tc_c03_xiaoman_present_day_025": {
      "id": "tc_c03_xiaoman_present_day_025",
      "type": "line",
      "scene": "ts_c03_xiaoman_present_day_street",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "她听完，拿手机在备忘录里敲了几个字。",
      "next": "tc_c03_xiaoman_present_day_026"
    },
    "tc_c03_xiaoman_present_day_026": {
      "id": "tc_c03_xiaoman_present_day_026",
      "type": "line",
      "scene": "ts_c03_xiaoman_present_day_street",
      "speaker": "wenwen",
      "character": "xiaoman",
      "text": "“记我缺点？”",
      "next": "tc_c03_xiaoman_present_day_027"
    },
    "tc_c03_xiaoman_present_day_027": {
      "id": "tc_c03_xiaoman_present_day_027",
      "type": "line",
      "scene": "ts_c03_xiaoman_present_day_street",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "“记下次别给你拿咸菜包。”",
      "next": "tc_c03_xiaoman_present_day_028"
    },
    "tc_c03_xiaoman_present_day_028": {
      "id": "tc_c03_xiaoman_present_day_028",
      "type": "line",
      "scene": "ts_c03_xiaoman_present_day_busstop",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "拐角到了，她该去坐车，我该回住处吃晚饭。小满把空瓶投进垃圾桶，转身时问：“过六天我们店排休，下午你行不行？”",
      "next": "tc_c03_xiaoman_present_day_029"
    },
    "tc_c03_xiaoman_present_day_029": {
      "id": "tc_c03_xiaoman_present_day_029",
      "type": "line",
      "scene": "ts_c03_xiaoman_present_day_busstop",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "我看了排班，告诉她下夜班后能先睡一觉，四点有空。",
      "next": "tc_c03_xiaoman_present_day_030"
    },
    "tc_c03_xiaoman_present_day_030": {
      "id": "tc_c03_xiaoman_present_day_030",
      "type": "line",
      "scene": "ts_c03_xiaoman_present_day_busstop",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "“那就四点。”她说，“这次是出去玩。头发长成杂草也下次再说。”",
      "next": "tc_c03_xiaoman_old_sketch_001"
    },
    "tc_c03_xiaoman_old_sketch_001": {
      "id": "tc_c03_xiaoman_old_sketch_001",
      "type": "line",
      "scene": "ts_c03_xiaoman_old_sketch",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "我带着两份备选去找小满：一处有投篮机的游戏厅，或者旧街的二手书摊。她当时正在店外等同事锁柜子，听见两处地方，先评价我总算没有选理发工具市场。",
      "next": "tc_c03_xiaoman_old_sketch_002"
    },
    "tc_c03_xiaoman_old_sketch_002": {
      "id": "tc_c03_xiaoman_old_sketch_002",
      "type": "line",
      "scene": "ts_c03_xiaoman_old_sketch",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "风把她包里露出的一页纸吹起来。我替她按住，看见上面画着一个歪脑袋，头顶的发旋像半个煎蛋，旁边有几个早已褪色的小勾。",
      "next": "tc_c03_xiaoman_old_sketch_003"
    },
    "tc_c03_xiaoman_old_sketch_003": {
      "id": "tc_c03_xiaoman_old_sketch_003",
      "type": "line",
      "scene": "ts_c03_xiaoman_old_sketch",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "“还留着？”我问。",
      "next": "tc_c03_xiaoman_old_sketch_004"
    },
    "tc_c03_xiaoman_old_sketch_004": {
      "id": "tc_c03_xiaoman_old_sketch_004",
      "type": "line",
      "scene": "ts_c03_xiaoman_old_sketch",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "她一把把纸抽走，看看我，又看看那张纸。",
      "next": "tc_c03_xiaoman_old_sketch_005"
    },
    "tc_c03_xiaoman_old_sketch_005": {
      "id": "tc_c03_xiaoman_old_sketch_005",
      "type": "line",
      "scene": "ts_c03_xiaoman_old_sketch",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "“早期作品，禁止传播。”",
      "next": "tc_c03_xiaoman_old_sketch_006"
    },
    "tc_c03_xiaoman_old_sketch_006": {
      "id": "tc_c03_xiaoman_old_sketch_006",
      "type": "line",
      "scene": "ts_c03_xiaoman_old_sketch",
      "speaker": "wenwen",
      "character": "xiaoman",
      "text": "“我没想拍。”",
      "next": "tc_c03_xiaoman_old_sketch_007"
    },
    "tc_c03_xiaoman_old_sketch_007": {
      "id": "tc_c03_xiaoman_old_sketch_007",
      "type": "line",
      "scene": "ts_c03_xiaoman_old_sketch",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "“你刚才那个笑很可疑。”",
      "next": "tc_c03_xiaoman_old_sketch_008"
    },
    "tc_c03_xiaoman_old_sketch_008": {
      "id": "tc_c03_xiaoman_old_sketch_008",
      "type": "line",
      "scene": "ts_c03_xiaoman_old_sketch",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "她把纸夹回本子，过了一会儿，又自己翻开另一页。新画的线条清楚些，边上仍有红笔改动。",
      "next": "tc_c03_xiaoman_old_sketch_009"
    },
    "tc_c03_xiaoman_old_sketch_009": {
      "id": "tc_c03_xiaoman_old_sketch_009",
      "type": "line",
      "scene": "ts_c03_xiaoman_old_sketch",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "“这个也没多好。今天被说分区太急，我听得烦，回去看了，又确实急。”",
      "next": "tc_c03_xiaoman_old_sketch_010"
    },
    "tc_c03_xiaoman_old_sketch_010": {
      "id": "tc_c03_xiaoman_old_sketch_010",
      "type": "line",
      "scene": "ts_c03_xiaoman_old_sketch",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "我刚想说已经不错，她抬眼：“你看得懂吗？”",
      "next": "tc_c03_xiaoman_old_sketch_011"
    },
    "tc_c03_xiaoman_old_sketch_011": {
      "id": "tc_c03_xiaoman_old_sketch_011",
      "type": "line",
      "scene": "ts_c03_xiaoman_old_sketch",
      "speaker": "wenwen",
      "character": "xiaoman",
      "text": "“看不懂。”",
      "next": "tc_c03_xiaoman_old_sketch_012"
    },
    "tc_c03_xiaoman_old_sketch_012": {
      "id": "tc_c03_xiaoman_old_sketch_012",
      "type": "line",
      "scene": "ts_c03_xiaoman_old_sketch",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "“那别夸技术。”",
      "next": "tc_c03_xiaoman_old_sketch_013"
    },
    "tc_c03_xiaoman_old_sketch_013": {
      "id": "tc_c03_xiaoman_old_sketch_013",
      "type": "line",
      "scene": "ts_c03_xiaoman_old_sketch",
      "speaker": "wenwen",
      "character": "xiaoman",
      "text": "“本子挺厚的。”",
      "next": "tc_c03_xiaoman_old_sketch_014"
    },
    "tc_c03_xiaoman_old_sketch_014": {
      "id": "tc_c03_xiaoman_old_sketch_014",
      "type": "line",
      "scene": "ts_c03_xiaoman_old_sketch",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "她愣了一下，笑起来：“这个倒是真的。我在上面花的钱比在自己头上还多。”",
      "next": "tc_c03_xiaoman_old_sketch_015"
    },
    "tc_c03_xiaoman_old_sketch_015": {
      "id": "tc_c03_xiaoman_old_sketch_015",
      "type": "line",
      "scene": "ts_c03_xiaoman_old_sketch",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "同事从店里出来，叫她一起走。她摆摆手，说已经约了人。同事看我一眼，只道了声再见，没有起哄。我却忽然站得直了一点。",
      "next": "tc_c03_xiaoman_old_sketch_016"
    },
    "tc_c03_xiaoman_old_sketch_016": {
      "id": "tc_c03_xiaoman_old_sketch_016",
      "type": "line",
      "scene": "ts_c03_xiaoman_old_sketch_convenience",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "我们走到便利店，她挑了一支最便宜的冰棒，问我是不是还要上夜班。我说九点多出门，现在不急。她便把找回来的硬币收好，拉开旁边的椅子。",
      "next": "tc_c03_xiaoman_old_sketch_017"
    },
    "tc_c03_xiaoman_old_sketch_017": {
      "id": "tc_c03_xiaoman_old_sketch_017",
      "type": "line",
      "scene": "ts_c03_xiaoman_old_sketch_convenience",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "“坐十分钟。”",
      "next": "tc_c03_xiaoman_old_sketch_018"
    },
    "tc_c03_xiaoman_old_sketch_018": {
      "id": "tc_c03_xiaoman_old_sketch_018",
      "type": "line",
      "scene": "ts_c03_xiaoman_old_sketch_convenience",
      "speaker": "wenwen",
      "character": "xiaoman",
      "text": "“做什么？”",
      "next": "tc_c03_xiaoman_old_sketch_019"
    },
    "tc_c03_xiaoman_old_sketch_019": {
      "id": "tc_c03_xiaoman_old_sketch_019",
      "type": "line",
      "scene": "ts_c03_xiaoman_old_sketch_convenience",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "“吃冰棒。”",
      "next": "tc_c03_xiaoman_old_sketch_020"
    },
    "tc_c03_xiaoman_old_sketch_020": {
      "id": "tc_c03_xiaoman_old_sketch_020",
      "type": "line",
      "scene": "ts_c03_xiaoman_old_sketch_convenience",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "她见我还站着，抬头补了一句：“也陪我坐会儿。你不剪头发，我也能跟你待着。”",
      "next": "tc_c03_xiaoman_old_sketch_021"
    },
    "tc_c03_xiaoman_old_sketch_021": {
      "id": "tc_c03_xiaoman_old_sketch_021",
      "type": "line",
      "scene": "ts_c03_xiaoman_old_sketch_convenience",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "我坐下时，椅脚划过地面，有点刺耳。她把冰棒包装卷成一小条，一边慢慢吃，一边问我第24天穿什么。",
      "next": "tc_c03_xiaoman_old_sketch_022"
    },
    "tc_c03_xiaoman_old_sketch_022": {
      "id": "tc_c03_xiaoman_old_sketch_022",
      "type": "line",
      "scene": "ts_c03_xiaoman_old_sketch_convenience",
      "speaker": "wenwen",
      "character": "xiaoman",
      "text": "“有必要吗？”",
      "next": "tc_c03_xiaoman_old_sketch_023"
    },
    "tc_c03_xiaoman_old_sketch_023": {
      "id": "tc_c03_xiaoman_old_sketch_023",
      "type": "line",
      "scene": "ts_c03_xiaoman_old_sketch_convenience",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "“有。别又穿得跟来帮我搬镜子一样。”",
      "next": "tc_c03_xiaoman_old_sketch_024"
    },
    "tc_c03_xiaoman_old_sketch_024": {
      "id": "tc_c03_xiaoman_old_sketch_024",
      "type": "line",
      "scene": "ts_c03_xiaoman_old_sketch_convenience",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "我低头看自己的夹克，她用鞋尖碰了一下我的鞋。",
      "next": "tc_c03_xiaoman_old_sketch_025"
    },
    "tc_c03_xiaoman_old_sketch_025": {
      "id": "tc_c03_xiaoman_old_sketch_025",
      "type": "line",
      "scene": "ts_c03_xiaoman_old_sketch_convenience",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "“就这件也行。洗干净。”",
      "next": "tc_c03_common_exit"
    },
    "tc_c04_xiaoman_entry": {
      "id": "tc_c04_xiaoman_entry",
      "type": "line",
      "scene": "ts_c04_xiaoman_outing",
      "speaker": "narrator",
      "character": null,
      "text": "睡醒时天还亮着，我把晾干的夹克从衣架上取下来，闻了闻，只有洗衣液味。去见小满的路上，我三次想发“我到了”，三次看见自己还离约定地点很远，又把手机放回去。",
      "next": "tc_c04_xiaoman_outing_002"
    },
    "tc_c04_xiaoman_outing_002": {
      "id": "tc_c04_xiaoman_outing_002",
      "type": "line",
      "scene": "ts_c04_xiaoman_outing_crossroad",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "她已经站在路口，手里没有练习本，换了件轻便的外套。",
      "next": "tc_c04_xiaoman_outing_003"
    },
    "tc_c04_xiaoman_outing_003": {
      "id": "tc_c04_xiaoman_outing_003",
      "type": "line",
      "scene": "ts_c04_xiaoman_outing_crossroad",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "“早了八分钟。”她说。",
      "next": "tc_c04_xiaoman_outing_004"
    },
    "tc_c04_xiaoman_outing_004": {
      "id": "tc_c04_xiaoman_outing_004",
      "type": "line",
      "scene": "ts_c04_xiaoman_outing_crossroad",
      "speaker": "wenwen",
      "character": "xiaoman",
      "text": "“你早了多少？”",
      "next": "tc_c04_xiaoman_outing_005"
    },
    "tc_c04_xiaoman_outing_005": {
      "id": "tc_c04_xiaoman_outing_005",
      "type": "line",
      "scene": "ts_c04_xiaoman_outing_crossroad",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "“这个不算。我住得近。”",
      "next": "tc_c04_xiaoman_outing_006"
    },
    "tc_c04_xiaoman_outing_006": {
      "id": "tc_c04_xiaoman_outing_006",
      "type": "line",
      "scene": "ts_c04_xiaoman_outing_crossroad",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "我们站在两条街的岔口，一边有投篮机的音乐，另一边通往旧书摊。小满看了看我，摊开手。",
      "next": "tc_c04_xiaoman_outing_007"
    },
    "tc_c04_xiaoman_outing_007": {
      "id": "tc_c04_xiaoman_outing_007",
      "type": "line",
      "scene": "ts_c04_xiaoman_outing_crossroad",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "“选择交给你。选完不能问我是不是不高兴。”",
      "next": "tc_c04_xiaoman_outing_choice"
    },
    "tc_c04_xiaoman_basketball_001": {
      "id": "tc_c04_xiaoman_basketball_001",
      "type": "line",
      "scene": "ts_c04_xiaoman_basketball",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "游戏厅里比外面暖一些。我们先在投篮机前看别人投了半局，小满把外套拉链往下拉了点，活动手腕，气势像要替毕节出战。",
      "next": "tc_c04_xiaoman_basketball_002"
    },
    "tc_c04_xiaoman_basketball_002": {
      "id": "tc_c04_xiaoman_basketball_002",
      "type": "line",
      "scene": "ts_c04_xiaoman_basketball",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "“先讲好，不许让。”",
      "next": "tc_c04_xiaoman_basketball_003"
    },
    "tc_c04_xiaoman_basketball_003": {
      "id": "tc_c04_xiaoman_basketball_003",
      "type": "line",
      "scene": "ts_c04_xiaoman_basketball",
      "speaker": "wenwen",
      "character": "xiaoman",
      "text": "“我怕你想多了。”",
      "next": "tc_c04_xiaoman_basketball_004"
    },
    "tc_c04_xiaoman_basketball_004": {
      "id": "tc_c04_xiaoman_basketball_004",
      "type": "line",
      "scene": "ts_c04_xiaoman_basketball",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "第一球磕在篮筐上弹回来，我下意识去挡，她趁机抓起第二个球投进去。",
      "next": "tc_c04_xiaoman_basketball_005"
    },
    "tc_c04_xiaoman_basketball_005": {
      "id": "tc_c04_xiaoman_basketball_005",
      "type": "line",
      "scene": "ts_c04_xiaoman_basketball",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "“还没说开始。”我抗议。",
      "next": "tc_c04_xiaoman_basketball_006"
    },
    "tc_c04_xiaoman_basketball_006": {
      "id": "tc_c04_xiaoman_basketball_006",
      "type": "line",
      "scene": "ts_c04_xiaoman_basketball",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "“机器说了。”",
      "next": "tc_c04_xiaoman_basketball_007"
    },
    "tc_c04_xiaoman_basketball_007": {
      "id": "tc_c04_xiaoman_basketball_007",
      "type": "line",
      "scene": "ts_c04_xiaoman_basketball",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "她后半段越投越急，几个球挤在一起。我反而靠笨办法一球一球捡，最后多她四分。屏幕停下来，小满盯了两秒，转头说再来。",
      "next": "tc_c04_xiaoman_basketball_008"
    },
    "tc_c04_xiaoman_basketball_008": {
      "id": "tc_c04_xiaoman_basketball_008",
      "type": "line",
      "scene": "ts_c04_xiaoman_basketball",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "“喝水。”我提醒。",
      "next": "tc_c04_xiaoman_basketball_009"
    },
    "tc_c04_xiaoman_basketball_009": {
      "id": "tc_c04_xiaoman_basketball_009",
      "type": "line",
      "scene": "ts_c04_xiaoman_basketball",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "“再来完喝。”",
      "next": "tc_c04_xiaoman_basketball_010"
    },
    "tc_c04_xiaoman_basketball_010": {
      "id": "tc_c04_xiaoman_basketball_010",
      "type": "line",
      "scene": "ts_c04_xiaoman_basketball",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "第二局我输得很彻底。她把手伸到我面前，要跟我击掌，我拍过去，她又忽然收回一点，害我拍了个空。",
      "next": "tc_c04_xiaoman_basketball_011"
    },
    "tc_c04_xiaoman_basketball_011": {
      "id": "tc_c04_xiaoman_basketball_011",
      "type": "line",
      "scene": "ts_c04_xiaoman_basketball",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "“学费。”",
      "next": "tc_c04_xiaoman_basketball_012"
    },
    "tc_c04_xiaoman_basketball_012": {
      "id": "tc_c04_xiaoman_basketball_012",
      "type": "line",
      "scene": "ts_c04_xiaoman_basketball",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "我追着轻拍她的手背，她笑着往旁边躲，鞋底在地板上滑了一下，赶紧自己扶住栏杆。两个人都停住了，接着笑得更厉害。",
      "next": "tc_c04_xiaoman_basketball_013"
    },
    "tc_c04_xiaoman_basketball_013": {
      "id": "tc_c04_xiaoman_basketball_013",
      "type": "line",
      "scene": "ts_c04_xiaoman_basketball",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "买水时她坚持一人付一瓶，因为“一胜一负，不能乱结”。我说下回再决胜，她已经拧开瓶盖，隔着瓶口看我。",
      "next": "tc_c04_xiaoman_basketball_014"
    },
    "tc_c04_xiaoman_basketball_014": {
      "id": "tc_c04_xiaoman_basketball_014",
      "type": "line",
      "scene": "ts_c04_xiaoman_basketball",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "“下回你来约。”",
      "next": "tc_c04_xiaoman_basketball_015"
    },
    "tc_c04_xiaoman_basketball_015": {
      "id": "tc_c04_xiaoman_basketball_015",
      "type": "line",
      "scene": "ts_c04_xiaoman_basketball_arcade_exit",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "我们离开游戏厅，手臂仍偶尔碰到一起。她没再说自己一定要赢，只在路口回头看了一眼那台机器，像给下次留了个记号。",
      "next": "tc_c04_xiaoman_before_bus_001"
    },
    "tc_c04_xiaoman_books_001": {
      "id": "tc_c04_xiaoman_books_001",
      "type": "line",
      "scene": "ts_c04_xiaoman_books",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "摊主把书铺在窄窄的棚下，有些书脊晒白了。我以为小满会挑发型画册，她却从最底下抽出一本旧生活杂志，指着里面一张夸张的广告笑。",
      "next": "tc_c04_xiaoman_books_002"
    },
    "tc_c04_xiaoman_books_002": {
      "id": "tc_c04_xiaoman_books_002",
      "type": "line",
      "scene": "ts_c04_xiaoman_books",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "“这人穿成这样，还拿公文包。是要去上班，还是去主持抽奖？”",
      "next": "tc_c04_xiaoman_books_003"
    },
    "tc_c04_xiaoman_books_003": {
      "id": "tc_c04_xiaoman_books_003",
      "type": "line",
      "scene": "ts_c04_xiaoman_books",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "我找到一本教人折纸的小册子，封面上那个纸鹤脖子特别长。小满看一眼，说像欠了房租，准备连夜飞走。",
      "next": "tc_c04_xiaoman_books_004"
    },
    "tc_c04_xiaoman_books_004": {
      "id": "tc_c04_xiaoman_books_004",
      "type": "line",
      "scene": "ts_c04_xiaoman_books",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "我们约好各给对方挑一本，价格不能超过一瓶饮料。我给她选了那本旧杂志，她给我挑了折纸册。",
      "next": "tc_c04_xiaoman_books_005"
    },
    "tc_c04_xiaoman_books_005": {
      "id": "tc_c04_xiaoman_books_005",
      "type": "line",
      "scene": "ts_c04_xiaoman_books",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "“你以为我没发现你很想买吗？”她说。",
      "next": "tc_c04_xiaoman_books_006"
    },
    "tc_c04_xiaoman_books_006": {
      "id": "tc_c04_xiaoman_books_006",
      "type": "line",
      "scene": "ts_c04_xiaoman_books",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "我没法反驳。我小时候会折船，后来连第一步怎么对角都忘了。",
      "next": "tc_c04_xiaoman_books_007"
    },
    "tc_c04_xiaoman_books_007": {
      "id": "tc_c04_xiaoman_books_007",
      "type": "line",
      "scene": "ts_c04_xiaoman_books",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "摊主借给我们两张废宣传纸。我们坐在旁边石阶上照着折，小满折得急，把该往里的角翻在外面，最后做出一只挺倔的纸鹤，翅膀两边不一般大。",
      "next": "tc_c04_xiaoman_books_008"
    },
    "tc_c04_xiaoman_books_008": {
      "id": "tc_c04_xiaoman_books_008",
      "type": "line",
      "scene": "ts_c04_xiaoman_books",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "我把自己的摆到她旁边，两只都不像封面。",
      "next": "tc_c04_xiaoman_books_009"
    },
    "tc_c04_xiaoman_books_009": {
      "id": "tc_c04_xiaoman_books_009",
      "type": "line",
      "scene": "ts_c04_xiaoman_books",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "“谁也别嘲笑谁。”我说。",
      "next": "tc_c04_xiaoman_books_010"
    },
    "tc_c04_xiaoman_books_010": {
      "id": "tc_c04_xiaoman_books_010",
      "type": "line",
      "scene": "ts_c04_xiaoman_books",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "她拿手机拍了一张，只拍纸，不拍我。拍完问：“我能留着吧？”",
      "next": "tc_c04_xiaoman_books_011"
    },
    "tc_c04_xiaoman_books_011": {
      "id": "tc_c04_xiaoman_books_011",
      "type": "line",
      "scene": "ts_c04_xiaoman_books",
      "speaker": "wenwen",
      "character": "xiaoman",
      "text": "“书？”",
      "next": "tc_c04_xiaoman_books_012"
    },
    "tc_c04_xiaoman_books_012": {
      "id": "tc_c04_xiaoman_books_012",
      "type": "line",
      "scene": "ts_c04_xiaoman_books",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "“你那只。”",
      "next": "tc_c04_xiaoman_books_013"
    },
    "tc_c04_xiaoman_books_013": {
      "id": "tc_c04_xiaoman_books_013",
      "type": "line",
      "scene": "ts_c04_xiaoman_books",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "我把纸鹤推过去，她把自己的交给我，先压好翅膀才放进我手心。",
      "next": "tc_c04_xiaoman_books_014"
    },
    "tc_c04_xiaoman_books_014": {
      "id": "tc_c04_xiaoman_books_014",
      "type": "line",
      "scene": "ts_c04_xiaoman_books",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "“别嫌丑。第一版，下回有改进空间。”",
      "next": "tc_c04_xiaoman_before_bus_001"
    },
    "tc_c04_xiaoman_before_bus_001": {
      "id": "tc_c04_xiaoman_before_bus_001",
      "type": "line",
      "scene": "ts_c04_xiaoman_before_bus",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "五点半，我们在路边买了烤土豆。她辣椒加得比我多，却又从我的纸碗里挑走一块。",
      "next": "tc_c04_xiaoman_before_bus_002"
    },
    "tc_c04_xiaoman_before_bus_002": {
      "id": "tc_c04_xiaoman_before_bus_002",
      "type": "line",
      "scene": "ts_c04_xiaoman_before_bus",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "“尝尝区别。”",
      "next": "tc_c04_xiaoman_before_bus_003"
    },
    "tc_c04_xiaoman_before_bus_003": {
      "id": "tc_c04_xiaoman_before_bus_003",
      "type": "line",
      "scene": "ts_c04_xiaoman_before_bus",
      "speaker": "wenwen",
      "character": "xiaoman",
      "text": "“你自己那份没熟？”",
      "next": "tc_c04_xiaoman_before_bus_004"
    },
    "tc_c04_xiaoman_before_bus_004": {
      "id": "tc_c04_xiaoman_before_bus_004",
      "type": "line",
      "scene": "ts_c04_xiaoman_before_bus",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "“你的看起来好吃。”",
      "next": "tc_c04_xiaoman_before_bus_005"
    },
    "tc_c04_xiaoman_before_bus_005": {
      "id": "tc_c04_xiaoman_before_bus_005",
      "type": "line",
      "scene": "ts_c04_xiaoman_before_bus",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "风一吹，她额前的头发乱了。我抬手想替她拨开，手停在半空。她看见了，反而自己抓了一把，弄得更乱。",
      "next": "tc_c04_xiaoman_before_bus_006"
    },
    "tc_c04_xiaoman_before_bus_006": {
      "id": "tc_c04_xiaoman_before_bus_006",
      "type": "line",
      "scene": "ts_c04_xiaoman_before_bus",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "“这才像出去玩过。”",
      "next": "tc_c04_xiaoman_before_bus_007"
    },
    "tc_c04_xiaoman_before_bus_007": {
      "id": "tc_c04_xiaoman_before_bus_007",
      "type": "line",
      "scene": "ts_c04_xiaoman_before_bus_busstop",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "我把纸碗换到另一只手，继续往前走。到公交站，她没有马上上车，等我确认回住处吃饭、九点多出门来得及，才踏上车门前那级台阶。",
      "next": "tc_c04_xiaoman_before_bus_008"
    },
    "tc_c04_xiaoman_before_bus_008": {
      "id": "tc_c04_xiaoman_before_bus_008",
      "type": "line",
      "scene": "ts_c04_xiaoman_before_bus_busstop",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "“今天可以。”她说。",
      "next": "tc_c04_xiaoman_before_bus_009"
    },
    "tc_c04_xiaoman_before_bus_009": {
      "id": "tc_c04_xiaoman_before_bus_009",
      "type": "line",
      "scene": "ts_c04_xiaoman_before_bus_busstop",
      "speaker": "wenwen",
      "character": "xiaoman",
      "text": "“只是可以？”",
      "next": "tc_c04_xiaoman_before_bus_010"
    },
    "tc_c04_xiaoman_before_bus_010": {
      "id": "tc_c04_xiaoman_before_bus_010",
      "type": "line",
      "scene": "ts_c04_xiaoman_before_bus_busstop",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "车门快关了，她从门边回头，笑着朝我竖了一下拇指。",
      "next": "tc_c04_xiaoman_before_bus_011"
    },
    "tc_c04_xiaoman_before_bus_011": {
      "id": "tc_c04_xiaoman_before_bus_011",
      "type": "line",
      "scene": "ts_c04_xiaoman_before_bus_busstop",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "“下次不用带两个计划。一个也可以。”",
      "next": "tc_c04_common_exit"
    },
    "tc_c04_xiaoman_outing_choice": {
      "id": "tc_c04_xiaoman_outing_choice",
      "type": "choice",
      "scene": "ts_c04_xiaoman_outing_crossroad",
      "character": "xiaoman",
      "text": "",
      "flag": "xiaomanOuting",
      "choices": [
        {
          "label": "去投篮机，输的人买水",
          "value": "basketball",
          "next": "tc_c04_xiaoman_basketball_001"
        },
        {
          "label": "去旧书摊，给对方挑一本怪书",
          "value": "books",
          "next": "tc_c04_xiaoman_books_001"
        }
      ]
    },
    "tc_c05_xiaoman_entry": {
      "id": "tc_c05_xiaoman_entry",
      "type": "line",
      "scene": "ts_c05_xiaoman_parcel",
      "speaker": "narrator",
      "character": null,
      "text": "第25天，朋友群里说了回声月底停业的事。毛狼约第30天傍晚一起吃顿饭，周栀说吃完还得上最后一班，叫大家别把饭吃成告别会。我回了能到，也说明九点前得走。",
      "next": "tc_c05_xiaoman_parcel_002"
    },
    "tc_c05_xiaoman_parcel_002": {
      "id": "tc_c05_xiaoman_parcel_002",
      "type": "line",
      "scene": "ts_c05_xiaoman_parcel",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "两天后，我补觉起来，陪小满去取网购的外套。快递点门口遇见一位小时候住过同一片的熟人。那人叫了我的名字，又看着小满说：“哟，小不点，现在还跟文文屁股后面跑？”",
      "next": "tc_c05_xiaoman_parcel_003"
    },
    "tc_c05_xiaoman_parcel_003": {
      "id": "tc_c05_xiaoman_parcel_003",
      "type": "line",
      "scene": "ts_c05_xiaoman_parcel",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "我没有多想，接了一句：“她现在比以前还爱较劲。”",
      "next": "tc_c05_xiaoman_parcel_004"
    },
    "tc_c05_xiaoman_parcel_004": {
      "id": "tc_c05_xiaoman_parcel_004",
      "type": "line",
      "scene": "ts_c05_xiaoman_parcel",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "小满刚把取件码亮出来，听见后锁了屏。",
      "next": "tc_c05_xiaoman_parcel_005"
    },
    "tc_c05_xiaoman_parcel_005": {
      "id": "tc_c05_xiaoman_parcel_005",
      "type": "line",
      "scene": "ts_c05_xiaoman_parcel",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "熟人没察觉，又说了两句就走。我还在笑，她转向快递架，重新报号码，拿到袋子就往外走。",
      "next": "tc_c05_xiaoman_parcel_006"
    },
    "tc_c05_xiaoman_parcel_006": {
      "id": "tc_c05_xiaoman_parcel_006",
      "type": "line",
      "scene": "ts_c05_xiaoman_parcel",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "“你不拆开看看？”我问。",
      "next": "tc_c05_xiaoman_parcel_007"
    },
    "tc_c05_xiaoman_parcel_007": {
      "id": "tc_c05_xiaoman_parcel_007",
      "type": "line",
      "scene": "ts_c05_xiaoman_parcel",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "“回去再看。”",
      "next": "tc_c05_xiaoman_parcel_008"
    },
    "tc_c05_xiaoman_parcel_008": {
      "id": "tc_c05_xiaoman_parcel_008",
      "type": "line",
      "scene": "ts_c05_xiaoman_parcel",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "我跟上，刚想逗她说真生气了，她忽然停下。",
      "next": "tc_c05_xiaoman_parcel_009"
    },
    "tc_c05_xiaoman_parcel_009": {
      "id": "tc_c05_xiaoman_parcel_009",
      "type": "line",
      "scene": "ts_c05_xiaoman_parcel",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "“你知道我今天为什么叫你来吗？”",
      "next": "tc_c05_xiaoman_parcel_010"
    },
    "tc_c05_xiaoman_parcel_010": {
      "id": "tc_c05_xiaoman_parcel_010",
      "type": "line",
      "scene": "ts_c05_xiaoman_parcel",
      "speaker": "wenwen",
      "character": "xiaoman",
      "text": "“拿快递？”",
      "next": "tc_c05_xiaoman_parcel_011"
    },
    "tc_c05_xiaoman_parcel_011": {
      "id": "tc_c05_xiaoman_parcel_011",
      "type": "line",
      "scene": "ts_c05_xiaoman_parcel",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "“这一袋我自己拿不动？”",
      "next": "tc_c05_xiaoman_parcel_012"
    },
    "tc_c05_xiaoman_parcel_012": {
      "id": "tc_c05_xiaoman_parcel_012",
      "type": "line",
      "scene": "ts_c05_xiaoman_parcel",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "袋子很轻，边角被她捏出响声。我一下没有话了。",
      "next": "tc_c05_xiaoman_parcel_013"
    },
    "tc_c05_xiaoman_parcel_013": {
      "id": "tc_c05_xiaoman_parcel_013",
      "type": "line",
      "scene": "ts_c05_xiaoman_parcel",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "她把它换到另一只手。“我想跟你见面。结果别人说我跟在你后面，你还挺乐。”",
      "next": "tc_c05_xiaoman_parcel_014"
    },
    "tc_c05_xiaoman_parcel_014": {
      "id": "tc_c05_xiaoman_parcel_014",
      "type": "line",
      "scene": "ts_c05_xiaoman_parcel",
      "speaker": "wenwen",
      "character": "xiaoman",
      "text": "“他就是顺口——”",
      "next": "tc_c05_xiaoman_parcel_015"
    },
    "tc_c05_xiaoman_parcel_015": {
      "id": "tc_c05_xiaoman_parcel_015",
      "type": "line",
      "scene": "ts_c05_xiaoman_parcel",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "“我知道他顺口。我在说你。”",
      "next": "tc_c05_xiaoman_parcel_016"
    },
    "tc_c05_xiaoman_parcel_016": {
      "id": "tc_c05_xiaoman_parcel_016",
      "type": "line",
      "scene": "ts_c05_xiaoman_parcel",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "路上有人推着车经过，我们各退一步，隔着车轮上沾的泥站着。车走后，她没有走回原来的距离。",
      "next": "tc_c05_xiaoman_parcel_017"
    },
    "tc_c05_xiaoman_parcel_017": {
      "id": "tc_c05_xiaoman_parcel_017",
      "type": "line",
      "scene": "ts_c05_xiaoman_parcel",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "我说：“我没觉得你真的还是小时候。”",
      "next": "tc_c05_xiaoman_parcel_018"
    },
    "tc_c05_xiaoman_parcel_018": {
      "id": "tc_c05_xiaoman_parcel_018",
      "type": "line",
      "scene": "ts_c05_xiaoman_parcel",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "“但你那样说，特别方便。你不用认识现在的我，还显得我们很熟。”",
      "next": "tc_c05_xiaoman_parcel_019"
    },
    "tc_c05_xiaoman_parcel_019": {
      "id": "tc_c05_xiaoman_parcel_019",
      "type": "line",
      "scene": "ts_c05_xiaoman_parcel",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "我抬头看她。她眼角有点红，不是要哭，更像很用力忍着不把话说得太冲。我忽然记起第18天，她让我说一件现在喜欢的东西，我答不上来。",
      "next": "tc_c05_xiaoman_parcel_020"
    },
    "tc_c05_xiaoman_parcel_020": {
      "id": "tc_c05_xiaoman_parcel_020",
      "type": "line",
      "scene": "ts_c05_xiaoman_parcel",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "“是我说错了。”我说，“我听见那句话，觉得能显示我跟你熟，就接了。没想你站在旁边会是什么感觉。”",
      "next": "tc_c05_xiaoman_parcel_021"
    },
    "tc_c05_xiaoman_parcel_021": {
      "id": "tc_c05_xiaoman_parcel_021",
      "type": "line",
      "scene": "ts_c05_xiaoman_parcel",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "她把目光移向街对面，过了一会儿才说：“你也不用忽然叫我罗女士。”",
      "next": "tc_c05_xiaoman_parcel_022"
    },
    "tc_c05_xiaoman_parcel_022": {
      "id": "tc_c05_xiaoman_parcel_022",
      "type": "line",
      "scene": "ts_c05_xiaoman_parcel",
      "speaker": "wenwen",
      "character": "xiaoman",
      "text": "“那有点难。显得我要找你谈装修。”",
      "next": "tc_c05_xiaoman_parcel_023"
    },
    "tc_c05_xiaoman_parcel_023": {
      "id": "tc_c05_xiaoman_parcel_023",
      "type": "line",
      "scene": "ts_c05_xiaoman_parcel",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "她嘴角动了一下，没完全笑出来。",
      "next": "tc_c05_xiaoman_parcel_024"
    },
    "tc_c05_xiaoman_parcel_024": {
      "id": "tc_c05_xiaoman_parcel_024",
      "type": "line",
      "scene": "ts_c05_xiaoman_parcel",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "“今天我想自己回去。”",
      "next": "tc_c05_xiaoman_parcel_025"
    },
    "tc_c05_xiaoman_parcel_025": {
      "id": "tc_c05_xiaoman_parcel_025",
      "type": "line",
      "scene": "ts_c05_xiaoman_parcel",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "我停在路口，没有再跟。她走出几步，回头把袋子提给我看。",
      "next": "tc_c05_xiaoman_parcel_026"
    },
    "tc_c05_xiaoman_parcel_026": {
      "id": "tc_c05_xiaoman_parcel_026",
      "type": "line",
      "scene": "ts_c05_xiaoman_parcel",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "“本来还想问你好不好看的。现在不问。”",
      "next": "tc_c05_xiaoman_parcel_027"
    },
    "tc_c05_xiaoman_parcel_027": {
      "id": "tc_c05_xiaoman_parcel_027",
      "type": "line",
      "scene": "ts_c05_xiaoman_parcel",
      "speaker": "wenwen",
      "character": "xiaoman",
      "text": "“好。”",
      "next": "tc_c05_xiaoman_parcel_028"
    },
    "tc_c05_xiaoman_parcel_028": {
      "id": "tc_c05_xiaoman_parcel_028",
      "type": "line",
      "scene": "ts_c05_xiaoman_parcel",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "这回我没有追着补一句“别生气了”。",
      "next": "tc_c05_xiaoman_new_coat_001"
    },
    "tc_c05_xiaoman_new_coat_001": {
      "id": "tc_c05_xiaoman_new_coat_001",
      "type": "line",
      "scene": "ts_c05_xiaoman_new_coat",
      "speaker": "narrator",
      "character": null,
      "text": "我发消息问小满下午能否在便利店坐二十分钟，她过了一阵才回：“可以，别带赔礼大礼包。”",
      "next": "tc_c05_xiaoman_new_coat_002"
    },
    "tc_c05_xiaoman_new_coat_002": {
      "id": "tc_c05_xiaoman_new_coat_002",
      "type": "line",
      "scene": "ts_c05_xiaoman_new_coat",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "见面时她穿了新外套。不是我想象中亮眼的颜色，是很浅的灰，袖口有一道细细的蓝边。",
      "next": "tc_c05_xiaoman_new_coat_003",
      "expression": "outfit-new-coat"
    },
    "tc_c05_xiaoman_new_coat_003": {
      "id": "tc_c05_xiaoman_new_coat_003",
      "type": "line",
      "scene": "ts_c05_xiaoman_new_coat",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "我说好看。她问我是真觉得好看，还是觉得今天必须夸。",
      "next": "tc_c05_xiaoman_new_coat_004",
      "expression": "outfit-new-coat"
    },
    "tc_c05_xiaoman_new_coat_004": {
      "id": "tc_c05_xiaoman_new_coat_004",
      "type": "line",
      "scene": "ts_c05_xiaoman_new_coat",
      "speaker": "wenwen",
      "character": "xiaoman",
      "text": "“蓝边好看。你抬手的时候能看见。”",
      "next": "tc_c05_xiaoman_new_coat_005",
      "expression": "outfit-new-coat"
    },
    "tc_c05_xiaoman_new_coat_005": {
      "id": "tc_c05_xiaoman_new_coat_005",
      "type": "line",
      "scene": "ts_c05_xiaoman_new_coat",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "她看了看袖子，坐下来。",
      "next": "tc_c05_xiaoman_new_coat_006",
      "expression": "outfit-new-coat"
    },
    "tc_c05_xiaoman_new_coat_006": {
      "id": "tc_c05_xiaoman_new_coat_006",
      "type": "line",
      "scene": "ts_c05_xiaoman_new_coat",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "我把那天没说完整的话补了。以后别人拿小时候的事开玩笑，我不必每一次严肃制止，但不能再顺着把她放回那个谁的跟班的位置。她靠着椅背听，手里转着没有拆封的饼干。",
      "next": "tc_c05_xiaoman_new_coat_007",
      "expression": "outfit-new-coat"
    },
    "tc_c05_xiaoman_new_coat_007": {
      "id": "tc_c05_xiaoman_new_coat_007",
      "type": "line",
      "scene": "ts_c05_xiaoman_new_coat",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "“我也有问题。”她说，“有时想叫你出来，怕你问为什么，就说来拿东西，顺路。结果真让你觉得全是顺路。”",
      "next": "tc_c05_xiaoman_new_coat_008",
      "expression": "outfit-new-coat"
    },
    "tc_c05_xiaoman_new_coat_008": {
      "id": "tc_c05_xiaoman_new_coat_008",
      "type": "line",
      "scene": "ts_c05_xiaoman_new_coat",
      "speaker": "wenwen",
      "character": "xiaoman",
      "text": "“那天出去玩，我没这么觉得。”",
      "next": "tc_c05_xiaoman_new_coat_009",
      "expression": "outfit-new-coat"
    },
    "tc_c05_xiaoman_new_coat_009": {
      "id": "tc_c05_xiaoman_new_coat_009",
      "type": "line",
      "scene": "ts_c05_xiaoman_new_coat",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "她看我一眼，终于把饼干拆开。",
      "next": "tc_c05_xiaoman_new_coat_010",
      "expression": "outfit-new-coat"
    },
    "tc_c05_xiaoman_new_coat_010": {
      "id": "tc_c05_xiaoman_new_coat_010",
      "type": "line",
      "scene": "ts_c05_xiaoman_new_coat",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "“那天当然不算。我连衣服都换了。”",
      "next": "tc_c05_xiaoman_new_coat_011",
      "expression": "outfit-new-coat",
      "avatarExpression": "outfit-new-coat"
    },
    "tc_c05_xiaoman_new_coat_011": {
      "id": "tc_c05_xiaoman_new_coat_011",
      "type": "line",
      "scene": "ts_c05_xiaoman_new_coat",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "她递给我一片，自己拿了另一片。我们没有把剩下的时间全用来复盘那次争执。她说同事推荐的喜剧一点不好笑，我说自己最近在游戏里绕了半天，最后发现出口就在出生点旁边。",
      "next": "tc_c05_xiaoman_new_coat_012",
      "expression": "outfit-new-coat"
    },
    "tc_c05_xiaoman_new_coat_012": {
      "id": "tc_c05_xiaoman_new_coat_012",
      "type": "line",
      "scene": "ts_c05_xiaoman_new_coat",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "吃到最后，她把饼干袋折好，问我哪天休班。我说第32天。",
      "next": "tc_c05_xiaoman_new_coat_013",
      "expression": "outfit-new-coat"
    },
    "tc_c05_xiaoman_new_coat_013": {
      "id": "tc_c05_xiaoman_new_coat_013",
      "type": "line",
      "scene": "ts_c05_xiaoman_new_coat",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "“行。那天见。”",
      "next": "tc_c05_xiaoman_new_coat_014",
      "expression": "outfit-new-coat",
      "avatarExpression": "outfit-new-coat"
    },
    "tc_c05_xiaoman_new_coat_014": {
      "id": "tc_c05_xiaoman_new_coat_014",
      "type": "line",
      "scene": "ts_c05_xiaoman_new_coat",
      "speaker": "wenwen",
      "character": "xiaoman",
      "text": "“去哪？”",
      "next": "tc_c05_xiaoman_new_coat_015",
      "expression": "outfit-new-coat"
    },
    "tc_c05_xiaoman_new_coat_015": {
      "id": "tc_c05_xiaoman_new_coat_015",
      "type": "line",
      "scene": "ts_c05_xiaoman_new_coat",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "她想了想，说先在街口见，再决定。",
      "next": "tc_c05_xiaoman_new_coat_016",
      "expression": "outfit-new-coat"
    },
    "tc_c05_xiaoman_new_coat_016": {
      "id": "tc_c05_xiaoman_new_coat_016",
      "type": "line",
      "scene": "ts_c05_xiaoman_new_coat",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "我看着她，她也看着我，忽然笑了。",
      "next": "tc_c05_xiaoman_new_coat_017",
      "expression": "outfit-new-coat"
    },
    "tc_c05_xiaoman_new_coat_017": {
      "id": "tc_c05_xiaoman_new_coat_017",
      "type": "line",
      "scene": "ts_c05_xiaoman_new_coat",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "“这回换我没想好。你可以嫌弃，但还是要来。”",
      "next": "tc_c05_common_exit",
      "expression": "outfit-new-coat",
      "avatarExpression": "outfit-new-coat"
    },
    "tc_c06_xiaoman_entry": {
      "id": "tc_c06_xiaoman_entry",
      "type": "line",
      "scene": "ts_c06_xiaoman_rest_day",
      "speaker": "narrator",
      "character": null,
      "text": "第30天那顿饭后，我按时回了网吧。夜里经过走廊时，手机里陆续弹出朋友的消息，等到天亮交完班，我才看完。昨天补足觉，又值过一晚，今天是休班，下午睡醒出门，脑袋终于不再像没拧干的毛巾。",
      "next": "tc_c06_xiaoman_rest_day_002"
    },
    "tc_c06_xiaoman_rest_day_002": {
      "id": "tc_c06_xiaoman_rest_day_002",
      "type": "line",
      "scene": "ts_c06_xiaoman_rest_day",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "小满约我在街口见，自己却站在旁边的屋檐下。新外套搭在手臂上，她拿着两只塑料袋，一只装橘子，一只装空盒子。",
      "next": "tc_c06_xiaoman_rest_day_003",
      "expression": "outfit-new-coat"
    },
    "tc_c06_xiaoman_rest_day_003": {
      "id": "tc_c06_xiaoman_rest_day_003",
      "type": "line",
      "scene": "ts_c06_xiaoman_rest_day",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "“帮谁送东西？”我问。",
      "next": "tc_c06_xiaoman_rest_day_004",
      "expression": "outfit-new-coat"
    },
    "tc_c06_xiaoman_rest_day_004": {
      "id": "tc_c06_xiaoman_rest_day_004",
      "type": "line",
      "scene": "ts_c06_xiaoman_rest_day",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "“空盒子给同事。橘子是我的。”",
      "next": "tc_c06_xiaoman_rest_day_005",
      "expression": "outfit-new-coat",
      "avatarExpression": "outfit-new-coat"
    },
    "tc_c06_xiaoman_rest_day_005": {
      "id": "tc_c06_xiaoman_rest_day_005",
      "type": "line",
      "scene": "ts_c06_xiaoman_rest_day",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "她把橘子递过来，自己给同事发了个语音，约好明天带盒子。我下意识问她要不要现在顺路送，她马上摇头。",
      "next": "tc_c06_xiaoman_rest_day_006",
      "expression": "outfit-new-coat"
    },
    "tc_c06_xiaoman_rest_day_006": {
      "id": "tc_c06_xiaoman_rest_day_006",
      "type": "line",
      "scene": "ts_c06_xiaoman_rest_day",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "“说好今天休息。十分钟顺路，二十分钟顺路，最后半天全顺走了。”",
      "next": "tc_c06_xiaoman_rest_day_007",
      "expression": "outfit-new-coat",
      "avatarExpression": "outfit-new-coat"
    },
    "tc_c06_xiaoman_rest_day_007": {
      "id": "tc_c06_xiaoman_rest_day_007",
      "type": "line",
      "scene": "ts_c06_xiaoman_rest_day_river",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "我们走到河边，才发现常坐的那排椅子刷了漆。小满站在警示带前，手里橘子滚来滚去，说她连一个坐着的计划都能失败。",
      "next": "tc_c06_xiaoman_rest_day_008",
      "expression": "outfit-new-coat"
    },
    "tc_c06_xiaoman_rest_day_008": {
      "id": "tc_c06_xiaoman_rest_day_008",
      "type": "line",
      "scene": "ts_c06_xiaoman_rest_day_river",
      "speaker": "wenwen",
      "character": "xiaoman",
      "text": "“也许今天适合站着。”",
      "next": "tc_c06_xiaoman_rest_day_009",
      "expression": "outfit-new-coat"
    },
    "tc_c06_xiaoman_rest_day_009": {
      "id": "tc_c06_xiaoman_rest_day_009",
      "type": "line",
      "scene": "ts_c06_xiaoman_rest_day_river",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "“你这安慰真省钱。”",
      "next": "tc_c06_xiaoman_rest_day_010",
      "expression": "outfit-new-coat",
      "avatarExpression": "outfit-new-coat"
    },
    "tc_c06_xiaoman_rest_day_010": {
      "id": "tc_c06_xiaoman_rest_day_010",
      "type": "line",
      "scene": "ts_c06_xiaoman_rest_day_river",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "最后我们找到一处有台阶的避雨棚。旁边一位老人拿收音机听戏，声音不大。小满征得同意，在另一头坐下，把外套垫在膝上。",
      "next": "tc_c06_xiaoman_rest_day_011",
      "expression": "outfit-new-coat"
    },
    "tc_c06_xiaoman_rest_day_011": {
      "id": "tc_c06_xiaoman_rest_day_011",
      "type": "line",
      "scene": "ts_c06_xiaoman_rest_day_river",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "她剥橘子剥出一长条皮，得意地给我看。我接过她分来的半个，吃了一瓣，酸得闭上眼。",
      "next": "tc_c06_xiaoman_rest_day_012",
      "expression": "outfit-new-coat"
    },
    "tc_c06_xiaoman_rest_day_012": {
      "id": "tc_c06_xiaoman_rest_day_012",
      "type": "line",
      "scene": "ts_c06_xiaoman_rest_day_river",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "她看见我的表情，笑得直往后靠。",
      "next": "tc_c06_xiaoman_rest_day_013",
      "expression": "outfit-new-coat"
    },
    "tc_c06_xiaoman_rest_day_013": {
      "id": "tc_c06_xiaoman_rest_day_013",
      "type": "line",
      "scene": "ts_c06_xiaoman_rest_day_river",
      "speaker": "wenwen",
      "character": "xiaoman",
      "text": "“我还以为你会挑甜的！”",
      "next": "tc_c06_xiaoman_rest_day_014",
      "expression": "outfit-new-coat"
    },
    "tc_c06_xiaoman_rest_day_014": {
      "id": "tc_c06_xiaoman_rest_day_014",
      "type": "line",
      "scene": "ts_c06_xiaoman_rest_day_river",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "“上一袋明明很甜！”",
      "next": "tc_c06_xiaoman_rest_day_015",
      "expression": "outfit-new-coat",
      "avatarExpression": "outfit-new-coat"
    },
    "tc_c06_xiaoman_rest_day_015": {
      "id": "tc_c06_xiaoman_rest_day_015",
      "type": "line",
      "scene": "ts_c06_xiaoman_rest_day_river",
      "speaker": "wenwen",
      "character": "xiaoman",
      "text": "“上一袋是哪一年的？”",
      "next": "tc_c06_xiaoman_rest_day_016",
      "expression": "outfit-new-coat"
    },
    "tc_c06_xiaoman_rest_day_016": {
      "id": "tc_c06_xiaoman_rest_day_016",
      "type": "line",
      "scene": "ts_c06_xiaoman_rest_day_river",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "我想抢她那半个换，她立刻护住，说都同一个橘子，换了也没用。争了两下，两个人又安静下来。她没有拿出手机，我也没有急着找下一个话题。",
      "next": "tc_c06_xiaoman_rest_day_017",
      "expression": "outfit-new-coat"
    },
    "tc_c06_xiaoman_rest_day_017": {
      "id": "tc_c06_xiaoman_rest_day_017",
      "type": "line",
      "scene": "ts_c06_xiaoman_rest_day_river",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "过了一会儿，小满忽然说：“前天有个人问我什么时候能自己开店。”",
      "next": "tc_c06_xiaoman_rest_day_018",
      "expression": "outfit-new-coat"
    },
    "tc_c06_xiaoman_rest_day_018": {
      "id": "tc_c06_xiaoman_rest_day_018",
      "type": "line",
      "scene": "ts_c06_xiaoman_rest_day_river",
      "speaker": "wenwen",
      "character": "xiaoman",
      "text": "“你怎么答的？”",
      "next": "tc_c06_xiaoman_rest_day_019",
      "expression": "outfit-new-coat"
    },
    "tc_c06_xiaoman_rest_day_019": {
      "id": "tc_c06_xiaoman_rest_day_019",
      "type": "line",
      "scene": "ts_c06_xiaoman_rest_day_river",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "“说还早。我连有些基础的东西都没练稳，他说年轻人要敢想。”",
      "next": "tc_c06_xiaoman_rest_day_020",
      "expression": "outfit-new-coat",
      "avatarExpression": "outfit-new-coat"
    },
    "tc_c06_xiaoman_rest_day_020": {
      "id": "tc_c06_xiaoman_rest_day_020",
      "type": "line",
      "scene": "ts_c06_xiaoman_rest_day_river",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "她把一丝白络从橘瓣上挑掉，皱着鼻子吃了。",
      "next": "tc_c06_xiaoman_rest_day_021",
      "expression": "outfit-new-coat"
    },
    "tc_c06_xiaoman_rest_day_021": {
      "id": "tc_c06_xiaoman_rest_day_021",
      "type": "line",
      "scene": "ts_c06_xiaoman_rest_day_river",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "“我也敢想啊。我想今晚早点洗澡，明天不要遇见特别难说话的人。是不是不够大？”",
      "next": "tc_c06_xiaoman_rest_day_022",
      "expression": "outfit-new-coat",
      "avatarExpression": "outfit-new-coat"
    },
    "tc_c06_xiaoman_rest_day_022": {
      "id": "tc_c06_xiaoman_rest_day_022",
      "type": "line",
      "scene": "ts_c06_xiaoman_rest_day_river",
      "speaker": "wenwen",
      "character": "xiaoman",
      "text": "“我想下个月房租交完，还能剩一点钱。”",
      "next": "tc_c06_xiaoman_rest_day_023",
      "expression": "outfit-new-coat"
    },
    "tc_c06_xiaoman_rest_day_023": {
      "id": "tc_c06_xiaoman_rest_day_023",
      "type": "line",
      "scene": "ts_c06_xiaoman_rest_day_river",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "她转过头，表情很认真。",
      "next": "tc_c06_xiaoman_rest_day_024",
      "expression": "outfit-new-coat"
    },
    "tc_c06_xiaoman_rest_day_024": {
      "id": "tc_c06_xiaoman_rest_day_024",
      "type": "line",
      "scene": "ts_c06_xiaoman_rest_day_river",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "“那也挺大的。”",
      "next": "tc_c06_xiaoman_rest_day_025",
      "expression": "outfit-new-coat",
      "avatarExpression": "outfit-new-coat"
    },
    "tc_c06_xiaoman_rest_day_025": {
      "id": "tc_c06_xiaoman_rest_day_025",
      "type": "line",
      "scene": "ts_c06_xiaoman_rest_day_river",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "雨落下来时，我们都没动。棚子挡得住，鞋尖前面隔着半步才是湿地。她把腿收回来一点，肩膀贴着我的袖子，手仍放在自己膝上。",
      "next": "tc_c06_xiaoman_rest_day_026",
      "expression": "outfit-new-coat"
    },
    "tc_c06_xiaoman_rest_day_026": {
      "id": "tc_c06_xiaoman_rest_day_026",
      "type": "line",
      "scene": "ts_c06_xiaoman_rest_day_river",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "“你是不是以为我今天想找你谈以后？”",
      "next": "tc_c06_xiaoman_rest_day_027",
      "expression": "outfit-new-coat",
      "avatarExpression": "outfit-new-coat"
    },
    "tc_c06_xiaoman_rest_day_027": {
      "id": "tc_c06_xiaoman_rest_day_027",
      "type": "line",
      "scene": "ts_c06_xiaoman_rest_day_river",
      "speaker": "wenwen",
      "character": "xiaoman",
      "text": "“有一点。”",
      "next": "tc_c06_xiaoman_rest_day_028",
      "expression": "outfit-new-coat"
    },
    "tc_c06_xiaoman_rest_day_028": {
      "id": "tc_c06_xiaoman_rest_day_028",
      "type": "line",
      "scene": "ts_c06_xiaoman_rest_day_river",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "“我今天主要想不说话。”",
      "next": "tc_c06_xiaoman_rest_day_029",
      "expression": "outfit-new-coat",
      "avatarExpression": "outfit-new-coat"
    },
    "tc_c06_xiaoman_rest_day_029": {
      "id": "tc_c06_xiaoman_rest_day_029",
      "type": "line",
      "scene": "ts_c06_xiaoman_rest_day_river",
      "speaker": "wenwen",
      "character": "xiaoman",
      "text": "“那刚才的橘子争论怎么结算？”",
      "next": "tc_c06_xiaoman_rest_day_030",
      "expression": "outfit-new-coat"
    },
    "tc_c06_xiaoman_rest_day_030": {
      "id": "tc_c06_xiaoman_rest_day_030",
      "type": "line",
      "scene": "ts_c06_xiaoman_rest_day_river",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "“必要交流，不计入。”",
      "next": "tc_c06_xiaoman_rest_day_031",
      "expression": "outfit-new-coat",
      "avatarExpression": "outfit-new-coat"
    },
    "tc_c06_xiaoman_rest_day_031": {
      "id": "tc_c06_xiaoman_rest_day_031",
      "type": "line",
      "scene": "ts_c06_xiaoman_rest_day_river",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "我顺着她的意思闭了嘴。收音机里的唱腔拖得很长，雨落在棚顶，偶尔有车轧过积水。小满坐了好一会儿，才往我这边轻轻靠了一下，没有把全身重量压过来。",
      "next": "tc_c06_xiaoman_rest_day_032",
      "expression": "outfit-new-coat"
    },
    "tc_c06_xiaoman_rest_day_032": {
      "id": "tc_c06_xiaoman_rest_day_032",
      "type": "line",
      "scene": "ts_c06_xiaoman_rest_day_river",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "我没侧头看，怕她又忙着坐直。",
      "next": "tc_c06_xiaoman_rest_day_033",
      "expression": "outfit-new-coat"
    },
    "tc_c06_xiaoman_rest_day_033": {
      "id": "tc_c06_xiaoman_rest_day_033",
      "type": "line",
      "scene": "ts_c06_xiaoman_rest_day_dinner",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "雨稍小后，我们去吃晚饭。她挑了一家我没去过的小店，说是同事带她吃过，面煮得软硬刚好。老板问要不要加葱，她先说自己的不要，又转头等我自己回答。",
      "next": "tc_c06_xiaoman_rest_day_034",
      "expression": "outfit-new-coat"
    },
    "tc_c06_xiaoman_rest_day_034": {
      "id": "tc_c06_xiaoman_rest_day_034",
      "type": "line",
      "scene": "ts_c06_xiaoman_rest_day_dinner",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "饭吃到一半，她拿筷子指了指我的碗：“你其实能说出来嘛。”",
      "next": "tc_c06_xiaoman_rest_day_035",
      "expression": "outfit-new-coat"
    },
    "tc_c06_xiaoman_rest_day_035": {
      "id": "tc_c06_xiaoman_rest_day_035",
      "type": "line",
      "scene": "ts_c06_xiaoman_rest_day_dinner",
      "speaker": "wenwen",
      "character": "xiaoman",
      "text": "“说什么？”",
      "next": "tc_c06_xiaoman_rest_day_036",
      "expression": "outfit-new-coat"
    },
    "tc_c06_xiaoman_rest_day_036": {
      "id": "tc_c06_xiaoman_rest_day_036",
      "type": "line",
      "scene": "ts_c06_xiaoman_rest_day_dinner",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "“少放一点。上次还说不好意思。”",
      "next": "tc_c06_xiaoman_rest_day_037",
      "expression": "outfit-new-coat",
      "avatarExpression": "outfit-new-coat"
    },
    "tc_c06_xiaoman_rest_day_037": {
      "id": "tc_c06_xiaoman_rest_day_037",
      "type": "line",
      "scene": "ts_c06_xiaoman_rest_day_dinner",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "我低头看碗里的葱，笑了一下。她没有接着宣布我进步了，只把自己那盘小菜推到桌子中间。",
      "next": "tc_c06_xiaoman_rest_day_038",
      "expression": "outfit-new-coat"
    },
    "tc_c06_xiaoman_rest_day_038": {
      "id": "tc_c06_xiaoman_rest_day_038",
      "type": "line",
      "scene": "ts_c06_xiaoman_rest_day_dinner",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "“尝这个。我觉得比橘子可靠。”",
      "next": "tc_c06_common_exit",
      "expression": "outfit-new-coat",
      "avatarExpression": "outfit-new-coat"
    },
    "tc_c07_xiaoman_entry": {
      "id": "tc_c07_xiaoman_entry",
      "type": "line",
      "scene": "ts_c07_xiaoman_her_weekend",
      "speaker": "narrator",
      "character": null,
      "text": "小满提前三天告诉我，第39天的下午要和两位同事去听一场短课。我本来把那天空出来，想再约她出去，听完只回了一个“行”。",
      "next": "tc_c07_xiaoman_her_weekend_002"
    },
    "tc_c07_xiaoman_her_weekend_002": {
      "id": "tc_c07_xiaoman_her_weekend_002",
      "type": "line",
      "scene": "ts_c07_xiaoman_her_weekend",
      "speaker": "narrator",
      "character": null,
      "text": "她隔了十分钟打来电话。",
      "next": "tc_c07_xiaoman_her_weekend_003"
    },
    "tc_c07_xiaoman_her_weekend_003": {
      "id": "tc_c07_xiaoman_her_weekend_003",
      "type": "line",
      "scene": "ts_c07_xiaoman_her_weekend",
      "speaker": "xiaoman",
      "character": null,
      "text": "“你这个‘行’，是正常的行，还是一肚子话的行？”",
      "next": "tc_c07_xiaoman_her_weekend_004"
    },
    "tc_c07_xiaoman_her_weekend_004": {
      "id": "tc_c07_xiaoman_her_weekend_004",
      "type": "line",
      "scene": "ts_c07_xiaoman_her_weekend",
      "speaker": "wenwen",
      "character": null,
      "text": "“正常的。就是我那天也有空。”",
      "next": "tc_c07_xiaoman_her_weekend_005"
    },
    "tc_c07_xiaoman_her_weekend_005": {
      "id": "tc_c07_xiaoman_her_weekend_005",
      "type": "line",
      "scene": "ts_c07_xiaoman_her_weekend",
      "speaker": "xiaoman",
      "character": null,
      "text": "“那你可以直接说后半句。”",
      "next": "tc_c07_xiaoman_her_weekend_006"
    },
    "tc_c07_xiaoman_her_weekend_006": {
      "id": "tc_c07_xiaoman_her_weekend_006",
      "type": "line",
      "scene": "ts_c07_xiaoman_her_weekend",
      "speaker": "narrator",
      "character": null,
      "text": "我坐在床边揉眼睛。她那边有水流声，大概正在洗杯子，说话停一下，水声也停一下。",
      "next": "tc_c07_xiaoman_her_weekend_007"
    },
    "tc_c07_xiaoman_her_weekend_007": {
      "id": "tc_c07_xiaoman_her_weekend_007",
      "type": "line",
      "scene": "ts_c07_xiaoman_her_weekend",
      "speaker": "narrator",
      "character": null,
      "text": "“我有一点失望。”我说，“但你已经约好了，下次就下次。”",
      "next": "tc_c07_xiaoman_her_weekend_008"
    },
    "tc_c07_xiaoman_her_weekend_008": {
      "id": "tc_c07_xiaoman_her_weekend_008",
      "type": "line",
      "scene": "ts_c07_xiaoman_her_weekend",
      "speaker": "narrator",
      "character": null,
      "text": "她静了一瞬，才说：“嗯。这句听着比一个字好懂。”",
      "next": "tc_c07_xiaoman_her_weekend_009"
    },
    "tc_c07_xiaoman_her_weekend_009": {
      "id": "tc_c07_xiaoman_her_weekend_009",
      "type": "line",
      "scene": "ts_c07_xiaoman_her_weekend_street",
      "speaker": "narrator",
      "character": null,
      "text": "于是第39天我睡足之后，独自去买了双鞋，又在路边吃了碗粉。傍晚她发来一张照片，是三个人摆在一起的饮料，没拍课堂，也没拿作品来问我意见。我回了一张鞋盒，她说颜色选得像小区保安。",
      "next": "tc_c07_xiaoman_her_weekend_010"
    },
    "tc_c07_xiaoman_her_weekend_010": {
      "id": "tc_c07_xiaoman_her_weekend_010",
      "type": "line",
      "scene": "ts_c07_xiaoman_her_weekend_street",
      "speaker": "wenwen",
      "character": null,
      "text": "“你说迟了，钱付了。”",
      "next": "tc_c07_xiaoman_her_weekend_011"
    },
    "tc_c07_xiaoman_her_weekend_011": {
      "id": "tc_c07_xiaoman_her_weekend_011",
      "type": "line",
      "scene": "ts_c07_xiaoman_her_weekend_street",
      "speaker": "xiaoman",
      "character": null,
      "text": "“那穿好点，保安也分帅不帅。”",
      "next": "tc_c07_xiaoman_her_weekend_012"
    },
    "tc_c07_xiaoman_her_weekend_012": {
      "id": "tc_c07_xiaoman_her_weekend_012",
      "type": "line",
      "scene": "ts_c07_xiaoman_her_weekend_street",
      "speaker": "narrator",
      "character": null,
      "text": "她说七点前能到附近，让我别等，愿意的话再一起走一段。我正好吃完，答应在街口见。那不是我们原来那整个下午，但她没有说对不起，我也没觉得她欠了我半天。",
      "next": "tc_c07_xiaoman_her_weekend_013"
    },
    "tc_c07_xiaoman_her_weekend_013": {
      "id": "tc_c07_xiaoman_her_weekend_013",
      "type": "line",
      "scene": "ts_c07_xiaoman_her_weekend_meeting",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "见面时，她和同事一路说笑过来，讲着我听不懂的术语。看见我，她很自然地介绍：“文文，我朋友。”",
      "next": "tc_c07_xiaoman_her_weekend_014"
    },
    "tc_c07_xiaoman_her_weekend_014": {
      "id": "tc_c07_xiaoman_her_weekend_014",
      "type": "line",
      "scene": "ts_c07_xiaoman_her_weekend_meeting",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "我听见那两个字，先松了口气，又有一点说不清的不满足。她的同事跟我打招呼，三个人约好下次练习时间，便各自离开。",
      "next": "tc_c07_xiaoman_her_weekend_015"
    },
    "tc_c07_xiaoman_her_weekend_015": {
      "id": "tc_c07_xiaoman_her_weekend_015",
      "type": "line",
      "scene": "ts_c07_xiaoman_her_weekend_meeting",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "小满转过头：“你刚才是不是在听我怎么介绍你？”",
      "next": "tc_c07_xiaoman_her_weekend_016"
    },
    "tc_c07_xiaoman_her_weekend_016": {
      "id": "tc_c07_xiaoman_her_weekend_016",
      "type": "line",
      "scene": "ts_c07_xiaoman_her_weekend_meeting",
      "speaker": "wenwen",
      "character": "xiaoman",
      "text": "“这么明显？”",
      "next": "tc_c07_xiaoman_her_weekend_017"
    },
    "tc_c07_xiaoman_her_weekend_017": {
      "id": "tc_c07_xiaoman_her_weekend_017",
      "type": "line",
      "scene": "ts_c07_xiaoman_her_weekend_meeting",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "“你连鞋尖都站正了。”",
      "next": "tc_c07_xiaoman_outing_gate"
    },
    "tc_c07_xiaoman_basketball_return_001": {
      "id": "tc_c07_xiaoman_basketball_return_001",
      "type": "line",
      "scene": "ts_c07_xiaoman_basketball_return",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "我们路过那家游戏厅，里面响起熟悉的倒计时。她停下来问要不要打第三局，我指着时间，说可以一局，再去吃点东西。",
      "next": "tc_c07_xiaoman_basketball_return_002"
    },
    "tc_c07_xiaoman_basketball_return_002": {
      "id": "tc_c07_xiaoman_basketball_return_002",
      "type": "line",
      "scene": "ts_c07_xiaoman_basketball_return",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "她今天没有喊不许让。我也没有暗暗替她算分，想着最后差几球能显得体面。最后屏幕停下，她赢了两分。",
      "next": "tc_c07_xiaoman_basketball_return_003"
    },
    "tc_c07_xiaoman_basketball_return_003": {
      "id": "tc_c07_xiaoman_basketball_return_003",
      "type": "line",
      "scene": "ts_c07_xiaoman_basketball_return",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "“你是不是看错自己的篮筐了？”她问。",
      "next": "tc_c07_xiaoman_basketball_return_004"
    },
    "tc_c07_xiaoman_basketball_return_004": {
      "id": "tc_c07_xiaoman_basketball_return_004",
      "type": "line",
      "scene": "ts_c07_xiaoman_basketball_return",
      "speaker": "wenwen",
      "character": "xiaoman",
      "text": "“没有，实力暂时就到这里。”",
      "next": "tc_c07_xiaoman_basketball_return_005"
    },
    "tc_c07_xiaoman_basketball_return_005": {
      "id": "tc_c07_xiaoman_basketball_return_005",
      "type": "line",
      "scene": "ts_c07_xiaoman_basketball_return",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "“那还来不来？”",
      "next": "tc_c07_xiaoman_basketball_return_006"
    },
    "tc_c07_xiaoman_basketball_return_006": {
      "id": "tc_c07_xiaoman_basketball_return_006",
      "type": "line",
      "scene": "ts_c07_xiaoman_basketball_return",
      "speaker": "wenwen",
      "character": "xiaoman",
      "text": "“来。但下回换个我比较会的。”",
      "next": "tc_c07_xiaoman_basketball_return_007"
    },
    "tc_c07_xiaoman_basketball_return_007": {
      "id": "tc_c07_xiaoman_basketball_return_007",
      "type": "line",
      "scene": "ts_c07_xiaoman_basketball_return",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "她伸出手，我这次看清了才击掌。手掌碰在一起，带着一点运动后的热。她没立刻缩回去，我也没去抓，就那样多停了一拍。",
      "next": "tc_c07_xiaoman_basketball_return_008"
    },
    "tc_c07_xiaoman_basketball_return_008": {
      "id": "tc_c07_xiaoman_basketball_return_008",
      "type": "line",
      "scene": "ts_c07_xiaoman_basketball_return",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "买水时，她付了自己的钱，又把我的那瓶推给我。",
      "next": "tc_c07_xiaoman_basketball_return_009"
    },
    "tc_c07_xiaoman_basketball_return_009": {
      "id": "tc_c07_xiaoman_basketball_return_009",
      "type": "line",
      "scene": "ts_c07_xiaoman_basketball_return",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "“别写账。约你出来不用欠一局也能约。”",
      "next": "tc_c07_xiaoman_crossroad_001"
    },
    "tc_c07_xiaoman_books_return_001": {
      "id": "tc_c07_xiaoman_books_return_001",
      "type": "line",
      "scene": "ts_c07_xiaoman_books_return",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "书摊今天没开。小满蹲在原来放书的位置，像看看人是不是真从石阶上消失了。",
      "next": "tc_c07_xiaoman_books_return_002"
    },
    "tc_c07_xiaoman_books_return_002": {
      "id": "tc_c07_xiaoman_books_return_002",
      "type": "line",
      "scene": "ts_c07_xiaoman_books_return",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "“纸鹤还在吗？”她问。",
      "next": "tc_c07_xiaoman_books_return_003"
    },
    "tc_c07_xiaoman_books_return_003": {
      "id": "tc_c07_xiaoman_books_return_003",
      "type": "line",
      "scene": "ts_c07_xiaoman_books_return",
      "speaker": "wenwen",
      "character": "xiaoman",
      "text": "“在抽屉里。翅膀压平了。”",
      "next": "tc_c07_xiaoman_books_return_004"
    },
    "tc_c07_xiaoman_books_return_004": {
      "id": "tc_c07_xiaoman_books_return_004",
      "type": "line",
      "scene": "ts_c07_xiaoman_books_return",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "“我那只是脖子歪了一点。”",
      "next": "tc_c07_xiaoman_books_return_005"
    },
    "tc_c07_xiaoman_books_return_005": {
      "id": "tc_c07_xiaoman_books_return_005",
      "type": "line",
      "scene": "ts_c07_xiaoman_books_return",
      "speaker": "wenwen",
      "character": "xiaoman",
      "text": "“你自己的还是我的？”",
      "next": "tc_c07_xiaoman_books_return_006"
    },
    "tc_c07_xiaoman_books_return_006": {
      "id": "tc_c07_xiaoman_books_return_006",
      "type": "line",
      "scene": "ts_c07_xiaoman_books_return",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "“你给我的。”",
      "next": "tc_c07_xiaoman_books_return_007"
    },
    "tc_c07_xiaoman_books_return_007": {
      "id": "tc_c07_xiaoman_books_return_007",
      "type": "line",
      "scene": "ts_c07_xiaoman_books_return",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "我本来以为她只是随口收下，听见她记得哪儿歪，胸口像被什么很轻地碰了一下。",
      "next": "tc_c07_xiaoman_books_return_008"
    },
    "tc_c07_xiaoman_books_return_008": {
      "id": "tc_c07_xiaoman_books_return_008",
      "type": "line",
      "scene": "ts_c07_xiaoman_books_return",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "我们从旁边小店买了两张彩纸，坐在干燥的台阶上。她打开手机里存的步骤，我先折错一角，又展开重来。这回我们没有交换。她折一只留给自己，我也留下自己的那只。",
      "next": "tc_c07_xiaoman_books_return_009"
    },
    "tc_c07_xiaoman_books_return_009": {
      "id": "tc_c07_xiaoman_books_return_009",
      "type": "line",
      "scene": "ts_c07_xiaoman_books_return",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "“那第一只怎么办？”我问。",
      "next": "tc_c07_xiaoman_books_return_010"
    },
    "tc_c07_xiaoman_books_return_010": {
      "id": "tc_c07_xiaoman_books_return_010",
      "type": "line",
      "scene": "ts_c07_xiaoman_books_return",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "“也留着啊。又不是修好了才能留。”",
      "next": "tc_c07_xiaoman_books_return_011"
    },
    "tc_c07_xiaoman_books_return_011": {
      "id": "tc_c07_xiaoman_books_return_011",
      "type": "line",
      "scene": "ts_c07_xiaoman_books_return",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "她把两边翅膀捋平，抬头看我手上那张已经有好几道错折痕的纸，没有伸手替我接过去。",
      "next": "tc_c07_xiaoman_crossroad_001"
    },
    "tc_c07_xiaoman_crossroad_001": {
      "id": "tc_c07_xiaoman_crossroad_001",
      "type": "line",
      "scene": "ts_c07_xiaoman_crossroad",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "离开的时候，她问我愿不愿意下次一起去看羽毛球，我说可以，但得提前知道时间。她“哦”了一声，低头在手机上记，没再用“你反正夜里上班”替我安排白天。",
      "next": "tc_c07_xiaoman_crossroad_002"
    },
    "tc_c07_xiaoman_crossroad_002": {
      "id": "tc_c07_xiaoman_crossroad_002",
      "type": "line",
      "scene": "ts_c07_xiaoman_crossroad",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "到岔路口，我还是问了那句刚才没问的：“你跟同事说我是朋友，想了多久？”",
      "next": "tc_c07_xiaoman_crossroad_003"
    },
    "tc_c07_xiaoman_crossroad_003": {
      "id": "tc_c07_xiaoman_crossroad_003",
      "type": "line",
      "scene": "ts_c07_xiaoman_crossroad",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "她脸上先露出一点笑，随即认真起来。",
      "next": "tc_c07_xiaoman_crossroad_004"
    },
    "tc_c07_xiaoman_crossroad_004": {
      "id": "tc_c07_xiaoman_crossroad_004",
      "type": "line",
      "scene": "ts_c07_xiaoman_crossroad",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "“现在不是吗？”",
      "next": "tc_c07_xiaoman_crossroad_005"
    },
    "tc_c07_xiaoman_crossroad_005": {
      "id": "tc_c07_xiaoman_crossroad_005",
      "type": "line",
      "scene": "ts_c07_xiaoman_crossroad",
      "speaker": "wenwen",
      "character": "xiaoman",
      "text": "“是。”",
      "next": "tc_c07_xiaoman_crossroad_006"
    },
    "tc_c07_xiaoman_crossroad_006": {
      "id": "tc_c07_xiaoman_crossroad_006",
      "type": "line",
      "scene": "ts_c07_xiaoman_crossroad",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "“那等要改的时候，我们自己先说好。”",
      "next": "tc_c07_xiaoman_crossroad_007"
    },
    "tc_c07_xiaoman_crossroad_007": {
      "id": "tc_c07_xiaoman_crossroad_007",
      "type": "line",
      "scene": "ts_c07_xiaoman_crossroad",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "她没有故意把话说得暧昧，讲完就挥手回去。我站在原地系松掉的鞋带，系了两次才系牢。",
      "next": "tc_c07_common_exit"
    },
    "tc_c07_xiaoman_outing_gate": {
      "id": "tc_c07_xiaoman_outing_gate",
      "type": "gate",
      "scene": "ts_c07_xiaoman_her_weekend",
      "cases": [
        {
          "flag": "xiaomanOuting",
          "value": "basketball",
          "next": "tc_c07_xiaoman_basketball_return_001"
        },
        {
          "flag": "xiaomanOuting",
          "value": "books",
          "next": "tc_c07_xiaoman_books_return_001"
        }
      ],
      "default": null,
      "exhaustive": true
    },
    "tc_c08_xiaoman_entry": {
      "id": "tc_c08_xiaoman_entry",
      "type": "line",
      "scene": "ts_c08_xiaoman_voice_call",
      "speaker": "narrator",
      "character": null,
      "text": "第52天，我和师匠谈了轮班的事。他说得先把现有同事的时间排开试试，不能我一张口就立刻换。我把试排的几天记在手机里，给小满看时，她把屏幕放大了一下。",
      "next": "tc_c08_xiaoman_voice_call_002"
    },
    "tc_c08_xiaoman_voice_call_002": {
      "id": "tc_c08_xiaoman_voice_call_002",
      "type": "line",
      "scene": "ts_c08_xiaoman_voice_call",
      "speaker": "narrator",
      "character": null,
      "text": "“先别庆祝。”她说，“你这几格字挤得跟蚂蚁开会一样。”",
      "next": "tc_c08_xiaoman_voice_call_003"
    },
    "tc_c08_xiaoman_voice_call_003": {
      "id": "tc_c08_xiaoman_voice_call_003",
      "type": "line",
      "scene": "ts_c08_xiaoman_voice_call",
      "speaker": "narrator",
      "character": null,
      "text": "第55天我休息，睡到下午，想带点吃的去见她。小满却在约好的时间前发来消息，说今天不想出门。",
      "next": "tc_c08_xiaoman_voice_call_004"
    },
    "tc_c08_xiaoman_voice_call_004": {
      "id": "tc_c08_xiaoman_voice_call_004",
      "type": "line",
      "scene": "ts_c08_xiaoman_voice_call",
      "speaker": "narrator",
      "character": null,
      "text": "我问是不是店里有事。她回：“没有。下班了，就是不想出门。”",
      "next": "tc_c08_xiaoman_voice_call_005"
    },
    "tc_c08_xiaoman_voice_call_005": {
      "id": "tc_c08_xiaoman_voice_call_005",
      "type": "line",
      "scene": "ts_c08_xiaoman_voice_call",
      "speaker": "narrator",
      "character": null,
      "text": "那一刻我竟然有点不知道怎么接。我以前总把见面当成从工作里抢出来的好事，既然没有工作，怎么还能不想。",
      "next": "tc_c08_xiaoman_voice_call_006"
    },
    "tc_c08_xiaoman_voice_call_006": {
      "id": "tc_c08_xiaoman_voice_call_006",
      "type": "line",
      "scene": "ts_c08_xiaoman_voice_call",
      "speaker": "narrator",
      "character": null,
      "text": "我看着输入框里那句“出去走走会好一点”，最后删了。",
      "next": "tc_c08_xiaoman_voice_call_007"
    },
    "tc_c08_xiaoman_voice_call_007": {
      "id": "tc_c08_xiaoman_voice_call_007",
      "type": "line",
      "scene": "ts_c08_xiaoman_voice_call",
      "speaker": "wenwen",
      "character": null,
      "text": "“那你在家。我去买晚饭，明天再聊。”",
      "next": "tc_c08_xiaoman_voice_call_008"
    },
    "tc_c08_xiaoman_voice_call_008": {
      "id": "tc_c08_xiaoman_voice_call_008",
      "type": "line",
      "scene": "ts_c08_xiaoman_voice_call",
      "speaker": "narrator",
      "character": null,
      "text": "她隔了很久打来语音，问我已经到哪儿。我说还没出门，正在找另一只袜子。",
      "next": "tc_c08_xiaoman_voice_call_009"
    },
    "tc_c08_xiaoman_voice_call_009": {
      "id": "tc_c08_xiaoman_voice_call_009",
      "type": "line",
      "scene": "ts_c08_xiaoman_voice_call",
      "speaker": "narrator",
      "character": null,
      "text": "“我今天练得很烦。”她说，“不是出了大事，就是一直不顺。回去还把水洒在桌上了。”",
      "next": "tc_c08_xiaoman_voice_call_010"
    },
    "tc_c08_xiaoman_voice_call_010": {
      "id": "tc_c08_xiaoman_voice_call_010",
      "type": "line",
      "scene": "ts_c08_xiaoman_voice_call",
      "speaker": "wenwen",
      "character": null,
      "text": "“本子呢？”",
      "next": "tc_c08_xiaoman_voice_call_011"
    },
    "tc_c08_xiaoman_voice_call_011": {
      "id": "tc_c08_xiaoman_voice_call_011",
      "type": "line",
      "scene": "ts_c08_xiaoman_voice_call",
      "speaker": "xiaoman",
      "character": null,
      "text": "“没湿。我先抢的本子。人就没抢，袖子全湿。”",
      "next": "tc_c08_xiaoman_voice_call_012"
    },
    "tc_c08_xiaoman_voice_call_012": {
      "id": "tc_c08_xiaoman_voice_call_012",
      "type": "line",
      "scene": "ts_c08_xiaoman_voice_call",
      "speaker": "narrator",
      "character": null,
      "text": "我没忍住笑。她也笑了一声，随后轻轻叹气。",
      "next": "tc_c08_xiaoman_voice_call_013"
    },
    "tc_c08_xiaoman_voice_call_013": {
      "id": "tc_c08_xiaoman_voice_call_013",
      "type": "line",
      "scene": "ts_c08_xiaoman_voice_call",
      "speaker": "xiaoman",
      "character": null,
      "text": "“你听见我说不想出门，是不是以为我不想见你？”",
      "next": "tc_c08_xiaoman_voice_call_014"
    },
    "tc_c08_xiaoman_voice_call_014": {
      "id": "tc_c08_xiaoman_voice_call_014",
      "type": "line",
      "scene": "ts_c08_xiaoman_voice_call",
      "speaker": "wenwen",
      "character": null,
      "text": "“有一小会儿。”",
      "next": "tc_c08_xiaoman_voice_call_015"
    },
    "tc_c08_xiaoman_voice_call_015": {
      "id": "tc_c08_xiaoman_voice_call_015",
      "type": "line",
      "scene": "ts_c08_xiaoman_voice_call",
      "speaker": "xiaoman",
      "character": null,
      "text": "“我刚才还在想，要不硬出去吧，别让你多想。可是我真的不想换衣服。”",
      "next": "tc_c08_xiaoman_voice_call_016"
    },
    "tc_c08_xiaoman_voice_call_016": {
      "id": "tc_c08_xiaoman_voice_call_016",
      "type": "line",
      "scene": "ts_c08_xiaoman_voice_call",
      "speaker": "wenwen",
      "character": null,
      "text": "“那不换。今天放过外套。”",
      "next": "tc_c08_xiaoman_voice_call_017"
    },
    "tc_c08_xiaoman_voice_call_017": {
      "id": "tc_c08_xiaoman_voice_call_017",
      "type": "line",
      "scene": "ts_c08_xiaoman_voice_call",
      "speaker": "narrator",
      "character": null,
      "text": "她问我吃什么，我说大概买份炒饭。她便让我要一份不那么干的，自己从冰箱里找能热的东西。电话没有一直连着。各自做事的时候，我们挂断了，吃饭时各发了一张照片，她的饭摆得比我的乱得多。",
      "next": "tc_c08_xiaoman_voice_call_018"
    },
    "tc_c08_xiaoman_voice_call_018": {
      "id": "tc_c08_xiaoman_voice_call_018",
      "type": "line",
      "scene": "ts_c08_xiaoman_voice_call",
      "speaker": "narrator",
      "character": null,
      "text": "“别点评摆盘。”她发来。",
      "next": "tc_c08_xiaoman_voice_call_019"
    },
    "tc_c08_xiaoman_voice_call_019": {
      "id": "tc_c08_xiaoman_voice_call_019",
      "type": "line",
      "scene": "ts_c08_xiaoman_voice_call",
      "speaker": "narrator",
      "character": null,
      "text": "我回复：“你这张能看清饭，我这张只拍到了袋子。”",
      "next": "tc_c08_xiaoman_badminton_001"
    },
    "tc_c08_xiaoman_badminton_001": {
      "id": "tc_c08_xiaoman_badminton_001",
      "type": "line",
      "scene": "ts_c08_xiaoman_badminton",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "我们后来真去看了羽毛球。不是比赛现场，只是熟人在球馆约着打，空位允许我们坐一会儿。小满看别人接球，自己也跟着抬手。我怕被她一肘扫中，往旁边挪了半个座位。",
      "next": "tc_c08_xiaoman_badminton_002"
    },
    "tc_c08_xiaoman_badminton_002": {
      "id": "tc_c08_xiaoman_badminton_002",
      "type": "line",
      "scene": "ts_c08_xiaoman_badminton",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "她见我挪，瞪了我一下，接着自己乐了。",
      "next": "tc_c08_xiaoman_badminton_003"
    },
    "tc_c08_xiaoman_badminton_003": {
      "id": "tc_c08_xiaoman_badminton_003",
      "type": "line",
      "scene": "ts_c08_xiaoman_badminton",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "“放心，我这边没拍。”",
      "next": "tc_c08_xiaoman_badminton_004"
    },
    "tc_c08_xiaoman_badminton_004": {
      "id": "tc_c08_xiaoman_badminton_004",
      "type": "line",
      "scene": "ts_c08_xiaoman_badminton",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "轮到我们上场，我们跟两位熟人凑了十分钟双打，我和小满一队。她发球还行，我接对面的球很差，球一次次落在我们中间，两个人互相喊“你的”，谁也没动。",
      "next": "tc_c08_xiaoman_badminton_005"
    },
    "tc_c08_xiaoman_badminton_005": {
      "id": "tc_c08_xiaoman_badminton_005",
      "type": "line",
      "scene": "ts_c08_xiaoman_badminton",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "最后她索性把球捡起来，对我说：“下次叫名字，别说你的。”",
      "next": "tc_c08_xiaoman_badminton_006"
    },
    "tc_c08_xiaoman_badminton_006": {
      "id": "tc_c08_xiaoman_badminton_006",
      "type": "line",
      "scene": "ts_c08_xiaoman_badminton",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "这一改，我们竟然连着打了四个来回。第五个她没接到，站在原地喘，汗把额前的短发贴住。她抬手要说再来，停了一下，又把球拍放低。",
      "next": "tc_c08_xiaoman_badminton_007"
    },
    "tc_c08_xiaoman_badminton_007": {
      "id": "tc_c08_xiaoman_badminton_007",
      "type": "line",
      "scene": "ts_c08_xiaoman_badminton",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "“今天够了。我腿软。”",
      "next": "tc_c08_xiaoman_badminton_008"
    },
    "tc_c08_xiaoman_badminton_008": {
      "id": "tc_c08_xiaoman_badminton_008",
      "type": "line",
      "scene": "ts_c08_xiaoman_badminton",
      "speaker": "wenwen",
      "character": "xiaoman",
      "text": "“我早就软了。”",
      "next": "tc_c08_xiaoman_badminton_009"
    },
    "tc_c08_xiaoman_badminton_009": {
      "id": "tc_c08_xiaoman_badminton_009",
      "type": "line",
      "scene": "ts_c08_xiaoman_badminton",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "她走过来用拍柄轻轻碰我的拍柄，像给两个很差的选手举行一个不太正式的颁奖。",
      "next": "tc_c08_xiaoman_badminton_010"
    },
    "tc_c08_xiaoman_badminton_010": {
      "id": "tc_c08_xiaoman_badminton_010",
      "type": "line",
      "scene": "ts_c08_xiaoman_badminton",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "坐回去时，她从包里拿了毛巾，分给我一张纸巾。我们各擦各的汗，她忽然说，第55天她很怕我会拿那次拒绝开玩笑，下一回见面说终于舍得出来了。",
      "next": "tc_c08_xiaoman_badminton_011"
    },
    "tc_c08_xiaoman_badminton_011": {
      "id": "tc_c08_xiaoman_badminton_011",
      "type": "line",
      "scene": "ts_c08_xiaoman_badminton",
      "speaker": "wenwen",
      "character": "xiaoman",
      "text": "“我又不是催你打卡。”",
      "next": "tc_c08_xiaoman_badminton_012"
    },
    "tc_c08_xiaoman_badminton_012": {
      "id": "tc_c08_xiaoman_badminton_012",
      "type": "line",
      "scene": "ts_c08_xiaoman_badminton",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "“你以前会说。”",
      "next": "tc_c08_xiaoman_badminton_013"
    },
    "tc_c08_xiaoman_badminton_013": {
      "id": "tc_c08_xiaoman_badminton_013",
      "type": "line",
      "scene": "ts_c08_xiaoman_badminton",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "我想了一下，承认她记得对。她没有继续数旧账，把水放在两个人中间。",
      "next": "tc_c08_xiaoman_badminton_014"
    },
    "tc_c08_xiaoman_badminton_014": {
      "id": "tc_c08_xiaoman_badminton_014",
      "type": "line",
      "scene": "ts_c08_xiaoman_badminton",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "“现在这样挺好。”",
      "next": "tc_c08_xiaoman_badminton_015"
    },
    "tc_c08_xiaoman_badminton_015": {
      "id": "tc_c08_xiaoman_badminton_015",
      "type": "line",
      "scene": "ts_c08_xiaoman_badminton",
      "speaker": "wenwen",
      "character": "xiaoman",
      "text": "“球技吗？”",
      "next": "tc_c08_xiaoman_badminton_016"
    },
    "tc_c08_xiaoman_badminton_016": {
      "id": "tc_c08_xiaoman_badminton_016",
      "type": "line",
      "scene": "ts_c08_xiaoman_badminton",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "她看了看场上飞得漂亮的球，又看看我，笑得肩膀直抖。",
      "next": "tc_c08_xiaoman_badminton_017"
    },
    "tc_c08_xiaoman_badminton_017": {
      "id": "tc_c08_xiaoman_badminton_017",
      "type": "line",
      "scene": "ts_c08_xiaoman_badminton",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "“这个我们别硬夸。”",
      "next": "tc_c08_xiaoman_badminton_018"
    },
    "tc_c08_xiaoman_badminton_018": {
      "id": "tc_c08_xiaoman_badminton_018",
      "type": "line",
      "scene": "ts_c08_xiaoman_badminton",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "散场前，她把借来的球拍还回去，仔细找齐了保护套。我在门口等，没催她；她出来时也没再装作脚下很有劲，一边揉小腿，一边问附近哪儿能坐着喝杯水。",
      "next": "tc_c08_common_exit"
    },
    "tc_c09_xiaoman_entry": {
      "id": "tc_c09_xiaoman_entry",
      "type": "line",
      "scene": "ts_c09_xiaoman_relationship",
      "speaker": "narrator",
      "character": null,
      "text": "第61天起，我和店里同事按照试过的办法轮班。夜班还在，但休息日终于能提前说准。我把第68天圈出来，小满也把自己的休息日换到那天。",
      "next": "tc_c09_xiaoman_relationship_002"
    },
    "tc_c09_xiaoman_relationship_002": {
      "id": "tc_c09_xiaoman_relationship_002",
      "type": "line",
      "scene": "ts_c09_xiaoman_relationship",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "我们去了城里一处小坡道。没有爬很远，走到能看见下面街道的位置就停。她从包里取出两个橘子，这回先尝自己的那一个，确认不酸，才把另一个递给我。",
      "next": "tc_c09_xiaoman_relationship_003"
    },
    "tc_c09_xiaoman_relationship_003": {
      "id": "tc_c09_xiaoman_relationship_003",
      "type": "line",
      "scene": "ts_c09_xiaoman_relationship",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "“经过本人验收。”",
      "next": "tc_c09_xiaoman_relationship_004"
    },
    "tc_c09_xiaoman_relationship_004": {
      "id": "tc_c09_xiaoman_relationship_004",
      "type": "line",
      "scene": "ts_c09_xiaoman_relationship",
      "speaker": "wenwen",
      "character": "xiaoman",
      "text": "“出了问题找谁？”",
      "next": "tc_c09_xiaoman_relationship_005"
    },
    "tc_c09_xiaoman_relationship_005": {
      "id": "tc_c09_xiaoman_relationship_005",
      "type": "line",
      "scene": "ts_c09_xiaoman_relationship",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "“找天气。反正别找我。”",
      "next": "tc_c09_xiaoman_relationship_006"
    },
    "tc_c09_xiaoman_relationship_006": {
      "id": "tc_c09_xiaoman_relationship_006",
      "type": "line",
      "scene": "ts_c09_xiaoman_relationship",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "坡边有一段矮墙，我们并肩靠着。她今天没有特意摆弄头发，脸侧一缕碎发一直翘着。我看了好几次，终于问能不能替她压下去。",
      "next": "tc_c09_xiaoman_relationship_007"
    },
    "tc_c09_xiaoman_relationship_007": {
      "id": "tc_c09_xiaoman_relationship_007",
      "type": "line",
      "scene": "ts_c09_xiaoman_relationship",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "“现在才问？”",
      "next": "tc_c09_xiaoman_relationship_008"
    },
    "tc_c09_xiaoman_relationship_008": {
      "id": "tc_c09_xiaoman_relationship_008",
      "type": "line",
      "scene": "ts_c09_xiaoman_relationship",
      "speaker": "wenwen",
      "character": "xiaoman",
      "text": "“上次没敢。”",
      "next": "tc_c09_xiaoman_relationship_009"
    },
    "tc_c09_xiaoman_relationship_009": {
      "id": "tc_c09_xiaoman_relationship_009",
      "type": "line",
      "scene": "ts_c09_xiaoman_relationship",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "她偏过一点头。我用指背碰了碰，那缕头发压下去又弹起来，她忍不住笑，自己拿发夹夹住。",
      "next": "tc_c09_xiaoman_relationship_010"
    },
    "tc_c09_xiaoman_relationship_010": {
      "id": "tc_c09_xiaoman_relationship_010",
      "type": "line",
      "scene": "ts_c09_xiaoman_relationship",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "“看，专业问题还是得交给工具。”",
      "next": "tc_c09_xiaoman_relationship_011"
    },
    "tc_c09_xiaoman_relationship_011": {
      "id": "tc_c09_xiaoman_relationship_011",
      "type": "line",
      "scene": "ts_c09_xiaoman_relationship",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "她把空出来的手插回衣袋，目光落在坡下缓慢移动的车上。",
      "next": "tc_c09_xiaoman_relationship_012"
    },
    "tc_c09_xiaoman_relationship_012": {
      "id": "tc_c09_xiaoman_relationship_012",
      "type": "line",
      "scene": "ts_c09_xiaoman_relationship",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "“文文，我前几天又碰见那个小时候的熟人了。他问我是不是老跟你出来玩。”",
      "next": "tc_c09_xiaoman_relationship_013"
    },
    "tc_c09_xiaoman_relationship_013": {
      "id": "tc_c09_xiaoman_relationship_013",
      "type": "line",
      "scene": "ts_c09_xiaoman_relationship",
      "speaker": "wenwen",
      "character": "xiaoman",
      "text": "“你怎么说？”",
      "next": "tc_c09_xiaoman_relationship_014"
    },
    "tc_c09_xiaoman_relationship_014": {
      "id": "tc_c09_xiaoman_relationship_014",
      "type": "line",
      "scene": "ts_c09_xiaoman_relationship",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "“说是，不过也有我自己玩的时候。”",
      "next": "tc_c09_xiaoman_relationship_015"
    },
    "tc_c09_xiaoman_relationship_015": {
      "id": "tc_c09_xiaoman_relationship_015",
      "type": "line",
      "scene": "ts_c09_xiaoman_relationship",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "她转过身看我，收起刚才的笑。",
      "next": "tc_c09_xiaoman_relationship_016"
    },
    "tc_c09_xiaoman_relationship_016": {
      "id": "tc_c09_xiaoman_relationship_016",
      "type": "line",
      "scene": "ts_c09_xiaoman_relationship",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "“他又问，咱俩到底什么关系。这回我没替你答。”",
      "next": "tc_c09_xiaoman_relationship_017"
    },
    "tc_c09_xiaoman_relationship_017": {
      "id": "tc_c09_xiaoman_relationship_017",
      "type": "line",
      "scene": "ts_c09_xiaoman_relationship",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "风从两个人之间穿过去。我知道她并不是在逼我配合一场早就写好的告白。她只是把这个问题放到我们面前，让我也把自己的话说清楚。",
      "next": "tc_c09_xiaoman_relationship_choice"
    },
    "tc_c09_xiaoman_dating_001": {
      "id": "tc_c09_xiaoman_dating_001",
      "type": "line",
      "scene": "ts_c09_xiaoman_dating",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "我把剥了一半的橘子放回袋里，擦了擦手。",
      "next": "tc_c09_xiaoman_dating_002"
    },
    "tc_c09_xiaoman_dating_002": {
      "id": "tc_c09_xiaoman_dating_002",
      "type": "line",
      "scene": "ts_c09_xiaoman_dating",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "“我想跟你交往。”我说，“不是因为从小认识，也不是因为你现在愿意陪我。我喜欢现在跟你见面的感觉，会等你消息，也会想下次去哪儿。”",
      "next": "tc_c09_xiaoman_dating_003"
    },
    "tc_c09_xiaoman_dating_003": {
      "id": "tc_c09_xiaoman_dating_003",
      "type": "line",
      "scene": "ts_c09_xiaoman_dating",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "她看着我，没有立刻笑。",
      "next": "tc_c09_xiaoman_dating_004"
    },
    "tc_c09_xiaoman_dating_004": {
      "id": "tc_c09_xiaoman_dating_004",
      "type": "line",
      "scene": "ts_c09_xiaoman_dating",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "“那我今天要是说还想想呢？”",
      "next": "tc_c09_xiaoman_dating_005"
    },
    "tc_c09_xiaoman_dating_005": {
      "id": "tc_c09_xiaoman_dating_005",
      "type": "line",
      "scene": "ts_c09_xiaoman_dating",
      "speaker": "wenwen",
      "character": "xiaoman",
      "text": "“你就想。我不拿这句话催你。”",
      "next": "tc_c09_xiaoman_dating_006"
    },
    "tc_c09_xiaoman_dating_006": {
      "id": "tc_c09_xiaoman_dating_006",
      "type": "line",
      "scene": "ts_c09_xiaoman_dating",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "她把衣袋里的手伸出来，摊在我面前。我愣了一下，她有点急了：“你不是刚擦过手吗？”",
      "next": "tc_c09_xiaoman_dating_007"
    },
    "tc_c09_xiaoman_dating_007": {
      "id": "tc_c09_xiaoman_dating_007",
      "type": "line",
      "scene": "ts_c09_xiaoman_dating",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "我握住她的手。她掌心有一点凉，指尖却收得很稳。",
      "next": "tc_c09_xiaoman_dating_008"
    },
    "tc_c09_xiaoman_dating_008": {
      "id": "tc_c09_xiaoman_dating_008",
      "type": "line",
      "scene": "ts_c09_xiaoman_dating",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "“我也想。”她说，“不用想那么久。只是想听你说完。”",
      "next": "tc_c09_xiaoman_dating_009"
    },
    "tc_c09_xiaoman_dating_009": {
      "id": "tc_c09_xiaoman_dating_009",
      "type": "line",
      "scene": "ts_c09_xiaoman_dating",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "我们原本说好在这里坐十分钟，最后站了半小时。她问我轮班后会不会突然很闲，我说不会，多出来的时间也得洗衣服、买东西、睡觉。",
      "next": "tc_c09_xiaoman_dating_010"
    },
    "tc_c09_xiaoman_dating_010": {
      "id": "tc_c09_xiaoman_dating_010",
      "type": "line",
      "scene": "ts_c09_xiaoman_dating",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "“那约会排在哪里？”",
      "next": "tc_c09_xiaoman_dating_011"
    },
    "tc_c09_xiaoman_dating_011": {
      "id": "tc_c09_xiaoman_dating_011",
      "type": "line",
      "scene": "ts_c09_xiaoman_dating",
      "speaker": "wenwen",
      "character": "xiaoman",
      "text": "“提前商量。你也有自己的事。”",
      "next": "tc_c09_xiaoman_dating_012"
    },
    "tc_c09_xiaoman_dating_012": {
      "id": "tc_c09_xiaoman_dating_012",
      "type": "line",
      "scene": "ts_c09_xiaoman_dating",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "她点点头，接着很认真地说，以后她说不想出门，也不代表不喜欢我；但若是已经答应，就会尽早讲，不让我出门了才知道。",
      "next": "tc_c09_xiaoman_dating_013"
    },
    "tc_c09_xiaoman_dating_013": {
      "id": "tc_c09_xiaoman_dating_013",
      "type": "line",
      "scene": "ts_c09_xiaoman_dating",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "我说好，然后问她下次要不要把那两位同事一起约出来吃饭。",
      "next": "tc_c09_xiaoman_dating_014"
    },
    "tc_c09_xiaoman_dating_014": {
      "id": "tc_c09_xiaoman_dating_014",
      "type": "line",
      "scene": "ts_c09_xiaoman_dating",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "“为什么？”",
      "next": "tc_c09_xiaoman_dating_015"
    },
    "tc_c09_xiaoman_dating_015": {
      "id": "tc_c09_xiaoman_dating_015",
      "type": "line",
      "scene": "ts_c09_xiaoman_dating",
      "speaker": "wenwen",
      "character": "xiaoman",
      "text": "“方便你更新一下介绍。”",
      "next": "tc_c09_xiaoman_dating_016"
    },
    "tc_c09_xiaoman_dating_016": {
      "id": "tc_c09_xiaoman_dating_016",
      "type": "line",
      "scene": "ts_c09_xiaoman_dating",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "她先笑，随后用另一只手把我的袖口拉平。",
      "next": "tc_c09_xiaoman_dating_017"
    },
    "tc_c09_xiaoman_dating_017": {
      "id": "tc_c09_xiaoman_dating_017",
      "type": "line",
      "scene": "ts_c09_xiaoman_dating",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "“这倒不用专门开会。我会说的。”",
      "next": "tc_c09_xiaoman_dating_018"
    },
    "tc_c09_xiaoman_dating_018": {
      "id": "tc_c09_xiaoman_dating_018",
      "type": "line",
      "scene": "ts_c09_xiaoman_dating",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "下坡时路滑，我们牵着手走得很慢。她平时总走在我半步前面，这次也没迁就成和我一样的步子，只在我落后时回头拉我一下。",
      "next": "tc_c09_xiaoman_dating_019"
    },
    "tc_c09_xiaoman_dating_019": {
      "id": "tc_c09_xiaoman_dating_019",
      "type": "line",
      "scene": "ts_c09_xiaoman_dating",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "我跟上去，听见她说：“别光顾着傻笑，看路。”",
      "next": "tc_c09_common_exit"
    },
    "tc_c09_xiaoman_friends_001": {
      "id": "tc_c09_xiaoman_friends_001",
      "type": "line",
      "scene": "ts_c09_xiaoman_friends",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "我停了一会儿，才把话说出来。",
      "next": "tc_c09_xiaoman_friends_002"
    },
    "tc_c09_xiaoman_friends_002": {
      "id": "tc_c09_xiaoman_friends_002",
      "type": "line",
      "scene": "ts_c09_xiaoman_friends",
      "speaker": "wenwen",
      "character": "xiaoman",
      "text": "“跟你出来，我很高兴。但我认真想过，还不能把这种高兴说成想交往。我想和你做朋友。”",
      "next": "tc_c09_xiaoman_friends_003"
    },
    "tc_c09_xiaoman_friends_003": {
      "id": "tc_c09_xiaoman_friends_003",
      "type": "line",
      "scene": "ts_c09_xiaoman_friends",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "她的眼睛移开了一点。刚才还滚在掌心里的橘子停住，指甲在橘皮上留下一个小印子。",
      "next": "tc_c09_xiaoman_friends_004"
    },
    "tc_c09_xiaoman_friends_004": {
      "id": "tc_c09_xiaoman_friends_004",
      "type": "line",
      "scene": "ts_c09_xiaoman_friends",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "“好。”她说。",
      "next": "tc_c09_xiaoman_friends_005"
    },
    "tc_c09_xiaoman_friends_005": {
      "id": "tc_c09_xiaoman_friends_005",
      "type": "line",
      "scene": "ts_c09_xiaoman_friends",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "我想继续解释，又怕自己一开口就像在安慰她。她看见我的神情，先吸了口气。",
      "next": "tc_c09_xiaoman_friends_006"
    },
    "tc_c09_xiaoman_friends_006": {
      "id": "tc_c09_xiaoman_friends_006",
      "type": "line",
      "scene": "ts_c09_xiaoman_friends",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "“你不用说我很好。我知道。”",
      "next": "tc_c09_xiaoman_friends_007"
    },
    "tc_c09_xiaoman_friends_007": {
      "id": "tc_c09_xiaoman_friends_007",
      "type": "line",
      "scene": "ts_c09_xiaoman_friends",
      "speaker": "wenwen",
      "character": "xiaoman",
      "text": "“嗯。”",
      "next": "tc_c09_xiaoman_friends_008"
    },
    "tc_c09_xiaoman_friends_008": {
      "id": "tc_c09_xiaoman_friends_008",
      "type": "line",
      "scene": "ts_c09_xiaoman_friends",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "她终于很轻地笑了一下，却不是刚才那种笑。",
      "next": "tc_c09_xiaoman_friends_009"
    },
    "tc_c09_xiaoman_friends_009": {
      "id": "tc_c09_xiaoman_friends_009",
      "type": "line",
      "scene": "ts_c09_xiaoman_friends",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "“我确实想过交往。你可能看出来了。听见这个，还是有点难过。”",
      "next": "tc_c09_xiaoman_friends_010"
    },
    "tc_c09_xiaoman_friends_010": {
      "id": "tc_c09_xiaoman_friends_010",
      "type": "line",
      "scene": "ts_c09_xiaoman_friends",
      "speaker": "wenwen",
      "character": "xiaoman",
      "text": "“对不起。”",
      "next": "tc_c09_xiaoman_friends_011"
    },
    "tc_c09_xiaoman_friends_011": {
      "id": "tc_c09_xiaoman_friends_011",
      "type": "line",
      "scene": "ts_c09_xiaoman_friends",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "“你没答应又反悔，不用为没喜欢上我道歉。就是最近先别这么密地约我了，我缓一缓。”",
      "next": "tc_c09_xiaoman_friends_012"
    },
    "tc_c09_xiaoman_friends_012": {
      "id": "tc_c09_xiaoman_friends_012",
      "type": "line",
      "scene": "ts_c09_xiaoman_friends",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "我点头，说由她决定什么时候再联系。她纠正我，朋友也不是只能她一个人主动。我可以发普通消息，她如果不想聊，会直说。",
      "next": "tc_c09_xiaoman_friends_013"
    },
    "tc_c09_xiaoman_friends_013": {
      "id": "tc_c09_xiaoman_friends_013",
      "type": "line",
      "scene": "ts_c09_xiaoman_friends_busstop",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "下坡时，我们隔了半步。到了公交站，她把多买的橘子留给我，说拿回去不方便，并非暗号。我接过来，也没有用握手或拥抱把分别演成什么特殊仪式。",
      "next": "tc_c09_xiaoman_friends_014"
    },
    "tc_c09_xiaoman_friends_014": {
      "id": "tc_c09_xiaoman_friends_014",
      "type": "line",
      "scene": "ts_c09_xiaoman_friends_day82",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "第82天，小满在群里问有没有人一起看球，我回了有空。她回给我球馆时间，见面时先笑我的鞋还是像保安。我们之间还有一点不自在，但能各说各的话，不需要假装那天下午没发生过。",
      "next": "tc_c09_xiaoman_friends_015"
    },
    "tc_c09_xiaoman_friends_015": {
      "id": "tc_c09_xiaoman_friends_015",
      "type": "line",
      "scene": "ts_c09_xiaoman_friends_day82_crossroad",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "散场时，她跟同事去吃饭，我回去准备上班。她在路口挥手，叫我别漏了带伞。",
      "next": "tc_c09_xiaoman_friends_016"
    },
    "tc_c09_xiaoman_friends_016": {
      "id": "tc_c09_xiaoman_friends_016",
      "type": "line",
      "scene": "ts_c09_xiaoman_friends_day82_crossroad",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "我检查了一下背包，回她：“带了。你也是。”",
      "next": "tc_c09_common_exit"
    },
    "tc_c09_xiaoman_relationship_choice": {
      "id": "tc_c09_xiaoman_relationship_choice",
      "type": "choice",
      "scene": "ts_c09_xiaoman_relationship",
      "character": "xiaoman",
      "text": "",
      "flag": "xiaomanRelationship",
      "choices": [
        {
          "label": "我想和你交往，不只是约着出去玩",
          "value": "dating",
          "next": "tc_c09_xiaoman_dating_001"
        },
        {
          "label": "我很珍惜你，但现在想把我们放在朋友的位置",
          "value": "friends",
          "next": "tc_c09_xiaoman_friends_001"
        }
      ]
    },
    "tc_c10_xiaoman_dating_001": {
      "id": "tc_c10_xiaoman_dating_001",
      "type": "line",
      "scene": "ts_c10_xiaoman_dating",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "两年后的一个下午，小满第一次让我给她剪刘海。",
      "next": "tc_c10_xiaoman_dating_002"
    },
    "tc_c10_xiaoman_dating_002": {
      "id": "tc_c10_xiaoman_dating_002",
      "type": "line",
      "scene": "ts_c10_xiaoman_dating",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "准确说，她只是故意把剪刀举给我，看我能紧张成什么样。我坐在她租住的房间里，手还没伸出去，她已经把剪刀收走，笑得差点坐到地上。",
      "next": "tc_c10_xiaoman_dating_003"
    },
    "tc_c10_xiaoman_dating_003": {
      "id": "tc_c10_xiaoman_dating_003",
      "type": "line",
      "scene": "ts_c10_xiaoman_dating",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "“谁敢让你真剪啊。”",
      "next": "tc_c10_xiaoman_dating_004"
    },
    "tc_c10_xiaoman_dating_004": {
      "id": "tc_c10_xiaoman_dating_004",
      "type": "line",
      "scene": "ts_c10_xiaoman_dating",
      "speaker": "wenwen",
      "character": "xiaoman",
      "text": "“你自己叫我来的。”",
      "next": "tc_c10_xiaoman_dating_005"
    },
    "tc_c10_xiaoman_dating_005": {
      "id": "tc_c10_xiaoman_dating_005",
      "type": "line",
      "scene": "ts_c10_xiaoman_dating",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "“叫你来吃饭，没叫你毁我。”",
      "next": "tc_c10_xiaoman_dating_006"
    },
    "tc_c10_xiaoman_dating_006": {
      "id": "tc_c10_xiaoman_dating_006",
      "type": "line",
      "scene": "ts_c10_xiaoman_dating",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "她现在能独立接待一些适合自己手艺的客人，遇到没把握的样式仍会去请教店里更有经验的人。刚开始会因为被客人点名而高兴一天，后来也遇见过沟通得不够好的时候。那本画着煎蛋发旋的本子还在，夹在新记录中间，纸边卷得很厉害。",
      "next": "tc_c10_xiaoman_dating_007"
    },
    "tc_c10_xiaoman_dating_007": {
      "id": "tc_c10_xiaoman_dating_007",
      "type": "line",
      "scene": "ts_c10_xiaoman_dating",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "我仍在网吧轮班。工资不会因为我们交往就忽然多出一截，换季的时候要合计衣服，买件稍贵的东西也会想几天。比起两年前，我总算不会一看见别人有空，就把自己该睡的那段时间全部送出去。",
      "next": "tc_c10_xiaoman_dating_008"
    },
    "tc_c10_xiaoman_dating_008": {
      "id": "tc_c10_xiaoman_dating_008",
      "type": "line",
      "scene": "ts_c10_xiaoman_dating",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "这天原定出去吃，她临时想在家煮面，提前问了我。我答应以后买了番茄，到了才发现她也买了，两大袋摆在桌上，红得很壮观。",
      "next": "tc_c10_xiaoman_dating_009"
    },
    "tc_c10_xiaoman_dating_009": {
      "id": "tc_c10_xiaoman_dating_009",
      "type": "line",
      "scene": "ts_c10_xiaoman_dating",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "“我们能吃完？”我问。",
      "next": "tc_c10_xiaoman_dating_010"
    },
    "tc_c10_xiaoman_dating_010": {
      "id": "tc_c10_xiaoman_dating_010",
      "type": "line",
      "scene": "ts_c10_xiaoman_dating",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "“你对我们有点信心。”",
      "next": "tc_c10_xiaoman_dating_011"
    },
    "tc_c10_xiaoman_dating_011": {
      "id": "tc_c10_xiaoman_dating_011",
      "type": "line",
      "scene": "ts_c10_xiaoman_dating",
      "speaker": "wenwen",
      "character": "xiaoman",
      "text": "“我对番茄比较有信心，它们能熬过我们。”",
      "next": "tc_c10_xiaoman_dating_012"
    },
    "tc_c10_xiaoman_dating_012": {
      "id": "tc_c10_xiaoman_dating_012",
      "type": "line",
      "scene": "ts_c10_xiaoman_dating",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "我们争论怎么分，最后留一袋各自带走。她切菜，我看水。面条下锅的时候，我还是习惯性问够不够两个人，她把碗摆出来，说先煮这些，不够再加，不用每次都算到毫无误差。",
      "next": "tc_c10_xiaoman_dating_013"
    },
    "tc_c10_xiaoman_dating_013": {
      "id": "tc_c10_xiaoman_dating_013",
      "type": "line",
      "scene": "ts_c10_xiaoman_dating",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "吃完，她窝在椅子里看手机，我把碗端去洗。她忽然叫我名字，问下个休息日能不能去打球。我说得看排班，她抬起脚轻轻碰我的小腿。",
      "next": "tc_c10_xiaoman_dating_014"
    },
    "tc_c10_xiaoman_dating_014": {
      "id": "tc_c10_xiaoman_dating_014",
      "type": "line",
      "scene": "ts_c10_xiaoman_dating",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "“我问有没有空，没有空可以换。”",
      "next": "tc_c10_xiaoman_dating_015"
    },
    "tc_c10_xiaoman_dating_015": {
      "id": "tc_c10_xiaoman_dating_015",
      "type": "line",
      "scene": "ts_c10_xiaoman_dating",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "我擦干手，把日历点开，找到了两人都能休息的下午。她确认后给同事回消息，只说那天约了男朋友，不多解释。",
      "next": "tc_c10_xiaoman_dating_016"
    },
    "tc_c10_xiaoman_dating_016": {
      "id": "tc_c10_xiaoman_dating_016",
      "type": "line",
      "scene": "ts_c10_xiaoman_dating",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "雨越来越密，我们原本还想下楼买点东西，后来决定明天再买。小满把头靠到我肩上，过了一会儿嫌姿势别扭，自己挪了挪，又拉着我往她那边坐。",
      "next": "tc_c10_xiaoman_dating_017"
    },
    "tc_c10_xiaoman_dating_017": {
      "id": "tc_c10_xiaoman_dating_017",
      "type": "line",
      "scene": "ts_c10_xiaoman_dating",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "“这回舒服了？”我问。",
      "next": "tc_c10_xiaoman_dating_018"
    },
    "tc_c10_xiaoman_dating_018": {
      "id": "tc_c10_xiaoman_dating_018",
      "type": "line",
      "scene": "ts_c10_xiaoman_dating",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "“差不多。”",
      "next": "tc_c10_xiaoman_dating_019"
    },
    "tc_c10_xiaoman_dating_019": {
      "id": "tc_c10_xiaoman_dating_019",
      "type": "line",
      "scene": "ts_c10_xiaoman_dating",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "我低头亲了一下她额角，她抬眼看我，伸手拽住我的衣领，补了一个很短的吻。",
      "next": "tc_c10_xiaoman_dating_020"
    },
    "tc_c10_xiaoman_dating_020": {
      "id": "tc_c10_xiaoman_dating_020",
      "type": "line",
      "scene": "ts_c10_xiaoman_dating",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "窗外有人跑过积水，屋里那两袋番茄还没有分。她靠回去，随口问：“明天晚上你几点回来？”",
      "next": "tc_c10_xiaoman_dating_021"
    },
    "tc_c10_xiaoman_dating_021": {
      "id": "tc_c10_xiaoman_dating_021",
      "type": "line",
      "scene": "ts_c10_xiaoman_dating",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "我告诉她具体的时间。她听清楚，点了点头，继续翻她的杂志。",
      "next": "tc_c10_xiaoman_end_dating"
    },
    "tc_c10_xiaoman_friends_001": {
      "id": "tc_c10_xiaoman_friends_001",
      "type": "line",
      "scene": "ts_c10_xiaoman_friends",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "两年后，小满在街边叫住我，第一句话是问我为什么还穿那双像保安的鞋。",
      "next": "tc_c10_xiaoman_friends_002"
    },
    "tc_c10_xiaoman_friends_002": {
      "id": "tc_c10_xiaoman_friends_002",
      "type": "line",
      "scene": "ts_c10_xiaoman_friends",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "我低头看了看。“不是同一双。”",
      "next": "tc_c10_xiaoman_friends_003"
    },
    "tc_c10_xiaoman_friends_003": {
      "id": "tc_c10_xiaoman_friends_003",
      "type": "line",
      "scene": "ts_c10_xiaoman_friends",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "“你还买第二双？”",
      "next": "tc_c10_xiaoman_friends_004"
    },
    "tc_c10_xiaoman_friends_004": {
      "id": "tc_c10_xiaoman_friends_004",
      "type": "line",
      "scene": "ts_c10_xiaoman_friends_noodles",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "她提着一个纸袋，刚替自己挑了件上衣。我们在旁边面馆坐下，各点各的。她下午还有事，我晚上轮到夜班，只够吃一顿不赶的饭。",
      "next": "tc_c10_xiaoman_friends_005"
    },
    "tc_c10_xiaoman_friends_005": {
      "id": "tc_c10_xiaoman_friends_005",
      "type": "line",
      "scene": "ts_c10_xiaoman_friends_noodles",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "我说要找时间剪头发，她让我先预约，别仗着熟就到店里往椅子上一坐。她如今能独立接一些客人，排到忙的时候也会漏看私人消息，回过神来再慢慢补。",
      "next": "tc_c10_xiaoman_friends_006"
    },
    "tc_c10_xiaoman_friends_006": {
      "id": "tc_c10_xiaoman_friends_006",
      "type": "line",
      "scene": "ts_c10_xiaoman_friends_noodles",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "“那朋友有什么待遇？”我问。",
      "next": "tc_c10_xiaoman_friends_007"
    },
    "tc_c10_xiaoman_friends_007": {
      "id": "tc_c10_xiaoman_friends_007",
      "type": "line",
      "scene": "ts_c10_xiaoman_friends_noodles",
      "speaker": "xiaoman",
      "character": "xiaoman",
      "text": "“剪歪了可以当面骂。”",
      "next": "tc_c10_xiaoman_friends_008"
    },
    "tc_c10_xiaoman_friends_008": {
      "id": "tc_c10_xiaoman_friends_008",
      "type": "line",
      "scene": "ts_c10_xiaoman_friends_noodles",
      "speaker": "wenwen",
      "character": "xiaoman",
      "text": "“别人不能？”",
      "next": "tc_c10_xiaoman_friends_009"
    },
    "tc_c10_xiaoman_friends_009": {
      "id": "tc_c10_xiaoman_friends_009",
      "type": "line",
      "scene": "ts_c10_xiaoman_friends_noodles",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "她想了一下：“别人也能。那你没有待遇。”",
      "next": "tc_c10_xiaoman_friends_010"
    },
    "tc_c10_xiaoman_friends_010": {
      "id": "tc_c10_xiaoman_friends_010",
      "type": "line",
      "scene": "ts_c10_xiaoman_friends_noodles",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "我们一起笑。店里上错一碗面，她举手叫老板，清清楚楚说自己没点那个，等换好才重新拿筷子。我想起很久以前，她怕扫兴，拿到不喜欢的东西也先接着，现在她依旧爱热闹，却不再什么都说行。",
      "next": "tc_c10_xiaoman_friends_011"
    },
    "tc_c10_xiaoman_friends_011": {
      "id": "tc_c10_xiaoman_friends_011",
      "type": "line",
      "scene": "ts_c10_xiaoman_friends_noodles",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "吃到一半，她手机响了。是一位同事问下午集合在哪儿，她开着免提回答了位置，没有避开我，也没有把我拉进那场聚会。我们各自有朋友，有时重叠，有时没有。",
      "next": "tc_c10_xiaoman_friends_012"
    },
    "tc_c10_xiaoman_friends_012": {
      "id": "tc_c10_xiaoman_friends_012",
      "type": "line",
      "scene": "ts_c10_xiaoman_friends_noodles",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "这些年，我们也不是始终联系得很密。最开始那阵子，她确实需要一点距离；后来她主动在群里约球，我们才慢慢找到合适的频率。我没拿她认真喜欢过我当笑话，她也不再用“都怪你”解释自己的空闲或心情。",
      "next": "tc_c10_xiaoman_friends_013"
    },
    "tc_c10_xiaoman_friends_013": {
      "id": "tc_c10_xiaoman_friends_013",
      "type": "line",
      "scene": "ts_c10_xiaoman_friends_street",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "离开时遇见一位旧相识，对方又叫了一声“小不点”。小满先抬头：“叫我小满就行。”",
      "next": "tc_c10_xiaoman_friends_014"
    },
    "tc_c10_xiaoman_friends_014": {
      "id": "tc_c10_xiaoman_friends_014",
      "type": "line",
      "scene": "ts_c10_xiaoman_friends_street",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "我站在旁边等她说完，没有抢着替她解释，也没顺着拿小时候的事逗乐。",
      "next": "tc_c10_xiaoman_friends_015"
    },
    "tc_c10_xiaoman_friends_015": {
      "id": "tc_c10_xiaoman_friends_015",
      "type": "line",
      "scene": "ts_c10_xiaoman_friends_street",
      "speaker": "narrator",
      "character": "xiaoman",
      "text": "到了路口，她把纸袋换手，问我下个月毛狼约的饭是否能去。我说先看排班，她点点头，让我到时候自己在群里回复。",
      "next": "tc_c10_xiaoman_friends_016"
    },
    "tc_c10_xiaoman_friends_016": {
      "id": "tc_c10_xiaoman_friends_016",
      "type": "line",
      "scene": "ts_c10_xiaoman_friends_homeward",
      "speaker": "narrator",
      "character": null,
      "text": "红灯变绿，她去对面和同事会合。我朝另一个方向走，没走多远收到一条消息，是她发来的预约时间。",
      "next": "tc_c10_xiaoman_friends_017"
    },
    "tc_c10_xiaoman_friends_017": {
      "id": "tc_c10_xiaoman_friends_017",
      "type": "line",
      "scene": "ts_c10_xiaoman_friends_homeward",
      "speaker": "xiaoman",
      "character": null,
      "text": "“头发的事。你自己选。”",
      "next": "tc_c10_xiaoman_friends_018"
    },
    "tc_c10_xiaoman_friends_018": {
      "id": "tc_c10_xiaoman_friends_018",
      "type": "line",
      "scene": "ts_c10_xiaoman_friends_homeward",
      "speaker": "narrator",
      "character": null,
      "text": "我挑了一个睡醒以后来得及的下午，回了确认。她发来一个很敷衍的点头表情，紧接着补一句：“这回洗干净头再来。”",
      "next": "tc_c10_xiaoman_friends_019"
    },
    "tc_c10_xiaoman_friends_019": {
      "id": "tc_c10_xiaoman_friends_019",
      "type": "line",
      "scene": "ts_c10_xiaoman_friends_homeward",
      "speaker": "narrator",
      "character": null,
      "text": "我看着手机笑了，把它收进兜里。雨还没落下来，回家的路不长，我决定慢慢走。",
      "next": "tc_c10_xiaoman_end_friends"
    },
    "tc_c10_xiaoman_entry": {
      "id": "tc_c10_xiaoman_entry",
      "type": "gate",
      "scene": "ts_c10_xiaoman_dating",
      "cases": [
        {
          "flag": "xiaomanRelationship",
          "value": "dating",
          "next": "tc_c10_xiaoman_dating_001"
        },
        {
          "flag": "xiaomanRelationship",
          "value": "friends",
          "next": "tc_c10_xiaoman_friends_001"
        }
      ],
      "default": null,
      "exhaustive": true
    },
    "tc_c10_xiaoman_end_dating": {
      "id": "tc_c10_xiaoman_end_dating",
      "type": "end",
      "scene": "ts_c10_xiaoman_dating",
      "character": "xiaoman",
      "title": "先问你有没有空",
      "text": "",
      "endingId": "tc_c10_xiaoman_end_dating"
    },
    "tc_c10_xiaoman_end_friends": {
      "id": "tc_c10_xiaoman_end_friends",
      "type": "end",
      "scene": "ts_c10_xiaoman_friends_homeward",
      "character": "xiaoman",
      "title": "叫我名字就行",
      "text": "",
      "endingId": "tc_c10_xiaoman_end_friends"
    },
    "tc_c03_zhouzhi_entry": {
      "id": "tc_c03_zhouzhi_entry",
      "type": "line",
      "scene": "ts_c03_zhouzhi_umbrella",
      "speaker": "narrator",
      "character": null,
      "text": "周栀发消息的时候，我正把睡歪的领口翻回来。",
      "next": "tc_c03_zhouzhi_umbrella_002"
    },
    "tc_c03_zhouzhi_umbrella_002": {
      "id": "tc_c03_zhouzhi_umbrella_002",
      "type": "line",
      "scene": "ts_c03_zhouzhi_umbrella",
      "speaker": "zhouzhi",
      "character": null,
      "text": "“醒了没？我在回声前面，要去买把伞。有空走一段？”",
      "next": "tc_c03_zhouzhi_umbrella_003"
    },
    "tc_c03_zhouzhi_umbrella_003": {
      "id": "tc_c03_zhouzhi_umbrella_003",
      "type": "line",
      "scene": "ts_c03_zhouzhi_umbrella_meeting",
      "speaker": "narrator",
      "character": "zhouzhi",
      "text": "我回了有空，出门才发现雨已经停了。她站在街边，把一把折断一根伞骨的伞举给我看，像举着某种失败的战利品。",
      "next": "tc_c03_zhouzhi_umbrella_004"
    },
    "tc_c03_zhouzhi_umbrella_004": {
      "id": "tc_c03_zhouzhi_umbrella_004",
      "type": "line",
      "scene": "ts_c03_zhouzhi_umbrella_meeting",
      "speaker": "zhouzhi",
      "character": "zhouzhi",
      "text": "“撑开像有一只翅膀，要不要？”",
      "next": "tc_c03_zhouzhi_umbrella_005"
    },
    "tc_c03_zhouzhi_umbrella_005": {
      "id": "tc_c03_zhouzhi_umbrella_005",
      "type": "line",
      "scene": "ts_c03_zhouzhi_umbrella_meeting",
      "speaker": "wenwen",
      "character": "zhouzhi",
      "text": "“能飞吗？”",
      "next": "tc_c03_zhouzhi_umbrella_006"
    },
    "tc_c03_zhouzhi_umbrella_006": {
      "id": "tc_c03_zhouzhi_umbrella_006",
      "type": "line",
      "scene": "ts_c03_zhouzhi_umbrella_meeting",
      "speaker": "zhouzhi",
      "character": "zhouzhi",
      "text": "“看风够不够大。飞走了不给你退。”",
      "next": "tc_c03_zhouzhi_umbrella_007"
    },
    "tc_c03_zhouzhi_umbrella_007": {
      "id": "tc_c03_zhouzhi_umbrella_007",
      "type": "line",
      "scene": "ts_c03_zhouzhi_umbrella_meeting",
      "speaker": "narrator",
      "character": "zhouzhi",
      "text": "我们从回声门口走过，没有进去。周栀的青色衬衫袖口松松挽着，手里只拿手机和旧伞。我问她几点上班，她告诉我时间，又问我是不是九点多要去网吧。",
      "next": "tc_c03_zhouzhi_umbrella_008"
    },
    "tc_c03_zhouzhi_umbrella_008": {
      "id": "tc_c03_zhouzhi_umbrella_008",
      "type": "line",
      "scene": "ts_c03_zhouzhi_umbrella_umbrella_shop",
      "speaker": "narrator",
      "character": "zhouzhi",
      "text": "我说是，但现在不赶。她便慢下来，先在小店门口挑伞。",
      "next": "tc_c03_zhouzhi_umbrella_009"
    },
    "tc_c03_zhouzhi_umbrella_009": {
      "id": "tc_c03_zhouzhi_umbrella_009",
      "type": "line",
      "scene": "ts_c03_zhouzhi_umbrella_umbrella_shop",
      "speaker": "narrator",
      "character": "zhouzhi",
      "text": "我看中一把很大的，说两个人也不怕淋。她却挑了把短柄的，撑开试了两次，合上放在手心里掂。",
      "next": "tc_c03_zhouzhi_umbrella_010"
    },
    "tc_c03_zhouzhi_umbrella_010": {
      "id": "tc_c03_zhouzhi_umbrella_010",
      "type": "line",
      "scene": "ts_c03_zhouzhi_umbrella_umbrella_shop",
      "speaker": "zhouzhi",
      "character": "zhouzhi",
      "text": "“我的包得装得下。”",
      "next": "tc_c03_zhouzhi_umbrella_011"
    },
    "tc_c03_zhouzhi_umbrella_011": {
      "id": "tc_c03_zhouzhi_umbrella_011",
      "type": "line",
      "scene": "ts_c03_zhouzhi_umbrella_umbrella_shop",
      "speaker": "narrator",
      "character": "zhouzhi",
      "text": "我这才发现，刚才那句话说得仿佛她买伞的主要用途是给我遮雨。她付钱时回头看了我一眼，嘴角有一点笑，没有接着逗。",
      "next": "tc_c03_zhouzhi_umbrella_012"
    },
    "tc_c03_zhouzhi_umbrella_012": {
      "id": "tc_c03_zhouzhi_umbrella_012",
      "type": "line",
      "scene": "ts_c03_zhouzhi_umbrella_potstickers",
      "speaker": "narrator",
      "character": "zhouzhi",
      "text": "路边的锅贴刚出锅。她问我要不要吃，我说晚饭还早，她说自己就是饿了，不用等一个特别正式的时间。",
      "next": "tc_c03_zhouzhi_umbrella_013"
    },
    "tc_c03_zhouzhi_umbrella_013": {
      "id": "tc_c03_zhouzhi_umbrella_013",
      "type": "line",
      "scene": "ts_c03_zhouzhi_umbrella_potstickers",
      "speaker": "narrator",
      "character": "zhouzhi",
      "text": "我们在小店外站着吃。她咬了一口，烫得把纸盒端远，眯着眼睛慢慢吹。我赶紧问怎么了，她抬手让我等，咽下去以后才说：“我在吃东西，没生气。”",
      "next": "tc_c03_zhouzhi_umbrella_014"
    },
    "tc_c03_zhouzhi_umbrella_014": {
      "id": "tc_c03_zhouzhi_umbrella_014",
      "type": "line",
      "scene": "ts_c03_zhouzhi_umbrella_potstickers",
      "speaker": "wenwen",
      "character": "zhouzhi",
      "text": "“我哪说你生气了？”",
      "next": "tc_c03_zhouzhi_umbrella_015"
    },
    "tc_c03_zhouzhi_umbrella_015": {
      "id": "tc_c03_zhouzhi_umbrella_015",
      "type": "line",
      "scene": "ts_c03_zhouzhi_umbrella_potstickers",
      "speaker": "zhouzhi",
      "character": "zhouzhi",
      "text": "“你那个表情像在想，刚才哪句话又说错了。”",
      "next": "tc_c03_zhouzhi_umbrella_016"
    },
    "tc_c03_zhouzhi_umbrella_016": {
      "id": "tc_c03_zhouzhi_umbrella_016",
      "type": "line",
      "scene": "ts_c03_zhouzhi_umbrella_potstickers",
      "speaker": "narrator",
      "character": "zhouzhi",
      "text": "我笑了。她把纸盒转过来，让我挑旁边没那么烫的。",
      "next": "tc_c03_zhouzhi_umbrella_017"
    },
    "tc_c03_zhouzhi_umbrella_017": {
      "id": "tc_c03_zhouzhi_umbrella_017",
      "type": "line",
      "scene": "ts_c03_zhouzhi_umbrella_potstickers",
      "speaker": "zhouzhi",
      "character": "zhouzhi",
      "text": "“我工作的时候话不少。下班偶尔不接话，你别急着给我找话题。我可能只是饿，也可能没想到。”",
      "next": "tc_c03_zhouzhi_umbrella_018"
    },
    "tc_c03_zhouzhi_umbrella_018": {
      "id": "tc_c03_zhouzhi_umbrella_018",
      "type": "line",
      "scene": "ts_c03_zhouzhi_umbrella_potstickers",
      "speaker": "wenwen",
      "character": "zhouzhi",
      "text": "“那我也可以不找？”",
      "next": "tc_c03_zhouzhi_umbrella_019"
    },
    "tc_c03_zhouzhi_umbrella_019": {
      "id": "tc_c03_zhouzhi_umbrella_019",
      "type": "line",
      "scene": "ts_c03_zhouzhi_umbrella_potstickers",
      "speaker": "zhouzhi",
      "character": "zhouzhi",
      "text": "“可以啊。现在你不就挺安静，锅贴又没少吃。”",
      "next": "tc_c03_zhouzhi_umbrella_020"
    },
    "tc_c03_zhouzhi_umbrella_020": {
      "id": "tc_c03_zhouzhi_umbrella_020",
      "type": "line",
      "scene": "ts_c03_zhouzhi_umbrella_street",
      "speaker": "narrator",
      "character": "zhouzhi",
      "text": "她吃完最后一个，认真把盒子扣好，找到了垃圾桶才扔。走回街口的时候，她先打开新伞，挡住突然落下来的几滴雨。我从自己的包里拿出伞，两把伞边轻轻碰了一下。",
      "next": "tc_c03_zhouzhi_umbrella_021"
    },
    "tc_c03_zhouzhi_umbrella_021": {
      "id": "tc_c03_zhouzhi_umbrella_021",
      "type": "line",
      "scene": "ts_c03_zhouzhi_umbrella_street",
      "speaker": "narrator",
      "character": "zhouzhi",
      "text": "周栀把自己的往旁边让，让出够我们并排走的距离。",
      "next": "tc_c03_zhouzhi_umbrella_022"
    },
    "tc_c03_zhouzhi_umbrella_022": {
      "id": "tc_c03_zhouzhi_umbrella_022",
      "type": "line",
      "scene": "ts_c03_zhouzhi_umbrella_street",
      "speaker": "narrator",
      "character": "zhouzhi",
      "text": "“这样也挺好。”她说，“谁也不用歪着肩膀。”",
      "next": "tc_c03_zhouzhi_bookstore_001"
    },
    "tc_c03_zhouzhi_bookstore_001": {
      "id": "tc_c03_zhouzhi_bookstore_001",
      "type": "line",
      "scene": "ts_c03_zhouzhi_bookstore",
      "speaker": "narrator",
      "character": "zhouzhi",
      "text": "第18天我休班，上午睡够，下午和周栀在商场碰面。她今天也不用上班，说想找个有椅子的地方闲着，不想总在吃饭的路上见我。",
      "next": "tc_c03_zhouzhi_bookstore_002"
    },
    "tc_c03_zhouzhi_bookstore_002": {
      "id": "tc_c03_zhouzhi_bookstore_002",
      "type": "line",
      "scene": "ts_c03_zhouzhi_bookstore",
      "speaker": "narrator",
      "character": "zhouzhi",
      "text": "我们在书店靠窗的位置坐下，各拿了一本书。她选的是一本轻薄的旅行随笔，翻了十几页，忽然合上。",
      "next": "tc_c03_zhouzhi_bookstore_003"
    },
    "tc_c03_zhouzhi_bookstore_003": {
      "id": "tc_c03_zhouzhi_bookstore_003",
      "type": "line",
      "scene": "ts_c03_zhouzhi_bookstore",
      "speaker": "zhouzhi",
      "character": "zhouzhi",
      "text": "“这人怎么每到一个地方都能遇见人生导师？”",
      "next": "tc_c03_zhouzhi_bookstore_004"
    },
    "tc_c03_zhouzhi_bookstore_004": {
      "id": "tc_c03_zhouzhi_bookstore_004",
      "type": "line",
      "scene": "ts_c03_zhouzhi_bookstore",
      "speaker": "narrator",
      "character": "zhouzhi",
      "text": "我把书凑过去看。页边写着一个很长的感悟，她指着前面那碗面，说自己若遇见同样的情况，只想问能不能少加一点香菜。",
      "next": "tc_c03_zhouzhi_bookstore_005"
    },
    "tc_c03_zhouzhi_bookstore_005": {
      "id": "tc_c03_zhouzhi_bookstore_005",
      "type": "line",
      "scene": "ts_c03_zhouzhi_bookstore",
      "speaker": "wenwen",
      "character": "zhouzhi",
      "text": "“可能下一页就问了。”",
      "next": "tc_c03_zhouzhi_bookstore_006"
    },
    "tc_c03_zhouzhi_bookstore_006": {
      "id": "tc_c03_zhouzhi_bookstore_006",
      "type": "line",
      "scene": "ts_c03_zhouzhi_bookstore",
      "speaker": "narrator",
      "character": "zhouzhi",
      "text": "她翻过去，发现又是满满一页抒情，抬眼看我。我们都不敢笑出声，只好各自端水喝。",
      "next": "tc_c03_zhouzhi_bookstore_007"
    },
    "tc_c03_zhouzhi_bookstore_007": {
      "id": "tc_c03_zhouzhi_bookstore_007",
      "type": "line",
      "scene": "ts_c03_zhouzhi_bookstore",
      "speaker": "narrator",
      "character": "zhouzhi",
      "text": "后来我讲起游戏队的一件糗事。平时毛狼一讲，谁都会笑，轮到我讲，前因后果绕得太远，自己都忘了最开始想讲什么。周栀安静听完，问了一句：“所以，你们最后进错房间了？”",
      "next": "tc_c03_zhouzhi_bookstore_008"
    },
    "tc_c03_zhouzhi_bookstore_008": {
      "id": "tc_c03_zhouzhi_bookstore_008",
      "type": "line",
      "scene": "ts_c03_zhouzhi_bookstore",
      "speaker": "wenwen",
      "character": "zhouzhi",
      "text": "“对。”",
      "next": "tc_c03_zhouzhi_bookstore_009"
    },
    "tc_c03_zhouzhi_bookstore_009": {
      "id": "tc_c03_zhouzhi_bookstore_009",
      "type": "line",
      "scene": "ts_c03_zhouzhi_bookstore",
      "speaker": "zhouzhi",
      "character": "zhouzhi",
      "text": "“你可以从这句开始。”",
      "next": "tc_c03_zhouzhi_bookstore_010"
    },
    "tc_c03_zhouzhi_bookstore_010": {
      "id": "tc_c03_zhouzhi_bookstore_010",
      "type": "line",
      "scene": "ts_c03_zhouzhi_bookstore",
      "speaker": "narrator",
      "character": "zhouzhi",
      "text": "我捂住脸。她笑起来，笑的是我捂脸的样子，不是那件已经被我讲坏的事。",
      "next": "tc_c03_zhouzhi_bookstore_011"
    },
    "tc_c03_zhouzhi_bookstore_011": {
      "id": "tc_c03_zhouzhi_bookstore_011",
      "type": "line",
      "scene": "ts_c03_zhouzhi_bookstore",
      "speaker": "narrator",
      "character": "zhouzhi",
      "text": "“我还以为你会假装好笑。”我说。",
      "next": "tc_c03_zhouzhi_bookstore_012"
    },
    "tc_c03_zhouzhi_bookstore_012": {
      "id": "tc_c03_zhouzhi_bookstore_012",
      "type": "line",
      "scene": "ts_c03_zhouzhi_bookstore",
      "speaker": "zhouzhi",
      "character": "zhouzhi",
      "text": "“工作上有时要接一句。现在又没人在旁边看我们热不热闹。”",
      "next": "tc_c03_zhouzhi_bookstore_013"
    },
    "tc_c03_zhouzhi_bookstore_013": {
      "id": "tc_c03_zhouzhi_bookstore_013",
      "type": "line",
      "scene": "ts_c03_zhouzhi_bookstore",
      "speaker": "narrator",
      "character": "zhouzhi",
      "text": "她把书放回去，回来时站在我身旁，指着窗外一块颜色很亮的招牌。",
      "next": "tc_c03_zhouzhi_bookstore_014"
    },
    "tc_c03_zhouzhi_bookstore_014": {
      "id": "tc_c03_zhouzhi_bookstore_014",
      "type": "line",
      "scene": "ts_c03_zhouzhi_bookstore",
      "speaker": "zhouzhi",
      "character": "zhouzhi",
      "text": "“那个倒好笑。上次掉了一个字，意思完全变了。”",
      "next": "tc_c03_zhouzhi_bookstore_015"
    },
    "tc_c03_zhouzhi_bookstore_015": {
      "id": "tc_c03_zhouzhi_bookstore_015",
      "type": "line",
      "scene": "ts_c03_zhouzhi_bookstore",
      "speaker": "narrator",
      "character": "zhouzhi",
      "text": "这次她讲得很短，我一下就笑了。她看着我，像确认我不是在礼貌配合，接着才坐下。",
      "next": "tc_c03_zhouzhi_bookstore_016"
    },
    "tc_c03_zhouzhi_bookstore_016": {
      "id": "tc_c03_zhouzhi_bookstore_016",
      "type": "line",
      "scene": "ts_c03_zhouzhi_bookstore_drinks",
      "speaker": "narrator",
      "character": "zhouzhi",
      "text": "傍晚我们各点了一杯热饮。我的那杯甜得发腻，她问我怎么不换，我说已经喝了，凑合。她把自己杯子推过一点，问我想不想尝一口，又很明确地说：“只是尝，不用换。我的我也想喝。”",
      "next": "tc_c03_zhouzhi_bookstore_017"
    },
    "tc_c03_zhouzhi_bookstore_017": {
      "id": "tc_c03_zhouzhi_bookstore_017",
      "type": "line",
      "scene": "ts_c03_zhouzhi_bookstore_drinks",
      "speaker": "narrator",
      "character": "zhouzhi",
      "text": "我尝了一口，比我的清淡。她看我皱眉，立刻把杯子拿回去。",
      "next": "tc_c03_zhouzhi_bookstore_018"
    },
    "tc_c03_zhouzhi_bookstore_018": {
      "id": "tc_c03_zhouzhi_bookstore_018",
      "type": "line",
      "scene": "ts_c03_zhouzhi_bookstore_drinks",
      "speaker": "zhouzhi",
      "character": "zhouzhi",
      "text": "“你不喜欢。”",
      "next": "tc_c03_zhouzhi_bookstore_019"
    },
    "tc_c03_zhouzhi_bookstore_019": {
      "id": "tc_c03_zhouzhi_bookstore_019",
      "type": "line",
      "scene": "ts_c03_zhouzhi_bookstore_drinks",
      "speaker": "wenwen",
      "character": "zhouzhi",
      "text": "“也不是难喝。”",
      "next": "tc_c03_zhouzhi_bookstore_020"
    },
    "tc_c03_zhouzhi_bookstore_020": {
      "id": "tc_c03_zhouzhi_bookstore_020",
      "type": "line",
      "scene": "ts_c03_zhouzhi_bookstore_drinks",
      "speaker": "zhouzhi",
      "character": "zhouzhi",
      "text": "“行了，给你留点余地。”",
      "next": "tc_c03_zhouzhi_bookstore_021"
    },
    "tc_c03_zhouzhi_bookstore_021": {
      "id": "tc_c03_zhouzhi_bookstore_021",
      "type": "line",
      "scene": "ts_c03_zhouzhi_bookstore_drinks",
      "speaker": "narrator",
      "character": "zhouzhi",
      "text": "我们坐到窗外的亮光渐渐暗下来。起身时，她看了眼时间，说今天真好，没赶场，没有哪桌突然要多一个人。",
      "next": "tc_c03_zhouzhi_invitation_001"
    },
    "tc_c03_zhouzhi_invitation_001": {
      "id": "tc_c03_zhouzhi_invitation_001",
      "type": "line",
      "scene": "ts_c03_zhouzhi_invitation",
      "speaker": "narrator",
      "character": "zhouzhi",
      "text": "我们在街口的小面馆碰面。周栀没带朋友，我也没喊毛狼。面馆里人少，她把菜单推给我，自己熟门熟路地点了碗汤面，辣椒单放。",
      "next": "tc_c03_zhouzhi_invitation_002"
    },
    "tc_c03_zhouzhi_invitation_002": {
      "id": "tc_c03_zhouzhi_invitation_002",
      "type": "line",
      "scene": "ts_c03_zhouzhi_invitation",
      "speaker": "narrator",
      "character": "zhouzhi",
      "text": "我问她夜宵摊的事，她说还在和朋友商量，许多事情光在嘴上想都很顺，真要腾出时间就没那么容易。",
      "next": "tc_c03_zhouzhi_invitation_003"
    },
    "tc_c03_zhouzhi_invitation_003": {
      "id": "tc_c03_zhouzhi_invitation_003",
      "type": "line",
      "scene": "ts_c03_zhouzhi_invitation",
      "speaker": "zhouzhi",
      "character": "zhouzhi",
      "text": "“她炒，我备料。上回我把后用的先切了，放着放着就蔫了。她打开盒子看了我半天，问这是给谁准备的盆栽。”",
      "next": "tc_c03_zhouzhi_invitation_004"
    },
    "tc_c03_zhouzhi_invitation_004": {
      "id": "tc_c03_zhouzhi_invitation_004",
      "type": "line",
      "scene": "ts_c03_zhouzhi_invitation",
      "speaker": "narrator",
      "character": "zhouzhi",
      "text": "我没忍住笑，她也笑，却没趁机把手机里的计划拿出来让我看。",
      "next": "tc_c03_zhouzhi_invitation_005"
    },
    "tc_c03_zhouzhi_invitation_005": {
      "id": "tc_c03_zhouzhi_invitation_005",
      "type": "line",
      "scene": "ts_c03_zhouzhi_invitation",
      "speaker": "zhouzhi",
      "character": "zhouzhi",
      "text": "“现在还不叫摊，叫我们俩很想吃热饭。”",
      "next": "tc_c03_zhouzhi_invitation_006"
    },
    "tc_c03_zhouzhi_invitation_006": {
      "id": "tc_c03_zhouzhi_invitation_006",
      "type": "line",
      "scene": "ts_c03_zhouzhi_invitation",
      "speaker": "wenwen",
      "character": "zhouzhi",
      "text": "“需要我帮什么吗？”",
      "next": "tc_c03_zhouzhi_invitation_007"
    },
    "tc_c03_zhouzhi_invitation_007": {
      "id": "tc_c03_zhouzhi_invitation_007",
      "type": "line",
      "scene": "ts_c03_zhouzhi_invitation",
      "speaker": "narrator",
      "character": "zhouzhi",
      "text": "她放下筷子，抬头看我。",
      "next": "tc_c03_zhouzhi_invitation_008"
    },
    "tc_c03_zhouzhi_invitation_008": {
      "id": "tc_c03_zhouzhi_invitation_008",
      "type": "line",
      "scene": "ts_c03_zhouzhi_invitation",
      "speaker": "zhouzhi",
      "character": "zhouzhi",
      "text": "“今天不用。”",
      "next": "tc_c03_zhouzhi_invitation_009"
    },
    "tc_c03_zhouzhi_invitation_009": {
      "id": "tc_c03_zhouzhi_invitation_009",
      "type": "line",
      "scene": "ts_c03_zhouzhi_invitation",
      "speaker": "narrator",
      "character": "zhouzhi",
      "text": "我刚想说有事随时叫，她又接了一句：“以后真有需要，我会问。但我叫你出来，也不一定是缺人帮忙。”",
      "next": "tc_c03_zhouzhi_invitation_010"
    },
    "tc_c03_zhouzhi_invitation_010": {
      "id": "tc_c03_zhouzhi_invitation_010",
      "type": "line",
      "scene": "ts_c03_zhouzhi_invitation",
      "speaker": "narrator",
      "character": "zhouzhi",
      "text": "我摸了摸鼻子，开始认真看自己的面。她给自己加了辣椒，尝一口，又加一点，没有把勺子递到我这边。",
      "next": "tc_c03_zhouzhi_invitation_011"
    },
    "tc_c03_zhouzhi_invitation_011": {
      "id": "tc_c03_zhouzhi_invitation_011",
      "type": "line",
      "scene": "ts_c03_zhouzhi_invitation",
      "speaker": "narrator",
      "character": "zhouzhi",
      "text": "“你今天是不是想叫我出来？”我问。",
      "next": "tc_c03_zhouzhi_invitation_012"
    },
    "tc_c03_zhouzhi_invitation_012": {
      "id": "tc_c03_zhouzhi_invitation_012",
      "type": "line",
      "scene": "ts_c03_zhouzhi_invitation",
      "speaker": "zhouzhi",
      "character": "zhouzhi",
      "text": "“是啊。”",
      "next": "tc_c03_zhouzhi_invitation_013"
    },
    "tc_c03_zhouzhi_invitation_013": {
      "id": "tc_c03_zhouzhi_invitation_013",
      "type": "line",
      "scene": "ts_c03_zhouzhi_invitation",
      "speaker": "narrator",
      "character": "zhouzhi",
      "text": "她答得毫不费力，倒让我没法继续装作随便一问。",
      "next": "tc_c03_zhouzhi_invitation_014"
    },
    "tc_c03_zhouzhi_invitation_014": {
      "id": "tc_c03_zhouzhi_invitation_014",
      "type": "line",
      "scene": "ts_c03_zhouzhi_invitation",
      "speaker": "zhouzhi",
      "character": "zhouzhi",
      "text": "“你呢？”",
      "next": "tc_c03_zhouzhi_invitation_015"
    },
    "tc_c03_zhouzhi_invitation_015": {
      "id": "tc_c03_zhouzhi_invitation_015",
      "type": "line",
      "scene": "ts_c03_zhouzhi_invitation",
      "speaker": "wenwen",
      "character": "zhouzhi",
      "text": "“也想。”",
      "next": "tc_c03_zhouzhi_invitation_016"
    },
    "tc_c03_zhouzhi_invitation_016": {
      "id": "tc_c03_zhouzhi_invitation_016",
      "type": "line",
      "scene": "ts_c03_zhouzhi_invitation",
      "speaker": "narrator",
      "character": "zhouzhi",
      "text": "周栀低头夹面，耳边一缕头发滑下来，她把它拨到后面，动作比刚才慢了一点。",
      "next": "tc_c03_zhouzhi_invitation_017"
    },
    "tc_c03_zhouzhi_invitation_017": {
      "id": "tc_c03_zhouzhi_invitation_017",
      "type": "line",
      "scene": "ts_c03_zhouzhi_invitation",
      "speaker": "zhouzhi",
      "character": "zhouzhi",
      "text": "“那下回别一直说都行。”",
      "next": "tc_c03_zhouzhi_invitation_018"
    },
    "tc_c03_zhouzhi_invitation_018": {
      "id": "tc_c03_zhouzhi_invitation_018",
      "type": "line",
      "scene": "ts_c03_zhouzhi_invitation",
      "speaker": "wenwen",
      "character": "zhouzhi",
      "text": "“什么？”",
      "next": "tc_c03_zhouzhi_invitation_019"
    },
    "tc_c03_zhouzhi_invitation_019": {
      "id": "tc_c03_zhouzhi_invitation_019",
      "type": "line",
      "scene": "ts_c03_zhouzhi_invitation",
      "speaker": "zhouzhi",
      "character": "zhouzhi",
      "text": "“我问你去哪儿，你说都行。问想吃什么，也都行。你至少挑一件你想做的，我也想知道。”",
      "next": "tc_c03_zhouzhi_invitation_020"
    },
    "tc_c03_zhouzhi_invitation_020": {
      "id": "tc_c03_zhouzhi_invitation_020",
      "type": "line",
      "scene": "ts_c03_zhouzhi_invitation",
      "speaker": "narrator",
      "character": "zhouzhi",
      "text": "结账后，我说第23天下午能不能一起出去，她查过自己的安排，答应了。",
      "next": "tc_c03_zhouzhi_invitation_021"
    },
    "tc_c03_zhouzhi_invitation_021": {
      "id": "tc_c03_zhouzhi_invitation_021",
      "type": "line",
      "scene": "ts_c03_zhouzhi_invitation",
      "speaker": "narrator",
      "character": "zhouzhi",
      "text": "“这次去哪儿？”她问。",
      "next": "tc_c03_zhouzhi_invitation_022"
    },
    "tc_c03_zhouzhi_invitation_022": {
      "id": "tc_c03_zhouzhi_invitation_022",
      "type": "line",
      "scene": "ts_c03_zhouzhi_invitation",
      "speaker": "narrator",
      "character": "zhouzhi",
      "text": "我说想过两个地方，一个能安静坐着听歌，另一个有我们都没看过的片子。她撑开伞，看了看天，把伞举在肩上。",
      "next": "tc_c03_zhouzhi_invitation_023"
    },
    "tc_c03_zhouzhi_invitation_023": {
      "id": "tc_c03_zhouzhi_invitation_023",
      "type": "line",
      "scene": "ts_c03_zhouzhi_invitation",
      "speaker": "zhouzhi",
      "character": "zhouzhi",
      "text": "“好。到时候你选，我再决定要不要跟。”",
      "next": "tc_c03_common_exit"
    },
    "tc_c04_zhouzhi_entry": {
      "id": "tc_c04_zhouzhi_entry",
      "type": "line",
      "scene": "ts_c04_zhouzhi_outing",
      "speaker": "narrator",
      "character": "zhouzhi",
      "text": "我下夜班后睡到了下午两点半，吃过东西才出门。周栀已经在约定的店门口，没化工作时那么完整的妆，唇上只有很淡的一层颜色。",
      "next": "tc_c04_zhouzhi_outing_002"
    },
    "tc_c04_zhouzhi_outing_002": {
      "id": "tc_c04_zhouzhi_outing_002",
      "type": "line",
      "scene": "ts_c04_zhouzhi_outing",
      "speaker": "narrator",
      "character": "zhouzhi",
      "text": "她先问我睡了多久，听见答案，点头说：“那今天应该不会走着走着关机。”",
      "next": "tc_c04_zhouzhi_outing_003"
    },
    "tc_c04_zhouzhi_outing_003": {
      "id": "tc_c04_zhouzhi_outing_003",
      "type": "line",
      "scene": "ts_c04_zhouzhi_outing",
      "speaker": "wenwen",
      "character": "zhouzhi",
      "text": "“你试试叫醒我。”",
      "next": "tc_c04_zhouzhi_outing_004"
    },
    "tc_c04_zhouzhi_outing_004": {
      "id": "tc_c04_zhouzhi_outing_004",
      "type": "line",
      "scene": "ts_c04_zhouzhi_outing",
      "speaker": "zhouzhi",
      "character": "zhouzhi",
      "text": "“我不试。困了就各自回家，又不是买一送一，非得一起耗完。”",
      "next": "tc_c04_zhouzhi_outing_005"
    },
    "tc_c04_zhouzhi_outing_005": {
      "id": "tc_c04_zhouzhi_outing_005",
      "type": "line",
      "scene": "ts_c04_zhouzhi_outing",
      "speaker": "narrator",
      "character": "zhouzhi",
      "text": "我把那两个选择重新说了一遍。她问我真喜欢哪个，我说都想去，只是今天时间够一个。",
      "next": "tc_c04_zhouzhi_outing_006"
    },
    "tc_c04_zhouzhi_outing_006": {
      "id": "tc_c04_zhouzhi_outing_006",
      "type": "line",
      "scene": "ts_c04_zhouzhi_outing",
      "speaker": "zhouzhi",
      "character": "zhouzhi",
      "text": "“这次的都想，和上次的都行不一样吧？”",
      "next": "tc_c04_zhouzhi_outing_007"
    },
    "tc_c04_zhouzhi_outing_007": {
      "id": "tc_c04_zhouzhi_outing_007",
      "type": "line",
      "scene": "ts_c04_zhouzhi_outing",
      "speaker": "wenwen",
      "character": "zhouzhi",
      "text": "“我现在已经开始检查自己的用词了。”",
      "next": "tc_c04_zhouzhi_outing_008"
    },
    "tc_c04_zhouzhi_outing_008": {
      "id": "tc_c04_zhouzhi_outing_008",
      "type": "line",
      "scene": "ts_c04_zhouzhi_outing",
      "speaker": "narrator",
      "character": "zhouzhi",
      "text": "她笑着用伞柄点了点我的鞋尖，叫我别紧张，选错地方也不会记档。",
      "next": "tc_c04_zhouzhi_outing_choice",
      "expression": "expression-smile"
    },
    "tc_c04_zhouzhi_river_001": {
      "id": "tc_c04_zhouzhi_river_001",
      "type": "line",
      "scene": "ts_c04_zhouzhi_river",
      "speaker": "narrator",
      "character": "zhouzhi",
      "text": "河边有一段人少的步道。我们各戴一只耳机，周栀先选了一首节奏很慢的歌。她没有跟着唱，只在一个转音的地方轻轻动了动手指。",
      "next": "tc_c04_zhouzhi_river_002"
    },
    "tc_c04_zhouzhi_river_002": {
      "id": "tc_c04_zhouzhi_river_002",
      "type": "line",
      "scene": "ts_c04_zhouzhi_river",
      "speaker": "narrator",
      "character": "zhouzhi",
      "text": "我等了一会儿，才问她是不是平时也听这样的。",
      "next": "tc_c04_zhouzhi_river_003"
    },
    "tc_c04_zhouzhi_river_003": {
      "id": "tc_c04_zhouzhi_river_003",
      "type": "line",
      "scene": "ts_c04_zhouzhi_river",
      "speaker": "zhouzhi",
      "character": "zhouzhi",
      "text": "“有时。上班唱得热闹，下班不一定还想听人敲锣。”",
      "next": "tc_c04_zhouzhi_river_004"
    },
    "tc_c04_zhouzhi_river_004": {
      "id": "tc_c04_zhouzhi_river_004",
      "type": "line",
      "scene": "ts_c04_zhouzhi_river",
      "speaker": "narrator",
      "character": "zhouzhi",
      "text": "轮到我，我点开一首游戏里常听见的纯音乐。周栀听着听着，问里面那个声音是不是每次失败都会响，我说不是，是进菜单。",
      "next": "tc_c04_zhouzhi_river_005"
    },
    "tc_c04_zhouzhi_river_005": {
      "id": "tc_c04_zhouzhi_river_005",
      "type": "line",
      "scene": "ts_c04_zhouzhi_river",
      "speaker": "zhouzhi",
      "character": "zhouzhi",
      "text": "“难怪听起来像人在门口犹豫。”",
      "next": "tc_c04_zhouzhi_river_006"
    },
    "tc_c04_zhouzhi_river_006": {
      "id": "tc_c04_zhouzhi_river_006",
      "type": "line",
      "scene": "ts_c04_zhouzhi_river",
      "speaker": "narrator",
      "character": "zhouzhi",
      "text": "我想了想，发现她说得很像。",
      "next": "tc_c04_zhouzhi_river_007"
    },
    "tc_c04_zhouzhi_river_007": {
      "id": "tc_c04_zhouzhi_river_007",
      "type": "line",
      "scene": "ts_c04_zhouzhi_river",
      "speaker": "narrator",
      "character": "zhouzhi",
      "text": "走到一张空椅子旁，我们坐下。耳机线短，我一转头就扯到她，她抬手拉住线，让我把手机放在两人中间。这样一来，我们都得向中间靠一点，却不用找理由。",
      "next": "tc_c04_zhouzhi_river_008"
    },
    "tc_c04_zhouzhi_river_008": {
      "id": "tc_c04_zhouzhi_river_008",
      "type": "line",
      "scene": "ts_c04_zhouzhi_river",
      "speaker": "narrator",
      "character": "zhouzhi",
      "text": "她把歌听完，才摘下耳机。",
      "next": "tc_c04_zhouzhi_river_009"
    },
    "tc_c04_zhouzhi_river_009": {
      "id": "tc_c04_zhouzhi_river_009",
      "type": "line",
      "scene": "ts_c04_zhouzhi_river",
      "speaker": "zhouzhi",
      "character": "zhouzhi",
      "text": "“下次轮到我挑一首吵的。你别以为我一直这么安静。”",
      "next": "tc_c04_zhouzhi_before_work_001"
    },
    "tc_c04_zhouzhi_cinema_001": {
      "id": "tc_c04_zhouzhi_cinema_001",
      "type": "line",
      "scene": "ts_c04_zhouzhi_cinema",
      "speaker": "narrator",
      "character": "zhouzhi",
      "text": "我们赶上一场还有座位的片子。周栀选靠过道的位置，说自己不喜欢进出都让一排人起身。我买饮料前问她想不想喝，她说白水，我就只拿了自己的汽水。",
      "next": "tc_c04_zhouzhi_cinema_002"
    },
    "tc_c04_zhouzhi_cinema_002": {
      "id": "tc_c04_zhouzhi_cinema_002",
      "type": "line",
      "scene": "ts_c04_zhouzhi_cinema",
      "speaker": "narrator",
      "character": "zhouzhi",
      "text": "片子里的笑点来得很密，我在一个很幼稚的地方笑出声，她转头看我，没跟着笑，却把纸巾递过来，示意汽水快从嘴角流下去了。",
      "next": "tc_c04_zhouzhi_cinema_003"
    },
    "tc_c04_zhouzhi_cinema_003": {
      "id": "tc_c04_zhouzhi_cinema_003",
      "type": "line",
      "scene": "ts_c04_zhouzhi_cinema",
      "speaker": "narrator",
      "character": "zhouzhi",
      "text": "散场后，她说自己最喜欢的是中间一段没什么台词的路上戏。我说那段我差点犯困，她瞪了我一眼，紧接着笑起来。",
      "next": "tc_c04_zhouzhi_cinema_004"
    },
    "tc_c04_zhouzhi_cinema_004": {
      "id": "tc_c04_zhouzhi_cinema_004",
      "type": "line",
      "scene": "ts_c04_zhouzhi_cinema",
      "speaker": "zhouzhi",
      "character": "zhouzhi",
      "text": "“很好，我们应该不能一起写影评。”",
      "next": "tc_c04_zhouzhi_cinema_005"
    },
    "tc_c04_zhouzhi_cinema_005": {
      "id": "tc_c04_zhouzhi_cinema_005",
      "type": "line",
      "scene": "ts_c04_zhouzhi_cinema",
      "speaker": "wenwen",
      "character": "zhouzhi",
      "text": "“但能一起买票。”",
      "next": "tc_c04_zhouzhi_cinema_006"
    },
    "tc_c04_zhouzhi_cinema_006": {
      "id": "tc_c04_zhouzhi_cinema_006",
      "type": "line",
      "scene": "ts_c04_zhouzhi_cinema",
      "speaker": "zhouzhi",
      "character": "zhouzhi",
      "text": "“倒也行。下次我挑片。”",
      "next": "tc_c04_zhouzhi_cinema_007"
    },
    "tc_c04_zhouzhi_cinema_007": {
      "id": "tc_c04_zhouzhi_cinema_007",
      "type": "line",
      "scene": "ts_c04_zhouzhi_cinema_mall",
      "speaker": "narrator",
      "character": "zhouzhi",
      "text": "电梯里人多，我侧身让出一点空间，她站到我旁边，衣袖碰着我的手背。到一楼，她没急着往外走，先把看完的票根折成一小块，塞进自己的手机壳里。",
      "next": "tc_c04_zhouzhi_cinema_008"
    },
    "tc_c04_zhouzhi_cinema_008": {
      "id": "tc_c04_zhouzhi_cinema_008",
      "type": "line",
      "scene": "ts_c04_zhouzhi_cinema_mall",
      "speaker": "narrator",
      "character": "zhouzhi",
      "text": "我看见了，她扬了扬眉：“看什么？这是我买的座位，留个凭证。”",
      "next": "tc_c04_zhouzhi_before_work_001"
    },
    "tc_c04_zhouzhi_before_work_001": {
      "id": "tc_c04_zhouzhi_before_work_001",
      "type": "line",
      "scene": "ts_c04_zhouzhi_before_work",
      "speaker": "narrator",
      "character": "zhouzhi",
      "text": "到了傍晚，天色还亮，我们在街角吃了一碗小馄饨。周栀不想吃太多，直接要了小份，没有为了和我一样换成大碗。",
      "next": "tc_c04_zhouzhi_before_work_002"
    },
    "tc_c04_zhouzhi_before_work_002": {
      "id": "tc_c04_zhouzhi_before_work_002",
      "type": "line",
      "scene": "ts_c04_zhouzhi_before_work",
      "speaker": "narrator",
      "character": "zhouzhi",
      "text": "我正想再提议走一段，她看了一眼时间，说自己得回去准备上班。",
      "next": "tc_c04_zhouzhi_before_work_003"
    },
    "tc_c04_zhouzhi_before_work_003": {
      "id": "tc_c04_zhouzhi_before_work_003",
      "type": "line",
      "scene": "ts_c04_zhouzhi_before_work",
      "speaker": "narrator",
      "character": "zhouzhi",
      "text": "“这么快？”我问完，才意识到有点像在责怪她。",
      "next": "tc_c04_zhouzhi_before_work_004"
    },
    "tc_c04_zhouzhi_before_work_004": {
      "id": "tc_c04_zhouzhi_before_work_004",
      "type": "line",
      "scene": "ts_c04_zhouzhi_before_work",
      "speaker": "narrator",
      "character": "zhouzhi",
      "text": "她抬头看我，笑意很淡，眼睛却亮着。",
      "next": "tc_c04_zhouzhi_before_work_005"
    },
    "tc_c04_zhouzhi_before_work_005": {
      "id": "tc_c04_zhouzhi_before_work_005",
      "type": "line",
      "scene": "ts_c04_zhouzhi_before_work",
      "speaker": "zhouzhi",
      "character": "zhouzhi",
      "text": "“快，说明今天没白来。不是说明还得把晚上也给你。”",
      "next": "tc_c04_zhouzhi_before_work_006"
    },
    "tc_c04_zhouzhi_before_work_006": {
      "id": "tc_c04_zhouzhi_before_work_006",
      "type": "line",
      "scene": "ts_c04_zhouzhi_before_work_crossroad",
      "speaker": "narrator",
      "character": "zhouzhi",
      "text": "我说好，自己也该回去歇一会儿，晚间还要值班。走到路口，她忽然把伞换到另一只手，用空着的手指碰了碰我的袖口。",
      "next": "tc_c04_zhouzhi_before_work_007"
    },
    "tc_c04_zhouzhi_before_work_007": {
      "id": "tc_c04_zhouzhi_before_work_007",
      "type": "line",
      "scene": "ts_c04_zhouzhi_before_work_crossroad",
      "speaker": "zhouzhi",
      "character": "zhouzhi",
      "text": "“下次可以长一点。等我们都休息的时候。”",
      "next": "tc_c04_zhouzhi_before_work_008"
    },
    "tc_c04_zhouzhi_before_work_008": {
      "id": "tc_c04_zhouzhi_before_work_008",
      "type": "line",
      "scene": "ts_c04_zhouzhi_before_work_crossroad",
      "speaker": "narrator",
      "character": "zhouzhi",
      "text": "她碰完就走了。我站着等人行灯，想起自己还没回她，连忙发了句好。她很快回了一个笑脸，后面跟着三个字：“这句行。”",
      "next": "tc_c04_common_exit"
    },
    "tc_c04_zhouzhi_outing_choice": {
      "id": "tc_c04_zhouzhi_outing_choice",
      "type": "choice",
      "scene": "ts_c04_zhouzhi_outing",
      "character": "zhouzhi",
      "text": "",
      "flag": "zhouzhiOuting",
      "choices": [
        {
          "label": "沿河走走，轮流放一首想听的歌",
          "value": "river",
          "next": "tc_c04_zhouzhi_river_001"
        },
        {
          "label": "去影院，允许我们喜欢不同的东西",
          "value": "cinema",
          "next": "tc_c04_zhouzhi_cinema_001"
        }
      ]
    },
    "tc_c05_zhouzhi_entry": {
      "id": "tc_c05_zhouzhi_entry",
      "type": "line",
      "scene": "ts_c05_zhouzhi_unexpected_company",
      "speaker": "narrator",
      "character": null,
      "text": "第25天群里说了回声将在第30天停业。周栀自己也回了消息，说约饭可以，别替她买花，她还要上完最后一班，抱着花干活很奇怪。",
      "next": "tc_c05_zhouzhi_unexpected_company_002"
    },
    "tc_c05_zhouzhi_unexpected_company_002": {
      "id": "tc_c05_zhouzhi_unexpected_company_002",
      "type": "line",
      "scene": "ts_c05_zhouzhi_unexpected_company",
      "speaker": "narrator",
      "character": "maolang",
      "text": "第二天下午，我睡醒后按约去见她。本来只是我们两个吃饭，路上遇见毛狼和他的一个同行，我顺口提了句正在找饭吃，毛狼便问能否一起。",
      "next": "tc_c05_zhouzhi_unexpected_company_003"
    },
    "tc_c05_zhouzhi_unexpected_company_003": {
      "id": "tc_c05_zhouzhi_unexpected_company_003",
      "type": "line",
      "scene": "ts_c05_zhouzhi_unexpected_company",
      "speaker": "narrator",
      "character": "maolang",
      "text": "我说了好，才想起还没问周栀。",
      "next": "tc_c05_zhouzhi_unexpected_company_004"
    },
    "tc_c05_zhouzhi_unexpected_company_004": {
      "id": "tc_c05_zhouzhi_unexpected_company_004",
      "type": "line",
      "scene": "ts_c05_zhouzhi_unexpected_company",
      "speaker": "narrator",
      "character": "zhouzhi",
      "text": "她看见我们三个人站在门口，微微顿了一下，很快挪开旁边的椅子。毛狼忙着讲下午临时改过的演出安排，同行不太熟这条街，我便转头问她哪家店合适。",
      "next": "tc_c05_zhouzhi_unexpected_company_005"
    },
    "tc_c05_zhouzhi_unexpected_company_005": {
      "id": "tc_c05_zhouzhi_unexpected_company_005",
      "type": "line",
      "scene": "ts_c05_zhouzhi_unexpected_company",
      "speaker": "narrator",
      "character": "zhouzhi",
      "text": "她提了两家，大家选定以后，又有人把菜单递给她。她问忌口，叫老板，接住毛狼讲到一半忘掉的笑话。一顿饭吃得热闹，我当时甚至觉得她应该也高兴。",
      "next": "tc_c05_zhouzhi_unexpected_company_006"
    },
    "tc_c05_zhouzhi_unexpected_company_006": {
      "id": "tc_c05_zhouzhi_unexpected_company_006",
      "type": "line",
      "scene": "ts_c05_zhouzhi_unexpected_company",
      "speaker": "narrator",
      "character": "zhouzhi",
      "text": "直到我看见她那碗汤已经不冒热气，筷子还整齐搁在碗边。",
      "next": "tc_c05_zhouzhi_unexpected_company_007"
    },
    "tc_c05_zhouzhi_unexpected_company_007": {
      "id": "tc_c05_zhouzhi_unexpected_company_007",
      "type": "line",
      "scene": "ts_c05_zhouzhi_unexpected_company",
      "speaker": "narrator",
      "character": "zhouzhi",
      "text": "“你怎么不吃？”我问。",
      "next": "tc_c05_zhouzhi_unexpected_company_008"
    },
    "tc_c05_zhouzhi_unexpected_company_008": {
      "id": "tc_c05_zhouzhi_unexpected_company_008",
      "type": "line",
      "scene": "ts_c05_zhouzhi_unexpected_company",
      "speaker": "zhouzhi",
      "character": "zhouzhi",
      "text": "“在听。”",
      "next": "tc_c05_zhouzhi_unexpected_company_009"
    },
    "tc_c05_zhouzhi_unexpected_company_009": {
      "id": "tc_c05_zhouzhi_unexpected_company_009",
      "type": "line",
      "scene": "ts_c05_zhouzhi_unexpected_company",
      "speaker": "narrator",
      "character": "zhouzhi",
      "text": "她把筷子拿起来，吃了几口。毛狼和同行先走之后，她没有跟我算谁付了钱，只坐着把剩下的饭慢慢吃完。",
      "next": "tc_c05_zhouzhi_unexpected_company_010"
    },
    "tc_c05_zhouzhi_unexpected_company_010": {
      "id": "tc_c05_zhouzhi_unexpected_company_010",
      "type": "line",
      "scene": "ts_c05_zhouzhi_unexpected_company",
      "speaker": "narrator",
      "character": "zhouzhi",
      "text": "我问她是不是累了。",
      "next": "tc_c05_zhouzhi_unexpected_company_011"
    },
    "tc_c05_zhouzhi_unexpected_company_011": {
      "id": "tc_c05_zhouzhi_unexpected_company_011",
      "type": "line",
      "scene": "ts_c05_zhouzhi_unexpected_company",
      "speaker": "zhouzhi",
      "character": "zhouzhi",
      "text": "“有点。但我不想说累了，就把这顿饭糊弄过去。”",
      "next": "tc_c05_zhouzhi_unexpected_company_012"
    },
    "tc_c05_zhouzhi_unexpected_company_012": {
      "id": "tc_c05_zhouzhi_unexpected_company_012",
      "type": "line",
      "scene": "ts_c05_zhouzhi_unexpected_company",
      "speaker": "narrator",
      "character": "zhouzhi",
      "text": "她放下勺子，看着我。",
      "next": "tc_c05_zhouzhi_unexpected_company_013"
    },
    "tc_c05_zhouzhi_unexpected_company_013": {
      "id": "tc_c05_zhouzhi_unexpected_company_013",
      "type": "line",
      "scene": "ts_c05_zhouzhi_unexpected_company",
      "speaker": "zhouzhi",
      "character": "zhouzhi",
      "text": "“文文，你今天是想跟我吃饭，还是觉得有我在，跟谁吃饭都有人接话？”",
      "next": "tc_c05_zhouzhi_unexpected_company_014"
    },
    "tc_c05_zhouzhi_unexpected_company_014": {
      "id": "tc_c05_zhouzhi_unexpected_company_014",
      "type": "line",
      "scene": "ts_c05_zhouzhi_unexpected_company",
      "speaker": "narrator",
      "character": "zhouzhi",
      "text": "我怔了一下，说原本当然想跟她吃。",
      "next": "tc_c05_zhouzhi_unexpected_company_015"
    },
    "tc_c05_zhouzhi_unexpected_company_015": {
      "id": "tc_c05_zhouzhi_unexpected_company_015",
      "type": "line",
      "scene": "ts_c05_zhouzhi_unexpected_company",
      "speaker": "narrator",
      "character": "zhouzhi",
      "text": "“原本。”她重复了一遍，声音不大。",
      "next": "tc_c05_zhouzhi_unexpected_company_016"
    },
    "tc_c05_zhouzhi_unexpected_company_016": {
      "id": "tc_c05_zhouzhi_unexpected_company_016",
      "type": "line",
      "scene": "ts_c05_zhouzhi_unexpected_company",
      "speaker": "narrator",
      "character": "zhouzhi",
      "text": "我终于把路上那句顺口的“好”想起来。她不讨厌毛狼，也没有要求我见面只能看她一个人，可她根本没得到选择这顿饭的机会。",
      "next": "tc_c05_zhouzhi_unexpected_company_017"
    },
    "tc_c05_zhouzhi_unexpected_company_017": {
      "id": "tc_c05_zhouzhi_unexpected_company_017",
      "type": "line",
      "scene": "ts_c05_zhouzhi_unexpected_company",
      "speaker": "narrator",
      "character": "zhouzhi",
      "text": "“我该先问你。”我说。",
      "next": "tc_c05_zhouzhi_unexpected_company_018"
    },
    "tc_c05_zhouzhi_unexpected_company_018": {
      "id": "tc_c05_zhouzhi_unexpected_company_018",
      "type": "line",
      "scene": "ts_c05_zhouzhi_unexpected_company",
      "speaker": "zhouzhi",
      "character": "zhouzhi",
      "text": "“嗯。而且我今天有点不想照顾场面。坐着不说话，别人会觉得是不是我不欢迎他们，我又忍不住接了。”",
      "next": "tc_c05_zhouzhi_unexpected_company_019"
    },
    "tc_c05_zhouzhi_unexpected_company_019": {
      "id": "tc_c05_zhouzhi_unexpected_company_019",
      "type": "line",
      "scene": "ts_c05_zhouzhi_unexpected_company",
      "speaker": "narrator",
      "character": "zhouzhi",
      "text": "她用勺子把最后一点汤舀起来，已经凉了，喝下去的时候皱了皱眉。",
      "next": "tc_c05_zhouzhi_unexpected_company_020"
    },
    "tc_c05_zhouzhi_unexpected_company_020": {
      "id": "tc_c05_zhouzhi_unexpected_company_020",
      "type": "line",
      "scene": "ts_c05_zhouzhi_unexpected_company",
      "speaker": "narrator",
      "character": "zhouzhi",
      "text": "我说要不要再点碗热的，她摇头。",
      "next": "tc_c05_zhouzhi_unexpected_company_021"
    },
    "tc_c05_zhouzhi_unexpected_company_021": {
      "id": "tc_c05_zhouzhi_unexpected_company_021",
      "type": "line",
      "scene": "ts_c05_zhouzhi_unexpected_company",
      "speaker": "zhouzhi",
      "character": "zhouzhi",
      "text": "“不是再点一碗就行。你先听我说完。”",
      "next": "tc_c05_zhouzhi_unexpected_company_022"
    },
    "tc_c05_zhouzhi_unexpected_company_022": {
      "id": "tc_c05_zhouzhi_unexpected_company_022",
      "type": "line",
      "scene": "ts_c05_zhouzhi_unexpected_company",
      "speaker": "narrator",
      "character": "zhouzhi",
      "text": "我把手从菜单上收回来。",
      "next": "tc_c05_zhouzhi_unexpected_company_023"
    },
    "tc_c05_zhouzhi_unexpected_company_023": {
      "id": "tc_c05_zhouzhi_unexpected_company_023",
      "type": "line",
      "scene": "ts_c05_zhouzhi_unexpected_company_busstop",
      "speaker": "narrator",
      "character": "zhouzhi",
      "text": "她说完以后问我，现在能不能陪她走到车站，不继续讲有多抱歉，也不把这顿饭说成误会。我答应了。",
      "next": "tc_c05_zhouzhi_unexpected_company_024"
    },
    "tc_c05_zhouzhi_unexpected_company_024": {
      "id": "tc_c05_zhouzhi_unexpected_company_024",
      "type": "line",
      "scene": "ts_c05_zhouzhi_unexpected_company_busstop",
      "speaker": "narrator",
      "character": "zhouzhi",
      "text": "到车站时，她先上了车，隔着玻璃朝我抬了一下手。没有冷脸，也没有像前几次那样很快发来消息。我沿着原路回去，才发现自己竟然想不起来她今天一开始想吃什么。",
      "next": "tc_c05_zhouzhi_two_seats_001"
    },
    "tc_c05_zhouzhi_two_seats_001": {
      "id": "tc_c05_zhouzhi_two_seats_001",
      "type": "line",
      "scene": "ts_c05_zhouzhi_two_seats",
      "speaker": "narrator",
      "character": null,
      "text": "我再约周栀时，先告诉她只约了她，又说她如果不想来，可以过几天。",
      "next": "tc_c05_zhouzhi_two_seats_002"
    },
    "tc_c05_zhouzhi_two_seats_002": {
      "id": "tc_c05_zhouzhi_two_seats_002",
      "type": "line",
      "scene": "ts_c05_zhouzhi_two_seats",
      "speaker": "narrator",
      "character": null,
      "text": "她回：“想来。不用把我当成碰一下就会碎的杯子。”",
      "next": "tc_c05_zhouzhi_two_seats_003"
    },
    "tc_c05_zhouzhi_two_seats_003": {
      "id": "tc_c05_zhouzhi_two_seats_003",
      "type": "line",
      "scene": "ts_c05_zhouzhi_two_seats",
      "speaker": "narrator",
      "character": "zhouzhi",
      "text": "我们坐进一家很普通的面馆。我自己点了菜，问过她口味后再下单。菜上来，我没急着找话题，她也安静吃了几口，终于把肩膀放松下来。",
      "next": "tc_c05_zhouzhi_two_seats_004"
    },
    "tc_c05_zhouzhi_two_seats_004": {
      "id": "tc_c05_zhouzhi_two_seats_004",
      "type": "line",
      "scene": "ts_c05_zhouzhi_two_seats",
      "speaker": "narrator",
      "character": "zhouzhi",
      "text": "“那天我也该早一点说。”她说，“有时候话都滑到嘴边了，就接下去，等发现自己不想这样，已经演完半顿饭。”",
      "next": "tc_c05_zhouzhi_two_seats_005"
    },
    "tc_c05_zhouzhi_two_seats_005": {
      "id": "tc_c05_zhouzhi_two_seats_005",
      "type": "line",
      "scene": "ts_c05_zhouzhi_two_seats",
      "speaker": "wenwen",
      "character": "zhouzhi",
      "text": "“下次你能直接打断我。”",
      "next": "tc_c05_zhouzhi_two_seats_006"
    },
    "tc_c05_zhouzhi_two_seats_006": {
      "id": "tc_c05_zhouzhi_two_seats_006",
      "type": "line",
      "scene": "ts_c05_zhouzhi_two_seats",
      "speaker": "zhouzhi",
      "character": "zhouzhi",
      "text": "“我会。但你也不能等着我每次打断。”",
      "next": "tc_c05_zhouzhi_two_seats_007"
    },
    "tc_c05_zhouzhi_two_seats_007": {
      "id": "tc_c05_zhouzhi_two_seats_007",
      "type": "line",
      "scene": "ts_c05_zhouzhi_two_seats",
      "speaker": "wenwen",
      "character": "zhouzhi",
      "text": "“知道。”",
      "next": "tc_c05_zhouzhi_two_seats_008"
    },
    "tc_c05_zhouzhi_two_seats_008": {
      "id": "tc_c05_zhouzhi_two_seats_008",
      "type": "line",
      "scene": "ts_c05_zhouzhi_two_seats",
      "speaker": "narrator",
      "character": "zhouzhi",
      "text": "我们吃完，各自付了自己那份。走到门口，她忽然说，第30天的饭还是照常，不因为这件事就不去见大家。我说我明白，一起吃饭和临时改掉两人的约定，是两件事。",
      "next": "tc_c05_zhouzhi_two_seats_009"
    },
    "tc_c05_zhouzhi_two_seats_009": {
      "id": "tc_c05_zhouzhi_two_seats_009",
      "type": "line",
      "scene": "ts_c05_zhouzhi_two_seats",
      "speaker": "narrator",
      "character": "zhouzhi",
      "text": "她点头，伸手把我外套后面翻起来的领子压平。",
      "next": "tc_c05_zhouzhi_two_seats_010"
    },
    "tc_c05_zhouzhi_two_seats_010": {
      "id": "tc_c05_zhouzhi_two_seats_010",
      "type": "line",
      "scene": "ts_c05_zhouzhi_two_seats",
      "speaker": "zhouzhi",
      "character": "zhouzhi",
      "text": "“今天你说的话比上回少，饭倒吃得舒服。”",
      "next": "tc_c05_zhouzhi_two_seats_011"
    },
    "tc_c05_zhouzhi_two_seats_011": {
      "id": "tc_c05_zhouzhi_two_seats_011",
      "type": "line",
      "scene": "ts_c05_zhouzhi_two_seats",
      "speaker": "narrator",
      "character": "zhouzhi",
      "text": "我笑着问是不是又讲了不好笑的故事。她想了想，说今天还没讲，可以试一个。",
      "next": "tc_c05_zhouzhi_two_seats_012"
    },
    "tc_c05_zhouzhi_two_seats_012": {
      "id": "tc_c05_zhouzhi_two_seats_012",
      "type": "line",
      "scene": "ts_c05_zhouzhi_two_seats",
      "speaker": "narrator",
      "character": "zhouzhi",
      "text": "我刚开口，她已经笑了。",
      "next": "tc_c05_zhouzhi_two_seats_013"
    },
    "tc_c05_zhouzhi_two_seats_013": {
      "id": "tc_c05_zhouzhi_two_seats_013",
      "type": "line",
      "scene": "ts_c05_zhouzhi_two_seats",
      "speaker": "wenwen",
      "character": "zhouzhi",
      "text": "“你这次不用笑这么早。”",
      "next": "tc_c05_zhouzhi_two_seats_014"
    },
    "tc_c05_zhouzhi_two_seats_014": {
      "id": "tc_c05_zhouzhi_two_seats_014",
      "type": "line",
      "scene": "ts_c05_zhouzhi_two_seats",
      "speaker": "zhouzhi",
      "character": "zhouzhi",
      "text": "“不是给你捧场。你准备开讲那个表情，真的很像要宣读通知。”",
      "next": "tc_c05_common_exit"
    },
    "tc_c06_zhouzhi_entry": {
      "id": "tc_c06_zhouzhi_entry",
      "type": "line",
      "scene": "ts_c06_zhouzhi_after_closing",
      "speaker": "narrator",
      "character": null,
      "text": "第30天傍晚那顿饭散后，周栀去上她最后一班，我回网吧准备十点接班。凌晨她发来一张空饭盒的照片，说终于吃上东西了。我当时正接待客人，等手头空下来才回了句早点休息。她没要求我赶过去，我也没把自己的夜班变成一场必须缺席的仪式。",
      "next": "tc_c06_zhouzhi_after_closing_002"
    },
    "tc_c06_zhouzhi_after_closing_002": {
      "id": "tc_c06_zhouzhi_after_closing_002",
      "type": "line",
      "scene": "ts_c06_zhouzhi_after_closing",
      "speaker": "narrator",
      "character": null,
      "text": "第31天我们都补了觉。到第32天下午，我休班，她约我去买点日用品，说家里一只杯子的把手松了，早该换，拖到现在。",
      "next": "tc_c06_zhouzhi_after_closing_003"
    },
    "tc_c06_zhouzhi_after_closing_003": {
      "id": "tc_c06_zhouzhi_after_closing_003",
      "type": "line",
      "scene": "ts_c06_zhouzhi_after_closing",
      "speaker": "narrator",
      "character": "zhouzhi",
      "text": "我们在路口见面，往前走了一段，她忽然停住。",
      "next": "tc_c06_zhouzhi_after_closing_004",
      "expression": "outfit-light-blue-shirt"
    },
    "tc_c06_zhouzhi_after_closing_004": {
      "id": "tc_c06_zhouzhi_after_closing_004",
      "type": "line",
      "scene": "ts_c06_zhouzhi_after_closing",
      "speaker": "zhouzhi",
      "character": "zhouzhi",
      "text": "“走错了。”",
      "next": "tc_c06_zhouzhi_after_closing_005",
      "expression": "outfit-light-blue-shirt",
      "avatarExpression": "outfit-light-blue-shirt"
    },
    "tc_c06_zhouzhi_after_closing_005": {
      "id": "tc_c06_zhouzhi_after_closing_005",
      "type": "line",
      "scene": "ts_c06_zhouzhi_after_closing_closed_echo",
      "speaker": "narrator",
      "character": "zhouzhi",
      "text": "我看了看路，这条路通向回声。她也看着那个方向，没站很久，转身绕到另一边。",
      "next": "tc_c06_zhouzhi_after_closing_006",
      "bg": "tc-bg-echo-closed-day",
      "expression": "outfit-light-blue-shirt"
    },
    "tc_c06_zhouzhi_after_closing_006": {
      "id": "tc_c06_zhouzhi_after_closing_006",
      "type": "line",
      "scene": "ts_c06_zhouzhi_after_closing_closed_echo",
      "speaker": "narrator",
      "character": "zhouzhi",
      "text": "“脚比脑子熟。”她说。",
      "next": "tc_c06_zhouzhi_after_closing_007",
      "bg": "tc-bg-echo-closed-day",
      "expression": "outfit-light-blue-shirt"
    },
    "tc_c06_zhouzhi_after_closing_007": {
      "id": "tc_c06_zhouzhi_after_closing_007",
      "type": "line",
      "scene": "ts_c06_zhouzhi_after_closing_closed_echo",
      "speaker": "narrator",
      "character": "zhouzhi",
      "text": "我没有问她是不是舍不得。她过了马路，反而自己说，昨天醒来第一件事是看手机，以为错过了上班时间，愣了一会儿才反应过来不用去了。",
      "next": "tc_c06_zhouzhi_after_closing_008",
      "bg": "tc-bg-echo-closed-day",
      "expression": "outfit-light-blue-shirt"
    },
    "tc_c06_zhouzhi_after_closing_008": {
      "id": "tc_c06_zhouzhi_after_closing_008",
      "type": "line",
      "scene": "ts_c06_zhouzhi_after_closing_closed_echo",
      "speaker": "wenwen",
      "character": "zhouzhi",
      "text": "“然后呢？”",
      "next": "tc_c06_zhouzhi_after_closing_009",
      "bg": "tc-bg-echo-closed-day",
      "expression": "outfit-light-blue-shirt"
    },
    "tc_c06_zhouzhi_after_closing_009": {
      "id": "tc_c06_zhouzhi_after_closing_009",
      "type": "line",
      "scene": "ts_c06_zhouzhi_after_closing_closed_echo",
      "speaker": "zhouzhi",
      "character": "zhouzhi",
      "text": "“把闹钟关了。躺着又睡了半小时。”",
      "next": "tc_c06_zhouzhi_after_closing_010",
      "bg": "tc-bg-echo-closed-day",
      "expression": "outfit-light-blue-shirt",
      "avatarExpression": "outfit-light-blue-shirt"
    },
    "tc_c06_zhouzhi_after_closing_010": {
      "id": "tc_c06_zhouzhi_after_closing_010",
      "type": "line",
      "scene": "ts_c06_zhouzhi_after_closing_closed_echo",
      "speaker": "wenwen",
      "character": "zhouzhi",
      "text": "“听起来不错。”",
      "next": "tc_c06_zhouzhi_after_closing_011",
      "bg": "tc-bg-echo-closed-day",
      "expression": "outfit-light-blue-shirt"
    },
    "tc_c06_zhouzhi_after_closing_011": {
      "id": "tc_c06_zhouzhi_after_closing_011",
      "type": "line",
      "scene": "ts_c06_zhouzhi_after_closing_closed_echo",
      "speaker": "zhouzhi",
      "character": "zhouzhi",
      "text": "“是不错。我就是还没习惯。”",
      "next": "tc_c06_zhouzhi_after_closing_012",
      "bg": "tc-bg-echo-closed-day",
      "expression": "outfit-light-blue-shirt",
      "avatarExpression": "outfit-light-blue-shirt"
    },
    "tc_c06_zhouzhi_after_closing_012": {
      "id": "tc_c06_zhouzhi_after_closing_012",
      "type": "line",
      "scene": "ts_c06_zhouzhi_after_closing_supermarket",
      "speaker": "narrator",
      "character": "zhouzhi",
      "text": "超市里放着很欢快的音乐。我们从清洁用品一排走到杯子一排，周栀拿起一只漂亮却很重的杯子，掂了掂又放下。最后选了一只普通白杯，杯沿有一圈浅蓝。",
      "next": "tc_c06_zhouzhi_after_closing_013",
      "expression": "outfit-light-blue-shirt"
    },
    "tc_c06_zhouzhi_after_closing_013": {
      "id": "tc_c06_zhouzhi_after_closing_013",
      "type": "line",
      "scene": "ts_c06_zhouzhi_after_closing_supermarket",
      "speaker": "narrator",
      "character": "zhouzhi",
      "text": "我说很像她那件衬衫，她看看自己，再看杯子：“那它挺会穿。”",
      "next": "tc_c06_zhouzhi_after_closing_014",
      "expression": "outfit-light-blue-shirt"
    },
    "tc_c06_zhouzhi_after_closing_014": {
      "id": "tc_c06_zhouzhi_after_closing_014",
      "type": "line",
      "scene": "ts_c06_zhouzhi_after_closing_supermarket",
      "speaker": "narrator",
      "character": "zhouzhi",
      "text": "旁边有情侣款，我刚看到就移开眼。周栀却很坦然地把白杯放进篮子，说自己只需要一个，我若想买，就选我喜欢的。",
      "next": "tc_c06_zhouzhi_after_closing_015",
      "expression": "outfit-light-blue-shirt"
    },
    "tc_c06_zhouzhi_after_closing_015": {
      "id": "tc_c06_zhouzhi_after_closing_015",
      "type": "line",
      "scene": "ts_c06_zhouzhi_after_closing_supermarket",
      "speaker": "narrator",
      "character": "zhouzhi",
      "text": "我最后拿了个结实的水杯，准备以后带到网吧。她没有替我付钱，也没要求我们买成一对。结账以后，两只杯子在各自的袋子里碰着包装纸，走路时发出很轻的声响。",
      "next": "tc_c06_zhouzhi_after_closing_016",
      "expression": "outfit-light-blue-shirt"
    },
    "tc_c06_zhouzhi_after_closing_016": {
      "id": "tc_c06_zhouzhi_after_closing_016",
      "type": "line",
      "scene": "ts_c06_zhouzhi_after_closing_soymilk",
      "speaker": "narrator",
      "character": "zhouzhi",
      "text": "我们在外面找地方坐。她喝着刚买的热豆浆，说这几天要和朋友把能试的几样夜宵先做起来，但不想把所有空出来的时间一下塞满。",
      "next": "tc_c06_zhouzhi_after_closing_017",
      "expression": "outfit-light-blue-shirt"
    },
    "tc_c06_zhouzhi_after_closing_017": {
      "id": "tc_c06_zhouzhi_after_closing_017",
      "type": "line",
      "scene": "ts_c06_zhouzhi_after_closing_soymilk",
      "speaker": "zhouzhi",
      "character": "zhouzhi",
      "text": "“别人一听我不上那个班了，就问下一步。问得多，我自己也慌，像中间空一天都不行。”",
      "next": "tc_c06_zhouzhi_after_closing_018",
      "expression": "outfit-light-blue-shirt",
      "avatarExpression": "outfit-light-blue-shirt"
    },
    "tc_c06_zhouzhi_after_closing_018": {
      "id": "tc_c06_zhouzhi_after_closing_018",
      "type": "line",
      "scene": "ts_c06_zhouzhi_after_closing_soymilk",
      "speaker": "wenwen",
      "character": "zhouzhi",
      "text": "“你想空几天？”",
      "next": "tc_c06_zhouzhi_after_closing_019",
      "expression": "outfit-light-blue-shirt"
    },
    "tc_c06_zhouzhi_after_closing_019": {
      "id": "tc_c06_zhouzhi_after_closing_019",
      "type": "line",
      "scene": "ts_c06_zhouzhi_after_closing_soymilk",
      "speaker": "zhouzhi",
      "character": "zhouzhi",
      "text": "“先把这杯喝完再说。”",
      "next": "tc_c06_zhouzhi_after_closing_020",
      "expression": "outfit-light-blue-shirt",
      "avatarExpression": "outfit-light-blue-shirt"
    },
    "tc_c06_zhouzhi_after_closing_020": {
      "id": "tc_c06_zhouzhi_after_closing_020",
      "type": "line",
      "scene": "ts_c06_zhouzhi_after_closing_soymilk",
      "speaker": "narrator",
      "character": "zhouzhi",
      "text": "她说完自己笑了。我把袋子放稳，坐在她旁边，没继续追问计划，也没打开地图替她找摊位。",
      "next": "tc_c06_zhouzhi_after_closing_021",
      "expression": "outfit-light-blue-shirt"
    },
    "tc_c06_zhouzhi_after_closing_021": {
      "id": "tc_c06_zhouzhi_after_closing_021",
      "type": "line",
      "scene": "ts_c06_zhouzhi_after_closing_soymilk",
      "speaker": "narrator",
      "character": "zhouzhi",
      "text": "一对学生模样的年轻人从旁边走过，争论谁上次忘记带伞。周栀看了一眼自己放在脚边的新伞，用鞋尖轻轻勾回一点，怕挡住过道。",
      "next": "tc_c06_zhouzhi_after_closing_022",
      "expression": "outfit-light-blue-shirt"
    },
    "tc_c06_zhouzhi_after_closing_022": {
      "id": "tc_c06_zhouzhi_after_closing_022",
      "type": "line",
      "scene": "ts_c06_zhouzhi_after_closing_soymilk",
      "speaker": "narrator",
      "character": "zhouzhi",
      "text": "“这把还不错。”她说。",
      "next": "tc_c06_zhouzhi_after_closing_023",
      "expression": "outfit-light-blue-shirt"
    },
    "tc_c06_zhouzhi_after_closing_023": {
      "id": "tc_c06_zhouzhi_after_closing_023",
      "type": "line",
      "scene": "ts_c06_zhouzhi_after_closing_soymilk",
      "speaker": "wenwen",
      "character": "zhouzhi",
      "text": "“买的那天就知道了？”",
      "next": "tc_c06_zhouzhi_after_closing_024",
      "expression": "outfit-light-blue-shirt"
    },
    "tc_c06_zhouzhi_after_closing_024": {
      "id": "tc_c06_zhouzhi_after_closing_024",
      "type": "line",
      "scene": "ts_c06_zhouzhi_after_closing_soymilk",
      "speaker": "zhouzhi",
      "character": "zhouzhi",
      "text": "“用了才知道。那天只知道放得进包。”",
      "next": "tc_c06_zhouzhi_after_closing_025",
      "expression": "outfit-light-blue-shirt",
      "avatarExpression": "outfit-light-blue-shirt"
    },
    "tc_c06_zhouzhi_after_closing_025": {
      "id": "tc_c06_zhouzhi_after_closing_025",
      "type": "line",
      "scene": "ts_c06_zhouzhi_after_closing_accessories",
      "speaker": "narrator",
      "character": "zhouzhi",
      "text": "她说得很平常，我却忽然想起第一次陪她买伞时，我挑了把能遮两个人的，根本没问她需要什么。",
      "next": "tc_c06_zhouzhi_after_closing_026",
      "expression": "outfit-light-blue-shirt"
    },
    "tc_c06_zhouzhi_after_closing_026": {
      "id": "tc_c06_zhouzhi_after_closing_026",
      "type": "line",
      "scene": "ts_c06_zhouzhi_after_closing_accessories",
      "speaker": "narrator",
      "character": "zhouzhi",
      "text": "喝完豆浆，她提议走回去一段。我们经过一排刚开门的小店，她停在一家门口看耳钉，说自己很久没慢慢选这种东西。",
      "next": "tc_c06_zhouzhi_after_closing_027",
      "expression": "outfit-light-blue-shirt"
    },
    "tc_c06_zhouzhi_after_closing_027": {
      "id": "tc_c06_zhouzhi_after_closing_027",
      "type": "line",
      "scene": "ts_c06_zhouzhi_after_closing_accessories",
      "speaker": "narrator",
      "character": "zhouzhi",
      "text": "我问要不要进去，她反问我有没有耐心。我看了眼时间，今天不用上班，回去也没有别的安排。",
      "next": "tc_c06_zhouzhi_after_closing_028",
      "expression": "outfit-light-blue-shirt"
    },
    "tc_c06_zhouzhi_after_closing_028": {
      "id": "tc_c06_zhouzhi_after_closing_028",
      "type": "line",
      "scene": "ts_c06_zhouzhi_after_closing_accessories",
      "speaker": "wenwen",
      "character": "zhouzhi",
      "text": "“有。”",
      "next": "tc_c06_zhouzhi_after_closing_029",
      "expression": "outfit-light-blue-shirt"
    },
    "tc_c06_zhouzhi_after_closing_029": {
      "id": "tc_c06_zhouzhi_after_closing_029",
      "type": "line",
      "scene": "ts_c06_zhouzhi_after_closing_accessories",
      "speaker": "narrator",
      "character": "zhouzhi",
      "text": "她进去后挑了很久，最后什么也没买。出来时看看我，像等我说一句白逛了。我只是把她刚才交给我的伞还过去，问接下来走哪边。",
      "next": "tc_c06_zhouzhi_after_closing_030",
      "expression": "outfit-light-blue-shirt"
    },
    "tc_c06_zhouzhi_after_closing_030": {
      "id": "tc_c06_zhouzhi_after_closing_030",
      "type": "line",
      "scene": "ts_c06_zhouzhi_after_closing_accessories",
      "speaker": "narrator",
      "character": "zhouzhi",
      "text": "周栀把伞握好，笑着站到我身旁。",
      "next": "tc_c06_zhouzhi_after_closing_031",
      "expression": "outfit-light-blue-shirt"
    },
    "tc_c06_zhouzhi_after_closing_031": {
      "id": "tc_c06_zhouzhi_after_closing_031",
      "type": "line",
      "scene": "ts_c06_zhouzhi_after_closing_accessories",
      "speaker": "zhouzhi",
      "character": "zhouzhi",
      "text": "“这边。还不想回去。”",
      "next": "tc_c06_common_exit",
      "expression": "outfit-light-blue-shirt",
      "avatarExpression": "outfit-light-blue-shirt"
    },
    "tc_c07_zhouzhi_entry": {
      "id": "tc_c07_zhouzhi_entry",
      "type": "line",
      "scene": "ts_c07_zhouzhi_her_plans",
      "speaker": "narrator",
      "character": null,
      "text": "周栀和朋友已经试着卖过几个晚上的夜宵。有一晚东西没卖完，两个人分着带回去；另一晚提前收摊，回家反而饿了，又各煮了一碗面。她在消息里讲这些，没有附上一句很快就会顺利。",
      "next": "tc_c07_zhouzhi_her_plans_002"
    },
    "tc_c07_zhouzhi_her_plans_002": {
      "id": "tc_c07_zhouzhi_her_plans_002",
      "type": "line",
      "scene": "ts_c07_zhouzhi_her_plans",
      "speaker": "narrator",
      "character": null,
      "text": "我问过能不能去看看。她说来买吃的当然可以，但别为了等她收摊一直坐到很晚，我还有自己的觉要睡，摊上也不是缺了我就不能动。",
      "next": "tc_c07_zhouzhi_her_plans_003"
    },
    "tc_c07_zhouzhi_her_plans_003": {
      "id": "tc_c07_zhouzhi_her_plans_003",
      "type": "line",
      "scene": "ts_c07_zhouzhi_her_plans",
      "speaker": "narrator",
      "character": "zhouzhi",
      "text": "于是我去过一次，买了一份自己想吃的，坐在另一边吃完便走。她在忙，抬头看见我，只晃了晃手里的夹子。我没有等到她专门抽空来陪，回去后她发消息，说看见我把不喜欢的那样菜挑到旁边了，下回直接讲，别躲着研究。",
      "next": "tc_c07_zhouzhi_her_plans_004"
    },
    "tc_c07_zhouzhi_her_plans_004": {
      "id": "tc_c07_zhouzhi_her_plans_004",
      "type": "line",
      "scene": "ts_c07_zhouzhi_her_plans",
      "speaker": "narrator",
      "character": "zhouzhi",
      "text": "第43天她没安排试卖。我补觉后和她碰面，她却先告诉我，下个休息日要和朋友出去，不是谈摊位，单纯去逛街。",
      "next": "tc_c07_zhouzhi_her_plans_005"
    },
    "tc_c07_zhouzhi_her_plans_005": {
      "id": "tc_c07_zhouzhi_her_plans_005",
      "type": "line",
      "scene": "ts_c07_zhouzhi_her_plans",
      "speaker": "narrator",
      "character": "zhouzhi",
      "text": "“是不是我最近总说我和朋友，你会觉得一直插不上？”她问。",
      "next": "tc_c07_zhouzhi_her_plans_006"
    },
    "tc_c07_zhouzhi_her_plans_006": {
      "id": "tc_c07_zhouzhi_her_plans_006",
      "type": "line",
      "scene": "ts_c07_zhouzhi_her_plans",
      "speaker": "wenwen",
      "character": "zhouzhi",
      "text": "“有时会。但你也不能只跟我见面。”",
      "next": "tc_c07_zhouzhi_her_plans_007"
    },
    "tc_c07_zhouzhi_her_plans_007": {
      "id": "tc_c07_zhouzhi_her_plans_007",
      "type": "line",
      "scene": "ts_c07_zhouzhi_her_plans",
      "speaker": "narrator",
      "character": "zhouzhi",
      "text": "她看着我，点了点头。",
      "next": "tc_c07_zhouzhi_her_plans_008"
    },
    "tc_c07_zhouzhi_her_plans_008": {
      "id": "tc_c07_zhouzhi_her_plans_008",
      "type": "line",
      "scene": "ts_c07_zhouzhi_her_plans",
      "speaker": "zhouzhi",
      "character": "zhouzhi",
      "text": "“嗯。我想跟你约，也想跟她出去。这两件事得各留时间。”",
      "next": "tc_c07_zhouzhi_her_plans_009"
    },
    "tc_c07_zhouzhi_her_plans_009": {
      "id": "tc_c07_zhouzhi_her_plans_009",
      "type": "line",
      "scene": "ts_c07_zhouzhi_her_plans",
      "speaker": "narrator",
      "character": "zhouzhi",
      "text": "我问她今天想去哪儿，她从包里摸出手机，说还记得第23天有个“下次”。",
      "next": "tc_c07_zhouzhi_outing_gate"
    },
    "tc_c07_zhouzhi_river_return_001": {
      "id": "tc_c07_zhouzhi_river_return_001",
      "type": "line",
      "scene": "ts_c07_zhouzhi_river_return",
      "speaker": "narrator",
      "character": "zhouzhi",
      "text": "周栀真选了一首很吵的歌。刚听了几秒，我就把音量调低，她笑得靠向椅背，说她自己平时也不会开那么大。",
      "next": "tc_c07_zhouzhi_river_return_002",
      "expression": "expression-smile"
    },
    "tc_c07_zhouzhi_river_return_002": {
      "id": "tc_c07_zhouzhi_river_return_002",
      "type": "line",
      "scene": "ts_c07_zhouzhi_river_return",
      "speaker": "narrator",
      "character": "zhouzhi",
      "text": "我们仍各戴一只耳机，手机放在中间。走到副歌，她没有唱，只跟着点了两下头。我没问她为什么不唱，她反而问我会不会觉得只听有点无聊。",
      "next": "tc_c07_zhouzhi_river_return_003"
    },
    "tc_c07_zhouzhi_river_return_003": {
      "id": "tc_c07_zhouzhi_river_return_003",
      "type": "line",
      "scene": "ts_c07_zhouzhi_river_return",
      "speaker": "wenwen",
      "character": "zhouzhi",
      "text": "“你上次也没唱。”",
      "next": "tc_c07_zhouzhi_river_return_004"
    },
    "tc_c07_zhouzhi_river_return_004": {
      "id": "tc_c07_zhouzhi_river_return_004",
      "type": "line",
      "scene": "ts_c07_zhouzhi_river_return",
      "speaker": "zhouzhi",
      "character": "zhouzhi",
      "text": "“嗯。以前总有人听见歌就叫我来两句。”",
      "next": "tc_c07_zhouzhi_river_return_005"
    },
    "tc_c07_zhouzhi_river_return_005": {
      "id": "tc_c07_zhouzhi_river_return_005",
      "type": "line",
      "scene": "ts_c07_zhouzhi_river_return",
      "speaker": "wenwen",
      "character": "zhouzhi",
      "text": "“我今天主要想知道，这首哪里最好听。”",
      "next": "tc_c07_zhouzhi_river_return_006"
    },
    "tc_c07_zhouzhi_river_return_006": {
      "id": "tc_c07_zhouzhi_river_return_006",
      "type": "line",
      "scene": "ts_c07_zhouzhi_river_return",
      "speaker": "narrator",
      "character": "zhouzhi",
      "text": "她把进度拖回去一点，指着很短的一段伴奏，让我仔细听。我听了两遍才找见，她满意地把手机放下，说这下能跟我讨论了。",
      "next": "tc_c07_zhouzhi_river_return_007"
    },
    "tc_c07_zhouzhi_river_return_007": {
      "id": "tc_c07_zhouzhi_river_return_007",
      "type": "line",
      "scene": "ts_c07_zhouzhi_river_return",
      "speaker": "narrator",
      "character": "zhouzhi",
      "text": "换到我的曲子时，她挪过来一点，伸手把耳机线从我衣扣上解开。手背碰到我胸前的布料，她也没大惊小怪，只说我这件衣服专门挂东西。",
      "next": "tc_c07_zhouzhi_river_return_008"
    },
    "tc_c07_zhouzhi_river_return_008": {
      "id": "tc_c07_zhouzhi_river_return_008",
      "type": "line",
      "scene": "ts_c07_zhouzhi_river_return",
      "speaker": "narrator",
      "character": "zhouzhi",
      "text": "我们听完了两首才走，没有给谁唱一场，也没有把安静的一小时变成欠着的表演。",
      "next": "tc_c07_zhouzhi_crossroad_001"
    },
    "tc_c07_zhouzhi_cinema_return_001": {
      "id": "tc_c07_zhouzhi_cinema_return_001",
      "type": "line",
      "scene": "ts_c07_zhouzhi_cinema_return",
      "speaker": "narrator",
      "character": "zhouzhi",
      "text": "她挑了一部节奏慢些的片子。我有点担心自己看不进去，提前问她如果真觉得闷，能不能散场后说实话。",
      "next": "tc_c07_zhouzhi_cinema_return_002"
    },
    "tc_c07_zhouzhi_cinema_return_002": {
      "id": "tc_c07_zhouzhi_cinema_return_002",
      "type": "line",
      "scene": "ts_c07_zhouzhi_cinema_return",
      "speaker": "zhouzhi",
      "character": "zhouzhi",
      "text": "“能。只要别在里面每五分钟问还有多久。”",
      "next": "tc_c07_zhouzhi_cinema_return_003"
    },
    "tc_c07_zhouzhi_cinema_return_003": {
      "id": "tc_c07_zhouzhi_cinema_return_003",
      "type": "line",
      "scene": "ts_c07_zhouzhi_cinema_return",
      "speaker": "narrator",
      "character": "zhouzhi",
      "text": "这次仍坐靠过道的位置。我看了一半，竟然真的跟着故事安静下来。电影结束后，我们没有立刻起身，在字幕滚动的时候聊了两句。我说喜欢最后两个人各走一边，周栀说她更喜欢他们之前那场说得不漂亮的道歉。",
      "next": "tc_c07_zhouzhi_cinema_return_004"
    },
    "tc_c07_zhouzhi_cinema_return_004": {
      "id": "tc_c07_zhouzhi_cinema_return_004",
      "type": "line",
      "scene": "ts_c07_zhouzhi_cinema_return",
      "speaker": "narrator",
      "character": "zhouzhi",
      "text": "“你看，还不一样。”她说。",
      "next": "tc_c07_zhouzhi_cinema_return_005"
    },
    "tc_c07_zhouzhi_cinema_return_005": {
      "id": "tc_c07_zhouzhi_cinema_return_005",
      "type": "line",
      "scene": "ts_c07_zhouzhi_cinema_return",
      "speaker": "wenwen",
      "character": "zhouzhi",
      "text": "“但这次都没睡着。”",
      "next": "tc_c07_zhouzhi_cinema_return_006"
    },
    "tc_c07_zhouzhi_cinema_return_006": {
      "id": "tc_c07_zhouzhi_cinema_return_006",
      "type": "line",
      "scene": "ts_c07_zhouzhi_cinema_return",
      "speaker": "narrator",
      "character": "zhouzhi",
      "text": "她把票根收好，没有要求我也留下。我自己折起来放进口袋，走到门口才发现纸被攥得有点皱。",
      "next": "tc_c07_zhouzhi_cinema_return_007"
    },
    "tc_c07_zhouzhi_cinema_return_007": {
      "id": "tc_c07_zhouzhi_cinema_return_007",
      "type": "line",
      "scene": "ts_c07_zhouzhi_cinema_return",
      "speaker": "narrator",
      "character": "zhouzhi",
      "text": "“以后别拿它当书签，会把书硌出坑。”她说。",
      "next": "tc_c07_zhouzhi_cinema_return_008"
    },
    "tc_c07_zhouzhi_cinema_return_008": {
      "id": "tc_c07_zhouzhi_cinema_return_008",
      "type": "line",
      "scene": "ts_c07_zhouzhi_cinema_return",
      "speaker": "wenwen",
      "character": "zhouzhi",
      "text": "“你为什么管我怎么用票？”",
      "next": "tc_c07_zhouzhi_cinema_return_009"
    },
    "tc_c07_zhouzhi_cinema_return_009": {
      "id": "tc_c07_zhouzhi_cinema_return_009",
      "type": "line",
      "scene": "ts_c07_zhouzhi_cinema_return",
      "speaker": "zhouzhi",
      "character": "zhouzhi",
      "text": "“因为我看见了。你不听也行。”",
      "next": "tc_c07_zhouzhi_cinema_return_010"
    },
    "tc_c07_zhouzhi_cinema_return_010": {
      "id": "tc_c07_zhouzhi_cinema_return_010",
      "type": "line",
      "scene": "ts_c07_zhouzhi_cinema_return",
      "speaker": "narrator",
      "character": "zhouzhi",
      "text": "她说完伸手，把我手里折得很糟的票根按平了一点，再还给我。",
      "next": "tc_c07_zhouzhi_crossroad_001"
    },
    "tc_c07_zhouzhi_crossroad_001": {
      "id": "tc_c07_zhouzhi_crossroad_001",
      "type": "line",
      "scene": "ts_c07_zhouzhi_crossroad",
      "speaker": "narrator",
      "character": "zhouzhi",
      "text": "傍晚走到路口，她说自己要去另一条街买点东西，问我怎么回去。我说先回住处吃晚饭，九点多照常出门上班。",
      "next": "tc_c07_zhouzhi_crossroad_002"
    },
    "tc_c07_zhouzhi_crossroad_002": {
      "id": "tc_c07_zhouzhi_crossroad_002",
      "type": "line",
      "scene": "ts_c07_zhouzhi_crossroad",
      "speaker": "narrator",
      "character": "zhouzhi",
      "text": "她便没让我陪着绕路。我也没有把“我都已经来了”挂在嘴上。分别前她忽然问：“头一回跟毛狼一起吃面，你记得我点了什么吗？”",
      "next": "tc_c07_zhouzhi_crossroad_003"
    },
    "tc_c07_zhouzhi_crossroad_003": {
      "id": "tc_c07_zhouzhi_crossroad_003",
      "type": "line",
      "scene": "ts_c07_zhouzhi_crossroad",
      "speaker": "narrator",
      "character": "zhouzhi",
      "text": "我努力想了想，承认记不清。",
      "next": "tc_c07_zhouzhi_crossroad_004"
    },
    "tc_c07_zhouzhi_crossroad_004": {
      "id": "tc_c07_zhouzhi_crossroad_004",
      "type": "line",
      "scene": "ts_c07_zhouzhi_crossroad",
      "speaker": "narrator",
      "character": "zhouzhi",
      "text": "“我也记不清你点了什么。”她笑，“不用考。只是刚想起，那会儿还觉得你特别客气。”",
      "next": "tc_c07_zhouzhi_crossroad_005"
    },
    "tc_c07_zhouzhi_crossroad_005": {
      "id": "tc_c07_zhouzhi_crossroad_005",
      "type": "line",
      "scene": "ts_c07_zhouzhi_crossroad",
      "speaker": "wenwen",
      "character": "zhouzhi",
      "text": "“现在呢？”",
      "next": "tc_c07_zhouzhi_crossroad_006"
    },
    "tc_c07_zhouzhi_crossroad_006": {
      "id": "tc_c07_zhouzhi_crossroad_006",
      "type": "line",
      "scene": "ts_c07_zhouzhi_crossroad",
      "speaker": "narrator",
      "character": "zhouzhi",
      "text": "她看了眼我手里的袋子，又抬眼看我。",
      "next": "tc_c07_zhouzhi_crossroad_007"
    },
    "tc_c07_zhouzhi_crossroad_007": {
      "id": "tc_c07_zhouzhi_crossroad_007",
      "type": "line",
      "scene": "ts_c07_zhouzhi_crossroad",
      "speaker": "zhouzhi",
      "character": "zhouzhi",
      "text": "“现在有时候欠两句，但还愿意见。”",
      "next": "tc_c07_common_exit"
    },
    "tc_c07_zhouzhi_outing_gate": {
      "id": "tc_c07_zhouzhi_outing_gate",
      "type": "gate",
      "scene": "ts_c07_zhouzhi_her_plans",
      "cases": [
        {
          "flag": "zhouzhiOuting",
          "value": "river",
          "next": "tc_c07_zhouzhi_river_return_001"
        },
        {
          "flag": "zhouzhiOuting",
          "value": "cinema",
          "next": "tc_c07_zhouzhi_cinema_return_001"
        }
      ],
      "default": null,
      "exhaustive": true
    },
    "tc_c08_zhouzhi_entry": {
      "id": "tc_c08_zhouzhi_entry",
      "type": "line",
      "scene": "ts_c08_zhouzhi_dinner_budget",
      "speaker": "narrator",
      "character": null,
      "text": "第52天，我跟师匠商量过轮班，眼下仍在试排。我把新的安排告诉周栀，她看完就问第57天下午我能不能睡够。我说能，夜里还要值班，但晚饭有空。",
      "next": "tc_c08_zhouzhi_dinner_budget_002"
    },
    "tc_c08_zhouzhi_dinner_budget_002": {
      "id": "tc_c08_zhouzhi_dinner_budget_002",
      "type": "line",
      "scene": "ts_c08_zhouzhi_dinner_budget",
      "speaker": "narrator",
      "character": "zhouzhi",
      "text": "我挑了一家门面很漂亮的店，想请她吃顿好的。走到门口，瞥见菜单，才发现自己事先看的是另一份便宜许多的套餐。",
      "next": "tc_c08_zhouzhi_dinner_budget_003"
    },
    "tc_c08_zhouzhi_dinner_budget_003": {
      "id": "tc_c08_zhouzhi_dinner_budget_003",
      "type": "line",
      "scene": "ts_c08_zhouzhi_dinner_budget",
      "speaker": "narrator",
      "character": "zhouzhi",
      "text": "我站在那里没出声。周栀已经往前走了两步，见我没跟上，又退回来。",
      "next": "tc_c08_zhouzhi_dinner_budget_004"
    },
    "tc_c08_zhouzhi_dinner_budget_004": {
      "id": "tc_c08_zhouzhi_dinner_budget_004",
      "type": "line",
      "scene": "ts_c08_zhouzhi_dinner_budget",
      "speaker": "zhouzhi",
      "character": "zhouzhi",
      "text": "“怎么了？”",
      "next": "tc_c08_zhouzhi_dinner_budget_005"
    },
    "tc_c08_zhouzhi_dinner_budget_005": {
      "id": "tc_c08_zhouzhi_dinner_budget_005",
      "type": "line",
      "scene": "ts_c08_zhouzhi_dinner_budget",
      "speaker": "wenwen",
      "character": "zhouzhi",
      "text": "“没事，进去吧。”",
      "next": "tc_c08_zhouzhi_dinner_budget_006"
    },
    "tc_c08_zhouzhi_dinner_budget_006": {
      "id": "tc_c08_zhouzhi_dinner_budget_006",
      "type": "line",
      "scene": "ts_c08_zhouzhi_dinner_budget",
      "speaker": "narrator",
      "character": "zhouzhi",
      "text": "她看看我的脸，再看看菜单，没有替我说贵，只问我是不是真的想吃这家。",
      "next": "tc_c08_zhouzhi_dinner_budget_007"
    },
    "tc_c08_zhouzhi_dinner_budget_007": {
      "id": "tc_c08_zhouzhi_dinner_budget_007",
      "type": "line",
      "scene": "ts_c08_zhouzhi_dinner_budget",
      "speaker": "narrator",
      "character": "zhouzhi",
      "text": "我原想说难得一次，后面又接了一句自己都听腻的自嘲：“我这个网管，选个地方都选不明白。”",
      "next": "tc_c08_zhouzhi_dinner_budget_008"
    },
    "tc_c08_zhouzhi_dinner_budget_008": {
      "id": "tc_c08_zhouzhi_dinner_budget_008",
      "type": "line",
      "scene": "ts_c08_zhouzhi_dinner_budget",
      "speaker": "narrator",
      "character": "zhouzhi",
      "text": "周栀没有笑。",
      "next": "tc_c08_zhouzhi_dinner_budget_009",
      "expression": "expression-smile"
    },
    "tc_c08_zhouzhi_dinner_budget_009": {
      "id": "tc_c08_zhouzhi_dinner_budget_009",
      "type": "line",
      "scene": "ts_c08_zhouzhi_dinner_budget",
      "speaker": "zhouzhi",
      "character": "zhouzhi",
      "text": "“选错菜单跟你做什么工作有什么关系？”",
      "next": "tc_c08_zhouzhi_dinner_budget_010"
    },
    "tc_c08_zhouzhi_dinner_budget_010": {
      "id": "tc_c08_zhouzhi_dinner_budget_010",
      "type": "line",
      "scene": "ts_c08_zhouzhi_dinner_budget",
      "speaker": "narrator",
      "character": "zhouzhi",
      "text": "我握着手机，屏幕上那个套餐小得几乎看不清。她靠到旁边，不挡住店门，等我把话说完。",
      "next": "tc_c08_zhouzhi_dinner_budget_011"
    },
    "tc_c08_zhouzhi_dinner_budget_011": {
      "id": "tc_c08_zhouzhi_dinner_budget_011",
      "type": "line",
      "scene": "ts_c08_zhouzhi_dinner_budget",
      "speaker": "wenwen",
      "character": "zhouzhi",
      "text": "“我想请你吃点好一点的。刚才才发现，比我打算的多不少。”",
      "next": "tc_c08_zhouzhi_dinner_budget_012"
    },
    "tc_c08_zhouzhi_dinner_budget_012": {
      "id": "tc_c08_zhouzhi_dinner_budget_012",
      "type": "line",
      "scene": "ts_c08_zhouzhi_dinner_budget",
      "speaker": "zhouzhi",
      "character": "zhouzhi",
      "text": "“那你说这句就行。我今天没带打分表。”",
      "next": "tc_c08_zhouzhi_dinner_budget_013"
    },
    "tc_c08_zhouzhi_dinner_budget_013": {
      "id": "tc_c08_zhouzhi_dinner_budget_013",
      "type": "line",
      "scene": "ts_c08_zhouzhi_dinner_budget",
      "speaker": "narrator",
      "character": "zhouzhi",
      "text": "她语气很平，我却因为她没有立刻替我解围，反而慢慢不紧张了。我说自己确实舍不得一次花那么多，房租刚交，想留一点钱。说完以后，面前的路还是那条路，没有谁忽然觉得我矮了一截。",
      "next": "tc_c08_zhouzhi_dinner_budget_014"
    },
    "tc_c08_zhouzhi_dinner_budget_014": {
      "id": "tc_c08_zhouzhi_dinner_budget_014",
      "type": "line",
      "scene": "ts_c08_zhouzhi_dinner_budget",
      "speaker": "narrator",
      "character": "zhouzhi",
      "text": "周栀从手机里翻出另一家店，问我上回吃的小锅饭怎么样。我说喜欢，她便决定往那边走。",
      "next": "tc_c08_zhouzhi_dinner_budget_015"
    },
    "tc_c08_zhouzhi_dinner_budget_015": {
      "id": "tc_c08_zhouzhi_dinner_budget_015",
      "type": "line",
      "scene": "ts_c08_zhouzhi_dinner_budget",
      "speaker": "zhouzhi",
      "character": "zhouzhi",
      "text": "“今天我自己的那份自己付。你若还想请，我可以接受一杯热豆浆。”",
      "next": "tc_c08_zhouzhi_dinner_budget_016"
    },
    "tc_c08_zhouzhi_dinner_budget_016": {
      "id": "tc_c08_zhouzhi_dinner_budget_016",
      "type": "line",
      "scene": "ts_c08_zhouzhi_dinner_budget",
      "speaker": "wenwen",
      "character": "zhouzhi",
      "text": "“你确定没在给我找台阶？”",
      "next": "tc_c08_zhouzhi_dinner_budget_017"
    },
    "tc_c08_zhouzhi_dinner_budget_017": {
      "id": "tc_c08_zhouzhi_dinner_budget_017",
      "type": "line",
      "scene": "ts_c08_zhouzhi_dinner_budget",
      "speaker": "zhouzhi",
      "character": "zhouzhi",
      "text": "“在给我自己找晚饭。再站下去，便宜的也要排队了。”",
      "next": "tc_c08_zhouzhi_dinner_budget_018"
    },
    "tc_c08_zhouzhi_dinner_budget_018": {
      "id": "tc_c08_zhouzhi_dinner_budget_018",
      "type": "line",
      "scene": "ts_c08_zhouzhi_dinner_budget_simple_dinner",
      "speaker": "narrator",
      "character": "zhouzhi",
      "text": "到了店里，我们分别点了喜欢的菜，没有凑成一个看起来很体面的套餐。她说最近试卖还在摸索，有几天回去特别困，连想吃什么都懒得想，最后吃得很随便。",
      "next": "tc_c08_zhouzhi_dinner_budget_019"
    },
    "tc_c08_zhouzhi_dinner_budget_019": {
      "id": "tc_c08_zhouzhi_dinner_budget_019",
      "type": "line",
      "scene": "ts_c08_zhouzhi_dinner_budget_simple_dinner",
      "speaker": "wenwen",
      "character": "zhouzhi",
      "text": "“你不是最在意热饭？”",
      "next": "tc_c08_zhouzhi_dinner_budget_020"
    },
    "tc_c08_zhouzhi_dinner_budget_020": {
      "id": "tc_c08_zhouzhi_dinner_budget_020",
      "type": "line",
      "scene": "ts_c08_zhouzhi_dinner_budget_simple_dinner",
      "speaker": "zhouzhi",
      "character": "zhouzhi",
      "text": "“在意也会偷懒啊。以为换个事情做，我就突然能把自己照顾得很好，想得太美。”",
      "next": "tc_c08_zhouzhi_dinner_budget_021"
    },
    "tc_c08_zhouzhi_dinner_budget_021": {
      "id": "tc_c08_zhouzhi_dinner_budget_021",
      "type": "line",
      "scene": "ts_c08_zhouzhi_dinner_budget_simple_dinner",
      "speaker": "narrator",
      "character": "zhouzhi",
      "text": "她说完笑了一下，接着认真把碗里剩下的饭吃完。我发现她也会算钱，会嫌麻烦，会因为怕朋友辛苦而多揽一点，然后第二天又累得不想说话。",
      "next": "tc_c08_zhouzhi_dinner_budget_022"
    },
    "tc_c08_zhouzhi_dinner_budget_022": {
      "id": "tc_c08_zhouzhi_dinner_budget_022",
      "type": "line",
      "scene": "ts_c08_zhouzhi_dinner_budget_soymilk",
      "speaker": "narrator",
      "character": "zhouzhi",
      "text": "饭后我去买了两杯热豆浆，一杯给她，一杯留给自己。她接过去，隔着纸杯暖手，沿着街慢慢走。",
      "next": "tc_c08_zhouzhi_dinner_budget_023"
    },
    "tc_c08_zhouzhi_dinner_budget_023": {
      "id": "tc_c08_zhouzhi_dinner_budget_023",
      "type": "line",
      "scene": "ts_c08_zhouzhi_dinner_budget_soymilk",
      "speaker": "narrator",
      "character": "zhouzhi",
      "text": "“这顿挺好。”她说。",
      "next": "tc_c08_zhouzhi_dinner_budget_024"
    },
    "tc_c08_zhouzhi_dinner_budget_024": {
      "id": "tc_c08_zhouzhi_dinner_budget_024",
      "type": "line",
      "scene": "ts_c08_zhouzhi_dinner_budget_soymilk",
      "speaker": "narrator",
      "character": "zhouzhi",
      "text": "我没有再确认她是不是在安慰我，只说我也吃饱了。",
      "next": "tc_c08_zhouzhi_dinner_budget_025"
    },
    "tc_c08_zhouzhi_dinner_budget_025": {
      "id": "tc_c08_zhouzhi_dinner_budget_025",
      "type": "line",
      "scene": "ts_c08_zhouzhi_dinner_budget_soymilk",
      "speaker": "narrator",
      "character": "zhouzhi",
      "text": "她沿着杯沿吹了一圈，说豆浆还是烫。我举起自己的，想换给她，刚碰一下杯壁便缩了手。两杯都一样。她看着我那个已经摆出帮忙姿势的胳膊，笑得赶紧把豆浆拿远。我们就在街边多站了一会儿，看老板把门前翻倒的塑料凳一张张扶好。她不急着喝，我也不急着走。",
      "next": "tc_c08_zhouzhi_dinner_budget_026"
    },
    "tc_c08_zhouzhi_dinner_budget_026": {
      "id": "tc_c08_zhouzhi_dinner_budget_026",
      "type": "line",
      "scene": "ts_c08_zhouzhi_dinner_budget_soymilk",
      "speaker": "narrator",
      "character": "zhouzhi",
      "text": "走到要分别的地方，她问轮班试过以后会不会少一点夜班。我说还在商量，得等大家的安排都合适，不是已经确定以后都能空出晚上。",
      "next": "tc_c08_zhouzhi_dinner_budget_027"
    },
    "tc_c08_zhouzhi_dinner_budget_027": {
      "id": "tc_c08_zhouzhi_dinner_budget_027",
      "type": "line",
      "scene": "ts_c08_zhouzhi_dinner_budget_soymilk",
      "speaker": "narrator",
      "character": "zhouzhi",
      "text": "她点点头，把下一次想见的几个时间念给我听。我们先定了一个双方都能保证的下午，其他的等排班明确再说。",
      "next": "tc_c08_zhouzhi_dinner_budget_028"
    },
    "tc_c08_zhouzhi_dinner_budget_028": {
      "id": "tc_c08_zhouzhi_dinner_budget_028",
      "type": "line",
      "scene": "ts_c08_zhouzhi_dinner_budget_soymilk",
      "speaker": "narrator",
      "character": "zhouzhi",
      "text": "她收起手机，忽然用肩膀轻碰我一下。",
      "next": "tc_c08_zhouzhi_dinner_budget_029"
    },
    "tc_c08_zhouzhi_dinner_budget_029": {
      "id": "tc_c08_zhouzhi_dinner_budget_029",
      "type": "line",
      "scene": "ts_c08_zhouzhi_dinner_budget_soymilk",
      "speaker": "zhouzhi",
      "character": "zhouzhi",
      "text": "“下次选错店也告诉我。说不定我也选错过，轮到我笑自己。”",
      "next": "tc_c08_common_exit"
    },
    "tc_c09_zhouzhi_entry": {
      "id": "tc_c09_zhouzhi_entry",
      "type": "line",
      "scene": "ts_c09_zhouzhi_relationship",
      "speaker": "narrator",
      "character": null,
      "text": "第61天之后，轮班的安排定下来。我还会值夜班，但能提前给出几个不需要临时挤出来的休息日。周栀把自己和朋友试卖的时间错开，在第75天约我吃晚饭。",
      "next": "tc_c09_zhouzhi_relationship_002"
    },
    "tc_c09_zhouzhi_relationship_002": {
      "id": "tc_c09_zhouzhi_relationship_002",
      "type": "line",
      "scene": "ts_c09_zhouzhi_relationship",
      "speaker": "narrator",
      "character": "zhouzhi",
      "text": "这次她没有急着报店名，先问我想不想去河边那家小馆。我说想，问她是不是也想吃，她回了句：“是，已经想两天了。”",
      "next": "tc_c09_zhouzhi_relationship_003"
    },
    "tc_c09_zhouzhi_relationship_003": {
      "id": "tc_c09_zhouzhi_relationship_003",
      "type": "line",
      "scene": "ts_c09_zhouzhi_relationship",
      "speaker": "narrator",
      "character": "zhouzhi",
      "text": "她来得比我早，给自己倒了水，却没替我点菜。我坐下后自己选了一份，老板问辣椒怎么放，她指指两个碟子，说各放各的。",
      "next": "tc_c09_zhouzhi_relationship_004"
    },
    "tc_c09_zhouzhi_relationship_004": {
      "id": "tc_c09_zhouzhi_relationship_004",
      "type": "line",
      "scene": "ts_c09_zhouzhi_relationship",
      "speaker": "narrator",
      "character": "zhouzhi",
      "text": "饭快吃完时，她从包里取出纸巾，擦干净手，又把手机翻过来扣在桌上。",
      "next": "tc_c09_zhouzhi_relationship_005"
    },
    "tc_c09_zhouzhi_relationship_005": {
      "id": "tc_c09_zhouzhi_relationship_005",
      "type": "line",
      "scene": "ts_c09_zhouzhi_relationship",
      "speaker": "zhouzhi",
      "character": "zhouzhi",
      "text": "“我有句话想说。”",
      "next": "tc_c09_zhouzhi_relationship_006"
    },
    "tc_c09_zhouzhi_relationship_006": {
      "id": "tc_c09_zhouzhi_relationship_006",
      "type": "line",
      "scene": "ts_c09_zhouzhi_relationship",
      "speaker": "narrator",
      "character": "zhouzhi",
      "text": "我以为是夜宵的事，正要问，她看见我张口，先抬手挡住。",
      "next": "tc_c09_zhouzhi_relationship_007"
    },
    "tc_c09_zhouzhi_relationship_007": {
      "id": "tc_c09_zhouzhi_relationship_007",
      "type": "line",
      "scene": "ts_c09_zhouzhi_relationship",
      "speaker": "zhouzhi",
      "character": "zhouzhi",
      "text": "“不是请你帮忙。也不是问你有没有别的好工作。”",
      "next": "tc_c09_zhouzhi_relationship_008"
    },
    "tc_c09_zhouzhi_relationship_008": {
      "id": "tc_c09_zhouzhi_relationship_008",
      "type": "line",
      "scene": "ts_c09_zhouzhi_relationship",
      "speaker": "narrator",
      "character": "zhouzhi",
      "text": "她说完，自己笑了一声，像是把那一点紧张先笑出去。",
      "next": "tc_c09_zhouzhi_relationship_009"
    },
    "tc_c09_zhouzhi_relationship_009": {
      "id": "tc_c09_zhouzhi_relationship_009",
      "type": "line",
      "scene": "ts_c09_zhouzhi_relationship",
      "speaker": "zhouzhi",
      "character": "zhouzhi",
      "text": "“我喜欢跟你单独待着。现在想再往前一点，不只是想吃饭了就找你。”",
      "next": "tc_c09_zhouzhi_relationship_010"
    },
    "tc_c09_zhouzhi_relationship_010": {
      "id": "tc_c09_zhouzhi_relationship_010",
      "type": "line",
      "scene": "ts_c09_zhouzhi_relationship",
      "speaker": "narrator",
      "character": "zhouzhi",
      "text": "我看着她。她平时讲话那么直，这会儿却低头把纸巾折了两次，边角没对齐，又停下来，不折了。",
      "next": "tc_c09_zhouzhi_relationship_011"
    },
    "tc_c09_zhouzhi_relationship_011": {
      "id": "tc_c09_zhouzhi_relationship_011",
      "type": "line",
      "scene": "ts_c09_zhouzhi_relationship",
      "speaker": "zhouzhi",
      "character": "zhouzhi",
      "text": "“你愿不愿意跟我交往？”",
      "next": "tc_c09_zhouzhi_relationship_choice"
    },
    "tc_c09_zhouzhi_dating_001": {
      "id": "tc_c09_zhouzhi_dating_001",
      "type": "line",
      "scene": "ts_c09_zhouzhi_dating",
      "speaker": "narrator",
      "character": "zhouzhi",
      "text": "我答得有些快，周栀抬起头，眼睛里的紧绷一下散开了。",
      "next": "tc_c09_zhouzhi_dating_002"
    },
    "tc_c09_zhouzhi_dating_002": {
      "id": "tc_c09_zhouzhi_dating_002",
      "type": "line",
      "scene": "ts_c09_zhouzhi_dating",
      "speaker": "zhouzhi",
      "character": "zhouzhi",
      "text": "“你至少想半秒吧。”",
      "next": "tc_c09_zhouzhi_dating_003"
    },
    "tc_c09_zhouzhi_dating_003": {
      "id": "tc_c09_zhouzhi_dating_003",
      "type": "line",
      "scene": "ts_c09_zhouzhi_dating",
      "speaker": "wenwen",
      "character": "zhouzhi",
      "text": "“已经想过了。”",
      "next": "tc_c09_zhouzhi_dating_004"
    },
    "tc_c09_zhouzhi_dating_004": {
      "id": "tc_c09_zhouzhi_dating_004",
      "type": "line",
      "scene": "ts_c09_zhouzhi_dating",
      "speaker": "zhouzhi",
      "character": "zhouzhi",
      "text": "“什么时候？”",
      "next": "tc_c09_zhouzhi_dating_005"
    },
    "tc_c09_zhouzhi_dating_005": {
      "id": "tc_c09_zhouzhi_dating_005",
      "type": "line",
      "scene": "ts_c09_zhouzhi_dating",
      "speaker": "narrator",
      "character": "zhouzhi",
      "text": "我告诉她，有时睡醒看见她的消息，会故意慢一点回复，好像这样就显得没等；后来又忍不住点开看她有没有说下一句。还有买杯子那天，我其实看见了成对的款式，却不敢问。",
      "next": "tc_c09_zhouzhi_dating_006"
    },
    "tc_c09_zhouzhi_dating_006": {
      "id": "tc_c09_zhouzhi_dating_006",
      "type": "line",
      "scene": "ts_c09_zhouzhi_dating",
      "speaker": "narrator",
      "character": "zhouzhi",
      "text": "她听到后面笑起来，笑得拿纸巾挡住嘴。",
      "next": "tc_c09_zhouzhi_dating_007"
    },
    "tc_c09_zhouzhi_dating_007": {
      "id": "tc_c09_zhouzhi_dating_007",
      "type": "line",
      "scene": "ts_c09_zhouzhi_dating",
      "speaker": "zhouzhi",
      "character": "zhouzhi",
      "text": "“幸好你没问，那对真的很难洗。”",
      "next": "tc_c09_zhouzhi_dating_008"
    },
    "tc_c09_zhouzhi_dating_008": {
      "id": "tc_c09_zhouzhi_dating_008",
      "type": "line",
      "scene": "ts_c09_zhouzhi_dating",
      "speaker": "narrator",
      "character": "zhouzhi",
      "text": "我也笑，手在桌边伸出去一点。她看见了，把自己的手放过来，指尖先碰到我，再慢慢握住。",
      "next": "tc_c09_zhouzhi_dating_009"
    },
    "tc_c09_zhouzhi_dating_009": {
      "id": "tc_c09_zhouzhi_dating_009",
      "type": "line",
      "scene": "ts_c09_zhouzhi_dating",
      "speaker": "narrator",
      "character": "zhouzhi",
      "text": "“交往也不代表你能替我答应饭局。”她说。",
      "next": "tc_c09_zhouzhi_dating_010"
    },
    "tc_c09_zhouzhi_dating_010": {
      "id": "tc_c09_zhouzhi_dating_010",
      "type": "line",
      "scene": "ts_c09_zhouzhi_dating",
      "speaker": "wenwen",
      "character": "zhouzhi",
      "text": "“记着了。”",
      "next": "tc_c09_zhouzhi_dating_011"
    },
    "tc_c09_zhouzhi_dating_011": {
      "id": "tc_c09_zhouzhi_dating_011",
      "type": "line",
      "scene": "ts_c09_zhouzhi_dating",
      "speaker": "zhouzhi",
      "character": "zhouzhi",
      "text": "“我也不能因为你脾气还行，就把不高兴都留给你。”",
      "next": "tc_c09_zhouzhi_dating_012"
    },
    "tc_c09_zhouzhi_dating_012": {
      "id": "tc_c09_zhouzhi_dating_012",
      "type": "line",
      "scene": "ts_c09_zhouzhi_dating",
      "speaker": "wenwen",
      "character": "zhouzhi",
      "text": "“有不高兴可以说，不用先接完所有人的话。”",
      "next": "tc_c09_zhouzhi_dating_013"
    },
    "tc_c09_zhouzhi_dating_013": {
      "id": "tc_c09_zhouzhi_dating_013",
      "type": "line",
      "scene": "ts_c09_zhouzhi_dating",
      "speaker": "narrator",
      "character": "zhouzhi",
      "text": "她看我一会儿，轻轻点头。我们没在桌上把未来几年列成一张表，只约好下一个双方都休息的晚上。她主动补了一句，有时会累得不想说话，但会告诉我，不让我一直猜。",
      "next": "tc_c09_zhouzhi_dating_014"
    },
    "tc_c09_zhouzhi_dating_014": {
      "id": "tc_c09_zhouzhi_dating_014",
      "type": "line",
      "scene": "ts_c09_zhouzhi_dating_eaves",
      "speaker": "narrator",
      "character": "zhouzhi",
      "text": "结账时依旧各付自己的那份。走出小馆，我问能不能牵手，她把手举起来，笑我刚才不是已经握过。",
      "next": "tc_c09_zhouzhi_dating_015",
      "bg": "tc-bg-eaves-day"
    },
    "tc_c09_zhouzhi_dating_015": {
      "id": "tc_c09_zhouzhi_dating_015",
      "type": "line",
      "scene": "ts_c09_zhouzhi_dating_eaves",
      "speaker": "wenwen",
      "character": "zhouzhi",
      "text": "“刚才隔着桌子，不一样。”",
      "next": "tc_c09_zhouzhi_dating_016",
      "bg": "tc-bg-eaves-day"
    },
    "tc_c09_zhouzhi_dating_016": {
      "id": "tc_c09_zhouzhi_dating_016",
      "type": "line",
      "scene": "ts_c09_zhouzhi_dating_eaves",
      "speaker": "zhouzhi",
      "character": "zhouzhi",
      "text": "“讲究还挺多。”",
      "next": "tc_c09_zhouzhi_dating_017",
      "bg": "tc-bg-eaves-day"
    },
    "tc_c09_zhouzhi_dating_017": {
      "id": "tc_c09_zhouzhi_dating_017",
      "type": "line",
      "scene": "ts_c09_zhouzhi_dating_eaves",
      "speaker": "narrator",
      "character": "zhouzhi",
      "text": "她挽住我的手臂，走了一段，自己换成十指相握。雨从屋檐边落下来，风有点凉，她站近一点，让我把伞撑开。",
      "next": "tc_c09_zhouzhi_dating_018",
      "bg": "tc-bg-eaves-day"
    },
    "tc_c09_zhouzhi_dating_018": {
      "id": "tc_c09_zhouzhi_dating_018",
      "type": "line",
      "scene": "ts_c09_zhouzhi_dating_eaves",
      "speaker": "narrator",
      "character": "zhouzhi",
      "text": "这次我们都带了伞，却只撑开了一把。走到她要转弯的地方，她没立刻抽回手，问我下一班是什么时候。",
      "next": "tc_c09_zhouzhi_dating_019",
      "bg": "tc-bg-eaves-day"
    },
    "tc_c09_zhouzhi_dating_019": {
      "id": "tc_c09_zhouzhi_dating_019",
      "type": "line",
      "scene": "ts_c09_zhouzhi_dating_eaves",
      "speaker": "narrator",
      "character": "zhouzhi",
      "text": "我告诉她。她低声说好，伸手把我额前沾的一点雨擦掉，亲了亲我的嘴角。",
      "next": "tc_c09_zhouzhi_dating_020",
      "bg": "tc-bg-eaves-day"
    },
    "tc_c09_zhouzhi_dating_020": {
      "id": "tc_c09_zhouzhi_dating_020",
      "type": "line",
      "scene": "ts_c09_zhouzhi_dating_eaves",
      "speaker": "zhouzhi",
      "character": "zhouzhi",
      "text": "“回去告诉我一声。”",
      "next": "tc_c09_common_exit",
      "bg": "tc-bg-eaves-day"
    },
    "tc_c09_zhouzhi_friends_001": {
      "id": "tc_c09_zhouzhi_friends_001",
      "type": "line",
      "scene": "ts_c09_zhouzhi_friends",
      "speaker": "narrator",
      "character": "zhouzhi",
      "text": "我把手从桌边收回，认真看着她。",
      "next": "tc_c09_zhouzhi_friends_002"
    },
    "tc_c09_zhouzhi_friends_002": {
      "id": "tc_c09_zhouzhi_friends_002",
      "type": "line",
      "scene": "ts_c09_zhouzhi_friends",
      "speaker": "wenwen",
      "character": "zhouzhi",
      "text": "“我很喜欢跟你相处，也希望以后还能一起吃饭。但我现在想的是朋友，不能因为怕你失望，就答应交往。”",
      "next": "tc_c09_zhouzhi_friends_003"
    },
    "tc_c09_zhouzhi_friends_003": {
      "id": "tc_c09_zhouzhi_friends_003",
      "type": "line",
      "scene": "ts_c09_zhouzhi_friends",
      "speaker": "narrator",
      "character": "zhouzhi",
      "text": "周栀没有马上说话。她把折得不齐的纸巾压在杯子下面，嘴角轻轻抿了一下。",
      "next": "tc_c09_zhouzhi_friends_004"
    },
    "tc_c09_zhouzhi_friends_004": {
      "id": "tc_c09_zhouzhi_friends_004",
      "type": "line",
      "scene": "ts_c09_zhouzhi_friends",
      "speaker": "zhouzhi",
      "character": "zhouzhi",
      "text": "“嗯。”",
      "next": "tc_c09_zhouzhi_friends_005"
    },
    "tc_c09_zhouzhi_friends_005": {
      "id": "tc_c09_zhouzhi_friends_005",
      "type": "line",
      "scene": "ts_c09_zhouzhi_friends",
      "speaker": "narrator",
      "character": "zhouzhi",
      "text": "过了一会儿，她问我是不是考虑清楚。我说是。她点头，没有替我总结成我们本来就不合适，也没说自己刚才只是开玩笑。",
      "next": "tc_c09_zhouzhi_friends_006"
    },
    "tc_c09_zhouzhi_friends_006": {
      "id": "tc_c09_zhouzhi_friends_006",
      "type": "line",
      "scene": "ts_c09_zhouzhi_friends",
      "speaker": "narrator",
      "character": "zhouzhi",
      "text": "“我会有点失落。”她说，“今晚先不陪你走了，我想自己待会儿。”",
      "next": "tc_c09_zhouzhi_friends_007"
    },
    "tc_c09_zhouzhi_friends_007": {
      "id": "tc_c09_zhouzhi_friends_007",
      "type": "line",
      "scene": "ts_c09_zhouzhi_friends",
      "speaker": "narrator",
      "character": "zhouzhi",
      "text": "我答应，说我先走还是她先走都行。她看着我，终于很轻地笑了一下。",
      "next": "tc_c09_zhouzhi_friends_008"
    },
    "tc_c09_zhouzhi_friends_008": {
      "id": "tc_c09_zhouzhi_friends_008",
      "type": "line",
      "scene": "ts_c09_zhouzhi_friends",
      "speaker": "zhouzhi",
      "character": "zhouzhi",
      "text": "“这次可以都行。不是考试。”",
      "next": "tc_c09_zhouzhi_friends_009"
    },
    "tc_c09_zhouzhi_friends_009": {
      "id": "tc_c09_zhouzhi_friends_009",
      "type": "line",
      "scene": "ts_c09_zhouzhi_friends",
      "speaker": "narrator",
      "character": "zhouzhi",
      "text": "我先去付自己的饭钱，回桌边时，她已经把东西收进包里。我们在门口道别，没有拥抱，也没有约一个用来证明什么的明天。",
      "next": "tc_c09_zhouzhi_friends_010"
    },
    "tc_c09_zhouzhi_friends_010": {
      "id": "tc_c09_zhouzhi_friends_010",
      "type": "line",
      "scene": "ts_c09_zhouzhi_friends_day88",
      "speaker": "narrator",
      "character": "zhouzhi",
      "text": "接下来一阵子，我们没有密集地单独见面。我没每天问她好一点没有，她也没让整个朋友群替她避开我。第88天，毛狼在群里约大家吃东西，她先问时间，我确认轮班以后说能来。",
      "next": "tc_c09_zhouzhi_friends_011"
    },
    "tc_c09_zhouzhi_friends_011": {
      "id": "tc_c09_zhouzhi_friends_011",
      "type": "line",
      "scene": "ts_c09_zhouzhi_friends_day88",
      "speaker": "narrator",
      "character": "zhouzhi",
      "text": "那顿饭上，她照常接了一个笑话，随后低头吃自己的饭。我把别人递到她面前的菜单拿过来，提议各点想吃的，她抬眼看了我一下，点点头。",
      "next": "tc_c09_zhouzhi_friends_012"
    },
    "tc_c09_zhouzhi_friends_012": {
      "id": "tc_c09_zhouzhi_friends_012",
      "type": "line",
      "scene": "ts_c09_zhouzhi_friends_day88_crossroad",
      "speaker": "narrator",
      "character": "zhouzhi",
      "text": "散场后，我们走到同一个路口。她问起网吧的排班，我问她最近睡得怎样，两个人都没有故意把话题绕到感情上。",
      "next": "tc_c09_zhouzhi_friends_013"
    },
    "tc_c09_zhouzhi_friends_013": {
      "id": "tc_c09_zhouzhi_friends_013",
      "type": "line",
      "scene": "ts_c09_zhouzhi_friends_day88_crossroad",
      "speaker": "narrator",
      "character": "zhouzhi",
      "text": "“朋友还是能吃饭。”她说，“就是频率和以前不一样了。”",
      "next": "tc_c09_zhouzhi_friends_014"
    },
    "tc_c09_zhouzhi_friends_014": {
      "id": "tc_c09_zhouzhi_friends_014",
      "type": "line",
      "scene": "ts_c09_zhouzhi_friends_day88_crossroad",
      "speaker": "wenwen",
      "character": "zhouzhi",
      "text": "“我知道。”",
      "next": "tc_c09_zhouzhi_friends_015"
    },
    "tc_c09_zhouzhi_friends_015": {
      "id": "tc_c09_zhouzhi_friends_015",
      "type": "line",
      "scene": "ts_c09_zhouzhi_friends_day88_crossroad",
      "speaker": "narrator",
      "character": "zhouzhi",
      "text": "她把伞打开，朝另一边抬了抬下巴。",
      "next": "tc_c09_zhouzhi_friends_016"
    },
    "tc_c09_zhouzhi_friends_016": {
      "id": "tc_c09_zhouzhi_friends_016",
      "type": "line",
      "scene": "ts_c09_zhouzhi_friends_day88_crossroad",
      "speaker": "zhouzhi",
      "character": "zhouzhi",
      "text": "“走吧。哪天想吃什么，群里叫一声。别只剩节日问候。”",
      "next": "tc_c09_common_exit"
    },
    "tc_c09_zhouzhi_relationship_choice": {
      "id": "tc_c09_zhouzhi_relationship_choice",
      "type": "choice",
      "scene": "ts_c09_zhouzhi_relationship",
      "character": "zhouzhi",
      "text": "",
      "flag": "zhouzhiRelationship",
      "choices": [
        {
          "label": "愿意。我也想把你放进以后的安排里",
          "value": "dating",
          "next": "tc_c09_zhouzhi_dating_001"
        },
        {
          "label": "谢谢你告诉我，但我想继续做朋友",
          "value": "friends",
          "next": "tc_c09_zhouzhi_friends_001"
        }
      ]
    },
    "tc_c10_zhouzhi_dating_001": {
      "id": "tc_c10_zhouzhi_dating_001",
      "type": "line",
      "scene": "ts_c10_zhouzhi_dating",
      "speaker": "narrator",
      "character": null,
      "text": "两年后，周栀和朋友仍在做夜宵，只卖她们两个人照看得过来的几样。有些晚上忙，有些晚上很早就收了。她没有突然开成一排门店，也仍会为哪天休息和朋友商量，意见不一样的时候会皱眉，会吵两句，第二天再把话讲完。",
      "next": "tc_c10_zhouzhi_dating_002"
    },
    "tc_c10_zhouzhi_dating_002": {
      "id": "tc_c10_zhouzhi_dating_002",
      "type": "line",
      "scene": "ts_c10_zhouzhi_dating",
      "speaker": "narrator",
      "character": null,
      "text": "我仍在网吧轮班。夜班轮到我，她不用陪我熬；她忙的时候，我也不必站在摊边守着，证明自己是男朋友。",
      "next": "tc_c10_zhouzhi_dating_003"
    },
    "tc_c10_zhouzhi_dating_003": {
      "id": "tc_c10_zhouzhi_dating_003",
      "type": "line",
      "scene": "ts_c10_zhouzhi_dating",
      "speaker": "narrator",
      "character": null,
      "text": "那天她比约定晚了十来分钟，提前发消息说收拾东西耽误了一会儿，叫我先吃。我们约的是外面一家小店，我已经坐下，便按她的意思先点了自己的饭，又问她到时想点什么。",
      "next": "tc_c10_zhouzhi_dating_004"
    },
    "tc_c10_zhouzhi_dating_004": {
      "id": "tc_c10_zhouzhi_dating_004",
      "type": "line",
      "scene": "ts_c10_zhouzhi_dating",
      "speaker": "narrator",
      "character": null,
      "text": "她回：“到了再看。别怕我饿死，路上吃了半块饼。”",
      "next": "tc_c10_zhouzhi_dating_005"
    },
    "tc_c10_zhouzhi_dating_005": {
      "id": "tc_c10_zhouzhi_dating_005",
      "type": "line",
      "scene": "ts_c10_zhouzhi_dating",
      "speaker": "narrator",
      "character": "zhouzhi",
      "text": "我笑着把手机放下。她来时，头发随手扎着，进门先喝水，再把外套搭在椅背上。",
      "next": "tc_c10_zhouzhi_dating_006",
      "expression": "outfit-tied-hair"
    },
    "tc_c10_zhouzhi_dating_006": {
      "id": "tc_c10_zhouzhi_dating_006",
      "type": "line",
      "scene": "ts_c10_zhouzhi_dating",
      "speaker": "zhouzhi",
      "character": "zhouzhi",
      "text": "“你真吃了？”",
      "next": "tc_c10_zhouzhi_dating_007",
      "expression": "outfit-tied-hair",
      "avatarExpression": "outfit-tied-hair"
    },
    "tc_c10_zhouzhi_dating_007": {
      "id": "tc_c10_zhouzhi_dating_007",
      "type": "line",
      "scene": "ts_c10_zhouzhi_dating",
      "speaker": "narrator",
      "character": "zhouzhi",
      "text": "我指着半空的碗：“你叫的。”",
      "next": "tc_c10_zhouzhi_dating_008",
      "expression": "outfit-tied-hair"
    },
    "tc_c10_zhouzhi_dating_008": {
      "id": "tc_c10_zhouzhi_dating_008",
      "type": "line",
      "scene": "ts_c10_zhouzhi_dating",
      "speaker": "narrator",
      "character": "zhouzhi",
      "text": "她满意地点头，自己点了一碗热汤，伸手从我盘里夹走一小块豆腐。我问她半块饼不够吗，她说够垫肚子，不够让她看着好吃的不动筷子。",
      "next": "tc_c10_zhouzhi_dating_009",
      "expression": "outfit-tied-hair"
    },
    "tc_c10_zhouzhi_dating_009": {
      "id": "tc_c10_zhouzhi_dating_009",
      "type": "line",
      "scene": "ts_c10_zhouzhi_dating",
      "speaker": "narrator",
      "character": "zhouzhi",
      "text": "我们谈了今天的事。她讲一位熟客把辣椒要求说反，最后自己笑得不行；我讲师匠又在休班时想跟毛狼开一局，被吐槽走到哪儿都像在巡店。她听得乐，叫我别只讲他们，自己输了几局也算上。",
      "next": "tc_c10_zhouzhi_dating_010",
      "expression": "outfit-tied-hair"
    },
    "tc_c10_zhouzhi_dating_010": {
      "id": "tc_c10_zhouzhi_dating_010",
      "type": "line",
      "scene": "ts_c10_zhouzhi_dating",
      "speaker": "narrator",
      "character": "zhouzhi",
      "text": "她吃到一半，我已经吃完，便坐着陪她。没有催，没有怕冷场拿手机一直刷。她夹起最后一口，见我看着她，问是不是脸上沾了东西。",
      "next": "tc_c10_zhouzhi_dating_011",
      "expression": "outfit-tied-hair"
    },
    "tc_c10_zhouzhi_dating_011": {
      "id": "tc_c10_zhouzhi_dating_011",
      "type": "line",
      "scene": "ts_c10_zhouzhi_dating",
      "speaker": "wenwen",
      "character": "zhouzhi",
      "text": "“没有。就是想看看。”",
      "next": "tc_c10_zhouzhi_dating_012",
      "expression": "outfit-tied-hair"
    },
    "tc_c10_zhouzhi_dating_012": {
      "id": "tc_c10_zhouzhi_dating_012",
      "type": "line",
      "scene": "ts_c10_zhouzhi_dating",
      "speaker": "zhouzhi",
      "character": "zhouzhi",
      "text": "“看两年，还没看够？”",
      "next": "tc_c10_zhouzhi_dating_013",
      "expression": "outfit-tied-hair",
      "avatarExpression": "outfit-tied-hair"
    },
    "tc_c10_zhouzhi_dating_013": {
      "id": "tc_c10_zhouzhi_dating_013",
      "type": "line",
      "scene": "ts_c10_zhouzhi_dating",
      "speaker": "wenwen",
      "character": "zhouzhi",
      "text": "“换个角度。”",
      "next": "tc_c10_zhouzhi_dating_014",
      "expression": "outfit-tied-hair"
    },
    "tc_c10_zhouzhi_dating_014": {
      "id": "tc_c10_zhouzhi_dating_014",
      "type": "line",
      "scene": "ts_c10_zhouzhi_dating",
      "speaker": "narrator",
      "character": "zhouzhi",
      "text": "她把脸微微转过来，摆了一个明显敷衍的姿势，自己先笑了。我隔着桌子握了握她伸过来的手，等她喝完汤才松开。",
      "next": "tc_c10_zhouzhi_dating_015",
      "expression": "outfit-tied-hair"
    },
    "tc_c10_zhouzhi_dating_015": {
      "id": "tc_c10_zhouzhi_dating_015",
      "type": "line",
      "scene": "ts_c10_zhouzhi_dating_homeward",
      "speaker": "narrator",
      "character": "zhouzhi",
      "text": "回去的路上，她问下个月有没有一天能一起去看电影。我打开排班，先找出能休息的日子，再让她看。她挑了一个，说到时自己选片，我可以看完发表不同意见。",
      "next": "tc_c10_zhouzhi_dating_016",
      "expression": "outfit-tied-hair"
    },
    "tc_c10_zhouzhi_dating_016": {
      "id": "tc_c10_zhouzhi_dating_016",
      "type": "line",
      "scene": "ts_c10_zhouzhi_dating_eaves",
      "speaker": "narrator",
      "character": "zhouzhi",
      "text": "快到她住处时，雨下密了。我们站在屋檐下收伞，她用手拍掉我肩上的水，抬头亲了我一下。",
      "next": "tc_c10_zhouzhi_dating_017",
      "bg": "tc-bg-eaves-day",
      "expression": "outfit-tied-hair"
    },
    "tc_c10_zhouzhi_dating_017": {
      "id": "tc_c10_zhouzhi_dating_017",
      "type": "line",
      "scene": "ts_c10_zhouzhi_dating_eaves",
      "speaker": "zhouzhi",
      "character": "zhouzhi",
      "text": "“明天你早班，今晚早点回。”",
      "next": "tc_c10_zhouzhi_dating_018",
      "bg": "tc-bg-eaves-day",
      "expression": "outfit-tied-hair",
      "avatarExpression": "outfit-tied-hair"
    },
    "tc_c10_zhouzhi_dating_018": {
      "id": "tc_c10_zhouzhi_dating_018",
      "type": "line",
      "scene": "ts_c10_zhouzhi_dating_eaves",
      "speaker": "narrator",
      "character": "zhouzhi",
      "text": "我点头。她进门前又探出头，叫我别忘了带走放在门边的水杯。",
      "next": "tc_c10_zhouzhi_dating_019",
      "bg": "tc-bg-eaves-day",
      "expression": "outfit-tied-hair"
    },
    "tc_c10_zhouzhi_dating_019": {
      "id": "tc_c10_zhouzhi_dating_019",
      "type": "line",
      "scene": "ts_c10_zhouzhi_dating_eaves",
      "speaker": "narrator",
      "character": "zhouzhi",
      "text": "杯身已经有几道细划痕，还是那年一起买的。她把它递给我，手指在杯盖上敲了两下。",
      "next": "tc_c10_zhouzhi_dating_020",
      "bg": "tc-bg-eaves-day",
      "expression": "outfit-tied-hair"
    },
    "tc_c10_zhouzhi_dating_020": {
      "id": "tc_c10_zhouzhi_dating_020",
      "type": "line",
      "scene": "ts_c10_zhouzhi_dating_eaves",
      "speaker": "zhouzhi",
      "character": "zhouzhi",
      "text": "“水换过了。到家说一声。”",
      "next": "tc_c10_zhouzhi_end_dating",
      "bg": "tc-bg-eaves-day",
      "expression": "outfit-tied-hair",
      "avatarExpression": "outfit-tied-hair"
    },
    "tc_c10_zhouzhi_friends_001": {
      "id": "tc_c10_zhouzhi_friends_001",
      "type": "line",
      "scene": "ts_c10_zhouzhi_friends",
      "speaker": "narrator",
      "character": "zhouzhi",
      "text": "两年后，我下了白天的班，从周栀和朋友试着经营的夜宵摊前经过。她正把一张折叠椅拉开，见我站在路边，朝空位扬了扬下巴。",
      "next": "tc_c10_zhouzhi_friends_002"
    },
    "tc_c10_zhouzhi_friends_002": {
      "id": "tc_c10_zhouzhi_friends_002",
      "type": "line",
      "scene": "ts_c10_zhouzhi_friends",
      "speaker": "zhouzhi",
      "character": "zhouzhi",
      "text": "“饿不饿？饿就坐。”",
      "next": "tc_c10_zhouzhi_friends_003"
    },
    "tc_c10_zhouzhi_friends_003": {
      "id": "tc_c10_zhouzhi_friends_003",
      "type": "line",
      "scene": "ts_c10_zhouzhi_friends",
      "speaker": "narrator",
      "character": "zhouzhi",
      "text": "我说想吃点东西，点了自己喜欢的那份，照价付钱。她没有拿朋友当借口塞给我一大堆，也没有把我固定成来帮忙的人。东西端上来时，我问她吃过没有，她说等朋友忙完一起吃，让我先吃自己的。",
      "next": "tc_c10_zhouzhi_friends_004"
    },
    "tc_c10_zhouzhi_friends_004": {
      "id": "tc_c10_zhouzhi_friends_004",
      "type": "line",
      "scene": "ts_c10_zhouzhi_friends",
      "speaker": "narrator",
      "character": "zhouzhi",
      "text": "摊不大，能做的东西也不多。做过这段时间，她们知道有些事情不适合自己，不合适的就停，仍在试的就慢慢来。周栀提起这些时，语气和两年前差不多，明快里带一点不耐烦，但不再急着给别人一个一定会成功的答案。",
      "next": "tc_c10_zhouzhi_friends_005"
    },
    "tc_c10_zhouzhi_friends_005": {
      "id": "tc_c10_zhouzhi_friends_005",
      "type": "line",
      "scene": "ts_c10_zhouzhi_friends",
      "speaker": "narrator",
      "character": "zhouzhi",
      "text": "过了一会儿，她朋友去买东西，摊前正好没人，周栀坐到对面歇了五分钟。她手里拿着自己的杯子，杯沿一圈浅蓝，我认出是我们一起逛超市时买的那只。",
      "next": "tc_c10_zhouzhi_friends_006"
    },
    "tc_c10_zhouzhi_friends_006": {
      "id": "tc_c10_zhouzhi_friends_006",
      "type": "line",
      "scene": "ts_c10_zhouzhi_friends",
      "speaker": "narrator",
      "character": "zhouzhi",
      "text": "“还没摔？”我说。",
      "next": "tc_c10_zhouzhi_friends_007"
    },
    "tc_c10_zhouzhi_friends_007": {
      "id": "tc_c10_zhouzhi_friends_007",
      "type": "line",
      "scene": "ts_c10_zhouzhi_friends",
      "speaker": "zhouzhi",
      "character": "zhouzhi",
      "text": "“你就不能盼它一点好？”",
      "next": "tc_c10_zhouzhi_friends_008"
    },
    "tc_c10_zhouzhi_friends_008": {
      "id": "tc_c10_zhouzhi_friends_008",
      "type": "line",
      "scene": "ts_c10_zhouzhi_friends",
      "speaker": "wenwen",
      "character": "zhouzhi",
      "text": "“我那只也还在。”",
      "next": "tc_c10_zhouzhi_friends_009"
    },
    "tc_c10_zhouzhi_friends_009": {
      "id": "tc_c10_zhouzhi_friends_009",
      "type": "line",
      "scene": "ts_c10_zhouzhi_friends",
      "speaker": "narrator",
      "character": "zhouzhi",
      "text": "她点点头，没有把这件事解释成什么暗示。我们一起买过东西，一起看过路边的雨，也认真谈过交不交往；这些事情都发生过，不需要抹掉，才能做现在的朋友。",
      "next": "tc_c10_zhouzhi_friends_010"
    },
    "tc_c10_zhouzhi_friends_010": {
      "id": "tc_c10_zhouzhi_friends_010",
      "type": "line",
      "scene": "ts_c10_zhouzhi_friends",
      "speaker": "narrator",
      "character": "zhouzhi",
      "text": "我说最近换了几天排班，难得能晚上走出来。她说那就多看看街上，别一休息就以为除了睡觉只剩游戏。我立刻反驳自己也买菜，她看了一眼我脚边空荡荡的袋子，让我下次拿出证据。",
      "next": "tc_c10_zhouzhi_friends_011"
    },
    "tc_c10_zhouzhi_friends_011": {
      "id": "tc_c10_zhouzhi_friends_011",
      "type": "line",
      "scene": "ts_c10_zhouzhi_friends",
      "speaker": "narrator",
      "character": "zhouzhi",
      "text": "她朋友回来，我便把椅子往里让了让，让出过道。周栀起身继续忙，动作利落，偶尔跟朋友说两句，没再刻意回头照顾我有没有落单。",
      "next": "tc_c10_zhouzhi_friends_012"
    },
    "tc_c10_zhouzhi_friends_012": {
      "id": "tc_c10_zhouzhi_friends_012",
      "type": "line",
      "scene": "ts_c10_zhouzhi_friends",
      "speaker": "narrator",
      "character": "zhouzhi",
      "text": "吃完我把自己的垃圾收好，叫她看一眼有没有漏付。她摆手说早收了，别每次都把自己当第一回来。我笑着问下次有没有新东西，她说有就发群里，不许提前催。",
      "next": "tc_c10_zhouzhi_friends_013"
    },
    "tc_c10_zhouzhi_friends_013": {
      "id": "tc_c10_zhouzhi_friends_013",
      "type": "line",
      "scene": "ts_c10_zhouzhi_friends_street",
      "speaker": "narrator",
      "character": null,
      "text": "走到街口，我收到她发来的一张照片。是我刚才坐过的那张椅子，她在下面写：“毛狼说晚点来吃。你要没走远，还能再坐会儿。”",
      "next": "tc_c10_zhouzhi_friends_014"
    },
    "tc_c10_zhouzhi_friends_014": {
      "id": "tc_c10_zhouzhi_friends_014",
      "type": "line",
      "scene": "ts_c10_zhouzhi_friends_street",
      "speaker": "narrator",
      "character": null,
      "text": "我看了看时间，今晚不用上班，脚也不累，便转身往回走。",
      "next": "tc_c10_zhouzhi_friends_015"
    },
    "tc_c10_zhouzhi_friends_015": {
      "id": "tc_c10_zhouzhi_friends_015",
      "type": "line",
      "scene": "ts_c10_zhouzhi_friends_back_to_stall",
      "speaker": "narrator",
      "character": "zhouzhi",
      "text": "周栀看见我，把椅子往外拉出一点，没有重新给我上一份饭，只把桌上的纸巾推过来。",
      "next": "tc_c10_zhouzhi_friends_016"
    },
    "tc_c10_zhouzhi_friends_016": {
      "id": "tc_c10_zhouzhi_friends_016",
      "type": "line",
      "scene": "ts_c10_zhouzhi_friends_back_to_stall",
      "speaker": "zhouzhi",
      "character": "zhouzhi",
      "text": "“坐。想喝什么自己说。”",
      "next": "tc_c10_zhouzhi_end_friends"
    },
    "tc_c10_zhouzhi_entry": {
      "id": "tc_c10_zhouzhi_entry",
      "type": "gate",
      "scene": "ts_c10_zhouzhi_dating",
      "cases": [
        {
          "flag": "zhouzhiRelationship",
          "value": "dating",
          "next": "tc_c10_zhouzhi_dating_001"
        },
        {
          "flag": "zhouzhiRelationship",
          "value": "friends",
          "next": "tc_c10_zhouzhi_friends_001"
        }
      ],
      "default": null,
      "exhaustive": true
    },
    "tc_c10_zhouzhi_end_dating": {
      "id": "tc_c10_zhouzhi_end_dating",
      "type": "end",
      "scene": "ts_c10_zhouzhi_dating_eaves",
      "character": "zhouzhi",
      "title": "你先吃，我一会儿到",
      "text": "",
      "endingId": "tc_c10_zhouzhi_end_dating",
      "bg": "tc-bg-eaves-day",
      "expression": "outfit-tied-hair"
    },
    "tc_c10_zhouzhi_end_friends": {
      "id": "tc_c10_zhouzhi_end_friends",
      "type": "end",
      "scene": "ts_c10_zhouzhi_friends_back_to_stall",
      "character": "zhouzhi",
      "title": "还有一张椅子",
      "text": "",
      "endingId": "tc_c10_zhouzhi_end_friends"
    },
    "tc_c03_mengyao_entry": {
      "id": "tc_c03_mengyao_entry",
      "type": "line",
      "scene": "ts_c03_mengyao_flatbread",
      "speaker": "narrator",
      "character": null,
      "text": "我睡醒时，孟遥的消息已经在手机里躺了两个小时。",
      "next": "tc_c03_mengyao_flatbread_002"
    },
    "tc_c03_mengyao_flatbread_002": {
      "id": "tc_c03_mengyao_flatbread_002",
      "type": "line",
      "scene": "ts_c03_mengyao_flatbread",
      "speaker": "mengyao",
      "character": null,
      "text": "“今天下课早。桥头那家烧饼，你还吃吗？”",
      "next": "tc_c03_mengyao_flatbread_003"
    },
    "tc_c03_mengyao_flatbread_003": {
      "id": "tc_c03_mengyao_flatbread_003",
      "type": "line",
      "scene": "ts_c03_mengyao_flatbread",
      "speaker": "narrator",
      "character": null,
      "text": "输入框里的“正好顺路”打了一半，我删掉了。我的住处和桥头隔着好几站，骗不了熟悉这座城的人。",
      "next": "tc_c03_mengyao_flatbread_004"
    },
    "tc_c03_mengyao_flatbread_004": {
      "id": "tc_c03_mengyao_flatbread_004",
      "type": "line",
      "scene": "ts_c03_mengyao_flatbread",
      "speaker": "wenwen",
      "character": null,
      "text": "“吃。五点二十，我去找你。”",
      "next": "tc_c03_mengyao_flatbread_005"
    },
    "tc_c03_mengyao_flatbread_005": {
      "id": "tc_c03_mengyao_flatbread_005",
      "type": "line",
      "scene": "ts_c03_mengyao_flatbread_bakery",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "孟遥站在店门边，提着一个装资料的布袋。她正在听电话，声音比跟我说话时慢：“我知道您着急。不过今天先把这两处弄明白，下次我们再看新的。”她听了一会儿，说好，挂掉电话，转身就问我：“要几个？”",
      "next": "tc_c03_mengyao_flatbread_006",
      "expression": "outfit-teacher-bag"
    },
    "tc_c03_mengyao_flatbread_006": {
      "id": "tc_c03_mengyao_flatbread_006",
      "type": "line",
      "scene": "ts_c03_mengyao_flatbread_bakery",
      "speaker": "wenwen",
      "character": "mengyao",
      "text": "“两——”",
      "next": "tc_c03_mengyao_flatbread_007",
      "expression": "outfit-teacher-bag"
    },
    "tc_c03_mengyao_flatbread_007": {
      "id": "tc_c03_mengyao_flatbread_007",
      "type": "line",
      "scene": "ts_c03_mengyao_flatbread_bakery",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "她已经伸出两根手指，又停下来：“还是你先说。”",
      "next": "tc_c03_mengyao_flatbread_008",
      "expression": "outfit-teacher-bag"
    },
    "tc_c03_mengyao_flatbread_008": {
      "id": "tc_c03_mengyao_flatbread_008",
      "type": "line",
      "scene": "ts_c03_mengyao_flatbread_bakery",
      "speaker": "wenwen",
      "character": "mengyao",
      "text": "“三个。中午睡过了，少吃了一顿。”",
      "next": "tc_c03_mengyao_flatbread_009",
      "expression": "outfit-teacher-bag"
    },
    "tc_c03_mengyao_flatbread_009": {
      "id": "tc_c03_mengyao_flatbread_009",
      "type": "line",
      "scene": "ts_c03_mengyao_flatbread_bakery",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "“你刚才那个停顿，我以为你终于准备承认只能吃一个。”",
      "next": "tc_c03_mengyao_flatbread_010",
      "expression": "outfit-teacher-bag",
      "avatarExpression": "outfit-teacher-bag"
    },
    "tc_c03_mengyao_flatbread_010": {
      "id": "tc_c03_mengyao_flatbread_010",
      "type": "line",
      "scene": "ts_c03_mengyao_flatbread_bakery",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "烧饼装进纸袋，她把其中一个掰开，看了看里面的馅。我很自然地伸手去拿她咬不动的那一半，她却往后一缩。",
      "next": "tc_c03_mengyao_flatbread_011",
      "expression": "outfit-teacher-bag"
    },
    "tc_c03_mengyao_flatbread_011": {
      "id": "tc_c03_mengyao_flatbread_011",
      "type": "line",
      "scene": "ts_c03_mengyao_flatbread_bakery",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "“干什么？”",
      "next": "tc_c03_mengyao_flatbread_012",
      "expression": "outfit-teacher-bag",
      "avatarExpression": "outfit-teacher-bag"
    },
    "tc_c03_mengyao_flatbread_012": {
      "id": "tc_c03_mengyao_flatbread_012",
      "type": "line",
      "scene": "ts_c03_mengyao_flatbread_bakery",
      "speaker": "wenwen",
      "character": "mengyao",
      "text": "“你以前不是不吃这块硬的？”",
      "next": "tc_c03_mengyao_flatbread_013",
      "expression": "outfit-teacher-bag"
    },
    "tc_c03_mengyao_flatbread_013": {
      "id": "tc_c03_mengyao_flatbread_013",
      "type": "line",
      "scene": "ts_c03_mengyao_flatbread_bakery",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "“现在吃了。你以前还说喝咖啡像喝药呢。”",
      "next": "tc_c03_mengyao_flatbread_014",
      "expression": "outfit-teacher-bag",
      "avatarExpression": "outfit-teacher-bag"
    },
    "tc_c03_mengyao_flatbread_014": {
      "id": "tc_c03_mengyao_flatbread_014",
      "type": "line",
      "scene": "ts_c03_mengyao_flatbread_bakery",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "我手里正拿着一杯便利店咖啡，纸杯边上沾着泡沫。",
      "next": "tc_c03_mengyao_flatbread_015",
      "expression": "outfit-teacher-bag"
    },
    "tc_c03_mengyao_flatbread_015": {
      "id": "tc_c03_mengyao_flatbread_015",
      "type": "line",
      "scene": "ts_c03_mengyao_flatbread_bakery",
      "speaker": "wenwen",
      "character": "mengyao",
      "text": "“这不是药，是生存用品。”",
      "next": "tc_c03_mengyao_flatbread_016",
      "expression": "outfit-teacher-bag"
    },
    "tc_c03_mengyao_flatbread_016": {
      "id": "tc_c03_mengyao_flatbread_016",
      "type": "line",
      "scene": "ts_c03_mengyao_flatbread_bakery",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "“那你今晚上班，下午喝这个，准备几点困？”",
      "next": "tc_c03_mengyao_flatbread_017",
      "expression": "outfit-teacher-bag",
      "avatarExpression": "outfit-teacher-bag"
    },
    "tc_c03_mengyao_flatbread_017": {
      "id": "tc_c03_mengyao_flatbread_017",
      "type": "line",
      "scene": "ts_c03_mengyao_flatbread_bakery",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "她说完自己笑了：“算了，你自己知道。刚下课，还没把那个问句关掉。”",
      "next": "tc_c03_mengyao_early_callback_gate",
      "expression": "outfit-teacher-bag"
    },
    "tc_c03_mengyao_flatbread_018": {
      "id": "tc_c03_mengyao_flatbread_018",
      "type": "line",
      "scene": "ts_c03_mengyao_flatbread_bakery",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "孟遥问我今天还紧不紧张。我说比第一次好一点，她往我手里的咖啡杯看了一眼：“看出来了，今天没有把配料表翻来覆去地读。”我也笑，告诉她这杯没有那么多字可看。她说那可难为我了。",
      "next": "tc_c03_mengyao_flatbread_020",
      "expression": "outfit-teacher-bag"
    },
    "tc_c03_mengyao_flatbread_019": {
      "id": "tc_c03_mengyao_flatbread_019",
      "type": "line",
      "scene": "ts_c03_mengyao_flatbread_bakery",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "孟遥问我这回是不是先看过排班。我把手机里记下的时间给她看，她看完只问：“那你是特意来吃烧饼，还是特意来见我？”我说两个都有。她把纸袋往我面前一递：“行，至少烧饼这个部分没让你失望。”",
      "next": "tc_c03_mengyao_flatbread_020",
      "expression": "outfit-teacher-bag"
    },
    "tc_c03_mengyao_flatbread_020": {
      "id": "tc_c03_mengyao_flatbread_020",
      "type": "line",
      "scene": "ts_c03_mengyao_flatbread_steps",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "我们走到桥边的台阶，挑了干燥的地方坐。她把布袋放在膝上，用掌心盖住纸袋口，免得里面的热气散得太快。",
      "next": "tc_c03_mengyao_flatbread_021",
      "expression": "outfit-teacher-bag"
    },
    "tc_c03_mengyao_flatbread_021": {
      "id": "tc_c03_mengyao_flatbread_021",
      "type": "line",
      "scene": "ts_c03_mengyao_flatbread_steps",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "我问她做老师是不是很习惯。",
      "next": "tc_c03_mengyao_flatbread_022",
      "expression": "outfit-teacher-bag"
    },
    "tc_c03_mengyao_flatbread_022": {
      "id": "tc_c03_mengyao_flatbread_022",
      "type": "line",
      "scene": "ts_c03_mengyao_flatbread_steps",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "“不算。有时候一句话准备了半天，到了教室还是会卡住。还有人问的问题，我备课时根本没想到。”",
      "next": "tc_c03_mengyao_flatbread_023",
      "expression": "outfit-teacher-bag",
      "avatarExpression": "outfit-teacher-bag"
    },
    "tc_c03_mengyao_flatbread_023": {
      "id": "tc_c03_mengyao_flatbread_023",
      "type": "line",
      "scene": "ts_c03_mengyao_flatbread_steps",
      "speaker": "wenwen",
      "character": "mengyao",
      "text": "“你也有答不上来的？”",
      "next": "tc_c03_mengyao_flatbread_024",
      "expression": "outfit-teacher-bag"
    },
    "tc_c03_mengyao_flatbread_024": {
      "id": "tc_c03_mengyao_flatbread_024",
      "type": "line",
      "scene": "ts_c03_mengyao_flatbread_steps",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "“有啊。怎么，你以为我拿着答案出生？”",
      "next": "tc_c03_mengyao_flatbread_025",
      "expression": "outfit-teacher-bag",
      "avatarExpression": "outfit-teacher-bag"
    },
    "tc_c03_mengyao_flatbread_025": {
      "id": "tc_c03_mengyao_flatbread_025",
      "type": "line",
      "scene": "ts_c03_mengyao_flatbread_steps",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "我想起以前一起玩游戏，她把我卡了很久的关过掉，直到第二天才承认自己偷偷查过攻略。我提了一句，她立即坐直。",
      "next": "tc_c03_mengyao_flatbread_026",
      "expression": "outfit-teacher-bag"
    },
    "tc_c03_mengyao_flatbread_026": {
      "id": "tc_c03_mengyao_flatbread_026",
      "type": "line",
      "scene": "ts_c03_mengyao_flatbread_steps",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "“当时规定不许查了吗？”",
      "next": "tc_c03_mengyao_flatbread_027",
      "expression": "outfit-teacher-bag",
      "avatarExpression": "outfit-teacher-bag"
    },
    "tc_c03_mengyao_flatbread_027": {
      "id": "tc_c03_mengyao_flatbread_027",
      "type": "line",
      "scene": "ts_c03_mengyao_flatbread_steps",
      "speaker": "wenwen",
      "character": "mengyao",
      "text": "“你当时说，天赋。”",
      "next": "tc_c03_mengyao_flatbread_028",
      "expression": "outfit-teacher-bag"
    },
    "tc_c03_mengyao_flatbread_028": {
      "id": "tc_c03_mengyao_flatbread_028",
      "type": "line",
      "scene": "ts_c03_mengyao_flatbread_steps",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "“会找攻略，也是天赋。”",
      "next": "tc_c03_mengyao_flatbread_029",
      "expression": "outfit-teacher-bag",
      "avatarExpression": "outfit-teacher-bag"
    },
    "tc_c03_mengyao_flatbread_029": {
      "id": "tc_c03_mengyao_flatbread_029",
      "type": "line",
      "scene": "ts_c03_mengyao_flatbread_steps",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "她说得很快，笑起来又有点不好意思。桥下有人撑着伞走过，她垂眼看了一会儿，问我现在还玩那个旧游戏吗。",
      "next": "tc_c03_mengyao_flatbread_030",
      "expression": "outfit-teacher-bag"
    },
    "tc_c03_mengyao_flatbread_030": {
      "id": "tc_c03_mengyao_flatbread_030",
      "type": "line",
      "scene": "ts_c03_mengyao_flatbread_steps",
      "speaker": "wenwen",
      "character": "mengyao",
      "text": "“很少。网吧电脑很多，但我的班上不是想玩就能玩。休息时跟毛狼他们组队，单机倒没怎么开。”",
      "next": "tc_c03_mengyao_flatbread_031",
      "expression": "outfit-teacher-bag"
    },
    "tc_c03_mengyao_flatbread_031": {
      "id": "tc_c03_mengyao_flatbread_031",
      "type": "line",
      "scene": "ts_c03_mengyao_flatbread_steps",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "“我也是。电脑里还装着，图标在，手感不在。”",
      "next": "tc_c03_mengyao_flatbread_032",
      "expression": "outfit-teacher-bag",
      "avatarExpression": "outfit-teacher-bag"
    },
    "tc_c03_mengyao_flatbread_032": {
      "id": "tc_c03_mengyao_flatbread_032",
      "type": "line",
      "scene": "ts_c03_mengyao_flatbread_steps",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "她没有说找一天一起怀旧。我也没把记得同一个游戏当成我们又回到了从前。吃完烧饼，我先起身，把纸袋叠好。",
      "next": "tc_c03_mengyao_flatbread_033",
      "expression": "outfit-teacher-bag"
    },
    "tc_c03_mengyao_flatbread_033": {
      "id": "tc_c03_mengyao_flatbread_033",
      "type": "line",
      "scene": "ts_c03_mengyao_flatbread_steps",
      "speaker": "wenwen",
      "character": "mengyao",
      "text": "“下回你有空，我想见你。吃别的也行。”",
      "next": "tc_c03_mengyao_flatbread_034",
      "expression": "outfit-teacher-bag"
    },
    "tc_c03_mengyao_flatbread_034": {
      "id": "tc_c03_mengyao_flatbread_034",
      "type": "line",
      "scene": "ts_c03_mengyao_flatbread_steps",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "孟遥抬起头：“刚才不是已经见到了？”",
      "next": "tc_c03_mengyao_flatbread_035",
      "expression": "outfit-teacher-bag"
    },
    "tc_c03_mengyao_flatbread_035": {
      "id": "tc_c03_mengyao_flatbread_035",
      "type": "line",
      "scene": "ts_c03_mengyao_flatbread_steps",
      "speaker": "wenwen",
      "character": "mengyao",
      "text": "“这回的下一回。”",
      "next": "tc_c03_mengyao_flatbread_036",
      "expression": "outfit-teacher-bag"
    },
    "tc_c03_mengyao_flatbread_036": {
      "id": "tc_c03_mengyao_flatbread_036",
      "type": "line",
      "scene": "ts_c03_mengyao_flatbread_steps",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "“你这句不适合拿去教阅读理解。”",
      "next": "tc_c03_mengyao_flatbread_037",
      "expression": "outfit-teacher-bag",
      "avatarExpression": "outfit-teacher-bag"
    },
    "tc_c03_mengyao_flatbread_037": {
      "id": "tc_c03_mengyao_flatbread_037",
      "type": "line",
      "scene": "ts_c03_mengyao_flatbread_steps",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "她慢慢拍掉手上的饼渣，才补了一句：“知道了。别等我再用烧饼叫你。”",
      "next": "tc_c03_mengyao_coop_game_001",
      "expression": "outfit-teacher-bag"
    },
    "tc_c03_mengyao_coop_game_001": {
      "id": "tc_c03_mengyao_coop_game_001",
      "type": "line",
      "scene": "ts_c03_mengyao_coop_game",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "这天我休班，下午补足了觉。孟遥下课后到了网吧，先站在柜台前，十分客气地问师匠哪里可以开两台相邻的电脑。",
      "next": "tc_c03_mengyao_coop_game_002"
    },
    "tc_c03_mengyao_coop_game_002": {
      "id": "tc_c03_mengyao_coop_game_002",
      "type": "line",
      "scene": "ts_c03_mengyao_coop_game",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "师匠指了指我：“问他。他今天花钱来坐，已经不归我管了。”",
      "next": "tc_c03_mengyao_coop_game_003"
    },
    "tc_c03_mengyao_coop_game_003": {
      "id": "tc_c03_mengyao_coop_game_003",
      "type": "line",
      "scene": "ts_c03_mengyao_coop_game",
      "speaker": "wenwen",
      "character": "mengyao",
      "text": "“你说得像我租期到了。”",
      "next": "tc_c03_mengyao_coop_game_004"
    },
    "tc_c03_mengyao_coop_game_004": {
      "id": "tc_c03_mengyao_coop_game_004",
      "type": "line",
      "scene": "ts_c03_mengyao_coop_game",
      "speaker": "shijiang",
      "character": "mengyao",
      "text": "“租期没到，今晚别替我关灯。”",
      "next": "tc_c03_mengyao_coop_game_005"
    },
    "tc_c03_mengyao_coop_game_005": {
      "id": "tc_c03_mengyao_coop_game_005",
      "type": "line",
      "scene": "ts_c03_mengyao_coop_game_computers",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "孟遥忍着笑坐下。她选了我们以前玩过的双人闯关游戏，读档前郑重宣布，这次谁先掉坑谁请喝水。",
      "next": "tc_c03_mengyao_coop_game_006",
      "expression": "expression-smile"
    },
    "tc_c03_mengyao_coop_game_006": {
      "id": "tc_c03_mengyao_coop_game_006",
      "type": "line",
      "scene": "ts_c03_mengyao_coop_game_computers",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "三分钟后，她的角色掉了进去。",
      "next": "tc_c03_mengyao_coop_game_007"
    },
    "tc_c03_mengyao_coop_game_007": {
      "id": "tc_c03_mengyao_coop_game_007",
      "type": "line",
      "scene": "ts_c03_mengyao_coop_game_computers",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "“键位不一样。”",
      "next": "tc_c03_mengyao_coop_game_008"
    },
    "tc_c03_mengyao_coop_game_008": {
      "id": "tc_c03_mengyao_coop_game_008",
      "type": "line",
      "scene": "ts_c03_mengyao_coop_game_computers",
      "speaker": "wenwen",
      "character": "mengyao",
      "text": "“还没改过。”",
      "next": "tc_c03_mengyao_coop_game_009"
    },
    "tc_c03_mengyao_coop_game_009": {
      "id": "tc_c03_mengyao_coop_game_009",
      "type": "line",
      "scene": "ts_c03_mengyao_coop_game_computers",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "“你走路声影响我判断。”",
      "next": "tc_c03_mengyao_coop_game_010"
    },
    "tc_c03_mengyao_coop_game_010": {
      "id": "tc_c03_mengyao_coop_game_010",
      "type": "line",
      "scene": "ts_c03_mengyao_coop_game_computers",
      "speaker": "wenwen",
      "character": "mengyao",
      "text": "“角色穿的是布鞋。”",
      "next": "tc_c03_mengyao_coop_game_011"
    },
    "tc_c03_mengyao_coop_game_011": {
      "id": "tc_c03_mengyao_coop_game_011",
      "type": "line",
      "scene": "ts_c03_mengyao_coop_game_computers",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "她伸手按住我的键盘，让我也掉进同一个坑。我们两个盯着失败画面，谁都没先说话，直到我低头把买水的钱从她那边推回来。",
      "next": "tc_c03_mengyao_coop_game_012"
    },
    "tc_c03_mengyao_coop_game_012": {
      "id": "tc_c03_mengyao_coop_game_012",
      "type": "line",
      "scene": "ts_c03_mengyao_coop_game_computers",
      "speaker": "wenwen",
      "character": "mengyao",
      "text": "“这局算共同责任。”",
      "next": "tc_c03_mengyao_coop_game_013"
    },
    "tc_c03_mengyao_coop_game_013": {
      "id": "tc_c03_mengyao_coop_game_013",
      "type": "line",
      "scene": "ts_c03_mengyao_coop_game_computers",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "游戏往后，有一段需要一个人踩住机关，另一个人跳过去。我照旧抢着去踩，她却选了另一条路。两个人挤在同一块窄台上，先后被顶了下来。",
      "next": "tc_c03_mengyao_coop_game_014"
    },
    "tc_c03_mengyao_coop_game_014": {
      "id": "tc_c03_mengyao_coop_game_014",
      "type": "line",
      "scene": "ts_c03_mengyao_coop_game_computers",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "“我以为你还喜欢往前冲。”我说。",
      "next": "tc_c03_mengyao_coop_game_015"
    },
    "tc_c03_mengyao_coop_game_015": {
      "id": "tc_c03_mengyao_coop_game_015",
      "type": "line",
      "scene": "ts_c03_mengyao_coop_game_computers",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "“我以为你会等我说完。”",
      "next": "tc_c03_mengyao_coop_game_016"
    },
    "tc_c03_mengyao_coop_game_016": {
      "id": "tc_c03_mengyao_coop_game_016",
      "type": "line",
      "scene": "ts_c03_mengyao_coop_game_computers",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "我看向她。她的手还放在键盘上，嘴角本来有一点笑，看到我的表情，反而先叹了口气。",
      "next": "tc_c03_mengyao_coop_game_017"
    },
    "tc_c03_mengyao_coop_game_017": {
      "id": "tc_c03_mengyao_coop_game_017",
      "type": "line",
      "scene": "ts_c03_mengyao_coop_game_computers",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "“这次真的是说游戏，别每句话都配上背景音乐。”",
      "next": "tc_c03_mengyao_coop_game_018"
    },
    "tc_c03_mengyao_coop_game_018": {
      "id": "tc_c03_mengyao_coop_game_018",
      "type": "line",
      "scene": "ts_c03_mengyao_coop_game_computers",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "我笑出来，重新开了一局。她踩机关，我跳台阶。跳到一半，我问：“现在松手了吗？”",
      "next": "tc_c03_mengyao_coop_game_019"
    },
    "tc_c03_mengyao_coop_game_019": {
      "id": "tc_c03_mengyao_coop_game_019",
      "type": "line",
      "scene": "ts_c03_mengyao_coop_game_computers",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "“没有。”",
      "next": "tc_c03_mengyao_coop_game_020"
    },
    "tc_c03_mengyao_coop_game_020": {
      "id": "tc_c03_mengyao_coop_game_020",
      "type": "line",
      "scene": "ts_c03_mengyao_coop_game_computers",
      "speaker": "wenwen",
      "character": "mengyao",
      "text": "“那我过去了。”",
      "next": "tc_c03_mengyao_coop_game_021"
    },
    "tc_c03_mengyao_coop_game_021": {
      "id": "tc_c03_mengyao_coop_game_021",
      "type": "line",
      "scene": "ts_c03_mengyao_coop_game_computers",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "“文文，你再报一遍，我才真松手。”",
      "next": "tc_c03_mengyao_coop_game_022"
    },
    "tc_c03_mengyao_coop_game_022": {
      "id": "tc_c03_mengyao_coop_game_022",
      "type": "line",
      "scene": "ts_c03_mengyao_coop_game_checkout",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "玩到七点半，我们都停了。她还有备课要做，我也想回去洗衣服。结账时，她不许我一块付钱。",
      "next": "tc_c03_mengyao_coop_game_023"
    },
    "tc_c03_mengyao_coop_game_023": {
      "id": "tc_c03_mengyao_coop_game_023",
      "type": "line",
      "scene": "ts_c03_mengyao_coop_game_checkout",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "“你请水就行。今天第一坑毕竟是我挖的。”",
      "next": "tc_c03_mengyao_coop_game_024"
    },
    "tc_c03_mengyao_coop_game_024": {
      "id": "tc_c03_mengyao_coop_game_024",
      "type": "line",
      "scene": "ts_c03_mengyao_coop_game_outside",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "出了门，雨刚停。她低头找伞，我看见她的手指上有一小道蓝色墨迹，和从前握圆珠笔时的位置一样。那点熟悉让我想碰她的手，又让我及时把手收进了口袋。",
      "next": "tc_c03_mengyao_coop_game_025"
    },
    "tc_c03_mengyao_coop_game_025": {
      "id": "tc_c03_mengyao_coop_game_025",
      "type": "line",
      "scene": "ts_c03_mengyao_coop_game_outside",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "她撑开伞，抬头看我：“下次换你挑。我也想看看你现在玩什么。”",
      "next": "tc_c03_mengyao_new_meeting_001"
    },
    "tc_c03_mengyao_new_meeting_001": {
      "id": "tc_c03_mengyao_new_meeting_001",
      "type": "line",
      "scene": "ts_c03_mengyao_new_meeting",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "我们约在书店旁的小面馆。我睡醒以后赶到，她先到了十分钟，正在菜单上研究两种只差一个字的浇头。",
      "next": "tc_c03_mengyao_new_meeting_002"
    },
    "tc_c03_mengyao_new_meeting_002": {
      "id": "tc_c03_mengyao_new_meeting_002",
      "type": "line",
      "scene": "ts_c03_mengyao_new_meeting",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "“以前来过？”我问。",
      "next": "tc_c03_mengyao_new_meeting_003"
    },
    "tc_c03_mengyao_new_meeting_003": {
      "id": "tc_c03_mengyao_new_meeting_003",
      "type": "line",
      "scene": "ts_c03_mengyao_new_meeting",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "“来过。以前觉得名字很有文化，今天发现可能只是老板写错了。”",
      "next": "tc_c03_mengyao_new_meeting_004"
    },
    "tc_c03_mengyao_new_meeting_004": {
      "id": "tc_c03_mengyao_new_meeting_004",
      "type": "line",
      "scene": "ts_c03_mengyao_new_meeting",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "她把菜单推过来。我笑着读了两遍，服务员正好路过，平静地说，两种确实不一样，一种多放辣椒。",
      "next": "tc_c03_mengyao_new_meeting_005"
    },
    "tc_c03_mengyao_new_meeting_005": {
      "id": "tc_c03_mengyao_new_meeting_005",
      "type": "line",
      "scene": "ts_c03_mengyao_new_meeting",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "孟遥把菜单翻了过去：“好，这段删除。”",
      "next": "tc_c03_mengyao_new_meeting_006"
    },
    "tc_c03_mengyao_new_meeting_006": {
      "id": "tc_c03_mengyao_new_meeting_006",
      "type": "line",
      "scene": "ts_c03_mengyao_new_meeting",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "面上来后，我们聊起这些年见过的人。我讲了一位总在清晨来网吧打印简历的客人，只讲他每次都把衬衫叠在袋子里；孟遥说她最近跟同事争论一种练习到底有多难，争到最后两个人自己先做错了一题。",
      "next": "tc_c03_mengyao_new_meeting_007"
    },
    "tc_c03_mengyao_new_meeting_007": {
      "id": "tc_c03_mengyao_new_meeting_007",
      "type": "line",
      "scene": "ts_c03_mengyao_new_meeting",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "这些事都不精彩，也没有对方的位置，却让桌上的沉默没那么像一道要跨过去的缝。",
      "next": "tc_c03_mengyao_new_meeting_008"
    },
    "tc_c03_mengyao_new_meeting_008": {
      "id": "tc_c03_mengyao_new_meeting_008",
      "type": "line",
      "scene": "ts_c03_mengyao_new_meeting",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "吃到一半，她问：“你那时候为什么总说，等稳定了再告诉我？”",
      "next": "tc_c03_mengyao_new_meeting_009"
    },
    "tc_c03_mengyao_new_meeting_009": {
      "id": "tc_c03_mengyao_new_meeting_009",
      "type": "line",
      "scene": "ts_c03_mengyao_new_meeting",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "我没再低头搅面。",
      "next": "tc_c03_mengyao_new_meeting_010"
    },
    "tc_c03_mengyao_new_meeting_010": {
      "id": "tc_c03_mengyao_new_meeting_010",
      "type": "line",
      "scene": "ts_c03_mengyao_new_meeting",
      "speaker": "wenwen",
      "character": "mengyao",
      "text": "“觉得说了也没用。我没做好，告诉你就像承认了。”",
      "next": "tc_c03_mengyao_new_meeting_011"
    },
    "tc_c03_mengyao_new_meeting_011": {
      "id": "tc_c03_mengyao_new_meeting_011",
      "type": "line",
      "scene": "ts_c03_mengyao_new_meeting",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "“可是我那时候不想猜。”",
      "next": "tc_c03_mengyao_new_meeting_012"
    },
    "tc_c03_mengyao_new_meeting_012": {
      "id": "tc_c03_mengyao_new_meeting_012",
      "type": "line",
      "scene": "ts_c03_mengyao_new_meeting",
      "speaker": "wenwen",
      "character": "mengyao",
      "text": "“我知道得太晚。”",
      "next": "tc_c03_mengyao_new_meeting_013"
    },
    "tc_c03_mengyao_new_meeting_013": {
      "id": "tc_c03_mengyao_new_meeting_013",
      "type": "line",
      "scene": "ts_c03_mengyao_new_meeting",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "她用筷子把香菜拨到旁边，没有马上接我的道歉。窗外有辆车倒了两次都没停进去，我们不约而同看了一会儿。第三次停进去时，她才小声说：“我也有问题。我总猜你该怎么答，听见别的答案就生气。现在再讲，显得我很明白，其实当时一点都不。”",
      "next": "tc_c03_mengyao_new_meeting_014"
    },
    "tc_c03_mengyao_new_meeting_014": {
      "id": "tc_c03_mengyao_new_meeting_014",
      "type": "line",
      "scene": "ts_c03_mengyao_new_meeting",
      "speaker": "wenwen",
      "character": "mengyao",
      "text": "“现在呢？”",
      "next": "tc_c03_mengyao_new_meeting_015"
    },
    "tc_c03_mengyao_new_meeting_015": {
      "id": "tc_c03_mengyao_new_meeting_015",
      "type": "line",
      "scene": "ts_c03_mengyao_new_meeting",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "“现在知道自己不一定明白。”",
      "next": "tc_c03_mengyao_new_meeting_016"
    },
    "tc_c03_mengyao_new_meeting_016": {
      "id": "tc_c03_mengyao_new_meeting_016",
      "type": "line",
      "scene": "ts_c03_mengyao_new_meeting",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "她抬起头，认真看我：“这几次，我挺高兴的。但我不想用一句‘以前也这样’把它们全装进去。”",
      "next": "tc_c03_mengyao_new_meeting_017"
    },
    "tc_c03_mengyao_new_meeting_017": {
      "id": "tc_c03_mengyao_new_meeting_017",
      "type": "line",
      "scene": "ts_c03_mengyao_new_meeting",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "我把那碗本来想替她点的旧口味往自己面前挪了一点。",
      "next": "tc_c03_mengyao_new_meeting_018"
    },
    "tc_c03_mengyao_new_meeting_018": {
      "id": "tc_c03_mengyao_new_meeting_018",
      "type": "line",
      "scene": "ts_c03_mengyao_new_meeting",
      "speaker": "wenwen",
      "character": "mengyao",
      "text": "“那下回我先问你吃什么。”",
      "next": "tc_c03_mengyao_new_meeting_019"
    },
    "tc_c03_mengyao_new_meeting_019": {
      "id": "tc_c03_mengyao_new_meeting_019",
      "type": "line",
      "scene": "ts_c03_mengyao_new_meeting",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "“可以。别问得像填表。”",
      "next": "tc_c03_mengyao_new_meeting_020"
    },
    "tc_c03_mengyao_new_meeting_020": {
      "id": "tc_c03_mengyao_new_meeting_020",
      "type": "line",
      "scene": "ts_c03_mengyao_new_meeting_crossroad",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "离开时，她主动在楼梯上等了我半步。我们一起走到分路口，没有牵手，也没有约定复合。她给我看手机里下周空出来的一天下午，我报了自己的休息时间。",
      "next": "tc_c03_mengyao_new_meeting_021"
    },
    "tc_c03_mengyao_new_meeting_021": {
      "id": "tc_c03_mengyao_new_meeting_021",
      "type": "line",
      "scene": "ts_c03_mengyao_new_meeting_crossroad",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "我们站在路边，把一个还没有内容的见面，先放进了各自的生活里。",
      "next": "tc_c03_common_exit"
    },
    "tc_c03_mengyao_early_callback_gate": {
      "id": "tc_c03_mengyao_early_callback_gate",
      "type": "gate",
      "scene": "ts_c03_mengyao_flatbread_bakery",
      "cases": [
        {
          "flag": "reunion",
          "value": "nervous",
          "next": "tc_c03_mengyao_flatbread_018"
        },
        {
          "flag": "reunion",
          "value": "availability",
          "next": "tc_c03_mengyao_flatbread_019"
        }
      ],
      "default": null,
      "exhaustive": true
    },
    "tc_c04_mengyao_entry": {
      "id": "tc_c04_mengyao_entry",
      "type": "line",
      "scene": "ts_c04_mengyao_outing",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "这天我休班，睡醒才出门。孟遥穿了件浅色外套，布袋换成小包，见到我就把手机塞了进去。",
      "next": "tc_c04_mengyao_outing_002",
      "expression": "outfit-casual-jacket"
    },
    "tc_c04_mengyao_outing_002": {
      "id": "tc_c04_mengyao_outing_002",
      "type": "line",
      "scene": "ts_c04_mengyao_outing",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "“今天不用抢答英语问题。”",
      "next": "tc_c04_mengyao_outing_003",
      "expression": "outfit-casual-jacket",
      "avatarExpression": "outfit-casual-jacket"
    },
    "tc_c04_mengyao_outing_003": {
      "id": "tc_c04_mengyao_outing_003",
      "type": "line",
      "scene": "ts_c04_mengyao_outing",
      "speaker": "wenwen",
      "character": "mengyao",
      "text": "“那抢答别的有奖吗？”",
      "next": "tc_c04_mengyao_outing_004",
      "expression": "outfit-casual-jacket"
    },
    "tc_c04_mengyao_outing_004": {
      "id": "tc_c04_mengyao_outing_004",
      "type": "line",
      "scene": "ts_c04_mengyao_outing",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "“有。你替我们决定往左还是往右。”",
      "next": "tc_c04_mengyao_outing_005",
      "expression": "outfit-casual-jacket",
      "avatarExpression": "outfit-casual-jacket"
    },
    "tc_c04_mengyao_outing_005": {
      "id": "tc_c04_mengyao_outing_005",
      "type": "line",
      "scene": "ts_c04_mengyao_outing",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "左边的旧书摊只在下午摆，右边商场里有家街机厅。我们以前常为去哪儿耗掉半个约会，最后谁都说随便，随便到一起饿了。",
      "next": "tc_c04_mengyao_outing_006",
      "expression": "outfit-casual-jacket"
    },
    "tc_c04_mengyao_outing_006": {
      "id": "tc_c04_mengyao_outing_006",
      "type": "line",
      "scene": "ts_c04_mengyao_outing",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "这次她看了看两条路：“我两个都想去，但只够认真玩一个。你选，我下次再选。”",
      "next": "tc_c04_mengyao_outing_choice",
      "expression": "outfit-casual-jacket"
    },
    "tc_c04_mengyao_books_001": {
      "id": "tc_c04_mengyao_books_001",
      "type": "line",
      "scene": "ts_c04_mengyao_books",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "我们约好不挑自己读过的，也不能给对方选教辅。孟遥刚伸向一摞英语书，听到后半句，手停在半空。",
      "next": "tc_c04_mengyao_books_002",
      "expression": "outfit-casual-jacket"
    },
    "tc_c04_mengyao_books_002": {
      "id": "tc_c04_mengyao_books_002",
      "type": "line",
      "scene": "ts_c04_mengyao_books",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "“我只是看看价格。”",
      "next": "tc_c04_mengyao_books_003",
      "expression": "outfit-casual-jacket",
      "avatarExpression": "outfit-casual-jacket"
    },
    "tc_c04_mengyao_books_003": {
      "id": "tc_c04_mengyao_books_003",
      "type": "line",
      "scene": "ts_c04_mengyao_books",
      "speaker": "wenwen",
      "character": "mengyao",
      "text": "“孟老师，偏题了。”",
      "next": "tc_c04_mengyao_books_004",
      "expression": "outfit-casual-jacket"
    },
    "tc_c04_mengyao_books_004": {
      "id": "tc_c04_mengyao_books_004",
      "type": "line",
      "scene": "ts_c04_mengyao_books",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "她瞪了我一眼，从底下抽出一本封面磨花的短篇集。我选了一本写厨房的随笔，以为里面全是菜谱，翻开才发现作者花了三页写一只裂开的碗。",
      "next": "tc_c04_mengyao_books_005",
      "expression": "outfit-casual-jacket"
    },
    "tc_c04_mengyao_books_005": {
      "id": "tc_c04_mengyao_books_005",
      "type": "line",
      "scene": "ts_c04_mengyao_books",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "“你还要吗？”她问。",
      "next": "tc_c04_mengyao_books_006",
      "expression": "outfit-casual-jacket"
    },
    "tc_c04_mengyao_books_006": {
      "id": "tc_c04_mengyao_books_006",
      "type": "line",
      "scene": "ts_c04_mengyao_books",
      "speaker": "wenwen",
      "character": "mengyao",
      "text": "“要。它跟我一样，做饭前废话比较多。”",
      "next": "tc_c04_mengyao_books_007",
      "expression": "outfit-casual-jacket"
    },
    "tc_c04_mengyao_books_007": {
      "id": "tc_c04_mengyao_books_007",
      "type": "line",
      "scene": "ts_c04_mengyao_books_tea",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "我们在旁边茶店坐下，各读十分钟，再讲自己读到了什么。她讲一个坐错车的人，讲到结尾突然停住，往回翻了两页。",
      "next": "tc_c04_mengyao_books_008",
      "expression": "outfit-casual-jacket"
    },
    "tc_c04_mengyao_books_008": {
      "id": "tc_c04_mengyao_books_008",
      "type": "line",
      "scene": "ts_c04_mengyao_books_tea",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "“等会儿，我刚才理解反了。”",
      "next": "tc_c04_mengyao_books_009",
      "expression": "outfit-casual-jacket",
      "avatarExpression": "outfit-casual-jacket"
    },
    "tc_c04_mengyao_books_009": {
      "id": "tc_c04_mengyao_books_009",
      "type": "line",
      "scene": "ts_c04_mengyao_books_tea",
      "speaker": "wenwen",
      "character": "mengyao",
      "text": "“你要不要给我布置预习？”",
      "next": "tc_c04_mengyao_books_010",
      "expression": "outfit-casual-jacket"
    },
    "tc_c04_mengyao_books_010": {
      "id": "tc_c04_mengyao_books_010",
      "type": "line",
      "scene": "ts_c04_mengyao_books_tea",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "“不要。你可以当场笑。”",
      "next": "tc_c04_mengyao_books_011",
      "expression": "outfit-casual-jacket",
      "avatarExpression": "outfit-casual-jacket"
    },
    "tc_c04_mengyao_books_011": {
      "id": "tc_c04_mengyao_books_011",
      "type": "line",
      "scene": "ts_c04_mengyao_books_tea",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "我笑了。她也笑，拿起杯子挡了一下脸。后来我们没有交换书，只在各自书里夹了一张收据，写下下一次要讲的页码。她那张收据的背面写着：“这回不准提前搜结局。”",
      "next": "tc_c04_mengyao_books_012",
      "expression": "outfit-casual-jacket"
    },
    "tc_c04_mengyao_books_012": {
      "id": "tc_c04_mengyao_books_012",
      "type": "line",
      "scene": "ts_c04_mengyao_books_return",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "回去路上，她忽然问我为什么没选旧游戏。",
      "next": "tc_c04_mengyao_books_013",
      "expression": "outfit-casual-jacket"
    },
    "tc_c04_mengyao_books_013": {
      "id": "tc_c04_mengyao_books_013",
      "type": "line",
      "scene": "ts_c04_mengyao_books_return",
      "speaker": "wenwen",
      "character": "mengyao",
      "text": "“想跟你有点我以前不知道的事。”",
      "next": "tc_c04_mengyao_books_014",
      "expression": "outfit-casual-jacket"
    },
    "tc_c04_mengyao_books_014": {
      "id": "tc_c04_mengyao_books_014",
      "type": "line",
      "scene": "ts_c04_mengyao_books_return",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "孟遥低头踢开一颗小石子：“嗯。这本我也确实不知道。刚才已经证明过了。”",
      "next": "tc_c04_mengyao_busstop_001",
      "expression": "outfit-casual-jacket"
    },
    "tc_c04_mengyao_arcade_001": {
      "id": "tc_c04_mengyao_arcade_001",
      "type": "line",
      "scene": "ts_c04_mengyao_arcade",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "我们站到气垫球桌两边。孟遥把推柄握得很稳，先试了试桌面滑不滑，神情像已经研究明白。第一下，她把圆盘打在侧边，圆盘反弹回来，直接进了自己面前的球门。",
      "next": "tc_c04_mengyao_arcade_002",
      "expression": "outfit-casual-jacket"
    },
    "tc_c04_mengyao_arcade_002": {
      "id": "tc_c04_mengyao_arcade_002",
      "type": "line",
      "scene": "ts_c04_mengyao_arcade",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "记分屏在我那边亮起一个数字。",
      "next": "tc_c04_mengyao_arcade_003",
      "expression": "outfit-casual-jacket"
    },
    "tc_c04_mengyao_arcade_003": {
      "id": "tc_c04_mengyao_arcade_003",
      "type": "line",
      "scene": "ts_c04_mengyao_arcade",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "“欢迎回来。”我说。",
      "next": "tc_c04_mengyao_arcade_004",
      "expression": "outfit-casual-jacket"
    },
    "tc_c04_mengyao_arcade_004": {
      "id": "tc_c04_mengyao_arcade_004",
      "type": "line",
      "scene": "ts_c04_mengyao_arcade",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "她盯着自己空了的球门，慢慢看我一眼：“你等着。”",
      "next": "tc_c04_mengyao_arcade_005",
      "expression": "outfit-casual-jacket"
    },
    "tc_c04_mengyao_arcade_005": {
      "id": "tc_c04_mengyao_arcade_005",
      "type": "line",
      "scene": "ts_c04_mengyao_arcade",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "我没等多久，回击时也把圆盘拨进了自己这边。她笑得推柄都拿不住，指着比分说我们很适合互送礼物。旁边一个年轻人提醒，别只追圆盘，先守住中间。我俩同时说谢谢，转头又同时忘了。",
      "next": "tc_c04_mengyao_arcade_006",
      "expression": "outfit-casual-jacket"
    },
    "tc_c04_mengyao_arcade_006": {
      "id": "tc_c04_mengyao_arcade_006",
      "type": "line",
      "scene": "ts_c04_mengyao_arcade",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "下一局，孟遥先找到一点手感，用侧边把圆盘折向另一头。我追过去慢了一拍，她连赢两分，兴奋得抬手想跟我击掌，举到一半才想起我就在输掉的那一边。",
      "next": "tc_c04_mengyao_arcade_007",
      "expression": "outfit-casual-jacket"
    },
    "tc_c04_mengyao_arcade_007": {
      "id": "tc_c04_mengyao_arcade_007",
      "type": "line",
      "scene": "ts_c04_mengyao_arcade",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "“习惯了。”她说，准备把手收回去。",
      "next": "tc_c04_mengyao_arcade_008",
      "expression": "outfit-casual-jacket"
    },
    "tc_c04_mengyao_arcade_008": {
      "id": "tc_c04_mengyao_arcade_008",
      "type": "line",
      "scene": "ts_c04_mengyao_arcade",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "我先绕过桌角，轻轻碰上她的掌心。她的指尖擦过我的指根，笑声停了半拍。",
      "next": "tc_c04_mengyao_arcade_009",
      "expression": "outfit-casual-jacket"
    },
    "tc_c04_mengyao_arcade_009": {
      "id": "tc_c04_mengyao_arcade_009",
      "type": "line",
      "scene": "ts_c04_mengyao_arcade",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "“你怎么还过来了？”",
      "next": "tc_c04_mengyao_arcade_010",
      "expression": "outfit-casual-jacket",
      "avatarExpression": "outfit-casual-jacket"
    },
    "tc_c04_mengyao_arcade_010": {
      "id": "tc_c04_mengyao_arcade_010",
      "type": "line",
      "scene": "ts_c04_mengyao_arcade",
      "speaker": "wenwen",
      "character": "mengyao",
      "text": "“庆祝一下对手学会了。”",
      "next": "tc_c04_mengyao_arcade_011",
      "expression": "outfit-casual-jacket"
    },
    "tc_c04_mengyao_arcade_011": {
      "id": "tc_c04_mengyao_arcade_011",
      "type": "line",
      "scene": "ts_c04_mengyao_arcade",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "她看了我一眼，把下一枚游戏币放进我手里：“那你也学快点。我可不负责给你让分。”",
      "next": "tc_c04_mengyao_arcade_012",
      "expression": "outfit-casual-jacket"
    },
    "tc_c04_mengyao_arcade_012": {
      "id": "tc_c04_mengyao_arcade_012",
      "type": "line",
      "scene": "ts_c04_mengyao_arcade_arcade_exit",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "离开时，我们在门口的小票背面写下比分。她把自己那一栏圈起来，特意补了“并非文文让分”。我写下“下次换项目”，她抢过笔，把“下次”也圈了。",
      "next": "tc_c04_mengyao_arcade_013",
      "expression": "outfit-casual-jacket"
    },
    "tc_c04_mengyao_arcade_013": {
      "id": "tc_c04_mengyao_arcade_013",
      "type": "line",
      "scene": "ts_c04_mengyao_arcade_arcade_exit",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "回去路上，我问她为什么愿意玩这么不擅长的。",
      "next": "tc_c04_mengyao_arcade_014",
      "expression": "outfit-casual-jacket"
    },
    "tc_c04_mengyao_arcade_014": {
      "id": "tc_c04_mengyao_arcade_014",
      "type": "line",
      "scene": "ts_c04_mengyao_arcade_arcade_exit",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "“因为不好看也没关系。”她说完看我一眼，“你刚才追圆盘那个动作，我能记很久。”",
      "next": "tc_c04_mengyao_busstop_001",
      "expression": "outfit-casual-jacket"
    },
    "tc_c04_mengyao_busstop_001": {
      "id": "tc_c04_mengyao_busstop_001",
      "type": "line",
      "scene": "ts_c04_mengyao_busstop",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "天还亮着，我们在公交站分开。孟遥往前走了两步，又回来，把落在我手里的伞拿走。",
      "next": "tc_c04_mengyao_busstop_002",
      "expression": "outfit-casual-jacket"
    },
    "tc_c04_mengyao_busstop_002": {
      "id": "tc_c04_mengyao_busstop_002",
      "type": "line",
      "scene": "ts_c04_mengyao_busstop",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "“我刚才真的忘了。”",
      "next": "tc_c04_mengyao_busstop_003",
      "expression": "outfit-casual-jacket",
      "avatarExpression": "outfit-casual-jacket"
    },
    "tc_c04_mengyao_busstop_003": {
      "id": "tc_c04_mengyao_busstop_003",
      "type": "line",
      "scene": "ts_c04_mengyao_busstop",
      "speaker": "wenwen",
      "character": "mengyao",
      "text": "“我还以为是下次见面的理由。”",
      "next": "tc_c04_mengyao_busstop_004",
      "expression": "outfit-casual-jacket"
    },
    "tc_c04_mengyao_busstop_004": {
      "id": "tc_c04_mengyao_busstop_004",
      "type": "line",
      "scene": "ts_c04_mengyao_busstop",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "“我缺这一把伞吗？”",
      "next": "tc_c04_mengyao_busstop_005",
      "expression": "outfit-casual-jacket",
      "avatarExpression": "outfit-casual-jacket"
    },
    "tc_c04_mengyao_busstop_005": {
      "id": "tc_c04_mengyao_busstop_005",
      "type": "line",
      "scene": "ts_c04_mengyao_busstop_leaving",
      "speaker": "narrator",
      "character": null,
      "text": "她说完，自己先笑了。车来的时候，她没有在玻璃后做什么郑重的动作，只朝我晃了晃手机。我走出几步收到消息：“今天挺好。下次也可以没什么正事。”",
      "next": "tc_c04_common_exit"
    },
    "tc_c04_mengyao_outing_choice": {
      "id": "tc_c04_mengyao_outing_choice",
      "type": "choice",
      "scene": "ts_c04_mengyao_outing",
      "character": "mengyao",
      "text": "今天先去哪里？",
      "flag": "mengyaoOuting",
      "choices": [
        {
          "label": "去旧书摊，各挑一本没看过的书",
          "value": "books",
          "next": "tc_c04_mengyao_books_001"
        },
        {
          "label": "去街机厅，试一个谁都不擅长的项目",
          "value": "arcade",
          "next": "tc_c04_mengyao_arcade_001"
        }
      ]
    },
    "tc_c05_mengyao_entry": {
      "id": "tc_c05_mengyao_entry",
      "type": "line",
      "scene": "ts_c05_mengyao_hurt_joke",
      "speaker": "narrator",
      "character": null,
      "text": "第25天，朋友群里说了回声将在第30天停业的事。孟遥问了周栀一句最后几天忙不忙，没有擅自把她接下来的路安排好。我们也说好，到时候能一起吃饭就去，吃完各自赶自己的事。",
      "next": "tc_c05_mengyao_hurt_joke_002"
    },
    "tc_c05_mengyao_hurt_joke_002": {
      "id": "tc_c05_mengyao_hurt_joke_002",
      "type": "line",
      "scene": "ts_c05_mengyao_hurt_joke_porridge",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "第27天下午，我醒得有点沉，洗了脸才出门。孟遥刚下课，在一家卖粥的小店等我，手里拿着两张打印纸。",
      "next": "tc_c05_mengyao_hurt_joke_003",
      "expression": "outfit-teacher-bag"
    },
    "tc_c05_mengyao_hurt_joke_003": {
      "id": "tc_c05_mengyao_hurt_joke_003",
      "type": "line",
      "scene": "ts_c05_mengyao_hurt_joke_porridge",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "“你现在看见纸，是不是就觉得有作业？”她问。",
      "next": "tc_c05_mengyao_hurt_joke_004",
      "expression": "outfit-teacher-bag"
    },
    "tc_c05_mengyao_hurt_joke_004": {
      "id": "tc_c05_mengyao_hurt_joke_004",
      "type": "line",
      "scene": "ts_c05_mengyao_hurt_joke_porridge",
      "speaker": "wenwen",
      "character": "mengyao",
      "text": "“有点想叫你班长。”",
      "next": "tc_c05_mengyao_hurt_joke_005",
      "expression": "outfit-teacher-bag"
    },
    "tc_c05_mengyao_hurt_joke_005": {
      "id": "tc_c05_mengyao_hurt_joke_005",
      "type": "line",
      "scene": "ts_c05_mengyao_hurt_joke_porridge",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "“那是以前了。”",
      "next": "tc_c05_mengyao_hurt_joke_006",
      "expression": "outfit-teacher-bag",
      "avatarExpression": "outfit-teacher-bag"
    },
    "tc_c05_mengyao_hurt_joke_006": {
      "id": "tc_c05_mengyao_hurt_joke_006",
      "type": "line",
      "scene": "ts_c05_mengyao_hurt_joke_porridge",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "她把纸收起来，说自己最近试了一个新讲法，效果不如想象。我嘴比脑子快，接了句：“孟老师也有教不会的人。”",
      "next": "tc_c05_mengyao_hurt_joke_007",
      "expression": "outfit-teacher-bag"
    },
    "tc_c05_mengyao_hurt_joke_007": {
      "id": "tc_c05_mengyao_hurt_joke_007",
      "type": "line",
      "scene": "ts_c05_mengyao_hurt_joke_porridge",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "她的勺子停了一下。",
      "next": "tc_c05_mengyao_hurt_joke_008",
      "expression": "outfit-teacher-bag"
    },
    "tc_c05_mengyao_hurt_joke_008": {
      "id": "tc_c05_mengyao_hurt_joke_008",
      "type": "line",
      "scene": "ts_c05_mengyao_hurt_joke_porridge",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "“有。但不是拿来当笑话的。”",
      "next": "tc_c05_mengyao_hurt_joke_009",
      "expression": "outfit-teacher-bag",
      "avatarExpression": "outfit-teacher-bag"
    },
    "tc_c05_mengyao_hurt_joke_009": {
      "id": "tc_c05_mengyao_hurt_joke_009",
      "type": "line",
      "scene": "ts_c05_mengyao_hurt_joke_porridge",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "我想补救，反而说：“我不是说他们，是说你也会这么较真。”",
      "next": "tc_c05_mengyao_hurt_joke_010",
      "expression": "outfit-teacher-bag"
    },
    "tc_c05_mengyao_hurt_joke_010": {
      "id": "tc_c05_mengyao_hurt_joke_010",
      "type": "line",
      "scene": "ts_c05_mengyao_hurt_joke_porridge",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "“我做不好会失望，这也算较真？”",
      "next": "tc_c05_mengyao_hurt_joke_011",
      "expression": "outfit-teacher-bag",
      "avatarExpression": "outfit-teacher-bag"
    },
    "tc_c05_mengyao_hurt_joke_011": {
      "id": "tc_c05_mengyao_hurt_joke_011",
      "type": "line",
      "scene": "ts_c05_mengyao_hurt_joke_porridge",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "店里的风扇摇过去又摇回来。我本来想用“你以前就爱争第一”把气氛拉回来，话到了嘴边，忽然看见她的表情。",
      "next": "tc_c05_mengyao_hurt_joke_012",
      "expression": "outfit-teacher-bag"
    },
    "tc_c05_mengyao_hurt_joke_012": {
      "id": "tc_c05_mengyao_hurt_joke_012",
      "type": "line",
      "scene": "ts_c05_mengyao_hurt_joke_porridge",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "她已经猜到我会说什么。",
      "next": "tc_c05_mengyao_hurt_joke_013",
      "expression": "outfit-teacher-bag"
    },
    "tc_c05_mengyao_hurt_joke_013": {
      "id": "tc_c05_mengyao_hurt_joke_013",
      "type": "line",
      "scene": "ts_c05_mengyao_hurt_joke_porridge",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "“文文，你是不是觉得，我当老师就是因为爱管人？”",
      "next": "tc_c05_mengyao_hurt_joke_014",
      "expression": "outfit-teacher-bag",
      "avatarExpression": "outfit-teacher-bag"
    },
    "tc_c05_mengyao_hurt_joke_014": {
      "id": "tc_c05_mengyao_hurt_joke_014",
      "type": "line",
      "scene": "ts_c05_mengyao_hurt_joke_porridge",
      "speaker": "wenwen",
      "character": "mengyao",
      "text": "“没有。”",
      "next": "tc_c05_mengyao_hurt_joke_015",
      "expression": "outfit-teacher-bag"
    },
    "tc_c05_mengyao_hurt_joke_015": {
      "id": "tc_c05_mengyao_hurt_joke_015",
      "type": "line",
      "scene": "ts_c05_mengyao_hurt_joke_porridge",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "“刚才听起来很像。”",
      "next": "tc_c05_mengyao_hurt_joke_016",
      "expression": "outfit-teacher-bag",
      "avatarExpression": "outfit-teacher-bag"
    },
    "tc_c05_mengyao_hurt_joke_016": {
      "id": "tc_c05_mengyao_hurt_joke_016",
      "type": "line",
      "scene": "ts_c05_mengyao_hurt_joke_porridge",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "我把外套袖口往上推了推，又放下来。困意确实让我的头发木，但那不是这句话的理由。我不想让她接着问我的睡眠，好把真正不舒服的事绕开。",
      "next": "tc_c05_mengyao_hurt_joke_017",
      "expression": "outfit-teacher-bag"
    },
    "tc_c05_mengyao_hurt_joke_017": {
      "id": "tc_c05_mengyao_hurt_joke_017",
      "type": "line",
      "scene": "ts_c05_mengyao_hurt_joke_porridge",
      "speaker": "wenwen",
      "character": "mengyao",
      "text": "“我拿以前对你的印象，省掉了认真听你说。你是想跟我讲一件没做好的事，我先找笑点了。”",
      "next": "tc_c05_mengyao_hurt_joke_018",
      "expression": "outfit-teacher-bag"
    },
    "tc_c05_mengyao_hurt_joke_018": {
      "id": "tc_c05_mengyao_hurt_joke_018",
      "type": "line",
      "scene": "ts_c05_mengyao_hurt_joke_porridge",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "孟遥低头看着粥：“我不是完全不能开玩笑。我只是刚才还没笑出来。”",
      "next": "tc_c05_mengyao_hurt_joke_019",
      "expression": "outfit-teacher-bag"
    },
    "tc_c05_mengyao_hurt_joke_019": {
      "id": "tc_c05_mengyao_hurt_joke_019",
      "type": "line",
      "scene": "ts_c05_mengyao_hurt_joke_porridge",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "我点头。她也没有立刻替我把场面圆好。我们安静地吃了半碗，我才问她，还想不想继续讲那个新讲法。",
      "next": "tc_c05_mengyao_hurt_joke_020",
      "expression": "outfit-teacher-bag"
    },
    "tc_c05_mengyao_hurt_joke_020": {
      "id": "tc_c05_mengyao_hurt_joke_020",
      "type": "line",
      "scene": "ts_c05_mengyao_hurt_joke_porridge",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "“今天不想讲了。”",
      "next": "tc_c05_mengyao_hurt_joke_021",
      "expression": "outfit-teacher-bag",
      "avatarExpression": "outfit-teacher-bag"
    },
    "tc_c05_mengyao_hurt_joke_021": {
      "id": "tc_c05_mengyao_hurt_joke_021",
      "type": "line",
      "scene": "ts_c05_mengyao_hurt_joke_porridge",
      "speaker": "wenwen",
      "character": "mengyao",
      "text": "“好。”",
      "next": "tc_c05_mengyao_hurt_joke_022",
      "expression": "outfit-teacher-bag"
    },
    "tc_c05_mengyao_hurt_joke_022": {
      "id": "tc_c05_mengyao_hurt_joke_022",
      "type": "line",
      "scene": "ts_c05_mengyao_hurt_joke_crossroad",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "这顿饭没有变成争吵，也没有在最后五分钟突然格外甜蜜。送她到街口时，她说自己要买点东西，让我先回去。我没有跟上去证明诚意。",
      "next": "tc_c05_mengyao_listen_again_001",
      "expression": "outfit-teacher-bag"
    },
    "tc_c05_mengyao_listen_again_001": {
      "id": "tc_c05_mengyao_listen_again_001",
      "type": "line",
      "scene": "ts_c05_mengyao_listen_again",
      "speaker": "narrator",
      "character": null,
      "text": "第二天我们只发了几条短消息。到第29天，是孟遥问我睡醒没有。",
      "next": "tc_c05_mengyao_listen_again_002"
    },
    "tc_c05_mengyao_listen_again_002": {
      "id": "tc_c05_mengyao_listen_again_002",
      "type": "line",
      "scene": "ts_c05_mengyao_listen_again",
      "speaker": "wenwen",
      "character": null,
      "text": "“醒了。”",
      "next": "tc_c05_mengyao_listen_again_003"
    },
    "tc_c05_mengyao_listen_again_003": {
      "id": "tc_c05_mengyao_listen_again_003",
      "type": "line",
      "scene": "ts_c05_mengyao_listen_again",
      "speaker": "mengyao",
      "character": null,
      "text": "“那能不能帮我决定，下午吃咸的还是甜的？我已经站在店门口犹豫三分钟了。”",
      "next": "tc_c05_mengyao_listen_again_004"
    },
    "tc_c05_mengyao_listen_again_004": {
      "id": "tc_c05_mengyao_listen_again_004",
      "type": "line",
      "scene": "ts_c05_mengyao_listen_again_tofu",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "我赶到时，她还真站在那里，手里已经多了一份咸豆花。",
      "next": "tc_c05_mengyao_listen_again_005"
    },
    "tc_c05_mengyao_listen_again_005": {
      "id": "tc_c05_mengyao_listen_again_005",
      "type": "line",
      "scene": "ts_c05_mengyao_listen_again_tofu",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "“不是让你帮我做人生决定。”她递给我一把勺子，“最后还是先买了。”",
      "next": "tc_c05_mengyao_listen_again_006"
    },
    "tc_c05_mengyao_listen_again_006": {
      "id": "tc_c05_mengyao_listen_again_006",
      "type": "line",
      "scene": "ts_c05_mengyao_listen_again_tofu",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "我们坐到店外。她说前天回去后想起一件事：我们以前一起出门，她问我要不要去一个地方，我说不想，她也会认定我只是懒。",
      "next": "tc_c05_mengyao_listen_again_007"
    },
    "tc_c05_mengyao_listen_again_007": {
      "id": "tc_c05_mengyao_listen_again_007",
      "type": "line",
      "scene": "ts_c05_mengyao_listen_again_tofu",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "“我一直觉得自己比较会听话里的意思。现在看，也有听错的时候。”",
      "next": "tc_c05_mengyao_listen_again_008"
    },
    "tc_c05_mengyao_listen_again_008": {
      "id": "tc_c05_mengyao_listen_again_008",
      "type": "line",
      "scene": "ts_c05_mengyao_listen_again_tofu",
      "speaker": "wenwen",
      "character": "mengyao",
      "text": "“我前天确实说错了，不用跟我凑一个对称。”",
      "next": "tc_c05_mengyao_listen_again_009"
    },
    "tc_c05_mengyao_listen_again_009": {
      "id": "tc_c05_mengyao_listen_again_009",
      "type": "line",
      "scene": "ts_c05_mengyao_listen_again_tofu",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "“没跟你凑。”她用勺子指我，“你看，又替我解释。”",
      "next": "tc_c05_mengyao_listen_again_010"
    },
    "tc_c05_mengyao_listen_again_010": {
      "id": "tc_c05_mengyao_listen_again_010",
      "type": "line",
      "scene": "ts_c05_mengyao_listen_again_tofu",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "我举起双手，勺子差点滑进碗里。她伸手扶了一下碗，终于笑了。",
      "next": "tc_c05_mengyao_listen_again_011"
    },
    "tc_c05_mengyao_listen_again_011": {
      "id": "tc_c05_mengyao_listen_again_011",
      "type": "line",
      "scene": "ts_c05_mengyao_listen_again_tofu",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "她重新讲了课堂上没讲明白的地方，只讲自己的感受，没有翻出具体学生的资料。我听懂了一半，不懂的那一半直接问。后来轮到我说夜里遇到一个把自己充的时长全给朋友用掉、最后独自在柜台前算账的人，孟遥没有替我分析，只笑得肩膀发抖。",
      "next": "tc_c05_mengyao_listen_again_012"
    },
    "tc_c05_mengyao_listen_again_012": {
      "id": "tc_c05_mengyao_listen_again_012",
      "type": "line",
      "scene": "ts_c05_mengyao_listen_again_tofu",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "“你是不是也干过？”她问。",
      "next": "tc_c05_mengyao_listen_again_013"
    },
    "tc_c05_mengyao_listen_again_013": {
      "id": "tc_c05_mengyao_listen_again_013",
      "type": "line",
      "scene": "ts_c05_mengyao_listen_again_tofu",
      "speaker": "wenwen",
      "character": "mengyao",
      "text": "“我那时候比较先进，直接把零花钱算错。”",
      "next": "tc_c05_mengyao_listen_again_014"
    },
    "tc_c05_mengyao_listen_again_014": {
      "id": "tc_c05_mengyao_listen_again_014",
      "type": "line",
      "scene": "ts_c05_mengyao_listen_again_tofu",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "太阳移到了遮阳棚外。我准备起身时，她用勺柄敲了下碗边。",
      "next": "tc_c05_mengyao_listen_again_015"
    },
    "tc_c05_mengyao_listen_again_015": {
      "id": "tc_c05_mengyao_listen_again_015",
      "type": "line",
      "scene": "ts_c05_mengyao_listen_again_tofu",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "“前天没说完的，今天说完了。还想吃什么吗？”",
      "next": "tc_c05_mengyao_listen_again_016"
    },
    "tc_c05_mengyao_listen_again_016": {
      "id": "tc_c05_mengyao_listen_again_016",
      "type": "line",
      "scene": "ts_c05_mengyao_listen_again_tofu",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "这次我先看她，等她自己把另一句话说出来。",
      "next": "tc_c05_mengyao_listen_again_017"
    },
    "tc_c05_mengyao_listen_again_017": {
      "id": "tc_c05_mengyao_listen_again_017",
      "type": "line",
      "scene": "ts_c05_mengyao_listen_again_tofu",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "“我想再坐一会儿。”",
      "next": "tc_c05_common_exit"
    },
    "tc_c06_mengyao_entry": {
      "id": "tc_c06_mengyao_entry",
      "type": "line",
      "scene": "ts_c06_mengyao_after_dinner",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "回声附近那顿饭散得比平时早。周栀还要去上最后一个班，我十点也得回网吧。孟遥陪我走到公交站，接过我手里那袋没吃完的饼。",
      "next": "tc_c06_mengyao_after_dinner_002"
    },
    "tc_c06_mengyao_after_dinner_002": {
      "id": "tc_c06_mengyao_after_dinner_002",
      "type": "line",
      "scene": "ts_c06_mengyao_after_dinner",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "“我带回去明天热。你别放柜台上一夜，最后忘了是谁的。”",
      "next": "tc_c06_mengyao_after_dinner_003"
    },
    "tc_c06_mengyao_after_dinner_003": {
      "id": "tc_c06_mengyao_after_dinner_003",
      "type": "line",
      "scene": "ts_c06_mengyao_after_dinner",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "我想说她怎么知道，又发现自己以前确实这样忘过东西。",
      "next": "tc_c06_mengyao_after_dinner_004"
    },
    "tc_c06_mengyao_after_dinner_004": {
      "id": "tc_c06_mengyao_after_dinner_004",
      "type": "line",
      "scene": "ts_c06_mengyao_after_dinner",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "她看我一眼：“这件事允许我记得吧？”",
      "next": "tc_c06_mengyao_after_dinner_005"
    },
    "tc_c06_mengyao_after_dinner_005": {
      "id": "tc_c06_mengyao_after_dinner_005",
      "type": "line",
      "scene": "ts_c06_mengyao_after_dinner",
      "speaker": "wenwen",
      "character": "mengyao",
      "text": "“允许。还有更好的也可以记。”",
      "next": "tc_c06_mengyao_after_dinner_006"
    },
    "tc_c06_mengyao_after_dinner_006": {
      "id": "tc_c06_mengyao_after_dinner_006",
      "type": "line",
      "scene": "ts_c06_mengyao_after_dinner",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "车快到时，她问第32天能不能见。我那天休班，但前一夜结束后还是得先睡觉，我们把时间定到下午四点。",
      "next": "tc_c06_mengyao_after_dinner_007"
    },
    "tc_c06_mengyao_after_dinner_007": {
      "id": "tc_c06_mengyao_after_dinner_007",
      "type": "line",
      "scene": "ts_c06_mengyao_after_dinner",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "“我有个地方想去。”她说，“很普通。你别提前想象成惊喜。”",
      "next": "tc_c06_mengyao_after_dinner_008"
    },
    "tc_c06_mengyao_after_dinner_008": {
      "id": "tc_c06_mengyao_after_dinner_008",
      "type": "line",
      "scene": "ts_c06_mengyao_after_dinner_dawn_photo",
      "speaker": "narrator",
      "character": null,
      "text": "那天夜里我照常在柜台接待、补货。第31天临近天亮，手机亮了一下，是她昨晚拍的晚饭照片。照片里我正被烫得张嘴，毫无可取之处。",
      "next": "tc_c06_mengyao_after_dinner_009"
    },
    "tc_c06_mengyao_after_dinner_009": {
      "id": "tc_c06_mengyao_after_dinner_009",
      "type": "line",
      "scene": "ts_c06_mengyao_after_dinner_dawn_photo",
      "speaker": "narrator",
      "character": null,
      "text": "附言：“这个也记住了。”",
      "next": "tc_c06_mengyao_singing_001"
    },
    "tc_c06_mengyao_singing_001": {
      "id": "tc_c06_mengyao_singing_001",
      "type": "line",
      "scene": "ts_c06_mengyao_singing",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "孟遥想去的是一家按小时计费的小练歌房。她说跟朋友来过，白天下午人少，适合唱得难听还不想被认识的人听见。",
      "next": "tc_c06_mengyao_singing_002",
      "expression": "outfit-casual-jacket"
    },
    "tc_c06_mengyao_singing_002": {
      "id": "tc_c06_mengyao_singing_002",
      "type": "line",
      "scene": "ts_c06_mengyao_singing",
      "speaker": "wenwen",
      "character": "mengyao",
      "text": "“那你为什么叫我？”",
      "next": "tc_c06_mengyao_singing_003",
      "expression": "outfit-casual-jacket"
    },
    "tc_c06_mengyao_singing_003": {
      "id": "tc_c06_mengyao_singing_003",
      "type": "line",
      "scene": "ts_c06_mengyao_singing",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "“认识的人里，你的听觉损失比较经得起考验。”",
      "next": "tc_c06_mengyao_singing_004",
      "expression": "outfit-casual-jacket",
      "avatarExpression": "outfit-casual-jacket"
    },
    "tc_c06_mengyao_singing_004": {
      "id": "tc_c06_mengyao_singing_004",
      "type": "line",
      "scene": "ts_c06_mengyao_singing",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "我们各付了一半费用。她点了一首以前经常唱的歌，唱到第二段忽然忘词，盯着屏幕等了半天，前奏已经从我们以为的地方滑过去。",
      "next": "tc_c06_mengyao_singing_005",
      "expression": "outfit-casual-jacket"
    },
    "tc_c06_mengyao_singing_005": {
      "id": "tc_c06_mengyao_singing_005",
      "type": "line",
      "scene": "ts_c06_mengyao_singing",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "“重来？”我问。",
      "next": "tc_c06_mengyao_singing_006",
      "expression": "outfit-casual-jacket"
    },
    "tc_c06_mengyao_singing_006": {
      "id": "tc_c06_mengyao_singing_006",
      "type": "line",
      "scene": "ts_c06_mengyao_singing",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "“不。错过就错过，这首又不发成绩。”",
      "next": "tc_c06_mengyao_singing_007",
      "expression": "outfit-casual-jacket",
      "avatarExpression": "outfit-casual-jacket"
    },
    "tc_c06_mengyao_singing_007": {
      "id": "tc_c06_mengyao_singing_007",
      "type": "line",
      "scene": "ts_c06_mengyao_singing",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "她说得很有气势，下一句却又抢早了。我努力忍着，忍到她把话筒塞过来，才笑出了声。",
      "next": "tc_c06_mengyao_singing_008",
      "expression": "outfit-casual-jacket"
    },
    "tc_c06_mengyao_singing_008": {
      "id": "tc_c06_mengyao_singing_008",
      "type": "line",
      "scene": "ts_c06_mengyao_singing",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "轮到我唱，副歌比我记忆里高得多。我扯着嗓子挣扎了两句，自己按了暂停。孟遥把另一支话筒举在嘴边，模仿我刚才的吸气声，模仿到一半，先被自己的笑呛住。",
      "next": "tc_c06_mengyao_singing_009",
      "expression": "outfit-casual-jacket"
    },
    "tc_c06_mengyao_singing_009": {
      "id": "tc_c06_mengyao_singing_009",
      "type": "line",
      "scene": "ts_c06_mengyao_singing",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "我们坐在沙发两端，笑完喘气。桌上的冰块融了一半，灯光把她浅色的外套染成蓝色。我忽然觉得，她今天没有试着像过去那样接管歌单，也没有等我先决定每一件事。她想唱就点，不想唱就跳过，还点了一首我完全不认识的新歌。",
      "next": "tc_c06_mengyao_singing_010",
      "expression": "outfit-casual-jacket"
    },
    "tc_c06_mengyao_singing_010": {
      "id": "tc_c06_mengyao_singing_010",
      "type": "line",
      "scene": "ts_c06_mengyao_singing",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "我问她什么时候开始听的。",
      "next": "tc_c06_mengyao_singing_011",
      "expression": "outfit-casual-jacket"
    },
    "tc_c06_mengyao_singing_011": {
      "id": "tc_c06_mengyao_singing_011",
      "type": "line",
      "scene": "ts_c06_mengyao_singing",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "“你不在的那段时间。跟一个朋友吃饭，她手机一直放，我嫌吵，回家却搜了一遍。”",
      "next": "tc_c06_mengyao_singing_012",
      "expression": "outfit-casual-jacket",
      "avatarExpression": "outfit-casual-jacket"
    },
    "tc_c06_mengyao_singing_012": {
      "id": "tc_c06_mengyao_singing_012",
      "type": "line",
      "scene": "ts_c06_mengyao_singing",
      "speaker": "wenwen",
      "character": "mengyao",
      "text": "“挺好听。”",
      "next": "tc_c06_mengyao_singing_013",
      "expression": "outfit-casual-jacket"
    },
    "tc_c06_mengyao_singing_013": {
      "id": "tc_c06_mengyao_singing_013",
      "type": "line",
      "scene": "ts_c06_mengyao_singing",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "“你前面还没听到。”",
      "next": "tc_c06_mengyao_singing_014",
      "expression": "outfit-casual-jacket",
      "avatarExpression": "outfit-casual-jacket"
    },
    "tc_c06_mengyao_singing_014": {
      "id": "tc_c06_mengyao_singing_014",
      "type": "line",
      "scene": "ts_c06_mengyao_singing",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "她没有把进度拉回去，重新放了一遍，等着我听。我也点了一首自己夜班回家路上会听的。她靠着沙发，听到最后才说，这首适合走路，脚步会慢下来。",
      "next": "tc_c06_mengyao_singing_015",
      "expression": "outfit-casual-jacket"
    },
    "tc_c06_mengyao_singing_015": {
      "id": "tc_c06_mengyao_singing_015",
      "type": "line",
      "scene": "ts_c06_mengyao_singing",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "“我以前总觉得，”她拿起水杯，又放下，“再见到你，应该有很多话一下全说完。”",
      "next": "tc_c06_mengyao_singing_016",
      "expression": "outfit-casual-jacket"
    },
    "tc_c06_mengyao_singing_016": {
      "id": "tc_c06_mengyao_singing_016",
      "type": "line",
      "scene": "ts_c06_mengyao_singing",
      "speaker": "wenwen",
      "character": "mengyao",
      "text": "“现在呢？”",
      "next": "tc_c06_mengyao_singing_017",
      "expression": "outfit-casual-jacket"
    },
    "tc_c06_mengyao_singing_017": {
      "id": "tc_c06_mengyao_singing_017",
      "type": "line",
      "scene": "ts_c06_mengyao_singing",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "“现在发现还有很多歌你没听过。先给你听这个，也行。”",
      "next": "tc_c06_mengyao_singing_018",
      "expression": "outfit-casual-jacket",
      "avatarExpression": "outfit-casual-jacket"
    },
    "tc_c06_mengyao_singing_018": {
      "id": "tc_c06_mengyao_singing_018",
      "type": "line",
      "scene": "ts_c06_mengyao_singing",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "剩下二十分钟，我们唱了一首两个人都熟的老歌。熟归熟，第二段谁先进还是记混了，最后干脆一人一句，错了也接着唱。",
      "next": "tc_c06_mengyao_singing_019",
      "expression": "outfit-casual-jacket"
    },
    "tc_c06_mengyao_singing_019": {
      "id": "tc_c06_mengyao_singing_019",
      "type": "line",
      "scene": "ts_c06_mengyao_singing_rain_walk",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "离开时外面在落小雨。我撑伞，她站到我右边，走了一段又换到左边。",
      "next": "tc_c06_mengyao_singing_020",
      "expression": "outfit-casual-jacket"
    },
    "tc_c06_mengyao_singing_020": {
      "id": "tc_c06_mengyao_singing_020",
      "type": "line",
      "scene": "ts_c06_mengyao_singing_rain_walk",
      "speaker": "wenwen",
      "character": "mengyao",
      "text": "“怎么了？”",
      "next": "tc_c06_mengyao_singing_021",
      "expression": "outfit-casual-jacket"
    },
    "tc_c06_mengyao_singing_021": {
      "id": "tc_c06_mengyao_singing_021",
      "type": "line",
      "scene": "ts_c06_mengyao_singing_rain_walk",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "“右边的地面低，鞋进水。”",
      "next": "tc_c06_mengyao_singing_022",
      "expression": "outfit-casual-jacket",
      "avatarExpression": "outfit-casual-jacket"
    },
    "tc_c06_mengyao_singing_022": {
      "id": "tc_c06_mengyao_singing_022",
      "type": "line",
      "scene": "ts_c06_mengyao_singing_rain_walk",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "我往外挪，她伸手把伞柄往中间推回来。",
      "next": "tc_c06_mengyao_singing_023",
      "expression": "outfit-casual-jacket"
    },
    "tc_c06_mengyao_singing_023": {
      "id": "tc_c06_mengyao_singing_023",
      "type": "line",
      "scene": "ts_c06_mengyao_singing_rain_walk",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "“你往外站，等会儿回去还得洗外套。两个人挤一点也不会被罚。”",
      "next": "tc_c06_mengyao_singing_024",
      "expression": "outfit-casual-jacket",
      "avatarExpression": "outfit-casual-jacket"
    },
    "tc_c06_mengyao_singing_024": {
      "id": "tc_c06_mengyao_singing_024",
      "type": "line",
      "scene": "ts_c06_mengyao_singing_rain_walk",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "她的肩贴了我一下。我们谁都没把这一下说破，只在经过水坑时同时停住，随后又同时让对方先走。孟遥低头笑了，先跨了过去，再转身看我。",
      "next": "tc_c06_mengyao_singing_025",
      "expression": "outfit-casual-jacket"
    },
    "tc_c06_mengyao_singing_025": {
      "id": "tc_c06_mengyao_singing_025",
      "type": "line",
      "scene": "ts_c06_mengyao_singing_rain_walk",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "“这回我先。”",
      "next": "tc_c06_common_exit",
      "expression": "outfit-casual-jacket",
      "avatarExpression": "outfit-casual-jacket"
    },
    "tc_c07_mengyao_entry": {
      "id": "tc_c07_mengyao_entry",
      "type": "line",
      "scene": "ts_c07_mengyao_her_friends",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "孟遥和两位朋友刚吃完饭，在店门口看见我。她事先告诉过我，今天下午有自己的约会；我在附近买东西，没打算进去找她。",
      "next": "tc_c07_mengyao_her_friends_002"
    },
    "tc_c07_mengyao_her_friends_002": {
      "id": "tc_c07_mengyao_her_friends_002",
      "type": "line",
      "scene": "ts_c07_mengyao_her_friends",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "她却隔着玻璃朝我挥手。我走过去，她把我介绍给朋友，没有含糊地用“那个谁”，也没为了让别人不问就急着解释我们的过去。",
      "next": "tc_c07_mengyao_her_friends_003"
    },
    "tc_c07_mengyao_her_friends_003": {
      "id": "tc_c07_mengyao_her_friends_003",
      "type": "line",
      "scene": "ts_c07_mengyao_her_friends",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "“文文。最近常一起吃饭的朋友。”",
      "next": "tc_c07_mengyao_her_friends_004"
    },
    "tc_c07_mengyao_her_friends_004": {
      "id": "tc_c07_mengyao_her_friends_004",
      "type": "line",
      "scene": "ts_c07_mengyao_her_friends",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "其中一位笑着问是不是游戏里一起掉坑的那个人——她说到这里停了停。孟遥耳朵一下红了：“不是所有事情都要在现场复述。”",
      "next": "tc_c07_mengyao_her_friends_005"
    },
    "tc_c07_mengyao_her_friends_005": {
      "id": "tc_c07_mengyao_her_friends_005",
      "type": "line",
      "scene": "ts_c07_mengyao_her_friends",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "我忍不住问她到底说了多少。她把手里的纸巾揉成一个团，想了想，还是先承认：“说了你有一次很得意，然后立刻失败了。别的没说。”",
      "next": "tc_c07_mengyao_her_friends_006"
    },
    "tc_c07_mengyao_her_friends_006": {
      "id": "tc_c07_mengyao_her_friends_006",
      "type": "line",
      "scene": "ts_c07_mengyao_her_friends",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "她的朋友很自然地转去聊别的。我站在旁边，听见她们说我不认识的店、上个月看过的电影，以及下次准备一起去的地方。孟遥在朋友面前也会突然提高声音反驳，跟我在一起时有一点不同，笑的时候要先拍旁边人的胳膊。",
      "next": "tc_c07_mengyao_her_friends_007"
    },
    "tc_c07_mengyao_her_friends_007": {
      "id": "tc_c07_mengyao_her_friends_007",
      "type": "line",
      "scene": "ts_c07_mengyao_her_friends",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "以前我会把这种不了解看成自己错过了什么。今天我提着购物袋站在那里，只是第一次具体知道，重逢前的她也过着有声响的日子。",
      "next": "tc_c07_mengyao_her_friends_008"
    },
    "tc_c07_mengyao_her_friends_008": {
      "id": "tc_c07_mengyao_her_friends_008",
      "type": "line",
      "scene": "ts_c07_mengyao_her_friends",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "朋友先到街边等她时，她问我是不是等得无聊。",
      "next": "tc_c07_mengyao_her_friends_009"
    },
    "tc_c07_mengyao_her_friends_009": {
      "id": "tc_c07_mengyao_her_friends_009",
      "type": "line",
      "scene": "ts_c07_mengyao_her_friends",
      "speaker": "wenwen",
      "character": "mengyao",
      "text": "“有一点。有几个名字我听不懂。”",
      "next": "tc_c07_mengyao_her_friends_010"
    },
    "tc_c07_mengyao_her_friends_010": {
      "id": "tc_c07_mengyao_her_friends_010",
      "type": "line",
      "scene": "ts_c07_mengyao_her_friends",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "“下次你可以直接问。”",
      "next": "tc_c07_mengyao_her_friends_011"
    },
    "tc_c07_mengyao_her_friends_011": {
      "id": "tc_c07_mengyao_her_friends_011",
      "type": "line",
      "scene": "ts_c07_mengyao_her_friends",
      "speaker": "wenwen",
      "character": "mengyao",
      "text": "“我怕打断。”",
      "next": "tc_c07_mengyao_her_friends_012"
    },
    "tc_c07_mengyao_her_friends_012": {
      "id": "tc_c07_mengyao_her_friends_012",
      "type": "line",
      "scene": "ts_c07_mengyao_her_friends",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "“你也可以不加入。”她晃了一下我提的袋子，“我今天还是跟她们出去，不会因为你在附近就散场。下次你约毛狼，也一样。”",
      "next": "tc_c07_mengyao_her_friends_013"
    },
    "tc_c07_mengyao_her_friends_013": {
      "id": "tc_c07_mengyao_her_friends_013",
      "type": "line",
      "scene": "ts_c07_mengyao_her_friends",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "我说好，她也没把这当成一项需要互相表扬的进步。她只是问我买的酸奶是什么味，确认自己没喝过，便去旁边又买了一瓶。",
      "next": "tc_c07_mengyao_outing_gate"
    },
    "tc_c07_mengyao_books_return_001": {
      "id": "tc_c07_mengyao_books_return_001",
      "type": "line",
      "scene": "ts_c07_mengyao_books_return",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "这天我们在茶店交换各自的书。孟遥夹着收据的那一页已经翻皱了，我那本厨房随笔则多了两张纸条。",
      "next": "tc_c07_mengyao_books_return_002"
    },
    "tc_c07_mengyao_books_return_002": {
      "id": "tc_c07_mengyao_books_return_002",
      "type": "line",
      "scene": "ts_c07_mengyao_books_return",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "“你做笔记了？”她有点惊讶。",
      "next": "tc_c07_mengyao_books_return_003"
    },
    "tc_c07_mengyao_books_return_003": {
      "id": "tc_c07_mengyao_books_return_003",
      "type": "line",
      "scene": "ts_c07_mengyao_books_return",
      "speaker": "wenwen",
      "character": "mengyao",
      "text": "“没有。记了两种想吃的东西，怕忘。”",
      "next": "tc_c07_mengyao_books_return_004"
    },
    "tc_c07_mengyao_books_return_004": {
      "id": "tc_c07_mengyao_books_return_004",
      "type": "line",
      "scene": "ts_c07_mengyao_books_return",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "她翻到一篇写搬家的短文，忽然说自己读完有点难过。我读同一篇时，却觉得结尾很好笑。她本能地开始解释作者为什么这样写，讲到一半停下来。",
      "next": "tc_c07_mengyao_books_return_005"
    },
    "tc_c07_mengyao_books_return_005": {
      "id": "tc_c07_mengyao_books_return_005",
      "type": "line",
      "scene": "ts_c07_mengyao_books_return",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "“等一下，你先说笑在哪里。”",
      "next": "tc_c07_mengyao_books_return_006"
    },
    "tc_c07_mengyao_books_return_006": {
      "id": "tc_c07_mengyao_books_return_006",
      "type": "line",
      "scene": "ts_c07_mengyao_books_return",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "我指给她看。那个准备轻装搬家的人，最后把破锅带走了，又把新买的收纳箱送人。孟遥重新读了一遍，嘴角也弯了。",
      "next": "tc_c07_mengyao_books_return_007"
    },
    "tc_c07_mengyao_books_return_007": {
      "id": "tc_c07_mengyao_books_return_007",
      "type": "line",
      "scene": "ts_c07_mengyao_books_return",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "“我还以为你没看进去。”",
      "next": "tc_c07_mengyao_books_return_008"
    },
    "tc_c07_mengyao_books_return_008": {
      "id": "tc_c07_mengyao_books_return_008",
      "type": "line",
      "scene": "ts_c07_mengyao_books_return",
      "speaker": "wenwen",
      "character": "mengyao",
      "text": "“我看进去了，只是掉在另一层。”",
      "next": "tc_c07_mengyao_books_return_009"
    },
    "tc_c07_mengyao_books_return_009": {
      "id": "tc_c07_mengyao_books_return_009",
      "type": "line",
      "scene": "ts_c07_mengyao_books_return",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "她在那页收据背面写了一句“破锅确实很好笑”，推给我看。我们没有争出一种正确读法。临走时她问下本要不要继续互相挑，我说好，今天先别挑厨房，她问我是不是已经知道自己根本不会照着做菜。",
      "next": "tc_c07_mengyao_books_return_010"
    },
    "tc_c07_mengyao_books_return_010": {
      "id": "tc_c07_mengyao_books_return_010",
      "type": "line",
      "scene": "ts_c07_mengyao_books_return",
      "speaker": "wenwen",
      "character": "mengyao",
      "text": "“我可以先学会买菜。”",
      "next": "tc_c07_mengyao_books_return_011"
    },
    "tc_c07_mengyao_books_return_011": {
      "id": "tc_c07_mengyao_books_return_011",
      "type": "line",
      "scene": "ts_c07_mengyao_books_return",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "“行。书店还管这个呢。”",
      "next": "tc_c07_mengyao_crossroad_001"
    },
    "tc_c07_mengyao_arcade_return_001": {
      "id": "tc_c07_mengyao_arcade_return_001",
      "type": "line",
      "scene": "ts_c07_mengyao_arcade_return",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "我们把上次留下的小票带回了街机厅。孟遥把它平摊在掌心，像一份非常珍贵又十分寒酸的战书。",
      "next": "tc_c07_mengyao_arcade_return_002"
    },
    "tc_c07_mengyao_arcade_return_002": {
      "id": "tc_c07_mengyao_arcade_return_002",
      "type": "line",
      "scene": "ts_c07_mengyao_arcade_return",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "“今天先不打气垫球。”她说，“上次说好了换项目。”",
      "next": "tc_c07_mengyao_arcade_return_003"
    },
    "tc_c07_mengyao_arcade_return_003": {
      "id": "tc_c07_mengyao_arcade_return_003",
      "type": "line",
      "scene": "ts_c07_mengyao_arcade_return",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "我们挑了双人划船。开场动画里两个人动作整齐，到我们手上，船很快歪着撞了岸。孟遥急着纠正我，我也急着纠正她，两个人说到一半都停了。",
      "next": "tc_c07_mengyao_arcade_return_004"
    },
    "tc_c07_mengyao_arcade_return_004": {
      "id": "tc_c07_mengyao_arcade_return_004",
      "type": "line",
      "scene": "ts_c07_mengyao_arcade_return",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "“要不先别教。”我说。",
      "next": "tc_c07_mengyao_arcade_return_005"
    },
    "tc_c07_mengyao_arcade_return_005": {
      "id": "tc_c07_mengyao_arcade_return_005",
      "type": "line",
      "scene": "ts_c07_mengyao_arcade_return",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "“同意。我也不知道怎么划。”",
      "next": "tc_c07_mengyao_arcade_return_006"
    },
    "tc_c07_mengyao_arcade_return_006": {
      "id": "tc_c07_mengyao_arcade_return_006",
      "type": "line",
      "scene": "ts_c07_mengyao_arcade_return",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "第二局，我们先听机器里的节拍，谁慢了就让另一个人提醒一句。依然没有好成绩，至少没再一开始就撞岸。孟遥下了机器，扶着栏杆笑，额前的碎发翘起一点。",
      "next": "tc_c07_mengyao_arcade_return_007"
    },
    "tc_c07_mengyao_arcade_return_007": {
      "id": "tc_c07_mengyao_arcade_return_007",
      "type": "line",
      "scene": "ts_c07_mengyao_arcade_return",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "“今天谁也别发给朋友。”",
      "next": "tc_c07_mengyao_arcade_return_008"
    },
    "tc_c07_mengyao_arcade_return_008": {
      "id": "tc_c07_mengyao_arcade_return_008",
      "type": "line",
      "scene": "ts_c07_mengyao_arcade_return",
      "speaker": "wenwen",
      "character": "mengyao",
      "text": "“我想跟毛狼讲我们有多厉害。”",
      "next": "tc_c07_mengyao_arcade_return_009"
    },
    "tc_c07_mengyao_arcade_return_009": {
      "id": "tc_c07_mengyao_arcade_return_009",
      "type": "line",
      "scene": "ts_c07_mengyao_arcade_return",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "“那你讲想象中的版本。”",
      "next": "tc_c07_mengyao_arcade_return_010"
    },
    "tc_c07_mengyao_arcade_return_010": {
      "id": "tc_c07_mengyao_arcade_return_010",
      "type": "line",
      "scene": "ts_c07_mengyao_arcade_return",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "她去买了两瓶水，把其中一瓶贴在我胳膊上。冰得我缩了一下，她笑着跑开半步，又在前面等我。那张旧小票回到她包里，背面多了一项新记录：今天没分出胜负，两个人都出汗了。",
      "next": "tc_c07_mengyao_crossroad_001"
    },
    "tc_c07_mengyao_crossroad_001": {
      "id": "tc_c07_mengyao_crossroad_001",
      "type": "line",
      "scene": "ts_c07_mengyao_crossroad",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "走到路口，她说周末要和朋友出去走走，想让我推荐一家适合买早饭的店。我推荐了我下夜班常去的那家，没有顺势提出跟着去。",
      "next": "tc_c07_mengyao_crossroad_002"
    },
    "tc_c07_mengyao_crossroad_002": {
      "id": "tc_c07_mengyao_crossroad_002",
      "type": "line",
      "scene": "ts_c07_mengyao_crossroad",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "她记下位置，又问：“你下个休息日下午，给我留一点吗？”",
      "next": "tc_c07_mengyao_crossroad_003"
    },
    "tc_c07_mengyao_crossroad_003": {
      "id": "tc_c07_mengyao_crossroad_003",
      "type": "line",
      "scene": "ts_c07_mengyao_crossroad",
      "speaker": "wenwen",
      "character": "mengyao",
      "text": "“留。多少？”",
      "next": "tc_c07_mengyao_crossroad_004"
    },
    "tc_c07_mengyao_crossroad_004": {
      "id": "tc_c07_mengyao_crossroad_004",
      "type": "line",
      "scene": "ts_c07_mengyao_crossroad",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "“先两个小时。好玩的话再问你加不加。”",
      "next": "tc_c07_mengyao_crossroad_005"
    },
    "tc_c07_mengyao_crossroad_005": {
      "id": "tc_c07_mengyao_crossroad_005",
      "type": "line",
      "scene": "ts_c07_mengyao_crossroad",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "我说自己不按小时出租。她想了想，把手机收好：“那就两小时起，剩下的看你愿不愿意。”",
      "next": "tc_c07_common_exit"
    },
    "tc_c07_mengyao_outing_gate": {
      "id": "tc_c07_mengyao_outing_gate",
      "type": "gate",
      "scene": "ts_c07_mengyao_books_return",
      "cases": [
        {
          "flag": "mengyaoOuting",
          "value": "books",
          "next": "tc_c07_mengyao_books_return_001"
        },
        {
          "flag": "mengyaoOuting",
          "value": "arcade",
          "next": "tc_c07_mengyao_arcade_return_001"
        }
      ],
      "default": null,
      "exhaustive": true
    },
    "tc_c08_mengyao_entry": {
      "id": "tc_c08_mengyao_entry",
      "type": "line",
      "scene": "ts_c08_mengyao_rest_together",
      "speaker": "narrator",
      "character": null,
      "text": "第52天，我跟师匠商量了试着轮班。师匠没当场许下什么，只把现有同事的安排拿出来，一起看看怎么试排。我把这个消息告诉孟遥时，她没有说“终于”，只问我自己觉得怎么样。",
      "next": "tc_c08_mengyao_rest_together_002"
    },
    "tc_c08_mengyao_rest_together_002": {
      "id": "tc_c08_mengyao_rest_together_002",
      "type": "line",
      "scene": "ts_c08_mengyao_rest_together",
      "speaker": "wenwen",
      "character": null,
      "text": "“有点期待，也怕换了还是累。”",
      "next": "tc_c08_mengyao_rest_together_003"
    },
    "tc_c08_mengyao_rest_together_003": {
      "id": "tc_c08_mengyao_rest_together_003",
      "type": "line",
      "scene": "ts_c08_mengyao_rest_together",
      "speaker": "mengyao",
      "character": null,
      "text": "“那试了才知道。”",
      "next": "tc_c08_mengyao_rest_together_004"
    },
    "tc_c08_mengyao_rest_together_004": {
      "id": "tc_c08_mengyao_rest_together_004",
      "type": "line",
      "scene": "ts_c08_mengyao_rest_together_tea",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "到了第54天，我们在一家可以借桌游的茶店见面。还在试排期间，我依旧有夜班，这天下午是睡足后才出来。孟遥却比平时慢半拍，坐下时把包带挂错了椅背，起身找包时差点连自己的椅子一起拖走。",
      "next": "tc_c08_mengyao_rest_together_005"
    },
    "tc_c08_mengyao_rest_together_005": {
      "id": "tc_c08_mengyao_rest_together_005",
      "type": "line",
      "scene": "ts_c08_mengyao_rest_together_tea",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "“我看见了。”我说。",
      "next": "tc_c08_mengyao_rest_together_006"
    },
    "tc_c08_mengyao_rest_together_006": {
      "id": "tc_c08_mengyao_rest_together_006",
      "type": "line",
      "scene": "ts_c08_mengyao_rest_together_tea",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "“你可以当没看见。”",
      "next": "tc_c08_mengyao_rest_together_007"
    },
    "tc_c08_mengyao_rest_together_007": {
      "id": "tc_c08_mengyao_rest_together_007",
      "type": "line",
      "scene": "ts_c08_mengyao_rest_together_tea",
      "speaker": "wenwen",
      "character": "mengyao",
      "text": "“来不及，已经开始回放。”",
      "next": "tc_c08_mengyao_rest_together_008"
    },
    "tc_c08_mengyao_rest_together_008": {
      "id": "tc_c08_mengyao_rest_together_008",
      "type": "line",
      "scene": "ts_c08_mengyao_rest_together_tea",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "她抬手挡住脸，笑完才说，昨天备课时改来改去，最后还是用了第一版，今天又上了一上午课。她本来想把下午安排得很热闹，出门前还查了好几个地方。",
      "next": "tc_c08_mengyao_rest_together_009"
    },
    "tc_c08_mengyao_rest_together_009": {
      "id": "tc_c08_mengyao_rest_together_009",
      "type": "line",
      "scene": "ts_c08_mengyao_rest_together_tea",
      "speaker": "wenwen",
      "character": "mengyao",
      "text": "“现在呢？”",
      "next": "tc_c08_mengyao_rest_together_010"
    },
    "tc_c08_mengyao_rest_together_010": {
      "id": "tc_c08_mengyao_rest_together_010",
      "type": "line",
      "scene": "ts_c08_mengyao_rest_together_tea",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "“现在想坐着。”",
      "next": "tc_c08_mengyao_rest_together_011"
    },
    "tc_c08_mengyao_rest_together_011": {
      "id": "tc_c08_mengyao_rest_together_011",
      "type": "line",
      "scene": "ts_c08_mengyao_rest_together_tea",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "我把刚借来的桌游放在一边，给她倒了半杯热水。她指了指盒子，说可以先教她怎么玩。我看了三页说明书，发现自己也没看懂。",
      "next": "tc_c08_mengyao_rest_together_012"
    },
    "tc_c08_mengyao_rest_together_012": {
      "id": "tc_c08_mengyao_rest_together_012",
      "type": "line",
      "scene": "ts_c08_mengyao_rest_together_tea",
      "speaker": "wenwen",
      "character": "mengyao",
      "text": "“孟遥。”",
      "next": "tc_c08_mengyao_rest_together_013"
    },
    "tc_c08_mengyao_rest_together_013": {
      "id": "tc_c08_mengyao_rest_together_013",
      "type": "line",
      "scene": "ts_c08_mengyao_rest_together_tea",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "“嗯？”",
      "next": "tc_c08_mengyao_rest_together_014"
    },
    "tc_c08_mengyao_rest_together_014": {
      "id": "tc_c08_mengyao_rest_together_014",
      "type": "line",
      "scene": "ts_c08_mengyao_rest_together_tea",
      "speaker": "wenwen",
      "character": "mengyao",
      "text": "“我可能借了一个需要大学课程先修的东西。”",
      "next": "tc_c08_mengyao_rest_together_015"
    },
    "tc_c08_mengyao_rest_together_015": {
      "id": "tc_c08_mengyao_rest_together_015",
      "type": "line",
      "scene": "ts_c08_mengyao_rest_together_tea",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "她把说明书拿过去，认真看了半分钟，又原样推回来。",
      "next": "tc_c08_mengyao_rest_together_016"
    },
    "tc_c08_mengyao_rest_together_016": {
      "id": "tc_c08_mengyao_rest_together_016",
      "type": "line",
      "scene": "ts_c08_mengyao_rest_together_tea",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "“退课。”",
      "next": "tc_c08_mengyao_rest_together_017"
    },
    "tc_c08_mengyao_rest_together_017": {
      "id": "tc_c08_mengyao_rest_together_017",
      "type": "line",
      "scene": "ts_c08_mengyao_rest_together_tea",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "我们换了一副普通扑克牌。最开始玩的是比大小，玩到后来，她提出用牌垒房子。我搭第一层，她搭第二层。我把桌面碰得轻轻一响，刚成形的尖顶便倒了。",
      "next": "tc_c08_mengyao_rest_together_018"
    },
    "tc_c08_mengyao_rest_together_018": {
      "id": "tc_c08_mengyao_rest_together_018",
      "type": "line",
      "scene": "ts_c08_mengyao_rest_together_tea",
      "speaker": "wenwen",
      "character": "mengyao",
      "text": "“我不是故意的。”",
      "next": "tc_c08_mengyao_rest_together_019"
    },
    "tc_c08_mengyao_rest_together_019": {
      "id": "tc_c08_mengyao_rest_together_019",
      "type": "line",
      "scene": "ts_c08_mengyao_rest_together_tea",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "“我知道。故意的能晚一点。”",
      "next": "tc_c08_mengyao_rest_together_020"
    },
    "tc_c08_mengyao_rest_together_020": {
      "id": "tc_c08_mengyao_rest_together_020",
      "type": "line",
      "scene": "ts_c08_mengyao_rest_together_tea",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "再搭一次，她为了看清牌缝俯下身，笑的时候呼出一口气，整排房子跟着垮掉。我们一起望着散在桌面的牌，都没急着怪对方。",
      "next": "tc_c08_mengyao_rest_together_021"
    },
    "tc_c08_mengyao_rest_together_021": {
      "id": "tc_c08_mengyao_rest_together_021",
      "type": "line",
      "scene": "ts_c08_mengyao_rest_together_tea",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "她说自己今天有一堂课上得不算满意，原本以为出来见我，还得拿出一个比较轻松的样子。",
      "next": "tc_c08_mengyao_rest_together_022"
    },
    "tc_c08_mengyao_rest_together_022": {
      "id": "tc_c08_mengyao_rest_together_022",
      "type": "line",
      "scene": "ts_c08_mengyao_rest_together_tea",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "“怕你觉得我现在整天只讲工作。”",
      "next": "tc_c08_mengyao_rest_together_023"
    },
    "tc_c08_mengyao_rest_together_023": {
      "id": "tc_c08_mengyao_rest_together_023",
      "type": "line",
      "scene": "ts_c08_mengyao_rest_together_tea",
      "speaker": "wenwen",
      "character": "mengyao",
      "text": "“你可以讲，我也可能有时候听不懂。”",
      "next": "tc_c08_mengyao_rest_together_024"
    },
    "tc_c08_mengyao_rest_together_024": {
      "id": "tc_c08_mengyao_rest_together_024",
      "type": "line",
      "scene": "ts_c08_mengyao_rest_together_tea",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "“听不懂可以问。听不下去也可以说。”",
      "next": "tc_c08_mengyao_rest_together_025"
    },
    "tc_c08_mengyao_rest_together_025": {
      "id": "tc_c08_mengyao_rest_together_025",
      "type": "line",
      "scene": "ts_c08_mengyao_rest_together_tea",
      "speaker": "wenwen",
      "character": "mengyao",
      "text": "“那我现在有一个问题。”",
      "next": "tc_c08_mengyao_rest_together_026"
    },
    "tc_c08_mengyao_rest_together_026": {
      "id": "tc_c08_mengyao_rest_together_026",
      "type": "line",
      "scene": "ts_c08_mengyao_rest_together_tea",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "她坐直一点：“什么？”",
      "next": "tc_c08_mengyao_rest_together_027"
    },
    "tc_c08_mengyao_rest_together_027": {
      "id": "tc_c08_mengyao_rest_together_027",
      "type": "line",
      "scene": "ts_c08_mengyao_rest_together_tea",
      "speaker": "wenwen",
      "character": "mengyao",
      "text": "“刚才你对着纸牌呼气，是不是战术？”",
      "next": "tc_c08_mengyao_rest_together_028"
    },
    "tc_c08_mengyao_rest_together_028": {
      "id": "tc_c08_mengyao_rest_together_028",
      "type": "line",
      "scene": "ts_c08_mengyao_rest_together_tea",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "孟遥愣了一下，伸手把两张牌立到我面前：“你自己试试。你要是能吹倒自己这一边、保住我那一边，才叫战术。”",
      "next": "tc_c08_mengyao_rest_together_029"
    },
    "tc_c08_mengyao_rest_together_029": {
      "id": "tc_c08_mengyao_rest_together_029",
      "type": "line",
      "scene": "ts_c08_mengyao_rest_together_tea",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "我们耗了很久，搭出一间歪斜的小房子。她拿手机拍了一张，拍之前问我要不要把手留在旁边。我把手搁上去，手指比牌房子还高。",
      "next": "tc_c08_mengyao_rest_together_030"
    },
    "tc_c08_mengyao_rest_together_030": {
      "id": "tc_c08_mengyao_rest_together_030",
      "type": "line",
      "scene": "ts_c08_mengyao_rest_together_tea",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "“这像违章加建。”我说。",
      "next": "tc_c08_mengyao_rest_together_031"
    },
    "tc_c08_mengyao_rest_together_031": {
      "id": "tc_c08_mengyao_rest_together_031",
      "type": "line",
      "scene": "ts_c08_mengyao_rest_together_tea",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "她笑着拍完，没有拿去给谁看，先发给了我。照片里没有我的脸，也没有她的脸，只有两只搁在桌边的手和一间随时会倒的纸房子。",
      "next": "tc_c08_mengyao_rest_together_032",
      "expression": "expression-smile"
    },
    "tc_c08_mengyao_rest_together_032": {
      "id": "tc_c08_mengyao_rest_together_032",
      "type": "line",
      "scene": "ts_c08_mengyao_rest_together_checkout",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "结账前，她去洗手。我没趁她不在把钱抢着付掉，等她回来，一人出了一半。出门时我问她今天有没有达到原先的计划。",
      "next": "tc_c08_mengyao_rest_together_033"
    },
    "tc_c08_mengyao_rest_together_033": {
      "id": "tc_c08_mengyao_rest_together_033",
      "type": "line",
      "scene": "ts_c08_mengyao_rest_together_checkout",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "“完全没有。”",
      "next": "tc_c08_mengyao_rest_together_034"
    },
    "tc_c08_mengyao_rest_together_034": {
      "id": "tc_c08_mengyao_rest_together_034",
      "type": "line",
      "scene": "ts_c08_mengyao_rest_together_checkout",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "我正准备接话，她又说：“但我下次还想这样坐着。”",
      "next": "tc_c08_mengyao_rest_together_035"
    },
    "tc_c08_mengyao_rest_together_035": {
      "id": "tc_c08_mengyao_rest_together_035",
      "type": "line",
      "scene": "ts_c08_mengyao_rest_together_checkout",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "她把包带重新挂好，伸手替我摘掉肩上的一点纸屑。手伸过来时，我没躲开。她也没急着装成只是顺便，指尖停了一瞬才离开。",
      "next": "tc_c08_mengyao_rest_together_036"
    },
    "tc_c08_mengyao_rest_together_036": {
      "id": "tc_c08_mengyao_rest_together_036",
      "type": "line",
      "scene": "ts_c08_mengyao_rest_together_checkout",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "“下次你累的时候，也可以提前跟我说。”",
      "next": "tc_c08_mengyao_rest_together_037"
    },
    "tc_c08_mengyao_rest_together_037": {
      "id": "tc_c08_mengyao_rest_together_037",
      "type": "line",
      "scene": "ts_c08_mengyao_rest_together_checkout",
      "speaker": "wenwen",
      "character": "mengyao",
      "text": "“会不会没意思？”",
      "next": "tc_c08_mengyao_rest_together_038"
    },
    "tc_c08_mengyao_rest_together_038": {
      "id": "tc_c08_mengyao_rest_together_038",
      "type": "line",
      "scene": "ts_c08_mengyao_rest_together_checkout",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "“今天你嫌我没意思了吗？”",
      "next": "tc_c08_mengyao_rest_together_039"
    },
    "tc_c08_mengyao_rest_together_039": {
      "id": "tc_c08_mengyao_rest_together_039",
      "type": "line",
      "scene": "ts_c08_mengyao_rest_together_checkout",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "我摇头。她看着我，眼里有一点得意，却没把这算成自己又赢了一回。",
      "next": "tc_c08_common_exit"
    },
    "tc_c09_mengyao_entry": {
      "id": "tc_c09_mengyao_entry",
      "type": "line",
      "scene": "ts_c09_mengyao_relationship",
      "speaker": "narrator",
      "character": null,
      "text": "第61天试排结束后，我和师匠、轮班同事商量好了后面的安排。我仍上夜班，也终于能提前知道几个固定的休息日。孟遥看了我发过去的时间，没有把每一个空格都填上，只选了其中一天下午。",
      "next": "tc_c09_mengyao_relationship_002"
    },
    "tc_c09_mengyao_relationship_002": {
      "id": "tc_c09_mengyao_relationship_002",
      "type": "line",
      "scene": "ts_c09_mengyao_relationship_bakery",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "我们去买烧饼。她这次买了两个，把硬边留在自己手里，见我看她，还故意咬了一口。",
      "next": "tc_c09_mengyao_relationship_003"
    },
    "tc_c09_mengyao_relationship_003": {
      "id": "tc_c09_mengyao_relationship_003",
      "type": "line",
      "scene": "ts_c09_mengyao_relationship_bakery",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "“记住了吗？”",
      "next": "tc_c09_mengyao_relationship_004"
    },
    "tc_c09_mengyao_relationship_004": {
      "id": "tc_c09_mengyao_relationship_004",
      "type": "line",
      "scene": "ts_c09_mengyao_relationship_bakery",
      "speaker": "wenwen",
      "character": "mengyao",
      "text": "“记住了。”",
      "next": "tc_c09_mengyao_relationship_005"
    },
    "tc_c09_mengyao_relationship_005": {
      "id": "tc_c09_mengyao_relationship_005",
      "type": "line",
      "scene": "ts_c09_mengyao_relationship_steps",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "我们坐回桥边。和第15天相比，水位低了一点，台阶上多了几块被太阳晒热的地方。孟遥先说：“我最近想过，我们是不是该把这件事讲清楚。”",
      "next": "tc_c09_mengyao_relationship_006"
    },
    "tc_c09_mengyao_relationship_006": {
      "id": "tc_c09_mengyao_relationship_006",
      "type": "line",
      "scene": "ts_c09_mengyao_relationship_steps",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "她说得很慢，没给我提前圈定一个答案。",
      "next": "tc_c09_mengyao_relationship_007"
    },
    "tc_c09_mengyao_relationship_007": {
      "id": "tc_c09_mengyao_relationship_007",
      "type": "line",
      "scene": "ts_c09_mengyao_relationship_steps",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "“我现在喜欢跟你待在一起。但以前的关系，不应该替今天做决定。”",
      "next": "tc_c09_mengyao_relationship_008"
    },
    "tc_c09_mengyao_relationship_008": {
      "id": "tc_c09_mengyao_relationship_008",
      "type": "line",
      "scene": "ts_c09_mengyao_relationship_steps",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "我看着她手里的纸袋，知道这次不能拿“以后再说”把这段对话包起来。",
      "next": "tc_c09_mengyao_relationship_choice"
    },
    "tc_c09_mengyao_dating_001": {
      "id": "tc_c09_mengyao_dating_001",
      "type": "line",
      "scene": "ts_c09_mengyao_dating",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "“我想跟你重新交往。”我说，“不是把以前那段接上。我想跟现在的你在一起。”",
      "next": "tc_c09_mengyao_dating_002"
    },
    "tc_c09_mengyao_dating_002": {
      "id": "tc_c09_mengyao_dating_002",
      "type": "line",
      "scene": "ts_c09_mengyao_dating",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "孟遥没有马上笑。她把纸袋折了一下，抬头问：“你确定，不是因为我们已经熟悉，觉得不用从头费劲？”",
      "next": "tc_c09_mengyao_dating_003",
      "expression": "expression-smile"
    },
    "tc_c09_mengyao_dating_003": {
      "id": "tc_c09_mengyao_dating_003",
      "type": "line",
      "scene": "ts_c09_mengyao_dating",
      "speaker": "wenwen",
      "character": "mengyao",
      "text": "“最近没少费劲。”",
      "next": "tc_c09_mengyao_dating_004"
    },
    "tc_c09_mengyao_dating_004": {
      "id": "tc_c09_mengyao_dating_004",
      "type": "line",
      "scene": "ts_c09_mengyao_dating",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "她瞪了我一眼，我赶紧继续：“但我想继续。有时候你讲的事我不知道怎么接，有时候我说错话。跟你见面前，我也会想今天能不能让你开心一点。这些不是因为省事。”",
      "next": "tc_c09_mengyao_dating_005"
    },
    "tc_c09_mengyao_dating_005": {
      "id": "tc_c09_mengyao_dating_005",
      "type": "line",
      "scene": "ts_c09_mengyao_dating",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "她低头看了一会儿鞋尖，忽然笑了：“这句还可以。前半句很悬。”",
      "next": "tc_c09_mengyao_dating_006"
    },
    "tc_c09_mengyao_dating_006": {
      "id": "tc_c09_mengyao_dating_006",
      "type": "line",
      "scene": "ts_c09_mengyao_dating",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "我问她的答案。她没有再拿话绕我。",
      "next": "tc_c09_mengyao_dating_007"
    },
    "tc_c09_mengyao_dating_007": {
      "id": "tc_c09_mengyao_dating_007",
      "type": "line",
      "scene": "ts_c09_mengyao_dating",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "“我也想。以前的事，有些还是会想起来，但我不想为了证明自己已经放下，就故意不靠近你。”",
      "next": "tc_c09_mengyao_dating_008"
    },
    "tc_c09_mengyao_dating_008": {
      "id": "tc_c09_mengyao_dating_008",
      "type": "line",
      "scene": "ts_c09_mengyao_dating",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "她把一只手放到我们之间，没有伸手来拉，也没有把它藏回袖子。我先问了一句“可以吗”，她说可以。我握住她的手，掌心比想象中暖，手指上还有写字留下的薄茧。",
      "next": "tc_c09_mengyao_dating_009"
    },
    "tc_c09_mengyao_dating_009": {
      "id": "tc_c09_mengyao_dating_009",
      "type": "line",
      "scene": "ts_c09_mengyao_dating",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "“现在是不是又要说以后都不会让我生气？”她问。",
      "next": "tc_c09_mengyao_dating_010"
    },
    "tc_c09_mengyao_dating_010": {
      "id": "tc_c09_mengyao_dating_010",
      "type": "line",
      "scene": "ts_c09_mengyao_dating",
      "speaker": "wenwen",
      "character": "mengyao",
      "text": "“我准备说，今天还想跟你走一会儿。”",
      "next": "tc_c09_mengyao_dating_011"
    },
    "tc_c09_mengyao_dating_011": {
      "id": "tc_c09_mengyao_dating_011",
      "type": "line",
      "scene": "ts_c09_mengyao_dating",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "“这个比较可信。”",
      "next": "tc_c09_mengyao_dating_012"
    },
    "tc_c09_mengyao_dating_012": {
      "id": "tc_c09_mengyao_dating_012",
      "type": "line",
      "scene": "ts_c09_mengyao_dating_walk",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "我们沿桥下的路慢慢走，没有马上讨论住在一起，也没有拿一次牵手抵掉以前所有问题。她说下周有两天比较忙，我说我正好轮到夜班。说完这些，空出来的那一天仍然在。",
      "next": "tc_c09_mengyao_dating_013"
    },
    "tc_c09_mengyao_dating_013": {
      "id": "tc_c09_mengyao_dating_013",
      "type": "line",
      "scene": "ts_c09_mengyao_dating_walk",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "走到一个狭窄的台阶，她放开我的手先下去，站稳以后，又朝我伸了回来。",
      "next": "tc_c09_mengyao_dating_014"
    },
    "tc_c09_mengyao_dating_014": {
      "id": "tc_c09_mengyao_dating_014",
      "type": "line",
      "scene": "ts_c09_mengyao_dating_walk",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "“别只顾着看我，脚下也看。”",
      "next": "tc_c09_mengyao_dating_015"
    },
    "tc_c09_mengyao_dating_015": {
      "id": "tc_c09_mengyao_dating_015",
      "type": "line",
      "scene": "ts_c09_mengyao_dating_walk",
      "speaker": "wenwen",
      "character": "mengyao",
      "text": "“你这句很像——”",
      "next": "tc_c09_mengyao_dating_016"
    },
    "tc_c09_mengyao_dating_016": {
      "id": "tc_c09_mengyao_dating_016",
      "type": "line",
      "scene": "ts_c09_mengyao_dating_walk",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "“像什么？”",
      "next": "tc_c09_mengyao_dating_017"
    },
    "tc_c09_mengyao_dating_017": {
      "id": "tc_c09_mengyao_dating_017",
      "type": "line",
      "scene": "ts_c09_mengyao_dating_walk",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "我闭上嘴，笑着牵住她。她也笑了，没有等我把那个旧称呼说出来。",
      "next": "tc_c09_common_exit"
    },
    "tc_c09_mengyao_friends_001": {
      "id": "tc_c09_mengyao_friends_001",
      "type": "line",
      "scene": "ts_c09_mengyao_friends",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "“我想了很久，”我说，“这段时间很高兴。但如果说重新交往，我心里还有一部分是在努力证明以前没有白过。”",
      "next": "tc_c09_mengyao_friends_002"
    },
    "tc_c09_mengyao_friends_002": {
      "id": "tc_c09_mengyao_friends_002",
      "type": "line",
      "scene": "ts_c09_mengyao_friends",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "孟遥的手指停在纸袋折痕上。我继续说：“我不想用这个答应你。现在，我更想做朋友。”",
      "next": "tc_c09_mengyao_friends_003"
    },
    "tc_c09_mengyao_friends_003": {
      "id": "tc_c09_mengyao_friends_003",
      "type": "line",
      "scene": "ts_c09_mengyao_friends",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "她没有马上说没关系。桥上走过两个人，我们一起把脚往台阶里面收了收。等脚步声过去，她才开口。",
      "next": "tc_c09_mengyao_friends_004"
    },
    "tc_c09_mengyao_friends_004": {
      "id": "tc_c09_mengyao_friends_004",
      "type": "line",
      "scene": "ts_c09_mengyao_friends",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "“会失落。因为我确实认真想过另一种可能。”",
      "next": "tc_c09_mengyao_friends_005"
    },
    "tc_c09_mengyao_friends_005": {
      "id": "tc_c09_mengyao_friends_005",
      "type": "line",
      "scene": "ts_c09_mengyao_friends",
      "speaker": "wenwen",
      "character": "mengyao",
      "text": "“对不起。”",
      "next": "tc_c09_mengyao_friends_006"
    },
    "tc_c09_mengyao_friends_006": {
      "id": "tc_c09_mengyao_friends_006",
      "type": "line",
      "scene": "ts_c09_mengyao_friends",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "“你没有故意骗我。这几次相处，我也不是白来的。”",
      "next": "tc_c09_mengyao_friends_007"
    },
    "tc_c09_mengyao_friends_007": {
      "id": "tc_c09_mengyao_friends_007",
      "type": "line",
      "scene": "ts_c09_mengyao_friends",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "她吸了一口气，把剩下半个烧饼放回袋里：“不过我大概需要一点时间，别明天又像什么都没发生一样约我。”",
      "next": "tc_c09_mengyao_friends_008"
    },
    "tc_c09_mengyao_friends_008": {
      "id": "tc_c09_mengyao_friends_008",
      "type": "line",
      "scene": "ts_c09_mengyao_friends",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "我说好。她没有答应固定多久，我们也没给“朋友”立一张马上照做的清单。",
      "next": "tc_c09_mengyao_friends_009"
    },
    "tc_c09_mengyao_friends_009": {
      "id": "tc_c09_mengyao_friends_009",
      "type": "line",
      "scene": "ts_c09_mengyao_friends",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "离开前，她笑了笑，笑得比平时浅一些：“这次你至少没消失，让我自己找答案。”",
      "next": "tc_c09_mengyao_friends_010"
    },
    "tc_c09_mengyao_friends_010": {
      "id": "tc_c09_mengyao_friends_010",
      "type": "line",
      "scene": "ts_c09_mengyao_friends_day81",
      "speaker": "narrator",
      "character": null,
      "text": "第81天，孟遥在群里发了一个自己也答错的冷知识。毛狼抢着说答案，我跟着答，两个人错得一模一样。她发来一串笑脸，过了一会儿，私信问我最近轮班怎么样。",
      "next": "tc_c09_mengyao_friends_011"
    },
    "tc_c09_mengyao_friends_011": {
      "id": "tc_c09_mengyao_friends_011",
      "type": "line",
      "scene": "ts_c09_mengyao_friends_day81",
      "speaker": "narrator",
      "character": null,
      "text": "我们聊了几句，没有把私人谈话又绕回复合。后来朋友约饭，她也来了，坐在我斜对面，认真跟周栀讨论一道菜。饭后我去结自己那份，她隔着桌子提醒我少算了一杯饮料。",
      "next": "tc_c09_mengyao_friends_012"
    },
    "tc_c09_mengyao_friends_012": {
      "id": "tc_c09_mengyao_friends_012",
      "type": "line",
      "scene": "ts_c09_mengyao_friends_day81",
      "speaker": "narrator",
      "character": null,
      "text": "我把钱补上，她笑着抬了抬杯子。",
      "next": "tc_c09_mengyao_friends_013"
    },
    "tc_c09_mengyao_friends_013": {
      "id": "tc_c09_mengyao_friends_013",
      "type": "line",
      "scene": "ts_c09_mengyao_friends_day81",
      "speaker": "narrator",
      "character": null,
      "text": "我知道，有些熟悉还能留下。它不需要再装作一场尚未结束的恋爱。",
      "next": "tc_c09_common_exit"
    },
    "tc_c09_mengyao_relationship_choice": {
      "id": "tc_c09_mengyao_relationship_choice",
      "type": "choice",
      "scene": "ts_c09_mengyao_relationship_steps",
      "character": "mengyao",
      "text": "我想怎样回应孟遥？",
      "flag": "mengyaoRelationship",
      "choices": [
        {
          "label": "我想跟你重新交往。",
          "value": "dating",
          "next": "tc_c09_mengyao_dating_001"
        },
        {
          "label": "我不想用这个答应你。现在，我更想做朋友。",
          "value": "friends",
          "next": "tc_c09_mengyao_friends_001"
        }
      ]
    },
    "tc_c10_mengyao_dating_001": {
      "id": "tc_c10_mengyao_dating_001",
      "type": "line",
      "scene": "ts_c10_mengyao_dating",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "我从网吧回来时，孟遥在约好的茶店门口等我。今天我上的是白天的一段班，往后的轮班里仍有夜班。她刚结束上午的课，吃过饭休息了一会儿，手里提着给自己买的橘子。",
      "next": "tc_c10_mengyao_dating_002"
    },
    "tc_c10_mengyao_dating_002": {
      "id": "tc_c10_mengyao_dating_002",
      "type": "line",
      "scene": "ts_c10_mengyao_dating",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "“今天休闲项目由你决定。”她说。",
      "next": "tc_c10_mengyao_dating_003"
    },
    "tc_c10_mengyao_dating_003": {
      "id": "tc_c10_mengyao_dating_003",
      "type": "line",
      "scene": "ts_c10_mengyao_dating",
      "speaker": "wenwen",
      "character": "mengyao",
      "text": "“我选吃橘子。”",
      "next": "tc_c10_mengyao_dating_004"
    },
    "tc_c10_mengyao_dating_004": {
      "id": "tc_c10_mengyao_dating_004",
      "type": "line",
      "scene": "ts_c10_mengyao_dating",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "“那我建议你补交一点活动内容。”",
      "next": "tc_c10_mengyao_dating_005"
    },
    "tc_c10_mengyao_dating_005": {
      "id": "tc_c10_mengyao_dating_005",
      "type": "line",
      "scene": "ts_c10_mengyao_dating_new_shop",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "我们去了一家没去过的小店，借了个看起来很容易的双人桌游。说明只有一张纸，我自信读完，玩到第三轮，孟遥忽然发现我们把胜负条件看反了。",
      "next": "tc_c10_mengyao_dating_006"
    },
    "tc_c10_mengyao_dating_006": {
      "id": "tc_c10_mengyao_dating_006",
      "type": "line",
      "scene": "ts_c10_mengyao_dating_new_shop",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "她盯着我：“你刚才说什么？”",
      "next": "tc_c10_mengyao_dating_007"
    },
    "tc_c10_mengyao_dating_007": {
      "id": "tc_c10_mengyao_dating_007",
      "type": "line",
      "scene": "ts_c10_mengyao_dating_new_shop",
      "speaker": "wenwen",
      "character": "mengyao",
      "text": "“简单。”",
      "next": "tc_c10_mengyao_dating_008"
    },
    "tc_c10_mengyao_dating_008": {
      "id": "tc_c10_mengyao_dating_008",
      "type": "line",
      "scene": "ts_c10_mengyao_dating_new_shop",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "“还有呢？”",
      "next": "tc_c10_mengyao_dating_009"
    },
    "tc_c10_mengyao_dating_009": {
      "id": "tc_c10_mengyao_dating_009",
      "type": "line",
      "scene": "ts_c10_mengyao_dating_new_shop",
      "speaker": "wenwen",
      "character": "mengyao",
      "text": "“这次不用看第二遍。”",
      "next": "tc_c10_mengyao_dating_010"
    },
    "tc_c10_mengyao_dating_010": {
      "id": "tc_c10_mengyao_dating_010",
      "type": "line",
      "scene": "ts_c10_mengyao_dating_new_shop",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "她笑得往椅背上靠，我把说明书重新铺开，顺手替她接住差点滚到地上的橘子。她没有把我推开，也没借机说我两年都没长进，只把橘子剥成两半，一半递给我。",
      "next": "tc_c10_mengyao_dating_011",
      "expression": "expression-smile"
    },
    "tc_c10_mengyao_dating_011": {
      "id": "tc_c10_mengyao_dating_011",
      "type": "line",
      "scene": "ts_c10_mengyao_dating_new_shop",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "这两年里，我们见过彼此不体面的时候。她有讲得不满意的课，我有被顾客催得心烦的一夜；我会在她讲到一半时走神，她也会凭语气先猜我的意思。如今仍会吵，但吵到一半，至少有人想得起问一句，刚才究竟是在生什么气。",
      "next": "tc_c10_mengyao_dating_012"
    },
    "tc_c10_mengyao_dating_012": {
      "id": "tc_c10_mengyao_dating_012",
      "type": "line",
      "scene": "ts_c10_mengyao_dating_new_shop",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "她没有离开自己的工作，变成等我下班的人。我也还在网吧轮班，有自己愿意花钱买的小东西，有慢慢攒下来的余钱。两个人约饭时有时都忘带伞，站在屋檐下各自责怪天气预报，然后一起等雨小一点。",
      "next": "tc_c10_mengyao_dating_013"
    },
    "tc_c10_mengyao_dating_013": {
      "id": "tc_c10_mengyao_dating_013",
      "type": "line",
      "scene": "ts_c10_mengyao_dating_new_shop",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "我把游戏重新摆好。孟遥从包里拿出一张很旧的小纸片，边角已经软了。",
      "next": "tc_c10_mengyao_keepsake_gate"
    },
    "tc_c10_mengyao_dating_014_books": {
      "id": "tc_c10_mengyao_dating_014_books",
      "type": "line",
      "scene": "ts_c10_mengyao_dating_new_shop",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "那是夹在书里的收据，背面留着“破锅确实很好笑”。",
      "next": "tc_c10_mengyao_dating_015"
    },
    "tc_c10_mengyao_dating_014_arcade": {
      "id": "tc_c10_mengyao_dating_014_arcade",
      "type": "line",
      "scene": "ts_c10_mengyao_dating_new_shop",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "那是记着气垫球比分的小票，后来又添了两个人划船的记录。",
      "next": "tc_c10_mengyao_dating_015"
    },
    "tc_c10_mengyao_dating_015": {
      "id": "tc_c10_mengyao_dating_015",
      "type": "line",
      "scene": "ts_c10_mengyao_dating_new_shop",
      "speaker": "wenwen",
      "character": "mengyao",
      "text": "“你一直留着？”",
      "next": "tc_c10_mengyao_dating_016"
    },
    "tc_c10_mengyao_dating_016": {
      "id": "tc_c10_mengyao_dating_016",
      "type": "line",
      "scene": "ts_c10_mengyao_dating_new_shop",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "“夹书里，今天换包才发现。”",
      "next": "tc_c10_mengyao_dating_017"
    },
    "tc_c10_mengyao_dating_017": {
      "id": "tc_c10_mengyao_dating_017",
      "type": "line",
      "scene": "ts_c10_mengyao_dating_new_shop",
      "speaker": "wenwen",
      "character": "mengyao",
      "text": "“我以为你准备在周年纪念时拿出来。”",
      "next": "tc_c10_mengyao_dating_018"
    },
    "tc_c10_mengyao_dating_018": {
      "id": "tc_c10_mengyao_dating_018",
      "type": "line",
      "scene": "ts_c10_mengyao_dating_new_shop",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "“纪念什么？两个自称很厉害的人，一起出洋相？”",
      "next": "tc_c10_mengyao_dating_019"
    },
    "tc_c10_mengyao_dating_019": {
      "id": "tc_c10_mengyao_dating_019",
      "type": "line",
      "scene": "ts_c10_mengyao_dating_new_shop",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "我笑了。她把小纸片放在说明书旁边，拿笔写下今天的日期，又添一句：“规则看反，暂不计入胜负。”",
      "next": "tc_c10_mengyao_dating_020"
    },
    "tc_c10_mengyao_dating_020": {
      "id": "tc_c10_mengyao_dating_020",
      "type": "line",
      "scene": "ts_c10_mengyao_dating_new_shop",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "新的一局，她赢了。赢得很认真，笑得也很不客气。我把最后一片橘子给她，她先咬了一半，剩下一半递到我嘴边。",
      "next": "tc_c10_mengyao_dating_021"
    },
    "tc_c10_mengyao_dating_021": {
      "id": "tc_c10_mengyao_dating_021",
      "type": "line",
      "scene": "ts_c10_mengyao_dating_new_shop",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "“下一局还来吗？”",
      "next": "tc_c10_mengyao_dating_022"
    },
    "tc_c10_mengyao_dating_022": {
      "id": "tc_c10_mengyao_dating_022",
      "type": "line",
      "scene": "ts_c10_mengyao_dating_new_shop",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "我张嘴吃掉，酸得眯起眼睛。",
      "next": "tc_c10_mengyao_dating_023"
    },
    "tc_c10_mengyao_dating_023": {
      "id": "tc_c10_mengyao_dating_023",
      "type": "line",
      "scene": "ts_c10_mengyao_dating_new_shop",
      "speaker": "wenwen",
      "character": "mengyao",
      "text": "“来。”",
      "next": "tc_c10_mengyao_dating_024"
    },
    "tc_c10_mengyao_dating_024": {
      "id": "tc_c10_mengyao_dating_024",
      "type": "line",
      "scene": "ts_c10_mengyao_dating_new_shop",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "窗外还有雨，店里有人叫我们挪一下椅子。我和她一起往里面挪，膝盖在桌下轻轻碰了一下，谁也没有急着收回去。",
      "next": "tc_c10_mengyao_end_dating"
    },
    "tc_c10_mengyao_friends_001": {
      "id": "tc_c10_mengyao_friends_001",
      "type": "line",
      "scene": "ts_c10_mengyao_friends",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "朋友约饭那天，我上班前带着一袋还热的烧饼进门。孟遥坐在窗边，正在跟旁边的人说一件课堂上的趣事。她看见我，先把空椅子上的包拿开。",
      "next": "tc_c10_mengyao_friends_002"
    },
    "tc_c10_mengyao_friends_002": {
      "id": "tc_c10_mengyao_friends_002",
      "type": "line",
      "scene": "ts_c10_mengyao_friends",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "“留了位置，饭还没上。”",
      "next": "tc_c10_mengyao_friends_003"
    },
    "tc_c10_mengyao_friends_003": {
      "id": "tc_c10_mengyao_friends_003",
      "type": "line",
      "scene": "ts_c10_mengyao_friends",
      "speaker": "wenwen",
      "character": "mengyao",
      "text": "“烧饼要吗？”",
      "next": "tc_c10_mengyao_friends_004"
    },
    "tc_c10_mengyao_friends_004": {
      "id": "tc_c10_mengyao_friends_004",
      "type": "line",
      "scene": "ts_c10_mengyao_friends",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "“要。硬边留我。”",
      "next": "tc_c10_mengyao_friends_005"
    },
    "tc_c10_mengyao_friends_005": {
      "id": "tc_c10_mengyao_friends_005",
      "type": "line",
      "scene": "ts_c10_mengyao_friends",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "我把纸袋递过去。她接得很自然，我也没再说一句“我记得”。",
      "next": "tc_c10_mengyao_friends_006"
    },
    "tc_c10_mengyao_friends_006": {
      "id": "tc_c10_mengyao_friends_006",
      "type": "line",
      "scene": "ts_c10_mengyao_friends",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "这两年，我们的消息比刚重逢时少。有时候一个月没单独聊天，见面仍能接上一句玩笑。她忙自己的课和朋友聚会，我忙网吧的轮班，有段时间我尝试早上自己做饭，拍了第一锅过咸的面发到群里，她评价“至少水开了”，毛狼则问能不能拿来拌三顿饭。",
      "next": "tc_c10_mengyao_friends_007"
    },
    "tc_c10_mengyao_friends_007": {
      "id": "tc_c10_mengyao_friends_007",
      "type": "line",
      "scene": "ts_c10_mengyao_friends",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "偶尔有人不知道我们的过去，只觉得我们很熟；也有人知道，会把一句普通玩笑听出别的意思。孟遥有一次直接说，我们现在是朋友。她说完继续吃饭，我也没有再用暧昧的笑把话改回去。",
      "next": "tc_c10_mengyao_friends_008"
    },
    "tc_c10_mengyao_friends_008": {
      "id": "tc_c10_mengyao_friends_008",
      "type": "line",
      "scene": "ts_c10_mengyao_friends",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "饭到一半，毛狼在群里催一个聚会的照片。孟遥把手机递给我，让我帮她选哪张没有闭眼。我翻到第三张，发现她每一张都在笑，眼睛几乎没有完全睁开过。",
      "next": "tc_c10_mengyao_friends_009"
    },
    "tc_c10_mengyao_friends_009": {
      "id": "tc_c10_mengyao_friends_009",
      "type": "line",
      "scene": "ts_c10_mengyao_friends",
      "speaker": "wenwen",
      "character": "mengyao",
      "text": "“你这道题没有正确答案。”",
      "next": "tc_c10_mengyao_friends_010"
    },
    "tc_c10_mengyao_friends_010": {
      "id": "tc_c10_mengyao_friends_010",
      "type": "line",
      "scene": "ts_c10_mengyao_friends",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "“那就挑笑得最像正常人的。”",
      "next": "tc_c10_mengyao_friends_011"
    },
    "tc_c10_mengyao_friends_011": {
      "id": "tc_c10_mengyao_friends_011",
      "type": "line",
      "scene": "ts_c10_mengyao_friends",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "我选了一张，她点头，自己发出去。我们没有翻回更早的相册，桌上的菜正好上齐了。",
      "next": "tc_c10_mengyao_friends_012"
    },
    "tc_c10_mengyao_friends_012": {
      "id": "tc_c10_mengyao_friends_012",
      "type": "line",
      "scene": "ts_c10_mengyao_friends_outside",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "散场时下起小雨，她拿出伞，问谁要去公交站。还有一位朋友举手，两个人便一起走。我轮到晚些时候再上班，往相反方向去买明天的早餐。",
      "next": "tc_c10_mengyao_friends_013"
    },
    "tc_c10_mengyao_friends_013": {
      "id": "tc_c10_mengyao_friends_013",
      "type": "line",
      "scene": "ts_c10_mengyao_friends_outside",
      "speaker": "narrator",
      "character": "mengyao",
      "text": "走出几步，孟遥叫住我。",
      "next": "tc_c10_mengyao_friends_014"
    },
    "tc_c10_mengyao_friends_014": {
      "id": "tc_c10_mengyao_friends_014",
      "type": "line",
      "scene": "ts_c10_mengyao_friends_outside",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "“下次组局记得算我。最近有两个晚上能玩。”",
      "next": "tc_c10_mengyao_friends_015"
    },
    "tc_c10_mengyao_friends_015": {
      "id": "tc_c10_mengyao_friends_015",
      "type": "line",
      "scene": "ts_c10_mengyao_friends_outside",
      "speaker": "wenwen",
      "character": "mengyao",
      "text": "“算。你别又说键盘有问题。”",
      "next": "tc_c10_mengyao_friends_016"
    },
    "tc_c10_mengyao_friends_016": {
      "id": "tc_c10_mengyao_friends_016",
      "type": "line",
      "scene": "ts_c10_mengyao_friends_outside",
      "speaker": "mengyao",
      "character": "mengyao",
      "text": "“键盘真的有问题的时候，我照样说。”",
      "next": "tc_c10_mengyao_friends_017"
    },
    "tc_c10_mengyao_friends_017": {
      "id": "tc_c10_mengyao_friends_017",
      "type": "line",
      "scene": "ts_c10_mengyao_friends_parting",
      "speaker": "narrator",
      "character": null,
      "text": "她冲我挥了挥手，跟朋友继续往前走。我把手放回衣袋，摸到刚才找零留下的硬币，想起明天补觉之前还得买洗衣液。",
      "next": "tc_c10_mengyao_friends_018"
    },
    "tc_c10_mengyao_friends_018": {
      "id": "tc_c10_mengyao_friends_018",
      "type": "line",
      "scene": "ts_c10_mengyao_friends_bakery",
      "speaker": "narrator",
      "character": null,
      "text": "有些事已经结束，另一些并不因此停下来。我经过那家烧饼店，老板问要几个。我说两个，想了想，又加了一个，准备带给下一班的同事。",
      "next": "tc_c10_mengyao_end_friends",
      "bg": "tc-bg-bridge-dusk"
    },
    "tc_c10_mengyao_entry": {
      "id": "tc_c10_mengyao_entry",
      "type": "gate",
      "scene": "ts_c10_mengyao_dating",
      "cases": [
        {
          "flag": "mengyaoRelationship",
          "value": "dating",
          "next": "tc_c10_mengyao_dating_001"
        },
        {
          "flag": "mengyaoRelationship",
          "value": "friends",
          "next": "tc_c10_mengyao_friends_001"
        }
      ],
      "default": null,
      "exhaustive": true
    },
    "tc_c10_mengyao_end_dating": {
      "id": "tc_c10_mengyao_end_dating",
      "type": "end",
      "scene": "ts_c10_mengyao_dating_new_shop",
      "character": "mengyao",
      "title": "一份新的错误记录",
      "text": "",
      "endingId": "tc_c10_mengyao_end_dating"
    },
    "tc_c10_mengyao_end_friends": {
      "id": "tc_c10_mengyao_end_friends",
      "type": "end",
      "scene": "ts_c10_mengyao_friends_bakery",
      "character": null,
      "title": "不用重考的一门课",
      "text": "",
      "endingId": "tc_c10_mengyao_end_friends",
      "bg": "tc-bg-bridge-dusk"
    },
    "tc_c10_mengyao_keepsake_gate": {
      "id": "tc_c10_mengyao_keepsake_gate",
      "type": "gate",
      "scene": "ts_c10_mengyao_dating_new_shop",
      "cases": [
        {
          "flag": "mengyaoOuting",
          "value": "books",
          "next": "tc_c10_mengyao_dating_014_books"
        },
        {
          "flag": "mengyaoOuting",
          "value": "arcade",
          "next": "tc_c10_mengyao_dating_014_arcade"
        }
      ],
      "default": null,
      "exhaustive": true
    },
    "tc_c03_yelan_entry": {
      "id": "tc_c03_yelan_entry",
      "type": "line",
      "scene": "ts_c03_yelan_second_meeting",
      "speaker": "narrator",
      "character": null,
      "text": "第12天一起吃过面以后，我和叶岚在群里照常讲话。她还是会抢着说“这局我来”，也还是会在出了错以后迅速问毛狼为什么不提醒。",
      "next": "tc_c03_yelan_second_meeting_002"
    },
    "tc_c03_yelan_second_meeting_002": {
      "id": "tc_c03_yelan_second_meeting_002",
      "type": "line",
      "scene": "ts_c03_yelan_second_meeting",
      "speaker": "narrator",
      "character": null,
      "text": "到了第15天，我睡醒后看见她发来消息。",
      "next": "tc_c03_yelan_second_meeting_003"
    },
    "tc_c03_yelan_second_meeting_003": {
      "id": "tc_c03_yelan_second_meeting_003",
      "type": "line",
      "scene": "ts_c03_yelan_second_meeting",
      "speaker": "yelan",
      "character": null,
      "text": "“今天下班早。上次那家面，要不要再去？”",
      "next": "tc_c03_yelan_second_meeting_004"
    },
    "tc_c03_yelan_second_meeting_004": {
      "id": "tc_c03_yelan_second_meeting_004",
      "type": "line",
      "scene": "ts_c03_yelan_second_meeting",
      "speaker": "narrator",
      "character": null,
      "text": "我想了想，问她是不是特别喜欢那家店。她过了半分钟才回：“主要知道门在哪里。”",
      "next": "tc_c03_yelan_second_meeting_005"
    },
    "tc_c03_yelan_second_meeting_005": {
      "id": "tc_c03_yelan_second_meeting_005",
      "type": "line",
      "scene": "ts_c03_yelan_second_meeting",
      "speaker": "narrator",
      "character": null,
      "text": "于是我说，面也可以吃别的，今天要不要往另一边走走。",
      "next": "tc_c03_yelan_second_meeting_006"
    },
    "tc_c03_yelan_second_meeting_006": {
      "id": "tc_c03_yelan_second_meeting_006",
      "type": "line",
      "scene": "ts_c03_yelan_second_meeting_meeting",
      "speaker": "narrator",
      "character": "yelan",
      "text": "见面时，她站在路口，身上还穿着上班的衣服。低髻被风吹松一点，她伸手重新拢好，看见我过来，先说了一声你好。",
      "next": "tc_c03_yelan_second_meeting_007"
    },
    "tc_c03_yelan_second_meeting_007": {
      "id": "tc_c03_yelan_second_meeting_007",
      "type": "line",
      "scene": "ts_c03_yelan_second_meeting_meeting",
      "speaker": "narrator",
      "character": "yelan",
      "text": "“上回已经说过了。”我笑。",
      "next": "tc_c03_yelan_second_meeting_008"
    },
    "tc_c03_yelan_second_meeting_008": {
      "id": "tc_c03_yelan_second_meeting_008",
      "type": "line",
      "scene": "ts_c03_yelan_second_meeting_meeting",
      "speaker": "yelan",
      "character": "yelan",
      "text": "“那说什么？欢迎再次匹配？”",
      "next": "tc_c03_yelan_second_meeting_009"
    },
    "tc_c03_yelan_second_meeting_009": {
      "id": "tc_c03_yelan_second_meeting_009",
      "type": "line",
      "scene": "ts_c03_yelan_second_meeting_meeting",
      "speaker": "narrator",
      "character": "yelan",
      "text": "这句话说出口，她自己先低头笑了。那一点笑跟耳机里的声音接上，我紧张了半天的肩膀也落下来。",
      "next": "tc_c03_yelan_early_callback_gate"
    },
    "tc_c03_yelan_second_meeting_010": {
      "id": "tc_c03_yelan_second_meeting_010",
      "type": "line",
      "scene": "ts_c03_yelan_second_meeting_meeting",
      "speaker": "narrator",
      "character": "yelan",
      "text": "我问今天还要不要拿毛狼那局当开场。叶岚说他要是知道自己这么有用，可能会收费。我说那今天让他歇着，她点头，问我有没有吃晚饭。这一句在耳机里听过很多次，走在路上听见，又有一点不一样。",
      "next": "tc_c03_yelan_second_meeting_012"
    },
    "tc_c03_yelan_second_meeting_011": {
      "id": "tc_c03_yelan_second_meeting_011",
      "type": "line",
      "scene": "ts_c03_yelan_second_meeting_meeting",
      "speaker": "narrator",
      "character": "yelan",
      "text": "叶岚问我有没有研究今天这条路上的菜单。我说没有，上次研究半天，能点的还不到一半。她笑了，说这次先看看，饿了再挑。“那也不用急着研究话题。”我说。她看了我一眼，嗯了一声。",
      "next": "tc_c03_yelan_second_meeting_012",
      "expression": "expression-smile"
    },
    "tc_c03_yelan_second_meeting_012": {
      "id": "tc_c03_yelan_second_meeting_012",
      "type": "line",
      "scene": "ts_c03_yelan_second_meeting_fruit",
      "speaker": "narrator",
      "character": "yelan",
      "text": "街边有个卖水果的小摊。叶岚停下，问那袋青李子酸不酸。老板说不酸，她很慎重地买了一小袋，转身先递给我一颗。",
      "next": "tc_c03_yelan_second_meeting_013"
    },
    "tc_c03_yelan_second_meeting_013": {
      "id": "tc_c03_yelan_second_meeting_013",
      "type": "line",
      "scene": "ts_c03_yelan_second_meeting_fruit",
      "speaker": "yelan",
      "character": "yelan",
      "text": "“你先？”",
      "next": "tc_c03_yelan_second_meeting_014"
    },
    "tc_c03_yelan_second_meeting_014": {
      "id": "tc_c03_yelan_second_meeting_014",
      "type": "line",
      "scene": "ts_c03_yelan_second_meeting_fruit",
      "speaker": "wenwen",
      "character": "yelan",
      "text": "“为什么？”",
      "next": "tc_c03_yelan_second_meeting_015"
    },
    "tc_c03_yelan_second_meeting_015": {
      "id": "tc_c03_yelan_second_meeting_015",
      "type": "line",
      "scene": "ts_c03_yelan_second_meeting_fruit",
      "speaker": "yelan",
      "character": "yelan",
      "text": "“团队需要有人探路。”",
      "next": "tc_c03_yelan_second_meeting_016"
    },
    "tc_c03_yelan_second_meeting_016": {
      "id": "tc_c03_yelan_second_meeting_016",
      "type": "line",
      "scene": "ts_c03_yelan_second_meeting_fruit",
      "speaker": "narrator",
      "character": "yelan",
      "text": "我咬下去，一瞬间没说出话。她看着我的表情，像看见队友角色掉进深坑，眼睛慢慢亮了起来。",
      "next": "tc_c03_yelan_second_meeting_017"
    },
    "tc_c03_yelan_second_meeting_017": {
      "id": "tc_c03_yelan_second_meeting_017",
      "type": "line",
      "scene": "ts_c03_yelan_second_meeting_fruit",
      "speaker": "yelan",
      "character": "yelan",
      "text": "“情况怎么样？”",
      "next": "tc_c03_yelan_second_meeting_018"
    },
    "tc_c03_yelan_second_meeting_018": {
      "id": "tc_c03_yelan_second_meeting_018",
      "type": "line",
      "scene": "ts_c03_yelan_second_meeting_fruit",
      "speaker": "wenwen",
      "character": "yelan",
      "text": "“路况很差。”",
      "next": "tc_c03_yelan_second_meeting_019"
    },
    "tc_c03_yelan_second_meeting_019": {
      "id": "tc_c03_yelan_second_meeting_019",
      "type": "line",
      "scene": "ts_c03_yelan_second_meeting_fruit",
      "speaker": "narrator",
      "character": "yelan",
      "text": "她不信，自己也咬了一颗，嘴抿得很紧，过了好一会儿才把那一口咽下去。",
      "next": "tc_c03_yelan_second_meeting_020"
    },
    "tc_c03_yelan_second_meeting_020": {
      "id": "tc_c03_yelan_second_meeting_020",
      "type": "line",
      "scene": "ts_c03_yelan_second_meeting_fruit",
      "speaker": "yelan",
      "character": "yelan",
      "text": "“老板对酸的理解，比较宽容。”",
      "next": "tc_c03_yelan_second_meeting_021"
    },
    "tc_c03_yelan_second_meeting_021": {
      "id": "tc_c03_yelan_second_meeting_021",
      "type": "line",
      "scene": "ts_c03_yelan_second_meeting_fruit",
      "speaker": "narrator",
      "character": "yelan",
      "text": "我们坐到路边长椅上，研究剩下的李子怎么办。她没有假装自己喜欢吃酸，也没让我替她全部解决，只把袋子系好，说回去拌点糖试试，不行就认输。",
      "next": "tc_c03_yelan_second_meeting_022"
    },
    "tc_c03_yelan_second_meeting_022": {
      "id": "tc_c03_yelan_second_meeting_022",
      "type": "line",
      "scene": "ts_c03_yelan_second_meeting_fruit",
      "speaker": "narrator",
      "character": "yelan",
      "text": "我问她工作日下班后经常做什么。她数了三件：吃饭，洗衣服，把想做的事拖到明天。",
      "next": "tc_c03_yelan_second_meeting_023"
    },
    "tc_c03_yelan_second_meeting_023": {
      "id": "tc_c03_yelan_second_meeting_023",
      "type": "line",
      "scene": "ts_c03_yelan_second_meeting_fruit",
      "speaker": "wenwen",
      "character": "yelan",
      "text": "“游戏呢？”",
      "next": "tc_c03_yelan_second_meeting_024"
    },
    "tc_c03_yelan_second_meeting_024": {
      "id": "tc_c03_yelan_second_meeting_024",
      "type": "line",
      "scene": "ts_c03_yelan_second_meeting_fruit",
      "speaker": "yelan",
      "character": "yelan",
      "text": "“游戏算想做的事。不是每天都开。有时候刚坐下就不想动。”",
      "next": "tc_c03_yelan_second_meeting_025"
    },
    "tc_c03_yelan_second_meeting_025": {
      "id": "tc_c03_yelan_second_meeting_025",
      "type": "line",
      "scene": "ts_c03_yelan_second_meeting_fruit",
      "speaker": "wenwen",
      "character": "yelan",
      "text": "“我以为你每次上线都在等队友。”",
      "next": "tc_c03_yelan_second_meeting_026"
    },
    "tc_c03_yelan_second_meeting_026": {
      "id": "tc_c03_yelan_second_meeting_026",
      "type": "line",
      "scene": "ts_c03_yelan_second_meeting_fruit",
      "speaker": "yelan",
      "character": "yelan",
      "text": "“有时候我在等外卖。”",
      "next": "tc_c03_yelan_second_meeting_027"
    },
    "tc_c03_yelan_second_meeting_027": {
      "id": "tc_c03_yelan_second_meeting_027",
      "type": "line",
      "scene": "ts_c03_yelan_second_meeting_fruit",
      "speaker": "narrator",
      "character": "yelan",
      "text": "说到这里她侧过头，十分认真地补充：“你不要告诉毛狼。他会说他输给了米线。”",
      "next": "tc_c03_yelan_second_meeting_028"
    },
    "tc_c03_yelan_second_meeting_028": {
      "id": "tc_c03_yelan_second_meeting_028",
      "type": "line",
      "scene": "ts_c03_yelan_second_meeting_crossroad",
      "speaker": "narrator",
      "character": "yelan",
      "text": "我们走到岔路，叶岚看了眼时间。她准备回去吃晚饭，我九点多也要到网吧交接。分开前，我问她第18天有没有时间，我那天休班。",
      "next": "tc_c03_yelan_second_meeting_029"
    },
    "tc_c03_yelan_second_meeting_029": {
      "id": "tc_c03_yelan_second_meeting_029",
      "type": "line",
      "scene": "ts_c03_yelan_second_meeting_crossroad",
      "speaker": "narrator",
      "character": "yelan",
      "text": "“见面还是上线？”她问。",
      "next": "tc_c03_yelan_second_meeting_030"
    },
    "tc_c03_yelan_second_meeting_030": {
      "id": "tc_c03_yelan_second_meeting_030",
      "type": "line",
      "scene": "ts_c03_yelan_second_meeting_crossroad",
      "speaker": "wenwen",
      "character": "yelan",
      "text": "“你想哪种？”",
      "next": "tc_c03_yelan_second_meeting_031"
    },
    "tc_c03_yelan_second_meeting_031": {
      "id": "tc_c03_yelan_second_meeting_031",
      "type": "line",
      "scene": "ts_c03_yelan_second_meeting_crossroad",
      "speaker": "narrator",
      "character": "yelan",
      "text": "她把手里的李子袋提高一点：“上线吧。这袋失败品，我需要有个人听我点评。”",
      "next": "tc_c03_yelan_voice_game_001"
    },
    "tc_c03_yelan_voice_game_001": {
      "id": "tc_c03_yelan_voice_game_001",
      "type": "line",
      "scene": "ts_c03_yelan_voice_game",
      "speaker": "narrator",
      "character": null,
      "text": "我下午睡足，晚上以顾客身份在网吧开了一台机器。师匠路过时看了我一眼，提醒别把空饮料瓶留给同事收。我把刚打开的水举起来，说自己文明消费。",
      "next": "tc_c03_yelan_voice_game_002"
    },
    "tc_c03_yelan_voice_game_002": {
      "id": "tc_c03_yelan_voice_game_002",
      "type": "line",
      "scene": "ts_c03_yelan_voice_game",
      "speaker": "narrator",
      "character": null,
      "text": "叶岚进语音时先咳了一声。毛狼问她怎么了，她说吃李子酸的。毛狼还没来得及追问，我就笑了。",
      "next": "tc_c03_yelan_voice_game_003"
    },
    "tc_c03_yelan_voice_game_003": {
      "id": "tc_c03_yelan_voice_game_003",
      "type": "line",
      "scene": "ts_c03_yelan_voice_game",
      "speaker": "narrator",
      "character": null,
      "text": "“你们有秘密。”他说。",
      "next": "tc_c03_yelan_voice_game_004"
    },
    "tc_c03_yelan_voice_game_004": {
      "id": "tc_c03_yelan_voice_game_004",
      "type": "line",
      "scene": "ts_c03_yelan_voice_game",
      "speaker": "narrator",
      "character": null,
      "text": "“有。”叶岚接得飞快，“一袋李子六块钱，建议你不要跟投。”",
      "next": "tc_c03_yelan_voice_game_005"
    },
    "tc_c03_yelan_voice_game_005": {
      "id": "tc_c03_yelan_voice_game_005",
      "type": "line",
      "scene": "ts_c03_yelan_voice_game",
      "speaker": "narrator",
      "character": null,
      "text": "那晚我们玩了个需要分头寻找出口的合作模式。我走到一个岔口，她很笃定地指挥我往左。我在左边撞见死路，折回来，看见她的角色也站在那里。",
      "next": "tc_c03_yelan_voice_game_006"
    },
    "tc_c03_yelan_voice_game_006": {
      "id": "tc_c03_yelan_voice_game_006",
      "type": "line",
      "scene": "ts_c03_yelan_voice_game",
      "speaker": "wenwen",
      "character": null,
      "text": "“你怎么也来了？”",
      "next": "tc_c03_yelan_voice_game_007"
    },
    "tc_c03_yelan_voice_game_007": {
      "id": "tc_c03_yelan_voice_game_007",
      "type": "line",
      "scene": "ts_c03_yelan_voice_game",
      "speaker": "yelan",
      "character": null,
      "text": "“我来核查你的说法。”",
      "next": "tc_c03_yelan_voice_game_008"
    },
    "tc_c03_yelan_voice_game_008": {
      "id": "tc_c03_yelan_voice_game_008",
      "type": "line",
      "scene": "ts_c03_yelan_voice_game",
      "speaker": "narrator",
      "character": null,
      "text": "毛狼在另一头笑得直喘，紧接着他自己掉下了台阶。整个队伍都安静了两秒，然后一起笑起来。",
      "next": "tc_c03_yelan_voice_game_009"
    },
    "tc_c03_yelan_voice_game_009": {
      "id": "tc_c03_yelan_voice_game_009",
      "type": "line",
      "scene": "ts_c03_yelan_voice_game",
      "speaker": "narrator",
      "character": null,
      "text": "下一轮，叶岚比平时更想赢，连续两次抢着决定走哪条路。我提醒她先看看地上的标记。她嗯了一声，走出去两步，又回头。",
      "next": "tc_c03_yelan_voice_game_010"
    },
    "tc_c03_yelan_voice_game_010": {
      "id": "tc_c03_yelan_voice_game_010",
      "type": "line",
      "scene": "ts_c03_yelan_voice_game",
      "speaker": "yelan",
      "character": null,
      "text": "“我刚才是不是有点吵？”",
      "next": "tc_c03_yelan_voice_game_011"
    },
    "tc_c03_yelan_voice_game_011": {
      "id": "tc_c03_yelan_voice_game_011",
      "type": "line",
      "scene": "ts_c03_yelan_voice_game",
      "speaker": "wenwen",
      "character": null,
      "text": "“不吵。方向可能不对。”",
      "next": "tc_c03_yelan_voice_game_012"
    },
    "tc_c03_yelan_voice_game_012": {
      "id": "tc_c03_yelan_voice_game_012",
      "type": "line",
      "scene": "ts_c03_yelan_voice_game",
      "speaker": "yelan",
      "character": null,
      "text": "“这两句放在一起，也没有好多少。”",
      "next": "tc_c03_yelan_voice_game_013"
    },
    "tc_c03_yelan_voice_game_013": {
      "id": "tc_c03_yelan_voice_game_013",
      "type": "line",
      "scene": "ts_c03_yelan_voice_game_logoff",
      "speaker": "narrator",
      "character": null,
      "text": "我们打到九点前就结束。她第二天上班，我也准备回去做点吃的。毛狼还想再来一局，叶岚一边说不打了，一边又停在准备界面不走。",
      "next": "tc_c03_yelan_voice_game_014"
    },
    "tc_c03_yelan_voice_game_014": {
      "id": "tc_c03_yelan_voice_game_014",
      "type": "line",
      "scene": "ts_c03_yelan_voice_game_logoff",
      "speaker": "narrator",
      "character": null,
      "text": "“你是不是也想？”我问。",
      "next": "tc_c03_yelan_voice_game_015"
    },
    "tc_c03_yelan_voice_game_015": {
      "id": "tc_c03_yelan_voice_game_015",
      "type": "line",
      "scene": "ts_c03_yelan_voice_game_logoff",
      "speaker": "yelan",
      "character": null,
      "text": "“想。”",
      "next": "tc_c03_yelan_voice_game_016"
    },
    "tc_c03_yelan_voice_game_016": {
      "id": "tc_c03_yelan_voice_game_016",
      "type": "line",
      "scene": "ts_c03_yelan_voice_game_logoff",
      "speaker": "wenwen",
      "character": null,
      "text": "“那为什么不打？”",
      "next": "tc_c03_yelan_voice_game_017"
    },
    "tc_c03_yelan_voice_game_017": {
      "id": "tc_c03_yelan_voice_game_017",
      "type": "line",
      "scene": "ts_c03_yelan_voice_game_logoff",
      "speaker": "yelan",
      "character": null,
      "text": "“因为想归想。明天早上我起床，也得自己负责。”",
      "next": "tc_c03_yelan_voice_game_018"
    },
    "tc_c03_yelan_voice_game_018": {
      "id": "tc_c03_yelan_voice_game_018",
      "type": "line",
      "scene": "ts_c03_yelan_voice_game_logoff",
      "speaker": "narrator",
      "character": null,
      "text": "她退出得很快，像怕再等一秒就改主意。我也跟着关了游戏。几分钟后，她发来一张撒着糖的李子照片，只拍了碗，没有拍房间别处。",
      "next": "tc_c03_yelan_voice_game_019"
    },
    "tc_c03_yelan_voice_game_019": {
      "id": "tc_c03_yelan_voice_game_019",
      "type": "line",
      "scene": "ts_c03_yelan_voice_game_logoff",
      "speaker": "yelan",
      "character": null,
      "text": "“变成甜的酸李子了。”",
      "next": "tc_c03_yelan_voice_game_020"
    },
    "tc_c03_yelan_voice_game_020": {
      "id": "tc_c03_yelan_voice_game_020",
      "type": "line",
      "scene": "ts_c03_yelan_voice_game_logoff",
      "speaker": "narrator",
      "character": null,
      "text": "我回她一个大笑的表情。她说再笑下次见面就带一颗给我。我打了“好”，又补了一句：“下次见面这个部分，可以保留。”",
      "next": "tc_c03_yelan_voice_game_021"
    },
    "tc_c03_yelan_voice_game_021": {
      "id": "tc_c03_yelan_voice_game_021",
      "type": "line",
      "scene": "ts_c03_yelan_voice_game_logoff",
      "speaker": "narrator",
      "character": null,
      "text": "对面很久没显示输入中，直到我准备把手机放进口袋，才收到短短一行字：“那第21天？”",
      "next": "tc_c03_yelan_quiet_park_001"
    },
    "tc_c03_yelan_quiet_park_001": {
      "id": "tc_c03_yelan_quiet_park_001",
      "type": "line",
      "scene": "ts_c03_yelan_quiet_park",
      "speaker": "narrator",
      "character": "yelan",
      "text": "我们这次去了公园。叶岚下班后来得比我晚几分钟，看见我站在入口，先从包里拿出一个小盒子。",
      "next": "tc_c03_yelan_quiet_park_002"
    },
    "tc_c03_yelan_quiet_park_002": {
      "id": "tc_c03_yelan_quiet_park_002",
      "type": "line",
      "scene": "ts_c03_yelan_quiet_park",
      "speaker": "narrator",
      "character": "yelan",
      "text": "“真带了？”我问。",
      "next": "tc_c03_yelan_quiet_park_003"
    },
    "tc_c03_yelan_quiet_park_003": {
      "id": "tc_c03_yelan_quiet_park_003",
      "type": "line",
      "scene": "ts_c03_yelan_quiet_park",
      "speaker": "yelan",
      "character": "yelan",
      "text": "“没有，糖拌李子已经吃完了。这是薄荷糖。”",
      "next": "tc_c03_yelan_quiet_park_004"
    },
    "tc_c03_yelan_quiet_park_004": {
      "id": "tc_c03_yelan_quiet_park_004",
      "type": "line",
      "scene": "ts_c03_yelan_quiet_park",
      "speaker": "narrator",
      "character": "yelan",
      "text": "我接过去，她把盒盖盖回，动作比第一次见面时自然。我们沿着有树荫的小路往里走，聊完了天气，聊完了毛狼最近那个演出，突然都没了话。",
      "next": "tc_c03_yelan_quiet_park_005"
    },
    "tc_c03_yelan_quiet_park_005": {
      "id": "tc_c03_yelan_quiet_park_005",
      "type": "line",
      "scene": "ts_c03_yelan_quiet_park",
      "speaker": "narrator",
      "character": "yelan",
      "text": "我开始讲白天梦见自己把顾客的座位号记成菜名，讲到一半发现这个梦其实没什么好笑。叶岚礼貌地笑了一下，我又急着问她小时候有没有来过这里。",
      "next": "tc_c03_yelan_quiet_park_006"
    },
    "tc_c03_yelan_quiet_park_006": {
      "id": "tc_c03_yelan_quiet_park_006",
      "type": "line",
      "scene": "ts_c03_yelan_quiet_park",
      "speaker": "narrator",
      "character": "yelan",
      "text": "她停下脚步。",
      "next": "tc_c03_yelan_quiet_park_007"
    },
    "tc_c03_yelan_quiet_park_007": {
      "id": "tc_c03_yelan_quiet_park_007",
      "type": "line",
      "scene": "ts_c03_yelan_quiet_park",
      "speaker": "yelan",
      "character": "yelan",
      "text": "“文文。”",
      "next": "tc_c03_yelan_quiet_park_008"
    },
    "tc_c03_yelan_quiet_park_008": {
      "id": "tc_c03_yelan_quiet_park_008",
      "type": "line",
      "scene": "ts_c03_yelan_quiet_park",
      "speaker": "wenwen",
      "character": "yelan",
      "text": "“嗯？”",
      "next": "tc_c03_yelan_quiet_park_009"
    },
    "tc_c03_yelan_quiet_park_009": {
      "id": "tc_c03_yelan_quiet_park_009",
      "type": "line",
      "scene": "ts_c03_yelan_quiet_park",
      "speaker": "yelan",
      "character": "yelan",
      "text": "“你是不是怕我没意思？”",
      "next": "tc_c03_yelan_quiet_park_010"
    },
    "tc_c03_yelan_quiet_park_010": {
      "id": "tc_c03_yelan_quiet_park_010",
      "type": "line",
      "scene": "ts_c03_yelan_quiet_park",
      "speaker": "narrator",
      "character": "yelan",
      "text": "我老实点头：“有一点。语音里，你好像总有话接。”",
      "next": "tc_c03_yelan_quiet_park_011"
    },
    "tc_c03_yelan_quiet_park_011": {
      "id": "tc_c03_yelan_quiet_park_011",
      "type": "line",
      "scene": "ts_c03_yelan_quiet_park",
      "speaker": "yelan",
      "character": "yelan",
      "text": "“语音里有游戏。没话就骂那个怪，挺方便的。”",
      "next": "tc_c03_yelan_quiet_park_012"
    },
    "tc_c03_yelan_quiet_park_012": {
      "id": "tc_c03_yelan_quiet_park_012",
      "type": "line",
      "scene": "ts_c03_yelan_quiet_park",
      "speaker": "narrator",
      "character": "yelan",
      "text": "她说完笑了，指向前面一条长椅：“坐一会儿行吗？我今天穿的鞋走久了累。”",
      "next": "tc_c03_yelan_quiet_park_013"
    },
    "tc_c03_yelan_quiet_park_013": {
      "id": "tc_c03_yelan_quiet_park_013",
      "type": "line",
      "scene": "ts_c03_yelan_quiet_park_bench",
      "speaker": "narrator",
      "character": "yelan",
      "text": "我们坐下来。她把包放在腿上，看着一个小孩努力把风筝从地上拉起来。孩子往前跑，风筝却拖在后面，旁边的大人也不太会，越指挥越乱。叶岚看得很认真，后来终于说：“跟我们那天走迷宫一样。”",
      "next": "tc_c03_yelan_quiet_park_014"
    },
    "tc_c03_yelan_quiet_park_014": {
      "id": "tc_c03_yelan_quiet_park_014",
      "type": "line",
      "scene": "ts_c03_yelan_quiet_park_bench",
      "speaker": "narrator",
      "character": "yelan",
      "text": "我笑出来。我们又安静了一阵，听见树叶被风吹得挤在一起。她从薄荷糖盒里倒了两颗，递给我一颗。",
      "next": "tc_c03_yelan_quiet_park_015"
    },
    "tc_c03_yelan_quiet_park_015": {
      "id": "tc_c03_yelan_quiet_park_015",
      "type": "line",
      "scene": "ts_c03_yelan_quiet_park_bench",
      "speaker": "narrator",
      "character": "yelan",
      "text": "“我不是不想见你。”她说，“就是现实里，有时候话没想到那么快。”",
      "next": "tc_c03_yelan_quiet_park_016"
    },
    "tc_c03_yelan_quiet_park_016": {
      "id": "tc_c03_yelan_quiet_park_016",
      "type": "line",
      "scene": "ts_c03_yelan_quiet_park_bench",
      "speaker": "wenwen",
      "character": "yelan",
      "text": "“我也没你听起来那么会讲。耳机里看不见我卡住时的脸。”",
      "next": "tc_c03_yelan_quiet_park_017"
    },
    "tc_c03_yelan_quiet_park_017": {
      "id": "tc_c03_yelan_quiet_park_017",
      "type": "line",
      "scene": "ts_c03_yelan_quiet_park_bench",
      "speaker": "narrator",
      "character": "yelan",
      "text": "她转过头，真的仔细看了看我的脸。",
      "next": "tc_c03_yelan_quiet_park_018"
    },
    "tc_c03_yelan_quiet_park_018": {
      "id": "tc_c03_yelan_quiet_park_018",
      "type": "line",
      "scene": "ts_c03_yelan_quiet_park_bench",
      "speaker": "yelan",
      "character": "yelan",
      "text": "“现在看见了。”",
      "next": "tc_c03_yelan_quiet_park_019"
    },
    "tc_c03_yelan_quiet_park_019": {
      "id": "tc_c03_yelan_quiet_park_019",
      "type": "line",
      "scene": "ts_c03_yelan_quiet_park_bench",
      "speaker": "wenwen",
      "character": "yelan",
      "text": "“观感如何？”",
      "next": "tc_c03_yelan_quiet_park_020"
    },
    "tc_c03_yelan_quiet_park_020": {
      "id": "tc_c03_yelan_quiet_park_020",
      "type": "line",
      "scene": "ts_c03_yelan_quiet_park_bench",
      "speaker": "yelan",
      "character": "yelan",
      "text": "“比游戏输的时候好一点。”",
      "next": "tc_c03_yelan_quiet_park_021"
    },
    "tc_c03_yelan_quiet_park_021": {
      "id": "tc_c03_yelan_quiet_park_021",
      "type": "line",
      "scene": "ts_c03_yelan_quiet_park_park_exit",
      "speaker": "narrator",
      "character": "yelan",
      "text": "回去时我们走得很慢。经过一处积水，我先迈过去，转身想提醒她，她已经自己选了另一条干路。她站在前面，回头看我还伸着的手，笑了一下。",
      "next": "tc_c03_yelan_quiet_park_022"
    },
    "tc_c03_yelan_quiet_park_022": {
      "id": "tc_c03_yelan_quiet_park_022",
      "type": "line",
      "scene": "ts_c03_yelan_quiet_park_park_exit",
      "speaker": "yelan",
      "character": "yelan",
      "text": "“这次不用救。”",
      "next": "tc_c03_yelan_quiet_park_023"
    },
    "tc_c03_yelan_quiet_park_023": {
      "id": "tc_c03_yelan_quiet_park_023",
      "type": "line",
      "scene": "ts_c03_yelan_quiet_park_park_exit",
      "speaker": "narrator",
      "character": "yelan",
      "text": "我把手放下，跟上去。到公园门口，她主动说起下次休息想做什么。她说得不算流畅，中间想了很久，我也没有急着替她把句子接完。",
      "next": "tc_c03_common_exit"
    },
    "tc_c03_yelan_early_callback_gate": {
      "id": "tc_c03_yelan_early_callback_gate",
      "type": "gate",
      "scene": "ts_c03_yelan_second_meeting_meeting",
      "cases": [
        {
          "flag": "yelanFirst",
          "value": "game",
          "next": "tc_c03_yelan_second_meeting_010"
        },
        {
          "flag": "yelanFirst",
          "value": "food",
          "next": "tc_c03_yelan_second_meeting_011"
        }
      ],
      "default": null,
      "exhaustive": true
    },
    "tc_c04_yelan_entry": {
      "id": "tc_c04_yelan_entry",
      "type": "line",
      "scene": "ts_c04_yelan_outing",
      "speaker": "narrator",
      "character": "yelan",
      "text": "这天我休班，叶岚也有半天自己的时间。我们在公园外碰面，她穿着平底鞋，手里拿着一杯温水。那身上班时的深灰衣服换下来后，她看上去没有突然变成另一个人，只是走到台阶时终于不用挑每一块砖。",
      "next": "tc_c04_yelan_outing_002",
      "expression": "outfit-casual"
    },
    "tc_c04_yelan_outing_002": {
      "id": "tc_c04_yelan_outing_002",
      "type": "line",
      "scene": "ts_c04_yelan_outing",
      "speaker": "narrator",
      "character": "yelan",
      "text": "她在手机备忘录里写了两个地方：河边空地，旧货市场。",
      "next": "tc_c04_yelan_outing_003",
      "expression": "outfit-casual"
    },
    "tc_c04_yelan_outing_003": {
      "id": "tc_c04_yelan_outing_003",
      "type": "line",
      "scene": "ts_c04_yelan_outing",
      "speaker": "narrator",
      "character": "yelan",
      "text": "“第一个，可以买个风筝试试。”她说，“第二个，我路过过，没认真逛。”",
      "next": "tc_c04_yelan_outing_004",
      "expression": "outfit-casual"
    },
    "tc_c04_yelan_outing_004": {
      "id": "tc_c04_yelan_outing_004",
      "type": "line",
      "scene": "ts_c04_yelan_outing",
      "speaker": "wenwen",
      "character": "yelan",
      "text": "“你会放风筝吗？”",
      "next": "tc_c04_yelan_outing_005",
      "expression": "outfit-casual"
    },
    "tc_c04_yelan_outing_005": {
      "id": "tc_c04_yelan_outing_005",
      "type": "line",
      "scene": "ts_c04_yelan_outing",
      "speaker": "yelan",
      "character": "yelan",
      "text": "“不会。你呢？”",
      "next": "tc_c04_yelan_outing_006",
      "expression": "outfit-casual",
      "avatarExpression": "outfit-casual"
    },
    "tc_c04_yelan_outing_006": {
      "id": "tc_c04_yelan_outing_006",
      "type": "line",
      "scene": "ts_c04_yelan_outing",
      "speaker": "wenwen",
      "character": "yelan",
      "text": "“也不会。”",
      "next": "tc_c04_yelan_outing_007",
      "expression": "outfit-casual"
    },
    "tc_c04_yelan_outing_007": {
      "id": "tc_c04_yelan_outing_007",
      "type": "line",
      "scene": "ts_c04_yelan_outing",
      "speaker": "narrator",
      "character": "yelan",
      "text": "她点点头：“很公平。选一个吧，下午不能全跑完。”",
      "next": "tc_c04_yelan_outing_choice",
      "expression": "outfit-casual"
    },
    "tc_c04_yelan_kite_001": {
      "id": "tc_c04_yelan_kite_001",
      "type": "line",
      "scene": "ts_c04_yelan_kite",
      "speaker": "narrator",
      "character": "yelan",
      "text": "我们买了最普通的一只风筝，颜色亮得像怕被云吞掉。卖风筝的人示范了怎么放线，我们两个听得很认真，走到空地上，第一件事却是互相问刚才他说了什么。",
      "next": "tc_c04_yelan_kite_002",
      "expression": "outfit-casual"
    },
    "tc_c04_yelan_kite_002": {
      "id": "tc_c04_yelan_kite_002",
      "type": "line",
      "scene": "ts_c04_yelan_kite",
      "speaker": "narrator",
      "character": "yelan",
      "text": "“迎风。”我说。",
      "next": "tc_c04_yelan_kite_003",
      "expression": "outfit-casual"
    },
    "tc_c04_yelan_kite_003": {
      "id": "tc_c04_yelan_kite_003",
      "type": "line",
      "scene": "ts_c04_yelan_kite",
      "speaker": "yelan",
      "character": "yelan",
      "text": "“这个记住了。风在哪边？”",
      "next": "tc_c04_yelan_kite_004",
      "expression": "outfit-casual",
      "avatarExpression": "outfit-casual"
    },
    "tc_c04_yelan_kite_004": {
      "id": "tc_c04_yelan_kite_004",
      "type": "line",
      "scene": "ts_c04_yelan_kite",
      "speaker": "narrator",
      "character": "yelan",
      "text": "叶岚抬手拨开被吹到脸上的头发，自己也笑了。",
      "next": "tc_c04_yelan_kite_005",
      "expression": "outfit-casual"
    },
    "tc_c04_yelan_kite_005": {
      "id": "tc_c04_yelan_kite_005",
      "type": "line",
      "scene": "ts_c04_yelan_kite",
      "speaker": "narrator",
      "character": "yelan",
      "text": "我拿线，她拿风筝。第一次没飞起来，第二次飞了几步就栽到草里。她把风筝捡起来，指着旁边已经在天上的那只：“我们可能买到了喜欢走路的。”",
      "next": "tc_c04_yelan_kite_006",
      "expression": "outfit-casual"
    },
    "tc_c04_yelan_kite_006": {
      "id": "tc_c04_yelan_kite_006",
      "type": "line",
      "scene": "ts_c04_yelan_kite",
      "speaker": "narrator",
      "character": "yelan",
      "text": "后来换她拿线，我往后跑着放手，终于让风筝稳稳升起来。叶岚一下站直，眼睛跟着它往上，嘴上连续说了三次“起来了”。",
      "next": "tc_c04_yelan_kite_007",
      "expression": "outfit-casual"
    },
    "tc_c04_yelan_kite_007": {
      "id": "tc_c04_yelan_kite_007",
      "type": "line",
      "scene": "ts_c04_yelan_kite",
      "speaker": "narrator",
      "character": "yelan",
      "text": "风筝飞稳后，她把线轴分给我握一半。我手指碰到她的手背，她没立刻松开，只低声提醒：“别都放手。”",
      "next": "tc_c04_yelan_kite_008",
      "expression": "outfit-casual"
    },
    "tc_c04_yelan_kite_008": {
      "id": "tc_c04_yelan_kite_008",
      "type": "line",
      "scene": "ts_c04_yelan_kite",
      "speaker": "narrator",
      "character": "yelan",
      "text": "我们站在一起，看那点颜色离开地面。没有分数，也没人知道谁更厉害。临走时，她坚持把风筝收好，说下次还用这只，不能买会飞的就淘汰走路的。",
      "next": "tc_c04_yelan_outing_end_001",
      "expression": "outfit-casual"
    },
    "tc_c04_yelan_market_001": {
      "id": "tc_c04_yelan_market_001",
      "type": "line",
      "scene": "ts_c04_yelan_market",
      "speaker": "narrator",
      "character": "yelan",
      "text": "我们给自己定了一个很小的预算，只买看了会笑的东西。叶岚在一个旧玩具摊前蹲下来，看着一只会摇头的塑料小鸭。",
      "next": "tc_c04_yelan_market_002",
      "expression": "outfit-casual"
    },
    "tc_c04_yelan_market_002": {
      "id": "tc_c04_yelan_market_002",
      "type": "line",
      "scene": "ts_c04_yelan_market",
      "speaker": "narrator",
      "character": "yelan",
      "text": "“这个做什么用？”她问。",
      "next": "tc_c04_yelan_market_003",
      "expression": "outfit-casual"
    },
    "tc_c04_yelan_market_003": {
      "id": "tc_c04_yelan_market_003",
      "type": "line",
      "scene": "ts_c04_yelan_market",
      "speaker": "narrator",
      "character": "yelan",
      "text": "摊主碰了碰鸭子脑袋：“点头。”",
      "next": "tc_c04_yelan_market_004",
      "expression": "outfit-casual"
    },
    "tc_c04_yelan_market_004": {
      "id": "tc_c04_yelan_market_004",
      "type": "line",
      "scene": "ts_c04_yelan_market",
      "speaker": "narrator",
      "character": "yelan",
      "text": "她忍了两秒，笑出了声。",
      "next": "tc_c04_yelan_market_005",
      "expression": "outfit-casual"
    },
    "tc_c04_yelan_market_005": {
      "id": "tc_c04_yelan_market_005",
      "type": "line",
      "scene": "ts_c04_yelan_market",
      "speaker": "narrator",
      "character": "yelan",
      "text": "我问她是不是准备放公司桌上，谁来找她就让它回答。她马上摇头：“不行。人家问资料放哪儿，它只会同意。”",
      "next": "tc_c04_yelan_market_006",
      "expression": "outfit-casual"
    },
    "tc_c04_yelan_market_006": {
      "id": "tc_c04_yelan_market_006",
      "type": "line",
      "scene": "ts_c04_yelan_market",
      "speaker": "narrator",
      "character": "yelan",
      "text": "最后她还是买了。小鸭底座有一道旧划痕，脑袋晃起来有点歪。我担心它没走出市场就散架，她却把它捧到眼前，轻轻点一下。",
      "next": "tc_c04_yelan_market_007",
      "expression": "outfit-casual"
    },
    "tc_c04_yelan_market_007": {
      "id": "tc_c04_yelan_market_007",
      "type": "line",
      "scene": "ts_c04_yelan_market",
      "speaker": "yelan",
      "character": "yelan",
      "text": "“已经很努力了。”",
      "next": "tc_c04_yelan_market_008",
      "expression": "outfit-casual",
      "avatarExpression": "outfit-casual"
    },
    "tc_c04_yelan_market_008": {
      "id": "tc_c04_yelan_market_008",
      "type": "line",
      "scene": "ts_c04_yelan_market",
      "speaker": "narrator",
      "character": "yelan",
      "text": "我们沿摊位往前走，她给我挑中一个印着笑脸的小铁盒。我说没什么东西可装，她想了一会儿：“那先装今天找回来的零钱。”",
      "next": "tc_c04_yelan_market_009",
      "expression": "outfit-casual"
    },
    "tc_c04_yelan_market_009": {
      "id": "tc_c04_yelan_market_009",
      "type": "line",
      "scene": "ts_c04_yelan_market",
      "speaker": "narrator",
      "character": "yelan",
      "text": "我把硬币放进去，走路时叮当响。她听见，忽然说这是很便宜的游戏音效。等我们离开市场，两个人手里都提着原本不需要的东西，却走得比来时慢了很多。",
      "next": "tc_c04_yelan_outing_end_001",
      "expression": "outfit-casual"
    },
    "tc_c04_yelan_outing_end_001": {
      "id": "tc_c04_yelan_outing_end_001",
      "type": "line",
      "scene": "ts_c04_yelan_outing_end",
      "speaker": "narrator",
      "character": "yelan",
      "text": "下午结束时，叶岚要给这次出行起个名字，方便记在备忘录里。我建议叫“练习线下操作”。她皱着眉看我，像听见队友报了一个非常不可靠的位置。",
      "next": "tc_c04_yelan_outing_end_002",
      "expression": "outfit-casual"
    },
    "tc_c04_yelan_outing_end_002": {
      "id": "tc_c04_yelan_outing_end_002",
      "type": "line",
      "scene": "ts_c04_yelan_outing_end",
      "speaker": "yelan",
      "character": "yelan",
      "text": "“太像上课。”",
      "next": "tc_c04_yelan_outing_end_003",
      "expression": "outfit-casual",
      "avatarExpression": "outfit-casual"
    },
    "tc_c04_yelan_outing_end_003": {
      "id": "tc_c04_yelan_outing_end_003",
      "type": "line",
      "scene": "ts_c04_yelan_outing_end",
      "speaker": "wenwen",
      "character": "yelan",
      "text": "“那你起。”",
      "next": "tc_c04_yelan_outing_end_004",
      "expression": "outfit-casual"
    },
    "tc_c04_yelan_outing_end_004": {
      "id": "tc_c04_yelan_outing_end_004",
      "type": "line",
      "scene": "ts_c04_yelan_outing_end",
      "speaker": "narrator",
      "character": "yelan",
      "text": "她想了一阵，把手机转给我。屏幕上只有一句：“今天没有只吃面。”",
      "next": "tc_c04_yelan_outing_end_005",
      "expression": "outfit-casual"
    },
    "tc_c04_yelan_outing_end_005": {
      "id": "tc_c04_yelan_outing_end_005",
      "type": "line",
      "scene": "ts_c04_yelan_outing_end",
      "speaker": "narrator",
      "character": "yelan",
      "text": "我笑着说这个不错。她把手机收回包里，又认真补了一句：“下次只吃面，也不是不可以。”",
      "next": "tc_c04_common_exit",
      "expression": "outfit-casual"
    },
    "tc_c04_yelan_outing_choice": {
      "id": "tc_c04_yelan_outing_choice",
      "type": "choice",
      "scene": "ts_c04_yelan_outing",
      "character": "yelan",
      "text": "今天去哪里？",
      "flag": "yelanOuting",
      "choices": [
        {
          "label": "去河边空地放风筝",
          "value": "kite",
          "next": "tc_c04_yelan_kite_001"
        },
        {
          "label": "去旧货市场找一样无用的小东西",
          "value": "market",
          "next": "tc_c04_yelan_market_001"
        }
      ]
    },
    "tc_c05_yelan_entry": {
      "id": "tc_c05_yelan_entry",
      "type": "line",
      "scene": "ts_c05_yelan_hurt_comparison",
      "speaker": "narrator",
      "character": null,
      "text": "第25天，朋友群里提到回声第30天停业。叶岚问我们那天几点吃饭，说下班赶得上就过来。她仍在保险公司做内勤，回声的收尾跟她的工作没有关系；她问周栀后面有什么打算，也只是朋友之间的关心。",
      "next": "tc_c05_yelan_hurt_comparison_002"
    },
    "tc_c05_yelan_hurt_comparison_002": {
      "id": "tc_c05_yelan_hurt_comparison_002",
      "type": "line",
      "scene": "ts_c05_yelan_hurt_comparison",
      "speaker": "narrator",
      "character": null,
      "text": "第27天我休班，白天补足了觉，晚上和大家开了两局。叶岚那天特别想赢。一次团战，她提前冲进去，把自己送得很干脆，随后立刻在语音里说：“这个位置刚才明明没人。”",
      "next": "tc_c05_yelan_hurt_comparison_003"
    },
    "tc_c05_yelan_hurt_comparison_003": {
      "id": "tc_c05_yelan_hurt_comparison_003",
      "type": "line",
      "scene": "ts_c05_yelan_hurt_comparison",
      "speaker": "narrator",
      "character": null,
      "text": "毛狼笑她是不是嘴上太忙，没看见人。我跟着接了一句：“你们没见过她现实里多安静，线上这股劲儿，应该录下来给她自己看。”",
      "next": "tc_c05_yelan_hurt_comparison_004"
    },
    "tc_c05_yelan_hurt_comparison_004": {
      "id": "tc_c05_yelan_hurt_comparison_004",
      "type": "line",
      "scene": "ts_c05_yelan_hurt_comparison",
      "speaker": "narrator",
      "character": null,
      "text": "耳机里忽然少了一点声音。",
      "next": "tc_c05_yelan_hurt_comparison_005"
    },
    "tc_c05_yelan_hurt_comparison_005": {
      "id": "tc_c05_yelan_hurt_comparison_005",
      "type": "line",
      "scene": "ts_c05_yelan_hurt_comparison",
      "speaker": "narrator",
      "character": null,
      "text": "叶岚没骂我，也没跟着笑。她报了后面两个位置，打完这一局，说有点累，先下了。",
      "next": "tc_c05_yelan_hurt_comparison_006"
    },
    "tc_c05_yelan_hurt_comparison_006": {
      "id": "tc_c05_yelan_hurt_comparison_006",
      "type": "line",
      "scene": "ts_c05_yelan_hurt_comparison",
      "speaker": "narrator",
      "character": null,
      "text": "我最初以为她只是输得不高兴，还给她发了个输游戏的表情包。过了十分钟，她回我：“刚才那句，我不太喜欢。”",
      "next": "tc_c05_yelan_hurt_comparison_007"
    },
    "tc_c05_yelan_hurt_comparison_007": {
      "id": "tc_c05_yelan_hurt_comparison_007",
      "type": "line",
      "scene": "ts_c05_yelan_hurt_comparison",
      "speaker": "narrator",
      "character": null,
      "text": "我看着消息，把原本打出的“开个玩笑”删掉。",
      "next": "tc_c05_yelan_hurt_comparison_008"
    },
    "tc_c05_yelan_hurt_comparison_008": {
      "id": "tc_c05_yelan_hurt_comparison_008",
      "type": "line",
      "scene": "ts_c05_yelan_hurt_comparison",
      "speaker": "wenwen",
      "character": null,
      "text": "“说你现实里安静那句？”",
      "next": "tc_c05_yelan_hurt_comparison_009"
    },
    "tc_c05_yelan_hurt_comparison_009": {
      "id": "tc_c05_yelan_hurt_comparison_009",
      "type": "line",
      "scene": "ts_c05_yelan_hurt_comparison",
      "speaker": "yelan",
      "character": null,
      "text": "“嗯。我自己知道。我不想变成大家拿来比哪个版本更好笑的题目。”",
      "next": "tc_c05_yelan_hurt_comparison_010"
    },
    "tc_c05_yelan_hurt_comparison_010": {
      "id": "tc_c05_yelan_hurt_comparison_010",
      "type": "line",
      "scene": "ts_c05_yelan_hurt_comparison",
      "speaker": "narrator",
      "character": null,
      "text": "我把耳机摘下来。隔壁座位有人大声叫队友，我第一次发现，隔着屏幕说一句话那么容易，接住它的人却不一定还在同一个热闹里。",
      "next": "tc_c05_yelan_both_real_001"
    },
    "tc_c05_yelan_both_real_001": {
      "id": "tc_c05_yelan_both_real_001",
      "type": "line",
      "scene": "ts_c05_yelan_both_real",
      "speaker": "narrator",
      "character": "yelan",
      "text": "我们约在一家饺子店。叶岚先到，看到我进来，没有像语音里那样立刻接梗，只把菜单往我这边推了推。",
      "next": "tc_c05_yelan_both_real_002"
    },
    "tc_c05_yelan_both_real_002": {
      "id": "tc_c05_yelan_both_real_002",
      "type": "line",
      "scene": "ts_c05_yelan_both_real",
      "speaker": "narrator",
      "character": "yelan",
      "text": "我坐下就说：“前天那句，是我得意了。觉得自己见过你，就能替你介绍。”",
      "next": "tc_c05_yelan_both_real_003"
    },
    "tc_c05_yelan_both_real_003": {
      "id": "tc_c05_yelan_both_real_003",
      "type": "line",
      "scene": "ts_c05_yelan_both_real",
      "speaker": "narrator",
      "character": "yelan",
      "text": "她用指尖压着菜单边缘，想了一会儿：“我也不想让你从此说话像写检讨。我只是下线以后，突然觉得下次见面是不是还得表现得特别有趣，才不会让你失望。”",
      "next": "tc_c05_yelan_both_real_004"
    },
    "tc_c05_yelan_both_real_004": {
      "id": "tc_c05_yelan_both_real_004",
      "type": "line",
      "scene": "ts_c05_yelan_both_real",
      "speaker": "wenwen",
      "character": "yelan",
      "text": "“你不用。”",
      "next": "tc_c05_yelan_both_real_005"
    },
    "tc_c05_yelan_both_real_005": {
      "id": "tc_c05_yelan_both_real_005",
      "type": "line",
      "scene": "ts_c05_yelan_both_real",
      "speaker": "yelan",
      "character": "yelan",
      "text": "“我知道应该不用。可当时会这样想。”",
      "next": "tc_c05_yelan_both_real_006"
    },
    "tc_c05_yelan_both_real_006": {
      "id": "tc_c05_yelan_both_real_006",
      "type": "line",
      "scene": "ts_c05_yelan_both_real",
      "speaker": "narrator",
      "character": "yelan",
      "text": "饺子上来，她咬了一口，发现太烫，又赶紧放回勺子上。我也正准备咬，见状跟着停住。她瞥了我一眼，终于笑了一点。",
      "next": "tc_c05_yelan_both_real_007"
    },
    "tc_c05_yelan_both_real_007": {
      "id": "tc_c05_yelan_both_real_007",
      "type": "line",
      "scene": "ts_c05_yelan_both_real",
      "speaker": "yelan",
      "character": "yelan",
      "text": "“这次探路有用了。”",
      "next": "tc_c05_yelan_both_real_008"
    },
    "tc_c05_yelan_both_real_008": {
      "id": "tc_c05_yelan_both_real_008",
      "type": "line",
      "scene": "ts_c05_yelan_both_real",
      "speaker": "narrator",
      "character": "yelan",
      "text": "我没有再说“这才像你”。我把自己的饺子晾在盘子边，问她前天后来做了什么。",
      "next": "tc_c05_yelan_both_real_009"
    },
    "tc_c05_yelan_both_real_009": {
      "id": "tc_c05_yelan_both_real_009",
      "type": "line",
      "scene": "ts_c05_yelan_both_real",
      "speaker": "yelan",
      "character": "yelan",
      "text": "“洗头。洗完还在想那局为什么输。”",
      "next": "tc_c05_yelan_both_real_010"
    },
    "tc_c05_yelan_both_real_010": {
      "id": "tc_c05_yelan_both_real_010",
      "type": "line",
      "scene": "ts_c05_yelan_both_real",
      "speaker": "wenwen",
      "character": "yelan",
      "text": "“所以不是完全不在乎输赢。”",
      "next": "tc_c05_yelan_both_real_011"
    },
    "tc_c05_yelan_both_real_011": {
      "id": "tc_c05_yelan_both_real_011",
      "type": "line",
      "scene": "ts_c05_yelan_both_real",
      "speaker": "yelan",
      "character": "yelan",
      "text": "“当然在乎。我也没有那么大度。”",
      "next": "tc_c05_yelan_both_real_012"
    },
    "tc_c05_yelan_both_real_012": {
      "id": "tc_c05_yelan_both_real_012",
      "type": "line",
      "scene": "ts_c05_yelan_both_real",
      "speaker": "narrator",
      "character": "yelan",
      "text": "她说自己后来发现，提前进去那一下确实是判断错了，跟队友不提醒无关。承认完又小声补了一句，下次最好还是能赢。",
      "next": "tc_c05_yelan_both_real_013"
    },
    "tc_c05_yelan_both_real_013": {
      "id": "tc_c05_yelan_both_real_013",
      "type": "line",
      "scene": "ts_c05_yelan_both_real",
      "speaker": "narrator",
      "character": "yelan",
      "text": "我笑着说可以，但今天先把饺子吃完。她点头，慢慢吃着，没有因为我们谈开了就突然变成全桌最热闹的人。",
      "next": "tc_c05_yelan_both_real_014"
    },
    "tc_c05_yelan_both_real_014": {
      "id": "tc_c05_yelan_both_real_014",
      "type": "line",
      "scene": "ts_c05_yelan_both_real_icecream",
      "speaker": "narrator",
      "character": "yelan",
      "text": "走出店门，她主动问我想不想去旁边买支冰棒。我还没答，她先说：“刚才吃太烫了。”",
      "next": "tc_c05_yelan_both_real_015"
    },
    "tc_c05_yelan_both_real_015": {
      "id": "tc_c05_yelan_both_real_015",
      "type": "line",
      "scene": "ts_c05_yelan_both_real_icecream",
      "speaker": "narrator",
      "character": "yelan",
      "text": "我们站在冰柜前挑了很久，最后拿了同一种。付完钱，她撕开包装，看着我把袋子扔进垃圾桶，忽然叫了我的名字。",
      "next": "tc_c05_yelan_both_real_016"
    },
    "tc_c05_yelan_both_real_016": {
      "id": "tc_c05_yelan_both_real_016",
      "type": "line",
      "scene": "ts_c05_yelan_both_real_icecream",
      "speaker": "yelan",
      "character": "yelan",
      "text": "“我线上也是真的。现实里也是真的。不是哪个上线，哪个下线。”",
      "next": "tc_c05_yelan_both_real_017"
    },
    "tc_c05_yelan_both_real_017": {
      "id": "tc_c05_yelan_both_real_017",
      "type": "line",
      "scene": "ts_c05_yelan_both_real_icecream",
      "speaker": "wenwen",
      "character": "yelan",
      "text": "“我记住了。”",
      "next": "tc_c05_yelan_both_real_018"
    },
    "tc_c05_yelan_both_real_018": {
      "id": "tc_c05_yelan_both_real_018",
      "type": "line",
      "scene": "ts_c05_yelan_both_real_icecream",
      "speaker": "narrator",
      "character": "yelan",
      "text": "她舔了一口冰棒，冷得缩了下脖子：“那你也别把记住这件事说得太郑重。下次还可以笑我，但让我先知道你在笑哪一段。”",
      "next": "tc_c05_yelan_both_real_019"
    },
    "tc_c05_yelan_both_real_019": {
      "id": "tc_c05_yelan_both_real_019",
      "type": "line",
      "scene": "ts_c05_yelan_both_real_street",
      "speaker": "narrator",
      "character": "yelan",
      "text": "我们往前走。过了一个路口，她讲起同事误把空饭盒当成资料盒拿走的事，讲到中间自己先笑停了。我站在旁边等她喘完，没有抢着替她补上包袱。",
      "next": "tc_c05_common_exit"
    },
    "tc_c06_yelan_entry": {
      "id": "tc_c06_yelan_entry",
      "type": "line",
      "scene": "ts_c06_yelan_after_dinner",
      "speaker": "narrator",
      "character": "yelan",
      "text": "回声附近的饭局快结束时，叶岚把自己那份饭钱转过去，顺手给周栀递了张纸巾。周栀还要去上最后一个班，我们没有拉着她多坐。叶岚也没留下做什么交接，她跟我一起走到街口，就要乘车回家。",
      "next": "tc_c06_yelan_after_dinner_002"
    },
    "tc_c06_yelan_after_dinner_002": {
      "id": "tc_c06_yelan_after_dinner_002",
      "type": "line",
      "scene": "ts_c06_yelan_after_dinner",
      "speaker": "narrator",
      "character": "yelan",
      "text": "“你今天上班？”她问。",
      "next": "tc_c06_yelan_after_dinner_003"
    },
    "tc_c06_yelan_after_dinner_003": {
      "id": "tc_c06_yelan_after_dinner_003",
      "type": "line",
      "scene": "ts_c06_yelan_after_dinner",
      "speaker": "wenwen",
      "character": "yelan",
      "text": "“十点。还够回去换件衣服。”",
      "next": "tc_c06_yelan_after_dinner_004"
    },
    "tc_c06_yelan_after_dinner_004": {
      "id": "tc_c06_yelan_after_dinner_004",
      "type": "line",
      "scene": "ts_c06_yelan_after_dinner",
      "speaker": "yelan",
      "character": "yelan",
      "text": "“那不叫你上线了。”",
      "next": "tc_c06_yelan_after_dinner_005"
    },
    "tc_c06_yelan_after_dinner_005": {
      "id": "tc_c06_yelan_after_dinner_005",
      "type": "line",
      "scene": "ts_c06_yelan_after_dinner",
      "speaker": "narrator",
      "character": "yelan",
      "text": "我说第32天休班，醒来后可以见。叶岚想了想，问可不可以换个不需要屏幕的地方。",
      "next": "tc_c06_yelan_after_dinner_006"
    },
    "tc_c06_yelan_after_dinner_006": {
      "id": "tc_c06_yelan_after_dinner_006",
      "type": "line",
      "scene": "ts_c06_yelan_after_dinner",
      "speaker": "wenwen",
      "character": "yelan",
      "text": "“可以。你有想去的？”",
      "next": "tc_c06_yelan_after_dinner_007"
    },
    "tc_c06_yelan_after_dinner_007": {
      "id": "tc_c06_yelan_after_dinner_007",
      "type": "line",
      "scene": "ts_c06_yelan_after_dinner",
      "speaker": "yelan",
      "character": "yelan",
      "text": "“有一个。但是我说出来，你先别觉得我很会。”",
      "next": "tc_c06_yelan_tabletennis_001"
    },
    "tc_c06_yelan_tabletennis_001": {
      "id": "tc_c06_yelan_tabletennis_001",
      "type": "line",
      "scene": "ts_c06_yelan_tabletennis",
      "speaker": "narrator",
      "character": "yelan",
      "text": "叶岚挑了一家可以按时租桌的乒乓球馆。她说上学时打过，最近朋友来玩，自己才想起来还有这件事。我上午睡足，下午在门口碰见她时，她正把头发重新扎紧。",
      "next": "tc_c06_yelan_tabletennis_002",
      "expression": "outfit-casual"
    },
    "tc_c06_yelan_tabletennis_002": {
      "id": "tc_c06_yelan_tabletennis_002",
      "type": "line",
      "scene": "ts_c06_yelan_tabletennis",
      "speaker": "narrator",
      "character": "yelan",
      "text": "“我就记得怎么发球。”她说。",
      "next": "tc_c06_yelan_tabletennis_003",
      "expression": "outfit-casual"
    },
    "tc_c06_yelan_tabletennis_003": {
      "id": "tc_c06_yelan_tabletennis_003",
      "type": "line",
      "scene": "ts_c06_yelan_tabletennis",
      "speaker": "wenwen",
      "character": "yelan",
      "text": "“那你已经领先了。我记得球是圆的。”",
      "next": "tc_c06_yelan_tabletennis_004",
      "expression": "outfit-casual"
    },
    "tc_c06_yelan_tabletennis_004": {
      "id": "tc_c06_yelan_tabletennis_004",
      "type": "line",
      "scene": "ts_c06_yelan_tabletennis",
      "speaker": "narrator",
      "character": "yelan",
      "text": "第一局我们连着捡球。球从我这边弹到桌沿，飞进旁边的隔网，她刚走到半路，又有一颗滚到她脚边。她两只手各拿一颗，看着我，表情逐渐接近在语音里看见我连续送错方向时的样子。",
      "next": "tc_c06_yelan_tabletennis_005",
      "expression": "outfit-casual"
    },
    "tc_c06_yelan_tabletennis_005": {
      "id": "tc_c06_yelan_tabletennis_005",
      "type": "line",
      "scene": "ts_c06_yelan_tabletennis",
      "speaker": "yelan",
      "character": "yelan",
      "text": "“你的地图意识，需要改善。”",
      "next": "tc_c06_yelan_tabletennis_006",
      "expression": "outfit-casual",
      "avatarExpression": "outfit-casual"
    },
    "tc_c06_yelan_tabletennis_006": {
      "id": "tc_c06_yelan_tabletennis_006",
      "type": "line",
      "scene": "ts_c06_yelan_tabletennis",
      "speaker": "narrator",
      "character": "yelan",
      "text": "我忍不住笑，下一次终于把球打回去。她兴奋得加了力，球直接越过我的肩膀，撞在后面墙上。",
      "next": "tc_c06_yelan_tabletennis_007",
      "expression": "outfit-casual"
    },
    "tc_c06_yelan_tabletennis_007": {
      "id": "tc_c06_yelan_tabletennis_007",
      "type": "line",
      "scene": "ts_c06_yelan_tabletennis",
      "speaker": "narrator",
      "character": "yelan",
      "text": "“这算远程支援吗？”我问。",
      "next": "tc_c06_yelan_tabletennis_008",
      "expression": "outfit-casual"
    },
    "tc_c06_yelan_tabletennis_008": {
      "id": "tc_c06_yelan_tabletennis_008",
      "type": "line",
      "scene": "ts_c06_yelan_tabletennis",
      "speaker": "narrator",
      "character": "yelan",
      "text": "她把球拍挡在脸前，声音闷在后面：“算我失误。”",
      "next": "tc_c06_yelan_tabletennis_009",
      "expression": "outfit-casual"
    },
    "tc_c06_yelan_tabletennis_009": {
      "id": "tc_c06_yelan_tabletennis_009",
      "type": "line",
      "scene": "ts_c06_yelan_tabletennis",
      "speaker": "narrator",
      "character": "yelan",
      "text": "后来我们不记比分，先试着能不能连续打满十次。打到第七次，她慢了一点，球落在她鞋边。她咬了下嘴唇，很快又说重来。我发现她不是没有脾气，只是还不习惯把每一点懊恼都放在我面前。",
      "next": "tc_c06_yelan_tabletennis_010",
      "expression": "outfit-casual"
    },
    "tc_c06_yelan_tabletennis_010": {
      "id": "tc_c06_yelan_tabletennis_010",
      "type": "line",
      "scene": "ts_c06_yelan_tabletennis",
      "speaker": "narrator",
      "character": "yelan",
      "text": "再一次打到第九下，我为了够一颗歪球，整个人伸得像晾衣架。球碰到了拍边，竟然晃晃悠悠回了桌上。她愣了一下，没接住，两个人看着它落地，忽然都笑得直不起腰。",
      "next": "tc_c06_yelan_tabletennis_011",
      "expression": "outfit-casual"
    },
    "tc_c06_yelan_tabletennis_011": {
      "id": "tc_c06_yelan_tabletennis_011",
      "type": "line",
      "scene": "ts_c06_yelan_tabletennis",
      "speaker": "narrator",
      "character": "yelan",
      "text": "“十次，算吗？”我问。",
      "next": "tc_c06_yelan_tabletennis_012",
      "expression": "outfit-casual"
    },
    "tc_c06_yelan_tabletennis_012": {
      "id": "tc_c06_yelan_tabletennis_012",
      "type": "line",
      "scene": "ts_c06_yelan_tabletennis",
      "speaker": "narrator",
      "character": "yelan",
      "text": "她扶着桌沿想了一会儿：“算。质量另议。”",
      "next": "tc_c06_yelan_tabletennis_013",
      "expression": "outfit-casual"
    },
    "tc_c06_yelan_tabletennis_013": {
      "id": "tc_c06_yelan_tabletennis_013",
      "type": "line",
      "scene": "ts_c06_yelan_tabletennis",
      "speaker": "narrator",
      "character": "yelan",
      "text": "我们坐到旁边休息。我额头上都是汗，她递来纸巾，自己也拿了一张，没有像以前那样一递完就赶快找别的话讲。",
      "next": "tc_c06_yelan_tabletennis_014",
      "expression": "outfit-casual"
    },
    "tc_c06_yelan_tabletennis_014": {
      "id": "tc_c06_yelan_tabletennis_014",
      "type": "line",
      "scene": "ts_c06_yelan_tabletennis",
      "speaker": "narrator",
      "character": "yelan",
      "text": "我问她跟朋友玩时会不会更厉害。她摇头，说自己通常负责在群里说“我以前很能打”，来一次以后安静两周。",
      "next": "tc_c06_yelan_tabletennis_015",
      "expression": "outfit-casual"
    },
    "tc_c06_yelan_tabletennis_015": {
      "id": "tc_c06_yelan_tabletennis_015",
      "type": "line",
      "scene": "ts_c06_yelan_tabletennis",
      "speaker": "wenwen",
      "character": "yelan",
      "text": "“那今天过去以后呢？”",
      "next": "tc_c06_yelan_tabletennis_016",
      "expression": "outfit-casual"
    },
    "tc_c06_yelan_tabletennis_016": {
      "id": "tc_c06_yelan_tabletennis_016",
      "type": "line",
      "scene": "ts_c06_yelan_tabletennis",
      "speaker": "yelan",
      "character": "yelan",
      "text": "“今天不能安静。得有人证，证明最后十次算数。”",
      "next": "tc_c06_yelan_tabletennis_017",
      "expression": "outfit-casual",
      "avatarExpression": "outfit-casual"
    },
    "tc_c06_yelan_tabletennis_017": {
      "id": "tc_c06_yelan_tabletennis_017",
      "type": "line",
      "scene": "ts_c06_yelan_tabletennis",
      "speaker": "narrator",
      "character": "yelan",
      "text": "我举手表示愿意。她看着我，嘴角慢慢弯起来。",
      "next": "tc_c06_yelan_tabletennis_018",
      "expression": "outfit-casual"
    },
    "tc_c06_yelan_tabletennis_018": {
      "id": "tc_c06_yelan_tabletennis_018",
      "type": "line",
      "scene": "ts_c06_yelan_tabletennis_water",
      "speaker": "narrator",
      "character": "yelan",
      "text": "离开球馆，我们去买水。柜台前只有一瓶她喜欢的口味，我顺手拿起来，她以为我要喝，手停了一下。我看见了，把瓶子递给她。",
      "next": "tc_c06_yelan_tabletennis_019",
      "expression": "outfit-casual"
    },
    "tc_c06_yelan_tabletennis_019": {
      "id": "tc_c06_yelan_tabletennis_019",
      "type": "line",
      "scene": "ts_c06_yelan_tabletennis_water",
      "speaker": "wenwen",
      "character": "yelan",
      "text": "“我想喝另一种。”",
      "next": "tc_c06_yelan_tabletennis_020",
      "expression": "outfit-casual"
    },
    "tc_c06_yelan_tabletennis_020": {
      "id": "tc_c06_yelan_tabletennis_020",
      "type": "line",
      "scene": "ts_c06_yelan_tabletennis_water",
      "speaker": "yelan",
      "character": "yelan",
      "text": "“真想，还是让给我？”",
      "next": "tc_c06_yelan_tabletennis_021",
      "expression": "outfit-casual",
      "avatarExpression": "outfit-casual"
    },
    "tc_c06_yelan_tabletennis_021": {
      "id": "tc_c06_yelan_tabletennis_021",
      "type": "line",
      "scene": "ts_c06_yelan_tabletennis_water",
      "speaker": "wenwen",
      "character": "yelan",
      "text": "“真想。你可以问，别替我猜。”",
      "next": "tc_c06_yelan_tabletennis_022",
      "expression": "outfit-casual"
    },
    "tc_c06_yelan_tabletennis_022": {
      "id": "tc_c06_yelan_tabletennis_022",
      "type": "line",
      "scene": "ts_c06_yelan_tabletennis_water",
      "speaker": "narrator",
      "character": "yelan",
      "text": "她点头，又拿起另一瓶水翻过来看，认真告诉我那瓶不含我讨厌的那种香味。我忽然有点高兴：她记住的不是我在游戏里擅长什么，而是前几次吃饭时很不起眼的一句话。",
      "next": "tc_c06_yelan_tabletennis_023",
      "expression": "outfit-casual"
    },
    "tc_c06_yelan_tabletennis_023": {
      "id": "tc_c06_yelan_tabletennis_023",
      "type": "line",
      "scene": "ts_c06_yelan_tabletennis_busstop",
      "speaker": "narrator",
      "character": "yelan",
      "text": "公交来了，她上车前回头问：“下次打球，还是打游戏？”",
      "next": "tc_c06_yelan_tabletennis_024",
      "expression": "outfit-casual"
    },
    "tc_c06_yelan_tabletennis_024": {
      "id": "tc_c06_yelan_tabletennis_024",
      "type": "line",
      "scene": "ts_c06_yelan_tabletennis_busstop",
      "speaker": "narrator",
      "character": "yelan",
      "text": "我说都可以，她立刻皱了皱鼻子。",
      "next": "tc_c06_yelan_tabletennis_025",
      "expression": "outfit-casual"
    },
    "tc_c06_yelan_tabletennis_025": {
      "id": "tc_c06_yelan_tabletennis_025",
      "type": "line",
      "scene": "ts_c06_yelan_tabletennis_busstop",
      "speaker": "yelan",
      "character": "yelan",
      "text": "“不能每次都给开放地图。”",
      "next": "tc_c06_yelan_tabletennis_026",
      "expression": "outfit-casual",
      "avatarExpression": "outfit-casual"
    },
    "tc_c06_yelan_tabletennis_026": {
      "id": "tc_c06_yelan_tabletennis_026",
      "type": "line",
      "scene": "ts_c06_yelan_tabletennis_busstop",
      "speaker": "wenwen",
      "character": "yelan",
      "text": "“打球吧。我想再试试那个十次。”",
      "next": "tc_c06_yelan_tabletennis_027",
      "expression": "outfit-casual"
    },
    "tc_c06_yelan_tabletennis_027": {
      "id": "tc_c06_yelan_tabletennis_027",
      "type": "line",
      "scene": "ts_c06_yelan_tabletennis_busstop",
      "speaker": "yelan",
      "character": "yelan",
      "text": "“行。这次会算得严格一点。”",
      "next": "tc_c06_common_exit",
      "expression": "outfit-casual",
      "avatarExpression": "outfit-casual"
    },
    "tc_c07_yelan_entry": {
      "id": "tc_c07_yelan_entry",
      "type": "line",
      "scene": "ts_c07_yelan_her_friends",
      "speaker": "narrator",
      "character": null,
      "text": "叶岚和两个朋友去逛了一天。傍晚她发来一张照片，照片里没有人脸，只有三碗颜色不同的甜汤。",
      "next": "tc_c07_yelan_her_friends_002"
    },
    "tc_c07_yelan_her_friends_002": {
      "id": "tc_c07_yelan_her_friends_002",
      "type": "line",
      "scene": "ts_c07_yelan_her_friends",
      "speaker": "yelan",
      "character": null,
      "text": "“猜我点的哪碗。”",
      "next": "tc_c07_yelan_her_friends_003"
    },
    "tc_c07_yelan_her_friends_003": {
      "id": "tc_c07_yelan_her_friends_003",
      "type": "line",
      "scene": "ts_c07_yelan_her_friends",
      "speaker": "narrator",
      "character": null,
      "text": "我自信选了最不甜的那一种。她回了个摇头的表情，告诉我，她点的是加了两份配料的。",
      "next": "tc_c07_yelan_her_friends_004"
    },
    "tc_c07_yelan_her_friends_004": {
      "id": "tc_c07_yelan_her_friends_004",
      "type": "line",
      "scene": "ts_c07_yelan_her_friends",
      "speaker": "wenwen",
      "character": null,
      "text": "“我以为你不爱甜。”",
      "next": "tc_c07_yelan_her_friends_005"
    },
    "tc_c07_yelan_her_friends_005": {
      "id": "tc_c07_yelan_her_friends_005",
      "type": "line",
      "scene": "ts_c07_yelan_her_friends",
      "speaker": "yelan",
      "character": null,
      "text": "“我也以为。今天试了，觉得挺好。”",
      "next": "tc_c07_yelan_her_friends_006"
    },
    "tc_c07_yelan_her_friends_006": {
      "id": "tc_c07_yelan_her_friends_006",
      "type": "line",
      "scene": "ts_c07_yelan_her_friends",
      "speaker": "narrator",
      "character": null,
      "text": "我看着那张照片，心里有一点说不清的小别扭。最近见面顺利，我便偷偷以为自己已经很懂她，连那点不爱甜，都像可以拿出来证明的事。",
      "next": "tc_c07_yelan_her_friends_007"
    },
    "tc_c07_yelan_her_friends_007": {
      "id": "tc_c07_yelan_her_friends_007",
      "type": "line",
      "scene": "ts_c07_yelan_her_friends",
      "speaker": "narrator",
      "character": null,
      "text": "她跟朋友在一起时没有不停回消息。我等了一会儿，才意识到她不是忽然变得冷淡，只是正在吃她的甜汤。我把手机放下，去吃自己的晚饭，饭后走到网吧，照常开始夜里的工作。",
      "next": "tc_c07_yelan_her_friends_008"
    },
    "tc_c07_yelan_her_friends_008": {
      "id": "tc_c07_yelan_her_friends_008",
      "type": "line",
      "scene": "ts_c07_yelan_her_friends_day40",
      "speaker": "narrator",
      "character": null,
      "text": "第二天下午睡醒，看见她昨晚发来的语音。她说那两份配料吃到最后有点腻，朋友替她解决了一小半，三个人交换着尝，反而每一碗都好吃一点。",
      "next": "tc_c07_yelan_her_friends_009"
    },
    "tc_c07_yelan_her_friends_009": {
      "id": "tc_c07_yelan_her_friends_009",
      "type": "line",
      "scene": "ts_c07_yelan_her_friends_day40",
      "speaker": "narrator",
      "character": null,
      "text": "声音里有一段没忍住的笑，像讲到哪里又想起现场。我听完，也笑了，给她回：“下次请推荐一份不用三个人善后的。”",
      "next": "tc_c07_yelan_her_friends_010"
    },
    "tc_c07_yelan_her_friends_010": {
      "id": "tc_c07_yelan_her_friends_010",
      "type": "line",
      "scene": "ts_c07_yelan_her_friends_day40",
      "speaker": "yelan",
      "character": null,
      "text": "“我试过才推荐。你先别急着信。”",
      "next": "tc_c07_yelan_outing_gate"
    },
    "tc_c07_yelan_kite_return_001": {
      "id": "tc_c07_yelan_kite_return_001",
      "type": "line",
      "scene": "ts_c07_yelan_kite_return",
      "speaker": "narrator",
      "character": "yelan",
      "text": "叶岚带着上次那只风筝到了河边。边缘多了一小块透明胶，她说前几天跟朋友来时勾到了草枝，回去自己贴了一下。",
      "next": "tc_c07_yelan_kite_return_002"
    },
    "tc_c07_yelan_kite_return_002": {
      "id": "tc_c07_yelan_kite_return_002",
      "type": "line",
      "scene": "ts_c07_yelan_kite_return",
      "speaker": "narrator",
      "character": "yelan",
      "text": "“它已经背着我练过了。”我说。",
      "next": "tc_c07_yelan_kite_return_003"
    },
    "tc_c07_yelan_kite_return_003": {
      "id": "tc_c07_yelan_kite_return_003",
      "type": "line",
      "scene": "ts_c07_yelan_kite_return",
      "speaker": "yelan",
      "character": "yelan",
      "text": "“没有。练习成绩也一般。”",
      "next": "tc_c07_yelan_kite_return_004"
    },
    "tc_c07_yelan_kite_return_004": {
      "id": "tc_c07_yelan_kite_return_004",
      "type": "line",
      "scene": "ts_c07_yelan_kite_return",
      "speaker": "narrator",
      "character": "yelan",
      "text": "这次她先拿线，我举着风筝往后走。风比上次小，我们等了很久，没急着跑。我站在她对面，她站在一片还没长齐的草上，远远地问我，是不是有点无聊。",
      "next": "tc_c07_yelan_kite_return_005"
    },
    "tc_c07_yelan_kite_return_005": {
      "id": "tc_c07_yelan_kite_return_005",
      "type": "line",
      "scene": "ts_c07_yelan_kite_return",
      "speaker": "wenwen",
      "character": "yelan",
      "text": "“有一点，但我还想等。”",
      "next": "tc_c07_yelan_kite_return_006"
    },
    "tc_c07_yelan_kite_return_006": {
      "id": "tc_c07_yelan_kite_return_006",
      "type": "line",
      "scene": "ts_c07_yelan_kite_return",
      "speaker": "narrator",
      "character": "yelan",
      "text": "她没有把我的前半句当作催促，只点了点头。后来风来了，她看着我放手，把线稳稳往外送，风筝终于升起来。",
      "next": "tc_c07_yelan_kite_return_007"
    },
    "tc_c07_yelan_kite_return_007": {
      "id": "tc_c07_yelan_kite_return_007",
      "type": "line",
      "scene": "ts_c07_yelan_kite_return",
      "speaker": "narrator",
      "character": "yelan",
      "text": "她没急着把线轴交给我。我也没伸手抢自己的参与感，先去捡了草地上的包装纸。她叫我回来时，手里留着刚刚好的一段线。",
      "next": "tc_c07_yelan_kite_return_008"
    },
    "tc_c07_yelan_kite_return_008": {
      "id": "tc_c07_yelan_kite_return_008",
      "type": "line",
      "scene": "ts_c07_yelan_kite_return",
      "speaker": "yelan",
      "character": "yelan",
      "text": "“现在换你。别怕，它贴过胶，没那么金贵。”",
      "next": "tc_c07_yelan_kite_return_009"
    },
    "tc_c07_yelan_kite_return_009": {
      "id": "tc_c07_yelan_kite_return_009",
      "type": "line",
      "scene": "ts_c07_yelan_kite_return",
      "speaker": "narrator",
      "character": "yelan",
      "text": "收线时，她说跟朋友出门，自己有时候也很少说话，大家已经习惯。她望着我：“你现在还会一直找话吗？”",
      "next": "tc_c07_yelan_kite_return_010"
    },
    "tc_c07_yelan_kite_return_010": {
      "id": "tc_c07_yelan_kite_return_010",
      "type": "line",
      "scene": "ts_c07_yelan_kite_return",
      "speaker": "narrator",
      "character": "yelan",
      "text": "我想了想：“会。但不是怕你走了。有些真想讲。”",
      "next": "tc_c07_yelan_kite_return_011"
    },
    "tc_c07_yelan_kite_return_011": {
      "id": "tc_c07_yelan_kite_return_011",
      "type": "line",
      "scene": "ts_c07_yelan_kite_return",
      "speaker": "yelan",
      "character": "yelan",
      "text": "“那你讲。”",
      "next": "tc_c07_yelan_kite_return_012"
    },
    "tc_c07_yelan_kite_return_012": {
      "id": "tc_c07_yelan_kite_return_012",
      "type": "line",
      "scene": "ts_c07_yelan_kite_return",
      "speaker": "narrator",
      "character": "yelan",
      "text": "我讲起师匠试图向顾客解释一款自己完全不懂的游戏，解释到最后主动认输的样子。她笑得手一松，风筝差点又往上跑，我们一齐伸手，终于抓住线轴。",
      "next": "tc_c07_yelan_dinner_001"
    },
    "tc_c07_yelan_market_return_001": {
      "id": "tc_c07_yelan_market_return_001",
      "type": "line",
      "scene": "ts_c07_yelan_market_return",
      "speaker": "narrator",
      "character": null,
      "text": "叶岚发来一张小鸭子的照片。它被放在公司桌角，旁边没有文件和屏幕，只有一只普通水杯。她说同事问了它两天的用途，得到的答案都是“它会点头”。",
      "next": "tc_c07_yelan_market_return_002"
    },
    "tc_c07_yelan_market_return_002": {
      "id": "tc_c07_yelan_market_return_002",
      "type": "line",
      "scene": "ts_c07_yelan_market_return_market_meeting",
      "speaker": "narrator",
      "character": "yelan",
      "text": "见面时，她从包里拿出同款的另一只，不是旧摊那只，底座颜色稍有不同。",
      "next": "tc_c07_yelan_market_return_003"
    },
    "tc_c07_yelan_market_return_003": {
      "id": "tc_c07_yelan_market_return_003",
      "type": "line",
      "scene": "ts_c07_yelan_market_return_market_meeting",
      "speaker": "narrator",
      "character": "yelan",
      "text": "“后来路过又看见一个。”她说，“给你。你柜台不能摆的话，带回家也行。”",
      "next": "tc_c07_yelan_market_return_004"
    },
    "tc_c07_yelan_market_return_004": {
      "id": "tc_c07_yelan_market_return_004",
      "type": "line",
      "scene": "ts_c07_yelan_market_return_market_meeting",
      "speaker": "narrator",
      "character": "yelan",
      "text": "我轻轻碰它的头，它点得比她那只快。",
      "next": "tc_c07_yelan_market_return_005"
    },
    "tc_c07_yelan_market_return_005": {
      "id": "tc_c07_yelan_market_return_005",
      "type": "line",
      "scene": "ts_c07_yelan_market_return_market_meeting",
      "speaker": "wenwen",
      "character": "yelan",
      "text": "“这个比较容易被说服。”",
      "next": "tc_c07_yelan_market_return_006"
    },
    "tc_c07_yelan_market_return_006": {
      "id": "tc_c07_yelan_market_return_006",
      "type": "line",
      "scene": "ts_c07_yelan_market_return_market_meeting",
      "speaker": "yelan",
      "character": "yelan",
      "text": "“那你要小心，别问它该不该多买一杯饮料。”",
      "next": "tc_c07_yelan_market_return_007"
    },
    "tc_c07_yelan_market_return_007": {
      "id": "tc_c07_yelan_market_return_007",
      "type": "line",
      "scene": "ts_c07_yelan_market_return_market_meeting",
      "speaker": "narrator",
      "character": "yelan",
      "text": "我把之前买的小铁盒拿给她看，里面装了耳塞和几枚硬币。她看着，表情有点惊讶，像没想到自己随口挑的东西还在用。",
      "next": "tc_c07_yelan_market_return_008"
    },
    "tc_c07_yelan_market_return_008": {
      "id": "tc_c07_yelan_market_return_008",
      "type": "line",
      "scene": "ts_c07_yelan_market_return_market_meeting",
      "speaker": "narrator",
      "character": "yelan",
      "text": "“有用。”我说，“白天睡觉，耳塞不用到处找了。”",
      "next": "tc_c07_yelan_market_return_009"
    },
    "tc_c07_yelan_market_return_009": {
      "id": "tc_c07_yelan_market_return_009",
      "type": "line",
      "scene": "ts_c07_yelan_market_return_market_walk",
      "speaker": "narrator",
      "character": "yelan",
      "text": "我们一起走了一小段市场。她停在一个卖旧杯子的摊前，看中了一个不太好看的绿色杯子。我第一反应是说她应该喜欢白色，话到嘴边改成了：“为什么是它？”",
      "next": "tc_c07_yelan_market_return_010"
    },
    "tc_c07_yelan_market_return_010": {
      "id": "tc_c07_yelan_market_return_010",
      "type": "line",
      "scene": "ts_c07_yelan_market_return_market_walk",
      "speaker": "yelan",
      "character": "yelan",
      "text": "“看着很像一棵蔬菜。”",
      "next": "tc_c07_yelan_market_return_011"
    },
    "tc_c07_yelan_market_return_011": {
      "id": "tc_c07_yelan_market_return_011",
      "type": "line",
      "scene": "ts_c07_yelan_market_return_market_walk",
      "speaker": "narrator",
      "character": "yelan",
      "text": "我没忍住笑。她也笑，最后没有买，只给那个杯子起了一个名字，叫“上班的青菜”。从市场出来时，身边多了一只不断点头的小鸭，我也多知道了一件完全猜不到的她。",
      "next": "tc_c07_yelan_dinner_001"
    },
    "tc_c07_yelan_dinner_001": {
      "id": "tc_c07_yelan_dinner_001",
      "type": "line",
      "scene": "ts_c07_yelan_dinner",
      "speaker": "narrator",
      "character": "yelan",
      "text": "吃晚饭时，她说最近想留几个周末给自己的朋友，未必每次固定队都到。我说自己轮到夜班时也不会在线，毛狼得学会四个人缺两个人照样过。",
      "next": "tc_c07_yelan_dinner_002"
    },
    "tc_c07_yelan_dinner_002": {
      "id": "tc_c07_yelan_dinner_002",
      "type": "line",
      "scene": "ts_c07_yelan_dinner",
      "speaker": "narrator",
      "character": "yelan",
      "text": "“那叫两个人。”叶岚说。",
      "next": "tc_c07_yelan_dinner_003"
    },
    "tc_c07_yelan_dinner_003": {
      "id": "tc_c07_yelan_dinner_003",
      "type": "line",
      "scene": "ts_c07_yelan_dinner",
      "speaker": "wenwen",
      "character": "yelan",
      "text": "“所以他很有发挥空间。”",
      "next": "tc_c07_yelan_dinner_004"
    },
    "tc_c07_yelan_dinner_004": {
      "id": "tc_c07_yelan_dinner_004",
      "type": "line",
      "scene": "ts_c07_yelan_dinner",
      "speaker": "narrator",
      "character": "yelan",
      "text": "她笑了一会儿，又问我下次什么时候休息。我把能见面的那天下午说给她，她记下，没把没空的那些日子也追问一遍。",
      "next": "tc_c07_common_exit",
      "expression": "expression-smile"
    },
    "tc_c07_yelan_outing_gate": {
      "id": "tc_c07_yelan_outing_gate",
      "type": "gate",
      "scene": "ts_c07_yelan_kite_return",
      "cases": [
        {
          "flag": "yelanOuting",
          "value": "kite",
          "next": "tc_c07_yelan_kite_return_001"
        },
        {
          "flag": "yelanOuting",
          "value": "market",
          "next": "tc_c07_yelan_market_return_001"
        }
      ],
      "default": null,
      "exhaustive": true
    },
    "tc_c08_yelan_entry": {
      "id": "tc_c08_yelan_entry",
      "type": "line",
      "scene": "ts_c08_yelan_meet_without_game",
      "speaker": "narrator",
      "character": null,
      "text": "第52天，我向师匠提了试排轮班。和同事商量好以后，先试上一段时间，再看能否长期这样安排。我发消息告诉叶岚，她说挺好，接着问我眼下是不是还有夜班。",
      "next": "tc_c08_yelan_meet_without_game_002"
    },
    "tc_c08_yelan_meet_without_game_002": {
      "id": "tc_c08_yelan_meet_without_game_002",
      "type": "line",
      "scene": "ts_c08_yelan_meet_without_game",
      "speaker": "wenwen",
      "character": null,
      "text": "“有。今晚也有，不过下午睡够了。”",
      "next": "tc_c08_yelan_meet_without_game_003"
    },
    "tc_c08_yelan_meet_without_game_003": {
      "id": "tc_c08_yelan_meet_without_game_003",
      "type": "line",
      "scene": "ts_c08_yelan_meet_without_game",
      "speaker": "yelan",
      "character": null,
      "text": "“那只吃饭，不拖到太晚。”",
      "next": "tc_c08_yelan_meet_without_game_004"
    },
    "tc_c08_yelan_meet_without_game_004": {
      "id": "tc_c08_yelan_meet_without_game_004",
      "type": "line",
      "scene": "ts_c08_yelan_meet_without_game_dinner",
      "speaker": "narrator",
      "character": "yelan",
      "text": "第54天，我们在小饭店见面。她把手机倒扣在桌上，发了会儿呆，忽然问我有没有过一种情况：以前很想玩的游戏，最近打开，反而像又接了一件事。",
      "next": "tc_c08_yelan_meet_without_game_005"
    },
    "tc_c08_yelan_meet_without_game_005": {
      "id": "tc_c08_yelan_meet_without_game_005",
      "type": "line",
      "scene": "ts_c08_yelan_meet_without_game_dinner",
      "speaker": "narrator",
      "character": "yelan",
      "text": "我说有，最近队伍一说新打法，我有时连名字都懒得记。叶岚肩膀松了一点。",
      "next": "tc_c08_yelan_meet_without_game_006"
    },
    "tc_c08_yelan_meet_without_game_006": {
      "id": "tc_c08_yelan_meet_without_game_006",
      "type": "line",
      "scene": "ts_c08_yelan_meet_without_game_dinner",
      "speaker": "yelan",
      "character": "yelan",
      "text": "“我还以为只有我这样。”",
      "next": "tc_c08_yelan_meet_without_game_007"
    },
    "tc_c08_yelan_meet_without_game_007": {
      "id": "tc_c08_yelan_meet_without_game_007",
      "type": "line",
      "scene": "ts_c08_yelan_meet_without_game_dinner",
      "speaker": "narrator",
      "character": "yelan",
      "text": "毛狼最近想约一场朋友之间的小比赛，叶岚先答应了，后来却越来越不想参加。不是跟谁生气，也不是工作忙到没有空，她只是暂时不想花几个晚上练那几种固定的东西。",
      "next": "tc_c08_yelan_meet_without_game_008"
    },
    "tc_c08_yelan_meet_without_game_008": {
      "id": "tc_c08_yelan_meet_without_game_008",
      "type": "line",
      "scene": "ts_c08_yelan_meet_without_game_dinner",
      "speaker": "narrator",
      "character": "yelan",
      "text": "“那跟他说。”我说。",
      "next": "tc_c08_yelan_meet_without_game_009"
    },
    "tc_c08_yelan_meet_without_game_009": {
      "id": "tc_c08_yelan_meet_without_game_009",
      "type": "line",
      "scene": "ts_c08_yelan_meet_without_game_dinner",
      "speaker": "yelan",
      "character": "yelan",
      "text": "“我知道。但是上次我还说一定能赢。”",
      "next": "tc_c08_yelan_meet_without_game_010"
    },
    "tc_c08_yelan_meet_without_game_010": {
      "id": "tc_c08_yelan_meet_without_game_010",
      "type": "line",
      "scene": "ts_c08_yelan_meet_without_game_dinner",
      "speaker": "wenwen",
      "character": "yelan",
      "text": "“这个我们都说过。你不是第一个退款的。”",
      "next": "tc_c08_yelan_meet_without_game_011"
    },
    "tc_c08_yelan_meet_without_game_011": {
      "id": "tc_c08_yelan_meet_without_game_011",
      "type": "line",
      "scene": "ts_c08_yelan_meet_without_game_dinner",
      "speaker": "narrator",
      "character": "yelan",
      "text": "她笑了，却还是攥着手机没动。我没有拿过来替她写。菜上来以后，我们先吃饭，吃到半碗，她才自己把那句退出的话发出去。",
      "next": "tc_c08_yelan_meet_without_game_012",
      "expression": "expression-smile"
    },
    "tc_c08_yelan_meet_without_game_012": {
      "id": "tc_c08_yelan_meet_without_game_012",
      "type": "line",
      "scene": "ts_c08_yelan_meet_without_game_dinner",
      "speaker": "narrator",
      "character": "yelan",
      "text": "毛狼回得很快：“行。下回想玩再来。”随后又补：“但你上次说我水平不行，这句不能一并撤回。”",
      "next": "tc_c08_yelan_meet_without_game_013"
    },
    "tc_c08_yelan_meet_without_game_013": {
      "id": "tc_c08_yelan_meet_without_game_013",
      "type": "line",
      "scene": "ts_c08_yelan_meet_without_game_dinner",
      "speaker": "narrator",
      "character": "yelan",
      "text": "叶岚对着手机笑出声，认真回复：“那句保留。”",
      "next": "tc_c08_yelan_meet_without_game_014",
      "expression": "expression-smile"
    },
    "tc_c08_yelan_meet_without_game_014": {
      "id": "tc_c08_yelan_meet_without_game_014",
      "type": "line",
      "scene": "ts_c08_yelan_meet_without_game_dinner",
      "speaker": "narrator",
      "character": "yelan",
      "text": "我问她是不是还担心别的。她沉默了一会儿，承认自己有点怕，跟队伍少玩以后，跟我也会没话说。",
      "next": "tc_c08_yelan_meet_without_game_015"
    },
    "tc_c08_yelan_meet_without_game_015": {
      "id": "tc_c08_yelan_meet_without_game_015",
      "type": "line",
      "scene": "ts_c08_yelan_meet_without_game_dinner",
      "speaker": "yelan",
      "character": "yelan",
      "text": "“我们最开始，就是从那个游戏认识的。”",
      "next": "tc_c08_yelan_meet_without_game_016"
    },
    "tc_c08_yelan_meet_without_game_016": {
      "id": "tc_c08_yelan_meet_without_game_016",
      "type": "line",
      "scene": "ts_c08_yelan_meet_without_game_dinner",
      "speaker": "narrator",
      "character": "yelan",
      "text": "我看了看桌上两道菜：“现在这两盘，也不是游戏送的。”",
      "next": "tc_c08_yelan_meet_without_game_017"
    },
    "tc_c08_yelan_meet_without_game_017": {
      "id": "tc_c08_yelan_meet_without_game_017",
      "type": "line",
      "scene": "ts_c08_yelan_meet_without_game_dinner",
      "speaker": "narrator",
      "character": "yelan",
      "text": "她低头看了看，嘴角扬了一点：“你这句论据有点奇怪。”",
      "next": "tc_c08_yelan_meet_without_game_018"
    },
    "tc_c08_yelan_meet_without_game_018": {
      "id": "tc_c08_yelan_meet_without_game_018",
      "type": "line",
      "scene": "ts_c08_yelan_meet_without_game_dinner",
      "speaker": "wenwen",
      "character": "yelan",
      "text": "“但有效。”",
      "next": "tc_c08_yelan_meet_without_game_019"
    },
    "tc_c08_yelan_meet_without_game_019": {
      "id": "tc_c08_yelan_meet_without_game_019",
      "type": "line",
      "scene": "ts_c08_yelan_meet_without_game_supermarket",
      "speaker": "narrator",
      "character": "yelan",
      "text": "饭后还早，我们去附近的小超市。我想买洗衣液，叶岚想补一点零食，最后两个人站在货架前，为哪一包饼干吃到最后不会腻讨论了半天。她觉得我选的口味很稳妥，我说那是有过失败的经验；她伸手拿了个没吃过的，结账后就在门口拆开。",
      "next": "tc_c08_yelan_meet_without_game_020"
    },
    "tc_c08_yelan_meet_without_game_020": {
      "id": "tc_c08_yelan_meet_without_game_020",
      "type": "line",
      "scene": "ts_c08_yelan_meet_without_game_outside",
      "speaker": "narrator",
      "character": "yelan",
      "text": "第一口下去，她嚼得特别慢。我忍着笑问：“又需要探路报告？”",
      "next": "tc_c08_yelan_meet_without_game_021"
    },
    "tc_c08_yelan_meet_without_game_021": {
      "id": "tc_c08_yelan_meet_without_game_021",
      "type": "line",
      "scene": "ts_c08_yelan_meet_without_game_outside",
      "speaker": "narrator",
      "character": "yelan",
      "text": "她把袋子递过来：“你自己判断。这次我不负责指挥。”",
      "next": "tc_c08_yelan_meet_without_game_022"
    },
    "tc_c08_yelan_meet_without_game_022": {
      "id": "tc_c08_yelan_meet_without_game_022",
      "type": "line",
      "scene": "ts_c08_yelan_meet_without_game_bench",
      "speaker": "narrator",
      "character": "yelan",
      "text": "我尝了一块，发现并不难吃，只是跟包装让人想象的味道完全不同。叶岚点头，说自己就是卡在这里。我们把它带到街边长椅上，吃几块，喝点水，没有人提起装备、分数和下一局。",
      "next": "tc_c08_yelan_meet_without_game_023"
    },
    "tc_c08_yelan_meet_without_game_023": {
      "id": "tc_c08_yelan_meet_without_game_023",
      "type": "line",
      "scene": "ts_c08_yelan_meet_without_game_bench",
      "speaker": "narrator",
      "character": "yelan",
      "text": "她靠着椅背，先看看路，又看看我。",
      "next": "tc_c08_yelan_meet_without_game_024"
    },
    "tc_c08_yelan_meet_without_game_024": {
      "id": "tc_c08_yelan_meet_without_game_024",
      "type": "line",
      "scene": "ts_c08_yelan_meet_without_game_bench",
      "speaker": "yelan",
      "character": "yelan",
      "text": "“文文，我今天其实挺想见你的。”",
      "next": "tc_c08_yelan_meet_without_game_025"
    },
    "tc_c08_yelan_meet_without_game_025": {
      "id": "tc_c08_yelan_meet_without_game_025",
      "type": "line",
      "scene": "ts_c08_yelan_meet_without_game_bench",
      "speaker": "wenwen",
      "character": "yelan",
      "text": "“我也是。”",
      "next": "tc_c08_yelan_meet_without_game_026"
    },
    "tc_c08_yelan_meet_without_game_026": {
      "id": "tc_c08_yelan_meet_without_game_026",
      "type": "line",
      "scene": "ts_c08_yelan_meet_without_game_bench",
      "speaker": "narrator",
      "character": "yelan",
      "text": "她的手指在饼干袋边捏了一下，小声补充：“不是想见一个能陪我练习的人。”",
      "next": "tc_c08_yelan_meet_without_game_027"
    },
    "tc_c08_yelan_meet_without_game_027": {
      "id": "tc_c08_yelan_meet_without_game_027",
      "type": "line",
      "scene": "ts_c08_yelan_meet_without_game_bench",
      "speaker": "narrator",
      "character": "yelan",
      "text": "我把水瓶拧好，放到椅子另一边。想说的话一下太多，反而不知道先说哪句。她看见我的样子，笑了，没催我。",
      "next": "tc_c08_yelan_meet_without_game_028"
    },
    "tc_c08_yelan_meet_without_game_028": {
      "id": "tc_c08_yelan_meet_without_game_028",
      "type": "line",
      "scene": "ts_c08_yelan_meet_without_game_bench",
      "speaker": "narrator",
      "character": "yelan",
      "text": "最后我只说：“那下次再挑一种奇怪的饼干。”",
      "next": "tc_c08_yelan_meet_without_game_029"
    },
    "tc_c08_yelan_meet_without_game_029": {
      "id": "tc_c08_yelan_meet_without_game_029",
      "type": "line",
      "scene": "ts_c08_yelan_meet_without_game_bench",
      "speaker": "yelan",
      "character": "yelan",
      "text": "“不能每次都这么冒险。”",
      "next": "tc_c08_yelan_meet_without_game_030"
    },
    "tc_c08_yelan_meet_without_game_030": {
      "id": "tc_c08_yelan_meet_without_game_030",
      "type": "line",
      "scene": "ts_c08_yelan_meet_without_game_bench",
      "speaker": "wenwen",
      "character": "yelan",
      "text": "“也可以买正常的。”",
      "next": "tc_c08_yelan_meet_without_game_031"
    },
    "tc_c08_yelan_meet_without_game_031": {
      "id": "tc_c08_yelan_meet_without_game_031",
      "type": "line",
      "scene": "ts_c08_yelan_meet_without_game_parting",
      "speaker": "narrator",
      "character": null,
      "text": "她点点头，把剩下半袋饼干分给我。我们离开时天还没黑，我有足够的时间回去换衣服、吃点东西再接班。她也往自己的方向走，走出几步，回头跟我挥了一下手。",
      "next": "tc_c08_yelan_meet_without_game_032"
    },
    "tc_c08_yelan_meet_without_game_032": {
      "id": "tc_c08_yelan_meet_without_game_032",
      "type": "line",
      "scene": "ts_c08_yelan_meet_without_game_parting",
      "speaker": "narrator",
      "character": null,
      "text": "这回没有耳机，我还是听清了她叫我的名字。",
      "next": "tc_c08_common_exit"
    },
    "tc_c09_yelan_entry": {
      "id": "tc_c09_yelan_entry",
      "type": "line",
      "scene": "ts_c09_yelan_relationship",
      "speaker": "narrator",
      "character": null,
      "text": "第61天以后，我正式开始轮班。夜班没有消失，但休息日终于能提前空出来。叶岚也把自己的安排告诉我，我们挑了一天，去之前没认真逛完的街道走走。",
      "next": "tc_c09_yelan_relationship_002"
    },
    "tc_c09_yelan_relationship_002": {
      "id": "tc_c09_yelan_relationship_002",
      "type": "line",
      "scene": "ts_c09_yelan_relationship_meeting",
      "speaker": "narrator",
      "character": "yelan",
      "text": "她到的时候带了两瓶水，先让我选。我问她是不是故意考我记不记得她喜欢什么，她摇头。",
      "next": "tc_c09_yelan_relationship_003"
    },
    "tc_c09_yelan_relationship_003": {
      "id": "tc_c09_yelan_relationship_003",
      "type": "line",
      "scene": "ts_c09_yelan_relationship_meeting",
      "speaker": "yelan",
      "character": "yelan",
      "text": "“都能喝。今天没有隐藏题。”",
      "next": "tc_c09_yelan_relationship_004"
    },
    "tc_c09_yelan_relationship_004": {
      "id": "tc_c09_yelan_relationship_004",
      "type": "line",
      "scene": "ts_c09_yelan_relationship_eaves",
      "speaker": "narrator",
      "character": "yelan",
      "text": "街边新开了一家小店，门口摆着几把颜色不同的伞。我们站在那里看雨，谁也没急着进去买。叶岚望着屋檐落下的水珠，忽然说：“我想问一件不在游戏里的事。”",
      "next": "tc_c09_yelan_relationship_005"
    },
    "tc_c09_yelan_relationship_005": {
      "id": "tc_c09_yelan_relationship_005",
      "type": "line",
      "scene": "ts_c09_yelan_relationship_eaves",
      "speaker": "narrator",
      "character": "yelan",
      "text": "我看向她。",
      "next": "tc_c09_yelan_relationship_006"
    },
    "tc_c09_yelan_relationship_006": {
      "id": "tc_c09_yelan_relationship_006",
      "type": "line",
      "scene": "ts_c09_yelan_relationship_eaves",
      "speaker": "narrator",
      "character": "yelan",
      "text": "她手里那瓶水已经拧开了，又被拧紧。她很轻地笑了一下：“你现在约我，是朋友一起出来，还是也有别的意思？”",
      "next": "tc_c09_yelan_relationship_007"
    },
    "tc_c09_yelan_relationship_007": {
      "id": "tc_c09_yelan_relationship_007",
      "type": "line",
      "scene": "ts_c09_yelan_relationship_eaves",
      "speaker": "narrator",
      "character": "yelan",
      "text": "她问完没有立刻替我铺台阶。不是我说什么都行，她是在等一个真实的答案。",
      "next": "tc_c09_yelan_relationship_choice"
    },
    "tc_c09_yelan_dating_001": {
      "id": "tc_c09_yelan_dating_001",
      "type": "line",
      "scene": "ts_c09_yelan_dating",
      "speaker": "narrator",
      "character": "yelan",
      "text": "“有别的意思。”我说，“我喜欢你。想跟你交往。”",
      "next": "tc_c09_yelan_dating_002"
    },
    "tc_c09_yelan_dating_002": {
      "id": "tc_c09_yelan_dating_002",
      "type": "line",
      "scene": "ts_c09_yelan_dating",
      "speaker": "narrator",
      "character": "yelan",
      "text": "她的手停下来，像没有料到我会这么直接。过了一会儿，才问：“包括有时候一句话也想不出来的我？”",
      "next": "tc_c09_yelan_dating_003"
    },
    "tc_c09_yelan_dating_003": {
      "id": "tc_c09_yelan_dating_003",
      "type": "line",
      "scene": "ts_c09_yelan_dating",
      "speaker": "wenwen",
      "character": "yelan",
      "text": "“包括会把饼干递给我判断、打球打到墙上、输游戏也会不服气的你。”",
      "next": "tc_c09_yelan_dating_004"
    },
    "tc_c09_yelan_dating_004": {
      "id": "tc_c09_yelan_dating_004",
      "type": "line",
      "scene": "ts_c09_yelan_dating",
      "speaker": "yelan",
      "character": "yelan",
      "text": "“你这份表白，材料不怎么体面。”",
      "next": "tc_c09_yelan_dating_005"
    },
    "tc_c09_yelan_dating_005": {
      "id": "tc_c09_yelan_dating_005",
      "type": "line",
      "scene": "ts_c09_yelan_dating",
      "speaker": "wenwen",
      "character": "yelan",
      "text": "“还有很多。我怕列出来像投诉。”",
      "next": "tc_c09_yelan_dating_006"
    },
    "tc_c09_yelan_dating_006": {
      "id": "tc_c09_yelan_dating_006",
      "type": "line",
      "scene": "ts_c09_yelan_dating",
      "speaker": "narrator",
      "character": "yelan",
      "text": "叶岚终于笑了，笑完看着我，声音有点轻，却没有含混过去。",
      "next": "tc_c09_yelan_dating_007",
      "expression": "expression-smile"
    },
    "tc_c09_yelan_dating_007": {
      "id": "tc_c09_yelan_dating_007",
      "type": "line",
      "scene": "ts_c09_yelan_dating",
      "speaker": "yelan",
      "character": "yelan",
      "text": "“我也喜欢你。不是只喜欢你在语音里接得上话。我想跟你见面，想知道你睡醒了会先吃什么，也想让你知道我有时候就是在发呆，没有生谁的气。”",
      "next": "tc_c09_yelan_dating_008"
    },
    "tc_c09_yelan_dating_008": {
      "id": "tc_c09_yelan_dating_008",
      "type": "line",
      "scene": "ts_c09_yelan_dating",
      "speaker": "narrator",
      "character": "yelan",
      "text": "我问她现在能不能牵手。她把水瓶换到另一只手里，朝我伸过来。掌心贴上时，她的手指先僵了一下，随后慢慢收紧。",
      "next": "tc_c09_yelan_dating_009"
    },
    "tc_c09_yelan_dating_009": {
      "id": "tc_c09_yelan_dating_009",
      "type": "line",
      "scene": "ts_c09_yelan_dating",
      "speaker": "narrator",
      "character": "yelan",
      "text": "“有点紧张。”她说。",
      "next": "tc_c09_yelan_dating_010"
    },
    "tc_c09_yelan_dating_010": {
      "id": "tc_c09_yelan_dating_010",
      "type": "line",
      "scene": "ts_c09_yelan_dating",
      "speaker": "wenwen",
      "character": "yelan",
      "text": "“我也是。”",
      "next": "tc_c09_yelan_dating_011"
    },
    "tc_c09_yelan_dating_011": {
      "id": "tc_c09_yelan_dating_011",
      "type": "line",
      "scene": "ts_c09_yelan_dating",
      "speaker": "narrator",
      "character": "yelan",
      "text": "她望着我们牵在一起的手，忽然小声问：“现在是不是终于不用装成在研究下一个吃饭地点？”",
      "next": "tc_c09_yelan_dating_012"
    },
    "tc_c09_yelan_dating_012": {
      "id": "tc_c09_yelan_dating_012",
      "type": "line",
      "scene": "ts_c09_yelan_dating_street",
      "speaker": "narrator",
      "character": "yelan",
      "text": "我笑着说是。雨小下来，我们走出屋檐，绕过路边的水坑。她依旧走得不快，遇到人多的地方也不会突然变得能言善辩。我牵着她，没有替她解释为什么安静。",
      "next": "tc_c09_yelan_dating_013"
    },
    "tc_c09_yelan_dating_013": {
      "id": "tc_c09_yelan_dating_013",
      "type": "line",
      "scene": "ts_c09_yelan_dating_busstop",
      "speaker": "narrator",
      "character": "yelan",
      "text": "到车站，她说下次想约我打球，但不保证能凑够一整下午。我说自己也得看轮班表，等有空的那天就定下来。",
      "next": "tc_c09_yelan_dating_014"
    },
    "tc_c09_yelan_dating_014": {
      "id": "tc_c09_yelan_dating_014",
      "type": "line",
      "scene": "ts_c09_yelan_dating_busstop",
      "speaker": "narrator",
      "character": "yelan",
      "text": "“如果没有呢？”她问。",
      "next": "tc_c09_yelan_dating_015"
    },
    "tc_c09_yelan_dating_015": {
      "id": "tc_c09_yelan_dating_015",
      "type": "line",
      "scene": "ts_c09_yelan_dating_busstop",
      "speaker": "wenwen",
      "character": "yelan",
      "text": "“就先吃个饭。还不够的话，再约。”",
      "next": "tc_c09_yelan_dating_016"
    },
    "tc_c09_yelan_dating_016": {
      "id": "tc_c09_yelan_dating_016",
      "type": "line",
      "scene": "ts_c09_yelan_dating_busstop",
      "speaker": "narrator",
      "character": "yelan",
      "text": "她点点头，上车前松开手，过了两秒又转回来，轻轻捏了一下我的手指。",
      "next": "tc_c09_yelan_dating_017"
    },
    "tc_c09_yelan_dating_017": {
      "id": "tc_c09_yelan_dating_017",
      "type": "line",
      "scene": "ts_c09_yelan_dating_busstop",
      "speaker": "yelan",
      "character": "yelan",
      "text": "“这次只是想牵你。”",
      "next": "tc_c09_yelan_dating_018"
    },
    "tc_c09_yelan_dating_018": {
      "id": "tc_c09_yelan_dating_018",
      "type": "line",
      "scene": "ts_c09_yelan_dating_leaving",
      "speaker": "narrator",
      "character": null,
      "text": "说完她自己先红了耳朵，赶紧转身上车。我站在车站，过了好一会儿，才把握空了的手慢慢放回口袋。",
      "next": "tc_c09_common_exit"
    },
    "tc_c09_yelan_friends_001": {
      "id": "tc_c09_yelan_friends_001",
      "type": "line",
      "scene": "ts_c09_yelan_friends",
      "speaker": "narrator",
      "character": "yelan",
      "text": "“我很喜欢现在这样相处，”我说，“但想到交往，我还没有那种确定的心情。不能因为你问了，就顺着答应。”",
      "next": "tc_c09_yelan_friends_002"
    },
    "tc_c09_yelan_friends_002": {
      "id": "tc_c09_yelan_friends_002",
      "type": "line",
      "scene": "ts_c09_yelan_friends",
      "speaker": "narrator",
      "character": "yelan",
      "text": "叶岚低头看着水瓶，指尖在瓶身的纹路上滑了一下。",
      "next": "tc_c09_yelan_friends_003"
    },
    "tc_c09_yelan_friends_003": {
      "id": "tc_c09_yelan_friends_003",
      "type": "line",
      "scene": "ts_c09_yelan_friends",
      "speaker": "yelan",
      "character": "yelan",
      "text": "“我知道了。”",
      "next": "tc_c09_yelan_friends_004"
    },
    "tc_c09_yelan_friends_004": {
      "id": "tc_c09_yelan_friends_004",
      "type": "line",
      "scene": "ts_c09_yelan_friends",
      "speaker": "narrator",
      "character": "yelan",
      "text": "她的声音很平静，平静得我想立刻补很多解释。她却先抬起头：“让我缓一会儿。不是要你再说一遍原因。”",
      "next": "tc_c09_yelan_friends_005"
    },
    "tc_c09_yelan_friends_005": {
      "id": "tc_c09_yelan_friends_005",
      "type": "line",
      "scene": "ts_c09_yelan_friends",
      "speaker": "narrator",
      "character": "yelan",
      "text": "我陪她站了一阵。雨里的车慢慢开过，溅起一排很浅的水。后来她问我，刚才那句“喜欢相处”是不是真的。我说是真的，跟她打球、散步或者安静坐着，都是真的。",
      "next": "tc_c09_yelan_friends_006"
    },
    "tc_c09_yelan_friends_006": {
      "id": "tc_c09_yelan_friends_006",
      "type": "line",
      "scene": "ts_c09_yelan_friends",
      "speaker": "narrator",
      "character": "yelan",
      "text": "她点头：“那就先保留这些。只是我最近可能不单独约你。”",
      "next": "tc_c09_yelan_friends_007"
    },
    "tc_c09_yelan_friends_007": {
      "id": "tc_c09_yelan_friends_007",
      "type": "line",
      "scene": "ts_c09_yelan_friends",
      "speaker": "wenwen",
      "character": "yelan",
      "text": "“好。”",
      "next": "tc_c09_yelan_friends_008"
    },
    "tc_c09_yelan_friends_008": {
      "id": "tc_c09_yelan_friends_008",
      "type": "line",
      "scene": "ts_c09_yelan_friends_parting",
      "speaker": "narrator",
      "character": null,
      "text": "我们没有为了让拒绝看上去不难过，立刻开一场游戏把它冲掉。那天她自己回去，我也没有一直追着发消息确认她是否已经开心。",
      "next": "tc_c09_yelan_friends_009"
    },
    "tc_c09_yelan_friends_009": {
      "id": "tc_c09_yelan_friends_009",
      "type": "line",
      "scene": "ts_c09_yelan_friends_day86",
      "speaker": "narrator",
      "character": null,
      "text": "到第86天，毛狼在群里约一场轻松的合作局。叶岚回了“我来”，又问还有谁。我说自己那天休息，可以参加。她没有退出，也没有特意多说一句。",
      "next": "tc_c09_yelan_friends_010"
    },
    "tc_c09_yelan_friends_010": {
      "id": "tc_c09_yelan_friends_010",
      "type": "line",
      "scene": "ts_c09_yelan_friends_day86",
      "speaker": "narrator",
      "character": null,
      "text": "游戏里我走错方向，她照常提醒，随后想了想，补了一句：“这次是提示，不是指挥。”",
      "next": "tc_c09_yelan_friends_011"
    },
    "tc_c09_yelan_friends_011": {
      "id": "tc_c09_yelan_friends_011",
      "type": "line",
      "scene": "ts_c09_yelan_friends_day86",
      "speaker": "narrator",
      "character": null,
      "text": "我说收到。毛狼问我俩是不是最近看了什么客服培训，叶岚立刻让他先管好自己脚下。下一秒，他果然掉了下去，我们都笑起来。",
      "next": "tc_c09_yelan_friends_012"
    },
    "tc_c09_yelan_friends_012": {
      "id": "tc_c09_yelan_friends_012",
      "type": "line",
      "scene": "ts_c09_yelan_friends_day86",
      "speaker": "narrator",
      "character": null,
      "text": "散场时，叶岚跟大家一起说再见。过了会儿，她给我发了一条私信：“以后朋友出来吃饭，可以叫我。不用每次先担心会不会尴尬。”",
      "next": "tc_c09_yelan_friends_013"
    },
    "tc_c09_yelan_friends_013": {
      "id": "tc_c09_yelan_friends_013",
      "type": "line",
      "scene": "ts_c09_yelan_friends_day86",
      "speaker": "narrator",
      "character": null,
      "text": "我回好，没有把这句话读成新的暗示。",
      "next": "tc_c09_yelan_friends_014"
    },
    "tc_c09_yelan_friends_014": {
      "id": "tc_c09_yelan_friends_014",
      "type": "line",
      "scene": "ts_c09_yelan_friends_day86",
      "speaker": "narrator",
      "character": null,
      "text": "窗外还在下雨。我关上游戏，把椅子推回去，心里有一点遗憾，也有一份不用变成恋爱才算成立的珍惜。",
      "next": "tc_c09_common_exit"
    },
    "tc_c09_yelan_relationship_choice": {
      "id": "tc_c09_yelan_relationship_choice",
      "type": "choice",
      "scene": "ts_c09_yelan_relationship_eaves",
      "character": "yelan",
      "text": "我怎样回应这份靠近？",
      "flag": "yelanRelationship",
      "choices": [
        {
          "label": "我喜欢你。想跟你交往。",
          "value": "dating",
          "next": "tc_c09_yelan_dating_001"
        },
        {
          "label": "但想到交往，我还没有那种确定的心情。不能因为你问了，就顺着答应。",
          "value": "friends",
          "next": "tc_c09_yelan_friends_001"
        }
      ]
    },
    "tc_c10_yelan_dating_001": {
      "id": "tc_c10_yelan_dating_001",
      "type": "line",
      "scene": "ts_c10_yelan_dating",
      "speaker": "narrator",
      "character": null,
      "text": "叶岚把购物清单发给我时，我刚结束在网吧的一段班。轮班表里仍有夜班，今天正好下午能见。我问她要不要先吃点东西，她说可以，清单不急，买米也没有限时奖励。",
      "next": "tc_c10_yelan_dating_002"
    },
    "tc_c10_yelan_dating_002": {
      "id": "tc_c10_yelan_dating_002",
      "type": "line",
      "scene": "ts_c10_yelan_dating_meeting",
      "speaker": "narrator",
      "character": "yelan",
      "text": "我们在超市门口碰面。她手里拿着两张小票，刚才买东西时忘记用优惠，又回去问了一次，没能补上。她把这件小失误讲给我听，最后总结：“今天大概损失了一瓶水。”",
      "next": "tc_c10_yelan_dating_003"
    },
    "tc_c10_yelan_dating_003": {
      "id": "tc_c10_yelan_dating_003",
      "type": "line",
      "scene": "ts_c10_yelan_dating_meeting",
      "speaker": "wenwen",
      "character": "yelan",
      "text": "“很严重。”",
      "next": "tc_c10_yelan_dating_004"
    },
    "tc_c10_yelan_dating_004": {
      "id": "tc_c10_yelan_dating_004",
      "type": "line",
      "scene": "ts_c10_yelan_dating_meeting",
      "speaker": "yelan",
      "character": "yelan",
      "text": "“所以你等会儿别挑最贵的水。”",
      "next": "tc_c10_yelan_dating_005"
    },
    "tc_c10_yelan_dating_005": {
      "id": "tc_c10_yelan_dating_005",
      "type": "line",
      "scene": "ts_c10_yelan_dating_shopping",
      "speaker": "narrator",
      "character": "yelan",
      "text": "我笑着接过购物篮。她没有把所有东西都交给我拿，自己提了另一个，走到零食区时，很自然地拉住我的衣袖。",
      "next": "tc_c10_yelan_dating_006"
    },
    "tc_c10_yelan_dating_006": {
      "id": "tc_c10_yelan_dating_006",
      "type": "line",
      "scene": "ts_c10_yelan_dating_shopping",
      "speaker": "yelan",
      "character": "yelan",
      "text": "“这个我们上回买过，别再被包装骗一次。”",
      "next": "tc_c10_yelan_dating_007"
    },
    "tc_c10_yelan_dating_007": {
      "id": "tc_c10_yelan_dating_007",
      "type": "line",
      "scene": "ts_c10_yelan_dating_shopping",
      "speaker": "narrator",
      "character": "yelan",
      "text": "两年里，我们没有每晚都一起玩游戏。固定队有时人齐，有时各忙各的，毛狼办演出忙的时候，群里几天没人发战绩。叶岚继续做她的内勤工作，喜欢的事有一点变化：有段时间只想看剧，有段时间又想练乒乓球。她在陌生人面前依旧安静，回到熟悉的人身边，会为了一个很小的胜负认真反驳。",
      "next": "tc_c10_yelan_dating_008"
    },
    "tc_c10_yelan_dating_008": {
      "id": "tc_c10_yelan_dating_008",
      "type": "line",
      "scene": "ts_c10_yelan_dating_shopping",
      "speaker": "narrator",
      "character": "yelan",
      "text": "我也还在网吧。有人问起以后，我仍没有一份漂亮到所有人都赞成的答案，但已经能把下个月要留的钱和休息时间安排好。我们聊这些，有时意见不同，谁也不能把“我是为你好”当成自动获胜的一张牌。",
      "next": "tc_c10_yelan_dating_009"
    },
    "tc_c10_yelan_dating_009": {
      "id": "tc_c10_yelan_dating_009",
      "type": "line",
      "scene": "ts_c10_yelan_dating_shopping",
      "speaker": "narrator",
      "character": "yelan",
      "text": "走到米袋前，我准备抱最小的一袋。叶岚看了看价格，指向另一袋，说这袋更合适。我抱起来，手臂立刻往下一沉。她憋着笑，伸手托住另一侧。",
      "next": "tc_c10_yelan_dating_010"
    },
    "tc_c10_yelan_dating_010": {
      "id": "tc_c10_yelan_dating_010",
      "type": "line",
      "scene": "ts_c10_yelan_dating_shopping",
      "speaker": "yelan",
      "character": "yelan",
      "text": "“要帮忙就说。”",
      "next": "tc_c10_yelan_dating_011"
    },
    "tc_c10_yelan_dating_011": {
      "id": "tc_c10_yelan_dating_011",
      "type": "line",
      "scene": "ts_c10_yelan_dating_shopping",
      "speaker": "wenwen",
      "character": "yelan",
      "text": "“刚好准备说。”",
      "next": "tc_c10_yelan_dating_012"
    },
    "tc_c10_yelan_dating_012": {
      "id": "tc_c10_yelan_dating_012",
      "type": "line",
      "scene": "ts_c10_yelan_dating_shopping",
      "speaker": "yelan",
      "character": "yelan",
      "text": "“嘴还是比身体慢。”",
      "next": "tc_c10_yelan_dating_013"
    },
    "tc_c10_yelan_dating_013": {
      "id": "tc_c10_yelan_dating_013",
      "type": "line",
      "scene": "ts_c10_yelan_dating_shopping",
      "speaker": "narrator",
      "character": "yelan",
      "text": "我们一起把米放进推车，放完同时松手，笑了一阵。去结账的路上，她把一包没吃过的饼干丢进车里。我看她，她也看我。",
      "next": "tc_c10_yelan_dating_014"
    },
    "tc_c10_yelan_dating_014": {
      "id": "tc_c10_yelan_dating_014",
      "type": "line",
      "scene": "ts_c10_yelan_dating_shopping",
      "speaker": "wenwen",
      "character": "yelan",
      "text": "“今天又想冒险？”",
      "next": "tc_c10_yelan_dating_015"
    },
    "tc_c10_yelan_dating_015": {
      "id": "tc_c10_yelan_dating_015",
      "type": "line",
      "scene": "ts_c10_yelan_dating_shopping",
      "speaker": "yelan",
      "character": "yelan",
      "text": "“今天两个人，可以分担。”",
      "next": "tc_c10_yelan_dating_016"
    },
    "tc_c10_yelan_dating_016": {
      "id": "tc_c10_yelan_dating_016",
      "type": "line",
      "scene": "ts_c10_yelan_dating_bench",
      "speaker": "narrator",
      "character": "yelan",
      "text": "后来我们在长椅上拆开那包饼干。味道很普通，甚至有点失望。叶岚嚼完一块，把头轻轻靠到我肩上，没急着评价。我坐着，让肩膀往她那边低了一点。",
      "next": "tc_c10_yelan_dating_017"
    },
    "tc_c10_yelan_dating_017": {
      "id": "tc_c10_yelan_dating_017",
      "type": "line",
      "scene": "ts_c10_yelan_dating_bench",
      "speaker": "narrator",
      "character": "yelan",
      "text": "过了一会儿，她忽然说：“文文。”",
      "next": "tc_c10_yelan_dating_018"
    },
    "tc_c10_yelan_dating_018": {
      "id": "tc_c10_yelan_dating_018",
      "type": "line",
      "scene": "ts_c10_yelan_dating_bench",
      "speaker": "wenwen",
      "character": "yelan",
      "text": "“嗯？”",
      "next": "tc_c10_yelan_dating_019"
    },
    "tc_c10_yelan_dating_019": {
      "id": "tc_c10_yelan_dating_019",
      "type": "line",
      "scene": "ts_c10_yelan_dating_bench",
      "speaker": "yelan",
      "character": "yelan",
      "text": "“没事，叫一下。”",
      "next": "tc_c10_yelan_dating_020"
    },
    "tc_c10_yelan_dating_020": {
      "id": "tc_c10_yelan_dating_020",
      "type": "line",
      "scene": "ts_c10_yelan_dating_lights",
      "speaker": "narrator",
      "character": "yelan",
      "text": "我把手伸过去，她把手放进来，指间还沾着一点饼干屑。我们没有马上起身，坐到路灯刚亮，再一起把那袋米提起来。",
      "next": "tc_c10_yelan_end_dating"
    },
    "tc_c10_yelan_friends_001": {
      "id": "tc_c10_yelan_friends_001",
      "type": "line",
      "scene": "ts_c10_yelan_friends",
      "speaker": "narrator",
      "character": null,
      "text": "我在网吧柜台补货时，毛狼发来组队邀请。我回他正在上班，今晚不参加。叶岚跟着在群里发了一句：“那我们先开，你别远程指挥。”",
      "next": "tc_c10_yelan_friends_002"
    },
    "tc_c10_yelan_friends_002": {
      "id": "tc_c10_yelan_friends_002",
      "type": "line",
      "scene": "ts_c10_yelan_friends",
      "speaker": "wenwen",
      "character": null,
      "text": "“我指挥过吗？”",
      "next": "tc_c10_yelan_friends_003"
    },
    "tc_c10_yelan_friends_003": {
      "id": "tc_c10_yelan_friends_003",
      "type": "line",
      "scene": "ts_c10_yelan_friends",
      "speaker": "narrator",
      "character": null,
      "text": "她很快发来一张以前的聊天截图，只截了我连续三条建议，没有带出别的私人消息。我看完，无从反驳，发了个举手投降的表情。",
      "next": "tc_c10_yelan_friends_004"
    },
    "tc_c10_yelan_friends_004": {
      "id": "tc_c10_yelan_friends_004",
      "type": "line",
      "scene": "ts_c10_yelan_friends",
      "speaker": "narrator",
      "character": null,
      "text": "有客人来问座位，我把手机扣下，先处理眼前的事。等空下来再看，群里已经多了几张失败画面。叶岚在其中一张下面写：“今天的版本，大家水平比较平均。”",
      "next": "tc_c10_yelan_friends_005"
    },
    "tc_c10_yelan_friends_005": {
      "id": "tc_c10_yelan_friends_005",
      "type": "line",
      "scene": "ts_c10_yelan_friends",
      "speaker": "narrator",
      "character": null,
      "text": "我笑了一声。师匠从旁边走过，问是不是又输了。我说我没参加，他点点头，说那更应该保持谦虚。",
      "next": "tc_c10_yelan_friends_006"
    },
    "tc_c10_yelan_friends_006": {
      "id": "tc_c10_yelan_friends_006",
      "type": "line",
      "scene": "ts_c10_yelan_friends",
      "speaker": "narrator",
      "character": null,
      "text": "这两年，我和叶岚做了熟悉的朋友。我们没有把那次没能开始的恋爱挂在每一句话上。她仍在保险公司做内勤，偶尔跟朋友出去玩，偶尔来参加大家的饭局；我轮班以后作息好安排了一些，也不是每次她在线，我就必须出现。",
      "next": "tc_c10_yelan_friends_007"
    },
    "tc_c10_yelan_friends_007": {
      "id": "tc_c10_yelan_friends_007",
      "type": "line",
      "scene": "ts_c10_yelan_friends",
      "speaker": "narrator",
      "character": null,
      "text": "我们有过一阵说话小心的时候。后来她在饭局上跟我争一家店究竟好不好吃，争到毛狼让我们下次自己去验证，气氛才又彻底松下来。我问她要不要去，她说那周没空，过一周再看。我说好，心里也没有因为这句拒绝多编一段故事。",
      "next": "tc_c10_yelan_friends_008"
    },
    "tc_c10_yelan_friends_008": {
      "id": "tc_c10_yelan_friends_008",
      "type": "line",
      "scene": "ts_c10_yelan_friends_rest_day",
      "speaker": "narrator",
      "character": "yelan",
      "text": "第一个休息日的下午，我们跟朋友一起打球。叶岚站在桌子另一边，发球前十分认真地提醒我，她最近练过两次。我说自己只练过捡球。她没信，第一局打得很谨慎，等发现我确实没有进步，才终于笑出声音。",
      "next": "tc_c10_yelan_friends_009",
      "expression": "outfit-casual"
    },
    "tc_c10_yelan_friends_009": {
      "id": "tc_c10_yelan_friends_009",
      "type": "line",
      "scene": "ts_c10_yelan_friends_rest_day",
      "speaker": "narrator",
      "character": "yelan",
      "text": "中途换人，她坐到一边喝水。我把球拍递给下一位朋友，坐在离她一个椅子的地方。她问我轮班以后感觉怎么样，我说有好有坏，至少今天能来。",
      "next": "tc_c10_yelan_friends_010",
      "expression": "outfit-casual"
    },
    "tc_c10_yelan_friends_010": {
      "id": "tc_c10_yelan_friends_010",
      "type": "line",
      "scene": "ts_c10_yelan_friends_rest_day",
      "speaker": "narrator",
      "character": "yelan",
      "text": "“那就行。”她说，“下次不来也说一声，别让大家猜你是不是睡过头。”",
      "next": "tc_c10_yelan_friends_011",
      "expression": "outfit-casual"
    },
    "tc_c10_yelan_friends_011": {
      "id": "tc_c10_yelan_friends_011",
      "type": "line",
      "scene": "ts_c10_yelan_friends_rest_day",
      "speaker": "wenwen",
      "character": "yelan",
      "text": "“你可以直接猜。”",
      "next": "tc_c10_yelan_friends_012",
      "expression": "outfit-casual"
    },
    "tc_c10_yelan_friends_012": {
      "id": "tc_c10_yelan_friends_012",
      "type": "line",
      "scene": "ts_c10_yelan_friends_rest_day",
      "speaker": "yelan",
      "character": "yelan",
      "text": "“我现在不靠猜了。”",
      "next": "tc_c10_yelan_friends_013",
      "expression": "outfit-casual",
      "avatarExpression": "outfit-casual"
    },
    "tc_c10_yelan_friends_013": {
      "id": "tc_c10_yelan_friends_013",
      "type": "line",
      "scene": "ts_c10_yelan_friends_rest_day",
      "speaker": "narrator",
      "character": "yelan",
      "text": "轮到她上场，她把水放下，拎起球拍。有人在旁边起哄，说她今天认真得像比赛。叶岚回头笑了一下，发出一个漂亮的球，又立刻因为第二个球打歪而懊恼地抬起头。",
      "next": "tc_c10_yelan_friends_014",
      "expression": "outfit-casual"
    },
    "tc_c10_yelan_friends_014": {
      "id": "tc_c10_yelan_friends_014",
      "type": "line",
      "scene": "ts_c10_yelan_friends_rest_day",
      "speaker": "narrator",
      "character": "yelan",
      "text": "我坐在椅子上看着，知道那两个瞬间都是她。她也不必因为我曾经认真靠近过，就把每一个未来的位置都留给我。",
      "next": "tc_c10_yelan_end_friends",
      "expression": "outfit-casual"
    },
    "tc_c10_yelan_entry": {
      "id": "tc_c10_yelan_entry",
      "type": "gate",
      "scene": "ts_c10_yelan_dating",
      "cases": [
        {
          "flag": "yelanRelationship",
          "value": "dating",
          "next": "tc_c10_yelan_dating_001"
        },
        {
          "flag": "yelanRelationship",
          "value": "friends",
          "next": "tc_c10_yelan_friends_001"
        }
      ],
      "default": null,
      "exhaustive": true
    },
    "tc_c10_yelan_end_dating": {
      "id": "tc_c10_yelan_end_dating",
      "type": "end",
      "scene": "ts_c10_yelan_dating_lights",
      "character": "yelan",
      "title": "一起买完这袋米",
      "text": "",
      "endingId": "tc_c10_yelan_end_dating"
    },
    "tc_c10_yelan_end_friends": {
      "id": "tc_c10_yelan_end_friends",
      "type": "end",
      "scene": "ts_c10_yelan_friends_rest_day",
      "character": "yelan",
      "title": "今晚少一个位置",
      "text": "",
      "endingId": "tc_c10_yelan_end_friends"
    },
    "tc_c03_piao_entry": {
      "id": "tc_c03_piao_entry",
      "type": "line",
      "scene": "ts_c03_piao_sweet_jelly",
      "speaker": "narrator",
      "character": null,
      "text": "睡醒以后，我花了十分钟找另一只袜子。最后它在枕头底下，卷成一个很小的球。",
      "next": "tc_c03_piao_sweet_jelly_002"
    },
    "tc_c03_piao_sweet_jelly_002": {
      "id": "tc_c03_piao_sweet_jelly_002",
      "type": "line",
      "scene": "ts_c03_piao_sweet_jelly_meeting",
      "speaker": "narrator",
      "character": "piao",
      "text": "飘站在巷口，低头看手机上的时间。我举起手，还没开口，她先说：“没迟到。你不用一来就解释。”",
      "next": "tc_c03_piao_sweet_jelly_003"
    },
    "tc_c03_piao_sweet_jelly_003": {
      "id": "tc_c03_piao_sweet_jelly_003",
      "type": "line",
      "scene": "ts_c03_piao_sweet_jelly_meeting",
      "speaker": "wenwen",
      "character": "piao",
      "text": "“我准备说今天有太阳。”",
      "next": "tc_c03_piao_sweet_jelly_004"
    },
    "tc_c03_piao_sweet_jelly_004": {
      "id": "tc_c03_piao_sweet_jelly_004",
      "type": "line",
      "scene": "ts_c03_piao_sweet_jelly_meeting",
      "speaker": "narrator",
      "character": "piao",
      "text": "她抬头看了一眼头顶灰白的云。“你这人，连天气也嘴硬。”",
      "next": "tc_c03_piao_sweet_jelly_005"
    },
    "tc_c03_piao_sweet_jelly_005": {
      "id": "tc_c03_piao_sweet_jelly_005",
      "type": "line",
      "scene": "ts_c03_piao_sweet_jelly_meeting",
      "speaker": "narrator",
      "character": "piao",
      "text": "她今天没带装小册子的布袋，只拎了一把伞。第七天吃饭时，她说改天想尝这条街的凉糕；我以为是饭桌上的随口一提，直到昨天她发来两个字：去不去。",
      "next": "tc_c03_piao_sweet_jelly_006"
    },
    "tc_c03_piao_sweet_jelly_006": {
      "id": "tc_c03_piao_sweet_jelly_006",
      "type": "line",
      "scene": "ts_c03_piao_sweet_jelly_jelly_shop",
      "speaker": "narrator",
      "character": "piao",
      "text": "店里只剩一张靠门的小桌。老板问甜一点还是淡一点，我看向她，她也看向我。",
      "next": "tc_c03_piao_sweet_jelly_007"
    },
    "tc_c03_piao_sweet_jelly_007": {
      "id": "tc_c03_piao_sweet_jelly_007",
      "type": "line",
      "scene": "ts_c03_piao_sweet_jelly_jelly_shop",
      "speaker": "narrator",
      "character": "piao",
      "text": "“我的你别负责。”她说，“我要甜的。”",
      "next": "tc_c03_piao_sweet_jelly_008"
    },
    "tc_c03_piao_sweet_jelly_008": {
      "id": "tc_c03_piao_sweet_jelly_008",
      "type": "line",
      "scene": "ts_c03_piao_sweet_jelly_jelly_shop",
      "speaker": "narrator",
      "character": "piao",
      "text": "我为了显得自己很有主意，要了淡的。第一口下去，感觉嘴里只有凉。",
      "next": "tc_c03_piao_sweet_jelly_009"
    },
    "tc_c03_piao_sweet_jelly_009": {
      "id": "tc_c03_piao_sweet_jelly_009",
      "type": "line",
      "scene": "ts_c03_piao_sweet_jelly_jelly_shop",
      "speaker": "narrator",
      "character": "piao",
      "text": "她盯着我的碗：“后悔了？”",
      "next": "tc_c03_piao_sweet_jelly_010"
    },
    "tc_c03_piao_sweet_jelly_010": {
      "id": "tc_c03_piao_sweet_jelly_010",
      "type": "line",
      "scene": "ts_c03_piao_sweet_jelly_jelly_shop",
      "speaker": "wenwen",
      "character": "piao",
      "text": "“一般甜。”",
      "next": "tc_c03_piao_sweet_jelly_011"
    },
    "tc_c03_piao_sweet_jelly_011": {
      "id": "tc_c03_piao_sweet_jelly_011",
      "type": "line",
      "scene": "ts_c03_piao_sweet_jelly_jelly_shop",
      "speaker": "narrator",
      "character": "piao",
      "text": "她把糖罐推过来，没笑出声，脸颊两侧的小酒窝却已经露了出来。",
      "next": "tc_c03_piao_sweet_jelly_012"
    },
    "tc_c03_piao_sweet_jelly_012": {
      "id": "tc_c03_piao_sweet_jelly_012",
      "type": "line",
      "scene": "ts_c03_piao_sweet_jelly_jelly_shop",
      "speaker": "narrator",
      "character": "piao",
      "text": "我加糖的时候手重，碗底多了一层褐色。她终于没忍住，偏过脸去笑。我也笑了，刚才想好的一串话全用不上了。",
      "next": "tc_c03_piao_sweet_jelly_013"
    },
    "tc_c03_piao_sweet_jelly_013": {
      "id": "tc_c03_piao_sweet_jelly_013",
      "type": "line",
      "scene": "ts_c03_piao_sweet_jelly_jelly_shop",
      "speaker": "narrator",
      "character": "piao",
      "text": "吃到一半，我问她今天不去收集店主的话吗。",
      "next": "tc_c03_piao_sweet_jelly_014"
    },
    "tc_c03_piao_sweet_jelly_014": {
      "id": "tc_c03_piao_sweet_jelly_014",
      "type": "line",
      "scene": "ts_c03_piao_sweet_jelly_jelly_shop",
      "speaker": "piao",
      "character": "piao",
      "text": "“今天约你吃东西。”",
      "next": "tc_c03_piao_sweet_jelly_015"
    },
    "tc_c03_piao_sweet_jelly_015": {
      "id": "tc_c03_piao_sweet_jelly_015",
      "type": "line",
      "scene": "ts_c03_piao_sweet_jelly_jelly_shop",
      "speaker": "wenwen",
      "character": "piao",
      "text": "“可以顺便。”",
      "next": "tc_c03_piao_sweet_jelly_016"
    },
    "tc_c03_piao_sweet_jelly_016": {
      "id": "tc_c03_piao_sweet_jelly_016",
      "type": "line",
      "scene": "ts_c03_piao_sweet_jelly_jelly_shop",
      "speaker": "narrator",
      "character": "piao",
      "text": "她停下勺子。“你有没有发现，你很喜欢给出来玩找个顺便的事？”",
      "next": "tc_c03_piao_sweet_jelly_017"
    },
    "tc_c03_piao_sweet_jelly_017": {
      "id": "tc_c03_piao_sweet_jelly_017",
      "type": "line",
      "scene": "ts_c03_piao_sweet_jelly_jelly_shop",
      "speaker": "narrator",
      "character": "piao",
      "text": "我把勺子在碗边磕了一下，声音比预想的大。",
      "next": "tc_c03_piao_sweet_jelly_018"
    },
    "tc_c03_piao_sweet_jelly_018": {
      "id": "tc_c03_piao_sweet_jelly_018",
      "type": "line",
      "scene": "ts_c03_piao_sweet_jelly_jelly_shop",
      "speaker": "wenwen",
      "character": "piao",
      "text": "“也不是。怕你专门跑一趟，结果只有这个。”",
      "next": "tc_c03_piao_sweet_jelly_019"
    },
    "tc_c03_piao_sweet_jelly_019": {
      "id": "tc_c03_piao_sweet_jelly_019",
      "type": "line",
      "scene": "ts_c03_piao_sweet_jelly_jelly_shop",
      "speaker": "narrator",
      "character": "piao",
      "text": "飘伸出手指，点了一下我那碗快变成糖水的凉糕。",
      "next": "tc_c03_piao_sweet_jelly_020"
    },
    "tc_c03_piao_sweet_jelly_020": {
      "id": "tc_c03_piao_sweet_jelly_020",
      "type": "line",
      "scene": "ts_c03_piao_sweet_jelly_jelly_shop",
      "speaker": "piao",
      "character": "piao",
      "text": "“已经挺有意思了。”",
      "next": "tc_c03_piao_sweet_jelly_021"
    },
    "tc_c03_piao_sweet_jelly_021": {
      "id": "tc_c03_piao_sweet_jelly_021",
      "type": "line",
      "scene": "ts_c03_piao_sweet_jelly_puddles",
      "speaker": "narrator",
      "character": "piao",
      "text": "回去时她领我绕过一段积水。她走在干处，伞尖朝向自己那边。我想说下次我请，想想刚才的糖罐，又换了一句。",
      "next": "tc_c03_piao_sweet_jelly_022"
    },
    "tc_c03_piao_sweet_jelly_022": {
      "id": "tc_c03_piao_sweet_jelly_022",
      "type": "line",
      "scene": "ts_c03_piao_sweet_jelly_puddles",
      "speaker": "wenwen",
      "character": "piao",
      "text": "“下次我直接要甜的。”",
      "next": "tc_c03_piao_sweet_jelly_023"
    },
    "tc_c03_piao_sweet_jelly_023": {
      "id": "tc_c03_piao_sweet_jelly_023",
      "type": "line",
      "scene": "ts_c03_piao_sweet_jelly_puddles",
      "speaker": "piao",
      "character": "piao",
      "text": "“下次可以吃别的。”",
      "next": "tc_c03_piao_sweet_jelly_024"
    },
    "tc_c03_piao_sweet_jelly_024": {
      "id": "tc_c03_piao_sweet_jelly_024",
      "type": "line",
      "scene": "ts_c03_piao_sweet_jelly_puddles",
      "speaker": "narrator",
      "character": "piao",
      "text": "她说得很自然。我盯着前面的路，走了几步才答了声好。",
      "next": "tc_c03_piao_leave_blank_001"
    },
    "tc_c03_piao_leave_blank_001": {
      "id": "tc_c03_piao_leave_blank_001",
      "type": "line",
      "scene": "ts_c03_piao_leave_blank",
      "speaker": "narrator",
      "character": "piao",
      "text": "今天睡够以后，眼皮总算不发沉。我在小店门外找到飘，她正蹲着看一只借着门槛打瞌睡的花猫。",
      "next": "tc_c03_piao_leave_blank_002"
    },
    "tc_c03_piao_leave_blank_002": {
      "id": "tc_c03_piao_leave_blank_002",
      "type": "line",
      "scene": "ts_c03_piao_leave_blank",
      "speaker": "narrator",
      "character": "piao",
      "text": "“你再靠近，它就会让你买东西。”我说。",
      "next": "tc_c03_piao_leave_blank_003"
    },
    "tc_c03_piao_leave_blank_003": {
      "id": "tc_c03_piao_leave_blank_003",
      "type": "line",
      "scene": "ts_c03_piao_leave_blank",
      "speaker": "piao",
      "character": "piao",
      "text": "“是你在收钱，还是猫在收钱？”",
      "next": "tc_c03_piao_leave_blank_004"
    },
    "tc_c03_piao_leave_blank_004": {
      "id": "tc_c03_piao_leave_blank_004",
      "type": "line",
      "scene": "ts_c03_piao_leave_blank",
      "speaker": "narrator",
      "character": "piao",
      "text": "我也蹲下来。猫抬眼看了我们一下，又睡了。",
      "next": "tc_c03_piao_leave_blank_005"
    },
    "tc_c03_piao_leave_blank_005": {
      "id": "tc_c03_piao_leave_blank_005",
      "type": "line",
      "scene": "ts_c03_piao_leave_blank",
      "speaker": "narrator",
      "character": "piao",
      "text": "飘的布袋里露出几张订在一起的纸，封面还空着。我没伸手去拿，问她能不能看。她翻到一页，把纸递给我。上面有店主讲的几句闲话，也有一个只有日期的空框。",
      "next": "tc_c03_piao_leave_blank_006"
    },
    "tc_c03_piao_leave_blank_006": {
      "id": "tc_c03_piao_leave_blank_006",
      "type": "line",
      "scene": "ts_c03_piao_leave_blank",
      "speaker": "narrator",
      "character": "piao",
      "text": "我问那一栏怎么没写。",
      "next": "tc_c03_piao_leave_blank_007"
    },
    "tc_c03_piao_leave_blank_007": {
      "id": "tc_c03_piao_leave_blank_007",
      "type": "line",
      "scene": "ts_c03_piao_leave_blank",
      "speaker": "piao",
      "character": "piao",
      "text": "“后来人家说算了。”",
      "next": "tc_c03_piao_leave_blank_008"
    },
    "tc_c03_piao_leave_blank_008": {
      "id": "tc_c03_piao_leave_blank_008",
      "type": "line",
      "scene": "ts_c03_piao_leave_blank",
      "speaker": "wenwen",
      "character": "piao",
      "text": "“那你不是白去了？”",
      "next": "tc_c03_piao_leave_blank_009"
    },
    "tc_c03_piao_leave_blank_009": {
      "id": "tc_c03_piao_leave_blank_009",
      "type": "line",
      "scene": "ts_c03_piao_leave_blank",
      "speaker": "narrator",
      "character": "piao",
      "text": "她揉了揉蹲麻的腿：“在那里吃了碗面，还知道猫不叫咪咪，叫老板。也不算。”",
      "next": "tc_c03_piao_leave_blank_010"
    },
    "tc_c03_piao_leave_blank_010": {
      "id": "tc_c03_piao_leave_blank_010",
      "type": "line",
      "scene": "ts_c03_piao_leave_blank_bench",
      "speaker": "narrator",
      "character": "piao",
      "text": "我们买了水，在街角的长凳坐下。她看着我手里的纸，过了一会儿，说起以前在大城市做 KTV 陪酒的事。",
      "next": "tc_c03_piao_leave_blank_011"
    },
    "tc_c03_piao_leave_blank_011": {
      "id": "tc_c03_piao_leave_blank_011",
      "type": "line",
      "scene": "ts_c03_piao_leave_blank_bench",
      "speaker": "narrator",
      "character": "piao",
      "text": "她说得并不突然。刚才路过一家店，里面恰好切了一首歌，她才想到以前经常有人开头说一句话，后面就被碰杯声盖过去。",
      "next": "tc_c03_piao_leave_blank_012"
    },
    "tc_c03_piao_leave_blank_012": {
      "id": "tc_c03_piao_leave_blank_012",
      "type": "line",
      "scene": "ts_c03_piao_leave_blank_bench",
      "speaker": "narrator",
      "character": "piao",
      "text": "“有的是真的想说，有的只是想让人听着。”她说，“我现在也分不清。不是回来以后就什么都懂了。”",
      "next": "tc_c03_piao_leave_blank_013"
    },
    "tc_c03_piao_leave_blank_013": {
      "id": "tc_c03_piao_leave_blank_013",
      "type": "line",
      "scene": "ts_c03_piao_leave_blank_bench",
      "speaker": "narrator",
      "character": "piao",
      "text": "我捏着瓶盖，想说句够稳妥的话，半天没选出来。",
      "next": "tc_c03_piao_leave_blank_014"
    },
    "tc_c03_piao_leave_blank_014": {
      "id": "tc_c03_piao_leave_blank_014",
      "type": "line",
      "scene": "ts_c03_piao_leave_blank_bench",
      "speaker": "narrator",
      "character": "piao",
      "text": "她看了我一眼。“水快被你拧漏了。”",
      "next": "tc_c03_piao_leave_blank_015"
    },
    "tc_c03_piao_leave_blank_015": {
      "id": "tc_c03_piao_leave_blank_015",
      "type": "line",
      "scene": "ts_c03_piao_leave_blank_bench",
      "speaker": "narrator",
      "character": "piao",
      "text": "我低头，把松开的盖子重新拧紧。",
      "next": "tc_c03_piao_leave_blank_016"
    },
    "tc_c03_piao_leave_blank_016": {
      "id": "tc_c03_piao_leave_blank_016",
      "type": "line",
      "scene": "ts_c03_piao_leave_blank_bench",
      "speaker": "wenwen",
      "character": "piao",
      "text": "“我不知道接什么。”",
      "next": "tc_c03_piao_leave_blank_017"
    },
    "tc_c03_piao_leave_blank_017": {
      "id": "tc_c03_piao_leave_blank_017",
      "type": "line",
      "scene": "ts_c03_piao_leave_blank_bench",
      "speaker": "piao",
      "character": "piao",
      "text": "“那就先别接。”",
      "next": "tc_c03_piao_leave_blank_018"
    },
    "tc_c03_piao_leave_blank_018": {
      "id": "tc_c03_piao_leave_blank_018",
      "type": "line",
      "scene": "ts_c03_piao_leave_blank_bench",
      "speaker": "narrator",
      "character": "piao",
      "text": "我们真的安静了一会儿。街边有人把拖鞋甩掉了，单脚跳回去找。飘笑了，我跟着看，才从刚才那种非得说对一句话的紧张里松下来。",
      "next": "tc_c03_piao_leave_blank_019"
    },
    "tc_c03_piao_leave_blank_019": {
      "id": "tc_c03_piao_leave_blank_019",
      "type": "line",
      "scene": "ts_c03_piao_leave_blank_bench",
      "speaker": "narrator",
      "character": "piao",
      "text": "我把小册子还给她：“这几句话，你还要改？”",
      "next": "tc_c03_piao_leave_blank_020"
    },
    "tc_c03_piao_leave_blank_020": {
      "id": "tc_c03_piao_leave_blank_020",
      "type": "line",
      "scene": "ts_c03_piao_leave_blank_bench",
      "speaker": "piao",
      "character": "piao",
      "text": "“标点改改。别人的话，不替人家说得特别漂亮。”",
      "next": "tc_c03_piao_leave_blank_021"
    },
    "tc_c03_piao_leave_blank_021": {
      "id": "tc_c03_piao_leave_blank_021",
      "type": "line",
      "scene": "ts_c03_piao_leave_blank_bench",
      "speaker": "wenwen",
      "character": "piao",
      "text": "“我刚才也差点把自己的话说漂亮。”",
      "next": "tc_c03_piao_leave_blank_022"
    },
    "tc_c03_piao_leave_blank_022": {
      "id": "tc_c03_piao_leave_blank_022",
      "type": "line",
      "scene": "ts_c03_piao_leave_blank_bench",
      "speaker": "narrator",
      "character": "piao",
      "text": "她用纸角轻轻碰了碰我的手背。",
      "next": "tc_c03_piao_leave_blank_023"
    },
    "tc_c03_piao_leave_blank_023": {
      "id": "tc_c03_piao_leave_blank_023",
      "type": "line",
      "scene": "ts_c03_piao_leave_blank_bench",
      "speaker": "piao",
      "character": "piao",
      "text": "“我看出来了。幸好你没成功。”",
      "next": "tc_c03_piao_leave_blank_024"
    },
    "tc_c03_piao_leave_blank_024": {
      "id": "tc_c03_piao_leave_blank_024",
      "type": "line",
      "scene": "ts_c03_piao_leave_blank_bench",
      "speaker": "narrator",
      "character": "piao",
      "text": "临走，她主动说下一次见面不带这些纸，让我挑个地方。我说不一定挑得好，她说先挑，真不好吃再一起骂。",
      "next": "tc_c03_piao_say_clearly_001"
    },
    "tc_c03_piao_say_clearly_001": {
      "id": "tc_c03_piao_say_clearly_001",
      "type": "line",
      "scene": "ts_c03_piao_say_clearly",
      "speaker": "narrator",
      "character": null,
      "text": "这天是我的休班。我睡到自然醒，给飘发了张窗外没有下雨的照片。她回了一张同样灰的天，说你那边也没比我这边晴多少。",
      "next": "tc_c03_piao_say_clearly_002"
    },
    "tc_c03_piao_say_clearly_002": {
      "id": "tc_c03_piao_say_clearly_002",
      "type": "line",
      "scene": "ts_c03_piao_say_clearly_river",
      "speaker": "narrator",
      "character": "piao",
      "text": "我们在河边的小路碰头。她带了两瓶水，我带了一袋饼，坐下来才发现都是甜的。",
      "next": "tc_c03_piao_say_clearly_003",
      "cg": "tc-cg-piao-choice"
    },
    "tc_c03_piao_say_clearly_003": {
      "id": "tc_c03_piao_say_clearly_003",
      "type": "line",
      "scene": "ts_c03_piao_say_clearly_river",
      "speaker": "narrator",
      "character": "piao",
      "text": "“现在谁也别嫌谁。”她说。",
      "next": "tc_c03_piao_say_clearly_004",
      "cg": "tc-cg-piao-choice"
    },
    "tc_c03_piao_say_clearly_004": {
      "id": "tc_c03_piao_say_clearly_004",
      "type": "line",
      "scene": "ts_c03_piao_say_clearly_river",
      "speaker": "narrator",
      "character": "piao",
      "text": "我们把饼拆开，一人拿一块。她咬了一口，问我最近给她发消息，会不会总要删了重写。",
      "next": "tc_c03_piao_say_clearly_005",
      "cg": "tc-cg-piao-choice"
    },
    "tc_c03_piao_say_clearly_005": {
      "id": "tc_c03_piao_say_clearly_005",
      "type": "line",
      "scene": "ts_c03_piao_say_clearly_river",
      "speaker": "wenwen",
      "character": "piao",
      "text": "“有那么明显？”",
      "next": "tc_c03_piao_say_clearly_006",
      "cg": "tc-cg-piao-choice"
    },
    "tc_c03_piao_say_clearly_006": {
      "id": "tc_c03_piao_say_clearly_006",
      "type": "line",
      "scene": "ts_c03_piao_say_clearly_river",
      "speaker": "piao",
      "character": "piao",
      "text": "“你有一次‘在吗’发了又撤回。最后问我菜场几点关门。”",
      "next": "tc_c03_piao_say_clearly_007",
      "cg": "tc-cg-piao-choice"
    },
    "tc_c03_piao_say_clearly_007": {
      "id": "tc_c03_piao_say_clearly_007",
      "type": "line",
      "scene": "ts_c03_piao_say_clearly_river",
      "speaker": "narrator",
      "character": "piao",
      "text": "我看向另一边的树。她没有继续取笑，等我转回来，神色已经认真了。",
      "next": "tc_c03_piao_say_clearly_008",
      "cg": "tc-cg-piao-choice"
    },
    "tc_c03_piao_say_clearly_008": {
      "id": "tc_c03_piao_say_clearly_008",
      "type": "line",
      "scene": "ts_c03_piao_say_clearly_river",
      "speaker": "piao",
      "character": "piao",
      "text": "“文文，我对你有好感。不是觉得你能帮我做什么，也不是因为你正好回来了。”",
      "next": "tc_c03_piao_say_clearly_009",
      "cg": "tc-cg-piao-choice"
    },
    "tc_c03_piao_say_clearly_009": {
      "id": "tc_c03_piao_say_clearly_009",
      "type": "line",
      "scene": "ts_c03_piao_say_clearly_river",
      "speaker": "narrator",
      "character": "piao",
      "text": "她把装水的袋子收好，免得风吹走。",
      "next": "tc_c03_piao_say_clearly_010",
      "cg": "tc-cg-piao-choice"
    },
    "tc_c03_piao_say_clearly_010": {
      "id": "tc_c03_piao_say_clearly_010",
      "type": "line",
      "scene": "ts_c03_piao_say_clearly_river",
      "speaker": "piao",
      "character": "piao",
      "text": "“但我想问清楚。你是想跟我交往，还是觉得做朋友更舒服？你说哪个，我就按哪个往下过。别因为怕我难堪，先答应一个你不想要的。”",
      "next": "tc_c03_piao_relationship_choice",
      "cg": "tc-cg-piao-choice"
    },
    "tc_c03_piao_dating_001": {
      "id": "tc_c03_piao_dating_001",
      "type": "line",
      "scene": "ts_c03_piao_dating",
      "speaker": "narrator",
      "character": "piao",
      "text": "我把第一句话说完，飘低头看了看自己手里的半块饼。",
      "next": "tc_c03_piao_dating_002"
    },
    "tc_c03_piao_dating_002": {
      "id": "tc_c03_piao_dating_002",
      "type": "line",
      "scene": "ts_c03_piao_dating",
      "speaker": "piao",
      "character": "piao",
      "text": "“你等一下。”",
      "next": "tc_c03_piao_dating_003"
    },
    "tc_c03_piao_dating_003": {
      "id": "tc_c03_piao_dating_003",
      "type": "line",
      "scene": "ts_c03_piao_dating",
      "speaker": "narrator",
      "character": "piao",
      "text": "她三两口吃完，找纸擦手。我以为她还要想，正准备把刚才的话补得更完整，她已经把手放在我们之间。",
      "next": "tc_c03_piao_dating_004"
    },
    "tc_c03_piao_dating_004": {
      "id": "tc_c03_piao_dating_004",
      "type": "line",
      "scene": "ts_c03_piao_dating",
      "speaker": "piao",
      "character": "piao",
      "text": "“现在可以了。”",
      "next": "tc_c03_piao_dating_005"
    },
    "tc_c03_piao_dating_005": {
      "id": "tc_c03_piao_dating_005",
      "type": "line",
      "scene": "ts_c03_piao_dating",
      "speaker": "narrator",
      "character": "piao",
      "text": "我握住她的手。她的指尖比我凉一点，手心却是暖的。我们握得很僵，谁也没找到合适的姿势，直到她小声说你拇指压到我了。",
      "next": "tc_c03_piao_dating_006"
    },
    "tc_c03_piao_dating_006": {
      "id": "tc_c03_piao_dating_006",
      "type": "line",
      "scene": "ts_c03_piao_dating",
      "speaker": "narrator",
      "character": "piao",
      "text": "我赶紧松开。",
      "next": "tc_c03_piao_dating_007"
    },
    "tc_c03_piao_dating_007": {
      "id": "tc_c03_piao_dating_007",
      "type": "line",
      "scene": "ts_c03_piao_dating",
      "speaker": "piao",
      "character": "piao",
      "text": "“不是让你全放开。”",
      "next": "tc_c03_piao_dating_008"
    },
    "tc_c03_piao_dating_008": {
      "id": "tc_c03_piao_dating_008",
      "type": "line",
      "scene": "ts_c03_piao_dating",
      "speaker": "narrator",
      "character": "piao",
      "text": "她重新把手递过来。这次我们都笑了。",
      "next": "tc_c03_piao_dating_009"
    },
    "tc_c03_piao_dating_009": {
      "id": "tc_c03_piao_dating_009",
      "type": "line",
      "scene": "ts_c03_piao_dating",
      "speaker": "narrator",
      "character": "piao",
      "text": "我问是不是应该做点什么，比如请她吃一顿特别的饭。她说今天这袋饼就够特别，全是一个口味。",
      "next": "tc_c03_piao_dating_010"
    },
    "tc_c03_piao_dating_010": {
      "id": "tc_c03_piao_dating_010",
      "type": "line",
      "scene": "ts_c03_piao_dating",
      "speaker": "wenwen",
      "character": "piao",
      "text": "“下次买别的。”",
      "next": "tc_c03_piao_dating_011"
    },
    "tc_c03_piao_dating_011": {
      "id": "tc_c03_piao_dating_011",
      "type": "line",
      "scene": "ts_c03_piao_dating",
      "speaker": "piao",
      "character": "piao",
      "text": "“先记得下次。”",
      "next": "tc_c03_piao_dating_012"
    },
    "tc_c03_piao_dating_012": {
      "id": "tc_c03_piao_dating_012",
      "type": "line",
      "scene": "ts_c03_piao_dating",
      "speaker": "narrator",
      "character": "piao",
      "text": "回去的路上，我们没一直牵着。遇到窄处就松开，到了宽一点的路，她又朝我伸手。她问我是不是饿了，我说刚才只顾讲话，饼还剩了一半。她让我拿出来，掰走一小块。走到宽一点的路，我腾出手，接住她重新伸过来的手。",
      "next": "tc_c03_common_exit"
    },
    "tc_c03_piao_friends_001": {
      "id": "tc_c03_piao_friends_001",
      "type": "line",
      "scene": "ts_c03_piao_friends",
      "speaker": "narrator",
      "character": "piao",
      "text": "我说完以后，飘沉默了几秒。她抿了一口水，把盖子拧上。",
      "next": "tc_c03_piao_friends_002"
    },
    "tc_c03_piao_friends_002": {
      "id": "tc_c03_piao_friends_002",
      "type": "line",
      "scene": "ts_c03_piao_friends",
      "speaker": "piao",
      "character": "piao",
      "text": "“好。那我知道了。”",
      "next": "tc_c03_piao_friends_003"
    },
    "tc_c03_piao_friends_003": {
      "id": "tc_c03_piao_friends_003",
      "type": "line",
      "scene": "ts_c03_piao_friends",
      "speaker": "narrator",
      "character": "piao",
      "text": "我想说是不是我想得太多，她摇头。",
      "next": "tc_c03_piao_friends_004"
    },
    "tc_c03_piao_friends_004": {
      "id": "tc_c03_piao_friends_004",
      "type": "line",
      "scene": "ts_c03_piao_friends",
      "speaker": "piao",
      "character": "piao",
      "text": "“你别把刚才收回去。问之前我就知道，有两个答案。”",
      "next": "tc_c03_piao_friends_005"
    },
    "tc_c03_piao_friends_005": {
      "id": "tc_c03_piao_friends_005",
      "type": "line",
      "scene": "ts_c03_piao_friends_crossroad",
      "speaker": "narrator",
      "character": "piao",
      "text": "她承认自己有一点失落，今天不想再绕很远。我说那我们走到前面路口，她点头，没有硬装得跟之前一模一样。",
      "next": "tc_c03_piao_friends_006"
    },
    "tc_c03_piao_friends_006": {
      "id": "tc_c03_piao_friends_006",
      "type": "line",
      "scene": "ts_c03_piao_friends_crossroad",
      "speaker": "narrator",
      "character": "piao",
      "text": "到路口时，我问那袋饼她还带不带。她挑走两块，把剩下的塞还给我。",
      "next": "tc_c03_piao_friends_007"
    },
    "tc_c03_piao_friends_007": {
      "id": "tc_c03_piao_friends_007",
      "type": "line",
      "scene": "ts_c03_piao_friends_crossroad",
      "speaker": "piao",
      "character": "piao",
      "text": "“甜过头了。下次买咸的。”",
      "next": "tc_c03_piao_friends_008"
    },
    "tc_c03_piao_friends_008": {
      "id": "tc_c03_piao_friends_008",
      "type": "line",
      "scene": "ts_c03_piao_friends_busstop",
      "speaker": "narrator",
      "character": "piao",
      "text": "我没马上拿这句话保证友谊永远不变。我们各自站了一会儿，等她的车到了，她才抬手挥了挥。",
      "next": "tc_c03_piao_friends_009"
    },
    "tc_c03_piao_friends_009": {
      "id": "tc_c03_piao_friends_009",
      "type": "line",
      "scene": "ts_c03_piao_friends_message",
      "speaker": "narrator",
      "character": null,
      "text": "晚上我收到她的消息：到家了。你那两块记得封好，放潮了不好吃。",
      "next": "tc_c03_piao_friends_010"
    },
    "tc_c03_piao_friends_010": {
      "id": "tc_c03_piao_friends_010",
      "type": "line",
      "scene": "ts_c03_piao_friends_message",
      "speaker": "narrator",
      "character": null,
      "text": "我回她好，又问下次朋友吃饭还叫不叫她。她回：“当然叫。别单独给我安排一个尴尬席。”",
      "next": "tc_c03_piao_friends_011"
    },
    "tc_c03_piao_friends_011": {
      "id": "tc_c03_piao_friends_011",
      "type": "line",
      "scene": "ts_c03_piao_friends_message",
      "speaker": "narrator",
      "character": null,
      "text": "我笑着把袋口夹好。窗户外面开始下雨，我没有再发一个“以后也许”。",
      "next": "tc_c03_common_exit"
    },
    "tc_c03_piao_relationship_choice": {
      "id": "tc_c03_piao_relationship_choice",
      "type": "choice",
      "scene": "ts_c03_piao_say_clearly_river",
      "character": "piao",
      "text": "",
      "flag": "piaoRelationship",
      "choices": [
        {
          "label": "我想跟你交往。以后约你，不再拿菜场当借口。",
          "value": "dating",
          "next": "tc_c03_piao_dating_001"
        },
        {
          "label": "我很喜欢跟你待着，但现在想要的是朋友关系。我不拿含糊的话留住你。",
          "value": "friends",
          "next": "tc_c03_piao_friends_001"
        }
      ]
    },
    "tc_c04_piao_entry": {
      "id": "tc_c04_piao_entry",
      "type": "line",
      "scene": "ts_c04_piao_two_plans",
      "speaker": "narrator",
      "character": "piao",
      "text": "我补完觉出门，走到约好的小卖部门口，雨正好大起来。飘把伞收在脚边，裤脚湿了一小截。我问她是不是等久了，她举起刚买的薄荷糖。",
      "next": "tc_c04_piao_two_plans_002"
    },
    "tc_c04_piao_two_plans_002": {
      "id": "tc_c04_piao_two_plans_002",
      "type": "line",
      "scene": "ts_c04_piao_two_plans",
      "speaker": "piao",
      "character": "piao",
      "text": "“刚付钱。老板还问我是不是上次那个要甜凉糕的。”",
      "next": "tc_c04_piao_two_plans_003"
    },
    "tc_c04_piao_two_plans_003": {
      "id": "tc_c04_piao_two_plans_003",
      "type": "line",
      "scene": "ts_c04_piao_two_plans",
      "speaker": "wenwen",
      "character": "piao",
      "text": "“他记性挺好。”",
      "next": "tc_c04_piao_two_plans_004"
    },
    "tc_c04_piao_two_plans_004": {
      "id": "tc_c04_piao_two_plans_004",
      "type": "line",
      "scene": "ts_c04_piao_two_plans",
      "speaker": "piao",
      "character": "piao",
      "text": "“主要是你把糖加成了酱。”",
      "next": "tc_c04_piao_two_plans_005"
    },
    "tc_c04_piao_two_plans_005": {
      "id": "tc_c04_piao_two_plans_005",
      "type": "line",
      "scene": "ts_c04_piao_two_plans",
      "speaker": "narrator",
      "character": "piao",
      "text": "我们本来要沿河走，眼下显然走不了。她隔着雨帘看了看对面的街，说有两个办法：在棚子下等一等，或者从连着屋檐的旧街绕过去。她不急着替我挑，也没把天气不好算成谁的失误。",
      "next": "tc_c04_piao_outing_choice"
    },
    "tc_c04_piao_paperboat_001": {
      "id": "tc_c04_piao_paperboat_001",
      "type": "line",
      "scene": "ts_c04_piao_paperboat",
      "speaker": "narrator",
      "character": "piao",
      "text": "我说自己小时候很会折船。飘把收据铺平，说那你先折，我看看。",
      "next": "tc_c04_piao_paperboat_002"
    },
    "tc_c04_piao_paperboat_002": {
      "id": "tc_c04_piao_paperboat_002",
      "type": "line",
      "scene": "ts_c04_piao_paperboat",
      "speaker": "narrator",
      "character": "piao",
      "text": "纸到我手里才发现，所谓很会，是最后记得船长什么样，前面几步完全没印象。我折了一个尖尖的东西，横看像帽子，竖看像包子。",
      "next": "tc_c04_piao_paperboat_003"
    },
    "tc_c04_piao_paperboat_003": {
      "id": "tc_c04_piao_paperboat_003",
      "type": "line",
      "scene": "ts_c04_piao_paperboat",
      "speaker": "narrator",
      "character": "piao",
      "text": "她托着腮，等我宣布完成。",
      "next": "tc_c04_piao_paperboat_004"
    },
    "tc_c04_piao_paperboat_004": {
      "id": "tc_c04_piao_paperboat_004",
      "type": "line",
      "scene": "ts_c04_piao_paperboat",
      "speaker": "piao",
      "character": "piao",
      "text": "“这是靠什么浮？”",
      "next": "tc_c04_piao_paperboat_005"
    },
    "tc_c04_piao_paperboat_005": {
      "id": "tc_c04_piao_paperboat_005",
      "type": "line",
      "scene": "ts_c04_piao_paperboat",
      "speaker": "wenwen",
      "character": "piao",
      "text": "“信念。”",
      "next": "tc_c04_piao_paperboat_006"
    },
    "tc_c04_piao_paperboat_006": {
      "id": "tc_c04_piao_paperboat_006",
      "type": "line",
      "scene": "ts_c04_piao_paperboat",
      "speaker": "narrator",
      "character": "piao",
      "text": "她终于笑出声，拿另一张收据试了一遍，也没有成功。两只歪东西排在柜台旁边，老板过来收钱，看了半天，问我们是不是给猫折碗。",
      "next": "tc_c04_piao_paperboat_007"
    },
    "tc_c04_piao_paperboat_007": {
      "id": "tc_c04_piao_paperboat_007",
      "type": "line",
      "scene": "ts_c04_piao_paperboat",
      "speaker": "narrator",
      "character": "piao",
      "text": "我们没把纸扔进积水。雨小了，飘把自己的折纸压平，留我的那只夹进布袋外层，说以后有证据，省得我吹自己手巧。",
      "next": "tc_c04_piao_relationship_gate"
    },
    "tc_c04_piao_signs_001": {
      "id": "tc_c04_piao_signs_001",
      "type": "line",
      "scene": "ts_c04_piao_signs",
      "speaker": "narrator",
      "character": "piao",
      "text": "旧街的招牌叠着招牌。我们在一家杂货店门口停下来，看见新牌子后面露出半个“发”字。",
      "next": "tc_c04_piao_signs_002"
    },
    "tc_c04_piao_signs_002": {
      "id": "tc_c04_piao_signs_002",
      "type": "line",
      "scene": "ts_c04_piao_signs",
      "speaker": "narrator",
      "character": "piao",
      "text": "我猜理发店，飘猜批发部。争了两句，店主推开门，说以前这里卖沙发。",
      "next": "tc_c04_piao_signs_003"
    },
    "tc_c04_piao_signs_003": {
      "id": "tc_c04_piao_signs_003",
      "type": "line",
      "scene": "ts_c04_piao_signs",
      "speaker": "narrator",
      "character": "piao",
      "text": "她看着我，我看着她，一起往前走了好几步才笑起来。",
      "next": "tc_c04_piao_signs_004"
    },
    "tc_c04_piao_signs_004": {
      "id": "tc_c04_piao_signs_004",
      "type": "line",
      "scene": "ts_c04_piao_signs",
      "speaker": "narrator",
      "character": "piao",
      "text": "之后每个露出来的字，我们都能猜得离谱。飘指着半个“圆”，猜馒头铺；我说可能卖台球。最后她说干脆咱们给一间不存在的店起名字，卖什么都行。",
      "next": "tc_c04_piao_signs_005"
    },
    "tc_c04_piao_signs_005": {
      "id": "tc_c04_piao_signs_005",
      "type": "line",
      "scene": "ts_c04_piao_signs",
      "speaker": "narrator",
      "character": "piao",
      "text": "我起了个“先坐一会儿”，她说听起来店主每天都不想营业。她起“东西都在”，我说顾客进门恐怕得自己找。",
      "next": "tc_c04_piao_signs_006"
    },
    "tc_c04_piao_signs_006": {
      "id": "tc_c04_piao_signs_006",
      "type": "line",
      "scene": "ts_c04_piao_signs",
      "speaker": "narrator",
      "character": "piao",
      "text": "我们没在纸上记，也没去问遍所有店。雨停的时候，几个莫名其妙的店名只留在两个人脑子里。",
      "next": "tc_c04_piao_relationship_gate"
    },
    "tc_c04_piao_dating_001": {
      "id": "tc_c04_piao_dating_001",
      "type": "line",
      "scene": "ts_c04_piao_dating",
      "speaker": "narrator",
      "character": "piao",
      "text": "我们走到岔路，飘伸手把我衣领的一角抚平。她动作快，收手以后却看了看四周，仿佛刚才只是顺便。",
      "next": "tc_c04_piao_dating_002"
    },
    "tc_c04_piao_dating_002": {
      "id": "tc_c04_piao_dating_002",
      "type": "line",
      "scene": "ts_c04_piao_dating",
      "speaker": "piao",
      "character": "piao",
      "text": "“你这件衣服，穿之前是不是没看？”",
      "next": "tc_c04_piao_dating_003"
    },
    "tc_c04_piao_dating_003": {
      "id": "tc_c04_piao_dating_003",
      "type": "line",
      "scene": "ts_c04_piao_dating",
      "speaker": "wenwen",
      "character": "piao",
      "text": "“看了，没看背面。”",
      "next": "tc_c04_piao_dating_004"
    },
    "tc_c04_piao_dating_004": {
      "id": "tc_c04_piao_dating_004",
      "type": "line",
      "scene": "ts_c04_piao_dating",
      "speaker": "narrator",
      "character": "piao",
      "text": "她说我很擅长给懒找一个具体理由。我握住她还没收回去的手，问她今天算不算我们第一次正式约会。",
      "next": "tc_c04_piao_dating_005"
    },
    "tc_c04_piao_dating_005": {
      "id": "tc_c04_piao_dating_005",
      "type": "line",
      "scene": "ts_c04_piao_dating",
      "speaker": "piao",
      "character": "piao",
      "text": "“前面两次不算？”",
      "next": "tc_c04_piao_dating_006"
    },
    "tc_c04_piao_dating_006": {
      "id": "tc_c04_piao_dating_006",
      "type": "line",
      "scene": "ts_c04_piao_dating",
      "speaker": "wenwen",
      "character": "piao",
      "text": "“算。但今天我能说是跟女朋友出来。”",
      "next": "tc_c04_piao_dating_007"
    },
    "tc_c04_piao_dating_007": {
      "id": "tc_c04_piao_dating_007",
      "type": "line",
      "scene": "ts_c04_piao_dating",
      "speaker": "narrator",
      "character": "piao",
      "text": "她耳朵有一点红，低头踢开鞋边的小石子。“你自己知道就行，别每个店都报一遍。”",
      "next": "tc_c04_piao_dating_008"
    },
    "tc_c04_piao_dating_008": {
      "id": "tc_c04_piao_dating_008",
      "type": "line",
      "scene": "ts_c04_piao_dating_workward",
      "speaker": "narrator",
      "character": "piao",
      "text": "她送我走到回网吧的路口。我今晚要上班，先去吃饭，她则回家。分别时她捏了捏我的手，没有把今天拖成一场撑着不肯结束的约会。",
      "next": "tc_c04_common_exit"
    },
    "tc_c04_piao_friends_001": {
      "id": "tc_c04_piao_friends_001",
      "type": "line",
      "scene": "ts_c04_piao_friends",
      "speaker": "narrator",
      "character": "piao",
      "text": "路过卖炸土豆的小摊，飘问我要不要买一份。我说买一大份，她立刻指了两只纸碗。",
      "next": "tc_c04_piao_friends_002"
    },
    "tc_c04_piao_friends_002": {
      "id": "tc_c04_piao_friends_002",
      "type": "line",
      "scene": "ts_c04_piao_friends",
      "speaker": "piao",
      "character": "piao",
      "text": "“你吃辣的，我不想每口都挑。”",
      "next": "tc_c04_piao_friends_003"
    },
    "tc_c04_piao_friends_003": {
      "id": "tc_c04_piao_friends_003",
      "type": "line",
      "scene": "ts_c04_piao_friends",
      "speaker": "narrator",
      "character": "piao",
      "text": "我们站着各吃各的。聊到毛狼最近发的演出照片，她笑他主持时穿得那么正经，合影却把手里的夹板拿倒了。我说他知道一定会撤回，她把手机收好：“那就让他自己发现。”",
      "next": "tc_c04_piao_friends_004"
    },
    "tc_c04_piao_friends_004": {
      "id": "tc_c04_piao_friends_004",
      "type": "line",
      "scene": "ts_c04_piao_friends",
      "speaker": "narrator",
      "character": "piao",
      "text": "说到这里并不需要谁观察我的脸色。她可以觉得别人好笑，也可以主动去认识别人。我把吃完的纸碗扔掉，问下次朋友局她想吃什么，她说别又投票投到最后各回各家。",
      "next": "tc_c04_piao_friends_005"
    },
    "tc_c04_piao_friends_005": {
      "id": "tc_c04_piao_friends_005",
      "type": "line",
      "scene": "ts_c04_piao_friends_parting",
      "speaker": "narrator",
      "character": "piao",
      "text": "她往自己的路走，我转去吃晚饭。雨后的风吹过来，今天没有谁必须证明拒绝以后仍能立刻恢复原样。我们倒确实聊得比上次轻松。",
      "next": "tc_c04_common_exit"
    },
    "tc_c04_piao_relationship_gate": {
      "id": "tc_c04_piao_relationship_gate",
      "type": "gate",
      "scene": "ts_c04_piao_dating",
      "cases": [
        {
          "flag": "piaoRelationship",
          "value": "dating",
          "next": "tc_c04_piao_dating_001"
        },
        {
          "flag": "piaoRelationship",
          "value": "friends",
          "next": "tc_c04_piao_friends_001"
        }
      ],
      "default": null,
      "exhaustive": true
    },
    "tc_c04_piao_outing_choice": {
      "id": "tc_c04_piao_outing_choice",
      "type": "choice",
      "scene": "ts_c04_piao_two_plans",
      "character": "piao",
      "text": "",
      "flag": "piaoOuting",
      "choices": [
        {
          "label": "留下等雨",
          "value": "paperboat",
          "next": "tc_c04_piao_paperboat_001"
        },
        {
          "label": "绕进旧街",
          "value": "signs",
          "next": "tc_c04_piao_signs_001"
        }
      ]
    },
    "tc_c05_piao_entry": {
      "id": "tc_c05_piao_entry",
      "type": "line",
      "scene": "ts_c05_piao_cover",
      "speaker": "narrator",
      "character": "piao",
      "text": "前两天群里说起回声月底停业。飘给周栀回了消息，后来见我时只问了一句，第30天大家是不是在附近吃饭。我说是，她点头，把这件事记进手机。",
      "next": "tc_c05_piao_cover_002"
    },
    "tc_c05_piao_cover_002": {
      "id": "tc_c05_piao_cover_002",
      "type": "line",
      "scene": "ts_c05_piao_cover",
      "speaker": "narrator",
      "character": "piao",
      "text": "今天我们约在一家不太吵的小店。我睡醒才过来，精神比上回好。她带了小册子的封面试样，没要我帮忙做，只想听听哪个看着更舒服。",
      "next": "tc_c05_piao_cover_003"
    },
    "tc_c05_piao_cover_003": {
      "id": "tc_c05_piao_cover_003",
      "type": "line",
      "scene": "ts_c05_piao_cover",
      "speaker": "narrator",
      "character": "piao",
      "text": "我认真看完，选了颜色较淡的一张。",
      "next": "tc_c05_piao_cover_004"
    },
    "tc_c05_piao_cover_004": {
      "id": "tc_c05_piao_cover_004",
      "type": "line",
      "scene": "ts_c05_piao_cover",
      "speaker": "piao",
      "character": "piao",
      "text": "“为什么？”",
      "next": "tc_c05_piao_cover_005"
    },
    "tc_c05_piao_cover_005": {
      "id": "tc_c05_piao_cover_005",
      "type": "line",
      "scene": "ts_c05_piao_cover",
      "speaker": "wenwen",
      "character": "piao",
      "text": "“字看得清楚。”",
      "next": "tc_c05_piao_cover_006"
    },
    "tc_c05_piao_cover_006": {
      "id": "tc_c05_piao_cover_006",
      "type": "line",
      "scene": "ts_c05_piao_cover",
      "speaker": "narrator",
      "character": "piao",
      "text": "她皱着眉换了个方向：“可是另一张也看得清楚。”",
      "next": "tc_c05_piao_cover_007"
    },
    "tc_c05_piao_cover_007": {
      "id": "tc_c05_piao_cover_007",
      "type": "line",
      "scene": "ts_c05_piao_cover",
      "speaker": "narrator",
      "character": "piao",
      "text": "我接着给出第二个理由：那个有一点像学校发的通知。她终于笑了，说就知道你不是全都喜欢。",
      "next": "tc_c05_piao_cover_008"
    },
    "tc_c05_piao_cover_008": {
      "id": "tc_c05_piao_cover_008",
      "type": "line",
      "scene": "ts_c05_piao_cover",
      "speaker": "narrator",
      "character": "piao",
      "text": "笑完以后，她把两张都收了起来。",
      "next": "tc_c05_piao_cover_009"
    },
    "tc_c05_piao_cover_009": {
      "id": "tc_c05_piao_cover_009",
      "type": "line",
      "scene": "ts_c05_piao_cover",
      "speaker": "wenwen",
      "character": "piao",
      "text": "“你还在改？”",
      "next": "tc_c05_piao_cover_010"
    },
    "tc_c05_piao_cover_010": {
      "id": "tc_c05_piao_cover_010",
      "type": "line",
      "scene": "ts_c05_piao_cover",
      "speaker": "piao",
      "character": "piao",
      "text": "“嗯。改得有点烦。”",
      "next": "tc_c05_piao_cover_011"
    },
    "tc_c05_piao_cover_011": {
      "id": "tc_c05_piao_cover_011",
      "type": "line",
      "scene": "ts_c05_piao_cover",
      "speaker": "narrator",
      "character": "piao",
      "text": "她这几天找工作的事没有定下来，做册子时便格外着急。我听她说完，几乎顺口就说，你先不找也行，这个做好再说。我话说到一半，见她抬起眼。",
      "next": "tc_c05_piao_cover_012"
    },
    "tc_c05_piao_cover_012": {
      "id": "tc_c05_piao_cover_012",
      "type": "line",
      "scene": "ts_c05_piao_cover",
      "speaker": "piao",
      "character": "piao",
      "text": "“你刚才想说什么？”",
      "next": "tc_c05_piao_cover_013"
    },
    "tc_c05_piao_cover_013": {
      "id": "tc_c05_piao_cover_013",
      "type": "line",
      "scene": "ts_c05_piao_cover",
      "speaker": "narrator",
      "character": "piao",
      "text": "我把原话说完。她摇摇头：“我自己也这么劝过自己。问题是不能每次不顺，就往另一件事里躲。”",
      "next": "tc_c05_piao_cover_014"
    },
    "tc_c05_piao_cover_014": {
      "id": "tc_c05_piao_cover_014",
      "type": "line",
      "scene": "ts_c05_piao_cover",
      "speaker": "narrator",
      "character": "piao",
      "text": "我想劝她慢一点，最后只问她今天还想不想继续看封面。",
      "next": "tc_c05_piao_cover_015"
    },
    "tc_c05_piao_cover_015": {
      "id": "tc_c05_piao_cover_015",
      "type": "line",
      "scene": "ts_c05_piao_cover",
      "speaker": "piao",
      "character": "piao",
      "text": "“不看了。越看越像两张通知。”",
      "next": "tc_c05_piao_cover_016"
    },
    "tc_c05_piao_cover_016": {
      "id": "tc_c05_piao_cover_016",
      "type": "line",
      "scene": "ts_c05_piao_cover_soymilk",
      "speaker": "narrator",
      "character": "piao",
      "text": "她把纸整个塞进袋子。我们去买了热豆浆，站在店门外等一笼刚蒸上的包子。她问我平时下班到底几点能睡着。我说洗漱完有时还刷手机，一刷又多半小时。",
      "next": "tc_c05_piao_cover_017"
    },
    "tc_c05_piao_cover_017": {
      "id": "tc_c05_piao_cover_017",
      "type": "line",
      "scene": "ts_c05_piao_cover_soymilk",
      "speaker": "piao",
      "character": "piao",
      "text": "“然后跟人说，夜班很累。”",
      "next": "tc_c05_piao_cover_018"
    },
    "tc_c05_piao_cover_018": {
      "id": "tc_c05_piao_cover_018",
      "type": "line",
      "scene": "ts_c05_piao_cover_soymilk",
      "speaker": "wenwen",
      "character": "piao",
      "text": "“确实也累。”",
      "next": "tc_c05_piao_cover_019"
    },
    "tc_c05_piao_cover_019": {
      "id": "tc_c05_piao_cover_019",
      "type": "line",
      "scene": "ts_c05_piao_cover_soymilk",
      "speaker": "narrator",
      "character": "piao",
      "text": "“两个事都可以是真的。”她说。",
      "next": "tc_c05_piao_cover_020"
    },
    "tc_c05_piao_cover_020": {
      "id": "tc_c05_piao_cover_020",
      "type": "line",
      "scene": "ts_c05_piao_cover_soymilk",
      "speaker": "narrator",
      "character": "piao",
      "text": "我没争。那天傍晚，我们谁也没替对方把未来列出一张清单。",
      "next": "tc_c05_piao_relationship_gate"
    },
    "tc_c05_piao_dating_001": {
      "id": "tc_c05_piao_dating_001",
      "type": "line",
      "scene": "ts_c05_piao_dating",
      "speaker": "narrator",
      "character": "piao",
      "text": "飘说她不太愿意每次约会都谈找工作。我以为是她不想提，便很用力地换话题，从天气聊到晚饭，再从晚饭聊到昨天游戏输得多惨。",
      "next": "tc_c05_piao_dating_002"
    },
    "tc_c05_piao_dating_002": {
      "id": "tc_c05_piao_dating_002",
      "type": "line",
      "scene": "ts_c05_piao_dating",
      "speaker": "narrator",
      "character": "piao",
      "text": "她听了几分钟，忽然问：“你现在是不是连问我白天做什么都觉得不能问了？”",
      "next": "tc_c05_piao_dating_003"
    },
    "tc_c05_piao_dating_003": {
      "id": "tc_c05_piao_dating_003",
      "type": "line",
      "scene": "ts_c05_piao_dating",
      "speaker": "narrator",
      "character": "piao",
      "text": "我承认有一点。怕她以为我在催，也怕自己的安慰不中听。",
      "next": "tc_c05_piao_dating_004"
    },
    "tc_c05_piao_dating_004": {
      "id": "tc_c05_piao_dating_004",
      "type": "line",
      "scene": "ts_c05_piao_dating",
      "speaker": "narrator",
      "character": "piao",
      "text": "她伸手拿走我面前最后一块炸豆腐，蘸了点酱。",
      "next": "tc_c05_piao_dating_005"
    },
    "tc_c05_piao_dating_005": {
      "id": "tc_c05_piao_dating_005",
      "type": "line",
      "scene": "ts_c05_piao_dating",
      "speaker": "piao",
      "character": "piao",
      "text": "“我说的是，不要每次都变成说这个。不是把我的半天从聊天里删掉。”",
      "next": "tc_c05_piao_dating_006"
    },
    "tc_c05_piao_dating_006": {
      "id": "tc_c05_piao_dating_006",
      "type": "line",
      "scene": "ts_c05_piao_dating",
      "speaker": "narrator",
      "character": "piao",
      "text": "我愣了愣：“今天过得怎么样？”",
      "next": "tc_c05_piao_dating_007"
    },
    "tc_c05_piao_dating_007": {
      "id": "tc_c05_piao_dating_007",
      "type": "line",
      "scene": "ts_c05_piao_dating",
      "speaker": "piao",
      "character": "piao",
      "text": "“不太怎么样。那件事没有下文，回来时还买错了东西。但我现在想吃这个。”",
      "next": "tc_c05_piao_dating_008"
    },
    "tc_c05_piao_dating_008": {
      "id": "tc_c05_piao_dating_008",
      "type": "line",
      "scene": "ts_c05_piao_dating",
      "speaker": "narrator",
      "character": "piao",
      "text": "我把盘子往她那边推。她又推回一半。",
      "next": "tc_c05_piao_dating_009"
    },
    "tc_c05_piao_dating_009": {
      "id": "tc_c05_piao_dating_009",
      "type": "line",
      "scene": "ts_c05_piao_dating",
      "speaker": "piao",
      "character": "piao",
      "text": "“你也吃。别一认真听我讲话就连筷子都放下。”",
      "next": "tc_c05_piao_dating_010"
    },
    "tc_c05_piao_dating_010": {
      "id": "tc_c05_piao_dating_010",
      "type": "line",
      "scene": "ts_c05_piao_dating",
      "speaker": "narrator",
      "character": "piao",
      "text": "后来她主动挪到我旁边坐，肩膀轻轻贴着我的胳膊。那点重量很实在，跟我想象中必须说出一句有用的话才能接近她，完全是两回事。",
      "next": "tc_c05_piao_dating_011"
    },
    "tc_c05_piao_dating_011": {
      "id": "tc_c05_piao_dating_011",
      "type": "line",
      "scene": "ts_c05_piao_dating",
      "speaker": "narrator",
      "character": "piao",
      "text": "离开前，我告诉她今早下班以后又多刷了半小时手机，今天已经把提醒设好了。她说行，下次要是又困，先看看提醒是不是被我顺手关掉。",
      "next": "tc_c05_common_exit"
    },
    "tc_c05_piao_friends_001": {
      "id": "tc_c05_piao_friends_001",
      "type": "line",
      "scene": "ts_c05_piao_friends",
      "speaker": "narrator",
      "character": "piao",
      "text": "飘说周末想跟毛狼出去走走。他约她吃东西，没拿大家聚会当由头。",
      "next": "tc_c05_piao_friends_002"
    },
    "tc_c05_piao_friends_002": {
      "id": "tc_c05_piao_friends_002",
      "type": "line",
      "scene": "ts_c05_piao_friends",
      "speaker": "narrator",
      "character": "piao",
      "text": "我点头：“挺好。”",
      "next": "tc_c05_piao_friends_003"
    },
    "tc_c05_piao_friends_003": {
      "id": "tc_c05_piao_friends_003",
      "type": "line",
      "scene": "ts_c05_piao_friends",
      "speaker": "narrator",
      "character": "piao",
      "text": "她看着我，像是在判断这句是不是客气。我接着问在哪家吃，她说还没定，毛狼发来四家店，最后一句是都行。",
      "next": "tc_c05_piao_friends_004"
    },
    "tc_c05_piao_friends_004": {
      "id": "tc_c05_piao_friends_004",
      "type": "line",
      "scene": "ts_c05_piao_friends",
      "speaker": "narrator",
      "character": "piao",
      "text": "我笑出了声：“这个人组织游戏倒是很果断。”",
      "next": "tc_c05_piao_friends_005"
    },
    "tc_c05_piao_friends_005": {
      "id": "tc_c05_piao_friends_005",
      "type": "line",
      "scene": "ts_c05_piao_friends",
      "speaker": "piao",
      "character": "piao",
      "text": "“所以我准备回他，第五家。”",
      "next": "tc_c05_piao_friends_006"
    },
    "tc_c05_piao_friends_006": {
      "id": "tc_c05_piao_friends_006",
      "type": "line",
      "scene": "ts_c05_piao_friends",
      "speaker": "narrator",
      "character": "piao",
      "text": "她把消息发出去，没把我变成替她挑对象的人。我也没拿自己认识毛狼更久这件事，补上一串资格审查似的评价。",
      "next": "tc_c05_piao_friends_007"
    },
    "tc_c05_piao_friends_007": {
      "id": "tc_c05_piao_friends_007",
      "type": "line",
      "scene": "ts_c05_piao_friends",
      "speaker": "narrator",
      "character": "piao",
      "text": "我们聊了会儿她不满意的封面。我说自己那天选淡色是真心的，但她不需要拿我的偏好当最后一票。她说这话应该早点讲，她刚才差一点把“文文说的”当借口，去跟自己争。",
      "next": "tc_c05_piao_friends_008"
    },
    "tc_c05_piao_friends_008": {
      "id": "tc_c05_piao_friends_008",
      "type": "line",
      "scene": "ts_c05_piao_friends",
      "speaker": "narrator",
      "character": "piao",
      "text": "我指着盘子里的豆腐：“那这个总能确定吧？”",
      "next": "tc_c05_piao_friends_009"
    },
    "tc_c05_piao_friends_009": {
      "id": "tc_c05_piao_friends_009",
      "type": "line",
      "scene": "ts_c05_piao_friends",
      "speaker": "narrator",
      "character": "piao",
      "text": "她挑走一块最脆的。“这个不用投票。”",
      "next": "tc_c05_piao_friends_010"
    },
    "tc_c05_piao_friends_010": {
      "id": "tc_c05_piao_friends_010",
      "type": "line",
      "scene": "ts_c05_piao_friends_parting",
      "speaker": "narrator",
      "character": "piao",
      "text": "走出小店时，我们各自看了一眼时间。我还要吃饭、准备晚上的班，她要回家换双舒服的鞋。告别很短，也没有谁追问另一段约会会发生什么。",
      "next": "tc_c05_common_exit"
    },
    "tc_c05_piao_relationship_gate": {
      "id": "tc_c05_piao_relationship_gate",
      "type": "gate",
      "scene": "ts_c05_piao_dating",
      "cases": [
        {
          "flag": "piaoRelationship",
          "value": "dating",
          "next": "tc_c05_piao_dating_001"
        },
        {
          "flag": "piaoRelationship",
          "value": "friends",
          "next": "tc_c05_piao_friends_001"
        }
      ],
      "default": null,
      "exhaustive": true
    },
    "tc_c06_piao_entry": {
      "id": "tc_c06_piao_entry",
      "type": "line",
      "scene": "ts_c06_piao_closed_echo",
      "speaker": "narrator",
      "character": null,
      "text": "第30天那顿饭吃完，我照常去上了夜班。昨天回来睡了一觉，今天休班，才跟飘约上。",
      "next": "tc_c06_piao_closed_echo_002"
    },
    "tc_c06_piao_closed_echo_002": {
      "id": "tc_c06_piao_closed_echo_002",
      "type": "line",
      "scene": "ts_c06_piao_closed_echo_closed_door",
      "speaker": "narrator",
      "character": "piao",
      "text": "她在路口等我，袋子里放着买好的橘子。经过回声那条路时，门已经关着，她脚步慢了一下。",
      "next": "tc_c06_piao_closed_echo_003"
    },
    "tc_c06_piao_closed_echo_003": {
      "id": "tc_c06_piao_closed_echo_003",
      "type": "line",
      "scene": "ts_c06_piao_closed_echo_closed_door",
      "speaker": "piao",
      "character": "piao",
      "text": "“以后叫周栀出来，不用先问她在第几个包厢了。”",
      "next": "tc_c06_piao_closed_echo_004"
    },
    "tc_c06_piao_closed_echo_004": {
      "id": "tc_c06_piao_closed_echo_004",
      "type": "line",
      "scene": "ts_c06_piao_closed_echo_closed_door",
      "speaker": "narrator",
      "character": "piao",
      "text": "我说可能还是得问有没有空。她点点头，说是，不能把下班理解成突然多出一整个人生的空位。",
      "next": "tc_c06_piao_closed_echo_005"
    },
    "tc_c06_piao_closed_echo_005": {
      "id": "tc_c06_piao_closed_echo_005",
      "type": "line",
      "scene": "ts_c06_piao_closed_echo_street",
      "speaker": "narrator",
      "character": "piao",
      "text": "我们转向另一条街。今天没有去参观关着的店，也没把这点不舍聊成一场致辞。飘剥了一个橘子，第一瓣给自己，第二瓣递给我。",
      "next": "tc_c06_piao_closed_echo_006"
    },
    "tc_c06_piao_closed_echo_006": {
      "id": "tc_c06_piao_closed_echo_006",
      "type": "line",
      "scene": "ts_c06_piao_closed_echo_street",
      "speaker": "narrator",
      "character": "piao",
      "text": "“酸吗？”我问。",
      "next": "tc_c06_piao_closed_echo_007"
    },
    "tc_c06_piao_closed_echo_007": {
      "id": "tc_c06_piao_closed_echo_007",
      "type": "line",
      "scene": "ts_c06_piao_closed_echo_street",
      "speaker": "piao",
      "character": "piao",
      "text": "“你先试。”",
      "next": "tc_c06_piao_closed_echo_008"
    },
    "tc_c06_piao_closed_echo_008": {
      "id": "tc_c06_piao_closed_echo_008",
      "type": "line",
      "scene": "ts_c06_piao_closed_echo_street",
      "speaker": "narrator",
      "character": "piao",
      "text": "我看着她努力保持的表情，没上当。她笑起来，自己吃掉那瓣，然后皱着脸说真的很酸。",
      "next": "tc_c06_piao_closed_echo_009"
    },
    "tc_c06_piao_closed_echo_009": {
      "id": "tc_c06_piao_closed_echo_009",
      "type": "line",
      "scene": "ts_c06_piao_closed_echo_bench",
      "speaker": "narrator",
      "character": "piao",
      "text": "最后我们在一张有树影的长凳上坐下，把酸橘子放在中间。她从包里找出一包饼，说不应该一次买这么多，明知道自己根本挑不来。",
      "next": "tc_c06_piao_closed_echo_010"
    },
    "tc_c06_piao_closed_echo_010": {
      "id": "tc_c06_piao_closed_echo_010",
      "type": "line",
      "scene": "ts_c06_piao_closed_echo_bench",
      "speaker": "narrator",
      "character": "piao",
      "text": "我说总能遇到一个甜的。她让我别随便替下一只橘子担保。",
      "next": "tc_c06_piao_closed_echo_011"
    },
    "tc_c06_piao_closed_echo_011": {
      "id": "tc_c06_piao_closed_echo_011",
      "type": "line",
      "scene": "ts_c06_piao_closed_echo_bench",
      "speaker": "narrator",
      "character": "piao",
      "text": "我们把袋子翻了个面，也没有选出更有希望的那一只。",
      "next": "tc_c06_piao_relationship_gate"
    },
    "tc_c06_piao_dating_001": {
      "id": "tc_c06_piao_dating_001",
      "type": "line",
      "scene": "ts_c06_piao_dating",
      "speaker": "narrator",
      "character": "piao",
      "text": "飘问我，交往十来天，有没有觉得她跟最开始见到的不一样。",
      "next": "tc_c06_piao_dating_002"
    },
    "tc_c06_piao_dating_002": {
      "id": "tc_c06_piao_dating_002",
      "type": "line",
      "scene": "ts_c06_piao_dating",
      "speaker": "narrator",
      "character": "piao",
      "text": "“有。”我说，“你会记仇。”",
      "next": "tc_c06_piao_dating_003"
    },
    "tc_c06_piao_dating_003": {
      "id": "tc_c06_piao_dating_003",
      "type": "line",
      "scene": "ts_c06_piao_dating",
      "speaker": "narrator",
      "character": "piao",
      "text": "她眯起眼：“比如？”",
      "next": "tc_c06_piao_dating_004"
    },
    "tc_c06_piao_dating_004": {
      "id": "tc_c06_piao_dating_004",
      "type": "line",
      "scene": "ts_c06_piao_dating",
      "speaker": "wenwen",
      "character": "piao",
      "text": "“我第一回把凉糕吃成糖水，你能提很久。”",
      "next": "tc_c06_piao_dating_005"
    },
    "tc_c06_piao_dating_005": {
      "id": "tc_c06_piao_dating_005",
      "type": "line",
      "scene": "ts_c06_piao_dating",
      "speaker": "piao",
      "character": "piao",
      "text": "“那是证据充分。”",
      "next": "tc_c06_piao_dating_006"
    },
    "tc_c06_piao_dating_006": {
      "id": "tc_c06_piao_dating_006",
      "type": "line",
      "scene": "ts_c06_piao_dating",
      "speaker": "narrator",
      "character": "piao",
      "text": "我又想了想，说原来以为她出门都想好了要干什么，现在知道她也会带着一袋酸橘子坐半天，不知道下一步去哪。",
      "next": "tc_c06_piao_dating_007"
    },
    "tc_c06_piao_dating_007": {
      "id": "tc_c06_piao_dating_007",
      "type": "line",
      "scene": "ts_c06_piao_dating",
      "speaker": "piao",
      "character": "piao",
      "text": "“那你失望吗？”",
      "next": "tc_c06_piao_dating_008"
    },
    "tc_c06_piao_dating_008": {
      "id": "tc_c06_piao_dating_008",
      "type": "line",
      "scene": "ts_c06_piao_dating",
      "speaker": "wenwen",
      "character": "piao",
      "text": "“有点担心今晚的胃。”",
      "next": "tc_c06_piao_dating_009"
    },
    "tc_c06_piao_dating_009": {
      "id": "tc_c06_piao_dating_009",
      "type": "line",
      "scene": "ts_c06_piao_dating",
      "speaker": "narrator",
      "character": "piao",
      "text": "她用手背碰了我一下，没躲开后来牵上的手。",
      "next": "tc_c06_piao_dating_010"
    },
    "tc_c06_piao_dating_010": {
      "id": "tc_c06_piao_dating_010",
      "type": "line",
      "scene": "ts_c06_piao_dating",
      "speaker": "narrator",
      "character": "piao",
      "text": "说到自己的册子，她承认有一张照片不想放进去，可删了又会少一页。我问少一页是不是也能订，她点头，说能。我说那就少一页，她听完竟然松了口气。",
      "next": "tc_c06_piao_dating_011"
    },
    "tc_c06_piao_dating_011": {
      "id": "tc_c06_piao_dating_011",
      "type": "line",
      "scene": "ts_c06_piao_dating",
      "speaker": "narrator",
      "character": "piao",
      "text": "“你刚才还让我别替橘子担保。”我说。",
      "next": "tc_c06_piao_dating_012"
    },
    "tc_c06_piao_dating_012": {
      "id": "tc_c06_piao_dating_012",
      "type": "line",
      "scene": "ts_c06_piao_dating",
      "speaker": "piao",
      "character": "piao",
      "text": "“册子是我的，我能担保少一页也还是它。橘子你不行。”",
      "next": "tc_c06_piao_dating_013"
    },
    "tc_c06_piao_dating_013": {
      "id": "tc_c06_piao_dating_013",
      "type": "line",
      "scene": "ts_c06_piao_dating_dinner",
      "speaker": "narrator",
      "character": "piao",
      "text": "后来我们去买了两份普通的饭。我付饭钱，她把饮料钱付了。她没有把酸橘子丢掉，带回去慢慢吃。分别前，我低头吻了一下她的额角，动作太轻，她先以为是我碰到了头发。",
      "next": "tc_c06_piao_dating_014"
    },
    "tc_c06_piao_dating_014": {
      "id": "tc_c06_piao_dating_014",
      "type": "line",
      "scene": "ts_c06_piao_dating_dinner",
      "speaker": "narrator",
      "character": "piao",
      "text": "我说了一遍。她看着我，笑得有点不好意思，又朝我走近半步。",
      "next": "tc_c06_piao_dating_015"
    },
    "tc_c06_piao_dating_015": {
      "id": "tc_c06_piao_dating_015",
      "type": "line",
      "scene": "ts_c06_piao_dating_dinner",
      "speaker": "narrator",
      "character": "piao",
      "text": "这次我们都知道自己在做什么。",
      "next": "tc_c06_common_exit"
    },
    "tc_c06_piao_friends_001": {
      "id": "tc_c06_piao_friends_001",
      "type": "line",
      "scene": "ts_c06_piao_friends",
      "speaker": "narrator",
      "character": "piao",
      "text": "毛狼发来一张露出半张脸的照片，问飘这件衬衫是不是太花。她把手机反扣在膝盖上，问我有没有见过比这还花的。",
      "next": "tc_c06_piao_friends_002"
    },
    "tc_c06_piao_friends_002": {
      "id": "tc_c06_piao_friends_002",
      "type": "line",
      "scene": "ts_c06_piao_friends",
      "speaker": "wenwen",
      "character": "piao",
      "text": "“有。但我不想替他留下更多证据。”",
      "next": "tc_c06_piao_friends_003"
    },
    "tc_c06_piao_friends_003": {
      "id": "tc_c06_piao_friends_003",
      "type": "line",
      "scene": "ts_c06_piao_friends",
      "speaker": "narrator",
      "character": "piao",
      "text": "她没把照片递给我，也没追着问。我以为她会立刻回，隔了一会儿，她才打字说，想穿就穿，别把领子往里翻。",
      "next": "tc_c06_piao_friends_004"
    },
    "tc_c06_piao_friends_004": {
      "id": "tc_c06_piao_friends_004",
      "type": "line",
      "scene": "ts_c06_piao_friends",
      "speaker": "narrator",
      "character": "piao",
      "text": "“昨天跟他出去怎么样？”我问。",
      "next": "tc_c06_piao_friends_005"
    },
    "tc_c06_piao_friends_005": {
      "id": "tc_c06_piao_friends_005",
      "type": "line",
      "scene": "ts_c06_piao_friends",
      "speaker": "piao",
      "character": "piao",
      "text": "“挺好。他话多，我不想说话时，也肯安静一下。就是点菜点得太快，最后两个人都撑。”",
      "next": "tc_c06_piao_friends_006"
    },
    "tc_c06_piao_friends_006": {
      "id": "tc_c06_piao_friends_006",
      "type": "line",
      "scene": "ts_c06_piao_friends",
      "speaker": "narrator",
      "character": "piao",
      "text": "她把这句话说完，就问起我网吧最近的一桩糗事。我讲自己忙完以后才发现胸前别着价签，师匠路过三回，第三回才提醒我。",
      "next": "tc_c06_piao_friends_007"
    },
    "tc_c06_piao_friends_007": {
      "id": "tc_c06_piao_friends_007",
      "type": "line",
      "scene": "ts_c06_piao_friends",
      "speaker": "narrator",
      "character": "piao",
      "text": "她笑得捂住嘴，差点把橘子籽吐进纸袋。我抽出纸递给她，说你笑慢一点，我这故事又不会消失。",
      "next": "tc_c06_piao_friends_008",
      "expression": "expression-smile"
    },
    "tc_c06_piao_friends_008": {
      "id": "tc_c06_piao_friends_008",
      "type": "line",
      "scene": "ts_c06_piao_friends",
      "speaker": "narrator",
      "character": "piao",
      "text": "饭前我们把没吃完的东西分好。我拿走两只橘子，既不作为帮谁省钱，也不需要把友谊证明得多周到。她说回家要接着改一点纸上的东西，晚上可能跟毛狼通话。",
      "next": "tc_c06_piao_friends_009"
    },
    "tc_c06_piao_friends_009": {
      "id": "tc_c06_piao_friends_009",
      "type": "line",
      "scene": "ts_c06_piao_friends",
      "speaker": "narrator",
      "character": "piao",
      "text": "我说今天我想打两局，然后早点睡。她抬手挥了挥：“你今天休班，打吧。别把休息日也过成补前几天欠的觉。”",
      "next": "tc_c06_piao_friends_010"
    },
    "tc_c06_piao_friends_010": {
      "id": "tc_c06_piao_friends_010",
      "type": "line",
      "scene": "ts_c06_piao_friends_home",
      "speaker": "narrator",
      "character": null,
      "text": "我答应下来，回家先把闹钟关掉了。",
      "next": "tc_c06_common_exit"
    },
    "tc_c06_piao_relationship_gate": {
      "id": "tc_c06_piao_relationship_gate",
      "type": "gate",
      "scene": "ts_c06_piao_dating",
      "cases": [
        {
          "flag": "piaoRelationship",
          "value": "dating",
          "next": "tc_c06_piao_dating_001"
        },
        {
          "flag": "piaoRelationship",
          "value": "friends",
          "next": "tc_c06_piao_friends_001"
        }
      ],
      "default": null,
      "exhaustive": true
    },
    "tc_c07_piao_entry": {
      "id": "tc_c07_piao_entry",
      "type": "line",
      "scene": "ts_c07_piao_half_hour",
      "speaker": "narrator",
      "character": null,
      "text": "这天下午飘已经跟朋友约好看东西，见面前特意告诉我，只能在路口坐半小时。我补觉醒来后看了消息，回她半小时也行。",
      "next": "tc_c07_piao_half_hour_002"
    },
    "tc_c07_piao_half_hour_002": {
      "id": "tc_c07_piao_half_hour_002",
      "type": "line",
      "scene": "ts_c07_piao_half_hour",
      "speaker": "narrator",
      "character": "piao",
      "text": "到了以后，她正在给一个纸袋换提手。旧提手从中间断开，里面的小册子还没装进去，旁边压着几张废纸。",
      "next": "tc_c07_piao_half_hour_003"
    },
    "tc_c07_piao_half_hour_003": {
      "id": "tc_c07_piao_half_hour_003",
      "type": "line",
      "scene": "ts_c07_piao_half_hour",
      "speaker": "narrator",
      "character": "piao",
      "text": "我问需不需要帮忙。她递给我一段绳，让我扶住袋子，自己把结系牢。没有谁负责指导谁，最后那个结还是打得很丑。",
      "next": "tc_c07_piao_outing_gate"
    },
    "tc_c07_piao_paperboat_return_001": {
      "id": "tc_c07_piao_paperboat_return_001",
      "type": "line",
      "scene": "ts_c07_piao_paperboat_return",
      "speaker": "narrator",
      "character": "piao",
      "text": "我从她挪开的废纸里认出那只歪纸船，惊讶她真留到了现在。她说放在袋子夹层忘了扔，刚才翻出来，还能看见我声称的船头。我提议重折一次，她立刻把纸收远：“不行。这只是你当时的水平，不能修改历史。”我问那她自己的那只呢。她面不改色地说压平了，用过了。我们相互指责了一会儿，谁也没把船放进水里。",
      "next": "tc_c07_piao_bag_ready_001"
    },
    "tc_c07_piao_signs_return_001": {
      "id": "tc_c07_piao_signs_return_001",
      "type": "line",
      "scene": "ts_c07_piao_signs_return",
      "speaker": "narrator",
      "character": "piao",
      "text": "纸袋上印着一家店的名字，她看着忽然想起“东西都在”。我接“先坐一会儿”，两个人都笑得像听见一个只有彼此才知道的笑话。她说那天后来才发现，卖沙发的旧招牌后面还有一层。我问是什么，她说没看清，留到下回再猜。我们没有为那家不存在的店设计菜单，光用它起的怪名字把半小时浪费掉一点，就已经够了。",
      "next": "tc_c07_piao_bag_ready_001"
    },
    "tc_c07_piao_bag_ready_001": {
      "id": "tc_c07_piao_bag_ready_001",
      "type": "line",
      "scene": "ts_c07_piao_bag_ready",
      "speaker": "narrator",
      "character": "piao",
      "text": "她把袋子装好，朋友的消息也到了。我看了一眼时间，竟然过得这么快。",
      "next": "tc_c07_piao_relationship_gate"
    },
    "tc_c07_piao_dating_001": {
      "id": "tc_c07_piao_dating_001",
      "type": "line",
      "scene": "ts_c07_piao_dating",
      "speaker": "narrator",
      "character": "piao",
      "text": "我说送她一段，她想了想，问我是不是其实还想一起去。",
      "next": "tc_c07_piao_dating_002"
    },
    "tc_c07_piao_dating_002": {
      "id": "tc_c07_piao_dating_002",
      "type": "line",
      "scene": "ts_c07_piao_dating",
      "speaker": "narrator",
      "character": "piao",
      "text": "我被问中了，挠了挠头。“有一点。但你原来约的是朋友。”",
      "next": "tc_c07_piao_dating_003"
    },
    "tc_c07_piao_dating_003": {
      "id": "tc_c07_piao_dating_003",
      "type": "line",
      "scene": "ts_c07_piao_dating",
      "speaker": "piao",
      "character": "piao",
      "text": "“嗯，今天就我们几个。她们也有想单独讲的事。”",
      "next": "tc_c07_piao_dating_004"
    },
    "tc_c07_piao_dating_004": {
      "id": "tc_c07_piao_dating_004",
      "type": "line",
      "scene": "ts_c07_piao_dating",
      "speaker": "narrator",
      "character": "piao",
      "text": "这句话让我心里短短地空了一下。我知道她说得没错，可知道跟立刻高高兴兴，之间还差一点时间。",
      "next": "tc_c07_piao_dating_005"
    },
    "tc_c07_piao_dating_005": {
      "id": "tc_c07_piao_dating_005",
      "type": "line",
      "scene": "ts_c07_piao_dating",
      "speaker": "narrator",
      "character": "piao",
      "text": "她看出来了，没有临时把我添进去，只把我的手拉过来捏了两下。",
      "next": "tc_c07_piao_dating_006"
    },
    "tc_c07_piao_dating_006": {
      "id": "tc_c07_piao_dating_006",
      "type": "line",
      "scene": "ts_c07_piao_dating",
      "speaker": "piao",
      "character": "piao",
      "text": "“后天可以一起吃饭。我来找你，睡醒了叫我。”",
      "next": "tc_c07_piao_dating_007"
    },
    "tc_c07_piao_dating_007": {
      "id": "tc_c07_piao_dating_007",
      "type": "line",
      "scene": "ts_c07_piao_dating",
      "speaker": "narrator",
      "character": "piao",
      "text": "我点头，问她路上给不给我拍一张好吃的。她说看心情，如果特别好吃也可能忘了。",
      "next": "tc_c07_piao_dating_008"
    },
    "tc_c07_piao_dating_008": {
      "id": "tc_c07_piao_dating_008",
      "type": "line",
      "scene": "ts_c07_piao_dating_laundry",
      "speaker": "narrator",
      "character": null,
      "text": "她走以后，我先回了毛狼一条组队消息，告诉他今天晚班之前不打，等下回休息。我去把攒着没洗的衣服洗了，晾的时候才发现，下午少见这一小时，并没有把我的生活挖出一个大洞。",
      "next": "tc_c07_piao_dating_009"
    },
    "tc_c07_piao_dating_009": {
      "id": "tc_c07_piao_dating_009",
      "type": "line",
      "scene": "ts_c07_piao_dating_message",
      "speaker": "narrator",
      "character": null,
      "text": "晚上到店前，她发来一张空盘子。我回了三个问号。",
      "next": "tc_c07_piao_dating_010"
    },
    "tc_c07_piao_dating_010": {
      "id": "tc_c07_piao_dating_010",
      "type": "line",
      "scene": "ts_c07_piao_dating_message",
      "speaker": "narrator",
      "character": null,
      "text": "她说：“特别好吃，确实忘了。”",
      "next": "tc_c07_piao_dating_011"
    },
    "tc_c07_piao_dating_011": {
      "id": "tc_c07_piao_dating_011",
      "type": "line",
      "scene": "ts_c07_piao_dating_message",
      "speaker": "narrator",
      "character": null,
      "text": "我对着那张盘子笑了半天。",
      "next": "tc_c07_piao_dating_012"
    },
    "tc_c07_piao_dating_012": {
      "id": "tc_c07_piao_dating_012",
      "type": "line",
      "scene": "ts_c07_piao_dating_day41",
      "speaker": "narrator",
      "character": "piao",
      "text": "到了第四十一天，我睡醒后去和她吃饭，我先点了照片里唯一剩下一片的青椒，她笑我这仇报得一点也不聪明。",
      "next": "tc_c07_common_exit"
    },
    "tc_c07_piao_friends_001": {
      "id": "tc_c07_piao_friends_001",
      "type": "line",
      "scene": "ts_c07_piao_friends",
      "speaker": "narrator",
      "character": "piao",
      "text": "她走前问我，下次朋友饭局能不能让毛狼别在饭吃一半时主持大家讲一句感想。我说这得你跟他说，他以为我反对，只是因为我每次都不知道讲什么。",
      "next": "tc_c07_piao_friends_002"
    },
    "tc_c07_piao_friends_002": {
      "id": "tc_c07_piao_friends_002",
      "type": "line",
      "scene": "ts_c07_piao_friends",
      "speaker": "piao",
      "character": "piao",
      "text": "“你本来也不知道讲什么。”",
      "next": "tc_c07_piao_friends_003"
    },
    "tc_c07_piao_friends_003": {
      "id": "tc_c07_piao_friends_003",
      "type": "line",
      "scene": "ts_c07_piao_friends",
      "speaker": "wenwen",
      "character": "piao",
      "text": "“那你更应该替我说一句。”",
      "next": "tc_c07_piao_friends_004"
    },
    "tc_c07_piao_friends_004": {
      "id": "tc_c07_piao_friends_004",
      "type": "line",
      "scene": "ts_c07_piao_friends",
      "speaker": "piao",
      "character": "piao",
      "text": "“不要。你自己说。”",
      "next": "tc_c07_piao_friends_005"
    },
    "tc_c07_piao_friends_005": {
      "id": "tc_c07_piao_friends_005",
      "type": "line",
      "scene": "ts_c07_piao_friends_later_summary",
      "speaker": "narrator",
      "character": "maolang",
      "text": "我们笑着各自走开。几天以后再见毛狼，他果真没起头让大家轮流说话，只是一边夹菜一边问我最近班怎么样。",
      "next": "tc_c07_piao_friends_006",
      "bg": "tc-bg-food-day"
    },
    "tc_c07_piao_friends_006": {
      "id": "tc_c07_piao_friends_006",
      "type": "line",
      "scene": "ts_c07_piao_friends_later_summary",
      "speaker": "narrator",
      "character": "piao",
      "text": "我说还那样，有时忙，有时要盯着时间等天亮。他听了几句，没把话接成励志故事。飘坐在他旁边，自顾自跟另一位朋友聊起路边新开的店。她没有为了照顾我们俩，一句话分成两半说。",
      "next": "tc_c07_piao_friends_007",
      "bg": "tc-bg-food-day"
    },
    "tc_c07_piao_friends_007": {
      "id": "tc_c07_piao_friends_007",
      "type": "line",
      "scene": "ts_c07_piao_friends_later_summary",
      "speaker": "narrator",
      "character": "maolang",
      "text": "饭后毛狼提着她的袋子，两个人走到路口，又停下来争往哪边近。我从后面经过，说左右都能到。",
      "next": "tc_c07_piao_friends_008",
      "bg": "tc-bg-street-day"
    },
    "tc_c07_piao_friends_008": {
      "id": "tc_c07_piao_friends_008",
      "type": "line",
      "scene": "ts_c07_piao_friends_later_summary",
      "speaker": "narrator",
      "character": "piao",
      "text": "飘抬头：“我们是在争他上次到底走了哪边。”",
      "next": "tc_c07_piao_friends_009"
    },
    "tc_c07_piao_friends_009": {
      "id": "tc_c07_piao_friends_009",
      "type": "line",
      "scene": "ts_c07_piao_friends_later_summary",
      "speaker": "narrator",
      "character": "piao",
      "text": "我说好，证据留给你们，自己先回去吃晚班前的那顿饭。他们一起向我挥手，没有谁需要隔着朋友关系解释这段亲近从哪里来。",
      "next": "tc_c07_common_exit"
    },
    "tc_c07_piao_relationship_gate": {
      "id": "tc_c07_piao_relationship_gate",
      "type": "gate",
      "scene": "ts_c07_piao_dating",
      "cases": [
        {
          "flag": "piaoRelationship",
          "value": "dating",
          "next": "tc_c07_piao_dating_001"
        },
        {
          "flag": "piaoRelationship",
          "value": "friends",
          "next": "tc_c07_piao_friends_001"
        }
      ],
      "default": null,
      "exhaustive": true
    },
    "tc_c07_piao_outing_gate": {
      "id": "tc_c07_piao_outing_gate",
      "type": "gate",
      "scene": "ts_c07_piao_paperboat_return",
      "cases": [
        {
          "flag": "piaoOuting",
          "value": "paperboat",
          "next": "tc_c07_piao_paperboat_return_001"
        },
        {
          "flag": "piaoOuting",
          "value": "signs",
          "next": "tc_c07_piao_signs_return_001"
        }
      ],
      "default": null,
      "exhaustive": true
    },
    "tc_c08_piao_entry": {
      "id": "tc_c08_piao_entry",
      "type": "line",
      "scene": "ts_c08_piao_shared_time",
      "speaker": "narrator",
      "character": null,
      "text": "前两天我和师匠谈了轮班，他找同事一起排了试行的表。我现在还不能保证以后每周都哪天有空，只把已经确定的几天告诉了飘。",
      "next": "tc_c08_piao_shared_time_002"
    },
    "tc_c08_piao_shared_time_002": {
      "id": "tc_c08_piao_shared_time_002",
      "type": "line",
      "scene": "ts_c08_piao_shared_time",
      "speaker": "narrator",
      "character": "piao",
      "text": "她听完，先问我是不是终于能偶尔晚上出来吃东西了。我说能，但别一次把三顿都预订上。",
      "next": "tc_c08_piao_shared_time_003"
    },
    "tc_c08_piao_shared_time_003": {
      "id": "tc_c08_piao_shared_time_003",
      "type": "line",
      "scene": "ts_c08_piao_shared_time",
      "speaker": "piao",
      "character": "piao",
      "text": "“我只问了一句，你怎么已经替我吃了三顿？”",
      "next": "tc_c08_piao_shared_time_004"
    },
    "tc_c08_piao_shared_time_004": {
      "id": "tc_c08_piao_shared_time_004",
      "type": "line",
      "scene": "ts_c08_piao_shared_time",
      "speaker": "narrator",
      "character": "piao",
      "text": "我们在小店坐下。今天她没带册子，倒带了一小盒润喉糖，说上回朋友买多了分给她，自己又不喜欢这个味道。我尝了一颗，冲得眼睛都眯起来，她看我一眼就笑了。",
      "next": "tc_c08_piao_shared_time_005"
    },
    "tc_c08_piao_shared_time_005": {
      "id": "tc_c08_piao_shared_time_005",
      "type": "line",
      "scene": "ts_c08_piao_shared_time",
      "speaker": "piao",
      "character": "piao",
      "text": "“你可以不吃的。”",
      "next": "tc_c08_piao_shared_time_006"
    },
    "tc_c08_piao_shared_time_006": {
      "id": "tc_c08_piao_shared_time_006",
      "type": "line",
      "scene": "ts_c08_piao_shared_time",
      "speaker": "wenwen",
      "character": "piao",
      "text": "“已经拆了。”",
      "next": "tc_c08_piao_shared_time_007"
    },
    "tc_c08_piao_shared_time_007": {
      "id": "tc_c08_piao_shared_time_007",
      "type": "line",
      "scene": "ts_c08_piao_shared_time",
      "speaker": "piao",
      "character": "piao",
      "text": "“那也可以只吃这一颗。”",
      "next": "tc_c08_piao_shared_time_008"
    },
    "tc_c08_piao_shared_time_008": {
      "id": "tc_c08_piao_shared_time_008",
      "type": "line",
      "scene": "ts_c08_piao_shared_time",
      "speaker": "narrator",
      "character": "piao",
      "text": "我把盒子盖上，放回她那边。她又推到桌子中间：“等下次谁愿意再说，别互相推成礼物。”",
      "next": "tc_c08_piao_shared_time_009"
    },
    "tc_c08_piao_shared_time_009": {
      "id": "tc_c08_piao_shared_time_009",
      "type": "line",
      "scene": "ts_c08_piao_shared_time",
      "speaker": "narrator",
      "character": "piao",
      "text": "这阵子我们越来越熟，熟到不用每次见面都拿出一个特别值得高兴的消息。她有时烦，我也有时懒。店门口的猫叫了几声，她听见便回头，和我刚才讲的一半话错开了。我没有提高声音把她叫回来，等她看够了，再从刚才的位置说。",
      "next": "tc_c08_piao_relationship_gate"
    },
    "tc_c08_piao_dating_001": {
      "id": "tc_c08_piao_dating_001",
      "type": "line",
      "scene": "ts_c08_piao_dating",
      "speaker": "narrator",
      "character": "piao",
      "text": "飘问我能不能陪她去挑一件衣服。我其实不想逛，嘴上却先答应了。刚走进第一家店，她举着一件外套问我好不好看，我没看清就说好看。",
      "next": "tc_c08_piao_dating_002"
    },
    "tc_c08_piao_dating_002": {
      "id": "tc_c08_piao_dating_002",
      "type": "line",
      "scene": "ts_c08_piao_dating",
      "speaker": "narrator",
      "character": "piao",
      "text": "她放下衣服，认真地打量我。",
      "next": "tc_c08_piao_dating_003"
    },
    "tc_c08_piao_dating_003": {
      "id": "tc_c08_piao_dating_003",
      "type": "line",
      "scene": "ts_c08_piao_dating",
      "speaker": "piao",
      "character": "piao",
      "text": "“你是累，还是不想逛？”",
      "next": "tc_c08_piao_dating_004"
    },
    "tc_c08_piao_dating_004": {
      "id": "tc_c08_piao_dating_004",
      "type": "line",
      "scene": "ts_c08_piao_dating",
      "speaker": "wenwen",
      "character": "piao",
      "text": "“今天不太想逛。”",
      "next": "tc_c08_piao_dating_005"
    },
    "tc_c08_piao_dating_005": {
      "id": "tc_c08_piao_dating_005",
      "type": "line",
      "scene": "ts_c08_piao_dating",
      "speaker": "narrator",
      "character": "piao",
      "text": "她叹了一口气。不是那种准备吵架的叹气，更像对着一颗把衣服挂错钩子的钉子。",
      "next": "tc_c08_piao_dating_006"
    },
    "tc_c08_piao_dating_006": {
      "id": "tc_c08_piao_dating_006",
      "type": "line",
      "scene": "ts_c08_piao_dating",
      "speaker": "piao",
      "character": "piao",
      "text": "“那你刚才说。现在我已经把你带来了。”",
      "next": "tc_c08_piao_dating_007"
    },
    "tc_c08_piao_dating_007": {
      "id": "tc_c08_piao_dating_007",
      "type": "line",
      "scene": "ts_c08_piao_dating",
      "speaker": "narrator",
      "character": "piao",
      "text": "我道了歉，说可以去旁边坐着等。她摇头：“不用。今天就先看这一家，之后我自己来。你下次不要因为是我问，就自动选好。”",
      "next": "tc_c08_piao_dating_008"
    },
    "tc_c08_piao_dating_008": {
      "id": "tc_c08_piao_dating_008",
      "type": "line",
      "scene": "ts_c08_piao_dating",
      "speaker": "narrator",
      "character": "piao",
      "text": "我给她看中的两件衣服认真比了一回，说右边那件袖子她可能不喜欢。她试了试，果然把袖口往上翻，自己也笑了。",
      "next": "tc_c08_piao_dating_009"
    },
    "tc_c08_piao_dating_009": {
      "id": "tc_c08_piao_dating_009",
      "type": "line",
      "scene": "ts_c08_piao_dating_street",
      "speaker": "narrator",
      "character": "piao",
      "text": "出去后，她让我选剩下的时间去哪。我说想在安静的地方坐一会儿，她同意了。我们坐在街角，她把头轻轻靠在我肩上，又问这样会不会不舒服。",
      "next": "tc_c08_piao_dating_010"
    },
    "tc_c08_piao_dating_010": {
      "id": "tc_c08_piao_dating_010",
      "type": "line",
      "scene": "ts_c08_piao_dating_street",
      "speaker": "narrator",
      "character": "piao",
      "text": "我说不会，这个是真的。",
      "next": "tc_c08_piao_dating_011"
    },
    "tc_c08_piao_dating_011": {
      "id": "tc_c08_piao_dating_011",
      "type": "line",
      "scene": "ts_c08_piao_dating_street",
      "speaker": "narrator",
      "character": "piao",
      "text": "她闭了一会儿眼，手指绕着袋子的提绳。那天我们没看更多店，我也没用一场更费力的约会补偿刚才的拒绝。回去时她主动抱了我一下，我闻到她头发上很淡的洗发水味。",
      "next": "tc_c08_common_exit"
    },
    "tc_c08_piao_friends_001": {
      "id": "tc_c08_piao_friends_001",
      "type": "line",
      "scene": "ts_c08_piao_friends",
      "speaker": "narrator",
      "character": "piao",
      "text": "飘说她和毛狼正式在一起了。告诉我时，她刚好在剥糖纸，嘴里那句说得很轻，没有刻意等我摆出适合宣布消息的表情。",
      "next": "tc_c08_piao_friends_002"
    },
    "tc_c08_piao_friends_002": {
      "id": "tc_c08_piao_friends_002",
      "type": "line",
      "scene": "ts_c08_piao_friends",
      "speaker": "narrator",
      "character": "piao",
      "text": "“好啊。”我说，“他这次没有发四个方案让你选？”",
      "next": "tc_c08_piao_friends_003"
    },
    "tc_c08_piao_friends_003": {
      "id": "tc_c08_piao_friends_003",
      "type": "line",
      "scene": "ts_c08_piao_friends",
      "speaker": "narrator",
      "character": "piao",
      "text": "她笑了：“这次很具体。问我愿不愿意做他女朋友。”",
      "next": "tc_c08_piao_friends_004",
      "expression": "expression-smile"
    },
    "tc_c08_piao_friends_004": {
      "id": "tc_c08_piao_friends_004",
      "type": "line",
      "scene": "ts_c08_piao_friends",
      "speaker": "narrator",
      "character": "piao",
      "text": "我也笑了，问他们晚上有没有约。她说有，所以今天只坐到五点半。她想告诉我这件事，也想顺手把糖分掉，这两个理由都很普通。",
      "next": "tc_c08_piao_friends_005"
    },
    "tc_c08_piao_friends_005": {
      "id": "tc_c08_piao_friends_005",
      "type": "line",
      "scene": "ts_c08_piao_friends",
      "speaker": "narrator",
      "character": "piao",
      "text": "我给毛狼发了句恭喜。他回复得很快，又跟来一句，你已经知道了啊。我说我还知道你别把周末排得比演出流程更满。毛狼发了个翻白眼的表情，说自己已经取消一项，因为飘想睡懒觉。",
      "next": "tc_c08_piao_friends_006"
    },
    "tc_c08_piao_friends_006": {
      "id": "tc_c08_piao_friends_006",
      "type": "line",
      "scene": "ts_c08_piao_friends",
      "speaker": "narrator",
      "character": "piao",
      "text": "飘在旁边看见我笑，问他是不是又说什么不着调的话。我没把手机递过去，也没故作神秘，只说他在学习别一次答应太多。",
      "next": "tc_c08_piao_friends_007",
      "expression": "expression-smile"
    },
    "tc_c08_piao_friends_007": {
      "id": "tc_c08_piao_friends_007",
      "type": "line",
      "scene": "ts_c08_piao_friends",
      "speaker": "narrator",
      "character": "piao",
      "text": "“你也学着点。”她说。",
      "next": "tc_c08_piao_friends_008"
    },
    "tc_c08_piao_friends_008": {
      "id": "tc_c08_piao_friends_008",
      "type": "line",
      "scene": "ts_c08_piao_friends",
      "speaker": "wenwen",
      "character": "piao",
      "text": "“我刚跟老板学。”",
      "next": "tc_c08_piao_friends_009"
    },
    "tc_c08_piao_friends_009": {
      "id": "tc_c08_piao_friends_009",
      "type": "line",
      "scene": "ts_c08_piao_friends",
      "speaker": "narrator",
      "character": "piao",
      "text": "她把剩下的糖装好，留了一颗在桌边，说我下次不必为了礼貌吃整盒。我把那颗也还给她，认真说我真的不爱这个味道。她停了半秒，大笑着说这次总算讲明白了。",
      "next": "tc_c08_common_exit"
    },
    "tc_c08_piao_relationship_gate": {
      "id": "tc_c08_piao_relationship_gate",
      "type": "gate",
      "scene": "ts_c08_piao_dating",
      "cases": [
        {
          "flag": "piaoRelationship",
          "value": "dating",
          "next": "tc_c08_piao_dating_001"
        },
        {
          "flag": "piaoRelationship",
          "value": "friends",
          "next": "tc_c08_piao_friends_001"
        }
      ],
      "default": null,
      "exhaustive": true
    },
    "tc_c09_piao_entry": {
      "id": "tc_c09_piao_entry",
      "type": "line",
      "scene": "ts_c09_piao_booklet",
      "speaker": "narrator",
      "character": null,
      "text": "轮班试过一阵，第六十一天师匠和我们定下后续轮班安排。我仍然会上夜班，只是终于能提早知道哪些晚上、哪些下午留给自己。",
      "next": "tc_c09_piao_booklet_002"
    },
    "tc_c09_piao_booklet_002": {
      "id": "tc_c09_piao_booklet_002",
      "type": "line",
      "scene": "ts_c09_piao_booklet",
      "speaker": "narrator",
      "character": "piao",
      "text": "飘见到我时先看了看我的脸，说这回不像从枕头里硬拽出来的。我说今天本来就不值夜班，睡醒还在家吃了东西。",
      "next": "tc_c09_piao_booklet_003"
    },
    "tc_c09_piao_booklet_003": {
      "id": "tc_c09_piao_booklet_003",
      "type": "line",
      "scene": "ts_c09_piao_booklet",
      "speaker": "narrator",
      "character": "piao",
      "text": "她拍了拍旁边的位置，让我坐。小册子的第一批已经订好了，她带来一本，不急着让我立刻从第一页夸到最后一页。",
      "next": "tc_c09_piao_booklet_004"
    },
    "tc_c09_piao_booklet_004": {
      "id": "tc_c09_piao_booklet_004",
      "type": "line",
      "scene": "ts_c09_piao_booklet",
      "speaker": "narrator",
      "character": "piao",
      "text": "我翻到那一页只有日期的空框，发现还在。她说后来换过一个排法，又换回来了。",
      "next": "tc_c09_piao_booklet_005"
    },
    "tc_c09_piao_booklet_005": {
      "id": "tc_c09_piao_booklet_005",
      "type": "line",
      "scene": "ts_c09_piao_booklet",
      "speaker": "piao",
      "character": "piao",
      "text": "“总有人说这里空着怪。”",
      "next": "tc_c09_piao_booklet_006"
    },
    "tc_c09_piao_booklet_006": {
      "id": "tc_c09_piao_booklet_006",
      "type": "line",
      "scene": "ts_c09_piao_booklet",
      "speaker": "wenwen",
      "character": "piao",
      "text": "“你觉得呢？”",
      "next": "tc_c09_piao_booklet_007"
    },
    "tc_c09_piao_booklet_007": {
      "id": "tc_c09_piao_booklet_007",
      "type": "line",
      "scene": "ts_c09_piao_booklet",
      "speaker": "piao",
      "character": "piao",
      "text": "“我觉得现在正好。”",
      "next": "tc_c09_piao_booklet_008"
    },
    "tc_c09_piao_booklet_008": {
      "id": "tc_c09_piao_booklet_008",
      "type": "line",
      "scene": "ts_c09_piao_booklet",
      "speaker": "narrator",
      "character": "piao",
      "text": "我点头，继续往后翻。封面不是我当初选的那张，也不是另一张像通知的试样。她看着我的反应，等我说完颜色比之前舒服，才笑着把自己的那本收起来。",
      "next": "tc_c09_piao_booklet_009"
    },
    "tc_c09_piao_booklet_009": {
      "id": "tc_c09_piao_booklet_009",
      "type": "line",
      "scene": "ts_c09_piao_booklet",
      "speaker": "narrator",
      "character": "piao",
      "text": "我们没有为几本纸办一场盛大的发布。她说还想送给愿意留话的几家店，我说有一天我休息，可以同行；要是时间对不上，她先去也行。",
      "next": "tc_c09_piao_relationship_gate"
    },
    "tc_c09_piao_dating_001": {
      "id": "tc_c09_piao_dating_001",
      "type": "line",
      "scene": "ts_c09_piao_dating",
      "speaker": "narrator",
      "character": "piao",
      "text": "飘从我的手里抽出一张书签，翻到背面，那里画了一条歪歪的横线。",
      "next": "tc_c09_piao_dating_002"
    },
    "tc_c09_piao_dating_002": {
      "id": "tc_c09_piao_dating_002",
      "type": "line",
      "scene": "ts_c09_piao_dating",
      "speaker": "piao",
      "character": "piao",
      "text": "“做记号的。你看完哪一页，夹到哪一页，别再把角折成三角。”",
      "next": "tc_c09_piao_dating_003"
    },
    "tc_c09_piao_dating_003": {
      "id": "tc_c09_piao_dating_003",
      "type": "line",
      "scene": "ts_c09_piao_dating",
      "speaker": "narrator",
      "character": "piao",
      "text": "我问她是不是嫌我糟蹋她的书。她说对，也嫌我假装一天能看完但其实只翻了三页。",
      "next": "tc_c09_piao_dating_004"
    },
    "tc_c09_piao_dating_004": {
      "id": "tc_c09_piao_dating_004",
      "type": "line",
      "scene": "ts_c09_piao_dating",
      "speaker": "wenwen",
      "character": "piao",
      "text": "“那我明天继续。”",
      "next": "tc_c09_piao_dating_005"
    },
    "tc_c09_piao_dating_005": {
      "id": "tc_c09_piao_dating_005",
      "type": "line",
      "scene": "ts_c09_piao_dating",
      "speaker": "narrator",
      "character": "piao",
      "text": "她看了看我，忽然问下个月能不能提前挑一天，我们去一个两个人都没去过的地方吃饭。不一定远，不一定贵，只是别总在熟悉的路口绕圈。",
      "next": "tc_c09_piao_dating_006"
    },
    "tc_c09_piao_dating_006": {
      "id": "tc_c09_piao_dating_006",
      "type": "line",
      "scene": "ts_c09_piao_dating",
      "speaker": "narrator",
      "character": "piao",
      "text": "我打开手机，把确定休息的日子给她看。我们挑了一天，她也查了自己的安排，然后把店名留空。",
      "next": "tc_c09_piao_dating_007"
    },
    "tc_c09_piao_dating_007": {
      "id": "tc_c09_piao_dating_007",
      "type": "line",
      "scene": "ts_c09_piao_dating",
      "speaker": "narrator",
      "character": "piao",
      "text": "“这次不用今天就选好。”她说。",
      "next": "tc_c09_piao_dating_008"
    },
    "tc_c09_piao_dating_008": {
      "id": "tc_c09_piao_dating_008",
      "type": "line",
      "scene": "ts_c09_piao_dating",
      "speaker": "narrator",
      "character": "piao",
      "text": "我问她这段时间跟我交往，最不习惯什么。她说我道歉时喜欢把前因后果讲太长，听到后面都忘了最开始气什么。",
      "next": "tc_c09_piao_dating_009"
    },
    "tc_c09_piao_dating_009": {
      "id": "tc_c09_piao_dating_009",
      "type": "line",
      "scene": "ts_c09_piao_dating",
      "speaker": "narrator",
      "character": "piao",
      "text": "我想解释，被她一眼看回来，只能笑。",
      "next": "tc_c09_piao_dating_010"
    },
    "tc_c09_piao_dating_010": {
      "id": "tc_c09_piao_dating_010",
      "type": "line",
      "scene": "ts_c09_piao_dating",
      "speaker": "narrator",
      "character": "piao",
      "text": "轮到我说，我告诉她，她认真看一样东西时，问话太少，我常误以为自己挑得特别差。她愣了一会儿，说那下次先告诉我，她只是在想，不是在打分。",
      "next": "tc_c09_piao_dating_011"
    },
    "tc_c09_piao_dating_011": {
      "id": "tc_c09_piao_dating_011",
      "type": "line",
      "scene": "ts_c09_piao_dating",
      "speaker": "narrator",
      "character": "piao",
      "text": "说完这些，我们坐得更近了一点。她的手搭在我的手腕上，温度和第一次牵手时差不多。我低头亲她，她先笑，又认真地回吻了一下。",
      "next": "tc_c09_piao_dating_012"
    },
    "tc_c09_piao_dating_012": {
      "id": "tc_c09_piao_dating_012",
      "type": "line",
      "scene": "ts_c09_piao_dating",
      "speaker": "narrator",
      "character": "piao",
      "text": "风把书页吹开，她伸手去按，我们两个同时动，碰到一起，反而把书签挤掉了。",
      "next": "tc_c09_piao_dating_013"
    },
    "tc_c09_piao_dating_013": {
      "id": "tc_c09_piao_dating_013",
      "type": "line",
      "scene": "ts_c09_piao_dating",
      "speaker": "narrator",
      "character": "piao",
      "text": "“先捡东西。”她说。",
      "next": "tc_c09_piao_dating_014"
    },
    "tc_c09_piao_dating_014": {
      "id": "tc_c09_piao_dating_014",
      "type": "line",
      "scene": "ts_c09_piao_dating",
      "speaker": "narrator",
      "character": "piao",
      "text": "我弯下腰，她按着我的肩，免得我撞上桌角。刚才那些关于以后的小约定，没有因此变得不郑重。",
      "next": "tc_c09_common_exit"
    },
    "tc_c09_piao_friends_001": {
      "id": "tc_c09_piao_friends_001",
      "type": "line",
      "scene": "ts_c09_piao_friends",
      "speaker": "narrator",
      "character": "piao",
      "text": "我看到最后一页的时候，毛狼的电话打过来。飘接起，说她还在和我坐着，大概再过半小时就走。他似乎说不急，她嗯了一声，问他有没有把饭吃了。",
      "next": "tc_c09_piao_friends_002"
    },
    "tc_c09_piao_friends_002": {
      "id": "tc_c09_piao_friends_002",
      "type": "line",
      "scene": "ts_c09_piao_friends",
      "speaker": "narrator",
      "character": "piao",
      "text": "挂断以后，她问我听见这类电话会不会尴尬。",
      "next": "tc_c09_piao_friends_003"
    },
    "tc_c09_piao_friends_003": {
      "id": "tc_c09_piao_friends_003",
      "type": "line",
      "scene": "ts_c09_piao_friends",
      "speaker": "narrator",
      "character": "piao",
      "text": "我想了想，说不会，前提是别让我在旁边给你们对账，看谁上次又忘了什么。",
      "next": "tc_c09_piao_friends_004"
    },
    "tc_c09_piao_friends_004": {
      "id": "tc_c09_piao_friends_004",
      "type": "line",
      "scene": "ts_c09_piao_friends",
      "speaker": "piao",
      "character": "piao",
      "text": "“那不会。我记得比你清楚。”",
      "next": "tc_c09_piao_friends_005"
    },
    "tc_c09_piao_friends_005": {
      "id": "tc_c09_piao_friends_005",
      "type": "line",
      "scene": "ts_c09_piao_friends",
      "speaker": "narrator",
      "character": "piao",
      "text": "她把一张多出来的书签递给我。我拿着问这是赠品，还是以后催我看完的证据。她说都有。",
      "next": "tc_c09_piao_friends_006"
    },
    "tc_c09_piao_friends_006": {
      "id": "tc_c09_piao_friends_006",
      "type": "line",
      "scene": "ts_c09_piao_friends",
      "speaker": "narrator",
      "character": "piao",
      "text": "我们说起第二十一天那个下午。她说当时回家确实有些难受，后来想通，不用拿今天的关系去修改那天说过的话。那天她有喜欢，今天也有新的喜欢，都没什么见不得人。",
      "next": "tc_c09_piao_friends_007"
    },
    "tc_c09_piao_friends_007": {
      "id": "tc_c09_piao_friends_007",
      "type": "line",
      "scene": "ts_c09_piao_friends",
      "speaker": "narrator",
      "character": "piao",
      "text": "我说自己庆幸没接一句“以后再说”。如果真那么讲，恐怕现在连坐下来聊这通电话都别扭。",
      "next": "tc_c09_piao_friends_008"
    },
    "tc_c09_piao_friends_008": {
      "id": "tc_c09_piao_friends_008",
      "type": "line",
      "scene": "ts_c09_piao_friends",
      "speaker": "narrator",
      "character": "piao",
      "text": "她点头，没有再把那个旧分岔放大。两个人愿意说清楚，是为了继续生活，不是每隔一段时间回去给同一次选择打分。",
      "next": "tc_c09_piao_friends_009"
    },
    "tc_c09_piao_friends_009": {
      "id": "tc_c09_piao_friends_009",
      "type": "line",
      "scene": "ts_c09_piao_friends",
      "speaker": "narrator",
      "character": "maolang",
      "text": "毛狼来接她时，我还剩两页没看完。飘让我带走，毛狼伸手想翻封面，被她用书脊轻轻碰开。",
      "next": "tc_c09_piao_friends_010"
    },
    "tc_c09_piao_friends_010": {
      "id": "tc_c09_piao_friends_010",
      "type": "line",
      "scene": "ts_c09_piao_friends",
      "speaker": "piao",
      "character": "piao",
      "text": "“你的在袋子里。别抢。”",
      "next": "tc_c09_piao_friends_011"
    },
    "tc_c09_piao_friends_011": {
      "id": "tc_c09_piao_friends_011",
      "type": "line",
      "scene": "ts_c09_piao_friends_parting",
      "speaker": "narrator",
      "character": "maolang",
      "text": "他笑着退回手，问我哪天休息再组队。我报了一个晚上，提醒他别忘了自己还有演出。我们把时间说定，就在路边分开了。",
      "next": "tc_c09_common_exit",
      "expression": "expression-smile"
    },
    "tc_c09_piao_relationship_gate": {
      "id": "tc_c09_piao_relationship_gate",
      "type": "gate",
      "scene": "ts_c09_piao_dating",
      "cases": [
        {
          "flag": "piaoRelationship",
          "value": "dating",
          "next": "tc_c09_piao_dating_001"
        },
        {
          "flag": "piaoRelationship",
          "value": "friends",
          "next": "tc_c09_piao_friends_001"
        }
      ],
      "default": null,
      "exhaustive": true
    },
    "tc_c10_piao_dating_001": {
      "id": "tc_c10_piao_dating_001",
      "type": "line",
      "scene": "ts_c10_piao_dating",
      "speaker": "narrator",
      "character": "piao",
      "text": "飘把第二版小册子放上桌的时候，我正跟一只拧得特别紧的瓶盖较劲。",
      "next": "tc_c10_piao_dating_002"
    },
    "tc_c10_piao_dating_002": {
      "id": "tc_c10_piao_dating_002",
      "type": "line",
      "scene": "ts_c10_piao_dating",
      "speaker": "narrator",
      "character": "piao",
      "text": "“要不要帮忙？”她问。",
      "next": "tc_c10_piao_dating_003"
    },
    "tc_c10_piao_dating_003": {
      "id": "tc_c10_piao_dating_003",
      "type": "line",
      "scene": "ts_c10_piao_dating",
      "speaker": "wenwen",
      "character": "piao",
      "text": "“再给我五秒。”",
      "next": "tc_c10_piao_dating_004"
    },
    "tc_c10_piao_dating_004": {
      "id": "tc_c10_piao_dating_004",
      "type": "line",
      "scene": "ts_c10_piao_dating",
      "speaker": "narrator",
      "character": "piao",
      "text": "她数到四，我主动把瓶子递过去。她接过来，试了一下，也拧不开。最后我们拿毛巾垫着才打开，水溅了一点在桌上，她迅速把册子举起来。",
      "next": "tc_c10_piao_dating_005"
    },
    "tc_c10_piao_dating_005": {
      "id": "tc_c10_piao_dating_005",
      "type": "line",
      "scene": "ts_c10_piao_dating",
      "speaker": "piao",
      "character": "piao",
      "text": "“幸好你今天不是先看书。”",
      "next": "tc_c10_piao_dating_006"
    },
    "tc_c10_piao_dating_006": {
      "id": "tc_c10_piao_dating_006",
      "type": "line",
      "scene": "ts_c10_piao_dating",
      "speaker": "narrator",
      "character": "piao",
      "text": "窗外的雨下得不大。我们挑了个休息日见面，我仍在网吧轮班，夜班照上，只是不再拿所有私人时间去补那些胡乱答应的约。我没有突然变成什么老板，存下来的钱也还有想用却不敢一次用完的时候。",
      "next": "tc_c10_piao_dating_007"
    },
    "tc_c10_piao_dating_007": {
      "id": "tc_c10_piao_dating_007",
      "type": "line",
      "scene": "ts_c10_piao_dating",
      "speaker": "narrator",
      "character": "piao",
      "text": "飘坐在对面，和两年前相比，她讲话的样子并没有换一个人。遇到不满意的东西还是会盯半天，笑起来的小酒窝也还是先于笑声出现。第二版里换了几页，增了几段新话，有的店已经不在原来的位置，她征得同意以后，把变化留在旁边。",
      "next": "tc_c10_piao_dating_008",
      "expression": "expression-smile"
    },
    "tc_c10_piao_dating_008": {
      "id": "tc_c10_piao_dating_008",
      "type": "line",
      "scene": "ts_c10_piao_dating",
      "speaker": "narrator",
      "character": "piao",
      "text": "我翻到我们以前吃凉糕的那条街，问现在那家还会不会记得我。",
      "next": "tc_c10_piao_dating_009"
    },
    "tc_c10_piao_dating_009": {
      "id": "tc_c10_piao_dating_009",
      "type": "line",
      "scene": "ts_c10_piao_dating",
      "speaker": "piao",
      "character": "piao",
      "text": "“记得谁加了一整罐糖吗？”",
      "next": "tc_c10_piao_dating_010"
    },
    "tc_c10_piao_dating_010": {
      "id": "tc_c10_piao_dating_010",
      "type": "line",
      "scene": "ts_c10_piao_dating",
      "speaker": "wenwen",
      "character": "piao",
      "text": "“没一整罐。”",
      "next": "tc_c10_piao_dating_011"
    },
    "tc_c10_piao_dating_011": {
      "id": "tc_c10_piao_dating_011",
      "type": "line",
      "scene": "ts_c10_piao_dating",
      "speaker": "piao",
      "character": "piao",
      "text": "“你每年说得都更少一点。”",
      "next": "tc_c10_piao_dating_012"
    },
    "tc_c10_piao_dating_012": {
      "id": "tc_c10_piao_dating_012",
      "type": "line",
      "scene": "ts_c10_piao_dating",
      "speaker": "narrator",
      "character": "piao",
      "text": "她把一张书签推过来，还是提醒我别折角。我从自己包里找出第一版的书签，边上已经磨白了。她原本想说的话停了一下，伸手摸了摸那个毛边。",
      "next": "tc_c10_piao_dating_013"
    },
    "tc_c10_piao_dating_013": {
      "id": "tc_c10_piao_dating_013",
      "type": "line",
      "scene": "ts_c10_piao_dating",
      "speaker": "piao",
      "character": "piao",
      "text": "“你还用这个。”",
      "next": "tc_c10_piao_dating_014"
    },
    "tc_c10_piao_dating_014": {
      "id": "tc_c10_piao_dating_014",
      "type": "line",
      "scene": "ts_c10_piao_dating",
      "speaker": "wenwen",
      "character": "piao",
      "text": "“能夹住就行。”",
      "next": "tc_c10_piao_dating_015"
    },
    "tc_c10_piao_dating_015": {
      "id": "tc_c10_piao_dating_015",
      "type": "line",
      "scene": "ts_c10_piao_dating",
      "speaker": "narrator",
      "character": "piao",
      "text": "我们没有给这句话再配一个特别漂亮的意思。她把自己的椅子挪近，靠着我看了两页，看到一段自己改过很多次的文字，还想伸手拿笔。",
      "next": "tc_c10_piao_dating_016"
    },
    "tc_c10_piao_dating_016": {
      "id": "tc_c10_piao_dating_016",
      "type": "line",
      "scene": "ts_c10_piao_dating",
      "speaker": "narrator",
      "character": "piao",
      "text": "我拦住她：“这本都订好了。”",
      "next": "tc_c10_piao_dating_017"
    },
    "tc_c10_piao_dating_017": {
      "id": "tc_c10_piao_dating_017",
      "type": "line",
      "scene": "ts_c10_piao_dating",
      "speaker": "piao",
      "character": "piao",
      "text": "“我知道。我在我的这本上改。”",
      "next": "tc_c10_piao_dating_018"
    },
    "tc_c10_piao_dating_018": {
      "id": "tc_c10_piao_dating_018",
      "type": "line",
      "scene": "ts_c10_piao_dating",
      "speaker": "narrator",
      "character": "piao",
      "text": "我把笔递给她，她低头写了一小处，才肯放过。",
      "next": "tc_c10_piao_dating_019"
    },
    "tc_c10_piao_dating_019": {
      "id": "tc_c10_piao_dating_019",
      "type": "line",
      "scene": "ts_c10_piao_dating_dinner_walk",
      "speaker": "narrator",
      "character": "piao",
      "text": "后来我们一起去买晚饭。走到路口，我问她想往哪边，她说左边，我说右边也有一家没试过。我们站着商量了半分钟，最后决定今天往右，下次往左。",
      "next": "tc_c10_piao_dating_020"
    },
    "tc_c10_piao_dating_020": {
      "id": "tc_c10_piao_dating_020",
      "type": "line",
      "scene": "ts_c10_piao_dating_dinner_walk",
      "speaker": "narrator",
      "character": "piao",
      "text": "她伸手牵住我，问我下次是不是已经知道哪天休息。我说知道，到家发给她。",
      "next": "tc_c10_piao_dating_021"
    },
    "tc_c10_piao_dating_021": {
      "id": "tc_c10_piao_dating_021",
      "type": "line",
      "scene": "ts_c10_piao_dating_dinner_walk",
      "speaker": "narrator",
      "character": "piao",
      "text": "雨又密了一点。她撑伞，我提袋子，两个人的步子有快有慢，过了前面那道积水，才重新走在一起。",
      "next": "tc_c10_piao_end_dating"
    },
    "tc_c10_piao_friends_001": {
      "id": "tc_c10_piao_friends_001",
      "type": "line",
      "scene": "ts_c10_piao_friends",
      "speaker": "narrator",
      "character": "piao",
      "text": "飘和毛狼结婚后的一个下午，我们在熟悉的小店碰面。典礼已经是上一次见面的事，今天她没穿特别的衣服，毛狼说去买点东西，要晚几分钟。",
      "next": "tc_c10_piao_friends_002"
    },
    "tc_c10_piao_friends_002": {
      "id": "tc_c10_piao_friends_002",
      "type": "line",
      "scene": "ts_c10_piao_friends",
      "speaker": "narrator",
      "character": "piao",
      "text": "飘先把一本第二版小册子给我。我翻了两页，发现她这回留的空白跟以前不太一样。她说比第一版换过几处，改多少算多少，不必替它宣布一个宏大的开始。",
      "next": "tc_c10_piao_friends_003"
    },
    "tc_c10_piao_friends_003": {
      "id": "tc_c10_piao_friends_003",
      "type": "line",
      "scene": "ts_c10_piao_friends",
      "speaker": "narrator",
      "character": "piao",
      "text": "我问毛狼怎么还没来，她把手机放到桌上：“他买错了调料，回去换。你不许替他说‘也能用’。”",
      "next": "tc_c10_piao_friends_004"
    },
    "tc_c10_piao_friends_004": {
      "id": "tc_c10_piao_friends_004",
      "type": "line",
      "scene": "ts_c10_piao_friends",
      "speaker": "narrator",
      "character": "piao",
      "text": "我把准备张开的嘴闭上。她笑了，低头喝了一口水。",
      "next": "tc_c10_piao_friends_005"
    },
    "tc_c10_piao_friends_005": {
      "id": "tc_c10_piao_friends_005",
      "type": "line",
      "scene": "ts_c10_piao_friends",
      "speaker": "narrator",
      "character": "piao",
      "text": "这两年他们有热热闹闹的时候，也有各忙各的、半天才回一条消息的时候。她提起这些，并不是向我证明自己选对了，只是朋友碰面，事情说到这里。",
      "next": "tc_c10_piao_friends_006"
    },
    "tc_c10_piao_friends_006": {
      "id": "tc_c10_piao_friends_006",
      "type": "line",
      "scene": "ts_c10_piao_friends",
      "speaker": "narrator",
      "character": "piao",
      "text": "毛狼到了以后，先把袋子交给她检查，自己拉开椅子。他说下次绝对记得，我说你先别把下次押上，他瞪我一眼，飘在旁边笑得停不下来。",
      "next": "tc_c10_piao_friends_007"
    },
    "tc_c10_piao_friends_007": {
      "id": "tc_c10_piao_friends_007",
      "type": "line",
      "scene": "ts_c10_piao_friends",
      "speaker": "narrator",
      "character": "piao",
      "text": "我仍在网吧轮班。说到这个，毛狼问我最近哪天能一起玩，我报出两个确定的晚上。他看了看自己的演出安排，删掉一个，又抬头问飘那晚有没有原来约好的事。",
      "next": "tc_c10_piao_friends_008"
    },
    "tc_c10_piao_friends_008": {
      "id": "tc_c10_piao_friends_008",
      "type": "line",
      "scene": "ts_c10_piao_friends",
      "speaker": "narrator",
      "character": "piao",
      "text": "飘想了想，说有，你说陪我去拿东西。毛狼立刻把手机翻过来找记录，找到了，也没装作当时只说有空再去。",
      "next": "tc_c10_piao_friends_009"
    },
    "tc_c10_piao_friends_009": {
      "id": "tc_c10_piao_friends_009",
      "type": "line",
      "scene": "ts_c10_piao_friends",
      "speaker": "narrator",
      "character": "piao",
      "text": "我们最后约在另一个晚上。事情没多复杂，没有人为组织不起来的一局游戏失望到翻旧账。",
      "next": "tc_c10_piao_friends_010"
    },
    "tc_c10_piao_friends_010": {
      "id": "tc_c10_piao_friends_010",
      "type": "line",
      "scene": "ts_c10_piao_friends_parting",
      "speaker": "narrator",
      "character": "piao",
      "text": "吃完以后，飘和毛狼沿街去买菜。我拎着自己的东西往另一边走。到了斑马线前，她回头叫我，提醒我那本册子别放进装饮料的袋子。",
      "next": "tc_c10_piao_friends_011"
    },
    "tc_c10_piao_friends_011": {
      "id": "tc_c10_piao_friends_011",
      "type": "line",
      "scene": "ts_c10_piao_friends_parting",
      "speaker": "narrator",
      "character": "piao",
      "text": "我举起另一个袋子给她看。毛狼在旁边也跟着抬手，像举错牌的主持人，被她拉了下袖子。",
      "next": "tc_c10_piao_friends_012"
    },
    "tc_c10_piao_friends_012": {
      "id": "tc_c10_piao_friends_012",
      "type": "line",
      "scene": "ts_c10_piao_friends_parting",
      "speaker": "narrator",
      "character": "piao",
      "text": "我笑着等绿灯。我们的人生没挤在同一条路上，偶尔凑到一张桌子旁，仍然有说不完的闲话，也容得下谁先回家。",
      "next": "tc_c10_piao_end_friends"
    },
    "tc_c10_piao_entry": {
      "id": "tc_c10_piao_entry",
      "type": "gate",
      "scene": "ts_c10_piao_dating",
      "cases": [
        {
          "flag": "piaoRelationship",
          "value": "dating",
          "next": "tc_c10_piao_dating_001"
        },
        {
          "flag": "piaoRelationship",
          "value": "friends",
          "next": "tc_c10_piao_friends_001"
        }
      ],
      "default": null,
      "exhaustive": true
    },
    "tc_c10_piao_end_dating": {
      "id": "tc_c10_piao_end_dating",
      "type": "end",
      "scene": "ts_c10_piao_dating_dinner_walk",
      "character": "piao",
      "title": "仍然在一起的两个人",
      "text": "",
      "endingId": "tc_c10_piao_end_dating"
    },
    "tc_c10_piao_end_friends": {
      "id": "tc_c10_piao_end_friends",
      "type": "end",
      "scene": "ts_c10_piao_friends_parting",
      "character": "piao",
      "title": "婚礼以后的普通来往",
      "text": "",
      "endingId": "tc_c10_piao_end_friends"
    },
    "tc_c03_friends_entry": {
      "id": "tc_c03_friends_entry",
      "type": "line",
      "scene": "ts_c03_friends_tailoring",
      "speaker": "narrator",
      "character": null,
      "text": "我给毛狼打电话，问他下午出不出来。",
      "next": "tc_c03_friends_tailoring_002"
    },
    "tc_c03_friends_tailoring_002": {
      "id": "tc_c03_friends_tailoring_002",
      "type": "line",
      "scene": "ts_c03_friends_tailoring",
      "speaker": "maolang",
      "character": null,
      "text": "“干什么？”",
      "next": "tc_c03_friends_tailoring_003"
    },
    "tc_c03_friends_tailoring_003": {
      "id": "tc_c03_friends_tailoring_003",
      "type": "line",
      "scene": "ts_c03_friends_tailoring",
      "speaker": "wenwen",
      "character": null,
      "text": "“没什么。坐坐。”",
      "next": "tc_c03_friends_tailoring_004"
    },
    "tc_c03_friends_tailoring_004": {
      "id": "tc_c03_friends_tailoring_004",
      "type": "line",
      "scene": "ts_c03_friends_tailoring",
      "speaker": "narrator",
      "character": null,
      "text": "电话那边静了两秒：“你借钱？”",
      "next": "tc_c03_friends_tailoring_005"
    },
    "tc_c03_friends_tailoring_005": {
      "id": "tc_c03_friends_tailoring_005",
      "type": "line",
      "scene": "ts_c03_friends_tailoring",
      "speaker": "wenwen",
      "character": null,
      "text": "“我现在挂还来得及吗？”",
      "next": "tc_c03_friends_tailoring_006"
    },
    "tc_c03_friends_tailoring_006": {
      "id": "tc_c03_friends_tailoring_006",
      "type": "line",
      "scene": "ts_c03_friends_tailoring",
      "speaker": "narrator",
      "character": null,
      "text": "他笑起来，说自己刚拿到一份临时演出的衣服，在店里等改裤脚。我要是不嫌没意思，可以过来。我睡过觉，晚上十点才上班，确实有这段时间。",
      "next": "tc_c03_friends_tailoring_007"
    },
    "tc_c03_friends_tailoring_007": {
      "id": "tc_c03_friends_tailoring_007",
      "type": "line",
      "scene": "ts_c03_friends_tailoring_shop",
      "speaker": "narrator",
      "character": "maolang",
      "text": "店里摆着一面很长的镜子。毛狼站在镜子前，裤脚被折上去一截，两条腿显得不太一样长。",
      "next": "tc_c03_friends_tailoring_008"
    },
    "tc_c03_friends_tailoring_008": {
      "id": "tc_c03_friends_tailoring_008",
      "type": "line",
      "scene": "ts_c03_friends_tailoring_shop",
      "speaker": "narrator",
      "character": "maolang",
      "text": "“别拍。”他先说。",
      "next": "tc_c03_friends_tailoring_009"
    },
    "tc_c03_friends_tailoring_009": {
      "id": "tc_c03_friends_tailoring_009",
      "type": "line",
      "scene": "ts_c03_friends_tailoring_shop",
      "speaker": "wenwen",
      "character": "maolang",
      "text": "“我还没掏手机。”",
      "next": "tc_c03_friends_tailoring_010"
    },
    "tc_c03_friends_tailoring_010": {
      "id": "tc_c03_friends_tailoring_010",
      "type": "line",
      "scene": "ts_c03_friends_tailoring_shop",
      "speaker": "maolang",
      "character": "maolang",
      "text": "“你那个笑就已经掏了。”",
      "next": "tc_c03_friends_tailoring_011"
    },
    "tc_c03_friends_tailoring_011": {
      "id": "tc_c03_friends_tailoring_011",
      "type": "line",
      "scene": "ts_c03_friends_tailoring_shop",
      "speaker": "narrator",
      "character": "maolang",
      "text": "师傅让他转一圈。他一边转，一边跟我讲这回的主持本来定了别人，对方临时来不了，才找他补。他接得高兴，又不太想显得自己只是捡了空。",
      "next": "tc_c03_friends_tailoring_012"
    },
    "tc_c03_friends_tailoring_012": {
      "id": "tc_c03_friends_tailoring_012",
      "type": "line",
      "scene": "ts_c03_friends_tailoring_shop",
      "speaker": "narrator",
      "character": "maolang",
      "text": "“替补也要钱。”我说。",
      "next": "tc_c03_friends_tailoring_013"
    },
    "tc_c03_friends_tailoring_013": {
      "id": "tc_c03_friends_tailoring_013",
      "type": "line",
      "scene": "ts_c03_friends_tailoring_shop",
      "speaker": "maolang",
      "character": "maolang",
      "text": "“这句话倒对。”",
      "next": "tc_c03_friends_tailoring_014"
    },
    "tc_c03_friends_tailoring_014": {
      "id": "tc_c03_friends_tailoring_014",
      "type": "line",
      "scene": "ts_c03_friends_tailoring_shop",
      "speaker": "narrator",
      "character": "maolang",
      "text": "裤脚还要等。他坐到我旁边，把手机里的串词给我看。我看了两行，承认里面有几个词不认识。他说他也不认识，刚刚特意问过，免得现场乱念。",
      "next": "tc_c03_friends_tailoring_015"
    },
    "tc_c03_friends_tailoring_015": {
      "id": "tc_c03_friends_tailoring_015",
      "type": "line",
      "scene": "ts_c03_friends_tailoring_shop",
      "speaker": "narrator",
      "character": "maolang",
      "text": "我们没把那份串词改成两个人的共同作品。我只是陪他坐着，偶尔听他把一句话念顺。后来他不想念了，就问我出租屋收拾完没有。",
      "next": "tc_c03_friends_tailoring_016"
    },
    "tc_c03_friends_tailoring_016": {
      "id": "tc_c03_friends_tailoring_016",
      "type": "line",
      "scene": "ts_c03_friends_tailoring_shop",
      "speaker": "wenwen",
      "character": "maolang",
      "text": "“箱子没收。”",
      "next": "tc_c03_friends_tailoring_017"
    },
    "tc_c03_friends_tailoring_017": {
      "id": "tc_c03_friends_tailoring_017",
      "type": "line",
      "scene": "ts_c03_friends_tailoring_shop",
      "speaker": "maolang",
      "character": "maolang",
      "text": "“你那个拖拉机还在？”",
      "next": "tc_c03_friends_tailoring_018"
    },
    "tc_c03_friends_tailoring_018": {
      "id": "tc_c03_friends_tailoring_018",
      "type": "line",
      "scene": "ts_c03_friends_tailoring_shop",
      "speaker": "wenwen",
      "character": "maolang",
      "text": "“在。比较能代表我目前状态。”",
      "next": "tc_c03_friends_tailoring_019"
    },
    "tc_c03_friends_tailoring_019": {
      "id": "tc_c03_friends_tailoring_019",
      "type": "line",
      "scene": "ts_c03_friends_tailoring_shop",
      "speaker": "maolang",
      "character": "maolang",
      "text": "“目前状态怎么还带噪声。”",
      "next": "tc_c03_friends_tailoring_020"
    },
    "tc_c03_friends_tailoring_020": {
      "id": "tc_c03_friends_tailoring_020",
      "type": "line",
      "scene": "ts_c03_friends_tailoring_shop",
      "speaker": "narrator",
      "character": "maolang",
      "text": "我没忍住笑。这样的下午没有成果可以拍照发群，却也不觉得白过。",
      "next": "tc_c03_friends_online_game_001"
    },
    "tc_c03_friends_online_game_001": {
      "id": "tc_c03_friends_online_game_001",
      "type": "line",
      "scene": "ts_c03_friends_online_game",
      "speaker": "narrator",
      "character": null,
      "text": "今天休班。毛狼约了个简单的合作游戏，师匠也说想玩。他早早把店务交给当值同事，回家上线，第一句先强调：“我只玩一小时。”",
      "next": "tc_c03_friends_online_game_002"
    },
    "tc_c03_friends_online_game_002": {
      "id": "tc_c03_friends_online_game_002",
      "type": "line",
      "scene": "ts_c03_friends_online_game",
      "speaker": "narrator",
      "character": null,
      "text": "“你别走不出来就说网络问题。”毛狼说。",
      "next": "tc_c03_friends_online_game_003"
    },
    "tc_c03_friends_online_game_003": {
      "id": "tc_c03_friends_online_game_003",
      "type": "line",
      "scene": "ts_c03_friends_online_game",
      "speaker": "narrator",
      "character": null,
      "text": "我在住处戴好耳机。叶岚当天有事没参加，毛狼没有到处催，又找了另一个朋友补位。",
      "next": "tc_c03_friends_online_game_004"
    },
    "tc_c03_friends_online_game_004": {
      "id": "tc_c03_friends_online_game_004",
      "type": "line",
      "scene": "ts_c03_friends_online_game",
      "speaker": "narrator",
      "character": null,
      "text": "刚开始我还想教师匠，告诉他每一步怎么走。他照做了两次，第三次故意往另一边去，掉下去的时候声音很平静。",
      "next": "tc_c03_friends_online_game_005"
    },
    "tc_c03_friends_online_game_005": {
      "id": "tc_c03_friends_online_game_005",
      "type": "line",
      "scene": "ts_c03_friends_online_game",
      "speaker": "narrator",
      "character": null,
      "text": "“我想看看。”他说。",
      "next": "tc_c03_friends_online_game_006"
    },
    "tc_c03_friends_online_game_006": {
      "id": "tc_c03_friends_online_game_006",
      "type": "line",
      "scene": "ts_c03_friends_online_game",
      "speaker": "narrator",
      "character": null,
      "text": "毛狼笑得说不出话。",
      "next": "tc_c03_friends_online_game_007"
    },
    "tc_c03_friends_online_game_007": {
      "id": "tc_c03_friends_online_game_007",
      "type": "line",
      "scene": "ts_c03_friends_online_game",
      "speaker": "narrator",
      "character": null,
      "text": "我先觉得可惜，过了一会儿也跟着笑。下一次换我想试一条没走过的路，师匠没提醒，等我失败才说：“看来那边景色确实值得参观。”",
      "next": "tc_c03_friends_online_game_008"
    },
    "tc_c03_friends_online_game_008": {
      "id": "tc_c03_friends_online_game_008",
      "type": "line",
      "scene": "ts_c03_friends_online_game",
      "speaker": "narrator",
      "character": null,
      "text": "一小时快到，毛狼喊再试一次。我习惯性跟着说好，师匠却直接退出。",
      "next": "tc_c03_friends_online_game_009"
    },
    "tc_c03_friends_online_game_009": {
      "id": "tc_c03_friends_online_game_009",
      "type": "line",
      "scene": "ts_c03_friends_online_game",
      "speaker": "shijiang",
      "character": null,
      "text": "“我明早还要出门。你们玩。”",
      "next": "tc_c03_friends_online_game_010"
    },
    "tc_c03_friends_online_game_010": {
      "id": "tc_c03_friends_online_game_010",
      "type": "line",
      "scene": "ts_c03_friends_online_game",
      "speaker": "narrator",
      "character": null,
      "text": "没有领导讲话，也没有用老板身份给这件事做总结。他就是到点走了。我们余下几个人又玩了一小会儿，自己也散场。",
      "next": "tc_c03_friends_online_game_011"
    },
    "tc_c03_friends_online_game_011": {
      "id": "tc_c03_friends_online_game_011",
      "type": "line",
      "scene": "ts_c03_friends_online_game",
      "speaker": "narrator",
      "character": null,
      "text": "耳机摘下以后，我发现这种相处挺轻松：不需要替师匠保住面子，也不必因为毛狼热闹，就答应所有“再来一次”。",
      "next": "tc_c03_friends_settling_in_001"
    },
    "tc_c03_friends_settling_in_001": {
      "id": "tc_c03_friends_settling_in_001",
      "type": "line",
      "scene": "ts_c03_friends_settling_in",
      "speaker": "narrator",
      "character": null,
      "text": "出租屋那只箱子终于打开了。我把衣服放进柜子，拿出底下一小包没舍得扔的旧东西。有一张以前攒积分换来的游戏卡，卡面已经磨花，拿出来也没什么用。",
      "next": "tc_c03_friends_settling_in_002"
    },
    "tc_c03_friends_settling_in_002": {
      "id": "tc_c03_friends_settling_in_002",
      "type": "line",
      "scene": "ts_c03_friends_settling_in",
      "speaker": "narrator",
      "character": null,
      "text": "毛狼过来还我一把伞，看见地上的东西，说像搬家搬到一半遇上考古。",
      "next": "tc_c03_friends_settling_in_003"
    },
    "tc_c03_friends_settling_in_003": {
      "id": "tc_c03_friends_settling_in_003",
      "type": "line",
      "scene": "ts_c03_friends_settling_in",
      "speaker": "narrator",
      "character": null,
      "text": "“你说这是摆出来，还是收着？”我问他。",
      "next": "tc_c03_friends_settling_in_004"
    },
    "tc_c03_friends_settling_in_004": {
      "id": "tc_c03_friends_settling_in_004",
      "type": "line",
      "scene": "ts_c03_friends_settling_in",
      "speaker": "maolang",
      "character": null,
      "text": "“问我没用，我都摆。摆满了再怪房子小。”",
      "next": "tc_c03_friends_settling_in_005"
    },
    "tc_c03_friends_settling_in_005": {
      "id": "tc_c03_friends_settling_in_005",
      "type": "line",
      "scene": "ts_c03_friends_settling_in",
      "speaker": "narrator",
      "character": null,
      "text": "我把卡搁在桌角，把箱子推到床底。毛狼坐在唯一的椅子上，低头刷了一会儿手机。我也没急着找节目招待他，只把水杯拿过来。",
      "next": "tc_c03_friends_settling_in_006"
    },
    "tc_c03_friends_settling_in_006": {
      "id": "tc_c03_friends_settling_in_006",
      "type": "line",
      "scene": "ts_c03_friends_settling_in",
      "speaker": "narrator",
      "character": null,
      "text": "他问我要不要以后找个离店更近的地方，我说暂时不用，这里能住。说完，自己愣了一下。",
      "next": "tc_c03_friends_settling_in_007"
    },
    "tc_c03_friends_settling_in_007": {
      "id": "tc_c03_friends_settling_in_007",
      "type": "line",
      "scene": "ts_c03_friends_settling_in",
      "speaker": "narrator",
      "character": null,
      "text": "刚回来时，我什么都喜欢加“先”。先做着，先住着，先看看。仿佛承认可以住一阵子，就等于签了永远不能离开的合同。",
      "next": "tc_c03_friends_settling_in_008"
    },
    "tc_c03_friends_settling_in_008": {
      "id": "tc_c03_friends_settling_in_008",
      "type": "line",
      "scene": "ts_c03_friends_settling_in",
      "speaker": "narrator",
      "character": null,
      "text": "毛狼没留意我的这点走神。他在挑拖鞋，问我黑的还是灰的。我说灰的，他立刻买了黑的。",
      "next": "tc_c03_friends_settling_in_009"
    },
    "tc_c03_friends_settling_in_009": {
      "id": "tc_c03_friends_settling_in_009",
      "type": "line",
      "scene": "ts_c03_friends_settling_in",
      "speaker": "wenwen",
      "character": null,
      "text": "“那你问我干什么？”",
      "next": "tc_c03_friends_settling_in_010"
    },
    "tc_c03_friends_settling_in_010": {
      "id": "tc_c03_friends_settling_in_010",
      "type": "line",
      "scene": "ts_c03_friends_settling_in",
      "speaker": "maolang",
      "character": null,
      "text": "“确认我自己想要黑的。”",
      "next": "tc_c03_friends_settling_in_011"
    },
    "tc_c03_friends_settling_in_011": {
      "id": "tc_c03_friends_settling_in_011",
      "type": "line",
      "scene": "ts_c03_friends_settling_in",
      "speaker": "narrator",
      "character": null,
      "text": "我拿纸团丢他。他躲开，笑得很欠。",
      "next": "tc_c03_friends_settling_in_012"
    },
    "tc_c03_friends_settling_in_012": {
      "id": "tc_c03_friends_settling_in_012",
      "type": "line",
      "scene": "ts_c03_friends_settling_in",
      "speaker": "narrator",
      "character": null,
      "text": "临走前，他问我过两天休息想做什么。我说这次我来选，别每次都是进游戏等他拉人。他答应得很快，仿佛这事根本不需要我在心里准备很久。",
      "next": "tc_c03_friends_settling_in_013"
    },
    "tc_c03_friends_settling_in_013": {
      "id": "tc_c03_friends_settling_in_013",
      "type": "line",
      "scene": "ts_c03_friends_settling_in",
      "speaker": "narrator",
      "character": null,
      "text": "我把桌角那张旧卡摆正。今天的生活没有比前天体面多少，但我开始往里面放自己的东西了。",
      "next": "tc_c03_common_exit"
    },
    "tc_c04_friends_entry": {
      "id": "tc_c04_friends_entry",
      "type": "line",
      "scene": "ts_c04_friends_own_plan",
      "speaker": "narrator",
      "character": null,
      "text": "这天是我休班。我睡醒以后在群里说，下午想出门走走，不想整天坐在电脑前。毛狼回了一个大拇指，问我来定还是他来定。",
      "next": "tc_c04_friends_own_plan_002"
    },
    "tc_c04_friends_own_plan_002": {
      "id": "tc_c04_friends_own_plan_002",
      "type": "line",
      "scene": "ts_c04_friends_own_plan",
      "speaker": "narrator",
      "character": null,
      "text": "我说我定，又在输入框里停了半天。以前嫌他安排得太满，轮到我，才发现自己连想去哪儿都常常要先看别人高不高兴。",
      "next": "tc_c04_friends_own_plan_003"
    },
    "tc_c04_friends_own_plan_003": {
      "id": "tc_c04_friends_own_plan_003",
      "type": "line",
      "scene": "ts_c04_friends_own_plan",
      "speaker": "narrator",
      "character": null,
      "text": "他没催，发来一句：“两种都行，别选你自己最不想去的。”",
      "next": "tc_c04_friends_outing_choice"
    },
    "tc_c04_friends_show_001": {
      "id": "tc_c04_friends_show_001",
      "type": "line",
      "scene": "ts_c04_friends_show",
      "speaker": "narrator",
      "character": "maolang",
      "text": "演出在街边一家有小台子的店里，不是毛狼今天的工作。他说认识其中一个唱歌的人，我们买自己的东西坐在后排，不必帮忙撑场。",
      "next": "tc_c04_friends_show_002"
    },
    "tc_c04_friends_show_002": {
      "id": "tc_c04_friends_show_002",
      "type": "line",
      "scene": "ts_c04_friends_show",
      "speaker": "narrator",
      "character": "maolang",
      "text": "前面有人忘词，停下来问大家有没有听过这首歌。毛狼张口想接，被对方笑着叫停：“你这个调也不对。”",
      "next": "tc_c04_friends_show_003"
    },
    "tc_c04_friends_show_003": {
      "id": "tc_c04_friends_show_003",
      "type": "line",
      "scene": "ts_c04_friends_show",
      "speaker": "narrator",
      "character": "maolang",
      "text": "全场哄笑。他自己笑得最大声。",
      "next": "tc_c04_friends_show_004"
    },
    "tc_c04_friends_show_004": {
      "id": "tc_c04_friends_show_004",
      "type": "line",
      "scene": "ts_c04_friends_show",
      "speaker": "narrator",
      "character": "maolang",
      "text": "我原本以为看熟人表演得从头捧到尾，坐久一点才发现，喜欢某一段、另一段走神，也都很正常。中间休息，毛狼问我要不要往前挪。我说后面听着舒服，他便留在原位。",
      "next": "tc_c04_friends_show_005"
    },
    "tc_c04_friends_show_005": {
      "id": "tc_c04_friends_show_005",
      "type": "line",
      "scene": "ts_c04_friends_show",
      "speaker": "narrator",
      "character": "maolang",
      "text": "有一首歌唱完，我抬手鼓掌。他转头看了看，说下次有类似的再叫我。",
      "next": "tc_c04_friends_show_006"
    },
    "tc_c04_friends_show_006": {
      "id": "tc_c04_friends_show_006",
      "type": "line",
      "scene": "ts_c04_friends_show",
      "speaker": "narrator",
      "character": "maolang",
      "text": "“有空再叫。你不去也没关系。”我说。",
      "next": "tc_c04_friends_show_007"
    },
    "tc_c04_friends_show_007": {
      "id": "tc_c04_friends_show_007",
      "type": "line",
      "scene": "ts_c04_friends_show",
      "speaker": "narrator",
      "character": "maolang",
      "text": "他愣了一下：“你终于打算自己出门了？”",
      "next": "tc_c04_friends_show_008"
    },
    "tc_c04_friends_show_008": {
      "id": "tc_c04_friends_show_008",
      "type": "line",
      "scene": "ts_c04_friends_show",
      "speaker": "narrator",
      "character": "maolang",
      "text": "我说我以前也会。他没拆穿，只把店名发给我。",
      "next": "tc_c04_friends_crossroad_001"
    },
    "tc_c04_friends_walk_001": {
      "id": "tc_c04_friends_walk_001",
      "type": "line",
      "scene": "ts_c04_friends_walk",
      "speaker": "narrator",
      "character": "maolang",
      "text": "我们往老街另一头走，没定终点。毛狼看见卖烤豆腐的，走不动；我看见一家旧游戏小店，停了很久。他给我留了两块豆腐，自己去旁边买水。",
      "next": "tc_c04_friends_walk_002"
    },
    "tc_c04_friends_walk_002": {
      "id": "tc_c04_friends_walk_002",
      "type": "line",
      "scene": "ts_c04_friends_walk_game_store",
      "speaker": "narrator",
      "character": null,
      "text": "店里东西不多。有些我叫得出名字，有些没见过。我和店主聊了一会儿，最后只买了一张便宜的明信片，没为了显得懂行把钱都花掉。",
      "next": "tc_c04_friends_walk_003"
    },
    "tc_c04_friends_walk_003": {
      "id": "tc_c04_friends_walk_003",
      "type": "line",
      "scene": "ts_c04_friends_walk_stool",
      "speaker": "narrator",
      "character": "maolang",
      "text": "出来时，毛狼坐在路边矮凳上，嘴里还在嚼。",
      "next": "tc_c04_friends_walk_004"
    },
    "tc_c04_friends_walk_004": {
      "id": "tc_c04_friends_walk_004",
      "type": "line",
      "scene": "ts_c04_friends_walk_stool",
      "speaker": "wenwen",
      "character": "maolang",
      "text": "“你怎么不进去？”",
      "next": "tc_c04_friends_walk_005"
    },
    "tc_c04_friends_walk_005": {
      "id": "tc_c04_friends_walk_005",
      "type": "line",
      "scene": "ts_c04_friends_walk_stool",
      "speaker": "maolang",
      "character": "maolang",
      "text": "“我没那么想看。你看够了没？”",
      "next": "tc_c04_friends_walk_006"
    },
    "tc_c04_friends_walk_006": {
      "id": "tc_c04_friends_walk_006",
      "type": "line",
      "scene": "ts_c04_friends_walk_wall",
      "speaker": "narrator",
      "character": "maolang",
      "text": "我点头。他把水给我，我们继续走，走到一面被雨刷得发亮的墙，又原路折回来。",
      "next": "tc_c04_friends_walk_007"
    },
    "tc_c04_friends_walk_007": {
      "id": "tc_c04_friends_walk_007",
      "type": "line",
      "scene": "ts_c04_friends_walk_wall",
      "speaker": "narrator",
      "character": "maolang",
      "text": "这趟出门没有一个值得发朋友圈的终点。我却记住了那家店旁边有个遮雨的檐，记住毛狼不爱看的东西，也可以让我自己慢慢看。",
      "next": "tc_c04_friends_crossroad_001"
    },
    "tc_c04_friends_crossroad_001": {
      "id": "tc_c04_friends_crossroad_001",
      "type": "line",
      "scene": "ts_c04_friends_crossroad",
      "speaker": "narrator",
      "character": "maolang",
      "text": "路口那家面馆亮灯时，我们才发现饿了。毛狼说这回选地方辛苦，想给我颁发一个领队证。我说免了，下次不保证组织。",
      "next": "tc_c04_friends_crossroad_002"
    },
    "tc_c04_friends_crossroad_002": {
      "id": "tc_c04_friends_crossroad_002",
      "type": "line",
      "scene": "ts_c04_friends_crossroad",
      "speaker": "narrator",
      "character": "maolang",
      "text": "他问晚上还玩不玩，我想了一下，说今天先不玩。他没有把这句话听成我不高兴，掏手机去问别人。",
      "next": "tc_c04_friends_crossroad_003"
    },
    "tc_c04_friends_crossroad_003": {
      "id": "tc_c04_friends_crossroad_003",
      "type": "line",
      "scene": "ts_c04_friends_crossroad_home",
      "speaker": "narrator",
      "character": null,
      "text": "我回去洗了澡，把今天的零钱支出记下来。钱没多多少，休息日也没变长，可我至少知道，有一段是自己选来过的。",
      "next": "tc_c04_common_exit"
    },
    "tc_c04_friends_outing_choice": {
      "id": "tc_c04_friends_outing_choice",
      "type": "choice",
      "scene": "ts_c04_friends_own_plan",
      "character": null,
      "text": "",
      "flag": "friendsOuting",
      "choices": [
        {
          "label": "去看毛狼说过的小演出",
          "value": "show",
          "next": "tc_c04_friends_show_001"
        },
        {
          "label": "沿着没怎么走过的街慢慢逛",
          "value": "walk",
          "next": "tc_c04_friends_walk_001"
        }
      ]
    },
    "tc_c05_friends_entry": {
      "id": "tc_c05_friends_entry",
      "type": "line",
      "scene": "ts_c05_friends_job_name",
      "speaker": "narrator",
      "character": null,
      "text": "我在买日用品时碰见以前认识的人。对方问我现在做什么，我嘴比脑子快，说：“做网络这一块。”",
      "next": "tc_c05_friends_job_name_002"
    },
    "tc_c05_friends_job_name_002": {
      "id": "tc_c05_friends_job_name_002",
      "type": "line",
      "scene": "ts_c05_friends_job_name",
      "speaker": "narrator",
      "character": "maolang",
      "text": "他说听起来不错，又问是不是坐办公室。我正要把话往回改，毛狼从后面拎着卫生纸过来，叫我网吧的会员活动别忘了看。",
      "next": "tc_c05_friends_job_name_003"
    },
    "tc_c05_friends_job_name_003": {
      "id": "tc_c05_friends_job_name_003",
      "type": "line",
      "scene": "ts_c05_friends_job_name",
      "speaker": "narrator",
      "character": "maolang",
      "text": "对方哦了一声，表情没什么变化。我却突然很热，像毛狼故意把我辛苦搭的台子拆掉了。",
      "next": "tc_c05_friends_job_name_004"
    },
    "tc_c05_friends_job_name_004": {
      "id": "tc_c05_friends_job_name_004",
      "type": "line",
      "scene": "ts_c05_friends_job_name",
      "speaker": "narrator",
      "character": "maolang",
      "text": "人走以后，我闷着没说话。毛狼问我还买什么，我说不买了。他看了我一眼，也把玩笑收起来。",
      "next": "tc_c05_friends_job_name_005"
    },
    "tc_c05_friends_job_name_005": {
      "id": "tc_c05_friends_job_name_005",
      "type": "line",
      "scene": "ts_c05_friends_job_name_door",
      "speaker": "narrator",
      "character": "maolang",
      "text": "我们在门口站了一会儿。我知道刚才那点不舒服不全是他的错，却还是想找个容易出口的对象。",
      "next": "tc_c05_friends_job_name_006"
    },
    "tc_c05_friends_job_name_006": {
      "id": "tc_c05_friends_job_name_006",
      "type": "line",
      "scene": "ts_c05_friends_job_name_door",
      "speaker": "narrator",
      "character": "maolang",
      "text": "“你能不能别见谁都讲我在哪上班？”我说。",
      "next": "tc_c05_friends_job_name_007"
    },
    "tc_c05_friends_job_name_007": {
      "id": "tc_c05_friends_job_name_007",
      "type": "line",
      "scene": "ts_c05_friends_job_name_door",
      "speaker": "narrator",
      "character": "maolang",
      "text": "他皱眉：“我以为都知道。你要是不想说，我以后不说。”",
      "next": "tc_c05_friends_job_name_008"
    },
    "tc_c05_friends_job_name_008": {
      "id": "tc_c05_friends_job_name_008",
      "type": "line",
      "scene": "ts_c05_friends_job_name_door",
      "speaker": "narrator",
      "character": "maolang",
      "text": "这句话没让我舒服多少。因为我也知道，自己并不是认真想保密，只是希望他帮我维持一个听起来更光鲜的模糊说法。",
      "next": "tc_c05_friends_job_name_009"
    },
    "tc_c05_friends_job_name_009": {
      "id": "tc_c05_friends_job_name_009",
      "type": "line",
      "scene": "ts_c05_friends_job_name_home",
      "speaker": "narrator",
      "character": null,
      "text": "我回去，坐到床边，把袋子放下。卫生纸、洗衣液、电池，全是普通东西。我需要用它们，却刚刚像这些钱不是靠普通工作挣来的一样。",
      "next": "tc_c05_friends_job_name_010"
    },
    "tc_c05_friends_job_name_010": {
      "id": "tc_c05_friends_job_name_010",
      "type": "line",
      "scene": "ts_c05_friends_job_name_call",
      "speaker": "narrator",
      "character": null,
      "text": "晚点我给毛狼打电话，承认自己刚才是在生闷气。做网络不是骗人，但我是故意让人往别的地方想。",
      "next": "tc_c05_friends_job_name_011"
    },
    "tc_c05_friends_job_name_011": {
      "id": "tc_c05_friends_job_name_011",
      "type": "line",
      "scene": "ts_c05_friends_job_name_call",
      "speaker": "narrator",
      "character": null,
      "text": "“你又不是得每天开着喇叭介绍自己。”他说，“不想细聊就不细聊。我刚才也没看出你那个意思。”",
      "next": "tc_c05_friends_job_name_012"
    },
    "tc_c05_friends_job_name_012": {
      "id": "tc_c05_friends_job_name_012",
      "type": "line",
      "scene": "ts_c05_friends_job_name_call",
      "speaker": "wenwen",
      "character": null,
      "text": "“我知道。我不该把脾气撒你身上。”",
      "next": "tc_c05_friends_job_name_013"
    },
    "tc_c05_friends_job_name_013": {
      "id": "tc_c05_friends_job_name_013",
      "type": "line",
      "scene": "ts_c05_friends_job_name_call",
      "speaker": "narrator",
      "character": null,
      "text": "电话那边响起包装袋声。他说刚拆开那包纸，发现自己买错规格，家里的架子根本放不下。我们聊了一会儿这个毫无意义的问题，终于都笑了。",
      "next": "tc_c05_friends_say_it_001"
    },
    "tc_c05_friends_say_it_001": {
      "id": "tc_c05_friends_say_it_001",
      "type": "line",
      "scene": "ts_c05_friends_say_it",
      "speaker": "narrator",
      "character": null,
      "text": "两天后，我在面馆又碰到那个人。他问店里夜班累不累。我这回没绕，说凌晨四点多最困，其他时候有人找，倒还好。",
      "next": "tc_c05_friends_say_it_002"
    },
    "tc_c05_friends_say_it_002": {
      "id": "tc_c05_friends_say_it_002",
      "type": "line",
      "scene": "ts_c05_friends_say_it",
      "speaker": "narrator",
      "character": null,
      "text": "他说自己也上过晚班，最烦早上有人还没到就开始装修。聊到这里，话题很自然地换成最近哪条路在修。",
      "next": "tc_c05_friends_say_it_003"
    },
    "tc_c05_friends_say_it_003": {
      "id": "tc_c05_friends_say_it_003",
      "type": "line",
      "scene": "ts_c05_friends_say_it",
      "speaker": "narrator",
      "character": null,
      "text": "没有想象中的审判，也没有因为我讲清楚就获得一个特别尊重的眼神。",
      "next": "tc_c05_friends_say_it_004"
    },
    "tc_c05_friends_say_it_004": {
      "id": "tc_c05_friends_say_it_004",
      "type": "line",
      "scene": "ts_c05_friends_say_it",
      "speaker": "narrator",
      "character": null,
      "text": "我端着面坐下，心里有点轻，也有点可笑。原来那天最想瞧不起我的人，可能就是我自己先替别人安排出来的那个。",
      "next": "tc_c05_friends_say_it_005"
    },
    "tc_c05_friends_say_it_005": {
      "id": "tc_c05_friends_say_it_005",
      "type": "line",
      "scene": "ts_c05_friends_say_it_counter",
      "speaker": "narrator",
      "character": "shijiang",
      "text": "吃完，我把买错尺寸的纸带给师匠，说毛狼托我问店里用不用得上。师匠看了一眼，让我放柜台下面，按实际价钱转给毛狼。",
      "next": "tc_c05_friends_say_it_006"
    },
    "tc_c05_friends_say_it_006": {
      "id": "tc_c05_friends_say_it_006",
      "type": "line",
      "scene": "ts_c05_friends_say_it_counter",
      "speaker": "shijiang",
      "character": "shijiang",
      "text": "“这也算你俩出来逛街的成果？”",
      "next": "tc_c05_friends_say_it_007"
    },
    "tc_c05_friends_say_it_007": {
      "id": "tc_c05_friends_say_it_007",
      "type": "line",
      "scene": "ts_c05_friends_say_it_counter",
      "speaker": "wenwen",
      "character": "shijiang",
      "text": "“成果比较柔软。”",
      "next": "tc_c05_friends_say_it_008"
    },
    "tc_c05_friends_say_it_008": {
      "id": "tc_c05_friends_say_it_008",
      "type": "line",
      "scene": "ts_c05_friends_say_it_counter",
      "speaker": "narrator",
      "character": "shijiang",
      "text": "他摇头笑，把最后一口饭吃完。我换上值班时穿的外套，准备十点回来。网管这两个字还和前几天一样，没有因此少一个笔画，也不需要加上别的词才让我开口。",
      "next": "tc_c05_common_exit"
    },
    "tc_c06_friends_entry": {
      "id": "tc_c06_friends_entry",
      "type": "line",
      "scene": "ts_c06_friends_quiet_company",
      "speaker": "narrator",
      "character": "maolang",
      "text": "回声最后营业的前后，毛狼连着两天在外面跑临时演出。这天他没事，我也休班，白天补足了觉，下午在网吧外面碰头。",
      "next": "tc_c06_friends_quiet_company_002"
    },
    "tc_c06_friends_quiet_company_002": {
      "id": "tc_c06_friends_quiet_company_002",
      "type": "line",
      "scene": "ts_c06_friends_quiet_company",
      "speaker": "narrator",
      "character": "maolang",
      "text": "他先问要不要进来玩。我说今天想吃点东西，不想盯屏幕。",
      "next": "tc_c06_friends_quiet_company_003"
    },
    "tc_c06_friends_quiet_company_003": {
      "id": "tc_c06_friends_quiet_company_003",
      "type": "line",
      "scene": "ts_c06_friends_quiet_company",
      "speaker": "maolang",
      "character": "maolang",
      "text": "“你工作已经盯够了？”",
      "next": "tc_c06_friends_quiet_company_004"
    },
    "tc_c06_friends_quiet_company_004": {
      "id": "tc_c06_friends_quiet_company_004",
      "type": "line",
      "scene": "ts_c06_friends_quiet_company",
      "speaker": "wenwen",
      "character": "maolang",
      "text": "“也不全是。有时候就是不想。”",
      "next": "tc_c06_friends_quiet_company_005"
    },
    "tc_c06_friends_quiet_company_005": {
      "id": "tc_c06_friends_quiet_company_005",
      "type": "line",
      "scene": "ts_c06_friends_quiet_company_eaves",
      "speaker": "narrator",
      "character": "maolang",
      "text": "我们买了烤土豆，坐在路边屋檐下。他那份要辣，我这份少一点，老板装袋时分开做了记号。没过多久，他拿错了我的，两个人只好对着咬了一口的土豆笑。",
      "next": "tc_c06_friends_quiet_company_006"
    },
    "tc_c06_friends_quiet_company_006": {
      "id": "tc_c06_friends_quiet_company_006",
      "type": "line",
      "scene": "ts_c06_friends_quiet_company_eaves",
      "speaker": "narrator",
      "character": "maolang",
      "text": "毛狼说这两天活多，钱会晚一点结。他已经问过什么时候，暂时只能等，不想一下午再讲这件事。我说那不讲。",
      "next": "tc_c06_friends_quiet_company_007"
    },
    "tc_c06_friends_quiet_company_007": {
      "id": "tc_c06_friends_quiet_company_007",
      "type": "line",
      "scene": "ts_c06_friends_quiet_company_eaves",
      "speaker": "narrator",
      "character": "maolang",
      "text": "我们真就没讲。他刷手机，我看路人从水洼两边绕开。有个小孩非要踩中间，被家长拉住，鞋底还是甩出一小串水。",
      "next": "tc_c06_friends_quiet_company_008"
    },
    "tc_c06_friends_quiet_company_008": {
      "id": "tc_c06_friends_quiet_company_008",
      "type": "line",
      "scene": "ts_c06_friends_quiet_company_eaves",
      "speaker": "narrator",
      "character": "maolang",
      "text": "“我小时候也这样。”我说。",
      "next": "tc_c06_friends_quiet_company_009"
    },
    "tc_c06_friends_quiet_company_009": {
      "id": "tc_c06_friends_quiet_company_009",
      "type": "line",
      "scene": "ts_c06_friends_quiet_company_eaves",
      "speaker": "maolang",
      "character": "maolang",
      "text": "“你现在有时也这样。”",
      "next": "tc_c06_friends_quiet_company_010"
    },
    "tc_c06_friends_quiet_company_010": {
      "id": "tc_c06_friends_quiet_company_010",
      "type": "line",
      "scene": "ts_c06_friends_quiet_company_eaves",
      "speaker": "wenwen",
      "character": "maolang",
      "text": "“哪样？”",
      "next": "tc_c06_friends_quiet_company_011"
    },
    "tc_c06_friends_quiet_company_011": {
      "id": "tc_c06_friends_quiet_company_011",
      "type": "line",
      "scene": "ts_c06_friends_quiet_company_eaves",
      "speaker": "maolang",
      "character": "maolang",
      "text": "“明知道会湿，还觉得自己这次能跨过去。”",
      "next": "tc_c06_friends_quiet_company_012"
    },
    "tc_c06_friends_quiet_company_012": {
      "id": "tc_c06_friends_quiet_company_012",
      "type": "line",
      "scene": "ts_c06_friends_quiet_company_eaves",
      "speaker": "narrator",
      "character": "maolang",
      "text": "他是随口说的，话题很快转到鞋。我没有把每一个比喻都收进人生心得，低头看自己的鞋边，确实有点脏。",
      "next": "tc_c06_friends_own_invitation_001"
    },
    "tc_c06_friends_own_invitation_001": {
      "id": "tc_c06_friends_own_invitation_001",
      "type": "line",
      "scene": "ts_c06_friends_own_invitation",
      "speaker": "narrator",
      "character": null,
      "text": "飘在群里问有没有人知道附近哪里能少量打印。毛狼回复了一家，说自己也要去那边办事，可以顺路带路。",
      "next": "tc_c06_friends_own_invitation_002"
    },
    "tc_c06_friends_own_invitation_002": {
      "id": "tc_c06_friends_own_invitation_002",
      "type": "line",
      "scene": "ts_c06_friends_own_invitation",
      "speaker": "narrator",
      "character": null,
      "text": "我看见消息，打了个“我也可以”，又删掉。不是要退让什么，而是我那天本来就没打算出门，也没有非要抢先回一句的必要。",
      "next": "tc_c06_friends_own_invitation_003"
    },
    "tc_c06_friends_own_invitation_003": {
      "id": "tc_c06_friends_own_invitation_003",
      "type": "line",
      "scene": "ts_c06_friends_own_invitation",
      "speaker": "narrator",
      "character": null,
      "text": "毛狼后来私聊我，说他想约飘多见几次，但不确定她是不是同样意思。",
      "next": "tc_c06_friends_own_invitation_004"
    },
    "tc_c06_friends_own_invitation_004": {
      "id": "tc_c06_friends_own_invitation_004",
      "type": "line",
      "scene": "ts_c06_friends_own_invitation",
      "speaker": "narrator",
      "character": null,
      "text": "“那你问她。”我说。",
      "next": "tc_c06_friends_own_invitation_005"
    },
    "tc_c06_friends_own_invitation_005": {
      "id": "tc_c06_friends_own_invitation_005",
      "type": "line",
      "scene": "ts_c06_friends_own_invitation",
      "speaker": "maolang",
      "character": null,
      "text": "“你这建议真便宜。”",
      "next": "tc_c06_friends_own_invitation_006"
    },
    "tc_c06_friends_own_invitation_006": {
      "id": "tc_c06_friends_own_invitation_006",
      "type": "line",
      "scene": "ts_c06_friends_own_invitation",
      "speaker": "wenwen",
      "character": null,
      "text": "“你也没付钱。”",
      "next": "tc_c06_friends_own_invitation_007"
    },
    "tc_c06_friends_own_invitation_007": {
      "id": "tc_c06_friends_own_invitation_007",
      "type": "line",
      "scene": "ts_c06_friends_own_invitation",
      "speaker": "narrator",
      "character": null,
      "text": "我们互相损了两句。我没替飘说她肯定喜欢，也没替毛狼把邀约写成一段必胜台词。最后他自己发了消息，约好时间再来告诉我，说她答应吃饭，后面的事仍慢慢看。",
      "next": "tc_c06_friends_own_invitation_008"
    },
    "tc_c06_friends_own_invitation_008": {
      "id": "tc_c06_friends_own_invitation_008",
      "type": "line",
      "scene": "ts_c06_friends_own_invitation",
      "speaker": "narrator",
      "character": null,
      "text": "他没再向我讨一句保证，最后发来一句去吃饭了。我回了个好。原来他并不是非要我替他猜出结果，只是很想找个人讲讲。",
      "next": "tc_c06_friends_sleep_001"
    },
    "tc_c06_friends_sleep_001": {
      "id": "tc_c06_friends_sleep_001",
      "type": "line",
      "scene": "ts_c06_friends_sleep",
      "speaker": "narrator",
      "character": null,
      "text": "今天早上睡前，我把手机调到勿扰，允许闹钟照常响。群里有人约临时活动，毛狼直接回我还在睡，别打电话。",
      "next": "tc_c06_friends_sleep_002"
    },
    "tc_c06_friends_sleep_002": {
      "id": "tc_c06_friends_sleep_002",
      "type": "line",
      "scene": "ts_c06_friends_sleep_awake",
      "speaker": "narrator",
      "character": null,
      "text": "下午醒来看到，我给他发了个谢。他回我一张烤土豆的图，说这回自己的那份没拿错。",
      "next": "tc_c06_friends_sleep_003"
    },
    "tc_c06_friends_sleep_003": {
      "id": "tc_c06_friends_sleep_003",
      "type": "line",
      "scene": "ts_c06_friends_sleep_awake",
      "speaker": "narrator",
      "character": null,
      "text": "我把手机放下，慢慢起床。没有因为错过一次热闹，就赶紧找另一件事补回去。",
      "next": "tc_c06_common_exit"
    },
    "tc_c07_friends_show_return_001": {
      "id": "tc_c07_friends_show_return_001",
      "type": "line",
      "scene": "ts_c07_friends_show_return",
      "speaker": "narrator",
      "character": null,
      "text": "那家店又有演出，我自己看到消息，先买了要喝的东西，才问毛狼去不去。他说这天有活，到不了，嘱咐我别因为没人陪就不去了。",
      "next": "tc_c07_friends_show_return_002"
    },
    "tc_c07_friends_show_return_002": {
      "id": "tc_c07_friends_show_return_002",
      "type": "line",
      "scene": "ts_c07_friends_show_return",
      "speaker": "narrator",
      "character": null,
      "text": "我到得不早，后排原来的位置被坐了，只好在旁边找张椅子。有人问这里有没有人，我说没有，对方就坐下。我们随口聊两句，等台上开始，又各自安静。",
      "next": "tc_c07_friends_show_return_003"
    },
    "tc_c07_friends_show_return_003": {
      "id": "tc_c07_friends_show_return_003",
      "type": "line",
      "scene": "ts_c07_friends_show_return",
      "speaker": "narrator",
      "character": null,
      "text": "唱到上回那首歌时，我认出来，发现节奏改了一点。中间休息，歌手下来喝水，我说我听过上次的版本。他问更喜欢哪个，我想了想，认真说了自己的感觉。",
      "next": "tc_c07_friends_show_return_004"
    },
    "tc_c07_friends_show_return_004": {
      "id": "tc_c07_friends_show_return_004",
      "type": "line",
      "scene": "ts_c07_friends_show_return",
      "speaker": "narrator",
      "character": null,
      "text": "我没有因为是陌生人就一味夸，也没有非要显得懂。对方听了，说下回还会再试。",
      "next": "tc_c07_friends_show_return_005"
    },
    "tc_c07_friends_show_return_005": {
      "id": "tc_c07_friends_show_return_005",
      "type": "line",
      "scene": "ts_c07_friends_show_return_after_show",
      "speaker": "narrator",
      "character": null,
      "text": "出来以后，我给毛狼发消息：“这回坐的地方不一样，听着也不一样。”",
      "next": "tc_c07_friends_show_return_006"
    },
    "tc_c07_friends_show_return_006": {
      "id": "tc_c07_friends_show_return_006",
      "type": "line",
      "scene": "ts_c07_friends_show_return_after_show",
      "speaker": "narrator",
      "character": null,
      "text": "他过了一个多小时才回，说他那边刚收工。我告诉他哪首唱得最好，他发了个表情，说明天有空再听我说。",
      "next": "tc_c07_friends_online_game_001"
    },
    "tc_c07_friends_walk_return_001": {
      "id": "tc_c07_friends_walk_return_001",
      "type": "line",
      "scene": "ts_c07_friends_walk_return",
      "speaker": "narrator",
      "character": null,
      "text": "我第二次去那家旧游戏店，是一个人。",
      "next": "tc_c07_friends_walk_return_002"
    },
    "tc_c07_friends_walk_return_002": {
      "id": "tc_c07_friends_walk_return_002",
      "type": "line",
      "scene": "ts_c07_friends_walk_return",
      "speaker": "narrator",
      "character": null,
      "text": "店主记不清我了，我提起上回那张明信片，他才说有点印象。我把架子上的东西慢慢看完，问了一款以前玩过的游戏，又老实承认自己不是全都懂。",
      "next": "tc_c07_friends_walk_return_003"
    },
    "tc_c07_friends_walk_return_003": {
      "id": "tc_c07_friends_walk_return_003",
      "type": "line",
      "scene": "ts_c07_friends_walk_return",
      "speaker": "narrator",
      "character": null,
      "text": "有些东西比我想的贵。我看看钱包，没买，店主也没不高兴。出门前，他告诉我附近有一面墙刚重刷，可以顺路看看。我走过去，发现颜色比照片上淡，雨水却把墙角冲得很亮。",
      "next": "tc_c07_friends_walk_return_004"
    },
    "tc_c07_friends_walk_return_004": {
      "id": "tc_c07_friends_walk_return_004",
      "type": "line",
      "scene": "ts_c07_friends_walk_return",
      "speaker": "narrator",
      "character": null,
      "text": "我坐在上回等毛狼的矮凳上，吃一份烤豆腐。这回没有人替我拿水，我自己去买，回来时凳子还空着。",
      "next": "tc_c07_friends_walk_return_005"
    },
    "tc_c07_friends_walk_return_005": {
      "id": "tc_c07_friends_walk_return_005",
      "type": "line",
      "scene": "ts_c07_friends_walk_return_message",
      "speaker": "narrator",
      "character": null,
      "text": "我拍了张没有人的街角发给毛狼。他当时在忙，晚上才回，说他以为我会等他。我说以后也可以一起，但今天刚好想去。",
      "next": "tc_c07_friends_online_game_001"
    },
    "tc_c07_friends_online_game_001": {
      "id": "tc_c07_friends_online_game_001",
      "type": "line",
      "scene": "ts_c07_friends_online_game",
      "speaker": "narrator",
      "character": null,
      "text": "晚上八点，我们约了一小局。师匠没来，叶岚也没来，毛狼找齐了愿意玩的人，没有把空位当成谁不够义气。",
      "next": "tc_c07_friends_online_game_002"
    },
    "tc_c07_friends_online_game_002": {
      "id": "tc_c07_friends_online_game_002",
      "type": "line",
      "scene": "ts_c07_friends_online_game",
      "speaker": "narrator",
      "character": null,
      "text": "我操作失误，毛狼说“这个角度你白天没参观过”。我先笑，接着说下一局他去那个位置试试。他真去了，也没做好。",
      "next": "tc_c07_friends_online_game_003"
    },
    "tc_c07_friends_online_game_003": {
      "id": "tc_c07_friends_online_game_003",
      "type": "line",
      "scene": "ts_c07_friends_online_game",
      "speaker": "narrator",
      "character": null,
      "text": "散场时，我们约好有机会再出门，具体等排班。不需要再把今天完整复制一遍，才算友谊没变。",
      "next": "tc_c07_friends_own_dinner_001"
    },
    "tc_c07_friends_own_dinner_001": {
      "id": "tc_c07_friends_own_dinner_001",
      "type": "line",
      "scene": "ts_c07_friends_own_dinner",
      "speaker": "narrator",
      "character": null,
      "text": "我想约毛狼吃饭，他说晚上和飘已经约好了。话说得有点小心，好像怕我嫌他重色轻友。",
      "next": "tc_c07_friends_own_dinner_002"
    },
    "tc_c07_friends_own_dinner_002": {
      "id": "tc_c07_friends_own_dinner_002",
      "type": "line",
      "scene": "ts_c07_friends_own_dinner",
      "speaker": "narrator",
      "character": null,
      "text": "“那你先去。”我说，“我自己能吃。”",
      "next": "tc_c07_friends_own_dinner_003"
    },
    "tc_c07_friends_own_dinner_003": {
      "id": "tc_c07_friends_own_dinner_003",
      "type": "line",
      "scene": "ts_c07_friends_own_dinner",
      "speaker": "maolang",
      "character": null,
      "text": "“你这个语气怎么像我抛妻弃子。”",
      "next": "tc_c07_friends_own_dinner_004"
    },
    "tc_c07_friends_own_dinner_004": {
      "id": "tc_c07_friends_own_dinner_004",
      "type": "line",
      "scene": "ts_c07_friends_own_dinner",
      "speaker": "wenwen",
      "character": null,
      "text": "“少给自己加角色。”",
      "next": "tc_c07_friends_own_dinner_005"
    },
    "tc_c07_friends_own_dinner_005": {
      "id": "tc_c07_friends_own_dinner_005",
      "type": "line",
      "scene": "ts_c07_friends_own_dinner",
      "speaker": "narrator",
      "character": null,
      "text": "挂电话以后，我确实有一点空落。想找的人没空，总不会因为懂道理就立刻不失望。我出门买饭，选了自己平时不好意思让一桌人陪着吃的清淡口味。",
      "next": "tc_c07_friends_own_dinner_006"
    },
    "tc_c07_friends_own_dinner_006": {
      "id": "tc_c07_friends_own_dinner_006",
      "type": "line",
      "scene": "ts_c07_friends_own_dinner_dinner",
      "speaker": "narrator",
      "character": null,
      "text": "吃到一半，毛狼发消息问我吃了没。我拍过去，他说看着像恢复出厂设置的饭。我说挺好吃，懒得解释。",
      "next": "tc_c07_friends_own_dinner_007"
    },
    "tc_c07_friends_own_dinner_007": {
      "id": "tc_c07_friends_own_dinner_007",
      "type": "line",
      "scene": "ts_c07_friends_own_dinner_dinner",
      "speaker": "narrator",
      "character": null,
      "text": "晚饭没有坏掉，朋友也没有少一个。只不过我们不是随时都能坐在同一张桌子边。",
      "next": "tc_c07_common_exit"
    },
    "tc_c07_friends_entry": {
      "id": "tc_c07_friends_entry",
      "type": "gate",
      "scene": "ts_c07_friends_show_return",
      "cases": [
        {
          "flag": "friendsOuting",
          "value": "show",
          "next": "tc_c07_friends_show_return_001"
        },
        {
          "flag": "friendsOuting",
          "value": "walk",
          "next": "tc_c07_friends_walk_return_001"
        }
      ],
      "default": null,
      "exhaustive": true
    },
    "tc_c08_friends_entry": {
      "id": "tc_c08_friends_entry",
      "type": "line",
      "scene": "ts_c08_friends_boundaries",
      "speaker": "narrator",
      "character": null,
      "text": "开始试轮班以后，我第一个想法，是终于可以把之前错过的活动全补一遍。",
      "next": "tc_c08_friends_boundaries_002"
    },
    "tc_c08_friends_boundaries_002": {
      "id": "tc_c08_friends_boundaries_002",
      "type": "line",
      "scene": "ts_c08_friends_boundaries",
      "speaker": "narrator",
      "character": null,
      "text": "我在手机上记了四件事，越记越像以前那张漂亮得不太真实的计划。直到写下连续两天都要早起，才停住。",
      "next": "tc_c08_friends_boundaries_003"
    },
    "tc_c08_friends_boundaries_003": {
      "id": "tc_c08_friends_boundaries_003",
      "type": "line",
      "scene": "ts_c08_friends_boundaries",
      "speaker": "narrator",
      "character": null,
      "text": "毛狼发消息来，问下周能不能帮他在活动现场跑半天。我先问了具体做什么、多久。他把情况说完，我想了想，拒绝了。",
      "next": "tc_c08_friends_boundaries_004"
    },
    "tc_c08_friends_boundaries_004": {
      "id": "tc_c08_friends_boundaries_004",
      "type": "line",
      "scene": "ts_c08_friends_boundaries",
      "speaker": "wenwen",
      "character": null,
      "text": "“那天刚换完班，我想休息。”",
      "next": "tc_c08_friends_boundaries_005"
    },
    "tc_c08_friends_boundaries_005": {
      "id": "tc_c08_friends_boundaries_005",
      "type": "line",
      "scene": "ts_c08_friends_boundaries",
      "speaker": "narrator",
      "character": null,
      "text": "他说知道了，再去问别人，没有立刻消失，也没有给我扣个不够朋友的帽子。我却盯着对话框，还是有点不舒服。",
      "next": "tc_c08_friends_boundaries_006"
    },
    "tc_c08_friends_boundaries_006": {
      "id": "tc_c08_friends_boundaries_006",
      "type": "line",
      "scene": "ts_c08_friends_boundaries_glasses",
      "speaker": "narrator",
      "character": "shijiang",
      "text": "晚上见到师匠，我随口问他，自己明明有空却不去帮忙，是不是挺懒。",
      "next": "tc_c08_friends_boundaries_007"
    },
    "tc_c08_friends_boundaries_007": {
      "id": "tc_c08_friends_boundaries_007",
      "type": "line",
      "scene": "ts_c08_friends_boundaries_glasses",
      "speaker": "narrator",
      "character": "shijiang",
      "text": "他正找眼镜盒，头也没抬：“你怎么知道别人没有空？”",
      "next": "tc_c08_friends_boundaries_008"
    },
    "tc_c08_friends_boundaries_008": {
      "id": "tc_c08_friends_boundaries_008",
      "type": "line",
      "scene": "ts_c08_friends_boundaries_glasses",
      "speaker": "wenwen",
      "character": "shijiang",
      "text": "“什么意思？”",
      "next": "tc_c08_friends_boundaries_009"
    },
    "tc_c08_friends_boundaries_009": {
      "id": "tc_c08_friends_boundaries_009",
      "type": "line",
      "scene": "ts_c08_friends_boundaries_glasses",
      "speaker": "shijiang",
      "character": "shijiang",
      "text": "“你拒绝了，他找别人。也许正好有人愿意挣那半天钱。”",
      "next": "tc_c08_friends_boundaries_010"
    },
    "tc_c08_friends_boundaries_010": {
      "id": "tc_c08_friends_boundaries_010",
      "type": "line",
      "scene": "ts_c08_friends_boundaries_glasses",
      "speaker": "narrator",
      "character": null,
      "text": "眼镜盒在他外套口袋里。他找到后就走了，没再等着我顿悟。我坐了片刻，给毛狼发消息问有没有找到人。他说找到了，是之前一起干过活的朋友。",
      "next": "tc_c08_friends_boundaries_011"
    },
    "tc_c08_friends_boundaries_011": {
      "id": "tc_c08_friends_boundaries_011",
      "type": "line",
      "scene": "ts_c08_friends_boundaries_glasses",
      "speaker": "narrator",
      "character": null,
      "text": "我打了一个好。那个一直等着我撑住的位置，其实也可以由别人坐。",
      "next": "tc_c08_friends_online_game_001"
    },
    "tc_c08_friends_online_game_001": {
      "id": "tc_c08_friends_online_game_001",
      "type": "line",
      "scene": "ts_c08_friends_online_game",
      "speaker": "narrator",
      "character": null,
      "text": "这天休班，我睡够以后在住处上线。轮到我组织游戏，我选了一个自己喜欢、其他人未必熟悉的。开局以前我讲了一大段规则，毛狼说听得像要考试。",
      "next": "tc_c08_friends_online_game_002"
    },
    "tc_c08_friends_online_game_002": {
      "id": "tc_c08_friends_online_game_002",
      "type": "line",
      "scene": "ts_c08_friends_online_game",
      "speaker": "narrator",
      "character": null,
      "text": "我有点失望，还是让大家先玩。玩了二十分钟，有人确实不喜欢，问能不能换。我差点说再坚持一下，转念想到自己前两天才拒绝过不想做的事。",
      "next": "tc_c08_friends_online_game_003"
    },
    "tc_c08_friends_online_game_003": {
      "id": "tc_c08_friends_online_game_003",
      "type": "line",
      "scene": "ts_c08_friends_online_game",
      "speaker": "narrator",
      "character": null,
      "text": "“换吧。”我说，“下次我找愿意玩这个的人。”",
      "next": "tc_c08_friends_online_game_004"
    },
    "tc_c08_friends_online_game_004": {
      "id": "tc_c08_friends_online_game_004",
      "type": "line",
      "scene": "ts_c08_friends_online_game",
      "speaker": "narrator",
      "character": null,
      "text": "毛狼听出我语气不太爽，私聊问要不要最后陪我玩一局。我说今天不用，已经累了。他没坚持，好像我可以又失望又结束，不必装得特别大方。",
      "next": "tc_c08_friends_online_game_005"
    },
    "tc_c08_friends_online_game_005": {
      "id": "tc_c08_friends_online_game_005",
      "type": "line",
      "scene": "ts_c08_friends_online_game",
      "speaker": "narrator",
      "character": null,
      "text": "后来我们只聊了一会儿，讲各自买过最没用的东西。师匠提名一把自己嫌占地方的小椅子，毛狼立刻问卖不卖。我说听起来这件东西可能只是跟错了主人。",
      "next": "tc_c08_friends_online_game_006"
    },
    "tc_c08_friends_online_game_006": {
      "id": "tc_c08_friends_online_game_006",
      "type": "line",
      "scene": "ts_c08_friends_online_game",
      "speaker": "narrator",
      "character": null,
      "text": "那晚没留下漂亮战绩，也没有所有人都满意的节目。我关掉语音时仍觉得有一点可惜，却没像从前一样，把可惜算成一整晚失败。",
      "next": "tc_c08_friends_free_afternoon_001"
    },
    "tc_c08_friends_free_afternoon_001": {
      "id": "tc_c08_friends_free_afternoon_001",
      "type": "line",
      "scene": "ts_c08_friends_free_afternoon",
      "speaker": "narrator",
      "character": null,
      "text": "又一个空出来的下午，我没有发起任何活动。",
      "next": "tc_c08_friends_free_afternoon_002"
    },
    "tc_c08_friends_free_afternoon_002": {
      "id": "tc_c08_friends_free_afternoon_002",
      "type": "line",
      "scene": "ts_c08_friends_free_afternoon",
      "speaker": "narrator",
      "character": null,
      "text": "把床单洗了，去买菜，在路边站着看人下了一会儿棋，谁赢了也没看完。回家时，太阳从云里出来一小阵，湿衣服边上亮得透明。",
      "next": "tc_c08_friends_free_afternoon_003"
    },
    "tc_c08_friends_free_afternoon_003": {
      "id": "tc_c08_friends_free_afternoon_003",
      "type": "line",
      "scene": "ts_c08_friends_free_afternoon_home",
      "speaker": "narrator",
      "character": null,
      "text": "毛狼问今天干了什么。我把那几件事写出来。他回：“听着挺忙。”",
      "next": "tc_c08_friends_free_afternoon_004"
    },
    "tc_c08_friends_free_afternoon_004": {
      "id": "tc_c08_friends_free_afternoon_004",
      "type": "line",
      "scene": "ts_c08_friends_free_afternoon_home",
      "speaker": "narrator",
      "character": null,
      "text": "我回：“也挺闲。”",
      "next": "tc_c08_friends_free_afternoon_005"
    },
    "tc_c08_friends_free_afternoon_005": {
      "id": "tc_c08_friends_free_afternoon_005",
      "type": "line",
      "scene": "ts_c08_friends_free_afternoon_home",
      "speaker": "narrator",
      "character": null,
      "text": "两个说法都没错。我把手机扣下，接着择菜。",
      "next": "tc_c08_common_exit"
    },
    "tc_c09_friends_entry": {
      "id": "tc_c09_friends_entry",
      "type": "line",
      "scene": "ts_c09_friends_birthday",
      "speaker": "narrator",
      "character": null,
      "text": "毛狼生日那天，几个人的时间凑不齐。他干脆分开约，没有非要等到一个所有人都空的晚上。",
      "next": "tc_c09_friends_birthday_002"
    },
    "tc_c09_friends_birthday_002": {
      "id": "tc_c09_friends_birthday_002",
      "type": "line",
      "scene": "ts_c09_friends_birthday",
      "speaker": "narrator",
      "character": "maolang",
      "text": "我去的是第二顿，买了个不大的蛋糕。他说自己前一顿已经吃过，我问那要不要拿回去，他立刻把盒子按住。",
      "next": "tc_c09_friends_birthday_003"
    },
    "tc_c09_friends_birthday_003": {
      "id": "tc_c09_friends_birthday_003",
      "type": "line",
      "scene": "ts_c09_friends_birthday",
      "speaker": "narrator",
      "character": "shijiang",
      "text": "师匠也来了，带着一袋水果，认真解释自己没有忘，只是觉得蛋糕一定有人买。毛狼让我们各自摆好，不准把这顿饭说成营养搭配讨论。",
      "next": "tc_c09_friends_birthday_004"
    },
    "tc_c09_friends_birthday_004": {
      "id": "tc_c09_friends_birthday_004",
      "type": "line",
      "scene": "ts_c09_friends_birthday",
      "speaker": "narrator",
      "character": "maolang",
      "text": "他讲起最近和飘相处，有时候明明想多见一会儿，却因为不好意思问，故意说自己随便。师匠看他一眼，笑着去倒水，我也没插话教他。",
      "next": "tc_c09_friends_birthday_005"
    },
    "tc_c09_friends_birthday_005": {
      "id": "tc_c09_friends_birthday_005",
      "type": "line",
      "scene": "ts_c09_friends_birthday",
      "speaker": "maolang",
      "character": "maolang",
      "text": "“你们怎么都不说话？”",
      "next": "tc_c09_friends_birthday_006"
    },
    "tc_c09_friends_birthday_006": {
      "id": "tc_c09_friends_birthday_006",
      "type": "line",
      "scene": "ts_c09_friends_birthday",
      "speaker": "narrator",
      "character": "maolang",
      "text": "“听你讲。”我说。",
      "next": "tc_c09_friends_birthday_007"
    },
    "tc_c09_friends_birthday_007": {
      "id": "tc_c09_friends_birthday_007",
      "type": "line",
      "scene": "ts_c09_friends_birthday",
      "speaker": "narrator",
      "character": "maolang",
      "text": "他反而安静了一下，后来又接着说，自己已经问过下一次，她说到时先看各自安排。普通的消息，在他嘴里也有不少值得回味的地方。",
      "next": "tc_c09_friends_birthday_008"
    },
    "tc_c09_friends_birthday_008": {
      "id": "tc_c09_friends_birthday_008",
      "type": "line",
      "scene": "ts_c09_friends_birthday",
      "speaker": "narrator",
      "character": "maolang",
      "text": "我想起以前自己总把没有恋爱当作一种等候状态：等某个人出现，日子才真正开始。眼前这两个人一个讲得起劲，一个在挑水果里烂掉的小块，我也能很认真地听，很认真地觉得这顿饭值得来。",
      "next": "tc_c09_friends_own_book_001"
    },
    "tc_c09_friends_own_book_001": {
      "id": "tc_c09_friends_own_book_001",
      "type": "line",
      "scene": "ts_c09_friends_own_book",
      "speaker": "narrator",
      "character": null,
      "text": "新的轮班安排用了些日子。我依旧会困，也会嫌客人丢的纸杯太多，但下班以后能把工作的那点不爽留在门外，不再每次见人都先解释自己只是暂时做着。",
      "next": "tc_c09_friends_own_book_002"
    },
    "tc_c09_friends_own_book_002": {
      "id": "tc_c09_friends_own_book_002",
      "type": "line",
      "scene": "ts_c09_friends_own_book",
      "speaker": "narrator",
      "character": null,
      "text": "我去书店买了本以前想看的书，不是考试资料，也不能提升什么技能。拿到收银台前犹豫了一会儿，最后还是付了钱。",
      "next": "tc_c09_friends_own_book_003"
    },
    "tc_c09_friends_own_book_003": {
      "id": "tc_c09_friends_own_book_003",
      "type": "line",
      "scene": "ts_c09_friends_own_book_evening",
      "speaker": "narrator",
      "character": null,
      "text": "晚上我告诉毛狼，下个月想找一天去城里没走过的地方逛逛。他问是不是又想好新的人生规划了。我说只是逛。",
      "next": "tc_c09_friends_own_book_004"
    },
    "tc_c09_friends_own_book_004": {
      "id": "tc_c09_friends_own_book_004",
      "type": "line",
      "scene": "ts_c09_friends_own_book_evening",
      "speaker": "narrator",
      "character": null,
      "text": "“可以。”他说，“到时我有空就来。”",
      "next": "tc_c09_friends_own_book_005"
    },
    "tc_c09_friends_own_book_005": {
      "id": "tc_c09_friends_own_book_005",
      "type": "line",
      "scene": "ts_c09_friends_own_book_evening",
      "speaker": "narrator",
      "character": null,
      "text": "我没有因为他没承诺就把计划取消。一个人也能去，两个人会有另一种热闹。",
      "next": "tc_c09_friends_call_home_001"
    },
    "tc_c09_friends_call_home_001": {
      "id": "tc_c09_friends_call_home_001",
      "type": "line",
      "scene": "ts_c09_friends_call_home",
      "speaker": "narrator",
      "character": null,
      "text": "母亲问我最近忙不忙。我没有只回一个还行，讲了网吧换班，讲毛狼生日，讲那本读得很慢的书。",
      "next": "tc_c09_friends_call_home_002"
    },
    "tc_c09_friends_call_home_002": {
      "id": "tc_c09_friends_call_home_002",
      "type": "line",
      "scene": "ts_c09_friends_call_home",
      "speaker": "narrator",
      "character": null,
      "text": "她说听不懂我玩的游戏，我说没关系，生日蛋糕总听得懂。她问是不是巧克力，我说有一半是，被毛狼先挑走了。",
      "next": "tc_c09_friends_call_home_003"
    },
    "tc_c09_friends_call_home_003": {
      "id": "tc_c09_friends_call_home_003",
      "type": "line",
      "scene": "ts_c09_friends_call_home",
      "speaker": "narrator",
      "character": null,
      "text": "电话挂断后，我坐了一会儿。夜班快到了，晚饭还得吃，明天睡醒也不一定有精彩事情。",
      "next": "tc_c09_friends_call_home_004"
    },
    "tc_c09_friends_call_home_004": {
      "id": "tc_c09_friends_call_home_004",
      "type": "line",
      "scene": "ts_c09_friends_call_home",
      "speaker": "narrator",
      "character": null,
      "text": "我给毛狼发了下一次能出门的日子，也给自己留了一天谁都不约。",
      "next": "tc_c09_friends_call_home_005"
    },
    "tc_c09_friends_call_home_005": {
      "id": "tc_c09_friends_call_home_005",
      "type": "line",
      "scene": "ts_c09_friends_call_home",
      "speaker": "narrator",
      "character": null,
      "text": "这条路走到这里，没有一个人等着我去告白。我也没有什么必须补上的空白。能主动联系、能拒绝、能接受朋友有别的安排，我的生活已经往前走了不少。",
      "next": "tc_c09_common_exit"
    },
    "tc_c10_friends_entry": {
      "id": "tc_c10_friends_entry",
      "type": "line",
      "scene": "ts_c10_friends_late_host",
      "speaker": "narrator",
      "character": null,
      "text": "那次去毛狼家吃饭，他比我晚到。",
      "next": "tc_c10_friends_late_host_002"
    },
    "tc_c10_friends_late_host_002": {
      "id": "tc_c10_friends_late_host_002",
      "type": "line",
      "scene": "ts_c10_friends_late_host",
      "speaker": "narrator",
      "character": "piao",
      "text": "飘给我开门，解释他下楼买酱油，结果在路边碰见熟人，聊了十分钟还没回来。她说这话的时候不恼，只在手机上发了句“菜比你先熟”。",
      "next": "tc_c10_friends_late_host_003"
    },
    "tc_c10_friends_late_host_003": {
      "id": "tc_c10_friends_late_host_003",
      "type": "line",
      "scene": "ts_c10_friends_late_host",
      "speaker": "narrator",
      "character": "piao",
      "text": "他们结婚后，家里没有突然变成一间样板房。餐桌边放着还没整理的东西，小册子第二版压在纸袋下面，有一本折了角。飘发现以后拿出来，慢慢把那一页捋平。",
      "next": "tc_c10_friends_late_host_004"
    },
    "tc_c10_friends_late_host_004": {
      "id": "tc_c10_friends_late_host_004",
      "type": "line",
      "scene": "ts_c10_friends_late_host",
      "speaker": "narrator",
      "character": "piao",
      "text": "我问需不需要帮忙，她说帮她把碗拿出去就行，其他自己来。",
      "next": "tc_c10_friends_late_host_005"
    },
    "tc_c10_friends_late_host_005": {
      "id": "tc_c10_friends_late_host_005",
      "type": "line",
      "scene": "ts_c10_friends_late_host",
      "speaker": "narrator",
      "character": "maolang",
      "text": "毛狼回来，举着酱油像举一件决定全局的战利品，被她一句“先洗手”拦住。他没再解释自己为什么迟到，老老实实去洗，出来以后又和我说最近演出里的笑话。",
      "next": "tc_c10_friends_late_host_006",
      "expression": "expression-smile"
    },
    "tc_c10_friends_late_host_006": {
      "id": "tc_c10_friends_late_host_006",
      "type": "line",
      "scene": "ts_c10_friends_late_host",
      "speaker": "narrator",
      "character": "piao",
      "text": "“你这段我听过。”我说。",
      "next": "tc_c10_friends_late_host_007"
    },
    "tc_c10_friends_late_host_007": {
      "id": "tc_c10_friends_late_host_007",
      "type": "line",
      "scene": "ts_c10_friends_late_host",
      "speaker": "narrator",
      "character": "piao",
      "text": "飘抬头：“我也听过。”",
      "next": "tc_c10_friends_late_host_008"
    },
    "tc_c10_friends_late_host_008": {
      "id": "tc_c10_friends_late_host_008",
      "type": "line",
      "scene": "ts_c10_friends_late_host",
      "speaker": "narrator",
      "character": "piao",
      "text": "他坐下来，很认真地想了一下：“那我得更新了。”",
      "next": "tc_c10_friends_friends_table_001"
    },
    "tc_c10_friends_friends_table_001": {
      "id": "tc_c10_friends_friends_table_001",
      "type": "line",
      "scene": "ts_c10_friends_friends_table",
      "speaker": "narrator",
      "character": "shijiang",
      "text": "师匠稍晚过来，店里已安排好当值的人。他带了一袋水果，毛狼立刻说今年不能再拿水果当生日礼物。",
      "next": "tc_c10_friends_friends_table_002"
    },
    "tc_c10_friends_friends_table_002": {
      "id": "tc_c10_friends_friends_table_002",
      "type": "line",
      "scene": "ts_c10_friends_friends_table",
      "speaker": "shijiang",
      "character": "shijiang",
      "text": "“今天你生日？”",
      "next": "tc_c10_friends_friends_table_003"
    },
    "tc_c10_friends_friends_table_003": {
      "id": "tc_c10_friends_friends_table_003",
      "type": "line",
      "scene": "ts_c10_friends_friends_table",
      "speaker": "maolang",
      "character": "maolang",
      "text": "“提前堵住。”",
      "next": "tc_c10_friends_friends_table_004"
    },
    "tc_c10_friends_friends_table_004": {
      "id": "tc_c10_friends_friends_table_004",
      "type": "line",
      "scene": "ts_c10_friends_friends_table",
      "speaker": "shijiang",
      "character": "shijiang",
      "text": "“那提前祝你吃得开心。”",
      "next": "tc_c10_friends_friends_table_005"
    },
    "tc_c10_friends_friends_table_005": {
      "id": "tc_c10_friends_friends_table_005",
      "type": "line",
      "scene": "ts_c10_friends_friends_table",
      "speaker": "narrator",
      "character": "shijiang",
      "text": "我们四个人吃饭，聊的事情一会儿很小，一会儿又有点难：钱什么时候结，哪天能休息，一件以前喜欢的事现在怎么没那么爱了。谁也没急着把别人那句话纠正成积极说法。",
      "next": "tc_c10_friends_friends_table_006"
    },
    "tc_c10_friends_friends_table_006": {
      "id": "tc_c10_friends_friends_table_006",
      "type": "line",
      "scene": "ts_c10_friends_friends_table",
      "speaker": "narrator",
      "character": "shijiang",
      "text": "我还在网吧轮班，不是因为所有别的路都关了，也不是已经确定一辈子这样。我知道眼前这份工作给我什么，又拿走什么；如果以后要换，可以先准备，再和别人把话讲清。",
      "next": "tc_c10_friends_friends_table_007"
    },
    "tc_c10_friends_friends_table_007": {
      "id": "tc_c10_friends_friends_table_007",
      "type": "line",
      "scene": "ts_c10_friends_friends_table",
      "speaker": "narrator",
      "character": "shijiang",
      "text": "小满给群里发来一张好笑的照片，周栀问有空谁去吃东西，孟遥在说自己最近终于把一本书读完，叶岚隔了一会儿才上线，问今晚有没有人玩。大家仍有彼此碰不到的部分，也仍能把一句话接起来。",
      "next": "tc_c10_friends_friends_table_008"
    },
    "tc_c10_friends_friends_table_008": {
      "id": "tc_c10_friends_friends_table_008",
      "type": "line",
      "scene": "ts_c10_friends_friends_table",
      "speaker": "narrator",
      "character": "shijiang",
      "text": "我回了今晚想早些回去看书，明天再约。叶岚说那就明天再看，没给我留一个必须赶上的位置。",
      "next": "tc_c10_friends_rain_walk_001"
    },
    "tc_c10_friends_rain_walk_001": {
      "id": "tc_c10_friends_rain_walk_001",
      "type": "line",
      "scene": "ts_c10_friends_rain_walk",
      "speaker": "narrator",
      "character": "maolang",
      "text": "吃完饭，我沿街往回走。毛狼追出来，把我落下的伞递过来。",
      "next": "tc_c10_friends_rain_walk_002"
    },
    "tc_c10_friends_rain_walk_002": {
      "id": "tc_c10_friends_rain_walk_002",
      "type": "line",
      "scene": "ts_c10_friends_rain_walk",
      "speaker": "maolang",
      "character": "maolang",
      "text": "“这毛病两年还没改。”",
      "next": "tc_c10_friends_rain_walk_003"
    },
    "tc_c10_friends_rain_walk_003": {
      "id": "tc_c10_friends_rain_walk_003",
      "type": "line",
      "scene": "ts_c10_friends_rain_walk",
      "speaker": "wenwen",
      "character": "maolang",
      "text": "“你买酱油的速度也没改。”",
      "next": "tc_c10_friends_rain_walk_004"
    },
    "tc_c10_friends_rain_walk_004": {
      "id": "tc_c10_friends_rain_walk_004",
      "type": "line",
      "scene": "ts_c10_friends_rain_walk",
      "speaker": "narrator",
      "character": null,
      "text": "他笑，转身回去，飘在楼上喊他带一袋垃圾下来。他应了一声，步子加快了一点。",
      "next": "tc_c10_friends_rain_walk_005"
    },
    "tc_c10_friends_rain_walk_005": {
      "id": "tc_c10_friends_rain_walk_005",
      "type": "line",
      "scene": "ts_c10_friends_rain_walk",
      "speaker": "narrator",
      "character": null,
      "text": "我撑开伞，走过街口。箱子早已经收在床底，那个歪轮子后来拆下来换过，不值得拿去纪念什么。",
      "next": "tc_c10_friends_rain_walk_006"
    },
    "tc_c10_friends_rain_walk_006": {
      "id": "tc_c10_friends_rain_walk_006",
      "type": "line",
      "scene": "ts_c10_friends_rain_walk_netcafe",
      "speaker": "narrator",
      "character": null,
      "text": "网吧门口有人出来透气，我点头打过招呼。今晚不是我的班，我继续往前走，想去买一份自己喜欢的饭，再回家把剩下的半章书读完。",
      "next": "tc_c10_friends_rain_walk_007"
    },
    "tc_c10_friends_rain_walk_007": {
      "id": "tc_c10_friends_rain_walk_007",
      "type": "line",
      "scene": "ts_c10_friends_rain_walk_homeward",
      "speaker": "narrator",
      "character": null,
      "text": "明天也许会和朋友见面，也许临时各自有事。无论是哪一种，我都知道自己可以先开口。",
      "next": "tc_c10_friends_rain_walk_008"
    },
    "tc_c10_friends_rain_walk_008": {
      "id": "tc_c10_friends_rain_walk_008",
      "type": "line",
      "scene": "ts_c10_friends_rain_walk_homeward",
      "speaker": "narrator",
      "character": null,
      "text": "这一天还没过完，雨也没有停。我走得不急。",
      "next": "tc_c10_friends_end"
    },
    "tc_c10_friends_end": {
      "id": "tc_c10_friends_end",
      "type": "end",
      "scene": "ts_c10_friends_rain_walk_homeward",
      "character": null,
      "title": "迟到十分钟的人",
      "text": "",
      "endingId": "tc_c10_friends_end"
    },
    "tc_c03_huangqiuqiu_entry": {
      "id": "tc_c03_huangqiuqiu_entry",
      "type": "line",
      "scene": "ts_c03_huangqiuqiu_second_meeting",
      "speaker": "narrator",
      "character": null,
      "text": "下午睡醒，我在床沿坐了很久。昨天听见声音、等她自报名字以后推开侧门，看见的那张脸还清清楚楚地留在脑子里。",
      "next": "tc_c03_huangqiuqiu_second_meeting_002"
    },
    "tc_c03_huangqiuqiu_second_meeting_002": {
      "id": "tc_c03_huangqiuqiu_second_meeting_002",
      "type": "line",
      "scene": "ts_c03_huangqiuqiu_second_meeting",
      "speaker": "narrator",
      "character": null,
      "text": "黄色的圆球，忧虑的眉毛，圆眼睛，短短的红嘴。还有那双小手，托着腮的时候，确实像一个不想再听人解释的成年人。",
      "next": "tc_c03_huangqiuqiu_second_meeting_003"
    },
    "tc_c03_huangqiuqiu_second_meeting_003": {
      "id": "tc_c03_huangqiuqiu_second_meeting_003",
      "type": "line",
      "scene": "ts_c03_huangqiuqiu_second_meeting",
      "speaker": "narrator",
      "character": null,
      "text": "可我今天要见她，第一句竟然还是不知道说什么。",
      "next": "tc_c03_huangqiuqiu_second_meeting_004"
    },
    "tc_c03_huangqiuqiu_second_meeting_004": {
      "id": "tc_c03_huangqiuqiu_second_meeting_004",
      "type": "line",
      "scene": "ts_c03_huangqiuqiu_second_meeting_side_door",
      "speaker": "narrator",
      "character": null,
      "text": "我到网吧时还没上班，只借前门穿过去。后院侧门附近没有别人，我在门外敲了三下，等到里面说进来，才推开门。",
      "next": "tc_c03_huangqiuqiu_second_meeting_005"
    },
    "tc_c03_huangqiuqiu_second_meeting_005": {
      "id": "tc_c03_huangqiuqiu_second_meeting_005",
      "type": "line",
      "scene": "ts_c03_huangqiuqiu_second_meeting_inside",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "黄球球仍坐在门里干处的塑料凳上，抬起眼看我。",
      "next": "tc_c03_huangqiuqiu_second_meeting_006"
    },
    "tc_c03_huangqiuqiu_second_meeting_006": {
      "id": "tc_c03_huangqiuqiu_second_meeting_006",
      "type": "line",
      "scene": "ts_c03_huangqiuqiu_second_meeting_inside",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "“你好。”我说。",
      "next": "tc_c03_huangqiuqiu_second_meeting_007"
    },
    "tc_c03_huangqiuqiu_second_meeting_007": {
      "id": "tc_c03_huangqiuqiu_second_meeting_007",
      "type": "line",
      "scene": "ts_c03_huangqiuqiu_second_meeting_inside",
      "speaker": "huangqiuqiu",
      "character": "huangqiuqiu",
      "text": "“你好。你站那么远，是怕我也要收银吗？”",
      "next": "tc_c03_huangqiuqiu_second_meeting_008"
    },
    "tc_c03_huangqiuqiu_second_meeting_008": {
      "id": "tc_c03_huangqiuqiu_second_meeting_008",
      "type": "line",
      "scene": "ts_c03_huangqiuqiu_second_meeting_inside",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "我往近处走了两步，蹲下以后发现蹲得太低，又尴尬地直起一点。",
      "next": "tc_c03_huangqiuqiu_second_meeting_009"
    },
    "tc_c03_huangqiuqiu_second_meeting_009": {
      "id": "tc_c03_huangqiuqiu_second_meeting_009",
      "type": "line",
      "scene": "ts_c03_huangqiuqiu_second_meeting_inside",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "她看完我这一套动作，问我是不是还没睡醒。我说睡醒了，只是不知道这样见面算不算太突然。",
      "next": "tc_c03_huangqiuqiu_second_meeting_010"
    },
    "tc_c03_huangqiuqiu_second_meeting_010": {
      "id": "tc_c03_huangqiuqiu_second_meeting_010",
      "type": "line",
      "scene": "ts_c03_huangqiuqiu_second_meeting_inside",
      "speaker": "huangqiuqiu",
      "character": "huangqiuqiu",
      "text": "“我说进来了。”",
      "next": "tc_c03_huangqiuqiu_second_meeting_011"
    },
    "tc_c03_huangqiuqiu_second_meeting_011": {
      "id": "tc_c03_huangqiuqiu_second_meeting_011",
      "type": "line",
      "scene": "ts_c03_huangqiuqiu_second_meeting_inside",
      "speaker": "wenwen",
      "character": "huangqiuqiu",
      "text": "“也是。”",
      "next": "tc_c03_huangqiuqiu_second_meeting_012"
    },
    "tc_c03_huangqiuqiu_second_meeting_012": {
      "id": "tc_c03_huangqiuqiu_second_meeting_012",
      "type": "line",
      "scene": "ts_c03_huangqiuqiu_second_meeting_inside",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "她的小手从脸颊边放下来：“但你要是一直蹲着，我会替你的膝盖担心。”",
      "next": "tc_c03_huangqiuqiu_second_meeting_013"
    },
    "tc_c03_huangqiuqiu_second_meeting_013": {
      "id": "tc_c03_huangqiuqiu_second_meeting_013",
      "type": "line",
      "scene": "ts_c03_huangqiuqiu_second_meeting_inside",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "我在附近找到一张低凳，先问能不能搬来。她看了看，说那张挺稳，可以。我把凳子放下，自己坐在上面，眼睛终于不用老往上或往下。",
      "next": "tc_c03_huangqiuqiu_second_meeting_014"
    },
    "tc_c03_huangqiuqiu_second_meeting_014": {
      "id": "tc_c03_huangqiuqiu_second_meeting_014",
      "type": "line",
      "scene": "ts_c03_huangqiuqiu_second_meeting_inside",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "她问我昨天回去以后做了什么。我差点从上班、收银、补货说起，想起她问的是回去以后，便说洗了一件衣服，忘了从盆里拿出来。",
      "next": "tc_c03_huangqiuqiu_second_meeting_015"
    },
    "tc_c03_huangqiuqiu_second_meeting_015": {
      "id": "tc_c03_huangqiuqiu_second_meeting_015",
      "type": "line",
      "scene": "ts_c03_huangqiuqiu_second_meeting_inside",
      "speaker": "huangqiuqiu",
      "character": "huangqiuqiu",
      "text": "“现在呢？”",
      "next": "tc_c03_huangqiuqiu_second_meeting_016"
    },
    "tc_c03_huangqiuqiu_second_meeting_016": {
      "id": "tc_c03_huangqiuqiu_second_meeting_016",
      "type": "line",
      "scene": "ts_c03_huangqiuqiu_second_meeting_inside",
      "speaker": "wenwen",
      "character": "huangqiuqiu",
      "text": "“又洗了一次。”",
      "next": "tc_c03_huangqiuqiu_second_meeting_017"
    },
    "tc_c03_huangqiuqiu_second_meeting_017": {
      "id": "tc_c03_huangqiuqiu_second_meeting_017",
      "type": "line",
      "scene": "ts_c03_huangqiuqiu_second_meeting_inside",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "她的红嘴动了一下，像把一个笑忍回去。",
      "next": "tc_c03_huangqiuqiu_second_meeting_018",
      "expression": "expression-smile"
    },
    "tc_c03_huangqiuqiu_second_meeting_018": {
      "id": "tc_c03_huangqiuqiu_second_meeting_018",
      "type": "line",
      "scene": "ts_c03_huangqiuqiu_second_meeting_inside",
      "speaker": "huangqiuqiu",
      "character": "huangqiuqiu",
      "text": "“挺好。那件衣服比你勤快，上了两次班。”",
      "next": "tc_c03_huangqiuqiu_second_meeting_019"
    },
    "tc_c03_huangqiuqiu_second_meeting_019": {
      "id": "tc_c03_huangqiuqiu_second_meeting_019",
      "type": "line",
      "scene": "ts_c03_huangqiuqiu_second_meeting_inside",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "我终于笑出来。门外有人走过远处的街口，声音隔着后院传来，并没有朝这边来。我们停了一会儿，等脚步声远了，她继续问，另外那件晾了吗。",
      "next": "tc_c03_huangqiuqiu_second_meeting_020"
    },
    "tc_c03_huangqiuqiu_second_meeting_020": {
      "id": "tc_c03_huangqiuqiu_second_meeting_020",
      "type": "line",
      "scene": "ts_c03_huangqiuqiu_second_meeting_inside",
      "speaker": "wenwen",
      "character": "huangqiuqiu",
      "text": "“晾了。我出门前特意看了一眼。”",
      "next": "tc_c03_huangqiuqiu_second_meeting_021"
    },
    "tc_c03_huangqiuqiu_second_meeting_021": {
      "id": "tc_c03_huangqiuqiu_second_meeting_021",
      "type": "line",
      "scene": "ts_c03_huangqiuqiu_second_meeting_inside",
      "speaker": "huangqiuqiu",
      "character": "huangqiuqiu",
      "text": "“那你今天算做完了一件事。”",
      "next": "tc_c03_huangqiuqiu_second_meeting_022"
    },
    "tc_c03_huangqiuqiu_second_meeting_022": {
      "id": "tc_c03_huangqiuqiu_second_meeting_022",
      "type": "line",
      "scene": "ts_c03_huangqiuqiu_second_meeting_inside",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "临走时，我把凳子放回原来的位置，手在裤子上擦了擦。我告诉她今晚要上班，现在得先去吃饭，下次能来会提前在门外问一声。",
      "next": "tc_c03_huangqiuqiu_second_meeting_023"
    },
    "tc_c03_huangqiuqiu_second_meeting_023": {
      "id": "tc_c03_huangqiuqiu_second_meeting_023",
      "type": "line",
      "scene": "ts_c03_huangqiuqiu_second_meeting_inside",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "她点了点头，重新用小手托住腮。",
      "next": "tc_c03_huangqiuqiu_second_meeting_024"
    },
    "tc_c03_huangqiuqiu_second_meeting_024": {
      "id": "tc_c03_huangqiuqiu_second_meeting_024",
      "type": "line",
      "scene": "ts_c03_huangqiuqiu_second_meeting_inside",
      "speaker": "huangqiuqiu",
      "character": "huangqiuqiu",
      "text": "“走的时候也有一句。”",
      "next": "tc_c03_huangqiuqiu_second_meeting_025"
    },
    "tc_c03_huangqiuqiu_second_meeting_025": {
      "id": "tc_c03_huangqiuqiu_second_meeting_025",
      "type": "line",
      "scene": "ts_c03_huangqiuqiu_second_meeting_inside",
      "speaker": "wenwen",
      "character": "huangqiuqiu",
      "text": "“再见，黄球球。”",
      "next": "tc_c03_huangqiuqiu_second_meeting_026"
    },
    "tc_c03_huangqiuqiu_second_meeting_026": {
      "id": "tc_c03_huangqiuqiu_second_meeting_026",
      "type": "line",
      "scene": "ts_c03_huangqiuqiu_second_meeting_inside",
      "speaker": "huangqiuqiu",
      "character": "huangqiuqiu",
      "text": "“再见，文文。”",
      "next": "tc_c03_huangqiuqiu_not_all_knowing_001"
    },
    "tc_c03_huangqiuqiu_not_all_knowing_001": {
      "id": "tc_c03_huangqiuqiu_not_all_knowing_001",
      "type": "line",
      "scene": "ts_c03_huangqiuqiu_not_all_knowing",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "今天我睡得够久，路上甚至绕了一段，买好晚饭才到侧门。袋子留在我身边，黄球球看了一眼，问是不是又忘了别的东西。",
      "next": "tc_c03_huangqiuqiu_not_all_knowing_002"
    },
    "tc_c03_huangqiuqiu_not_all_knowing_002": {
      "id": "tc_c03_huangqiuqiu_not_all_knowing_002",
      "type": "line",
      "scene": "ts_c03_huangqiuqiu_not_all_knowing",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "我摸了摸口袋，钥匙、手机都在，她才说自己只是随便问。",
      "next": "tc_c03_huangqiuqiu_not_all_knowing_003"
    },
    "tc_c03_huangqiuqiu_not_all_knowing_003": {
      "id": "tc_c03_huangqiuqiu_not_all_knowing_003",
      "type": "line",
      "scene": "ts_c03_huangqiuqiu_not_all_knowing",
      "speaker": "huangqiuqiu",
      "character": "huangqiuqiu",
      "text": "“你很容易吓到。”",
      "next": "tc_c03_huangqiuqiu_not_all_knowing_004"
    },
    "tc_c03_huangqiuqiu_not_all_knowing_004": {
      "id": "tc_c03_huangqiuqiu_not_all_knowing_004",
      "type": "line",
      "scene": "ts_c03_huangqiuqiu_not_all_knowing",
      "speaker": "wenwen",
      "character": "huangqiuqiu",
      "text": "“那是认真对待你的问题。”",
      "next": "tc_c03_huangqiuqiu_not_all_knowing_005"
    },
    "tc_c03_huangqiuqiu_not_all_knowing_005": {
      "id": "tc_c03_huangqiuqiu_not_all_knowing_005",
      "type": "line",
      "scene": "ts_c03_huangqiuqiu_not_all_knowing",
      "speaker": "huangqiuqiu",
      "character": "huangqiuqiu",
      "text": "“也可以叫容易吓到。”",
      "next": "tc_c03_huangqiuqiu_not_all_knowing_006"
    },
    "tc_c03_huangqiuqiu_not_all_knowing_006": {
      "id": "tc_c03_huangqiuqiu_not_all_knowing_006",
      "type": "line",
      "scene": "ts_c03_huangqiuqiu_not_all_knowing",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "我们坐着聊了会儿。我提起昨晚一位顾客找不到已经拿在手里的手机，讲到一半才想起自己也干过这种事。她的小手贴着脸，一点不留情地说，这个故事换成你演她也相信。",
      "next": "tc_c03_huangqiuqiu_not_all_knowing_007"
    },
    "tc_c03_huangqiuqiu_not_all_knowing_007": {
      "id": "tc_c03_huangqiuqiu_not_all_knowing_007",
      "type": "line",
      "scene": "ts_c03_huangqiuqiu_not_all_knowing",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "我问她平时听过什么好笑的话。她想了很久，说她常听见话的开头，后面的人走远，就听不见了。有时是“我跟你说”，有时是“算了，下次再”。",
      "next": "tc_c03_huangqiuqiu_not_all_knowing_008"
    },
    "tc_c03_huangqiuqiu_not_all_knowing_008": {
      "id": "tc_c03_huangqiuqiu_not_all_knowing_008",
      "type": "line",
      "scene": "ts_c03_huangqiuqiu_not_all_knowing",
      "speaker": "wenwen",
      "character": "huangqiuqiu",
      "text": "“所以你知道那些人后来怎么样？”",
      "next": "tc_c03_huangqiuqiu_not_all_knowing_009"
    },
    "tc_c03_huangqiuqiu_not_all_knowing_009": {
      "id": "tc_c03_huangqiuqiu_not_all_knowing_009",
      "type": "line",
      "scene": "ts_c03_huangqiuqiu_not_all_knowing",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "“不知道。”她看着我，“我又没有跟过去。”",
      "next": "tc_c03_huangqiuqiu_not_all_knowing_010"
    },
    "tc_c03_huangqiuqiu_not_all_knowing_010": {
      "id": "tc_c03_huangqiuqiu_not_all_knowing_010",
      "type": "line",
      "scene": "ts_c03_huangqiuqiu_not_all_knowing",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "我有点窘，承认自己昨天胡思乱想，连她是不是能听见人没说出口的话都猜过。",
      "next": "tc_c03_huangqiuqiu_not_all_knowing_011"
    },
    "tc_c03_huangqiuqiu_not_all_knowing_011": {
      "id": "tc_c03_huangqiuqiu_not_all_knowing_011",
      "type": "line",
      "scene": "ts_c03_huangqiuqiu_not_all_knowing",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "她的眉毛皱得更明显了。",
      "next": "tc_c03_huangqiuqiu_not_all_knowing_012",
      "expression": "expression-serious"
    },
    "tc_c03_huangqiuqiu_not_all_knowing_012": {
      "id": "tc_c03_huangqiuqiu_not_all_knowing_012",
      "type": "line",
      "scene": "ts_c03_huangqiuqiu_not_all_knowing",
      "speaker": "huangqiuqiu",
      "character": "huangqiuqiu",
      "text": "“你现在不说，我就不知道你刚才在想这个。”",
      "next": "tc_c03_huangqiuqiu_not_all_knowing_013"
    },
    "tc_c03_huangqiuqiu_not_all_knowing_013": {
      "id": "tc_c03_huangqiuqiu_not_all_knowing_013",
      "type": "line",
      "scene": "ts_c03_huangqiuqiu_not_all_knowing",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "我点头，说记住了。",
      "next": "tc_c03_huangqiuqiu_not_all_knowing_014"
    },
    "tc_c03_huangqiuqiu_not_all_knowing_014": {
      "id": "tc_c03_huangqiuqiu_not_all_knowing_014",
      "type": "line",
      "scene": "ts_c03_huangqiuqiu_not_all_knowing",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "“你也不用把每个念头都说给我听。”她又补一句，“比如你今晚想吃两碗饭，自己决定就行。”",
      "next": "tc_c03_huangqiuqiu_not_all_knowing_015"
    },
    "tc_c03_huangqiuqiu_not_all_knowing_015": {
      "id": "tc_c03_huangqiuqiu_not_all_knowing_015",
      "type": "line",
      "scene": "ts_c03_huangqiuqiu_not_all_knowing",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "我低头看了看袋子，笑着说只有一份。她没有顺着袋子问自己能不能吃，也没让我研究她跟人有什么不同。她先问的是，我刚才绕路的时候看到没有下雨的地方了吗。",
      "next": "tc_c03_huangqiuqiu_not_all_knowing_016"
    },
    "tc_c03_huangqiuqiu_not_all_knowing_016": {
      "id": "tc_c03_huangqiuqiu_not_all_knowing_016",
      "type": "line",
      "scene": "ts_c03_huangqiuqiu_not_all_knowing",
      "speaker": "wenwen",
      "character": "huangqiuqiu",
      "text": "“同一片天，哪那么容易绕出去。”",
      "next": "tc_c03_huangqiuqiu_not_all_knowing_017"
    },
    "tc_c03_huangqiuqiu_not_all_knowing_017": {
      "id": "tc_c03_huangqiuqiu_not_all_knowing_017",
      "type": "line",
      "scene": "ts_c03_huangqiuqiu_not_all_knowing",
      "speaker": "huangqiuqiu",
      "character": "huangqiuqiu",
      "text": "“我问的是屋檐下面。”",
      "next": "tc_c03_huangqiuqiu_not_all_knowing_018"
    },
    "tc_c03_huangqiuqiu_not_all_knowing_018": {
      "id": "tc_c03_huangqiuqiu_not_all_knowing_018",
      "type": "line",
      "scene": "ts_c03_huangqiuqiu_not_all_knowing",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "我一时接不上话。她眼睛弯了点，这次明显在笑。",
      "next": "tc_c03_huangqiuqiu_not_all_knowing_019",
      "expression": "expression-smile"
    },
    "tc_c03_huangqiuqiu_not_all_knowing_019": {
      "id": "tc_c03_huangqiuqiu_not_all_knowing_019",
      "type": "line",
      "scene": "ts_c03_huangqiuqiu_not_all_knowing",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "过了一会儿，她说，十八岁、二十四岁、三十岁的人都有人讲过“以后就好了”，可她没听见后面到底好了什么。",
      "next": "tc_c03_huangqiuqiu_not_all_knowing_020"
    },
    "tc_c03_huangqiuqiu_not_all_knowing_020": {
      "id": "tc_c03_huangqiuqiu_not_all_knowing_020",
      "type": "line",
      "scene": "ts_c03_huangqiuqiu_not_all_knowing",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "我没有替那些路人给答案，只讲自己回来以前也说过类似的话，回来以后发现，至少洗衣服还是得自己洗。",
      "next": "tc_c03_huangqiuqiu_not_all_knowing_021"
    },
    "tc_c03_huangqiuqiu_not_all_knowing_021": {
      "id": "tc_c03_huangqiuqiu_not_all_knowing_021",
      "type": "line",
      "scene": "ts_c03_huangqiuqiu_not_all_knowing",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "“而且有时要洗两遍。”她说。",
      "next": "tc_c03_huangqiuqiu_not_all_knowing_022"
    },
    "tc_c03_huangqiuqiu_not_all_knowing_022": {
      "id": "tc_c03_huangqiuqiu_not_all_knowing_022",
      "type": "line",
      "scene": "ts_c03_huangqiuqiu_not_all_knowing",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "我拍了一下膝盖，说这件事你准备记多久。她的小手在脸侧动了动，回答看我以后还有没有更好笑的。",
      "next": "tc_c03_huangqiuqiu_ordinary_visit_001"
    },
    "tc_c03_huangqiuqiu_ordinary_visit_001": {
      "id": "tc_c03_huangqiuqiu_ordinary_visit_001",
      "type": "line",
      "scene": "ts_c03_huangqiuqiu_ordinary_visit",
      "speaker": "narrator",
      "character": null,
      "text": "今天休班，我睡醒吃完东西才过来。路上没想起什么特别值得讲的事，走到门前，竟然差点因为这个转身。",
      "next": "tc_c03_huangqiuqiu_ordinary_visit_002"
    },
    "tc_c03_huangqiuqiu_ordinary_visit_002": {
      "id": "tc_c03_huangqiuqiu_ordinary_visit_002",
      "type": "line",
      "scene": "ts_c03_huangqiuqiu_ordinary_visit",
      "speaker": "narrator",
      "character": null,
      "text": "门里传来她的声音：“你在外面？”",
      "next": "tc_c03_huangqiuqiu_ordinary_visit_003"
    },
    "tc_c03_huangqiuqiu_ordinary_visit_003": {
      "id": "tc_c03_huangqiuqiu_ordinary_visit_003",
      "type": "line",
      "scene": "ts_c03_huangqiuqiu_ordinary_visit",
      "speaker": "narrator",
      "character": null,
      "text": "我应了一声，照旧先问现在方便不方便。",
      "next": "tc_c03_huangqiuqiu_ordinary_visit_004"
    },
    "tc_c03_huangqiuqiu_ordinary_visit_004": {
      "id": "tc_c03_huangqiuqiu_ordinary_visit_004",
      "type": "line",
      "scene": "ts_c03_huangqiuqiu_ordinary_visit",
      "speaker": "huangqiuqiu",
      "character": null,
      "text": "“方便。你今天敲得很犹豫。”",
      "next": "tc_c03_huangqiuqiu_ordinary_visit_005"
    },
    "tc_c03_huangqiuqiu_ordinary_visit_005": {
      "id": "tc_c03_huangqiuqiu_ordinary_visit_005",
      "type": "line",
      "scene": "ts_c03_huangqiuqiu_ordinary_visit_inside",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "我进门坐下，告诉她自己没准备好故事。她听了，好一会儿没有接话。",
      "next": "tc_c03_huangqiuqiu_ordinary_visit_006"
    },
    "tc_c03_huangqiuqiu_ordinary_visit_006": {
      "id": "tc_c03_huangqiuqiu_ordinary_visit_006",
      "type": "line",
      "scene": "ts_c03_huangqiuqiu_ordinary_visit_inside",
      "speaker": "huangqiuqiu",
      "character": "huangqiuqiu",
      "text": "“所以你以为，每次进来都要交一篇？”",
      "next": "tc_c03_huangqiuqiu_ordinary_visit_007"
    },
    "tc_c03_huangqiuqiu_ordinary_visit_007": {
      "id": "tc_c03_huangqiuqiu_ordinary_visit_007",
      "type": "line",
      "scene": "ts_c03_huangqiuqiu_ordinary_visit_inside",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "我说不是必须，至少总得有点有意思的东西。",
      "next": "tc_c03_huangqiuqiu_ordinary_visit_008"
    },
    "tc_c03_huangqiuqiu_ordinary_visit_008": {
      "id": "tc_c03_huangqiuqiu_ordinary_visit_008",
      "type": "line",
      "scene": "ts_c03_huangqiuqiu_ordinary_visit_inside",
      "speaker": "huangqiuqiu",
      "character": "huangqiuqiu",
      "text": "“那你先讲一点没意思的。”",
      "next": "tc_c03_huangqiuqiu_ordinary_visit_009"
    },
    "tc_c03_huangqiuqiu_ordinary_visit_009": {
      "id": "tc_c03_huangqiuqiu_ordinary_visit_009",
      "type": "line",
      "scene": "ts_c03_huangqiuqiu_ordinary_visit_inside",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "我想了想，说今天床单干了，晒不到太阳也干了。她点头，示意继续。我说中午的饭有点咸，水喝得多，她又点头。",
      "next": "tc_c03_huangqiuqiu_ordinary_visit_010"
    },
    "tc_c03_huangqiuqiu_ordinary_visit_010": {
      "id": "tc_c03_huangqiuqiu_ordinary_visit_010",
      "type": "line",
      "scene": "ts_c03_huangqiuqiu_ordinary_visit_inside",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "讲到最后，我实在没词了，摊开手看她。",
      "next": "tc_c03_huangqiuqiu_ordinary_visit_011"
    },
    "tc_c03_huangqiuqiu_ordinary_visit_011": {
      "id": "tc_c03_huangqiuqiu_ordinary_visit_011",
      "type": "line",
      "scene": "ts_c03_huangqiuqiu_ordinary_visit_inside",
      "speaker": "wenwen",
      "character": "huangqiuqiu",
      "text": "“怎么样？”",
      "next": "tc_c03_huangqiuqiu_ordinary_visit_012"
    },
    "tc_c03_huangqiuqiu_ordinary_visit_012": {
      "id": "tc_c03_huangqiuqiu_ordinary_visit_012",
      "type": "line",
      "scene": "ts_c03_huangqiuqiu_ordinary_visit_inside",
      "speaker": "huangqiuqiu",
      "character": "huangqiuqiu",
      "text": "“还行。知道你今天过得很普通。”",
      "next": "tc_c03_huangqiuqiu_ordinary_visit_013"
    },
    "tc_c03_huangqiuqiu_ordinary_visit_013": {
      "id": "tc_c03_huangqiuqiu_ordinary_visit_013",
      "type": "line",
      "scene": "ts_c03_huangqiuqiu_ordinary_visit_inside",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "她没有装作每句都很珍贵，也没有因为我今天普通就显得失望。我们坐了一会儿，听雨从屋檐边落下。我想起她上一回提到的那些没讲完的话，问她是不是希望我所有故事都说到结尾。",
      "next": "tc_c03_huangqiuqiu_ordinary_visit_014"
    },
    "tc_c03_huangqiuqiu_ordinary_visit_014": {
      "id": "tc_c03_huangqiuqiu_ordinary_visit_014",
      "type": "line",
      "scene": "ts_c03_huangqiuqiu_ordinary_visit_inside",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "她摇了一下小手。",
      "next": "tc_c03_huangqiuqiu_ordinary_visit_015"
    },
    "tc_c03_huangqiuqiu_ordinary_visit_015": {
      "id": "tc_c03_huangqiuqiu_ordinary_visit_015",
      "type": "line",
      "scene": "ts_c03_huangqiuqiu_ordinary_visit_inside",
      "speaker": "huangqiuqiu",
      "character": "huangqiuqiu",
      "text": "“你可以说累了，下次再讲。我想知道的是，这次你在跟我说话。不是刚好路过，声音留在这里。”",
      "next": "tc_c03_huangqiuqiu_ordinary_visit_016"
    },
    "tc_c03_huangqiuqiu_ordinary_visit_016": {
      "id": "tc_c03_huangqiuqiu_ordinary_visit_016",
      "type": "line",
      "scene": "ts_c03_huangqiuqiu_ordinary_visit_inside",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "我把手从口袋里拿出来，放在膝盖上，认真告诉她，我今天就是想见她。没想出什么事，也还是来了。",
      "next": "tc_c03_huangqiuqiu_ordinary_visit_017"
    },
    "tc_c03_huangqiuqiu_ordinary_visit_017": {
      "id": "tc_c03_huangqiuqiu_ordinary_visit_017",
      "type": "line",
      "scene": "ts_c03_huangqiuqiu_ordinary_visit_inside",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "黄球球看了我好一会儿，眉间那个总像在担心什么的弯，稍微松了一点。",
      "next": "tc_c03_huangqiuqiu_ordinary_visit_018",
      "expression": "expression-smile"
    },
    "tc_c03_huangqiuqiu_ordinary_visit_018": {
      "id": "tc_c03_huangqiuqiu_ordinary_visit_018",
      "type": "line",
      "scene": "ts_c03_huangqiuqiu_ordinary_visit_inside",
      "speaker": "huangqiuqiu",
      "character": "huangqiuqiu",
      "text": "“那下回也可以。”",
      "next": "tc_c03_huangqiuqiu_ordinary_visit_019"
    },
    "tc_c03_huangqiuqiu_ordinary_visit_019": {
      "id": "tc_c03_huangqiuqiu_ordinary_visit_019",
      "type": "line",
      "scene": "ts_c03_huangqiuqiu_ordinary_visit_inside",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "临走前，我们约了下一次，第24天下午，我先睡觉，再过来。她说万一下雨，就把伞立远一点，别每次都让她盯着从伞尖滴出来的水。",
      "next": "tc_c03_huangqiuqiu_ordinary_visit_020"
    },
    "tc_c03_huangqiuqiu_ordinary_visit_020": {
      "id": "tc_c03_huangqiuqiu_ordinary_visit_020",
      "type": "line",
      "scene": "ts_c03_huangqiuqiu_ordinary_visit_inside",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "我走到门边，发现自己还没说再见。回过头，她已经抬着眼等我，像早就知道我又漏了一句。",
      "next": "tc_c03_huangqiuqiu_ordinary_visit_021"
    },
    "tc_c03_huangqiuqiu_ordinary_visit_021": {
      "id": "tc_c03_huangqiuqiu_ordinary_visit_021",
      "type": "line",
      "scene": "ts_c03_huangqiuqiu_ordinary_visit_inside",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "“再见。”我说。",
      "next": "tc_c03_huangqiuqiu_ordinary_visit_022"
    },
    "tc_c03_huangqiuqiu_ordinary_visit_022": {
      "id": "tc_c03_huangqiuqiu_ordinary_visit_022",
      "type": "line",
      "scene": "ts_c03_huangqiuqiu_ordinary_visit_inside",
      "speaker": "huangqiuqiu",
      "character": "huangqiuqiu",
      "text": "“这次记住了。”",
      "next": "tc_c03_common_exit"
    },
    "tc_c04_huangqiuqiu_entry": {
      "id": "tc_c04_huangqiuqiu_entry",
      "type": "line",
      "scene": "ts_c04_huangqiuqiu_outing",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "我把伞放在门外不会挡路的地方，敲门等到回应才进去。今天补觉睡得很踏实，头发却被枕头压得一边平一边翘。",
      "next": "tc_c04_huangqiuqiu_outing_002"
    },
    "tc_c04_huangqiuqiu_outing_002": {
      "id": "tc_c04_huangqiuqiu_outing_002",
      "type": "line",
      "scene": "ts_c04_huangqiuqiu_outing",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "黄球球看了两眼，终于问这是不是最近流行的样子。我说刚想问你怎么看，她说一边像醒了，另一边还在睡。",
      "next": "tc_c04_huangqiuqiu_outing_003"
    },
    "tc_c04_huangqiuqiu_outing_003": {
      "id": "tc_c04_huangqiuqiu_outing_003",
      "type": "line",
      "scene": "ts_c04_huangqiuqiu_outing",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "我带了一张干净的纸和一支笔，原本想画给她看，今天路上有一朵很像鸭子的云。落笔之前又发现，自己很可能连普通的鸭子都画不好。",
      "next": "tc_c04_huangqiuqiu_outing_004"
    },
    "tc_c04_huangqiuqiu_outing_004": {
      "id": "tc_c04_huangqiuqiu_outing_004",
      "type": "line",
      "scene": "ts_c04_huangqiuqiu_outing",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "她的小手从脸边伸出来一点。",
      "next": "tc_c04_huangqiuqiu_outing_005"
    },
    "tc_c04_huangqiuqiu_outing_005": {
      "id": "tc_c04_huangqiuqiu_outing_005",
      "type": "line",
      "scene": "ts_c04_huangqiuqiu_outing",
      "speaker": "huangqiuqiu",
      "character": "huangqiuqiu",
      "text": "“如果必须画得好才能画，你今天已经可以把纸带回去了。”",
      "next": "tc_c04_huangqiuqiu_outing_006"
    },
    "tc_c04_huangqiuqiu_outing_006": {
      "id": "tc_c04_huangqiuqiu_outing_006",
      "type": "line",
      "scene": "ts_c04_huangqiuqiu_outing",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "我说那换个玩法，由她选。",
      "next": "tc_c04_huangqiuqiu_outing_choice"
    },
    "tc_c04_huangqiuqiu_portrait_001": {
      "id": "tc_c04_huangqiuqiu_portrait_001",
      "type": "line",
      "scene": "ts_c04_huangqiuqiu_portrait",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "我先画圆脸，再画头发。画眉毛时才发现两只眼睛离得太近，于是整张脸怎么看都像在憋着一口气。",
      "next": "tc_c04_huangqiuqiu_portrait_002"
    },
    "tc_c04_huangqiuqiu_portrait_002": {
      "id": "tc_c04_huangqiuqiu_portrait_002",
      "type": "line",
      "scene": "ts_c04_huangqiuqiu_portrait",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "黄球球盯了一会儿。",
      "next": "tc_c04_huangqiuqiu_portrait_003"
    },
    "tc_c04_huangqiuqiu_portrait_003": {
      "id": "tc_c04_huangqiuqiu_portrait_003",
      "type": "line",
      "scene": "ts_c04_huangqiuqiu_portrait",
      "speaker": "huangqiuqiu",
      "character": "huangqiuqiu",
      "text": "“你有这么多头发？”",
      "next": "tc_c04_huangqiuqiu_portrait_004"
    },
    "tc_c04_huangqiuqiu_portrait_004": {
      "id": "tc_c04_huangqiuqiu_portrait_004",
      "type": "line",
      "scene": "ts_c04_huangqiuqiu_portrait",
      "speaker": "wenwen",
      "character": "huangqiuqiu",
      "text": "“我只是画得浓。”",
      "next": "tc_c04_huangqiuqiu_portrait_005"
    },
    "tc_c04_huangqiuqiu_portrait_005": {
      "id": "tc_c04_huangqiuqiu_portrait_005",
      "type": "line",
      "scene": "ts_c04_huangqiuqiu_portrait",
      "speaker": "huangqiuqiu",
      "character": "huangqiuqiu",
      "text": "“你鼻子也这么有主意？”",
      "next": "tc_c04_huangqiuqiu_portrait_006"
    },
    "tc_c04_huangqiuqiu_portrait_006": {
      "id": "tc_c04_huangqiuqiu_portrait_006",
      "type": "line",
      "scene": "ts_c04_huangqiuqiu_portrait",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "我把纸转回来，发现鼻子确实单独朝着另一个方向。改了两笔以后，它更像一扇打开的小门。",
      "next": "tc_c04_huangqiuqiu_portrait_007"
    },
    "tc_c04_huangqiuqiu_portrait_007": {
      "id": "tc_c04_huangqiuqiu_portrait_007",
      "type": "line",
      "scene": "ts_c04_huangqiuqiu_portrait",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "最后她说，不用改了，画上那个人精神很好，一看就不用补觉。我在纸角写下自己的名字，怕过两天连自己都认不出。",
      "next": "tc_c04_huangqiuqiu_portrait_008"
    },
    "tc_c04_huangqiuqiu_portrait_008": {
      "id": "tc_c04_huangqiuqiu_portrait_008",
      "type": "line",
      "scene": "ts_c04_huangqiuqiu_portrait",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "我问她要不要留这张，她说留，不过得放在干处，不要贴到门上。我们找了个不会沾雨的位置，把纸平平压好。她看见我还想伸手改，抬起小手拦了一下。",
      "next": "tc_c04_huangqiuqiu_portrait_009",
      "expression": "action-hand"
    },
    "tc_c04_huangqiuqiu_portrait_009": {
      "id": "tc_c04_huangqiuqiu_portrait_009",
      "type": "line",
      "scene": "ts_c04_huangqiuqiu_portrait",
      "speaker": "huangqiuqiu",
      "character": "huangqiuqiu",
      "text": "“现在他已经长这样了。”",
      "next": "tc_c04_huangqiuqiu_higher_seat_001"
    },
    "tc_c04_huangqiuqiu_story_001": {
      "id": "tc_c04_huangqiuqiu_story_001",
      "type": "line",
      "scene": "ts_c04_huangqiuqiu_story",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "我讲一只鸭子出门买伞。黄球球接了一句，鸭子到了店里，发现自己不知道怎么买。我说店主先问它要长柄还是短柄，她说鸭子问有没有能自己拿住的。",
      "next": "tc_c04_huangqiuqiu_story_002"
    },
    "tc_c04_huangqiuqiu_story_002": {
      "id": "tc_c04_huangqiuqiu_story_002",
      "type": "line",
      "scene": "ts_c04_huangqiuqiu_story",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "讲到这里我们都停住，意识到给鸭子安排购物比画鸭子更难。",
      "next": "tc_c04_huangqiuqiu_story_003"
    },
    "tc_c04_huangqiuqiu_story_003": {
      "id": "tc_c04_huangqiuqiu_story_003",
      "type": "line",
      "scene": "ts_c04_huangqiuqiu_story",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "我说那它回家拿绳子。她立刻说绳子也忘在店里。我问她到底站哪边，她说站故事外面，看这只鸭子能忙到什么时候。",
      "next": "tc_c04_huangqiuqiu_story_004"
    },
    "tc_c04_huangqiuqiu_story_004": {
      "id": "tc_c04_huangqiuqiu_story_004",
      "type": "line",
      "scene": "ts_c04_huangqiuqiu_story",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "最后我们让鸭子坐在屋檐下，等雨小一点再回去。它没买成伞，也没得到奖状。我说这结尾是不是太普通，她的小手托回脸边：“挺好，至少它没为了结束故事忽然长出两只手。”",
      "next": "tc_c04_huangqiuqiu_story_005"
    },
    "tc_c04_huangqiuqiu_story_005": {
      "id": "tc_c04_huangqiuqiu_story_005",
      "type": "line",
      "scene": "ts_c04_huangqiuqiu_story",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "我笑得差点把凳子往后蹭，赶紧扶稳。她也在笑，眼睛弯起来，跟平时皱着眉的样子很不一样。",
      "next": "tc_c04_huangqiuqiu_higher_seat_001",
      "expression": "expression-smile"
    },
    "tc_c04_huangqiuqiu_higher_seat_001": {
      "id": "tc_c04_huangqiuqiu_higher_seat_001",
      "type": "line",
      "scene": "ts_c04_huangqiuqiu_higher_seat",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "聊到外面的天，她说从现在的位置看，门框挡掉了一半。她想看高一点，但不想让我直接把她抱起来研究。",
      "next": "tc_c04_huangqiuqiu_higher_seat_002"
    },
    "tc_c04_huangqiuqiu_higher_seat_002": {
      "id": "tc_c04_huangqiuqiu_higher_seat_002",
      "type": "line",
      "scene": "ts_c04_huangqiuqiu_higher_seat",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "我问她需要怎么做。她看了看身旁那张稍高一点的矮凳，让我先放稳，再在凳面垫上干净的布，防止打滑。",
      "next": "tc_c04_huangqiuqiu_higher_seat_003"
    },
    "tc_c04_huangqiuqiu_higher_seat_003": {
      "id": "tc_c04_huangqiuqiu_higher_seat_003",
      "type": "line",
      "scene": "ts_c04_huangqiuqiu_higher_seat",
      "speaker": "huangqiuqiu",
      "character": "huangqiuqiu",
      "text": "“可以托着我，慢一点。我说停就停。”",
      "next": "tc_c04_huangqiuqiu_higher_seat_004",
      "expression": "action-hand",
      "avatarExpression": "action-hand"
    },
    "tc_c04_huangqiuqiu_higher_seat_004": {
      "id": "tc_c04_huangqiuqiu_higher_seat_004",
      "type": "line",
      "scene": "ts_c04_huangqiuqiu_higher_seat",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "得到她同意以后，我用双手稳稳托住，把她移到近旁的凳面。距离很短，我却比搬什么东西都小心。她的小手轻轻碰了碰我的手背，告诉我这里就行。",
      "next": "tc_c04_huangqiuqiu_higher_seat_005",
      "expression": "action-hand"
    },
    "tc_c04_huangqiuqiu_higher_seat_005": {
      "id": "tc_c04_huangqiuqiu_higher_seat_005",
      "type": "line",
      "scene": "ts_c04_huangqiuqiu_higher_seat",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "坐好以后，她看着门缝外的一小片天，过了会儿，说没有我描述得那么像鸭子。",
      "next": "tc_c04_huangqiuqiu_higher_seat_006"
    },
    "tc_c04_huangqiuqiu_higher_seat_006": {
      "id": "tc_c04_huangqiuqiu_higher_seat_006",
      "type": "line",
      "scene": "ts_c04_huangqiuqiu_higher_seat",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "“已经散了。”我说。",
      "next": "tc_c04_huangqiuqiu_higher_seat_007"
    },
    "tc_c04_huangqiuqiu_higher_seat_007": {
      "id": "tc_c04_huangqiuqiu_higher_seat_007",
      "type": "line",
      "scene": "ts_c04_huangqiuqiu_higher_seat",
      "speaker": "huangqiuqiu",
      "character": "huangqiuqiu",
      "text": "“那鸭子动作挺快。”",
      "next": "tc_c04_huangqiuqiu_higher_seat_008"
    },
    "tc_c04_huangqiuqiu_higher_seat_008": {
      "id": "tc_c04_huangqiuqiu_higher_seat_008",
      "type": "line",
      "scene": "ts_c04_huangqiuqiu_higher_seat",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "我坐回自己的凳子，两只手搁在膝盖上，掌心仿佛还留着刚才那一点温度。她看天，我看了一会儿她，再抬头看天。过了一阵，她叫我的名字。",
      "next": "tc_c04_huangqiuqiu_higher_seat_009"
    },
    "tc_c04_huangqiuqiu_higher_seat_009": {
      "id": "tc_c04_huangqiuqiu_higher_seat_009",
      "type": "line",
      "scene": "ts_c04_huangqiuqiu_higher_seat",
      "speaker": "huangqiuqiu",
      "character": "huangqiuqiu",
      "text": "“你刚才问我，我比较舒服。”",
      "next": "tc_c04_huangqiuqiu_higher_seat_010"
    },
    "tc_c04_huangqiuqiu_higher_seat_010": {
      "id": "tc_c04_huangqiuqiu_higher_seat_010",
      "type": "line",
      "scene": "ts_c04_huangqiuqiu_higher_seat",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "我说下次也会问。她点点头，又认真看了半天天空，像终于把这个下午里想做的小事做完了。",
      "next": "tc_c04_huangqiuqiu_higher_seat_011"
    },
    "tc_c04_huangqiuqiu_higher_seat_011": {
      "id": "tc_c04_huangqiuqiu_higher_seat_011",
      "type": "line",
      "scene": "ts_c04_huangqiuqiu_higher_seat",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "走之前，我再问她是否想回到原来的干处。她说想，我便照刚才的办法把她扶托回去。门外的雨已经停了，没有谁因此必须赶紧把剩下的所有话说完。",
      "next": "tc_c04_common_exit"
    },
    "tc_c04_huangqiuqiu_outing_choice": {
      "id": "tc_c04_huangqiuqiu_outing_choice",
      "type": "choice",
      "scene": "ts_c04_huangqiuqiu_outing",
      "character": "huangqiuqiu",
      "text": "",
      "flag": "huangqiuqiuOuting",
      "choices": [
        {
          "label": "画自画像",
          "value": "portrait",
          "next": "tc_c04_huangqiuqiu_portrait_001"
        },
        {
          "label": "接一个笨故事",
          "value": "story",
          "next": "tc_c04_huangqiuqiu_story_001"
        }
      ]
    },
    "tc_c05_huangqiuqiu_entry": {
      "id": "tc_c05_huangqiuqiu_entry",
      "type": "line",
      "scene": "ts_c05_huangqiuqiu_no_compensation",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "睡醒出门时，我看到朋友群里还在说回声月底停业的事。到了后院，我讲起第30天要先跟朋友吃饭，再回来值夜班，那天不会有空来。",
      "next": "tc_c05_huangqiuqiu_no_compensation_002"
    },
    "tc_c05_huangqiuqiu_no_compensation_002": {
      "id": "tc_c05_huangqiuqiu_no_compensation_002",
      "type": "line",
      "scene": "ts_c05_huangqiuqiu_no_compensation",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "黄球球点头，说她知道了。我却看着她那副总有些忧虑的表情，不自觉补了很多句：饭不会吃太晚，不是故意把她排在后面，下次能来一定补上。",
      "next": "tc_c05_huangqiuqiu_no_compensation_003"
    },
    "tc_c05_huangqiuqiu_no_compensation_003": {
      "id": "tc_c05_huangqiuqiu_no_compensation_003",
      "type": "line",
      "scene": "ts_c05_huangqiuqiu_no_compensation",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "她一直听着，听到最后，小手从脸上放了下来。",
      "next": "tc_c05_huangqiuqiu_no_compensation_004"
    },
    "tc_c05_huangqiuqiu_no_compensation_004": {
      "id": "tc_c05_huangqiuqiu_no_compensation_004",
      "type": "line",
      "scene": "ts_c05_huangqiuqiu_no_compensation",
      "speaker": "huangqiuqiu",
      "character": "huangqiuqiu",
      "text": "“我哪里说要你补了？”",
      "next": "tc_c05_huangqiuqiu_no_compensation_005"
    },
    "tc_c05_huangqiuqiu_no_compensation_005": {
      "id": "tc_c05_huangqiuqiu_no_compensation_005",
      "type": "line",
      "scene": "ts_c05_huangqiuqiu_no_compensation",
      "speaker": "wenwen",
      "character": "huangqiuqiu",
      "text": "“你刚才没说话。”",
      "next": "tc_c05_huangqiuqiu_no_compensation_006"
    },
    "tc_c05_huangqiuqiu_no_compensation_006": {
      "id": "tc_c05_huangqiuqiu_no_compensation_006",
      "type": "line",
      "scene": "ts_c05_huangqiuqiu_no_compensation",
      "speaker": "huangqiuqiu",
      "character": "huangqiuqiu",
      "text": "“你一直在说。”",
      "next": "tc_c05_huangqiuqiu_no_compensation_007"
    },
    "tc_c05_huangqiuqiu_no_compensation_007": {
      "id": "tc_c05_huangqiuqiu_no_compensation_007",
      "type": "line",
      "scene": "ts_c05_huangqiuqiu_no_compensation",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "我停住。她看着我，过了一会儿才问，我是不是每次看到她皱眉，就觉得自己做错了什么。",
      "next": "tc_c05_huangqiuqiu_no_compensation_008"
    },
    "tc_c05_huangqiuqiu_no_compensation_008": {
      "id": "tc_c05_huangqiuqiu_no_compensation_008",
      "type": "line",
      "scene": "ts_c05_huangqiuqiu_no_compensation",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "我承认有时候会。",
      "next": "tc_c05_huangqiuqiu_no_compensation_009"
    },
    "tc_c05_huangqiuqiu_no_compensation_009": {
      "id": "tc_c05_huangqiuqiu_no_compensation_009",
      "type": "line",
      "scene": "ts_c05_huangqiuqiu_no_compensation",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "她认真想了想，眉毛皱得更深：“那可麻烦了。我平时大部分时候都这样。”",
      "next": "tc_c05_huangqiuqiu_no_compensation_010",
      "expression": "expression-serious"
    },
    "tc_c05_huangqiuqiu_no_compensation_010": {
      "id": "tc_c05_huangqiuqiu_no_compensation_010",
      "type": "line",
      "scene": "ts_c05_huangqiuqiu_no_compensation",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "这句话本来严肃，我却没忍住笑。她看见我笑，自己也轻轻动了动嘴角。",
      "next": "tc_c05_huangqiuqiu_no_compensation_011",
      "expression": "expression-smile"
    },
    "tc_c05_huangqiuqiu_no_compensation_011": {
      "id": "tc_c05_huangqiuqiu_no_compensation_011",
      "type": "line",
      "scene": "ts_c05_huangqiuqiu_no_compensation",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "我告诉她，自己有时怕她只有这段见面时间，所以只要不来，就像把她忘了。说出来以后，我才发现这话里面，已经先替她决定了很多东西。",
      "next": "tc_c05_huangqiuqiu_no_compensation_012"
    },
    "tc_c05_huangqiuqiu_no_compensation_012": {
      "id": "tc_c05_huangqiuqiu_no_compensation_012",
      "type": "line",
      "scene": "ts_c05_huangqiuqiu_no_compensation",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "“我会想见你。”她说，“但我不喜欢你把每一顿饭都拿来跟我解释。”",
      "next": "tc_c05_huangqiuqiu_no_compensation_013"
    },
    "tc_c05_huangqiuqiu_no_compensation_013": {
      "id": "tc_c05_huangqiuqiu_no_compensation_013",
      "type": "line",
      "scene": "ts_c05_huangqiuqiu_no_compensation",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "我问她真不高兴时会不会讲。她说会，只要我别抢在她前面把所有可能的委屈都说完。",
      "next": "tc_c05_huangqiuqiu_no_compensation_014"
    },
    "tc_c05_huangqiuqiu_no_compensation_014": {
      "id": "tc_c05_huangqiuqiu_no_compensation_014",
      "type": "line",
      "scene": "ts_c05_huangqiuqiu_no_compensation",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "我们安静下来以后，风把门轻轻推了一下。我起身扶住，才发现自己刚才紧张得一直坐在凳子最前边，脚都没放舒服。",
      "next": "tc_c05_huangqiuqiu_no_compensation_015"
    },
    "tc_c05_huangqiuqiu_no_compensation_015": {
      "id": "tc_c05_huangqiuqiu_no_compensation_015",
      "type": "line",
      "scene": "ts_c05_huangqiuqiu_no_compensation",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "她看着我重新坐好，问我现在是不是终于相信她没有生气。",
      "next": "tc_c05_huangqiuqiu_no_compensation_016"
    },
    "tc_c05_huangqiuqiu_no_compensation_016": {
      "id": "tc_c05_huangqiuqiu_no_compensation_016",
      "type": "line",
      "scene": "ts_c05_huangqiuqiu_no_compensation",
      "speaker": "wenwen",
      "character": "huangqiuqiu",
      "text": "“相信。”",
      "next": "tc_c05_huangqiuqiu_no_compensation_017"
    },
    "tc_c05_huangqiuqiu_no_compensation_017": {
      "id": "tc_c05_huangqiuqiu_no_compensation_017",
      "type": "line",
      "scene": "ts_c05_huangqiuqiu_no_compensation",
      "speaker": "huangqiuqiu",
      "character": "huangqiuqiu",
      "text": "“那换个话题。你上次说那个找手机的人，后来又来了吗？”",
      "next": "tc_c05_huangqiuqiu_no_compensation_018"
    },
    "tc_c05_huangqiuqiu_no_compensation_018": {
      "id": "tc_c05_huangqiuqiu_no_compensation_018",
      "type": "line",
      "scene": "ts_c05_huangqiuqiu_no_compensation",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "我说来过，这次手机拿得很牢。她满意地点了一下小手，像终于等到了自己真正想听的后半句。",
      "next": "tc_c05_huangqiuqiu_unfinished_yawn_001"
    },
    "tc_c05_huangqiuqiu_unfinished_yawn_001": {
      "id": "tc_c05_huangqiuqiu_unfinished_yawn_001",
      "type": "line",
      "scene": "ts_c05_huangqiuqiu_unfinished_yawn",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "今天夜班后我睡过一觉，起床仍有点昏。出门前我想了很久，还是来告诉她，今天只坐一小会儿，回去还想补眠。",
      "next": "tc_c05_huangqiuqiu_unfinished_yawn_002"
    },
    "tc_c05_huangqiuqiu_unfinished_yawn_002": {
      "id": "tc_c05_huangqiuqiu_unfinished_yawn_002",
      "type": "line",
      "scene": "ts_c05_huangqiuqiu_unfinished_yawn",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "我把话说清楚，本以为后面就不会出问题。结果坐下不到几分钟，一个哈欠忽然冒上来，我硬生生把它憋回去，脸也跟着皱成一团。",
      "next": "tc_c05_huangqiuqiu_unfinished_yawn_003"
    },
    "tc_c05_huangqiuqiu_unfinished_yawn_003": {
      "id": "tc_c05_huangqiuqiu_unfinished_yawn_003",
      "type": "line",
      "scene": "ts_c05_huangqiuqiu_unfinished_yawn",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "黄球球瞪着我。",
      "next": "tc_c05_huangqiuqiu_unfinished_yawn_004",
      "expression": "expression-serious"
    },
    "tc_c05_huangqiuqiu_unfinished_yawn_004": {
      "id": "tc_c05_huangqiuqiu_unfinished_yawn_004",
      "type": "line",
      "scene": "ts_c05_huangqiuqiu_unfinished_yawn",
      "speaker": "huangqiuqiu",
      "character": "huangqiuqiu",
      "text": "“你在干什么？”",
      "next": "tc_c05_huangqiuqiu_unfinished_yawn_005"
    },
    "tc_c05_huangqiuqiu_unfinished_yawn_005": {
      "id": "tc_c05_huangqiuqiu_unfinished_yawn_005",
      "type": "line",
      "scene": "ts_c05_huangqiuqiu_unfinished_yawn",
      "speaker": "wenwen",
      "character": "huangqiuqiu",
      "text": "“没事。”",
      "next": "tc_c05_huangqiuqiu_unfinished_yawn_006"
    },
    "tc_c05_huangqiuqiu_unfinished_yawn_006": {
      "id": "tc_c05_huangqiuqiu_unfinished_yawn_006",
      "type": "line",
      "scene": "ts_c05_huangqiuqiu_unfinished_yawn",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "她继续看着。",
      "next": "tc_c05_huangqiuqiu_unfinished_yawn_007"
    },
    "tc_c05_huangqiuqiu_unfinished_yawn_007": {
      "id": "tc_c05_huangqiuqiu_unfinished_yawn_007",
      "type": "line",
      "scene": "ts_c05_huangqiuqiu_unfinished_yawn",
      "speaker": "wenwen",
      "character": "huangqiuqiu",
      "text": "“想打哈欠。”",
      "next": "tc_c05_huangqiuqiu_unfinished_yawn_008"
    },
    "tc_c05_huangqiuqiu_unfinished_yawn_008": {
      "id": "tc_c05_huangqiuqiu_unfinished_yawn_008",
      "type": "line",
      "scene": "ts_c05_huangqiuqiu_unfinished_yawn",
      "speaker": "huangqiuqiu",
      "character": "huangqiuqiu",
      "text": "“那你打。”",
      "next": "tc_c05_huangqiuqiu_unfinished_yawn_009"
    },
    "tc_c05_huangqiuqiu_unfinished_yawn_009": {
      "id": "tc_c05_huangqiuqiu_unfinished_yawn_009",
      "type": "line",
      "scene": "ts_c05_huangqiuqiu_unfinished_yawn",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "哈欠被憋没了，我张了张嘴，只剩一个奇怪的呼吸声。她盯了两秒，笑得把托腮的小手都放下了。我觉得自己这回大概又给她留下了很长时间的笑料。",
      "next": "tc_c05_huangqiuqiu_unfinished_yawn_010",
      "expression": "expression-smile"
    },
    "tc_c05_huangqiuqiu_unfinished_yawn_010": {
      "id": "tc_c05_huangqiuqiu_unfinished_yawn_010",
      "type": "line",
      "scene": "ts_c05_huangqiuqiu_unfinished_yawn",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "笑完以后，她说自己也不是一直想聊天。有时候她愿意安静待着，可我每次都像来检查这里有没有新发生的事。",
      "next": "tc_c05_huangqiuqiu_unfinished_yawn_011"
    },
    "tc_c05_huangqiuqiu_unfinished_yawn_011": {
      "id": "tc_c05_huangqiuqiu_unfinished_yawn_011",
      "type": "line",
      "scene": "ts_c05_huangqiuqiu_unfinished_yawn",
      "speaker": "huangqiuqiu",
      "character": "huangqiuqiu",
      "text": "“今天可以没有。”",
      "next": "tc_c05_huangqiuqiu_unfinished_yawn_012"
    },
    "tc_c05_huangqiuqiu_unfinished_yawn_012": {
      "id": "tc_c05_huangqiuqiu_unfinished_yawn_012",
      "type": "line",
      "scene": "ts_c05_huangqiuqiu_unfinished_yawn",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "我点头，没有再找一个故事救场。我们听了几分钟雨声，我站起来，说现在回去了。她没挽留，也没夸我终于学会照顾自己，只提醒我伞还在门外。",
      "next": "tc_c05_huangqiuqiu_unfinished_yawn_013"
    },
    "tc_c05_huangqiuqiu_unfinished_yawn_013": {
      "id": "tc_c05_huangqiuqiu_unfinished_yawn_013",
      "type": "line",
      "scene": "ts_c05_huangqiuqiu_unfinished_yawn",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "这提醒很有必要。我已经把手伸向没有伞的那一边。",
      "next": "tc_c05_huangqiuqiu_unfinished_yawn_014"
    },
    "tc_c05_huangqiuqiu_unfinished_yawn_014": {
      "id": "tc_c05_huangqiuqiu_unfinished_yawn_014",
      "type": "line",
      "scene": "ts_c05_huangqiuqiu_unfinished_yawn",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "我把凳子挪回不挡路的位置，起身时腿有一点麻，便扶着门等了一下。她问还好吗，我说坐的姿势不对，已经松了。她没有替我紧张，也没有趁这点停留再留我一会儿，只安静等我站稳。我回头向她道别，她抬起一只小手。离开的时候，我知道今天短一点并不等于上一次约定作废。真正让我松快的是，她可以想见我，也可以不需要我撑着把一个哈欠演完。",
      "next": "tc_c05_common_exit",
      "expression": "action-hand"
    },
    "tc_c06_huangqiuqiu_entry": {
      "id": "tc_c06_huangqiuqiu_entry",
      "type": "line",
      "scene": "ts_c06_huangqiuqiu_after_dinner",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "我今天休班，睡足以后过来。第30天的饭局和那一夜的班已经过去了，街上有一家熟悉的店关门，后院侧门却照常在这里。",
      "next": "tc_c06_huangqiuqiu_after_dinner_002"
    },
    "tc_c06_huangqiuqiu_after_dinner_002": {
      "id": "tc_c06_huangqiuqiu_after_dinner_002",
      "type": "line",
      "scene": "ts_c06_huangqiuqiu_after_dinner",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "黄球球听我把前两天的事说完，先问周栀是不是以后不用在那里上班。我说是，她还要和朋友慢慢试别的事情，能不能成，现在都不知道。",
      "next": "tc_c06_huangqiuqiu_after_dinner_003"
    },
    "tc_c06_huangqiuqiu_after_dinner_003": {
      "id": "tc_c06_huangqiuqiu_after_dinner_003",
      "type": "line",
      "scene": "ts_c06_huangqiuqiu_after_dinner",
      "speaker": "huangqiuqiu",
      "character": "huangqiuqiu",
      "text": "“那她今天可以先睡觉。”",
      "next": "tc_c06_huangqiuqiu_after_dinner_004"
    },
    "tc_c06_huangqiuqiu_after_dinner_004": {
      "id": "tc_c06_huangqiuqiu_after_dinner_004",
      "type": "line",
      "scene": "ts_c06_huangqiuqiu_after_dinner",
      "speaker": "wenwen",
      "character": "huangqiuqiu",
      "text": "“应该可以。”",
      "next": "tc_c06_huangqiuqiu_after_dinner_005"
    },
    "tc_c06_huangqiuqiu_after_dinner_005": {
      "id": "tc_c06_huangqiuqiu_after_dinner_005",
      "type": "line",
      "scene": "ts_c06_huangqiuqiu_after_dinner",
      "speaker": "huangqiuqiu",
      "character": "huangqiuqiu",
      "text": "“你说应该，比你保证她会很好听着清楚。”",
      "next": "tc_c06_huangqiuqiu_after_dinner_006"
    },
    "tc_c06_huangqiuqiu_after_dinner_006": {
      "id": "tc_c06_huangqiuqiu_after_dinner_006",
      "type": "line",
      "scene": "ts_c06_huangqiuqiu_after_dinner",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "我想了想，说我也觉得。我们没把别人的生活接成一个一定成功的故事，聊过以后，就让话停在了那里。",
      "next": "tc_c06_huangqiuqiu_after_dinner_007"
    },
    "tc_c06_huangqiuqiu_after_dinner_007": {
      "id": "tc_c06_huangqiuqiu_after_dinner_007",
      "type": "line",
      "scene": "ts_c06_huangqiuqiu_after_dinner",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "门缝里吹进一点凉风，我把门稍稍掩小，先问她这样会不会挡住她想看的方向。她说今天没什么想看的，挡一点没关系。",
      "next": "tc_c06_huangqiuqiu_after_dinner_008"
    },
    "tc_c06_huangqiuqiu_after_dinner_008": {
      "id": "tc_c06_huangqiuqiu_after_dinner_008",
      "type": "line",
      "scene": "ts_c06_huangqiuqiu_after_dinner",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "我坐下，裤袋里一小张纸硌着腿，拿出来才发现是买东西的凭条。她问我怎么总能从衣服里翻出东西。我说勤俭持家，她说更像忘记清理。",
      "next": "tc_c06_huangqiuqiu_after_dinner_009"
    },
    "tc_c06_huangqiuqiu_after_dinner_009": {
      "id": "tc_c06_huangqiuqiu_after_dinner_009",
      "type": "line",
      "scene": "ts_c06_huangqiuqiu_after_dinner",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "我把纸折好收起来，不往她身边堆。她看见以后，问今天没有别的要给她看吗。",
      "next": "tc_c06_huangqiuqiu_after_dinner_010"
    },
    "tc_c06_huangqiuqiu_after_dinner_010": {
      "id": "tc_c06_huangqiuqiu_after_dinner_010",
      "type": "line",
      "scene": "ts_c06_huangqiuqiu_after_dinner",
      "speaker": "wenwen",
      "character": "huangqiuqiu",
      "text": "“没有。你想看？”",
      "next": "tc_c06_huangqiuqiu_after_dinner_011"
    },
    "tc_c06_huangqiuqiu_after_dinner_011": {
      "id": "tc_c06_huangqiuqiu_after_dinner_011",
      "type": "line",
      "scene": "ts_c06_huangqiuqiu_after_dinner",
      "speaker": "huangqiuqiu",
      "character": "huangqiuqiu",
      "text": "“我只是问一问。你可以回答没有。”",
      "next": "tc_c06_huangqiuqiu_after_dinner_012"
    },
    "tc_c06_huangqiuqiu_after_dinner_012": {
      "id": "tc_c06_huangqiuqiu_after_dinner_012",
      "type": "line",
      "scene": "ts_c06_huangqiuqiu_after_dinner",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "我发现我们最近常说这一句话，却不觉得是在重复同一场谈话。前一次是我不敢说累，这次是怕空手来显得不够重视。轮到她问，我才知道，很多时候我把问题想得比她的意思远。",
      "next": "tc_c06_huangqiuqiu_slow_joke_001"
    },
    "tc_c06_huangqiuqiu_slow_joke_001": {
      "id": "tc_c06_huangqiuqiu_slow_joke_001",
      "type": "line",
      "scene": "ts_c06_huangqiuqiu_slow_joke",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "黄球球说她今天有一件想告诉我的事。我坐直了一点，她看见我的动作，先叫我别那么郑重。",
      "next": "tc_c06_huangqiuqiu_slow_joke_002"
    },
    "tc_c06_huangqiuqiu_slow_joke_002": {
      "id": "tc_c06_huangqiuqiu_slow_joke_002",
      "type": "line",
      "scene": "ts_c06_huangqiuqiu_slow_joke",
      "speaker": "huangqiuqiu",
      "character": "huangqiuqiu",
      "text": "“前两天听见一个人说，等一下。”",
      "next": "tc_c06_huangqiuqiu_slow_joke_003"
    },
    "tc_c06_huangqiuqiu_slow_joke_003": {
      "id": "tc_c06_huangqiuqiu_slow_joke_003",
      "type": "line",
      "scene": "ts_c06_huangqiuqiu_slow_joke",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "我等着。",
      "next": "tc_c06_huangqiuqiu_slow_joke_004"
    },
    "tc_c06_huangqiuqiu_slow_joke_004": {
      "id": "tc_c06_huangqiuqiu_slow_joke_004",
      "type": "line",
      "scene": "ts_c06_huangqiuqiu_slow_joke",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "她也等着。",
      "next": "tc_c06_huangqiuqiu_slow_joke_005"
    },
    "tc_c06_huangqiuqiu_slow_joke_005": {
      "id": "tc_c06_huangqiuqiu_slow_joke_005",
      "type": "line",
      "scene": "ts_c06_huangqiuqiu_slow_joke",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "过了好一会儿，我问后来呢。",
      "next": "tc_c06_huangqiuqiu_slow_joke_006"
    },
    "tc_c06_huangqiuqiu_slow_joke_006": {
      "id": "tc_c06_huangqiuqiu_slow_joke_006",
      "type": "line",
      "scene": "ts_c06_huangqiuqiu_slow_joke",
      "speaker": "huangqiuqiu",
      "character": "huangqiuqiu",
      "text": "“我就在等这一下有多长。”",
      "next": "tc_c06_huangqiuqiu_slow_joke_007"
    },
    "tc_c06_huangqiuqiu_slow_joke_007": {
      "id": "tc_c06_huangqiuqiu_slow_joke_007",
      "type": "line",
      "scene": "ts_c06_huangqiuqiu_slow_joke",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "我盯着她，她盯着我，最后我没忍住笑了，笑得有点无奈。她的小手往脸边一放，问是不是不好笑。",
      "next": "tc_c06_huangqiuqiu_slow_joke_008",
      "expression": "expression-smile"
    },
    "tc_c06_huangqiuqiu_slow_joke_008": {
      "id": "tc_c06_huangqiuqiu_slow_joke_008",
      "type": "line",
      "scene": "ts_c06_huangqiuqiu_slow_joke",
      "speaker": "wenwen",
      "character": "huangqiuqiu",
      "text": "“也不能这么说。就是这个笑话比较费时间。”",
      "next": "tc_c06_huangqiuqiu_slow_joke_009"
    },
    "tc_c06_huangqiuqiu_slow_joke_009": {
      "id": "tc_c06_huangqiuqiu_slow_joke_009",
      "type": "line",
      "scene": "ts_c06_huangqiuqiu_slow_joke",
      "speaker": "huangqiuqiu",
      "character": "huangqiuqiu",
      "text": "“我有时间讲完。”",
      "next": "tc_c06_huangqiuqiu_slow_joke_010"
    },
    "tc_c06_huangqiuqiu_slow_joke_010": {
      "id": "tc_c06_huangqiuqiu_slow_joke_010",
      "type": "line",
      "scene": "ts_c06_huangqiuqiu_slow_joke",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "她说这句话没有委屈，也不是暗示我应该多留。就是她准备了一个很笨的笑话，想看我会不会上当。",
      "next": "tc_c06_huangqiuqiu_slow_joke_011"
    },
    "tc_c06_huangqiuqiu_slow_joke_011": {
      "id": "tc_c06_huangqiuqiu_slow_joke_011",
      "type": "line",
      "scene": "ts_c06_huangqiuqiu_slow_joke",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "我承认自己上当了。她看起来很满意，问我还有没有更差的。我想了半天，讲了一个关于打伞却忘记带伞的人，讲到中间忘了最后一句，自己先泄了气。",
      "next": "tc_c06_huangqiuqiu_slow_joke_012"
    },
    "tc_c06_huangqiuqiu_slow_joke_012": {
      "id": "tc_c06_huangqiuqiu_slow_joke_012",
      "type": "line",
      "scene": "ts_c06_huangqiuqiu_slow_joke",
      "speaker": "huangqiuqiu",
      "character": "huangqiuqiu",
      "text": "“你这个不完整。”",
      "next": "tc_c06_huangqiuqiu_slow_joke_013"
    },
    "tc_c06_huangqiuqiu_slow_joke_013": {
      "id": "tc_c06_huangqiuqiu_slow_joke_013",
      "type": "line",
      "scene": "ts_c06_huangqiuqiu_slow_joke",
      "speaker": "wenwen",
      "character": "huangqiuqiu",
      "text": "“可能忘了结尾。”",
      "next": "tc_c06_huangqiuqiu_slow_joke_014"
    },
    "tc_c06_huangqiuqiu_slow_joke_014": {
      "id": "tc_c06_huangqiuqiu_slow_joke_014",
      "type": "line",
      "scene": "ts_c06_huangqiuqiu_slow_joke",
      "speaker": "huangqiuqiu",
      "character": "huangqiuqiu",
      "text": "“那就暂时判你输。”",
      "next": "tc_c06_huangqiuqiu_slow_joke_015"
    },
    "tc_c06_huangqiuqiu_slow_joke_015": {
      "id": "tc_c06_huangqiuqiu_slow_joke_015",
      "type": "line",
      "scene": "ts_c06_huangqiuqiu_slow_joke",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "我们就这样浪费了很长一小段时间。风把门边的纸吹得响了一声，我以为终于想起笑话的结尾，刚抬头，她也抬头看我。等她等着，我又忘了。她叹口气，让我别再跟那句过不去。",
      "next": "tc_c06_huangqiuqiu_slow_joke_016"
    },
    "tc_c06_huangqiuqiu_slow_joke_016": {
      "id": "tc_c06_huangqiuqiu_slow_joke_016",
      "type": "line",
      "scene": "ts_c06_huangqiuqiu_slow_joke",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "她忽然问，我第一次看见她，最先注意到什么。我说是眼睛，再是眉毛，最后是小手。她把手举起来一点，问这个有什么好注意的。",
      "next": "tc_c06_huangqiuqiu_slow_joke_017",
      "expression": "action-hand"
    },
    "tc_c06_huangqiuqiu_slow_joke_017": {
      "id": "tc_c06_huangqiuqiu_slow_joke_017",
      "type": "line",
      "scene": "ts_c06_huangqiuqiu_slow_joke",
      "speaker": "wenwen",
      "character": "huangqiuqiu",
      "text": "“因为你那时托着腮，特别像在等我把话想好。”",
      "next": "tc_c06_huangqiuqiu_slow_joke_018"
    },
    "tc_c06_huangqiuqiu_slow_joke_018": {
      "id": "tc_c06_huangqiuqiu_slow_joke_018",
      "type": "line",
      "scene": "ts_c06_huangqiuqiu_slow_joke",
      "speaker": "huangqiuqiu",
      "character": "huangqiuqiu",
      "text": "“我确实在等。”",
      "next": "tc_c06_huangqiuqiu_slow_joke_019"
    },
    "tc_c06_huangqiuqiu_slow_joke_019": {
      "id": "tc_c06_huangqiuqiu_slow_joke_019",
      "type": "line",
      "scene": "ts_c06_huangqiuqiu_slow_joke",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "我说现在想话没那么慢了。她看了看我，提醒我刚才那个笑话还没想完。我无话可说，只好笑着认输。",
      "next": "tc_c06_huangqiuqiu_slow_joke_020"
    },
    "tc_c06_huangqiuqiu_slow_joke_020": {
      "id": "tc_c06_huangqiuqiu_slow_joke_020",
      "type": "line",
      "scene": "ts_c06_huangqiuqiu_slow_joke",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "离开前，她主动说，下次有想问我的会直接问。我也答应，有不想答的就说不想答。门合上时，那段没讲好的笑话仍然没有结尾，但它已经有人听过，也有人记得哪里不好笑。",
      "next": "tc_c06_common_exit"
    },
    "tc_c07_huangqiuqiu_entry": {
      "id": "tc_c07_huangqiuqiu_entry",
      "type": "line",
      "scene": "ts_c07_huangqiuqiu_quiet_company",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "我下午睡醒以后照约来，门里应得比平时轻。黄球球说今天不太想讲话，我便问，是让我坐一会儿，还是改天再来。",
      "next": "tc_c07_huangqiuqiu_quiet_company_002"
    },
    "tc_c07_huangqiuqiu_quiet_company_002": {
      "id": "tc_c07_huangqiuqiu_quiet_company_002",
      "type": "line",
      "scene": "ts_c07_huangqiuqiu_quiet_company",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "她想了一下，让我坐一会儿。",
      "next": "tc_c07_huangqiuqiu_quiet_company_003"
    },
    "tc_c07_huangqiuqiu_quiet_company_003": {
      "id": "tc_c07_huangqiuqiu_quiet_company_003",
      "type": "line",
      "scene": "ts_c07_huangqiuqiu_quiet_company",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "我坐下以后才发现，安静不是想象中那么容易。我手指碰了两次裤缝，看看门，又看看她，心里一直有一句“是不是发生了什么”往外冒。",
      "next": "tc_c07_huangqiuqiu_quiet_company_004"
    },
    "tc_c07_huangqiuqiu_quiet_company_004": {
      "id": "tc_c07_huangqiuqiu_quiet_company_004",
      "type": "line",
      "scene": "ts_c07_huangqiuqiu_quiet_company",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "她看见我张嘴，先说：“没有一件必须告诉你的事。我今天只是想这样。”",
      "next": "tc_c07_huangqiuqiu_quiet_company_005"
    },
    "tc_c07_huangqiuqiu_quiet_company_005": {
      "id": "tc_c07_huangqiuqiu_quiet_company_005",
      "type": "line",
      "scene": "ts_c07_huangqiuqiu_quiet_company",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "我把话咽回去，点了点头。",
      "next": "tc_c07_huangqiuqiu_quiet_company_006"
    },
    "tc_c07_huangqiuqiu_quiet_company_006": {
      "id": "tc_c07_huangqiuqiu_quiet_company_006",
      "type": "line",
      "scene": "ts_c07_huangqiuqiu_quiet_company",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "等了片刻，她问我是不是很无聊。我说有一点不习惯，但没有无聊到想走。她的小手轻轻敲了一下自己的凳边，说那就再坐一会儿。",
      "next": "tc_c07_huangqiuqiu_quiet_company_007"
    },
    "tc_c07_huangqiuqiu_quiet_company_007": {
      "id": "tc_c07_huangqiuqiu_quiet_company_007",
      "type": "line",
      "scene": "ts_c07_huangqiuqiu_quiet_company",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "门外雨停了，远处有人拖着车子经过。她眼睛追着那阵声音，我没有转头替她描述后面是什么，直到她自己问是不是空车，才说听起来像，但我也没看见。",
      "next": "tc_c07_huangqiuqiu_quiet_company_008"
    },
    "tc_c07_huangqiuqiu_quiet_company_008": {
      "id": "tc_c07_huangqiuqiu_quiet_company_008",
      "type": "line",
      "scene": "ts_c07_huangqiuqiu_quiet_company",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "我们又坐了一会儿，她主动提起第24天那个下午。",
      "next": "tc_c07_huangqiuqiu_outing_gate"
    },
    "tc_c07_huangqiuqiu_outing_return_001": {
      "id": "tc_c07_huangqiuqiu_outing_return_001",
      "type": "line",
      "scene": "ts_c07_huangqiuqiu_outing_return",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "她让我把压在干处的自画像拿出来。我翻开纸，自己也被那扇小门似的鼻子逗笑了。她说前几天想起画上那个人，觉得他好像很会逞强，头发没画对也不承认。我说画的人比他好一点，已经认了。她看着纸，说今天不用补一张更好的，就让他继续精神着。我们把画像重新放好，她没有拿它代替我，也没要求我把自己所有糗相留下。",
      "next": "tc_c07_huangqiuqiu_another_form_001"
    },
    "tc_c07_huangqiuqiu_outing_return_002": {
      "id": "tc_c07_huangqiuqiu_outing_return_002",
      "type": "line",
      "scene": "ts_c07_huangqiuqiu_outing_return",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "她问那只没有买到伞的鸭子后来是不是还在屋檐下。我说可以还在，也可以已经回家。她想了想，说今天不替它决定，让它多坐一会儿。我想接一句好笑的话，又停住。她看着我，眼睛弯了点，像是发现我这回终于没把每个空白都当成等着填的地方。鸭子的故事没有继续，我们也没有因此变得没话可说。",
      "next": "tc_c07_huangqiuqiu_another_form_001"
    },
    "tc_c07_huangqiuqiu_another_form_001": {
      "id": "tc_c07_huangqiuqiu_another_form_001",
      "type": "line",
      "scene": "ts_c07_huangqiuqiu_another_form",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "今天见到她时，她主动问我在朋友那里会不会提起自己。我说不会把她的事告诉别人，只说有自己的安排。",
      "next": "tc_c07_huangqiuqiu_another_form_002"
    },
    "tc_c07_huangqiuqiu_another_form_002": {
      "id": "tc_c07_huangqiuqiu_another_form_002",
      "type": "line",
      "scene": "ts_c07_huangqiuqiu_another_form",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "她听完，过了一会儿说：“你不用因为不说我，就把自己说成每天只有上班睡觉。”",
      "next": "tc_c07_huangqiuqiu_another_form_003"
    },
    "tc_c07_huangqiuqiu_another_form_003": {
      "id": "tc_c07_huangqiuqiu_another_form_003",
      "type": "line",
      "scene": "ts_c07_huangqiuqiu_another_form",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "我想起最近毛狼问我休息日干什么，我确实回答过没干什么。黄球球没有知道那通对话，我是现在才把这件事讲出来。",
      "next": "tc_c07_huangqiuqiu_another_form_004"
    },
    "tc_c07_huangqiuqiu_another_form_004": {
      "id": "tc_c07_huangqiuqiu_another_form_004",
      "type": "line",
      "scene": "ts_c07_huangqiuqiu_another_form",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "她有点不高兴。我以为是我把见她讲得不重要，正想解释，她先说不是要我回去补报。",
      "next": "tc_c07_huangqiuqiu_another_form_005",
      "expression": "expression-serious"
    },
    "tc_c07_huangqiuqiu_another_form_005": {
      "id": "tc_c07_huangqiuqiu_another_form_005",
      "type": "line",
      "scene": "ts_c07_huangqiuqiu_another_form",
      "speaker": "huangqiuqiu",
      "character": "huangqiuqiu",
      "text": "“你可以不告诉别人来这里。但对着我，别也把它讲成没有发生。”",
      "next": "tc_c07_huangqiuqiu_another_form_006"
    },
    "tc_c07_huangqiuqiu_another_form_006": {
      "id": "tc_c07_huangqiuqiu_another_form_006",
      "type": "line",
      "scene": "ts_c07_huangqiuqiu_another_form",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "这句话让我安静了很久。我说自己有时候怕别人追问，话一出口，连带着把自己真正想做的事情都略掉了。",
      "next": "tc_c07_huangqiuqiu_another_form_007"
    },
    "tc_c07_huangqiuqiu_another_form_007": {
      "id": "tc_c07_huangqiuqiu_another_form_007",
      "type": "line",
      "scene": "ts_c07_huangqiuqiu_another_form",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "她的小手扶着脸，没替我把那种怕翻译成什么更高深的东西。她只说，今天见面是我们两个人知道的事，够了。没有必要找一个别人都懂的名字才算数。",
      "next": "tc_c07_huangqiuqiu_another_form_008"
    },
    "tc_c07_huangqiuqiu_another_form_008": {
      "id": "tc_c07_huangqiuqiu_another_form_008",
      "type": "line",
      "scene": "ts_c07_huangqiuqiu_another_form",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "我看了看时间，还有一会儿才需要离开，便跟她说了今天路上看到的一件小事：有人在屋檐下抖伞，把旁边自己的鞋弄湿了，愣了一下，又继续抖。",
      "next": "tc_c07_huangqiuqiu_another_form_009"
    },
    "tc_c07_huangqiuqiu_another_form_009": {
      "id": "tc_c07_huangqiuqiu_another_form_009",
      "type": "line",
      "scene": "ts_c07_huangqiuqiu_another_form",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "她听完，问是不是我。我说这回真不是，她还是不太相信。我举着手保证，两个人笑了很久。",
      "next": "tc_c07_huangqiuqiu_another_form_010",
      "expression": "expression-smile"
    },
    "tc_c07_huangqiuqiu_another_form_010": {
      "id": "tc_c07_huangqiuqiu_another_form_010",
      "type": "line",
      "scene": "ts_c07_huangqiuqiu_another_form",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "那天临走，我把“没干什么”换成了更合适的一句，直接说给她听。",
      "next": "tc_c07_huangqiuqiu_another_form_011"
    },
    "tc_c07_huangqiuqiu_another_form_011": {
      "id": "tc_c07_huangqiuqiu_another_form_011",
      "type": "line",
      "scene": "ts_c07_huangqiuqiu_another_form",
      "speaker": "wenwen",
      "character": "huangqiuqiu",
      "text": "“今天跟你待了一下午，我很高兴。”",
      "next": "tc_c07_huangqiuqiu_another_form_012"
    },
    "tc_c07_huangqiuqiu_another_form_012": {
      "id": "tc_c07_huangqiuqiu_another_form_012",
      "type": "line",
      "scene": "ts_c07_huangqiuqiu_another_form",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "她低头看了眼自己交在一起的小手，再看向我。",
      "next": "tc_c07_huangqiuqiu_another_form_013"
    },
    "tc_c07_huangqiuqiu_another_form_013": {
      "id": "tc_c07_huangqiuqiu_another_form_013",
      "type": "line",
      "scene": "ts_c07_huangqiuqiu_another_form",
      "speaker": "huangqiuqiu",
      "character": "huangqiuqiu",
      "text": "“我也是。不过你刚才那个笑话，也可能真的是你。”",
      "next": "tc_c07_huangqiuqiu_another_form_014"
    },
    "tc_c07_huangqiuqiu_another_form_014": {
      "id": "tc_c07_huangqiuqiu_another_form_014",
      "type": "line",
      "scene": "ts_c07_huangqiuqiu_another_form",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "我正要站起来，她叫住我，低头看了看自己的小手。",
      "next": "tc_c07_huangqiuqiu_another_form_015",
      "expression": "expression-hesitant"
    },
    "tc_c07_huangqiuqiu_another_form_015": {
      "id": "tc_c07_huangqiuqiu_another_form_015",
      "type": "line",
      "scene": "ts_c07_huangqiuqiu_another_form",
      "speaker": "huangqiuqiu",
      "character": "huangqiuqiu",
      "text": "“我最近想试试另一副模样。”",
      "next": "tc_c07_huangqiuqiu_another_form_016"
    },
    "tc_c07_huangqiuqiu_another_form_016": {
      "id": "tc_c07_huangqiuqiu_another_form_016",
      "type": "line",
      "scene": "ts_c07_huangqiuqiu_another_form",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "我没听明白，问她需要我做什么。",
      "next": "tc_c07_huangqiuqiu_another_form_017"
    },
    "tc_c07_huangqiuqiu_another_form_017": {
      "id": "tc_c07_huangqiuqiu_another_form_017",
      "type": "line",
      "scene": "ts_c07_huangqiuqiu_another_form",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "“不用。等我自己想好了，再给你看。”她停了一下，“名字也不用换，还是黄球球。”",
      "next": "tc_c07_huangqiuqiu_another_form_018"
    },
    "tc_c07_huangqiuqiu_another_form_018": {
      "id": "tc_c07_huangqiuqiu_another_form_018",
      "type": "line",
      "scene": "ts_c07_huangqiuqiu_another_form",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "我说好。她没再往下解释，我也没有提前替下一次见面想好该惊讶成什么样。",
      "next": "tc_c07_common_exit"
    },
    "tc_c07_huangqiuqiu_outing_gate": {
      "id": "tc_c07_huangqiuqiu_outing_gate",
      "type": "gate",
      "scene": "ts_c07_huangqiuqiu_outing_return",
      "cases": [
        {
          "flag": "huangqiuqiuOuting",
          "value": "portrait",
          "next": "tc_c07_huangqiuqiu_outing_return_001"
        },
        {
          "flag": "huangqiuqiuOuting",
          "value": "story",
          "next": "tc_c07_huangqiuqiu_outing_return_002"
        }
      ],
      "default": null,
      "exhaustive": true
    },
    "tc_c08_huangqiuqiu_entry": {
      "id": "tc_c08_huangqiuqiu_entry",
      "type": "line",
      "scene": "ts_c08_huangqiuqiu_trial_roster",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "轮班正在试，我还不敢把每个空着的格子都当成已经到手的休息。我来之前先睡了觉，到了门外，敲下三拍，听见那句熟悉的进来。",
      "next": "tc_c08_huangqiuqiu_trial_roster_002"
    },
    "tc_c08_huangqiuqiu_trial_roster_002": {
      "id": "tc_c08_huangqiuqiu_trial_roster_002",
      "type": "line",
      "scene": "ts_c08_huangqiuqiu_trial_roster",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "黄球球问我今天怎么比以前早。我说班次有一点调整，还要试一阵，之后可能不用每个晚上都在前面值班。",
      "next": "tc_c08_huangqiuqiu_trial_roster_003"
    },
    "tc_c08_huangqiuqiu_trial_roster_003": {
      "id": "tc_c08_huangqiuqiu_trial_roster_003",
      "type": "line",
      "scene": "ts_c08_huangqiuqiu_trial_roster",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "她想了想，问是不是意味着我会换一份工作。我说不是，仍在网吧，只是和同事轮着来。她点头，说那不用把每次不一样的时间都解释成新生活开始。",
      "next": "tc_c08_huangqiuqiu_trial_roster_004"
    },
    "tc_c08_huangqiuqiu_trial_roster_004": {
      "id": "tc_c08_huangqiuqiu_trial_roster_004",
      "type": "line",
      "scene": "ts_c08_huangqiuqiu_trial_roster",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "我笑了：“你怎么知道我差点这么讲？”",
      "next": "tc_c08_huangqiuqiu_trial_roster_005"
    },
    "tc_c08_huangqiuqiu_trial_roster_005": {
      "id": "tc_c08_huangqiuqiu_trial_roster_005",
      "type": "line",
      "scene": "ts_c08_huangqiuqiu_trial_roster",
      "speaker": "huangqiuqiu",
      "character": "huangqiuqiu",
      "text": "“我不知道。是你刚才自己说的。”",
      "next": "tc_c08_huangqiuqiu_trial_roster_006"
    },
    "tc_c08_huangqiuqiu_trial_roster_006": {
      "id": "tc_c08_huangqiuqiu_trial_roster_006",
      "type": "line",
      "scene": "ts_c08_huangqiuqiu_trial_roster",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "我认输，把凳子搬好，坐在她旁边。",
      "next": "tc_c08_huangqiuqiu_trial_roster_007"
    },
    "tc_c08_huangqiuqiu_trial_roster_007": {
      "id": "tc_c08_huangqiuqiu_trial_roster_007",
      "type": "line",
      "scene": "ts_c08_huangqiuqiu_trial_roster",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "那天外头的风很舒服，她想再坐高一点看看天。我先把矮凳垫稳，伸手之前问她，可以吗。",
      "next": "tc_c08_huangqiuqiu_trial_roster_008"
    },
    "tc_c08_huangqiuqiu_trial_roster_008": {
      "id": "tc_c08_huangqiuqiu_trial_roster_008",
      "type": "line",
      "scene": "ts_c08_huangqiuqiu_trial_roster",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "她说可以，我才托住她，缓缓移过去。她的小手贴着我的手背，等位置放稳，才收回。",
      "next": "tc_c08_huangqiuqiu_trial_roster_009",
      "expression": "action-hand"
    },
    "tc_c08_huangqiuqiu_trial_roster_009": {
      "id": "tc_c08_huangqiuqiu_trial_roster_009",
      "type": "line",
      "scene": "ts_c08_huangqiuqiu_trial_roster",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "她看着天，久久没有说话。我刚想坐回去，她的小手在我手背上轻轻碰了一下，像叫我再等一等。她抬眼问我，现在还会不会看见她就紧张。",
      "next": "tc_c08_huangqiuqiu_trial_roster_010",
      "expression": "action-hand"
    },
    "tc_c08_huangqiuqiu_trial_roster_010": {
      "id": "tc_c08_huangqiuqiu_trial_roster_010",
      "type": "line",
      "scene": "ts_c08_huangqiuqiu_trial_roster",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "“会。”我说。",
      "next": "tc_c08_huangqiuqiu_trial_roster_011"
    },
    "tc_c08_huangqiuqiu_trial_roster_011": {
      "id": "tc_c08_huangqiuqiu_trial_roster_011",
      "type": "line",
      "scene": "ts_c08_huangqiuqiu_trial_roster",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "她的眼睛睁大一点。",
      "next": "tc_c08_huangqiuqiu_trial_roster_012"
    },
    "tc_c08_huangqiuqiu_trial_roster_012": {
      "id": "tc_c08_huangqiuqiu_trial_roster_012",
      "type": "line",
      "scene": "ts_c08_huangqiuqiu_trial_roster",
      "speaker": "wenwen",
      "character": "huangqiuqiu",
      "text": "“但跟第一次不一样。”",
      "next": "tc_c08_huangqiuqiu_trial_roster_013"
    },
    "tc_c08_huangqiuqiu_trial_roster_013": {
      "id": "tc_c08_huangqiuqiu_trial_roster_013",
      "type": "line",
      "scene": "ts_c08_huangqiuqiu_trial_roster",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "我没急着补。门外的云慢慢移，没人催我当场替这个不同找一个完整解释。",
      "next": "tc_c08_huangqiuqiu_her_decision_001"
    },
    "tc_c08_huangqiuqiu_her_decision_001": {
      "id": "tc_c08_huangqiuqiu_her_decision_001",
      "type": "line",
      "scene": "ts_c08_huangqiuqiu_her_decision",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "看够天空以后，她让我帮忙回到靠里的位置。我照着她说的慢慢放好，正准备收手，她的小手忽然碰住了我的手指。",
      "next": "tc_c08_huangqiuqiu_her_decision_002",
      "expression": "action-hand"
    },
    "tc_c08_huangqiuqiu_her_decision_002": {
      "id": "tc_c08_huangqiuqiu_her_decision_002",
      "type": "line",
      "scene": "ts_c08_huangqiuqiu_her_decision",
      "speaker": "huangqiuqiu",
      "character": "huangqiuqiu",
      "text": "“先别动。”",
      "next": "tc_c08_huangqiuqiu_her_decision_003"
    },
    "tc_c08_huangqiuqiu_her_decision_003": {
      "id": "tc_c08_huangqiuqiu_her_decision_003",
      "type": "line",
      "scene": "ts_c08_huangqiuqiu_her_decision",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "我停住，抬眼看她。",
      "next": "tc_c08_huangqiuqiu_her_decision_004"
    },
    "tc_c08_huangqiuqiu_her_decision_004": {
      "id": "tc_c08_huangqiuqiu_her_decision_004",
      "type": "line",
      "scene": "ts_c08_huangqiuqiu_her_decision",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "她沉默了一会儿，问能不能再这样放一会儿。她自己也觉得有点别扭，问完以后，眉毛比平时更像在忧虑。",
      "next": "tc_c08_huangqiuqiu_her_decision_005",
      "expression": "expression-hesitant"
    },
    "tc_c08_huangqiuqiu_her_decision_005": {
      "id": "tc_c08_huangqiuqiu_her_decision_005",
      "type": "line",
      "scene": "ts_c08_huangqiuqiu_her_decision",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "我把手放稳：“可以。我这样会不会挡着你？”",
      "next": "tc_c08_huangqiuqiu_her_decision_006"
    },
    "tc_c08_huangqiuqiu_her_decision_006": {
      "id": "tc_c08_huangqiuqiu_her_decision_006",
      "type": "line",
      "scene": "ts_c08_huangqiuqiu_her_decision",
      "speaker": "huangqiuqiu",
      "character": "huangqiuqiu",
      "text": "“不会。”",
      "next": "tc_c08_huangqiuqiu_her_decision_007"
    },
    "tc_c08_huangqiuqiu_her_decision_007": {
      "id": "tc_c08_huangqiuqiu_her_decision_007",
      "type": "line",
      "scene": "ts_c08_huangqiuqiu_her_decision",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "她的手很小，我没有攥紧，只让她轻轻搭着。过了一会儿，我发现自己一直在看两只手，便抬头，她也恰好看过来。",
      "next": "tc_c08_huangqiuqiu_her_decision_008",
      "expression": "action-hand"
    },
    "tc_c08_huangqiuqiu_her_decision_008": {
      "id": "tc_c08_huangqiuqiu_her_decision_008",
      "type": "line",
      "scene": "ts_c08_huangqiuqiu_her_decision",
      "speaker": "huangqiuqiu",
      "character": "huangqiuqiu",
      "text": "“你现在是不是又不知道说什么？”",
      "next": "tc_c08_huangqiuqiu_her_decision_009"
    },
    "tc_c08_huangqiuqiu_her_decision_009": {
      "id": "tc_c08_huangqiuqiu_her_decision_009",
      "type": "line",
      "scene": "ts_c08_huangqiuqiu_her_decision",
      "speaker": "wenwen",
      "character": "huangqiuqiu",
      "text": "“这次不全是。”",
      "next": "tc_c08_huangqiuqiu_her_decision_010"
    },
    "tc_c08_huangqiuqiu_her_decision_010": {
      "id": "tc_c08_huangqiuqiu_her_decision_010",
      "type": "line",
      "scene": "ts_c08_huangqiuqiu_her_decision",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "她没追问，嘴角有一点很浅的笑。我们就这么放了一会儿，直到她自己松开。我没有把这个动作立即变成一句必须回答的告白，她也没有假装刚才只是为了坐稳。",
      "next": "tc_c08_huangqiuqiu_her_decision_011",
      "expression": "expression-smile"
    },
    "tc_c08_huangqiuqiu_her_decision_011": {
      "id": "tc_c08_huangqiuqiu_her_decision_011",
      "type": "line",
      "scene": "ts_c08_huangqiuqiu_her_decision",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "后来聊起我试轮班的担心，我承认自己怕跟同事提出不能换某一晚，会显得不好相处。她问原来有没有答应，我说没有，只是有人问过。",
      "next": "tc_c08_huangqiuqiu_her_decision_012"
    },
    "tc_c08_huangqiuqiu_her_decision_012": {
      "id": "tc_c08_huangqiuqiu_her_decision_012",
      "type": "line",
      "scene": "ts_c08_huangqiuqiu_her_decision",
      "speaker": "huangqiuqiu",
      "character": "huangqiuqiu",
      "text": "“那你告诉他那天有安排。”",
      "next": "tc_c08_huangqiuqiu_her_decision_013"
    },
    "tc_c08_huangqiuqiu_her_decision_013": {
      "id": "tc_c08_huangqiuqiu_her_decision_013",
      "type": "line",
      "scene": "ts_c08_huangqiuqiu_her_decision",
      "speaker": "wenwen",
      "character": "huangqiuqiu",
      "text": "“具体什么安排呢？”",
      "next": "tc_c08_huangqiuqiu_her_decision_014"
    },
    "tc_c08_huangqiuqiu_her_decision_014": {
      "id": "tc_c08_huangqiuqiu_her_decision_014",
      "type": "line",
      "scene": "ts_c08_huangqiuqiu_her_decision",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "她看着我：“你要告诉我，还是告诉他？”",
      "next": "tc_c08_huangqiuqiu_her_decision_015"
    },
    "tc_c08_huangqiuqiu_her_decision_015": {
      "id": "tc_c08_huangqiuqiu_her_decision_015",
      "type": "line",
      "scene": "ts_c08_huangqiuqiu_her_decision",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "我被问得笑起来。这个问题让我终于分清，守住一次自己想要的见面，和拿她去解释全部生活，不是一件事。",
      "next": "tc_c08_huangqiuqiu_her_decision_016"
    },
    "tc_c08_huangqiuqiu_her_decision_016": {
      "id": "tc_c08_huangqiuqiu_her_decision_016",
      "type": "line",
      "scene": "ts_c08_huangqiuqiu_her_decision",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "我告诉她，下一次来之前会先确认睡觉和吃饭，不再把半小时塞进所有事情最后。她说好，也告诉我自己下次想不想聊天，到时会直接讲。",
      "next": "tc_c08_huangqiuqiu_her_decision_017"
    },
    "tc_c08_huangqiuqiu_her_decision_017": {
      "id": "tc_c08_huangqiuqiu_her_decision_017",
      "type": "line",
      "scene": "ts_c08_huangqiuqiu_her_decision",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "聊到这里，她看了看自己的手，又看向我。",
      "next": "tc_c08_huangqiuqiu_her_decision_018"
    },
    "tc_c08_huangqiuqiu_her_decision_018": {
      "id": "tc_c08_huangqiuqiu_her_decision_018",
      "type": "line",
      "scene": "ts_c08_huangqiuqiu_her_decision",
      "speaker": "huangqiuqiu",
      "character": "huangqiuqiu",
      "text": "“上次说的那副模样，我今天想试试。”",
      "next": "tc_c08_huangqiuqiu_her_decision_019",
      "expression": "expression-serious",
      "avatarExpression": "expression-serious"
    },
    "tc_c08_huangqiuqiu_her_decision_019": {
      "id": "tc_c08_huangqiuqiu_her_decision_019",
      "type": "line",
      "scene": "ts_c08_huangqiuqiu_her_decision",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "我把手收回膝上，问她要不要我往后坐一点。她点头，我便起身把凳子挪开。等空出一点地方，她才说好了。",
      "next": "tc_c08_huangqiuqiu_her_decision_020"
    },
    "tc_c08_huangqiuqiu_her_decision_020": {
      "id": "tc_c08_huangqiuqiu_her_decision_020",
      "type": "line",
      "scene": "ts_c08_huangqiuqiu_her_decision",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "她坐直了一点，原本圆润的黄色轮廓在我眼前渐渐改变。肩背舒展开来，手臂落到身侧；等她把双脚踩稳，我才发现自己一直屏着气。",
      "next": "tc_c08_huangqiuqiu_human_reveal"
    },
    "tc_c08_huangqiuqiu_human_reveal": {
      "id": "tc_c08_huangqiuqiu_human_reveal",
      "type": "line",
      "scene": "ts_c08_huangqiuqiu_her_decision",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "坐在我面前的，已经是个棕色齐刘海、中长发垂到肩旁的年轻女人。浅米灰色的宽松拉链外套敞着，里面是白色印花上衣，颈间有一圈黑色颈饰，一只眼前覆着白色遮片。她手里握着一根浅色的玩偶棒，长柄顶端是张圆圆的脸。",
      "next": "tc_c08_huangqiuqiu_her_decision_022",
      "onEnter": {
        "requires": [
          {
            "flag": "route",
            "value": "huangqiuqiu"
          },
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
        ],
        "setFlags": {
          "qiuForm": "human"
        }
      }
    },
    "tc_c08_huangqiuqiu_her_decision_022": {
      "id": "tc_c08_huangqiuqiu_her_decision_022",
      "type": "line",
      "scene": "ts_c08_huangqiuqiu_her_decision",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "她抬头等我开口，眉心又微微收起来。我认得那副等我把话想好的神情，却还是愣了很久。",
      "next": "tc_c08_huangqiuqiu_her_decision_023",
      "expression": "expression-hesitant"
    },
    "tc_c08_huangqiuqiu_her_decision_023": {
      "id": "tc_c08_huangqiuqiu_her_decision_023",
      "type": "line",
      "scene": "ts_c08_huangqiuqiu_her_decision",
      "speaker": "wenwen",
      "character": "huangqiuqiu",
      "text": "“黄球球？”",
      "next": "tc_c08_huangqiuqiu_her_decision_024"
    },
    "tc_c08_huangqiuqiu_her_decision_024": {
      "id": "tc_c08_huangqiuqiu_her_decision_024",
      "type": "line",
      "scene": "ts_c08_huangqiuqiu_her_decision",
      "speaker": "huangqiuqiu",
      "character": "huangqiuqiu",
      "text": "“不是说了，名字不用换。”",
      "next": "tc_c08_huangqiuqiu_her_decision_025",
      "expression": "expression-serious",
      "avatarExpression": "expression-serious"
    },
    "tc_c08_huangqiuqiu_her_decision_025": {
      "id": "tc_c08_huangqiuqiu_her_decision_025",
      "type": "line",
      "scene": "ts_c08_huangqiuqiu_her_decision",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "我笑了一下，终于把那口气呼出来。她低头整理袖口，玩偶棒差点碰到我的膝盖，又被她及时扶正。",
      "next": "tc_c08_huangqiuqiu_her_decision_026",
      "cg": "tc-cg-qiuqiu-transform"
    },
    "tc_c08_huangqiuqiu_her_decision_026": {
      "id": "tc_c08_huangqiuqiu_her_decision_026",
      "type": "line",
      "scene": "ts_c08_huangqiuqiu_her_decision",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "“我本来还想先说一句很镇定的话。”我说。",
      "next": "tc_c08_huangqiuqiu_her_decision_027",
      "cg": "tc-cg-qiuqiu-transform"
    },
    "tc_c08_huangqiuqiu_her_decision_027": {
      "id": "tc_c08_huangqiuqiu_her_decision_027",
      "type": "line",
      "scene": "ts_c08_huangqiuqiu_her_decision",
      "speaker": "huangqiuqiu",
      "character": "huangqiuqiu",
      "text": "“那句可以留着。你现在先坐好。”",
      "next": "tc_c08_huangqiuqiu_her_decision_028",
      "expression": "expression-smile",
      "avatarExpression": "expression-smile",
      "cg": "tc-cg-qiuqiu-transform"
    },
    "tc_c08_huangqiuqiu_her_decision_028": {
      "id": "tc_c08_huangqiuqiu_her_decision_028",
      "type": "line",
      "scene": "ts_c08_huangqiuqiu_her_decision",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "我重新坐下。她把玩偶棒靠在身边，自己将外套下摆拢好，挪到坐得舒服的位置。我没有伸手替她安排，她也没有急着让我夸这副模样。我们隔着刚才留出的那点距离，重新聊起晚饭。",
      "next": "tc_c08_huangqiuqiu_her_decision_029"
    },
    "tc_c08_huangqiuqiu_her_decision_029": {
      "id": "tc_c08_huangqiuqiu_her_decision_029",
      "type": "line",
      "scene": "ts_c08_huangqiuqiu_her_decision",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "临走前，我发现鞋带松了，蹲下系了两次才系好。她看着我，说刚才想提醒，又怕我正在想一句重要的话。我说没有，在想晚饭吃什么。她点头，说那确实挺重要，别再到吃完才后悔。她主动说再见，抬起被宽松袖口遮住一半的手，挥了一下。我站在门边，心口比来的时候热一点；她等了两秒，还是那句熟悉的提醒：“鞋带这次系紧没有？”",
      "next": "tc_c08_common_exit",
      "expression": "action-wave"
    },
    "tc_c09_huangqiuqiu_entry": {
      "id": "tc_c09_huangqiuqiu_entry",
      "type": "line",
      "scene": "ts_c09_huangqiuqiu_relationship",
      "speaker": "narrator",
      "character": null,
      "text": "轮班在第六十一天定下来以后，我渐渐能留出固定的休息日。今天没有上班，我睡醒吃了饭，带着一把干燥的伞来到侧门。",
      "next": "tc_c09_huangqiuqiu_relationship_002"
    },
    "tc_c09_huangqiuqiu_relationship_002": {
      "id": "tc_c09_huangqiuqiu_relationship_002",
      "type": "line",
      "scene": "ts_c09_huangqiuqiu_relationship_inside",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "黄球球看着伞，问没下雨为什么带。我说天气看起来不稳，她看了看门外，说这回准备得挺像样。",
      "next": "tc_c09_huangqiuqiu_relationship_003"
    },
    "tc_c09_huangqiuqiu_relationship_003": {
      "id": "tc_c09_huangqiuqiu_relationship_003",
      "type": "line",
      "scene": "ts_c09_huangqiuqiu_relationship_inside",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "我坐下不久，她就问我，上次说的“跟第一次不一样”，现在想好没有。",
      "next": "tc_c09_huangqiuqiu_relationship_004"
    },
    "tc_c09_huangqiuqiu_relationship_004": {
      "id": "tc_c09_huangqiuqiu_relationship_004",
      "type": "line",
      "scene": "ts_c09_huangqiuqiu_relationship_inside",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "我看着她。棕色的齐刘海被她拨整齐了，宽松外套的袖口往上折了一道。她把玩偶棒靠在凳边，双手放在膝上，没有用玩笑替今天的话开头。",
      "next": "tc_c09_huangqiuqiu_relationship_005",
      "expression": "expression-serious"
    },
    "tc_c09_huangqiuqiu_relationship_005": {
      "id": "tc_c09_huangqiuqiu_relationship_005",
      "type": "line",
      "scene": "ts_c09_huangqiuqiu_relationship_inside",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "我说想好了。她让我等一下，自己先讲。",
      "next": "tc_c09_huangqiuqiu_relationship_006"
    },
    "tc_c09_huangqiuqiu_relationship_006": {
      "id": "tc_c09_huangqiuqiu_relationship_006",
      "type": "line",
      "scene": "ts_c09_huangqiuqiu_relationship_inside",
      "speaker": "huangqiuqiu",
      "character": "huangqiuqiu",
      "text": "“我喜欢你来。不只是想听你说外面发生什么。”",
      "next": "tc_c09_huangqiuqiu_relationship_007"
    },
    "tc_c09_huangqiuqiu_relationship_007": {
      "id": "tc_c09_huangqiuqiu_relationship_007",
      "type": "line",
      "scene": "ts_c09_huangqiuqiu_relationship_inside",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "她的声音没有突然变得轻，也没比平时更像谁。说到这里，她停了停，再往下讲。",
      "next": "tc_c09_huangqiuqiu_relationship_008"
    },
    "tc_c09_huangqiuqiu_relationship_008": {
      "id": "tc_c09_huangqiuqiu_relationship_008",
      "type": "line",
      "scene": "ts_c09_huangqiuqiu_relationship_inside",
      "speaker": "huangqiuqiu",
      "character": "huangqiuqiu",
      "text": "“我想知道你愿不愿意，把我当作喜欢的人。要是你想做朋友，也告诉我。我不想总用问天气，把这件事绕过去。”",
      "next": "tc_c09_huangqiuqiu_relationship_009"
    },
    "tc_c09_huangqiuqiu_relationship_009": {
      "id": "tc_c09_huangqiuqiu_relationship_009",
      "type": "line",
      "scene": "ts_c09_huangqiuqiu_relationship_inside",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "我想起她还是圆球时，我们也这样隔着一张凳子，认真等过对方把话讲完。她现在的问题已经很清楚，我也该给一个清楚的回答。",
      "next": "tc_c09_huangqiuqiu_relationship_choice"
    },
    "tc_c09_huangqiuqiu_dating_001": {
      "id": "tc_c09_huangqiuqiu_dating_001",
      "type": "line",
      "scene": "ts_c09_huangqiuqiu_dating",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "黄球球听完，没有马上说话。她看了一会儿我放在膝盖上的手，才抬眼问，靠近一点可以吗。",
      "next": "tc_c09_huangqiuqiu_dating_002",
      "expression": "expression-hesitant"
    },
    "tc_c09_huangqiuqiu_dating_002": {
      "id": "tc_c09_huangqiuqiu_dating_002",
      "type": "line",
      "scene": "ts_c09_huangqiuqiu_dating",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "我把凳子挪近，保持她觉得舒服的距离，问这样行不行。她说还可以近一点。我照做，直到她伸出手，碰到了我的手指。",
      "next": "tc_c09_huangqiuqiu_dating_003"
    },
    "tc_c09_huangqiuqiu_dating_003": {
      "id": "tc_c09_huangqiuqiu_dating_003",
      "type": "line",
      "scene": "ts_c09_huangqiuqiu_dating",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "“这样。”她说。",
      "next": "tc_c09_huangqiuqiu_dating_004"
    },
    "tc_c09_huangqiuqiu_dating_004": {
      "id": "tc_c09_huangqiuqiu_dating_004",
      "type": "line",
      "scene": "ts_c09_huangqiuqiu_dating",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "我让她把手搭稳，问能不能轻轻抱她一下。她认真看着我，答应了，又提醒我别突然用力。",
      "next": "tc_c09_huangqiuqiu_dating_005"
    },
    "tc_c09_huangqiuqiu_dating_005": {
      "id": "tc_c09_huangqiuqiu_dating_005",
      "type": "line",
      "scene": "ts_c09_huangqiuqiu_dating",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "我慢慢靠近，等她也朝我倾过来，才轻轻环住她的肩背。宽松外套的袖子擦过我的手臂，她的手落在我背上，停得很轻。我们抱了一会儿，我才慢慢退回去。",
      "next": "tc_c09_huangqiuqiu_dating_006"
    },
    "tc_c09_huangqiuqiu_dating_006": {
      "id": "tc_c09_huangqiuqiu_dating_006",
      "type": "line",
      "scene": "ts_c09_huangqiuqiu_dating",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "她抬起眼：“你心跳是不是很快？”",
      "next": "tc_c09_huangqiuqiu_dating_007"
    },
    "tc_c09_huangqiuqiu_dating_007": {
      "id": "tc_c09_huangqiuqiu_dating_007",
      "type": "line",
      "scene": "ts_c09_huangqiuqiu_dating",
      "speaker": "wenwen",
      "character": "huangqiuqiu",
      "text": "“是。你听到？”",
      "next": "tc_c09_huangqiuqiu_dating_008"
    },
    "tc_c09_huangqiuqiu_dating_008": {
      "id": "tc_c09_huangqiuqiu_dating_008",
      "type": "line",
      "scene": "ts_c09_huangqiuqiu_dating",
      "speaker": "huangqiuqiu",
      "character": "huangqiuqiu",
      "text": "“没有。看你一直不敢动。”",
      "next": "tc_c09_huangqiuqiu_dating_009"
    },
    "tc_c09_huangqiuqiu_dating_009": {
      "id": "tc_c09_huangqiuqiu_dating_009",
      "type": "line",
      "scene": "ts_c09_huangqiuqiu_dating",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "我笑了，她也笑。刚才那点紧张一下变成我们都能笑出来的笨拙。",
      "next": "tc_c09_huangqiuqiu_dating_010",
      "expression": "expression-smile"
    },
    "tc_c09_huangqiuqiu_dating_010": {
      "id": "tc_c09_huangqiuqiu_dating_010",
      "type": "line",
      "scene": "ts_c09_huangqiuqiu_dating",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "我们说好了下一次见面，仍然要有休息，要在门外问她方便不方便。交往没有让每一次回应变成默认，也没有把她的世界忽然推到人群中间。",
      "next": "tc_c09_huangqiuqiu_dating_011"
    },
    "tc_c09_huangqiuqiu_dating_011": {
      "id": "tc_c09_huangqiuqiu_dating_011",
      "type": "line",
      "scene": "ts_c09_huangqiuqiu_dating",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "走的时候，我第一次叫她名字叫得那么慢。她等我说完再见，抬手挥了一下。",
      "next": "tc_c09_huangqiuqiu_dating_012",
      "expression": "action-wave"
    },
    "tc_c09_huangqiuqiu_dating_012": {
      "id": "tc_c09_huangqiuqiu_dating_012",
      "type": "line",
      "scene": "ts_c09_huangqiuqiu_dating_outside",
      "speaker": "narrator",
      "character": null,
      "text": "我合上门，站了一会儿才离开。今天外面的天没有特别晴，但我记得她刚才是怎么笑的。",
      "next": "tc_c09_common_exit"
    },
    "tc_c09_huangqiuqiu_friends_001": {
      "id": "tc_c09_huangqiuqiu_friends_001",
      "type": "line",
      "scene": "ts_c09_huangqiuqiu_friends",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "黄球球看了我一会儿，低头拨了拨折起的袖口。",
      "next": "tc_c09_huangqiuqiu_friends_002",
      "expression": "expression-downcast"
    },
    "tc_c09_huangqiuqiu_friends_002": {
      "id": "tc_c09_huangqiuqiu_friends_002",
      "type": "line",
      "scene": "ts_c09_huangqiuqiu_friends",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "“好。”她说。",
      "next": "tc_c09_huangqiuqiu_friends_003"
    },
    "tc_c09_huangqiuqiu_friends_003": {
      "id": "tc_c09_huangqiuqiu_friends_003",
      "type": "line",
      "scene": "ts_c09_huangqiuqiu_friends",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "我没忙着讲朋友也一样重要，因为我知道，刚才她问的不是重要不重要。她沉默了一会儿，才说今天心里有点不舒服，想自己待着。",
      "next": "tc_c09_huangqiuqiu_friends_004"
    },
    "tc_c09_huangqiuqiu_friends_004": {
      "id": "tc_c09_huangqiuqiu_friends_004",
      "type": "line",
      "scene": "ts_c09_huangqiuqiu_friends",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "我点头，起身时问要不要把门带上。她说留一道缝，我便照她说的做。",
      "next": "tc_c09_huangqiuqiu_friends_005"
    },
    "tc_c09_huangqiuqiu_friends_005": {
      "id": "tc_c09_huangqiuqiu_friends_005",
      "type": "line",
      "scene": "ts_c09_huangqiuqiu_friends",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "走到门口，她叫住我，问下次是不是还会先敲门。我回头说会，但不是今天再敲一遍逼她好起来。",
      "next": "tc_c09_huangqiuqiu_friends_006"
    },
    "tc_c09_huangqiuqiu_friends_006": {
      "id": "tc_c09_huangqiuqiu_friends_006",
      "type": "line",
      "scene": "ts_c09_huangqiuqiu_friends",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "她看了我两秒，嘴角微微动了动：“那还行。”",
      "next": "tc_c09_huangqiuqiu_friends_007",
      "expression": "expression-smile"
    },
    "tc_c09_huangqiuqiu_friends_007": {
      "id": "tc_c09_huangqiuqiu_friends_007",
      "type": "line",
      "scene": "ts_c09_huangqiuqiu_friends_days_later",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "几天以后，我照约过来，在门外等她回应。她让我进去，第一句问我那把没下雨也带的伞，后来到底用上没有。",
      "next": "tc_c09_huangqiuqiu_friends_008",
      "time": "第76天后的数日·具体时刻未注明"
    },
    "tc_c09_huangqiuqiu_friends_008": {
      "id": "tc_c09_huangqiuqiu_friends_008",
      "type": "line",
      "scene": "ts_c09_huangqiuqiu_friends_days_later",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "我说用上了，回去时正好开始下。她点点头，仿佛一个等着核实的小问题终于有了结尾。",
      "next": "tc_c09_huangqiuqiu_friends_009",
      "time": "第76天后的数日·具体时刻未注明"
    },
    "tc_c09_huangqiuqiu_friends_009": {
      "id": "tc_c09_huangqiuqiu_friends_009",
      "type": "line",
      "scene": "ts_c09_huangqiuqiu_friends_days_later",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "我们没有刻意避开那天，也没有一见面就重新讨论它。我告诉她，谢谢她愿意讲清楚。她说你也讲清楚了，不用每次来都再道一次歉。",
      "next": "tc_c09_huangqiuqiu_friends_010",
      "time": "第76天后的数日·具体时刻未注明"
    },
    "tc_c09_huangqiuqiu_friends_010": {
      "id": "tc_c09_huangqiuqiu_friends_010",
      "type": "line",
      "scene": "ts_c09_huangqiuqiu_friends_days_later",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "那天我们聊了一阵，坐得和以前差不多远。分别时她主动先说了再见。朋友两个字没有把她变小，也没有把那段喜欢抹掉，只是给今后的相处留出了两个人都愿意站的位置。",
      "next": "tc_c09_common_exit",
      "time": "第76天后的数日·具体时刻未注明",
      "expression": "action-wave"
    },
    "tc_c09_huangqiuqiu_relationship_choice": {
      "id": "tc_c09_huangqiuqiu_relationship_choice",
      "type": "choice",
      "scene": "ts_c09_huangqiuqiu_relationship_inside",
      "character": "huangqiuqiu",
      "text": "",
      "flag": "huangqiuqiuRelationship",
      "choices": [
        {
          "label": "我喜欢你。我想和你交往，想见的就是现在的你。",
          "value": "dating",
          "next": "tc_c09_huangqiuqiu_dating_001"
        },
        {
          "label": "我珍惜你，但我想要的是朋友关系。我不把说不清当作答应。",
          "value": "friends",
          "next": "tc_c09_huangqiuqiu_friends_001"
        }
      ]
    },
    "tc_c10_huangqiuqiu_dating_001": {
      "id": "tc_c10_huangqiuqiu_dating_001",
      "type": "line",
      "scene": "ts_c10_huangqiuqiu_dating",
      "speaker": "narrator",
      "character": null,
      "text": "我在门外敲三下，敲完把伞往旁边挪一点。",
      "next": "tc_c10_huangqiuqiu_dating_002"
    },
    "tc_c10_huangqiuqiu_dating_002": {
      "id": "tc_c10_huangqiuqiu_dating_002",
      "type": "line",
      "scene": "ts_c10_huangqiuqiu_dating",
      "speaker": "narrator",
      "character": null,
      "text": "“这回伞没挡路。”里面说。",
      "next": "tc_c10_huangqiuqiu_dating_003"
    },
    "tc_c10_huangqiuqiu_dating_003": {
      "id": "tc_c10_huangqiuqiu_dating_003",
      "type": "line",
      "scene": "ts_c10_huangqiuqiu_dating",
      "speaker": "wenwen",
      "character": null,
      "text": "“你还没看。”",
      "next": "tc_c10_huangqiuqiu_dating_004"
    },
    "tc_c10_huangqiuqiu_dating_004": {
      "id": "tc_c10_huangqiuqiu_dating_004",
      "type": "line",
      "scene": "ts_c10_huangqiuqiu_dating",
      "speaker": "huangqiuqiu",
      "character": null,
      "text": "“我只是提前提醒。”",
      "next": "tc_c10_huangqiuqiu_dating_005"
    },
    "tc_c10_huangqiuqiu_dating_005": {
      "id": "tc_c10_huangqiuqiu_dating_005",
      "type": "line",
      "scene": "ts_c10_huangqiuqiu_dating_inside",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "我等她说进来才推门。黄球球坐在门里的干处，棕色中长发垂在浅米灰色外套上，白色遮片仍在一侧眼前。她托着腮，见我进来，放下手轻轻挥了挥。那根圆脸玩偶棒靠在凳边，被她用脚往里轻轻拢了一点，免得挡路。",
      "next": "tc_c10_huangqiuqiu_dating_006",
      "expression": "action-wave"
    },
    "tc_c10_huangqiuqiu_dating_006": {
      "id": "tc_c10_huangqiuqiu_dating_006",
      "type": "line",
      "scene": "ts_c10_huangqiuqiu_dating_inside",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "两年过去，我仍在网吧轮班。有时上夜班，有时白天在前面忙，休息的时间能提前安排，却也不是永远不会变。我来见她，依旧先睡够，依旧把该交接的事情交接好，不用一个临时消失换一场偷偷摸摸的相处。",
      "next": "tc_c10_huangqiuqiu_dating_007"
    },
    "tc_c10_huangqiuqiu_dating_007": {
      "id": "tc_c10_huangqiuqiu_dating_007",
      "type": "line",
      "scene": "ts_c10_huangqiuqiu_dating_inside",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "门后的日子也有各自的变化。凳面上换了一块干净的布，她嫌我上次铺得太厚，坐着不稳，我便换薄一点的。这回她看了一眼，点点头，抬手指了指给我留的位置。",
      "next": "tc_c10_huangqiuqiu_dating_008"
    },
    "tc_c10_huangqiuqiu_dating_008": {
      "id": "tc_c10_huangqiuqiu_dating_008",
      "type": "line",
      "scene": "ts_c10_huangqiuqiu_dating_inside",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "我问她今天想去门边坐，还是待在这里。她说先在这里，刚才那片云看够了。我把自己的凳子摆好，问能不能握一会儿手，她把袖口往上拉了一点，将手放进我的掌心。",
      "next": "tc_c10_huangqiuqiu_dating_009"
    },
    "tc_c10_huangqiuqiu_dating_009": {
      "id": "tc_c10_huangqiuqiu_dating_009",
      "type": "line",
      "scene": "ts_c10_huangqiuqiu_dating_inside",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "“今天没新故事。”我说。",
      "next": "tc_c10_huangqiuqiu_dating_010"
    },
    "tc_c10_huangqiuqiu_dating_010": {
      "id": "tc_c10_huangqiuqiu_dating_010",
      "type": "line",
      "scene": "ts_c10_huangqiuqiu_dating_inside",
      "speaker": "huangqiuqiu",
      "character": "huangqiuqiu",
      "text": "“那你先说没意思的。”",
      "next": "tc_c10_huangqiuqiu_dating_011",
      "expression": "expression-smile",
      "avatarExpression": "expression-smile"
    },
    "tc_c10_huangqiuqiu_dating_011": {
      "id": "tc_c10_huangqiuqiu_dating_011",
      "type": "line",
      "scene": "ts_c10_huangqiuqiu_dating_inside",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "我告诉她今天差点又把衣服忘在盆里。她问洗了几遍，我说这回想起来得早，只洗了一遍。她伸出两根手指，比了一个很小的距离，表示这次可以少笑我一点。",
      "next": "tc_c10_huangqiuqiu_dating_012"
    },
    "tc_c10_huangqiuqiu_dating_012": {
      "id": "tc_c10_huangqiuqiu_dating_012",
      "type": "line",
      "scene": "ts_c10_huangqiuqiu_dating_inside",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "她笑起来。我也笑，觉得这两年最奇怪的事情，可能是某些很普通的话竟然真的能讲这么久。",
      "next": "tc_c10_huangqiuqiu_dating_013",
      "expression": "expression-smile"
    },
    "tc_c10_huangqiuqiu_dating_013": {
      "id": "tc_c10_huangqiuqiu_dating_013",
      "type": "line",
      "scene": "ts_c10_huangqiuqiu_dating_inside",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "聊累了，我们安静坐着。外头有人从远处的街上走过，没有推开这扇门。我前几天去参加朋友们的聚会，回来时把外套拿错了，到了楼下才发现口袋里多了半包纸巾。我讲给她听，她问，怎么能凭纸巾认出不是自己的。我说我的那包早就忘在洗衣机里。她看了我半天，终于笑出声。",
      "next": "tc_c10_huangqiuqiu_dating_014"
    },
    "tc_c10_huangqiuqiu_dating_014": {
      "id": "tc_c10_huangqiuqiu_dating_014",
      "type": "line",
      "scene": "ts_c10_huangqiuqiu_dating_inside",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "离开前，我问能不能抱一下。她说可以，提醒我袖口有水。我先擦干，等她朝我靠过来，才轻轻抱住她。她的手在我背上停了一会儿，等我退开，又很自然地托回腮边。",
      "next": "tc_c10_huangqiuqiu_dating_015",
      "expression": "action-thinking"
    },
    "tc_c10_huangqiuqiu_dating_015": {
      "id": "tc_c10_huangqiuqiu_dating_015",
      "type": "line",
      "scene": "ts_c10_huangqiuqiu_dating_inside",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "“下次呢？”她问。",
      "next": "tc_c10_huangqiuqiu_dating_016"
    },
    "tc_c10_huangqiuqiu_dating_016": {
      "id": "tc_c10_huangqiuqiu_dating_016",
      "type": "line",
      "scene": "ts_c10_huangqiuqiu_dating_inside",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "我说了一个确定的下午，又补充如果班有变化，会提前来说明，不让一句改天留在这里没了下文。",
      "next": "tc_c10_huangqiuqiu_dating_017"
    },
    "tc_c10_huangqiuqiu_dating_017": {
      "id": "tc_c10_huangqiuqiu_dating_017",
      "type": "line",
      "scene": "ts_c10_huangqiuqiu_dating_inside",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "她点头。“知道了。走的时候把伞拿上。”",
      "next": "tc_c10_huangqiuqiu_dating_018"
    },
    "tc_c10_huangqiuqiu_dating_018": {
      "id": "tc_c10_huangqiuqiu_dating_018",
      "type": "line",
      "scene": "ts_c10_huangqiuqiu_dating_outside",
      "speaker": "narrator",
      "character": null,
      "text": "我拿好伞，回头说再见。门里有清清楚楚的一声回答。我沿着来时的路往外走，风把雨带进屋檐下，我往里避了一步，没有觉得这一天还缺少什么能证明圆满的大事。",
      "next": "tc_c10_huangqiuqiu_end_dating"
    },
    "tc_c10_huangqiuqiu_friends_001": {
      "id": "tc_c10_huangqiuqiu_friends_001",
      "type": "line",
      "scene": "ts_c10_huangqiuqiu_friends",
      "speaker": "narrator",
      "character": null,
      "text": "我敲门的时候，手里的伞差点滑下去。黄球球听见我在外面忙乱，等我站稳才说进来。",
      "next": "tc_c10_huangqiuqiu_friends_002"
    },
    "tc_c10_huangqiuqiu_friends_002": {
      "id": "tc_c10_huangqiuqiu_friends_002",
      "type": "line",
      "scene": "ts_c10_huangqiuqiu_friends",
      "speaker": "huangqiuqiu",
      "character": null,
      "text": "“你每次来都带一点意外。”",
      "next": "tc_c10_huangqiuqiu_friends_003"
    },
    "tc_c10_huangqiuqiu_friends_003": {
      "id": "tc_c10_huangqiuqiu_friends_003",
      "type": "line",
      "scene": "ts_c10_huangqiuqiu_friends",
      "speaker": "wenwen",
      "character": null,
      "text": "“今天已经很轻了。”",
      "next": "tc_c10_huangqiuqiu_friends_004"
    },
    "tc_c10_huangqiuqiu_friends_004": {
      "id": "tc_c10_huangqiuqiu_friends_004",
      "type": "line",
      "scene": "ts_c10_huangqiuqiu_friends_inside",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "她坐在原来的干处，棕色齐刘海理得很整齐，浅米灰色外套的拉链拉到一半，圆脸玩偶棒靠在身边。她托着腮看我把伞立好。我拖过自己的凳子坐下，先问她今天想不想说话。",
      "next": "tc_c10_huangqiuqiu_friends_005",
      "expression": "action-thinking"
    },
    "tc_c10_huangqiuqiu_friends_005": {
      "id": "tc_c10_huangqiuqiu_friends_005",
      "type": "line",
      "scene": "ts_c10_huangqiuqiu_friends_inside",
      "speaker": "huangqiuqiu",
      "character": "huangqiuqiu",
      "text": "“想。你先说，你是不是又洗了两遍衣服。”",
      "next": "tc_c10_huangqiuqiu_friends_006"
    },
    "tc_c10_huangqiuqiu_friends_006": {
      "id": "tc_c10_huangqiuqiu_friends_006",
      "type": "line",
      "scene": "ts_c10_huangqiuqiu_friends_inside",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "我说已经没有那么严重，顶多忘收一次。她把眉毛皱得更深，怀疑这算不算进步。我承认算得有点勉强。",
      "next": "tc_c10_huangqiuqiu_friends_007"
    },
    "tc_c10_huangqiuqiu_friends_007": {
      "id": "tc_c10_huangqiuqiu_friends_007",
      "type": "line",
      "scene": "ts_c10_huangqiuqiu_friends_inside",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "这两年，我们各自把那天的回答放在了合适的地方。她没有因为我说朋友，就忽然不再开口，也没有被我一句温柔的话吊着等另一个答案。有时见面高兴，有时她想安静，我也有想早一点回去休息的时候，讲清楚就可以。",
      "next": "tc_c10_huangqiuqiu_friends_008"
    },
    "tc_c10_huangqiuqiu_friends_008": {
      "id": "tc_c10_huangqiuqiu_friends_008",
      "type": "line",
      "scene": "ts_c10_huangqiuqiu_friends_inside",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "我仍在网吧轮班，生活没有变得能预测每一件事。身边的朋友各自忙，有人结婚，有人把一个小计划试了又改。我说起自己参加聚会时闹的笑话，只说能由我讲的那部分。她听完，问我是不是每次都觉得自己表现挺镇定。",
      "next": "tc_c10_huangqiuqiu_friends_009"
    },
    "tc_c10_huangqiuqiu_friends_009": {
      "id": "tc_c10_huangqiuqiu_friends_009",
      "type": "line",
      "scene": "ts_c10_huangqiuqiu_friends_inside",
      "speaker": "wenwen",
      "character": "huangqiuqiu",
      "text": "“通常要过两天才发现不镇定。”",
      "next": "tc_c10_huangqiuqiu_friends_010"
    },
    "tc_c10_huangqiuqiu_friends_010": {
      "id": "tc_c10_huangqiuqiu_friends_010",
      "type": "line",
      "scene": "ts_c10_huangqiuqiu_friends_inside",
      "speaker": "huangqiuqiu",
      "character": "huangqiuqiu",
      "text": "“那今天先留着，过两天再告诉我。”",
      "next": "tc_c10_huangqiuqiu_friends_011",
      "expression": "expression-smile",
      "avatarExpression": "expression-smile"
    },
    "tc_c10_huangqiuqiu_friends_011": {
      "id": "tc_c10_huangqiuqiu_friends_011",
      "type": "line",
      "scene": "ts_c10_huangqiuqiu_friends_inside",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "我们都笑了。这时候她伸手示意我把凳子往旁边挪一点。我以为挡住了光，站起来才发现凳脚压着一角旧布，她刚才想说，一直被我的故事岔过去。我赶紧挪开，她俯身把布收好，说下次你也给别人留一句话的位置。",
      "next": "tc_c10_huangqiuqiu_friends_012"
    },
    "tc_c10_huangqiuqiu_friends_012": {
      "id": "tc_c10_huangqiuqiu_friends_012",
      "type": "line",
      "scene": "ts_c10_huangqiuqiu_friends_doorway",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "那天下午她想看看门外的天，自己起身，把玩偶棒留在凳边，往门口走了两步。我问要不要把凳子搬过去，她说站一会儿就好。我便走到旁边，跟她一起看。她看了一会儿，说云没有我上次形容得那么像猫。",
      "next": "tc_c10_huangqiuqiu_friends_013"
    },
    "tc_c10_huangqiuqiu_friends_013": {
      "id": "tc_c10_huangqiuqiu_friends_013",
      "type": "line",
      "scene": "ts_c10_huangqiuqiu_friends_doorway",
      "speaker": "wenwen",
      "character": "huangqiuqiu",
      "text": "“云变了。”",
      "next": "tc_c10_huangqiuqiu_friends_014"
    },
    "tc_c10_huangqiuqiu_friends_014": {
      "id": "tc_c10_huangqiuqiu_friends_014",
      "type": "line",
      "scene": "ts_c10_huangqiuqiu_friends_doorway",
      "speaker": "huangqiuqiu",
      "character": "huangqiuqiu",
      "text": "“那你下次形容得保守一点。”",
      "next": "tc_c10_huangqiuqiu_friends_015",
      "expression": "expression-smile",
      "avatarExpression": "expression-smile"
    },
    "tc_c10_huangqiuqiu_friends_015": {
      "id": "tc_c10_huangqiuqiu_friends_015",
      "type": "line",
      "scene": "ts_c10_huangqiuqiu_friends_inside_again",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "我们笑着看那一小片天，没有人急着把它解释成什么象征。等她说看够了，我们一起走回干处，各自坐下。",
      "next": "tc_c10_huangqiuqiu_friends_016"
    },
    "tc_c10_huangqiuqiu_friends_016": {
      "id": "tc_c10_huangqiuqiu_friends_016",
      "type": "line",
      "scene": "ts_c10_huangqiuqiu_friends_inside_again",
      "speaker": "narrator",
      "character": "huangqiuqiu",
      "text": "到该走的时候，我没有再多坐半小时证明这段友谊牢靠。我们约好下一次，我拿伞，她抬手，互相说了再见。",
      "next": "tc_c10_huangqiuqiu_friends_017",
      "expression": "action-wave"
    },
    "tc_c10_huangqiuqiu_friends_017": {
      "id": "tc_c10_huangqiuqiu_friends_017",
      "type": "line",
      "scene": "ts_c10_huangqiuqiu_friends_outside",
      "speaker": "narrator",
      "character": null,
      "text": "门慢慢合上。我站到外面的空气里，听见远处普通的车声，心里知道，下次敲门，仍然应该等她自己的回答。",
      "next": "tc_c10_huangqiuqiu_end_friends"
    },
    "tc_c10_huangqiuqiu_entry": {
      "id": "tc_c10_huangqiuqiu_entry",
      "type": "gate",
      "scene": "ts_c10_huangqiuqiu_dating",
      "cases": [
        {
          "flag": "huangqiuqiuRelationship",
          "value": "dating",
          "next": "tc_c10_huangqiuqiu_dating_001"
        },
        {
          "flag": "huangqiuqiuRelationship",
          "value": "friends",
          "next": "tc_c10_huangqiuqiu_friends_001"
        }
      ],
      "default": null,
      "exhaustive": true
    },
    "tc_c10_huangqiuqiu_end_dating": {
      "id": "tc_c10_huangqiuqiu_end_dating",
      "type": "end",
      "scene": "ts_c10_huangqiuqiu_dating_inside",
      "character": "huangqiuqiu",
      "title": "还是她，还是这一声回答",
      "text": "",
      "endingId": "tc_c10_huangqiuqiu_end_dating"
    },
    "tc_c10_huangqiuqiu_end_friends": {
      "id": "tc_c10_huangqiuqiu_end_friends",
      "type": "end",
      "scene": "ts_c10_huangqiuqiu_friends_inside",
      "character": "huangqiuqiu",
      "title": "留给朋友的位置",
      "text": "",
      "endingId": "tc_c10_huangqiuqiu_end_friends"
    }
  },
  "presentation": {
    "fadeOutNodes": [
      "tc_c08_huangqiuqiu_her_decision_020"
    ]
  },
  "covers": {
    "desktop": "assets/ten-chapter/ui/cover-desktop.webp",
    "mobile": "assets/ten-chapter/ui/cover-mobile.webp"
  }
};
