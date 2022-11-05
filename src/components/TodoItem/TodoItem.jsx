import React, { useState } from "react";
import MoveTasks from "../../components/MoveTasks/MoveTasks";
import "./TodoItem.styles.scss";

function TodoItem({
  id,
  title,
  deleteHandler,
  editHandler,
  doneHandler,
  checked,
  checkedHandler,
  todos,
  setTodos,
}) {
  const [check, setCheck] = useState(checked);

  return (
    <li className="todo-item">
      <span className="todo-item__title">
        <input
          type="checkbox"
          checked={check}
          onClick={() => checkedHandler(id, (value) => setCheck(value))}
          onChange={() => {}}
        />
        {title}
      </span>
      <div className="todo-item__buttons">
        <button className="btn todo-item__done" onClick={() => doneHandler(id)}>
          done
        </button>
        <button className="btn todo-item__edit" onClick={() => editHandler(id)}>
          edit
        </button>
        <button
          className="btn todo-item__delete"
          onClick={() => deleteHandler(id)}
        >
          delete
        </button>
        <MoveTasks id={id} todos={todos} setTodos={setTodos} />
      </div>
    </li>
  );
}

export default TodoItem;
