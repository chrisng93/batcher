/**
 * Created by chrisng on 4/4/17.
 */
import { createSelector } from 'reselect';

const authStateSelector = state => state.auth;

export const scTokenSelector = createSelector(
  authStateSelector,
  authState => authState.scToken
);

export const userSelector = createSelector(
  authStateSelector,
  authState => authState.user
);

export const isFetchingAuthSelector = createSelector(
  authStateSelector,
  authState => authState.isFetching
);

export const authErrorSelector = createSelector(
  authStateSelector,
  authState => authState.error
);
