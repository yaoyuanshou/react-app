/*
    通用组件thumbnail的开发
    2020/4/2
    version: 0.0.1
*/
import React from 'react'
import style from './index.module.scss'
import propTypes from 'prop-types'
import {withRouter} from 'react-router-dom'
class Thumbnail extends React.Component {
    static defaultProps = {
        visit: false,
        img: '/img/small.jpg',
        to: null
    }

    static propTypes = {
        visit: propTypes.bool,//是否显示跳转小图片，默认false
        data: propTypes.shape({
            title: propTypes.string,//标题
            sub: propTypes.string,//发布时间
        }),
        img: propTypes.string.isRequired,//图片地址（必传）， 默认'/img/small.jpg'
        to: propTypes.shape({
            pathname: propTypes.string,//跳转地址
            apiname: propTypes.string,//选择集合名
        })
    }
    to = (id) => {
        //获取传入的值做编程式跳转
        console.log(this.props);
        if (!this.props.to) return;
        let {history,to:{pathname,apiname}}=this.props;
        history.push({pathname:`${pathname}/${id}`,search:`apiname=${apiname}`})
    }

    render(){
        let {id, title, sub} = this.props.data
        return (
            <div className={style.thumbnail}>
                <div className={style.wrapper}>
                    <div className={style.image}>
                        <div className={style.main} onClick={() => this.to(id)}>
                            <img src={this.props.img} alt="small" className={style.show}></img>
                        </div>
                        {this.props.visit && 
                        <div className={style.overlay} onClick={() => this.to(id)}>
                            <div className={style.visit}><span>↪</span></div>
                        </div>}
                        
                    </div>
                </div>
                <div className={style.caption}>
                    <div className={style.title}>
                        <div onClick={()=>this.to(id)}>{title}</div>
                    </div>
                    <div className={style.sub}>
                        {sub}
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Thumbnail)