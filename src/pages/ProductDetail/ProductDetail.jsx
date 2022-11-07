import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { getProduct } from '../../api/api';

import classes from './ProductDetail.module.scss';

const ProductDetail = () => {
  const { id, title, price, description, rating, category, image } =
    useLoaderData();

  return (
    <div className={classes.product}>
      <img className={classes.image} src={image} />
      <div className={classes.content}>
        <h1 className={classes.heading}>{title}</h1>
        <div className={classes.rating}>
          <p className={classes.stars}>{rating.rate} ⭐</p>
          <p className={classes.count}>({rating.count})</p>
        </div>

        <h2 className={classes.price}>${Number(price).toFixed(2)}</h2>
        <p className={classes.description}>{description}</p>

        <div className={classes['other-info']}>
          <p>
            ID: <span>{id}</span>
          </p>
          <p>
            Category: <span>{category}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

export const loader = ({ _, params }) => {
  return getProduct(params.id);
};
