import React from 'react';
import PropTypes from 'prop-types';
import Product from '../Product/Product';

import classes from './FeaturedProducts.module.scss';

const FeaturedProducts = ({ data }) => {
  return (
    <section className={classes['featured-products']}>
      <h1 className="main-heading">Featured Products</h1>
      <div className={classes.products}>
        {data.map(product => (
          <Product
            key={product.id}
            id={product.id}
            title={product.title}
            category={product.category}
            image={product.image}
            price={product.price}
            rate={product.rating.rate}
            count={product.rating.count}
            customURL={`/products/${product.category.replaceAll(' ', '-')}/${
              product.id
            }`}
          />
        ))}
      </div>
    </section>
  );
};

FeaturedProducts.propTypes = {
  data: PropTypes.array,
};

export default FeaturedProducts;
