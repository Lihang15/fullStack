let a =['name','name','age','wac','age','age']

function arrObj(arr){
    return arr.reduce((pure,cur)=>{
           if(cur in pure){
              pure[cur]++
           }else{
               pure[cur]=1
           }
           return pure
    },{})
}

console.log(arrObj(a))