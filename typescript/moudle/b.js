"use strict";
exports.__esModule = true;
/// <reference path="namespace.ts" />
var a_1 = require("./a");
var a_2 = require("./a");
var bar = a_1.foo;
// 通过默认导出访问
console.log(a_2["default"].num);
// 通过模块访问静态数据成员
console.log(a_1.B.num);
var me = {
    name: 'funlee',
    age: 18
};
console.log(me);
var a = new Utils.IPerson1;
console.log(a.name);
///// <reference path="namespace.ts" /> 可以通过这种方式也可以导入三方的js 声明ts文件  然后直接用
