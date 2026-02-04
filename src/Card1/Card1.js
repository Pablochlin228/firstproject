import styles from './Card1.module.css';

const Card1 = () => (
  <div className={styles.Card1}>
    <img src="game1.png" alt="game1" id={styles.myGamePhoto}></img>
    <h3 className={styles.textForCard}>Clair Obscur: Expedition 33</h3>
    <div className={styles.blockforCard}>
      <h4 className={styles.costs}>45$</h4>
      <button className={styles.myButton}>Buy</button>
    </div>
  </div>
);

export default Card1;
