/*
    无状态组件renderLabel的开发
    时间：2020/4/4
    为那些逝去的英雄默哀
*/

import React from 'react'
import style from './index.module.scss'

export const readerLabel = ({labelFor, labelName}) => (
    //labelName：传入的标签名
    //labelFor: 传入对应的id名
    <label htmlFor={labelFor} className={style.label}>{labelName}</label>
)

export default readerLabel