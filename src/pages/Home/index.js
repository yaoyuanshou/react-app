/*
    页面Home开发
    时间：2020/4/2
    version：0.0.1
*/

import React from 'react'
import style from './index.module.scss'
import Thumbnail from '../../components/thumbnail'
export default class Home extends React.Component {
    render(){
        return (
            <div id={style.grid}>
                <Thumbnail
                    data={{
                        _id: '1',
                        title: "dias",
                        sub: "3天前"
                    }}
                    to={{
                        pathname:'/detail',
                        apiname: 'detiil'
                    }}
                />
                <Thumbnail
                    data={{
                        _id: '2',
                        title: "dias",
                        sub: "3天前"
                    }}
                    to={{
                        pathname:'/detail',
                        apiname: 'detiil'
                    }}
                />
                <Thumbnail
                    data={{
                        _id: '3',
                        title: "dias",
                        sub: "3天前"
                    }}
                    to={{
                        pathname:'/detail',
                        apiname: 'detiil'
                    }}
                    visit={true}
                />
                <Thumbnail
                    data={{
                        _id: '4',
                        title: "dias",
                        sub: "3天前"
                    }}
                    to={{
                        pathname:'/detail',
                        apiname: 'detiil'
                    }}
                />
            </div>
        )
    }
}