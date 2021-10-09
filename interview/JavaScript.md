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

   7.[]!=true  !![]==true ![]==false  []==0  记住这些为true

### 问题二 如何检测一个对象一定是数组
   Array.isArray()
   arr instanceof Array
### 问题三 JS加载会阻塞页面渲染吗？
   会 1.可以在<script defer src=""> defer 不会阻塞页面渲染，异步加载，等到页面加载完立即执行
      2.可以在<script async src=""> async 不会阻塞页面渲染，异步加载，脚本加载完立即执行
### 问题四 通过new操作符调用构造函数，会经历哪些阶段？
    1、创建一个新的对象；
    2、链接到原型；
    3、将构造函数的this指向这个新对象，执行构造函数的代码，为这个对象添加属性，方法等；
    4、返回新对象。
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
      2.未被引用的全局变量
      3.被遗忘的定时器
      4.脱离dom的引用 定义了dom 设为null 没被垃圾回收器回收

### 问题11：js var 变量提升
   console.log(i)
   var i=10

   var 涉及变量提升 等价于 var i   console.log(i)  i = 10 

### 问题12：js事件循环机制

 js的所有代码都由js主线程在执行栈里执行，（setTimeOut,ajax,promise.then()等异步代码（浏览器会新开一个幕后线程去处理）（nodejs 会开启一个libuv进程去处理，等setTomeOut到时间了,异步处理函数会被放到一个task队列中，等待主线程把执行栈执行完 去执行，优先执行队列头任务，队列为空的时候 主线程会一直等待队列有值，去执行，这个过程就是事件循环）

异步调用 ： 宏任务setTimeOut,setInterval和微任务promise.then(),process.nextTick  主线程同步代码执行完毕后，先去执行第一次进入的微任务队列的所有代码，然后在执行宏任务队列的头，头执行完了
 在执行这次宏对应的所有微任务，以此类推

// nodejs 适合io密集型，高并发场景，异步非阻塞io，js主线程可以不断处理新的请求，
// 缺点 js单线程 不适合cpu密集行计算 大的for循环  

### 问题13：js 原型，原型链
      export class Student{
         constructor(name){
            this.name=name
         }
            getname(){
               console.log(this.name)
            }
      }

      console.log(Student.prototype)

      let student = new Student('A')

      Student.prototype == student._proto_
      显示原型              隐式原型   他们俩指向同一个对象

      class Person{
         constructor(name){
            this.name = name
         }
         drink(){
            console.log('drink')
         }
      }

      class Teacher extends Person{
         constructor(name){
            super(name)
            this.name = name
         }
         teach(){
            console.log('teach')
         }
      }

      let teacher = new Person('B')
      b.teach()
      b.drink()

      执行teacher.teach的时候通过这个对象里的_proto_ 找到Teacher.protoType 执行teach()
      当执行drink的时候发现Teacher.protoType 里没有 然后去 Teacher.protoType._proto_下去找它其实指向它继承那个类的Person.protoType 找到了执行 
      如果没有找到 就去Object.prototype去找 如果为null 没找到，这就是原型链

      如何检查这个属性或者方法是不是自身的
      teacher.hasOwnProperty('name')  =>true
      teacher.hasOwnProperty('teach') =>false 原型上的

      原型继承
      function Father(name){
            this.name =name
            this.f =function(){
               console.log('ff')
            }
      }
      function Son(){
      }
      let F = new Father('wanglihang')
      Son.prototype = F
      let S = new Son()
      S.f()
      console.log(S.name)

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