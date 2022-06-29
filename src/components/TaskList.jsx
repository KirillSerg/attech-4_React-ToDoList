import React from "react";

import TaskRow from "./TaskRow"

const TaskList = ({task, setTask, setCountTask, countTask}) => {

    return (
        <div className="todo-container">
            <ul>{
                task.map((todo) => 
                    <TaskRow key={todo.id} text={todo.text} id={todo.id} task={task} setTask={setTask} done={todo.done} setCountTask={setCountTask} countTask={ countTask} />
            )}
            </ul>
        </div>
    )
}

export default TaskList;