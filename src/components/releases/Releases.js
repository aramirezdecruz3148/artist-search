import React from 'react';
import PropTypes from 'prop-types';
import Release from './Release';
import placeholderImage from '../../assets/CoverPlaceholder.png';
import styles from './Releases.css';

function Releases({ releaseArray, artistName }) {
  const releaseList = releaseArray.map(({ releaseId, releaseDate, releaseTitle, coverArtCount }) => (
    <li key={releaseId}>
      <Release 
        releaseId={releaseId}
        releaseCover={coverArtCount ? `http://coverartarchive.org/release/${releaseId}/front-250` : placeholderImage }
        releaseDate={releaseDate}
        releaseTitle={releaseTitle}
        artistName={artistName}
      />
    </li>
  ));
  return (
    <ul className={styles.releases}>
      {releaseList}
    </ul>
  );
}

Releases.propTypes = {
  releaseArray: PropTypes.arrayOf(PropTypes.shape({
    releaseId: PropTypes.string.isRequired,
    releaseTitle: PropTypes.string.isRequired,
    releaseDate: PropTypes.string.isRequired,
    coverArtCount: PropTypes.bool.isRequired
  })).isRequired,
  artistName: PropTypes.string.isRequired
};

export default Releases;
