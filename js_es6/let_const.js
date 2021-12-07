//var 变量作用域问题 
// for(var i =0;i<5;i++){
//     console.log(i)
// }
// console.log("xx",i)  //i输出5

//let 控制作用域
// for(let i =0;i<5;i++){
//     console.log(i)
// }
// console.log("xx",i)  //输出defined

const str = "abc"  //常量 不可改变
console.log(str)
// str = "a"
// console.log(str)



// 自执行函数中 不用var 定义变量 定义的是全局变量
// 普通函数 用不用var定义的变量都是函数内部局部变量 外部无法使用