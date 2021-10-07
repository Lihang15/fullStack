// function delRepeat(arr){
//     if(!arr){
//         return 'null'
//     }
//     var newarr = []
//     let map = new Map()

//     for(let key of arr){
//         if(!map.has(key)){
//             map.set(key,null)
//             newarr.push(key)
//         }
//     }
//     console.log(map)
//     return newarr
// }

// function delRepeat1(arr){
//     return Array.from(new Set(arr))
// }

// function reduceDel(arr){
//     return arr.reduce((prev,cur)=>{
//         if(!prev.includes(cur)){
//              prev.push(cur)
//         }
//         return prev  
//     },[])
// }

// let arr = [2,3,4,5,8,8,0,6,4,3,5,5,55]

// let newarr = delRepeat(arr)
// let newarr1 = delRepeat1(arr)
// console.log(newarr)
// console.log(newarr1)
// console.log(reduceDel(arr))

//数组扁平化

// function flatten(arr) {
//     return arr.join(',').split(',').map(function(item) {
//         return parseInt(item);
//     })
// }
// function bianping(arr){
//    return  arr.toString().split(',').map((item)=>{
//         return Number(item)
//     })
// }

// let arr =[[1,3,5],[2,8,1,2],3]
// console.log(arr)
// console.log(...arr)
// console.log(bianping(arr))
// console.log(flatten(arr))

//统计数组中每个元素出现的次数返回一个对象

// let arr = [2,3,4,5,8,8,0,6,4,3,5,5,55]
// function count(arr){
//     return arr.reduce((prev,cur)=>{
//         if(!prev[cur]){
//             prev[cur] = 1
//         }else{
//             prev[cur]++
//         }
//         return prev
//     },{})
// }
// console.log(count(arr))

//数组去重
// let newarr = [2,3,4,5,8,8,0,6,4,3,5,5,55].filter((number, index, arr) => arr.indexOf(number) === index)
// console.log(newarr)

//找到数组中的数 返回number
// let a = [1, 4, -5, 10].find(n => {return n < 0})
// console.log(a)