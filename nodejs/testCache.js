const {mycache} = require('./cache')

const cacheObj = new mycache();
cacheObj.add("cache1","wanglihang",1000);
cacheObj.add("cache2","wanglihang2",5000);


// setTimeout(()=>{
//     console.log(cacheObj.get('cache1'))
//     console.log(cacheObj.get('cache2'))
// },3000)

console.log([]==false)

let arr = [1,2,3,4]
console.log(arr.shift(5))