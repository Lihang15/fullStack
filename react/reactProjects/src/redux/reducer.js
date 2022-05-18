//根据老的state和指定的action 生成新的state
import { combineReducers } from 'redux'
function headerTitle(state='我的首页',action){
    switch(action.type){
        case 'set_header':
            return action.data
        default:
            return state
    }
}


function user(state={username:'wanglihang'},action){
    switch(action.type){
        default:
            return state
    }
}

export default combineReducers({
    headerTitle,
    user
})

//state{
//     headerTitle:'首页'
//     user：{username:'wanglihang'}
// }