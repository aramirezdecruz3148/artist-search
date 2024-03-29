import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Songs from '../../songs/Songs';
import { getSongs } from '../../../services/getArtistsDeetsApi';
import Nav from '../nav/Nav';
import styles from './SongContainer.css';

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
      <div className={styles.songContainer}>
        <Nav />
        <h3 className={styles.titleh3}>Sorry,&nbsp;&nbsp; the&nbsp;&nbsp; songs&nbsp;&nbsp; are&nbsp;&nbsp; not&nbsp;&nbsp; available&nbsp;&nbsp; for&nbsp;&nbsp; this&nbsp;&nbsp; release,&nbsp;&nbsp; why&nbsp;&nbsp; not&nbsp;&nbsp; try&nbsp;&nbsp; another?</h3>
        <img alt='gif of someone listening to music' src='https://media.tenor.com/images/23110dfb65a7f1e3a52a02c41dcc7d2d/tenor.gif'/>
      </div>
    );
    if(loading) return (
      <div className={styles.songContainer}>
        <img alt='gif of someone listening to music' src='https://media.tenor.com/images/23110dfb65a7f1e3a52a02c41dcc7d2d/tenor.gif'/>
      </div>
    );

    return (
      <>
        <h2 className={styles.songContainerh2}>Songs&nbsp;&nbsp; from&nbsp;&nbsp; <em>{this.props.match.params.releaseTitle}</em>&nbsp;&nbsp; by {this.props.match.params.artistName}</h2>
        <Nav />
        <Songs artistName={this.props.match.params.artistName} songsArray={songsArray} />
      </>
    );
  }
}
