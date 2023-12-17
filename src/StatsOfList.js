import React from "react";
import "./Todo.css";

const StatsofList = ({ todos }) => {
  const doneCount = todos.filter((todo) => todo.done).length;
  const todosCount = todos.length;
  const undoneCount = todos.filter((todo) => !todo.done).length;
  return (
    <div className="list-count">
      <span>All: {todosCount}</span>
      <span>Done: {doneCount}</span>
      <span>Left: {undoneCount}</span>
    </div>
  );
};

export default StatsofList;
