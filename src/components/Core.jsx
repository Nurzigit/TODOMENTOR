import React from "react";
import Head from "./Head";
import TodosList from "./TodosList";

const Core = () => {
  return (
    <div className="core">
      <Head />
      <TodosList />
    </div>
  );
};

export default Core;
