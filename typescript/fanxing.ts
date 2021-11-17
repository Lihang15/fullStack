//函数泛型   可以传入什么类型返回什么类型

function echo<T>(arg: T): T{
    return arg
}

const result =echo(true)  //result 为boolean 类型


//限定泛型的
interface With{
    length:number
}

function echoWith<T extends With>(arg: T):T{
    return arg
}


console.log(echoWith({length:10,max:10}))  //必须包含length属性 否则报错

//类 

// class Queue<T>{
//     private data = []
//     push(item:T){
//         return this.data.push(item)
//     }
//     pop():T{
//         return this.data.unshift()
//     }
// }

// const queue = new Queue<Number>()


//接口泛型

interface Key<T,U>{
    key:T
    value:U
}

let keykey:Key<string,number> = {key:"123",value:123}