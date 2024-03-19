import { NavLink } from "react-router-dom";

import UncaughtPokemons from './UncaughtPokemons';
import MyPokemons from './MyPokemons';

import style from '../styles/Landing.module.css';


function Landing() {

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