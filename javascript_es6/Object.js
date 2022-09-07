// js 创建对象的方式
// const obj = new Object();

// const obj = {name1:'',name2:''}

// const obj = Object.assign({}, {name:'wanglihang'}); 将后面对象浅拷贝给前面{}原对象，obj也是原对象

// var obj = {name:'父对象'}
// const child = Object.create(obj,{age:{
//     value: 10,
//     enumeralbe:true
// }}) 第一个参数为父对象 第二个参数往新建出来的对象里添加属性

// 新创建出来的的对象继承了父对象的原型，child的__proto__ 指向父对象 相当于继承
// console.log(child)  //{age:10}
// console.log(child.__proto__)  //{name:'父对象'}
// console.log(child.name)  //'父对象'

// ----------------------------------------
function myObj(name, attr) {
    this.name = name;
    this.attr = attr;
    this.sayHi = function () {
        return 'hi everyone!!!';
    }
}
// 创建一个对象
var myTester = new myObj("wanglihang", 1)
const arr = Object.keys(myTester) //返回对象可枚举属性和方法 放到数组里
console.log(arr) //["name", "attr", "sayHi"]

// 返回的数组的所有属性(可枚举或不可枚举)直接找到给定对象。
console.log(Object.getOwnPropertyNames(myTester)); // 输出 ["name", "attr", "sayHi"]

// ------------------------for in
// 在 Object 原型上增加一个属性
Object.prototype.newShine = "it's me";
// 返回可枚举属性一直找到该对象的原型链顶部
for (var i in myTester) {
    console.log(i); //输出 name,attr,sayHi,newShine
}


// ###Object 对象的方法 defineProperty() 可以在一个对象上加一个新属性，或者修改一个对象的现有属性
// 有三个参数 参数一要操作的obj，参数二，要加或者要改的属性，三 配置初始值和绑定触发函数

var obj = {};
Object.defineProperty(obj, "key", {
    configurable: true,
    enumerable:true,
    value: 1
});
console.log(obj.key); // 1

delete obj.key; // configurable为true时可以删除属性
console.log(obj.key); // undefined


// 为对象设置一个监听属性 当这个属性赋值或取值时候 调用set get函数
let obj={}
Object.defineProperty(obj, 'listenProperty', {
    //当取属性值时候调用这个
     get(){
         return ''
     },
    //当给属性赋值时候自动调用这个
    set: function (value) { 
        obj.name=value
        obj.age=18
    }
});

obj.listenProperty = 'wanglihang' //调用set
console.log(obj.listenProperty) //调用get 返回 ''
console.log(obj) //返回{ name: 'wanglihang', age: 18 } 不会显示监听属性