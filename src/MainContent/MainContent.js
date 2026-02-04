import styles from './MainContent.module.css';
import MyMenu from '../MyMenu/MyMenu';
import Card1 from '../Card1/Card1';
import Card2 from '../Card2/Card2';

const MainContent = () => (
  <div className={styles.MainContent}>
    <MyMenu></MyMenu>
    <Card1></Card1>
    <Card2></Card2>
  </div>
);

export default MainContent;
