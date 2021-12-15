import Header from "./Header";
import CardRow from "./components/CardRow";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Wanted from "./components/Wanted";

function App() {
  const [wanted, setWanted] = useState("");

  useEffect(() => {
    console.log(wanted);
  }, [wanted]);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<CardRow setWanted={setWanted} />} />
        <Route path="wanted/:id" element={<Wanted />} />
      </Routes>
    </div>
  );
}

export default App;
