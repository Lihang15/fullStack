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



//数组去重
// let newarr = [2,3,4,5,8,8,0,6,4,3,5,5,55].filter((number, index, arr) => arr.indexOf(number) === index)
// console.log(newarr)
