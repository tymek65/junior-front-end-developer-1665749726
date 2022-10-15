import Header from './Header';
import styles from './Main.module.sass';
import Message from './Message';
import MessageList from './MessageList';

const Main = () => {
  return (
    <div className={styles.mainWrap}>
      <Header />
      <div className={styles.inbox}>
        <MessageList />
        <Message />
      </div>
    </div>
  );
};

export default Main;
