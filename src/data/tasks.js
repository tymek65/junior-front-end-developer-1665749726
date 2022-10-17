//in working environment with api connected to the app importing/exporting data as in my project wouldn't be possible
//but I think it was pointless to mimic working with api, one of ways of doing same thing would be to just
//get specific information I need in given component with graphql query and then do another graphql query with
//specific task id to get business context
//while working with rest api we could store the data in context (like i was doing couple commits ago) or drill them down to components that needs them

export const tasks = [
  {
    name: 'Application Setup',
    status: 'completed',
    context: [
      {
        author: 'Olga Nelson',
        title: 'Application has been accepted',
        created_at: '2022-10-14T14:20:00',
        content:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat nobis temporibus laboriosam quidem eum nostrum a non maiores quasi quis, molestias hic incidunt at consectetur blanditiis omnis laborum voluptatem. Illum!',
      },
      {
        author: 'Kristen Aniston',
        title: 'New sprint, tasks, and intro information',
        created_at: '2022-10-13T12:13:00',
        content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam saepe animi ipsa modi totam, alias vitae vero, quisquam ad quaerat eligendi ut itaque.',
      },
    ],
  },
  {
    name: 'Static Books List',
    status: 'completed',
    context: [
      {
        author: 'Kristen Aniston',
        title: 'Application has been accepted 🎉 🙌',
        created_at: '2022-10-11T10:20:00',
        content:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat nobis temporibus laboriosam quidem eum nostrum a non maiores quasi quis, molestias hic incidunt at consectetur blanditiis omnis laborum voluptatem. Illum!',
      },
      {
        author: 'Olga Nelson',
        title: 'Application has been accepted',
        created_at: '2022-10-06T09:15:00',
        content:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat nobis temporibus laboriosam quidem eum nostrum a non maiores quasi quis, molestias hic incidunt at consectetur blanditiis omnis laborum voluptatem. Illum!',
      },
      {
        author: 'Kristen Aniston',
        title: 'New sprint, tasks, and intro information',
        created_at: '2022-10-05T21:43:00',
        content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam saepe animi ipsa modi totam, alias vitae vero, quisquam ad quaerat eligendi ut itaque.',
      },
    ],
  },
  {
    name: 'Administration Panel',
    status: 'completed',
    context: [
      {
        author: 'Olga Nelson',
        title: 'Application has been accepted',
        created_at: '2022-10-03T12:22:00',
        content:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat nobis temporibus laboriosam quidem eum nostrum a non maiores quasi quis, molestias hic incidunt at consectetur blanditiis omnis laborum voluptatem. Illum!',
      },
      {
        author: 'Kristen Aniston',
        title: 'New sprint, tasks, and intro information',
        created_at: '2022-10-05T16:37:00',
        content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam saepe animi ipsa modi totam, alias vitae vero, quisquam ad quaerat eligendi ut itaque.',
      },
    ],
  },
  {
    name: 'Connect Admin with Fronted',
    status: 'active',
    context: [
      {
        author: 'Olga Nelson',
        title: 'Application has been accepted',
        created_at: '2022-09-09T20:20:00',
        content:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat nobis temporibus laboriosam quidem eum nostrum a non maiores quasi quis, molestias hic incidunt at consectetur blanditiis omnis laborum voluptatem. Illum!',
      },
      {
        author: 'Kristen Aniston',
        title: 'New sprint, tasks, and intro information',
        created_at: '2022-09-10T19:13:00',
        content:
          'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora, illo aliquam eligendi magni suscipit labore! Hic vero, harum assumenda laudantium labore ea quidem sed ullam! Inventore nemo temporibus cum totam voluptates assumenda saepe alias sed, cumque iusto eum tenetur. Optio, cupiditate expedita, nisi incidunt rem dignissimos harum facere culpa atque laboriosam ut. Asperiores molestiae enim quos cumque velit quasi magnam nisi unde repellat at nihil totam, quam facere obcaecati quas perspiciatis minima doloremque numquam atque eum ducimus quisquam reprehenderit quis? Totam soluta repudiandae delectus quasi vero laboriosam exercitationem, recusandae a, impedit natus beatae voluptates necessitatibus, fugit aperiam dolores voluptas cumque?',
      },
    ],
  },
  {
    name: 'Book Review Feature',
    status: 'blocked',
    context: [
      {
        author: 'Olga Nelson',
        title: 'Application has been accepted',
        created_at: '2022-10-14T14:20:00',
        content:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat nobis temporibus laboriosam quidem eum nostrum a non maiores quasi quis, molestias hic incidunt at consectetur blanditiis omnis laborum voluptatem. Illum!',
      },
      {
        author: 'Kristen Aniston',
        title: 'New sprint, tasks, and intro information',
        created_at: '2022-10-13T12:13:00',
        content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam saepe animi ipsa modi totam, alias vitae vero, quisquam ad quaerat eligendi ut itaque.',
      },
    ],
  },
];
