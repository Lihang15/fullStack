//redux 核心对象  向外暴露store
import {createStore,applyMiddleware} from 'redux'
import reducer from './reducer'
import thunk from 'redux-thunk'
export default createStore(reducer,applyMiddleware(thunk)) 
