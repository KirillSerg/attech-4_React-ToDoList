export const defaultState = {
    activ: false
}

const formReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "SET_ACTIV_FORM":
            return {...state, activ: action.payload}
        default:
            return state
    }
}
export default formReducer