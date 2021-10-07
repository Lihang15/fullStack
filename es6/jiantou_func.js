
// es5写法
// function add(a,b){
//     if(!b){
//         //如果b不传 结果为100
//         b = 100
//     }
//     return a+b
// }
// console.log(add(10,11))

//es6 可以直接传递默认值
// function add(a,b=11){
//     // if(!b){
//     //     //如果b不传 结果为100
//     //     b = 100
//     // }
//     return a+b
// }
// console.log(add(10))

//es6写法箭头函数
//a 函数名 () 参数 箭头后面为函数体
let a = ()=>console.log("abc")
a()

let b = (arg) =>console.log(arg) 
b('wanglihang')

let c = (arg1,arg2) =>{console.log(arg1,arg2),console.log(arg1*arg2)}
c(3,4)

//有返回值 并且有多行函数 函数体要用{}
let d = (arg1,arg2) =>{
    return arg2+arg1
}
//如果箭头函数后面只有一行 并且不是console.log {} () 不加括号都会自动拼一个return
let f = (arg)=>(arg)

console.log(d(11,11))

