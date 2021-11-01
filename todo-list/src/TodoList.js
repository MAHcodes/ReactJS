import TodoItem from "./TodoItem";

function TodoList({todos, setTodos, handleDelete, handleCheck, handleEdit, value}) {
    return (
        todos.length ? (
            <ul className="container list-unstyled d-flex flex-column">
            {todos.map(todo => {
                return <TodoItem 
                    key={todo.id}
                    todo={todo}
                    setTodos={setTodos}
                    handleDelete={handleDelete}
                    handleCheck={handleCheck}
                    handleEdit={handleEdit}
                />
            })}
            </ul>

       ) : (
           <h2 className="text-center text-muted my-auto">No Todos!{value ? ` Add ${value}` : ""}</h2>
       )
    )
}

export default TodoList
