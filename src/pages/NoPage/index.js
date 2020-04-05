/**
 * 页面组件Nopage的开发
 * 时间：2020/4/4
 * 为那些逝去的英雄默哀
 * Version：0.0.1
 * 
 */

import React from 'react'
import style from './index.module.scss'
export default class Nopage extends React.Component {
    render(){
        return(
            <div className={style.noPage}>
                404
            </div>
        )
    }
}