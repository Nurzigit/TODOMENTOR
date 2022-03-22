import React, { useState } from "react";
import Head from "./Head";
import TodosList from "./TodosList";
import data from "../data.json";
const Core = () => {
  const [todos, setTodos] = useState(data);
  const makeTodo = (val) => {
    if (val.trim())
      setTodos([
        ...todos,
        { id: Math.floor(Math.random() * 10000), text: val, completed: false },
      ]);
    else alert("Please write something");

    console.log(todos);
  };
  const deleteTodo = (id) => {
    console.log(id);
    const newTodos = todos.filter((curr) => {
      return curr.id !== id;
    });
    setTodos(newTodos);
  };
  const showAll = () => {
    setTodos(data);
  };

  const showCompleted = () => {
    setTodos(
      todos.filter((todo) => {
        return todo.completed === true;
      })
    );
  };

  const showActive = () => {
    setTodos(
      todos.filter((todo) => {
        return todo.completed === false;
      })
    );
  };

  const clearCompleted = () => {
    setTodos(
      todos.filter((todo) => {
        return todo.completed === false;
      })
    );
  };

  return (
    <div className="core">
      <Head onMake={makeTodo} />
      <TodosList
        onPass={todos}
        onDelete={deleteTodo}
        onClear={clearCompleted}
        onAll={showAll}
        onCompleted={showCompleted}
        onActive={showActive}
      />
    </div>
  );
};

export default Core;
