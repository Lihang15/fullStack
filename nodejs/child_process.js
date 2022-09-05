const childprocess = require('child_process');

// // exec  执行命令 控制台不会有打印 会放到回调函数 stdout中
// const p1 = childprocess.exec('node test.js',function(error,stdout,stderr){
//     if(error){
//         console.log(error.code)
//     }
//     console.log('stdout:',stdout)
//     console.log('stderr:',stderr)
// })
// p1.on('exit',function(code){
//     console.log('子进程退出码:',code)
// })

//spawn 和exec效果一样 传入参数不一样 stdout不在回调函数中
// spawn 和 fork相似 都需要传入一个执行文件路径 fork可以父子进程之间通信
// fork用法查看同级目录 多进程ipc通信
// node ./test.js 参数
const p2 = childprocess.spawn('node',['./test.js','参数'])
p2.stdout.on('data',function(data){
    console.log('stdout:',data.toString())
})
p2.stderr.on('data', function (data) {
    console.log('stderr: ',data);
 });

p2.on('close', function (code) {
    console.log('子进程退出码 '+code);
 });