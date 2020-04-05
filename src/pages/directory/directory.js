import React from 'react'
import { withRouter } from 'react-router-dom'
import './directory.scss'
import Cell from '../../components/directoryCell'
import axios from 'axios'
class Directory extends React.Component{
    state={
        directoryData:[]
    }

    async componentDidMount(){
        let res = await axios({url:"/mock/directory"})
       this.setState({
           directoryData:res.data.data
       })
    }
    render(){
        return (
            <div className="directoryWrapper">
                <h1 className="directoryWrapper__title">目录</h1>
                 {this.state.directoryData.map((item,index)=>{
                    return  <Cell key={item.id} data={item} to={{pathname:"/directoryDetail",apiname:"directory"}}></Cell>
                })}   
            </div>
        )
    }
}

export default withRouter(Directory)