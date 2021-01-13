//装饰器 label 可以解析运行  @T是一个函数 User被实例化时候 T先运行 并把User对象传进去 

@T
class User{
    constructor(){

    }
}

function T(User){
User.name ="wanglihang"
}

console.log(User.name)