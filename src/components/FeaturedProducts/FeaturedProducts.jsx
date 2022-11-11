import React from 'react';
import Product from '../Product/Product';

import classes from './FeaturedProducts.module.scss';

const FeaturedProducts = ({ data }) => {
  return (
    <div className={classes['featured-products']}>
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
    </div>
  );
};

export default FeaturedProducts;
