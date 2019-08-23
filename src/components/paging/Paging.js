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
    <div>
      <button onClick={onClickPrevious} disabled={disablePrev}>⇦</button>
      <pre>Page {currentPage} of {totalPages}</pre>
      <button onClick={onClickNext} disabled={disableNext}>⇨</button>
    </div>
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
