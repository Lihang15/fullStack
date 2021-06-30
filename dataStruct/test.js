//1.数组中出现超过一半的数
let halfNum =arr=>{
    if(arr.length<=0){
        return
    }
    //reduce 将数组中的数转换成{1:5,2:8}
    let obj = arr.reduce((pre,cur)=>{
         if(pre[cur]){
             pre[cur]++
         }else{
             pre[cur]=1
         }
         return pre
    },{})
    let num = arr.length/2
    let result = -1
    for(let a in obj){
        if(obj[a]>=num){
            result = a
        }
    }
    return result
} 

let re = halfNum([1,1,1,1,1,2,2,2])
console.log(re)

//2.数组连续子序列最大和 

let max = arr=>{
   if(arr.length<0){
       return
   }
   let newArr =[]
   for(let i = 0;i<arr.length;i++){
       let sum = 0
       for(let j = i;j<arr.length;j++){
          sum+=arr[j]
          newArr.push(sum)
       }
   }
   newArr.sort((a,b)=>{
       return a-b
   })
   return newArr[newArr.length-1]
}
let arr =[1,2,3,-4]
console.log(max(arr))

//3.数组去重
let delRepeat1=arr=>{
    return Array.from(new Set(arr))
}
let delRepeat2=arr=>{
    return arr.reduce((pre,cur)=>{
        if(!pre.includes(cur)){
             pre.push(cur)
        }
        return pre
    },[])
}
let delRepeat3=arr=>{
    return arr.filter((item,index,arrr)=> 
    arrr.indexOf(item)===index)
}
let delRepeat4=arr=>{
    let map = new Map();
    let newArr = []
    arr.forEach((e)=> {
        if(!map.has(e)){
            map.set(e,'1')
           newArr.push(e)
        }
    });
    return newArr
}
let arr =[1,2,3,8,8,3,5,9]
let newarr = delRepeat4(arr)
console.log(newarr)

4.函数柯里化 调用和逻辑分离
function add(x){
    return function(y){
        return x+y
    }
}
console.log(add(1)(2))

//5.数组扁平化 多维数组转一维
let ping1=arr=>{
    console.log(arr.flat())
}
let ping2=arr=>{
    return arr.toString().split(',').map(item=>{
        return parseInt(item)
    })
}

let ping3=arr=>{
    return arr.join(',').split(',').map(item=>{
        return parseInt(item)
    })
}

let arr = [1,2,3,4,[5,6,7,8],[9,10]]
console.log(ping3(arr))

//6.输出base的exp次幂
let baseExp=(base,exp)=>{
    if(exp==0){
        return 1
    }
    let flag
    if(exp>0){
        //证明是＋
        flag=true
    }
    let result =1
    for(let i=0;i<Math.abs(exp);i++){
        result*=base
    }
    return flag?result:1/result
   
}
console.log(baseExp(0,0))

// 7.字符串转整数

let strToInt=str=>{
    //排除不正常的输入
    if(isNaN(str)){
        return
    }
    let i = 0
    let flag
    if(str[0]=='+'){
        i=1
    }
    if(str[0]=='-'){
        i=1
        flag=true
    }
    let sum = 0
    for(i;i<str.length;i++){
        sum*=10
        sum+=str[i]-'0'
    }
    return flag?-sum:sum
}
console.log(strToInt("-10000"))

//8.链表倒数第k个节点
function node(val){
    this.val = val
    this.next=null
}

let endk=(head,k)=>{
    let p1 = head
    let p2 = head
    for(let i=0;i<k-1;i++){
        p1 = p1.next
    }
    while(p1.next!=null){
       p1=p1.next
       p2= p2.next
    }
    return p2
}

let head = new node(1)
let node1 = new node(2)
let node2 = new node(5)
let node3 = new node(3)
head.next=node1
node1.next = node2
node2.next = node3
console.log(endk(head,2))

9.反转链表
let reverse=head=>{
    let stack = []
    while(head!=null){
        stack.push(head)
        head = head.next
    }
    let newhead = stack.pop()
    while(stack.length>0){
        let temp = stack.pop()
        temp.next.next = temp
        temp.next =null
    }
    return newhead
}

let head = new node(1)
let node1 = new node(2)
let node2 = new node(5)
let node3 = new node(3)
head.next=node1
node1.next = node2
node2.next = node3
console.log(reverse(head))

//10.二分查找 找到k在数组中的下标
let erfen=(arr,k)=>{
    let start =0
    let end = arr.length-1
    while(start<=end){
        let mid = parseInt((start+end)/2)
        if(arr[mid]==k){
            return mid
        }else if(arr[mid]<k){
            start = mid+1
        }else{
            end = mid-1
        } 
    }
    return -1
    
}
console.log(erfen([1,2,3,4,5],5))

//11.入栈出栈序列 思路 ：循环将入栈input 存入中间栈 存的同时判断中间栈站头是否与输出栈头相等，相等中间栈出栈，最后看这个中间栈内有没有元素

let inOut=(input,output)=>{
    if(input.length<0||output.length<0){
        return
    }
    let stack = []
    let index=0
    for(let i=0;i<input.length;i++){
        stack.push(input[i])
        while(stack.length>0&&stack[stack.length-1]==output[index]){
            stack.pop()
            index++
        }
    }
    if(stack.length<=0){
        return true
    }
    return false
}

console.log(inOut([1,2,3,4],[1,4,2,3]))

//12.括号匹配问题 [{()}] 合法 
let kuohao = str=>{
    let stack = []
    let left=['[','{','(']
    let right=[']','}',')']
    for(let i=0;i<str.length;i++){
        if(left.includes(str[i])){
            stack.push(str[i])
        }
        if(right.includes(str[i])){
            if(stack.length<0){
                return false
            }else{
               if(left.indexOf(stack[stack.length-1])==right.indexOf(str[i])){
                   stack.pop()
               }else{
                   return false
               }
            }
        }
    }
    if(stack.length==0){
        return true
    }
    return false
}

