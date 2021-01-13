//node 创建http服务  
//修改代码不会更新 可以用其他包进行热更新supervisor 通过supervisor app.js 启动
var http = require('http');
var url = require('url') //解析url 解析get请求参数

http.createServer(function (request, response) {
  if(request.url =='/favicon.ico'){
  }else{
  var userinfo = url.parse(request.url,true).query

  
  console.log(userinfo.username)
  console.log(userinfo.password)
  response.writeHead(200, {'Content-Type': "text/html;charset ='utf-8'"});//设置浏览器html加载中文不乱码
  response.write('<head><meta charset="UTF-8"></head>')
  response.write('<h2>你好a，aa</h2>')
  response.write('你好')
  response.end();
  }
}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');