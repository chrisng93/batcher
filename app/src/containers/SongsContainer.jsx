import React, { PropTypes as T } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { scTokenSelector } from '../selectors/authSelectors';
import { songsSelector, isDownloadingSelector, downloadSuccessSelector,
  downloadErrorSelector } from '../selectors/songsSelectors';
import Songs from '../components/Songs';

const propTypes = {
  scToken: T.string,
  songs: T.array,
  isDownloading: T.bool,
  downloadSuccess: T.bool,
  downloadError: T.bool,

  getFavorites: T.func,
  downloadSongs: T.func,
};

function SongsContainer(props) {
  return (
    <Songs {...props} />
  );
}

function mapStateToProps(state) {
  return {
    scToken: scTokenSelector(state),
    songs: songsSelector(state),
    isDownloading: isDownloadingSelector(state),
    downloadSuccess: downloadSuccessSelector(state),
    downloadError: downloadErrorSelector(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getFavorites: bindActionCreators(actions.getSongs, dispatch),
    downloadSongs: bindActionCreators(actions.downloadSongs, dispatch),
  };
}

SongsContainer.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(SongsContainer);
