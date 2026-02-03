import styles from './Myheader.module.css';

const Myheader = () => (
  <div className={styles.Myheader}>
    <div className={styles.myHeaderBlock}>
    <img src="logo.png" id={styles.mylogo}></img>
      <h1 className={styles.myTitle}>Gaming Time</h1>
      <div className={styles.myMenu}>
        <a className={styles.myA}>Main</a>
        <a className={styles.myA}>Discounts</a>
        <a className={styles.myA}>Contacts</a>
      </div>
    </div>
  </div>
);

export default Myheader;
