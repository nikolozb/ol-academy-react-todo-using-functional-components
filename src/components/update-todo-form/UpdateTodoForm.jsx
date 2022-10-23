import React, { useState } from "react";
import "./UpdateTodoForm.styles.scss";

const UpdateTodoForm = ({ updateHandler }) => {
  const [input, setInput] = useState("");

  const inputChangeHandler = (event) => {
    setInput(event.target.value);
  };

  const onUpdateClickHandler = () => {
    if (!input) return;
    setInput("");
    updateHandler(input);
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
        onClick={onUpdateClickHandler}
        className="btn update-todo__button"
      >
        update
      </button>
    </div>
  );
};

export default UpdateTodoForm;
