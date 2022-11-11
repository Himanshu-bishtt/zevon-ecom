import React from 'react';

import classes from './SearchItem.module.css';

const SearchItem = ({ id, title, image, category, onClick }) => {
  return (
    <li
      className={classes['suggestions-item']}
      title={title}
      onClick={() => onClick(id)}
    >
      <img src={image} alt={title} className="skeleton-loader" />
      <div style={{ width: '80%' }}>
        <h2 className={classes.title}>{title}</h2>
        <h3 className={classes.category}>{category}</h3>
      </div>
    </li>
  );
};

export default React.memo(SearchItem);
