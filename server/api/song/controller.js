const User = require('../../models/UserModel');
const Track = require('../../models/TrackModel');
import convertSong from '../../callCasper';

const retrieveTracks = (req, res) => {
  res.send('retrieve');
};

async function downloadSongs(req, res) {
  for (let i = 0; i < req.body.songs.length; i++) {
    const curr = req.body.songs[i];
    await convertSong(curr.permalink_url, curr.artist, curr.title);
  }
  res.send('post dl');
}

const getDownloads = (req, res) => {
  res.send('get dl');
};

module.exports = { retrieveTracks, downloadSongs, getDownloads };
