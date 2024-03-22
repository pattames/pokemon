import style from "../styles/MyPokemons.module.css";
import { useState, useContext, useEffect } from "react";
import { DataContext } from "../context/DataContext";
import { SelectPokeContext } from "../context/SelectPokeContext";

function MyPokemons() {
  const { loading, user, pokemon } = useContext(DataContext);
  //from context hook to select poke
  const { setSelectPokemon } = useContext(SelectPokeContext);

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;
  const [showAll, setShowAll] = useState(false); // New state for toggle

  // Derived states for UI
  const [displayedPokemons, setDisplayedPokemons] = useState([]);

  //Click handler for poke selection
  const handleClick = (pokemon) => {
    setSelectPokemon(pokemon);
  };

  useEffect(() => {
    const reversedPokemons = [...user.pokemons].reverse();

    let pokemonsToDisplay;
    if (showAll) {
      pokemonsToDisplay = reversedPokemons.map((id) => ({
        name: pokemon[id - 1].name.english,
        image: pokemon[id - 1].image.hires,
      }));
    } else {
      const start = currentPage * itemsPerPage;
      const end = start + itemsPerPage;
      pokemonsToDisplay = reversedPokemons.slice(start, end).map((id) => ({
        name: pokemon[id - 1].name.english,
        image: pokemon[id - 1].image.hires,
      }));
    }

    setDisplayedPokemons(pokemonsToDisplay);
  }, [user, pokemon, currentPage, showAll, loading]); // Include showAll in dependency array

  const nextPage = () =>
    setCurrentPage((current) =>
      Math.min(current + 1, Math.ceil(user.pokemons.length / itemsPerPage) - 1)
    );
  const prevPage = () => setCurrentPage((current) => Math.max(current - 1, 0));
  const toggleShowAll = () => setShowAll((current) => !current); // Toggle function

  if (loading) return <div>Loading...</div>;

  return (
    <section className={style.container}>
      <div className={style.intro}>
        <h2>Your Pokemons</h2>
        <p>Here you will see all the pokemons you have captured</p>
        <p className={style.counterP}>
          You have currently:
          <span className={style.counter}>
            {" "}
            {user.pokemons.length} Pokemon{user.pokemons.length > 1 ? "s" : ""}
          </span>
        </p>
      </div>
      <div className={`${style.yourpokemons} ${showAll ? style.vertical : ""}`}>
        {" "}
        {/* Apply vertical class if showAll is true */}
        {displayedPokemons.map((pokemon, index) => (
          <div
            key={index}
            className={style.pokemonContainer}
            onClick={() => handleClick(pokemon)}
          >
            <h3 className={style.pokemonName}>{pokemon.name}</h3>
            <img
              className={style.pokemonImage}
              src={pokemon.image}
              alt={pokemon.name}
            />
          </div>
        ))}
      </div>
      <div className={style.yourPokemonsPag}>
        <button
          onClick={prevPage}
          disabled={currentPage <= 0 || showAll}
          className={style.pagButton}
        >
          Previous
        </button>
        <button
          onClick={nextPage}
          disabled={
            (currentPage + 1) * itemsPerPage >= user.pokemons.length || showAll
          }
          className={style.pagButton}
        >
          Next
        </button>
        <button onClick={toggleShowAll} className={style.toggleButton}>
          {showAll ? "some" : "all"}
        </button>{" "}
        {/* Toggle button */}
      </div>
    </section>
  );
}

export default MyPokemons;
