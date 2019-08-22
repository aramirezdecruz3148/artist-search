import React from 'react';
import PropTypes from 'prop-types';
import Release from './Release';
import placeholderImage from '../../assets/CoverPlaceholder.png';

function Releases({ releaseArray }) {
  const releaseList = releaseArray.map(({ releaseId, releaseDate, releaseTitle, coverArtCount }) => (
    <li key={releaseId}>
      <Release 
        releaseId={releaseId}
        releaseCover={coverArtCount ? `http://coverartarchive.org/release/${releaseId}/front` : placeholderImage }
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
    releaseDate: PropTypes.string.isRequired
  })).isRequired,
  coverArtCount: PropTypes.bool
};

export default Releases;
