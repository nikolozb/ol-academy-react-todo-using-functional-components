import React, { useState } from "react";
import "./TodoForm.styles.scss";

const TodoForm = ({ addNewTodo }) => {
  const [input, setInput] = useState("");

  const inputChangeHandler = (event) => {
    setInput(event.target.value);
  };

  return (
    <div className="todo-form">
      <input
        type="text"
        value={input}
        onChange={inputChangeHandler}
        className="todo-form__input"
        placeholder="New todo..."
      />
      <button
        type="submit"
        onClick={() => addNewTodo(input)}
        className="btn todo-form__button"
      >
        add todo
      </button>
    </div>
  );
};

export default TodoForm;
