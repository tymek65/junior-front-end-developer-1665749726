import Task from './Task';
import styles from './Tasks.module.sass';

const Tasks = () => {
  const tasks = [
    {
      name: 'Application Setup',
      status: 'completed',
      context: [
        {
          author: 'Olga Nelson',
          date: new Date('14.10.2022 14:20'),
          data: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat nobis temporibus laboriosam quidem eum nostrum a non maiores quasi quis, molestias hic incidunt at consectetur blanditiis omnis laborum voluptatem. Illum!',
        },
        {
          author: 'Kristen Aniston',
          date: new Date('13.10.2022 12:13'),
          data: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam saepe animi ipsa modi totam, alias vitae vero, quisquam ad quaerat eligendi ut itaque.',
        },
      ],
    },
    {
      name: 'Static Books List',
      status: 'completed',
      context: [
        {
          author: 'Kristen Aniston',
          date: new Date('11.10.2022 10:20'),
          data: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat nobis temporibus laboriosam quidem eum nostrum a non maiores quasi quis, molestias hic incidunt at consectetur blanditiis omnis laborum voluptatem. Illum!',
        },
        {
          author: 'Kristen Aniston',
          date: new Date('5.10.2022 21:43'),
          data: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam saepe animi ipsa modi totam, alias vitae vero, quisquam ad quaerat eligendi ut itaque.',
        },
      ],
    },
    {
      name: 'Administration Panel',
      status: 'completed',
      context: [
        {
          author: 'Olga Nelson',
          date: new Date('14.10.2022 14:20'),
          data: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat nobis temporibus laboriosam quidem eum nostrum a non maiores quasi quis, molestias hic incidunt at consectetur blanditiis omnis laborum voluptatem. Illum!',
        },
        {
          author: 'Kristen Aniston',
          date: new Date('13.10.2022 12:13'),
          data: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam saepe animi ipsa modi totam, alias vitae vero, quisquam ad quaerat eligendi ut itaque.',
        },
      ],
    },
    {
      name: 'Connect Admin with Fronted',
      status: 'active',
      context: [
        {
          author: 'Olga Nelson',
          date: new Date('14.10.2022 14:20'),
          data: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat nobis temporibus laboriosam quidem eum nostrum a non maiores quasi quis, molestias hic incidunt at consectetur blanditiis omnis laborum voluptatem. Illum!',
        },
        {
          author: 'Kristen Aniston',
          date: new Date('13.10.2022 12:13'),
          data: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam saepe animi ipsa modi totam, alias vitae vero, quisquam ad quaerat eligendi ut itaque.',
        },
      ],
    },
    {
      name: 'Book Review Feature',
      status: 'blocked',
      context: [
        {
          author: 'Olga Nelson',
          date: new Date('14.10.2022 14:20'),
          data: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat nobis temporibus laboriosam quidem eum nostrum a non maiores quasi quis, molestias hic incidunt at consectetur blanditiis omnis laborum voluptatem. Illum!',
        },
        {
          author: 'Kristen Aniston',
          date: new Date('13.10.2022 12:13'),
          data: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam saepe animi ipsa modi totam, alias vitae vero, quisquam ad quaerat eligendi ut itaque.',
        },
      ],
    },
  ];
  return (
    <div className={styles.tasksWrap}>
      {tasks.map((task) => (
        <Task task={task} />
      ))}
    </div>
  );
};

export default Tasks;
