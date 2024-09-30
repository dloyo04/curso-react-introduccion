import "./TodoForm.css"
import { TodoContext } from "../../hooks/TodoContext"
import React from "react"
function TodoForm() {
    const {setOpenModal, addTodos} = React.useContext(TodoContext)
    const onCancel = () => setOpenModal(false)
    //const onAdd = addTodos(Event.target.value)

    return(
        <form onSubmit={ event => {
            event.preventDefault()
            const newTodo = event.target.elements[0].value;
            addTodos(newTodo);
            setOpenModal(false)
            }}>
            <label>introduce your new to do</label>
            <textarea placeholder="introduce to do here" required />
        <div className="TodoForm-buttonContainer">
            <button type="button" onClick={onCancel} className="TodoForm-button TodoForm-button--cancel">
                Cancel
            </button>
            <button type="submit" className="TodoForm-button TodoForm-button--add">
                Add
            </button>
        </div>
        </form>
    )
}

export {TodoForm}