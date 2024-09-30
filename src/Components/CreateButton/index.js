import { TodoContext } from '../../hooks/TodoContext';
import './CreateTodoButton.css';
import React from 'react';

function CreateTodoButton() {
  const {setOpenModal, openModal} = React.useContext(TodoContext)
  return (
  <button 
    className="CreateTodoButton" 
    onClick={() => { setOpenModal(!openModal)
    }
  }>
    +
  </button>
  );
}

export { CreateTodoButton };
