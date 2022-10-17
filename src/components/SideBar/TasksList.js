import styles from './TasksList.module.sass';
import Task from './Task';
import { tasks } from '../../data/tasks';
const TasksList = () => {
  return (
    <div className={styles.tasksWrap}>
      {tasks.map((task, index) => (
        <Task key={index} task={task} index={index} />
      ))}
    </div>
  );
};

export default TasksList;
