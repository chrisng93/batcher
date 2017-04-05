import React, { Component, PropTypes as T } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { scTokenSelector } from '../selectors/authSelectors';
import { favoritesSelector } from '../selectors/downloadsSelectors';
import Downloads from '../components/Downloads';

const propTypes = {
};

class DownloadsContainer extends Component {
  componentWillReceiveProps(nextProps) {
    const { getFavorites, scToken } = nextProps;
    if (this.props.scToken !== nextProps.scToken) {
      getFavorites(scToken);
    }
  }

  render() {
    return (
      <Downloads {...this.props} />
    );
  }
}

function mapStateToProps(state) {
  return {
    scToken: scTokenSelector(state),
    favorites: favoritesSelector(state),
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getFavorites: bindActionCreators(actions.getFavorites, dispatch),
    downloadFavorites: bindActionCreators(actions.downloadFavorites, dispatch),
  }
}

DownloadsContainer.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(DownloadsContainer);
