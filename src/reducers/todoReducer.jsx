import { getRandomColor } from "../components/other-func"

const defaultState = { list: [] }

const todoReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "ADD_TODO":
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
                ].sort((a, b) => a.isCompleted - b.isCompleted)
            }
        case "DELETE_TODO":
            return { ...state, list: state.list.filter(todo => todo.id !== action.payload) }
        case "EDIT_TODO":
            return {
                ...state,
                list: state.list.map(todo => (todo.id !== action.payload) ? todo :
                    {...todo, redactOn: !todo.redactOn})                
            }
        case "SAVE_EDIT_TODO":
            return {
                ...state,
                list: state.list.map(todo => (todo.id !== action.payload.id) ? todo :
                    {...todo, text: action.payload.text, redactOn: !todo.redactOn})                
            }
        case "COMPLIT_TODO":
            return {
                ...state,
                list: state.list.map(todo => (todo.id !== action.payload) ? todo :
                    {...todo, isCompleted: !todo.isCompleted})                
                    .sort((a, b) => a.isCompleted - b.isCompleted)
            }
        case "DOWNLOAD_TODO_LIST":
            return {
                ...state,
                list: action.payload
            }
        default:
            return state
    }
}
export default todoReducer