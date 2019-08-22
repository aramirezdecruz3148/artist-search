import React from 'react';
import PropTypes from 'prop-types';

function Song({ songTitle }) {
  return (
    <>
      <h3>{songTitle}</h3>
    </>
  );
}

Song.propTypes = {
  songTitle: PropTypes.string.isRequired
};

export default Song;
