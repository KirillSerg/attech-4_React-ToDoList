export interface ICountState {
    add: number;
    up: number;
    del: number;
}

export enum CountActionType {
    ADD_COUNT = 'ADD_COUNT',
    UPDATE = 'UPDATE',
    DELETE_COUNT = 'DELETE_COUNT',
}

interface IAddCountAction {
    type: CountActionType.ADD_COUNT;
}

interface IUpdateCountAction {
    type: CountActionType.UPDATE;
}

interface IDeleteCountAction {
    type: CountActionType.DELETE_COUNT;
}

export type ICountAction =
 IAddCountAction
 | IUpdateCountAction
 | IDeleteCountAction
