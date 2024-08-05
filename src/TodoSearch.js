import React, { useEffect } from "react";
import "./TodoSearch.css";

function TodoSearch({ todos, setTodos, originalTodos }) {
  const [searchValue, setSearchValue] = React.useState("");

  useEffect(() => {
    if (searchValue.length > 1) {
      filteredSearch(searchValue);
    } else {
      setTodos(originalTodos);
    }
  }, [searchValue, setTodos, originalTodos]);

  const filteredSearch = (searchValue) => {
    const filteredResult = todos.filter((todo) =>
      todo.text.toLowerCase().includes(searchValue.toLowerCase())
    );
    console.log('filteredResult >>', filteredResult);
    console.log('searchValue >>', searchValue);
    setTodos(filteredResult);
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
