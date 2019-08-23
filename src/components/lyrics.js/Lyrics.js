import React from 'react';
import PropTypes from 'prop-types';

function Lyrics({ title, lyrics, artistName }) {
  return (
    <section>
      <h3>Lyrics for {title} by {artistName}</h3>
      <pre>{lyrics}</pre>
    </section>
  );
}

Lyrics.propTypes = {
  title: PropTypes.string.isRequired,
  lyrics: PropTypes.string.isRequired,
  artistName: PropTypes.string.isRequired
};

export default Lyrics;
