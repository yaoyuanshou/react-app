let initState = [];

export const reducerDetail = (state = initState, action) => {

    let {payload} = action
    switch (action.type) {
        case 'UPDATE_DETAIL':
            return payload
        default:
            return state
    }
}