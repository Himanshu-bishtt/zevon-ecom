import React, { Suspense } from 'react';
import { defer, useLoaderData, Await, useSearchParams } from 'react-router-dom';
import { getProducts } from '../../api/api';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import ProductsList from '../../components/ProductsList/ProductsList';
import classes from './Products.module.scss';

const sortProducts = (products, ascending) => {
  return products.sort((productA, productB) => {
    if (ascending) {
      return productA.id > productB.id ? 1 : -1;
    } else {
      return productA.id < productB.id ? 1 : -1;
    }
  });
};

const Products = () => {
  const loaderData = useLoaderData();
  let [searchParams, setSearchParams] = useSearchParams();

  const isSortingAscending = searchParams.get('sort') === 'asc';

  const positionFilterHandler = () => {
    setSearchParams({ sort: isSortingAscending ? 'desc' : 'asc' });
  };

  const cateryFilterHandler = event => {
    console.log(event.target.value);
    setSearchParams({ category: event.target.value });
  };

  const priceFilterHandler = event => {
    setSearchParams({ 'price-below': event.target.value });
  };

  const filterPosition = (
    <div className={classes['filter-position']}>
      <h3>Position</h3>
      <button className={classes.sort} onClick={positionFilterHandler}>
        Sort {isSortingAscending ? 'desc' : 'asc'}
      </button>
    </div>
  );

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
          id="under 750"
          value="750"
          onChange={priceFilterHandler}
        />
        <label htmlFor="under 750">Under $750</label>
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
          {filterPosition}
          {filterCategory}
          {filterPrice}
        </div>
        <Suspense fallback={<LoadingSpinner />}>
          <Await
            resolve={loaderData.products}
            errorElement={<h1>Some error occurred while loading data</h1>}
          >
            {resolveProducts => {
              if (searchParams.has('sort'))
                return (
                  <ProductsList
                    products={sortProducts(resolveProducts, isSortingAscending)}
                  />
                );

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
