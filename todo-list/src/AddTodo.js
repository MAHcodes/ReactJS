function AddTodo({handleSubmit}) {
    return (
        <form className="container d-flex" onSubmit={handleSubmit}>
            <input type="text" required placeholder="Add new Todo" className="flex-grow-1 rounded ps-2"/>
            <input type="submit" className="btn btn-primary" value="Add"/>
        </form>
    )
}

export default AddTodo;