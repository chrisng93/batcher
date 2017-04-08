import convertSong from '../../scripts/manageDownload';

async function downloadSongs(req, res) {
  for (let i = 0; i < req.body.songs.length; i++) {
    const curr = req.body.songs[i];
    const file = await convertSong(curr.permalink_url, curr.artist, curr.title);
    console.log(file)
  }
  res.send('post dl');
}

module.exports = { downloadSongs };
