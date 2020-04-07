import React from 'react'
import propTypes from 'prop-types'
import './header.scss'
import { Link, NavLink } from 'react-router-dom'
import qs from 'qs'

class Header extends React.Component {
    //传进来的标签内容
    static propTypes = {
        tagData: propTypes.array
    }

    state = {
        l: 0,//黑色运动线条的距离
        login: false,//注册登录是否显示
        tag: false,//副导航详情标签是否显示
        lNow: 0,
        search: false,
        icon: ''//用户头像
    }
    //黑色运动线条的距离
    currentL = (ev) => {
        var l = ev.target.offsetLeft
        this.setState({
            l: l
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
    //注销
    logout = () => {
        window.localStorage.removeItem('user');
        window.location.reload(true);
    }
    //渲染搜索框
    renderSearch = () => {
        this.setState({
            tag: !this.state.tag,
            search: !this.state.search
        })
    }
    //副导航详情需要显示的内容
    renderTag = () => {
        let { tagData } = this.props
        let el = null
        if (tagData) {
            el = tagData.map((item, index) => {
                return (<span key={index}>{item}</span>)
            })
        }
        return el
    }
    componentDidMount(){
        let user = qs.parse(window.localStorage.getItem('user')) 
        user.err === '0' ? this.setState({icon: user.data.icon}) : this.setState({icon: null})
    }
    render() {
        return (
            <div className="headerWrapper">
                <div className="header">
                    <Link to="/home" className="logo">

                    </Link>
                    <div className="navbox">
                        <div className="nav" ref={(el) => this.nav = el}>
                            <NavLink to="/web" activeClassName="active" onMouseEnter={this.currentL} onMouseLeave={() => this.setState({ l: 0 })}>网站</NavLink>
                            <NavLink to="/directory" activeClassName="active" onMouseEnter={this.currentL} onMouseLeave={() => this.setState({ l: 0 })}>目录</NavLink>
                            <NavLink to="/about" activeClassName="active" onMouseEnter={this.currentL} onMouseLeave={() => this.setState({ l: 0 })}>关于</NavLink>
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
                        {/* <p></p> */}
                        <p>
                            {this.state.icon ? <img src={this.baseUrl + this.state.icon} alt="" className="icon"/> : <img src={`/img/icon.png`} alt="" />}
                        </p>
                        {this.state.login && <div className="login">
                            <span className="iconfont">&#xe628;</span>
                            {this.state.icon ? <Link to="/" onClick={this.logout}>注销</Link> : <div><Link to="/login">登录</Link>
                            <Link to="/reg">注册</Link></div>}
                        </div>}
                    </div>
                </div>
                {this.state.tag && <div className="tagwrapper" style={{ display: "block" }}>
                    <div className="tag">
                        {this.state.search ? <div className="header__searchbox">
                            <i className="iconfont">&#xe607;</i>
                            <input type="text" />
                        </div> : this.renderTag()}
                    </div>
                </div>}


            </div>

        )
    }
}

export default Header