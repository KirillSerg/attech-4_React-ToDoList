export const addTodo = (text) => {
    return {
        type: "ADD_TODO",
        payload: text
    }
}

export const deleteTodo = (id) => {
    return {
        type: "DELETE_TODO",
        payload: id
    }
}

export const editTodo = (id) => {
    return {
        type: "EDIT_TODO",
        payload: id
    }
}

export const saveEditTodo = (text, id) => {
    return {
        type: "SAVE_EDIT_TODO",
        payload: {
            text,
            id
        }
    }
}

export const complitTodo = (id) => {
    return {
        type: "COMPLIT_TODO",
        payload: id
    }
}

export const setActivForm = (activ) => {
    return {
        type: "SET_ACTIV_FORM",
        payload: activ
    }
}

export const downloadTodoList = (list) => {
    return {
        type: "DOWNLOAD_TODO_LIST",
        payload: list
    }
}