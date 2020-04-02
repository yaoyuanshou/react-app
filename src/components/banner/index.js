/*
    通用组件banner的开发
    2020/4/2
    version: 0.0.1
*/
import React from 'react'
import './index.scss'
import {withRouter} from 'react-router-dom'
import Slider from 'react-slick'
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
            ]
        }
    }
    to = (_id, pathname, apiname) => {
        let {history} = this.props;
        history.push({pathname:`${pathname}/${_id}`,search:`apiname=${apiname}`})
    }

    render () {

        let settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            arrows: true,
        };
        let {list} = this.state;
        return (
            <div id="slideshow">
                <h1 className="centered">Latest from the Showcase</h1>
                <Slider {...settings} className="slideshow">
                    {list.map((item, index) => {
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