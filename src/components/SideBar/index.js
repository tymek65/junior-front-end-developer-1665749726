import Header from './Header';
import styles from './SideBar.module.sass';
import TasksList from './TasksList';

const SideBar = () => {
  return (
    <div className={styles.sideBar}>
      <Header />
      <TasksList />
    </div>
  );
};

export default SideBar;
