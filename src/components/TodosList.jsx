import React from "react";
import Options from "./Options";
import Todo from "./Todo";

const TodosList = ({ onPass, onRPass }) => {
  return (
    <div className="todos-list">
      {onPass.map((todo) => {
        return <Todo passData={todo} />;
      })}
      <Options /> {/* this should be a list item, if the list isn't empty*/}
    </div>
  );
};

export default TodosList;
