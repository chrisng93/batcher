/**
 * Created by chrisng on 4/8/17.
 */
import * as actionTypes from '../constants/actionTypes';

function getPlaylistsFetching() {
  return {
    type: actionTypes.GET_PLAYLISTS_FETCHING,
  };
}

function getPlaylistsSuccess(payload) {
  return {
    type: actionTypes.GET_PLAYLISTS_SUCCESS,
    payload,
  };
}

function getPlaylistsFailure(payload) {
  return {
    type: actionTypes.GET_PLAYLISTS_FAILURE,
    payload,
  };
}

export default function getPlaylists(scToken) {
  return (dispatch) => {
    dispatch(getPlaylistsFetching());
    fetch(`${process.env.SC_API_URL}/me/playlists?oauth_token=${scToken}`, { method: 'GET', mode: 'cors' })
      .then(response => response.json())
      .then(data => dispatch(getPlaylistsSuccess({ playlists: data })))
      .catch(error => dispatch(getPlaylistsFailure({ error })));
  };
}
