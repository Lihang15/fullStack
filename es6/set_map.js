//set集合
let set = new Set()
set.add(1)
set.add(2)
set.add(3)
set.add(4)
let set1 = new Set([5,6])

set.forEach((value)=>{
    console.log(value)
})
set1.forEach((value)=>{
    console.log(value)
})

//map 集合
let map = new Map([
    ["name","wanglihang"],
    ["age",18]
])
console.log(map.get("name"))
console.log(map.get("age"))
map.set("sex","男")
console.log(map.get("sex"))
console.log(map.has("sex"))
map.forEach((key,value)=>{
    console.log(value,key)
})

//map.keys（） 拿到迭代器 进行迭代
for (let key of map.keys()){
    console.log(key)
}

for (let va of map.values()){
    console.log(va)
}

console.log(...map.values())

let str = '23'
console.log(typeof(Number(str)))