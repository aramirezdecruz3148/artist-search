import React, { Component } from 'react';
import Lyrics from '../../Lyrics.js/Lyrics';
import PropTypes from 'prop-types';
import { getLyrics } from '../../../services/getArtistsDeetsApi';
import Nav from '../nav/Nav';
import styles from './LyricContainer.css';

export default class LyricContainer extends Component {
  static propTypes = {
    match: PropTypes.object,
  }

  state = {
    lyrics: '',
    loading: true, 
    error: null
  }

  fetchLyrics = () => {
    return getLyrics(
      this.props.match.params.artistName, 
      this.props.match.params.songTitle)
      .then(({ lyrics }) => {
        this.setState({
          lyrics,
          loading: false
        });
      })
      .catch(err => this.setState({
        error: err,
        loading: true
      }));
  }

  componentDidMount() {
    this.fetchLyrics();
  }

  render() {
    const {
      lyrics,
      error,
      loading
    } = this.state;
    
    if(error) return (
      <>
        <Nav />
        <h3>Sorry, the lyrics for this song are not available, why not try another?</h3>
        <img alt='gif of someone listening to music' src='https://media.tenor.com/images/23110dfb65a7f1e3a52a02c41dcc7d2d/tenor.gif'/>
      </>
    );
    if(loading) return <img alt='gif of someone listening to music' src='https://media.tenor.com/images/23110dfb65a7f1e3a52a02c41dcc7d2d/tenor.gif'/>;

    return (
      <div className={styles.lyricContainer}>
        <Nav />
        <Lyrics 
          title={this.props.match.params.songTitle} 
          lyrics={lyrics} 
          artistName={this.props.match.params.artistName}
        />
      </div>
    );
  }
}
