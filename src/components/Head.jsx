import React, { useState } from "react";
import sun from "../images/icon-sun.svg";
import moon from "../images/icon-moon.svg";

const Head = ({ onMake }) => {
  const [text, setText] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    onMake(text);
    setText("");
  };

  return (
    <header>
      <div className="top">
        <p>TODO</p>
        <span>
          <img src={sun} alt="mode-type" />
        </span>
      </div>
      <div className="bottom">
        <form action="" onSubmit={(e) => onSubmit(e)}>
          <input
            type="text"
            aria-label="Enter a todo"
            placeholder="Create a new todo..."
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
        </form>
      </div>
    </header>
  );
};

export default Head;
