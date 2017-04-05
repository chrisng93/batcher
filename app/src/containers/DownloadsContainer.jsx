import React, { PropTypes as T } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Downloads from '../components/Downloads';

const propTypes = {
};

function DownloadsContainer(props) {
  return (
    <Downloads {...props} />
  );
}

function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
  };
}

DownloadsContainer.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(DownloadsContainer);
