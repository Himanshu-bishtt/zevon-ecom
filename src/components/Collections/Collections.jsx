import React, { Suspense } from 'react';
import { Link, Await, defer, useLoaderData } from 'react-router-dom';
import Product from '../Product/Product';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import { getCategoryProducts } from '../../api/api';

import { menBanner, womenBanner } from '../../assets';
import classes from './Collections.module.scss';

const Collections = () => {
  const loaderData = useLoaderData();

  return (
    <section className={classes.collections}>
      <div className={classes['women-products']}>
        <Suspense fallback={<LoadingSpinner />}>
          <Await
            resolve={loaderData.women}
            errorElement={<h1>Error loading category products</h1>}
          >
            {resolvedData =>
              resolvedData.map(
                (product, index) =>
                  index < 2 && (
                    <Product
                      key={product.id}
                      {...product}
                      rate={product.rating.rate}
                      count={product.rating.count}
                      customURL={`products/${product.category.replaceAll(
                        ' ',
                        '-'
                      )}/${product.id.toString()}`}
                    />
                  )
              )
            }
          </Await>
        </Suspense>
      </div>
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
      <div className={classes['men-products']}>
        <Suspense fallback={<LoadingSpinner />}>
          <Await
            resolve={loaderData.men}
            errorElement={<h1>Error loading category products</h1>}
          >
            {resolvedData =>
              resolvedData.map(
                (product, index) =>
                  index < 2 && (
                    <Product
                      key={product.id}
                      {...product}
                      rate={product.rating.rate}
                      count={product.rating.count}
                      customURL={`products/${product.category.replaceAll(
                        ' ',
                        '-'
                      )}/${product.id.toString()}`}
                    />
                  )
              )
            }
          </Await>
        </Suspense>
      </div>
    </section>
  );
};

export default Collections;

export const loader = () => {
  return defer({
    men: getCategoryProducts("men's clothing"),
    women: getCategoryProducts("women's clothing"),
  });
};
