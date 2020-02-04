//main imports
import React, { useReducer, useState } from "react";
import { todoReducer, initialState } from "../reducers/reducer";

//internal imports
import Todo from "./Todo";
import WallPaper from "../assets/todowallpaper.svg";
import logo from "../assets/logo.svg";

//functional component
const TodoForm = () => {
  //reducer & useState
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const [newTodoText, setNewTodoText] = useState();

  //handles changes in the input.
  const handleChanges = event => {
    console.log("event: ", event);
    setNewTodoText(event.target.value);
  };

  //function that handles add.
  const handleAdd = event => {
    event.preventDefault();
    dispatch({ type: "TOGGLE_ADD", payload: newTodoText });
  };

  //function that handles complete - When an todo is clicked it is changed to [completed]
  const handleComplete = id => {
    dispatch({ type: "TOGGLE_COMPLETED", payload: id});
  };

  return (
    <div>
      <div className="nav">
        <div className="logo-container">
          <img className="logo" src={logo} alt="hello"></img>
          <a className="anchor" href="http://localhost:3000/">
            Ultimate Todo
          </a>
        </div>
      </div>
      <div className="todo-list">
        <img src={WallPaper} alt="hello"></img>
        <h2>The #1 Todo App</h2>
        <div className="form">
          <input
            placeholder={"Enter Todo Here..."}
            type="text"
            name="newTodoText"
            value={newTodoText}
            onChange={handleChanges}
          />
          <button className="add-button" onClick={handleAdd}>
            Add
          </button>
        </div>
      </div>
      <p>Clear</p>
      <Todo
        state={state}
        initialState={initialState}
        handleComplete={handleComplete}
      />
    </div>
  );
};

export default TodoForm;
