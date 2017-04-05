/**
 * Created by chrisng on 4/5/17.
 */
import * as actionTypes from '../constants/actionTypes';

function getFavoritesFetching() {
  return {
    type: actionTypes.GET_FAVORITES_FETCHING,
  }
}

function getFavoritesSuccess(payload) {
  return {
    type: actionTypes.GET_FAVORITES_SUCCESS,
    payload,
  }
}

function getFavoritesFailure(payload) {
  return {
    type: actionTypes.GET_FAVORITES_FAILURE,
    payload,
  }
}

function downloadFavoritesFetching() {
  return {
    type: actionTypes.DOWNLOAD_FAVORITES_FETCHING,
  }
}

function downloadFavoritesSuccess(payload) {
  return {
    type: actionTypes.DOWNLOAD_FAVORITES_SUCCESS,
    payload,
  }
}

function downloadFavoritesFailure(payload) {
  return {
    type: actionTypes.DOWNLOAD_FAVORITES_FAILURE,
    payload,
  }
}

export function getFavorites(scToken) {
  return (dispatch) => {
    dispatch(getFavoritesFetching());
    fetch(`${process.env.SC_API_URL}/me/favorites?oauth_token=${scToken}`, { method: 'GET', mode: 'cors' })
      .then(response => response.json())
      .then(data => dispatch(getFavoritesSuccess({ favorites: data })))
      .catch(error => dispatch(getFavoritesFailure({ error })));
  }
}

export function downloadFavorites(payload) {
  return (dispatch) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({ songs: payload.songs }),
    };
    fetch(`${process.env.API_URL}/api/song/download`, options)
      .then(data => console.log(data))
      .catch(err => console.log(err))
    dispatch(downloadFavoritesSuccess())
  }
}
