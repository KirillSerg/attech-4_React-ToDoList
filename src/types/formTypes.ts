export const SET_ACTIV_FORM = "SET_ACTIV_FORM"

export interface IFormState {
    activ: boolean;
}

export interface IFormAction {
    type: typeof SET_ACTIV_FORM;
    payload: boolean
}