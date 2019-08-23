import React from 'react';
import PropTypes from 'prop-types';
import styles from './Lyrics.css';

function Lyrics({ title, lyrics, artistName }) {
  return (
    <section>
      <h3 className={styles.lyricsh3}>Lyrics &nbsp;&nbsp;for &nbsp;&nbsp;<em>{title}</em>&nbsp;&nbsp;&nbsp; by &nbsp;{artistName}</h3>
      <pre className={styles.lyricspre}>{lyrics}</pre>
    </section>
  );
}

Lyrics.propTypes = {
  title: PropTypes.string.isRequired,
  lyrics: PropTypes.string.isRequired,
  artistName: PropTypes.string.isRequired
};

export default Lyrics;
