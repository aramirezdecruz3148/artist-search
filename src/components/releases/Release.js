import React from 'react';
import PropTypes from 'prop-types';

function Release({ releaseId, releaseTitle, releaseDate = 'unknown' }) {
  return (
    <>
      <img src={releaseId} />
      <h3>{releaseTitle}</h3>
      <h5>Release Date: {releaseDate}</h5>
    </>
  );
}

Release.propTypes = {
  releaseId: PropTypes.string.isRequired,
  releaseTitle: PropTypes.string.isRequired,
  releaseDate: PropTypes.string
};

export default Release;
