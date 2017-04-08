import React, { PropTypes as T } from 'react';

const propTypes = {
  onAuth: T.func,
};

export default function SignIn({ onAuth }) {
  return (
    <div className="signin">
      <img className="bg" src={require('../../assets/intro.jpg')} />
      <div className="signin-connect">
        <div className="signin-connect-sc-container">
          <img className="signin-connect-sc" src={require('../../assets/connect.png')} onClick={onAuth} />
        </div>
      </div>
    </div>
  );
}

SignIn.propTypes = propTypes;
