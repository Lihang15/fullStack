//（1）哪些操作会造成内存泄漏 
//    1.闭包
//    2.以外的全局变量
//    3.被遗忘的定时器
//    4.脱离dom的引用 定义了dom 设为null 没被垃圾回收器回收


//js的事件循环 

// 将同步函数压入一个调用栈 将异步执行的函数压入task队列，然后主线程去执行同步栈中的函数，执行完去队列执行回调



// css画三角
// #triangle-up {
//     width: 0;
//     height: 0;
//     border-left: 50px solid transparent;
//     border-right: 50px solid transparent;
//     border-bottom: 100px solid red;
// }

//BFC 块级格式化上下文 他是一个独立的块级渲染区域 子盒子不会影响外部盒子布局 bfc可以阻止浮动元素 覆盖bfc元素（给bfc元素overflew：hidden）

// 现象 ：父盒子不设置高度 子类盒子浮动导致父类盒子没有高度 这个父盒子没形成bfc

//如何创建BFC (父)
// 1.float的值是none
// 2.overflow：hidden
// 3.display:inline-block
// 4.position:absolute
//  这四种哪个最好overflow：hidden

// 现象：父盒子里面的子盒子设置margin-top：20px 父盒子会被拽下来20px 父盒子margin塌陷 
// 让父盒子形成bfc 解决此问题 给父盒子overflow：hidden

// mvc和mvvm区别？
// mvc 中大量的 DOM 操作使页面渲染性能降低，加载速度变慢，影响用户体验。和当 Model 频繁发生变化，开发者需要主动更新到 View 

// mvc controller接收数据，model处理数据，数据处理完把数据给view渲染
// mvvm 把controller改成viewmodel 和model双向数据绑定，viewmodel接收数据处理数据，数据改变model改变，view自动更新（model和view没直接关联）
//apply call bind 改变this的指向

var obj ={
    name:"wanglihang"
}

var obj1={
    name:'xxxx',
    a(){
      console.log(this.name)  
    }
}

obj1.a()
obj1.a.apply(obj)
obj1.a.call(obj)
let bind =obj1.a.bind(obj)
bind()

// apply（传数组） call（传递数组的展开中间逗号分隔）
Math.max.call(null,1,2,3)
console.log(Math.max.call(null,1,2,3))

// Http状态码
// 200 ok
// 301：永久重定向；
// 302： 临时移动，可使用原有URI；
// 304：资源未修改，可使用缓存；
// 400 服务器无法解析客户端请求
// 401 需要请求身份认证
// 403 服务器拒绝执行此请求
// 404 服务器找不到客户请求资源
// 500 服务器内部错误
// 502 网关出问题
// 503 服务器挂了

// console.log(i)
//   var i=10
//  var 涉及变量提升 因为没在函数作用域中 var i   console.log(i)  i = 10