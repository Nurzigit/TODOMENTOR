import React from "react";
import cross from "../images/icon-cross.svg";
import check from "../images/icon-check.svg";

const Todo = ({ passData, onDelete }) => {
  return (
    <div className="todo">
      <div className="left">
        <span></span>
        {passData.completed ? (
          <s> {passData.text} </s>
        ) : (
          <p> {passData.text} </p>
        )}
      </div>
      <span>
        <img
          src={cross}
          alt="delete"
          onClick={() => {
            onDelete(passData.id);
          }}
        />
      </span>
    </div>
  );
};

export default Todo;
