// 防止重名 每个Symbol是不同的  id和id2不相等 
 //Symbol("id") 可以做为对象唯一属性  方便开发者对其更改

 //obj 里 symbol属性  for···in，object.keys() 不能访问  有隐藏性
let id = Symbol("id");
let id2 = Symbol('id');

let obj ={
    [id]:123,
    [id2]:456
}
obj[id2] = 555
console.log(obj)