import React from "react";
import cross from "../images/icon-cross.svg";
import check from "../images/icon-check.svg";

const Todo = () => {
  return (
    <div className="todo">
      <div className="left">
        <span></span>
        <p>Jog around the park</p>
      </div>
      <span>
        <img src={cross} alt="delete" />
      </span>
    </div>
  );
};

export default Todo;
