const express = require("express");
var router = express.Router();

router.get("/carousel", (req, res) => {
  console.log("get:/carousel");
  data = {
    status: 100,
    msg: "success",
    data: [
      {
        id: 0,
        image:
          "https://img2.baidu.com/it/u=1267931373,3662510004&fm=26&fmt=auto&gp=0.jpg",
        colors: ["black", "blue"],
      },
      {
        id: 1,
        image:
          "https://img2.baidu.com/it/u=2636384542,2342846786&fm=26&fmt=auto&gp=0.jpg",
        colors: ["red", "red"],
      },
      {
        id: 2,
        image:
          "https://img0.baidu.com/it/u=1397939527,1839889565&fm=26&fmt=auto&gp=0.jpg",
        colors: ["#eee", "#ddd"],
      },
      {
        id: 3,
        image:
          "https://img1.baidu.com/it/u=1677923055,2984930156&fm=224&fmt=auto&gp=0.jpg",
        colors: ["#eee", "#ddd"],
      },
      {
        id: 4,
        image:
          "https://img1.baidu.com/it/u=3266479433,1999627905&fm=26&fmt=auto&gp=0.jpg",
        colors: ["#eee", "#ddd"],
      },
      {
        id: 5,
        image:
          "https://img2.baidu.com/it/u=111713540,615806613&fm=26&fmt=auto&gp=0.jpg",
        colors: ["#eee", "#ddd"],
      },
    ],
  };
  // res.json(data)
  res.status(200).json(data);
});

router.get("/guess", (req, res) => {
  console.log("get:/guess");
  console.log(Math.floor(Math.random() * 2));
  if (Math.floor(Math.random() * 2) == 1) {
    data = {
      status: 100,
      msg: "success",
      data: [
        {
          id: 0,
          title: "标题还行啊新年健康妇女说没打算的",
          image:
            "https://img0.baidu.com/it/u=3311900507,1448170316&fm=26&fmt=auto&gp=0.jpg",
        },
        {
          id: 1,
          title: "标题2解放啦的男的可能了",
          image:
            "https://img0.baidu.com/it/u=1977302612,2281917569&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500",
        },
        {
          id: 2,
          title: "标题3将发放大量粉嫩粉嫩看到",
          image:
            "https://img2.baidu.com/it/u=1533927957,530212013&fm=11&fmt=auto&gp=0.jpg",
        },
        {
          id: 3,
          title: "标题4快放假啊到啦的那块的男",
          image:
            "https://img1.baidu.com/it/u=1577013842,2094400517&fm=26&fmt=auto&gp=0.jpg",
        },
        {
          id: 4,
          title: "标题5你过来开发了大神能打开",
          image:
            "https://img0.baidu.com/it/u=1603142686,2390225231&fm=15&fmt=auto&gp=0.jpg",
        },
        {
          id: 5,
          title: "标题6像阿信阿信阿信啊",
          image:
            "https://img2.baidu.com/it/u=3628767181,1510526444&fm=26&fmt=auto&gp=0.jpg",
        },

        // {
        //     id:6,
        //     title:'标题7',
        //     image:'https://img0.baidu.com/it/u=753733298,295471195&fm=26&fmt=auto&gp=0.jpg'
        // },
      ],
    };
    // res.json(data)
    res.status(200).json(data);
  } else {
    data = {
      status: 100,
      msg: "success",
      data: [
        {
          id: 0,
          title: "减肥河南新安县爱疯弗里德曼细腻肌肤减肥三闾大夫漫长艰难扩大",
          image:
            "https://img1.baidu.com/it/u=2753145500,3083259663&fm=26&fmt=auto&gp=0.jpg",
        },
        {
          id: 1,
          title: "激发肌肤的打击打击啊今年年初你大赛克服恐惧啊就到家",
          image:
            "https://img0.baidu.com/it/u=3307494624,1826494306&fm=26&fmt=auto&gp=0.jpg",
        },
        {
          id: 2,
          title: "哒哒哒哒哒哒哒哒哒哒大大",
          image:
            "https://img2.baidu.com/it/u=3127985167,659277007&fm=26&fmt=auto&gp=0.jpg",
        },
        {
          id: 3,
          title: "发分身乏术哒哒撒上小擦防晒到底擦故事发生的大事大萨达说",
          image:
            "https://img1.baidu.com/it/u=3328916648,1677862170&fm=26&fmt=auto&gp=0.jpg",
        },
        {
          id: 4,
          title: "可改善你的粉丝你带伞啊您放松你的男想啊伤心啊",
          image:
            "https://img1.baidu.com/it/u=2872980634,2662146271&fm=26&fmt=auto&gp=0.jpg",
        },
        {
          id: 5,
          title: "哒哒妈妈干什么的房间看看卡上打看看",
          image:
            "https://img1.baidu.com/it/u=2280600569,54977720&fm=26&fmt=auto&gp=0.jpg",
        },
      ],
    };
    // res.json(data)
    res.status(200).json(data);
  }
});

