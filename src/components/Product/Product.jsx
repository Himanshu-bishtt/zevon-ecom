import React from 'react';
import { PropTypes } from 'prop-types';
import classes from './Product.module.scss';

const Product = ({ title, price, image, category, rating }) => {
  return (
    <div className={classes.product}>
      <img
        src={image}
        className={`${classes.image} skeleton-loader`}
        alt={title}
      />
      <div className={classes.content}>
        <div className={classes.head}>
          <h3>{category}</h3>
          <h2 title={title}>{title}</h2>
        </div>
        <p className={classes.price}>${price} onwards</p>

        <div className={classes.rating}>
          <p className={classes.stars}>{rating.rate} ⭐</p>
          <p className={classes.count}>({rating.count})</p>
        </div>
      </div>
      {rating.rate >= 4 && <p className={classes.ratingBadge}>Top Rated</p>}
    </div>
  );
};

Product.PropTypes = {
  id: PropTypes.string.isRequired,
};

export default React.memo(Product);
