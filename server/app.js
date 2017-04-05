require('babel-register');
const express = require('express');
const env = require('dotenv');

const app = express();

// Load env variables
env.config({ path: './.env' });

require('./callCasper.js');

// Initial config
require('./config/initialize.js')(app);

// Set up db
require('./db/db.js');

// Set up api
require('./api/routes.js')(app);
app.get('/*', (req, res) => {
  res.status(404).send('Route not found');
});

app.listen(process.env.PORT, () => {
  console.log(`Listening on ${process.env.PORT}...`);
});
