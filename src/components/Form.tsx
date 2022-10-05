import React, { useState } from "react";
import StyledInputTask from "./StyledInputTask";
import { useDispatch } from "react-redux";
import { addTodo, setActivForm } from "../actions";
import './Form.scss';
import { useTypedSelector } from "../hooks/useTypedSelector";

const Form: React.FC = () => {
  const [taskText, setTaskText] = useState<string>("");

  const activForm = useTypedSelector((state) => state.formReducer.activ);
  const dispatch = useDispatch();

  // what event for "e.charCode" ????
  const submitSetTask = (e: React.MouseEvent<HTMLButtonElement>): void => {
    // event (mous&change) ????
    dispatch(addTodo(taskText));
    dispatch({ type: "ADD_COUNT" });
    dispatch(setActivForm(false));
    setTaskText("");
    e.preventDefault();
  };

  const submitSetTask2 = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    // event (mous&change) ????
    if (e.charCode === 13) {
      dispatch(addTodo(taskText));
      dispatch({ type: "ADD_COUNT" });
      dispatch(setActivForm(false));
      setTaskText("");
      e.preventDefault();
    }
  };

  const addTextHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setTaskText(e.target.value);
  };

  return (
    <div
      className={activForm ? "modal__bg activ" : "modal__bg"}
      onClick={() => dispatch(setActivForm(false))}
    >
      <div
        className={activForm ? "modal__conteiner activ" : "modal__conteiner"}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="close_btn_wrap">
          <button type="submit" onClick={() => dispatch(setActivForm(false))}>
            {" "}
            x{" "}
          </button>
        </div>
        <StyledInputTask
          onKeyPress={submitSetTask2}
          type="text"
          onChange={addTextHandler}
          placeholder="enter your ToDo"
          value={taskText}
        />
        <div className="footer">
          <button
            className="add_todo_btn"
            type="submit"
            onClick={submitSetTask}
          >
            {" "}
            Submit
          </button>
          <button
            className="close_todo_btn2"
            type="submit"
            onClick={() => dispatch(setActivForm(false))}
          >
            {" "}
            Cancel{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
