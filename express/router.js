const express = require('express')
var router = express.Router()

router.get('/aa',(req,res)=>{
    res.send("aa")
    res.end()
})

module.exports =router