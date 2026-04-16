// 铃兰之剑角色数据库
const CHARACTER_DB = {
    legend: {
        "贝拉": { type: "毁灭者", pixelUrl: "https://patchwiki.biligame.com/images/llzj/a/ad/fnfgreguwj9k0vbbzd53pzzhc0qh3b4.png" },
        "古兹曼": { type: "毁灭者", pixelUrl: "https://patchwiki.biligame.com/images/llzj/1/18/rjwhqinzf6q7mtwle6fevxs72y1z36m.png" },
        "萨曼莎": { type: "守望者", pixelUrl: "https://patchwiki.biligame.com/images/llzj/d/d4/2nbzf3xwn7m46a99rk9h5wn4j88ign7.png" },
        "米格尔": { type: "守望者", pixelUrl: "https://patchwiki.biligame.com/images/llzj/d/d4/nrdhgrsw7ju0dlqpis29r0akqr7gtwq.png" },
        "泽维尔": { type: "粉碎者", pixelUrl: "https://patchwiki.biligame.com/images/llzj/c/c4/lj9lwkay5sldwysr0ovkh9s9i8q8ij0.png" },
        "法卡尔": { type: "守望者", pixelUrl: "https://patchwiki.biligame.com/images/llzj/e/e3/2bkj352g2jxzbmq0q2l5wz7ds8mb2ct.png" },
        "麦莎": { type: "防御者", pixelUrl: "https://patchwiki.biligame.com/images/llzj/1/1d/gs0fmkwtmeelvzxru1vi08zxanu5z25.png" },
        "科尔": { type: "突袭者", pixelUrl: "https://patchwiki.biligame.com/images/llzj/1/12/fex0rrtdyc21bfa5vx7xs94nwjlw3lf.png" },
        "迪塔里奥": { type: "毁灭者", pixelUrl: "https://patchwiki.biligame.com/images/llzj/6/6d/b610673hs43yfy9hblgopevt7n0r9ir.png" },
        "拉维耶": { type: "粉碎者", pixelUrl: "https://patchwiki.biligame.com/images/llzj/3/31/n9if053ex6pvpsm2s9kqmx9dccbqa57.png" },
        "莉莉薇儿": { type: "守望者", pixelUrl: "https://patchwiki.biligame.com/images/llzj/a/a3/g3vwyrj10czvrqe1s6cgv2dvzm11b39.png" },
        "歌洛莉亚": { type: "守望者", pixelUrl: "https://patchwiki.biligame.com/images/llzj/f/f8/i9s3ikfwzaunky8vhjrzfs64h3rlg4m.png" },
        "泰登": { type: "防御者", pixelUrl: "https://patchwiki.biligame.com/images/llzj/d/dd/ryugrd31sbyp9f50h3mp0vjq0z2dtpx.png" },
        "诺诺薇儿": { type: "突袭者", pixelUrl: "https://patchwiki.biligame.com/images/llzj/4/41/3342n8h6lkfis6prfrb08pwjlmlplcs.png" },
        "列奥尼德": { type: "粉碎者", pixelUrl: "https://patchwiki.biligame.com/images/llzj/9/9b/bi1ke6cew5y3hq9k3buvizvkqtqaaz4.png" },
        "伊奇": { type: "粉碎者", pixelUrl: "https://patchwiki.biligame.com/images/llzj/f/fb/l22s1tdrdm1ls0725whqstozswvx3ve.png" },
        "内尔伽勒": { type: "防御者", pixelUrl: "https://patchwiki.biligame.com/images/llzj/0/09/hjz54z4jkwr1ou70bm1alfebbf1f0cv.png" },
        "伦伽勒": { type: "毁灭者", pixelUrl: "https://patchwiki.biligame.com/images/llzj/a/a6/dxe0eqdixrivih1awjpgt8hrr518s92.png" },
        "伊南娜": { type: "守望者", pixelUrl: "https://patchwiki.biligame.com/images/llzj/a/a4/tao0ggczgnof1yjh6xcdoqrvvobxr8p.png" },
        "嘉西娅": { type: "突袭者", pixelUrl: "https://patchwiki.biligame.com/images/llzj/1/15/4woe52ddd4ew44zpqt2t07tfgqhwamb.png" },
        "马格努斯": { type: "防御者", pixelUrl: "https://patchwiki.biligame.com/images/llzj/4/4d/hhb7l9kskitbf6lxxkykg2lzl44jwes.png" },
        "艾达": { type: "守望者", pixelUrl: "https://patchwiki.biligame.com/images/llzj/2/2a/r18nh56r7b8sq3gw7xi9ggyfimoa7nh.png" },
        "茉茉": { type: "毁灭者", pixelUrl: "https://patchwiki.biligame.com/images/llzj/b/b4/nwhwhyuzk6xtnfeuxnq4nd9eqddlv9d.png" },
        "索菲亚": { type: "突袭者", pixelUrl: "https://patchwiki.biligame.com/images/llzj/b/be/q3wm0wduu73rmrf4vxmyhj532a7ddaj.png" },
        "奥古斯特": { type: "粉碎者", pixelUrl: "https://patchwiki.biligame.com/images/llzj/4/44/ezqu5j5zvw2p0vthzr51lwqbvqipji3.png" },
        "席梦娜": { type: "守望者", pixelUrl: "https://patchwiki.biligame.com/images/llzj/e/e8/hqxekdduyqnm1pxram6wy0lmnx3spuh.png" },
        "阿列克谢": { type: "防御者", pixelUrl: "https://patchwiki.biligame.com/images/llzj/6/6b/4xh0md040lve8ou986q25ilnun05srz.png" },
        "蔻蔻娜": { type: "防御者", pixelUrl: "https://patchwiki.biligame.com/images/llzj/1/1d/8nj7qpv08q9tm997fsdf5zpw0aob3ak.png" },
        "阿坎贝": { type: "毁灭者", pixelUrl: "https://patchwiki.biligame.com/images/llzj/3/3a/6vojf1gl9gt9abd0oan74tod9si69vi.png" },
        "哈斯娜": { type: "突袭者", pixelUrl: "https://patchwiki.biligame.com/images/llzj/2/25/6xz9nwb8839cltgjjt0ztapwqr2erki.png" },
        "霍玛": { type: "粉碎者", pixelUrl: "https://patchwiki.biligame.com/images/llzj/9/9c/r7ywbkvc5ftcbuxgv2lw9lrd0nzp8r3.png" },
        "卡丽丝": { type: "毁灭者", pixelUrl: "https://patchwiki.biligame.com/images/llzj/4/43/cr5f3qm7z1aguqij7whta2tyex98zz7.png" },
        "夏可露露": { type: "突袭者", pixelUrl: "https://patchwiki.biligame.com/images/llzj/9/98/737eh39wdeji0l2szuuphuo2v15brza.png" },
        "阿加塔": { type: "守望者", pixelUrl: "https://patchwiki.biligame.com/images/llzj/8/81/hwufkvcqvshcos515d8z7fhmtgkcxz2.png" },
        "塔埃尔": { type: "守望者", pixelUrl: "https://patchwiki.biligame.com/images/llzj/0/02/58sgccanxuec7bqjiz8b2c7g9jaj2x0.png" },
        "拉维耶•初夏记忆": { type: "突袭者", pixelUrl: "https://patchwiki.biligame.com/images/llzj/0/03/nulvpked1tf94o5e0cuyiyp5ar652ky.png" },
        "帕米娜": { type: "粉碎者", pixelUrl: "https://patchwiki.biligame.com/images/llzj/3/32/31pfe6faht6n28w6f1950zyikkjejke.png" },
        "翠斯坦": { type: "毁灭者", pixelUrl: "https://patchwiki.biligame.com/images/llzj/9/92/onzyzko1ds2mczqyhu8tqztyhigza5g.png" },
        "莉拉": { type: "防御者", pixelUrl: "https://patchwiki.biligame.com/images/llzj/3/3d/gi4m8i0755ujthip5l66gflyvezyk1f.png" },
        "索菲亚•夏日约定": { type: "守望者", pixelUrl: "https://patchwiki.biligame.com/images/llzj/a/a3/skswcrk3s477twkaoybgir0sskcf0xr.png" },
        "奇亚": { type: "毁灭者", pixelUrl: "https://patchwiki.biligame.com/images/llzj/a/a4/f4vg0w3kruyenmdn1x97ddsbs832tok.png" },
        "柯瓦雷": { type: "毁灭者", pixelUrl: "https://patchwiki.biligame.com/images/llzj/2/2d/hr83g997v7fhwr0iowpuakbsbek1993.png" },
        "露维塔": { type: "粉碎者", pixelUrl: "https://patchwiki.biligame.com/images/llzj/f/f9/hps9io0dccssen9yy2nul0fb920gont.png" },
        "伊斯特拉": { type: "突袭者", pixelUrl: "https://patchwiki.biligame.com/images/llzj/a/a7/ofbfcl64i6pio4yu75icivgxkafh3uf.png" },
        "芙拉维娅": { type: "防御者", pixelUrl: "https://patchwiki.biligame.com/images/llzj/3/31/1a1jupri71rftzkzmqd6enls3nivg6q.png" },
        "流星队": { type: "守望者", pixelUrl: "https://patchwiki.biligame.com/images/llzj/4/4a/a479dqclbbetbrf2b9qel727dxwk0tg.png" },
        "鲁特菲": { type: "突袭者", pixelUrl: "https://patchwiki.biligame.com/images/llzj/f/f3/gz3dglirnfsgl14x2e59lu3yb7onmic.png" },
        "爱莎": { type: "防御者", pixelUrl: "https://patchwiki.biligame.com/images/llzj/3/30/e0khirolvxdnf5qzhpca7zt6d7bst4n.png" },
        "阿芙拉": { type: "毁灭者", pixelUrl: "https://patchwiki.biligame.com/images/llzj/5/50/okd0marmmp345etnehhgmlg4q02i44v.png" },
        "伊南娜•铃兰之剑": { type: "守望者", pixelUrl: "https://patchwiki.biligame.com/images/llzj/d/d9/9m9fo9a7v3hpcml4bm9h9yrsmvrfk8c.png" },
        "妮蒂娅": { type: "突袭者", pixelUrl: "https://patchwiki.biligame.com/images/llzj/0/02/293n1dxv4npws9qcw902x3vaostrw29.png" },
        "黎各": { type: "防御者", pixelUrl: "https://patchwiki.biligame.com/images/llzj/e/ec/huw1xjmckcf596mpz71rmrjfxs5ekii.png" },
        "柯莱丹萨": { type: "守望者", pixelUrl: "https://patchwiki.biligame.com/images/llzj/f/f7/0242bdx59f8m94mr006husxyxcygg9b.png" },
        "帕西法尔": { type: "毁灭者", pixelUrl: "https://patchwiki.biligame.com/images/llzj/f/fe/itu3i5xyipw39edryfo9g6jj5x2mnw0.png" },
        "萨曼莎•不灭微光": { type: "守望者", pixelUrl: "https://patchwiki.biligame.com/images/llzj/6/67/tuh5usp8f5nf4sk9s99879hh7sveh0s.png" },
        "伊瑟琳德": { type: "突袭者", pixelUrl: "https://patchwiki.biligame.com/images/llzj/4/49/6rhy3j8gh4kc4c07njjpk7rs6bm5yma.png" },
        "全装甲麦莎": { type: "守望者", pixelUrl: "https://patchwiki.biligame.com/images/llzj/1/12/nt408u0k69uf8mjdmbkskz6giidh7fz.png" },
        "卡姆洛特": { type: "粉碎者", pixelUrl: "https://patchwiki.biligame.com/images/llzj/6/6f/pz03qeoaw8jfy0awsu8jbupnxt4k30z.png" },
        "法卡尔•卫国之箭": { type: "防御者", pixelUrl: "https://patchwiki.biligame.com/images/llzj/f/fc/agcepkgiw1goinqy1n4sks6u1i101dw.png" },
        "伦伽勒•传承之枪": { type: "粉碎者", pixelUrl: "https://patchwiki.biligame.com/images/llzj/2/28/4e1lm3re7p9968x76e2z0u4lh4ai0pv.png" },
        "露卡玛尔": { type: "突袭者", pixelUrl: "https://patchwiki.biligame.com/images/llzj/1/14/93hb30hg2uuea4re8tgcizqbf6i6oks.png" },
        "波奇茸茸": { type: "毁灭者", pixelUrl: "https://patchwiki.biligame.com/images/llzj/c/c4/q9ugf9vgsge9pg71nbwsc07s7tftl5e.png" },
        "沙姆斯": { type: "粉碎者", pixelUrl: "https://patchwiki.biligame.com/images/llzj/8/89/bir7bnq7lgdmkaszt0dsx491k4lcsqj.png" },
        "克拉拉": { type: "防御者", pixelUrl: "https://patchwiki.biligame.com/images/llzj/e/ea/g4ij015amt421rb6lfdhpnp7slzox11.png" },
        "赛琳娜": { type: "突袭者", pixelUrl: "https://patchwiki.biligame.com/images/llzj/3/39/ju6faj1p8ezcpelstx51z8fy6tfou5l.png" },
        "叶迦内": { type: "守望者", pixelUrl: "https://patchwiki.biligame.com/images/llzj/5/5d/hn3emus0z4dfbv9sg0dimkq2zx9ko0c.png" },
        "赫砂": { type: "防御者", pixelUrl: "https://patchwiki.biligame.com/images/llzj/2/22/gh1aobtny0nadtu8tzzcnd9jr08nwpi.png" },
        "沙娜姿": { type: "毁灭者", pixelUrl: "https://patchwiki.biligame.com/images/llzj/5/58/q91m80xff4ufgopkjs1uh9my0fzjbg0.png" },
        "基安希尔": { type: "粉碎者", pixelUrl: "https://patchwiki.biligame.com/images/llzj/a/a2/8m4i5e1rqpxwoirtaj5ulg3xupyjqlc.png" },
        "安娜": { type: "粉碎者", pixelUrl: "https://patchwiki.biligame.com/images/llzj/9/9b/peh1k2c1rvxvqxq9sii1nabe3ww7h0d.png" },
        "阿列克谢•风雪孤行": { type: "毁灭者", pixelUrl: "https://patchwiki.biligame.com/images/llzj/9/92/m5qnxypakkqiqrj2slh3weoso6r7ahs.png" },
        "罗格妮达": { type: "守望者", pixelUrl: "https://patchwiki.biligame.com/images/llzj/2/2b/mcd0379119val9qrs51149o4sbss97i.png" },
        "乌莉娅": { type: "突袭者", pixelUrl: "https://patchwiki.biligame.com/images/llzj/c/c7/q3mti7ae4qjxzwldqcfpwwui0epxcn7.png" },
        "伊凡": { type: "毁灭者", pixelUrl: "https://patchwiki.biligame.com/images/llzj/b/be/gjfxxkdh952wf706kr6sotwjkhqoopw.png" },
        "芬恩": { type: "防御者", pixelUrl: "https://patchwiki.biligame.com/images/llzj/7/73/5x4d8x6vsfe41yz80z43yv4mffoa4gu.png" },
        "塞娜": { type: "粉碎者", pixelUrl: "https://patchwiki.biligame.com/images/llzj/6/6c/r7sqvm74u1x1jblw6ebib2r2xx8eydt.png" }
    },
    epic: {
        "烛火": { pixelUrl: "https://patchwiki.biligame.com/images/llzj/a/a9/0a3qha1wcxqr154bokdt4mpr40pii72.png" },
        "炎之魔女": { pixelUrl: "https://patchwiki.biligame.com/images/llzj/a/a4/ekslm056gl6jylu1u15wg6xx9v3fwtr.png" },
        "蝴蝶": { pixelUrl: "https://patchwiki.biligame.com/images/llzj/a/ac/7n8zrw2n5h5tmnikjbm9d140o0vs9wc.png" },
        "风暴神斧": { pixelUrl: "https://patchwiki.biligame.com/images/llzj/7/7d/5bqn31fegrspa68amp9gfvenksi6pgw.png" },
        "志愿者": { pixelUrl: "https://patchwiki.biligame.com/images/llzj/9/99/kg0yx9qgkyucqcsx5i2czh1yew3jdqt.png" },
        "魔禁": { pixelUrl: "https://patchwiki.biligame.com/images/llzj/5/58/rvpok7pg9dleijyelb3dovqwxj9lt2b.png" },
        "摧城": { pixelUrl: "https://patchwiki.biligame.com/images/llzj/7/7e/fscao6p5ktz1q6ergop4d7i5ujeys8u.png" },
        "鞭笞": { pixelUrl: "https://patchwiki.biligame.com/images/llzj/7/75/ng8pr12mkbx1ysoam32o4en3jivvyav.png" },
        "怒风": { pixelUrl: "https://patchwiki.biligame.com/images/llzj/b/b0/oe2ugvt1svge3coreiw23xb2o8de1j1.png" },
        "天使": { pixelUrl: "https://patchwiki.biligame.com/images/llzj/0/07/qwcf56trhxeykk9ia7hzkpdhanx61ns.png" },
        "黯心": { pixelUrl: "https://patchwiki.biligame.com/images/llzj/b/b5/qjos3eva9vwweittvic95k0tzoclstz.png" },
        "兵蜂": { pixelUrl: "https://patchwiki.biligame.com/images/llzj/6/67/j1xuajul4xyveuw2iug16xqyga9vrd7.png" },
        "神威": { pixelUrl: "https://patchwiki.biligame.com/images/llzj/d/dd/ro00j9f7pyeruush4yyawtraz81q16u.png" },
        "耀光": { pixelUrl: "https://patchwiki.biligame.com/images/llzj/b/b3/8irfu25566zbjmmxe5ert4ycw3f4c7k.png" },
        "锐眼": { pixelUrl: "https://patchwiki.biligame.com/images/llzj/b/b4/h8srh8i603f0luf2y1ppic6fyvu5hcb.png" },
        "执剑者": { pixelUrl: "https://patchwiki.biligame.com/images/llzj/c/cb/lvcb719whlgm3gwt46dr1s3bav8zk8t.png" },
        "红隼": { pixelUrl: "https://patchwiki.biligame.com/images/llzj/9/91/5xnrf6bgiasaylvgpjfaeuxqh26mquq.png" },
        "暗夜": { pixelUrl: "https://patchwiki.biligame.com/images/llzj/4/46/7walz049yw3f21ltsw4wm2e5eyyk1cn.png" },
        "神恩": { pixelUrl: "https://patchwiki.biligame.com/images/llzj/d/d6/qac1vhvtanzov92vobkd8pl1jwdyie1.png" },
        "利刃": { pixelUrl: "https://patchwiki.biligame.com/images/llzj/4/48/6glj4jx4d4ah1fyqj9s9pxx7c663dc8.png" },
        "神闪": { pixelUrl: "https://patchwiki.biligame.com/images/llzj/7/7a/etrugq2l3rvuh0cnmiwydk7dltzdbb4.png" },
        "苦药": { pixelUrl: "https://patchwiki.biligame.com/images/llzj/8/85/51yc2i0153wjpfaprgq7zjp3ntpjpsi.png" },
        "暗芒": { pixelUrl: "https://patchwiki.biligame.com/images/llzj/e/ee/en4gcsz27wnvic5ny388k7kasals8n6.png" },
        "烈啸": { pixelUrl: "https://patchwiki.biligame.com/images/llzj/8/8e/m6c003ygsal7d4463kdw5ybryhwd37r.png" },
        "绯砂": { pixelUrl: "https://patchwiki.biligame.com/images/llzj/c/c3/p9rg8nv17mr76yyo8nj1pxhxj4a95dm.png" },
        "噩骸": { pixelUrl: "https://patchwiki.biligame.com/images/llzj/9/94/g2346ug1434xzj1eujuzjfd6q9ztsrl.png" },
        "狂鬃": { pixelUrl: "https://patchwiki.biligame.com/images/llzj/6/66/3fbmq5fjyd6kx0ru4viku3s8p440cvd.png" },
        "獠牙": { pixelUrl: "https://patchwiki.biligame.com/images/llzj/d/d3/iultbcuj7mhibawxjp0irx3noqxsgd0.png" }
    },
    elite: {
        "薇尔德斥候": { pixelUrl: "https://patchwiki.biligame.com/images/llzj/6/60/o2k8v2skwgf7cxvagphtejjboxp1f5r.png" },
        "王国军弓箭手": { pixelUrl: "https://patchwiki.biligame.com/images/llzj/3/36/mp7dcoc51sd7vld68rn7g4k4dflltd0.png" },
        "黑暗之光火术士": { pixelUrl: "https://patchwiki.biligame.com/images/llzj/8/84/alek06ih85f8qi97a1uz6h1iv8wu40d.png" },
        "王国军火术士": { pixelUrl: "https://patchwiki.biligame.com/images/llzj/1/1e/egexmnkcc7shorzd1zjn9omf6ajihmq.png" },
        "法皇国投枪兵": { pixelUrl: "https://patchwiki.biligame.com/images/llzj/0/0d/1b1mnf0g46hpqkmb70s576elk2zdjta.png" },
        "法皇国冰术师": { pixelUrl: "https://patchwiki.biligame.com/images/llzj/e/eb/hpctk53te04q59gm9hf7wh2b36shjcv.png" },
        "骑士同盟长枪兵": { pixelUrl: "https://patchwiki.biligame.com/images/llzj/7/7f/3kwc9hozi3yfx0g70rae9buzg9t2sth.png" },
        "王国军剑盾兵": { pixelUrl: "https://patchwiki.biligame.com/images/llzj/8/8d/lj7vu0mqmjyiol4gzs7hmns2mpwm7lk.png" },
        "王国军长枪兵": { pixelUrl: "https://patchwiki.biligame.com/images/llzj/c/c9/9ish8req10d5xndeotm0zl2kk9em9er.png" },
        "骑士团盾卫": { pixelUrl: "https://patchwiki.biligame.com/images/llzj/3/37/chcb43a47gg1rdj5zd7cs9sshlf3tfn.png" },
        "黑暗之光冰术士": { pixelUrl: "https://patchwiki.biligame.com/images/llzj/7/70/8az05v4msisnvpkpkt9wdwphi203xzo.png" },
        "王国军光术士": { pixelUrl: "https://patchwiki.biligame.com/images/llzj/b/b4/j5qojtvnxrx87ashrr3wzslfv57elwx.png" },
        "法皇国剑盾兵": { pixelUrl: "https://patchwiki.biligame.com/images/llzj/3/38/alae4niisps7icp9r3fz934apcjs81j.png" },
        "埃拉曼商队盾卫": { pixelUrl: "https://patchwiki.biligame.com/images/llzj/5/5c/ebz6iit0ecqu12z5c5setfy0khpe9e7.png" },
        "埃拉曼沙漠舞娘": { pixelUrl: "https://patchwiki.biligame.com/images/llzj/4/42/bz1a3rj0xhm0svnjoo4xd5d8oc4v6we.png" },
        "埃拉曼重斧斗士": { pixelUrl: "https://patchwiki.biligame.com/images/llzj/4/40/isepuj1xeff0y130soqu7ba0aai8ly9.png" },
        "露西亚蛮熊盾卫": { pixelUrl: "https://patchwiki.biligame.com/images/llzj/0/0c/28rqlb8267uupog8xvxz12flhlq5bb7.png" },
        "露西亚雪鹿祭司": { pixelUrl: "https://patchwiki.biligame.com/images/llzj/7/76/mk49mumymoi16trjujyz6emavyhzn2x.png" },
        "露西亚野狐投枪兵": { pixelUrl: "https://patchwiki.biligame.com/images/llzj/1/12/e0mwlqzds6ij50c40oeoahvy9hqpzh9.png" },
        "露西亚银狼猎手": { pixelUrl: "https://patchwiki.biligame.com/images/llzj/9/96/631pihklmyxx98epdmf4bt1j60yuo5q.png" }
    },
    common: {
        "无法者巨斧兵": { pixelUrl: "https://patchwiki.biligame.com/images/llzj/d/d0/pkdc6pqs4d0qqx6wrabhfs9qiuun5dd.png" },
        "雇佣剑盾兵": { pixelUrl: "https://patchwiki.biligame.com/images/llzj/f/f2/h4lpk9ww7zrbpii9a7h9cus9jhut5es.png" },
        "雇佣弓手": { pixelUrl: "https://patchwiki.biligame.com/images/llzj/c/c4/ieyp3qcglwchjvz2sd4tp73kj57csx8.png" },
        "雇佣长枪兵": { pixelUrl: "https://patchwiki.biligame.com/images/llzj/f/f5/274l01h23k1ip1lu4rhiykhb4xwlikm.png" },
        "雇佣刺客": { pixelUrl: "https://patchwiki.biligame.com/images/llzj/0/0b/gx83e39tph3nxpsn5kicnkt7jufu4rf.png" },
        "无法者斧盾兵": { pixelUrl: "https://patchwiki.biligame.com/images/llzj/1/14/hgym0eukzn4216rysxhm4skd2gksacr.png" },
        "无法者长枪兵": { pixelUrl: "https://patchwiki.biligame.com/images/llzj/f/f6/osja7xmjcdb9hhwgyz0xhpa4obzh693.png" },
        "无法者刺客": { pixelUrl: "https://patchwiki.biligame.com/images/llzj/b/bb/5wpj438mssl62omnowzwiy7t5mjskx8.png" },
        "无法者弓兵": { pixelUrl: "https://patchwiki.biligame.com/images/llzj/4/4c/e3lp7bhqbym9ej1zdsgrb3pbuumrtcp.png" },
        "无法者弩兵": { pixelUrl: "https://patchwiki.biligame.com/images/llzj/5/5b/ojkorv2yp1hgr4h1asqep9qu8qnxdlc.png" },
        "埃拉曼商队斥候队斥候": { pixelUrl: "https://patchwiki.biligame.com/images/llzj/7/79/isfxp4jvlksp1lys4cir9bbhgdbyj0y.png" }
    }
};

