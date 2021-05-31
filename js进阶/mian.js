// js的事件循环机制
// js的所有代码都由js主线程在执行栈里执行，（setTimeOut,ajax,promise.then()等异步代码（浏览器会新开一个幕后线程去处理）（nodejs 会开启一个libuv进程去处理，等setTomeOut到时间了,异步处理函数
// 会被放到一个task队列中，等待主线程把执行栈执行完 去执行，优先执行队列头任务，队列为空的时候 主线程会一直等待队列有值，去执行，这个过程就是事件循环）
// 微任务 ：回调函数的代码
// 宏任务：主线程去执行的 调用栈的代码  宏任务执行完才会去执行微任务队列的函数

// nodejs 适合io密集型，高并发场景，异步非阻塞io，js主线程可以不断处理新的请求，
// 缺点 js单线程 不适合cpu密集行计算 大的for循环  

//js 原型，原型链

// export class Student{
//     constructor(name){
//         this.name=name
//     }
//       getname(){
//           console.log(this.name)
//       }
// }

// console.log(Student.prototype)

// let student = new Student('A')

// Student.prototype == student._proto_
// 显示原型              隐式原型   他们俩指向同一个对象

// class Person{
//     constructor(name){
//         this.name = name
//     }
//     drink(){
//         console.log('drink')
//     }
// }

// class Teacher extends Person{
//     constructor(name){
//         super(name)
//         this.name = name
//     }
//     teach(){
//         console.log('teach')
//     }
// }

// let teacher = new Person('B')
// b.teach()
// b.drink()

// 执行teacher.teach的时候通过这个对象里的_proto_ 找到Teacher.protoType 执行teach()
// 当执行drink的时候发现Teacher.protoType 里没有 然后去 Teacher.protoType._proto_下去找它其实指向它继承那个类的Person.protoType 找到了执行 
// 如果没有找到 就去Object.prototype去找 如果为null 没找到，这就是原型链

// 如何检查这个属性或者方法是不是自身的
// teacher.hasOwnProperty('name')  =>true
// teacher.hasOwnProperty('teach') =>false 原型上的

//原型继承
//   function Father(name){
//       this.name =name
//       this.f =function(){
//           console.log('ff')
//       }
//   }
//   function Son(){
//   }
//   let F = new Father('wanglihang')
//   Son.prototype = F
//   let S = new Son()
//   S.f()
//   console.log(S.name)

// vue 
// computed 和watch 区别
// 1.computed 不支持异步，当computed内有异步操作时无效，无法监听数据的变化，watch支持异步操作

// 2、是否调用缓存：computed中的函数所依赖的属性没有发生变化，那么连着调用当前的函数n次只会执行一次其余的从缓存中读取，而watch在每次监听的值发生变化的时候都会执行回调。

// 3、是否调用return：computed中的函数必须要用return返回，watch中的函数不是必须要用return。

// 4、使用场景：computed----当一个属性受多个属性影响的时候，使用computed-------登录的时候 用户名 密码，验证码 输入完成 登录按钮亮

// vuex 所有组件共享状态 可以拿这个状态值，也可以修改这个状态值
// 父子组件传值：父 传值 子通过props接收
//             子通过this.$emit() 触发父注册的函数

//  兄弟组件之间的传值 创建一个文件 export default new Vue，总线传值
//  然后在组件一中 导入这个文件 比如叫bus  然后 接收方组件bus.$on('event',()=>{})
//  传值方 bus.$emit('event',value)

//js 作用域  作用域链
// 作用域 全局作用域：在程序的任意地方都能访问，函数作用域  只能在函数中访问
// 作用域链 ： 一般情况下，变量取值到 创建 这个变量 的函数的作用域中取值，但是如果在当前作用域中没有查到值，就会向上级作用域去查，直到查到全局作用域，这么一个查找过程形成的链条就叫做作用域链。
// var a = 10
// function fn(){
//     a =30
//     var b = 20
//     function bar(){
//         console.log(a+b)
//     }
//     return bar
// }
// var x =fn()
// x()  输出50