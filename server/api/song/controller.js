import convertSong from '../../manageDownload';

async function downloadSongs(req, res) {
  for (let i = 0; i < req.body.songs.length; i++) {
    const curr = req.body.songs[i];
    convertSong(curr.permalink_url, curr.artist, curr.title);

  }
  res.send('Done - please check your downloads');
}

module.exports = { downloadSongs };
