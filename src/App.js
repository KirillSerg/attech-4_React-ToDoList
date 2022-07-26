import React from 'react';
import { getRandomColor } from "./components/other-func"
import { useDispatch, useSelector } from 'react-redux';
import { setActivForm, downloadTodoList } from "./actions"
import styles from './App.module.scss';

import Form from './components/Form';
import TaskRow from './components/TaskRow'

const App = () => {
  const counter = useSelector(state => state.countReducer)
  const dispatch = useDispatch()

  // useEffect(() => {
  //   getLocal()
  // }, []);

  // useEffect(() => {
  //   saveLocal()
  // }, [task, countTask]);


  // const saveLocal = () => {
  //   localStorage.setItem("task", JSON.stringify(task));
  //   localStorage.setItem("countTask", JSON.stringify(countTask));
  //   localStorage.setItem("count", JSON.stringify(counter));
  // }

  // const getLocal = () => {
  //   if (localStorage.getItem("task") === null) {
  //     getDataTask()
  //     localStorage.setItem("task", JSON.stringify([]));
  //   } else {
  //     let taskLocal = JSON.parse(localStorage.getItem("task"));
  //     setTask(taskLocal)
  //   }

  //   if (localStorage.getItem("countTask") === null) {
  //     localStorage.setItem("countTask", JSON.stringify([]));
  //   } else {
  //     let counterLocal = JSON.parse(localStorage.getItem("countTask"));
  //     setCountTask(counterLocal)
  //   }
  // }

  function getDataTask() {
    return fetch('https://gist.githubusercontent.com/alexandrtovmach/0c8a29b734075864727228c559fe9f96/raw/c4e4133c9658af4c4b3474475273b23b4a70b4af/todo-task.json')
      .then(response => response.json())
      .then(json => dispatch(downloadTodoList((json.map(todo => ({ ...todo, color: getRandomColor(), redactOn: false}))).sort((a, b) => a.isCompleted - b.isCompleted))))
        
        
        //setTask(json.map(todo => ({ ...todo, color: getRandomColor() })).sort((a, b) => a.isCompleted - b.isCompleted)))
  }

  return (
    <div className={styles.app}>
      <header>
        <h1>You must do this!!</h1>
      </header>
      <div className={styles.counters}>
        <div>Created Tasks: { counter.add}</div>
        <div>Updated Tasks: { counter.up}</div>
        <div>Deleted Tasks: {counter.del}</div>
      </div>
      <button  onClick={getDataTask}>Download ToDo list</button>
      <button style={{color: "green"}} onClick={() => dispatch(setActivForm(true))}>ADD TODO</button>
      <Form />
      <TaskRow />
    </div>
  );
}

export default App;
