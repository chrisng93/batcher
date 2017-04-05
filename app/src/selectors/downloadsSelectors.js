/**
 * Created by chrisng on 4/5/17.
 */
import { createSelector } from 'reselect';

const downloadsStateSelector = state => state.downloads;

export const favoritesSelector = createSelector(
  downloadsStateSelector,
  downloadsState => downloadsState.favorites
);

export const isFetchingFavoritesSelector = createSelector(
  downloadsStateSelector,
  downloadsState => downloadsState.isFetchingFavorites
);

export const favoritesErrorSelector = createSelector(
  downloadsStateSelector,
  downloadsState => downloadsState.error
);
