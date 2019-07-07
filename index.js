const express = require('express');
const db = require('./data/db');

const server = express();

server.get('/', (req, res) => {
  res.send('hello world');
})

server.get('/api/users', (req, res) => {
  db.find()
    .then(users => {
      res.status(201).json(users);
    })
    .catch(err => {
      sendUserError(500, 'Data not found', res)
      return;
    })
});

server.get('/api/users/:id', (req, res) => {
  const id = req.params.id;
  db.findById(id)
    .then(user => {
      res.status(201).json(user);
    })
    .catch(err => {
      sendUserError(500, 'Data not found', res)
      return;
    })
})

// server.post('/api/users', (req, res) => {

// })

server.listen(8000, () => console.log('API running on port 8000'));
