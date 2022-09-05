// commonjs 标准 module.exports={test:123} 导出会按照原样子导出 导出函数 require接收的就是函数，导出{} 就是{}
//               exports.test='123'   导出后会自动包裹成对象属性  {test:123}

function obj(){
    this.set = function(){
        console.log("set")
    }
    this.get = function(){
        console.log("get")
    }
}
module.exports = obj