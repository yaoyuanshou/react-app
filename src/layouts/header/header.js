import React from 'react'
import propTypes from 'prop-types'
import './header.scss'
import {Link} from 'react-router-dom'
class Header extends React.Component {
    //传进来的标签内容
    static propTypes={
        tagData:propTypes.array
    }

    state = {
        l: 0,//黑色运动线条的距离
        active: 1,//导航点击时切换样式
        login: false,//注册登录是否显示
        tag: false,//副导航详情标签是否显示
        lNow:0,
        search:false
    }
    //黑色运动线条的距离
    currentL = (ev) => {
        var l = ev.target.offsetLeft
        this.setState({
            l: l - 355
        })
    }
    //控制登录是否渲染
    login = () => {
        this.setState({
            login: !this.state.login
        })
    }
    //副导航详情标签是否显示
    tag = () => {
        this.setState({
            tag: !this.state.tag
        })
    }
    //渲染搜索框
    renderSearch=()=>{
        this.setState({
            tag:!this.state.tag,
            search:!this.state.search
        })
    }
    //副导航详情需要显示的内容
    renderTag=()=>{
        let {tagData} = this.props
        let el = null
        if(tagData){
            el=tagData.map((item,index)=>{
                return (<span key={index}>{item}</span>)
            })
        }
        return el
    }
    render() {
        let { active } = this.state
        return (
            <div className="headerWrapper">
                <div className="header">
                    <a to="http://localhost:8533" className="logo">

                    </a>
                    <div className="navbox">
                        <div className="nav" ref={(el) => this.nav = el}>
                            <Link to="/web" onClick={() => { this.setState({ active: 1 }), this.change }} className={active == 1 ? "active" : ""} onMouseEnter={this.currentL} onMouseLeave={() => this.setState({ l: 0 })}>网站</Link>
                            <Link to="/directory" onClick={() => { this.setState({ active: 2 }), this.change }} className={active == 2 ? "active" : ""} onMouseEnter={this.currentL} onMouseLeave={() => this.setState({ l: 0 })}>目录</Link>
                            <Link to="/about" onClick={() => { this.setState({ active: 3 }), this.change }} className={active == 3 ? "active" : ""} onMouseEnter={this.currentL} onMouseLeave={() => this.setState({ l: 0 })}>关于</Link>
                        </div>
                        <div className="line">
                            <span className="now" style={{ left: this.state.lNow }}></span>
                            <span className="hover" style={{ left: this.state.l }}></span>
                        </div>
                        <div className="header__navbox--subnav">
                            <span onClick={this.tag}>风格<i className="iconfont">&#xe62a;</i></span>
                            <span onClick={this.tag}>类型<i className="iconfont">&#xe62a;</i></span>
                            <span onClick={this.tag}>科目<i className="iconfont">&#xe62a;</i></span>
                            <span onClick={this.tag}>平台<i className="iconfont">&#xe62a;</i></span>
                            <span onClick={this.renderSearch}>搜索<i className="iconfont">&#xe62a;</i></span>
                        </div>
                    </div>
                    <div className="loginbox" onMouseEnter={this.login} onMouseLeave={this.login}>
                        <i className="iconfont">&#xe609;</i>
                        {this.state.login && <div className="login">
                            <span className="iconfont">&#xe628;</span>
                            <Link to="/login">登录</Link>
                            <Link to="/reg">注册</Link>
                        </div>}
                    </div>
                </div>
                {this.state.tag && <div className="tagwrapper" style={{ display: "block" }}>
                    <div className="tag">
                        {this.state.search ? <div className="header__searchbox">
                            <i className="iconfont">&#xe607;</i>
                            <input type="text"/>
                        </div> : this.renderTag()}
                    </div>
                </div>}


            </div>

        )
    }
}

export default Header