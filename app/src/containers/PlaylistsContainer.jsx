import React, { Component, PropTypes as T } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { scTokenSelector } from '../selectors/authSelectors';
import { playlistsSelector } from '../selectors/playlistsSelectors';
import Playlists from '../components/Playlists';

const propTypes = {
  scToken: T.string,
  playlists: T.array,

  getPlaylists: T.func,
  getSongs: T.func,
};

class PlaylistsContainer extends Component {
  componentWillReceiveProps(nextProps) {
    const { getPlaylists, scToken } = nextProps;
    if (this.props.scToken !== nextProps.scToken) {
      getPlaylists(scToken);
    }
  }

  render() {
    return (
      <Playlists {...this.props} />
    );
  }
}

function mapStateToProps(state) {
  return {
    scToken: scTokenSelector(state),
    playlists: playlistsSelector(state),
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getPlaylists: bindActionCreators(actions.getPlaylists, dispatch),
    getSongs: bindActionCreators(actions.getSongs, dispatch),
  };
}

PlaylistsContainer.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistsContainer);
