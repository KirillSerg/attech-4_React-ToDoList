import React, { useState } from "react";

const Form = ({setTask}) => {
    const [itemTask, setItemTask] = useState('')

    const submitSetTask = (e) => {
        setTask(itemTask)
        setItemTask('')
        e.preventDefault();
    }

    const addHandler = (e) => {
        setItemTask(e.target.value)
    }

    return (
        <form>
            <input type="text" onChange={addHandler} placeholder="enter your ToDo" value={itemTask} />
            <button type="submit" onClick={submitSetTask}> + </button>
        </form>
    )
}

export default Form;