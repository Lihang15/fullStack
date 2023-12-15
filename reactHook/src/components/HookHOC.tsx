//Hook的规则 
//1.只在最顶层使用Hook     2.只在React函数中调用Hook 3.别在判断语句和for里使用hook
//useReducer => useState的替代方案

//useCallback(用于子组建)   减少没必要渲染 比如父组件 状态更新 子组建也会更 func传给子组建 只有【】内的变量变化了 才会执行useCallback （相当于shouldCompontentUpdate）
// const func = useCallback(()=>(testFunc()),[state])

// useMemo用于缓存数据对象（当前可用，减少计算开销 只有state变了 data才会更新），写法需要return 对象{} 
// const data = useMemo(()=>({name:'wangliahng'+state}),[state])

//useLayoutEffect同步（执行完 内部如果有dom插入操作才会插入到浏览器） 和useEffect异步 用法一样




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