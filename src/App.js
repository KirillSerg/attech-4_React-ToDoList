import React,{useState} from 'react';
import './App.css';

import Form from './components/Form';
import TaskList from './components/TaskList';

function App() {
  const [task, setTask] = useState([])
console.log(task)
  const handlerAddTask = (itemTask) => {
    setTask(task.concat([{ text: itemTask, done: false, id: task.length, }])
      .sort((a, b) => a.done - b.done))
  }

  return (
    <div className="App">
      <header>
        <h1>You must do this!!</h1>
      </header>
      <Form setTask={handlerAddTask} />
      <TaskList task={task} setTask={setTask}/>
    </div>
  );
}

export default App;
