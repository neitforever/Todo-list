import React from "react";
import "./Todo.css";

const InputWithButton = ({ name, onChange, onAddTodo }) => {
  return (
    <div className="list-add">
      <input className="list-input" value={name} onChange={onChange} />
      <button className="list-button" onClick={onAddTodo}>
        Add new todo
      </button>
    </div>
  );
};

export default InputWithButton;
