import React from 'react';
import PropTypes from 'prop-types';
import Artist from './Artist';

function Artists({ artistArray }) {
  const artistList = artistArray.map(({ artistId, artistName, artistDeets }) => (
    <li key={artistId}>
      <Artist
        artistId={artistId}
        artistName={artistName}
        artistDeets={artistDeets}
      />
    </li>
  ));

  return (
    <ul>
      {artistList}
    </ul>
  );
}

Artists.propTypes = {
  artistArray: PropTypes.arrayOf(PropTypes.shape({
    artistId: PropTypes.string.isRequired,
    artistName: PropTypes.string.isRequired,
    artistDeets: PropTypes.string
  })).isRequired
};

export default Artists;
