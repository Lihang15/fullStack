const { mainModule } = require("process")

如何自己写一个npm包  自己的npm包 wlh-hbbhk
1.注册npm账号 npm adduser  认证一下邮箱
2.输入完之后 npm login 登录之前注册的账号密码

3.新建一个目录 执行npm -i 初始化一个项目生成package.json
4.package.json main指定index.js  一般默认index.js package.json 默认入口也是index.js index.js必须在package.json同级目录  在别人引入模块的时候默认搜索包名字下的index.js文件 
如果代码都写在了别的文件里 别人用的时候 require（包名/模块名）
5.npm publish  把包推送上去  如果package.json 中包名字是wlh-hbbhk 那么npm服务器会生成wlh-hbbhk文件夹 npm已经解决了包的依赖问题  
比如你的包还依赖其他包，，别人用的时候npm install 会把依赖包也拉下来

