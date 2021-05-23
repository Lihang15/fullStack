
let arr =[
    {currentTime:'2021/06/04'},
    {currentTime:'2021-06-06'},
    {currentTime:'2021-06-05'},
]

function s(a,b){
    return new Date(b.currentTime)-new Date(a.currentTime)
}

console.log(arr)
let newarr = arr.sort(s)
console.log(newarr)