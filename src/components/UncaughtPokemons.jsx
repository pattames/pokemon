import style from '../styles/UncaughtPokemons.module.css';

function UncaughtPokemons () {
  return (
    <section className={style.container}>
      <h2>Uncaught Pokemons</h2>
      <p>There are no uncaught pokemons</p>
    </section>
  );
}

export default UncaughtPokemons;