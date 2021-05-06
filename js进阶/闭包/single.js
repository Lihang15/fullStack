//单例模式

function single(){
    var obj={name:'wanglihang'}
    return function(){
        return obj
    }
}

aa= single()
bb= single()
console.log(aa())
console.log(bb())