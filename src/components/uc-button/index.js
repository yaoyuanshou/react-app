/*
    通用组件uc-button的开发
    2020/4/4
    为那些逝去的英雄默哀
    version: 0.0.1
*/

import React from 'react'
import style from './index.module.scss'
import propTypes from 'prop-types'

export const UcButton = ({name, clickHeader}) => (
    <button className={style.button} onClick={clickHeader}>{name}</button>

)

export default UcButton

UcButton.defaultProps = {
    name: '按 钮',
    clickHeader: () => {}
}

UcButton.propTypes = {
    name: propTypes.string,
    clickHeader: propTypes.func
}