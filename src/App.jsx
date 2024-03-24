import { useState, useContext, useEffect } from "react";
import { AuthContext } from "./context/authContext.jsx";
import { DataContext } from "./context/DataContext";
import Authentication from "./components/Authentification.jsx";
import MainContent from "./components/MainContent";
import Landing from "./components/Landing";
import AllPokemon from "./components/AllPokemon";
import "./App.css";
import Battle from "./components/Battle.jsx";
import Leaderboard from "./components/Leaderboard.jsx";
import Login from "./components/Login.jsx";
import Signup from "./components/Signup.jsx";

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  const { pokemon, loading } = useContext(DataContext);

  const [user, setUser] = useState(null);

  useEffect(() => {
    if (!user) {
      setUser(JSON.parse(localStorage.getItem("user")));
    }
  }, [user]);

  // useEffect(() => {}, [])

  const handleAuthenticate = (username) => {
    setAuthenticated(true);
    setUsername(username);
  };

  const { token } = useContext(AuthContext);

  // App.jsx must be empty, because this wil render in every page

  return (
    <div className="bodylike">
      {authenticated ? (
        <>
          <MainContent username={username} />
          <Landing />
          <AllPokemon />
          <Battle />
          <Leaderboard />
        </>
      ) : (
        <>
          <Authentication onAuthenticate={handleAuthenticate} />
          <Login setUser={setUser} />
          <Signup setUser={setUser} />
        </>
      )}
    </div>
  );
}

export default App;
