import React from "react";
import { UseLocalStorage } from "./UseLocalStorage";
const TodoContext = React.createContext();

function TodoProvider({children}) {
  const {
    element: todos,
    saveElements: saveTodos,
    loading,
    error,
  } = UseLocalStorage("TODOS_V1",[]);
  // Inicializar filteredTodos como un array vacío
  const [filteredTodos, setFilteredTodos] = React.useState(todos || []);
  const [openModal, setOpenModal] = React.useState(false)
  const addTodos = function(todoName) {
      const newTodos = [...todos, {text:todoName,complete:false,}]
      saveTodos(newTodos)
  }
    return (
        <TodoContext.Provider value={{
            todos,
            loading,
            saveTodos,
            error,
            addTodos,
            filteredTodos,
            setFilteredTodos,
            openModal,
            setOpenModal
        }}>
            {children}
        </TodoContext.Provider>
    );
}

export { TodoContext, TodoProvider };