import * as actionTypes from '../constants/actionTypes.js';

const initialState = {
  user: {},
  oauthToken: '',
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
        oauthToken: payload.oauthToken,
        isFetching: false,
        error: {},
      };
    case actionTypes.AUTH_FAILURE:
      return {
        ...state,
        user: {},
        oauthToken: '',
        isFetching: false,
        error: payload.error.error_description,
      };
  }
  return state;
}
