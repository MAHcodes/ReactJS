import Header from "./components/Header";
import CardRow from "./components/CardRow";
import {Route, Routes} from "react-router-dom";
import Wanted from "./components/Wanted";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<CardRow />} />
        <Route path="wanted/:uid" element={<Wanted />} />
      </Routes>
    </div>
  );
}

export default App;
