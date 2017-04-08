import express from 'express';
import songController from './controller';

const songRouter = express.Router();

songRouter.post('/download', (req, res) => songController.downloadSongs(req, res));

module.exports = songRouter;
