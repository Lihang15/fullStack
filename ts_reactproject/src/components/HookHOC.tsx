//Hook的规则 
//1.只在最顶层使用Hook     2.只在React函数中调用Hook
//useReducer 和redux使用差不多
//useCallback 可以优化hook


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