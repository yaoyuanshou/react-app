/**
 * 页面组件Reg的开发
 * 时间：2020/4/3
 * Version：0.0.1
 * 
 */

import React from 'react'
import style from './index.module.scss'
import Logoh from '../../components/logoh'
export default class Reg extends React.Component {
    render(){
        return(
            <div className={style.Reg}>
                <Logoh h1="注 册" to='/home' toName='Home'/>
            </div>
        )
    }
}