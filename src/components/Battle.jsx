import { useContext, useState } from "react";
import { DataContext } from "../context/DataContext";
import { useEffect } from "react";
import styles from "../styles/Battle.module.css";

export default function Battle() {
  //Data
  const { pokemon, loading } = useContext(DataContext);
  //Hard coded pokemon (demo)
  const ivysaur = pokemon[0];
  const charmander = pokemon[3];
  //Dynamic pokemon
  const [userPokemon, setUserPokemon] = useState(null);
  const [opponentPokemon, setOpponentPokemon] = useState(null);
  //HP counters
  const [userCount, setUserCount] = useState(5);
  const [opponentCount, setOpponentCount] = useState(5);
  //Battle colors
  const [attackColor, setAttackColor] = useState();
  const [defenseColor, setDefenseColor] = useState();
  const [spAttackColor, setSpAttackColor] = useState();
  const [spDefenseColor, setSpDefenseColor] = useState();
  const [speedColor, setSpeedColor] = useState();

  //data check without repetitions
  useEffect(() => {
    if (!loading) {
      console.log("Data in battle component:", pokemon[3].base.Speed);
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

  //Handle click (battle rounds & winner)
  function handleClick() {
    //If userpokemon attack > opponentpokemon attack setUserCount (count - 1)
    function attackRound() {
      if (userPokemon.base.Attack >= opponentPokemon.base.Attack) {
        setOpponentCount(opponentCount - 1);
        setAttackColor("green");
      } else {
        setUserCount(userCount - 1);
        //aquí meter css rojo para style.base
        setAttackColor("red");
      }
    }
    attackRound();
    //Same but for defense + 1sec delay
    function defenseRound() {
      setTimeout(() => {
        if (userPokemon.base.Defense >= opponentPokemon.base.Defense) {
          setOpponentCount(opponentCount - 1);
          setDefenseColor("green");
        } else {
          setUserCount(userCount - 1);
          setDefenseColor("red");
        }
      }, 1000);
    }
    defenseRound();
    //Same but for Sp Attack +2sec delay
    function spAttackRound() {
      setTimeout(() => {
        if (
          userPokemon.base["Sp. Attack"] >= opponentPokemon.base["Sp. Attack"]
        ) {
          setOpponentCount((prevOpponentCount) => prevOpponentCount - 1);
          setSpAttackColor("green");
        } else {
          setUserCount((prevUserCount) => prevUserCount - 1);
          setSpAttackColor("red");
        }
      }, 2000);
    }
    spAttackRound();
    //Same but for Sp Defense +3sec delay
    function spDefenseRound() {
      setTimeout(() => {
        if (
          userPokemon.base["Sp. Defense"] >= opponentPokemon.base["Sp. Defense"]
        ) {
          setOpponentCount((prevOpponentCount) => prevOpponentCount - 1);
          setSpDefenseColor("green");
        } else {
          setUserCount((prevUserCount) => prevUserCount - 1);
          setSpDefenseColor("red");
        }
      }, 3000);
    }
    spDefenseRound();
    //Same but for Speed +4sec delay
    function speedRound() {
      setTimeout(() => {
        if (userPokemon.base.Speed >= opponentPokemon.base.Speed) {
          setOpponentCount((prevOpponentCount) => prevOpponentCount - 1);
          setSpeedColor("green");
        } else {
          setUserCount((prevUserCount) => prevUserCount - 1);
          setSpeedColor("red");
        }
      }, 4000);
    }
    speedRound();
    //If (userCounter > opponentCounter), user wins
    //Else, user looses
    setTimeout(() => {
      if (userCount >= opponentCount) {
        alert("You win!");
      } else {
        alert("You loose :(");
      }
    }, 4100);
  }

  return (
    <div className={styles.battle_component}>
      <h1 className={styles.title}>Battlefield</h1>
      <div className={styles.battle_container}>
        <div className={styles.pokemon_box}>
          {/* <h3>HP: {userCount}/5</h3> */}
          <h2>{userPokemon && userPokemon.name.japanese}</h2>
          <img
            src={userPokemon && userPokemon.image.hires}
            alt="user pokemon"
          />
        </div>
        <div className={styles.scoreboard}>
          <div className={styles.base} style={{ background: attackColor }}>
            Attack
          </div>
          <div className={styles.base} style={{ background: defenseColor }}>
            Defense
          </div>
          <div className={styles.base} style={{ background: spAttackColor }}>
            Sp. Attack
          </div>
          <div className={styles.base} style={{ background: spDefenseColor }}>
            Sp. Defense
          </div>
          <div className={styles.base} style={{ background: speedColor }}>
            Speed
          </div>
        </div>
        <div className={styles.pokemon_box}>
          {/* <h3>HP: {opponentCount}/5</h3> */}
          <h2>{opponentPokemon && opponentPokemon.name.japanese}</h2>
          <img
            src={opponentPokemon && opponentPokemon.image.hires}
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
