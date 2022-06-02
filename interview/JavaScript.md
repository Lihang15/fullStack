### 问题一 js一些骚操作
   1.处理小数丢失精度问题处理
   parseFloat((0.1 + 0.2).toFixed(10))  等于0.3 返回的类型为number

   2.String() 和New String() 和let str='stringss' 区别
   String()返回的字符串是string基本类型 
   let str 也是基本类型
   new String() 返回的是Object类型
   
   3.短路操作（&&和||）var a=4399<0&&typeof(4399+'')  &&真真为真 如果第一个为假就不会往后走了 ||假假才是假 第一个是真就不会往后走了
      console.log(a) false

   4.NaN 非数值  isNaN()如果是非数值 返回true （纯数字和纯数字字符串不是NaN）

   5.类型转换 整数转字符串(10).toString();  字符串转整数parseInt('d123') 开头如果是字母 会转成NaN 字母如果不在开头在中间或者结尾 会把前面的数字转化出来

   6.js特性  js 只有0，-0，NaN，""，null，undefined这六个值转布尔值时，是false
         function testFalse(arg){
         if(arg){
               console.log('true::'+arg)
         }else{
               console.log('false::'+arg)
         }
      }

   7.[]==false  ![]==false !![]==true   []==0  记住这些为true
   8.js var 变量提升和函数提升
   变量提升即将变量声明提升到它所在作用域的最开始的部分
   console.log(a)          等价于 var a
   var a = 'aaa'           console.log(a) 
   console.log(a)             a ='aaa'
                            console.log(a)
   function fn () {
      　　console.log(a); // undefined
      　　var a = 'aaa';
      　　console.log(a); // aaa
      }
      fn();
   
   函数提升
   console.log(f1); // function f1() {}   声明式函数会提升至顶部，表达式函数不会提升
   console.log(f2); // undefined  
   function f1() {}
   var f2 = function() {}
   
   js可以有同名字的函数
   function a(){
    console.log('123')
   }
   function a(){
      console.log('456')
   }
   a() //456
   或者   第一个a函数 提升到最高
   console.log(a()) //456
   function a(){
      return '123'
   }
   function a(){
      return '456'
   }

### 问题二 如何检测一个对象一定是数组
   Array.isArray()
   arr instanceof Array
### 问题三 JS加载会阻塞页面渲染吗？
   会 1.可以在<script defer src=""> defer 不会阻塞页面渲染，异步先加载，等到页面元素加载完立即执行脚本
      2.可以在<script async src=""> async 根defer差不多 但是不保证 倒入脚本的执行顺序
### 问题四 通过new操作符调用构造函数，会经历哪些阶段？
    1、创建一个新的对象；
    2、将this指向这个新对象
    3、执行构造函数的代码，为这个对象添加属性，方法等；
    4、返回新对象。
     function Base(name){
      this.name = name
      this.id = 123
      }
      Base.prototype.toString = function() {
         return this.id;
      }

let obj = new Base('wanglihang')

console.log(obj.toString(),obj.name) //123 wanglihang
      //具体执行
      var obj  = {};
      obj.__proto__ = Base.prototype;
      Base.call(obj);
### 问题五 js模块化
   require/exports	2009年	CommonJS  应用nodejs
   import/export	2015年	ECMAScript2015（ES6）应用前端js
   原生浏览器不支持 require/exports，可使用支持 CommonJS 模块规范的 Browsersify、webpack 等打包工具，它们会将 require/exports 转换成能在浏览器使用的代码。
   import/export 在浏览器中无法直接使用，会跨域，可以借助webpack打包
### 问题六 js深浅拷贝

   浅拷贝 在堆内存开辟一块新空间  新对象的改变 会影响到源对象的引用类型值（因为拷贝了源对象的引用 新对象源对象还指向一块内存），不会影响到基本类型值
   var person ={
      name:"wanglihang",
      value:['18','年轻']
   }
   function qian(obj){
      var newObj ={}
      for(let index in obj){
         if(obj.hasOwnProperty(index)){
               newObj[index]=obj[index]
         }
         
      }
      return newObj
   }

   let person1 = qian(person)
   person1.name="abc"
   person1.value[0]=25
   console.log(person)
   console.log(person1)
   ··············································································································································
   附值
   浅拷贝 和附值的区别是 在堆内存新开辟一块空间 新对象和源对象共用那块堆内存 新对象改变 源对象基本类型 和引用类型 都会被改变

   var person ={
      name:"wa 
   }

   let person2 = person
   person2.name="xiaozhang"
   person2.value[0]=22
   console.log(person)
   console.log(person2)
   ··············································································································································
   深拷贝 新对象的改变 不会影响到源对象 基于递归拷贝

   var person ={
      name:"wanglihang",
      value:['18','年轻']
   }
   function qian(obj){
      var newObj ={}
      for(let index in obj){
         if(obj.hasOwnProperty(index)){
               newObj[index]=qian(obj[index])
         }
         
      }
      return newObj
   }

   let person1 = qian(person)
   person1.name="abc"
   person1.value[0]=25
   console.log(person)
   console.log(person1)
   var a = [{a: 'aaaaa'}]

   function copy2(obj) {
      return JSON.parse(JSON.stringify(obj))
   }
   var b = copy2(a)
   console.log(a, b)
   b[0].a = 'bbbbb'
   console.log(a, b)

### 问题七 闭包

闭包形成一个不被销毁的变量作用域空间 obj不会被垃圾回收器回收  此例子为闭包形成的单例模式
function single(){
    var obj={name:'wanglihang'}
    return function(){
        return obj
    }
}

