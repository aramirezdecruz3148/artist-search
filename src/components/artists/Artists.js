import React from 'react';
import PropTypes from 'prop-types';
import Artist from './Artist';
import styles from './Artists.css';

function Artists({ artistArray }) {
  const artistList = artistArray.map(({ artistId, artistName }) => (
    <li key={artistId}>
      <Artist
        artistId={artistId}
        artistName={artistName}
      />
    </li>
  ));

  return (
    <ul className={styles.artists}>
      {artistList}
    </ul>
  );
}

Artists.propTypes = {
  artistArray: PropTypes.arrayOf(PropTypes.shape({
    artistId: PropTypes.string.isRequired,
    artistName: PropTypes.string.isRequired,
  })).isRequired
};

export default Artists;
