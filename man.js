var hello = require("./export_func")

var obj = require("./export_obj")

 var aa =new obj()
 aa.setName("wanglihang")
 aa.sayHello()
// hello.b()

// console.log(__filename)
// process.stdout.write("Hello World!" + "\n");

// 通过参数读取


// 获取执行路径
// console.log(process.execPath);


// // 平台信息
// console.log(process.platform);
// function a(){
//     var count =2
//     function x(){
//         count+=1
//     }
//     return x
    
// }
// console.log(a())
// console.log(a())

var aa ="xxx"
aa[1]="3"
console.log(aa[1])

var arr = ["xx",11]
console.log(arr)