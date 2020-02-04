import React from "react";

const Todo = (props) => {
  console.log('props: ', props);
  return (
    <div className="todo-container">
      {props.state.map(allTodo => {
        return (
          <React.Fragment>
            <div className={`todo-items`}>
              <p
                className={`todo ${allTodo.completed ? "completed" : ""}`}
                onClick={props.handleComplete}
              >
                {allTodo.item}
              </p>
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Todo;
