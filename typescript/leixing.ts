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
  Up= 'UP',
  Down = 'DOWN'
}

console.log(em)


// 返回never的函数总是返回的异常
function error(message: string): never {
  throw new Error(message);
}

// 推断的返回值类型为never
function fail() {
  return error("Something failed");
}

// 返回never的函数必须存在无法达到的终点
function infiniteLoop(): never {
  while (true) {
  }
}



//类型别名

type mystring = string   //定义一个string类型的别名
let mystype: mystring = "string type of my"  
console.log(mystype)


type funcType = () => string
type funcTypeOrString = string | funcType

// function getName(n: funcTypeOrString): string | funcType{
//     if(typeof n ==='string'){
//         return n
//     }
//     if(typeof n =='function'){
//         console.log(n())
//     }
// }
// function testType(): string{
//     return "testType"
// }
// getName(testType)

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
  
//   function func(val: string | number): number {
//     if ((val as string).length) {
//       return (val as string).length
//     }else{
//         console.log(val)
//     }
      
//   }

// console.log(func(123456))



interface User {
  id: number;
  age: number;
  name: string;
};

// 相当于: type PartialUser = { id?: number; age?: number; name?: string; }
type PartialUser = Partial<User>

// 相当于: type PickUser = { id: number; age: number; }
type PickUser = Pick<User, "id" | "age">

// 相当于: type RequiredUser = { id: number; age: number;name: string }
type RequiredUser = Required<User>

// 相当于: type PickUser = { age: number; name: string; }
type OmitUser = Omit<User, "id">

// 相当于 可以自定义健值对
const record:Record<string,string>={'123':'456',name:'123'}
console.log(record)