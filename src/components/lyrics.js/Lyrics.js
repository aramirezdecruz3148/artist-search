import React from 'react';
import PropTypes from 'prop-types';

function Lyrics({ title, lyrics }) {
  return (
    <section>
      <h3>{title}</h3>
      <pre>{lyrics}</pre>
    </section>
  );
}

Lyrics.propTypes = {
  title: PropTypes.string.isRequired,
  lyrics: PropTypes.string.isRequired
};

export default Lyrics;
