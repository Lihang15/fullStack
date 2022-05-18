
function* hello(){
    yield "abc"
    yield "cdf"
    return "qq"
}
let h = hello()
// console.log(h.next())
// console.log(h.next())
// console.log(h.next())
// console.log(h.next())

for(let v of h){
    console.log(v)
}

//处理异步操作

function ajax(data,param){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            const result = {status:100,msg:'success',data:data,param:param}
            resolve(result)
        },2000)
    })
}

function* gen(){
    console.log("xxx")
    //获取data1
    let data1 = yield ajax("data1")
    //获取data2
    let data2 = yield ajax("data2",data1)
    console.log("bbbb")
}

let g = gen()
g.next().value.then(data=>{
   return g.next("我来了").value
}).then((data)=>{
   console.log(data)
})

function a(n){
    if(n==0){
        return 0
    }
    return n+a(n-1)
}
console.log(a(5)) 