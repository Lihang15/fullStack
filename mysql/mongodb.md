window 启动mongodb          
启动服务 mongod --dbpath=..\data\db     ..\data\db 这个mongodb数据存放目录需要自己创建和指定

或者 mongod -f ../config/mongod.conf    ../config/mongod.conf 这里面写指定数据目录的配置

mongodb   默认不需要用户名密码 只能本机连接 可以操作所有数据库 （默认三个数据库admin config local）如果开启认证后 输入用户名密码 看到所有数据库的是超级管理员，只看到自己数据库的是普通数据库用户

mongodb 可以创建超级管理员账号 必须在admin数据库下 
use admin    db.createUser({user: "root",pwd: "123456",roles: [ { role: "root", db: "admin" } ]})
这个账号可以访问所有的数据库

在其他数据库下创建的用户 只能看到自己的数据库

mongodb的操作一般是以数据库为单位 进入指定数据库进行操作 use xxx数据库

链接mongo数据库 如果不输入数据库名字 默认admin数据库 得需要超级管理员账户，连上后可以看到所有数据库