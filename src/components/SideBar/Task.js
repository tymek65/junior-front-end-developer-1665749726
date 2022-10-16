import { ReactComponent as Arrow } from '../../assets/Arrow.svg';
import { ReactComponent as Checkmark } from '../../assets/Checkmark.svg';
import { ReactComponent as Lock } from '../../assets/Lock.svg';
import classNames from 'classnames';
import styles from './Task.module.sass';
import { Link, useParams } from 'react-router-dom';

const TaskStatusIcon = ({ status }) => {
  const icons = {
    completed: <Checkmark />,
    active: <Arrow />,
    blocked: <Lock />,
  };
  return <div className={classNames(styles.task__icon, [styles[`task__icon--${status}`]])}>{icons[status]}</div>;
};

const Task = ({ task: { name, status }, index }) => {
  const { id } = useParams();
  return (
    <Link
      className={classNames(styles.task, {
        [`${styles[`task--active`]}`]: index === parseInt(id),
        [`${styles[`task--blocked`]}`]: status === 'blocked',
      })}
      to={`task/${index}`}
    >
      <TaskStatusIcon status={status} />
      <p>{name}</p>
    </Link>
  );
};

export default Task;
