class Users{
    public name: string
    public age: number
    constructor(name: string,age: number){
        this.name = name
        this.age = age
    }
    public sayhello(){
        console.log('father class')
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

const us = new Users('wanglihang',123)
us.sayhello()