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
}) => {
  return (
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
      />{" "}
      {/* this should be a list item, if the list isn't empty*/}
    </div>
  );
};

export default TodosList;
