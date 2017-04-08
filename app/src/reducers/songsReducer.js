/**
 * Created by chrisng on 4/5/17.
 */
import * as actionTypes from '../constants/actionTypes.js';

const initialState = {
  songs: [],
  isFetchingSongs: false,
  error: true,

  isDownloading: false,
  downloadSuccess: false,
  downloadError: false,
};

export default function songs(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.GET_SONGS_FETCHING:
      return { ...state, isFetchingSongs: true };
    case actionTypes.GET_SONGS_SUCCESS:
      return {
        ...state,
        songs: payload.songs.tracks,
        isFetchingSongs: false,
        error: false,
      };
    case actionTypes.GET_SONGS_FAILURE:
      return {
        ...state,
        isFetchingSongs: false,
        error: true,
      };

    case actionTypes.DOWNLOAD_SONGS_FETCHING:
      return {
        ...state,
        isDownloading: true,
        downloadSuccess: false,
        downloadError: false,
      };
    case actionTypes.DOWNLOAD_SONGS_SUCCESS:
      return {
        ...state,
        isDownloading: false,
        downloadSuccess: true,
      };
    case actionTypes.DOWNLOAD_SONGS_FAILURE:
      return {
        ...state,
        isDownloading: false,
        downloadError: true,
      };

    default:
      return state;
  }
}
