import React from 'react';
import PropTypes from 'prop-types';

function Artist({ artistName, artistDeets }) {
  return (
    <>
      <h3>{artistName}</h3>
      <p>{artistDeets}</p>
    </>
  );
}

Artist.propTypes = {
  artistName: PropTypes.string.isRequired,
  artistDeets: PropTypes.string.isRequired
};

export default Artist;
