import React, { useContext,  useState, useEffect } from 'react';
import '../styles/StyleAllPokemon.css'
import { DataContext } from "../context/DataContext";



export default function AllPokemon() {
    const { pokemon, loading } = useContext(DataContext);
    const [randomPokemon, setRandomPokemon] = useState([]); 

    const handleRandom = () => { //randomized
      if (pokemon.length > 0) {
        // Shuffle the Pokemon array
        const shuffledPokemon = [...pokemon].sort(() => Math.random() - 0.5); //gpt 
        setRandomPokemon(shuffledPokemon.slice(0, 12));
      }
    };
  

  return (
    <div className="card" onClick={() => navigate(`/pokemon/${poke.id}`)}>
        <h1 >Select the Pokemon you want to fight</h1>
        <button className='allPokemon--btn' onClick={handleRandom}>Show me more Pokemon</button>
      {loading ? (
        <p>Loading Pokemon...</p>
      ) : (
        <ul className="allPokemon--list">
          {randomPokemon.map((poke) => ( //radomize the mapping
          
            <li key={poke.id} className="allPOkemon--pokemonCardSmall">
                    <div className="allPokemon--card">
                <h3>{poke.name.english}</h3>
                    <h4>{poke.name.chinese}</h4> 
                <p>ID: {poke.id}</p>
              </div>
              <img className="allPokemon--img"
                src={`https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/${poke.id}.png`}
                alt={`Pokemon ${poke.name.english}`}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};