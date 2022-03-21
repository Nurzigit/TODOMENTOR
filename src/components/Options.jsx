import React from "react";

const Options = () => {
  return (
    <>
      <div className="desktop-opt hide-in-mobile">
        <p>5 items left</p>
        <div className="categ">
          <button>All</button>
          <button>Active</button>
          <button>Completed</button>
        </div>
        <button>Clear Completed</button>
      </div>
      <div className="mobile-opt hide-in-desktop">
        <div className="attached">
          <p>5 items left</p>
          <button>Clear Completed</button>
        </div>
        <div className="deattached">
          <button>All</button>
          <button>Active</button>
          <button>Completed</button>
        </div>
      </div>
    </>
  );
};

export default Options;
