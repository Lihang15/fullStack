var express = require('express')
var ejs = require("ejs")
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')
var session = require('express-session')
const cookie = require('express-session/session/cookie')
const routers = require('./router')
var app = express()
//挂载路由 /x/aa 访问
app.use('/x',routers)
//设置session  session 默认会以sessionid为建，设置的值为值，保存在客户端cookie中，
app.use(session({
    secret: 'this is session',
    // name:"123",修改sessionid名字
    resave: false,
    saveUninitialized: true,
    cookie:{
        maxAge:1000*60,
        secure:false, //true 只有https才能访问session
    },
    rolling:true  //如果session存值，每次请求都会重置session设置的过期时间
}))

//解析表单post 数据
app.use(bodyParser.urlencoded({extended:false}))
//加载cookie中间件 设置cookie
app.use(cookieParser())
//解析json post 数据
app.use(bodyParser.json())
//默认加载模板引擎的文件夹  views 可以使用自定义目录 app.set('views','你的目录路径')
app.engine("html",ejs.__express)
//可以把ejs 转成 html 结尾                                                             
app.set("view engine","html")

//内置中间件  使用静态目录 //目录名 static或者public  直接可以访问localhost:8000/a.jpg   a.html
//aa 为别名 localhost:8000/aa/a.jpg 
// app.use("aa",express.static('static'))
app.use(express.static('static'))
app.listen(8000,function(){
    console.log("开启服务")
})
//中间件定义 ：在一次服务请求前 或一次请求完成之后 的一系操作
//express 应用级中间件 所有请求之前先走 这个方法 然后next（）才能放行                                                                            
app.use((req,res,next)=>{
    next()
})

//也可以在 res 后加next 配置路由级中间件 
app.get('/hello',function(req,res){
    res.write("hello")
    res.end()                                                       
})
app.get('/destroy',function(req,res){
    //销毁session
    //1. req.session.cookie.maxAge=0   
    
    //2. req.session.username =""

    //3
    req.session.destory()

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

app.get('/getCookie',function(req,res){
    //获取get请求参数
    let username = req.cookies.username
    let pass = req.cookies.pass                 
    console.log(username) 
    console.log(pass)
    //获取session
    if(req.session.username){
        console.log("session值： ",req.session.username)
    }   

 })
app.get('/login',function(req,res){
    //设置session
    req.session.username="张晶晶"
    //获取get请求参数
    console.log(req.query.username)
    //设置多个二级域名 共享cookie cookie加密 签名
    // res.cookie("username","zhangsan",{maxAge:1000*60*60,domain:".lihang.com"})
    res.cookie("username","zhangsan",{maxAge:1000*60*60})
    res.cookie("pass","123456",{maxAge:1000*60*60})
    res.render('from',{})                                              
 }) 
 app.post('/dologin',function(req,res){
     //req.body 获取post传值 使用它必须配置第三方中间件(npm install body-parser)
    console.log(req.body)
 })
//错误处理中间件
app.use((req,res,next)=>{
    res.status(404).send('404') 
})
 

