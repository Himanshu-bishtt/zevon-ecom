import React, { Suspense, useState } from 'react';
import { Await, defer, useLoaderData } from 'react-router-dom';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import { getProduct } from '../../api/api';
import { Icons, WishlistIcon } from '../../icons';

import classes from './ProductDetail.module.scss';

const ProductDetail = () => {
  const [quantity, setQuantity] = useState(1);
  const loaderData = useLoaderData();

  console.log(loaderData);

  const quantityIncreaseHandler = () => {
    if (quantity === 10) return;
    setQuantity(prev => prev + 1);
  };

  const quantityDecreaseHandler = () => {
    if (quantity === 1) return;
    setQuantity(prev => prev - 1);
  };

  const renderProductDetail = data => (
    <div className={classes.product}>
      <img className={`${classes.image}`} src={data.image} />
      <div className={classes.content}>
        <h2 className={classes.category}>{data.category}</h2>
        <h1 className={classes.heading}>{data.title}</h1>
        <div className={classes.rating}>
          <p className={classes.stars}>{data.rating.rate} ⭐</p>
          <p className={classes.count}>({data.rating.count})</p>
        </div>

        <h2 className={classes.price}>${Number(data.price).toFixed(2)}</h2>
        <p className={classes.description}>{data.description}</p>

        <div className={classes['other-info']}>
          <p>
            ID: <span>{data.id}</span>
          </p>
          <p>
            Category: <span>{data.category}</span>
          </p>
        </div>

        <div className={classes.actions}>
          <div className={classes.quantity}>
            <button type="button" onClick={quantityDecreaseHandler}>
              <svg>
                <use href={`${Icons}#icon-minus`} />
              </svg>
            </button>
            <p>{quantity}</p>
            <button type="button" onClick={quantityIncreaseHandler}>
              <svg>
                <use href={`${Icons}#icon-plus`} />
              </svg>
            </button>
          </div>
          <button className={classes.buy} type="button">
            <svg>
              <use href={`${Icons}#icon-shopping-cart`} />
            </svg>
            Buy Now
          </button>
          <button className={classes.wishlist} title="Wishlist this item">
            <WishlistIcon />
            Wishlist
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Await
        resolve={loaderData.product}
        errorElement={<h1>Some error occurred while loading the product</h1>}
      >
        {resolvedData => renderProductDetail(resolvedData)}
      </Await>
    </Suspense>
  );
};

export default ProductDetail;

export const loader = ({ params }) => {
  return defer({ product: getProduct(params.id) });
};
