// 原型
// js每个函数都会有prototype属性, 
// prototype 可以让所有的对象实例共享,该函数prototype属性中包含的属性和方法,因为共享，所以节省内存
// 原型链 原型形成的链式结构
// 对象实例都有__proro__ 属性 ，是查找时候实际用到的，js每一次获取对象中属性都是一次查找过程，
// 如果自有属性找不到，就会去原型中查找，还找不到就去父对象和父对象原型中去找，直到找到Object的原型 没找到就没有
function parent() {
    this.parentInfo = "parent";
}

parent.prototype.getParentInfo = function() {
    return this.parentInfo;
};

function child(){
    this.childInfo = "child";
}

parent.prototype.getChildInfo = function() {
    return this.childInfo;
};

// 原型继承 

child.prototype = new parent();

var instance = new child();

console.log(instance.getChildInfo()); // child
console.log(instance.getParentInfo()); // parent
console.log(instance.parentInfo); // parent
console.log(instance.__proto__ === child.prototype); //true
console.log(instance.__proto__); //输出整个父对象 parent { parentInfo: 'parent' }
console.log(instance.__proto__.__proto__ === parent.prototype); //true
console.log(instance.__proto__.__proto__.__proto__ === Object.prototype); //true
console.log(instance.__proto__.__proto__.__proto__.__proto__ === null); //true





// prototype 可以让让所有的对象实例共享,该函数prototype属性中包含的属性和方法,因为共享，所以节省内存
// function parent() {
//     this.parentInfo = "parent";
// }

// parent.prototype.getParentInfo = function() {
//     return this.parentInfo;
// };

// function parent(){
//     this.parentInfo = "parent";
//     this.getParentInfo = function(){
//         return this.parentInfo
//     }
// }

// const p1 = new parent()
// const p2 = new parent()
// console.log(p1.getParentInfo===p2.getParentInfo)  false


// 放到prototype里共享
// function parent() {
//     this.parentInfo = "parent";
// }
// parent.prototype.getParentInfo = function() {
//     return this.parentInfo;
// };

// const p1 = new parent()
// const p2 = new parent()
// console.log(p1.getParentInfo===p2.getParentInfo) true