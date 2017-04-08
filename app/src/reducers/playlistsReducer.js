/**
 * Created by chrisng on 4/8/17.
 */
import * as actionTypes from '../constants/actionTypes.js';

const initialState = {
  playlists: [],
  isFetchingPlaylists: false,
  error: {},
};

export default function playlists(state = initialState, action) {
  const { type, payload } = action;
  switch(type) {
    case actionTypes.GET_PLAYLISTS_FETCHING:
      return { ...state, isFetchingPlaylists: true };
    case actionTypes.GET_PLAYLISTS_SUCCESS:
      return {
        ...state,
        playlists: payload.playlists,
        isFetchingPlaylists: false,
        error: {},
      };
    case actionTypes.GET_PLAYLISTS_FAILURE:
      return {
        ...state,
        isFetchingPlaylists: false,
        error: payload.error,
      };

    default:
      return state;
  }
}
