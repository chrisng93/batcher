/**
 * Created by chrisng on 3/11/17.
 */
const exec = require('child_process').exec;
import http from 'http';
import fs from 'fs';

const converterUrl = process.env.CONVERTER_URL;

const download = (dlUrl, originalUrl, artist, song, resolve) => {
  console.log('downloading', dlUrl, originalUrl, artist, song);
  if (dlUrl.slice(0, 4) === 'null') {
    console.log(converterUrl)
    convertSong(originalUrl, artist, song);
    return;
  }
  const dest = `./downloads/${artist} - ${song}.mp3`;
  const file = fs.createWriteStream(dest);
  http.get(dlUrl, (response) => {
    response.pipe(file);
    file.on('finish', () => {
      file.close();
      resolve(file);
    }).on('error', (err) => {
      fs.unlink(dest);
      console.error(`Error downloading file: ${err}`);
    });
  });
};

export default async function convertSong(url, artist, song) {
  return new Promise((resolve, reject) => {
    console.log('converting song', converterUrl, url, artist, song);
    exec(`casperjs scripts/downloadScript.js --converterUrl="${converterUrl}" --url="${url}" --artist="${artist}" --song="${song}"`, (err, stdout, stderr) => {
      if (err) {
        console.error(`Exec error: ${err}`);
        return;
      }
      download(stdout, url, artist, song, resolve);
    });
  });
}
