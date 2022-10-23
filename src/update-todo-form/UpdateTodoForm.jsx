import React, { useState } from "react";
import "./UpdateTodoForm.styles.scss";

const UpdateTodoForm = ({ updateHandler }) => {
  const [input, setInput] = useState("");

  const inputChangeHandler = (event) => {
    setInput(event.target.value);
  };

  return (
    <div>
      <input type="text" value={input} onChange={inputChangeHandler} />
      <button type="submit" onClick={() => updateHandler(input)}>
        update
      </button>
    </div>
  );
};

export default UpdateTodoForm;
