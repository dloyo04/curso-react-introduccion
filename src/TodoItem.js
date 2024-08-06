import './TodoItem.css';

function TodoItem(props) {
  const toggleCompletedTodo = () => {
    const updatedTodos = props.todos.map(todo => {
      if (todo.text === props.text) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    props.setTodos(updatedTodos);
  };
  const toggleDeletedTodo = () => {
    const updatedTodos = props.todos.filter((todo) => todo.text !== props.text);
    props.setTodos(updatedTodos);
  };

  return (
    <li className="TodoItem">
      <span 
        className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
        onClick={toggleCompletedTodo}
      >
        V
      </span>
      <p 
        className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}
      >
        {props.text}
      </p>
      <span className="Icon Icon-delete" onClick={toggleDeletedTodo}>
        X
      </span>
    </li>
  );
}

export { TodoItem };
