import React from 'react';
import { getRandomColor } from "./components/other-func"
import { useDispatch, useSelector } from 'react-redux';
import { setActivForm, downloadTodoList } from "./actions"
import styles from './App.module.scss';

import Form from './components/Form';
import TaskRow from './components/TaskRow'

const App = () => {
  const counter = useSelector(state => state.countReducer)
  const list = useSelector(state => state.todoReducer.list)
  const dispatch = useDispatch()

  if (list.length === 0 && counter.add === 0 && counter.del === 0 && counter.up === 0) {
    getDataTask()
  }

  function getDataTask() {
    return fetch('https://gist.githubusercontent.com/alexandrtovmach/0c8a29b734075864727228c559fe9f96/raw/c4e4133c9658af4c4b3474475273b23b4a70b4af/todo-task.json')
      .then(response => response.json())
      .then(json => dispatch(downloadTodoList((json.map(todo => ({ ...todo, color: getRandomColor(), redactOn: false}))).sort((a, b) => a.isCompleted - b.isCompleted))))
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
      <button style={{color: "green"}} onClick={() => dispatch(setActivForm(true))}>ADD TODO</button>
      <Form />
      <TaskRow />
    </div>
  );
}

export default App;
