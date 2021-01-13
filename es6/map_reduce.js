//map（） 接受一个回调函数处理数据
// let arr = [1,2,-3,4]
// let newarr = arr.map(s=>parseInt(s))
// console.log(newarr)

//reduce（） 接收一个默认值 和一个回调函数 前一个函数的结果作为后一个参数，以此类推
// let arr = [1,2,-3,4]
// let result = arr.reduce((a,b)=>{
//     return a+b
// },1)
// console.log(result)
// let a =[]
// a= null
// console.log(a)

// let a = []
// a.push(2)
// a.push(1)
// a.unshift(3)
// a.unshift(4)
// console.log(...a)
// console.log(a[0])

function add(a){
    if(a.length<=0){
        console.log("aa")
    }
    return a
}

let x =[]
console.log(add())
