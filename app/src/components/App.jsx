import React, { PropTypes as T } from 'react';

export default function App({ children }) {
  return (
    <div id="app">
      {children}
    </div>
  );
}

App.propTypes = {
  children: T.node,
};
