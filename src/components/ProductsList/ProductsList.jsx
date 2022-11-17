import React from 'react';
import PropType from 'prop-types';
import Product from '../Product/Product';

import classes from './ProductsList.module.scss';

const ProductsList = ({ products }) => {
  return (
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
  );
};

ProductsList.propTypes = {
  products: PropType.array,
};

export default ProductsList;
