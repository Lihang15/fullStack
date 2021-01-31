
function Base(base,exp){
    let flag =false
    if (exp>0){
        flag = true
    }
    let result = 1
    for (let i =0;i<Math.abs(exp);i++){
        result *=base
    }
    return flag?result:1/result
}

console.log(Base(2,-3))