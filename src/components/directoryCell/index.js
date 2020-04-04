import React from 'react'
import { withRouter } from 'react-router-dom'
import propTypes from 'prop-types'
import './index.scss'
class Cell extends React.Component {
    static defaultProps={
        to:null
    }
    //需要传入的数据
    static propTypes={
        data:propTypes.shape({
            _id:propTypes.string,//id
            title:propTypes.string,//标题
            auth:propTypes.string,//作者
            count:propTypes.number//数量
        }).isRequired,
        to:propTypes.shape({
            pathname:propTypes.string,//跳转地址
            apiname:propTypes.string//集合名称
        })
    }
    to=(_id)=>{
        if(!this.props.to) return
        let {history,to:{pathname,apiname}} = this.props
        history.push({pathname:`${pathname}/${_id}`,search:`apiname=${apiname}`})
        
    }
    render() {
        let {data:{_id,title,auth,count}} = this.props
        return (
            <div className="cellWrapper" onClick={()=>this.to(_id)}>
                <div>
                    <h1>{title}</h1>
                    <p>{auth}</p>
                </div>
                <span>{count}</span>
            </div>
        )
    }
}

export default withRouter(Cell)