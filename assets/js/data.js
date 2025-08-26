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