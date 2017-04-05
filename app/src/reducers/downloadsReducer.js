/**
 * Created by chrisng on 4/5/17.
 */
import * as actionTypes from '../constants/actionTypes.js';

const initialState = {
  favorites: [],
  isFetchingFavorites: false,
  error: {},
};

export default function downloads(state = initialState, action) {
  const { type, payload } = action;
  switch(type) {
    case actionTypes.GET_FAVORITES_FETCHING:
      return { ...state, isFetchingFavorites: true };
    case actionTypes.GET_FAVORITES_SUCCESS:
      return {
        ...state,
        favorites: payload.favorites,
        isFetchingFavorites: false,
        error: {},
      };
    case actionTypes.GET_FAVORITES_FAILURE:
      return {
        ...state,
        isFetchingFavorites: false,
        error: payload.error,
      };
  }
  return state;
}
