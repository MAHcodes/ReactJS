import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Login from "./Login";
import Home from "./Home";
import Movie from "./Movie";

function App() {
  const [username, setUsername] = useState(localStorage.getItem("username") || "");
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" exact 
            element={<Home username={username} />} />
          <Route path="/login"
            element={<Login username={username} setUsername={setUsername} />}
          />
          <Route path="/:id"
            element={<Movie />}
          />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
