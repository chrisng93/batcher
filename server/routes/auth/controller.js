const User = require('../../models/UserModel');

const authenticate = (req, res) => {
  res.send('auth');
};

module.exports = { authenticate };
