/**
 * Created by chrisng on 3/11/17.
 */
import { push } from 'react-router-redux';
import SC from 'soundcloud';
import * as actionTypes from '../constants/actionTypes';

function authFetching() {
  return {
    type: actionTypes.AUTH_FETCHING,
  };
}

function authSuccess(payload) {
  return {
    type: actionTypes.AUTH_SUCCESS,
    payload,
  };
}

function authFailure(payload) {
  return {
    type: actionTypes.AUTH_FAILURE,
    payload,
  };
}

export default function auth() {
  let oauthToken;
  return (dispatch) => {
    dispatch(authFetching());
    SC.connect()
      .then((session) => {
        oauthToken = session.oauth_token;
        return fetch(`${process.env.SC_API_URL}/me?oauth_token=${session.oauth_token}`);
      })
      .then(response => response.json())
      .then((data) => {
        dispatch(push('/playlists'));
        return dispatch(authSuccess({ user: data, oauthToken }));
      })
      .catch(error => dispatch(authFailure({ error })));
  };
}
