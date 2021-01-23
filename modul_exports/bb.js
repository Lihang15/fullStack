//一个模块中变量 和函数 没法被外部访问，需要导出
console.log("我是b模块")
let x = 1;
let b = 2;

function add(arg1,arg2){
    return arg1+arg2
}
function less(arg1,arg2){
    return arg1 - arg2
}
//暴露属性方法
exports.x = x
exports.func = function (params) {
    console.log(params)
}
exports.add = add
exports.less = less