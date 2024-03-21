import style from '../styles/MyPokemons.module.css';
import { useState, useContext, useEffect } from 'react';
import { DataContext } from '../context/DataContext';


function MyPokemons () {

  const { users , loading, user, pokemon}  = useContext(DataContext);
  const [PokemonsNames, setPokemonsNames] = useState([]); 
  const [PokemonsTotal, setPokemonsTotal] = useState(0);
  const [PokemonsImages, setPokemonsImages] = useState([]);
  

  const getUserPokemonsNames = () => {
    // Check if user.pokemons is defined and not empty before proceeding
    if (user.pokemons && user.pokemons.length > 0 ) {

      const pokemonNames = user.pokemons.map((id) => pokemon[id].name.english);
      const pokemonTotal = user.pokemons.length;
      const pokemonImages = user.pokemons.map((id) => pokemon[id].image.hires);
  
      setPokemonsNames(pokemonNames);
      setPokemonsTotal(pokemonTotal);
      setPokemonsImages(pokemonImages);  
    } else {
      // If user.pokemons is not defined or empty, set an empty array
      setPokemonsNames([]);
      setPokemonsTotal(0);
    }
  }; 

  useEffect(() => {
    if (!loading) { // Check if loading is false before logging
        //  console.log(PokemonsImages);
        getUserPokemonsNames();
        // console.log(PokemonsNames)
    }
  }, [users, loading]); 
  if (loading) return <div>Loading...</div>;
  
  return (
    <section className={style.container}>
      <div className={style.intro}>
      <h2>Your Pokemons</h2>
      <p>Here you will see all the pokemons you have captured</p>
      <p className={style.counterP}>You have currently:<span className={style.counter}> {PokemonsTotal} Pokemon{PokemonsTotal > 1 ? "s" : ""}</span></p>      </div>
      <div className={style.yourpokemons}>
        {PokemonsNames.length > 0 ? (
          PokemonsNames.map((name, index) => (
            <div key={index} className={style.pokemonContainer}>
              <h3 className={style.pokemonName}>{name}</h3>
              <img className={style.pokemonImage} src={PokemonsImages[index]} alt={name} />
            </div>
          ))
        ) : (
          <p>You haven&apos;t captured any pokemon yet</p>
        )
        }
      </div>
      <div className={style.yourPokemonsPag}>
        <button className={style.pagButton}>Previous</button>
        <button className={style.pagButton}>Next</button>
      </div>
    </section>
  )
}

export default MyPokemons