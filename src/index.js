import React from 'react'
import ReactDom from 'react-dom'
import {BrowserRouter, Route} from 'react-router-dom'//引入路由

//引入通用样式
import './assets/css/base.css'

import App from './layouts/App'
ReactDom.render(
    <BrowserRouter>
        <Route component={App}/>
    </BrowserRouter>,
    //套一层Route，以便获取上下文
    document.getElementById("root")
)