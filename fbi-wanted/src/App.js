import Header from "./components/Header";
import CardRow from "./components/CardRow";
import { Route, Routes } from "react-router-dom";
import Wanted from "./components/Wanted";
import { useState } from "react";

function App() {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <CardRow
              setSearch={setSearch}
              setPage={setPage}
              page={page}
              search={search}
            />
          }
        />
        <Route path="wanted/:uid" element={<Wanted />} />
      </Routes>
    </div>
  );
}

export default App;
