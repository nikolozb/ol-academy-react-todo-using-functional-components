import React from "react";
import "./MoveTasks.styles.scss";

const MoveTasks = ({ id, todos, setTodos }) => {
  const onMoveHandler = (isUp) => {
    const currentElement = todos.find((item) => item.id === id);
    let indexOfCurrentElement = todos.indexOf(currentElement);
    let indexOfMovedElement = isUp
      ? indexOfCurrentElement - 1
      : indexOfCurrentElement + 1;
    if (indexOfMovedElement === -1) {
      return;
    } else {
      const newArray = todos.filter((item) => {
        return todos.indexOf(item) !== indexOfCurrentElement;
      });
      newArray.splice(indexOfMovedElement, 0, currentElement);
      setTodos(newArray);
    }
  };

  return (
    <div className="up-down-buttons">
      <span onClick={() => onMoveHandler(true)} className="arrow-btn up"></span>
      <span
        onClick={() => onMoveHandler(false)}
        className="arrow-btn down"
      ></span>
    </div>
  );
};

export default MoveTasks;
