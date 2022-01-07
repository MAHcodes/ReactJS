import LeftSidebar from "./components/LeftSidebar";
import RightSidebar from "./components/RightSidebar";
import Feed from "./components/Feed";
import SignUp from "./routes/SignUp";
import { UserContext } from "./hooks/UserContext";
import { useContext } from "react";
import { useEffect } from "react";

function App() {
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    localStorage.getItem("twitter-clone") &&
      setUser(JSON.parse(localStorage.getItem("twitter-clone")));
  }, [setUser]);

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
