import express from 'express';
import createHomePageTemplate from './views/index.js';
import TODO_DATA from './data/data.js';
import createTodoListTemplate from './views/todo_list.js';
import createTodoItemTemplate from './views/components/todo_item.js';

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send(createHomePageTemplate());
});

app.post('/clicked', (req, res) => {
  console.log('Button was clicked!');
  res.send(createTodoListTemplate(TODO_DATA));
});

app.post('/toggle-status', (req, res) => {
  const itemId = req.body.id;
  const item = TODO_DATA.find(todo => todo.id === itemId);
  if (item) {
    item.status = item.status === 'complete' ? 'incomplete' : 'complete';
  }
 
  console.log(TODO_DATA);
  res.send(createTodoListTemplate(TODO_DATA));
}
);

app.post('/todos', (req, res) => {
  const newTitle = req.body.title;
  const newTodo = {
    id: (TODO_DATA.length + 1).toString(),
    title: newTitle,
    status: 'incomplete'
  };
  TODO_DATA.push(newTodo);
  console.log(TODO_DATA);
  res.send(createTodoItemTemplate(newTodo));
});

app.delete('/todos/:id', (req, res) => {
  const itemId = req.params.id;
  const itemIndex = TODO_DATA.findIndex(todo => todo.id === itemId);
  if (itemIndex !== -1) {
    TODO_DATA.splice(itemIndex, 1);
  }
  console.log(TODO_DATA);
  res.send();
});

app.listen(3000, () => {
  console.log('App listening on port 3000');
});
