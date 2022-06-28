import React, {useState} from "react";


const TaskRow = ({ text, id, task, setTask }) => {
    const [redactOn, setRedactOn] = useState(true)
    const [redactTextTask, setRedactTextTask] = useState('')
    const [compliteOn, setCompleteOn] = useState(true)
    
    const deleteTaskRowHandler = () => {
        setTask(task.filter(todo => todo.id !== id))
    }

    const redactButtonHendler = () => {
        setRedactOn(!redactOn)
    }

    const saveButtonHendler = () => {
        setRedactOn(!redactOn)
        setTask(task.map(todo => (todo.id !== id) ? todo : { text: redactTextTask, done: todo.done, id: todo.id, }))
    }

    const redactItemTaskHandler = (e) => {
        setRedactTextTask(e.target.value)
    }

    const complitItemTaskHandler = () => {
        setCompleteOn(!compliteOn)
        setTask(task.map(todo => (todo.id !== id) ? todo : { text: todo.text, done: compliteOn, id: todo.id, })
            .sort((a, b) => a.done - b.done))
    }

    return (
        <div className='wrap'>
            <input type='checkbox' onClick={complitItemTaskHandler} />
            <input className={!compliteOn ? "complete" : ""} type="text" disabled={redactOn} defaultValue={text} onChange={redactItemTaskHandler} />
            <button onClick={deleteTaskRowHandler}>del</button>
            <button disabled={!redactOn} onClick={redactButtonHendler}>redact</button>
            <button hidden={redactOn} onClick={saveButtonHendler}>save</button>
        </div>
    )
}

export default TaskRow