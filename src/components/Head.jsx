import React from "react";
import sun from "../images/icon-sun.svg";
import moon from "../images/icon-moon.svg";

const Head = () => {
  return (
    <header>
      <div className="top">
        <p>TODO</p>
        <span>
          <img src={sun} alt="mode-type" />
        </span>
      </div>
      <div className="bottom">
        <form action="">
          <input type="text" aria-label="Enter a todo" />
        </form>
      </div>
    </header>
  );
};

export default Head;
