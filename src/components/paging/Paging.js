import React from 'react';
import PropTypes from 'prop-types';

function Paging({ onClickPrevious, onClickNext }) {
  return (
    <span>
      <button onClick={onClickPrevious}>⇦</button>
      <button onClick={onClickNext}>⇨</button>
    </span>
  );
}

Paging.propTypes = {
  onClickPrevious: PropTypes.func.isRequired,
  onClickNext: PropTypes.func.isRequired
};

export default Paging;
