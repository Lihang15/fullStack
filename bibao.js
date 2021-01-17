
//在a函数中返回b函数 每次调用都是调用b 这个函数，形成闭包来操作a中变量.
//a函数中的变量内存不会被销毁
//作用 ：a里变量成为私有变量 

function foo(){
    var local = 1
    return function(){
        local++
        return local
    }
  }
  
  var func = foo()
  console.log(func())
  console.log(func())