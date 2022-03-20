import React from "react";

const Options = () => {
  return (
    <div>
      <p>5 items left</p>
      <div className="categ">
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>
      </div>
      <button>Clear Completed</button>
    </div>
  );
};

export default Options;
