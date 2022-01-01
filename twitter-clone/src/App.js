import Sidebar from "./components/Sidebar";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import RightSidebar from "./components/RightSidebar";

function App() {
  return (
    <div className="container app">
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <RightSidebar />
    </div>
  );
}

export default App;
