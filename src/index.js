import React from 'react'
import ReactDom from 'react-dom'
//引入通用样式
import './assets/css/base.css'

import App from './layouts/App'
ReactDom.render(
    <App>你好</App>,
    document.getElementById("root")
)