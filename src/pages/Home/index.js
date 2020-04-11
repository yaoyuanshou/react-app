/*
    页面Home开发
    时间：2020/4/2
    version：0.0.1
*/

import React from 'react'
import style from './index.module.scss'
import Thumbnail from '../../components/thumbnail'
import Banner from '../../components/banner'
import {connect} from 'react-redux'
import {mockList} from '../../store/actionCreators'

class Home extends React.Component {
    componentDidMount(){
        this.props.dispatch(
            mockList({collectionname: 'home', type: 'UPDATA_HOME', _limit:15})
        )
    }
    render(){
        return (
            <div className={style.home}>
                <Banner/>
                <div id={style.grid}>
                    {this.props.home.map((item, index) => {
                        return(
                            <Thumbnail
                                key={index}
                                data={{
                                    id: item.id,
                                    title: item.title,
                                    sub: item.time,
                                }}
                                img={item.img}
                                visit
                                to={{
                                    pathname:'/detail',
                                    apiname: 'detail'
                                }}
                            />
                        )
                    })}
                </div>
                <section id={style.pagination}>
                    <div className={style['pagination-centered']}>
                        <ul>
                            <li>
                                <a className={style.aActive} href="/">1</a>
                            </li>
                            <li>
                                <a className={style.a} rel="next" href="/websites?page=2">2</a>
                            </li>
                            <li>
                                <a className={style.a} href="/websites?page=3">3</a>
                            </li>
                            <li>
                                <a className={style.a} href="/websites?page=4">4</a>
                            </li>
                            <li>
                                <a className={style.a} href="/websites?page=5">5</a>
                            </li>
                            <li>
                                <a className={style.a} href="/">...</a>
                            </li>
                            <li>
                                <a className={style.a} rel="next" href="/websites?page=2">→</a>
                            </li>
                            <li>
                                <a className={style.a} href="/websites?page=262">Last →</a>
                            </li>
                        </ul>
                    </div>
                </section>
            </div>
            
        )
    }
}

export default connect(
    state => ({home: state.reducerHome})
)(Home)