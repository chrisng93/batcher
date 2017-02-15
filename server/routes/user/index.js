const express = require('express');
const router = express.Router();
const userController = require('./controller.js');

router.post('/create', (req, res) => userController.create(req, res));
router.put('/update', (req, res) => userController.update(req, res));

module.exports = router;
