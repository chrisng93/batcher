/**
 * Created by chrisng on 4/4/17.
 */
import { createSelector } from 'reselect';

const authStateSelector = state => state.auth;

const oauthTokenSelector = createSelector(
  authStateSelector,
  authState => authState.oauthToken
);

const userSelector = createSelector(
  authStateSelector,
  authState => authState.user
);

const isFetchingAuthSelector = createSelector(
  authStateSelector,
  authState => authState.isFetching
);

const authErrorSelector = createSelector(
  authStateSelector,
  authState => authState.error
);
