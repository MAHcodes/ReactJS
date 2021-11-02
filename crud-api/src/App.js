import { Route, Switch } from "react-router-dom";
import Header from "./Header";
import Home from "./route/Home";
import Get from "./route/GET";
import Post from "./route/POST";
import Put from "./route/PUT";
import Delete from "./route/DELETE";
import Console from "./Console";
import { useState } from "react";

const App = () => {

  const [consoleMessages, setConsoleMessages] = useState([]);

  const handlePOST = (e) => {
    e.preventDefault();
    const waitMessage = consoleMessages.concat([`Sending request please wait...`]);
    setConsoleMessages(waitMessage);
    const entities = e.target.elements;
    let entityValue;
    let data = {};
    let keys = [];
    for (let i= 0; i < entities.length; i++) {
      if (entities[i].name === "entity") { entityValue = entities[i].value };
      if (entities[i].name === "key") { keys.push(i) };
    };

    keys.forEach(i => {
      data[entities[i].value] =  entities[i + 1].value;
    });

    const API = "https://crudcrud.com/api/25b1979d1d7b4ec3acc15700d5b49939";

    fetch(`${API}/${entityValue}`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {'Content-Type': 'application/json'},
    })
    .then(res => {
      const newMessages = consoleMessages.concat([`"${entityValue}" ${res.statusText}... Status Code: ${res.status}`]);
      setConsoleMessages(newMessages);
    })
    .catch(err => {
      console.error(err);
    });
  };


  return <div className="container-md position-relative overflow-hidden" style={{minHeight: "100vh"}}>
  <Header />
  <Switch>
    <Route path="/" exact>
      <Home />
    </Route>
    <Route path="/GET">
      <Get />
      <Console 
        consoleMessages={consoleMessages}
        setConsoleMessages={setConsoleMessages}
      />
    </Route>
    <Route path="/POST">
      <Post 
          handlePOST={handlePOST}
        />
      <Console 
        consoleMessages={consoleMessages}
        setConsoleMessages={setConsoleMessages}
      />
    </Route>
    <Route path="/PUT">
      <Put />
      <Console 
        consoleMessages={consoleMessages}
        setConsoleMessages={setConsoleMessages}
      />
    </Route>
    <Route path="/DELETE">
      <Delete />
      <Console 
        consoleMessages={consoleMessages}
        setConsoleMessages={setConsoleMessages}
      />
    </Route>
  </Switch>
  </div>
}

export default App;
