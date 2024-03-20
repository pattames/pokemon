import style from '../styles/Leaderboard.module.css';

function Leaderboard () {

    return (
        <section className={style.container}>
          <h2 className={style.title}>Leaderboard</h2>
          <p>Here you will see the top 10 trainers</p>
        </section>
    );
}

export default Leaderboard;