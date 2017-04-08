import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import auth from './authReducer';
import playlists from './playlistsReducer';
import songs from './songsReducer';

export default combineReducers({
  auth,
  playlists,
  songs,
  routing: routerReducer,
});
