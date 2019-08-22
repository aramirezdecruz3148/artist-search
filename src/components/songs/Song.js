import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Song({ songTitle, artistName }) {
  return (
    <>
      <Link to={`/lyrics/${artistName}/${songTitle}`}><h3>{songTitle}</h3></Link>
    </>
  );
}

Song.propTypes = {
  songTitle: PropTypes.string.isRequired,
  artistName: PropTypes.string.isRequired
};

export default Song;
