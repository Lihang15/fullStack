var fs =  require('fs')


// var data =fs.readFileSync('./index.html')
// console.log(data.toString())

// let data = fs.readFile('./index.html',function(err,data){
//     if (err){
//         console.log(err)
//     }else{
//         console.log(typeof(data))
//         console.log(data.toString())
//     }
// }) 

//同步写
// var f= fs.openSync("./data/test1.js","w")
// fs.writeSync(f,"dda")
// fs.closeSync(f)

// //异步文件写入 异步函数不会有返回值
// fs.open("./data/test.js","w",function(err,data){
//     if (!err){
//         fs.write(data,"异步函数",function(err){
//             if(!err){
//                 fs.closeSync(data)
//             }
//         })
//     }
// })

//简单文件写入  //适合小文件
// fs.writeFile("./data/test.js","我是你爹",{flag:"a"},function(err){
//     if(err){
//         console.log(err)
//     }
// })

//流式文件写入   //适合大文件 

// var ws = fs.createWriteStream("./data/test.js")
// ws.write("xasxasx")

//读取文件 获取文件buffer（字节数组）
// fs.readFile("./data/test1.js",function(err,data){
//     if(err){
//         console.log(err)
//     }
//     console.log(data.toString())
// })

//流式文件读取 用于大文件 一点一点读到内存
var rs = fs.createReadStream("./data/test.js")

//分多次读到data中
rs.on("data",function(data){
    console.log(data)
})
rs.once("close",function(){
    console.log("关闭流")
})

