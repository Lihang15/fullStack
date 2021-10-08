
//... 为展开运算符
let arr =[1,2,3,"x"]
console.log(typeof(arr))
console.log(arr)
console.log(...arr)
console.log(1,...arr)

function add(a,b){
    return a*b
}
console.log(add(...arr))

//数组合并
let newarr =[...[1,2],...[3,4]]
console.log(newarr)
const [first,...end] = newarr
console.log(first)
console.log(end)
let arrrr = [...'hello']
console.log(arrrr)
console.log(arrrr.length)