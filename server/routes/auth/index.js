const express = require('express');
const router = express.Router();
const authController = require('./controller.js');

router.get('/', (req, res) => authController.authenticate(req, res));

module.exports = router;
