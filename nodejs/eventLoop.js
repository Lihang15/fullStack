
// setTimeout(() => {
//     console.log("宏任务")
// }, 0);


// console.log("123");
// new Promise((resolve)=>{
//     console.log("外层宏任务")
//     resolve()
// }).then(()=>{
//     console.log("微任务")
// }).then(()=>{
//    console.log("微任务")
// })

// 输出：123 外层宏任务 微任务 微任务 宏任务


console.log("1")
setTimeout(()=>{
    console.log("2")
    process.nextTick(()=>{
        console.log("3")
    })
    new Promise((resolve)=>{
        console.log(4)
        resolve()
    }).then(()=>{
        console.log("5")
    })
})
let a = setInterval(()=>{
    console.log("int")
},2000)

process.nextTick(()=>{
    console.log("6")
})