// 角色顺序数组
const LEGEND_ORDER = [
    "贝拉", "古兹曼", "萨曼莎", "米格尔", "泽维尔", "法卡尔", "麦莎", "科尔",
    "迪塔里奥", "拉维耶", "莉莉薇儿", "歌洛莉亚", "泰登", "诺诺薇儿", "列奥尼德",
    "伊奇", "内尔伽勒", "伦伽勒", "伊南娜", "嘉西娅", "马格努斯", "艾达", "茉茉",
    "索菲亚", "奥古斯特", "席梦娜", "阿列克谢", "蔻蔻娜", "阿坎贝", "哈斯娜",
    "霍玛", "卡丽丝", "夏可露露", "阿加塔", "塔埃尔", "拉维耶•初夏记忆",
    "帕米娜", "翠斯坦", "莉拉", "索菲亚•夏日约定", "奇亚", "柯瓦雷", "露维塔",
    "伊斯特拉", "芙拉维娅", "流星队", "鲁特菲", "爱莎", "阿芙拉", "伊南娜•铃兰之剑",
    "妮蒂娅", "黎各", "柯莱丹萨", "帕西法尔", "萨曼莎•不灭微光", "伊瑟琳德",
    "全装甲麦莎", "卡姆洛特", "法卡尔•卫国之箭", "伦伽勒•传承之枪", "露卡玛尔",
    "波奇茸茸", "沙姆斯", "克拉拉", "赛琳娜", "叶迦内", "赫砂", "沙娜姿",
    "基安希尔", "安娜", "阿列克谢•风雪孤行", "罗格妮达", "乌莉娅", "伊凡", "芬恩",
    "塞娜"
];

