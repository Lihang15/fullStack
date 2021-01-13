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

let user = new User("wanglihang",18)
// console.log(user.sayhello())
User.isAdult(17)
console.log("+++",new User("wanglihang",18).name)0


class wanglihang extends User{
    constructor(name,age){
        super(name,age)
        // this.name = "zi"
        // this.age = super.name
    }
}

let hang = new wanglihang('aa',18)
console.log(hang.name)
console.log(hang.age)