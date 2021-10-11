//洗牌算法 1-n 的数 打乱顺序后 保证每个数出现的位置概率相同
//思路 在一个数组中 随机取数放入一个新数组 

let xipai =array=>{
    let arrlength = array.length
    let newArr = []
    let item
    while(arrlength){
        item = Math.floor(Math.random()*arrlength--)
        newArr.push(array.splice(item,1)[0])
    }
    return newArr
}


console.log(xipai([1,2,3,4,5,6,7,8,9]))

//创建一个1-100的数组
let a = Array.from(Array(100),(value,index)=>{return index+1})
console.log(a)