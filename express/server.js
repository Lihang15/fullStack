var express = require('express')
var app = express()
//ejs 加载模板引擎 也可以像模板传数据传递
//npm install ejs 安装ejs                                                              
app.set("view engine","ejs")
//默认加载模板引擎的文件夹  views 可以使用自定义目录 app.set('views','你的目录路径')
app.use(express.static('static'))
app.listen(8000,function(){
    console.log("开启服务")
})
app.get('/hello',function(req,res){
    res.write("hello")
    res.end()                                                       
})
                                     

app.get('/index',function(req,res){
    res.sendFile( __dirname + "/static/" + "index.html" );
    res.end()
})

app.get('/a',function(req,res){
    res.sendFile( __dirname + "/" + "a.html" );
    res.end()
})

app.get('/',function(req,res){
    //向模板中传数据
    res.render('index',{
        title:"wanglihang",
        userInfo :{
            name :"zhangsan",
            age :14,
        },
        h3:'<h3>我是h3</h3>',
        flag:true
    })
    res.end()
})


