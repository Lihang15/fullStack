let huiwen = str=>{
    let strLength =str.length
    let count =0
    for(let i=0;i<strLength;i++){
        if(str.charAt(i)==str.charAt(strLength-1-i)){
        }else{
            return false
        }
    }
    return true
}
console.log(huiwen("135853"))