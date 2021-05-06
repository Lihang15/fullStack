
// 浅拷贝 在堆内存开辟一块新空间  新对象的改变 会影响到源对象的引用类型值，不会影响到基本类型值
// var person ={
//     name:"wanglihang",
//     value:['18','年轻']
// }
// function qian(obj){
//     var newObj ={}
//     for(let index in obj){
//         if(obj.hasOwnProperty(index)){
//             newObj[index]=obj[index]
//         }
        
//     }
//     return newObj
// }

// let person1 = qian(person)
// person1.name="abc"
// person1.value[0]=25
// console.log(person)
// console.log(person1)


//··············································································································································
//附值
// 浅拷贝 和附值的区别是 在堆内存新开辟一块空间 新对象和源对象共用那块堆内存 新对象改变 源对象基本类型 和引用类型 都会被改变

// var person ={
//     name:"wanglihang",
//     value:['18','年轻']
// }

// let person2 = person
// person2.name="xiaozhang"
// person2.value[0]=22
// console.log(person)
// console.log(person2)


//··············································································································································

// 深拷贝 新对象的改变 不会影响到源对象 基于递归拷贝

// var person ={
//     name:"wanglihang",
//     value:['18','年轻']
// }
// function qian(obj){
//     var newObj ={}
//     for(let index in obj){
//         if(obj.hasOwnProperty(index)){
//             newObj[index]=qian(obj[index])
//         }
        
//     }
//     return newObj
// }

// let person1 = qian(person)
// person1.name="abc"
// person1.value[0]=25
// console.log(person)
// console.log(person1)


var a = [{a: 'aaaaa'}]

function copy2(obj) {
    return JSON.parse(JSON.stringify(obj))
}

var b = copy2(a)
console.log(a, b)
b[0].a = 'bbbbb'
console.log(a, b)