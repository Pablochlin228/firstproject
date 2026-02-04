import styles from './MyMenu.module.css';

const MyMenu = () => (
  <div className={styles.MyMenu}>
    <h2 className={styles.myH2}>Catalog</h2>
    <ul>
      <li className={styles.myLi}><a href="" className={styles.myA}>New Games</a></li>
      <li className={styles.myLi}><a href="" className={styles.myA}>Popular Games</a></li>
      <li className={styles.myLi}><a href="" className={styles.myA}>Adventurous Games</a></li>
      <li className={styles.myLi}><a href="" className={styles.myA}>Horror Games</a></li>
      <li className={styles.myLi}><a href="" className={styles.myA}>Online Games</a></li>
    </ul>
  </div>
);

export default MyMenu;
