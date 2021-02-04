function stack(input,output){
    let stack = []
    let index =0
    for(let i=0;i<input.length;i++){
        stack.push(input[i])
        while(stack.length>0&&stack[stack.length-1]==output[index]){
            stack.pop()
            index++
        }
    }
    if (stack.length==0){
        return true
    }
    return false
}

console.log(stack([1,2,3],[1,2,3])) 