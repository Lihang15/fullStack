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
// fs.writeFile("./data/test.js","お前 の 名前 は 何ですか",{flag:"a"},function(err){
//     if(err){
//         console.log(err)
//     }
// })



//流式文件写入   //适合大文件 一点一点读  stream是对buffer的封装 最底层还是buffer
const outputStream = fs.createWriteStream('a.txt') //输出流会自动关闭

const inputStream = fs.createReadStream('./b.txt')
inputStream.on('data',data=>{
    console.log(data)
})
inputStream.on('end',()=>{
    console.log('读取完成')
})
inputStream.once("close",()=>{
    console.log('关闭')
 })

 
 //输出流通过管道倒入输入流  相当于内容复制 读出来的 写进去
 inputStream.pipe(outputStream);


