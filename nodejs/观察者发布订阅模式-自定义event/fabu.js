const {myEvent} = require("./myEvent")

function fabu(arg1,arg2){
    console.log(arg1,arg2)
    console.log('xxxx')
}

let e = new myEvent()

e.on('dingyuwo',fabu)
module.exports={
    e
}