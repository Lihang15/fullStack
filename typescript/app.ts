//js 代码和 ts代码共存 tsc 只会编译ts代码
// const aa: string = "hello typescript"
// console.log(aa)
// var b = "hello javascript"
// console.log(b)

//变量 类型 any string number boolen void enum undefined null never
let number: number = 123
console.log(number)
let s: string = "string"
console.log(s)
let a: any
a = 1
a = "str"
console.log(a)
let arr: any[] = ["xax", 1]
let f: boolean = true

enum color {
    Red,
    Blue,
    Yellow
}
let em: color = color.Blue
console.log(em)

let arr1: Array<Number> = [1, 2, 3]
let arr2: number[] = [1, 2, 3]

let a1: number | string

