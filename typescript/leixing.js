"use strict";
// ts基本类型  string number boolen undefined null any
// ts其他类型  void enum never   
exports.__esModule = true;
var str = "string";
var n = 15;
var is = false;
var un = undefined;
var nu = null;
var ana = "xxx"; //任意类型
var lianhe = "1"; //联合类型
// 返回值为 never 的函数可以是抛出异常的情况
function error(message) {
    throw new Error(message);
}
error("123456");
var color;
(function (color) {
    color[color["Red"] = 0] = "Red";
    color[color["Blue"] = 1] = "Blue";
    color[color["Yellow"] = 2] = "Yellow";
})(color || (color = {}));
var em = color.Blue; //默认从0开始
var direction;
(function (direction) {
    direction["Up"] = "UP";
    direction["Down"] = "DOWN";
})(direction || (direction = {}));
console.log(em);
var mystype = "string type of my";
console.log(mystype);
function getName(n) {
    if (typeof n === 'string') {
        return n;
    }
    if (typeof n == 'function') {
        console.log(n());
    }
}
function testType() {
    return "testType";
}
getName(testType);
//类型断言 不是强制类型转换  也不能用于强制类型转换  只能断言声明的类型 这个例子只能断言成 string或者number 
//1.将一个联合类型断言假设为其中一个类型 因为number类型没有length属性会报错   这样做能骗过ts的编译器  编译器不会报错 
// function func(val: string | number): number {
//     if ((<string>val).length) {
//       return (<string>val).length
//     } else {
//       return val.toString().length
//     }
//   }
//   或者
function func(val) {
    if (val.length) {
        return val.length;
    }
    else {
        console.log(val);
    }
}
console.log(func(123456));
