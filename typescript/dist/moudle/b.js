"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/// <reference path="namespace.ts" />
const a_1 = require("./a");
const a_2 = __importDefault(require("./a"));
const bar = a_1.foo;
// 通过默认导出访问
console.log(a_2.default.num);
// 通过模块访问静态数据成员
console.log(a_1.B.num);
const me = {
    name: 'funlee',
    age: 18
};
console.log(me);
let a = new Utils.IPerson1;
console.log(a.name);
console.log("xxxxx" + a_1.jsx);
///// <reference path="namespace.ts" /> 可以通过这种方式也可以导入三方的js 声明ts文件  然后直接用
//# sourceMappingURL=b.js.map