console.log(kuohao('({[]]})'))

//13.排序两个有序数组成一个有序数组
let sort=(arr1,arr2)=>{
    let [i,j]=[0,0]
    let newArr = []
    while(i<arr1.length||j<arr2.length){
        if(arr1[i]>arr2[j]){
            newArr.push(arr2[j])
            j++
        }else if(arr1[i]<arr2[j]){
            newArr.push(arr1[i])
            i++
        }else{
            if(arr1[i]){
                newArr.push(arr1[i])
            }
            if(arr2[j]){
                newArr.push(arr2[j])
            }
            i++
            j++
        }
    }
    return newArr
}
let arr1 = [7,8,9]
let arr2 = [1,2,3]
console.log(sort(arr1,arr2))

//14.二叉树广度优先遍历(BFS)
function node(val){
    this.val = val
    this.left = null
    this.right=null
}
let root = new node(1)
let node2 = new node(2)
let node3 = new node(3)
let node4 = new node(4)
let node5 = new node(5)
let node6 = new node(6)
let node7 = new node(7)
let node8 = new node(8)
let node9 = new node(9)
root.left = node2
root.right = node3
node2.left = node4
node2.right= node5
node4.left = node8
node4.right = node9
node3.left = node6
node3.right = node7
let BFS =root=>{
   if(!root){
       return
   }
   let queue =[]
   let result =[]
   queue.push(root)
   while(queue.length>0){
        let temp = queue.shift()
        result.push(temp.val)
        if(temp.left!=null){
           queue.push(temp.left)
        }
        if(temp.right!=null){
            queue.push(temp.right)
        }
   }
   return result
}
// console.log(BFS(root))

//15.二叉树深度优先遍历(DFS)
//先序
let DFS1=root=>{
    if(!root){
        return
    }
    let stack = []
    let result =[]
    stack.push(root)
    while(stack.length>0){
        let temp = stack.pop()
        result.push(temp.val)
        if(temp.right!=null){
            stack.push(temp.right)
        }
        if(temp.left!=null){
            stack.push(temp.left)
        }
    }
    return result
}

//后序
let DFS2=root=>{
    if(!root){
        return
    }
    let stack = []
    let result =[]
    stack.push(root)
    while(stack.length>0){
        let temp = stack.pop()
        result.unshift(temp.val)
        if(temp.left!=null){
            stack.push(temp.left)
        }
        if(temp.right!=null){
            stack.push(temp.right)
        }
        
    }
    return result
}
//16.二维数组中的查找
let erwei = (arr,key)=>{
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr[i].length;j++){
            if(arr[i][j]==key){
                return true
            }
        }
    }
    return false
}
// let arr = [1,2,[3,4],[2,8,9]]
// console.log(erwei(arr,9))

//17.替换字符串的空格成20%
let th = (str)=>{
    return str.split('').map((item)=>{
        if(item==' '){
            item='20%'
        }
        return item
    }).join('')
}
// console.log(th("王 立 航"))
//18.判断字符串是否是回文
let huiwen=str=>{
    for(let i=0;i<str.length;i++){
        //首尾只要有一次不相等 就不是回文
        if(!(str.charAt(i)==str.charAt(str.length-1-i))){
            return false
        }
    }
    return true
}
console.log(huiwen("lavel"))
//19.洗牌算法 随机打乱一个数列 让数落在不同的位置概率相等
let xipai = (arr)=>{
    let newArr = []
    while(arr.length>0){
        let num = Math.floor(Math.random()*(arr.length))
        newArr.push(arr[num])
        arr.splice(num,1)
    }
    return newArr
}
// console.log(xipai([1,2,3,4,5]))

//20.两个栈实现个队列

class Queue{
    constructor(){
        this.stack1=[]
        this.stack2=[]
    }
    push(val){
       this.stack1.push(val)
    }
    pop(){
        if(this.stack2.length<=0){
            this.stack2.push(this.stack1.pop())
        }
        return this.stack2.pop()
    }
}
// let myQ = new Queue()
// myQ.push(1)
// myQ.push(2)
// console.log(myQ.pop())
// myQ.push(3)
// console.log(myQ.pop())
// console.log(myQ.pop())
//21.最小函数栈
class MinStack{
    constructor(){
        this.content=[]
        this.minStack=[]
    }
    push(val){
       this.content.push(val)
       if(this.minStack.length==0||this.minStack[this.minStack.length-1]>val){
           this.minStack.push(val)
       }
    }
    pop(){
        let v = this.content.pop()
        if(v==this.minStack[this.minStack.length-1]){
            this.minStack.pop()
        }
        return v
    }
    min(){
        return this.minStack.pop()
    }
}

// let myQ = new MinStack()
// myQ.push(1)
// myQ.push(2)
// myQ.push(3)
// myQ.pop()
// console.log(myQ.min())

//22.两个队列实现栈
class Stack{
    constructor(){
        this.que1=[]
        this.que2=[]
    }
    push(val){
       this.que1.push(val)
    }
    pop(){
       if(this.que1.length>0){
           while(this.que1.length>1)
               this.que2.push(this.que1.shift()) 
       }
     
       let val = this.que1.pop()
       while(this.que2.length>0){
           this.que1.push(this.que2.shift())
       }
       return val
    }
}

let myQ = new Stack()
myQ.push(1)
myQ.push(2)
myQ.push(3)
myQ.pop()
myQ.push(4)
myQ.pop()

console.log(myQ.pop())