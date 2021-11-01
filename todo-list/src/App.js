import Header from "./Header";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";
import StatusBar from "./StatusBar";
import Footer from "./Footer";
import { useState, useEffect } from "react";

const App = () => {
  const [todos, setTodos] = useState( JSON.parse(localStorage.getItem("todos")) || [] );
  const [value, setValue] = useState("");
 
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])
  
  const handleDelete = id => {
    const newTodos = todos.filter(todo => todo.id !== Number(id));
    setTodos(newTodos);
  }

  const handleCheck = (id) => {
    const newTodos = todos.map(todo => todo.id === Number(id) ? {...todo, checked: !todo.checked} : todo);
    setTodos(newTodos);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodos = todos.concat({
      id: todos.length ? todos[todos.length - 1].id + 1 : 1,
      checked: false,
      title: e.target[0].value,
    });
    setTodos(newTodos);
    setValue("");
  }

  const handleEdit = e => {
    setValue(todos.find(todo => todo.id === Number(e)).title);
    handleDelete(e);
  }

  const handleSearch = text => {
    const filteredTodos =  todos.filter(todo => (todo.title).toLowerCase().includes(text.toLowerCase()));
    return filteredTodos;
  }

  return (
    <div className="vh-100 d-flex flex-column">
      <Header />
      <AddTodo 
        handleSubmit={handleSubmit}
        value={value}
        setValue={setValue}
        handleSearch={handleSearch}
      />
      <TodoList 
        todos={handleSearch(value)}
        setTodos={setTodos}
        handleDelete={handleDelete}
        handleCheck={handleCheck}
        handleEdit={handleEdit}
        value={value}
      />
      <StatusBar 
        length={todos.length}
      />
      <Footer />
    </div>
  );
}

export default App;