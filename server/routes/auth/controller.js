const User = require('../../models/UserModel');
const path = require('path');

const authenticate = (req, res) => {
  res.sendFile(path.join(`${__dirname}/../../html/callback.html`));
};

module.exports = { authenticate };
