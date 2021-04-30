
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
  
 //防抖的含义就是让某个时间期限（如1000毫秒）内，事件处理函数只执行一次。

 //节流 在函数执行一次之后，该函数在指定的时间期限内不再工作，直至过了这段时间才重新生效。

