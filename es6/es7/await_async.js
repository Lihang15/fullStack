const { async } = require("rxjs");

// async 让一个方法变成异步
// await 等待异步方法执行完

async function test(){
    //返回一个promise 
    return '您好'
}

async function main(){
    //await 必须用在一个异步方法里  去拿一个异步方法结果
   var data =await test()
   console.log(data)
}
main()