var ws = require("nodejs-websocket")
const PORT = "3000"
//只要有用户连接 就会给用户创建一个conn
var server = ws.createServer((conn)=>{
   console.log("用户连接websocket成功")
   //收到用户数据 触发这个函数
   conn.on('text',(data)=>{
   console.log(data)
   //响应用户数据
   conn.send('s'+data)
   })                                                             
   conn.on('close',()=>{
   console.log("服务器断开")
   })
   conn.on('error',()=>{
    console.log("用户连接异常")
    })
})

server.listen(PORT,()=>{
    console.log("websocket服务启动成功")
})