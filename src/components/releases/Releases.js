import React from 'react';
import PropTypes from 'prop-types';
import Release from './release';

function Releases({ releaseArray }) {
  const releaseList = releaseArray.map(({ releaseId, releaseDate, releaseTitle }) => (
    <li key={releaseId}>
      <Release 
        releaseId={releaseId}
        releaseDate={releaseDate}
        releaseTitle={releaseTitle}
      />
    </li>
  ));
  return (
    <ul>
      {releaseList}
    </ul>
  );
}

Releases.propTypes = {
  releaseArray: PropTypes.arrayOf(PropTypes.shape({
    releaseId: PropTypes.string.isRequired,
    releaseTitle: PropTypes.string.isRequired,
    releaseDate: PropTypes.string
  })).isRequired
};

export default Releases;
