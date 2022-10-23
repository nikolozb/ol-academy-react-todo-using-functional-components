import React from "react";
import "./TodoItem.styles.scss";

const TodoItem = ({ id, title, deleteHandler, editHandler, doneHandler }) => {
  return (
    <div className="todo-item">
      <span className="todo-item__title">{title}</span>
      <div className="todo-item__buttons">
        <button className="btn todo-item__edit" onClick={() => editHandler(id)}>
          edit
        </button>
        <button className="btn todo-item__done" onClick={() => doneHandler(id)}>
          done
        </button>
        <button
          className="btn todo-item__delete"
          onClick={() => deleteHandler(id)}
        >
          delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
