import Mock from "mockjs";

let reYi = {
    "coming": [],
    "movieIds": [346629, 1254277, 248172, 345621, 1218727, 246061, 883196, 1217809, 337625, 445609, 342893, 1216142, 1233255, 1206829, 1234382, 1219454, 1189894, 1229019, 672279, 1239544, 1228776, 1216025, 1239281, 1261145, 1238775, 1211412, 476263, 1225076, 1211727, 1263097, 344561, 1248314, 1229781, 1230152, 1212492, 1245589, 343366, 1167831, 507792, 1238891, 1280694, 1277746, 1278409, 1243904, 1205775, 672379, 1234116, 1250717, 1229894, 246208, 1254051, 1162868, 1207260, 1208258, 13890, 9426, 35949, 245900, 248327, 832559, 1188070, 1217448, 1225924, 1173906, 1266490, 1218052, 1199337, 1234418, 1228989, 1229918, 1229055, 1253952, 1218728],
    "stid": "576591972453269000",
    "stids": [{
        "movieId": 346629,
        "stid": "576591972453269000_a346629_c0"
    }, {
        "movieId": 1254277,
        "stid": "576591972453269000_a1254277_c1"
    }, {
        "movieId": 248172,
        "stid": "576591972453269000_a248172_c2"
    }, {
        "movieId": 345621,
        "stid": "576591972453269000_a345621_c3"
    }, {
        "movieId": 1218727,
        "stid": "576591972453269000_a1218727_c4"
    }, {
        "movieId": 246061,
        "stid": "576591972453269000_a246061_c5"
    }, {
        "movieId": 883196,
        "stid": "576591972453269000_a883196_c6"
    }, {
        "movieId": 1217809,
        "stid": "576591972453269000_a1217809_c7"
    }, {
        "movieId": 337625,
        "stid": "576591972453269000_a337625_c8"
    }, {
        "movieId": 445609,
        "stid": "576591972453269000_a445609_c9"
    }, {
        "movieId": 342893,
        "stid": "576591972453269000_a342893_c10"
    }, {
        "movieId": 1216142,
        "stid": "576591972453269000_a1216142_c11"
    }],
    "total": 73,
    "movieList": [{
        "id": 346629,
        "haspromotionTag": false,
        "img": "http://p0.meituan.net/128.180/movie/f29c0f9ff0340d00085f4bc1a395ecf02603950.jpg",
        "version": "v3d imax",
        "nm": "大侦探皮卡丘",
        "preShow": false,
        "sc": 8.5,
        "globalReleased": true,
        "wish": 280645,
        "star": "瑞安·雷诺兹,贾斯蒂斯·史密斯,凯瑟琳·纽顿",
        "rt": "2019-05-10",
        "showInfo": "今天217家影院放映3146场",
        "showst": 3,
        "wishst": 0
    }, {
        "id": 1254277,
        "haspromotionTag": false,
        "img": "http://p1.meituan.net/128.180/movie/b76f37b5e3484b6837f75ef7b5bf46452066459.jpg",
        "version": "",
        "nm": "一条狗的使命2",
        "preShow": false,
        "sc": 0,
        "globalReleased": false,
        "wish": 41519,
        "star": "丹尼斯·奎德,凯瑟琳·普雷斯科特,刘宪华",
        "rt": "2019-05-17",
        "showInfo": "今天2家影院放映2场",
        "showst": 4,
        "wishst": 0
    }, {
        "id": 248172,
        "haspromotionTag": false,
        "img": "http://p0.meituan.net/128.180/moviemachine/f7d2ad70eb79d6d9b8a197713db9b8c41711752.jpg",
        "version": "v3d imax",
        "nm": "复仇者联盟4：终局之战",
        "preShow": false,
        "sc": 9.1,
        "globalReleased": true,
        "wish": 1849927,
        "star": "小罗伯特·唐尼,克里斯·埃文斯,马克·鲁法洛",
        "rt": "2019-04-24",
        "showInfo": "今天212家影院放映1745场",
        "showst": 3,
        "wishst": 0
    }, {
        "id": 345621,
        "haspromotionTag": false,
        "img": "http://p0.meituan.net/128.180/moviemachine/07e846797e2c886084d4377822036e1a1464615.jpg",
        "version": "",
        "nm": "双生",
        "preShow": false,
        "sc": 0,
        "globalReleased": false,
        "wish": 161835,
        "star": "陈都灵,刘昊然,赵芮",
        "rt": "2019-05-18",
        "showInfo": "2019-05-18 本周六上映",
        "showst": 4,
        "wishst": 0
    }, {
        "id": 1218727,
        "haspromotionTag": false,
        "img": "http://p1.meituan.net/128.180/movie/d28b729ffe72353a72d1e7ef8a9b90591544978.jpg",
        "version": "",
        "nm": "何以为家",
        "preShow": false,
        "sc": 9.3,
        "globalReleased": true,
        "wish": 101827,
        "star": "赞恩·阿尔·拉菲亚,约丹诺斯·希费罗,博鲁瓦蒂夫·特雷杰·班科尔",
        "rt": "2019-04-29",
        "showInfo": "今天210家影院放映1072场",
        "showst": 3,
        "wishst": 0
    }, {
        "id": 246061,
        "haspromotionTag": false,
        "img": "http://p0.meituan.net/128.180/movie/71fba05fbe4912cb70d27b87c3c856393364925.jpg",
        "version": "v3d imax",
        "nm": "哥斯拉2：怪兽之王",
        "preShow": true,
        "sc": 0,
        "globalReleased": false,
        "wish": 220466,
        "star": "米莉·波比·布朗,凯尔·钱德勒,莎莉·霍金斯",
        "rt": "2019-05-31",
        "showInfo": "2019-05-31上映",
        "showst": 4,
        "wishst": 0
    }, {
        "id": 883196,
        "haspromotionTag": false,
        "img": "http://p1.meituan.net/128.180/movie/d5bb2989f36ecd73543a095f62f878eb883035.jpg",
        "version": "",
        "nm": "一个母亲的复仇",
        "preShow": false,
        "sc": 9.3,
        "globalReleased": true,
        "wish": 52392,
        "star": "希里黛玉,阿克夏耶·坎纳,萨佳·阿里",
        "rt": "2019-05-10",
        "showInfo": "今天199家影院放映732场",
        "showst": 3,
        "wishst": 0
    }, {
        "id": 1217809,
        "haspromotionTag": false,
        "img": "http://p0.meituan.net/128.180/movie/506df49eabcdeb2b04472a34f94a803f4024943.jpg",
        "version": "",
        "nm": "企鹅公路",
        "preShow": false,
        "sc": 0,
        "globalReleased": false,
        "wish": 11640,
        "star": "苍井优,北香那,钉宫理惠",
        "rt": "2019-05-17",
        "showInfo": "2019-05-17 本周五上映",
        "showst": 4,
        "wishst": 0
    }, {
        "id": 337625,
        "haspromotionTag": false,
        "img": "http://p0.meituan.net/128.180/movie/f2a32a5369a76ee11ee37947a0003254629750.jpg",
        "version": "",
        "nm": "海蒂和爷爷",
        "preShow": false,
        "sc": 0,
        "globalReleased": true,
        "wish": 16927,
        "star": "阿努克·斯特芬,布鲁诺·甘茨,昆林·艾格匹",
        "rt": "2019-05-16",
        "showInfo": "今天163家影院放映441场",
        "showst": 3,
        "wishst": 0
    }, {
        "id": 445609,
        "haspromotionTag": false,
        "img": "http://p0.meituan.net/128.180/movie/3a99e82eb46c2f5da78b4c64d805f9b12425410.jpg",
        "version": "",
        "nm": "罗马",
        "preShow": false,
        "sc": 8.5,
        "globalReleased": true,
        "wish": 7566,
        "star": "雅利扎·阿巴里西奥,玛丽娜·德·塔维拉,迭戈·科蒂娜·奥特里",
        "rt": "2019-05-10",
        "showInfo": "今天105家影院放映245场",
        "showst": 3,
        "wishst": 0
    }, {
        "id": 342893,
        "haspromotionTag": false,
        "img": "http://p0.meituan.net/128.180/movie/35cd439c836bf2281bbd1e8eaeb8fdea3999459.jpg",
        "version": "",
        "nm": "进京城",
        "preShow": false,
        "sc": 9,
        "globalReleased": true,
        "wish": 13003,
        "star": "马伊琍,富大龙,马敬涵",
        "rt": "2019-05-10",
        "showInfo": "今天117家影院放映218场",
        "showst": 3,
        "wishst": 0
    }, {
        "id": 1216142,
        "haspromotionTag": false,
        "img": "http://p0.meituan.net/128.180/movie/a87cc9bafe57ecd825c7ca97ec67a5c216083354.jpg",
        "version": "",
        "nm": "最后的勇士",
        "preShow": false,
        "sc": 0,
        "globalReleased": false,
        "wish": 2555,
        "star": "维克多·霍林雅克,米拉·斯瓦奇卡娅,叶卡婕琳娜·维尔科娃",
        "rt": "2019-05-17",
        "showInfo": "2019-05-17 本周五上映",
        "showst": 4,
        "wishst": 0
    }]
}

