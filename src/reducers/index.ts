import { combineReducers } from "redux";
import countReducer from "./countReducer";
import todoReducer from "./todoReducer";
import formReducer from "./formReducer";

const allReducers = combineReducers({
    countReducer,
    todoReducer,
    formReducer,
})

export default allReducers

export type AllReducersState = ReturnType<typeof allReducers> 