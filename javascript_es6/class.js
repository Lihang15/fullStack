// 子类如果有构造函数 必须在构造函数中调用父构造函数 否则编译失败
// private 只能在子类类内能用 new class().函数 不能用
// protect 可以在子类类内,和子类中用 new class().函数 不能用
// public 公用

class User{
    constructor(name,age){
    this.name =name
    this.age =age
    }
    sayhello(){
        console.log(this.name)
        return "hello"
    }
    static isAdult(age){
        if (age>18){
            console.log("成年人")
        }
        if (age<18){
            console.log("未成年人")
        }


    }

}

let user = new User("zjj",18)
console.log(user.name)
User.isAdult(17)
console.log("+++",new User("wanglihang",18).name)


class wanglihang extends User{
    constructor(name,age){
        super(name,age)
        this.name1 = "wlh"
        this.age1 = "18"
    }
    sayhello(){
        console.log('son class')
        super.sayhello()
        console.log(super.name) //输出undefined 因为指向父 原型对象
        console.log(this.name)
    }
}

let hang = new wanglihang('aa',19)
console.log(hang.name)
console.log(hang.age)