/**
 * Created by chrisng on 3/11/17.
 */
const casper = require('casper').create();

const converterUrl = casper.cli.raw.get('converterUrl');
const url = casper.cli.raw.get('url');
const artist = casper.cli.raw.get('artist');
const song = casper.cli.raw.get('song');

casper.start(converterUrl);

casper.thenEvaluate(function(url) {
  document.querySelector('.input_convert').value = url;
  document.querySelector('#convertForm .mainbtn').click();
}, url);

casper.thenEvaluate(function(artist, song) {
  document.querySelector('#input_artist a').click();
  document.querySelector('#input_artist input').value = artist;

  document.querySelector('#input_title a').click();
  document.querySelector('#input_title input').value = song;

  document.querySelector('#advancedtagsbtn a').click();
  document.querySelector('#inputCover').click();

  document.querySelector('.btn-success').click();
}, artist, song);

casper.then(function() {
  var dlUrl = this.evaluate(function() {
    return document.querySelector('.btn-success').href;
  });
  this.echo(dlUrl);
});

casper.run(function() {
  this.exit();
});
