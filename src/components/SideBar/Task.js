import { ReactComponent as Arrow } from '../../assets/Arrow.svg';
import { ReactComponent as Checkmark } from '../../assets/Checkmark.svg';
import { ReactComponent as Lock } from '../../assets/Lock.svg';
import classNames from 'classnames';
import styles from './Task.module.sass';

const TaskStatusIcon = ({ status }) => {
  const icons = {
    completed: <Checkmark />,
    active: <Arrow />,
    blocked: <Lock />,
  };
  return <div className={classNames(styles.task__icon, [styles[`task__icon--${status}`]])}>{icons[status]}</div>;
};

const Task = ({ task: { name, status } }) => {
  return (
    <div className={styles.task}>
      <TaskStatusIcon status={status} />
      <p>{name}</p>
    </div>
  );
};

export default Task;
