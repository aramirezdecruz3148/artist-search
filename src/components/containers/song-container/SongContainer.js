import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Songs from '../../songs/Songs';
import { getSongs } from '../../../services/getArtistsDeetsApi';

export default class SongContainer extends Component {
  static propTypes = {
    match: PropTypes.object
  }

  state = {
    songsArray: [],
    loading: true,
    error: null
  }

  fetchSongs = () => {
    return getSongs(this.props.match.params.releaseId)
      .then(({ songs }) => {
        this.setState({
          songsArray: songs,
          loading: false
        });
      })
      .catch(err => this.setState({
        error: err,
        loading: true
      }));
  }

  componentDidMount() {
    this.fetchSongs();
  }

  render() {
    const { songsArray, error, loading } = this.state;

    if(error) return <h1>Unable to load releases...</h1>;
    if(loading) return <img alt='gif of someone listening to music' src='https://media.tenor.com/images/23110dfb65a7f1e3a52a02c41dcc7d2d/tenor.gif'/>;
    
    return (
      <Songs artistName={this.props.match.params.artistName} songsArray={songsArray} />
    );
  }
}
