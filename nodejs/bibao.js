
//在a函数中返回b函数 每次调用都是调用b 这个函数，形成闭包来操作a中变量.
//a函数中的变量内存不会被销毁
//作用 ：a里变量成为私有变量 

//用一个函数去操作一个不会被销毁得变量


function foo(){
    this.local = 1
    return function(){
        local++
        return local
    }
  }
  //func 为闭包函数
  var func = foo()
  console.log(func())
  console.log(func())


  
 //防抖：在持续触发的事件中,当一段时间内没有触发事件，执行一次处理函数

 //节流：在持续触发的事件中，一段时间，只执行一次处理函数

