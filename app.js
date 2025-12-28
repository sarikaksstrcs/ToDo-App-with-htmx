import express from 'express';
import createHomePageTemplate from './views/index.js';
import TODO_DATA from './data/data.js';
import createTodoListTemplate from './views/todo_list.js';

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
app.listen(3000, () => {
  console.log('App listening on port 3000');
});
