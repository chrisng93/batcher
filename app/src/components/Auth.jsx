import React, { Component } from 'react';

export default class Auth extends Component {
  componentDidMount() {
    window.setTimeout(opener.SC.connectCallback, 1);
  }

  render() {
    return <div><p>Attempting to connect to Soundcloud...</p></div>;
  }
}
