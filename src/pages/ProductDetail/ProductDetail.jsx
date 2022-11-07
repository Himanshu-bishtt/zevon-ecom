import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { getProduct } from '../../api/api';
import { Icons } from '../../icons';

import classes from './ProductDetail.module.scss';

const ProductDetail = () => {
  const { id, title, price, description, rating, category, image } =
    useLoaderData();

  return (
    <div className={classes.product}>
      <img className={`${classes.image}`} src={image} />
      <div className={classes.content}>
        <h2 className={classes.category}>{category}</h2>
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

        <div className={classes.actions}>
          <div className={classes.item}>
            <button>
              <svg>
                <use href={`${Icons}#icon-minus`} />
              </svg>
            </button>
            <p>1</p>
            <button>
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
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

export const loader = ({ _, params }) => {
  return getProduct(params.id);
};
