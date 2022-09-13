
n = 123
var a ={
    n:'wanglihang',
    f:()=>{
       console.log(this.n)
    }
}

a.f()    

// 回调函数this指向当前所在块之外 当前指向window 输出123  
//             nodejs环境输出undefined

