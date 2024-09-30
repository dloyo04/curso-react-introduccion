import React, { useEffect, useState } from "react";
import "./TodoSearch.css";

function TodoSearch({ todos, setFilteredTodos }) {
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    if (searchValue.length >= 2) {
      filteredSearch(searchValue);
    } else {
      setFilteredTodos(todos);
    }
  }, [searchValue, todos]);

  const filteredSearch = (searchValue) => {
    const filteredResult = todos.filter((todo) =>
      todo.text.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredTodos(filteredResult);
  };

  return (
      <input
        placeholder="Search Todo"
        className="TodoSearch"
        value={searchValue}
        onChange={(event) => {
          setSearchValue(event.target.value);
        }}
      />
  );
}

export { TodoSearch };
