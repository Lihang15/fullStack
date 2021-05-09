// js的事件循环机制
// js的所有代码都由js主线程在执行栈里执行，（setTimeOut,ajax,promise.then()等异步代码（浏览器会新开一个幕后线程去处理）（nodejs 会开启一个libuv进程去处理，等setTomeOut到时间了,异步处理函数
// 会被放到一个task队列中，等待主线程把执行栈执行完 去执行，优先执行队列头任务，队列为空的时候 主线程会一直等待队列有值，去执行，这个过程就是事件循环）

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

// vue 
// computed 和watch 区别
// 1.computed 不支持异步，当computed内有异步操作时无效，无法监听数据的变化，watch支持异步操作

// 2、是否调用缓存：computed中的函数所依赖的属性没有发生变化，那么调用当前的函数的时候会从缓存中读取，而watch在每次监听的值发生变化的时候都会执行回调。

// 3、是否调用return：computed中的函数必须要用return返回，watch中的函数不是必须要用return。

// 4、使用场景：computed----当一个属性受多个属性影响的时候，使用computed-------登录的时候 用户名 密码，验证码 输入完成 登录按钮亮
