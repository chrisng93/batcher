import auth from './authActions';
import { getSongs, downloadSongs } from './songsActions';
import getPlaylists from './playlistsActions';

module.exports = {
  auth,
  getPlaylists,
  getSongs,
  downloadSongs,
};
