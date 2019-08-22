import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Artist({ 
  artistId,
  artistName, 
  artistDeets = 'No details available for this artist' 
}) {
  return (
    <>
      <Link to={`/releases/${artistName}/${artistId}`}><h3>{artistName}</h3></Link> 
      <p>{artistDeets}</p>
    </>
  );
}

Artist.propTypes = {
  artistId: PropTypes.string.isRequired,
  artistName: PropTypes.string.isRequired,
  artistDeets: PropTypes.string
};

export default Artist;
