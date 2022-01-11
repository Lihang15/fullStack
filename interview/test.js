
//浅拷贝

let obj1 = {name:'wanglihang',age:18,f:()=>{},arr:[1,2]}
let obj3 = {ooo3:"12333"}
let obj2 = {}
let obj = Object.assign(obj2,obj1,obj3)
console.log(obj)
console.log(obj1)