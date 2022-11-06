import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { getProducts } from '../../api/api';
import Product from '../../components/Product/Product';
import classes from './Products.module.scss';

const Products = () => {
  const loaderData = useLoaderData();

  return (
    <div className={classes.products}>
      <div className={classes.banner}>
        <h1>Products</h1>
      </div>
      <div className={classes.main}>
        <div className={classes.filters}>
          <div className={classes['filter-position']}>
            <h3>Filter Position</h3>
            <div className={classes['filter-position-controls']}>
              <input type="radio" name="position" id="asc" />
              <label htmlFor="asc">Asceding</label>
            </div>
            <div className={classes['filter-position-controls']}>
              <input type="radio" name="category" id="desc" />
              <label htmlFor="desc">Decending</label>
            </div>
          </div>
          <div className={classes['filter-category']}>
            <h3>Filter Category</h3>
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
            <h3>Filter Price</h3>
            <div className={classes['filter-price-controls']}>
              <input type="range" name="price" id="price" min={0} max={1000} />
            </div>
          </div>
        </div>
        <div className={classes.items}>
          {loaderData.map(item => (
            <Product key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;

export const loader = () => {
  return getProducts();
};
