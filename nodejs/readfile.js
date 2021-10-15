var fs =  require('fs')


let data = fs.readFile('./index.html',function(err,data){
    if (err){
        console.log(err)
    }else{
        console.log(data)  //以二进制存储的字节数组<Buffer 3c 21 44 4f 43 54 59 50 45 20 68 >
        console.log(data.toString())
    }
}) 


//简单文件写入  //适合小文件
// fs.writeFile("./data/test.js","我是你爹",{flag:"a"},function(err){
//     if(err){
//         console.log(err)
//     }
// })



//流式文件写入   //适合大文件 
// var ws = fs.createWriteStream("./data/test.js")
// ws.write("xasxasx")



//流式文件读取 用于大文件 一点一点读到内存
// var rs = fs.createReadStream("./data/test.js")
//分多次读到data中
// rs.on("data",function(data){
//     console.log(data)
// })
// rs.once("close",function(){
//     console.log("关闭流")
// })


//复制文件
// rs.pipe(ws);


