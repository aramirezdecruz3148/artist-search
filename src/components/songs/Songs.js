import React from 'react';
import PropTypes from 'prop-types';
import Song from './Song';

function Songs({ songId, songsArray }) {
  const songList = songsArray.map(({ songTitle }) => (
    <li key={songId}>
      <Song 
        songTitle={songTitle}
      />
    </li>
  ));

  return (
    <ul>
      {songList}
    </ul>
  );
}

Songs.propTypes = {
  songsArray: PropTypes.arrayOf(PropTypes.shape({
    songTitle: PropTypes.string.isRequired
  })).isRequired,
  songId: PropTypes.string.isRequired
};

export default Songs;
