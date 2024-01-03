// 两数之和

const twoNumber = (arr,target)=>{
    const map = new Map()
    for(let i = 0;i<arr.length;i++){
        if(map.has(arr[i])){
          return [map.get(arr[i]),i]
        }else{
          // 字典里没有就存入当前数的补数，然后继续遍历找到这个补数在字典里存在即可
           map.set(target-arr[i],i)
        }
    }
    return -1
  }
  
  console.log(twoNumber([1,2,3,4],7));