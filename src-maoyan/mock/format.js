﻿import Mock from "mockjs"
let city={
    "Data": [
        {
            "SaleCityId": 512,
            "Name": "徐州",
            "EName": "Xuzhou",
            "PrefixEName": "X"
        },
        {
            "SaleCityId": 1024,
            "Name": "马鞍山",
            "EName": "Maanshan",
            "PrefixEName": "M"
        },
        {
            "SaleCityId": 1,
            "Name": "北京",
            "EName": "Beijing",
            "PrefixEName": "B"
        },
        {
            "SaleCityId": 513,
            "Name": "忻州",
            "EName": "Xinzhou",
            "PrefixEName": "X"
        },
        {
            "SaleCityId": 2,
            "Name": "上海",
            "EName": "Shanghai",
            "PrefixEName": "S"
        },
        {
            "SaleCityId": 514,
            "Name": "宜宾",
            "EName": "Yibin",
            "PrefixEName": "Y"
        },
        {
            "SaleCityId": 3,
            "Name": "天津",
            "EName": "Tianjin",
            "PrefixEName": "T"
        },
        {
            "SaleCityId": 515,
            "Name": "宜昌",
            "EName": "Yichang",
            "PrefixEName": "Y"
        },
        {
            "SaleCityId": 4,
            "Name": "重庆",
            "EName": "Chongqing",
            "PrefixEName": "C"
        },
        {
            "SaleCityId": 5,
            "Name": "哈尔滨",
            "EName": "Harbin",
            "PrefixEName": "H"
        },
        {
            "SaleCityId": 6,
            "Name": "大连",
            "EName": "Dalian",
            "PrefixEName": "D"
        },
        {
            "SaleCityId": 518,
            "Name": "宜春",
            "EName": "Yichun",
            "PrefixEName": "Y"
        },
        {
            "SaleCityId": 1030,
            "Name": "渭南",
            "EName": "Weinan",
            "PrefixEName": "W"
        },
        {
            "SaleCityId": 7,
            "Name": "青岛",
            "EName": "Qingdao",
            "PrefixEName": "Q"
        },
        {
            "SaleCityId": 521,
            "Name": "宿州",
            "EName": "Suzhou",
            "PrefixEName": "S"
        },
        {
            "SaleCityId": 10,
            "Name": "西安",
            "EName": "Xian",
            "PrefixEName": "X"
        },
        {
            "SaleCityId": 523,
            "Name": "延吉",
            "EName": "Yanji",
            "PrefixEName": "Y"
        },
        {
            "SaleCityId": 12,
            "Name": "南京",
            "EName": "Nanjing",
            "PrefixEName": "N"
        },
        {
            "SaleCityId": 13,
            "Name": "无锡",
            "EName": "Wuxi",
            "PrefixEName": "W"
        },
        {
            "SaleCityId": 14,
            "Name": "苏州",
            "EName": "Suzhou",
            "PrefixEName": "S"
        },
        {
            "SaleCityId": 15,
            "Name": "扬州",
            "EName": "Yangzhou",
            "PrefixEName": "Y"
        },
        {
            "SaleCityId": 527,
            "Name": "榆林",
            "EName": "Yulin",
            "PrefixEName": "Y"
        },
        {
            "SaleCityId": 16,
            "Name": "镇江",
            "EName": "Zhenjiang",
            "PrefixEName": "Z"
        },
        {
            "SaleCityId": 17,
            "Name": "杭州",
            "EName": "Hangzhou",
            "PrefixEName": "H"
        },
        {
            "SaleCityId": 19,
            "Name": "舟山",
            "EName": "Zhoushan",
            "PrefixEName": "Z"
        },
        {
            "SaleCityId": 533,
            "Name": "烟台",
            "EName": "Yantai",
            "PrefixEName": "Y"
        },
        {
            "SaleCityId": 22,
            "Name": "绍兴",
            "EName": "Shaoxing",
            "PrefixEName": "S"
        },
        {
            "SaleCityId": 534,
            "Name": "鹰潭",
            "EName": "Yingtan",
            "PrefixEName": "Y"
        },
        {
            "SaleCityId": 23,
            "Name": "黄山",
            "EName": "Huangshan",
            "PrefixEName": "H"
        },
        {
            "SaleCityId": 24,
            "Name": "九江",
            "EName": "Jiujiang",
            "PrefixEName": "J"
        },
        {
            "SaleCityId": 536,
            "Name": "义乌",
            "EName": "Yiwu",
            "PrefixEName": "Y"
        },
        {
            "SaleCityId": 1048,
            "Name": "铁岭",
            "EName": "Tieling",
            "PrefixEName": "T"
        },
        {
            "SaleCityId": 1560,
            "Name": "资阳",
            "EName": "Ziyang",
            "PrefixEName": "Z"
        },
        {
            "SaleCityId": 25,
            "Name": "厦门",
            "EName": "Xiamen",
            "PrefixEName": "X"
        },
        {
            "SaleCityId": 1050,
            "Name": "葫芦岛",
            "EName": "Huludao",
            "PrefixEName": "H"
        },
        {
            "SaleCityId": 27,
            "Name": "张家界",
            "EName": "Zhangjiajie",
            "PrefixEName": "Z"
        },
        {
            "SaleCityId": 539,
            "Name": "岳阳",
            "EName": "Yueyang",
            "PrefixEName": "Y"
        },
        {
            "SaleCityId": 28,
            "Name": "成都",
            "EName": "Chengdu",
            "PrefixEName": "C"
        },
        {
            "SaleCityId": 30,
            "Name": "深圳",
            "EName": "Shenzhen",
            "PrefixEName": "S"
        },
        {
            "SaleCityId": 542,
            "Name": "淄博",
            "EName": "Zibo",
            "PrefixEName": "Z"
        },
        {
            "SaleCityId": 31,
            "Name": "珠海",
            "EName": "Zhuhai",
            "PrefixEName": "Z"
        },
        {
            "SaleCityId": 32,
            "Name": "广州",
            "EName": "Guangzhou",
            "PrefixEName": "G"
        },
        {
            "SaleCityId": 544,
            "Name": "自贡",
            "EName": "Zigong",
            "PrefixEName": "Z"
        },
        {
            "SaleCityId": 33,
            "Name": "桂林",
            "EName": "Guilin",
            "PrefixEName": "G"
        },
        {
            "SaleCityId": 34,
            "Name": "昆明",
            "EName": "Kunming",
            "PrefixEName": "K"
        },
        {
            "SaleCityId": 35,
            "Name": "西双版纳",
            "EName": "Xishuangbanna",
            "PrefixEName": "X"
        },
        {
            "SaleCityId": 547,
            "Name": "湛江",
            "EName": "Zhanjiang",
            "PrefixEName": "Z"
        },
        {
            "SaleCityId": 548,
            "Name": "诸暨",
            "EName": "Zhuji",
            "PrefixEName": "Z"
        },
        {
            "SaleCityId": 37,
            "Name": "丽江",
            "EName": "Lijiang",
            "PrefixEName": "L"
        },
        {
            "SaleCityId": 38,
            "Name": "贵阳",
            "EName": "Guiyang",
            "PrefixEName": "G"
        },
        {
            "SaleCityId": 550,
            "Name": "张家口",
            "EName": "Zhangjiakou",
            "PrefixEName": "Z"
        },
        {
            "SaleCityId": 39,
            "Name": "乌鲁木齐",
            "EName": "Urumqi",
            "PrefixEName": "U"
        },
        {
            "SaleCityId": 551,
            "Name": "驻马店",
            "EName": "Zhumadian",
            "PrefixEName": "Z"
        },
        {
            "SaleCityId": 552,
            "Name": "肇庆",
            "EName": "Zhaoqing",
            "PrefixEName": "Z"
        },
        {
            "SaleCityId": 41,
            "Name": "拉萨",
            "EName": "Lhasa",
            "PrefixEName": "L"
        },
        {
            "SaleCityId": 553,
            "Name": "中山",
            "EName": "Zhongshan",
            "PrefixEName": "Z"
        },
        {
            "SaleCityId": 42,
            "Name": "海口",
            "EName": "Haikou",
            "PrefixEName": "H"
        },
        {
            "SaleCityId": 43,
            "Name": "三亚",
            "EName": "Sanya",
            "PrefixEName": "S"
        },
        {
            "SaleCityId": 558,
            "Name": "遵义",
            "EName": "Zunyi",
            "PrefixEName": "Z"
        },
        {
            "SaleCityId": 559,
            "Name": "郑州",
            "EName": "Zhengzhou",
            "PrefixEName": "Z"
        },
        {
            "SaleCityId": 1071,
            "Name": "聊城",
            "EName": "Liaocheng",
            "PrefixEName": "L"
        },
        {
            "SaleCityId": 560,
            "Name": "漳州",
            "EName": "Zhangzhou",
            "PrefixEName": "Z"
        },
        {
            "SaleCityId": 562,
            "Name": "承德",
            "EName": "Chengde",
            "PrefixEName": "C"
        },
        {
            "SaleCityId": 1074,
            "Name": "菏泽",
            "EName": "Heze",
            "PrefixEName": "H"
        },
        {
            "SaleCityId": 1078,
            "Name": "亳州",
            "EName": "Bozhou",
            "PrefixEName": "B"
        },
        {
            "SaleCityId": 569,
            "Name": "临沂",
            "EName": "Linyi",
            "PrefixEName": "L"
        },
        {
            "SaleCityId": 571,
            "Name": "嘉兴",
            "EName": "Jiaxing",
            "PrefixEName": "J"
        },
        {
            "SaleCityId": 1597,
            "Name": "内江",
            "EName": "Neijiang",
            "PrefixEName": "N"
        },
        {
            "SaleCityId": 1088,
            "Name": "漯河",
            "EName": "Luohe",
            "PrefixEName": "L"
        },
        {
            "SaleCityId": 578,
            "Name": "台州",
            "EName": "Taizhou",
            "PrefixEName": "T"
        },
        {
            "SaleCityId": 579,
            "Name": "泰州",
            "EName": "Taizhou",
            "PrefixEName": "T"
        },
        {
            "SaleCityId": 1092,
            "Name": "晋城",
            "EName": "Jincheng",
            "PrefixEName": "J"
        },
        {
            "SaleCityId": 1093,
            "Name": "焦作",
            "EName": "Jiaozuo",
            "PrefixEName": "J"
        },
        {
            "SaleCityId": 582,
            "Name": "海盐",
            "EName": "Haiyan",
            "PrefixEName": "H"
        },
        {
            "SaleCityId": 1094,
            "Name": "许昌",
            "EName": "Xuchang",
            "PrefixEName": "X"
        },
        {
            "SaleCityId": 1097,
            "Name": "攀枝花",
            "EName": "Panzhihua",
            "PrefixEName": "P"
        },
        {
            "SaleCityId": 1100,
            "Name": "广安",
            "EName": "Guangan",
            "PrefixEName": "G"
        },
        {
            "SaleCityId": 589,
            "Name": "巢湖",
            "EName": "Chaohu",
            "PrefixEName": "C"
        },
        {
            "SaleCityId": 82,
            "Name": "南通",
            "EName": "Nantong",
            "PrefixEName": "N"
        },
        {
            "SaleCityId": 1106,
            "Name": "日照",
            "EName": "Rizhao",
            "PrefixEName": "R"
        },
        {
            "SaleCityId": 83,
            "Name": "昆山",
            "EName": "Kunshan",
            "PrefixEName": "K"
        },
        {
            "SaleCityId": 84,
            "Name": "海宁",
            "EName": "Haining",
            "PrefixEName": "H"
        },
        {
            "SaleCityId": 596,
            "Name": "嘉善",
            "EName": "Jiashan",
            "PrefixEName": "J"
        },
        {
            "SaleCityId": 86,
            "Name": "湖州",
            "EName": "Huzhou",
            "PrefixEName": "H"
        },
        {
            "SaleCityId": 598,
            "Name": "湘潭",
            "EName": "Xiangtan",
            "PrefixEName": "X"
        },
        {
            "SaleCityId": 1111,
            "Name": "邵阳",
            "EName": "Shaoyang",
            "PrefixEName": "S"
        },
        {
            "SaleCityId": 601,
            "Name": "株洲",
            "EName": "Zhuzhou",
            "PrefixEName": "Z"
        },
        {
            "SaleCityId": 1113,
            "Name": "玉林",
            "EName": "Yulin",
            "PrefixEName": "Y"
        },
        {
            "SaleCityId": 91,
            "Name": "九寨沟",
            "EName": "Jiuzhaigou",
            "PrefixEName": "J"
        },
        {
            "SaleCityId": 603,
            "Name": "新余",
            "EName": "Xinyu",
            "PrefixEName": "X"
        },
        {
            "SaleCityId": 605,
            "Name": "六盘水",
            "EName": "Liupanshui",
            "PrefixEName": "L"
        },
        {
            "SaleCityId": 606,
            "Name": "南平",
            "EName": "Nanping",
            "PrefixEName": "N"
        },
        {
            "SaleCityId": 96,
            "Name": "常熟",
            "EName": "Changshu",
            "PrefixEName": "C"
        },
        {
            "SaleCityId": 1121,
            "Name": "荆门",
            "EName": "Jingmen",
            "PrefixEName": "J"
        },
        {
            "SaleCityId": 99,
            "Name": "银川",
            "EName": "Yinchuan",
            "PrefixEName": "Y"
        },
        {
            "SaleCityId": 100,
            "Name": "兰州",
            "EName": "Lanzhou",
            "PrefixEName": "L"
        },
        {
            "SaleCityId": 612,
            "Name": "郴州",
            "EName": "Chenzhou",
            "PrefixEName": "C"
        },
        {
            "SaleCityId": 1125,
            "Name": "益阳",
            "EName": "Yiyang",
            "PrefixEName": "Y"
        },
        {
            "SaleCityId": 614,
            "Name": "枣庄",
            "EName": "Zaozhuang",
            "PrefixEName": "Z"
        },
        {
            "SaleCityId": 103,
            "Name": "呼和浩特",
            "EName": "Hohhot",
            "PrefixEName": "H"
        },
        {
            "SaleCityId": 1128,
            "Name": "绥化",
            "EName": "Suihua",
            "PrefixEName": "S"
        },
        {
            "SaleCityId": 105,
            "Name": "太原",
            "EName": "Taiyuan",
            "PrefixEName": "T"
        },
        {
            "SaleCityId": 109,
            "Name": "喀什市",
            "EName": "Kashgar",
            "PrefixEName": "K"
        },
        {
            "SaleCityId": 621,
            "Name": "张家港",
            "EName": "Zhangjiagang",
            "PrefixEName": "Z"
        },
        {
            "SaleCityId": 110,
            "Name": "延安",
            "EName": "Yanan",
            "PrefixEName": "Y"
        },
        {
            "SaleCityId": 111,
            "Name": "咸阳",
            "EName": "Xianyang",
            "PrefixEName": "X"
        },
        {
            "SaleCityId": 112,
            "Name": "宝鸡",
            "EName": "Baoji",
            "PrefixEName": "B"
        },
        {
            "SaleCityId": 4216,
            "Name": "石嘴山",
            "EName": "shizuishan",
            "PrefixEName": "S"
        },
        {
            "SaleCityId": 124,
            "Name": "西宁",
            "EName": "Xining",
            "PrefixEName": "X"
        },
        {
            "SaleCityId": 1148,
            "Name": "眉山",
            "EName": "Meishan",
            "PrefixEName": "M"
        },
        {
            "SaleCityId": 129,
            "Name": "汉中",
            "EName": "Hanzhong",
            "PrefixEName": "H"
        },
        {
            "SaleCityId": 1155,
            "Name": "本溪",
            "EName": "Benxi",
            "PrefixEName": "B"
        },
        {
            "SaleCityId": 136,
            "Name": "大同",
            "EName": "Datong",
            "PrefixEName": "D"
        },
        {
            "SaleCityId": 137,
            "Name": "长治",
            "EName": "Changzhi",
            "PrefixEName": "C"
        },
        {
            "SaleCityId": 139,
            "Name": "临汾",
            "EName": "Linfen",
            "PrefixEName": "L"
        },
        {
            "SaleCityId": 140,
            "Name": "运城",
            "EName": "Yuncheng",
            "PrefixEName": "Y"
        },
        {
            "SaleCityId": 141,
            "Name": "包头",
            "EName": "Baotou",
            "PrefixEName": "B"
        },
        {
            "SaleCityId": 1677,
            "Name": "防城港",
            "EName": "Fangchenggang",
            "PrefixEName": "F"
        },
        {
            "SaleCityId": 142,
            "Name": "海拉尔",
            "EName": "Hailaer",
            "PrefixEName": "H"
        },
        {
            "SaleCityId": 654,
            "Name": "太仓",
            "EName": "Taicang",
            "PrefixEName": "T"
        },
        {
            "SaleCityId": 144,
            "Name": "济南",
            "EName": "Jinan",
            "PrefixEName": "J"
        },
        {
            "SaleCityId": 147,
            "Name": "秦皇岛",
            "EName": "Qinhuangdao",
            "PrefixEName": "Q"
        },
        {
            "SaleCityId": 149,
            "Name": "齐齐哈尔",
            "EName": "Qiqihar",
            "PrefixEName": "Q"
        },
        {
            "SaleCityId": 3221,
            "Name": "周口",
            "EName": "zhoukou",
            "PrefixEName": "Z"
        },
        {
            "SaleCityId": 150,
            "Name": "牡丹江",
            "EName": "Mudanjiang",
            "PrefixEName": "M"
        },
        {
            "SaleCityId": 662,
            "Name": "酒泉",
            "EName": "Jiuquan",
            "PrefixEName": "J"
        },
        {
            "SaleCityId": 3222,
            "Name": "平顶山",
            "EName": "pingdingshan",
            "PrefixEName": "P"
        },
        {
            "SaleCityId": 663,
            "Name": "张掖",
            "EName": "Zhangye",
            "PrefixEName": "Z"
        },
        {
            "SaleCityId": 667,
            "Name": "莆田",
            "EName": "Putian",
            "PrefixEName": "P"
        },
        {
            "SaleCityId": 158,
            "Name": "长春",
            "EName": "Changchun",
            "PrefixEName": "C"
        },
        {
            "SaleCityId": 159,
            "Name": "吉林",
            "EName": "Jilin",
            "PrefixEName": "J"
        },
        {
            "SaleCityId": 4255,
            "Name": "呼伦贝尔",
            "EName": "Hulunbuir",
            "PrefixEName": "H"
        },
        {
            "SaleCityId": 166,
            "Name": "克拉玛依",
            "EName": "Karamay",
            "PrefixEName": "K"
        },
        {
            "SaleCityId": 1705,
            "Name": "六安",
            "EName": "Luan",
            "PrefixEName": "L"
        },
        {
            "SaleCityId": 1200,
            "Name": "盐城",
            "EName": "Yancheng",
            "PrefixEName": "Y"
        },
        {
            "SaleCityId": 177,
            "Name": "安庆",
            "EName": "Anqing",
            "PrefixEName": "A"
        },
        {
            "SaleCityId": 178,
            "Name": "鞍山",
            "EName": "Anshan",
            "PrefixEName": "A"
        },
        {
            "SaleCityId": 692,
            "Name": "阳江",
            "EName": "Yangjiang",
            "PrefixEName": "Y"
        },
        {
            "SaleCityId": 181,
            "Name": "安阳",
            "EName": "Anyang",
            "PrefixEName": "A"
        },
        {
            "SaleCityId": 693,
            "Name": "河源",
            "EName": "Heyuan",
            "PrefixEName": "H"
        },
        {
            "SaleCityId": 182,
            "Name": "蚌埠",
            "EName": "Bengbu",
            "PrefixEName": "B"
        },
        {
            "SaleCityId": 1206,
            "Name": "平湖",
            "EName": "Pinghu",
            "PrefixEName": "P"
        },
        {
            "SaleCityId": 185,
            "Name": "保定",
            "EName": "Baoding",
            "PrefixEName": "B"
        },
        {
            "SaleCityId": 186,
            "Name": "玉溪",
            "EName": "Yuxi",
            "PrefixEName": "Y"
        },
        {
            "SaleCityId": 189,
            "Name": "北海",
            "EName": "Beihai",
            "PrefixEName": "B"
        },
        {
            "SaleCityId": 201,
            "Name": "常德",
            "EName": "Changde",
            "PrefixEName": "C"
        },
        {
            "SaleCityId": 202,
            "Name": "赤峰",
            "EName": "Chifeng",
            "PrefixEName": "C"
        },
        {
            "SaleCityId": 206,
            "Name": "长沙",
            "EName": "Changsha",
            "PrefixEName": "C"
        },
        {
            "SaleCityId": 1232,
            "Name": "濮阳",
            "EName": "Puyang",
            "PrefixEName": "P"
        },
        {
            "SaleCityId": 1233,
            "Name": "达州",
            "EName": "Dazhou",
            "PrefixEName": "D"
        },
        {
            "SaleCityId": 211,
            "Name": "朝阳",
            "EName": "chaoyang",
            "PrefixEName": "C"
        },
        {
            "SaleCityId": 213,
            "Name": "常州",
            "EName": "Changzhou",
            "PrefixEName": "C"
        },
        {
            "SaleCityId": 214,
            "Name": "滁州",
            "EName": "Chuzhou",
            "PrefixEName": "C"
        },
        {
            "SaleCityId": 215,
            "Name": "潮州",
            "EName": "Chaozhou",
            "PrefixEName": "C"
        },
        {
            "SaleCityId": 216,
            "Name": "沧州",
            "EName": "Cangzhou",
            "PrefixEName": "C"
        },
        {
            "SaleCityId": 218,
            "Name": "池州",
            "EName": "Chizhou",
            "PrefixEName": "C"
        },
        {
            "SaleCityId": 221,
            "Name": "丹东",
            "EName": "Dandong",
            "PrefixEName": "D"
        },
        {
            "SaleCityId": 223,
            "Name": "东莞",
            "EName": "Dongguan",
            "PrefixEName": "D"
        },
        {
            "SaleCityId": 231,
            "Name": "大庆",
            "EName": "Daqing",
            "PrefixEName": "D"
        },
        {
            "SaleCityId": 236,
            "Name": "东营",
            "EName": "Dongying",
            "PrefixEName": "D"
        },
        {
            "SaleCityId": 237,
            "Name": "德阳",
            "EName": "Deyang",
            "PrefixEName": "D"
        },
        {
            "SaleCityId": 245,
            "Name": "恩施",
            "EName": "Enshi",
            "PrefixEName": "E"
        },
        {
            "SaleCityId": 251,
            "Name": "佛山",
            "EName": "Foshan",
            "PrefixEName": "F"
        },
        {
            "SaleCityId": 252,
            "Name": "抚顺",
            "EName": "Fushun",
            "PrefixEName": "F"
        },
        {
            "SaleCityId": 254,
            "Name": "阜新",
            "EName": "Fuxin",
            "PrefixEName": "F"
        },
        {
            "SaleCityId": 257,
            "Name": "阜阳",
            "EName": "Fuyang",
            "PrefixEName": "F"
        },
        {
            "SaleCityId": 258,
            "Name": "福州",
            "EName": "Fuzhou",
            "PrefixEName": "F"
        },
        {
            "SaleCityId": 267,
            "Name": "广元",
            "EName": "Guangyuan",
            "PrefixEName": "G"
        },
        {
            "SaleCityId": 268,
            "Name": "赣州",
            "EName": "Ganzhou",
            "PrefixEName": "G"
        },
        {
            "SaleCityId": 275,
            "Name": "邯郸",
            "EName": "Handan",
            "PrefixEName": "H"
        },
        {
            "SaleCityId": 1300,
            "Name": "营口",
            "EName": "Yingkou",
            "PrefixEName": "Y"
        },
        {
            "SaleCityId": 21268,
            "Name": "大理",
            "EName": "dali",
            "PrefixEName": "D"
        },
        {
            "SaleCityId": 278,
            "Name": "合肥",
            "EName": "Hefei",
            "PrefixEName": "H"
        },
        {
            "SaleCityId": 1303,
            "Name": "松原",
            "EName": "Songyuan",
            "PrefixEName": "S"
        },
        {
            "SaleCityId": 282,
            "Name": "怀化",
            "EName": "Huaihua",
            "PrefixEName": "H"
        },
        {
            "SaleCityId": 1820,
            "Name": "滨州",
            "EName": "binzhou",
            "PrefixEName": "B"
        },
        {
            "SaleCityId": 287,
            "Name": "淮南",
            "EName": "Huainan",
            "PrefixEName": "H"
        },
        {
            "SaleCityId": 290,
            "Name": "衡水",
            "EName": "Hengshui",
            "PrefixEName": "H"
        },
        {
            "SaleCityId": 292,
            "Name": "黄石",
            "EName": "Huangshi",
            "PrefixEName": "H"
        },
        {
            "SaleCityId": 1317,
            "Name": "朔州",
            "EName": "Shuozhou",
            "PrefixEName": "S"
        },
        {
            "SaleCityId": 297,
            "Name": "衡阳",
            "EName": "Hengyang",
            "PrefixEName": "H"
        },
        {
            "SaleCityId": 299,
            "Name": "惠州",
            "EName": "Huizhou",
            "PrefixEName": "H"
        },
        {
            "SaleCityId": 3884,
            "Name": "抚州",
            "EName": "Fuzhou",
            "PrefixEName": "F"
        },
        {
            "SaleCityId": 3885,
            "Name": "黄冈",
            "EName": "Huanggang",
            "PrefixEName": "H"
        },
        {
            "SaleCityId": 1840,
            "Name": "萍乡",
            "EName": "Pingxiang",
            "PrefixEName": "P"
        },
        {
            "SaleCityId": 305,
            "Name": "景德镇",
            "EName": "Jingdezhen",
            "PrefixEName": "J"
        },
        {
            "SaleCityId": 308,
            "Name": "金华",
            "EName": "Jinhua",
            "PrefixEName": "J"
        },
        {
            "SaleCityId": 316,
            "Name": "江门",
            "EName": "Jiangmen",
            "PrefixEName": "J"
        },
        {
            "SaleCityId": 317,
            "Name": "佳木斯",
            "EName": "Jiamusi",
            "PrefixEName": "J"
        },
        {
            "SaleCityId": 318,
            "Name": "济宁",
            "EName": "Jining",
            "PrefixEName": "J"
        },
        {
            "SaleCityId": 325,
            "Name": "江阴",
            "EName": "Jiangyin",
            "PrefixEName": "J"
        },
        {
            "SaleCityId": 326,
            "Name": "嘉峪关",
            "EName": "Jiayuguan",
            "PrefixEName": "J"
        },
        {
            "SaleCityId": 327,
            "Name": "锦州",
            "EName": "Jinzhou",
            "PrefixEName": "J"
        },
        {
            "SaleCityId": 328,
            "Name": "荆州",
            "EName": "Jingzhou",
            "PrefixEName": "J"
        },
        {
            "SaleCityId": 331,
            "Name": "开封",
            "EName": "Kaifeng",
            "PrefixEName": "K"
        },
        {
            "SaleCityId": 3918,
            "Name": "乌镇",
            "EName": "wuzhen",
            "PrefixEName": "W"
        },
        {
            "SaleCityId": 340,
            "Name": "廊坊",
            "EName": "Langfang",
            "PrefixEName": "L"
        },
        {
            "SaleCityId": 345,
            "Name": "乐山",
            "EName": "Leshan",
            "PrefixEName": "L"
        },
        {
            "SaleCityId": 346,
            "Name": "丽水",
            "EName": "Lishui",
            "PrefixEName": "L"
        },
        {
            "SaleCityId": 1370,
            "Name": "德州",
            "EName": "Dezhou",
            "PrefixEName": "D"
        },
        {
            "SaleCityId": 1882,
            "Name": "仙桃",
            "EName": "Xiantao",
            "PrefixEName": "X"
        },
        {
            "SaleCityId": 1371,
            "Name": "遂宁",
            "EName": "Suining",
            "PrefixEName": "S"
        },
        {
            "SaleCityId": 348,
            "Name": "龙岩",
            "EName": "Longyan",
            "PrefixEName": "L"
        },
        {
            "SaleCityId": 350,
            "Name": "洛阳",
            "EName": "Luoyang",
            "PrefixEName": "L"
        },
        {
            "SaleCityId": 351,
            "Name": "辽阳",
            "EName": "Liaoyang",
            "PrefixEName": "L"
        },
        {
            "SaleCityId": 352,
            "Name": "辽源",
            "EName": "Liaoyuan",
            "PrefixEName": "L"
        },
        {
            "SaleCityId": 353,
            "Name": "连云港",
            "EName": "Lianyungang",
            "PrefixEName": "L"
        },
        {
            "SaleCityId": 354,
            "Name": "柳州",
            "EName": "Liuzhou",
            "PrefixEName": "L"
        },
        {
            "SaleCityId": 355,
            "Name": "泸州",
            "EName": "Luzhou",
            "PrefixEName": "L"
        },
        {
            "SaleCityId": 1899,
            "Name": "钦州",
            "EName": "Qinzhou",
            "PrefixEName": "Q"
        },
        {
            "SaleCityId": 370,
            "Name": "绵阳",
            "EName": "Mianyang",
            "PrefixEName": "M"
        },
        {
            "SaleCityId": 375,
            "Name": "宁波",
            "EName": "Ningbo",
            "PrefixEName": "N"
        },
        {
            "SaleCityId": 376,
            "Name": "南昌",
            "EName": "Nanchang",
            "PrefixEName": "N"
        },
        {
            "SaleCityId": 377,
            "Name": "南充",
            "EName": "Nanchong",
            "PrefixEName": "N"
        },
        {
            "SaleCityId": 378,
            "Name": "宁德",
            "EName": "Ningde",
            "PrefixEName": "N"
        },
        {
            "SaleCityId": 380,
            "Name": "南宁",
            "EName": "Nanning",
            "PrefixEName": "N"
        },
        {
            "SaleCityId": 385,
            "Name": "南阳",
            "EName": "Nanyang",
            "PrefixEName": "N"
        },
        {
            "SaleCityId": 387,
            "Name": "盘锦",
            "EName": "Panjin",
            "PrefixEName": "P"
        },
        {
            "SaleCityId": 3976,
            "Name": "鄂尔多斯",
            "EName": "Ordos",
            "PrefixEName": "O"
        },
        {
            "SaleCityId": 907,
            "Name": "阳泉",
            "EName": "Yangquan",
            "PrefixEName": "Y"
        },
        {
            "SaleCityId": 1422,
            "Name": "清远",
            "EName": "Qingyuan",
            "PrefixEName": "Q"
        },
        {
            "SaleCityId": 406,
            "Name": "泉州",
            "EName": "Quanzhou",
            "PrefixEName": "Q"
        },
        {
            "SaleCityId": 918,
            "Name": "娄底",
            "EName": "Loudi",
            "PrefixEName": "L"
        },
        {
            "SaleCityId": 407,
            "Name": "衢州",
            "EName": "Quzhou",
            "PrefixEName": "Q"
        },
        {
            "SaleCityId": 411,
            "Name": "上饶",
            "EName": "Shangrao",
            "PrefixEName": "S"
        },
        {
            "SaleCityId": 1436,
            "Name": "汕尾",
            "EName": "Shanwei",
            "PrefixEName": "S"
        },
        {
            "SaleCityId": 933,
            "Name": "吉安",
            "EName": "Jian",
            "PrefixEName": "J"
        },
        {
            "SaleCityId": 422,
            "Name": "韶关",
            "EName": "Shaoguan",
            "PrefixEName": "S"
        },
        {
            "SaleCityId": 937,
            "Name": "咸宁",
            "EName": "Xianning",
            "PrefixEName": "X"
        },
        {
            "SaleCityId": 426,
            "Name": "石河子",
            "EName": "Shihezi",
            "PrefixEName": "S"
        },
        {
            "SaleCityId": 428,
            "Name": "石家庄",
            "EName": "Shijiazhuang",
            "PrefixEName": "S"
        },
        {
            "SaleCityId": 1452,
            "Name": "莱芜",
            "EName": "Laiwu",
            "PrefixEName": "L"
        },
        {
            "SaleCityId": 1453,
            "Name": "晋中",
            "EName": "Jinzhong",
            "PrefixEName": "J"
        },
        {
            "SaleCityId": 1454,
            "Name": "济源",
            "EName": "Jiyuan",
            "PrefixEName": "J"
        },
        {
            "SaleCityId": 947,
            "Name": "邢台",
            "EName": "Xingtai",
            "PrefixEName": "X"
        },
        {
            "SaleCityId": 437,
            "Name": "三明",
            "EName": "Sanming",
            "PrefixEName": "S"
        },
        {
            "SaleCityId": 951,
            "Name": "鹤壁",
            "EName": "Hebi",
            "PrefixEName": "H"
        },
        {
            "SaleCityId": 440,
            "Name": "四平",
            "EName": "Siping",
            "PrefixEName": "S"
        },
        {
            "SaleCityId": 441,
            "Name": "商丘",
            "EName": "Shangqiu",
            "PrefixEName": "S"
        },
        {
            "SaleCityId": 956,
            "Name": "揭阳",
            "EName": "Jieyang",
            "PrefixEName": "J"
        },
        {
            "SaleCityId": 447,
            "Name": "汕头",
            "EName": "Shantou",
            "PrefixEName": "S"
        },
        {
            "SaleCityId": 1472,
            "Name": "宿迁",
            "EName": "Suqian",
            "PrefixEName": "S"
        },
        {
            "SaleCityId": 451,
            "Name": "沈阳",
            "EName": "Shenyang",
            "PrefixEName": "S"
        },
        {
            "SaleCityId": 452,
            "Name": "十堰",
            "EName": "SHIYAN",
            "PrefixEName": "S"
        },
        {
            "SaleCityId": 454,
            "Name": "泰安",
            "EName": "Taian",
            "PrefixEName": "T"
        },
        {
            "SaleCityId": 456,
            "Name": "通化",
            "EName": "Tonghua",
            "PrefixEName": "T"
        },
        {
            "SaleCityId": 458,
            "Name": "通辽",
            "EName": "Tongliao",
            "PrefixEName": "T"
        },
        {
            "SaleCityId": 970,
            "Name": "永州",
            "EName": "Yongzhou",
            "PrefixEName": "Y"
        },
        {
            "SaleCityId": 459,
            "Name": "铜陵",
            "EName": "Tongling",
            "PrefixEName": "T"
        },
        {
            "SaleCityId": 7631,
            "Name": "吕梁",
            "EName": "Lvliang",
            "PrefixEName": "L"
        },
        {
            "SaleCityId": 1490,
            "Name": "孝感",
            "EName": "Xiaogan",
            "PrefixEName": "X"
        },
        {
            "SaleCityId": 468,
            "Name": "唐山",
            "EName": "Tangshan",
            "PrefixEName": "T"
        },
        {
            "SaleCityId": 985,
            "Name": "曲靖",
            "EName": "Qujing",
            "PrefixEName": "Q"
        },
        {
            "SaleCityId": 475,
            "Name": "潍坊",
            "EName": "Weifang",
            "PrefixEName": "W"
        },
        {
            "SaleCityId": 477,
            "Name": "武汉",
            "EName": "Wuhan",
            "PrefixEName": "W"
        },
        {
            "SaleCityId": 478,
            "Name": "芜湖",
            "EName": "Wuhu",
            "PrefixEName": "W"
        },
        {
            "SaleCityId": 479,
            "Name": "威海",
            "EName": "Weihai",
            "PrefixEName": "W"
        },
        {
            "SaleCityId": 992,
            "Name": "鄂州",
            "EName": "Ezhou",
            "PrefixEName": "E"
        },
        {
            "SaleCityId": 481,
            "Name": "吴江",
            "EName": "Wujiang",
            "PrefixEName": "W"
        },
        {
            "SaleCityId": 487,
            "Name": "万州",
            "EName": "WANZHOU",
            "PrefixEName": "W"
        },
        {
            "SaleCityId": 491,
            "Name": "温州",
            "EName": "Wenzhou",
            "PrefixEName": "W"
        },
        {
            "SaleCityId": 492,
            "Name": "梧州",
            "EName": "Wuzhou",
            "PrefixEName": "W"
        },
        {
            "SaleCityId": 3053,
            "Name": "梅州",
            "EName": "Meizhou",
            "PrefixEName": "M"
        },
        {
            "SaleCityId": 494,
            "Name": "西昌",
            "EName": "Xichang",
            "PrefixEName": "X"
        },
        {
            "SaleCityId": 1006,
            "Name": "宣城",
            "EName": "Xuancheng",
            "PrefixEName": "X"
        },
        {
            "SaleCityId": 1518,
            "Name": "贵港",
            "EName": "Guigang",
            "PrefixEName": "G"
        },
        {
            "SaleCityId": 496,
            "Name": "襄阳",
            "EName": "Xiangyang",
            "PrefixEName": "X"
        },
        {
            "SaleCityId": 507,
            "Name": "新乡",
            "EName": "Xinxiang",
            "PrefixEName": "X"
        },
        {
            "SaleCityId": 510,
            "Name": "信阳",
            "EName": "Xinyang",
            "PrefixEName": "X"
        }
    ],
    "ErrorCode": 0,
    "ErrorMessage": ""
}
Mock.mock("/api/city",{
    city
})