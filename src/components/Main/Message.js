import styles from './Message.module.sass';
import { useContext } from 'react';
import { BusinessContext } from '../../context/BusinessContext';
import { getDateString } from '../../utils/messagesHelpers';
import avatar2 from '../../assets/avatar2.png';
const Message = () => {
  const tasks = useContext(BusinessContext);
  const { author, created_at, title, content } = tasks[0].context[0];
  const { date, time } = getDateString(created_at, 'long');
  return (
    <div className={styles.message}>
      <p className={styles.message__title}>{title}</p>
      <div className={styles.message__profilePictureWrap}>
        <img src={avatar2} alt="" />
        <div className={styles.message__body}>
          <div className={styles.message__author}>
            <h2>{author}</h2>
            <p>{date}</p>
            <p>{time}</p>
          </div>
          <p className={styles.message__content}>{content}</p>
        </div>
      </div>
    </div>
  );
};

export default Message;
