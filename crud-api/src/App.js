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
  const [consoleIsActive, setConsoleIsActive] = useState(true);
  const [userEndPoint, setUserEndPoint] = useState(sessionStorage.getItem("myEndpoint") || "");
  const [ifUserEnd, setIfUserEnd] = useState(false);

  const handleEndpoint = e => {
    e.preventDefault();
    setUserEndPoint(String(e.target.elements[0].value));
    sessionStorage.setItem("myEndpoint", e.target.elements[0].value);
    setIfUserEnd(true);
  }

  const API = `https://crudcrud.com/api/${userEndPoint}`;
  const handlePOST = (e) => {
    e.preventDefault();
    setConsoleIsActive(true);
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
      console.log(err);
      const newMessages = consoleMessages.concat([err.message]);
      setConsoleMessages(newMessages);
    });
  };

  const [endpointEntities, setEndpointEntities] = useState([]);
  const [loadingEntities, setLoadingEntities] = useState(true);
  const getEntities = () => {
    fetch(API).then(res => {
      return res.json()
    }).then(data => {
      setEndpointEntities(data);
    }).catch(err => {
      console.log(err);
      const newMessages = consoleMessages.concat([err.message]);
      setConsoleMessages(newMessages);
    }
    ).finally(() => {
      setLoadingEntities(false);
    });
  }

  const [endpointData, setEndpointData] = useState([]);
  const getData = (entity) => {
    const waitMessage = consoleMessages.concat([`Sending request please wait...`]);
    setConsoleMessages(waitMessage);
    fetch(`${API}/${entity}`).then(res => {
      const newMessages = consoleMessages.concat([`${entity} ${res.statusText}... Status Code: ${res.status}`]);
      setConsoleMessages(newMessages);
      return res.json()
    }).then(data => {
      setEndpointData(data);
    }).catch(err => {
      console.log(err);
      const newMessages = consoleMessages.concat([err.message]);
      setConsoleMessages(newMessages);
    })
  }

  const copyToClipboard = e => {
      navigator.clipboard.writeText(e.target.parentElement.innerText)
      setConsoleIsActive(true);
      const newMessages = consoleMessages.concat([`Copied to clipboard: ${e.target.parentElement.innerText}`]);
      setConsoleMessages(newMessages);
  }

  const [keyValue, setKeyValue] = useState([1]);
  const handleAddKey = (e) => {
      e.preventDefault();
      setKeyValue(keyValue.concat( [Math.max(...keyValue) + 1]));
  };

  const handleRemoveKey = (item) => {
      const newItems = keyValue.filter(i => i !== item);
      setKeyValue(newItems);
  }


  return <div className="container-md position-relative overflow-hidden" style={{minHeight: "100vh"}}>
  <Header />
  <Switch>
    <Route path="/" exact>
      <Home
      handleEndpoint={handleEndpoint}
      userEndPoint={userEndPoint}
      setUserEndPoint={setUserEndPoint}
      ifUserEnd={ifUserEnd}
      setIfUserEnd={setIfUserEnd}
      />
    </Route>
    <Route path="/GET">
      <Get
        getEntities={getEntities} 
        endpointEntities={endpointEntities}
        getData={getData}
        endpointData={endpointData}
        copyToClipboard={copyToClipboard}
        loadingEntities={loadingEntities}
      />
      <Console 
        consoleMessages={consoleMessages}
        setConsoleMessages={setConsoleMessages}
        consoleIsActive={consoleIsActive}
        setConsoleIsActive={setConsoleIsActive}
      />
    </Route>
    <Route path="/POST">
      <Post 
          handlePOST={handlePOST}
          keyValue={keyValue}
          handleAddKey={handleAddKey}
          handleRemoveKey={handleRemoveKey}
        />
      <Console 
        consoleMessages={consoleMessages}
        setConsoleMessages={setConsoleMessages}
        consoleIsActive={consoleIsActive}
        setConsoleIsActive={setConsoleIsActive}
      />
    </Route>
    <Route path="/PUT">
      <Put 
        endpointEntities={endpointEntities}
        getData={getData}
        loadingEntities={loadingEntities}
        endpointData={endpointData}
        keyValue={keyValue}
        handleAddKey={handleAddKey}
        handleRemoveKey={handleRemoveKey}
        getEntities={getEntities}
      />
      <Console 
        consoleMessages={consoleMessages}
        setConsoleMessages={setConsoleMessages}
        consoleIsActive={consoleIsActive}
        setConsoleIsActive={setConsoleIsActive}
      />
    </Route>
    <Route path="/DELETE">
      <Delete />
      <Console 
        consoleMessages={consoleMessages}
        setConsoleMessages={setConsoleMessages}
        consoleIsActive={consoleIsActive}
        setConsoleIsActive={setConsoleIsActive}
      />
    </Route>
  </Switch>
  </div>
}

export default App;
