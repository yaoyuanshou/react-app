const initstate = []
const directoryDetail  = (state = initstate, action) => {
    let {type,payload} = action
    switch (type) {
        case "UPDATE_DIRECTORYDETAIL":
            return payload
        case "CLEAR_DIRECTORYDETAIL":
            return []
        default:
            return state
    }
}

export default directoryDetail