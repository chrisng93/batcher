/**
 * Created by chrisng on 3/11/17.
 */
import SC from 'soundcloud';

const fetchUser = (session) => {
  fetch(`//api.soundcloud.com/me?oauth_token=${session.oauth_token}`)
    .then(response => response.json())
    .then((data) => {
      console.log('FETCHED!')
      console.log(data);
    });
};

export default function auth() {
  SC.connect()
    .then((session) => {
      console.log('session', session)
      fetchUser(session);
    })
    .catch((err) => {
      console.warn(`Error connecting to Soundcloud: ${err.error_description}`);
    });
}
