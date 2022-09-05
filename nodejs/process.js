var arg1 ,arg2

// process.argv.forEach(function(val, index, array) {
//     console.log(index + ': ' + val);
//  });
let args = process.argv.splice(2)
console.log(args)
args.forEach((value)=>{
console.log(value)
})


//通过命令行设置环境变量 来区分环境 export NODE_ENV=process
console.log(process.env.NODE_ENV)

// console.log(__filename)
// console.log(__dirname)
process.stdout.write("Hello World!" + "\n");

// 通过参数读取

// 获取执行路径
// console.log(process.execPath);


// // 平台信息
// console.log(process.platform);