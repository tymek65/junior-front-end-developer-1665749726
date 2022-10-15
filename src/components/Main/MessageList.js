import styles from './MessageList.module.sass';
import { BusinessContext } from '../../context/BusinessContext';
import { useContext } from 'react';
import { coundTimeBetweenDates } from '../../utils/dateHelper';

const MessageList = () => {
  const tasks = useContext(BusinessContext);
  return (
    <div className={styles.messageListWrap}>
      {tasks[0].context.map((messages, index) => {
        console.log(messages.created_at);
        console.log(new Date());
        coundTimeBetweenDates(messages.created_at, new Date());
        return <div key={index}>{messages.created_at.toString()}</div>;
      })}
    </div>
  );
};

export default MessageList;
