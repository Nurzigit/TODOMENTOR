import React from "react";
import Options from "./Options";
import Todo from "./Todo";

const TodosList = ({
  onPass,
  onDelete,
  onClear,
  onAll,
  onCompleted,
  onActive,
  onToggleDone,
  onChangeCount,
}) => {
  return (
    <>
      <div className="todos-list">
        {onPass.map((todo) => {
          return (
            <Todo
              passData={todo}
              key={todo.id}
              onDelete={onDelete}
              onToggleDone={onToggleDone}
            />
          );
        })}
        <Options
          onClear={onClear}
          onAll={onAll}
          onCompleted={onCompleted}
          onActive={onActive}
          onChangeCount={onChangeCount}
        />
      </div>
      {onPass.length > 1 && (
        <p className="order-message">Drag and drop to reorder list</p>
      )}
    </>
  );
};

export default TodosList;
