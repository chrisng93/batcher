import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import auth from './authReducer';
import downloads from './downloadsReducer';

export default combineReducers({
  auth,
  downloads,
  routing: routerReducer,
});
