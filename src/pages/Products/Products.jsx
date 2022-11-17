import React, { Suspense } from 'react';
import {
  defer,
  useLoaderData,
  Await,
  useNavigate,
  useLocation,
} from 'react-router-dom';
import { getProducts } from '../../api/api';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import Product from '../../components/Product/Product';
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
  const navigate = useNavigate();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);

  const isSortingAscending = queryParams.get('sort') === 'asc';

  const positionFilterHandler = () => {
    navigate(`?sort=${isSortingAscending ? 'desc' : 'asc'}`);
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
  );

  const filterPrice = (
    <div className={classes['filter-price']}>
      <h3>Price</h3>
      <div className={classes['filter-price-controls']}>
        <input type="radio" name="price" id="under 500" />
        <label htmlFor="under 500">Under $500</label>
      </div>
      <div className={classes['filter-price-controls']}>
        <input type="radio" name="price" id="under 750" />
        <label htmlFor="under 750">Under $750</label>
      </div>
      <div className={classes['filter-price-controls']}>
        <input type="radio" name="price" id="under 1000" />
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
        <div className={classes.items}>
          <Suspense fallback={<LoadingSpinner />}>
            <Await
              resolve={loaderData.products}
              errorElement={<h1>Some error occurred while loading data</h1>}
            >
              {resolveProducts =>
                sortProducts(resolveProducts, isSortingAscending).map(item => (
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
    </>
  );
};

export default Products;

export const loader = () => {
  return defer({ products: getProducts() });
};
