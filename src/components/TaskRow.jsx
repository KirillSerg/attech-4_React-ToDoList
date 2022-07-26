import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import {deleteTodo, editTodo, saveEditTodo, complitTodo} from "../actions"

import StyledTodoItem from "./StyledTodoItem";

const TaskRow = () => {
    const [redactTextTask, setRedactTextTask] = useState('')
    const list = useSelector((state) => state.todoReducer.list)
    const dispatch = useDispatch()

    const redactItemTextHandler = (e) => {
        setRedactTextTask(e.target.value)
    }
    
    const deleteTaskRowHandler = (id) => {
        dispatch(deleteTodo(id))
        dispatch({ type: "DELETE_COUNT"})
    }
    
    const editButtonHendler = (id) => {
        dispatch(editTodo(id))
    }

    const saveButtonHendler = (text, id) => {
        dispatch(saveEditTodo(text, id))
        dispatch({ type: "UPDATE"})
    }


    const complitItemTaskHandler = (id) => {
        dispatch(complitTodo(id))
    }
    

    return (
        <div className="todo-container">
            {
                list.map((todo) => {
                    return (
                        <div style={{ display: "flex"}} key={todo.id}>
                            <input type="checkbox" checked={todo.isCompleted} onChange={() => complitItemTaskHandler(todo.id)} />
                            <StyledTodoItem isCompleted={todo.isCompleted} color={ todo.color} type="text" disabled={!todo.redactOn} defaultValue={todo.text} onChange={redactItemTextHandler} />
                            <button style={{ margin: "0 0 0 5px" }} onClick={() => deleteTaskRowHandler(todo.id)}>del</button>
                            <button style={{ margin: "0 0 0 5px" }} hidden={todo.redactOn} onClick={() => editButtonHendler(todo.id)}>edit</button>
                            <button style={{ margin: "0 0 0 5px" }} hidden={!todo.redactOn} onClick={() => saveButtonHendler(redactTextTask, todo.id)}>save</button>
                        </div>)
                })
            }
        </div>
    )
}

export default TaskRow