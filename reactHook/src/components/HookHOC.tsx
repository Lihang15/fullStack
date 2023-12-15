//Hook的规则 
//1.只在最顶层使用Hook     2.只在React函数中调用Hook 3.别在判断语句和for里使用hook
//useReducer => useState的替代方案

//useCallback(用于缓存函数） state变化了 func会重新创建 不变化用的是以前的  优化性能
// const func = useCallback(()=>(testFunc()),[state])
function ExampleComponent() {
    const [count, setCount] = useState(0);
  
    // 使用 useCallback 缓存函数，仅在 count 发生变化时才重新创建函数
    const handleClick = useCallback(() => {
      setCount(count + 1);
    }, [count]); // 依赖变量：当 count 变化时重新创建 handleClick 函数
  
    return (
      <div>
        <p>Count: {count}</p>
        <button onClick={handleClick}>Increment</button>
      </div>
    );
  }

// useMemo用于缓存数据对象（当前可用，减少计算开销 只有state变了 data才会更新），写法需要return 对象{} 
// const data = useMemo(()=>({name:'wangliahng'+state}),[state])  可以在子组建里 把state换成父组建的props 获取这个data来决定 子组建要渲染什么

// 函数组件中使用 useMemo 示例
const ChildComponent = ({ prop1, prop2 }) => {
    // ... 组件逻辑
  
    // useMemo 返回 memoized 值，控制组件渲染
    const memoizedValue = useMemo(() => {
      // ... 需要 memoize 的值
    }, [prop1, prop2]); // 只有在 prop1 或 prop2 发生变化时才重新计算值
   
    return (
        {
            memoizedValue && </Component>
             // ... 组件 JSX
        }
     
    );
  };




//自定义hook实现状态逻辑复用 取代高阶组建和render-props
import {useState,useEffect} from 'react';

//自定义的hook 必须以use开头
const useMousePosition=()=>{
    const [positions,setPositions] = useState({x:0,y:0})

    useEffect(()=>{
       const updateMouse = (e:MouseEvent)=>{
           setPositions({x:e.clientX,y:e.clientY})
       }
       document.addEventListener('mousemove',updateMouse)
       console.log("执行Effect函数")
       return ()=>{
           console.log("我是上一次的x的位置:"+positions.x)
           document.removeEventListener('mousemove',updateMouse)
       }
    },[])
    return positions
   
}

export default useMousePosition



//高阶组建是为了 状态复用，被包装得组建通过props拿到这个状态，高阶函数内状态发生变化会重新渲染，间接拿状态，  向dva的connect()

//hook可以直接返回状态，其他组件直接用