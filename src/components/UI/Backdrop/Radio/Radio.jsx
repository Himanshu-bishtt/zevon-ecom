import React from 'react';
import PropTypes from 'prop-types';

import classes from './Radio.module.scss';

const Radio = ({
  type,
  name,
  id,
  value,
  checked = false,
  htmlFor,
  onChange,
}) => {
  return (
    <div className={classes['filter-category-controls']}>
      <input
        type={type}
        name={name}
        id={id}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor={htmlFor}>{htmlFor}</label>
    </div>
  );
};

Radio.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  value: PropTypes.string,
  checked: PropTypes.bool,
  htmlFor: PropTypes.string,
  onChange: PropTypes.func,
};

export default Radio;
