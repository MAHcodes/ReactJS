import LeftSidebar from "./components/LeftSidebar";
import RightSidebar from "./components/RightSidebar";
import Feed from "./components/Feed";
import SignUp from "./routes/SignUp";
import { UserContext } from "./hooks/UserContext";
import { useMemo, useState } from "react";

function App() {
  const [user, setUser] = useState("");

  const userValue = useMemo(() => ({ user, setUser }), [user, setUser]);

  return (
    <>
      {!user ? (
        <UserContext.Provider value={userValue}>
          <SignUp />
        </UserContext.Provider>
      ) : (
        <div className="container app">
          <LeftSidebar />
          <UserContext.Provider value={userValue}>
            <Feed />
          </UserContext.Provider>
          <RightSidebar />
        </div>
      )}
    </>
  );
}

export default App;
