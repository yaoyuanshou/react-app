import React from 'react'
import ReactDom from 'react-dom'
//引入通用样式
import './assets/css/base.css'
//引入阿里图标库
import './assets/iconfont/iconfont.css'
import App from './layouts/App'
ReactDom.render(
    <App>你好,我爱你</App>,
    document.getElementById("root")
)