import React from 'react';
import { createPortal } from 'react-dom';

import classes from './Backdrop.module.scss';

const Backdrop = () => {
  return createPortal(
    <div className={classes.backdrop}></div>,
    document.getElementById('backdrop')
  );
};

export default Backdrop;
