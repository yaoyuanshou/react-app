/*
    页面Detail开发
    时间：2020/4/5
    version：0.0.1
*/

import React from 'react'
import style from './index.module.scss'
import DetailCell from '../../components/detail-cell'
import SubHeader from '../../components/sub-header'
import Thumbnail from '../../components/thumbnail'
import {mockList ,detailList} from '../../store/actionCreators'
import {connect} from 'react-redux'
import qs from 'qs'



class Detail extends React.Component {
    constructor(props){
        super(props);

        let apiname = qs.parse(props.location.search, { ignoreQueryPrefix: true }).apiname
        let id = props.match.params.id
        this.props.dispatch(
            detailList({collectioname:'home', apiname, id})
        )
    }
    go = () => {
        alert('go')
    }
    prev = () => {
        alert('prev')
    }
    yes = () => {
        alert('yes')
    }
    add = () => {
        alert('add')
    }

    componentDidMount(){
       
        this.props.dispatch(
            mockList({collectionname: 'home', type:'UPDATA_HOME', _limit:5})
        )
    }
    render(){
        let {go, prev, yes, add} = this
        return (
            <div className={style.detail}>
                <div className={style.del_header}>
                    <div className={style.primary}>
                        <div className={style.breadcrumbs}>
                            <a href="/" className={style.a}>Home</a> ∙ <a href="/websites" className={style.a}>All Websites</a>
                        </div>
                        <h1>{this.props.detail.title}</h1>
                    </div>
                    <div className={style.actions}>
                        <ul className={style.button_group}>
                            <li><a className={style.small} href="/claims/new?website_id=9428">Your site? Add a credit</a></li>
                        </ul>
                    </div>
                </div>
                <section id={style.website}>
                    <div className={style.left}>
                        <div>
                            <a href="/" className={style.preview}>
                                <img src={this.props.detail.img} alt={this.props.detail.title}/>
                            </a>
                        </div>
                        <div>
                            <div className={style.content}>
                                <div className={style.heading}>
                                    <a href="/websites/9428-bored-solutions" className={style.b}>Subjects</a>
                                </div>
                                <ul>
                                    <li><a href="/websites?categories=155" className={style.c}>Miscellaneous</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className={style.right}>
                        {/* {p:'小标题'，span="大标题 " img="icon地址（必传）" alt="图片描述（必传）默认 jinx" bottom={是否显示下边框} onClick={业务函数} */}
                        <DetailCell p="访问" span="具体方案" img="/img/jian.png" alt="jian" onClick={go}/>
                        <DetailCell p="上一个" span="混绕电台" img="/img/left.png" alt="left" onClick={prev}/>
                        <DetailCell span="添加积分" img="/img/yes.png" alt="yes" onClick={yes}/>
                        <DetailCell span="添加收藏夹" img="/img/jia.png" alt="jia" bottom={true} onClick={add}/>
                    </div>
                </section>
                <SubHeader h2="相似 网站"/>
                <div id={style.grid}>
                    {this.props.home.map((item, index) => {
                        return <Thumbnail
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
                    })}
                </div>
            </div>
        )
    }
}

export default connect(
    state => ({detail: state.reducerDetail,home: state.reducerHome})
)(Detail)