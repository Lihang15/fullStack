// vue路由的钩子函数
// router.beforeEach((to,from,next)=>{}) 匹配路由之前
// 回调函数中的参数，to：进入哪个路由，from：从哪个路由离开，next：函数，放行，也可以去你想去的路由。

//自己实现一个event思路
//创建一个 Event类 这个类初始化时候应该开启一个事件循环的监听 主线程过来轮询这个loop emit.on('a',function)存在list<e>里
// map<e,function> 去这个事件循环里去遍历 emit（e） 找到的话去执行。

// React实现原理 
// 虚拟DOM最大的好处在于抽象了渲染的过程，为应用带来了跨平台的能力，
// 不再是仅仅局限于浏览器端。比如React-Native和WeeX可以运行在Android、IOS平台上。
// 虚拟dom 减少了 不必要的浏览器引擎操作dom  通过操作js对象 通过diff算法 算出不同的改变 渲染大大提升性能 

// 虚拟dom（就是一个JS数组对象，完整的描述真实的DOM） 大大提示操作dom性能  数据+jsx模板相结合 
// state改变 新的虚拟dom 中对比旧的虚拟dom的改变 来替换 虚拟dom  相当于操作js对象 

// diff算法是同级比较，假设第一层两个虚拟DOM节点不一致，
// 就不会往下比了，就会将原始页面虚拟DOM全部删除掉，然后用新的虚拟DOM进行全部的替换，

// 什么是hooks ：函数式组件 引入了状态机制 和模拟生命周期函数
// hooks优点  取代高阶组件（将状态提升父组件 组件嵌套地狱）来实现抽象和复用状态 
// 什么是高阶组件 实现组件之间复用状态， 将复用逻辑提升到父组件中，很容易产生很多包装组件，带来的「嵌套地域」

// 实现高阶组件有两种方式 1.属性代理 2.反向继承
// 属性代理：属性代理组件继承自React.Component，通过传递给被包装的组件props 进行控制组件
/*
可以通过 ref 获取关键词 this（WrappedComponent 的实例）
当 WrappedComponent 被渲染后，ref 上的回调函数 proc 将会执行，此时就有了这个 WrappedComponent 的实例的引用
*/
// function refsHOC(WrappedComponent) {
//     return class RefsHOC extends React.Component {
//       proc(wrappedComponentInstance) {
//         wrappedComponentInstance.method()
//       }
//       render() {
//         const props = Object.assign({}, this.props, {ref: this.proc.bind(this)})
//         return <WrappedComponent {...props}/>
//       }
//     }
//   }

// hooks 钩子常用 useState()  useReducer() 像redux  useEffect()它接收两个参数，
//  第一个是进行的异步操作， 第二个是数组，用来给出Effect的依赖项  hooks 可以代替传统redux高阶组件



