import {createStore, combineReducers, applyMiddleware, compose} from 'redux'; //compose增强器
import thunk from 'redux-thunk';

import {reducerHome} from '../store/reducers/home'

let reducers = combineReducers({reducerHome})//合并为一个reducer


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;//使用redux-devtools
let store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));//安装中间件，改装redux，接受函数

export default store;