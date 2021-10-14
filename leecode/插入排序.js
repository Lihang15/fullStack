
// let arr =[
//     {currentTime:'2021/06/04'},
//     {currentTime:'2021-06-06'},
//     {currentTime:'2021-06-05'},
// ]

// function s(a,b){
//     return new Date(b.currentTime)-new Date(a.currentTime)
// }

// console.log(arr)
// let newarr = arr.sort(s)
// console.log(newarr)

//冒泡排序
// function bubbleSort(arr){
//     //决定循环次数
//     for(let i =0;i<arr.length;i++){
//         for(let j=0;j<arr.length-i;j++){
//             if(arr[j]>arr[j+1]){
//                 let temp = arr[j]
//                 arr[j]=arr[j+1]
//                 arr[j+1]=temp
//             }
//         }
//     }
// }
// let arr =[5,9,8,7,6,1]
// bubbleSort(arr)
// console.log(arr)

//插入排序

let charu = (arr)=>{
    for(let i =1;i<arr.length;i++){
        //待插入的值
        let tmp = arr[i]
        // 需要插入的位置下标
        let index = 0
        let flag =false
        for(let k=i-1;k>=0;k--){
            // 比目标值小的向后移位
            if(arr[k]>tmp){
                arr[k+1] = arr[k]
                index = k
                flag = true
            }
        }
        if(flag){
            arr[index] = tmp
        }
    }
}

let arr = [5,9,8,7,6,1]
charu(arr)
console.log(arr)