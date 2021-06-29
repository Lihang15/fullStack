//1.数组中出现超过一半的数
// let halfNum =arr=>{
//     if(arr.length<=0){
//         return
//     }
//     //reduce 将数组中的数转换成{1:5,2:8}
//     let obj = arr.reduce((pre,cur)=>{
//          if(pre[cur]){
//              pre[cur]++
//          }else{
//              pre[cur]=1
//          }
//          return pre
//     },{})
//     let num = arr.length/2
//     let result = -1
//     for(let a in obj){
//         if(obj[a]>=num){
//             result = a
//         }
//     }
//     return result
// } 

// let re = halfNum([1,1,1,1,1,2,2,2])
// console.log(re)

//2.数组连续子序列最大和 

// let max = arr=>{
//    if(arr.length<0){
//        return
//    }
//    let newArr =[]
//    for(let i = 0;i<arr.length;i++){
//        let sum = 0
//        for(let j = i;j<arr.length;j++){
//           sum+=arr[j]
//           newArr.push(sum)
//        }
//    }
//    newArr.sort((a,b)=>{
//        return a-b
//    })
//    return newArr[newArr.length-1]
// }
// let arr =[1,2,3,-4]
// console.log(max(arr))

//3.数组去重
// let delRepeat1=arr=>{
//     return Array.from(new Set(arr))
// }
// let delRepeat2=arr=>{
//     return arr.reduce((pre,cur)=>{
//         if(!pre.includes(cur)){
//              pre.push(cur)
//         }
//         return pre
//     },[])
// }
// let delRepeat3=arr=>{
//     return arr.filter((item,index,arrr)=> 
//     arrr.indexOf(item)===index)
// }
// let delRepeat4=arr=>{
//     let map = new Map();
//     let newArr = []
//     arr.forEach((e)=> {
//         if(!map.has(e)){
//             map.set(e,'1')
//            newArr.push(e)
//         }
//     });
//     return newArr
// }
// let arr =[1,2,3,8,8,3,5,9]
// let newarr = delRepeat4(arr)
// console.log(newarr)

//4.函数柯里化 调用和逻辑分离
// function add(x){
//     return function(y){
//         return x+y
//     }
// }
// console.log(add(1)(2))

//5.数组扁平化 多维数组转一维
// let ping1=arr=>{
//     console.log(arr.flat())
// }
// let ping2=arr=>{
//     return arr.toString().split(',').map(item=>{
//         return parseInt(item)
//     })
// }

// let ping3=arr=>{
//     return arr.join(',').split(',').map(item=>{
//         return parseInt(item)
//     })
// }

// let arr = [1,2,3,4,[5,6,7,8],[9,10]]
// console.log(ping3(arr))

//6.输出base的exp次幂
// let baseExp=(base,exp)=>{
//     if(exp==0){
//         return 1
//     }
//     let flag
//     if(exp>0){
//         //证明是＋
//         flag=true
//     }
//     let result =1
//     for(let i=0;i<Math.abs(exp);i++){
//         result*=base
//     }
//     return flag?result:1/result
   
// }
// console.log(baseExp(0,0))

// 7.字符串转整数

// let strToInt=str=>{
//     //排除不正常的输入
//     if(isNaN(str)){
//         return
//     }
//     let i = 0
//     let flag
//     if(str[0]=='+'){
//         i=1
//     }
//     if(str[0]=='-'){
//         i=1
//         flag=true
//     }
//     let sum = 0
//     for(i;i<str.length;i++){
//         sum*=10
//         sum+=str[i]-'0'
//     }
//     return flag?-sum:sum
// }
// console.log(strToInt("-10000"))

//链表倒数第k个节点
// function node(val){
//     this.val = val
//     this.next=null
// }

// let endk=(head,k)=>{
//     let p1 = head
//     let p2 = head
//     for(let i=0;i<k-1;i++){
//         p1 = p1.next
//     }
//     while(p1.next!=null){
//        p1=p1.next
//        p2= p2.next
//     }
//     return p2
// }

// let head = new node(1)
// let node1 = new node(2)
// let node2 = new node(5)
// let node3 = new node(3)
// head.next=node1
// node1.next = node2
// node2.next = node3
// console.log(endk(head,2))

//反转链表
// let reverse=head=>{
//     let stack = []
//     while(head!=null){
//         stack.push(head)
//         head = head.next
//     }
//     let newhead = stack.pop()
//     while(stack.length>0){
//         let temp = stack.pop()
//         temp.next.next = temp
//         temp.next =null
//     }
//     return newhead
// }

// let head = new node(1)
// let node1 = new node(2)
// let node2 = new node(5)
// let node3 = new node(3)
// head.next=node1
// node1.next = node2
// node2.next = node3
// console.log(reverse(head))

//二分查找 找到k在数组中的下标
// let erfen=(arr,k)=>{
//     let start =0
//     let end = arr.length-1
//     while(start<=end){
//         let mid = parseInt((start+end)/2)
//         if(arr[mid]==k){
//             return mid
//         }else if(arr[mid]<k){
//             start = mid+1
//         }else{
//             end = mid-1
//         } 
//     }
//     return -1
    
// }
// console.log(erfen([1,2,3,4,5],5))

//入栈出栈序列 思路 ：循环将入栈input 存入中间栈 存的同时判断中间栈站头是否与输出栈头相等，相等中间栈出栈，最后看这个中间栈内有没有元素

// let inOut=(input,output)=>{
//     if(input.length<0||output.length<0){
//         return
//     }
//     let stack = []
//     let index=0
//     for(let i=0;i<input.length;i++){
//         stack.push(input[i])
//         while(stack.length>0&&stack[stack.length-1]==output[index]){
//             stack.pop()
//             index++
//         }
//     }
//     if(stack.length<=0){
//         return true
//     }
//     return false
// }

// console.log(inOut([1,2,3,4],[1,4,2,3]))

//括号匹配问题 [{()}] 合法 
let kuohao = str=>{
    let stack = []
    let left=['[','{','(']
    let right=[']','}',')']
    for(let i=0;i<str.length;i++){
        if(left.includes())
    }
}