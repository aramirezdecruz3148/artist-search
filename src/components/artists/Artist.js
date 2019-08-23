import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Artist({ 
  artistId,
  artistName 
}) {
  return (
    <>
      <Link to={`/releases/${artistName}/${artistId}`}><h3>{artistName}</h3></Link> 
    </>
  );
}

Artist.propTypes = {
  artistId: PropTypes.string.isRequired,
  artistName: PropTypes.string.isRequired,
};

export default Artist;
