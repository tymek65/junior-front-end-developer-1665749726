import styles from './MessageList.module.sass';
import { BusinessContext } from '../../context/BusinessContext';
import { useContext, useState, useEffect } from 'react';
import { getDateString, truncateText } from '../../utils/messagesHelpers';
import classNames from 'classnames';
import { useParams, Link } from 'react-router-dom';

const MessageList = () => {
  let { id } = useParams();
  const tasks = useContext(BusinessContext);
  return (
    <div className={styles.messageListWrap}>
      {tasks[id].context.map((message, index) => (
        <MessageThumbnail key={index + id} message={message} index={index} />
      ))}
    </div>
  );
};

const MessageThumbnail = ({ message, index }) => {
  let { messageId } = useParams();
  const [isNew, setIsNew] = useState(true);
  const time = getDateString(message.created_at, 'short');
  const status = parseInt(messageId) === index ? 'active' : isNew && 'new';
  useEffect(() => {
    if (parseInt(messageId) === index) setIsNew(false);
  }, [messageId, index]);

  return (
    <Link className={styles.messageLink} to={`message/${index}`} key={index}>
      <div className={classNames(styles.message, styles[`message--${status}`])}>
        <div className={styles.message__author}>
          <p>{message.author}</p>
          <p>{time}</p>
        </div>
        <p className={styles.message__title}>{message.title}</p>
        <p className={styles.message__content}>{truncateText(message.content)}</p>
      </div>
    </Link>
  );
};

export default MessageList;