aa= single()
bb= single()
console.log(aa())
console.log(bb())

 ### 问题八 js防抖节流函数
 防抖
   <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <button id="btn">你一直点我,突然不点了，到了2s我就去触发函数</button></button>
    <script>
        function thro(cb, delay) {
            let timer
            return function () {
                clearTimeout(timer)
                timer = setTimeout(function () {
                    cb()
                }, delay)
            }
        }

        function handle(e) {
            console.log("123456")
        }
        var btn = document.getElementById('btn')
        btn.addEventListener("click", thro(handle, 2000));
    </script>
</body>
</html>

节流
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <button id="btn">不管点几次2s只执行一次处理函数</button>
    <script>
        function thro(cb,delay){
            let timer
            return function(){
                if(!timer){
                    timer = setTimeout(function(){
                        cb()
                        timer=null
                    },delay) 
                } 
            }
        }
        function handle(e){
            console.log("123456")
        }
         var btn = document.getElementById('btn')
         btn.addEventListener("click", thro(handle,2000));
    </script>
</body>
</html>

### 问题九:实现bind apply call 函数

      function person(arg1,arg2){
         console.log(this.name)
         console.log(arg1,arg2)
      }

      var egg ={
         name:'王老师'
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

### 问题10 : 哪些操作会造成内存泄漏 
      1.闭包
      2.意外的全局变量  name=‘aaa’ 会被放到window.name里
      3.被遗忘的定时器

### 问题11：js var 变量提升
   console.log(i)
   var i=10

   var 涉及变量提升 等价于 var i   console.log(i)  i = 10 

### 问题12：js事件循环机制

 js的所有代码都由js主线程在执行栈里执行，（setTimeOut,ajax,promise.then()等异步代码（浏览器会新开一个幕后线程去处理）（nodejs 会开启一个libuv进程去处理，等setTomeOut到时间了,异步处理函数会被放到一个task队列中，等待主线程把执行栈执行完 去执行，优先执行队列头任务，队列为空的时候 主线程会一直等待队列有值，去执行，这个过程就是事件循环）

异步调用 ： 宏任务setTimeOut,setInterval和微任务promise.then(),process.nextTick  主线程同步代码执行完毕后，先去执行主线程代码对应得第一次进入的微任务队列的所有代码，然后在执行宏任务队列（event 队列）的头，头执行完了 在执行这次宏对应的所有微任务，以此类推
也就是主线程 先轮询了一次微任务队列，然后再去轮询宏任务队列，和宏任务对应的微任务队列 （一个 setTimeOut（）就是一次事件循环）
// nodejs 适合io密集型，高并发场景，异步非阻塞io，js主线程可以不断处理新的请求，
// 缺点 js单线程 不适合cpu密集行计算 大的for循环  


### 问题14 js作用域（全局作用域，函数作用域，块级作用域）  作用域链 
   作用域 全局作用域：在程序的任意地方都能访问，函数作用域  只能在函数中访问 块级作用域 只能在{}有效
   作用域链 ： 一般情况下，变量取值到 创建 这个变量 的函数的作用域中取值，但是如果在当前作用域中没有查到值，就会向上级作用域去查，直到查到全局作用域，这么一个查找过程形成的链条就叫做作用域链。
   var a = 10
   function fn(){
      a =30
      var b = 20
      function bar(){
         console.log(a+b)
      }
      return bar
   }
   var x =fn()
   x()  输出50

### js的垃圾回收算法
1.引用计数算法 ：循环引用会造成  函数已经结束 按理来说对象都应该被回收 但是垃圾回收器认为两个对象相互至少引用了一次，不会回收它们
  目前js不用引用计数法
function funct() {
    var obj = {}; // 命名为对象1，此时引用数量为1
    var obj2 = {}; // 命名为对象2，此时引用数量为1
    obj.a = obj2; // obj的a属性引用obj2，此时对象2的引用数量为2
    obj2.a = obj; // obj2的a属性引用obj，此时对象1的引用数量为2
    return 1;
    // 此时执行栈的obj变量与obj2变量被销毁，对象1与对象2的引用数量减1
    // 对象1的引用数量为1，对象2的引用数量为1，两个对象都不会被引用计数算法垃圾回收
}
2.标记清除算法
（1）.垃圾回收器在运行的时候会给所有存储在内存中的变量都加上标记
（2）.去掉运行环境中的变量和被环境变量引用的变量的标记
（3）.仍然有标记的变量视为准备删除的变量
 (4).垃圾回收器回收带有标记变量的内存空间

### 手写一个Promise

### 手写一个事件类 也就是手写一个订阅发布模式

class Event{ // 订阅-发布类
    constructor(){
        this.handlers = {};
    }

    on(key, handler) { // 订阅
        if (!(key in this.handlers)) this.handlers[key] = [];
        this.handlers[key].push(handler);
    }

    off(key, handler) { // 卸载
        const index = this.handlers[key].findIndex(item => item === handler);
        if (index < 0) return false;
        if (this.handlers[key].length === 1) delete this.handlers[key];
        else this.handlers[key].splice(index, 1);
        return true;
    }

    emit(key, ...args) { // 触发
        if (!this.handlers[key]) return false;
        this.handlers[key].forEach(handler => handler.apply(this, args));
        return true;
    }
}



### 函数柯里化
function add(a){
    return function(b){
        return function(c){
            return a+b+c
        }
    }
}

console.log(add(1)(2)(3)) 