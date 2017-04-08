/**
 * Created by chrisng on 4/5/17.
 */
import { createSelector } from 'reselect';

const songsStateSelector = state => state.songs;

export const songsSelector = createSelector(
  songsStateSelector,
  songsState => songsState.songs
);

export const isFetchingSongsSelector = createSelector(
  songsStateSelector,
  songsState => songsState.isFetchingSongs
);

export const songsErrorSelector = createSelector(
  songsStateSelector,
  songsState => songsState.error
);

export const isDownloadingSelector = createSelector(
  songsStateSelector,
  songsState => songsState.isDownloading
);

export const downloadSuccessSelector = createSelector(
  songsStateSelector,
  songsState => songsState.downloadSuccess
);

export const downloadErrorSelector = createSelector(
  songsStateSelector,
  songsState => songsState.downloadError
);
