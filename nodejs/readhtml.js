const fs = require('fs')


let data = fs.readFile('./a.html',function(err,data){
    if (err){
        console.log(err)
    }else{
       
        let htmldata = data.toString()
        let newdata = htmldata.replace(/http:\/\/www\.banco\.com\.sg/g,'http://wlh.abc.com').replace(/www.banco.com.sg/g,'wlh.abc.com').replace(/BANCO/g,'HONGKONG')
        console.log(newdata)
    }
}) 