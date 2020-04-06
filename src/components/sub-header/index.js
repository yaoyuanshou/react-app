/*
    通用组件uc-input的开发
    2020/4/6
    version: 0.0.1
*/

import React from 'react'
import style from './index.module.scss'

export const SubHeader = ({h2}) => (
    <section id={style.subHeader}>
        <h2 className={style.hairline}><span>{h2}</span></h2>
    </section>
)

export default SubHeader