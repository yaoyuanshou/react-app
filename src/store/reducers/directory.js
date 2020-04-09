const initstate = []
const directory = (state = initstate, action) => {
    let {type,payload} = action
    switch (type) {
        case "UPDATE_DIRECTORY":
            return payload
        case "CLEAR_DIRECTORY":
            return []
        default:
            return state
    }
}

export default directory