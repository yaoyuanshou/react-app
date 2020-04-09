const initstate = []
const web = (state = initstate, action) => {
    let {type,payload} = action
    switch (type) {
        case "UPDATE_WEB":
            return payload
        case "CLEAR_WEB":
            return []
        default:
            return state
    }
}

export default web