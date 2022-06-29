import React, {useEffect, useState} from 'react';
import './App.css';

import Form from './components/Form';
import TaskList from './components/TaskList';

function App() {
  const [task, setTask] = useState([])
  const [countTask, setCountTask] = useState({deletedTask: 0, createdTask: 0, updatedTask: 0})


  useEffect(() => {
    getLocal()
  }, []);

  useEffect(() => {
    saveLocal()
  }, [task, countTask]);

  const handlerAddTask = (itemTask) => {
    setTask(task.concat([{ text: itemTask, done: false, id: Math.random() * 1000, }])
      .sort((a, b) => a.done - b.done))
  }

  const saveLocal = () => {
    localStorage.setItem("task", JSON.stringify(task));
    localStorage.setItem("countTask", JSON.stringify(countTask));
  }

  const getLocal = () => {
    if (localStorage.getItem("task") === null) {
      localStorage.setItem("task", JSON.stringify([]));
    } else {
      let taskLocal = JSON.parse(localStorage.getItem("task"));
      setTask(taskLocal)
    }

    if (localStorage.getItem("countTask") === null) {
      localStorage.setItem("countTask", JSON.stringify([]));
    } else {
      let counterLocal = JSON.parse(localStorage.getItem("countTask"));
      setCountTask(counterLocal)
    }
  }

  return (
    <div className="App">
      <header>
        <h1>You must do this!!</h1>
      </header>
      <div className='counter'>Created Tasks: {countTask.createdTask}</div>
      <div className='counter'>Updated Tasks: {countTask.updatedTask}</div>
      <div className='counter'>Deleted Tasks: {countTask.deletedTask}</div>
      <Form setTask={handlerAddTask} setCountTask={setCountTask} countTask={ countTask}/>
      <TaskList task={task} setTask={setTask} setCountTask={setCountTask} countTask={ countTask} />
    </div>
  );
}

export default App;
