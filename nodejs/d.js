const { SSL_OP_MICROSOFT_BIG_SSLV3_BUFFER } = require("constants")

function aa(){
    console.log("aa")
}

function bb(){
    console.log("bb")
}
module.exports={
    aa:aa,
    bb:bb
}