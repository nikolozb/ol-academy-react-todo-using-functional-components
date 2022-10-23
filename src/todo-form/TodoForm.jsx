import React, { useState } from "react";
import "./TodoForm.styles.scss";

const TodoForm = ({ addNewTodo }) => {
  const [input, setInput] = useState("");

  const inputChangeHandler = (event) => {
    setInput(event.target.value);
  };

  return (
    <div>
      <input type="text" value={input} onChange={inputChangeHandler} />
      <button type="submit" onClick={() => addNewTodo(input)}>
        add todo
      </button>
    </div>
  );
};

export default TodoForm;
