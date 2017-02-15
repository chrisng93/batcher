const db = require('../db/db.js');
const User = require('./UserModel.js');

const Track = db.Model.extend({

  tableName: 'users',
  hasTimestamps: true,

  defaults: () => {
    return {
      permalinkUrl: '',
      genre: '',
      uploaderUsername: '',
      artworkUrl: '',
    }
  },

  users: () => this.hasMany(User),

});

module.exports = Track;
