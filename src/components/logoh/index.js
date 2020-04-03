/**
 * 页面组件logoh的开发
 * 时间：2020/4/3
 * Version：0.0.1
 * 
 */

import React from 'react'
import style from './index.module.scss'
import propTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default class Logoh extends React.Component {
    static defaultProps = {
        h1: "jinx",
        toName: "Home"
    }

    static propTypes = {
        h1: propTypes.string,
        to: propTypes.string.isRequired,
        toName: propTypes.string
    }
    render(){
        return(
            <section id={style.heading}>
                <div className={style.primary}>
                        <div className={style.breadcrumbs}>
                            <Link to={this.props.to} className={style.home}>{this.props.toName}</Link>
                        </div>
                    <h1>{this.props.h1}</h1>
                </div>
            </section>
        )
    }
}