/**
 * Created by chrisng on 4/5/17.
 */
import { push } from 'react-router-redux';
import * as actionTypes from '../constants/actionTypes';

function getSongsFetching() {
  return {
    type: actionTypes.GET_SONGS_FETCHING,
  };
}

function getSongsSuccess(payload) {
  return {
    type: actionTypes.GET_SONGS_SUCCESS,
    payload,
  };
}

function getSongsFailure(payload) {
  return {
    type: actionTypes.GET_SONGS_FAILURE,
    payload,
  };
}

function downloadSongsFetching() {
  return {
    type: actionTypes.DOWNLOAD_SONGS_FETCHING,
  };
}

function downloadSongsSuccess(payload) {
  return {
    type: actionTypes.DOWNLOAD_SONGS_SUCCESS,
    payload,
  };
}

function downloadSongsFailure(payload) {
  return {
    type: actionTypes.DOWNLOAD_SONGS_FAILURE,
    payload,
  };
}

export function getSongs(payload) {
  return (dispatch) => {
    dispatch(getSongsFetching());
    fetch(`${process.env.SC_API_URL}/playlists/${payload.playlistId}?oauth_token=${payload.scToken}`, { method: 'GET', mode: 'cors' })
      .then(response => response.json())
      .then((data) => {
        dispatch(push('/songs'));
        return dispatch(getSongsSuccess({ songs: data }));
      })
      .catch(error => dispatch(getSongsFailure({ error })));
  };
}

export function downloadSongs(payload) {
  return (dispatch) => {
    dispatch(downloadSongsFetching());
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({ songs: payload.songs }),
    };
    fetch(`${process.env.API_URL}/api/song/download`, options)
      .then(data => dispatch(downloadSongsSuccess(data)))
      .catch(err => dispatch(downloadSongsFailure(err)));
  };
}
