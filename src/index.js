const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const PORT = 3000;

// Middleware
app.use(cors());
app.use(morgan('dev'));

const users = [
  { name: 'John', age: 25 },
  { name: 'Jane', age: 30 },
  { name: 'Bob', age: 35 },
];

// api endpoint
// localhost:3000/ => hello back end world
// app - express app
// get - metodas htttp get, post, put, patch, delete
// '/' - endpoint address
// request - atejusios uzklausos objektas
// response - atsakymo atgal objektas
// (request, response) => {<ivyks kodas kai ateisim pagal adresa ir metoda>}

// route GET - /about.html
app.get('/about.html', (request, response) => {
  response.send('Hello World!');
});

// route GET - /
app.get('/', (request, response) => {
  response.send('<h1>Welcome to homepage</h1>');
});

// route GET - /api/users
app.get('/api/users', (request, response) => {
  console.log('request.query ===', request.query);
  response.json(users);
});

// route GET - /api/users/1
app.get('/api/users/1', (request, response) => {
  console.log('request.query ===', request.query);
  response.json(users[0]);
});

app.listen(PORT, () => {
  console.log(`Example app listening on port http://localhost:${PORT}`);
});
