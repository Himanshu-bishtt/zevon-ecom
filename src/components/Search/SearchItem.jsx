import React, { useState } from 'react';

import classes from './SearchItem.module.scss';

const SearchItem = ({ id, title, image, category, onClick }) => {
  const [isLoading, setIsLoading] = useState(true);
  const imageLoaded = event => {
    console.log(event);
    setIsLoading(false);
  };
  return (
    <li
      className={classes['suggestions-item']}
      title={title}
      onClick={() => onClick(id)}
    >
      <img
        src={image}
        alt={title}
        className={isLoading ? 'skeleton-loader' : ''}
        onLoad={imageLoaded}
      />
      <div
        style={{ width: '80%' }}
        className={isLoading ? 'skeleton-loader' : ''}
      >
        <h2>{title}</h2>
        <h3>{category}</h3>
      </div>
    </li>
  );
};

export default React.memo(SearchItem);
