import style from '../styles/MyPokemons.module.css';
import { useContext, useEffect } from 'react';
import { DataContext } from '../context/DataContext';


function MyPokemons () {

  const currentUser = 1;

  const { users , loading, user}  = useContext(DataContext);

  useEffect(() => {
    if (!loading) { // Check if loading is false before logging
      console.log('My pokemons:', users[currentUser].pokemons);
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
        {<h1>{user.pokemons}</h1>}
      </div>
    </section>
  )
}

export default MyPokemons