router.get('/channel',(req,res)=>{
    console.log('/channel')
     if(req.query.page==1){
        let data ={
            status:100,
            msg:'success',
            data:{
                results:[
                    {
                        id:0,
                        image:'https://img2.baidu.com/it/u=2250118399,435845734&fm=26&fmt=auto&gp=0.jpg',
                        title:'xaxaxaxax',
                        remark:'xaxaxffffff',
                        played:0,
                        playing:0
                    },
                    {
                       id:1,
                       image:'https://img2.baidu.com/it/u=2941443949,1874568374&fm=26&fmt=auto&gp=0.jpg',
                       title:'gsfsdfsff',
                       remark:'fsfdsfdsf',
                       played:0,
                       playing:0
                   },
                   {
                       id:2,
                       image:'https://img2.baidu.com/it/u=3815752712,2136154516&fm=26&fmt=auto&gp=0.jpg',
                       title:'ggfggfgfg',
                       remark:'cczccczcs',
                       played:0,
                       playing:0
                   },
                   {
                       id:3,
                       image:'https://img1.baidu.com/it/u=1944210088,1922540226&fm=26&fmt=auto&gp=0.jpg',
                       title:'ghhhhhhh',
                       remark:'jjhgjhgj',
                       played:0,
                       playing:0
                   },
                   {
                       id:4,
                       image:'https://img2.baidu.com/it/u=39135797,4093657860&fm=26&fmt=auto&gp=0.jpg',
                       title:'jhjgjghjgjg',
                       remark:'hfgfhfhbfgbf',
                       played:0,
                       playing:0
                   },
                   {
                       id:5,
                       image:'https://img0.baidu.com/it/u=3772471352,1507121510&fm=26&fmt=auto&gp=0.jpg',
                       title:'jjjjjjjj',
                       remark:'jjjjjjjj',
                       played:0,
                       playing:0
                   }
                ],
                pagination:{
                    current:1,
                    total:12,
                    hasMore:true
                }
            }
        }
        setTimeout(()=>{res.status(200).json(data);},1000)
     }
     if(req.query.page==2){
        let data ={
            status:100,
            msg:'success',
            data:{
                results:[
                    {
                        id:6,
                        image:'https://img2.baidu.com/it/u=100572348,306115718&fm=26&fmt=auto&gp=0.jpg',
                        title:'xaxaxaxax',
                        remark:'xaxaxffffff',
                        played:6,
                        playing:6
                    },
                    {
                       id:7,
                       image:'https://img0.baidu.com/it/u=3360580733,946010711&fm=26&fmt=auto&gp=0.jpg',
                       title:'gsfsdfsff',
                       remark:'fsfdsfdsf',
                       played:0,
                       playing:0
                   },
                   {
                       id:8,
                       image:'https://img2.baidu.com/it/u=589949804,2708299491&fm=26&fmt=auto&gp=0.jpg',
                       title:'ggfggfgfg',
                       remark:'cczccczcs',
                       played:0,
                       playing:0
                   },
                   {
                       id:9,
                       image:'https://img0.baidu.com/it/u=1243416199,1470282428&fm=26&fmt=auto&gp=0.jpg',
                       title:'ghhhhhhh',
                       remark:'jjhgjhgj',
                       played:0,
                       playing:0
                   },
                   {
                       id:10,
                       image:'https://img0.baidu.com/it/u=3349198200,3413630986&fm=26&fmt=auto&gp=0.jpg',
                       title:'jhjgjghjgjg',
                       remark:'hfgfhfhbfgbf',
                       played:0,
                       playing:0
                   },
                   {
                       id:11,
                       image:'https://img2.baidu.com/it/u=2351660449,1766143465&fm=26&fmt=auto&gp=0.jpg',
                       title:'jjjjjjjj',
                       remark:'jjjjjjjj',
                       played:0,
                       playing:0
                   }
                ],
                pagination:{
                    current:2,
                    total:12,
                    hasMore:false
                }
            }
        }
        setTimeout(()=>{res.status(200).json(data);},1000)
     }
     
     
})
module.exports = router;
