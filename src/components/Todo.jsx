import React from "react";
import cross from "../images/icon-cross.svg";
import check from "../images/icon-check.svg";

const Todo = ({ passData, onDelete, onToggleDone }) => {
  const { id, text, completed } = passData;
  return (
    <div className="todo">
      <div className="left">
        <span
          onClick={() => {
            onToggleDone(id);
          }}
        ></span>
        {completed ? <s> {text} </s> : <p> {text} </p>}
      </div>
      <span>
        <img
          src={cross}
          alt="delete"
          onClick={() => {
            onDelete(id);
          }}
        />
      </span>
    </div>
  );
};

export default Todo;