let Jiji = {
    "coming": [{
        "id": 246061,
        "img": "http://p0.meituan.net/128.180/movie/71fba05fbe4912cb70d27b87c3c856393364925.jpg",
        "wish": 220653,
        "wishst": 0,
        "nm": "哥斯拉2：怪兽之王",
        "comingTitle": "5月31日 周五"
    }, {
        "id": 344328,
        "img": "http://p0.meituan.net/128.180/movie/47af2656af6cd0110057bc527b862c665484423.jpg",
        "wish": 179598,
        "wishst": 0,
        "nm": "X战警：黑凤凰",
        "comingTitle": "6月6日 周四"
    }, {
        "id": 345621,
        "img": "http://p0.meituan.net/128.180/moviemachine/07e846797e2c886084d4377822036e1a1464615.jpg",
        "wish": 161899,
        "wishst": 0,
        "nm": "双生",
        "comingTitle": "5月18日 周六"
    }, {
        "id": 1218029,
        "img": "http://p0.meituan.net/128.180/movie/e11213b2676bcf6f4eac41c482af2bdd327884.jpg",
        "wish": 159163,
        "wishst": 0,
        "nm": "少年的你",
        "comingTitle": "6月27日 周四"
    }, {
        "id": 1218141,
        "img": "http://p1.meituan.net/128.180/moviemachine/ced8d9b1ea941aa333104ce4fa371f05203502.jpg",
        "wish": 97507,
        "wishst": 0,
        "nm": "扫毒2天地对决",
        "comingTitle": "7月12日 周五"
    }, {
        "id": 346559,
        "img": "http://p0.meituan.net/128.180/movie/2a275c68da26ab87757cdeb213c98bc73651258.png",
        "wish": 76607,
        "wishst": 0,
        "nm": "黑衣人：全球追缉",
        "comingTitle": "6月14日 周五"
    }, {
        "id": 1207185,
        "img": "http://p0.meituan.net/128.180/movie/313ed0afcdb4d1cc37cd12b402e9e4421137394.jpg",
        "wish": 62728,
        "wishst": 0,
        "nm": "秦明·生死语者",
        "comingTitle": "6月14日 周五"
    }, {
        "id": 1218215,
        "img": "http://p0.meituan.net/128.180/movie/c0a02897fa49e5c529bfe3cead0f49652270427.jpg",
        "wish": 51309,
        "wishst": 0,
        "nm": "追龙Ⅱ",
        "comingTitle": "6月6日 周四"
    }, {
        "id": 1219454,
        "img": "http://p1.meituan.net/128.180/movie/add2ab162d018ceb1351e6e8e465d92f650170.jpg",
        "wish": 49264,
        "wishst": 0,
        "nm": "龙珠超：布罗利",
        "comingTitle": "5月24日 周五"
    }, {
        "id": 1197417,
        "img": "http://p0.meituan.net/128.180/moviemachine/4e99b803b4a15c1286a7d984f864c981346472.jpg",
        "wish": 44408,
        "wishst": 0,
        "nm": "使徒行者2：谍影行动",
        "comingTitle": "8月9日 周五"
    }],
    "paging": {
        "hasMore": true,
        "limit": 10,
        "offset": 0,
        "total": 89
    }
}
Mock.mock("/api/reYi", {
    reYi
})
Mock.mock("/api/Jiji", {
    Jiji
})