function* hello(){
    yield "abc"
    yield "cdf"
    return "qq"
}
let h = hello()
// console.log(h.next())
// console.log(h.next())
// console.log(h.next())
// console.log(h.next())

for(let v of h){
    console.log(v)
}