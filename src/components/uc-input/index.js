/*
    通用组件uc-input的开发
    2020/4/4
    为那些逝去的英雄默哀
    version: 0.0.1
*/

import React from 'react'
import style from './index.module.scss'
import renderLabel from './renderLabel.js'
import propTypes from 'prop-types'


export const UcInput = ({model, label, type}) => {

    const renderInput = () => {
        let inputEle = null;
        //生成一个非受控元素
        if(!model){
            inputEle = (
                <div className={style.input}>
                    {renderLabel(label)}
                    <input type={type} id={model.name} className={style.ipt}/>
                </div>
            )
            return inputEle
        }

        let {name, onChange, value} = model;
        //受控元素
        inputEle = (
            <div className={style.input}>
                {renderLabel(label)}
                <input type={type} id={name} value={value} className={style.ipt} onChange={onChange} name={name}/>
            </div>
        )

        return inputEle
      
    }
    return renderInput();
}



export default UcInput

UcInput.defaultProps = {
    label: {
        labelName: '用户名',
        labelFor: 'user'
    },
    type: 'text'
}

UcInput.propTypes = {
    model: propTypes.shape({
        value: propTypes.string.isRequired,
        onChange: propTypes.func.isRequired,
        name: propTypes.string.isRequired
    }),
    label: propTypes.object,
    type: propTypes.string
}