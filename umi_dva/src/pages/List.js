import React from 'react'
import { connect } from 'dva'

//通过namespace命名空间第一个函数拿到models数据 绑定 this,props中
//第二个函数 将Models函数 绑定this.props中
const namespace ='namespace'
@connect((state)=>{
    return{
        dataList:state[namespace].data,
        maxNum :state[namespace].maxNum
    }
},
function(dispatch){//调用reducers中函数
    return{
        add :function(){
            dispatch({
                type:namespace+"/addNewDatas"
            })
        },
    
    inits: ()=>{
        dispatch({
            type:namespace+"/initData"
        })
    }
}

})

class List extends React.Component{
    // constructor(props){
    //     super(props)
        // this.state ={
        //     dataList:[1,2,3],
        //     maxNum :3
        // }
    // }
    componentDidMount(){
        this.props.inits()
    }
    render(){
        return(
            <div>
                <ul>
                    {
                        this.props.dataList.map((value,index)=>{
                        return <li key={index}>{value}</li>
                        } 
                        )
                    }
                </ul>
                <button onClick={()=>{
                    this.props.add()
                    // let maxNum = this.props.maxNum+1
                    // let newArr =[...this.props.dataList,maxNum]
                    // this.setState({
                    //     dataList:newArr,
                    //     maxNum :maxNum
                    // })
                }}>点我</button>

            </div>
        )
    }

}
export default List;