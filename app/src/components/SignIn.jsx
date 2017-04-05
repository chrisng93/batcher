import React from 'react';

export default function SignIn({ onAuth }) {
  return (
    <div className="signin">
      <img src={require('../../assets/connect-sc.png')} onClick={onAuth} />
    </div>
  );
}
