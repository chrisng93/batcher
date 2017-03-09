/**
 * Created by chrisng on 3/8/17.
 */
const phantom = require('phantom');

async function convertUrlToMp3(audioUrl, artist, song) {
  const instance = await phantom.create();
  const page = await instance.createPage();
  const status = await page.open(process.env.CONVERTER_URL);
  console.log(status);
  const content = await page.property('content');
  console.log(content);
  await instance.exit();
}

// const convertUrlToMp3 = (audioUrl, artist, song) => {
  // console.log('starting script')
  // spooky.start(process.env.CONVERTER_URL);
  // spooky.then(function() {
  //   console.log('clicking on buttons')
  //   this.sendKeys('input.input_convert', audioUrl);
  //   this.click('.mainbtn button[type="submit"]');
  //   console.log(this.getCurrentUrl())
  // });
// };

convertUrlToMp3('https://soundcloud.com/archive_1/youll-be-okay?in=imyetep/sets/my-feels');
