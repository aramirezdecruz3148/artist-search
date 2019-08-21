import React from 'react';
import PropTypes from 'prop-types';

function SearchArtist({ artist, onInputChange, onButtonClick }) {
  return (
    <>
      <input type='text' name='artist' value={artist} onChange={onInputChange} />
      <button onClick={onButtonClick}>Search</button>
    </>
  );
}

SearchArtist.propTypes = {
  artist: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onButtonClick: PropTypes.func.isRequired
};

export default SearchArtist;
