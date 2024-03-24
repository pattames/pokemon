import style from '../styles/Landing.module.css';
import { default as LeaderboardImg } from '../public/leaderboard-icon.svg';
import { default as PokedexImg } from '../public/pokeball.svg';
import { default as Pokemon_home } from '../public/pokemon_home.png';
import { NavLink } from "react-router-dom";

import { useState } from 'react';


function NavBar () {

  const [Mode, setMode] = useState('\u2600'); // Sun Unicode symbol
  const handleDarkMode = () => {
    // Toggle between sun and moon Unicode symbols
    if (Mode === '\u2600') {
      setMode('\u263E'); // If current is sun, change to moon
    } else {
      setMode('\u2600'); // If current is moon, change to sun
    }
  }


    <nav className={style.nav}>
    <div className={style.nav_container}>
    <NavLink to="/"><img src={Pokemon_home} className={style.navImg} /></NavLink>
    </div>
    <div className={style.pokeballContainer}>
    <NavLink  to="/pokedex"><img src={PokedexImg} className={style.pokeball}/> </NavLink>
    </div>
    <div className={style.nav_container}>
    <NavLink to="leaderboard"><img src={LeaderboardImg} className={style.navImg}/></NavLink>
    </div>
    <div className={style.mode_container}>
    <button onClick={handleDarkMode}className={style.darkMode}>{Mode}</button>
    </div>
  </nav>
}
export default NavBar;