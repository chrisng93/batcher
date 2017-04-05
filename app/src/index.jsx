import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import SC from 'soundcloud';

import configureStore from './store/configureStore';
import App from './components/App';
import Auth from './components/Auth';
import SignInContainer from './containers/SignInContainer';
import DownloadsContainer from './containers/DownloadsContainer';

SC.initialize({ client_id: process.env.SC_CLIENT_ID, redirect_uri: process.env.SC_REDIRECT_URI });

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={SignInContainer} />
        <Route path="/" component={SignInContainer} />
        <Route path="/auth" component={Auth} />
        <Route path="/downloads" component={DownloadsContainer} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
