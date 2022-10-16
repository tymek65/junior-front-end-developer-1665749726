import styles from './MessageList.module.sass';
import { BusinessContext } from '../../context/BusinessContext';
import { useContext } from 'react';
import { getDateString, truncateText } from '../../utils/messagesHelpers';
import classNames from 'classnames';

const MessageList = () => {
  const tasks = useContext(BusinessContext);
  return (
    <div className={styles.messageListWrap}>
      {tasks[0].context.map((messages, index) => {
        const time = getDateString(messages.created_at, 'short');
        const status = 'new';
        return (
          <div className={classNames(styles.message, styles[`message--${status}`])} key={index}>
            <div className={styles.message__author}>
              <p>{messages.author}</p>
              <p>{time}</p>
            </div>
            <p className={styles.message__title}>{messages.title}</p>
            <p className={styles.message__content}>{truncateText(messages.content)}</p>
          </div>
        );
      })}
    </div>
  );
};

export default MessageList;
