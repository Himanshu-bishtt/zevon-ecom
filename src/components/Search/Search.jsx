import React from 'react';
import { Icons } from '../../icons';

import classes from './Search.module.scss';

const Search = () => {
  return (
    //prettier-ignore
    <>
      <form className={classes.search}>
      <svg className={classes.icon}>
        <use href={`${Icons}#icon-search`} />
      </svg>
      <input type="text" placeholder="Enter item to search..." className={classes.input}/>
      <div className={classes.suggestions}></div>
    </form>
    </>
  );
};

export default Search;
