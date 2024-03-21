import style from '../styles/Leaderboard.module.css';
import { useState, useContext, useEffect } from 'react';
import { DataContext } from '../context/DataContext';

function Leaderboard () {

  const { users }  = useContext(DataContext);

  // console.log(users)

    return (
        <section className={style.container}>
          <h2 className={style.title}>Leaderboard</h2>
          <p>Here you will see the top 10 trainers</p>
          <div className={style.headers}>
            <h3 className={style.header}>Trainer</h3>
            <h3 className={style.header}>Pokemons</h3>
            <h3 className={style.header}>Score</h3>
            <h3 className={style.header}>W/R</h3>
          </div>
          {users.length > 0 ? (
            users.map((user, index) => (
              <div key={index} className={style.userContainer}>
                <div>
                  <h3 className={style.userName}>{user.username}</h3>
                </div>
                <div>
                  <p className={style.pokemonsTotal}> {user.pokemons[0]}</p>
                </div>
                <div>
                  <p className={style.score}> {user.pokemons[0]}</p>
                </div>
                <div>
                  <p className={style.winRation}> {user.pokemons[0]}</p>
                </div>
              </div>
            ))
          ) : (
            <div>Loading...</div>
          )}
          <div className={style.pagination}>
            <button className={style.pagButton}>Previous</button>
            <button className={style.pagButton}>Next</button>
          </div>
        </section>
    );
}

export default Leaderboard;