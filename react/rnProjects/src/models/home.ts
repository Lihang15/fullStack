import {Model,Effect} from 'dva-core-ts'
import { Reducer} from 'redux'
import axiox from 'axios'
import { RootState } from '.'

//轮播图
const BANNER_URL = '/carousel'
//猜你喜欢
const GUESS_URL = '/guess'
//首页列表
const CHANNEL_URL = '/channel'

export interface ICarousel{
    id:string,
    image:string,
    colors:[string,string]
}
export interface IGuess{
    id:string,
    image:string,
    title:string
}
export interface IChannel{
    id:string,
    title:string,
    image:string,
    remark:string,
    played:number,
    playing:number
}
export interface IPagenation{
    current:number,
    total:number,
    hasMore:boolean
}
export interface HomeState{
    carousels:ICarousel[],
    guess :IGuess[],
    channels:IChannel[],
    pagination:IPagenation,
    activeCarouselIndex:number

}



// const action = {
//     type:'add'
// }
interface HomeModel extends Model{
    namespace: 'home';
    state: {
        carousels:ICarousel[],
        guess:IGuess[],
        channels:IChannel[],
        pagination:IPagenation,
        activeCarouselIndex:number
    };
    reducers: {
        setState:Reducer<HomeState>
    };
    effects:{
        fetchCarousel:Effect,
        fetchGuess:Effect,
        fetchChannel:Effect
    }
}
const initialState :HomeState= {
    carousels:[],
    guess:[],
    channels:[],
    pagination:{
        current:1,
        total:0,
        hasMore:true
    },
    activeCarouselIndex:0
}
// function delay(timeout:number){
//     return new Promise(resolve=>{
//         setTimeout(resolve,timeout)
//     })
// }
const homeModel:HomeModel= {
    namespace:'home',
    state:initialState,
    reducers:{
        setState(state=initialState,{payload}){
            return{
                ...state,
                ...payload
            }
        }
    },
    effects:{
      *fetchCarousel({payload},{call,put}){
        const {data}= yield call(axiox.get,'carousel')
        yield put({
            type:'setState',
            payload:{
                carousels:data
            }
        })
      },
      
      *fetchGuess(_,{call,put}){
          const {data} = yield call(axiox.get,GUESS_URL)
          yield put({
              type:'setState',
              payload:{
                  guess:data
              }
          })
      },
      *fetchChannel({callback,payload},{call,put,select}){
        const {channels,pagination}= yield select((state:RootState)=>state.home)
        let page = 1
        if(payload&&payload.loadMore){
            page = pagination.current+1
        }
        const {data} = yield call(axiox.get,CHANNEL_URL,{params:{
            page
        }})
        let newChannels = data.results
        if(payload&&payload.loadMore){
           newChannels = channels.concat(newChannels)
        }
    
        yield put({
            type:'setState',
            payload:{
                channels:newChannels,
                pagination:{
                    current:data.pagination.current,
                    total:data.pagination.total,
                    hasMore:newChannels.length<data.pagination.total
                }
            }
        })
        if(typeof callback ==='function'){
            callback()
        }
    }
    

    }

}
export default homeModel