import React from 'react'
import './footer.scss'
export default class Footer extends React.Component{
    render(){
        return (
            <div className="footerWrapper">
                <div className="footer">
                    <ul className="footer__about">
                        <li>关于</li>
                        <li>最好的交互式设计</li>
                    </ul>
                    <ul className="footer__latest">
                        <li>最新</li>
                        <li className="footer__hover">兰博基尼</li>
                        <li className="footer__hover">lazy stye</li>
                        <li className="footer__hover">科技部</li>
                    </ul>
                    <ul className="footer__information">
                        <li>信息</li>
                        <li className="footer__hover">邮件列表</li>
                        <li className="footer__hover">广告</li>
                        <li className="footer__hover">隐私</li>
                    </ul>
                    <ul className="footer__connect">
                        <li>联系我们</li>
                        <li>
                            <span><i className="iconfont">&#xe652;</i></span>
                            <span><i className="iconfont">&#xe676;</i></span>
                            <span><i className="iconfont">&#xe699;</i></span>
                            <span><i className="iconfont">&#xe7ee;</i></span>
                            <span><i className="iconfont">&#xe7b3;</i></span>
                        </li>
                    </ul>
                    
                </div>
                <p>本网站为个人项目练习，不涉及任何商业利益，仅学习交流使用</p>
            </div>
        )
    }
}