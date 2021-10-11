
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

let insertSort=arr=>{
    for(let i=1;i<arr.length;i++){
        let temp = arr[i]
        //内层循环决定找到插入位置 要往后移动多少位，只要temp前面的数 大于temp前后位置交换
        for(var j = i-1;j>=0&&arr[j]>temp;j--){
           arr[j+1] = arr[j]
        }
        // arr[j+1]就是要插入的位置
        arr[j+1] =temp
    }
}

let arr =[5,9,8,7,6,1]
insertSort(arr)
console.log(arr)