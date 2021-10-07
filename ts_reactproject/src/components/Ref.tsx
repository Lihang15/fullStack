import React,{useState,useRef,useEffect} from 'react';

//useRef怎么用
const LikeButton: React.FC=()=>{
    const [count,setCount] = useState(1)
    //1.可以当变量用
    const likeRef = useRef(0)
    const didMountRef = useRef(false)
    //2.可以拿到真实dom节点 进行操作
    const domRef = useRef<HTMLInputElement>(null) 

    useEffect(()=>{
        if(didMountRef.current){
            console.log('this is update')
        }else{
            didMountRef.current = true
        }
    })
    useEffect(()=>{
       if(domRef && domRef.current){
           //通过ref操作dom
           domRef.current.focus()
       
       }
    })
    return(
        <div>
        <button onClick={()=>{setCount(count+1);likeRef.current++}}>
            {count}{"ref:"+likeRef.current}
        </button>
        {/* 绑定ref */}
        <input type='text' ref={domRef}/>
        </div>
    )
   
}

export default LikeButton