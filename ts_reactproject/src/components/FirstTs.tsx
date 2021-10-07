
import React ,{useContext}from 'react';
import {themeContext} from '../App'
//使用context

interface IHelloProps{
    message?:string
}
const FirstTsx: React.FC<IHelloProps>=(props)=>{
    const theme = useContext(themeContext)
    return(
        <h2 style={theme}>{props.message}</h2>
    )
   
}

export default FirstTsx