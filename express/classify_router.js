const express = require("express");
var router = express.Router();
router.get("/classify", (req, res) => {
    console.log("get:/classify");
    data = {
      status: 100,
      msg: "success",
      data: [
        {
          id: 0,
          name:"小说",
          classify:"推荐"
        },
        {
            id: 1,
            name:"直播",
            classify:"推荐"
          },
          {
            id: 2,
            name:"广播",
            classify:"推荐"
          },
          {
            id: 3,
            name:"儿童",
            classify:"推荐"
          },
          {
            id: 4,
            name:"精品",
            classify:"推荐"
          },
          {
            id: 5,
            name:"开学季",
            classify:"推荐"
          },
          {
            id: 6,
            name:"历史",
            classify:"知识"
          },
          {
            id: 7,
            name:"商业财经",
            classify:"知识"
          },
          {
            id: 8,
            name:"育儿百科",
            classify:"知识"
          },
          {
            id: 9,
            name:"人文",
            classify:"知识"
          },
          {
            id: 10,
            name:"娱乐",
            classify:"娱乐"
          },
          {
            id: 11,
            name:"影视",
            classify:"娱乐"
          },
          {
            id: 12,
            name:"二次元",
            classify:"娱乐"
          },
          {
            id: 13,
            name:"广播剧",
            classify:"娱乐"
          },
          {
            id: 14,
            name:"旅游",
            classify:"生活"
          },
          {
            id: 15,
            name:"健康生活",
            classify:"生活"
          },
      ],
    };
    // res.json(data)
    res.status(200).json(data);
  });

  module.exports = router;