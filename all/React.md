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




