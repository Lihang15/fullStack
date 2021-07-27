const { fstat } = require("fs")

function person(arg1,arg2){
    console.log(this.name)
    console.log(arg1,arg2)
}

var egg ={
    name:'蛋老师'
}

// person.call(egg)

//实现call
Function.prototype.newCall =function(obj,...arg){
    //   var obj = obj || window    nodejs 没有window对象
    //this 指向person（）
      obj.p = this
      obj.p(...arg)
      delete obj.p
}
person.newCall(egg,'xx','bb')

//实现apply 传递数组参数


Function.prototype.newApply =function(obj,arg){
    //   var obj = obj || window    nodejs 没有window对象
    //this 指向person（）
      obj.p = this
      obj.p(...arg)
      delete obj.p
}
person.newApply(egg,['xxx','wadfafa'])

//实现bind
Function.prototype.newBind = function(obj,...arg){
    var that =this
    return function(){
        that.call(obj,...arg)
    }
}

var bind = person.bind(egg,'wlh','zjj')
bind()

