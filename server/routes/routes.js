const authRouter = require('./auth/index.js');
const userRouter = require('./user/index.js');
const songRouter = require('./song/index.js');

module.exports = (app) => {
  app.use('/auth', authRouter);
  app.use('/api/user', userRouter);
  app.use('/api/song', songRouter);
}
