//   /q/i  /q/要匹配的是啥字符  i 规则  从前往后匹配 默认匹配到一个返回 /g 继续匹配
//可以直接用正则表达式验证字符串
var flag = /e/.test("abvcerx")
console.log(flag)
var flag1 = /e/.exec("dadadaa")
console.log(flag1)

var strs = "qwerqqQ"
//可以直接用字符串 也可以用正则
//在原字符串中匹配 ,返回匹配到的字符数组
var ma = strs.match(/\qq?/g)
var ma1 = strs.match("e")
console.log(ma, ma1)

//在原字符串中匹配 ,返回匹配到字符串在原字符串位置
var ser = strs.search(/q/g)
var ser1 = strs.search("e")
console.log(ser, ser1)

//在原字符串中匹配 ,替换原原字符串中的字符,返回新字符串
//前被后替换
var rep = strs.replace("q", "aaa")
var rep1 = strs.replace(/q/g, "aaa")
console.log(rep, rep1)

var str = "How are you doing today?";
var n = str.split(" ", 3);
console.log(n.toString())

var str1 = "Ishthhais all there is?";
var patt1 = /[a-h]+/g;
console.log(str1.match(patt1));
var str2 = "15464148qewq43ddaaA"
console.log("xxxxx", str2.match(/[A-z]/g))

var str3 = "axrta12xa_@A Wdf%.xx\n"
console.log(str3.match(/\w+/g))


var str4 = "aaa_aa bb cc rw@ae g_x  "
console.log(str4.match(/\aa?/g))

var str5 = "@1xF@2xF@BBaaa"
console.log(str5.match(/@[0-9a-fA-F]{1,}/g))