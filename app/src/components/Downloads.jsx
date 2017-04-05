import React, { Component, PropTypes as T } from 'react';
import moment from 'moment';

const propTypes = {

};

export default class Downloads extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favoritesState: [],
      startDate: moment(),
      endDate: moment(),
    };
    this.onChangeValue = this.onChangeValue.bind(this);
    this.onDownload = this.onDownload.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.favorites !== nextProps.favorites) {
      this.setState({ favoritesState: nextProps.favorites });
    }
  }

  onChangeValue(key, value, field) {
    const { favoritesState } = this.state;
    const newFavoritesState = favoritesState;
    newFavoritesState[key][field] = value;
    this.setState({ favoritesState: newFavoritesState });
  }

  onDownload() {
    const { favoritesState } = this.state;
    const { downloadFavorites } = this.props;
    const downloads = favoritesState.filter(song => !!song.artist);
    downloadFavorites({ songs: downloads });
  }

  render() {
    const { favoritesState, startDate, endDate } = this.state;
    return (
      <div className="downloads">
        {favoritesState.map((song, key) => {
          return (
            <div key={key} className="downloads-song">
              <a className="downloads-song-url" href={song.permalink_url} target="_blank">{song.permalink_url}</a>
              <input className="downloads-song-artist" placeholder="artist" value={song.artist ? song.artist : ''} onChange={(e) => this.onChangeValue(key, e.target.value, 'artist')} />
              <input className="downloads-song-title" placeholder="title" value={song.title} onChange={(e) => this.onChangeValue(key, e.target.value, 'title')} />
            </div>
          );
        })}
        <input type="button" value="Download" onClick={this.onDownload} />
      </div>
    );
  }
}

Downloads.propTypes = propTypes;
