export const defaultState = {
    add: 0,
    up: 0,
    del: 0,
}

const countReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "ADD_COUNT":
            return {...state, add: state.add + 1 }
        case "UPDATE":
            return {...state, up: state.up + 1 }
        case "DELETE_COUNT":
            return {...state, del: state.del + 1}
        default:
            return state
    }
}
export default countReducer