import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import { useState } from "react";

function App() {
  const [username, setUsername] = useState(localStorage.getItem("username") || "");
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" exact element={<Home username={username} />} />
          <Route
            path="/login"
            element={<Login username={username} setUsername={setUsername} />}
          />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
