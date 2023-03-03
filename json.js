const todo = [
  {
    id: 1,
    text: 'Take out trash',
    isCompleted: true,
  },
  {
    id: 2,
    text: 'Meeting with boss',
    isCompleted: true,
  },
  {
    id: 3,
    text: 'Dentist apt',
    isCompleted: false,
  },
];

const todoText = todo.map((item) => {
  return item.text;
});

console.log(todoText);

const newTodo = todo
  .filter((item) => {
    return item.isCompleted === true;
  })
  .map((item) => {
    return item;
  });

console.log(newTodo);
