import React from "react";
import "./Todo.css";

const IncompleteFilter = ({ filterOnlyIncomplete, handleFilterChange }) => {
  return (
    <div className="incompleteFilter">
      <input
        type="checkbox"
        checked={filterOnlyIncomplete}
        onChange={handleFilterChange}
      />
      <span>Фильтровать по невыполненным</span>
    </div>
  );
};

export default IncompleteFilter;
