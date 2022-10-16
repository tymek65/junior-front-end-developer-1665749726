import Header from './Header';
import styles from './Main.module.sass';
import MessageList from './MessageList';
import { Outlet } from 'react-router-dom';
const Main = () => {
  return (
    <div className={styles.mainWrap}>
      <Header />
      <div className={styles.inbox}>
        <MessageList />
        <Outlet />
      </div>
    </div>
  );
};

export default Main;
