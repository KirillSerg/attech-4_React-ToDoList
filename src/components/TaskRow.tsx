import React, { useState } from "react";
import { useDispatch} from 'react-redux';
import {deleteTodo, editTodo, saveEditTodo, complitTodo} from "../actions"
import {useTypedSelector} from '../hooks/useTypedSelector'
import StyledTodoItem from "./StyledTodoItem";
import {ITodo} from '../types/todoTypes'
import styled from "styled-components";

const StyledBatton = styled.button`
  margin: 0 0 0 5px;
  padding: 0 3px 0 3px;
  border: 1px solid;
  border-radius: 15px;
  font-size: medium;
  &:hover {
    background-color: lightgray;
  };
`;

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
        <div>
            {
                list.map((todo: ITodo) => {
                    return (
                        <div style={{ display: "flex", margin: "0 0 0.5rem 0" }} key={todo.id}>
                            <input style={{ margin: "0 5px 0 0" }} type="checkbox" checked={todo.isCompleted} onChange={() => complitItemTaskHandler(todo.id)} />
                            <StyledTodoItem isCompleted={todo.isCompleted} color={ todo.color} type="text" disabled={!todo.redactOn} defaultValue={todo.text} onChange={redactItemTextHandler} />
                            <StyledBatton onClick={() => deleteTaskRowHandler(todo.id)}>del</StyledBatton>
                            <StyledBatton hidden={todo.redactOn} onClick={() => editButtonHendler(todo.id)}>edit</StyledBatton>
                            <StyledBatton hidden={!todo.redactOn} onClick={() => saveButtonHendler(redactTextTask || todo.text, todo.id)}>save</StyledBatton>
                        </div>)
                })
            }
        </div>
    )
}


export default TaskRow