import React from "react";
import "./ControlAllTodos.styles.scss";

const ControlAllTodos = ({
  deleteAllTodosHandler,
  deleteCompletedTodosHandler,
  deleteIncompleteTodosHandler,
}) => {
  return (
    <div>
      <button onClick={deleteAllTodosHandler}>delete all todos</button>
      <button onClick={deleteCompletedTodosHandler}>delete completed</button>
      <button onClick={deleteIncompleteTodosHandler}>delete incomplete</button>
    </div>
  );
};

export default ControlAllTodos;
