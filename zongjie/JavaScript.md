### 问题一 js处理小数丢失精度问题
   parseFloat((0.1 + 0.2).toFixed(10))  等于0.3
### 问题二 如何检测一个对象一定是数组
   Array.isArray()
   arr instanceof Array
### 问题三 JS加载会阻塞页面渲染吗？
   会 1.可以在<script defer src=""> defer 不会阻塞页面渲染，异步加载，等到页面加载完立即执行
      2.可以在<script async src=""> async 不会阻塞页面渲染，异步加载，脚本加载完立即执行
### 问题四 通过new操作符调用构造函数，会经历哪些阶段？
    1、创建一个新的对象；
    2、链接到原型；
    3、将构造函数的this指向这个新对象，执行构造函数的代码，为这个对象添加属性，方法等；
    4、返回新对象。
### 问题五 js模块化
   require/exports	2009年	CommonJS  应用nodejs
   import/export	2015年	ECMAScript2015（ES6）应用前端js
   原生浏览器不支持 require/exports，可使用支持 CommonJS 模块规范的 Browsersify、webpack 等打包工具，它们会将 require/exports 转换成能在浏览器使用的代码。
   import/export 在浏览器中无法直接使用，会跨域，可以借助webpack打包