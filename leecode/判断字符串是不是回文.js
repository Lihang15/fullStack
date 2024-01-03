let huiwen = str=>{
    let strLength =str.length
    for(let i=0;i<strLength;i++){
        if(str.charAt(i)!==str.charAt(strLength-1-i)){
            return false
        }
    }
    return true
}
console.log(huiwen("level1"))