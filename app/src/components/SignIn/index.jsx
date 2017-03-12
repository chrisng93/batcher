import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import SignIn from './presenter';

function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    onAuth: bindActionCreators(actions.auth, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
