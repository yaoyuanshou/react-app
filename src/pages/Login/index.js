/**
 * 页面组件Login的开发
 * 时间：2020/4/3
 * Version：0.0.1
 * 
 */

import React from 'react'
import style from './index.module.scss'
import Logoh from '../../components/logoh'
export default class Login extends React.Component {
    render(){
        return(
            <div className={style.Login}>
                <Logoh h1="登 录" to='/home' toName='Home'/>
            </div>
        )
    }
}