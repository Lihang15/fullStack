//函数泛型   可以传入什么类型返回什么类型
function echo(arg) {
    return arg;
}
var result = echo(true); //result 为boolean 类型
function echoWith(arg) {
    return arg;
}
console.log(echoWith({ max: 10 }));
