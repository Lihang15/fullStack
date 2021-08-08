var express = require('express')
var app = express()
const router_r = require('./ximalaya_router')
const router_classify = require('./classify_router')
//ejs 加载模板引擎 也可以像模板传数据传递
//npm install ejs 安装ejs                                                              
app.set("view engine","ejs")
app.use(router_r)
app.use(router_classify)
//默认加载模板引擎的文件夹  views 可以使用自定义目录 app.set('views','你的目录路径')
app.use(express.static('static'))
app.listen(8000,function(){
    console.log("开启服务")
})
app.get('/jyh',function(req,res){
    res.write("姜育恒")
    res.end()                                                       
})
                                     

app.get('/index',function(req,res){
    res.sendFile( __dirname + "/static/" + "index.html" );
    res.end()
})
app.get('/react_login',(req,res)=>{
    data={token:'111111'}
    // res.json(data)
    res.status(508).json(data)
})
app.get('/weixin_data',(req,res)=>{
    console.log(req.query.pagenum) 
    console.log(req.query.count)
    let data = {}
    if(req.query.pagenum==1){
        data = {
            dataList:[
                {title:"title1",time:"2021-01-02"},
                {title:"title2",time:"2021-02-03"},
                {title:"title3",time:"2021-03-04"}
             ]
        }
    }
    if(req.query.pagenum==2){
       data= {
            dataList:[
                {title:"page2",time:"2021-01-02"},
                {title:"page3",time:"2021-02-03"},
                {title:"page4",time:"2021-03-04"}
             ]
        }
    } 
    console.log("xxx")
    // res.write("123")
    // res.write(JSON.stringify(data))
    res.json(data)
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


