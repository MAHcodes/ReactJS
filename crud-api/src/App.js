import { Route, Switch } from "react-router-dom";
import Header from "./Header";
import Home from "./route/Home";
import Get from "./route/GET";
import Post from "./route/POST";
import Put from "./route/PUT";
import Delete from "./route/DELETE";

const App = () => {
  const handlePOST = (e) => {
    e.preventDefault();
    console.log(e.target)
  };

  return <div className="container-md">
  <Header />
  <Switch>
    <Route path="/" exact>
      <Home />
    </Route>
    <Route path="/GET">
      <Get />
    </Route>
    <Route path="/POST">
      <Post 
          handlePOST={handlePOST}
        />
    </Route>
    <Route path="/PUT">
      <Put />
    </Route>
    <Route path="/DELETE">
      <Delete />
    </Route>
  </Switch>
  </div>
}

export default App;
