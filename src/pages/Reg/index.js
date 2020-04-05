/**
 * 页面组件Reg的开发
 * 时间：2020/4/3
 * Version：0.0.1
 * 
 */

import React from 'react'
import style from './index.module.scss'
import Logoh from '../../components/logoh'
import UcInput from '../../components/uc-input'
import UcButton from '../../components/uc-button'
import {Link} from 'react-router-dom'

export default class Reg extends React.Component {
    state = {
        firstName: '',//名字
        lastName: '',//姓
        email: '',//邮箱
        password: '',//密码
        npassword: '',//确认密码
    }
    changeIpt = (ev) => {
        this.setState({
            [ev.target.name]: ev.target.value
        })
    }
    clickHeader = (ev) => {
        console.log('jinx', ev)
    }
    render(){
        let {firstName, lastName, email, password, npassword,} = this.state
        return(
            <div id={style.reg}>
                <Logoh h1="注 册" to='/home' toName='Home'/>
                {/* 
                    时间：2020/4/4
                    我是jinx，为那些逝去的英雄默哀
                */}
                <div id={style.auth}>
                    <div className={style.form}>
                         {/*
                            type：input类型，默认：text
                            model（必传，做双绑）:{
                                name: input name值，
                                value: input value值，
                                onChage：双绑函数
                            }，
                            label: {
                                labelName: label名称，
                                labelFor: lable for 对应 id
                            }                        
                        */}
                        <UcInput model={{name:'firstName',value:firstName,onChange:this.changeIpt}} label={{labelName: '名 字', labelFor: 'firstName'}}/>
                        <UcInput model={{name:'lastName',value:lastName,onChange:this.changeIpt}} label={{labelName: '姓  ', labelFor: 'lastName'}}/>
                        <UcInput type="email" model={{name:'email',value:email,onChange:this.changeIpt}} label={{labelName: '邮 箱', labelFor: 'email'}}/>
                        <UcInput type="password" model={{name:'password',value:password,onChange:this.changeIpt}} label={{labelName: '密 码', labelFor: 'password'}}/>
                        <UcInput type="password" model={{name:'npassword',value:npassword,onChange:this.changeIpt}} label={{labelName: '确认密码', labelFor: 'npassword'}}/>
                        <label htmlFor="optIn" className={style.optIn}><input type="checkbox" name="optIn" id="optIn" value="1" /> 收到我们的电子邮件？</label>
                        <p>每周在星期五接收新站点的摘要，以及其他（非常）偶然的新闻</p>
                        <div id={style.button}>
                            <UcButton name="注 册" clickHeader={this.clickHeader}/>
                        </div>
                        <div className={style.hr}></div>
                        <div className={style.links}>
                            <Link to="/login" className={style.a}>登 录</Link>
                            <Link to="/forget" className={style.b}>忘记密码？</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}