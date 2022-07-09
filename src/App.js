import React, { useEffect, useState } from 'react';
import styles from './App.module.scss';

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

  let date = new Date()
  
  const handlerAddTask = (itemTask) => {
    setTask(task.concat([{ id: Math.random() * 1000, text: itemTask, isCompleted: false, createdAt: date.toLocaleDateString('en-US'), }])
      .sort((a, b) => a.isCompleted - b.isCompleted))
  }

  const saveLocal = () => {
    localStorage.setItem("task", JSON.stringify(task));
    localStorage.setItem("countTask", JSON.stringify(countTask));
  }

  const getLocal = () => {
    if (localStorage.getItem("task") === null) {
      getDataTask()
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

  function getDataTask() {
    return fetch('https://gist.githubusercontent.com/alexandrtovmach/0c8a29b734075864727228c559fe9f96/raw/c4e4133c9658af4c4b3474475273b23b4a70b4af/todo-task.json')
      .then(response => response.json())
      .then(x => setTask(x.sort((a, b) => a.isCompleted - b.isCompleted)))
  }



  return (
    <div className={styles.app}>
      <header>
        <h1>You must do this!!</h1>
      </header>
      <div className={styles.counters}>
        <div>Created Tasks: {countTask.createdTask}</div>
        <div>Updated Tasks: {countTask.updatedTask}</div>
        <div>Deleted Tasks: {countTask.deletedTask}</div>
      </div>
      <Form setTask={handlerAddTask} setCountTask={setCountTask} countTask={ countTask}/>
      <TaskList task={task} setTask={setTask} setCountTask={setCountTask} countTask={ countTask} />
    </div>
  );
}

export default App;
