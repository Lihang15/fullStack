

async function a(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
          resolve('wanglihang')
        },1000)
    })

}

async function b(){
    let p = await a()
    return p
}

console.log(b())