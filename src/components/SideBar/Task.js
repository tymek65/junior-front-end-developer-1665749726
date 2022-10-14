import { ReactComponent as Arrow } from '../../assets/Arrow.svg';
import { ReactComponent as Checkmark } from '../../assets/Checkmark.svg';
import { ReactComponent as Lock } from '../../assets/Lock.svg';
import styles from './Task.module.sass';

const TaskStatusIcon = ({ status }) => {
  if (status === 'completed')
    return (
      <div className={`${styles.task__icon} ${styles.completed}`}>
        <Checkmark />
      </div>
    );
  else if (status === 'active')
    return (
      <div className={`${styles.task__icon} ${styles.active}`}>
        <Arrow />
      </div>
    );
  else
    return (
      <div className={`${styles.task__icon} ${styles.blocked}`}>
        <Lock />
      </div>
    );
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
