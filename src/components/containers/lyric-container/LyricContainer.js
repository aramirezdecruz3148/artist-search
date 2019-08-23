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
      <div className={styles.lyricContainer}>
        <Nav />
        <h3 className={styles.titleh3}>Sorry,&nbsp;&nbsp; the&nbsp;&nbsp; lyrics&nbsp;&nbsp; for&nbsp;&nbsp; this&nbsp;&nbsp; song&nbsp;&nbsp; are&nbsp;&nbsp; not&nbsp;&nbsp; available,&nbsp;&nbsp; why&nbsp;&nbsp; not&nbsp;&nbsp; try&nbsp;&nbsp; another?</h3>
        <img alt='gif of someone listening to music' src='https://media.tenor.com/images/23110dfb65a7f1e3a52a02c41dcc7d2d/tenor.gif'/>
      </div>
    );
    if(loading) return (
      <div className={styles.lyricContainer}>
        <img alt='gif of someone listening to music' src='https://media.tenor.com/images/23110dfb65a7f1e3a52a02c41dcc7d2d/tenor.gif'/>
      </div>
    );

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
