import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Song.css';

function Song({ songTitle, artistName }) {
  return (
    <>
      <Link className={styles.songlink} to={`/lyrics/${artistName}/${songTitle}`}><h3 className={styles.song}>{songTitle}</h3></Link>
    </>
  );
}

Song.propTypes = {
  songTitle: PropTypes.string.isRequired,
  artistName: PropTypes.string.isRequired
};

export default Song;
