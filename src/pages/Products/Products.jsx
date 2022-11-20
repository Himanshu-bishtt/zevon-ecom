import React, { Suspense } from 'react';
import { defer, useLoaderData, Await, useSearchParams } from 'react-router-dom';
import { getProducts } from '../../api/api';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import ProductsList from '../../components/ProductsList/ProductsList';
import Radio from '../../components/UI/Backdrop/Radio/Radio';
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
      <Radio
        type="radio"
        name="category"
        id="all"
        value="all"
        checked={searchParams.get('category') === 'all' || false}
        htmlFor="all"
        onChange={cateryFilterHandler}
      />
      <Radio
        type="radio"
        name="category"
        id="men's clothing"
        value="men's clothing"
        checked={searchParams.get('category') === "men's clothing" || false}
        htmlFor="men's clothing"
        onChange={cateryFilterHandler}
      />
      <Radio
        type="radio"
        name="category"
        id="women's clothing"
        value="women's clothing"
        checked={searchParams.get('category') === "women's clothing" || false}
        htmlFor="women's clothing"
        onChange={cateryFilterHandler}
      />
      <Radio
        type="radio"
        name="category"
        id="electronics"
        value="electronics"
        checked={searchParams.get('category') === 'electronics' || false}
        htmlFor="electronics"
        onChange={cateryFilterHandler}
      />
      <Radio
        type="radio"
        name="category"
        id="jewelery"
        value="jewelery"
        checked={searchParams.get('category') === 'jewelery' || false}
        htmlFor="jewelery"
        onChange={cateryFilterHandler}
      />
    </div>
  );

  const filterPrice = (
    <div className={classes['filter-price']}>
      <h3>Price</h3>
      <Radio
        type="radio"
        name="price"
        id="under 100"
        value="100"
        checked={searchParams.get('price-below') === '100' || false}
        htmlFor="under 100"
        onChange={priceFilterHandler}
      />
      <Radio
        type="radio"
        name="price"
        id="under 500"
        value="500"
        checked={searchParams.get('price-below') === '500' || false}
        htmlFor="under 500"
        onChange={priceFilterHandler}
      />
      <Radio
        type="radio"
        name="price"
        id="under 1000"
        value="1000"
        checked={searchParams.get('price-below') === '1000' || false}
        htmlFor="under 1000"
        onChange={priceFilterHandler}
      />
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
