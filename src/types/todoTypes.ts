export interface ITodoState {
    list: any[];
}

export interface ITodo {
    id: string;
    text: string;
    isCompleted: boolean;
    color: string;
    createdAt: string;
    redactOn: boolean;
}

export enum TodoActionType {
    ADD_TODO = 'ADD_TODO',
    DELETE_TODO = 'DELETE_TODO',
    EDIT_TODO = 'EDIT_TODO',
    SAVE_EDIT_TODO = 'SAVE_EDIT_TODO',
    COMPLIT_TODO = 'COMPLIT_TODO',
    DOWNLOAD_TODO_LIST = 'DOWNLOAD_TODO_LIST',
}

interface IAddTodoAction {
    type: TodoActionType.ADD_TODO;
    payload: string;
}

export interface IDeleteTodoAction {
    type: TodoActionType.DELETE_TODO;
    payload: string;
}

interface IEditTodoAction {
    type: TodoActionType.EDIT_TODO;
    payload: string;
}

interface ISaveEditTodoAction {
    type: TodoActionType.SAVE_EDIT_TODO;
    payload: {                                      // payload ???????
        id: string;
        text: string;
    }
}

interface IComplitTodoAction {
    type: TodoActionType.COMPLIT_TODO;
    payload: string;
}

interface IDownloadTodoAction {
    type: TodoActionType.DOWNLOAD_TODO_LIST;
    payload: ITodo[];
}

export type ITodoActions =
 IAddTodoAction
 | IDeleteTodoAction
 | IEditTodoAction
 | ISaveEditTodoAction
 | IComplitTodoAction
 | IDownloadTodoAction
