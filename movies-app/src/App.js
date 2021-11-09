import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Profile from "./Profile";
import Home from "./Home";
import Movie from "./Movie";

function App() {
  const [username, setUsername] = useState(localStorage.getItem("username") || "");

  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" exact 
            element={<Home 
              username={username}
            />} />
          <Route path="/profile"
            element={<Profile username={username} setUsername={setUsername} />}
          />
          <Route path="/:id"
            element={<Movie />}
          />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
