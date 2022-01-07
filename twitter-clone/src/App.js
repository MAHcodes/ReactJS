import LeftSidebar from "./components/LeftSidebar";
import RightSidebar from "./components/RightSidebar";
import Feed from "./components/Feed";
import SignUp from "./routes/SignUp";
import { UserContext } from "./hooks/UserContext";
import { useContext } from "react";

function App() {
  const { user } = useContext(UserContext);

  return (
    <>
      {!user ? (
        <SignUp />
      ) : (
        <div className="container app">
          <LeftSidebar />
          <Feed />
          <RightSidebar />
        </div>
      )}
    </>
  );
}

export default App;
