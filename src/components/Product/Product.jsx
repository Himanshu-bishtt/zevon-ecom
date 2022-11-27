import React, { useEffect, useState } from 'react';
import PropType from 'prop-types';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { add, remove } from '../../store/wishlist-slice';
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
  const { items: wishlistItems } = useSelector(store => store.wishlist);
  const [wishlist, setWishlist] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    wishlistItems.forEach(item => {
      if (item.id === id) setWishlist(true);
    });
  }, [wishlistItems]);

  const wishlistHandler = () => {
    if (wishlist) dispatch(remove(id));
    else dispatch(add({ id, title, price, image, category }));
    setWishlist(prev => !prev);
  };

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
        <h2 className={classes.price}>
          Price: <span>${price}</span>
        </h2>

        <div className={classes.rating}>
          <p className={classes.stars}>{rate} ⭐</p>
          <p className={classes.count}>({count})</p>
        </div>
      </div>
      {rate >= 4 && <p className={classes.ratingBadge}>Top Rated</p>}
      <button
        className={`${classes.wishlist} ${
          wishlist ? classes['wishlist-active'] : ''
        }`}
        title="Wishlist this item"
        onClick={wishlistHandler}
      >
        <WishlistIcon />
      </button>
    </div>
  );
};

Product.propTypes = {
  id: PropType.number,
  title: PropType.string,
  price: PropType.number,
  image: PropType.string,
  category: PropType.string,
  rate: PropType.number,
  count: PropType.number,
  customURL: PropType.string,
};

export default React.memo(Product);
