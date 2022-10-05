import { ITodo, ITodoActions, TodoActionType } from '../types/todoTypes'
import { IFormAction, SET_ACTIV_FORM } from '../types/formTypes'

export const addTodo = (text: string): ITodoActions => {                              // addTodo, text ?????
    return {
        type: TodoActionType.ADD_TODO,
        payload: text
    }
}

export const deleteTodo = (id: string): ITodoActions => {
    return {
        type: TodoActionType.DELETE_TODO,
        payload: id
    }
}

export const editTodo = (id: string): ITodoActions => {
    return {
        type: TodoActionType.EDIT_TODO,
        payload: id
    }
}

export const saveEditTodo = (text: string, id: string): ITodoActions => {
    return {
        type: TodoActionType.SAVE_EDIT_TODO,
        payload: {
            text,
            id
        }
    }
}

export const complitTodo = (id: string): ITodoActions => {
    return {
        type: TodoActionType.COMPLIT_TODO,
        payload: id
    }
}

export const setActivForm = (activ: boolean): IFormAction => {
    return {
        type: SET_ACTIV_FORM,
        payload: activ
    }
}

export const downloadTodoList = (list: ITodo[]): ITodoActions => {
    return {
        type: TodoActionType.DOWNLOAD_TODO_LIST,
        payload: list
    }
}