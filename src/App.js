import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import "./App.css";

const defaultTodos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar el Curso de Intro a React.js', completed: false },
  { text: 'Llorar con la Llorona', completed: false },
  { text: 'LALALALALA', completed: false },
];

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);

  return (
    <div className='appContainer'>
      <TodoCounter todos={todos}/>
      <TodoSearch todos={todos} originalTodos={defaultTodos} setTodos={setTodos} />

      <TodoList>
        {todos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            todos={todos}
            setTodos={setTodos}
          />
        ))}
      </TodoList>
      
      <CreateTodoButton />
    </div>
  );
}

export default App;
