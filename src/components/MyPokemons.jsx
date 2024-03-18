import style from '../styles/MyPokemons.module.css';


function MyPokemons () {

  const yourPokemons = [1, 4, 7];

  const pokemonName = ['Bulbasaur', 'Charmander', 'Squirtle'];
  const pokemonImage = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/';
  const fileext = '.png'

  const pokemon1 = pokemonImage + yourPokemons[0] + fileext;
  const pokemon2 = pokemonImage + yourPokemons[1] + fileext;
  const pokemon3 = pokemonImage + yourPokemons[2] + fileext;

  return (
    <section className={style.container}>
      <div className={style.intro}>
      <h2>Your Pokemons</h2>
      <p>Here you will see all the pokemons you have captured</p>
      </div>
      <div className={style.yourpokemons}>
        <div className={style.pokemon}>
          <img className={style.yourpokemon_preview} src={pokemon1} alt="Bulbasaur"/>
          <h3>{pokemonName[0]}</h3>
        </div>
        <div className={style.pokemon}>
          <img className={style.yourpokemon_preview} src={pokemon2} alt="Charmander"/>
          <h3>{pokemonName[1]}</h3>
        </div>
        <div className={style.pokemon}>
          <img className={style.yourpokemon_preview} src={pokemon3} alt="Squirtle"/>
          <h3>{pokemonName[2]}</h3>
        </div>
      </div>
    </section>
  )
}

export default MyPokemons