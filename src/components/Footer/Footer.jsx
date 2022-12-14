import React from 'react';

import classes from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <h3>
        Created with ❤️ by{' '}
        <a href="https://himanshuu.netlify.app">Himanshu Bisht</a>
      </h3>
    </footer>
  );
};

export default Footer;
