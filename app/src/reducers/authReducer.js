/**
 * Created by chrisng on 4/5/17.
 */
import * as actionTypes from '../constants/actionTypes.js';

const initialState = {
  user: {},
  scToken: '',
  isFetching: false,
  error: {},
};

export default function auth(state = initialState, action) {
  const { type, payload } = action;
  switch(type) {
    case actionTypes.AUTH_FETCHING:
      return { ...state, isFetching: true };
    case actionTypes.AUTH_SUCCESS:
      return {
        ...state,
        user: payload.user,
        scToken: payload.oauthToken,
        isFetching: false,
        error: {},
      };
    case actionTypes.AUTH_FAILURE:
      return {
        ...state,
        user: {},
        scToken: '',
        isFetching: false,
        error: payload.error.error_description,
      };
  }
  return state;
}
