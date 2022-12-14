import styles from './Message.module.sass';
import { getDateString } from '../../utils/messagesHelpers';
import avatar2 from '../../assets/avatar2.png';
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { BusinessContext } from '../../context/BusinessContext';
const Message = () => {
  const tasks = useContext(BusinessContext);
  const { id, messageId } = useParams();
  const { author, created_at, title, content } = tasks[id].context[messageId];
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
