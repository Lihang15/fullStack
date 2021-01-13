//箭头函数 对象，解构表达式应用

let person = {
    name :"wanglihang",
    eat :(food) =>console.log(person.name,food),
    //es6 可以直接写函数 不用写属性名
    eat1(arg){
    console.log(arg)
    }
}
person.eat("ren")
person.eat1("ren1")

//箭头函数 参数为对象 ， 解构person中name 为参数

const a = ({name})=>console.log(name)

a(person)