import React, { useState } from "react";
import Head from "./Head";
import TodosList from "./TodosList";

const Core = () => {
  const dummData = [
    {
      text: "A random task",
      completed: false,
    },
    {
      text: "Kill the queen",
      completed: false,
    },
    {
      text: "You're a heathen",
      completed: true,
    },
    {
      text: "And you're a virgin",
      completed: false,
    },
    {
      text: "Not on gnat's dick",
      completed: false,
    },
    {
      text: "The sun is rising from young odda's asshole and it is BLINDINGG",
      completed: false,
    },
  ];

  const [todoText, setTodoText] = useState("");

  const makeTodo = (val) => {
    val.trim() ? setTodoText(val) : alert("Please enter something");
  };

  return (
    <div className="core">
      <Head onMake={makeTodo} />
      <TodosList onPass={dummData} onRPass={todoText} />
    </div>
  );
};

export default Core;
