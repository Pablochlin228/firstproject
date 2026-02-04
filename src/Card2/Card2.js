import styles from './Card2.module.css';

const Card2 = () => (
  <div className={styles.Card2}>
    <img src="game2.png" alt="game1" id={styles.myGamePhoto}></img>
    <h3 className={styles.textForCard}>ARC Raiders</h3>
    <div className={styles.blockforCard}>
      <h4 className={styles.costs}>35$</h4>
      <button className={styles.myButton}>Buy</button>
    </div>
  </div>
);

export default Card2;
