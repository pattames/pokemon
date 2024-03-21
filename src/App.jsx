import { useState, useContext } from "react";
import { DataContext } from "./context/DataContext";
import Authentication from "./components mathieu/Authentification.jsx";
import MainContent from "./components mathieu/MainContent";
import Landing from "./components/Landing";
import "./App.css";
import Battle from "./components/Battle.jsx";
import OnePokemon from "./components mathieu/OnePokemon.jsx";
import Leaderboard from "./components/Leaderboard.jsx";

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
        <>
          <MainContent username={username} />
          <Landing />
          <OnePokemon />
          <Battle />
          <Leaderboard />
        </>
      ) : (
        <Authentication onAuthenticate={handleAuthenticate} />
      )}

    </div>
  );
}

export default App;
