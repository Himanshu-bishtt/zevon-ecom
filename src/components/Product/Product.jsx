import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Product.module.scss';

const Product = ({
  id,
  title,
  price,
  image,
  category,
  rate,
  count,
  customURL = id.toString(),
}) => {
  return (
    <Link to={customURL}>
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
          <h2 className={classes.price}>${price}</h2>

          <div className={classes.rating}>
            <p className={classes.stars}>{rate} ⭐</p>
            <p className={classes.count}>({count})</p>
          </div>
        </div>
        {rate >= 4 && <p className={classes.ratingBadge}>Top Rated</p>}
      </div>
    </Link>
  );
};

export default React.memo(Product);
