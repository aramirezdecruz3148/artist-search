import React from 'react';
import PropTypes from 'prop-types';
// import placeholder from '../../assets/CoverPlaceholder.png';

function Release({ releaseId, releaseTitle, releaseDate = 'unknown' }) {
  return (
    <>
      <img src={`http://coverartarchive.org/release/${releaseId}/front`} />
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
