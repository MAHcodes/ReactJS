import Header from "./Header";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";
import StatusBar from "./StatusBar";
import Footer from "./Footer";
import { useState } from "react";

const App = () => {
  const [todos, setTodos] = useState( localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : [] );
 
  const updateAndSaveTodos = newTodos => {
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  }

  const handleDelete = id => {
    const newTodos = todos.filter(todo => todo.id !== Number(id));
    updateAndSaveTodos(newTodos);
  }

  const handleCheck = (id) => {
    const newTodos = todos.map(todo => todo.id === Number(id) ? {...todo, checked: !todo.checked} : todo);
    updateAndSaveTodos(newTodos);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodos = todos.concat({
      id: todos.length ? todos[todos.length - 1].id + 1 : 1,
      checked: false,
      title: e.target[0].value,
    });
    updateAndSaveTodos(newTodos);
    e.target[0].value = "";
  }

  return (
    <div className="vh-100 d-flex flex-column">
      <Header />
      <AddTodo 
        handleSubmit={handleSubmit}
      />
      <TodoList 
        todos={todos}
        setTodos={setTodos}
        handleDelete={handleDelete}
        handleCheck={handleCheck}
      />
      <StatusBar 
        length={todos.length}
      />
      <Footer />
    </div>
  );
}

export default App;
