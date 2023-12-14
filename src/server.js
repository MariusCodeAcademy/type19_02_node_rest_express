const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();

const PORT = 3000;

// Middleware
app.use(cors());
app.use(morgan('dev'));

const users = [
  {
    id: 1,
    name: 'John Doe',
    age: 25,
    isActive: true,
    address: {
      street: '123 Main St',
      city: 'New York',
      country: 'USA',
    },
  },
  {
    id: 2,
    name: 'Jane Smith',
    age: 30,
    isActive: false,
    address: {
      street: '456 Elm St',
      city: 'Los Angeles',
      country: 'USA',
    },
  },
  {
    id: 3,
    name: 'Bob Johnson',
    age: 35,
    isActive: true,
    address: {
      street: '789 Oak St',
      city: 'Chicago',
      country: 'USA',
    },
  },
  {
    id: 4,
    name: 'Serbentautas Bordiuras',
    age: 18,
    isActive: true,
    address: {
      street: 'Vytauto 19',
      city: 'Kaunas',
      country: 'LT',
    },
  },
];

// gauti visus userius
// GET - /api/users - grazina visus vartotojus
app.get('/api/users', (request, response) => {
  // response.send('gauti visus userius');
  response.json(users);
});
// gauti userius kuriu amzius dauiau nei 21
app.get('/api/users/adults', (request, response) => {
  // atfliltruoti users
  const filtered = '';
  // issiusti atfiltruotus atgal su response
  response.send('gauti userius kuriu amzius dauiau nei 21');
});
// GET - /api/users/adults -> gauti userius kuriu amzius dauiau nei 21
// gauti viena useri
// GET - /api/users/single?userId=1 -> gauti viena useri
app.get('/api/users/single', (request, response) => {
  console.log('request.query ===', request.query);
  const userId = 2;
  // atfliltruoti users
  const found = '';
  // issiusti konkretu vartotoja atgal su response
  // extra jei neradom pranesti kad nerasta
  response.send('gauti viena useri');
});
// isrikiuoti userius pagal amziu
// GET - /api/users/sort/age -> isrikiuoti userius pagal amziu

app.listen(PORT, () => {
  console.log(`Users sever listening on port http://localhost:${PORT}`);
});
