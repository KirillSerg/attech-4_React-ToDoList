//@ts-check
import {ICountState, ICountAction, CountActionType} from "../types/countTypes"

export const defaultState: ICountState = {
    add: 0,
    up: 0,
    del: 0
}

const countReducer = (state: ICountState = defaultState, action: ICountAction): ICountState => {
    switch (action.type) {
        case CountActionType.ADD_COUNT:
            return {...state, add: state.add + 1 }
        case CountActionType.UPDATE:
            return {...state, up: state.up + 1 }
        case CountActionType.DELETE_COUNT:
            return {...state, del: state.del + 1}
        default:
            return state
    }
}
export default countReducer