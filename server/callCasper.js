/**
 * Created by chrisng on 3/11/17.
 */
const exec = require('child_process').exec;
const http = require('http');
const fs = require('fs');

const testEnv = {
  converterUrl: process.env.CONVERTER_URL,
  url: 'https://soundcloud.com/hybridtrapmusic/breakup',
  artist: 'artist',
  song: 'song',
};

const download = (url, dest) => {
  const file = fs.createWriteStream(dest);
  http.get(url, (response) => {
    response.pipe(file);
    file.on('finish', () => {
      file.close();
    }).on('error', (err) => {
      fs.unlink(dest);
      console.error(`Error downloading file: ${err}`);
    });
  });
};

exec(`casperjs scripts/testScript.js --converterUrl="${testEnv.converterUrl}" --url="${testEnv.url}" --artist="${testEnv.artist}" --song="${testEnv.song}"`, (err, stdout, stderr) => {
  if (err) {
    console.error(`Exec error: ${err}`);
    return;
  }
  download(stdout, `${testEnv.artist} - ${testEnv.song}.mp3`);
});
