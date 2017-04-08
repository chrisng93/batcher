import songRouter from './song/index';

module.exports = (app) => {
  app.use('/api/song', songRouter);
};
