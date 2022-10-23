import React, { useState } from "react";
import ControlAllTodos from "../control-all-todos/ControlAllTodos";
import TodoForm from "../todo-form/TodoForm";
import TodoItem from "../todo-item/TodoItem";
import UpdateTodoForm from "../update-todo-form/UpdateTodoForm";
import "./Todo.styles.scss";

const data = [
  { id: 1, title: "task1", isDone: false },
  { id: 2, title: "task2", isDone: false },
  { id: 3, title: "task3", isDone: false },
  { id: 4, title: "task4", isDone: false },
];

const Todo = () => {
  const [todos, setTodos] = useState(data);
  const [currentItem, setCurrentItem] = useState(null);
  const [showUpdateForm, setShowUpdateForm] = useState(false);

  const addNewTodo = (title) => {
    setTodos((prevState) => [
      ...prevState,
      {
        id: Math.round(Math.random() * 1000),
        title: title.trim(),
      },
    ]);
  };

  const deleteHandler = (todoId) => {
    setTodos(todos.filter(({ id }) => id !== todoId));
  };

  const editHandler = (id) => {
    setCurrentItem(id);
    setShowUpdateForm(true);
  };

  const doneHandler = (todoId) => {
    const item = todos.find(({ id }) => id === todoId);
    item.isDone = true;
  };

  const updateHandler = (title) => {
    const item = todos.find(({ id }) => id === currentItem);
    item.title = title.trim();
    setShowUpdateForm(false);
  };

  const deleteAllTodosHandler = () => {
    setTodos([]);
  };

  const deleteCompletedTodosHandler = () => {
    setTodos(todos.filter(({ isDone }) => isDone === false));
  };

  const deleteIncompleteTodosHandler = () => {
    setTodos(todos.filter(({ isDone }) => isDone === true));
  };

  return (
    <div className="todo">
      <div className="todo__container">
        {/* form */}
        <TodoForm addNewTodo={addNewTodo} />
        {/* controlling all todos */}
        <ControlAllTodos
          deleteAllTodosHandler={deleteAllTodosHandler}
          deleteCompletedTodosHandler={deleteCompletedTodosHandler}
          deleteIncompleteTodosHandler={deleteIncompleteTodosHandler}
        />
      </div>
      {/* update todo */}
      {showUpdateForm ? <UpdateTodoForm updateHandler={updateHandler} /> : null}
      {/* list */}
      <div className="todo__list">
        {" "}
        {todos.length > 0 ? (
          todos.map(({ id, title }) => {
            return (
              <TodoItem
                key={id}
                id={id}
                title={title}
                deleteHandler={deleteHandler}
                editHandler={editHandler}
                doneHandler={doneHandler}
              />
            );
          })
        ) : (
          <h1 className="todo__empty">No Todos</h1>
        )}
      </div>
    </div>
  );
};

export default Todo;
