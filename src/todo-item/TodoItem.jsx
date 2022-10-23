import React, { useState } from "react";
import "./TodoItem.styles.scss";

const TodoItem = ({
  id,
  title,
  deleteHandler,
  editHandler,
  doneHandler,
  checked,
}) => {
  const [done, setDone] = useState(checked);

  return (
    <li className="todo-item">
      <span className="todo-item__title">
        <input
          type="checkbox"
          checked={done}
          onClick={() => doneHandler(id, (value) => setDone(value))}
        />
        {title}
      </span>
      <div className="todo-item__buttons">
        <button className="btn todo-item__edit" onClick={() => editHandler(id)}>
          edit
        </button>
        <button
          className="btn todo-item__delete"
          onClick={() => deleteHandler(id)}
        >
          delete
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
