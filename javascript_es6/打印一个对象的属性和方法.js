
function myObj(name, attr) {
    this.name = name;
    this.attr = attr;

    this.sayHi = function () {
        return 'hi everyone!!!';
    }
}

// 创建一个对象
var myTester = new myObj("wanglihang", 1)


function print(obj){
  
    for (var i in myTester) {
        // myTester.hasOwnProperty(i) 检测这个属性是在自身还是在原型
        if (myTester.hasOwnProperty(i) && typeof myTester[i] == "function") {
            console.log("对象方法: ", i, "=", myTester[i].toString())
        }else{
            console.log("对象属性: ", i);
        }
    }
    }

    print(myTester)
    // 对象属性:  name
    // 对象属性:  attr
    // 对象方法:  sayHi = function () {
    //     return 'hi everyone!!!';
    // }