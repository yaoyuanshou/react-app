const InitState = []
export const banner = (state = InitState, action) => {
    let {payload} = action
    switch (action.type) {
        case 'UPDATA_BANNER':
            return payload
        default:
            return state
    }
}