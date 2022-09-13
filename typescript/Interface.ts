// interface 可以定义对象的类型

interface Person{
    readonly id: number 
    name: string
    age: number
    // sex?: string 
    [dynamics: string]: string | number   //键值必须是字符串 
}

let p: Person = {name:"wanglihang",age:15,id:123,"xxxx":"sssss",'xx':1}

// p.id = 1234  //只读属性不允许附值
console.log(p)