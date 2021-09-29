// ts基本类型  string number boolen undefined null any
// ts其他类型  void enum never   

import { type } from "os"

let str: string = "string"  

let n: number = 15

let is: boolean = false

let un: undefined = undefined

let nu: null = null

let ana: any = "xxx"   //任意类型

let lianhe : string | number = "1"  //联合类型


enum color {
    Red,
    Blue,
    Yellow
}
let em: color = color.Blue  //默认从0开始

enum direction{
  Up= 'UP'
  Down = 'DOWN'
}

console.log(em)






//类型别名

type mystring = string   //定义一个string类型的别名
let mystype: mystring = "string type of my"  
console.log(mystype)


type funcType = () => string
type funcTypeOrString = string | funcType

function getName(n: funcTypeOrString): string | funcType{
    if(typeof n ==='string'){
        return n
    }
    if(typeof n =='function'){
        console.log(n())
    }
}
function testType(): string{
    return "testType"
}
getName(testType)

//类型断言 不是强制类型转换  也不能用于强制类型转换  只能断言声明的类型 这个例子只能断言成 string或者number 

//1.将一个联合类型断言假设为其中一个类型 因为number类型没有length属性会报错   这样做能骗过ts的编译器  编译器不会报错 


// function func(val: string | number): number {
//     if ((<string>val).length) {
//       return (<string>val).length
//     } else {
//       return val.toString().length
//     }
//   }
  
//   或者
  
  function func(val: string | number): number {
    if ((val as string).length) {
      return (val as string).length
    }else{
        console.log(val)
    }
      
  }

console.log(func(123456))