var events = require('events')

var enentEmitter = new events.EventEmitter()


enentEmitter.on("zhuceshijian",function(abc){
     console.log("事件成功回调")
})


enentEmitter.emit("zhuceshijian")
