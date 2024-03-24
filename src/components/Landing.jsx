import { useState, useEffect, useContext } from 'react';

import { AuthContext } from '../context/authContext';

import MyPokemons from './MyPokemons';
import MainContent from './MainContent';
import NavBar from './NavBar';
import Login from "./Login";
import Signup from "./Signup";
import Battle from "./Battle";
import AllPokemon from "./AllPokemon";
import Leaderboard from "./Leaderboard";


import Authentication from "./Authentification";


function Landing() {


  const [user, setUser] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);
  const [username, setUsername] = useState("");

  useEffect(() => {
    if (!user) {
      setUser(JSON.parse(localStorage.getItem("user")));
    }
  }, [user]);

  const handleAuthenticate = (username) => {
    setAuthenticated(true);
    setUsername(username);
  };

  const { token } = useContext(AuthContext);


  return (
    <>
    {authenticated ? (
      <>
      <NavBar />
      <MainContent username={username}/>
      <Battle />
      <MyPokemons />
      <AllPokemon />
      <Leaderboard />
    </>
    ) : (
    <>
      <Authentication onAuthenticate={handleAuthenticate} />
      <Login setUser={setUser} />
      <Signup setUser={setUser} />
    </>
    )
    }
  </>
  )
}

export default Landing;