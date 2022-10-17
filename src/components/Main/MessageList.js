import styles from './MessageList.module.sass';
import { useEffect } from 'react';
import { getDateString, truncateText } from '../../utils/messagesHelpers';
import classNames from 'classnames';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useState, useContext } from 'react';
import { BusinessContext } from '../../context/BusinessContext';
const MessageList = () => {
  const tasks = useContext(BusinessContext);
  let { id } = useParams();
  const [messageStatus, setMessageStatus] = useState({});
  return (
    <div className={styles.messageListWrap}>
      {tasks[id].context.map((message, index) => (
        <MessageThumbnail messageStatus={messageStatus} setMessageStatus={setMessageStatus} key={index + id} message={message} index={index} />
      ))}
    </div>
  );
};

const MessageThumbnail = ({ message, index, messageStatus, setMessageStatus }) => {
  const { messageId, id } = useParams();
  const navigate = useNavigate();
  const time = getDateString(message.created_at, 'short');
  const status = parseInt(messageId) === index ? 'active' : !messageStatus?.[id]?.includes(index) ? 'new' : 'read';

  useEffect(() => {
    if (!messageId) {
      const index = messageStatus?.[id]?.[0];
      if (index !== undefined) {
        navigate(`message/${index}`);
      }
    }
  }, [messageId, id]);

  useEffect(() => {
    //this is kind of a weird way to handle status of messages (seen/new/active) but given the data I wasn't sure if I can modify it (data/tasks.js).
    //It would have been a lot easier to just give every business context a status property, but I don't think that's feasible while working with real api
    //I could have also done that with plain array and combine task index and message index together but there is a chance of duplicate 'id' with in two different tasks, for example task 4 with message 10 and task 41 with message 0
    //In real life scenario while working with api I think easiest way to handle this would be to just store unique id that's generated while creating those entries in db but I wasn't sure if I can add any more properties than I was told to
    if (parseInt(messageId) === index && !messageStatus?.[id]?.includes(parseInt(messageId)))
      setMessageStatus((prev) => ({ ...prev, [id]: [...(prev?.[id] ?? []), parseInt(messageId)].sort((a, b) => a - b) }));
  }, [messageId, index, id]);

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
