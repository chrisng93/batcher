import React, { PropTypes as T } from 'react';

const propTypes = {
  scToken: T.string,
  playlists: T.array,

  getSongs: T.func,
};

export default function Playlists(props) {
  const { scToken, playlists, getSongs } = props;
  return (
    <div className="playlists">
      <img className="bg" src={require('../../assets/playlists.jpg')} />
      <div className="playlists-title">
        Playlists
      </div>
      {playlists.map(playlist =>
        <div
          className="playlists-playlist"
          key={playlist.id}
          onClick={() => getSongs({ scToken, playlistId: playlist.id })}
        >
          <span>{playlist.title}</span>
        </div>
      )}
    </div>
  );
}

Playlists.propTypes = propTypes;
