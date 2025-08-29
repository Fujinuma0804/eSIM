const plans = [
    {
        duration: 13,
        capacity: 10000,
        price: 2980,
        url: "https://shop.esim-market.net/products/detail.php?product_id=35"
    },
    {
        duration: 18,
        capacity: 10000,
        price: 3230,
        url: "https://shop.esim-market.net/products/detail.php?product_id=40"
    },
    {
        duration: 23,
        capacity: 10000,
        price: 3480,
        url: "https://shop.esim-market.net/products/detail.php?product_id=45"
    },
    {
        duration: 30,
        capacity: 10000,
        price: 4330,
        url: "https://shop.esim-market.net/products/detail.php?product_id=68"
    },
    {
        duration: 3,
        capacity: 1,
        price: 980,
        url: "https://shop.esim-market.net/products/detail.php?product_id=6"
    },
    {
        duration: 4,
        capacity: 1,
        price: 1180,
        url: "https://shop.esim-market.net/products/detail.php?product_id=7"
    },
    {
        duration: 3,
        capacity: 3,
        price: 1180,
        url: "https://shop.esim-market.net/products/detail.php?product_id=8"
    },
    {
        duration: 4,
        capacity: 3,
        price: 1380,
        url: "https://shop.esim-market.net/products/detail.php?product_id=9"
    },
    {
        duration: 5,
        capacity: 3,
        price: 1280,
        url: "https://shop.esim-market.net/products/detail.php?product_id=10"
    },
    {
        duration: 6,
        capacity: 3,
        price: 1480,
        url: "https://shop.esim-market.net/products/detail.php?product_id=11"
    },
    {
        duration: 7,
        capacity: 3,
        price: 1680,
        url: "https://shop.esim-market.net/products/detail.php?product_id=12"
    },
    {
        duration: 8,
        capacity: 3,
        price: 1880,
        url: "https://shop.esim-market.net/products/detail.php?product_id=13"
    },
    {
        duration: 5,
        capacity: 5,
        price: 1580,
        url: "https://shop.esim-market.net/products/detail.php?product_id=14"
    },
    {
        duration: 6,
        capacity: 5,
        price: 1730,
        url: "https://shop.esim-market.net/products/detail.php?product_id=15"
    },
    {
        duration: 7,
        capacity: 5,
        price: 1880,
        url: "https://shop.esim-market.net/products/detail.php?product_id=16"
    },
    {
        duration: 8,
        capacity: 5,
        price: 2030,
        url: "https://shop.esim-market.net/products/detail.php?product_id=17"
    },
    {
        duration: 9,
        capacity: 10,
        price: 2230,
        url: "https://shop.esim-market.net/products/detail.php?product_id=18"
    },
    {
        duration: 10,
        capacity: 10,
        price: 2280,
        url: "https://shop.esim-market.net/products/detail.php?product_id=19"
    },
    {
        duration: 11,
        capacity: 10,
        price: 2330,
        url: "https://shop.esim-market.net/products/detail.php?product_id=20"
    },
    {
        duration: 12,
        capacity: 10,
        price: 2380,
        url: "https://shop.esim-market.net/products/detail.php?product_id=21"
    },
    {
        duration: 13,
        capacity: 10,
        price: 2430,
        url: "https://shop.esim-market.net/products/detail.php?product_id=22"
    },
    {
        duration: 14,
        capacity: 10,
        price: 2480,
        url: "https://shop.esim-market.net/products/detail.php?product_id=23"
    },
    {
        duration: 15,
        capacity: 10,
        price: 2530,
        url: "https://shop.esim-market.net/products/detail.php?product_id=24"
    },
    {
        duration: 16,
        capacity: 10,
        price: 2580,
        url: "https://shop.esim-market.net/products/detail.php?product_id=25"
    },
    {
        duration: 17,
        capacity: 10,
        price: 2630,
        url: "https://shop.esim-market.net/products/detail.php?product_id=26"
    },
    {
        duration: 18,
        capacity: 10,
        price: 2680,
        url: "https://shop.esim-market.net/products/detail.php?product_id=27"
    },
    {
        duration: 19,
        capacity: 10,
        price: 2730,
        url: "https://shop.esim-market.net/products/detail.php?product_id=28"
    },
    {
        duration: 20,
        capacity: 10,
        price: 2780,
        url: "https://shop.esim-market.net/products/detail.php?product_id=29"
    },
    {
        duration: 21,
        capacity: 10,
        price: 2830,
        url: "https://shop.esim-market.net/products/detail.php?product_id=30"
    },
    {
        duration: 9,
        capacity: 20,
        price: 2780,
        url: "https://shop.esim-market.net/products/detail.php?product_id=31"
    },
    {
        duration: 10,
        capacity: 20,
        price: 2830,
        url: "https://shop.esim-market.net/products/detail.php?product_id=32"
    },
    {
        duration: 11,
        capacity: 20,
        price: 2880,
        url: "https://shop.esim-market.net/products/detail.php?product_id=33"
    },
    {
        duration: 12,
        capacity: 20,
        price: 2930,
        url: "https://shop.esim-market.net/products/detail.php?product_id=34"
    },
    {
        duration: 13,
        capacity: 20,
        price: 2980,
        url: "https://shop.esim-market.net/products/detail.php?product_id=35"
    },
    {
        duration: 14,
        capacity: 20,
        price: 3030,
        url: "https://shop.esim-market.net/products/detail.php?product_id=36"
    },
    {
        duration: 15,
        capacity: 20,
        price: 3080,
        url: "https://shop.esim-market.net/products/detail.php?product_id=37"
    },
    {
        duration: 16,
        capacity: 20,
        price: 3130,
        url: "https://shop.esim-market.net/products/detail.php?product_id=38"
    },
    {
        duration: 17,
        capacity: 20,
        price: 3180,
        url: "https://shop.esim-market.net/products/detail.php?product_id=39"
    },
    {
        duration: 18,
        capacity: 20,
        price: 3230,
        url: "https://shop.esim-market.net/products/detail.php?product_id=40"
    },
    {
        duration: 19,
        capacity: 20,
        price: 3280,
        url: "https://shop.esim-market.net/products/detail.php?product_id=41"
    },
    {
        duration: 20,
        capacity: 20,
        price: 3330,
        url: "https://shop.esim-market.net/products/detail.php?product_id=42"
    },
    {
        duration: 21,
        capacity: 20,
        price: 3380,
        url: "https://shop.esim-market.net/products/detail.php?product_id=43"
    },
    {
        duration: 22,
        capacity: 20,
        price: 3430,
        url: "https://shop.esim-market.net/products/detail.php?product_id=44"
    },
    {
        duration: 23,
        capacity: 20,
        price: 3480,
        url: "https://shop.esim-market.net/products/detail.php?product_id=45"
    },
    {
        duration: 24,
        capacity: 20,
        price: 3530,
        url: "https://shop.esim-market.net/products/detail.php?product_id=46"
    },
    {
        duration: 25,
        capacity: 20,
        price: 3580,
        url: "https://shop.esim-market.net/products/detail.php?product_id=47"
    },
    {
        duration: 26,
        capacity: 20,
        price: 3630,
        url: "https://shop.esim-market.net/products/detail.php?product_id=48"
    },
    {
        duration: 27,
        capacity: 20,
        price: 3680,
        url: "https://shop.esim-market.net/products/detail.php?product_id=49"
    },
    {
        duration: 28,
        capacity: 20,
        price: 3730,
        url: "https://shop.esim-market.net/products/detail.php?product_id=50"
    },
    {
        duration: 29,
        capacity: 20,
        price: 3780,
        url: "https://shop.esim-market.net/products/detail.php?product_id=51"
    },
    {
        duration: 30,
        capacity: 20,
        price: 3830,
        url: "https://shop.esim-market.net/products/detail.php?product_id=52"
    },
    {
        duration: 31,
        capacity: 20,
        price: 3880,
        url: "https://shop.esim-market.net/products/detail.php?product_id=53"
    },
    {
        duration: 16,
        capacity: 50,
        price: 3630,
        url: "https://shop.esim-market.net/products/detail.php?product_id=54"
    },
    {
        duration: 17,
        capacity: 50,
        price: 3680,
        url: "https://shop.esim-market.net/products/detail.php?product_id=55"
    },
    {
        duration: 18,
        capacity: 50,
        price: 3730,
        url: "https://shop.esim-market.net/products/detail.php?product_id=56"
    },
    {
        duration: 19,
        capacity: 50,
        price: 3780,
        url: "https://shop.esim-market.net/products/detail.php?product_id=57"
    },
    {
        duration: 20,
        capacity: 50,
        price: 3830,
        url: "https://shop.esim-market.net/products/detail.php?product_id=58"
    },
    {
        duration: 21,
        capacity: 50,
        price: 3880,
        url: "https://shop.esim-market.net/products/detail.php?product_id=59"
    },
    {
        duration: 22,
        capacity: 50,
        price: 3930,
        url: "https://shop.esim-market.net/products/detail.php?product_id=60"
    },
    {
        duration: 23,
        capacity: 50,
        price: 3980,
        url: "https://shop.esim-market.net/products/detail.php?product_id=61"
    },
    {
        duration: 24,
        capacity: 50,
        price: 4030,
        url: "https://shop.esim-market.net/products/detail.php?product_id=62"
    },
    {
        duration: 25,
        capacity: 50,
        price: 4080,
        url: "https://shop.esim-market.net/products/detail.php?product_id=63"
    },
    {
        duration: 26,
        capacity: 50,
        price: 4130,
        url: "https://shop.esim-market.net/products/detail.php?product_id=64"
    },
    {
        duration: 27,
        capacity: 50,
        price: 4180,
        url: "https://shop.esim-market.net/products/detail.php?product_id=65"
    },
    {
        duration: 28,
        capacity: 50,
        price: 4230,
        url: "https://shop.esim-market.net/products/detail.php?product_id=66"
    },
    {
        duration: 29,
        capacity: 50,
        price: 4280,
        url: "https://shop.esim-market.net/products/detail.php?product_id=67"
    },
    {
        duration: 30,
        capacity: 50,
        price: 4330,
        url: "https://shop.esim-market.net/products/detail.php?product_id=68"
    },
    {
        duration: 31,
        capacity: 50,
        price: 4380,
        url: "https://shop.esim-market.net/products/detail.php?product_id=84"
    },
    {
        duration: 180,
        capacity: 10,
        price: 3680,
        url: "https://shop.esim-market.net/products/detail.php?product_id=91"
    },
    {
        duration: 180,
        capacity: 30,
        price: 5180,
        url: "https://shop.esim-market.net/products/detail.php?product_id=92"
    },
    {
        duration: 180,
        capacity: 50,
        price: 6180,
        url: "https://shop.esim-market.net/products/detail.php?product_id=93"
    },
    {
        duration: 365,
        capacity: 20,
        price: 4680,
        url: "https://shop.esim-market.net/products/detail.php?product_id=94"
    },
    {
        duration: 365,
        capacity: 30,
        price: 5680,
        url: "https://shop.esim-market.net/products/detail.php?product_id=95"
    },
    {
        duration: 365,
        capacity: 50,
        price: 7180,
        url: "https://shop.esim-market.net/products/detail.php?product_id=96"
    },
    {
        duration: 365,
        capacity: 100,
        price: 11680,
        url: "https://shop.esim-market.net/products/detail.php?product_id=97"
    }
];

