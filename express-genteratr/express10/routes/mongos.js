const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

mongoose.connect('mongodb://admin:123456@127.0.0.1:27017/db_lihang?authSource=admin', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
})
mongoose.connection.on('connected', function () {    
    console.log('Mongoose 连接成功');  
})
mongoose.connection.on('error',function (err) {    
    console.log('Mongoose connection error: ' + err);  
})

Schema = mongoose.Schema
//创建于数据表 对应的实体 操作这个实体等于操作数据库对象
var UserSchema = new Schema({          
    name : { type: String },                    
    sex: {type: String},                       
    age: {type: String},                               
});

var User = mongoose.model('table1',UserSchema)

router.get('/find_datas',(req,res)=>{
    var user = new User({
        name : req.query.name,                    
        sex: 'ts',                       
        age: 'jsjs',          
    })
   user.save((err,data)=>{
       if(err){
           res.send(err)
       }else{
           res.send(data)
       }
   })
// User.find({},(err,data)=>{
//     if(err){
//         res.send(err)
//     }else{
//         res.send(data)
//     }
// })
})

module.exports = router