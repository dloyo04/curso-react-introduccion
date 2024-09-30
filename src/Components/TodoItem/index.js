import './TodoItem.css';
import { DeleteIcon } from "../DeleteIcon";
import { CompleteIcon } from "../CompleteIcon";

function TodoItem(props) {

  const toggleCompletedTodo = () => {
    const updatedTodos = props.todos.map(todo => {
      if (todo.text === props.text) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    props.saveTodos(updatedTodos);
  };

  const toggleDeletedTodo = () => {
    const updatedTodos = props.todos.filter(todo => todo.text !== props.text);
    props.saveTodos(updatedTodos);
  };

  return (
    <li className="TodoItem">
      <div>
        <CompleteIcon
          className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
          onClick={toggleCompletedTodo}
        />
      </div>
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>
      <div>
        <DeleteIcon className="Icon Icon-delete" onClick={toggleDeletedTodo} />
      </div>
    </li>
  );
}

export { TodoItem };
