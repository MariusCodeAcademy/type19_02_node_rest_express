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

// apjungti // GET - /api/users ir // GET - /api/users?userId=1 i viena route

// gauti visus userius
// GET - /api/users - grazina visus vartotojus
app.get('/api/users', (request, response) => {
  // jei nera userId parametro
  // response.send('gauti visus userius');
  response.json(users);

  // jei yra atfiltruojam ir grazina konkretu vartotoja
});
// gauti userius kuriu amzius dauiau nei 21
app.get('/api/users/adults', (request, response) => {
  // amziu paduodam kaip query parametra ?age=30
  // atfliltruoti users
  const filtered = users.filter((userObj) => userObj.age >= 25);
  // issiusti atfiltruotus atgal su response
  // response.send('gauti userius kuriu amzius dauiau nei 21');

  // ar radau nors viena useri?
  if (filtered.length === 0) {
    response.status(404).json({
      success: false,
      msg: 'No users in that age found',
    });
    return;
  }

  response.json({ success: true, data: filtered });
});
// GET - /api/users/adults -> gauti userius kuriu amzius dauiau nei 21
// gauti viena useri
// GET - /api/users/single?userId=1 -> gauti viena useri
app.get('/api/users/single', (request, response) => {
  console.log('request.query ===', request.query);
  const { userId } = request.query; // visada stringas
  // atfliltruoti users
  // issiusti konkretu vartotoja atgal su response
  const found = users.find((uObj) => uObj.id === +userId);
  console.log('found ===', found);
  // extra jei neradom pranesti kad nerasta
  if (!found) {
    response.status(404).json({ msg: 'user not found' });
    return;
  }
  // response.send('gauti viena useri');
  response.json(found);
});
// isrikiuoti userius pagal amziu
// GET - /api/users/sort/age -> isrikiuoti userius pagal amziu
app.get('/api/users/sort/age', (request, response) => {
  // query parametras ?order=desc arba ?order=asc
  // isrikiuoti users
  const usersCopy = sorted.slice();
  // const usersCopy = [...users]
  const sorted = usersCopy.sort((a, b) => a.age - b.age);
  // issiusti atgal su response
  // response.send('isrikiuoti userius pagal amziu');
  response.json(sorted);
});

// GET - /api/users/city/la -> grazina vartotojus kuriu miestas 'Los Angeles'

app.listen(PORT, () => {
  console.log(`Users sever listening on port http://localhost:${PORT}`);
});
