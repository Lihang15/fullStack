//js 代码和 ts代码共存 tsc 只会编译ts代码
// const aa: string = "hello typescript"
// console.log(aa)
// var b = "hello javascript"
// console.log(b)
//变量 类型 any string number boolen void enum undefined null never
// var number = 123;
// console.log(number);
// var s = "string";
// console.log(s);
// var a;
// a = 1;
// a = "str";
// console.log(a);
// var arr = ["xax", 1];
// var f = true;
// var color;
// (function (color) {
//     color[color["Red"] = 0] = "Red";
//     color[color["Blue"] = 1] = "Blue";
//     color[color["Yellow"] = 2] = "Yellow";
// })(color || (color = {}));
// var em = color.Blue;
// console.log(em);

// var mycars = new Array()
// mycars[0] = "Saab"
// console.log(mycars.length)

// var ss = 1
// ss = "xx"
// console.log(ss)
// for (let i = 0; i < 5; i++) {

// }
// console.log(i)

var aaa = 1
function a(aa,cb){
    aaa = aa
    console.log(aaa)
    cb()
    console.log(aaa)
}

function cb(){
   aaa= 1234
}

a(123,cb)