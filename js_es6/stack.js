function IsPopOrder(pushV, popV)
{
   if (pushV.length<=0||popV.length<=0){
       return
   }
    let stack =[]
    let index =0
    for(let i=0;i<pushV.length;i++){
        stack.push(pushV[i])
        while (stack.length!=0&&stack[stack.length-1]==popV[index]){
            stack.pop()
            index++
        }
    }
    return stack.length==0?true:false
}

console.log(IsPopOrder([1,2,3,4,5],[4,5,3,2,1]))
let a =2.3*5
console.log(typeof(a))