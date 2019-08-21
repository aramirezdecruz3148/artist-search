import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Artist({ 
  artistName, 
  artistDeets = 'No details available for this artist' 
}) {
  return (
    <>
      <Link to='/releases'><h3>{artistName}</h3></Link> 
      <p>{artistDeets}</p>
    </>
  );
}

Artist.propTypes = {
  artistName: PropTypes.string.isRequired,
  artistDeets: PropTypes.string
};

export default Artist;
