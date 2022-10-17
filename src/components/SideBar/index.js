import Header from '../Header';
import styles from './SideBar.module.sass';
import TasksList from './TasksList';

const SideBar = () => {
  return (
    <div className={styles.sideBar}>
      <div className={styles.sideBar__headerWrap}>
        <Header text="YOUR TASKS" />
      </div>
      <TasksList />
    </div>
  );
};

export default SideBar;
