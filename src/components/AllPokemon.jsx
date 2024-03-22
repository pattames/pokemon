import React, { useContext, useParams } from 'react';
import '../styles/StyleAllPokemon.css'
import { DataContext } from "../context/DataContext";


export default function AllPokemon() {
    const { pokemon, loading } = useContext(DataContext);


  
  return (
    <div className="card">
        <h1 >ALL pokemon here</h1>
      {loading ? (
        <p>Loading Pokemon...</p>
      ) : (
        <ul className="allPokemon--list">
          {pokemon.map((poke) => (
            <li key={poke.id} className="allPOkemon--pokemonCardSmall">
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${poke.id}.png`}
                alt={`Pokemon ${poke.name.english}`}
                className="pokemon-image"
              />
              <div className="">
                <h3>{poke.name.english}</h3>
                    <h4>{poke.name.chinese}</h4> 
                <p>ID: {poke.id}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};