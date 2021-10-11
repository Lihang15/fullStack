
class myEvent{
    constructor(){
        //放入所有发布的函数
        this.handers = {}
    }
    on(key,hander){
       if(!this.handers[key]){
           this.handers[key] = []
       }
       this.handers[key].push(hander)
    }
    emit(key,...arg){
       if(!this.handers[key]){
           return
       }
       this.handers[key].forEach((hander)=>{
           hander.call(this,...arg)
       })
    }
}

// let e = new myEvent()
// function sayHello(){
//     console.log("say Hello")
// }

// function aaa(){
//     console.log("aaa")
// }

// e.on('sayhello',sayHello)
// e.on('aaa',aaa)

// console.log("--------------------")

// e.emit('sayhello')

// console.log("--------------------")
// e.emit('aaa')

module.exports={
    myEvent
}