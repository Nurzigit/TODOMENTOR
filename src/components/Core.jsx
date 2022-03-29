import React, { useEffect, useState } from "react";
import Head from "./Head";
import TodosList from "./TodosList";
import data from "../data.json";

const Core = ({ onChangeTheme }) => {
  const [todos, setTodos] = useState(data);
  const [todosCount, setTodosCount] = useState(
    todos.filter((todo) => !todo.completed && todo).length
  );

  useEffect(() => {
    setTodosCount(todos.filter((todo) => !todo.completed && todo).length);
  }, [todos]);

  const makeTodo = (val) => {
    if (val.trim())
      setTodos([
        ...todos,
        { id: Math.floor(Math.random() * 10000), text: val, completed: false },
      ]);
    else alert("Please write something");
  };

  const deleteTodo = (id) => {
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

  const toggleDone = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
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
      <Head onMake={makeTodo} onChangeTheme={onChangeTheme} />
      <TodosList
        onPass={todos}
        onDelete={deleteTodo}
        onClear={clearCompleted}
        onAll={showAll}
        onCompleted={showCompleted}
        onActive={showActive}
        onToggleDone={toggleDone}
        onChangeCount={todosCount}
      />
    </div>
  );
};

export default Core;
