import React from "react";

const Options = ({ onClear, onAll, onCompleted, onActive }) => {
  return (
    <>
      <div className="desktop-opt hide-in-mobile">
        <p>5 items left</p>
        <div className="categ">
          <button
            onClick={() => {
              onAll();
            }}
          >
            All
          </button>
          <button onClick={() => onActive()}>Active</button>
          <button
            onClick={() => {
              onCompleted();
            }}
          >
            Completed
          </button>
        </div>
        <button
          onClick={() => {
            onClear();
          }}
        >
          Clear Completed
        </button>
      </div>
      <div className="mobile-opt hide-in-desktop">
        <div className="attached">
          <p>5 items left</p>
          <button
            onClick={() => {
              onClear();
            }}
          >
            Clear Completed
          </button>
        </div>
        <div className="deattached">
          <button
            onClick={() => {
              onAll();
            }}
          >
            All
          </button>
          <button onClick={() => onActive()}>Active</button>
          <button
            onClick={() => {
              onCompleted();
            }}
          >
            Completed
          </button>
        </div>
      </div>
    </>
  );
};

export default Options;
