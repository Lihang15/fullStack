import request from "../util/request"

export default{
    namespace:'namespace',
    state :{
        data:[],
        maxNum :0
    },
    reducers :{//定义改变state的函数
       addNewDatas:function(state,result){
        if (result.data){
            return result.data
        }
        let maxNum = state.maxNum+1
        let newArr =[...state.data,maxNum]
           return{
               data:newArr,
               maxNum:maxNum
           }
       }
    },
    effects:{
        *initData(params,sagaEffects){
            const {call,put} = sagaEffects
            const url = "/ds/list"
            let datas = yield call(request,url)
            yield put({
                type:"addNewDatas",
                data :datas
            })

        }
    }
    
}
