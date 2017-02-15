const User = require('../../models/UserModel');
const Track = require('../../models/TrackModel');

const retrieveTracks = (req, res) => {
  res.send('retrieve');
};

const downloadSongs = (req, res) => {
  res.send('post dl');
};

const getDownloads = (req, res) => {
  res.send('get dl');
};

module.exports = { retrieveTracks, downloadSongs, getDownloads };
