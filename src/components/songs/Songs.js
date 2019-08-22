import React from 'react';
import PropTypes from 'prop-types';
import Song from './Song';

function Songs({ songsArray }) {
  const songList = songsArray.map(({ songTitle, songId }) => (
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
    songTitle: PropTypes.string.isRequired,
    songId: PropTypes.string
  })).isRequired
};

export default Songs;
