import React from 'react';
import PropTypes from 'prop-types';

function SearchArtist({ artist, onInputChange }) {
  return (
    <>
      <input type='text' name='artist' value={artist} />
      <button onClick={onInputChange}>Search</button>
    </>
  );
}

SearchArtist.propTypes = {
  artist: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired
};

export default SearchArtist;
