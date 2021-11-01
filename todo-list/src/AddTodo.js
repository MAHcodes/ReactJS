function AddTodo({handleSubmit, value, setValue, handleSearch}) {
    return (
        <form className="container d-flex" onSubmit={handleSubmit}>
            <input type="text" required placeholder="Search, Add new Todo" className="flex-grow-1 rounded ps-2" value={value} onChange={e => setValue(e.target.value)}/>
            <input type="submit" className="btn btn-primary" value="Add"/>
        </form>
    )
}

export default AddTodo;