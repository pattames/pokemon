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
  const [userCount, setUserCount] = useState(5);
  const [opponentCount, setOpponentCount] = useState(5);

  //console log without repetitions
  useEffect(() => {
    if (!loading) {
      console.log("Data in battle component:", pokemon[1].base.Attack);
    }
  }, [pokemon, loading]);

  //Set user pokemon (This setter will change)
  useEffect(() => {
    if (ivysaur) {
      setUserPokemon(ivysaur);
    }
  }, [ivysaur]);

  //Set opponent pokemon (This setter will change)
  useEffect(() => {
    if (charmander) {
      setOpponentPokemon(charmander);
    }
  }, [charmander]);

  //Handle click
  function handleClick() {
    //If userpokemon attack > opponentpokemon attack setUserCount (count - 1)
    function attackRound() {
      if (userPokemon.base.Attack >= opponentPokemon.base.Attack) {
        setOpponentCount(opponentCount - 1);
        //aquí meter css verde para style.base
      } else {
        setUserCount(userCount - 1);
        //aquí meter css rojo para style.base
      }
    }
    //Same but for defense + 1sec delay
    attackRound();
    function defenseRound() {
      setTimeout(() => {
        if (userPokemon.base.Defense >= opponentPokemon.base.Defense) {
          setOpponentCount(opponentCount - 1);
        } else {
          setUserCount(userCount - 1);
        }
      }, 1000);
    }
    defenseRound();
    //Same but for Sp Attack +2sec delay
    function spAttackRound() {}
  }

  return (
    <div className={styles.battle_component}>
      <h1 className={styles.title}>Battle</h1>
      <div className={styles.battle_container}>
        <div className={styles.pokemon_box}>
          <h3>HP: {userCount}/5</h3>
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
          <h3>HP: {opponentCount}/5</h3>
          <h2>{opponentPokemon && opponentPokemon.name.japanese}</h2>
          <img
            src={opponentPokemon && opponentPokemon.image.thumbnail}
            alt="opponent pokemon"
          />
        </div>
      </div>
      <div className={styles.btn_container}>
        <button className={styles.fight_btn} onClick={handleClick}>
          Fight!
        </button>
      </div>
    </div>
  );
}
