window 启动mongodb          
启动服务 mongod --dbpath=..\data\db     ..\data\db 这个mongodb数据存放目录需要自己创建和指定

或者 mongod -f ../config/mongod.conf    ../config/mongod.conf 这里面写指定数据目录的配置

mongodb 可以配置用户名 密码 和权限  默认不需要用户名密码 只能本机连接