// vue路由的钩子函数
// router.beforeEach((to,from,next)=>{}) 匹配路由之前
// 回调函数中的参数，to：进入哪个路由，from：从哪个路由离开，next：函数，放行，也可以去你想去的路由。

//自己实现一个event思路
//创建一个 Event类 这个类初始化时候应该开启一个事件循环的监听 主线程过来轮询这个loop emit.on('a',function)存在list<e>里
// map<e,function> 去这个事件循环里去遍历 emit（e） 找到的话去执行。

// React实现原理 
// 真实的dom操作 要调用 web application 性能消耗大
// 虚拟dom（就是一个JS数组对象，完整的描述真实的DOM） 大大提示操作dom性能  数据+jsx模板相结合 
// state改变 新的虚拟dom 中对比旧的虚拟dom的改变 来替换 虚拟dom  相当于操作js对象 不直接操作真实dom
