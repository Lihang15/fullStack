const crypto = require('crypto');


// function generatorSortStr(obj,tamp){
//     //存ascll和属性对应映射
//     let mapAscllToProps  = new Map();
//     //存属性对应的值
//     let mapPropsToValue  = new Map();
//     //存属性的ascll码
//     let propsAsclls = []
//     for(let index in obj){
//         propsAsclls.push(index.charCodeAt())
//         mapAscllToProps.set(index.charCodeAt(),index)
//         mapPropsToValue.set(index,obj[index])
//     }
//     //排序ascll码数组
//     propsAsclls.sort((a,b)=>{
//         return a-b
//     })
//     let timestamp=tamp
//    //遍历数组 拼接字符串拼接成符合sha转换字符串
//    let str = ''
//    propsAsclls.forEach((val)=>{
//         let ascllToStr = mapAscllToProps.get(val)
//         let objV = mapPropsToValue.get(ascllToStr)
//         str+=ascllToStr+':'+objV+'&'
//     })
//     return str +='timestamp:'+timestamp
// }


// let str = generatorSortStr({a1:3,a2:1,a3:2},'1251681554222')
// let userid = '1'
// let shastr = SHA(userid)
// console.log(str)
// console.log(shastr)
// data = {"phone":"132626 98718"}
// var timestamp = new Date().getTime();
// var str = "data:'" + JSON.stringify(data) + "'&timestamp:" + '111';
// console.log(str, timestamp)
// console.log(SHA(str))