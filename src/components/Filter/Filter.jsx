import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({ filter, changeFilter }) => {
  return (
    <>
      <p>Find contact by name</p>
      <input type="text" name="filter" value={filter} onChange={changeFilter} />
    </>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
};

export default Filter;
