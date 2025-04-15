/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 */

const swimGear = [
  // GOGGLES
  {
    name: "Speedo Vanquisher 2.0",
    type: "Goggles",
    price: 25,
    level: "Intermediate",
    brand: "Speedo",
    image: "https://elsmoreswim.com/cdn/shop/files/vanquisher-20-mirrored-7750127_deep-gold_1_ceef1422-4e46-426c-a388-5b9e6a2fbd2a.jpg?v=1736456381",
    link: "https://www.amazon.com/Speedo-Vanquisher-Optical-Goggle-Smoke/dp/B07H3B835R/ref=asc_df_B07H3B835R?mcid=002208aa75123b608abf37763e95bca2&hvocijid=18391703099354908775-B07H3B835R-&hvexpln=73&tag=hyprod-20&linkCode=df0&hvadid=721245378154&hvpos=&hvnetw=g&hvrand=18391703099354908775&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9031083&hvtargid=pla-2281435178818&psc=1"
  },
  {
    name: "Arena Cobra Ultra",
    type: "Goggles",
    price: 50,
    level: "Advanced",
    brand: "Arena",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeeAX5mwCV8YZeWbcxndWp6OOxN0vI46GUWA&s",
    link: "https://www.amazon.com/Goggles-Yellow-Copper-Anti-Fog-Mirror/dp/B07R5BY1H3/ref=asc_df_B07R5BY1H3?mcid=f9208a58df1f361fa4d17e2306b9622d&hvocijid=858070720441856369-B07R5BY1H3-&hvexpln=73&tag=hyprod-20&linkCode=df0&hvadid=721245378154&hvpos=&hvnetw=g&hvrand=858070720441856369&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9031083&hvtargid=pla-2281435180298&th=1"
  },
  {
    name: "TYR Blackhawk Racing Goggles",
    type: "Goggles",
    price: 30,
    level: "Advanced",
    brand: "TYR",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXyQs5SV8mAYLTUH9CG_ZRQsPKJh86YeCMWw&s",
    link: "https://www.swimoutlet.com/products/tyr-blackhawk-racing-mirrored-performance-goggle-8132094?variant=49771747049640&color=goldmetalrainbowblack&utm_source=google&utm_medium=cpc&utm_campaign=google-shopping&utm_source=google&campaignid=21488560240&adgroupid=&keyword=&matchtype=&targetid=&device=c&creativeid=&adposition=&adtype=pla&nbt=nb%3Aadwords%3Ax%3A21488560240%3A%3A&nb_adtype=pla&nb_kwd=&nb_ti=&nb_mi=1060504&nb_pc=online&nb_pi=ps8132094-0001&nb_ppi=&nb_placement=&nb_li_ms=&nb_lp_ms=&nb_fii=&nb_ap=&nb_mt=&gad_source=1&gbraid=0AAAAAD_vvNHTDqHzxpcwh7FHl6JTdeZHC&gclid=CjwKCAjw5PK_BhBBEiwAL7GTPV76ZLM6gSZxKhuExX7MdaMtYPmqxChKNIIUXsBV0cCsmeFLx04fQxoCBs4QAvD_BwE"
  },

  // TRAINING EQUIPMENT
  {
    name: "TYR Kickboard",
    type: "Training Equipment",
    price: 28,
    level: "Beginner",
    brand: "TYR",
    image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSvqHWtBoepicseV67oZP9fdUpuHd3AkXwTXYsWZq46WAghRjhDEE71QnE2yOqQEBENcVPnWD4LLzXEVmeuqm2erpmhv9u7agRFECp0aLfrW55cwMghiyBFJQL8Q5dnEKZAIreprfo&usqp=CAc",
    link: "https://www.swimoutlet.com/products/tyr-kickboard-3452?variant=49764516036776&color=black&utm_source=google&utm_medium=cpc&utm_campaign=google-shopping&utm_source=google&campaignid=21488560240&adgroupid=&keyword=&matchtype=&targetid=&device=c&creativeid=&adposition=&adtype=pla&nbt=nb%3Aadwords%3Ax%3A21488560240%3A%3A&nb_adtype=pla&nb_kwd=&nb_ti=&nb_mi=1060504&nb_pc=online&nb_pi=ps3452-0002&nb_ppi=&nb_placement=&nb_li_ms=&nb_lp_ms=&nb_fii=&nb_ap=&nb_mt=&gad_source=1&gbraid=0AAAAAD_vvNHTDqHzxpcwh7FHl6JTdeZHC&gclid=CjwKCAjw5PK_BhBBEiwAL7GTPXuiVi_jVdrld6Vb9AedVYWbtXKjeso3HqGCt6bKAMQyYvLKP16zKhoC0SgQAvD_BwE"
  },
  {
    name: "Aqua Sphere Pull Buoy",
    type: "Training Equipment",
    price: 22,
    level: "Intermediate",
    brand: "Aqua Sphere",
    image: "https://img.fruugo.com/product/4/45/1306571454_0340_0340.jpg",
    link: "https://www.fruugo.us/aqua-sphere-pull-buoy-navy-bright-yellow/p-267711261-591921200?language=en&ac=google&asc=pmax&gad_source=1&gbraid=0AAAAADpXug0f3lphpKwmyYKSL0MxBhQZe&gclid=CjwKCAjw5PK_BhBBEiwAL7GTPWgq6VPRjKhDKtslYt0MsrYWeQV-bQG33zMHunFgNhNEPV64_kDz2RoCIi4QAvD_BwE"
  },
  {
    name: "Speedo Training Fins",
    type: "Training Equipment",
    price: 30,
    level: "Beginner",
    brand: "Speedo",
    image: "https://m.media-amazon.com/images/I/71JPAX4AUML._AC_SX679_.jpg",
    link: "https://www.amazon.com/Speedo-Unisex-Adult-Training-Rubber-Blade/dp/B08PXYBW8H/ref=asc_df_B08PXYBW8H?mcid=0da1514236fc330d8dda4fdd9267ac41&hvocijid=7932458066469742711-B08PXYBW8H-&hvexpln=73&tag=hyprod-20&linkCode=df0&hvadid=721245378154&hvpos=&hvnetw=g&hvrand=7932458066469742711&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9031083&hvtargid=pla-2281435178578&th=1&psc=1"
  },

  // SNORKELS
  {
    name: "Finis Swimmer's Snorkel",
    type: "Snorkels",
    price: 30,
    level: "Intermediate",
    brand: "Finis",
    image: "https://www.swimoutlet.com/cdn/shop/files/8638321852584-yellow-1a.jpg?v=1742974742",
    link: "https://www.swimoutlet.com/products/finis-swimmers-swim-snorkel-1221?variant=49760694861992&color=yellow&utm_source=google&utm_medium=cpc&utm_campaign=google-shopping&utm_source=google&campaignid=17563556333&adgroupid=&keyword=&matchtype=&targetid=&device=c&creativeid=&adposition=&adtype=pla&nbt=nb%3Aadwords%3Ax%3A17563556333%3A%3A&nb_adtype=pla&nb_kwd=&nb_ti=&nb_mi=1060504&nb_pc=online&nb_pi=ps1221-0003&nb_ppi=&nb_placement=&nb_li_ms=&nb_lp_ms=&nb_fii=&nb_ap=&nb_mt=&gad_source=1&gbraid=0AAAAAD_vvNH6QtURcBx9-ULor6jWuu7Jh&gclid=CjwKCAjw5PK_BhBBEiwAL7GTPeCf5UhVJa9Bkm3EC9AiKPTGrWSxX3vTijWq1l5hoTQDG4YxUFVuqBoCgjAQAvD_BwE"
  },
  {
    name: "TYR Ultralite Snorkel Elite",
    type: "Snorkels",
    price: 55,
    level: "Advanced",
    brand: "TYR",
    image: "https://www.swimoutlet.com/cdn/shop/files/8640164561064-black-1a.jpg?v=1727000754",
    link: "https://www.swimoutlet.com/products/tyr-ultralite-swim-snorkel-elite-8182622?variant=49783383326888&color=black&utm_source=google&utm_medium=cpc&utm_campaign=google-shopping&utm_source=google&campaignid=21488560240&adgroupid=&keyword=&matchtype=&targetid=&device=c&creativeid=&adposition=&adtype=pla&nbt=nb%3Aadwords%3Ax%3A21488560240%3A%3A&nb_adtype=pla&nb_kwd=&nb_ti=&nb_mi=1060504&nb_pc=online&nb_pi=ps8182622-0001&nb_ppi=&nb_placement=&nb_li_ms=&nb_lp_ms=&nb_fii=&nb_ap=&nb_mt=&gad_source=1&gbraid=0AAAAAD_vvNHTDqHzxpcwh7FHl6JTdeZHC&gclid=CjwKCAjw5PK_BhBBEiwAL7GTPZpfPxcCqG48kVws2xWWpcpzGyZ8CpEWyCMKG524sIrMs4B7ON1ojBoCBnEQAvD_BwE"
  },
  {
    name: "MP Michael Phelps Focus Snorkel",
    type: "Snorkels",
    price: 40,
    level: "Advanced",
    brand: "MP",
    image: "https://www.scuba.com/Image/Product/XLarge/MPSSFBK.jpg",
    link: "https://www.proswimwear.com/phelps-focus-swim-snorkel-black-green.html"
  },

  // FINS
  {
    name: "Arena Powerfin Pro",
    type: "Fins",
    price: 70,
    level: "Advanced",
    brand: "Arena",
    image: "https://www.swimoutlet.com/cdn/shop/files/8643894968488-sagearticlime-1a.jpg?v=1741779071",
    link: "https://www.swimoutlet.com/products/arena-powerfin-pro-ii-8215965?variant=49839481094312&color=sagearticlime&size=95105&utm_source=google&utm_medium=cpc&utm_campaign=google-shopping&utm_source=google&campaignid=21035242002&device=c&adtype=pla&nbt=nb%3Aadwords%3Ax%3A21035242002%3A%3A&nb_adtype=pla&nb_mi=1060504&nb_pc=online&nb_pi=ps8215965-0078&gad_source=1&gbraid=0AAAAAD_vvNEry1rOsYale8wDIesYVoY14&gclid=CjwKCAjw5PK_BhBBEiwAL7GTPamb7YPGMCqpr9-oh9DIrdzKnu8V5F0MLq9J06VkgpS74I0nnWQBVRoCEPUQAvD_BwE"
  },
  {
    name: "TYR Flex Swim Fins 2.0",
    type: "Fins",
    price: 45,
    level: "Beginner",
    brand: "TYR",
    image: "https://www.swimoutlet.com/cdn/shop/files/8640582058152-black-1a.jpg?v=1727283205",
    link: "https://www.swimoutlet.com/products/tyr-flex-swim-fins-20-8193545?variant=49788119908520&color=black&size=m&utm_source=google&utm_medium=cpc&utm_campaign=google-shopping&utm_source=google&campaignid=21488560240&device=c&adtype=pla&nbt=nb%3Aadwords%3Ax%3A21488560240%3A%3A&nb_adtype=pla&nb_mi=1060504&nb_pc=online&nb_pi=ps8193545-0002&gad_source=1&gbraid=0AAAAAD_vvNHTDqHzxpcwh7FHl6JTdeZHC&gclid=CjwKCAjw5PK_BhBBEiwAL7GTPV9KdDQdYPWM2d6cmU6jrv1iFfYsvuj1eyW826QwIyMHuNKax7NQgBoCZWIQAvD_BwE"
  },
  {
    name: "Finis Zoomers Gold",
    type: "Fins",
    price: 47,
    level: "Intermediate",
    brand: "Finis",
    image: "https://www.swimoutlet.com/cdn/shop/files/8638337777832-gold-1a.jpg?v=1727269011",
    link: "https://www.swimoutlet.com/products/finis-zoomers-gold-swim-fins-1267?variant=49760918077608&color=gold&size=hsize1213male1314female&utm_source=google&utm_medium=cpc&utm_campaign=google-shopping&utm_source=google&campaignid=17563556333&device=c&adtype=pla&nbt=nb%3Aadwords%3Ax%3A17563556333%3A%3A&nb_adtype=pla&nb_mi=1060504&nb_pc=online&nb_pi=ps1267-0055&gad_source=1&gbraid=0AAAAAD_vvNH6QtURcBx9-ULor6jWuu7Jh&gclid=CjwKCAjw5PK_BhBBEiwAL7GTPb28tiJAPKnxyzkSvB8cLRWfYcIGh6mcf0iPh31GSyrgXWtWCsqlHxoC1WAQAvD_BwE"
  },

  // SWIM CAPS
  {
    name: "Speedo Silicone Cap",
    type: "Swim Caps",
    price: 16,
    level: "All levels",
    brand: "Speedo",
    image: "https://m.media-amazon.com/images/I/51pVP5MMMmL._AC_SL1000_.jpg",
    link: "https://www.amazon.com/Speedo-Silicone-Solid-Swim-Navy/dp/B00070QEDA/ref=asc_df_B00070QEDA?mcid=248f39b41fdb337aa25de7c756d30508&hvocijid=16058024641189618715-B00070QEDA-&hvexpln=73&tag=hyprod-20&linkCode=df0&hvadid=721245378154&hvpos=&hvnetw=g&hvrand=16058024641189618715&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9031083&hvtargid=pla-2281435180058&th=1"
  },
  {
    name: "TYR Wrinkle-Free Silicone Cap",
    type: "Swim Caps",
    price: 18,
    level: "Beginner",
    brand: "TYR",
    image: "https://www.swimoutlet.com/cdn/shop/files/8638503190696-black-1a.jpg?v=1727272200",
    link: "https://www.swimoutlet.com/products/tyr-wrinkle-free-silicone-swim-cap-2738?variant=49763252994216&color=black&utm_source=google&utm_medium=cpc&utm_campaign=google-shopping&utm_source=google&campaignid=21488560240&adgroupid=&keyword=&matchtype=&targetid=&device=c&creativeid=&adposition=&adtype=pla&nbt=nb%3Aadwords%3Ax%3A21488560240%3A%3A&nb_adtype=pla&nb_kwd=&nb_ti=&nb_mi=1060504&nb_pc=online&nb_pi=ps2738-0009&nb_ppi=&nb_placement=&nb_li_ms=&nb_lp_ms=&nb_fii=&nb_ap=&nb_mt=&gad_source=1&gbraid=0AAAAAD_vvNHTDqHzxpcwh7FHl6JTdeZHC&gclid=CjwKCAjw5PK_BhBBEiwAL7GTPbKlZOYNgVVw7XLPl0BNtnkUQeSQwukDMVjMoxRtSipR_pw0tXQNixoCGAoQAvD_BwE"
  },
  {
    name: "Arena Classic Cap",
    type: "Swim Caps",
    price: 6,
    level: "All levels",
    brand: "Arena",
    image: "https://www.swimoutlet.com/cdn/shop/files/8645677744296-whiteblack-1a.jpg?v=1727351822",
    link: "https://www.swimoutlet.com/products/arena-jr-classic-silicone-swim-cap-8218191?variant=49833352265896&color=whiteblack&utm_source=google&utm_medium=cpc&utm_campaign=google-shopping&utm_source=google&campaignid=21035242002&adgroupid=&keyword=&matchtype=&targetid=&device=c&creativeid=&adposition=&adtype=pla&nbt=nb%3Aadwords%3Ax%3A21035242002%3A%3A&nb_adtype=pla&nb_kwd=&nb_ti=&nb_mi=1060504&nb_pc=online&nb_pi=ps8218191-0009&nb_ppi=&nb_placement=&nb_li_ms=&nb_lp_ms=&nb_fii=&nb_ap=&nb_mt=&gad_source=1&gbraid=0AAAAAD_vvNEry1rOsYale8wDIesYVoY14&gclid=CjwKCAjw5PK_BhBBEiwAL7GTPRxFX76IEy7sbhHCfW83hvvsxISh68sj24v_yIg3CAdHijSsr71z5hoCS3UQAvD_BwE"
  },

  // RESISTANCE EQUIPMENT
  {
    name: "Finis Forearm Fulcrum",
    type: "Resistance Equipment",
    price: 28,
    level: "Intermediate",
    brand: "Finis",
    image: "https://www.swimoutlet.com/cdn/shop/files/5672072904872-2t.jpg?v=1716492578",
    link: "https://www.swimoutlet.com/products/finis-forearm-fulcrum-paddles-6334?variant=35898967752872&size=sr&utm_source=google&utm_medium=cpc&utm_campaign=google-shopping&utm_source=google&campaignid=22307029089&adgroupid=181288377292&targetid=pla-2409947678391&device=c&creativeid=737054365917&adtype=pla&nbt=nb%3Aadwords%3Ag%3A22307029089%3A181288377292%3A737054365917&nb_adtype=pla&nb_ti=pla-2409947678391&nb_mi=1060504&nb_pc=online&nb_pi=ps6334-0002&nb_ppi=2409947678391&gad_source=1&gbraid=0AAAAAD_vvNE6Y1q9tfpd4GhpqDF1akwT3&gclid=CjwKCAjw5PK_BhBBEiwAL7GTPYYvT_bwY_s-5jGAIetlyafzQDjlyJeLsjEa8jauAN7geVSFd8OOxRoCQIQQAvD_BwE"
  },
  {
    name: "Speedo Resistance Bands",
    type: "Resistance Equipment",
    price: 16,
    level: "Advanced",
    brand: "Speedo",
    image: "https://www.swimoutlet.com/cdn/shop/files/8653075284136-speedoblack-1a.jpg?v=1727824423",
    link: "https://www.swimoutlet.com/products/speedo-training-band-8177383?variant=49897300689064&color=speedoblack&size=1sz&utm_source=google&utm_medium=cpc&utm_campaign=google-shopping&utm_source=google&campaignid=21751288495&adgroupid=166664292134&targetid=pla-352895665565&device=c&creativeid=714870937814&adtype=pla&nbt=nb%3Aadwords%3Ag%3A21751288495%3A166664292134%3A714870937814&nb_adtype=pla&nb_ti=pla-352895665565&nb_mi=1060504&nb_pc=online&nb_pi=ps8177383-0001&nb_ppi=352895665565&gad_source=1&gbraid=0AAAAAD_vvNGPF5Z4VxgUSy5N0Bmd64DPq&gclid=CjwKCAjw5PK_BhBBEiwAL7GTPeXxdsr1kxrdr72wkCFFwCfr8mtwRsZi2CgvEDPXnaw_vPOxT5BdGhoCr9UQAvD_BwE"
  },
  {
    name: "TYR Catalyst Stroke Paddles",
    type: "Resistance Equipment",
    price: 40,
    level: "Advanced",
    brand: "TYR",
    image: "https://www.swimoutlet.com/cdn/shop/files/8640024772776-clear-1a.jpg?v=1727280701",
    link: "https://www.swimoutlet.com/products/tyr-catalyst-stroke-training-paddle-8176967?variant=49781946974376&color=clear&size=xxl&utm_source=google&utm_medium=cpc&utm_campaign=google-shopping&utm_source=google&campaignid=21488560240&adgroupid=&keyword=&matchtype=&targetid=&device=c&creativeid=&adposition=&adtype=pla&nbt=nb%3Aadwords%3Ax%3A21488560240%3A%3A&nb_adtype=pla&nb_kwd=&nb_ti=&nb_mi=1060504&nb_pc=online&nb_pi=ps8176967-0006&nb_ppi=&nb_placement=&nb_li_ms=&nb_lp_ms=&nb_fii=&nb_ap=&nb_mt=&gad_source=1&gbraid=0AAAAAD_vvNHTDqHzxpcwh7FHl6JTdeZHC&gclid=CjwKCAjw5PK_BhBBEiwAL7GTPXytAQ8uFhMQfp6u9XiQZ2sWSQ_LL8HI2scvCS0gUE280kz7WcLNahoCOfAQAvD_BwE"
  },

  // OPEN WATER GEAR
  {
    name: "Swim Buoy/Tow Float Elite",
    type: "Open Water Gear",
    price: 27,
    level: "All levels",
    brand: "New Wave",
    image: "https://m.media-amazon.com/images/I/81vYC1uKH4L.__AC_SX300_SY300_QL70_FMwebp_.jpg",
    link: "https://www.swimoutlet.com/products/swim-secure-swim-buoytow-float-elite-8211783?variant=50076972843176&color=orange&utm_source=google&utm_medium=cpc&utm_campaign=google-shopping&utm_source=google&campaignid=17954165185&adgroupid=&keyword=&matchtype=&targetid=&device=c&creativeid=&adposition=&adtype=pla&nbt=nb%3Aadwords%3Ax%3A17954165185%3A%3A&nb_adtype=pla&nb_kwd=&nb_ti=&nb_mi=1060504&nb_pc=online&nb_pi=ps8211783-0001&nb_ppi=&nb_placement=&nb_li_ms=&nb_lp_ms=&nb_fii=&nb_ap=&nb_mt=&gad_source=1&gbraid=0AAAAAD_vvNHXaJOKRHpe0Yx6wbqLqLY4m&gclid=CjwKCAjw5PK_BhBBEiwAL7GTPZr8lZ1OKMWq9OsNlUWb7-F36nKHsP6u9DHm-nzZe3bQoTGTBJ_EWRoCzkEQAvD_BwE"
  },
  {
    name: "Zone3 Neoprene Swim Cap",
    type: "Open Water Gear",
    price: 49,
    level: "Advanced",
    brand: "Zone3",
    image: "https://www.swimoutlet.com/cdn/shop/files/8639959105704-highvisorange-1a.jpg?v=1726984464",
    link: "https://www.swimoutlet.com/products/zone-3-neoprene-swim-cap-8173017?variant=49781284995240&color=highvisorange&size=xsmall&utm_source=google&utm_medium=cpc&utm_campaign=google-shopping&utm_source=google&campaignid=17954165185&device=c&adtype=pla&nbt=nb%3Aadwords%3Ax%3A17954165185%3A%3A&nb_adtype=pla&nb_mi=1060504&nb_pc=online&nb_pi=ps8173017-0005&gad_source=1&gbraid=0AAAAAD_vvNHXaJOKRHpe0Yx6wbqLqLY4m&gclid=CjwKCAjw5PK_BhBBEiwAL7GTPQgWWkxcCCtOYZg-XKAN10tRWegywklLIuD7D5hd8Vu_ZQlFTipLGBoCKEYQAvD_BwE"
  },
  {
    name: "Blueseventy Thermal Gloves",
    type: "Open Water Gear",
    price: 50,
    level: "Advanced",
    brand: "Blueseventy",
    image: "https://www.swimoutlet.com/cdn/shop/files/8639081709736-black-1a.jpg?v=1726898712",
    link: "https://www.swimoutlet.com/products/blueseventy-thermal-swim-gloves-8124135?variant=49770485121192&color=black&size=lxl&utm_source=google&utm_medium=cpc&utm_campaign=google-shopping&utm_source=google&campaignid=17954165185&device=c&adtype=pla&nbt=nb%3Aadwords%3Ax%3A17954165185%3A%3A&nb_adtype=pla&nb_mi=1060504&nb_pc=online&nb_pi=ps8124135-0002&gad_source=1&gbraid=0AAAAAD_vvNHXaJOKRHpe0Yx6wbqLqLY4m&gclid=CjwKCAjw5PK_BhBBEiwAL7GTPfBziMnNeNJVIkUZ5Sn05ZQxY0FAJIFSM71Thhwc-Sfj81V0F8kHGxoC-A4QAvD_BwE"
  },

  // FLOATATION DEVICES
  {
    name: "Taupe Kids Float",
    type: "Floatation Devices",
    price: 45,
    level: "Kids",
    brand: "Atlas",
    image: "https://shopatlasgrey.com/cdn/shop/files/b1efcbe581214899e13349738190441c51a9aca586ed7065b30eeeb4e6686b95.png?v=1743256325&width=900",
    link: "https://shopatlasgrey.com/products/taupe-kids-float?currency=USD&variant=46522104512766&utm_source=google&utm_medium=cpc&utm_campaign=Google%20Shopping&stkn=8d24c355d356&tw_source=google&tw_adid=700322606102&tw_campaign=21316967449&gad_source=1&gbraid=0AAAAAokVi10hR0y2dB0V9-vvrIm4xo5br&gclid=CjwKCAjw5PK_BhBBEiwAL7GTPaUxvGGv7iwj2K1DL1_YXC5Fwbcik3C6b03MzaIPw3hJLmyz3n8KfhoCkOoQAvD_BwE"
  },
  {
    name: "WePool Pool Noodle, 2 Pack",
    type: "Floatation Devices",
    price: 4,
    level: "All levels",
    brand: "WePool",
    image: "https://i5.walmartimages.com/seo/Summer-Clearance-WePool-Pool-Noodle-2-Pack-of-59-Large-Hollow-Foam-Pool-Swim-Noodle-Bright-Foam-Noodles-for-Swimming-Floating-and-Craft-Projects_49216daa-24cb-49aa-b845-1830218ad69b.9cc656c17ab45c39e43318cf0fe5ffe5.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF",
    link: "https://www.walmart.com/ip/Summer-Clearance-WePool-Pool-Noodle-2-Pack-of-59-Large-Hollow-Foam-Pool-Swim-Noodle-Bright-Foam-Noodles-for-Swimming-Floating-and-Craft-Projects/15857215062?wmlspartner=wlpa&selectedSellerId=102499246&selectedOfferId=15E7D9FECD873DFFA0C450FF1F0A2994&conditionGroupCode=1&wmlspartner=wlpa&cn=FY25-ENTP-PMAX_cnv_dps_dsn_dis_ad_entp_e_n&gclsrc=aw.ds&adid=2222222229715857215062_102499246_0000000000_21407473164&wl0=&wl1=x&wl2=c&wl3=&wl4=&wl5=9031083&wl6=&wl7=&wl8=&wl9=pla&wl10=5447538576&wl11=online&wl12=15857215062_102499246&veh=sem&gad_source=1&gbraid=0AAAAADmfBIopTcqB7mOkdQ2NwFBgm4AsN&gclid=CjwKCAjw5PK_BhBBEiwAL7GTPYAPkvzx_ENTYfLVcwjEz6mg03Naju_BmDroE0tKU_xW2Ieyra8KDxoCRp0QAvD_BwE"
  },
  {
    name: "Fitness Swim Float Jog Belt",
    type: "Floatation Devices",
    price: 26,
    level: "Intermediate",
    brand: "Aqua Jogger",
    image: "https://www.swimoutlet.com/cdn/shop/files/8638441423016-purple-1a.jpg?v=1727271171",
    link: "https://www.swimoutlet.com/products/sporti-fitness-swim-float-jog-belt-22462?variant=49762411020456&color=purple&size=lxl&utm_source=google&utm_medium=cpc&utm_campaign=google-shopping&utm_source=google&campaignid=22021243562&adgroupid=178856630624&targetid=pla-355273784616&device=c&creativeid=725202451143&adtype=pla&nbt=nb%3Aadwords%3Ag%3A22021243562%3A178856630624%3A725202451143&nb_adtype=pla&nb_ti=pla-355273784616&nb_mi=1060504&nb_pc=online&nb_pi=ps22462-0008&nb_ppi=355273784616&gad_source=1&gbraid=0AAAAAD_vvNFdPOp6dEKzElbBgAbz36HeF&gclid=CjwKCAjw5PK_BhBBEiwAL7GTPYs2vi_6qYTzLWYpwsF5I0InJiCus0LK7yLMpIryHjsX0d-06Jb6mxoC32IQAvD_BwE"
  },

  // What is Seabass wearing?
  {
    name: "Volcom Hawaii Kona HI Long Sleeve Rashguard",
    type: "Seabass",
    price: 70,
    level: "All levels",
    brand: "Volcom",
    image: "https://images-ext-1.discordapp.net/external/sY-DpDtQ_W5thgIdYolTGYjdI_B9gmX84LU_dLeoOUk/https/di2ponv0v5otw.cloudfront.net/posts/2024/05/19/664a1afff884716b3f3975ec/s_664a1afff884716b3f3975ed.jpeg?format=webp&width=600&height=600",
    link: "https://example.com"
  },
  {
    name: "Koa Boardshort",
    type: "Seabass",
    price: 70,
    level: "All levels",
    brand: "AVVA",
    image: "https://images-ext-1.discordapp.net/external/wxtJngV9KNRlPP2jFBG12iTNukcghdeEmziaTJYSGZI/%3Fv%3D1743445899/https/avvabrand.com/cdn/shop/files/koablk_2f907ba9-0cbd-44d2-9bc8-bcedde6dbeb5.png?format=webp&quality=lossless&width=544&height=600",
    link: "https://example.com"
  },
  {
    name: "Nomadix Original Towel: Poolside Black",
    type: "Seabass",
    price: 40,
    level: "All levels",
    brand: "Nomadix",
    image: "https://www.nomadix.co/cdn/shop/files/nomadix-original-towel-backside_0acbb247-a1d4-4a2b-ad7a-35e93a17c189.jpg?crop=center&height=800&v=1741818501&width=800",
    link: "https://www.nomadix.co/products/pool-side-black"
  },
  {
    name: "Arena Cobra Ultra",
    type: "Seabass",
    price: 50,
    level: "Advanced",
    brand: "Arena",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeeAX5mwCV8YZeWbcxndWp6OOxN0vI46GUWA&s",
    link: "https://www.amazon.com/Goggles-Yellow-Copper-Anti-Fog-Mirror/dp/B07R5BY1H3/ref=asc_df_B07R5BY1H3?mcid=f9208a58df1f361fa4d17e2306b9622d&hvocijid=858070720441856369-B07R5BY1H3-&hvexpln=73&tag=hyprod-20&linkCode=df0&hvadid=721245378154&hvpos=&hvnetw=g&hvrand=858070720441856369&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9031083&hvtargid=pla-2281435180298&th=1"
  },
  {
    name: "Fox 40 Classic Whistle",
    type: "Seabass",
    price: 5,
    level: "Lifeguard",
    brand: "Fox 40",
    image: "https://m.media-amazon.com/images/I/71EdozoHKkL._AC_SL1500_.jpg",
    link: "https://www.amazon.com/Fox-40-Classic-Official-Whistle/dp/B00020SE1A"
  },
  
  {
    name: "Rescue Tube",
    type: "Seabass",
    price: 53,
    level: "Lifeguard",
    brand: "Seablast",
    image: "https://m.media-amazon.com/images/I/413WXQjnlVL._AC_.jpg",
    link: "https://www.amazon.com/Rise-Aquatics-Standard-rescue-Tube/dp/B00JZQUTAQ?source=ps-sl-shoppingads-lpcontext&ref_=fplfs&smid=A1MK3EL1DZNNOE&gQT=1&th=1&psc=1"
  },
  
];

