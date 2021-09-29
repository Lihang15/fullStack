"use strict";
// public private protect readonly static 修饰符类似于java 只是protect 只能子类访问
class Animal {
    constructor(name) {
        this.name = name;
    }
    run() {
        return `${this.name} is running`;
    }
}
const snake = new Animal('wanglihang');
console.log(snake.run());
//继承 不会继承父类构造函数
class Dog extends Animal {
    constructor(name) {
        super(name);
    }
    bark() {
        return `${this.name} is barking`;
    }
    run() {
        return 'dog 重写父类run方法';
    }
}
const dog = new Dog('dog');
console.log(dog.run());
//# sourceMappingURL=Class.js.map