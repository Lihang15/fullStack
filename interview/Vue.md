### 问题一 vue双向数据绑原理
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>

<body>
    <div id="app">
        <input type="text" id="a">
        <div id="b"></div>
    </div>
</body>
<script>
    // 通过一个事件来监听输入框的输入数据，将输入数据值和自定义对象属性关联，对象属性已通过Object.defineProperty监测属性变化来自动触发get，set
    var obj = {};  //定义一个空对象
    Object.defineProperty(obj, 'val', {//定义要修改对象的属性
        get: function () {
            return val;
        },
        set: function (newVal) { 
            val = newVal;//定义val等于修改后的内容
            document.getElementById('a').value = val;//让文本框的内容等于val
            document.getElementById('b').innerHTML = val;//让span的内容等于val
        }
    });
    document.addEventListener('keyup', function (e) {//当在文本框输入内容时让对象里你定义的val等于文本框的值
        obj.val = e.target.value;
    })
</script>
</html>

### 问题二  computed 和watch 区别
 1.computed 不支持异步，当computed内有异步操作时无效，无法监听数据的变化，watch支持异步操作

 2、是否调用缓存：computed中的函数所依赖的属性没有发生变化，那么连着调用当前的函数n次只会执行一次其余的从缓存中读取，而watch如果有返回值的情况如果有地方调用它 那么每次都是在调用这个函数

 3、是否调用return：computed中的函数必须要用return返回，watch中的函数不是必须要用return。

 4、使用场景：computed----当一个属性受多个属性影响的时候，使用computed-------登录的时候 用户名 密码，验证码 输入完成 登录按钮亮

### vuex是做甚麽的
 vuex 所有组件共享状态 所有组件都可以拿这个状态值，也可以修改这个状态值

### vue 组件之间的通信
 父子组件传值：父 传值 子通过props接收
             子通过this.$emit() 触发父注册的函数

  兄弟组件之间的传值 创建一个文件 export default new Vue，总线传值
  然后在组件一中 导入这个文件 比如叫bus  然后 接收方组件bus.$on('event',()=>{})
  传值方 bus.$emit('event',value)

###  vue路由的钩子函数
 router.beforeEach((to,from,next)=>{}) 匹配路由之前
 回调函数中的参数，to：进入哪个路由，from：从哪个路由离开，next：函数，放行，也可以去你想去的路由

###  mvc和mvvm区别？
 mvc 中大量的 DOM 操作使页面渲染性能降低，加载速度变慢，影响用户体验。和当 Model 频繁发生变化，开发者需要主动更新到 View 

 mvc controller接收数据，model处理数据，数据处理完把数据给view渲染
 mvvm 把controller改成viewmodel 和model双向数据绑定，viewmodel接收数据处理数据，数据改变model改变，view自动更新（model和view没直接关联）