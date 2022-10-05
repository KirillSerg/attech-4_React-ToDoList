import {SET_ACTIV_FORM, IFormState, IFormAction} from "../types/formTypes"

export const defaultState: IFormState = {
    activ: false
}

const formReducer = (state: IFormState = defaultState, action: IFormAction): IFormState => {
    switch (action.type) {
        case SET_ACTIV_FORM:
            return {...state, activ: action.payload}
        default:
            return state
    }
}
export default formReducer