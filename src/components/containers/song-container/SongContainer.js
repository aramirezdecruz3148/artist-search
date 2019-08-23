import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Songs from '../../songs/Songs';
import { getSongs } from '../../../services/getArtistsDeetsApi';
import Nav from '../nav/Nav';

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

    if(error) return (
      <>
        <Nav />
        <h3>Sorry, the songs are not available for this release, why not try another?</h3>
        <img alt='gif of someone listening to music' src='https://media.tenor.com/images/23110dfb65a7f1e3a52a02c41dcc7d2d/tenor.gif'/>
      </>
    );
    if(loading) return <img alt='gif of someone listening to music' src='https://media.tenor.com/images/23110dfb65a7f1e3a52a02c41dcc7d2d/tenor.gif'/>;

    return (
      <>
        <h2>Songs by {this.props.match.params.artistName}</h2>
        <Nav />
        <Songs artistName={this.props.match.params.artistName} songsArray={songsArray} />
      </>
    );
  }
}
