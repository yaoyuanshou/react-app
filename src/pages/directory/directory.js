import React from 'react'
import './directory.scss'
import Cell from '../../components/directoryCell'
import {connect} from 'react-redux'
import { clear, mockList } from '../../store/actionCreators'
class Directory extends React.Component{
   

    componentDidMount(){
        this.props.dispatch(clear("CLEAR_DIRECTORY"))
        this.props.dispatch(mockList({collectionname:"directory",type:"UPDATE_DIRECTORY"}))
    }
    render(){
        return (
            <div className="directoryWrapper">
                <h1 className="directoryWrapper__title">目录</h1>
                 {this.props.directory.map((item,index)=>{
                    return  <Cell key={item.id} data={item} to={{pathname:"/directoryDetail",apiname:"directory"}}></Cell>
                })}   
            </div>
        )
    }
}

export default connect(
    state=>({directory:state.directory})
)(Directory)