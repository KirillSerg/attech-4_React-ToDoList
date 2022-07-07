import React, {useState} from "react";

import StyledTodoItem from "./StyledTodoItem";

const TaskRow = ({ text, id, task, setTask, isCompleted, setCountTask, countTask }) => {
    const [redactOn, setRedactOn] = useState(true)
    const [redactTextTask, setRedactTextTask] = useState('')
    
    const deleteTaskRowHandler = () => {
        setCountTask({deletedTask: countTask.deletedTask + 1, createdTask: countTask.createdTask, updatedTask: countTask.updatedTask})
        setTask(task.filter(todo => todo.id !== id))
    }

    const redactButtonHendler = () => {
        setRedactOn(!redactOn)
    }

    const saveButtonHendler = () => {
        setRedactOn(!redactOn)
        setTask(task.map(todo => (todo.id !== id) ? todo : { id: todo.id, text: redactTextTask, isCompleted: todo.isCompleted, createdAt: todo.createdAt, }))
        setCountTask({deletedTask: countTask.deletedTask, createdTask: countTask.createdTask, updatedTask: countTask.updatedTask + 1})
    }

    const redactItemTaskHandler = (e) => {
        setRedactTextTask(e.target.value)
    }

    const complitItemTaskHandler = () => {
        setTask(task.map(todo => (todo.id !== id) ? todo : { id: todo.id, text: todo.text, isCompleted: !todo.isCompleted, createdAt: "123", })
            .sort((a, b) => a.isCompleted - b.isCompleted))
    }

    return (
        <div className='wrap'>
            <input type="checkbox" checked={isCompleted} onChange={complitItemTaskHandler} />
            <StyledTodoItem className={isCompleted ? "complete" : ""} type="text" disabled={redactOn} defaultValue={text} onChange={redactItemTaskHandler} />
            <button onClick={deleteTaskRowHandler}>del</button>
            <button disabled={!redactOn} onClick={redactButtonHendler}>redact</button>
            <button hidden={redactOn} onClick={saveButtonHendler}>save</button>
        </div>
    )
}

export default TaskRow