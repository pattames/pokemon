import { NavLink } from "react-router-dom";
import { useEffect } from "react";

import UncaughtPokemons from './UncaughtPokemons';
import MyPokemons from './MyPokemons';

import style from '../styles/Landing.module.css';


function Landing() {

  const fetchData = async () => {
    const response = await fetch('https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/pokedex.json');
    const data = await response.json();
    console.log(data);
  }

  useEffect(() => {
    fetchData();
  } , []);

  return (
    <>
      <nav className={style.nav}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/pokedex">Pokedex</NavLink>
        <NavLink to="leaderboard">Leaderboard</NavLink>
        <button>🌑</button>
      </nav>
      <MyPokemons />
      <UncaughtPokemons />
    </>
  );
}

export default Landing;