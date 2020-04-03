import React from 'react'
import './index.scss'
import Thumbnail from '../../components/thumbnail'
class DirectoryDetail extends React.Component{
    render(){
        return (
            <div className="dirDetWrapper">
                <div className="dirDet">
                    <h1>目录列表</h1>
                    <Thumbnail></Thumbnail>
                </div>
            </div>
        )
    }
}

export default DirectoryDetail