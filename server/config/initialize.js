const bodyParser = require('body-parser');

module.exports = (app) => {
  app.use(bodyParser.json({limit: '50mb', extended: true}));
  app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    // intercept OPTIONS method
    if (req.method === 'OPTIONS') {
      return res.status(200).send();
    }

    next();
  });
};
