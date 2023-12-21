const express = require('express');
const axios = require('axios');

const app = express();
const { connectDb } = require('./helpers/db');
const { host, port, db, apiUrl } = require('./configuration');

const startServer = () => {
  app.listen(port, () => {
    console.log(`Started auth service on port: ${port}`);
    console.log(`On host ${host}`);
    console.log(`Our database ${db}`);
  });
};

app.get('/test', (req, res) => {
  res.send('Out auth server is working volumes!');
});

app.get('/api/currentUser', (req, res) => {
  res.json({
    id: "1234",
    email: "foo@gmail.com"
  })
})

app.get('/testwithapidata', (req, res) => {
  axios.get(apiUrl + '/testapidata').then((response) => {
    res.json({
      testapidata: response.data.testwithapi,
      v: 1
    });
  })
})

connectDb()
  .on('error', console.log)
  .on('disconnect', connectDb)
  .once('open', startServer);