import React, { Suspense } from 'react';
import { defer, useLoaderData, Await, useSearchParams } from 'react-router-dom';
import { getProducts } from '../../api/api';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import ProductsList from '../../components/ProductsList/ProductsList';
import classes from './Products.module.scss';

const Products = () => {
  const loaderData = useLoaderData();
  let [searchParams, setSearchParams] = useSearchParams();

  const cateryFilterHandler = event => {
    setSearchParams({ category: event.target.value });
  };

  const priceFilterHandler = event => {
    setSearchParams({ 'price-below': event.target.value });
  };

  const filterCategory = (
    <div className={classes['filter-category']}>
      <h3>Category</h3>
      <div className={classes['filter-category-controls']}>
        <input
          type="radio"
          name="category"
          id="all"
          value="all"
          onChange={cateryFilterHandler}
        />
        <label htmlFor="all">All</label>
      </div>
      <div className={classes['filter-category-controls']}>
        <input
          type="radio"
          name="category"
          id="men's clothing"
          value="men's clothing"
          onChange={cateryFilterHandler}
        />
        <label htmlFor="men's clothing">{"Men's Clothing"}</label>
      </div>
      <div className={classes['filter-category-controls']}>
        <input
          type="radio"
          name="category"
          id="women's clothing"
          value="women's clothing"
          onChange={cateryFilterHandler}
        />
        <label htmlFor="women's clothing">{"Women's Clothing"}</label>
      </div>
      <div className={classes['filter-category-controls']}>
        <input
          type="radio"
          name="category"
          id="electronics"
          value="electronics"
          onChange={cateryFilterHandler}
        />
        <label htmlFor="electronics">Electronics</label>
      </div>
      <div className={classes['filter-category-controls']}>
        <input
          type="radio"
          name="category"
          id="jewelery"
          value="jewelery"
          onChange={cateryFilterHandler}
        />
        <label htmlFor="jewelery">Jewellery</label>
      </div>
    </div>
  );

  const filterPrice = (
    <div className={classes['filter-price']}>
      <h3>Price</h3>
      <div className={classes['filter-price-controls']}>
        <input
          type="radio"
          name="price"
          id="under 100"
          value="100"
          onChange={priceFilterHandler}
        />
        <label htmlFor="under 100">Under $100</label>
      </div>
      <div className={classes['filter-price-controls']}>
        <input
          type="radio"
          name="price"
          id="under 500"
          value="500"
          onChange={priceFilterHandler}
        />
        <label htmlFor="under 500">Under $500</label>
      </div>
      <div className={classes['filter-price-controls']}>
        <input
          type="radio"
          name="price"
          id="under 1000"
          value="1000"
          onChange={priceFilterHandler}
        />
        <label htmlFor="under 1000">Under $1000</label>
      </div>
    </div>
  );

  return (
    <>
      <div className={classes.banner}>
        <h1>Products</h1>
      </div>
      <div className={classes.main}>
        <div className={classes.filters}>
          {filterCategory}
          {filterPrice}
        </div>
        <Suspense fallback={<LoadingSpinner />}>
          <Await
            resolve={loaderData.products}
            errorElement={<h1>Some error occurred while loading data</h1>}
          >
            {resolveProducts => {
              if (searchParams.has('category')) {
                if (searchParams.get('category') === 'all') {
                  return <ProductsList products={resolveProducts} />;
                }
                const products = resolveProducts.filter(
                  products => products.category === searchParams.get('category')
                );
                return <ProductsList products={products} />;
              }

              if (searchParams.has('price-below')) {
                const price = searchParams.get('price-below');
                const products = resolveProducts.filter(
                  product => product.price <= price
                );

                return <ProductsList products={products} />;
              }

              return <ProductsList products={resolveProducts} />;
            }}
          </Await>
        </Suspense>
      </div>
    </>
  );
};

export default Products;

export const loader = () => {
  return defer({ products: getProducts() });
};
