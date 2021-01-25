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
}

let hang = new wanglihang('aa',19)
console.log(hang.name)
console.log(hang.age)