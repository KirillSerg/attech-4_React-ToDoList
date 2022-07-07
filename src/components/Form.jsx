import React, { useState } from "react";
import StyledInputTask from './StyledInputTask';


const Form = ({setTask, setCountTask, countTask}) => {
    const [itemTask, setItemTask] = useState('')

    const submitSetTask = (e) => {
        setTask(itemTask)
        setItemTask('')
        setCountTask({deletedTask: countTask.deletedTask, createdTask: countTask.createdTask + 1, updatedTask: countTask.updatedTask})
        e.preventDefault();
    }

    const addHandler = (e) => {
        setItemTask(e.target.value)
    }

    return (
        <form>
            <StyledInputTask type="text" onChange={addHandler} placeholder="enter your ToDo" value={itemTask} />
            <button type="submit" onClick={submitSetTask}> + </button>
        </form>
    )
}

export default Form;