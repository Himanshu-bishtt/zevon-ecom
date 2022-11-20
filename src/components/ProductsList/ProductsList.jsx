import React, { useState } from 'react';
import PropType from 'prop-types';
import Product from '../Product/Product';

import classes from './ProductsList.module.scss';

const ProductsList = ({ products }) => {
  const [defaultValue, setDefaultValue] = useState('');
  return (
    <div className={classes.productList}>
      <div className={classes.top}>
        <h1 className={`main-heading ${classes.heading}`}>
          Total <span>{products.length}</span> products
        </h1>

        <select
          name="sort"
          id="sort"
          defaultValue={defaultValue}
          className={classes.dropdown}
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
