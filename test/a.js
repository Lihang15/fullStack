

console.log('123')
let o = {
   name:setInterval(()=>{console.log('一次时间循环')},2000)
}

console.log('456')
clearInterval(o.name)
