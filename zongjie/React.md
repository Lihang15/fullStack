### SPA单页应用的原理
spa 就是一个页面完成所有功能 什么操作展示什么内容
1.锚点(hash) window.onhashchange()这个函数在点击<a href="#/home"></a>自动执行，在location.hash中能获取#/home  2.h5(history)
2.react-router-dom库，让react能开发spa项目，直接在根组件使用。
3.路由嵌套 

### 问题一 高阶组件（HOC）实现方式 
属性代理模式  state复用 传入一个组件 返回一个新组件 新组件得到增强 ，复用代码写在父亲组件中
const withHoc =(WrappedComponent)=>{
    //提供状态用逻辑
    class Mouse extends React.Component{
        state={
            x:0,
            y:0
        }
        handelMouseMove = (e)={
          this.setState({
              x:e.clientX,
              y:e.clientY
          })
        }
        componentDidMount(){
            windows.addEventListener('mousemove',this.handelMouseMove)
        }
        componentWillUnmount(){
            windows.removeEventListener('mousemove',this.handelMouseMove)
        }
        render(){
            <WrappedComponent {...this.state} {...this.props}/>
        }
    }
    return Mouse
}
测试组件  通过高阶组件包装后 其实运行的还是它 不过props已经被增强，传入了新属性
const Position =（props）=>{
    <p>
     鼠标当前位置：（x:{props.x},y:{props.y}）
    </p>
}
调用
newComponent = withHoc(Position)
ReactDOM.render(){
    <newComponent name='wanglihang'>,
    document.getElementById('root')
}


第二种方式实现状态复用 render-props 给复用状态组件内部传递一个函数
class Mouse extends React.Component{
        state={
            x:0,
            y:0
        }
        handelMouseMove = (e)={
          this.setState({
              x:e.clientX,
              y:e.clientY
          })
        }
        componentDidMount(){
            windows.addEventListener('mousemove',this.handelMouseMove)
        }
        componentWillUnmount(){
            windows.removeEventListener('mousemove',this.handelMouseMove)
        }
        render(){
            return this.props.render(this.state)
        }
    }
调用 <Mouse render ={ (mouse)=>(<p>鼠标当前位置{mouse.x},{mouse.y}</p>)  }>

### 问题二 React虚拟dom

虚拟dom js对象描述的dom
state改变 render方法执行，通过diff算法对比，通过新的虚拟dom，只改变变化的部分，浏览器不会回流，
虚拟dom真正的意义是 让react脱离了浏览器束缚，react可以运行在任何可以执行js的环境里 比如react-native写ios android应用

### 问题三 为什么遍历列表的时候key最好别用index
当状态发生改变的时候，新的虚拟dom会对比旧的虚拟dom通过key，有相同的key和内容，会使用之前的，如果key不相同，
新的虚拟dom会替换变化部分，如果key用index 比如我在列表第一个位置插入一个新列表元素，key=index（0），
旧dom中key=0的元素 就与新dom中key等于一的key=1的相同，但是key变了，本来不需要替换的dom被替换了，影响性能。

### 问题四 React生命周期（挂载，更新，卸载）
常用生命周期钩子函数调用过程
挂载阶段 
constructor()
componentWillMount() //不适合异步取数据操作，render中取得接口数据，可能是空的
render()  dom已插入
componentDidMount() //初始化数据

更新阶段 当组件props和state发生变化
 shouldComponentUpdate() 由于父组件更新，子组件render也会调用，可以在这个函数
 写判断 只有子组件依赖父组件数据更新才更新，可以用pureComponent代替
 render()
 componentDidUpdate() 

卸载 组件从dom中移除时候
componentWillUnmount()
错误处理
在渲染中，生命周期，构造函数，或者子组件中出现异常执行
componentDidCatch()

### 问题5 为什么要使用Hook
1.组件复用状态逻辑难  =>之前能通过hoc 和render-props实现
2.复杂组件难以理解   =>this的指向难以理解，不相关的逻辑都添加到了一起
