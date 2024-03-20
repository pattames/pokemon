import { useContext, useState } from "react";
import { DataContext } from "../context/DataContext";
import { useEffect } from "react";
import styles from "../styles/Battle.module.css";

export default function Battle() {
  const { pokemon, loading } = useContext(DataContext);
  const ivysaur = pokemon[0];
  const charmander = pokemon[3];
  const [userPokemon, setUserPokemon] = useState(null);
  const [opponentPokemon, setOpponentPokemon] = useState(null);

  //console log without repetitions
  useEffect(() => {
    if (!loading) {
      console.log("Data in battle component:", pokemon[1]);
    }
  }, [pokemon, loading]);

  //Set user pokemon (este setter cambia después)
  useEffect(() => {
    if (ivysaur) {
      setUserPokemon(ivysaur);
    }
  }, [ivysaur]);

  //Set opponent pokemon (este setter cambia después)
  useEffect(() => {
    if (charmander) {
      setOpponentPokemon(charmander);
    }
  }, [charmander]);

  return (
    <div className={styles.battle_component}>
      <h1 className={styles.title}>Battle</h1>
      <div className={styles.battle_container}>
        <div className={styles.pokemon_box}>
          <h2>{userPokemon && userPokemon.name.japanese}</h2>
          <img
            src={userPokemon && userPokemon.image.thumbnail}
            alt="user pokemon"
          />
        </div>
        <div className={styles.scoreboard}>
          <div className={styles.base}>Attack</div>
          <div className={styles.base}>Defense</div>
          <div className={styles.base}>Sp. Attack</div>
          <div className={styles.base}>Sp. Defense</div>
          <div className={styles.base}>Speed</div>
        </div>
        <div className={styles.pokemon_box}>
          <h2>{opponentPokemon && opponentPokemon.name.japanese}</h2>
          <img
            src={opponentPokemon && opponentPokemon.image.thumbnail}
            alt="opponent pokemon"
          />
        </div>
      </div>
      <div className={styles.btn_container}>
        <button className={styles.fight_btn}>Fight!</button>
      </div>
    </div>
  );
}
