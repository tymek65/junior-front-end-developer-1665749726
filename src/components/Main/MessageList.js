import styles from './MessageList.module.sass';
import { BusinessContext } from '../../context/BusinessContext';
import { useContext } from 'react';
import { countTimeBetweenDates } from '../../utils/dateHelper';

const MessageList = () => {
  const tasks = useContext(BusinessContext);
  return (
    <div className={styles.messageListWrap}>
      {tasks[0].context.map((messages, index) => {
        const time = countTimeBetweenDates(messages.created_at, new Date());
        return <div key={index}>{time}</div>;
      })}
    </div>
  );
};

export default MessageList;
