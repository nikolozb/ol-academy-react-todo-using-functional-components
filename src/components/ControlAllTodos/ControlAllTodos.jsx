import React from "react";
import "./ControlAllTodos.styles.scss";

const ControlAllTodos = ({
  deleteAllTodosHandler,
  deleteCompletedTodosHandler,
  deleteIncompleteTodosHandler,
}) => {
  return (
    <div className="control">
      <button onClick={deleteAllTodosHandler} className="control__btn">
        delete all todos
      </button>
      <button onClick={deleteCompletedTodosHandler} className="control__btn">
        delete completed
      </button>
      <button onClick={deleteIncompleteTodosHandler} className="control__btn">
        delete incomplete
      </button>
    </div>
  );
};

export default ControlAllTodos;
