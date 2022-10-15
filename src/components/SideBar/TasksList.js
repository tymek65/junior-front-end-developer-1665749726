import styles from './TasksList.module.sass';
import Task from './Task';
import { useContext } from 'react';
import { BusinessContext } from '../../context/BusinessContext';
const TasksList = () => {
  const tasks = useContext(BusinessContext);
  return (
    <div className={styles.tasksWrap}>
      {tasks.map((task, index) => (
        <Task key={index} task={task} />
      ))}
    </div>
  );
};

export default TasksList;
