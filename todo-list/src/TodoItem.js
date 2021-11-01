import './TodoItem.css';

function TodoItem({ todo, handleDelete, handleCheck, handleEdit}) {
    return (
        <li className="rounded d-flex justify-content-between align-items-center border border-secondary bg-light mt-2 ps-2" style={{order: +todo.checked}} >
            <input type="checkbox" id={todo.id} onChange={() => handleCheck(todo.id)} checked={todo.checked}/>
            <label htmlFor={todo.id} className="my-auto me-auto ms-3" style={(todo.checked) ? {textDecoration: "line-through"} : null}>{todo.title}</label>
            <button className="btn border border-secondary text-black" onClick={() => handleEdit(todo.id)}>Edit</button>
            <button className="btn btn-danger" onClick={() => handleDelete(todo.id)}>Delete</button>
        </li>
    )
}

export default TodoItem;
