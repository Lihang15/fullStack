import { Effect, ImmerReducer, Reducer, Subscription } from 'umi';
import { getRemoteList,editUser } from '../services/userService'
import {message} from 'antd'

interface dataStruct{
  dataList:[]
  count:number
}
export interface UserState{
  data:dataStruct
}
interface UserModelType{
  namespace:string,
  state:UserState,
  effects:{
    getRemote:Effect
    edit:Effect
  }
  reducers:{
    getList:Reducer<UserState>
  }
  subscriptions:{
    setup:Subscription
  }
}

const UserModel: UserModelType = {
  namespace: 'users',

  state:{data:{dataList:[],count:0}},

  effects: {
    *getRemote({ payload }, { call, put }) {
      console.log(payload)
          const {data} = yield call(getRemoteList,payload)
          yield put({type:'getList',payload:data})
    },
    *edit({payload},{call,put}){
      const {id,values} = payload
      const {data,code,message} = yield call(editUser,{values,id})
      yield put({type:'getRemote',payload:{page_no:1,page_size:10}})
    }
  },
  reducers: {
    //state 上一次state的数据 payload接收传过来的数据
    getList(state, {payload}) {
      return payload
        
    //   return {
    //     ...state,
    //     ...action.payload,
    //   };
    },
  },

  //一般做数据初始化
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        if (pathname === '/users') {
          dispatch({
            type: 'getRemote',
            payload:{page_no:1,page_size:10}
          });
        }
      });
    },
  },
};

export default UserModel;