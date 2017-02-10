import React from 'react';
import SC from 'soundcloud';

export default class SignIn extends React.Component {
  constructor(props) {
    super(props);
  }

  _authSoundcloud() {
    SC.initialize({
      client_id: process.env.SC_CLIENT_ID,
      redirect_uri: `${process.env.API_URL}/auth`,
    });

    SC.connect().then(() => {
      return SC.get('/me');
    }).then((me) => {
      // Do something here to save user data
    }).catch((err) => {
      console.warn(`Error connecting to Soundcloud: ${err}`);
    });
  }

  render() {
    return (
      <div className="signin">
        <img
          src={require('./../../assets/connect-sc.png')}
          onClick={this._authSoundcloud}
        />
      </div>
    );
  }
}
