import React from "react";
import Options from "./Options";
import Todo from "./Todo";

const TodosList = () => {
  return (
    <div className="todos-list">
      <Todo />
      <Options /> {/* this should be a list item, if the list isn't empty*/}
    </div>
  );
};

export default TodosList;
