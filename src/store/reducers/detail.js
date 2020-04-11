let initState = [];

export const reducerDetail = (state = initState, action) => {

    let {payload} = action
    switch (action.type) {
        case 'UPDATA_DETAIL':
            return payload
        case 'GET_DETAIL':
            return payload
        default:
            return state
    }
}