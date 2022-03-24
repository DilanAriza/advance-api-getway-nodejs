'use strict';

// Libs
const express = require('express');

// Utils
const { setupLogging } = require('./utils/logs/morgan');

const app = express();
const port = 3000;

setupLogging(app);

app.get('/', (req, res) => {
  return res.send('Hello from users');
});

app.get('/nashe', (req, res) => {
  return res.send('Hello from users, nashe');
});

app.listen(port, () => {
  console.log(`Example app users listening in http://localhost:${port}`);
});