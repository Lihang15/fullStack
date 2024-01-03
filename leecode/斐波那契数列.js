

//输出斐波那契额数列项数值
function feibo1(n){
    if(n==0){
        return 0
    }
    if(n==1){
        return 1
    }
    if(n==2){
        return 1
    }
    return feibo1(n-1)+feibo1(n-2)
}

console.log(feibo1(7))