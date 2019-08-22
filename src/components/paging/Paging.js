import React from 'react';
import PropTypes from 'prop-types';

function Paging({ 
  onClickPrevious, 
  onClickNext, 
  disableNext, 
  disablePrev,
  currentPage,
  totalPages 
}) {
  return (
    <span>
      <button onClick={onClickPrevious} disabled={disablePrev}>⇦</button>
      <p>Page {currentPage} of {totalPages}</p>
      <button onClick={onClickNext} disabled={disableNext}>⇨</button>
    </span>
  );
}

Paging.propTypes = {
  onClickPrevious: PropTypes.func.isRequired,
  onClickNext: PropTypes.func.isRequired,
  disableNext: PropTypes.any.isRequired,
  disablePrev: PropTypes.any.isRequired,
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired
};

export default Paging;
