const { async } = require("rxjs");

// async 声明有异步操作  //return promise  
// await 等待异步方法执行结果

async function test(){
    //返回一个promise
    return new Promise((resolve,reject)=>{
        setTimeout(function(){
            resolve("nihao")
            reject("bad")
        },1000)
    })
}

async function main(){
    //await 必须用在一个异步方法里  去拿一个异步方法结果
    try{
        var data =await test()
        console.log(data)
    }catch(err){
        console.log(err)
    }
    
   
   console.log("123")
}
main()