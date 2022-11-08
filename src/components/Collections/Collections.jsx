import React from 'react';
import { Link } from 'react-router-dom';
import Product from '../Product/Product';
import { menBanner, womenBanner } from '../../assets';
import classes from './Collections.module.scss';

const Collections = ({ data }) => {
  const { men, women } = data;

  console.log(men);

  const menProducts = men.map((product, index) => {
    if (index >= 2) return;
    return (
      <Product
        key={product.id}
        {...product}
        rate={product.rating.rate}
        count={product.rating.count}
      />
    );
  });

  const womenProducts = women.map((product, index) => {
    if (index >= 2) return;
    return (
      <Product
        key={product.id}
        {...product}
        rate={product.rating.rate}
        count={product.rating.count}
      />
    );
  });

  return (
    <section className={classes.collections}>
      <div className={classes['women-products']}>{womenProducts}</div>
      <div className={classes['women-banner']}>
        <img src={womenBanner} alt="women banner" />
        <div className={classes['banner-content']}>
          <h1>{"Women's Clothing"}</h1>
          <p>{"Check out this week's hottest styles."}</p>
          <Link to={'/products'} className="btn">
            Show Now
          </Link>
        </div>
      </div>
      <div className={classes['men-banner']}>
        <img src={menBanner} alt="men banner" />
        <div className={classes['banner-content']}>
          <h1>{"Men's Clothing"}</h1>
          <p>{"Check out this week's hottest styles."}</p>
          <Link to={'/products'} className="btn">
            Show Now
          </Link>
        </div>
      </div>
      <div className={classes['men-products']}>{menProducts}</div>
    </section>
  );
};

export default Collections;
