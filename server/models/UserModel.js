const db = require('../db/db.js');
const Track = require('./TrackModel.js');

const User = db.Model.extend({

  tableName: 'users',
  hasTimestamps: true,

  defaults: () => {
    return {
      username: '',
      avatarUrl: '',
      fullName: '',
      city: '',
      country: '',
    }
  },

  tracks: () => this.hasMany(Track),

});

module.exports = User;
