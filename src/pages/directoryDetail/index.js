import React from 'react'
import './index.scss'
import Thumbnail from '../../components/thumbnail'
import qs from 'qs'
import {connect} from 'react-redux'
import { directoryList, clear } from '../../store/actionCreators'
class DirectoryDetail extends React.Component {
   
    constructor(props) {
        super(props)

        let apiname = qs.parse(props.location.search, { ignoreQueryPrefix: true }).apiname
        let id = props.match.params.id
        props.dispatch(clear("CLEAR_DIRECTORYDETAIL"))
        props.dispatch(directoryList({collectioname:apiname,id}))
    }
    render() {
        // let { detail } = this.props
        return (
            <div className="dirDetWrapper">
                <div className="dirDet">
                    <h1>目录列表</h1>
                    <div className="dirContent">
                        {
                            this.props.directoryDetail.map((item, index) => {
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

export default connect(
    state=>({directoryDetail:state.directoryDetail})
)(DirectoryDetail)