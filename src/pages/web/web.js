import React from 'react'
import './web.scss'
import {connect} from 'react-redux'
import Thumbnail from '../../components/thumbnail'
import { clear, mockList } from '../../store/actionCreators'
class Web extends React.Component {
    componentDidMount() {
       this.props.dispatch(clear("CLEAR_WEB"))
       this.props.dispatch(
           mockList({collectionname:"home",type:"UPDATE_WEB"})
       )
    }
    render() {
        return (<div className="webWrapper">
           
            <div className="web">
            <h1 className="web__title">网站</h1>
                {this.props.web.map((item, index) => {
                    return <Thumbnail key={index} to={{ pathname: "/detail", apiname: "home" }} visit data={{ _id: item.id, title: item.title, sub: item.time }} img={item.img}></Thumbnail>
                })}
            </div>


        </div>)
    }
}

export default connect(
    state=>({web:state.web})
)(Web)