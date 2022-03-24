'use strict';

// Libs
const express = require('express');

// Utils
const { setupLogging } = require('./utils/logs/morgan');
const { setupProxies } = require('./utils/proxy');
const { setupAuth } = require('./utils/auth');
const { setupRateLimit } = require('./utils/ratelimit')

// Routes 
const { ROUTES } = require('./routes');

const app = express();
const port = 5000;

setupLogging(app);
// setupRateLimit(app, ROUTES);
// setupAuth(app, ROUTES);
setupProxies(app, ROUTES);

app.get('/', (req, res) => {
  return res.send('Hello from API-GETWAY');
});

app.listen(port, () => {
  console.log(`Example app users listening in http://localhost:${port}`);
});