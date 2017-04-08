import React, { Component, PropTypes as T } from 'react';

const propTypes = {
  scToken: T.string,
  playlists: T.array,

  getSongs: T.func,
};

export default class Playlists extends Component {
  render() {
    const { scToken, playlists, getSongs } = this.props;
    return (
      <div className="playlists">
        {playlists.map(playlist =>
          <div
            className="playlists-playlist"
            key={playlist.id}
            onClick={() => getSongs({ scToken, playlistId: playlist.id })}
          >
            {playlist.title}
          </div>
        )}
      </div>
    );
  }
}

Playlists.propTypes = propTypes;
