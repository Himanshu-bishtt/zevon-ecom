import React from 'react';
import PropType from 'prop-types';
import Product from '../Product/Product';

import classes from './ProductsList.module.scss';
import { useSearchParams } from 'react-router-dom';

const ProductsList = ({ products }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const sortHandler = event => {
    setSearchParams({ sort: event.target.value });
  };

  switch (searchParams.get('sort')) {
    case 'name':
      products = products.sort((a, b) => (a.title > b.title ? 1 : -1));
      break;
    case 'low':
      products = products.sort((a, b) => (a.price > b.price ? 1 : -1));
      break;
    case 'high':
      products = products.sort((a, b) => (a.price > b.price ? -1 : 1));
      break;
  }

  return (
    <div className={classes.productList}>
      <div className={classes.top}>
        <h1 className={`main-heading ${classes.heading}`}>
          Total <span>{products.length}</span> products
        </h1>

        <select
          name="sort"
          id="sort"
          defaultValue={searchParams.get('sort') ?? ''}
          className={classes.dropdown}
          onChange={sortHandler}
        >
          <option value="" disabled>
            Sort By
          </option>
          <option value="name">Name</option>
          <option value="high">Price High</option>
          <option value="low">Price Low</option>
        </select>
      </div>
      <div className={classes.items}>
        {products.map(product => (
          <Product
            key={product.id}
            {...product}
            rate={product.rating.rate}
            count={product.rating.count}
          />
        ))}
      </div>
    </div>
  );
};

ProductsList.propTypes = {
  products: PropType.array,
};

export default ProductsList;
