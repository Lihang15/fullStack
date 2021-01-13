var fs =  require('fs')


// var data =fs.readFileSync('./index.html')
// console.log(data.toString())

let data = fs.readFile('./index.html',function(err,data){
    if (err){
        console.log(err)
    }else{
        console.log(typeof(data))
        console.log(data.toString())
    }
}) 