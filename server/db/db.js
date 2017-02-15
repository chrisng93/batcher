const knex = require('knex')({
  client: 'mysql',
  connection: {
    host: process.env.MYSQL_HOST,
    database: process.env.MYSQL_DB,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    charset: 'utf8',
  },
});

const db = require('bookshelf')(knex);

db.knex.schema.hasTable('users').then((exists) => {
  if (!exists) {
    db.knex.schema.createTable('users', (user) => {
      user.increments('id').primary();
      user.string('username', 255);
      user.string('avatarUrl', 1000);
      user.string('fullName', 255);
      user.string('city', 255);
      user.string('country', 255);
      user.timestamps();
    }).then((table) => {
        console.log('Created Table users:', table);
    });
  }
});

db.knex.schema.hasTable('tracks').then((exists) => {
  if (!exists) {
    db.knex.schema.createTable('tracks', (track) => {
      track.increments('id').primary();
      track.string('permalinkUrl', 1000);
      track.string('genre', 255);
      track.string('uploaderUsername', 255);
      track.string('artworkUrl', 255);
      track.timestamps();
    }).then((table) => {
        console.log('Created Table tracks:', table);
    });
  }
});

module.exports = db;
