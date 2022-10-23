import React, { useState } from "react";
import "./UpdateTodoForm.styles.scss";

const UpdateTodoForm = ({ updateHandler }) => {
  const [input, setInput] = useState("");

  const inputChangeHandler = (event) => {
    setInput(event.target.value);
  };

  return (
    <div className="update-todo">
      <input
        type="text"
        value={input}
        onChange={inputChangeHandler}
        className="update-todo__input"
      />
      <button
        type="submit"
        onClick={() => updateHandler(input)}
        className="btn update-todo__button"
      >
        update
      </button>
    </div>
  );
};

export default UpdateTodoForm;
