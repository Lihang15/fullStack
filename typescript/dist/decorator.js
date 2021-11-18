//ts可以直接识别@decorator  装饰器模式 类似于AOP 在不改变原代码逻辑上强化其中功能
//装饰器是微软实验型语法，未来可能会有改动
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
class Log {
    print(msg) {
        console.log(msg);
    }
}
__decorate([
    decorate,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Log.prototype, "print", null);
// 1.普通的装饰器
//现在我要装饰一下这个打印
// const dec = (target,property)=>{
//     //记住原来的函数
//     const old = target.prototype.print
//     //替换原来的函数 并包装逻辑
//     target.prototype[property] = msg =>{
//         msg = `{${msg}}`
//         //包装完逻辑其实还是调的原来的函数
//         old(msg)
//     }
// }
// dec(Log,'print')
// 2.注解类型的装饰器
function decorate(target, property, decriptor) {
    const oldValue = decriptor.value;
    decriptor.value = msg => {
        msg = `{${msg}}`;
        return oldValue.apply(null, [msg]);
    };
    return decriptor;
}
const log = new Log();
log.print("Hello"); //装饰后输出"{Hello}"
//# sourceMappingURL=decorator.js.map