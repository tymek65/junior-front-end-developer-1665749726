import Header from './Header';
import styles from './SideBar.module.sass';
import Tasks from './Tasks';

const SideBar = () => {
  return (
    <div className={styles.sideBar}>
      <Header />
      <Tasks />
    </div>
  );
};

export default SideBar;
