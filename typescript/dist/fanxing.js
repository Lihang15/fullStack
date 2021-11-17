//函数泛型   可以传入什么类型返回什么类型
function echo(arg) {
    return arg;
}
const result = echo(true); //result 为boolean 类型
function echoWith(arg) {
    return arg;
}
console.log(echoWith({ length: 10, max: 10 })); //必须包含length属性 否则报错
let keykey = { key: "123", value: 123 };
//# sourceMappingURL=fanxing.js.map