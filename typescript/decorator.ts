//ts可以直接识别@decorator  装饰器模式 类似于AOP 在不改变原代码逻辑上强化其中功能
//装饰器是微软实验型语法，未来可能会有改动

class Log{
    @decorate
    print(msg){
       console.log(msg)
    }
}



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

// 2.注解类型的装饰器 可以用@decorate注解在函数上
function decorate(target,property,decriptor){
    const oldValue = decriptor.value
    decriptor.value = msg=>{
        msg = `{${msg}}`
        oldValue.apply(null,[msg])
    }
    return decriptor
}

const log = new Log()
log.print("Hello")   //装饰后输出"{Hello}"

//tsc decorator.ts --target ES5 -w --experimentalDecorators 监听ts文件热更新