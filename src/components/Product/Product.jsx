import React from 'react';
import classes from './Product.module.scss';

const Product = ({ title, price, image, category, rate, count }) => {
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
        <p className={classes.price}>${price}</p>

        <div className={classes.rating}>
          <p className={classes.stars}>{rate} ⭐</p>
          <p className={classes.count}>({count})</p>
        </div>
      </div>
      {rate >= 4 && <p className={classes.ratingBadge}>Top Rated</p>}
    </div>
  );
};

export default React.memo(Product);
