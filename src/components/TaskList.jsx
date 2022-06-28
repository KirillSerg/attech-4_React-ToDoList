import React from "react";

import TaskRow from "./TaskRow"

const TaskList = ({task, setTask}) => {

    return (
        <div className="todo-container">
            <ul className="todo-list">{
                task.map((todo) => 
                    <TaskRow key={todo.id} text={todo.text} id={todo.id} task={ task} setTask={ setTask} />
            )}
            </ul>
        </div>
    )
}

export default TaskList;