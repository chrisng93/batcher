const express = require('express');
const app = express();
const env = require('dotenv');

// Load env variables
env.config({ path: './.env' });

// Initial config
require('./config/initialize.js')(app, express);

// Set up db
require('./db/db.js');

// Set up routes
require('./routes/routes.js')(app);
app.get('/*', (req, res) => {
  res.status(404).send('Route not found');
});

app.listen(process.env.PORT, () => {
  console.log(`Listening on ${process.env.PORT}...`);
});
