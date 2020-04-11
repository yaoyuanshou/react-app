import axios from 'axios'

export const clear = type => ({
    type
})

//Mock的接口
export const mockList = ({collectionname,type,_limit,_page=0}) => dispatch => {
    axios({url:`/mock/${collectionname}?_limit=${_limit}&_page=${_page}`}).then(
        res=>dispatch({type,payload:res.data.data})
    ).catch(
        err=>console.log("mockList",err)
    )
}

//directioryDetail  目录的详情列表
export const directoryList = ({collectioname,id}) => dispatch =>{
    axios({url:`/mock/${collectioname}/${id}`}).then(
        res=>dispatch({type:"UPDATE_DIRECTORYDETAIL",payload:res.data.data.detail})
    ).catch(
        err=>console.log("directoryList",err)
    )
}