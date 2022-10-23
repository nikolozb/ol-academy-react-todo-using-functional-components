import React from "react";
import "./MoveTasks.styles.scss";

const MoveTasks = ({ id, todos, setTodos }) => {
  const onMoveUpHandler = () => {
    const currentElement = todos.find((item) => item.id === id);
    const indexOfCurrentElement = todos.indexOf(currentElement);
    const indexOfMovedElement = indexOfCurrentElement - 1;
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
  // move down
  const onMoveDownHandler = () => {
    const currentElement = todos.find((item) => item.id === id);
    const indexOfCurrentElement = todos.indexOf(currentElement);
    const indexOfMovedElement = indexOfCurrentElement + 1;
    const newArray = todos.filter((item) => {
      return todos.indexOf(item) !== indexOfCurrentElement;
    });
    newArray.splice(indexOfMovedElement, 0, currentElement);
    setTodos(newArray);
  };

  return (
    <div className="up-down-buttons">
      <span onClick={onMoveUpHandler} className="arrow-btn up"></span>
      <span onClick={onMoveDownHandler} className="arrow-btn down"></span>
    </div>
  );
};

export default MoveTasks;
