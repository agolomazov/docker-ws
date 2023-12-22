const express = require('express');
const cors = require('cors');

const usersData = require('./db.json');

const app = express();

app.use(cors());

app.get('/api/users', (req, res) => {
  res.json(usersData);
});

app.listen(5000, () => {
  console.log('Users api started on port 5000');
})