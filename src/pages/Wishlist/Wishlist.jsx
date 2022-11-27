import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import classes from './Wishlist.module.scss';
import { Link } from 'react-router-dom';

const WishlistItem = ({ id, title, image, category, price }) => {
  return (
    <Link to={`/products/${category.replaceAll(' ', '-')}/${id}`}>
      <li className={classes.item}>
        <img src={image} className={`${classes.image} skeleton-loader`} />
        <div className={classes['item-content']}>
          <h2>{title}</h2>
          <h3>{category}</h3>
        </div>
        <div className={classes.price}>${price}</div>
      </li>
    </Link>
  );
};

WishlistItem.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  image: PropTypes.string,
  category: PropTypes.string,
  price: PropTypes.number,
};

const Wishlist = () => {
  const { isLoggedIn } = useSelector(store => store.auth);
  const { items } = useSelector(store => store.wishlist);

  return (
    <div className={classes.wishlist}>
      {isLoggedIn ? (
        <>
          <h1 className="main-heading">Your wishlist</h1>
          {items.length === 0 ? (
            <h3>No items</h3>
          ) : (
            <ul>
              {items.map(item => (
                <WishlistItem key={item.id} {...item} />
              ))}
            </ul>
          )}
        </>
      ) : (
        <h1 className="main-heading">{"You're not logged in!"}</h1>
      )}
    </div>
  );
};

export default Wishlist;
