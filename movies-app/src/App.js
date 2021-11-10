import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Profile from "./routes/Profile";
import Home from "./routes/Home";
import Movie from "./routes/Movie";

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
            element={<Movie username={username} />}
          />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
