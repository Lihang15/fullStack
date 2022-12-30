
http://pic.netbian.com/tupian/24695.html

https://www.douban.com/note/768521641/?from=tag //健康卡
链接：https://www.zhihu.com/question/24648388/answer/64352375 nodejs 知识点


https://liiked.github.io/VS-Code-Extension-Doc-ZH/#/references/vscode-api  vscode插件开发 中文文档

 https://blog.csdn.net/m0_37218227/article/details/107765113  vscode插件离线安装

https://blog.csdn.net/qq_41966009/article/details/96359558

wx327e504d0ef655af
9cac4b77aa13462c1242e09484ba1ea3
https://github.com/iamdarcy/hioshop-server
https://www.cnblogs.com/heioray/p/9732475.html 埋点


https://blog.csdn.net/xieanna123/article/details/105545758 面试题

https://github.com/WindrunnerMax/EveryDay web前端学习

https://blog.csdn.net/weixin_42322206/article/details/106452116 nginx部署前 后端项目 解决跨域问题

https://www.jianshu.com/p/b819f3037e37 加密知识

https://programmercarl.com  代码随想录
https://itbilu.com/nodejs/npm/V1PExztfb.html#api-bulkCreate Sequelize文档
https://www.sequelize.com.cn/core-concepts/validations-and-constraints

https://cloud.tencent.com/developer/article/1687790?from=15425 原型链和作用域链子

https://blog.csdn.net/weixin_42282999/article/details/110912999 sequelize

 select created_at from dpo_order  where date_format(created_at,'%Y-%m')=date_format(now(),'%Y-%m');
 where: where(fn('date_format', col('created_at'), literal('"%Y-%m"')),'=', fn('date_format', fn('now'), literal('"%Y-%m"'))),


select  created_at from dpo_order where created_at between date_sub(now(),interval 2 month) and now();

   const { fn,Op,literal } = this.app.Sequelize;
      const orders = await ctx.datanodeModel.Issuer.findAll({
        attributes: [
          'created_at',
        ],
        where: {
          createdAt: {
            [Op.between]: [
              fn('date_sub', fn('now'), literal('interval 2 month')),
              fn('now'),
            ],
          },
        },
        limit:1
      });      

      https://www.bookstack.cn/read/apache-apisix-1.4-zh/111b5e1749227453.md  apisix 中文文档

      https://www.cnblogs.com/wang715100018066/p/16460399.html mac homebrew 安装
      https://www.processon.com/ 流程图
      https://app.diagrams.net/ 流程图