import React from "react";
import { TodoContext } from "../hooks/TodoContext";
import { EmptyTodos } from "../Components/EmptyTodos";
import { TodoCounter } from "../Components/TodoCounter";
import { TodoSearch } from "../Components/TodoSearch";
import { ErrorTodos } from "../Components/ErrorTodos";
import { LoaderTodos } from "../Components/LoaderTodos";
import { CreateTodoButton } from "../Components/CreateButton";
import { TodoItem } from "../Components/TodoItem";
import { TodoList } from "../Components/TodoList";
import { Modal } from "../Components/Modal";
import "./App.css"
import { TodoForm } from "../Components/TodoForm/TodoForm";

function AppUI() {
  const { todos, filteredTodos, setFilteredTodos, saveTodos, loading, error, openModal} =
    React.useContext(TodoContext);
  return (
    <div>
      <div className="appContainer">
            <>
              <TodoCounter todos={todos} />
              <TodoSearch todos={todos} setFilteredTodos={setFilteredTodos} />

              <TodoList>
                {loading ? (
                  <>
                    <LoaderTodos />
                    <LoaderTodos />
                    <LoaderTodos />
                    <LoaderTodos />
                  </>
                ) : (
                  filteredTodos.map((todo) => (
                    <TodoItem
                      key={todo.text}
                      text={todo.text}
                      completed={todo.completed}
                      todos={todos}
                      saveTodos={saveTodos}
                    />
                  ))
                )}
                {error ? <ErrorTodos /> : null}
                {!loading && filteredTodos.length === 0 ? <EmptyTodos /> : null}
              </TodoList>
              <CreateTodoButton />
                {openModal && (
              <Modal>
                  <TodoForm></TodoForm>
              </Modal>
                )}
            </>
      </div>
    </div>
  );
}

export { AppUI };
