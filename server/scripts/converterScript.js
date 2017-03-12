/**
 * Created by chrisng on 3/8/17.
 */
const phantom = require('phantom');

async function convertUrlToMp3(audioUrl, artist, song) {
  const instance = await phantom.create();
  const page = await instance.createPage();
  const status = await page.open(process.env.CONVERTER_URL);

  if (status !== 'success') {
    return;
  }

  const result = await page.evaluate(function(audioUrl, artist, song, click) {
    document.querySelector('.input_convert').value = audioUrl;
    return click(document.querySelector('#convertForm fieldset .mainbtn'));
  }, audioUrl, artist, song, click);
  console.log(result)

  await instance.exit();
}

function click(el){
  const ev = document.createEvent('MouseEvent');
  ev.initMouseEvent('click', true, true , window, null, 0, 0, 0, 0, false, false, false, false, 0, null);
  el.dispatchEvent(ev);
}

convertUrlToMp3('https://soundcloud.com/archive_1/youll-be-okay?in=imyetep/sets/my-feels', 'yetep', 'youll be okay');
