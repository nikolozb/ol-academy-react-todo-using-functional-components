import React from "react";
import "./ErrorMessage.styles.scss";

const ErrorMessage = () => {
  return (
    <div className="error-message">
      <span className="error-message__title">
        Todo with the same name already exists
      </span>
    </div>
  );
};

export default ErrorMessage;
