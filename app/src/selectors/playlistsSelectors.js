/**
 * Created by chrisng on 4/8/17.
 */
import { createSelector } from 'reselect';

const playlistsStateSelector = state => state.playlists;

export const playlistsSelector = createSelector(
  playlistsStateSelector,
  playlistsState => playlistsState.playlists
);

export const isFetchingPlaylistsSelector = createSelector(
  playlistsStateSelector,
  playlistsState => playlistsState.isFetchingPlaylists
);

export const playlistsErrorSelector = createSelector(
  playlistsStateSelector,
  playlistsState => playlistsState.error
);
