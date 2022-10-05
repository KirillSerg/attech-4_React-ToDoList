import { getRandomColor } from "../components/other-func"
import { ITodoState, ITodoActions, TodoActionType, ITodo } from '../types/todoTypes'


const defaultState: ITodoState = { list: [] }

const todoReducer = (state: ITodoState = defaultState, action: ITodoActions): ITodoState => {
    switch (action.type) {
        case TodoActionType.ADD_TODO:
            return {
                ...state,
                list: [
                    ...state.list,
                    {
                        id: new Date().getTime().toString(),
                        text: action.payload,
                        isCompleted: false,
                        color: getRandomColor(),
                        createdAt: new Date().toLocaleDateString('en-US'),
                        redactOn: false
                    }
                ].sort((a, b) => a.isCompleted - b.isCompleted)                     // a, b, isCompleted ??????????
            }
        case TodoActionType.DELETE_TODO:
            return { ...state, list: state.list.filter((todo: ITodo) => todo.id !== action.payload) }    // todo ??????????
        case TodoActionType.EDIT_TODO:
            return {
                ...state,
                list: state.list.map((todo: ITodo) => (todo.id !== action.payload) ? todo :              // todo ??????????
                    {...todo, redactOn: !todo.redactOn})                
            }
        case TodoActionType.SAVE_EDIT_TODO:
            return {
                ...state,
                list: state.list.map((todo: ITodo) => (todo.id !== action.payload.id) ? todo :           // todo ??????????
                    {...todo, text: action.payload.text, redactOn: !todo.redactOn})                
            }
        case TodoActionType.COMPLIT_TODO:
            return {
                ...state,
                list: state.list.map((todo: ITodo) => (todo.id !== action.payload) ? todo :
                    {...todo, isCompleted: !todo.isCompleted})                
                    .sort((a, b) => Number(a.isCompleted) - Number(b.isCompleted))                     // a, b, isCompleted ??????????
            }
        case TodoActionType.DOWNLOAD_TODO_LIST:
            return {
                ...state,
                list: action.payload
            }
        default:
            return state
    }
}
export default todoReducer