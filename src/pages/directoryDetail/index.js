import React from 'react'
import './index.scss'
import Thumbnail from '../../components/thumbnail'
import qs from 'qs'
import axios from 'axios'
class DirectoryDetail extends React.Component {
    state = {
        data: []
    }
    constructor(props) {
        super(props)

        let apiname = qs.parse(props.location.search, { ignoreQueryPrefix: true }).apiname
        let id = props.match.params.id
        axios({ url: `/mock/${apiname}/${id}` }).then(
            res => {
                this.setState({
                    data: res.data.data.detail
                })
            }
        )
    }
    render() {
        let { data } = this.state
        return (
            <div className="dirDetWrapper">
                <div className="dirDet">
                    <h1>目录列表</h1>
                    <div className="dirContent">
                        {
                            data.map((item, index) => {
                                return (
                                        <Thumbnail key={index} visit data={{ _id: item.id, title: item.title, sub: item.time }} img={item.img}></Thumbnail>
                                )
                            })
                        }
                    </div>


                </div>
            </div>
        )
    }
}

export default DirectoryDetail