const EPIC_ORDER = [
    "烛火", "炎之魔女", "蝴蝶", "风暴神斧", "志愿者", "魔禁", "摧城", "鞭笞",
    "怒风", "天使", "黯心", "兵蜂", "神威", "耀光", "锐眼", "执剑者", "红隼",
    "暗夜", "神恩", "利刃", "神闪", "苦药", "暗芒", "烈啸", "绯砂", "噩骸", 
    "狂鬃", "獠牙"
];

const ELITE_ORDER = [
    "薇尔德斥候", "王国军弓箭手", "黑暗之光火术士", "王国军火术士", "法皇国投枪兵",
    "法皇国冰术师", "骑士同盟长枪兵", "王国军剑盾兵", "王国军长枪兵", "骑士团盾卫",
    "黑暗之光冰术士", "王国军光术士", "法皇国剑盾兵", "埃拉曼商队盾卫",
    "埃拉曼沙漠舞娘", "埃拉曼重斧斗士", "露西亚蛮熊盾卫", "露西亚雪鹿祭司", 
    "露西亚银狼猎手", "露西亚野狐投枪兵"
];

const COMMON_ORDER = [
    "无法者巨斧兵", "雇佣剑盾兵", "雇佣弓手", "雇佣长枪兵", "雇佣刺客",
    "无法者斧盾兵", "无法者长枪兵", "无法者刺客", "无法者弓兵", "无法者弩兵",
    "埃拉曼商队斥候队斥候"
];

// 辅助函数
function getCharacterInfo(name, rarity) {
    const db = CHARACTER_DB[rarity];
    if (db && db[name]) {
        return db[name];
    }
    return { type: '未知', pixelUrl: '' };
}

function getCharacterType(charName) {
    const char = CHARACTER_DB.legend[charName];
    return char ? char.type : '未知';
}

const ALL_LEGEND_CHARACTERS = LEGEND_ORDER.map(name => ({
    name: name,
    type: CHARACTER_DB.legend[name]?.type || '未知'
}));
