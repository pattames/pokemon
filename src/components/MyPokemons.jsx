import style from '../styles/MyPokemons.module.css';
import { useState, useContext, useEffect } from 'react';
import { DataContext } from '../context/DataContext';


function MyPokemons () {

  const { users , loading, user, pokemon}  = useContext(DataContext);
  const [PokemonsNames, setPokemonsNames] = useState([]); 
  const [PokemonImages, setPokemonImages] = useState([]);
  

  const getUserPokemonsNames = () => {
    // Check if user.pokemons is defined and not empty before proceeding
    if (user.pokemons && user.pokemons.length > 0) {
      // Assuming user.pokemons[0] is a string like '1, 2'
      const pokemonIds = user.pokemons[0].split(', ').map(id => Number(id));
      const matchingPokemons = pokemon.filter(p => pokemonIds.includes(p.id));
  
      // Check if each pokemon has a name and a name.english property before accessing
      const pokemonNames = matchingPokemons.reduce((acc, p) => {
        if (p.name && p.name.english) {
          acc.push(p.name.english);
        }
        return acc;
      }, []);
  
      setPokemonsNames(pokemonNames);
      console.log(pokemonNames);
    } else {
      // If user.pokemons is not defined or empty, set an empty array
      setPokemonsNames([]);
    }
  };
  const getUserPokemonImages = () => {
    // Check if user.pokemons is defined and not empty before proceeding
    if (user.pokemons && user.pokemons.length > 0) {
      // Assuming user.pokemons[0] is a string like '1, 2'
      const pokemonIds = user.pokemons[0].split(', ').map(id => Number(id));
      const matchingPokemons = pokemon.filter(p => pokemonIds.includes(p.id));
  
      // Check if each pokemon has a name and a name.english property before accessing
      const pokemonImages = matchingPokemons.reduce((acc, p) => {
        if (p.name && p.name.english) {
          acc.push(p.name.english);
        }
        return acc;
      }, []);
  
      setPokemonImages(pokemonImages);
      console.log(pokemonImages);
    } else {
      // If user.pokemons is not defined or empty, set an empty array
      setPokemonImages([]);
    }
  };
  

  useEffect(() => {
    if (!loading) { // Check if loading is false before logging
      // console.log(user.pokemons);
      // console.log(pokemonName[0])
      getUserPokemonsNames();
    }
  }, [users, loading]); 
  if (loading) return <div>Loading...</div>;
  
  return (
    <section className={style.container}>
      <div className={style.intro}>
      <h2>Your Pokemons</h2>
      <p>Here you will see all the pokemons you have captured</p>
      </div>
      <div className={style.yourpokemons}>
        {PokemonsNames.length > 0 ? (
          PokemonsNames.map((name, index) => (
            <div key={index} className={style.pokemon}>
              <h3>{name}</h3>
            </div>
          ))
        ) : (
          <p>You haven't captured any pokemon yet</p>
        )
        }
      </div>
    </section>
  )
}

export default MyPokemons