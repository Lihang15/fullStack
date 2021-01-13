//从数组或者对象中解析值 赋值给新对象

//解构数组
let arr =[1,2,"xxx"]
let [a,b,c,d] = arr
let [w] = arr
console.log(arr)

console.log(a)
console.log(c)
console.log(d)
console.log(w)

//结构对象

const person = {
    name :"wanglihang",
    age :24,
    language :['java','c++','js']
}

let {name,age,language}=person
console.log(name)
console.log(age)
console.log(language)

//起别名
let{name:n}=person
console.log(n)

let{language:x}=person
console.log(x)



