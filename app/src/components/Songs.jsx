import React, { Component, PropTypes as T } from 'react';

const propTypes = {
  songs: T.array,
  isDownloading: T.bool,
  downloadSuccess: T.bool,
  downloadError: T.bool,

  downloadSongs: T.func,
};

export default class Songs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      songsState: [],
    };
    this.onChangeValue = this.onChangeValue.bind(this);
    this.onDownload = this.onDownload.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.songs !== nextProps.songs) {
      this.setState({ songsState: nextProps.songs });
    }
  }

  onChangeValue(key, value, field) {
    const newFavoritesState = this.state.songsState;
    newFavoritesState[key][field] = value;
    this.setState({ songsState: newFavoritesState });
  }

  onDownload() {
    const { songsState } = this.state;
    const { downloadSongs } = this.props;
    const songs = songsState.filter(song => !!song.artist);
    downloadSongs({ songs });
  }

  render() {
    const { songsState } = this.state;
    const { isDownloading, downloadSuccess, downloadError } = this.props;
    return (
      <div className="songs">
        {songsState.map((song, key) =>
          <div key={key} className="songs-song">
            <a
              className="songs-song-url"
              href={song.permalink_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {song.permalink_url}
            </a>
            <input
              className="songs-song-artist"
              placeholder="artist"
              value={song.artist ? song.artist : ''}
              onChange={e => this.onChangeValue(key, e.target.value, 'artist')}
            />
            <input
              className="songs-song-title"
              placeholder="title"
              value={song.title}
              onChange={e => this.onChangeValue(key, e.target.value, 'title')}
            />
          </div>
        )}
        <input className="songs-download" type="button" value="Download" onClick={this.onDownload} />
        {isDownloading ? <div className="songs-downloading">Downloading songs...</div> : null}
        {downloadSuccess ? <div className="songs-download-success">Successfully downloaded songs!</div> : null}
        {downloadError ? <div className="songs-download-error">Error downloading songs...</div> : null}
      </div>
    );
  }
}

Songs.propTypes = propTypes;
