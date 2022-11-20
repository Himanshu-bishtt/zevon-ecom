import React from 'react';
import PropType from 'prop-types';
import Product from '../Product/Product';

import classes from './ProductsList.module.scss';

const ProductsList = ({ products }) => {
  return (
    <div className={classes.productList}>
      <h1 className={`main-heading ${classes.heading}`}>
        Total <span>{products.length}</span> products
      </h1>
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
