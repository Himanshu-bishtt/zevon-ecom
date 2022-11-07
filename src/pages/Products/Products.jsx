import React, { Suspense, useState } from 'react';
import { defer, useLoaderData, Await } from 'react-router-dom';
import { getProducts } from '../../api/api';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import Product from '../../components/Product/Product';
import classes from './Products.module.scss';

const Products = () => {
  const loaderData = useLoaderData();

  const [priceSliderValue, setPriceSliderValue] = useState(0);

  const priceRangeHandler = event => {
    setPriceSliderValue(event.nativeEvent.target.value);
  };

  return (
    <div className={classes.products}>
      <div className={classes.banner}>
        <h1>Products</h1>
      </div>
      <div className={classes.main}>
        <div className={classes.filters}>
          <div className={classes['filter-position']}>
            <h3>Position</h3>
            <div className={classes['filter-position-controls']}>
              <input type="radio" name="position" id="asc" />
              <label htmlFor="asc">Asceding</label>
            </div>
            <div className={classes['filter-position-controls']}>
              <input type="radio" name="position" id="desc" />
              <label htmlFor="desc">Decending</label>
            </div>
          </div>
          <div className={classes['filter-category']}>
            <h3>Category</h3>
            <div className={classes['filter-category-controls']}>
              <input type="radio" name="category" id="all" />
              <label htmlFor="all">All</label>
            </div>
            <div className={classes['filter-category-controls']}>
              <input type="radio" name="category" id="men" />
              <label htmlFor="men">Men</label>
            </div>
            <div className={classes['filter-category-controls']}>
              <input type="radio" name="category" id="women" />
              <label htmlFor="women">Women</label>
            </div>
            <div className={classes['filter-category-controls']}>
              <input type="radio" name="category" id="electronics" />
              <label htmlFor="electronics">Electronics</label>
            </div>
            <div className={classes['filter-category-controls']}>
              <input type="radio" name="category" id="jewellery" />
              <label htmlFor="jewellery">Jewellery</label>
            </div>
          </div>

          <div className={classes['filter-price']}>
            <h3>Price</h3>
            <div className={classes['filter-price-controls']}>
              <input
                type="range"
                name="price"
                id="price"
                min={0}
                max={1000}
                onChange={priceRangeHandler}
                value={priceSliderValue}
              />
              <input
                value={`$${Number(priceSliderValue).toFixed(2)}`}
                type="text"
                readOnly
                className={classes['filter-price-value']}
              />
            </div>
          </div>
        </div>
        <div className={classes.items}>
          <Suspense fallback={<LoadingSpinner />}>
            <Await
              resolve={loaderData.products}
              errorElement={<h1>Some error occurred while loading data</h1>}
            >
              {resolveProducts =>
                resolveProducts.map(item => (
                  <Product
                    key={item.id}
                    {...item}
                    rate={item.rating.rate}
                    count={item.rating.count}
                  />
                ))
              }
            </Await>
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default Products;

export const loader = () => {
  return defer({ products: getProducts() });
};
