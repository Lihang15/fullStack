function a(){
   let promise = new Promise((resolve,reject)=>{
    setTimeout(()=>{console.log("hello")
       let a = 3;
       let b =2;
       if (b>a){
       resolve(b)
       }else{
       reject(a)
       }

    },1000)
   })
   return promise
}

a().then((data)=>{
console.log(data)
}).catch((result)=>{
    console.log(result)
})