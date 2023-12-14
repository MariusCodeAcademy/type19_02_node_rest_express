const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();

const PORT = 3000;

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

app.listen(PORT, () => {
  console.log(`Users sever listening on port http://localhost:${PORT}`);
});
