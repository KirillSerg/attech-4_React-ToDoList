import React, {useState} from "react";


const TaskRow = ({ text, id, task, setTask, done, setCountTask, countTask }) => {
    const [redactOn, setRedactOn] = useState(true)
    const [redactTextTask, setRedactTextTask] = useState('')
    const [completeOn, setCompleteOn] = useState(false)
    
    const deleteTaskRowHandler = () => {
        setCountTask({deletedTask: countTask.deletedTask + 1, createdTask: countTask.createdTask, updatedTask: countTask.updatedTask})
        setTask(task.filter(todo => todo.id !== id))
    }

    const redactButtonHendler = () => {
        setRedactOn(!redactOn)
    }

    const saveButtonHendler = () => {
        setRedactOn(!redactOn)
        setTask(task.map(todo => (todo.id !== id) ? todo : { text: redactTextTask, done: todo.done, id: todo.id, }))
        setCountTask({deletedTask: countTask.deletedTask, createdTask: countTask.createdTask, updatedTask: countTask.updatedTask + 1})
    }

    const redactItemTaskHandler = (e) => {
        setRedactTextTask(e.target.value)
    }

    const complitItemTaskHandler = () => {
        setCompleteOn(!completeOn)
        setTask(task.map(todo => (todo.id !== id) ? todo : { text: todo.text, done: !completeOn, id: todo.id, })
            .sort((a, b) => a.done - b.done))
    }

    return (
        <div className='wrap'>
            <input type="checkbox" defaultChecked={done} onClick={complitItemTaskHandler} />
            <input className={done ? "complete" : ""} type="text" disabled={redactOn} defaultValue={text} onChange={redactItemTaskHandler} />
            <button onClick={deleteTaskRowHandler}>del</button>
            <button disabled={!redactOn} onClick={redactButtonHendler}>redact</button>
            <button hidden={redactOn} onClick={saveButtonHendler}>save</button>
        </div>
    )
}

export default TaskRow