const plans1 = {
    "アジア": [
        {
            name_jp: "アジア周遊",
            name_en: "Asia",
            img: "flag_asia.png",
            available: ["中華人民共和国", "大韓民国", "タイ", "台湾", "インドネシア", "ベトナム", "フィリピン", "カンボジア", "インド", "マレーシア", "香港", "マカオ", "スリランカ", "クウェート", "ナイジェリア", "パキスタン", "イスラエル", "ロシア"],
            price: 1980,
            info: [
                { icon: 'location_on', title: '対応国', text: 'アジア周遊\n中国本土,韓国,タイ,台湾,インドネシア,ベトナム,フィリピン,カンボジア,インド,マレーシア,香港,マカオ,スリランカ,パキスタン' },
                { icon: 'language', title: 'ネットワーク', text: '中国本土：China Unicom\n韓国：SKT、KT、LG U+\nタイ：AIS、DTAC\n台湾：CHT\nインドネシア：Telkomsel\nベトナム：Mobifone、vietnamobile\nフィリピン：Globe\nカンボジア：smart、metfone\nインド：Bharti Airtel、Vodafone\nマレーシア：Maxis、digi\n香港：HKT\nマカオ：CTM\nスリランカ：Etisalat Lanka、Hutchison Telecom\nパキスタン：Telenor' },
                { icon: 'rss_feed', title: '通信速度', text: '5G / 4G LTE' },
                { icon: 'access_time', title: '利用開始のタイミング', text: '現地に到着後すぐ' },
                { icon: 'phone', title: '電話/SMS', text: '利用不可\nアプリでVoIP通話は可能（LINEなど）' },
                { icon: 'phonelink_ring', title: '対応端末', text: 'eSIM対応のスマートフォン・タブレットなど\n<a href="https://esim-market.net/#check" class="text-blue-500 underline">対応機種を確認する</a>' },
                { icon: 'mail_outline', title: 'eSIM情報の送付タイミング', text: 'ご注文後すぐ\nメールでeSIM情報と設定方法が届きます' },
                { icon: 'add', title: 'インストール方法', text: 'QRコードまたは手動' },
                { icon: 'date_range', title: 'eSIM有効期限', text: '発行から30日以内にインストールしてください' },
                { icon: 'info', title: 'APN', text: 'mobile' },
                { icon: 'repeat', title: '容量追加', text: '不可（eSIMの再購入は可能）' }
            ],
            url_1: "https://shop.esim-market.net/products/detail.php?product_id=212",
            url_2: "https://shop.esim-market.net/products/detail.php?product_id=213"
        },
        {
            name_jp: "中国・香港・マカオ",
            name_en: "China, Hong Kong, Macau",
            img: "flag_china_hong_kong_macau.png",
            available: ["中華人民共和国", "香港", "マカオ"],
            price: 780,
            info: [
                { icon: 'location_on', title: '対応国', text: '中国本土, 香港, マカオ' },
                { icon: 'language', title: 'ネットワーク', text: '中国本土：China Unicom\n香港：HKT\nマカオ：CTM' },
                { icon: 'rss_feed', title: '通信速度', text: '5G / 4G LTE' },
                { icon: 'access_time', title: '利用開始のタイミング', text: '現地に到着後すぐ' },
                { icon: 'phone', title: '電話/SMS', text: '利用不可\nアプリでVoIP通話は可能（LINEなど）' },
                { icon: 'phonelink_ring', title: '対応端末', text: 'eSIM対応のスマートフォン・タブレットなど\n<a href="https://esim-market.net/#check" class="text-blue-500 underline">対応機種を確認する</a>' },
                { icon: 'mail_outline', title: 'eSIM情報の送付タイミング', text: 'ご注文後すぐ\nメールでeSIM情報と設定方法が届きます' },
                { icon: 'add', title: 'インストール方法', text: 'QRコードまたは手動' },
                { icon: 'date_range', title: 'eSIM有効期限', text: '発行から30日以内にインストールしてください' },
                { icon: 'info', title: 'APN', text: 'mobile' },
                { icon: 'repeat', title: '容量追加', text: '不可（eSIMの再購入は可能）' }
            ],
            url_1: "https://shop.esim-market.net/products/detail.php?product_id=214",
            url_2: "https://shop.esim-market.net/products/detail.php?product_id=215"
        },
        {
            name_jp: "東南アジア4か国",
            name_en: "Southeast Asia",
            img: "flag_southeast_asia.png",
            available: ["シンガポール", "マレーシア", "タイ", "インドネシア"],
            price: 1080,
            info: [
                { icon: 'location_on', title: '対応国', text: '東南アジア4ヵ国\nシンガポール, マレーシア, タイ, インドネシア' },
                { icon: 'language', title: 'ネットワーク', text: 'シンガポール：Simba, StarHub\nマレーシア：Digi, Celcom\nタイ：AIS\nインドネシア：Telkomsel' },
                { icon: 'rss_feed', title: '通信速度', text: '5G / 4G LTE' },
                { icon: 'access_time', title: '利用開始のタイミング', text: '現地に到着後すぐ' },
                { icon: 'phone', title: '電話/SMS', text: '利用不可\nアプリでVoIP通話は可能（LINEなど）' },
                { icon: 'phonelink_ring', title: '対応端末', text: 'eSIM対応のスマートフォン・タブレットなど\n<a href="https://esim-market.net/#check" class="text-blue-500 underline">対応機種を確認する</a>' },
                { icon: 'mail_outline', title: 'eSIM情報の送付タイミング', text: 'ご注文後すぐ\nメールでeSIM情報と設定方法が届きます' },
                { icon: 'add', title: 'インストール方法', text: 'QRコードまたは手動' },
                { icon: 'date_range', title: 'eSIM有効期限', text: '発行から30日以内にインストールしてください' },
                { icon: 'info', title: 'APN', text: 'mobile.three.com.hk' },
                { icon: 'repeat', title: '容量追加', text: '不可（eSIMの再購入は可能）' }
            ],
            url_1: "https://shop.esim-market.net/products/detail.php?product_id=216",
            url_2: "https://shop.esim-market.net/products/detail.php?product_id=217"
        },
        {
            name_jp: "大韓民国",
            name_en: "Korea",
            flag_img: "flag_south_korea.png",
            price: 480,
            info: [
                { icon: 'location_on', title: '対応国', text: '韓国' },
                { icon: 'language', title: 'ネットワーク', text: 'LG, SKT' },
                { icon: 'rss_feed', title: '通信速度', text: '5G / 4G LTE' },
                { icon: 'access_time', title: '利用開始のタイミング', text: '現地に到着後すぐ' },
                { icon: 'phone', title: '電話/SMS', text: '利用不可\nアプリでVoIP通話は可能（LINEなど）' },
                { icon: 'phonelink_ring', title: '対応端末', text: 'eSIM対応のスマートフォン・タブレットなど\n<a href="https://esim-market.net/#check" class="text-blue-500 underline">対応機種を確認する</a>' },
                { icon: 'mail_outline', title: 'eSIM情報の送付タイミング', text: 'ご注文後すぐ\nメールでeSIM情報と設定方法が届きます' },
                { icon: 'add', title: 'インストール方法', text: 'QRコードまたは手動' },
                { icon: 'date_range', title: 'eSIM有効期限', text: '発行から30日以内にインストールしてください' },
                { icon: 'info', title: 'APN', text: '3gnet' },
                { icon: 'repeat', title: '容量追加', text: '不可（eSIMの再購入は可能）' }
            ],
            url_1: "https://shop.esim-market.net/products/detail.php?product_id=100",
            url_2: "https://shop.esim-market.net/products/detail.php?product_id=155"
        },
        {
            name_jp: "中華人民共和国",
            name_en: "China",
            flag_img: "flag_china.png",
            price: 680,
            info: [
                { icon: 'location_on', title: '対応国', text: '中国本土' },
                { icon: 'language', title: 'ネットワーク', text: 'China Mobile' },
                { icon: 'rss_feed', title: '通信速度', text: '5G / 4G LTE' },
                { icon: 'access_time', title: '利用開始のタイミング', text: '現地に到着後すぐ' },
                { icon: 'phone', title: '電話/SMS', text: '利用不可\nアプリでVoIP通話は可能（LINEなど）' },
                { icon: 'phonelink_ring', title: '対応端末', text: 'eSIM対応のスマートフォン・タブレットなど\n<a href="https://esim-market.net/#check" class="text-blue-500 underline">対応機種を確認する</a>' },
                { icon: 'mail_outline', title: 'eSIM情報の送付タイミング', text: 'ご注文後すぐ\nメールでeSIM情報と設定方法が届きます' },
                { icon: 'add', title: 'インストール方法', text: 'QRコードまたは手動' },
                { icon: 'date_range', title: 'eSIM有効期限', text: '発行から30日以内にインストールしてください' },
                { icon: 'info', title: 'APN', text: 'mobile' },
                { icon: 'repeat', title: '容量追加', text: '不可（eSIMの再購入は可能）' }
            ],
            url_1: "https://shop.esim-market.net/products/detail.php?product_id=99",
            url_2: "https://shop.esim-market.net/products/detail.php?product_id=154"
        },
        {
            name_jp: "台湾",
            name_en: "Taiwan",
            flag_img: "flag_taiwan.png",
            price: 480,
            info: [
                { icon: 'location_on', title: '対応国', text: '台湾' },
                { icon: 'language', title: 'ネットワーク', text: 'CHT' },
                { icon: 'rss_feed', title: '通信速度', text: '5G / 4G LTE' },
                { icon: 'access_time', title: '利用開始のタイミング', text: '現地に到着後すぐ' },
                { icon: 'phone', title: '電話/SMS', text: '利用不可\nアプリでVoIP通話は可能（LINEなど）' },
                { icon: 'phonelink_ring', title: '対応端末', text: 'eSIM対応のスマートフォン・タブレットなど\n<a href="https://esim-market.net/#check" class="text-blue-500 underline">対応機種を確認する</a>' },
                { icon: 'mail_outline', title: 'eSIM情報の送付タイミング', text: 'ご注文後すぐ\nメールでeSIM情報と設定方法が届きます' },
                { icon: 'add', title: 'インストール方法', text: 'QRコードまたは手動' },
                { icon: 'date_range', title: 'eSIM有効期限', text: '発行から30日以内にインストールしてください' },
                { icon: 'info', title: 'APN', text: 'mobile' },
                { icon: 'repeat', title: '容量追加', text: '不可（eSIMの再購入は可能）' }
            ],
            url_1: "https://shop.esim-market.net/products/detail.php?product_id=99",
            url_2: "https://shop.esim-market.net/products/detail.php?product_id=154"
        },
        {
            name_jp: "香港",
            name_en: "Hong Kong",
            flag_img: "flag_hong_kong.png",
            price: 480,
            info: [
                { icon: 'location_on', title: '対応国', text: '香港' },
                { icon: 'language', title: 'ネットワーク', text: 'HKT' },
                { icon: 'rss_feed', title: '通信速度', text: '5G / 4G LTE' },
                { icon: 'access_time', title: '利用開始のタイミング', text: '現地に到着後すぐ' },
                { icon: 'phone', title: '電話/SMS', text: '利用不可\nアプリでVoIP通話は可能（LINEなど）' },
                { icon: 'phonelink_ring', title: '対応端末', text: 'eSIM対応のスマートフォン・タブレットなど\n<a href="https://esim-market.net/#check" class="text-blue-500 underline">対応機種を確認する</a>' },
                { icon: 'mail_outline', title: 'eSIM情報の送付タイミング', text: 'ご注文後すぐ\nメールでeSIM情報と設定方法が届きます' },
                { icon: 'add', title: 'インストール方法', text: 'QRコードまたは手動' },
                { icon: 'date_range', title: 'eSIM有効期限', text: '発行から30日以内にインストールしてください' },
                { icon: 'info', title: 'APN', text: 'mobile' },
                { icon: 'repeat', title: '容量追加', text: '不可（eSIMの再購入は可能）' }
            ],
            url_1: "https://shop.esim-market.net/products/detail.php?product_id=111",
            url_2: "https://shop.esim-market.net/products/detail.php?product_id=167"
        },
        {
            name_jp: "マカオ",
            name_en: "Macao",
            flag_img: "flag_macau.png",
            price: 480,
            info: [
                { icon: 'location_on', title: '対応国', text: 'マカオ' },
                { icon: 'language', title: 'ネットワーク', text: 'CTM' },
                { icon: 'rss_feed', title: '通信速度', text: '5G / 4G LTE' },
                { icon: 'access_time', title: '利用開始のタイミング', text: '現地に到着後すぐ' },
                { icon: 'phone', title: '電話/SMS', text: '利用不可\nアプリでVoIP通話は可能（LINEなど）' },
                { icon: 'phonelink_ring', title: '対応端末', text: 'eSIM対応のスマートフォン・タブレットなど\n<a href="https://esim-market.net/#check" class="text-blue-500 underline">対応機種を確認する</a>' },
                { icon: 'mail_outline', title: 'eSIM情報の送付タイミング', text: 'ご注文後すぐ\nメールでeSIM情報と設定方法が届きます' },
                { icon: 'add', title: 'インストール方法', text: 'QRコードまたは手動' },
                { icon: 'date_range', title: 'eSIM有効期限', text: '発行から30日以内にインストールしてください' },
                { icon: 'info', title: 'APN', text: '3gnet' },
                { icon: 'repeat', title: '容量追加', text: '不可（eSIMの再購入は可能）' }
            ],
            url_1: "https://shop.esim-market.net/products/detail.php?product_id=112",
            url_2: "https://shop.esim-market.net/products/detail.php?product_id=168"
        },
        {
            name_jp: "タイ",
            name_en: "Thailand",
            flag_img: "flag_thailand.png",
            price: 780,
            info: [
                { icon: 'location_on', title: '対応国', text: 'タイ' },
                { icon: 'language', title: 'ネットワーク', text: 'AIS' },
                { icon: 'rss_feed', title: '通信速度', text: '5G / 4G LTE' },
                { icon: 'access_time', title: '利用開始のタイミング', text: '現地に到着後すぐ' },
                { icon: 'phone', title: '電話/SMS', text: '利用不可\nアプリでVoIP通話は可能（LINEなど）' },
                { icon: 'phonelink_ring', title: '対応端末', text: 'eSIM対応のスマートフォン・タブレットなど\n<a href="https://esim-market.net/#check" class="text-blue-500 underline">対応機種を確認する</a>' },
                { icon: 'mail_outline', title: 'eSIM情報の送付タイミング', text: 'ご注文後すぐ\nメールでeSIM情報と設定方法が届きます' },
                { icon: 'add', title: 'インストール方法', text: 'QRコードまたは手動' },
                { icon: 'date_range', title: 'eSIM有効期限', text: '発行から30日以内にインストールしてください' },
                { icon: 'info', title: 'APN', text: '3gnet' },
                { icon: 'repeat', title: '容量追加', text: '不可（eSIMの再購入は可能）' }
            ],
            url_1: "https://shop.esim-market.net/products/detail.php?product_id=101",
            url_2: "https://shop.esim-market.net/products/detail.php?product_id=156"
        },
        {
            name_jp: "マレーシア",
            name_en: "Malaysia",
            flag_img: "flag_malaysia.png",
            price: 780,
            info: [
                { icon: 'location_on', title: '対応国', text: 'マレーシア' },
                { icon: 'language', title: 'ネットワーク', text: 'Digi, Celcom' },
                { icon: 'rss_feed', title: '通信速度', text: '5G / 4G LTE' },
                { icon: 'access_time', title: '利用開始のタイミング', text: '現地に到着後すぐ' },
                { icon: 'phone', title: '電話/SMS', text: '利用不可\nアプリでVoIP通話は可能（LINEなど）' },
                { icon: 'phonelink_ring', title: '対応端末', text: 'eSIM対応のスマートフォン・タブレットなど\n<a href="https://esim-market.net/#check" class="text-blue-500 underline">対応機種を確認する</a>' },
                { icon: 'mail_outline', title: 'eSIM情報の送付タイミング', text: 'ご注文後すぐ\nメールでeSIM情報と設定方法が届きます' },
                { icon: 'add', title: 'インストール方法', text: 'QRコードまたは手動' },
                { icon: 'date_range', title: 'eSIM有効期限', text: '発行から30日以内にインストールしてください' },
                { icon: 'info', title: 'APN', text: '3gnet' },
                { icon: 'repeat', title: '容量追加', text: '不可（eSIMの再購入は可能）' }
            ],
            url_1: "https://shop.esim-market.net/products/detail.php?product_id=110",
            url_2: "https://shop.esim-market.net/products/detail.php?product_id=166"
        },
        {
            name_jp: "シンガポール",
            name_en: "Singapore",
            flag_img: "flag_singapore.png",
            price: 980,
            info: [
                { icon: 'location_on', title: '対応国', text: 'シンガポール' },
                { icon: 'language', title: 'ネットワーク', text: 'Simba, StarHub' },
                { icon: 'rss_feed', title: '通信速度', text: '5G / 4G LTE' },
                { icon: 'access_time', title: '利用開始のタイミング', text: '現地に到着後すぐ' },
                { icon: 'phone', title: '電話/SMS', text: '利用不可\nアプリでVoIP通話は可能（LINEなど）' },
                { icon: 'phonelink_ring', title: '対応端末', text: 'eSIM対応のスマートフォン・タブレットなど\n<a href="https://esim-market.net/#check" class="text-blue-500 underline">対応機種を確認する</a>' },
                { icon: 'mail_outline', title: 'eSIM情報の送付タイミング', text: 'ご注文後すぐ\nメールでeSIM情報と設定方法が届きます' },
                { icon: 'add', title: 'インストール方法', text: 'QRコードまたは手動' },
                { icon: 'date_range', title: 'eSIM有効期限', text: '発行から30日以内にインストールしてください' },
                { icon: 'info', title: 'APN', text: '3gnet' },
                { icon: 'repeat', title: '容量追加', text: '不可（eSIMの再購入は可能）' }
            ],
            url_1: "https://shop.esim-market.net/products/detail.php?product_id=102",
            url_2: "https://shop.esim-market.net/products/detail.php?product_id=158"
        },
        {
            name_jp: "インドネシア",
            name_en: "Indonesia",
            flag_img: "flag_indonesia.png",
            price: 780,
            info: [
                { icon: 'location_on', title: '対応国', text: 'インドネシア' },
                { icon: 'language', title: 'ネットワーク', text: 'Telkomsel' },
                { icon: 'rss_feed', title: '通信速度', text: '5G / 4G LTE' },
                { icon: 'access_time', title: '利用開始のタイミング', text: '現地に到着後すぐ' },
                { icon: 'phone', title: '電話/SMS', text: '利用不可\nアプリでVoIP通話は可能（LINEなど）' },
                { icon: 'phonelink_ring', title: '対応端末', text: 'eSIM対応のスマートフォン・タブレットなど\n<a href="https://esim-market.net/#check" class="text-blue-500 underline">対応機種を確認する</a>' },
                { icon: 'mail_outline', title: 'eSIM情報の送付タイミング', text: 'ご注文後すぐ\nメールでeSIM情報と設定方法が届きます' },
                { icon: 'add', title: 'インストール方法', text: 'QRコードまたは手動' },
                { icon: 'date_range', title: 'eSIM有効期限', text: '発行から30日以内にインストールしてください' },
                { icon: 'info', title: 'APN', text: '3gnet' },
                { icon: 'repeat', title: '容量追加', text: '不可（eSIMの再購入は可能）' }
            ],
            url_1: "https://shop.esim-market.net/products/detail.php?product_id=103",
            url_2: "https://shop.esim-market.net/products/detail.php?product_id=159"
        },
        {
            name_jp: "ベトナム",
            name_en: "Vietnam",
            flag_img: "flag_vietnam.png",
            price: 680,
            info: [
                { icon: 'location_on', title: '対応国', text: 'ベトナム' },
                { icon: 'language', title: 'ネットワーク', text: 'Vietnamobile、Vinaphone' },
                { icon: 'rss_feed', title: '通信速度', text: '4G LTE' },
                { icon: 'access_time', title: '利用開始のタイミング', text: '現地に到着後すぐ' },
                { icon: 'phone', title: '電話/SMS', text: '利用不可\nアプリでVoIP通話は可能（LINEなど）' },
                { icon: 'phonelink_ring', title: '対応端末', text: 'eSIM対応のスマートフォン・タブレットなど\n<a href="https://esim-market.net/#check" class="text-blue-500 underline">対応機種を確認する</a>' },
                { icon: 'mail_outline', title: 'eSIM情報の送付タイミング', text: 'ご注文後すぐ\nメールでeSIM情報と設定方法が届きます' },
                { icon: 'add', title: 'インストール方法', text: 'QRコードまたは手動' },
                { icon: 'date_range', title: 'eSIM有効期限', text: '発行から30日以内にインストールしてください' },
                { icon: 'info', title: 'APN', text: '3gnet' },
                { icon: 'repeat', title: '容量追加', text: '不可（eSIMの再購入は可能）' }
            ],
            url_1: "https://shop.esim-market.net/products/detail.php?product_id=104",
            url_2: "https://shop.esim-market.net/products/detail.php?product_id=160"
        },
        {
            name_jp: "フィリピン",
            name_en: "Philippines",
            flag_img: "flag_philippines.png",
            price: 780,
            info: [
                { icon: 'location_on', title: '対応国', text: 'フィリピン' },
                { icon: 'language', title: 'ネットワーク', text: 'Globe' },
                { icon: 'rss_feed', title: '通信速度', text: '5G / 4G LTE' },
                { icon: 'access_time', title: '利用開始のタイミング', text: '現地に到着後すぐ' },
                { icon: 'phone', title: '電話/SMS', text: '利用不可\nアプリでVoIP通話は可能（LINEなど）' },
                { icon: 'phonelink_ring', title: '対応端末', text: 'eSIM対応のスマートフォン・タブレットなど\n<a href="https://esim-market.net/#check" class="text-blue-500 underline">対応機種を確認する</a>' },
                { icon: 'mail_outline', title: 'eSIM情報の送付タイミング', text: 'ご注文後すぐ\nメールでeSIM情報と設定方法が届きます' },
                { icon: 'add', title: 'インストール方法', text: 'QRコードまたは手動' },
                { icon: 'date_range', title: 'eSIM有効期限', text: '発行から30日以内にインストールしてください' },
                { icon: 'info', title: 'APN', text: '3gnet' },
                { icon: 'repeat', title: '容量追加', text: '不可（eSIMの再購入は可能）' }
            ],
            url_1: "https://shop.esim-market.net/products/detail.php?product_id=105",
            url_2: "https://shop.esim-market.net/products/detail.php?product_id=161"
        },
        {
            name_jp: "ラオス",
            name_en: "Laos",
            flag_img: "flag_laos.png",
            price: 1780,
            info: [
                { icon: 'location_on', title: '対応国', text: 'ラオス' },
                { icon: 'language', title: 'ネットワーク', text: 'LTC' },
                { icon: 'rss_feed', title: '通信速度', text: '5G / 4G LTE' },
                { icon: 'access_time', title: '利用開始のタイミング', text: '現地に到着後すぐ' },
                { icon: 'phone', title: '電話/SMS', text: '利用不可\nアプリでVoIP通話は可能（LINEなど）' },
                { icon: 'phonelink_ring', title: '対応端末', text: 'eSIM対応のスマートフォン・タブレットなど\n<a href="https://esim-market.net/#check" class="text-blue-500 underline">対応機種を確認する</a>' },
                { icon: 'mail_outline', title: 'eSIM情報の送付タイミング', text: 'ご注文後すぐ\nメールでeSIM情報と設定方法が届きます' },
                { icon: 'add', title: 'インストール方法', text: 'QRコードまたは手動' },
                { icon: 'date_range', title: 'eSIM有効期限', text: '発行から30日以内にインストールしてください' },
                { icon: 'info', title: 'APN', text: '3gnet' },
                { icon: 'repeat', title: '容量追加', text: '不可（eSIMの再購入は可能）' }
            ],
            url_1: "https://shop.esim-market.net/products/detail.php?product_id=108",
            url_2: "https://shop.esim-market.net/products/detail.php?product_id=164"
        },
        {
            name_jp: "カンボジア",
            name_en: "Cambodia",
            flag_img: "flag_cambodia.png",
            price: 1780,
            info: [
                { icon: 'location_on', title: '対応国', text: 'カンボジア' },
                { icon: 'language', title: 'ネットワーク', text: 'smart、metfone' },
                { icon: 'rss_feed', title: '通信速度', text: '4G LTE' },
                { icon: 'access_time', title: '利用開始のタイミング', text: '現地に到着後すぐ' },
                { icon: 'phone', title: '電話/SMS', text: '利用不可\nアプリでVoIP通話は可能（LINEなど）' },
                { icon: 'phonelink_ring', title: '対応端末', text: 'eSIM対応のスマートフォン・タブレットなど\n<a href="https://esim-market.net/#check" class="text-blue-500 underline">対応機種を確認する</a>' },
                { icon: 'mail_outline', title: 'eSIM情報の送付タイミング', text: 'ご注文後すぐ\nメールでeSIM情報と設定方法が届きます' },
                { icon: 'add', title: 'インストール方法', text: 'QRコードまたは手動' },
                { icon: 'date_range', title: 'eSIM有効期限', text: '発行から30日以内にインストールしてください' },
                { icon: 'info', title: 'APN', text: '3gnet' },
                { icon: 'repeat', title: '容量追加', text: '不可（eSIMの再購入は可能）' }
            ],
            url_1: "https://shop.esim-market.net/products/detail.php?product_id=106",
            url_2: "https://shop.esim-market.net/products/detail.php?product_id=162"
        },
        {
            name_jp: "インド",
            name_en: "India",
            flag_img: "flag_india.png",
            price: 1780,
            info: [
                { icon: 'location_on', title: '対応国', text: 'インド' },
                { icon: 'language', title: 'ネットワーク', text: 'Bharti Airtel' },
                { icon: 'rss_feed', title: '通信速度', text: '4G LTE' },
                { icon: 'access_time', title: '利用開始のタイミング', text: '現地に到着後すぐ' },
                { icon: 'phone', title: '電話/SMS', text: '利用不可\nアプリでVoIP通話は可能（LINEなど）' },
                { icon: 'phonelink_ring', title: '対応端末', text: 'eSIM対応のスマートフォン・タブレットなど\n<a href="https://esim-market.net/#check" class="text-blue-500 underline">対応機種を確認する</a>' },
                { icon: 'mail_outline', title: 'eSIM情報の送付タイミング', text: 'ご注文後すぐ\nメールでeSIM情報と設定方法が届きます' },
                { icon: 'add', title: 'インストール方法', text: 'QRコードまたは手動' },
                { icon: 'date_range', title: 'eSIM有効期限', text: '発行から30日以内にインストールしてください' },
                { icon: 'info', title: 'APN', text: '3gnet' },
                { icon: 'repeat', title: '容量追加', text: '不可（eSIMの再購入は可能）' }
            ],
            url_1: "https://shop.esim-market.net/products/detail.php?product_id=107",
            url_2: "https://shop.esim-market.net/products/detail.php?product_id=163"
        },
        {
            name_jp: "スリランカ",
            name_en: "Sri Lanka",
            flag_img: "flag_sri_lanka.png",
            price: 1780,
            info: [
                { icon: 'location_on', title: '対応国', text: 'スリランカ' },
                { icon: 'language', title: 'ネットワーク', text: 'Etisalat Lanka、Hutchison Telecom' },
                { icon: 'rss_feed', title: '通信速度', text: '4G LTE' },
                { icon: 'access_time', title: '利用開始のタイミング', text: '現地に到着後すぐ' },
                { icon: 'phone', title: '電話/SMS', text: '利用不可\nアプリでVoIP通話は可能（LINEなど）' },
                { icon: 'phonelink_ring', title: '対応端末', text: 'eSIM対応のスマートフォン・タブレットなど\n<a href="https://esim-market.net/#check" class="text-blue-500 underline">対応機種を確認する</a>' },
                { icon: 'mail_outline', title: 'eSIM情報の送付タイミング', text: 'ご注文後すぐ\nメールでeSIM情報と設定方法が届きます' },
                { icon: 'add', title: 'インストール方法', text: 'QRコードまたは手動' },
                { icon: 'date_range', title: 'eSIM有効期限', text: '発行から30日以内にインストールしてください' },
                { icon: 'info', title: 'APN', text: '3gnet' },
                { icon: 'repeat', title: '容量追加', text: '不可（eSIMの再購入は可能）' }
            ],
            url_1: "https://shop.esim-market.net/products/detail.php?product_id=113",
            url_2: "https://shop.esim-market.net/products/detail.php?product_id=169"
        },
        {
            name_jp: "ネパール",
            name_en: "Nepal",
            flag_img: "flag_nepal.png",
            price: 2180,
            info: [
                { icon: 'location_on', title: '対応国', text: 'ネパール' },
                { icon: 'language', title: 'ネットワーク', text: 'Ncell' },
                { icon: 'rss_feed', title: '通信速度', text: '4G LTE' },
                { icon: 'access_time', title: '利用開始のタイミング', text: '現地に到着後すぐ' },
                { icon: 'phone', title: '電話/SMS', text: '利用不可\nアプリでVoIP通話は可能（LINEなど）' },
                { icon: 'phonelink_ring', title: '対応端末', text: 'eSIM対応のスマートフォン・タブレットなど\n<a href="https://esim-market.net/#check" class="text-blue-500 underline">対応機種を確認する</a>' },
                { icon: 'mail_outline', title: 'eSIM情報の送付タイミング', text: 'ご注文後すぐ\nメールでeSIM情報と設定方法が届きます' },
                { icon: 'add', title: 'インストール方法', text: 'QRコードまたは手動' },
                { icon: 'date_range', title: 'eSIM有効期限', text: '発行から30日以内にインストールしてください' },
                { icon: 'info', title: 'APN', text: '3gnet' },
                { icon: 'repeat', title: '容量追加', text: '不可（eSIMの再購入は可能）' }
            ],
            url_1: "https://shop.esim-market.net/products/detail.php?product_id=109",
            url_2: "https://shop.esim-market.net/products/detail.php?product_id=165"
        },
        {
            name_jp: "モルディブ",
            name_en: "Maldives",
            flag_img: "flag_maldives.png"
        }
    ],
    "ヨーロッパ": [
        {
            name_jp: "ヨーロッパ周遊",
            name_en: "Europe",
            img: "flag_europe.png",
            available: ["フランス", "ドイツ", "スペイン", "スイス", "イタリア", "イギリス", "オーストリア", "チェコ共和国", "オランダ", "ベルギー", "スウェーデン", "ハンガリー", "クロアチア", "フィンランド", "ポルトガル", "ギリシャ", "ポーランド", "ノルウェー", "デンマーク", "マルタ", "スロベニア", "ルーマニア", "アイルランド", "アイスランド", "エストニア", "リトアニア", "ラトビア", "アルバニア", "ブルガリア", "リヒテンシュタイン", "ルクセンブルク", "モルドバ", "キプロス", "スロバキア", "トルウクライナ", "イスラエル"],
            price: 980,
            info: [
                { icon: 'location_on', title: '対応国', text: 'ヨーロッパ周遊\nフランス,ドイツ,スペイン,スイス,イタリア,イギリス,オーストリア,チェコ共和国,オランダ,ベルギー,スウェーデン,ハンガリー,クロアチア,フィンランド,ポルトガル,ギリシャ,ポーランド,ノルウェー,デンマーク,マルタ,スロベニア,ルーマニア,アイルランド,アイスランド,エストニア,リトアニア,ラトビア,アルバニア,ブルガリア,リヒテンシュタイン,ルクセンブルク,モルドバ,キプロス,スロバキア,トルウクライナ,イスラエル' },
                { icon: 'language', title: 'ネットワーク', text: 'フランス：Bouygues,Orange\nドイツ：O2,T-Mobile（Telekom.de）\nスペイン：Movistar,Orange,Yoigo\nスイス：サンライズ,ソルト\nイタリア：Wind,Vodafone\nイギリス：O2, EE\nオーストリア：A1,T-Mobile\nチェコ共和国：T-Mobile,O2\nオランダ：KPN,Odido(T-mobile)\nベルギー：Telenet,ORANGE\nスウェーデン：Telenor,H3G(3 SE)\nハンガリー：Telenor（YettelT-Mobile（Telekom）\nクロアチア：Tele2（TM HR）,Hrvatski（HT HR）\nフィンランド：lElisa,DNA,Alcom\nポルトガル：Optimus,TMN/MEO,Vodafone\nギリシャ：Wind,Cosmote,Vodafone\nポーランド：Polkomtel (Plus)\nノルウェー：Teleno\nデンマーク：TDC,Telenor\nマルタ：Vodafone (Epic)\nスロベニア：Telemach\nルーマニア：Orange,DIGI\nアイルランド：Meteor Mobile, H3G\nアイスランド：Vodafone\nエストニア：Elisa,Tele2\nリトアニア：Bite,Tele2\nラトビア：Bite\nアルバニア：Vodafone\nブルガリア：Vivacom,Telenor（Yettel）\nリヒテンシュタイン：Telecom Liechtenstein\nルクセンブルク：Orange\nモルドバ：Orange\nキプロス：Epic Cyprus\nスロバキア：O2,DT\nトルウクライナ：AVEA(turk telekom）,Vodafone,Turkcell\nウクライナ：KyivStar,MTS\nイスラエル：Hot Mobile,Pelephone' },
                { icon: 'rss_feed', title: '通信速度', text: '5G / 4G LTE' },
                { icon: 'access_time', title: '利用開始のタイミング', text: '現地に到着後すぐ' },
                { icon: 'phone', title: '電話/SMS', text: '利用不可\nアプリでVoIP通話は可能（LINEなど）' },
                { icon: 'phonelink_ring', title: '対応端末', text: 'eSIM対応のスマートフォン・タブレットなど\n<a href="https://esim-market.net/#check" class="text-blue-500 underline">対応機種を確認する</a>' },
                { icon: 'mail_outline', title: 'eSIM情報の送付タイミング', text: 'ご注文後すぐ\nメールでeSIM情報と設定方法が届きます' },
                { icon: 'add', title: 'インストール方法', text: 'QRコードまたは手動' },
                { icon: 'date_range', title: 'eSIM有効期限', text: '発行から30日以内にインストールしてください' },
                { icon: 'info', title: 'APN', text: 'mobile' },
                { icon: 'repeat', title: '容量追加', text: '不可（eSIMの再購入は可能）' }
            ],
            url_1: "https://shop.esim-market.net/products/detail.php?product_id=218",
            url_2: "https://shop.esim-market.net/products/detail.php?product_id=219"
        },
        {
            name_jp: "イタリア",
            name_en: "Italy",
            flag_img: "flag_italy.png",
            price: 780,
            info: [
                { icon: 'location_on', title: '対応国', text: 'イタリア' },
                { icon: 'language', title: 'ネットワーク', text: 'Wind、Vodafone' },
                { icon: 'rss_feed', title: '通信速度', text: '5G / 4G LTE' },
                { icon: 'access_time', title: '利用開始のタイミング', text: '現地に到着後すぐ' },
                { icon: 'phone', title: '電話/SMS', text: '利用不可\nアプリでVoIP通話は可能（LINEなど）' },
                { icon: 'phonelink_ring', title: '対応端末', text: 'eSIM対応のスマートフォン・タブレットなど\n<a href="https://esim-market.net/#check" class="text-blue-500 underline">対応機種を確認する</a>' },
                { icon: 'mail_outline', title: 'eSIM情報の送付タイミング', text: 'ご注文後すぐ\nメールでeSIM情報と設定方法が届きます' },
                { icon: 'add', title: 'インストール方法', text: 'QRコードまたは手動' },
                { icon: 'date_range', title: 'eSIM有効期限', text: '発行から30日以内にインストールしてください' },
                { icon: 'info', title: 'APN', text: '3gnet' },
                { icon: 'repeat', title: '容量追加', text: '不可（eSIMの再購入は可能）' }
            ],
            url_1: "https://shop.esim-market.net/products/detail.php?product_id=129",
            url_2: "https://shop.esim-market.net/products/detail.php?product_id=185"
        },
        {
            name_jp: "フランス",
            name_en: "France",
            flag_img: "flag_france.png",
            price: 780,
            info: [
                { icon: 'location_on', title: '対応国', text: 'フランス' },
                { icon: 'language', title: 'ネットワーク', text: 'Bouygues、Orange' },
                { icon: 'rss_feed', title: '通信速度', text: '5G / 4G LTE' },
                { icon: 'access_time', title: '利用開始のタイミング', text: '現地に到着後すぐ' },
                { icon: 'phone', title: '電話/SMS', text: '利用不可\nアプリでVoIP通話は可能（LINEなど）' },
                { icon: 'phonelink_ring', title: '対応端末', text: 'eSIM対応のスマートフォン・タブレットなど\n<a href="https://esim-market.net/#check" class="text-blue-500 underline">対応機種を確認する</a>' },
                { icon: 'mail_outline', title: 'eSIM情報の送付タイミング', text: 'ご注文後すぐ\nメールでeSIM情報と設定方法が届きます' },
                { icon: 'add', title: 'インストール方法', text: 'QRコードまたは手動' },
                { icon: 'date_range', title: 'eSIM有効期限', text: '発行から30日以内にインストールしてください' },
                { icon: 'info', title: 'APN', text: '3gnet' },
                { icon: 'repeat', title: '容量追加', text: '不可（eSIMの再購入は可能）' }
            ],
            url_1: "https://shop.esim-market.net/products/detail.php?product_id=125",
            url_2: "https://shop.esim-market.net/products/detail.php?product_id=181"
        },
        {
            name_jp: "イギリス",
            name_en: "United Kingdom",
            flag_img: "flag_united_kingdom.png",
            price: 780,
            info: [
                { icon: 'location_on', title: '対応国', text: 'イギリス' },
                { icon: 'language', title: 'ネットワーク', text: 'O2、EE' },
                { icon: 'rss_feed', title: '通信速度', text: '5G / 4G LTE' },
                { icon: 'access_time', title: '利用開始のタイミング', text: '現地に到着後すぐ' },
                { icon: 'phone', title: '電話/SMS', text: '利用不可\nアプリでVoIP通話は可能（LINEなど）' },
                { icon: 'phonelink_ring', title: '対応端末', text: 'eSIM対応のスマートフォン・タブレットなど\n<a href="https://esim-market.net/#check" class="text-blue-500 underline">対応機種を確認する</a>' },
                { icon: 'mail_outline', title: 'eSIM情報の送付タイミング', text: 'ご注文後すぐ\nメールでeSIM情報と設定方法が届きます' },
                { icon: 'add', title: 'インストール方法', text: 'QRコードまたは手動' },
                { icon: 'date_range', title: 'eSIM有効期限', text: '発行から30日以内にインストールしてください' },
                { icon: 'info', title: 'APN', text: '3gnet' },
                { icon: 'repeat', title: '容量追加', text: '不可（eSIMの再購入は可能）' }
            ],
            url_1: "https://shop.esim-market.net/products/detail.php?product_id=130",
            url_2: "https://shop.esim-market.net/products/detail.php?product_id=186"
        },
        {
            name_jp: "ドイツ",
            name_en: "Germany",
            flag_img: "flag_germany.png",
            price: 780,
            info: [
                { icon: 'location_on', title: '対応国', text: 'ドイツ' },
                { icon: 'language', title: 'ネットワーク', text: 'O2、T-Mobile(Telekom.de)' },
                { icon: 'rss_feed', title: '通信速度', text: '5G / 4G LTE' },
                { icon: 'access_time', title: '利用開始のタイミング', text: '現地に到着後すぐ' },
                { icon: 'phone', title: '電話/SMS', text: '利用不可\nアプリでVoIP通話は可能（LINEなど）' },
                { icon: 'phonelink_ring', title: '対応端末', text: 'eSIM対応のスマートフォン・タブレットなど\n<a href="https://esim-market.net/#check" class="text-blue-500 underline">対応機種を確認する</a>' },
                { icon: 'mail_outline', title: 'eSIM情報の送付タイミング', text: 'ご注文後すぐ\nメールでeSIM情報と設定方法が届きます' },
                { icon: 'add', title: 'インストール方法', text: 'QRコードまたは手動' },
                { icon: 'date_range', title: 'eSIM有効期限', text: '発行から30日以内にインストールしてください' },
                { icon: 'info', title: 'APN', text: '3gnet' },
                { icon: 'repeat', title: '容量追加', text: '不可（eSIMの再購入は可能）' }
            ],
            url_1: "https://shop.esim-market.net/products/detail.php?product_id=126",
            url_2: "https://shop.esim-market.net/products/detail.php?product_id=182"
        },
        {
            name_jp: "スペイン",
            name_en: "Spain",
            flag_img: "flag_spain.png",
            price: 780,
            info: [
                { icon: 'location_on', title: '対応国', text: 'スペイン' },
                { icon: 'language', title: 'ネットワーク', text: 'Movistar、Orange、Yoigo' },
                { icon: 'rss_feed', title: '通信速度', text: '5G / 4G LTE' },
                { icon: 'access_time', title: '利用開始のタイミング', text: '現地に到着後すぐ' },
                { icon: 'phone', title: '電話/SMS', text: '利用不可\nアプリでVoIP通話は可能（LINEなど）' },
                { icon: 'phonelink_ring', title: '対応端末', text: 'eSIM対応のスマートフォン・タブレットなど\n<a href="https://esim-market.net/#check" class="text-blue-500 underline">対応機種を確認する</a>' },
                { icon: 'mail_outline', title: 'eSIM情報の送付タイミング', text: 'ご注文後すぐ\nメールでeSIM情報と設定方法が届きます' },
                { icon: 'add', title: 'インストール方法', text: 'QRコードまたは手動' },
                { icon: 'date_range', title: 'eSIM有効期限', text: '発行から30日以内にインストールしてください' },
                { icon: 'info', title: 'APN', text: '3gnet' },
                { icon: 'repeat', title: '容量追加', text: '不可（eSIMの再購入は可能）' }
            ],
            url_1: "https://shop.esim-market.net/products/detail.php?product_id=127",
            url_2: "https://shop.esim-market.net/products/detail.php?product_id=183"
        },
        {
            name_jp: "ポルトガル",
            name_en: "Portugal",
            flag_img: "flag_portugal.png",
            price: 780,
            info: [
                { icon: 'location_on', title: '対応国', text: 'ポルトガル' },
                { icon: 'language', title: 'ネットワーク', text: 'Optimus、TMN/MEO、Vodafone' },
                { icon: 'rss_feed', title: '通信速度', text: '5G / 4G LTE' },
                { icon: 'access_time', title: '利用開始のタイミング', text: '現地に到着後すぐ' },
                { icon: 'phone', title: '電話/SMS', text: '利用不可\nアプリでVoIP通話は可能（LINEなど）' },
                { icon: 'phonelink_ring', title: '対応端末', text: 'eSIM対応のスマートフォン・タブレットなど\n<a href="https://esim-market.net/#check" class="text-blue-500 underline">対応機種を確認する</a>' },
                { icon: 'mail_outline', title: 'eSIM情報の送付タイミング', text: 'ご注文後すぐ\nメールでeSIM情報と設定方法が届きます' },
                { icon: 'add', title: 'インストール方法', text: 'QRコードまたは手動' },
                { icon: 'date_range', title: 'eSIM有効期限', text: '発行から30日以内にインストールしてください' },
                { icon: 'info', title: 'APN', text: '3gnet' },
                { icon: 'repeat', title: '容量追加', text: '不可（eSIMの再購入は可能）' }
            ],
            url_1: "https://shop.esim-market.net/products/detail.php?product_id=139",
            url_2: "https://shop.esim-market.net/products/detail.php?product_id=195"
        },
        {
            name_jp: "スイス",
            name_en: "Switzerland",
            flag_img: "flag_switzerland.png",
            price: 780,
            info: [
                { icon: 'location_on', title: '対応国', text: 'スイス' },
                { icon: 'language', title: 'ネットワーク', text: 'Sunrise、Salt' },
                { icon: 'rss_feed', title: '通信速度', text: '5G / 4G LTE' },
                { icon: 'access_time', title: '利用開始のタイミング', text: '現地に到着後すぐ' },
                { icon: 'phone', title: '電話/SMS', text: '利用不可\nアプリでVoIP通話は可能（LINEなど）' },
                { icon: 'phonelink_ring', title: '対応端末', text: 'eSIM対応のスマートフォン・タブレットなど\n<a href="https://esim-market.net/#check" class="text-blue-500 underline">対応機種を確認する</a>' },
                { icon: 'mail_outline', title: 'eSIM情報の送付タイミング', text: 'ご注文後すぐ\nメールでeSIM情報と設定方法が届きます' },
                { icon: 'add', title: 'インストール方法', text: 'QRコードまたは手動' },
                { icon: 'date_range', title: 'eSIM有効期限', text: '発行から30日以内にインストールしてください' },
                { icon: 'info', title: 'APN', text: '3gnet' },
                { icon: 'repeat', title: '容量追加', text: '不可（eSIMの再購入は可能）' }
            ],
            url_1: "https://shop.esim-market.net/products/detail.php?product_id=128",
            url_2: "https://shop.esim-market.net/products/detail.php?product_id=184"
        },
        {
            name_jp: "オーストリア",
            name_en: "Austria",
            flag_img: "flag_austria.png",
            price: 780,
            info: [
                { icon: 'location_on', title: '対応国', text: 'オーストリア' },
                { icon: 'language', title: 'ネットワーク', text: 'A1、T-Mobile' },
                { icon: 'rss_feed', title: '通信速度', text: '5G / 4G LTE' },
                { icon: 'access_time', title: '利用開始のタイミング', text: '現地に到着後すぐ' },
                { icon: 'phone', title: '電話/SMS', text: '利用不可\nアプリでVoIP通話は可能（LINEなど）' },
                { icon: 'phonelink_ring', title: '対応端末', text: 'eSIM対応のスマートフォン・タブレットなど\n<a href="https://esim-market.net/#check" class="text-blue-500 underline">対応機種を確認する</a>' },
                { icon: 'mail_outline', title: 'eSIM情報の送付タイミング', text: 'ご注文後すぐ\nメールでeSIM情報と設定方法が届きます' },
                { icon: 'add', title: 'インストール方法', text: 'QRコードまたは手動' },
                { icon: 'date_range', title: 'eSIM有効期限', text: '発行から30日以内にインストールしてください' },
                { icon: 'info', title: 'APN', text: '3gnet' },
                { icon: 'repeat', title: '容量追加', text: '不可（eSIMの再購入は可能）' }
            ],
            url_1: "https://shop.esim-market.net/products/detail.php?product_id=131",
            url_2: "https://shop.esim-market.net/products/detail.php?product_id=187"
        },
        {
            name_jp: "チェコ共和国",
            name_en: "Czechia",
            flag_img: "flag_czech_republic.png",
            price: 780,
            info: [
                { icon: 'location_on', title: '対応国', text: 'チェコ共和国' },
                { icon: 'language', title: 'ネットワーク', text: 'O2、T-Mobile' },
                { icon: 'rss_feed', title: '通信速度', text: '5G / 4G LTE' },
                { icon: 'access_time', title: '利用開始のタイミング', text: '現地に到着後すぐ' },
                { icon: 'phone', title: '電話/SMS', text: '利用不可\nアプリでVoIP通話は可能（LINEなど）' },
                { icon: 'phonelink_ring', title: '対応端末', text: 'eSIM対応のスマートフォン・タブレットなど\n<a href="https://esim-market.net/#check" class="text-blue-500 underline">対応機種を確認する</a>' },
                { icon: 'mail_outline', title: 'eSIM情報の送付タイミング', text: 'ご注文後すぐ\nメールでeSIM情報と設定方法が届きます' },
                { icon: 'add', title: 'インストール方法', text: 'QRコードまたは手動' },
                { icon: 'date_range', title: 'eSIM有効期限', text: '発行から30日以内にインストールしてください' },
                { icon: 'info', title: 'APN', text: '3gnet' },
                { icon: 'repeat', title: '容量追加', text: '不可（eSIMの再購入は可能）' }
            ],
            url_1: "https://shop.esim-market.net/products/detail.php?product_id=132",
            url_2: "https://shop.esim-market.net/products/detail.php?product_id=188"
        },
        {
            name_jp: "オランダ",
            name_en: "Netherlands",
            flag_img: "flag_netherlands.png",
            price: 780,
            info: [
                { icon: 'location_on', title: '対応国', text: 'オランダ' },
                { icon: 'language', title: 'ネットワーク', text: 'KPN、Odido(T-mobile)' },
                { icon: 'rss_feed', title: '通信速度', text: '5G / 4G LTE' },
                { icon: 'access_time', title: '利用開始のタイミング', text: '現地に到着後すぐ' },
                { icon: 'phone', title: '電話/SMS', text: '利用不可\nアプリでVoIP通話は可能（LINEなど）' },
                { icon: 'phonelink_ring', title: '対応端末', text: 'eSIM対応のスマートフォン・タブレットなど\n<a href="https://esim-market.net/#check" class="text-blue-500 underline">対応機種を確認する</a>' },
                { icon: 'mail_outline', title: 'eSIM情報の送付タイミング', text: 'ご注文後すぐ\nメールでeSIM情報と設定方法が届きます' },
                { icon: 'add', title: 'インストール方法', text: 'QRコードまたは手動' },
                { icon: 'date_range', title: 'eSIM有効期限', text: '発行から30日以内にインストールしてください' },
                { icon: 'info', title: 'APN', text: '3gnet' },
                { icon: 'repeat', title: '容量追加', text: '不可（eSIMの再購入は可能）' }
            ],
            url_1: "https://shop.esim-market.net/products/detail.php?product_id=133",
            url_2: "https://shop.esim-market.net/products/detail.php?product_id=189"
        },
        {
            name_jp: "ベルギー",
            name_en: "Belgium",
            flag_img: "flag_belgium.png",
            price: 780,
            info: [
                { icon: 'location_on', title: '対応国', text: 'ベルギー' },
                { icon: 'language', title: 'ネットワーク', text: 'Telenet、ORANGE' },
                { icon: 'rss_feed', title: '通信速度', text: '5G / 4G LTE' },
                { icon: 'access_time', title: '利用開始のタイミング', text: '現地に到着後すぐ' },
                { icon: 'phone', title: '電話/SMS', text: '利用不可\nアプリでVoIP通話は可能（LINEなど）' },
                { icon: 'phonelink_ring', title: '対応端末', text: 'eSIM対応のスマートフォン・タブレットなど\n<a href="https://esim-market.net/#check" class="text-blue-500 underline">対応機種を確認する</a>' },
                { icon: 'mail_outline', title: 'eSIM情報の送付タイミング', text: 'ご注文後すぐ\nメールでeSIM情報と設定方法が届きます' },
                { icon: 'add', title: 'インストール方法', text: 'QRコードまたは手動' },
                { icon: 'date_range', title: 'eSIM有効期限', text: '発行から30日以内にインストールしてください' },
                { icon: 'info', title: 'APN', text: '3gnet' },
                { icon: 'repeat', title: '容量追加', text: '不可（eSIMの再購入は可能）' }
            ],
            url_1: "https://shop.esim-market.net/products/detail.php?product_id=134",
            url_2: "https://shop.esim-market.net/products/detail.php?product_id=190"
        },
        {
            name_jp: "デンマーク",
            name_en: "Denmark",
            flag_img: "flag_denmark.png",
            price: 780,
            info: [
                { icon: 'location_on', title: '対応国', text: 'デンマーク' },
                { icon: 'language', title: 'ネットワーク', text: 'Telenor、TDC' },
                { icon: 'rss_feed', title: '通信速度', text: '5G / 4G LTE' },
                { icon: 'access_time', title: '利用開始のタイミング', text: '現地に到着後すぐ' },
                { icon: 'phone', title: '電話/SMS', text: '利用不可\nアプリでVoIP通話は可能（LINEなど）' },
                { icon: 'phonelink_ring', title: '対応端末', text: 'eSIM対応のスマートフォン・タブレットなど\n<a href="https://esim-market.net/#check" class="text-blue-500 underline">対応機種を確認する</a>' },
                { icon: 'mail_outline', title: 'eSIM情報の送付タイミング', text: 'ご注文後すぐ\nメールでeSIM情報と設定方法が届きます' },
                { icon: 'add', title: 'インストール方法', text: 'QRコードまたは手動' },
                { icon: 'date_range', title: 'eSIM有効期限', text: '発行から30日以内にインストールしてください' },
                { icon: 'info', title: 'APN', text: '3gnet' },
                { icon: 'repeat', title: '容量追加', text: '不可（eSIMの再購入は可能）' }
            ],
            url_1: "https://shop.esim-market.net/products/detail.php?product_id=143",
            url_2: "https://shop.esim-market.net/products/detail.php?product_id=199"
        },
        {
            name_jp: "ポーランド",
            name_en: "Poland",
            flag_img: "flag_poland.png",
            price: 780,
            info: [
                { icon: 'location_on', title: '対応国', text: 'ポーランド' },
                { icon: 'language', title: 'ネットワーク', text: 'Polkomtel (Plus)' },
                { icon: 'rss_feed', title: '通信速度', text: '5G / 4G LTE' },
                { icon: 'access_time', title: '利用開始のタイミング', text: '現地に到着後すぐ' },
                { icon: 'phone', title: '電話/SMS', text: '利用不可\nアプリでVoIP通話は可能（LINEなど）' },
                { icon: 'phonelink_ring', title: '対応端末', text: 'eSIM対応のスマートフォン・タブレットなど\n<a href="https://esim-market.net/#check" class="text-blue-500 underline">対応機種を確認する</a>' },
                { icon: 'mail_outline', title: 'eSIM情報の送付タイミング', text: 'ご注文後すぐ\nメールでeSIM情報と設定方法が届きます' },
                { icon: 'add', title: 'インストール方法', text: 'QRコードまたは手動' },
                { icon: 'date_range', title: 'eSIM有効期限', text: '発行から30日以内にインストールしてください' },
                { icon: 'info', title: 'APN', text: '3gnet' },
                { icon: 'repeat', title: '容量追加', text: '不可（eSIMの再購入は可能）' }
            ],
            url_1: "https://shop.esim-market.net/products/detail.php?product_id=141",
            url_2: "https://shop.esim-market.net/products/detail.php?product_id=197"
        },
        {
            name_jp: "ハンガリー",
            name_en: "Hungary",
            flag_img: "flag_hungary.png",
            price: 780,
            info: [
                { icon: 'location_on', title: '対応国', text: 'ハンガリー' },
                { icon: 'language', title: 'ネットワーク', text: 'Telenor(Yettel)、T-Mobile(Telekom)' },
                { icon: 'rss_feed', title: '通信速度', text: '5G / 4G LTE' },
                { icon: 'access_time', title: '利用開始のタイミング', text: '現地に到着後すぐ' },
                { icon: 'phone', title: '電話/SMS', text: '利用不可\nアプリでVoIP通話は可能（LINEなど）' },
                { icon: 'phonelink_ring', title: '対応端末', text: 'eSIM対応のスマートフォン・タブレットなど\n<a href="https://esim-market.net/#check" class="text-blue-500 underline">対応機種を確認する</a>' },
                { icon: 'mail_outline', title: 'eSIM情報の送付タイミング', text: 'ご注文後すぐ\nメールでeSIM情報と設定方法が届きます' },
                { icon: 'add', title: 'インストール方法', text: 'QRコードまたは手動' },
                { icon: 'date_range', title: 'eSIM有効期限', text: '発行から30日以内にインストールしてください' },
                { icon: 'info', title: 'APN', text: '3gnet' },
                { icon: 'repeat', title: '容量追加', text: '不可（eSIMの再購入は可能）' }
            ],
            url_1: "https://shop.esim-market.net/products/detail.php?product_id=136",
            url_2: "https://shop.esim-market.net/products/detail.php?product_id=192"
        },
        {
            name_jp: "クロアチア",
            name_en: "Croatia",
            flag_img: "flag_croatia.png",
            price: 780,
            info: [
                { icon: 'location_on', title: '対応国', text: 'クロアチア' },
                { icon: 'language', title: 'ネットワーク', text: 'Tele2 (TM HR)、Hrvatski (HT HR)-Mobile(Telekom)' },
                { icon: 'rss_feed', title: '通信速度', text: '5G / 4G LTE' },
                { icon: 'access_time', title: '利用開始のタイミング', text: '現地に到着後すぐ' },
                { icon: 'phone', title: '電話/SMS', text: '利用不可\nアプリでVoIP通話は可能（LINEなど）' },
                { icon: 'phonelink_ring', title: '対応端末', text: 'eSIM対応のスマートフォン・タブレットなど\n<a href="https://esim-market.net/#check" class="text-blue-500 underline">対応機種を確認する</a>' },
                { icon: 'mail_outline', title: 'eSIM情報の送付タイミング', text: 'ご注文後すぐ\nメールでeSIM情報と設定方法が届きます' },
                { icon: 'add', title: 'インストール方法', text: 'QRコードまたは手動' },
                { icon: 'date_range', title: 'eSIM有効期限', text: '発行から30日以内にインストールしてください' },
                { icon: 'info', title: 'APN', text: '3gnet' },
                { icon: 'repeat', title: '容量追加', text: '不可（eSIMの再購入は可能）' }
            ],
            url_1: "https://shop.esim-market.net/products/detail.php?product_id=137",
            url_2: "https://shop.esim-market.net/products/detail.php?product_id=193"
        },
        {
            name_jp: "スロベニア",
            name_en: "Slovenia",
            flag_img: "flag_slovenia.png",
            price: 780,
            info: [
                { icon: 'location_on', title: '対応国', text: 'スロベニア' },
                { icon: 'language', title: 'ネットワーク', text: 'Telemach' },
                { icon: 'rss_feed', title: '通信速度', text: '5G / 4G LTE' },
                { icon: 'access_time', title: '利用開始のタイミング', text: '現地に到着後すぐ' },
                { icon: 'phone', title: '電話/SMS', text: '利用不可\nアプリでVoIP通話は可能（LINEなど）' },
                { icon: 'phonelink_ring', title: '対応端末', text: 'eSIM対応のスマートフォン・タブレットなど\n<a href="https://esim-market.net/#check" class="text-blue-500 underline">対応機種を確認する</a>' },
                { icon: 'mail_outline', title: 'eSIM情報の送付タイミング', text: 'ご注文後すぐ\nメールでeSIM情報と設定方法が届きます' },
                { icon: 'add', title: 'インストール方法', text: 'QRコードまたは手動' },
                { icon: 'date_range', title: 'eSIM有効期限', text: '発行から30日以内にインストールしてください' },
                { icon: 'info', title: 'APN', text: '3gnet' },
                { icon: 'repeat', title: '容量追加', text: '不可（eSIMの再購入は可能）' }
            ],
            url_1: "https://shop.esim-market.net/products/detail.php?product_id=145",
            url_2: "https://shop.esim-market.net/products/detail.php?product_id=201"
        },
        {
            name_jp: "ルーマニア",
            name_en: "Romania",
            flag_img: "flag_romania.png",
            price: 780,
            info: [
                { icon: 'location_on', title: '対応国', text: 'ルーマニア' },
                { icon: 'language', title: 'ネットワーク', text: 'Orange、DIGI' },
                { icon: 'rss_feed', title: '通信速度', text: '5G / 4G LTE' },
                { icon: 'access_time', title: '利用開始のタイミング', text: '現地に到着後すぐ' },
                { icon: 'phone', title: '電話/SMS', text: '利用不可\nアプリでVoIP通話は可能（LINEなど）' },
                { icon: 'phonelink_ring', title: '対応端末', text: 'eSIM対応のスマートフォン・タブレットなど\n<a href="https://esim-market.net/#check" class="text-blue-500 underline">対応機種を確認する</a>' },
                { icon: 'mail_outline', title: 'eSIM情報の送付タイミング', text: 'ご注文後すぐ\nメールでeSIM情報と設定方法が届きます' },
                { icon: 'add', title: 'インストール方法', text: 'QRコードまたは手動' },
                { icon: 'date_range', title: 'eSIM有効期限', text: '発行から30日以内にインストールしてください' },
                { icon: 'info', title: 'APN', text: '3gnet' },
                { icon: 'repeat', title: '容量追加', text: '不可（eSIMの再購入は可能）' }
            ],
            url_1: "https://shop.esim-market.net/products/detail.php?product_id=146",
            url_2: "https://shop.esim-market.net/products/detail.php?product_id=202"
        },
        {
            name_jp: "ギリシャ",
            name_en: "Greece",
            flag_img: "flag_greece.png",
            price: 780,
            info: [
                { icon: 'location_on', title: '対応国', text: 'ギリシャ' },
                { icon: 'language', title: 'ネットワーク', text: 'Wind、Cosmote、Vodafone' },
                { icon: 'rss_feed', title: '通信速度', text: '5G / 4G LTE' },
                { icon: 'access_time', title: '利用開始のタイミング', text: '現地に到着後すぐ' },
                { icon: 'phone', title: '電話/SMS', text: '利用不可\nアプリでVoIP通話は可能（LINEなど）' },
                { icon: 'phonelink_ring', title: '対応端末', text: 'eSIM対応のスマートフォン・タブレットなど\n<a href="https://esim-market.net/#check" class="text-blue-500 underline">対応機種を確認する</a>' },
                { icon: 'mail_outline', title: 'eSIM情報の送付タイミング', text: 'ご注文後すぐ\nメールでeSIM情報と設定方法が届きます' },
                { icon: 'add', title: 'インストール方法', text: 'QRコードまたは手動' },
                { icon: 'date_range', title: 'eSIM有効期限', text: '発行から30日以内にインストールしてください' },
                { icon: 'info', title: 'APN', text: '3gnet' },
                { icon: 'repeat', title: '容量追加', text: '不可（eSIMの再購入は可能）' }
            ],
            url_1: "https://shop.esim-market.net/products/detail.php?product_id=140",
            url_2: "https://shop.esim-market.net/products/detail.php?product_id=196"
        },
        {
            name_jp: "マルタ",
            name_en: "Malta",
            flag_img: "flag_malta.png",
            price: 780,
            info: [
                { icon: 'location_on', title: '対応国', text: 'マルタ' },
                { icon: 'language', title: 'ネットワーク', text: 'Vodafone (Epic)' },
                { icon: 'rss_feed', title: '通信速度', text: '5G / 4G LTE' },
                { icon: 'access_time', title: '利用開始のタイミング', text: '現地に到着後すぐ' },
                { icon: 'phone', title: '電話/SMS', text: '利用不可\nアプリでVoIP通話は可能（LINEなど）' },
                { icon: 'phonelink_ring', title: '対応端末', text: 'eSIM対応のスマートフォン・タブレットなど\n<a href="https://esim-market.net/#check" class="text-blue-500 underline">対応機種を確認する</a>' },
                { icon: 'mail_outline', title: 'eSIM情報の送付タイミング', text: 'ご注文後すぐ\nメールでeSIM情報と設定方法が届きます' },
                { icon: 'add', title: 'インストール方法', text: 'QRコードまたは手動' },
                { icon: 'date_range', title: 'eSIM有効期限', text: '発行から30日以内にインストールしてください' },
                { icon: 'info', title: 'APN', text: '3gnet' },
                { icon: 'repeat', title: '容量追加', text: '不可（eSIMの再購入は可能）' }
            ],
            url_1: "https://shop.esim-market.net/products/detail.php?product_id=144",
            url_2: "https://shop.esim-market.net/products/detail.php?product_id=200"
        },
        {
            name_jp: "アルゼンチン",
            name_en: "Argentina",
            flag_img: "flag_argentina.png",
            price: 780,
            info: [
                { icon: 'location_on', title: '対応国', text: 'アルゼンチン' },
                { icon: 'language', title: 'ネットワーク', text: '「Personal」or 「AMX/Claro」' },
                { icon: 'rss_feed', title: '通信速度', text: '4G LTE' },
                { icon: 'access_time', title: '利用開始のタイミング', text: '現地に到着後すぐ' },
                { icon: 'phone', title: '電話/SMS', text: '利用不可\nアプリでVoIP通話は可能（LINEなど）' },
                { icon: 'phonelink_ring', title: '対応端末', text: 'eSIM対応のスマートフォン・タブレットなど\n<a href="https://esim-market.net/#check" class="text-blue-500 underline">対応機種を確認する</a>' },
                { icon: 'mail_outline', title: 'eSIM情報の送付タイミング', text: 'ご注文後すぐ\nメールでeSIM情報と設定方法が届きます' },
                { icon: 'add', title: 'インストール方法', text: 'QRコードまたは手動' },
                { icon: 'date_range', title: 'eSIM有効期限', text: '発行から30日以内にインストールしてください' },
                { icon: 'info', title: 'APN', text: '3gnet' },
                { icon: 'repeat', title: '容量追加', text: '不可（eSIMの再購入は可能）' }
            ],
            url_1: "https://shop.esim-market.net/products/detail.php?product_id=147",
            url_2: "https://shop.esim-market.net/products/detail.php?product_id=203"
        },
        {
            name_jp: "アイルランド",
            name_en: "Ireland",
            flag_img: "flag_ireland.png",
            price: 780,
            info: [
                { icon: 'location_on', title: '対応国', text: 'アイルランド' },
                { icon: 'language', title: 'ネットワーク', text: 'Meteor Mobile、H3G' },
                { icon: 'rss_feed', title: '通信速度', text: '5G / 4G LTE' },
                { icon: 'access_time', title: '利用開始のタイミング', text: '現地に到着後すぐ' },
                { icon: 'phone', title: '電話/SMS', text: '利用不可\nアプリでVoIP通話は可能（LINEなど）' },
                { icon: 'phonelink_ring', title: '対応端末', text: 'eSIM対応のスマートフォン・タブレットなど\n<a href="https://esim-market.net/#check" class="text-blue-500 underline">対応機種を確認する</a>' },
                { icon: 'mail_outline', title: 'eSIM情報の送付タイミング', text: 'ご注文後すぐ\nメールでeSIM情報と設定方法が届きます' },
                { icon: 'add', title: 'インストール方法', text: 'QRコードまたは手動' },
                { icon: 'date_range', title: 'eSIM有効期限', text: '発行から30日以内にインストールしてください' },
                { icon: 'info', title: 'APN', text: '3gnet' },
                { icon: 'repeat', title: '容量追加', text: '不可（eSIMの再購入は可能）' }
            ],
            url_1: "https://shop.esim-market.net/products/detail.php?product_id=148",
            url_2: "https://shop.esim-market.net/products/detail.php?product_id=204"
        },
        {
            name_jp: "アイスランド",
            name_en: "Iceland",
            flag_img: "flag_iceland.png",
            price: 780,
            info: [
                { icon: 'location_on', title: '対応国', text: 'アイスランド' },
                { icon: 'language', title: 'ネットワーク', text: 'Vodafone' },
                { icon: 'rss_feed', title: '通信速度', text: '5G / 4G LTE' },
                { icon: 'access_time', title: '利用開始のタイミング', text: '現地に到着後すぐ' },
                { icon: 'phone', title: '電話/SMS', text: '利用不可\nアプリでVoIP通話は可能（LINEなど）' },
                { icon: 'phonelink_ring', title: '対応端末', text: 'eSIM対応のスマートフォン・タブレットなど\n<a href="https://esim-market.net/#check" class="text-blue-500 underline">対応機種を確認する</a>' },
                { icon: 'mail_outline', title: 'eSIM情報の送付タイミング', text: 'ご注文後すぐ\nメールでeSIM情報と設定方法が届きます' },
                { icon: 'add', title: 'インストール方法', text: 'QRコードまたは手動' },
                { icon: 'date_range', title: 'eSIM有効期限', text: '発行から30日以内にインストールしてください' },
                { icon: 'info', title: 'APN', text: '3gnet' },
                { icon: 'repeat', title: '容量追加', text: '不可（eSIMの再購入は可能）' }
            ],
            url_1: "https://shop.esim-market.net/products/detail.php?product_id=149",
            url_2: "https://shop.esim-market.net/products/detail.php?product_id=205"
        },
        {
            name_jp: "フィンランド",
            name_en: "Finland",
            flag_img: "flag_finland.png",
            price: 780,
            info: [
                { icon: 'location_on', title: '対応国', text: 'フィンランド' },
                { icon: 'language', title: 'ネットワーク', text: 'Elisa、DNA、Alcom' },
                { icon: 'rss_feed', title: '通信速度', text: '5G / 4G LTE' },
                { icon: 'access_time', title: '利用開始のタイミング', text: '現地に到着後すぐ' },
                { icon: 'phone', title: '電話/SMS', text: '利用不可\nアプリでVoIP通話は可能（LINEなど）' },
                { icon: 'phonelink_ring', title: '対応端末', text: 'eSIM対応のスマートフォン・タブレットなど\n<a href="https://esim-market.net/#check" class="text-blue-500 underline">対応機種を確認する</a>' },
                { icon: 'mail_outline', title: 'eSIM情報の送付タイミング', text: 'ご注文後すぐ\nメールでeSIM情報と設定方法が届きます' },
                { icon: 'add', title: 'インストール方法', text: 'QRコードまたは手動' },
                { icon: 'date_range', title: 'eSIM有効期限', text: '発行から30日以内にインストールしてください' },
                { icon: 'info', title: 'APN', text: '3gnet' },
                { icon: 'repeat', title: '容量追加', text: '不可（eSIMの再購入は可能）' }
            ],
            url_1: "https://shop.esim-market.net/products/detail.php?product_id=138",
            url_2: "https://shop.esim-market.net/products/detail.php?product_id=194"
        },
        {
            name_jp: "ノルウェー",
            name_en: "Norway",
            flag_img: "flag_norway.png",
            price: 780,
            info: [
                { icon: 'location_on', title: '対応国', text: 'ノルウェー' },
                { icon: 'language', title: 'ネットワーク', text: 'Teleno' },
                { icon: 'rss_feed', title: '通信速度', text: '5G / 4G LTE' },
                { icon: 'access_time', title: '利用開始のタイミング', text: '現地に到着後すぐ' },
                { icon: 'phone', title: '電話/SMS', text: '利用不可\nアプリでVoIP通話は可能（LINEなど）' },
                { icon: 'phonelink_ring', title: '対応端末', text: 'eSIM対応のスマートフォン・タブレットなど\n<a href="https://esim-market.net/#check" class="text-blue-500 underline">対応機種を確認する</a>' },
                { icon: 'mail_outline', title: 'eSIM情報の送付タイミング', text: 'ご注文後すぐ\nメールでeSIM情報と設定方法が届きます' },
                { icon: 'add', title: 'インストール方法', text: 'QRコードまたは手動' },
                { icon: 'date_range', title: 'eSIM有効期限', text: '発行から30日以内にインストールしてください' },
                { icon: 'info', title: 'APN', text: '3gnet' },
                { icon: 'repeat', title: '容量追加', text: '不可（eSIMの再購入は可能）' }
            ],
            url_1: "https://shop.esim-market.net/products/detail.php?product_id=142",
            url_2: "https://shop.esim-market.net/products/detail.php?product_id=198"
        },
        {
            name_jp: "スウェーデン",
            name_en: "Sweden",
            flag_img: "flag_sweden.png",
            price: 780,
            info: [
                { icon: 'location_on', title: '対応国', text: 'スウェーデン' },
                { icon: 'language', title: 'ネットワーク', text: 'Telenor、H3G(3 SE)' },
                { icon: 'rss_feed', title: '通信速度', text: '5G / 4G LTE' },
                { icon: 'access_time', title: '利用開始のタイミング', text: '現地に到着後すぐ' },
                { icon: 'phone', title: '電話/SMS', text: '利用不可\nアプリでVoIP通話は可能（LINEなど）' },
                { icon: 'phonelink_ring', title: '対応端末', text: 'eSIM対応のスマートフォン・タブレットなど\n<a href="https://esim-market.net/#check" class="text-blue-500 underline">対応機種を確認する</a>' },
                { icon: 'mail_outline', title: 'eSIM情報の送付タイミング', text: 'ご注文後すぐ\nメールでeSIM情報と設定方法が届きます' },
                { icon: 'add', title: 'インストール方法', text: 'QRコードまたは手動' },
                { icon: 'date_range', title: 'eSIM有効期限', text: '発行から30日以内にインストールしてください' },
                { icon: 'info', title: 'APN', text: '3gnet' },
                { icon: 'repeat', title: '容量追加', text: '不可（eSIMの再購入は可能）' }
            ],
            url_1: "https://shop.esim-market.net/products/detail.php?product_id=135",
            url_2: "https://shop.esim-market.net/products/detail.php?product_id=191"
        },
        {
            name_jp: "エストニア",
            name_en: "Estonia",
            flag_img: "flag_estonia.png",
            price: 780,
            info: [
                { icon: 'location_on', title: '対応国', text: 'エストニア' },
                { icon: 'language', title: 'ネットワーク', text: 'Elisa、Tele2' },
                { icon: 'rss_feed', title: '通信速度', text: '5G / 4G LTE' },
                { icon: 'access_time', title: '利用開始のタイミング', text: '現地に到着後すぐ' },
                { icon: 'phone', title: '電話/SMS', text: '利用不可\nアプリでVoIP通話は可能（LINEなど）' },
                { icon: 'phonelink_ring', title: '対応端末', text: 'eSIM対応のスマートフォン・タブレットなど\n<a href="https://esim-market.net/#check" class="text-blue-500 underline">対応機種を確認する</a>' },
                { icon: 'mail_outline', title: 'eSIM情報の送付タイミング', text: 'ご注文後すぐ\nメールでeSIM情報と設定方法が届きます' },
                { icon: 'add', title: 'インストール方法', text: 'QRコードまたは手動' },
                { icon: 'date_range', title: 'eSIM有効期限', text: '発行から30日以内にインストールしてください' },
                { icon: 'info', title: 'APN', text: '3gnet' },
                { icon: 'repeat', title: '容量追加', text: '不可（eSIMの再購入は可能）' }
            ],
            url_1: "https://shop.esim-market.net/products/detail.php?product_id=150",
            url_2: "https://shop.esim-market.net/products/detail.php?product_id=206"
        },
        {
            name_jp: "ラトビア",
            name_en: "Latvia",
            flag_img: "flag_latvia.png",
            price: 780,
            info: [
                { icon: 'location_on', title: '対応国', text: 'ラトビア' },
                { icon: 'language', title: 'ネットワーク', text: 'Bite' },
                { icon: 'rss_feed', title: '通信速度', text: '5G / 4G LTE' },
                { icon: 'access_time', title: '利用開始のタイミング', text: '現地に到着後すぐ' },
                { icon: 'phone', title: '電話/SMS', text: '利用不可\nアプリでVoIP通話は可能（LINEなど）' },
                { icon: 'phonelink_ring', title: '対応端末', text: 'eSIM対応のスマートフォン・タブレットなど\n<a href="https://esim-market.net/#check" class="text-blue-500 underline">対応機種を確認する</a>' },
                { icon: 'mail_outline', title: 'eSIM情報の送付タイミング', text: 'ご注文後すぐ\nメールでeSIM情報と設定方法が届きます' },
                { icon: 'add', title: 'インストール方法', text: 'QRコードまたは手動' },
                { icon: 'date_range', title: 'eSIM有効期限', text: '発行から30日以内にインストールしてください' },
                { icon: 'info', title: 'APN', text: '3gnet' },
                { icon: 'repeat', title: '容量追加', text: '不可（eSIMの再購入は可能）' }
            ],
            url_1: "https://shop.esim-market.net/products/detail.php?product_id=152",
            url_2: "https://shop.esim-market.net/products/detail.php?product_id=208"
        },
        {
            name_jp: "リトアニア",
            name_en: "Lithuania",
            flag_img: "flag_lithuania.png",
            price: 780,
            info: [
                { icon: 'location_on', title: '対応国', text: 'リトアニア' },
                { icon: 'language', title: 'ネットワーク', text: 'Bite、Tele2' },
                { icon: 'rss_feed', title: '通信速度', text: '5G / 4G LTE' },
                { icon: 'access_time', title: '利用開始のタイミング', text: '現地に到着後すぐ' },
                { icon: 'phone', title: '電話/SMS', text: '利用不可\nアプリでVoIP通話は可能（LINEなど）' },
                { icon: 'phonelink_ring', title: '対応端末', text: 'eSIM対応のスマートフォン・タブレットなど\n<a href="https://esim-market.net/#check" class="text-blue-500 underline">対応機種を確認する</a>' },
                { icon: 'mail_outline', title: 'eSIM情報の送付タイミング', text: 'ご注文後すぐ\nメールでeSIM情報と設定方法が届きます' },
                { icon: 'add', title: 'インストール方法', text: 'QRコードまたは手動' },
                { icon: 'date_range', title: 'eSIM有効期限', text: '発行から30日以内にインストールしてください' },
                { icon: 'info', title: 'APN', text: '3gnet' },
                { icon: 'repeat', title: '容量追加', text: '不可（eSIMの再購入は可能）' }
            ],
            url_1: "https://shop.esim-market.net/products/detail.php?product_id=151",
            url_2: "https://shop.esim-market.net/products/detail.php?product_id=207"
        },
        {
            name_jp: "ロシア連邦",
            name_en: "Russia",
            flag_img: "flag_russia.png",
            price: 780,
            info: [
                { icon: 'location_on', title: '対応国', text: 'ロシア' },
                { icon: 'language', title: 'ネットワーク', text: 'VimpelCom(beeline)' },
                { icon: 'rss_feed', title: '通信速度', text: '5G / 4G LTE' },
                { icon: 'access_time', title: '利用開始のタイミング', text: '現地に到着後すぐ' },
                { icon: 'phone', title: '電話/SMS', text: '利用不可\nアプリでVoIP通話は可能（LINEなど）' },
                { icon: 'phonelink_ring', title: '対応端末', text: 'eSIM対応のスマートフォン・タブレットなど\n<a href="https://esim-market.net/#check" class="text-blue-500 underline">対応機種を確認する</a>' },
                { icon: 'mail_outline', title: 'eSIM情報の送付タイミング', text: 'ご注文後すぐ\nメールでeSIM情報と設定方法が届きます' },
                { icon: 'add', title: 'インストール方法', text: 'QRコードまたは手動' },
                { icon: 'date_range', title: 'eSIM有効期限', text: '発行から30日以内にインストールしてください' },
                { icon: 'info', title: 'APN', text: '3gnet' },
                { icon: 'repeat', title: '容量追加', text: '不可（eSIMの再購入は可能）' }
            ],
            url_1: "https://shop.esim-market.net/products/detail.php?product_id=153",
            url_2: "https://shop.esim-market.net/products/detail.php?product_id=209"
        }
    ],
    "北米・南米": [
        {
            name_jp: "アメリカ",
            name_en: "America",
            flag_img: "flag_united_states.png",
            description: "※マリアナ諸島(グアム・サイパン等)ではご利用いただけません",
            price: 780,
            info: [
                { icon: 'location_on', title: '対応国', text: 'アメリカ' },
                { icon: 'language', title: 'ネットワーク', text: 'AT&T、Verizon' },
                { icon: 'rss_feed', title: '通信速度', text: '4G LTE' },
                { icon: 'access_time', title: '利用開始のタイミング', text: '現地に到着後すぐ' },
                { icon: 'phone', title: '電話/SMS', text: '利用不可\nアプリでVoIP通話は可能（LINEなど）' },
                { icon: 'phonelink_ring', title: '対応端末', text: 'eSIM対応のスマートフォン・タブレットなど\n<a href="https://esim-market.net/#check" class="text-blue-500 underline">対応機種を確認する</a>' },
                { icon: 'mail_outline', title: 'eSIM情報の送付タイミング', text: 'ご注文後すぐ\nメールでeSIM情報と設定方法が届きます' },
                { icon: 'add', title: 'インストール方法', text: 'QRコードまたは手動' },
                { icon: 'date_range', title: 'eSIM有効期限', text: '発行から30日以内にインストールしてください' },
                { icon: 'info', title: 'APN', text: '3gnet' },
                { icon: 'repeat', title: '容量追加', text: '不可（eSIMの再購入は可能）' }
            ],
            url_1: "https://shop.esim-market.net/products/detail.php?product_id=122",
            url_2: "https://shop.esim-market.net/products/detail.php?product_id=178"
        },
        {
            name_jp: "カナダ",
            name_en: "Canada",
            flag_img: "flag_canada.png",
            price: 2180,
            info: [
                { icon: 'location_on', title: '対応国', text: 'カナダ' },
                { icon: 'language', title: 'ネットワーク', text: 'Telus、Bell、SaskTel、Roger、WIND Mobile' },
                { icon: 'rss_feed', title: '通信速度', text: '5G / 4G LTE' },
                { icon: 'access_time', title: '利用開始のタイミング', text: '現地に到着後すぐ' },
                { icon: 'phone', title: '電話/SMS', text: '利用不可\nアプリでVoIP通話は可能（LINEなど）' },
                { icon: 'phonelink_ring', title: '対応端末', text: 'eSIM対応のスマートフォン・タブレットなど\n<a href="https://esim-market.net/#check" class="text-blue-500 underline">対応機種を確認する</a>' },
                { icon: 'mail_outline', title: 'eSIM情報の送付タイミング', text: 'ご注文後すぐ\nメールでeSIM情報と設定方法が届きます' },
                { icon: 'add', title: 'インストール方法', text: 'QRコードまたは手動' },
                { icon: 'date_range', title: 'eSIM有効期限', text: '発行から30日以内にインストールしてください' },
                { icon: 'info', title: 'APN', text: '3gnet' },
                { icon: 'repeat', title: '容量追加', text: '不可（eSIMの再購入は可能）' }
            ],
            url_1: "https://shop.esim-market.net/products/detail.php?product_id=123",
            url_2: "https://shop.esim-market.net/products/detail.php?product_id=179"
        },
        {
            name_jp: "メキシコ",
            name_en: "Mexico",
            flag_img: "flag_mexico.png",
            price: 2980,
            info: [
                { icon: 'location_on', title: '対応国', text: 'メキシコ' },
                { icon: 'language', title: 'ネットワーク', text: 'AT&T Mexico、Telcel Mexico' },
                { icon: 'rss_feed', title: '通信速度', text: '5G / 4G LTE' },
                { icon: 'access_time', title: '利用開始のタイミング', text: '現地に到着後すぐ' },
                { icon: 'phone', title: '電話/SMS', text: '利用不可\nアプリでVoIP通話は可能（LINEなど）' },
                { icon: 'phonelink_ring', title: '対応端末', text: 'eSIM対応のスマートフォン・タブレットなど\n<a href="https://esim-market.net/#check" class="text-blue-500 underline">対応機種を確認する</a>' },
                { icon: 'mail_outline', title: 'eSIM情報の送付タイミング', text: 'ご注文後すぐ\nメールでeSIM情報と設定方法が届きます' },
                { icon: 'add', title: 'インストール方法', text: 'QRコードまたは手動' },
                { icon: 'date_range', title: 'eSIM有効期限', text: '発行から30日以内にインストールしてください' },
                { icon: 'info', title: 'APN', text: '3gnet' },
                { icon: 'repeat', title: '容量追加', text: '不可（eSIMの再購入は可能）' }
            ],
            url_1: "https://shop.esim-market.net/products/detail.php?product_id=119",
            url_2: "https://shop.esim-market.net/products/detail.php?product_id=175"
        },
        {
            name_jp: "ハワイ",
            name_en: "Hawaii",
            flag_img: "flag_hawaii.png",
            price: 780,
            info: [
                { icon: 'location_on', title: '対応国', text: 'ハワイ' },
                { icon: 'language', title: 'ネットワーク', text: 'AT&T、Verizon' },
                { icon: 'rss_feed', title: '通信速度', text: '4G LTE' },
                { icon: 'access_time', title: '利用開始のタイミング', text: '現地に到着後すぐ' },
                { icon: 'phone', title: '電話/SMS', text: '利用不可\nアプリでVoIP通話は可能（LINEなど）' },
                { icon: 'phonelink_ring', title: '対応端末', text: 'eSIM対応のスマートフォン・タブレットなど\n<a href="https://esim-market.net/#check" class="text-blue-500 underline">対応機種を確認する</a>' },
                { icon: 'mail_outline', title: 'eSIM情報の送付タイミング', text: 'ご注文後すぐ\nメールでeSIM情報と設定方法が届きます' },
                { icon: 'add', title: 'インストール方法', text: 'QRコードまたは手動' },
                { icon: 'date_range', title: 'eSIM有効期限', text: '発行から30日以内にインストールしてください' },
                { icon: 'info', title: 'APN', text: '3gnet' },
                { icon: 'repeat', title: '容量追加', text: '不可（eSIMの再購入は可能）' }
            ],
            url_1: "https://shop.esim-market.net/products/detail.php?product_id=124",
            url_2: "https://shop.esim-market.net/products/detail.php?product_id=180"
        },
        {
            name_jp: "グアム",
            name_en: "Guam",
            flag_img: "flag_guam.png"
        },
        {
            name_jp: "ブラジル",
            name_en: "Brazil",
            flag_img: "flag_brazil.png",
            price: 2180,
            info: [
                { icon: 'location_on', title: '対応国', text: 'ブラジル' },
                { icon: 'language', title: 'ネットワーク', text: '「Claro」or 「TIM」' },
                { icon: 'rss_feed', title: '通信速度', text: '5G / 4G LTE' },
                { icon: 'access_time', title: '利用開始のタイミング', text: '現地に到着後すぐ' },
                { icon: 'phone', title: '電話/SMS', text: '利用不可\nアプリでVoIP通話は可能（LINEなど）' },
                { icon: 'phonelink_ring', title: '対応端末', text: 'eSIM対応のスマートフォン・タブレットなど\n<a href="https://esim-market.net/#check" class="text-blue-500 underline">対応機種を確認する</a>' },
                { icon: 'mail_outline', title: 'eSIM情報の送付タイミング', text: 'ご注文後すぐ\nメールでeSIM情報と設定方法が届きます' },
                { icon: 'add', title: 'インストール方法', text: 'QRコードまたは手動' },
                { icon: 'date_range', title: 'eSIM有効期限', text: '発行から30日以内にインストールしてください' },
                { icon: 'info', title: 'APN', text: '3gnet' },
                { icon: 'repeat', title: '容量追加', text: '不可（eSIMの再購入は可能）' }
            ],
            url_1: "https://shop.esim-market.net/products/detail.php?product_id=120",
            url_2: "https://shop.esim-market.net/products/detail.php?product_id=176"
        },
        {
            name_jp: "ペルー",
            name_en: "Peru",
            flag_img: "flag_peru.png"
        }
    ],
    "オセアニア": [
        {
            name_jp: "オーストラリア",
            name_en: "Brazil",
            flag_img: "flag_brazil.png",
            price: 2980,
            info: [
                { icon: 'location_on', title: '対応国', text: 'オーストラリア' },
                { icon: 'language', title: 'ネットワーク', text: 'Optus、Telstra' },
                { icon: 'rss_feed', title: '通信速度', text: '5G / 4G LTE' },
                { icon: 'access_time', title: '利用開始のタイミング', text: '現地に到着後すぐ' },
                { icon: 'phone', title: '電話/SMS', text: '利用不可\nアプリでVoIP通話は可能（LINEなど）' },
                { icon: 'phonelink_ring', title: '対応端末', text: 'eSIM対応のスマートフォン・タブレットなど\n<a href="https://esim-market.net/#check" class="text-blue-500 underline">対応機種を確認する</a>' },
                { icon: 'mail_outline', title: 'eSIM情報の送付タイミング', text: 'ご注文後すぐ\nメールでeSIM情報と設定方法が届きます' },
                { icon: 'add', title: 'インストール方法', text: 'QRコードまたは手動' },
                { icon: 'date_range', title: 'eSIM有効期限', text: '発行から30日以内にインストールしてください' },
                { icon: 'info', title: 'APN', text: '3gnet' },
                { icon: 'repeat', title: '容量追加', text: '不可（eSIMの再購入は可能）' }
            ],
            url_1: "https://shop.esim-market.net/products/detail.php?product_id=115",
            url_2: "https://shop.esim-market.net/products/detail.php?product_id=171"
        },
        {
            name_jp: "ニュージーランド",
            name_en: "New Zealand",
            flag_img: "flag_new_zealand.png",
            price: 880,
            info: [
                { icon: 'location_on', title: '対応国', text: 'ニュージーランド' },
                { icon: 'language', title: 'ネットワーク', text: 'Australia (Optus)、New Zealand （TNZ（Spark））' },
                { icon: 'rss_feed', title: '通信速度', text: '5G / 4G LTE' },
                { icon: 'access_time', title: '利用開始のタイミング', text: '現地に到着後すぐ' },
                { icon: 'phone', title: '電話/SMS', text: '利用不可\nアプリでVoIP通話は可能（LINEなど）' },
                { icon: 'phonelink_ring', title: '対応端末', text: 'eSIM対応のスマートフォン・タブレットなど\n<a href="https://esim-market.net/#check" class="text-blue-500 underline">対応機種を確認する</a>' },
                { icon: 'mail_outline', title: 'eSIM情報の送付タイミング', text: 'ご注文後すぐ\nメールでeSIM情報と設定方法が届きます' },
                { icon: 'add', title: 'インストール方法', text: 'QRコードまたは手動' },
                { icon: 'date_range', title: 'eSIM有効期限', text: '発行から30日以内にインストールしてください' },
                { icon: 'info', title: 'APN', text: '3gnet' },
                { icon: 'repeat', title: '容量追加', text: '不可（eSIMの再購入は可能）' }
            ],
            url_1: "https://shop.esim-market.net/products/detail.php?product_id=115",
            url_2: "https://shop.esim-market.net/products/detail.php?product_id=171"
        }
    ],
    "中東": [
        {
            name_jp: "トルコ",
            name_en: "Turkey",
            flag_img: "flag_turkey.png",
            price: 780,
            info: [
                { icon: 'location_on', title: '対応国', text: 'トルコ' },
                { icon: 'language', title: 'ネットワーク', text: 'AVEA（turk telekom）、Vodafone、Turkcell' },
                { icon: 'rss_feed', title: '通信速度', text: '5G / 4G LTE' },
                { icon: 'access_time', title: '利用開始のタイミング', text: '現地に到着後すぐ' },
                { icon: 'phone', title: '電話/SMS', text: '利用不可\nアプリでVoIP通話は可能（LINEなど）' },
                { icon: 'phonelink_ring', title: '対応端末', text: 'eSIM対応のスマートフォン・タブレットなど\n<a href="https://esim-market.net/#check" class="text-blue-500 underline">対応機種を確認する</a>' },
                { icon: 'mail_outline', title: 'eSIM情報の送付タイミング', text: 'ご注文後すぐ\nメールでeSIM情報と設定方法が届きます' },
                { icon: 'add', title: 'インストール方法', text: 'QRコードまたは手動' },
                { icon: 'date_range', title: 'eSIM有効期限', text: '発行から30日以内にインストールしてください' },
                { icon: 'info', title: 'APN', text: '3gnet' },
                { icon: 'repeat', title: '容量追加', text: '不可（eSIMの再購入は可能）' }
            ],
            url_1: "https://shop.esim-market.net/products/detail.php?product_id=117",
            url_2: "https://shop.esim-market.net/products/detail.php?product_id=173"
        },
        {
            name_jp: "アラブ首長国連邦",
            name_en: "United Arab Emirates",
            flag_img: "flag_united_arab_emirates.png",
            price: 1080,
            info: [
                { icon: 'location_on', title: '対応国', text: 'アラブ首長国連邦' },
                { icon: 'language', title: 'ネットワーク', text: 'Etisalat UAE' },
                { icon: 'rss_feed', title: '通信速度', text: '5G / 4G LTE' },
                { icon: 'access_time', title: '利用開始のタイミング', text: '現地に到着後すぐ' },
                { icon: 'phone', title: '電話/SMS', text: '利用不可\nアプリでVoIP通話は可能（LINEなど）' },
                { icon: 'phonelink_ring', title: '対応端末', text: 'eSIM対応のスマートフォン・タブレットなど\n<a href="https://esim-market.net/#check" class="text-blue-500 underline">対応機種を確認する</a>' },
                { icon: 'mail_outline', title: 'eSIM情報の送付タイミング', text: 'ご注文後すぐ\nメールでeSIM情報と設定方法が届きます' },
                { icon: 'add', title: 'インストール方法', text: 'QRコードまたは手動' },
                { icon: 'date_range', title: 'eSIM有効期限', text: '発行から30日以内にインストールしてください' },
                { icon: 'info', title: 'APN', text: '3gnet' },
                { icon: 'repeat', title: '容量追加', text: '不可（eSIMの再購入は可能）' }
            ],
            url_1: "https://shop.esim-market.net/products/detail.php?product_id=118",
            url_2: "https://shop.esim-market.net/products/detail.php?product_id=174"
        }
    ],
    "アフリカ": [
        {
            name_jp: "南アフリカ共和国",
            name_en: "Egypt",
            flag_img: "flag_egypt.png",
            price: 2180,
            info: [
                { icon: 'location_on', title: '対応国', text: 'エジプト' },
                { icon: 'language', title: 'ネットワーク', text: 'Etisalat、orange' },
                { icon: 'rss_feed', title: '通信速度', text: '4G LTE' },
                { icon: 'access_time', title: '利用開始のタイミング', text: '現地に到着後すぐ' },
                { icon: 'phone', title: '電話/SMS', text: '利用不可\nアプリでVoIP通話は可能（LINEなど）' },
                { icon: 'phonelink_ring', title: '対応端末', text: 'eSIM対応のスマートフォン・タブレットなど\n<a href="https://esim-market.net/#check" class="text-blue-500 underline">対応機種を確認する</a>' },
                { icon: 'mail_outline', title: 'eSIM情報の送付タイミング', text: 'ご注文後すぐ\nメールでeSIM情報と設定方法が届きます' },
                { icon: 'add', title: 'インストール方法', text: 'QRコードまたは手動' },
                { icon: 'date_range', title: 'eSIM有効期限', text: '発行から30日以内にインストールしてください' },
                { icon: 'info', title: 'APN', text: '3gnet' },
                { icon: 'repeat', title: '容量追加', text: '不可（eSIMの再購入は可能）' }
            ],
            url_1: "https://shop.esim-market.net/products/detail.php?product_id=114",
            url_2: "https://shop.esim-market.net/products/detail.php?product_id=170"
        },
        {
            name_jp: "エジプト",
            name_en: "Republic of South Africa",
            flag_img: "flag_south africa.png",
        }
    ],
    "周遊プラン": [
        {
            name_jp: "アジア周遊",
            name_en: "Asia Tour",
            img: "flag_asia.png",
            available: ["中華人民共和国", "大韓民国", "タイ", "台湾", "インドネシア", "ベトナム", "フィリピン", "カンボジア", "インド", "マレーシア", "香港", "マカオ", "スリランカ", "クウェート", "ナイジェリア", "パキスタン", "イスラエル", "ロシア"],
            price: 1980,
            info: [
                { icon: 'location_on', title: '対応国', text: 'アジア周遊\n中国本土,韓国,タイ,台湾,インドネシア,ベトナム,フィリピン,カンボジア,インド,マレーシア,香港,マカオ,スリランカ,パキスタン' },
                { icon: 'language', title: 'ネットワーク', text: '中国本土：China Unicom\n韓国：SKT、KT、LG U+\nタイ：AIS、DTAC\n台湾：CHT\nインドネシア：Telkomsel\nベトナム：Mobifone、vietnamobile\nフィリピン：Globe\nカンボジア：smart、metfone\nインド：Bharti Airtel、Vodafone\nマレーシア：Maxis、digi\n香港：HKT\nマカオ：CTM\nスリランカ：Etisalat Lanka、Hutchison Telecom\nパキスタン：Telenor' },
                { icon: 'rss_feed', title: '通信速度', text: '5G / 4G LTE' },
                { icon: 'access_time', title: '利用開始のタイミング', text: '現地に到着後すぐ' },
                { icon: 'phone', title: '電話/SMS', text: '利用不可\nアプリでVoIP通話は可能（LINEなど）' },
                { icon: 'phonelink_ring', title: '対応端末', text: 'eSIM対応のスマートフォン・タブレットなど\n<a href="https://esim-market.net/#check"><a href="https://esim-market.net/#check" class="text-blue-500 underline">対応機種を確認する</a></a>' },
                { icon: 'mail_outline', title: 'eSIM情報の送付タイミング', text: 'ご注文後すぐ\nメールでeSIM情報と設定方法が届きます' },
                { icon: 'add', title: 'インストール方法', text: 'QRコードまたは手動' },
                { icon: 'date_range', title: 'eSIM有効期限', text: '発行から30日以内にインストールしてください' },
                { icon: 'info', title: 'APN', text: 'mobile' },
                { icon: 'repeat', title: '容量追加', text: '不可（eSIMの再購入は可能）' }
            ],
            url_1: "https://shop.esim-market.net/products/detail.php?product_id=212",
            url_2: "https://shop.esim-market.net/products/detail.php?product_id=213"
        },
        {
            name_jp: "中国・香港・マカオ",
            name_en: "Asia 3country",
            img: "flag_china_hong_kong_macau.png",
            available: ["中華人民共和国", "香港", "マカオ"],
            price: 780,
            info: [
                { icon: 'location_on', title: '対応国', text: '中国本土, 香港, マカオ' },
                { icon: 'language', title: 'ネットワーク', text: '中国本土：China Unicom\n香港：HKT\nマカオ：CTM' },
                { icon: 'rss_feed', title: '通信速度', text: '5G / 4G LTE' },
                { icon: 'access_time', title: '利用開始のタイミング', text: '現地に到着後すぐ' },
                { icon: 'phone', title: '電話/SMS', text: '利用不可\nアプリでVoIP通話は可能（LINEなど）' },
                { icon: 'phonelink_ring', title: '対応端末', text: 'eSIM対応のスマートフォン・タブレットなど\n<a href="https://esim-market.net/#check" class="text-blue-500 underline">対応機種を確認する</a>' },
                { icon: 'mail_outline', title: 'eSIM情報の送付タイミング', text: 'ご注文後すぐ\nメールでeSIM情報と設定方法が届きます' },
                { icon: 'add', title: 'インストール方法', text: 'QRコードまたは手動' },
                { icon: 'date_range', title: 'eSIM有効期限', text: '発行から30日以内にインストールしてください' },
                { icon: 'info', title: 'APN', text: 'mobile' },
                { icon: 'repeat', title: '容量追加', text: '不可（eSIMの再購入は可能）' }
            ],
            url_1: "https://shop.esim-market.net/products/detail.php?product_id=214",
            url_2: "https://shop.esim-market.net/products/detail.php?product_id=215"
        },
        {
            name_jp: "東南アジア4か国",
            name_en: "Southeast Asia 4country",
            img: "flag_southeast_asia.png",
            available: ["シンガポール", "マレーシア", "タイ", "インドネシア"],
            price: 1080,
            info: [
                { icon: 'location_on', title: '対応国', text: '東南アジア4ヵ国\nシンガポール, マレーシア, タイ, インドネシア' },
                { icon: 'language', title: 'ネットワーク', text: 'シンガポール：Simba, StarHub\nマレーシア：Digi, Celcom\nタイ：AIS\nインドネシア：Telkomsel' },
                { icon: 'rss_feed', title: '通信速度', text: '5G / 4G LTE' },
                { icon: 'access_time', title: '利用開始のタイミング', text: '現地に到着後すぐ' },
                { icon: 'phone', title: '電話/SMS', text: '利用不可\nアプリでVoIP通話は可能（LINEなど）' },
                { icon: 'phonelink_ring', title: '対応端末', text: 'eSIM対応のスマートフォン・タブレットなど\n<a href="https://esim-market.net/#check" class="text-blue-500 underline">対応機種を確認する</a>' },
                { icon: 'mail_outline', title: 'eSIM情報の送付タイミング', text: 'ご注文後すぐ\nメールでeSIM情報と設定方法が届きます' },
                { icon: 'add', title: 'インストール方法', text: 'QRコードまたは手動' },
                { icon: 'date_range', title: 'eSIM有効期限', text: '発行から30日以内にインストールしてください' },
                { icon: 'info', title: 'APN', text: 'mobile.three.com.hk' },
                { icon: 'repeat', title: '容量追加', text: '不可（eSIMの再購入は可能）' }
            ],
            url_1: "https://shop.esim-market.net/products/detail.php?product_id=216",
            url_2: "https://shop.esim-market.net/products/detail.php?product_id=217"
        },
        {
            name_jp: "ヨーロッパ周遊",
            name_en: "Europe",
            img: "flag_europe.png",
            available: ["フランス", "ドイツ", "スペイン", "スイス", "イタリア", "イギリス", "オーストリア", "チェコ共和国", "オランダ", "ベルギー", "スウェーデン", "ハンガリー", "クロアチア", "フィンランド", "ポルトガル", "ギリシャ", "ポーランド", "ノルウェー", "デンマーク", "マルタ", "スロベニア", "ルーマニア", "アイルランド", "アイスランド", "エストニア", "リトアニア", "ラトビア", "アルバニア", "ブルガリア", "リヒテンシュタイン", "ルクセンブルク", "モルドバ", "キプロス", "スロバキア", "トルウクライナ", "イスラエル"],
            price: 980,
            info: [
                { icon: 'location_on', title: '対応国', text: 'ヨーロッパ周遊\nフランス,ドイツ,スペイン,スイス,イタリア,イギリス,オーストリア,チェコ共和国,オランダ,ベルギー,スウェーデン,ハンガリー,クロアチア,フィンランド,ポルトガル,ギリシャ,ポーランド,ノルウェー,デンマーク,マルタ,スロベニア,ルーマニア,アイルランド,アイスランド,エストニア,リトアニア,ラトビア,アルバニア,ブルガリア,リヒテンシュタイン,ルクセンブルク,モルドバ,キプロス,スロバキア,トルウクライナ,イスラエル' },
                { icon: 'language', title: 'ネットワーク', text: 'フランス：Bouygues,Orange\nドイツ：O2,T-Mobile（Telekom.de）\nスペイン：Movistar,Orange,Yoigo\nスイス：サンライズ,ソルト\nイタリア：Wind,Vodafone\nイギリス：O2, EE\nオーストリア：A1,T-Mobile\nチェコ共和国：T-Mobile,O2\nオランダ：KPN,Odido(T-mobile)\nベルギー：Telenet,ORANGE\nスウェーデン：Telenor,H3G(3 SE)\nハンガリー：Telenor（YettelT-Mobile（Telekom）\nクロアチア：Tele2（TM HR）,Hrvatski（HT HR）\nフィンランド：lElisa,DNA,Alcom\nポルトガル：Optimus,TMN/MEO,Vodafone\nギリシャ：Wind,Cosmote,Vodafone\nポーランド：Polkomtel (Plus)\nノルウェー：Teleno\nデンマーク：TDC,Telenor\nマルタ：Vodafone (Epic)\nスロベニア：Telemach\nルーマニア：Orange,DIGI\nアイルランド：Meteor Mobile, H3G\nアイスランド：Vodafone\nエストニア：Elisa,Tele2\nリトアニア：Bite,Tele2\nラトビア：Bite\nアルバニア：Vodafone\nブルガリア：Vivacom,Telenor（Yettel）\nリヒテンシュタイン：Telecom Liechtenstein\nルクセンブルク：Orange\nモルドバ：Orange\nキプロス：Epic Cyprus\nスロバキア：O2,DT\nトルウクライナ：AVEA(turk telekom）,Vodafone,Turkcell\nウクライナ：KyivStar,MTS\nイスラエル：Hot Mobile,Pelephone' },
                { icon: 'rss_feed', title: '通信速度', text: '5G / 4G LTE' },
                { icon: 'access_time', title: '利用開始のタイミング', text: '現地に到着後すぐ' },
                { icon: 'phone', title: '電話/SMS', text: '利用不可\nアプリでVoIP通話は可能（LINEなど）' },
                { icon: 'phonelink_ring', title: '対応端末', text: 'eSIM対応のスマートフォン・タブレットなど\n<a href="https://esim-market.net/#check" class="text-blue-500 underline">対応機種を確認する</a>' },
                { icon: 'mail_outline', title: 'eSIM情報の送付タイミング', text: 'ご注文後すぐ\nメールでeSIM情報と設定方法が届きます' },
                { icon: 'add', title: 'インストール方法', text: 'QRコードまたは手動' },
                { icon: 'date_range', title: 'eSIM有効期限', text: '発行から30日以内にインストールしてください' },
                { icon: 'info', title: 'APN', text: 'mobile' },
                { icon: 'repeat', title: '容量追加', text: '不可（eSIMの再購入は可能）' }
            ],
            url_1: "https://shop.esim-market.net/products/detail.php?product_id=218",
            url_2: "https://shop.esim-market.net/products/detail.php?product_id=219"
        }
    ]
}
