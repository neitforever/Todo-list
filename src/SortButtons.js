import React, { useState } from "react";
import "./Todo.css";

const SortButtons = ({ onSortChange }) => {
  const [activeSort, setActiveSort] = useState("newest");

  const handleSortChange = (sortType) => {
    setActiveSort(sortType);
    onSortChange(sortType);
  };

  return (
    <div className="sort-buttons">
      <button
        className={activeSort === "newest" ? "active" : ""}
        onClick={() => handleSortChange("newest")}
      >
        Сначала новые
      </button>
      <button
        className={activeSort === "oldest" ? "active" : ""}
        onClick={() => handleSortChange("oldest")}
      >
        Сначала старые
      </button>
      <button
        className={activeSort === "alphabetical" ? "active" : ""}
        onClick={() => handleSortChange("alphabetical")}
      >
        По алфавиту
      </button>
    </div>
  );
};

export default SortButtons;
