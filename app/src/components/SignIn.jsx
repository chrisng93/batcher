import React, { PropTypes as T } from 'react';

const propTypes = {
  onAuth: T.func,
};

export default function SignIn({ onAuth }) {
  return (
    <div className="signin">
      <div className="signin-connect">
        <div className="signin-connect-sc-container">
          <img className="signin-connect-sc" src={require('../../assets/connect-sc.png')} onClick={onAuth} />
        </div>
      </div>
      <img className="bg" src={require('../../assets/intro.jpg')} />
    </div>
  );
}

SignIn.propTypes = propTypes;
