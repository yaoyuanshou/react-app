/**
 * 页面组件Login的开发
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
import qs from 'qs'
import axios from 'axios'
export default class Login extends React.Component {
    state = {
        email: '',//邮箱
        password: '',//密码
        message: '', //错误信息
    }
    changeIpt = (ev) => {
        this.setState({
            [ev.target.name]: ev.target.value
        })
    }
    login = async() => {
        let {email, password} = this.state;
        let login = new URLSearchParams();
        login.append('username', email)
        login.append('password', password)

        let res = await axios({
            url: '/api/login',
            method: 'POST',
            data: login
        })

        console.log(res.data)

        if(res.data.err === 0){
            //更新同步localStrage
            window.localStorage.setItem('user', qs.stringify(res.data))
            //跳转到之前
            console.log(this.props);
            let path = qs.parse(this.props.location.search, {ignoreQueryPrefix: true}).path

            if(path && !path.includes('/login')){
                this.props.history.push(path)
            }else{
                this.props.history.push('/')
            }
        }else{
            this.setState({
                message: res.data.msg
            })
        }
    }
    render(){
        console.log(this.props);
        let {email, password} = this.state
        return(
            <div id={style.login}>
                <Logoh h1="登 录" to='/home' toName='Home'/>
                {/* 
                    时间：2020/4/4
                    我是jinx，为那些逝去的英雄默哀
                */}
                <div id={style.auth}>
                    <div className={style.form}>
                        <UcInput type="email" model={{name:'email',value:email,onChange:this.changeIpt}} label={{labelName: '邮 箱', labelFor: 'email'}}/>
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
                        <UcInput type="password" model={{name:'password',value:password,onChange:this.changeIpt}} label={{labelName: '密 码', labelFor: 'password'}}/>
                        <label htmlFor="optIn" className={style.optIn}><input type="checkbox" name="optIn" id="optIn" value="1" /> 记住密码？</label>
                        <p></p>
                        <div id={style.button}>
                            <UcButton name="登 录" clickHeader={this.login}/>
                        </div>
                        <div className={style.hr}></div>
                        <div className={style.links}>
                            <Link to="/reg" className={style.a}>注 册</Link>
                            <Link to="/forget" className={style.b}>忘记密码？</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}