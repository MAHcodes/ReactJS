import Header from "./components/Header";
import CardRow from "./components/CardRow";
import {useState} from "react";
import {Route, Routes} from "react-router-dom";
import Wanted from "./components/Wanted";

function App() {
  const [wanted, setWanted] = useState("");

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<CardRow setWanted={setWanted} />} />
        <Route path="wanted/:name" element={<Wanted api={wanted} />} />
      </Routes>
    </div>
  );
}

export default App;
