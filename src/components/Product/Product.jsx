/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import { WishlistIcon } from '../../icons';
import classes from './Product.module.scss';

const Product = ({
  id,
  title,
  price,
  image,
  category,
  rate,
  count,
  customURL = `${category.replaceAll(' ', '-')}/${id.toString()}`,
}) => {
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
          <Link to={customURL}>
            <h2 title={title}>{title}</h2>
          </Link>
        </div>
        <h2 className={classes.price}>${price}</h2>

        <div className={classes.rating}>
          <p className={classes.stars}>{rate} ⭐</p>
          <p className={classes.count}>({count})</p>
        </div>
      </div>
      {rate >= 4 && <p className={classes.ratingBadge}>Top Rated</p>}
      <button className={classes.wishlist} title="Wishlist this item">
        <WishlistIcon />
      </button>
    </div>
  );
};

export default React.memo(Product);
