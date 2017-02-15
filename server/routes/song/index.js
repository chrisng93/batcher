const express = require('express');
const router = express.Router();
const songController = require('./controller.js');

router.post('/retrieve', (req, res) => songController.retrieveTracks(req, res));
router.post('/download', (req, res) => songController.downloadSongs(req, res));
router.get('/download', (req, res) => songController.getDownloads(req, res));

module.exports = router;
