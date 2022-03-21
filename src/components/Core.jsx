import React, { useState } from "react";
import Head from "./Head";
import TodosList from "./TodosList";
import data from "../data.json";
const Core = () => {
  const [todos, setTodos] = useState(data);
  const makeTodo = (val) => {
    if (val.trim()) setTodos([...todos, { text: val, completed: false }]);
    else alert("Please write something");

    console.log(todos);
  };
  return (
    <div className="core">
      <Head onMake={makeTodo} />
      <TodosList onPass={todos} />
    </div>
  );
};

export default Core;
