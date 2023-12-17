import React from "react";
import "./Todo.css";

const List = ({ done, name, id, createdAt, onDone, onDelete }) => {
  const handleCheck = (e) => {
    const done = e.target.checked;
    onDone(done, id);
  };

  const handleDel = () => {
    onDelete(id);
  };
  return (
    <div className="list-component">
      <input
        className="list-checkbox"
        type="checkbox"
        checked={done}
        onChange={handleCheck}
      />
      <div className="list-name">{name}</div>
      <span className="list-created-at">{createdAt}</span>
      <button className="del-button" onClick={handleDel}>
        Delete
      </button>
    </div>
  );
};

export default List;