// GLOBAL STATE TO TRACK FILTERED VIEW
// Current gear being displayed, initially the full list
let currentFilteredGear = [...swimGear];
let sortAscending = true; 



// This function adds cards to the page to display the data in the array
function showCards(data = swimGear) {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  const templateCard = document.querySelector(".card");



  for (let gear of data) {
    const nextCard = templateCard.cloneNode(true); // Copy the template card
    nextCard.style.display = "block";

    const cardHeader = nextCard.querySelector("h2");
    cardHeader.textContent = gear.name;

    const cardImage = nextCard.querySelector("img");
    cardImage.src = gear.image;
    cardImage.alt = gear.name;

    const list = nextCard.querySelector("ul");
    list.innerHTML = `
      <li>Type: ${gear.type}</li>
      <li>Price: $${gear.price}</li>
      <li>Level: ${gear.level}</li>
      <li>Brand: ${gear.brand}</li>
    `;

    const buyButton = document.createElement("a");
buyButton.href = gear.link || "#";
buyButton.target = "_blank";
buyButton.innerHTML = `<button class="buy-button">Buy Now</button>`;
nextCard.querySelector(".card-content").appendChild(buyButton);


    cardContainer.appendChild(nextCard); // Add new card to the container
  }
}





// This function filters the gear based on the dropdown value
function filterByType() {
  const selectedType = document.getElementById("gearTypeFilter").value;

  if (selectedType === "all") {
    currentFilteredGear = [...swimGear];
  } else {
    currentFilteredGear = swimGear.filter(item => item.type === selectedType);
  }

  showCards(currentFilteredGear);
}




// This function sorts by price low to high
function sortByPrice() {
  currentFilteredGear.sort((a, b) => a.price - b.price);
  showCards(currentFilteredGear);
}





// This function toggles sort order (asc/desc)
function toggleSortByPrice() {
  sortAscending = !sortAscending;
  currentFilteredGear.sort((a, b) =>
    sortAscending ? a.price - b.price : b.price - a.price
  );
  showCards(currentFilteredGear);
}




// This calls the showCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", () => {
  currentFilteredGear = [...swimGear]; // Initialize full list
  showCards(currentFilteredGear);
});




function quoteAlert() {
  window.open("https://www.instagram.com/seablastswim", "_blank");
}

function suggestRandomGear() {
  const item = swimGear[Math.floor(Math.random() * swimGear.length)];
  alert(`Have you tried the ${item.name}? Great for ${item.level} swimmers!`);
}
