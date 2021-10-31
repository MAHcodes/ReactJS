import TodoItem from "./TodoItem";

function TodoList({todos, setTodos, handleDelete, handleCheck}) {
    return (
        todos.length ? (
            <ul className="container list-unstyled">
            {todos.map(todo => {
                return <TodoItem 
                    key={todo.id}
                    todo={todo}
                    setTodos={setTodos}
                    handleDelete={handleDelete}
                    handleCheck={handleCheck}
                />
            })}
            </ul>

       ) : (
           <h2 className="text-center text-muted my-auto">No Todos!</h2>
       )
    )
}

export default TodoList
