//可以直接用正则表达式验证字符串
var flag = /e/.test("abvcerx")
console.log(flag)
var flag1 = /e/.exec("dadadaa")
console.log(flag1)

var strs = "qwer"
//可以直接用字符串 也可以用正则
//在原字符串中匹配 ,返回匹配到的字符串
var ma = strs.match(/e/)
var ma1 = strs.match("e")  
console.log(ma,ma1)

//在原字符串中匹配 ,返回匹配到字符串在原字符串位置
var ser = strs.search(/e/)
var ser1 = strs.search("e")
console.log(ser,ser1)

//在原字符串中匹配 ,替换原原字符串中的字符,返回新字符串
//前被后替换
var rep = strs.replace("qwe","aaa")
var rep1 = strs.replace(/e/,"qwe")
console.log(rep,rep1)