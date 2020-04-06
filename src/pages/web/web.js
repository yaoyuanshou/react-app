import React from 'react'
import './web.scss'
import axios from 'axios'
import Thumbnail from '../../components/thumbnail'
class Web extends React.Component {
    state = {
        webData: []
    }
    componentDidMount() {
        axios({ url: "/mock/home" }).then(
            res => {
                this.setState({
                    webData: res.data.data
                })
            }
        )
    }
    render() {
        console.log(this.state.webData)
        return (<div className="webWrapper">
            <h1 className="web__title">网站</h1>
            {this.state.webData.map((item, index) => {
               return <Thumbnail key={item.id} to={{pathname:"/detail",apiname:"home"}} visit data={{_id:item.id,title:item.title,sub:item.time}}  img={item.img}></Thumbnail>
            })}

        </div>)
    }
}

export default Web