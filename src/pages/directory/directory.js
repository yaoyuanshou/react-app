import React from 'react'
import { withRouter } from 'react-router-dom'
import './directory.scss'
import Cell from '../../components/directoryCell'
class Directory extends React.Component{
    state={
        data:[
            {"_id" : "1","title":"1","auth":"1","count":11},
            {"_id" : "2","title":"6","auth":"1","count":22},
            {"_id" : "3","title":"21","auth":"1","count":11},
            {"_id" : "4","title":"4","auth":"1","count":55},
            {"_id" : "5","title":"0","auth":"1","count":5},
            {"_id" : "6","title":"9","auth":"1","count":11}
        ]
    }
    render(){
        return (
            <div className="directoryWrapper">
                <h1 className="directoryWrapper__title">目录</h1>
                {this.state.data.map((item,index)=>{
                    return  <Cell key={item._id} data={item} to={{pathname:"/directoryDetail",apiname:"directoryDetail"}}></Cell>
                })}   
            </div>
        )
    }
}

export default withRouter(Directory)