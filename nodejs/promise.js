const fs = require('fs');

//es6 Promise主要用于解决异步函数回调问题，让异步代码更容易读（Promise可以包裹异步处理返回值）
//例子 没有Promise之前 我想在异步读取读完a文件后，带着刚读出来a的结果 再去异步读b 
//回调函数套回调函数，太多的话 就是回调地狱，代码难以阅读
fs.readFile('./index.html',(err1,data1)=>{
    if(!err1){
        fs.readFile('./events.js',(err2,data2)=>{
             if(!err2){
                 console.log('a文件的结果：',data1)
                 console.log('b文件的结果：',data2)
             }else{
                console.log('err2:',err2)
             }
        })
    }else{
        console.log('err1:',err1)
    }
})

// Promise解决回调地狱链式调用.then.then方式
new Promise((resolve,reject)=>{
    fs.readFile('./index.html',(err1,data1)=>{ 
        if(err1){
            reject(err1)
        }
        resolve(data1)
    })
}).then((data1)=>{
    console.log('a文件的结果：',data1)
    return new Promise((resolve,reject)=>{
        fs.readFile('./index.html',(err2,data2)=>{ 
            if(err2){
                reject(err2)
            }
            resolve(data2)
        })
    })
}).catch((err1)=>{
    console.log('err1:',err1)
}).then((data2)=>{
    console.log('b文件的结果：',data2)
}).catch((err2)=>{
    console.log('err2:',err2)
})





//es2017后 Promise 可以用await 同步等待 Promise包裹的异步处理返回值
//异步操作最终解决方案

async function asyncF(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
           reject(123)
        },3000)
    })
}

async function awaitF(){
    try{
        // 拿到resolve结果
        const data = await asyncF();
        console.log(data)
    }catch(e){
        // 拿到reject结果 必须catch才能拿到 
        console.log(e)
    }
    
    
}

awaitF()








// promise.all  
const p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('第一个promise')
    },2000)
})

const p2 = Promise.resolve('第二个promise')
const p3 = Promise.reject('我是一个错误')

const promiseAll = Promise.all([p1,p2,p3])
promiseAll.then((data)=>{
    console.log(data) //都是resove情况 [ '第一个promise', '第二个promise' ]
}).catch((err)=>{
    console.log(err)  //只要有一个reject 输出 我是一个错误
})











// promise.race  //输出最先执行完的promise
const promiseRace = Promise.race([p1,p2])
promiseRace.then((data)=>{
    console.log(data)
}).catch(e=>{
    console.log(e)
})

