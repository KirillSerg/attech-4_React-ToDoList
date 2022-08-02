import React, { useState } from "react";
import { useDispatch} from 'react-redux';
import {deleteTodo, editTodo, saveEditTodo, complitTodo} from "../actions"
import {useTypedSelector} from '../hooks/useTypedSelector'
import StyledTodoItem from "./StyledTodoItem";
import {ITodo} from '../types/todoTypes'
const TaskRow: React.FC = () => {
    const [redactTextTask, setRedactTextTask] = useState<string>('')
    const {list} = useTypedSelector((state) => state.todoReducer)
    const dispatch = useDispatch()                                          //dispatch ?????

    const redactItemTextHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setRedactTextTask(e.target.value)
    }
    
    const deleteTaskRowHandler = (id: string) => {
        dispatch(deleteTodo(id))
        dispatch({ type: "DELETE_COUNT"})
    }
    
    const editButtonHendler = (id: string) => {
        dispatch(editTodo(id))
    }

    const saveButtonHendler = (text: string, id: string) => {
        dispatch(saveEditTodo(text, id))
        dispatch({ type: "UPDATE"})
    }


    const complitItemTaskHandler = (id: string) => {
        dispatch(complitTodo(id))
    }
    

    return (
        <div className="todo-container">
            {
                list.map((todo: ITodo) => {
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