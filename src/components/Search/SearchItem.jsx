import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { toggleSearchBar } from '../../store/ui-slice';

import classes from './SearchItem.module.scss';

const SearchItem = ({ id, title, image, category }) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const imageLoaded = event => {
    console.log(event);
    setIsLoading(false);
  };
  return (
    <Link
      to={`products/${category.replaceAll(' ', '-')}/${id}`}
      onClick={() => dispatch(toggleSearchBar())}
    >
      <li className={classes['suggestions-item']} title={title}>
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
          <h2>{!isLoading && title}</h2>
          <h3>{!isLoading && category}</h3>
        </div>
      </li>
    </Link>
  );
};

export default React.memo(SearchItem);
