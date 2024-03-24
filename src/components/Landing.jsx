import { NavLink } from "react-router-dom";
import { default as LeaderboardImg } from '../public/leaderboard-icon.svg';
import { default as PokedexImg } from '../public/pokeball.svg';
import { default as Pokemon_home } from '../public/pokemon_home.png';
import { useState, useEffect, useContext } from 'react';

import { AuthContext } from '../context/authContext';

import UncaughtPokemons from './UncaughtPokemons';
import MyPokemons from './MyPokemons';
import MainContent from './MainContent';
import NavBar from './NavBar';

import style from '../styles/Landing.module.css';


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
      <NavBar />
      <MainContent username={username}/>
      <MyPokemons />
      <UncaughtPokemons />
    </>
  );
}

export default Landing;