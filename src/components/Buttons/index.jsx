import React from "react";

export const Buttons = ({ onClear, onAll, onCompleted, onActive, onChangeCount }) => {
  return (
    <>
      <div className="desktop-opt hide-in-mobile">
        <p>{`${onChangeCount} item(s) left`}</p>
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
          <p> {`${onChangeCount} item(s) left`} </p>
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


