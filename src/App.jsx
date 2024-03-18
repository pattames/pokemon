import React, { useState } from "react";
import Authentication from "./components mathieu/Authentification.jsx";
import MainContent from "./components mathieu/MainContent";
import { BrowserRouter } from "react-router-dom";
import Landing from "./components/Landing";
import "./App.css";
import Battle from "./components/Battle.jsx";

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [username, setUsername] = useState("");

  const handleAuthenticate = (username) => {
    setAuthenticated(true);
    setUsername(username);
  };

  return (
    <div>
      {authenticated ? (
        <MainContent username={username} />
      ) : (
        <Authentication onAuthenticate={handleAuthenticate} />
      )}
      <BrowserRouter>
        <Landing />
        <Battle />
      </BrowserRouter>
    </div>
  );
}

export default App;
