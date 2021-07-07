// const crypto = require('crypto');
// function f(){
//     let promise = new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//            resolve('hello world')
//         },3000)
//     })
//       return promise
// }

// async function b(){
//     for(let i =0;i<4;i++){
//         let res = await f()
//         console.log(res)
//     }
// }

// b()


// function a(){
//     console.log('aaa1')
// }

// function a(){
//     console.log('aaa2')
// }
// a()
// var x =new String('xx')
// console.log(x instanceof String)

// (function aaa(a,b){
//     console.log(a+b)
//   ;})(1,2)

//   console.log(x)

// let setHeadrTitle =(headerTitle)=>{return {type:'set_header',data:headerTitle}}
// console.log(setHeadrTitle('123'))

// console.log(10.5)

// console.log(parseFloat(0.1+0.3))
// console.log(typeof Date.now())


// var a = 3
// console.log(a)

//  function foo(x,y){
//     return x-y;
//     }
//     function foo(x,y){
//     return x+y;
//     }
//     var num=foo(1,2); 
//     console.log(num)









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
//    //遍历数组 拼接字符串
//    let str = ''
//    propsAsclls.forEach((val)=>{
//         let ascllToStr = mapAscllToProps.get(val)
//         let objV = mapPropsToValue.get(ascllToStr)
//         str+=ascllToStr+':'+objV+'&'
//     })
//     return str +='timestamp:'+timestamp
    
// }

// function SHA(str){
//     const hash = crypto.createHash('sha256');
//     hash.update(str);
//     return hash.digest('hex').toUpperCase()
// }

// let str = generatorSortStr({name:3,abc:1,ff:2,},'1251681554222')
// let shastr = SHA(str)
// console.log(str)
// console.log(shastr)

// data = {"phone":"132626 98718"}
// var timestamp = new Date().getTime();
// var str = "data:'" + JSON.stringify(data) + "'&timestamp:" + '111';
// console.log(str, timestamp)
// console.log(SHA(str))
// const path = require('path');
// const fs = require('fs');
// const crypto = require('crypto');

// const buffer = fs.readFileSync(path.join('C://Users//lihang//Desktop', '首页视频.mp4'));
// const hash = crypto.createHash('md5');
// hash.update(buffer, 'utf8');
// const md5 = hash.digest('hex');
// console.log(md5);
// console.log(null==false)
// console.log(5/2)

// function output(xx){
//     console.log(xx)
// }
// var a = "xx"

// function aaa(arr){
//     for(let i= 0;i<arr.length;i++){
//         if(arr[i]==0){
//             arr.splice(i, 1)
//             arr.push(0)
//         }
//     }
//     return arr
// }

// console.log(aaa([0,0,1,0,2,0,0,0]))

// setTimeout(()=>{console.log("world")
//         process.nextTick(function(){
//             console.log("xxxx")
//         },3000)
// },1000)

// setTimeout(()=>{console.log("hello")
        
// },2000)

// let insert=(arr)=>{
//     for(let i=1;i<arr.length;i++){
//         let temp = arr[i]
//         for(var j=i;j>0&&arr[j-1]>temp;j--){
//             arr[j]=arr[j-1]
//         }
//         arr[j]=temp
//     }
// }

// let arr = [5,6,1,2,8,1,9,3]
// insert(arr)
// console.log(arr)

let a ='111'
console.log(typeof a ==string)