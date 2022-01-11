let a =['name','name','age','wac','age','age']

function arrObj(arr){


    let result =  arr.reduce((pure,cur)=>{
           if(cur in pure){
              pure[cur]++
           }else{
               pure[cur]=1
           }
           return pure
    },{})
    return result
}

console.log(arrObj(a))