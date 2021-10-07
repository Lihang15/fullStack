import React,{useState,useEffect} from 'react';

//副作用函数 也就是有dom操作和网络请求等和纯页面渲染无关的操作
//纯函数与副作用函数相反
//useEffect可以清除副作用

const Effect: React.FC=()=>{
    const [positions,setPositions] = useState({x:0,y:0})

    const [count,setCount] = useState(1)
    //第一次渲染之后和每次更新之后都会执行
    //不用在考虑class组件的挂载和更新，它都做了
    useEffect(()=>{
       const updateMouse = (e:MouseEvent)=>{
           setPositions({x:e.clientX,y:e.clientY})
       }
       document.addEventListener('click',updateMouse)
       console.log("执行Effect函数")
       //清除副作用 第一次渲染不会执行，卸载时候和等到每次更新时候会执行，这个会清除上一次监听的事件
       return ()=>{
           console.log("我是上一次的x的位置:"+positions.x)
           document.removeEventListener('click',updateMouse)
       }
       //第二个参数可以传一个空数组也可以不传，不传参数 useEffect每次每次更新状态都会执行
       //传一个空数组 useEffect只在初始化时候执行一次 
       //[count]代表只有当count改变时候才会执行useEffect和return（注：第一次渲染总会执行useEffect）
    },[])
    return(
        <div>
              <button onClick={()=>{setCount(count+1)}}>
        {count}
        </button>
            <p>X:{positions.x},Y:{positions.y}</p>
        </div>
 
    )
   
}

export default Effect