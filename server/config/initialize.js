const bodyParser = require('body-parser');

module.exports = (app, express) => {
  // Add middleware as deemed necessary
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
};
