import React, { useState } from "react";
import sun from "../../images/icon-sun.svg";
import moon from "../../images/icon-moon.svg";

export const Head = ({ onMake, theme, toggleTheme }) => {
  const [todoText, setTodoText] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    onMake(todoText);
    setTodoText("");
  };

  return (
    <header>
      <div className="top">
        <p>TODO</p>
        <span>
          <img
            src={theme === 'light' ? moon : sun}
            alt="mode-type"
            onClick={() => toggleTheme()}
          />
        </span>
      </div>
      <div className="bottom">
        <form action="" onSubmit={onSubmit}>
          <input
            type="text"
            aria-label="Enter a todo"
            placeholder="Create a new todo..."
            value={todoText}
            onChange={(event) => {
              setTodoText(event.target.value);
            }}
          />
        </form>
      </div>
    </header>
  );
};


