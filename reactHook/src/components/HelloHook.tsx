import React,{useState} from 'react';

const LikeButton: React.FC=()=>{
    //{useState}为函数组件添加状态
    //useState 里面给状态设置的初始值
    //like就是状态  setLike就是在改变状态值
    const [like,setLike] = useState({age:12})

    const [count,setCount] = useState(1)
    return(
        <div>

        <button onClick={()=>{setLike({age:like.age+1})}}>
        {like.age}
      </button>

        <button onClick={()=>{setCount(count+1)}}>
        {count}
        </button>
        </div>
 
    )
   
}

export default LikeButton