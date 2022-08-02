import React from "react";
import { useDispatch } from "react-redux";
import { setActivForm, downloadTodoList } from "./actions";
import "./App.scss";
import { useTypedSelector } from "./hooks/useTypedSelector";
import { getRandomColor } from "./components/other-func";
import Form from "./components/Form";
import TaskRow from "./components/TaskRow";

const App: React.FC = () => {
  const { add, up, del } = useTypedSelector((state) => state.countReducer);
  const list = useTypedSelector((state) => state.todoReducer.list);
  const dispatch = useDispatch();

  interface ITodoDonwnload {
    id: string;
    text: string;
    isCompleted: boolean;
    createdAt: string;
  }

  if (list.length === 0 && add === 0 && up === 0 && del === 0) {
    getDataTask();
  }

  function getDataTask() {
    return fetch(
      "https://gist.githubusercontent.com/alexandrtovmach/0c8a29b734075864727228c559fe9f96/raw/c4e4133c9658af4c4b3474475273b23b4a70b4af/todo-task.json"
    )
      .then((response) => response.json())
      .then((json) =>
        dispatch(
          downloadTodoList(
            json
              .map((todo: ITodoDonwnload) => ({
                ...todo,
                color: getRandomColor(),
                redactOn: false,
              }))
              .sort(
                (a: ITodoDonwnload, b: ITodoDonwnload) =>
                  Number(a.isCompleted) - Number(b.isCompleted)
              )
          )
        )
      );
  }

  return (
    <div className="app">
      {/*className={styles.App} */}
      <header>
        <h1>You must do this!!</h1>
      </header>
      <div className="counters">
        {/*className={styles.counters} */}
        <div>Created Tasks: {add}</div>
        <div>Updated Tasks: {up}</div>
        <div>Deleted Tasks: {del}</div>
      </div>
      <button
        style={{ color: "green" }}
        onClick={() => dispatch(setActivForm(true))}
      >
        ADD TODO
      </button>
      <Form />
      <TaskRow />
    </div>
  );
};

export default App;
