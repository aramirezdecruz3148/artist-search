import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Artist.css';

function Artist({ 
  artistId,
  artistName 
}) {
  return (
    <>
      <Link className={styles.link} to={`/releases/${artistName}/${artistId}`}><h3 className={styles.artist}>{artistName}</h3></Link> 
    </>
  );
}

Artist.propTypes = {
  artistId: PropTypes.string.isRequired,
  artistName: PropTypes.string.isRequired,
};

export default Artist;
