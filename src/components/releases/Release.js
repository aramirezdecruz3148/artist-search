import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Release({ releaseCover, releaseId, releaseTitle, releaseDate = 'unknown' }) {
  return (
    <>
      <img src={releaseCover} />
      <Link to={`/songs/${releaseId}`}><h3>{releaseTitle}</h3></Link>
      <h5>Release Date: {releaseDate}</h5>
    </>
  );
}

Release.propTypes = {
  releaseId: PropTypes.string.isRequired,
  releaseTitle: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
  releaseCover: PropTypes.string.isRequired
};

export default Release;
