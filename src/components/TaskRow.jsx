import React, { useState } from "react";
import { useDispatch } from 'react-redux';

import StyledTodoItem from "./StyledTodoItem";

const TaskRow = ({ text, id, task, setTask, isCompleted, setCountTask, countTask, color }) => {
    const [redactOn, setRedactOn] = useState(true)
    const [redactTextTask, setRedactTextTask] = useState('')
    
    const dispatch = useDispatch()

    const deleteTaskRowHandler = () => {
        setCountTask({deletedTask: countTask.deletedTask + 1, createdTask: countTask.createdTask, updatedTask: countTask.updatedTask})
        setTask(task.filter(todo => todo.id !== id));
        dispatch({ type: "DELETE"})
    }

    const redactButtonHendler = () => {
        setRedactOn(!redactOn)
    }

    const saveButtonHendler = () => {
        setRedactOn(!redactOn)
        setTask(task.map(todo => (todo.id !== id) ? todo : { id: todo.id, text: redactTextTask, isCompleted: todo.isCompleted, createdAt: todo.createdAt, color: todo.color}))
        setCountTask({ deletedTask: countTask.deletedTask, createdTask: countTask.createdTask, updatedTask: countTask.updatedTask + 1 });
        dispatch({ type: "UPDATE"})
    }

    const redactItemTaskHandler = (e) => {
        setRedactTextTask(e.target.value)
    }

    const complitItemTaskHandler = () => {
        setTask(task.map(todo => (todo.id !== id) ? todo : { id: todo.id, text: todo.text, isCompleted: !todo.isCompleted, createdAt: todo.createdAt, })
            .sort((a, b) => a.isCompleted - b.isCompleted))
    }

    return (
        <div className='wrap'>
            <input type="checkbox" checked={isCompleted} onChange={complitItemTaskHandler} />
            <StyledTodoItem isCompleted={isCompleted} color={ color} type="text" disabled={redactOn} defaultValue={text} onChange={redactItemTaskHandler} />
            <button style={{ margin: "0 0 0 5px" }} onClick={deleteTaskRowHandler}>del</button>
            <button style={{ margin: "0 0 0 5px" }} hidden={!redactOn} onClick={redactButtonHendler}>redact</button>
            <button style={{ margin: "0 0 0 5px" }} hidden={redactOn} onClick={saveButtonHendler}>save</button>
        </div>
    )
}

export default TaskRow