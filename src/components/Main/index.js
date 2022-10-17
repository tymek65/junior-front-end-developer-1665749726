import Header from '../Header';
import styles from './Main.module.sass';
import MessageList from './MessageList';
import { Outlet } from 'react-router-dom';
import { ReactComponent as Compass } from '../../assets/compass.svg';

const Main = () => {
  return (
    <div className={styles.main}>
      <div className={styles.main__headerWrap}>
        <Header text="BUSINESS CONTEXT" icon={<Compass />} isActive />
      </div>
      <div className={styles.inbox}>
        <MessageList />
        <Outlet />
      </div>
    </div>
  );
};

export default Main;
