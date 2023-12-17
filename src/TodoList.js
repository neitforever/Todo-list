import React, { useState, useCallback } from "react";
import "./Todo.css";
import List from "./List";
import StatsOfList from "./StatsOfList";
import InputWithButton from "./InputWithButton";
import SortButtons from "./SortButtons";
import IncompleteFilter from "./IncompleteFilter";

const TodoList = () => {
  const [name, setName] = useState("");
  const [todos, setTodos] = useState([]);
  const [filterOnlyIncomplete, setFilterOnlyIncomplete] = useState(false);
  const [sortOption, setSortOption] = useState("newest");
  const handleSetName = (e) => {
    setName(e.target.value);
  };

  const handleSetDone = useCallback((done, id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => (todo.id === id ? { ...todo, done } : todo))
    );
  }, []);

  const handleAddTodo = useCallback(() => {
    const trimmedName = name.trim();
    if (trimmedName === "") {
      return;
    }
    const todo = {
      id: Date.now(),
      name: trimmedName,
      done: false,
      createdAt: new Date().toLocaleString(),
    };
    setName("");
    setTodos((prevTodos) => [...prevTodos, todo]);
  }, [name]);

  const handleDelete = useCallback((id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  }, []);

  const handleFilterChange = (e) => {
    setFilterOnlyIncomplete(e.target.checked);
  };

  const handleSortChange = (option) => {
    setSortOption(option);
  };

  const sortedTodos = () => {
    if (sortOption === "alphabetical") {
      return [...todos].sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOption === "newest") {
      return [...todos].sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
    } else if (sortOption === "oldest") {
      return [...todos].sort(
        (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
      );
    } else {
      return todos;
    }
  };

  const filteredTodos = filterOnlyIncomplete
    ? sortedTodos().filter((todo) => !todo.done)
    : sortedTodos();

  return (
    <div className="container">
      <div>
        <StatsOfList todos={todos} />
      </div>
      <div>
        <InputWithButton
          name={name}
          onChange={handleSetName}
          onAddTodo={handleAddTodo}
        />
      </div>
      <div>
        <IncompleteFilter
          filterOnlyIncomplete={filterOnlyIncomplete}
          handleFilterChange={handleFilterChange}
        />
      </div>
      <div>
        <SortButtons activeSort={sortOption} onSortChange={handleSortChange} />
      </div>
      <div className="list-container">
        {filteredTodos.map((el) => (
          <div className="list-item" key={el.id}>
            <List
              id={el.id}
              name={el.name}
              done={el.done}
              onDone={handleSetDone}
              onDelete={handleDelete}
              createdAt={el.createdAt}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
