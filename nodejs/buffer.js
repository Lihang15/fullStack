//buffer 缓冲区 字节数组    存图片 mp3 文件流 等二进制数据

var str = "hello world"
//把字符串存到Buffer里返回 以二进制字节数组存储（二进制）（字符串转字节数组）
var buf = Buffer.from(str,'utf-8')
console.log(buf.length) // 输出11
console.log(buf)  // 输出<Buffer 68 65 6c 6c 6f 20 77 6f 72 6c 64>
console.log(typeof buf) // 输出object
console.log(buf.toString()) // 输出hello world

//创建一个大小为 1024b 的字节数组  1024b =1k
var buf2 = Buffer.alloc(1024)








