import "./TodoCounter.css";

function TodoCounter({ todos }) {
  const completedTodos = todos.filter((todo) => todo.completed).length;
  const totalTodos = todos.length;
  return completedTodos === totalTodos ? (
    <h1 className="TodoCounter">
      Has completado todos los TODOs <span>{completedTodos}</span> de{" "}
      <span>{totalTodos}</span>, Felicidades!
    </h1>
  ) : (
    <h1 className="TodoCounter">
      Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span>{" "}
      TODOs
    </h1>
  );
}

export { TodoCounter };