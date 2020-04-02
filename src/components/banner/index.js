/*
    通用组件banner的开发
    2020/4/2
    version: 0.0.1
*/
import React from 'react'
import './index.scss'
import {withRouter} from 'react-router-dom'
import Slider from 'react-slick'//使用第三方滑动组件库 react-slick

//引用本库相关的css样式
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
class Banner extends React.Component {
    constructor(){
        super();
        this.state = {
            list: [
                {_id: '0', src: '/img/small.jpg', alt: 'small', bannerTitle: 'Daphne Wilde →', pathname: '/detail', apiname: 'detail'},
                {_id: '1', src: '/img/small.jpg', alt: 'small', bannerTitle: 'Daphne Wilde →', pathname: '/detail', apiname: 'detail'},
                {_id: '2', src: '/img/small.jpg', alt: 'small', bannerTitle: 'Daphne Wilde →', pathname: '/detail', apiname: 'detail'},
                {_id: '3', src: '/img/small.jpg', alt: 'small', bannerTitle: 'Daphne Wilde →', pathname: '/detail', apiname: 'detail'},
                {_id: '4', src: '/img/small.jpg', alt: 'small', bannerTitle: 'Daphne Wilde →', pathname: '/detail', apiname: 'detail'},
                {_id: '5', src: '/img/small.jpg', alt: 'small', bannerTitle: 'Daphne Wilde →', pathname: '/detail', apiname: 'detail'},
                //list需要的属性
                //{_id: 'id', src: '图片路径', alt: '图片描述', bannerTitle: '跳转title', pathname: '详情路径', apiname: '集合名称'},
            ]
        }
    }
    to = (_id, pathname, apiname) => {
        //编程式跳转
        let {history} = this.props;
        history.push({pathname:`${pathname}/${_id}`,search:`apiname=${apiname}`})
    }

    render () {

        let settings = {
            dots: true,//是否显示点
            infinite: true,//无线循环
            speed: 500,//轮播速度
            slidesToShow: 1,//显示数量为1
            slidesToScroll: 1,//滚动数量为1
            autoplay: true,//自动轮播
            arrows: true,//是否显示箭头
        };
        let {list} = this.state;
        return (
            <div id="slideshow">
                <h1 className="centered">Latest from the Showcase</h1>
                <Slider {...settings} className="slideshow">
                    {list.map((item, index) => {
                        // map循环遍历元素
                        return (
                            <div className="bannerGo" key={item._id} onClick={() => this.to(item._id, item.pathname, item.apiname)}>
                                <div>
                                    <img src={item.src} alt={item.alt}>
                                    </img>
                                    <p className="bannerTitle">{item.bannerTitle}</p>
                                </div> 
                            </div> 
                        )
                    })}
                </Slider>
            </div>
        );
        
        }
}
export default withRouter(Banner);
//withRouter获取上下文