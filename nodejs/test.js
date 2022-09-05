
bibao = 567
function test(){
    bibao = 123
    return function b(){
        bibao++
        console.log(bibao)
    }
}


console.log(bibao)