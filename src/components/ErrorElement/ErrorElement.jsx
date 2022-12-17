import React from 'react';
import PropTypes from 'prop-types';
import classes from './ErrorElement.module.scss';

const ErrorElement = ({ message = 'Some error occurred!' }) => {
  return <div className={classes.error}>⚠️ {message}</div>;
};

ErrorElement.propTypes = {
  message: PropTypes.string,
};

export default ErrorElement;
