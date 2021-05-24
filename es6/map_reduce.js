//map（） 接受一个回调函数处理数据
// let arr = [1,2,-3,4]
// let newarr = arr.map(s=>{parseInt(s)
//     return s
// })
// console.log(newarr)

let arr = [1,2,-3,4]
// let newarr = arr.map(s=>{
//     if (s==-3){
//         s = 3
//     }
//     return s
// }  
// )
// console.log(newarr)
// console.log(arr)
//reduce（） 接收一个默认值 和一个回调函数（prev,cur,index,arr）prev为上一次调用结果的返回值，cur为当前元素,index为当前元素下标,arr为当前数组
// let arr = [1,2,-3,4]
// let result = arr.reduce((a,b,c)=>{
//     return a+b+c
// },1)

let res = arr.reduce((a,b)=>{
   return a+b
})
console.log(res)
// console.log(result)
// console.log(arr)
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

// function add(a){
//     if(a.length<=0){
//         console.log("aa")
//     }
//     return a
// }

// let x =[]
// console.log(add())
