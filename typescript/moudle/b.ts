/// <reference path="namespace.ts" />
import {foo, B} from "./a";
import A1 from "./a";


 
const bar = foo;
 
// 通过默认导出访问
console.log(A1.num);
 
// 通过模块访问静态数据成员
console.log(B.num);

const me: Utils.IPerson = {
    name: 'funlee',
    age: 18
}
console.log(me); 
let a = new Utils.IPerson1
console.log(a.name); 


///// <reference path="namespace.ts" /> 可以通过这种方式也可以导入三方的js 声明ts文件  然后直接用