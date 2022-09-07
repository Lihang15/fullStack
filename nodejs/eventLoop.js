
//  js的所有代码都由js主线程在执行栈里执行，（setTimeOut,ajax,promise.then()等异步代码（浏览器会新开一个幕后线程去处理）（nodejs 会开启一个libuv进程去处理，等setTomeOut到时间了,异步处理函数会被放到一个task队列中，等待主线程把执行栈执行完 去执行，优先执行队列头任务，队列为空的时候 主线程会一直等待队列有值，去执行，这个过程就是事件循环）

//  异步调用 ： 宏任务setTimeOut,setInterval和微任务promise.then(),process.nextTick  主线程同步代码执行完毕后，先去执行主线程代码对应得第一次进入的微任务队列的所有代码，然后在执行宏任务队列（event 队列）的头，头执行完了 在执行这次宏对应的所有微任务，以此类推
//  也就是主线程 先轮询了一次微任务队列，然后再去轮询宏任务队列，和宏任务对应的微任务队列 （一个 setTimeOut（）或 1个setInterval（） 就是一次事件循环）
 // nodejs 适合io密集型，高并发场景，异步非阻塞io，js主线程可以不断处理新的请求，
 // 缺点 js单线程 不适合cpu密集行计算 比如异步任务有大for循环 主线在队列程轮询到这个任务 可能导致其他任务过慢，或无法执行，整体程序性能降低
 

process.nextTick(()=>{
    console.log("主线程-微任务1")
})

setTimeout(() => {
    console.log("宏任务3")
}, 3000);


console.log("主线程");
new Promise((resolve)=>{
    console.log("主线程-1")
    resolve()
}).then(()=>{
    console.log("主线程-微任务2")
})

setTimeout(()=>{
    console.log("宏任务3")
    process.nextTick(()=>{
        console.log("宏任务3下的微任务1")
    })
    new Promise((resolve)=>{
        console.log('任务3-1')
        resolve()
    }).then(()=>{
        console.log("宏任务3下的微任务2")
    })
},1000)

let a = setInterval(()=>{
    console.log("宏任务2")
},2000)



// 输出顺序 主线程 主线程-1 主线程-微任务1 主线程-微任务2 => 宏任务3 任务3-1 宏任务3下的微任务1 宏任务3下的微任务2 =>宏任务2 宏任务3 宏任务2.....
