import React from 'react';
import { Link } from 'react-router-dom';

import { pageNotFound } from '../../assets';
import classes from './PageNotFound.module.scss';

const PageNotFound = () => {
  return (
    <section className={classes.pageNotFound}>
      <img
        className={classes.image}
        src={pageNotFound}
        alt="page not found gif"
      />
      <div className={classes.content}>
        <h1>{"Looks like you're lost"}</h1>
        <p>the page you are looking for is not available!</p>
        <Link to={'/'} className="btn">
          Go to home
        </Link>
      </div>
    </section>
  );
};

export default PageNotFound;
