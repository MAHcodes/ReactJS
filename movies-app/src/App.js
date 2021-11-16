import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Profile from "./routes/Profile";
import Home from "./routes/Home";
import Movie from "./routes/Movie";
import People from "./routes/People";
import Search from "./routes/Search";

function App() {
  const [username, setUsername] = useState(
    JSON.parse(localStorage.getItem("username")) || ""
  );

  const [avatarType, setAvatarType] = useState(
    JSON.parse(localStorage.getItem("avatarType")) || "adventurer-neutral"
  );
  const handleType = (e) => {
    setAvatarType(e.target.value);
    localStorage.setItem("avatarType", JSON.stringify(e.target.value));
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          exact
          element={<Home username={username} avatarType={avatarType} />}
        />
        <Route
          path="/profile"
          element={
            <Profile
              username={username}
              setUsername={setUsername}
              handleType={handleType}
              avatarType={avatarType}
            />
          }
        />
        <Route
          path="/:id"
          element={<Movie username={username} avatarType={avatarType} />}
        />
        <Route
          path="/people/:id"
          element={<People username={username} avatarType={avatarType} />}
        />
        <Route
          path="/search/:title"
          element={<Search username={username} avatarType={avatarType} />}
        />
        <Route
          path="/all/:category"
          element={<Search username={username} avatarType={avatarType} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
