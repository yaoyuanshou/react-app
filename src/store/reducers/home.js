let initState = [];

export const reducerHome = (state = initState, action) => {
    let {payload} = action
    switch (action.type) {
        case 'UPDATA_HOME':
            return payload
        default:
            return state
    }
}