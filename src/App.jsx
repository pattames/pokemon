import { useState, useContext } from "react";
import { DataContext } from "./context/DataContext";
import Authentication from "./components/Authentification.jsx";
import MainContent from "./components/MainContent";
import Landing from "./components/Landing";
import AllPokemon from "./components/AllPokemon"
import OnePokemon from "./components/OnePokemon.jsx";
import "./App.css";
import Battle from "./components/Battle.jsx";
import Leaderboard from "./components/Leaderboard.jsx";

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  const { pokemon, loading } = useContext(DataContext);

  const handleAuthenticate = (username) => {
    setAuthenticated(true);
    setUsername(username);
  };

  // App.jsx must be empty, because this wil render in every page

  return (
    <div>
      {authenticated ? (
        <>
          <MainContent username={username} />
          <Landing />
          <OnePokemon /> 
          <AllPokemon />
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
