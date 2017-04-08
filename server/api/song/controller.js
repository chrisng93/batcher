import AdmZip from 'adm-zip';
import convertSong from '../../manageDownload';

async function downloadSongs(req, res) {
  const zip = new AdmZip();
  for (let i = 0; i < req.body.songs.length; i++) {
    const curr = req.body.songs[i];
    const file = await convertSong(curr.permalink_url, curr.artist, curr.title);
    // zip.addFile(file, )
    console.log(file)
  }
  res.send('post dl');
}

module.exports = { downloadSongs };
