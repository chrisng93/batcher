const userRouter = require('./user/index.js');
const songRouter = require('./song/index.js');

module.exports = (app) => {
  app.use('/api/user', userRouter);
  app.use('/api/song', songRouter);
}
