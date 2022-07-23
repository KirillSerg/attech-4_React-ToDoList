export const defaultState = {
    del: 0,
    up: 0,
    add: 0,
}

const countRaducer = (state = defaultState, action) => {
    switch (action.type) {
        case "DELETE":
            return {...state, del: state.del + 1}
        case "UPDATE":
            return {...state, up: state.up + 1 }
        case "ADD":
            return {...state, add: state.add + 1 }
        default:
            return state
    }
}
export default countRaducer