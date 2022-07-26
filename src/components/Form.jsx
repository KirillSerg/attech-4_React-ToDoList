import React, { useState } from "react";
import StyledInputTask from './StyledInputTask';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, setActivForm } from "../actions"
import './Form.scss';


const Form = () => {
    const [taskText, setTaskText] = useState('')

    const activForm = useSelector(state => state.formReducer.activ)
    const dispatch = useDispatch()

    const submitSetTask = (e) => {
        dispatch(addTodo(taskText))
        dispatch({ type: "ADD_COUNT" })
        dispatch(setActivForm(false))
        setTaskText('')
        e.preventDefault();
    }

    const addTextHandler = (e) => {
        setTaskText(e.target.value)
    }

    return (
        <div className={activForm ? "modal__bg activ" : "modal__bg"} onClick={() => dispatch(setActivForm(false))}>
            <div className={activForm ? "modal__conteiner activ" : "modal__conteiner"} onClick={e => e.stopPropagation()}>
                <StyledInputTask type="text" onChange={addTextHandler} placeholder="enter your ToDo" value={taskText} />
                <button className="add_todo_btn" type="submit" onClick={submitSetTask}> Submit </button>
            </div>
        </div>
    )
}

export default Form;